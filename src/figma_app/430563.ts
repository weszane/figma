import { reportError } from '../905/11'
import { getPublishedComponentsForLibraryThunk } from '../905/64411'
import { generateRetrievingSubscribedComponentsKey } from '../905/92359'
import { ServiceCategories } from '../905/165054'
import { updateSubscriptionOptimistically } from '../905/252202'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { analyticsEventManager, trackEventAnalytics } from '../905/449184'
import { librarySubscriptionHandler } from '../905/733171'
import { WB } from '../905/761735'
import { getSelectedFile } from '../905/766303'
import { LibrarySubscriptionType } from '../figma_app/155728'
import { isTeamLibrary } from '../figma_app/633080'
import { isSubscribedLibrary } from '../figma_app/646357'
import { loadingStateDelete } from '../figma_app/714946'
import { UserInterfaceElements } from '../figma_app/763686'
// Optimistic update keys
const FILE_KEY_OPTIMISTIC_UPDATE = 'file_key_optimistic_update'
const HUB_FILE_ID_OPTIMISTIC_UPDATE = 'hub_file_id_optimistic_update'

/**
 * Handles optimistic updates for library subscriptions.
 * @param e - Redux thunk context
 * @param params - Contains libraryKey and subscriptions
 */
export const handleOptimisticLibrarySubscription = createOptimistThunk(
  (e, { libraryKey, subscriptions }) => {
    if (
      !subscriptions
      || isSubscribedLibrary(e.getState().library.defaultPublished, libraryKey)
    ) {
      return
    }
    const selectedFile = getSelectedFile(e.getState())
    if (selectedFile) {
      const editorType = selectedFile.editor_type ?? 'design'
      const shouldUpdate
          = subscriptions === true
            || (editorType === 'design' && subscriptions.design)
            || (editorType === 'whiteboard' && subscriptions.figjam)

      if (shouldUpdate) {
        const state = e.getState()
        if (
          state.leftPanel.activeTab === UserInterfaceElements.ASSETS
          || state.universalInsertModal.showing
        ) {
          e.dispatch(
            getPublishedComponentsForLibraryThunk({
              libraryKey,
            }),
          )
        }
        else {
          e.dispatch(
            loadingStateDelete({
              key: generateRetrievingSubscribedComponentsKey(selectedFile.key),
            }),
          )
        }
      }
    }
  },
)

/**
 * Handles file-level library subscription updates.
 * @param e - Redux thunk context
 * @param params - Contains libraryFileSubscription, userInitiated, publishedLibrary, fileSubscribedLibraryKeys
 */
