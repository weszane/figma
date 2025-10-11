import { reportError } from "../905/11"
import { BuyerAPIHandler } from "../905/180"
import { HubFileMetadata } from "../905/17527"
import { showNoItemsToPublishError } from "../905/58274"
import { createActionCreator } from "../905/73481"
import { roleBatchPutAction } from "../905/98702"
import { showModalHandler } from "../905/156213"
import { ServiceCategories } from "../905/165054"
import { AUTH_INIT } from "../905/194276"
import { resolveMessage } from "../905/231762"
import { maybeCreateSavepoint } from "../905/294113"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistAction, createOptimistThunk } from "../905/350402"
import { hubFileDelAll, hubFilePutAll, processHubFilesThunk } from "../905/359847"
import { trackEventAnalytics } from "../905/449184"
import { hubFileAPI } from "../905/473998"
import { appendSearchParams } from "../905/508367"
import { FlashActions } from "../905/573154"
import { areAllAssetsInactive, Asset } from "../905/576221"
import { FileLimitPaywallModal } from "../905/582047"
import { getFeatureFlags } from "../905/601108"
import { customHistory } from "../905/612521"
import { getDesignFileUrlWithOptions } from "../905/612685"
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456"
import { setupLoadingStateHandler } from "../905/696711"
import { liveStoreInstance } from "../905/713695"
import { logError } from "../905/714362"
import { getPublishHandlersForFileType } from "../905/747030"
import { AuthModal } from "../905/749159"
import { getCurrentLiveGraphClient } from "../905/761735"
import { FDocumentType, ITemplateType } from "../905/862883"
import { addAuthedCommunityProfileToHub, putCommunityProfile } from "../905/890368"
import { resourceVersionsQuery } from "../905/909123"
import { sendWithRetry } from "../905/910117"
import { hideDropdownAction, selectViewAction } from "../905/929976"
import { siteAPIService } from "../905/931953"
import { UploadStatusEnum } from "../figma_app/10554"
import { N as _$$N } from "../figma_app/23271"
import { atomStoreManager } from "../figma_app/27355"
import { PublishState, updatePublishStateAtom } from "../figma_app/60023"
import { filePutAction } from "../figma_app/78808"
import { addTemplateToRecentsThunkAction } from "../figma_app/147952"
import { getInitialOptions } from "../figma_app/169182"
import { FFileType, FTemplateCategoryType } from "../figma_app/191312"
import { isCommunityDuplicate } from "../figma_app/198840"

import { x as atomKeyX } from "../figma_app/256637"
import { trackFileObjEvent } from "../figma_app/314264"
import { HubEventType } from "../figma_app/350203"
import { getCurrentSearchSessionId } from "../figma_app/387599"
import { executePublishProcess } from "../figma_app/519839"
import { createPublishActionCreators } from "../figma_app/530167"
import { triggerMissingFontPopover } from "../figma_app/557318"
import { createAtomSetter } from "../figma_app/566371"
import { AddOperationType, checkTeamFileRestrictions } from "../figma_app/598018"
import { findMediaIndexBySha1, uploadHubFileImages } from "../figma_app/599979"
import { fileActionEnum } from "../figma_app/630077"
import { LibrarySourceEnum } from "../figma_app/633080"
import { PreviewMode } from "../figma_app/707808"
import { findPublishedProfileForUser } from "../figma_app/740025"
import { AppStateTsApi, PresentationValidationStatus, PrototypingTsApi } from "../figma_app/763686"
import { isMobileUA } from "../figma_app/778880"

import { selectAllModuleLibraryItemsWithStatus, selectModuleLibraryItemsWithStatus, selectWellFormedModuleNodeIds } from "../figma_app/803787"

// Origin: /Users/allen/sigma-main/src/figma_app/49598.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability, and ensured type safety.

// Assumed dependencies: All imported modules exist and provide the expected APIs/types.

// --- Action Creators ---
export const putFigFilePublishedAsHubFile = createActionCreator("PUT_FIG_FILE_PUBLISHED_AS_HUB_FILE")
export const updateHubFilePageTitle = createActionCreator("UPDATE_HUB_FILE_PAGE_TITILE")
export const delFigFilePublishedAsHubFile = createActionCreator("DEL_FIG_FILE_PUBLISHED_AS_HUB_FILE")
export const putFigFileDuplicateFromHubFile = createActionCreator("PUT_FIG_FILE_DUPLICATE_FROM_HUB_FILE")
export const delFigFileDuplicateFromHubFile = createActionCreator("DEL_FIG_FILE_DUPLICATE_FROM_HUB_FILE")
export const hubFilePutHubFileRemix = createActionCreator("HUB_FILE_PUT_HUB_FILE_REMIX")

