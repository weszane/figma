
import { createActionCreator } from '../905/73481'
import { createModalConfig, registerModal } from '../905/102752'
import { showModalHandler } from '../905/156213'
import { createFontMetadata, removeFontOwnerPrefix } from '../905/165290'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { trackEventAnalytics } from '../905/449184'
import { C as _$$C } from '../905/496700'
import { o as _$$o } from '../905/524481'
import { VisualBellIcon } from '../905/576487'
import { getFeatureFlags } from '../905/601108'
import { adminSettingsFactory } from '../905/662580'
import { sendWithRetry } from '../905/910117'
import { Font } from '../../types/app'
import { SHARED_FONTS_MODAL } from '../figma_app/633080'

// Counter for upload IDs (original: y, $$b0)
let uploadIdCounter = 0

/**
 * Generates a unique upload ID for font uploads.
 * @returns {number} The next upload ID.
 */
export const generateUploadId = () => uploadIdCounter++

// Action creators (original: v, x, S, w, C, T, k, R, P, O, D, L, F, M)
export const startUploadFonts = createActionCreator('START_UPLOAD_FONTS')
export const uploadFontSuccess = createActionCreator('UPLOAD_FONT_SUCCESS')
export const uploadFontFailure = createActionCreator('UPLOAD_FONT_FAILURE')
export const uploadFontWarning = createActionCreator('UPLOAD_FONT_WARNING')
export const uploadFontProgress = createActionCreator('UPLOAD_FONT_PROGRESS')
export const toggleFontsToDelete = createActionCreator('TOGGLE_FONT_TO_DELETE')
export const clearFontsToDelete = createActionCreator('CLEAR_FONTS_TO_DELETE')
export const clearDeleteResult = createActionCreator('CLEAR_DELETE_RESULT')
export const deleteFontComplete = createActionCreator('DELETE_FONT_COMPLETE')
export const dismissFontCollision = createActionCreator('DISMISS_FONT_COLLISION')
export const dismissFontWarning = createActionCreator('DISMISS_FONT_WARNING')
export const updateSharedFontList = createActionCreator('UPDATE_SHARED_FONT_LIST')
export const putSharedFont = createActionCreator('PUT_SHARED_FONT')
export const delSharedFont = createActionCreator('DEL_SHARED_FONT')

// Internal modal registration cache (original: n)
let fontUploadReviewModalType: any | undefined

/**
 * Handles font upload logic, including analytics, progress, and error handling.
 * @param e - Redux-like dispatch context
 * @param t - Upload payload
 */