export const handleFileLibrarySubscription = createOptimistThunk(
  async (e, t) => {
    const {
      libraryFileSubscription,
      userInitiated,
      publishedLibrary,
      fileSubscribedLibraryKeys,
    } = t
    const {
      file_key,
      is_subscribed,
      id,
      library_key,
    } = libraryFileSubscription
    const openFileKey = e.getState().openFile?.key || null
    if (openFileKey === file_key) {
      e.dispatch(
        handleOptimisticLibrarySubscription({
          libraryKey: library_key,
          subscriptions: is_subscribed,
        }),
      )
    }
    if (
      (fileSubscribedLibraryKeys.has(library_key) && is_subscribed)
      || !userInitiated
    ) {
      return
    }

    const postPromise = librarySubscriptionHandler.postFileSubscriptionByLibraryKey(
      {
        libraryKey: library_key,
        fileKey: file_key,
        isSubscribed: is_subscribed,
      },
    )

    if (id) {
      WB()?.optimisticallyUpdate(
        {
          LibraryFileSubscription: {
            [id]: {
              isSubscribed: is_subscribed,
            },
          },
        },
        postPromise,
      )
    }
    else if (is_subscribed && publishedLibrary) {
      WB()?.optimisticallyCreate(
        {
          LibraryFileSubscription: {
            [`optimistic-id-${library_key}`]: {
              isSubscribed: is_subscribed,
              fileKey: file_key,
              hubFileId: HUB_FILE_ID_OPTIMISTIC_UPDATE,
              libraryKey: library_key ?? null,
              libraryFileKey: FILE_KEY_OPTIMISTIC_UPDATE,
              canRead: true,
              library: {
                updatedAt: new Date(),
                createdAt: new Date(),
                numComponents: publishedLibrary.num_components,
                numStateGroups: publishedLibrary.num_state_groups ?? 0,
                numStyles: publishedLibrary.num_styles,
                numStylesFill: 0,
                numStylesText: 0,
                numStylesEffect: 0,
                numStylesGrid: 0,
                numVariables: publishedLibrary.num_variables,
                numVariablesBoolean: 0,
                numVariablesColor: 0,
                numVariablesFloat: 0,
                numVariablesString: 0,
                numLibraryAssets: 0,
                numVariableSets: publishedLibrary.num_variable_collections,
                numModuleAssets: publishedLibrary.num_module_assets,
                hasAssets: false,
                fileKey: FILE_KEY_OPTIMISTIC_UPDATE,
                file: {
                  _id: `optimistic-id-${FILE_KEY_OPTIMISTIC_UPDATE}`,
                  _name: null,
                  key: FILE_KEY_OPTIMISTIC_UPDATE,
                  name: publishedLibrary.library_name,
                  libraryKey: publishedLibrary.library_key,
                  signedThumbnailUrl: publishedLibrary.thumbnail_url,
                  signedThumbnailUrlOverride: null,
                  thumbnailUrl: publishedLibrary.thumbnail_url,
                  thumbnailUrlOverride: null,
                  parentOrgId: null,
                  thumbnailGuid: isTeamLibrary(publishedLibrary)
                    ? publishedLibrary.thumbnail_guid
                    : null,
                },
                hubFileId: HUB_FILE_ID_OPTIMISTIC_UPDATE,
                canRead: true,
              },
              communityLibrary: null,
            },
          },
        },
        postPromise,
      )
    }

    try {
      await postPromise
    }
    catch (err) {
      e.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString(
            'design_systems.subscriptions.unable_to_change_setting',
          ),
          error: true,
        }),
      )
      reportError(ServiceCategories.DESIGN_SYSTEMS_ECOSYSTEM, err, {
        tags: {
          openFileKey,
          fileKey: file_key,
          libraryKey: library_key,
          isSubscribed: is_subscribed,
        },
      })
    }
  },
)

/**
 * Handles user-level library subscription updates.
 * @param e - Redux thunk context
 * @param params - Contains libraryUserSubscription, userInitiated, existingSubscription
 */