// --- Types ---
interface DuplicateHubFileParams {
  hubFileId: string
  workspace: {
    userId: string
    orgId: string
  }
}

interface CreateFileFromTemplateParams {
  hubFileId: string
  folderId?: string
  orgId?: string
  teamId?: string
  source?: string
  callback?: (key?: string) => void
  hubFileName?: string
  canRetry?: boolean
  isDrawMode?: boolean
  openInNewTab?: boolean
  suggestedCategory?: string
}

interface GetHubFileVersionsParams {
  hubFileId: string
  callback?: (meta: any) => void
}

interface GetHubFileMetadataParams {
  fileKey: string
}

interface PublishHubFileParams {
  fileKey: string
  name: string
  description: string
  categoryId: string
  publisherIds: string[]
  tags: string[]
  tagsV2?: string[]
  creatorPolicy?: string
  thumbnailBuffer?: any
  viewerMode: string
  scalingMode?: string
  authorOrgId?: string
  authorTeamId?: string
  hasCustomUploadedThumbnail?: boolean
  validPrototype?: boolean
  commentsSetting?: string
  agreedToTos?: boolean
  isPaid?: boolean
  price?: number
  supportContact?: string
  carouselMedia?: any[]
  customCarouselThumbnail?: any
  suggestedCategory?: string
  [key: string]: any
}

interface UpdateHubFileParams extends Partial<PublishHubFileParams> {
  hubFileId: string
}

interface UnpublishHubFileParams {
  hubFileId: string
  redirectLink?: string
  onSuccess?: () => void
  onError?: () => void
}

interface LikeHubFileParams {
  hubFileId: string
}

interface UnlikeHubFileParams {
  hubFileId: string
  likeId: string
}

// --- Helper: Show login modal if not authed ---
function showLoginOrSignupModal(context: any) {
  const headerText = getI18nString("community.actions.log_in_or_create_an_account_to_duplicate_this_file")
  if (isMobileUA) {
    window.location.href = "/login"
    return
  }
  context.dispatch(AUTH_INIT({ origin }))
  context.dispatch(showModalHandler({
    type: AuthModal,
    data: { headerText },
  }))
}

// --- Thunks ---

// Duplicate a hub file (Community file duplication)
export const duplicateHubFileThunk = createOptimistThunk(
  (context, params: DuplicateHubFileParams, { loadingKey }) => {
    const state = context.getState()
    if (!state.user) {
      showLoginOrSignupModal(context)
      return
    }
    const requestConfig = {
      headers: {
        ...sendWithRetry.defaults.headers,
        "X-Figma-User-ID": params.workspace.userId,
      },
    }
    const promise = sendWithRetry.post(
      `/api/hub_files/v2/${params.hubFileId}/copy`,
      { org_id: params.workspace.orgId },
      requestConfig,
    )
    setupLoadingStateHandler(promise, context, loadingKey)
    promise
      .then(({ data }) => {
        const meta = data.meta
        trackEventAnalytics(HubEventType.HUB_FILE_DUPLICATED, {
          hubFileId: params.hubFileId,
          figFileKey: meta.key,
          searchSessionId: getCurrentSearchSessionId(state),
        })
        if (meta.editor_type === "whiteboard") {
          context.dispatch(addTemplateToRecentsThunkAction({
            storeInRecentsKey: FDocumentType.FigJam,
            id: params.hubFileId,
            type: ITemplateType.CommunityResource,
          }))
        }
        let url = getDesignFileUrlWithOptions(meta)
        url = appendSearchParams(url, {
          [isCommunityDuplicate.KEY]: isCommunityDuplicate.VALUE,
          fuid: params.workspace.userId,
        })
        customHistory.redirect(url, isMobileUA ? undefined : "_blank")
        context.dispatch(hideDropdownAction())
      })
      .catch((error) => {
        context.dispatch(VisualBellActions.enqueue({
          error: true,
          message: getI18nString("community.actions.failed_to_duplicate_file_error", {
            error: resolveMessage(error, getI18nString("community.actions.try_again_or_contact_support_figma_com")),
          }),
        }))
      })
  },
  ({ hubFileId }) => `DUPLICATE_HUB_FILE_${hubFileId}`,
)