export const uploadFonts = createOptimistThunk((e, t: any) => {
  // Show importing notification
  e.dispatch(VisualBellActions.enqueue({
    type: 'shared-fonts',
    message: getI18nString('shared_fonts.importing_font_files'),
    icon: VisualBellIcon.SPINNER,
  }))

  // Track analytics
  if (t.overwrite) {
    trackEventAnalytics('shared_fonts_overwrite_collision')
  }
  else {
    trackEventAnalytics('shared_fonts_upload', {
      count: Object.values(t.fonts).length,
    })
  }

  // Dispatch start upload action
  e.dispatch(startUploadFonts(t))

  // Upload each font
  Object.entries(t.fonts).forEach(([fontKey, f]) => {
    const fontFile = f as any
    const params: Record<string, string> = {
      resourceType: t.resourceType,
      resourceId: t.resourceId,
    }
    if (t.overwrite)
      params.overwrite = 'true'
    if (getFeatureFlags().ce_accept_large_font_files)
      params.acceptLargeFontFiles = 'true'

    // Determine content type for font file
    const contentType = (() => {
      const name = fontFile.name.toLowerCase()
      const type = fontFile.type.toLowerCase()
      if (name.endsWith('.otf'))
        return 'font/opentype'
      if (name.endsWith('.ttf'))
        return 'font/ttf'
      if (type === 'font/opentype' || type === 'font/ttf')
        return type
      console.warn(`Encountered unexpected MIME type ${fontFile.type} with file name ${fontFile.name}`)
      return ''
    })()

    // Upload font file
    sendWithRetry.post('/api/upnode/font', fontFile, {
      params,
      headers: {
        ...sendWithRetry.requiredHeaders,
        'content-type': contentType,
      },
      raw: true,
      uploadEvents: {
        [sendWithRetry.Events.PROGRESS]: (event, progressEvent) => {
          const progress = progressEvent.loaded / progressEvent.total
          e.dispatch(uploadFontProgress({
            uploadId: fontKey,
            progress,
          }))
        },
      } as any,
    }).then((response) => {
      // Success: parse metadata and handle collisions
      const meta = JSON.parse(response.data as any).meta
      const fontMeta = createFontMetadata(meta)

      if (t.resourceType === 'org') {
        const collisionMap: Record<string, any> = {}
        const state = e.getState()
        const { fontsByResourceId } = state.sharedFonts

        Object.keys(fontsByResourceId)
          .map(removeFontOwnerPrefix)
          .filter(teamId => state.teams[teamId]?.org_id === t.resourceId)
          .forEach((teamId) => {
            const teamFonts = fontsByResourceId[`team-${teamId}`]?.[fontMeta.family]
            const existingStyles = new Set(Object.keys(teamFonts ?? {}))
            const uploadedStyles = new Set(fontMeta.variationInstances?.map(v => v.name) ?? [fontMeta.style])
            const collisions = new Set([...existingStyles].filter(style => uploadedStyles.has(style)))
            if (collisions.size > 0) {
              collisionMap[fontMeta.id] = collisionMap[fontMeta.id] || { font: fontMeta, collisions: [] }
              collisions.forEach((style) => {
                collisionMap[fontMeta.id].collisions.push(teamFonts[style])
              })
            }
          })

        Object.values(collisionMap).forEach((collision) => {
          e.dispatch(uploadFontWarning(collision))
        })
      }

      e.dispatch(putSharedFont({ font: fontMeta }))
      trackEventAnalytics('shared_fonts_upload_success')
      e.dispatch(uploadFontSuccess({
        resourceId: t.resourceId,
        font: fontMeta,
        filename: fontFile.name,
        uploadId: fontKey,
      }))
      handleUploadCompletion(e.getState(), e.dispatch)
    }).catch((error) => {
      // Error: parse collision info if available
      let collisionInfo
      if (error.data) {
        try {
          const meta = JSON.parse(error.data).meta
          collisionInfo = meta
            ? {
              existing: meta.collision.existing ? createFontMetadata(meta.collision.existing) : undefined,
              uploaded: meta.collision.uploaded,
              overwritten_fonts: meta.collision.overwritten_fonts,
            }
            : undefined
        }
        catch { }
      }

      // Track error analytics
      handleFontUploadErrorAnalytics(error.status, !!collisionInfo)

      // Dispatch failure
      e.dispatch(uploadFontFailure({
        filename: fontFile.name,
        uploadId: fontKey,
        collision: collisionInfo,
        status: error.status,
      }))
      handleUploadCompletion(e.getState(), e.dispatch)
    })
  })
})

/**
 * Handles analytics for font upload errors.
 * @param status - HTTP status code
 * @param hasCollision - Whether collision info is present
 */
function handleFontUploadErrorAnalytics(status: number, hasCollision: boolean) {
  switch (status) {
    case 403:
      trackEventAnalytics('shared_fonts_upload_invalid_permissions')
      break
    case 409:
      trackEventAnalytics('shared_fonts_upload_collision', { canOverwrite: hasCollision })
      break
    case 422:
      trackEventAnalytics('shared_fonts_upload_invalid_font')
      break
    default:
      trackEventAnalytics('shared_fonts_upload_failure', { status })
  }
}

/**
 * Handles completion logic for font uploads, including notifications and modals.
 * @param state - Current sharedFonts state
 * @param dispatch - Dispatch function
 */