export const handleUserLibrarySubscription = createOptimistThunk(
  async (e, t) => {
    const {
      libraryUserSubscription,
      userInitiated,
      existingSubscription,
    } = t
    const { library_key, subscriptions } = libraryUserSubscription

    e.dispatch(
      handleOptimisticLibrarySubscription({
        libraryKey: library_key,
        subscriptions,
      }),
    )
    if (!userInitiated)
      return

    const userId = e.getState().user?.id
    const optimisticPayload = {
      libraryKey: library_key,
      userId,
      library: {
        libraryKey: library_key,
        fileKey: FILE_KEY_OPTIMISTIC_UPDATE,
      },
      communityLibrary: null,
    }

    const postPromise = librarySubscriptionHandler.postUserSubscriptionByLibraryKey(
      {
        libraryKey: library_key,
        subscriptions,
      },
    )

    updateSubscriptionOptimistically(
      existingSubscription,
      LibrarySubscriptionType.USER,
      subscriptions.design,
      subscriptions.figjam,
      subscriptions.slides,
      subscriptions.buzz,
      optimisticPayload,
      postPromise,
    )

    try {
      if (!library_key)
        throw new Error('Library key is required for user subscription')
      await postPromise
      analyticsEventManager.trackDefinedMetric(
        'library_preferences_modal.library_subscription_toggle.outcome',
        {
          designSubscribed: subscriptions.design,
          figjamSubscribed: subscriptions.figjam,
          slidesSubscribed: subscriptions.slides,
          buzzSubscribed: subscriptions.buzz,
          subscriptionType: 'user',
          outcome: 'success',
        },
      )
    }
    catch (err) {
      e.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString(
            'design_systems.subscriptions.unable_to_change_setting',
          ),
          error: true,
        }),
      )
      analyticsEventManager.trackDefinedMetric(
        'library_preferences_modal.library_subscription_toggle.outcome',
        {
          designSubscribed: subscriptions.design,
          figjamSubscribed: subscriptions.figjam,
          slidesSubscribed: subscriptions.slides,
          buzzSubscribed: subscriptions.buzz,
          subscriptionType: 'user',
          outcome: 'error',
        },
      )
      reportError(ServiceCategories.DESIGN_SYSTEMS_ECOSYSTEM, err, {
        tags: {
          libraryKey: library_key,
          designSubscribed: subscriptions.design,
          figjamSubscribed: subscriptions.figjam,
          slidesSubscribed: subscriptions.slides,
          buzzSubscribed: subscriptions.buzz,
        },
      })
    }
  },
)

/**
 * Handles team-level library subscription updates.
 * @param e - Redux thunk context
 * @param params - Contains libraryTeamSubscription, userInitiated, existingSubscription
 */
export const handleTeamLibrarySubscription = createOptimistThunk(
  async (e, t) => {
    const {
      libraryTeamSubscription,
      userInitiated,
      existingSubscription,
    } = t
    const { library_key, subscriptions, team_id } = libraryTeamSubscription

    e.dispatch(
      handleOptimisticLibrarySubscription({
        libraryKey: library_key,
        subscriptions,
      }),
    )
    if (!userInitiated)
      return

    const postPromise = librarySubscriptionHandler.postTeamSubscriptionByLibraryKey(
      {
        libraryKey: library_key,
        subscriptions,
        teamId: team_id,
      },
    )

    updateSubscriptionOptimistically(
      existingSubscription,
      LibrarySubscriptionType.TEAM,
      subscriptions.design,
      subscriptions.figjam,
      subscriptions.slides,
      subscriptions.buzz,
      {
        libraryKey: library_key,
        teamId: team_id,
        library: {
          libraryKey: library_key,
          fileKey: FILE_KEY_OPTIMISTIC_UPDATE,
          hubFileId: HUB_FILE_ID_OPTIMISTIC_UPDATE,
        },
        communityLibrary: null,
      },
      postPromise,
    )

    try {
      if (!library_key)
        throw new Error('Team subscription requires a library key')
      await postPromise
      analyticsEventManager.trackDefinedMetric(
        'library_preferences_modal.library_subscription_toggle.outcome',
        {
          designSubscribed: subscriptions.design,
          figjamSubscribed: subscriptions.figjam,
          slidesSubscribed: subscriptions.slides,
          buzzSubscribed: subscriptions.buzz,
          subscriptionType: 'team',
          outcome: 'success',
        },
      )
    }
    catch (err) {
      e.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString(
            'design_systems.subscriptions.unable_to_change_setting',
          ),
          error: true,
        }),
      )
      analyticsEventManager.trackDefinedMetric(
        'library_preferences_modal.library_subscription_toggle.outcome',
        {
          designSubscribed: subscriptions.design,
          figjamSubscribed: subscriptions.figjam,
          slidesSubscribed: subscriptions.slides,
          buzzSubscribed: subscriptions.buzz,
          subscriptionType: 'team',
          outcome: 'error',
        },
      )
      reportError(ServiceCategories.DESIGN_SYSTEMS_ECOSYSTEM, err, {
        tags: {
          libraryKey: library_key,
          designSubscribed: subscriptions.design,
          figjamSubscribed: subscriptions.figjam,
          slidesSubscribed: subscriptions.slides,
        },
      })
    }
  },
)