// Create a new file from a hub file template
export const createFileFromTemplateThunk = createOptimistThunk(
  (context, params: CreateFileFromTemplateParams) => {
    const { canRetry = true } = params
    const state = context.getState()
    const orgId = state.currentUserOrgId
    const teamId = state.currentTeamId

    // Team file restrictions check
    if (params.folderId) {
      const folderTeamId = state.folders[params.folderId]?.team_id
      const team = folderTeamId ? state.teams[folderTeamId] : null
      const editorType = _$$N(state.hubFiles[params.hubFileId].viewer_mode)
      if (
        team
        && !checkTeamFileRestrictions(team, {
          type: AddOperationType.ADD_FILE,
          editorType,
        })
      ) {
        context.dispatch(showModalHandler({
          type: FileLimitPaywallModal,
          data: {
            teamId: team.id,
            createInDrafts: () => {
              context.dispatch(createFileFromTemplateThunk({
                ...params,
                folderId: undefined,
              }))
            },
            teamName: team.name,
            editorType,
            dispatch: context.dispatch,
            action: fileActionEnum.CREATE_FILE_FROM_TEMPLATE,
          },
        }))
        return
      }
    }

    return sendWithRetry
      .post(`/api/hub_files/template/${params.hubFileId}/copy`, {
        folder_id: params.folderId,
        org_id: orgId,
        team_id: teamId || undefined,
      })
      .then(({ data }) => {
        const meta = data.meta
        trackFileObjEvent("File Created", meta, { selectedView: state.selectedView }, { source: params.source })
        params.callback?.(meta?.key)
        if (meta.editor_type === "whiteboard") {
          context.dispatch(addTemplateToRecentsThunkAction({
            storeInRecentsKey: FDocumentType.FigJam,
            id: params.hubFileId,
            type: ITemplateType.CommunityResource,
          }))
        }
        let urlOptions: any = {}
        if (params.isDrawMode) {
          urlOptions = { ...urlOptions, isDrawMode: true, allowDefaulting: false }
        }
        let url = getDesignFileUrlWithOptions(meta, urlOptions)
        customHistory.redirect(url, params.openInNewTab && !isMobileUA ? "_blank" : undefined)
      })
      .catch(() => {
        const errorObj: any = {
          error: true,
          message: getI18nString("community.actions.failed_to_create_a_new_file_from_hub_file_name", {
            hubFileName: params.hubFileName,
          }),
        }
        if (canRetry) {
          errorObj.button = {
            text: getI18nString("community.actions.retry"),
            action: () =>
              context.dispatch(
                createFileFromTemplateThunk({
                  ...params,
                  canRetry: false,
                }),
              ),
          }
        }
        context.dispatch(VisualBellActions.enqueue(errorObj))
      })
  },
)

// Get hub file versions and update state
export const getHubFileVersionsThunk = createOptimistThunk(
  async (context, { hubFileId, callback }: GetHubFileVersionsParams, { loadingKey }) => {
    let meta: any = null
    let promise = hubFileAPI.getVersions({ id: hubFileId })
    try {
      meta = (await promise).data.meta
    }
    catch {
      return
    }
    setupLoadingStateHandler(promise, context, loadingKey)
    const { fig_file_metadata, remixed_from_metadata, ...restMeta } = meta
    const relatedContent = restMeta.related_content
    const remixedToMetadata = restMeta.remixed_to_metadata
    let hubFiles = [...(relatedContent ? relatedContent.content : remixedToMetadata || []), restMeta]
    if (remixed_from_metadata)
      hubFiles.push(remixed_from_metadata)
    context.dispatch(processHubFilesThunk({ hubFiles, src: "getHubFileVersions" }))
    if (fig_file_metadata) {
      context.dispatch(putFigFilePublishedAsHubFile({ hubFileId: restMeta.id, fileKey: fig_file_metadata.key }))
      if (fig_file_metadata.file) {
        context.dispatch(filePutAction({ file: fig_file_metadata.file }))
      }
      if (fig_file_metadata.roles) {
        context.dispatch(roleBatchPutAction({ roles: fig_file_metadata.roles }))
      }
    }
    context.dispatch(updateHubFilePageTitle({ hubFileId: restMeta.id }))
    const remixedToIds = new Set(remixedToMetadata?.map((item: any) => item.id))
    context.dispatch(hubFilePutHubFileRemix({
      hubFileId: restMeta.id,
      from: remixed_from_metadata ? remixed_from_metadata.id : null,
      to: remixedToIds,
    }))
    callback?.(restMeta)
  },
  ({ hubFileId }) => `HUB_FILE_GET_VERSIONS_${hubFileId}`,
)