function handleUploadCompletion(state, dispatch) {
  const {
    uploadsRemaining,
    successfulUploads,
    uploadsLaunched,
    unsuccessfulUploads,
    collisions,
    warnings,
    modalShown,
  } = state.sharedFonts

  if (Object.keys(uploadsRemaining).length > 0) {
    dispatch(VisualBellActions.enqueue({
      type: 'shared-fonts',
      message: getI18nString('shared_fonts.uploads_remaining', {
        totalFileCount: uploadsLaunched,
        processedFileCount: successfulUploads.length + unsuccessfulUploads.length,
      }),
      icon: VisualBellIcon.SPINNER,
    }))
    return
  }

  if (
    unsuccessfulUploads.length === 0
    && collisions.length === 0
    && warnings.length === 0
  ) {
    dispatch(_$$o())
    dispatch(VisualBellActions.enqueue({
      type: 'shared-fonts',
      message: getI18nString('shared_fonts.import_complete_with_no_errors'),
      icon: VisualBellIcon.CHECK,
    }))
    return
  }

  const isReviewModal
    = modalShown
    && (modalShown.type === SHARED_FONTS_MODAL || modalShown.type === _$$C)

  const errorMessage = getI18nString('shared_fonts.import_complete_with_errors', {
    unsuccessfulUploadCount: unsuccessfulUploads.length,
  })

  if (isReviewModal) {
    dispatch(VisualBellActions.enqueue({
      type: 'shared-fonts',
      message: errorMessage,
      icon: VisualBellIcon.EXCLAMATION,
      error: true,
    }))
  }
  else {
    dispatch(VisualBellActions.enqueue({
      type: 'shared-fonts',
      message: errorMessage,
      icon: VisualBellIcon.EXCLAMATION,
      error: true,
      button: {
        text: getI18nString('shared_fonts.review_font_upload_errors'),
        action: () => {
          fontUploadReviewModalType ??= registerModal(
            adminSettingsFactory.createLazyComponent(
              () => import('../469e6e40/127004').then(e => e.FontUploadReviewErrorsModal),
              createModalConfig('FontUploadReviewErrorsModal'),
            ),
          )
          dispatch(showModalHandler({
            type: fontUploadReviewModalType,
          }))
        },
      },
      onDismiss: () => {
        dispatch(_$$o())
      },
    }))
  }
}

/**
 * Handles font deletion logic, including analytics and notifications.
 * @param e - Redux-like dispatch context
 */
export const deleteFonts = createOptimistThunk((e) => {
  e.dispatch(clearDeleteResult())
  const { fontsToDelete } = e.getState().sharedFonts

  trackEventAnalytics('shared_fonts_delete_font', {
    count: Object.keys(fontsToDelete).length,
  })

  sendWithRetry.del('/api/fonts', {
    font_ids: Object.keys(fontsToDelete),
  }).then((response) => {
    const meta = response.data.meta
    Object.keys(fontsToDelete).forEach((fontId) => {
      if (!meta.errors[fontId]) {
        e.dispatch(delSharedFont({ font: fontsToDelete[fontId] }))
      }
    })
    handleDeleteCompletion(meta, e)
  }).catch((error) => {
    const errorMap: Record<string, { status: number }> = {}
    Object.keys(e.getState().sharedFonts.fontsToDelete).forEach((fontId) => {
      errorMap[fontId] = { status: error.status }
    })
    handleDeleteCompletion({ errors: errorMap }, e)
  })
})

/**
 * Handles completion logic for font deletions, including notifications.
 * @param result - Deletion result meta
 * @param e - Redux-like dispatch context
 */
function handleDeleteCompletion(result, e) {
  e.dispatch(deleteFontComplete(result))
  const { unsuccessfulDeletes, successfulDeletes } = e.getState().sharedFonts
  const numUnsuccessful = unsuccessfulDeletes.length
  const totalDeletes = unsuccessfulDeletes.length + successfulDeletes.length

  if (numUnsuccessful > 0) {
    e.dispatch(VisualBellActions.enqueue({
      type: 'font_deleted',
      message: getI18nString('shared_fonts.unsuccessful_deletes', {
        numUnsuccessfulDeletes: numUnsuccessful,
        totalDeletes,
      }),
      icon: VisualBellIcon.EXCLAMATION,
      error: true,
    }))
  }
  else {
    e.dispatch(VisualBellActions.enqueue({
      type: 'font_deleted',
      message: getI18nString('shared_fonts.successful_deletes', {
        totalDeletes,
      }),
      icon: VisualBellIcon.CHECK,
    }))
  }
}

/**
 * Shared font actions and thunks (original: $$j1)
 */
export const sharedFontActions = {
  startUploadFonts,
  uploadFonts,
  uploadFontProgress,
  clearFontUploadResults: _$$o,
  deleteFonts,
  toggleFontsToDelete,
  clearFontsToDelete,
  clearDeleteResult,
  deleteFontComplete,
  dismissFontCollision,
  dismissFontWarning,
  uploadFontSuccess,
  uploadFontFailure,
  uploadFontWarning,
  updateSharedFontList,
  put: putSharedFont,
  del: delSharedFont,
}

// Export for compatibility with original names
export const i = generateUploadId
export const X = sharedFontActions