/**
 * Handles workspace-level library subscription updates.
 * @param e - Redux thunk context
 * @param params - Contains libraryWorkspaceSubscription, libraryName, workspaceName
 */
export const handleWorkspaceLibrarySubscription = createOptimistThunk(
  async (e, t) => {
    const {
      libraryWorkspaceSubscription,
      libraryName,
      workspaceName,
    } = t
    const { libraryKey, subscriptions, workspaceId }
        = libraryWorkspaceSubscription

    const postPromise = librarySubscriptionHandler.postWorkspaceSubscriptionByLibraryKey(
      {
        libraryKey,
        subscriptions,
        workspaceId,
      },
    )

    if (libraryWorkspaceSubscription.id) {
      WB().optimisticallyUpdate(
        {
          LibraryWorkspaceSubscription: {
            [libraryWorkspaceSubscription.id]: {
              isSubscribed: subscriptions.design,
              figJamSubscribed: subscriptions.figjam,
              slidesSubscribed: subscriptions.slides,
            },
          },
        },
        postPromise,
      )
    }
    else {
      WB().optimisticallyCreate(
        {
          LibraryWorkspaceSubscription: {
            [`library-workspace-sub-${performance.now()}`]: {
              fileKey: FILE_KEY_OPTIMISTIC_UPDATE,
              workspaceId,
              libraryKey,
              isSubscribed: subscriptions.design,
              figJamSubscribed: subscriptions.figjam,
              slidesSubscribed: subscriptions.slides,
              buzzSubscribed: subscriptions.buzz,
              canRead: true,
              hubFileId: HUB_FILE_ID_OPTIMISTIC_UPDATE,
            },
          },
        },
        postPromise,
      )
    }

    try {
      await postPromise
      e.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString(
            'design_systems.subscriptions.settings_updated_for',
            {
              libraryName,
              orgOrWorkspaceName: workspaceName,
            },
          ),
        }),
      )
    }
    catch (err) {
      e.dispatch(
        VisualBellActions.enqueue({
          message:
              err?.message
              ?? getI18nString(
                'design_systems.subscriptions.unable_to_change_setting',
              ),
          error: true,
        }),
      )
    }
  },
)

/**
 * Handles workspace-level library subscription deletion.
 * @param e - Redux thunk context
 * @param params - Contains libraryWorkspaceSubscription, libraryName, workspaceName
 */
export const handleDeleteWorkspaceLibrarySubscription = createOptimistThunk(
  async (e, t) => {
    const {
      libraryWorkspaceSubscription,
      libraryName,
      workspaceName,
    } = t
    const { libraryKey, workspaceId } = libraryWorkspaceSubscription

    const deletePromise = librarySubscriptionHandler.deleteWorkspaceSubscriptionByLibraryKey(
      {
        libraryKey,
        workspaceId,
      },
    )

    if (libraryWorkspaceSubscription.id) {
      WB().optimisticallyDelete(
        {
          LibraryWorkspaceSubscription: {
            [libraryWorkspaceSubscription.id]: null,
          },
        },
        deletePromise,
      )
    }

    try {
      await deletePromise
      e.dispatch(
        VisualBellActions.enqueue({
          message: getI18nString(
            'design_systems.subscriptions.settings_updated_for',
            {
              libraryName,
              orgOrWorkspaceName: workspaceName,
            },
          ),
        }),
      )
    }
    catch (err) {
      e.dispatch(
        VisualBellActions.enqueue({
          message:
              err?.message
              ?? getI18nString(
                'design_systems.subscriptions.unable_to_change_setting',
              ),
          error: true,
        }),
      )
    }
  },
)

/**
 * Handles organization-level library subscription updates.
 * @param e - Redux thunk context
 * @param params - Contains libraryOrgSubscription, libraryTeamId, userInitiated, currentSubscription, libraryName, orgName
 */