// Get hub file metadata and update state
export const getHubFileMetadataThunk = createOptimistThunk(
  async (context, { fileKey }: GetHubFileMetadataParams) => {
    if (!getInitialOptions().user_data)
      return
    await HubFileMetadata.getHubFileMetadata({ fileKey })
      .then(({ data }) => {
        const publishedAs = data.meta.published_as
        if (publishedAs?.id) {
          context.dispatch(putFigFilePublishedAsHubFile({ hubFileId: publishedAs.id, fileKey }))
        }
        else {
          context.dispatch(delFigFilePublishedAsHubFile({ fileKey }))
        }
        const remixedFrom = data.meta.remixed_from_metadata
        const isPreview = data.meta.is_preview
        if (remixedFrom?.id) {
          context.dispatch(putFigFileDuplicateFromHubFile({
            hubFileId: remixedFrom.id,
            fileKey,
            isPreview: !!isPreview,
          }))
        }
        else {
          context.dispatch(delFigFileDuplicateFromHubFile({ fileKey }))
        }
        const hubFiles = [publishedAs, remixedFrom].filter(Boolean)
        if (hubFiles.length > 0) {
          context.dispatch(processHubFilesThunk({ hubFiles, src: "getHubFileMetadata" }))
        }
      })
      .then(() => {
        if (getFeatureFlags().ce_new_missing_fonts_logging) {
          triggerMissingFontPopover()
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        atomStoreManager.set(atomKeyX, true)
      })
  },
)

// Publish action creators for HUB_FILE
export const hubFilePublishActionCreators = createPublishActionCreators("HUB_FILE")
const { updateMetadata, updateStatus, clearMetadataAndStatus, clearMetadata } = hubFilePublishActionCreators

// Publish a hub file (Community file publishing)
export const publishHubFileThunk = createOptimistThunk(
  (context, params: PublishHubFileParams) => {
    let wellFormedNodeIds: string[] = []
    const isSlideTemplate = params.viewerMode === FTemplateCategoryType.SLIDE_TEMPLATE
    if (isSlideTemplate) {
      wellFormedNodeIds = selectWellFormedModuleNodeIds(context.getState())
      const moduleItems = selectModuleLibraryItemsWithStatus(context.getState()) as any
      const allInactive = !!params.hubFileId && wellFormedNodeIds.length > 0
        && areAllAssetsInactive(Object.values(moduleItems) as any, new Set(wellFormedNodeIds))
      if ((!params.hubFileId && wellFormedNodeIds.length === 0) || allInactive) {
        showNoItemsToPublishError(context.dispatch)
        return
      }
      atomStoreManager.set(updatePublishStateAtom, { state: PublishState.PUBLISH_HUB_FILE_INITIATED })
    }
    context.dispatch(updateStatus({
      id: params.fileKey,
      status: { code: UploadStatusEnum.UPLOADING },
    }))
    publishHubFile(context, params)
      .then(({ hubFile, actingProfile, profileCreated }: any) => {
        context.dispatch(processHubFilesThunk({ hubFiles: [hubFile], src: "createHubFile" }))
        context.dispatch(putFigFilePublishedAsHubFile({ hubFileId: hubFile.id, fileKey: params.fileKey }))
        if (profileCreated) {
          actingProfile.profile_created = profileCreated
          context.dispatch(addAuthedCommunityProfileToHub(actingProfile))
        }
        context.dispatch(putCommunityProfile(actingProfile))
        context.dispatch(updateStatus({
          id: params.fileKey,
          status: { code: UploadStatusEnum.SUCCESS },
        }))
        if (params.suggestedCategory) {
          trackEventAnalytics("community_category_suggestion", {
            resourceType: "hub_file",
            resourceId: hubFile.id,
            categoryId: hubFile.category_id,
            suggestedCategory: params.suggestedCategory,
          }, { forwardToDatadog: true })
        }
        return { hubFile }
      })
      .then(({ hubFile }) => {
        if (!isSlideTemplate || !executePublishProcess)
          return
        const wellFormedNodeIds = selectWellFormedModuleNodeIds(context.getState())
        const libraryNodeIds = Object.values(
          selectAllModuleLibraryItemsWithStatus(context.getState(), LibrarySourceEnum.HUBFILE),
        ).map((item: any) => item.node_id)
        const publishNodeIds = AppStateTsApi.slideThemeLibBindings().renameThemeForTemplatePublish(params.name)
          ? libraryNodeIds
          : wellFormedNodeIds
        if (publishNodeIds.length > 0) {
          if (hubFile.library_key) {
            AppStateTsApi?.canvasGrid().updateSourceLibraryKey(hubFile.library_key)
          }
          const { onPublishSuccess, onPublishProgress, onPublishError } = getPublishHandlersForFileType(FFileType.SLIDES)
          requestAnimationFrame(() => {
            context.dispatch(executePublishProcess({
              savepointDescription: "Community slide template publish",
              publishingMode: LibrarySourceEnum.HUBFILE,
              itemsToPublish: new Set(publishNodeIds),
              hubFileId: hubFile.id,
              onPublishSuccess,
              onPublishProgress,
              onPublishError,
            }))
          })
        }
        else {
          atomStoreManager.set(updatePublishStateAtom, { state: PublishState.PUBLISH_HUB_FILE_COMPLETED })
        }
      })
      .catch((error) => {
        if (isSlideTemplate) {
          atomStoreManager.set(updatePublishStateAtom, { state: PublishState.PUBLISH_HUB_FILE_ERRORED })
        }
        context.dispatch(VisualBellActions.enqueue({
          message: error.message,
          type: "hub-file-created-error",
          error: true,
        }))
        context.dispatch(updateStatus({
          id: params.fileKey,
          status: { code: UploadStatusEnum.FAILURE, error: error.message },
        }))
      })
  },
)

// Helper: Publish hub file (used by publishHubFileThunk)
async function publishHubFile(context: any, params: PublishHubFileParams) {
  const {
    fileKey,
    name,
    description,
    categoryId,
    publisherIds,
    tags,
    tagsV2,
    creatorPolicy,
    thumbnailBuffer,
    viewerMode,
    scalingMode,
    authorOrgId,
    authorTeamId,
    hasCustomUploadedThumbnail,
    validPrototype,
    commentsSetting,
    agreedToTos,
    isPaid,
    price,
    supportContact,
    carouselMedia,
    customCarouselThumbnail,
  } = params

  if (authorOrgId && authorTeamId) {
    throw new Error(getI18nString("community.actions.attempting_to_set_both_author_org_id_and_author_team_id_while_publishing"))
  }
  if (
    viewerMode === FTemplateCategoryType.PROTOTYPE
    && PrototypingTsApi.firstPagePrototypeStatus() !== PresentationValidationStatus.VALID
  ) {
    throw new Error(getI18nString("community.actions.attempting_to_publish_an_invalid_prototype_as_a_prototype"))
  }

  // Savepoint creation
  let savepointId: string
  try {
    savepointId = await maybeCreateSavepoint(fileKey, "Published to Community hub", description, context.dispatch)
      .then((res: any) => res.id)
      .catch((err: any) => {
        reportError(ServiceCategories.COMMUNITY, err)
        return new Error(err.data?.message || getI18nString("community.actions.could_not_connect_to_the_server"))
      })
  }
  catch {
    return new Error(getI18nString("community.actions.could_not_connect_to_the_server"))
  }

  // Upload images
  let uploadResult: any
  try {
    uploadResult = await uploadHubFileImages(thumbnailBuffer, carouselMedia || [], savepointId)
  }
  catch (err) {
    reportError(ServiceCategories.COMMUNITY, err)
    return new Error(getI18nString("community.actions.error_uploading_images_e"))
  }

  // Find carousel thumbnail index
  const carouselIndex = findMediaIndexBySha1(uploadResult?.carousel_images || [], customCarouselThumbnail)

  // Prepare publish payload
  const publishPayload = {
    file_version_id: savepointId,
    name,
    description,
    tags,
    tags_v2: tagsV2,
    category_id: categoryId,
    creator_policy: creatorPolicy,
    signature: uploadResult?.cover_image.signature,
    cover_image_uploaded: uploadResult?.cover_image.cover_image_uploaded,
    publisher_ids: publisherIds,
    viewer_mode: viewerMode,
    scaling_mode: scalingMode,
    author_org_id: authorOrgId,
    author_team_id: authorTeamId,
    has_custom_uploaded_thumbnail: hasCustomUploadedThumbnail,
    valid_prototype: validPrototype,
    comments_setting: commentsSetting,
    agreed_to_tos: agreedToTos,
    is_paid: isPaid,
    price,
    support_contact: supportContact,
    carousel_images: uploadResult?.carousel_images,
    cover_image_carousel_image: uploadResult?.carousel_images?.[carouselIndex],
  }

  // Publish hub file
  try {
    const response = await hubFileAPI.publishHubFile(publishPayload)
    return {
      hubFile: response.data.meta.hub_file,
      actingProfile: response.data.meta.acting_profile,
      profileCreated: response.data.meta.profile_created,
    }
  }
  catch (err: any) {
    reportError(ServiceCategories.COMMUNITY, err)
    return new Error(
      resolveMessage(err, getI18nString("community.actions.could_not_publish_hub_file", { error: err.message })),
    )
  }
}

// Update hub file metadata
export const updateHubFileThunk = createOptimistThunk(
  async (context, { payload, onSuccess }: { payload: UpdateHubFileParams, onSuccess?: (meta: any) => void }) => {
    let uploadResult: any
    try {
      uploadResult = await uploadHubFileImages(
        payload.thumbnailBuffer,
        payload.carouselMedia || [],
        undefined,
        payload.hubFileId,
      )
    }
    catch (err) {
      reportError(ServiceCategories.COMMUNITY, err)
      context.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString("community.actions.error_uploading_images_publish_update_from_editor"),
          type: "hub-file-updated-error",
          error: true,
        }),
      )
      return new Error(err)
    }
    const carouselIndex = findMediaIndexBySha1(uploadResult?.carousel_images || [], payload.customCarouselThumbnail)
    const updatePayload = {
      name: payload.name,
      description: payload.description,
      category_id: payload.categoryId,
      creator_policy: payload.creatorPolicy,
      publisher_ids: payload.publisherIds,
      tags: payload.tags,
      tags_v2: payload.tagsV2,
      viewer_mode: payload.viewerMode,
      scaling_mode: payload.scalingMode,
      comments_setting: payload.commentsSetting,
      price: payload.price,
      support_contact: payload.supportContact,
      carousel_images: uploadResult?.carousel_images,
      cover_image_carousel_image: uploadResult?.carousel_images?.[carouselIndex],
      has_custom_uploaded_thumbnail: payload.hasCustomUploadedThumbnail,
      cover_image_uploaded: uploadResult?.cover_image.cover_image_uploaded,
      signature: uploadResult?.cover_image.signature,
    }
    try {
      const response = (await hubFileAPI.updateHubFile(payload.hubFileId, updatePayload)).data.meta
      context.dispatch(processHubFilesThunk({ hubFiles: [response], src: "updateHubFile" }))
      if (payload.suggestedCategory) {
        trackEventAnalytics("community_category_suggestion", {
          resourceType: "hub_file",
          resourceId: response.id,
          categoryId: response.category_id,
          suggestedCategory: payload.suggestedCategory,
        }, { forwardToDatadog: true })
      }
      onSuccess?.(response)
    }
    catch (err: any) {
      const errorMsg = resolveMessage(
        err,
        getI18nString("community.actions.an_error_occurred_while_updating_please_refresh_and_try_again"),
      )
      context.dispatch(FlashActions.error(errorMsg))
      reportError(ServiceCategories.COMMUNITY, err)
      return new Error(`Error updating file ${err}`)
    }
  },
)

// Unpublish site for figmake template
async function unpublishSiteForFigmakeTemplate(meta: any) {
  if (meta.viewer_mode !== FTemplateCategoryType.FIGMAKE_TEMPLATE || meta.published_site_url == null)
    return
  const fileKey = meta.fig_file_metadata?.key
  if (!fileKey) {
    console.warn("No file key available for figmake hub file, cannot unpublish site")
    return
  }
  trackEventAnalytics("sites_unpublish_started", { fileKey, productType: "sites" })
  await siteAPIService.unpublishSite({ fileKey })
}

// Unpublish a hub file
export const unpublishHubFileThunk = createOptimistThunk(
  (context, { hubFileId, redirectLink, onSuccess, onError }: UnpublishHubFileParams) => {
    sendWithRetry
      .del(`/api/hub_files/${hubFileId}`)
      .then(({ data }) => {
        const meta = data.meta
        context.dispatch(processHubFilesThunk({ hubFiles: [meta], src: "unpublishHubFile" }))
        return meta
      })
      .then(unpublishSiteForFigmakeTemplate)
      .then(() => {
        if (redirectLink)
          customHistory.redirect(redirectLink)
        onSuccess?.()
      })
      .catch((err) => {
        reportError(ServiceCategories.COMMUNITY, err)
        console.error(new Error(`Error unpublishing file ${err}`))
        onError?.()
      })
  },
)