export const handleOrgLibrarySubscription = createOptimistThunk(
  async (e, t) => {
    const {
      libraryOrgSubscription,
      libraryTeamId,
      userInitiated,
      currentSubscription,
      libraryName,
      orgName,
    } = t
    const { orgId, subscriptions, libraryKey } = libraryOrgSubscription

    e.dispatch(
      handleOptimisticLibrarySubscription({
        libraryKey,
        subscriptions,
      }),
    )

    if (userInitiated) {
      if (currentSubscription) {
        const designEnabled = libraryOrgSubscription.subscriptions.design
        if (
          !(currentSubscription?.design || currentSubscription?.figjam)
          && designEnabled
        ) {
          trackEventAnalytics('Org Library File Enabled', {
            orgId,
            libraryKey,
            fileTeamId: libraryTeamId,
          })
        }
        else {
          trackEventAnalytics('Org Library File Disabled', {
            orgId,
            libraryKey,
            fileTeamId: libraryTeamId,
          })
        }
        analyticsEventManager.trackDefinedMetric(
          'library_preferences_modal.library_subscription_toggle',
          {
            designSubscribed: libraryOrgSubscription.subscriptions.design,
            figjamSubscribed: libraryOrgSubscription.subscriptions.figjam,
            slidesSubscribed: libraryOrgSubscription.subscriptions.slides,
            buzzSubscribed: libraryOrgSubscription.subscriptions.buzz,
            subscriptionType: 'org',
          },
        )
      }
      try {
        await librarySubscriptionHandler.postOrgSubscriptionByLibraryKey({
          libraryKey: libraryOrgSubscription.libraryKey,
          subscriptions,
          orgId,
        })
        e.dispatch(
          VisualBellActions.enqueue({
            message: getI18nString(
              'design_systems.subscriptions.settings_updated_for',
              {
                libraryName,
                orgOrWorkspaceName: orgName,
              },
            ),
          }),
        )
        analyticsEventManager.trackDefinedMetric(
          'library_preferences_modal.library_subscription_toggle.outcome',
          {
            designSubscribed: libraryOrgSubscription.subscriptions.design,
            figjamSubscribed: libraryOrgSubscription.subscriptions.figjam,
            slidesSubscribed: libraryOrgSubscription.subscriptions.slides,
            buzzSubscribed: libraryOrgSubscription.subscriptions.buzz,
            subscriptionType: 'org',
            outcome: 'success',
          },
        )
      }
      catch (err) {
        e.dispatch(
          VisualBellActions.enqueue({
            message: getI18nString(
              'design_systems.subscriptions.unable_to_change_setting',
            ),
            error: true,
          }),
        )
        analyticsEventManager.trackDefinedMetric(
          'library_preferences_modal.library_subscription_toggle.outcome',
          {
            designSubscribed: libraryOrgSubscription.subscriptions.design,
            figjamSubscribed: libraryOrgSubscription.subscriptions.figjam,
            slidesSubscribed: libraryOrgSubscription.subscriptions.slides,
            buzzSubscribed: libraryOrgSubscription.subscriptions.buzz,
            subscriptionType: 'org',
            outcome: 'error',
          },
        )
        reportError(ServiceCategories.DESIGN_SYSTEMS_ECOSYSTEM, err, {
          tags: {
            libraryKey: libraryOrgSubscription.libraryKey,
            designSubscribed: subscriptions.design,
            figjamSubscribed: subscriptions.figjam,
            slidesSubscribed: subscriptions.slides,
          },
        })
      }
    }
  },
)

// Export aliases for backward compatibility
export const F$ = handleOptimisticLibrarySubscription
export const PP = handleWorkspaceLibrarySubscription
export const Sn = handleOrgLibrarySubscription
export const am = handleFileLibrarySubscription
export const fR = handleUserLibrarySubscription
export const nE = handleTeamLibrarySubscription
export const oA = handleDeleteWorkspaceLibrarySubscription