// Optimistic duplicate hub file action
export const optimisticDuplicateHubFileAction = createOptimistAction(
  "OPTIMISTIC_DUPLICATE_HUB_FILE",
  (context, { hubFileId, viewContext }: { hubFileId: string, viewContext: any }, { optimistId }) => {
    sendWithRetry
      .post(`/api/hub_files/v2/${hubFileId}/copy`)
      .then(({ data }) => {
        context.dispatch(createOptimistCommitAction(optimistId))
        const meta = data.meta
        let url = getDesignFileUrlWithOptions(meta)
        url = appendSearchParams(url, { [isCommunityDuplicate.KEY]: isCommunityDuplicate.VALUE })
        customHistory.redirect(url, isMobileUA ? undefined : "_blank")
        trackEventAnalytics(HubEventType.HUB_FILE_DUPLICATED, {
          hubFileId,
          figFileKey: meta.key,
          viewContext,
          searchSessionId: getCurrentSearchSessionId(context.getState()),
        })
      })
      .catch((err) => {
        context.dispatch(createOptimistRevertAction(optimistId))
        context.dispatch(
          VisualBellActions.enqueue({
            message: getI18nString("community.actions.unable_to_duplicate", {
              error: resolveMessage(err, err.data.message),
            }),
            type: "HUB_FILE_DUPLICATE_FAILED",
            error: true,
          }),
        )
      })
  },
)

// Like hub file mutation
const likeHubFileMutation = liveStoreInstance.Mutation(
  ({ id }: { id: string }, { query }: { query: any }) => {
    query.mutate(resourceVersionsQuery({ apiResourceType: "file", id }), (resource: any) => {
      resource.like_count += 1
    })
    return hubFileAPI.likeHubFile({ id })
  },
)

// Like hub file thunk
export const likeHubFileThunk = createOptimistThunk(
  (context, { hubFileId }: LikeHubFileParams, { loadingKey }) => {
    const atomSetter = createAtomSetter(likeHubFileMutation)({ id: hubFileId })
    setupLoadingStateHandler(atomSetter, context, loadingKey)
    atomSetter.catch((err) => {
      context.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString("community.actions.unable_to_like_this_file_error", {
            error: resolveMessage(err, err.data?.message),
          }),
          type: "HUB_FILE_LIKE_FAILED",
          error: true,
        }),
      )
    })
    const user = context.getState().user
    const profile = user && findPublishedProfileForUser(user, context.getState().authedProfilesById)
    if (user?.id && profile) {
      getCurrentLiveGraphClient().optimisticallyCreate(
        {
          CommunityHubLike: {
            [`optimistic-${hubFileId}-${profile.id}`]: {
              pluginId: null,
              hubFileId,
              profileId: profile.id,
              resourceId: null,
              hiddenAt: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              canRead: true,
            },
          },
        },
        atomSetter,
      )
    }
  },
  hubFileId => `LIKE_HUB_FILE_${hubFileId}`,
)

// Unlike hub file mutation
const unlikeHubFileMutation = liveStoreInstance.Mutation(
  ({ id }: { id: string }, { query }: { query: any }) => {
    query.mutate(resourceVersionsQuery({ apiResourceType: "file", id }), (resource: any) => {
      resource.like_count -= 1
    })
    return hubFileAPI.unlikeHubFile({ id })
  },
)

// Unlike hub file thunk
export const unlikeHubFileThunk = createOptimistThunk(
  (context, { hubFileId, likeId }: UnlikeHubFileParams, { loadingKey }) => {
    const atomSetter = createAtomSetter(unlikeHubFileMutation)({ id: hubFileId })
    setupLoadingStateHandler(atomSetter, context, loadingKey)
    atomSetter.catch((err) => {
      context.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString("community.actions.unable_to_unlike_this_file_error", {
            error: resolveMessage(err, err.data.message),
          }),
          type: "HUB_FILE_UNLIKE_FAILED",
          error: true,
        }),
      )
    })
    const userId = context.getState().user?.id
    if (userId && likeId) {
      getCurrentLiveGraphClient().optimisticallyDelete(
        { CommunityHubLike: { [likeId]: null } },
        atomSetter,
      )
    }
  },
  hubFileId => `UNLIKE_HUB_FILE_${hubFileId}`,
)

// View hub file thunk
export const viewHubFileThunk = createOptimistThunk(
  (context, { hubFileId }: { hubFileId: string }) =>
    sendWithRetry.post(`/api/hub_files/${hubFileId}/view`, { hubFileId }),
)

// Track slide template usage
const slideTemplateUsageTracker: Record<string, string[]> = {}
export const trackSlideTemplateUsageThunk = createOptimistThunk(
  async (context, { hubFileId }: { hubFileId: string }) => {
    const state = context.getState()
    const userId = state.user?.id
    if (userId) {
      trackEventAnalytics(HubEventType.SLIDE_TEMPLATE_USED, { hubFileId })
      if (!slideTemplateUsageTracker[userId]?.includes(hubFileId)) {
        await BuyerAPIHandler.updateSlideTemplateCommunityUsageCount({ hubFileId })
          .then(() => {
            slideTemplateUsageTracker[userId] = slideTemplateUsageTracker[userId] || []
            if (!slideTemplateUsageTracker[userId].includes(hubFileId)) {
              slideTemplateUsageTracker[userId].push(hubFileId)
            }
          })
          .catch((err) => {
            logError("Error updating Community Slide Template usage count", err, { hubFileId }, { reportAsSentryError: true })
          })
      }
    }
  },
)

// Set preview mode and track analytics
export const setPreviewModeThunk = createOptimistThunk(
  (context, previewMode: PreviewMode) => {
    if (previewMode === PreviewMode.FULLSCREEN || previewMode === PreviewMode.FULLSCREEN_WITH_COMMENTS) {
      trackEventAnalytics("Context Viewed", { name: "hub-file-canvas-enter-fullscreen" })
      if (previewMode === PreviewMode.FULLSCREEN_WITH_COMMENTS) {
        trackEventAnalytics("CTA Clicked", { name: "community_hub_preview_comments_viewed" })
      }
    }
    const selectedView = {
      ...context.getState().selectedView,
      fullscreenState: previewMode,
    }
    if (previewMode === PreviewMode.FULLSCREEN && selectedView.commentThreadId) {
      delete selectedView.commentThreadId
    }
    context.dispatch(selectViewAction(selectedView))
  },
)

// --- Exported API (keep original export names, but use refactored right-hand names) ---
export const Af = updateHubFilePageTitle
export const FO = delFigFilePublishedAsHubFile
export const N4 = updateHubFileThunk
export const QA = putFigFileDuplicateFromHubFile
export const Qi = unlikeHubFileThunk
export const Ri = putFigFilePublishedAsHubFile
export const VS = updateMetadata
export const ax = unpublishHubFileThunk
export const bk = clearMetadata
export const eq = hubFilePutHubFileRemix
export const i9 = publishHubFileThunk
export const k8 = trackSlideTemplateUsageThunk
export const oO = clearMetadataAndStatus
export const p7 = duplicateHubFileThunk
export const rH = getHubFileMetadataThunk
export const rL = createFileFromTemplateThunk
export const sW = setPreviewModeThunk
export const ts = getHubFileVersionsThunk
export const vr = viewHubFileThunk
export const wO = hubFilePublishActionCreators
export const yh = optimisticDuplicateHubFileAction
export const zm = likeHubFileThunk
export const D3 = hubFilePutAll
export const L1 = hubFileDelAll
export const Sb = processHubFilesThunk
export { hubFileDelAll, hubFilePutAll, processHubFilesThunk }
