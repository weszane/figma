import { reportError } from '../905/11'
import { pluginAPIService } from '../905/3209'
import { createActionCreator } from '../905/73481'
import { ServiceCategories } from '../905/165054'
import { deleteAllPlugins, deleteAllWidgets, mergePublishedPlugin, mergePublishedPluginThunk, putAllPlugins, putAllWidgets } from '../905/172918'
import { resolveMessage } from '../905/231762'
import { readImageBytes } from '../905/289751'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { debugState } from '../905/407919'
import { widgetAPIClient } from '../905/424668'
import { trackEventAnalytics } from '../905/449184'
import { enqueueNetworkErrorBell } from '../905/470594'
import { FlashActions } from '../905/573154'
import { getFeatureFlags } from '../905/601108'
import { UploadError } from '../905/623179'
import { setupLoadingStateHandler } from '../905/696711'
import { liveStoreInstance } from '../905/713695'
import { PluginUploadApi } from '../905/771986'
import { setupPluginCodeCache } from '../905/827944'
import { addAuthedCommunityProfileToHub, putCommunityProfile } from '../905/890368'
import { sendWithRetry } from '../905/910117'
import { PublisherRole, UploadStatusEnum } from '../figma_app/10554'
import { HubTypeEnum, isWidget } from '../figma_app/45218'
import { getPublishingData, getResourceRoleInfo, loadLocalPluginSource, loadPluginManifest, validateArtworkImage, validateExtensionIconImage, validatePluginCodeSize } from '../figma_app/300692'
import { getPluginWidgetLabel, getResourceTypeLabel } from '../figma_app/471982'
import { createPublishActionCreators } from '../figma_app/530167'
import { prepareMediaUploadData, uploadCarouselImages, uploadImageWithPresignedUrl, uploadVideoWithThumbnail } from '../figma_app/599979'
import { getPermissionsState } from '../figma_app/642025'
import { loadingStatePutFailure, loadingStatePutLoading, loadingStatePutSuccess } from '../figma_app/714946'
import { isResourcePendingPublishing } from '../figma_app/777551'
import { UM } from '../figma_app/940844'

export { deleteAllPlugins, deleteAllWidgets, mergePublishedPlugin, mergePublishedPluginThunk, putAllPlugins, putAllWidgets } from '../905/172918'

export const replaceFeaturedPluginAction = createActionCreator('PLUGIN_REPLACE_FEATURED')
const initializeUserPublishedResourcesThunk = createOptimistThunk((dispatch, action, {
  loadingKey,
}) => {
  if (!dispatch.getState().user)
    return
  const pluginsRequest = pluginAPIService.getPlugins()
  const widgetsRequest = widgetAPIClient.getWidgets()
  pluginsRequest.then(({
    data,
  }) => {
    const plugins = data.meta
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: plugins,
      src: 'initializeUserPublishedPlugins',
    }))
  })
  widgetsRequest.then(({
    data,
  }) => {
    const widgets = data.meta
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: widgets,
      src: 'initializeUserPublishedWidgets',
    }))
  })
  setupLoadingStateHandler(widgetsRequest, dispatch, loadingKey)
})
export const unpublishedPluginsQuery = liveStoreInstance.Query({
  fetch: async () => (await pluginAPIService.getUnpublishedPlugins()).data.meta,
  output: ({
    data,
  }: {data: any}) => {
    const result = {}
    if (data) {
      for (const plugin of data) {
        result[plugin.id] = plugin
      }
    }
    return result
  },
})
export const unpublishedWidgetsQuery = liveStoreInstance.Query({
  fetch: async () => (await widgetAPIClient.getUnpublishedWidgets()).data.meta,
  output: ({
    data,
  }: {data: any}) => {
    const result = {}
    if (data) {
      for (const widget of data) {
        result[widget.id] = widget
      }
    }
    return result
  },
})
export const cacheWidgetVersionsThunk = createOptimistThunk((dispatch, {
  widgetIDToVersions,
}) => {
  const {
    publishedCanvasWidgetVersions,
    currentUserOrgId,
  } = dispatch.getState()
  for (const [widgetId, versions] of Object.entries<ObjectOf>(widgetIDToVersions)) {
    versions.forEach((versionId) => {
      const widgetVersion = publishedCanvasWidgetVersions[widgetId]?.[versionId]
      if (widgetVersion) {
        new Set(widgetIDToVersions[widgetId]).forEach((id) => {
          setupPluginCodeCache.getAndCache({
            ...widgetVersion,
            id,
          }, currentUserOrgId ?? void 0)
        })
      }
    })
  }
})
const getPublishedResourceThunk = createOptimistThunk(async (dispatch, {
  resourceId,
  resourceType,
}) => {
  const request = resourceType === HubTypeEnum.WIDGET
    ? widgetAPIClient.getWidgets({
        id: resourceId,
      })
    : pluginAPIService.getPlugins({
        id: resourceId,
      })
  const {
    data,
  } = await request
  const resource = data.meta.find(item => item.id === resourceId)
  if (resource) {
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: [resource],
      src: 'getPublishedResource',
    }))
  }
})
export const updatePublishedCanvasWidgetVersionsAction = createActionCreator('UPDATE_PUBLISHED_CANVAS_WIDGET_VERSIONS')
export const updateFetchedCanvasWidgetVersionsAction = createActionCreator('UPDATE_FETCHED_CANVAS_WIDGET_VERSIONS')
export async function getCanvasWidgetVersion(widgetId, versionId, orgId) {
  const versions = await fetchCanvasWidgetVersions({
    [widgetId]: [versionId],
  }, orgId)
  return versions[widgetId]?.[versionId]
}
export async function fetchCanvasWidgetVersions(widgetIDsToVersions, orgId) {
  const currentState = debugState.getState()
  const fileKey = currentState.openFile?.key
  const response = await sendWithRetry.post('/api/widgets/v2/versions', {
    ids_to_versions: widgetIDsToVersions,
    org_id: orgId,
    file_key: fileKey,
  })
  const versions = response?.data?.meta || {}
  debugState.dispatch(updatePublishedCanvasWidgetVersionsAction(versions))
  debugState.dispatch(updateFetchedCanvasWidgetVersionsAction(Object.fromEntries(Object.entries(widgetIDsToVersions).map(([widgetId, versionIds]: [string, string[]]) => [widgetId, Object.fromEntries(versionIds.map(versionId => [versionId, true]))]))))
  return versions
}
const fetchPublishedPluginsThunk = createOptimistThunk(async (dispatch, {
  pluginIds,
}) => {
  const {
    currentUserOrgId,
    publishedPlugins,
  } = dispatch.getState()
  const missingPluginIds = pluginIds.filter(id => !publishedPlugins[id])
  if (missingPluginIds.length) {
    try {
      const response = await pluginAPIService.postPluginsBatch(missingPluginIds, currentUserOrgId)
      const plugins = response.data?.meta ?? []
      debugState.dispatch(mergePublishedPluginThunk({
        publishedPlugins: plugins,
        src: 'fetchPublishedPlugins',
        overrideInstallStatus: true,
      }))
    }
    catch {}
  }
})
const fetchPublishedWidgetsThunk = createOptimistThunk(async (dispatch, {
  widgetIds,
}) => {
  const {
    currentUserOrgId,
    publishedWidgets,
  } = dispatch.getState()
  const missingWidgetIds = widgetIds.filter(id => !publishedWidgets[id])
  if (missingWidgetIds.length) {
    try {
      const response = await sendWithRetry.post('/api/widgets/batch', {
        ids: missingWidgetIds,
        org_id: currentUserOrgId,
      })
      const widgets = response.data?.meta ?? []
      debugState.dispatch(mergePublishedPluginThunk({
        publishedPlugins: widgets,
        src: 'fetchPublishedWidgets',
        overrideInstallStatus: true,
      }))
    }
    catch {}
  }
})
const fetchAndCacheWidgetVersionsThunk = createOptimistThunk(async (dispatch, {
  widgetIDAndVersions,
}) => {
  const {
    currentUserOrgId,
  } = dispatch.getState()
  const widgetIds = []
  const widgetIDToVersions = {}
  widgetIDAndVersions.forEach(({
    widgetID,
    widgetVersionID,
  }) => {
    if (widgetIDToVersions[widgetID]) {
      if (!widgetIDToVersions[widgetID].includes(widgetVersionID)) {
        widgetIDToVersions[widgetID].push(widgetVersionID)
      }
    }
    else {
      widgetIds.push(widgetID)
      widgetIDToVersions[widgetID] = [widgetVersionID]
    }
  })
  if (widgetIds.length !== 0) {
    await fetchCanvasWidgetVersions(widgetIDToVersions, currentUserOrgId)
    dispatch.dispatch(cacheWidgetVersionsThunk({
      widgetIDToVersions,
    }))
    dispatch.dispatch(fetchPublishedWidgetsThunk({
      widgetIds: Object.keys(widgetIDToVersions),
    }))
  }
})
const getCommunityProfilePluginsThunk = createOptimistThunk((dispatch, profileData, {
  loadingKey,
}) => {
  const pluginsRequest = pluginAPIService.getProfile({
    profileId: profileData.profileId,
    currentOrgId: dispatch.getState().currentUserOrgId || void 0,
  })
  const widgetsRequest = UM(profileData.profileId)
  setupLoadingStateHandler(pluginsRequest, dispatch, loadingKey)
  return pluginsRequest.then(async ({
    data,
  }) => {
    const plugins = [...(await widgetsRequest), ...data.meta]
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: plugins,
      src: 'getCommunityProfilePlugins',
    }))
    return plugins
  })
}, ({
  profileId,
}) => `GET_COMMUNITY_PROFILE_PLUGINS_${profileId}`)
const getOrgPublishedPluginsThunk = createOptimistThunk((dispatch, orgId, {
  loadingKey,
}) => {
  const request = pluginAPIService.getOrg({
    orgId,
  })
  setupLoadingStateHandler(request, dispatch, loadingKey)
  return request.then(({
    data,
  }) => {
    const plugins = data.meta
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: plugins,
      src: 'getOrgPublishedPlugins',
    }))
    return plugins
  })
}, orgId => `GET_ORG_PUBLISHED_PLUGINS_${orgId}`)
const getOrgPublishedWidgetsThunk = createOptimistThunk(async (dispatch, orgId, {
  loadingKey,
}) => {
  try {
    dispatch.dispatch(loadingStatePutLoading({
      key: loadingKey,
    }))
    const response = await widgetAPIClient.getOrg({
      orgId,
    })
    const widgets = response?.data?.meta || []
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: widgets,
      src: 'getOrgPublishedWidgets',
    }))
    dispatch.dispatch(loadingStatePutSuccess({
      key: loadingKey,
    }))
    return widgets
  }
  catch (error) {
    FlashActions.flash(error.message || getI18nString('community.actions.an_error_occurred_while_trying_to_fetch_the_org_widgets_list'))
    dispatch.dispatch(loadingStatePutFailure({
      key: loadingKey,
    }))
    return []
  }
}, orgId => `GET_ORG_PUBLISHED_WIDGETS_${orgId}`)
async function updatePluginVersion(resource, pluginVersion, playgroundFilePublishType) {
  if (resource.current_plugin_version_id === null || !resource.id) {
    throw new Error(getI18nString('community.actions.resource_is_invalid'))
  }
  let iconFileSize = 0
  if (pluginVersion.iconBlob) {
    iconFileSize = validateExtensionIconImage(pluginVersion.iconBlob)
  }
  let coverFileSize = 0
  if (pluginVersion.coverBlob) {
    coverFileSize = validateArtworkImage(pluginVersion.coverBlob)
  }
  const carouselMedia = pluginVersion.carouselMedia
  const {
    uploadImages,
    uploadVideos,
    allMedia,
  } = prepareMediaUploadData(carouselMedia)
  const uploadUrls = await PluginUploadApi.postPluginImagesUpload(resource.id, resource.is_widget, uploadImages)
  let iconUploadPromise = Promise.resolve(false)
  const iconBlob = pluginVersion.iconBlob
  if (iconBlob !== void 0) {
    iconUploadPromise = readImageBytes(iconBlob).then(bytes => uploadImageWithPresignedUrl(uploadUrls.iconUploadUrl, iconBlob, bytes)).then(() => true).catch((error) => {
      reportError(ServiceCategories.COMMUNITY, error)
      const message = resolveMessage(error, getI18nString('community.actions.could_not_connect_to_the_server'))
      throw new Error(isWidget(resource)
        ? getI18nString('community.actions.error_uploading_widget_icon_error', {
            error: message,
          })
        : getI18nString('community.actions.error_uploading_plugin_icon_error', {
            error: message,
          }))
    })
  }
  let coverUploadPromise: Promise<boolean | Error> = Promise.resolve(false)
  const coverBlob = pluginVersion.coverBlob
  if (coverBlob !== void 0) {
    coverUploadPromise = readImageBytes(coverBlob).then(bytes => uploadImageWithPresignedUrl(uploadUrls.coverImageUploadUrl, coverBlob, bytes)).then(() => true).catch((error) => {
      reportError(ServiceCategories.COMMUNITY, error)
      return new Error(isWidget(resource)
        ? getI18nString('community.actions.error_uploading_widget_artwork_image_error', {
            error: resolveMessage(error, error.data?.message || 'unknown error'),
          })
        : getI18nString('community.actions.error_uploading_plugin_artwork_image_error', {
            error: resolveMessage(error, error.data?.message || 'unknown error'),
          }))
    })
  }
  const {
    snapshotBlob,
  } = pluginVersion
  let snapshotUploadPromise: Promise<boolean | Error> = Promise.resolve(false)
  if (snapshotBlob !== void 0) {
    snapshotUploadPromise = readImageBytes(snapshotBlob).then((bytes) => {
      if (!uploadUrls.snapshotUploadUrl) {
        throw new Error('Snapshot upload url is missing')
      }
      return uploadImageWithPresignedUrl(uploadUrls.snapshotUploadUrl, snapshotBlob, bytes)
    }).then(() => true).catch((error) => {
      reportError(ServiceCategories.COMMUNITY, error)
      return new Error(getI18nString('community.actions.error_uploading_widget_snapshot_image_error', {
        error: resolveMessage(error, error.data?.message || 'unknown error'),
      }))
    })
  }
  const carouselUploadPromises = uploadCarouselImages(uploadUrls.carouselImages, carouselMedia)
  const [iconUploaded, coverUploaded, snapshotUploaded] = await Promise.all([iconUploadPromise, coverUploadPromise, snapshotUploadPromise, ...carouselUploadPromises])
  const videoUploadPromises = uploadVideos.map(video => uploadVideoWithThumbnail(getResourceTypeLabel(resource, {
    pluralized: true,
  }), resource.id, {
    sha1: video.sha1,
    bytes: video.bytes,
  }, video.video_thumbnail_buffer, video.video_thumbnail_sha1).then((result) => {
    allMedia.push({
      carousel_position: video.carousel_position,
      sha1: result.sha1,
      video_file_uuid: result.videoFileUuid,
      video_thumbnail_sha1: result.videoThumbnailSha1,
    })
  }).then(() => true).catch((error) => {
    reportError(ServiceCategories.COMMUNITY, error)
    return new Error(getI18nString('community.actions.error_uploading_plugin_video_error', {
      error: resolveMessage(error, error.data?.message || 'unknown error'),
    }))
  }))
  await Promise.all(videoUploadPromises)
  const {
    data,
  } = await sendWithRetry.put(`/api/${getResourceTypeLabel(resource, {
    pluralized: true,
  })}/${resource.id}/versions/${pluginVersion.id}`, {
    icon_uploaded: iconUploaded,
    cover_image_uploaded: coverUploaded,
    snapshot_uploaded: snapshotUploaded,
    carousel_media: allMedia,
    name: pluginVersion.name,
    description: pluginVersion.description,
    tagline: pluginVersion.tagline,
    creator_policy: pluginVersion.creatorPolicy,
    release_notes: pluginVersion.releaseNotes,
    comments_setting: resource.comments_setting,
    category_id: resource.category_id,
    image_upload_nonce: uploadUrls.imageUploadNonce,
    playground_fig_file_key: pluginVersion.playground_fig_file_key,
    playground_file_publish_type: playgroundFilePublishType,
  }).catch((error) => {
    reportError(ServiceCategories.COMMUNITY, error)
    return new Error(getI18nString('community.actions.error_finalizing_plugin_error', {
      error: resolveMessage(error, error.data?.message || 'unknown error'),
    }))
  }) as any
  const responseData = data.meta
  const publishedPlugin = responseData.plugin
  if (publishedPlugin.id !== resource.id) {
    throw new Error(getI18nString('community.actions.the_published_resource_i_ds_do_not_match'))
  }
  trackEventAnalytics('Hub Plugin Update Version', {
    pluginId: resource.id,
    isWidget: resource.is_widget,
    iconFileSize,
    coverFileSize,
  })
  return {
    publishedPlugin,
    profile: responseData.profile,
  }
}
async function publishNewPluginVersion(pluginId, localFileId, pluginVersion, commentsSetting, categoryId, tags, tagsV2, agreedToTos, orgId, isWidget, playgroundFilePublishType) {
  let uploadResponse
  if (!pluginId) {
    throw new Error(getI18nString('community.actions.plugin_id_is_invalid'))
  }
  const [manifest, pluginSource] = await Promise.all([loadPluginManifest(localFileId, {
    resourceType: getPluginWidgetLabel(isWidget),
    isPublishing: true,
  }), loadLocalPluginSource(localFileId)])
  const codeLength = validatePluginCodeSize(pluginSource)
  let iconFileSize = 0
  if (pluginVersion.iconBlob) {
    iconFileSize = validateExtensionIconImage(pluginVersion.iconBlob)
  }
  let coverFileSize = 0
  if (pluginVersion.coverBlob) {
    coverFileSize = validateArtworkImage(pluginVersion.coverBlob)
  }
  const carouselMedia = pluginVersion.carouselMedia
  const {
    uploadImages,
    uploadVideos,
    allMedia,
  } = prepareMediaUploadData(carouselMedia)
  const uploadData = {
    manifest,
    release_notes: pluginVersion.releaseNotes,
    name: pluginVersion.name,
    description: pluginVersion.description,
    tagline: pluginVersion.tagline,
    creator_policy: pluginVersion.creatorPolicy,
    tags,
    tags_v2: tagsV2,
    category_id: categoryId,
    images_sha1: uploadImages,
  }
  try {
    uploadResponse = await PluginUploadApi.postPluginUpload(uploadData, pluginId, isWidget)
  }
  catch (error) {
    reportError(ServiceCategories.COMMUNITY, error)
    return new Error(resolveMessage(error, getI18nString('community.actions.could_not_connect_to_the_server')))
  }
  const {
    codeUploadUrl,
    iconUploadUrl,
    coverImageUploadUrl,
    snapshotUploadUrl,
    signature,
    versionId,
    imageUploadNonce,
    carouselImages,
  } = uploadResponse
  let codeUploadPromise = Promise.resolve(false)
  if (pluginSource) {
    codeUploadPromise = uploadPluginCode(codeUploadUrl, pluginSource).then(() => true).catch((error) => {
      reportError(ServiceCategories.COMMUNITY, error)
      const errorMessage = parseUploadError(error) ?? resolveMessage(error, getI18nString('community.actions.could_not_connect_to_the_server'))
      throw new Error(isWidget
        ? getI18nString('community.actions.error_uploading_widget_code_error', {
            error: errorMessage,
          })
        : getI18nString('community.actions.error_uploading_plugin_code_error', {
            error: errorMessage,
          }))
    })
  }
  let iconUploadPromise = Promise.resolve(false)
  const iconBlob = pluginVersion.iconBlob
  if (iconBlob != null) {
    iconUploadPromise = readImageBytes(iconBlob).then(bytes => uploadImageWithPresignedUrl(iconUploadUrl, iconBlob, bytes)).then(() => true).catch((error) => {
      reportError(ServiceCategories.COMMUNITY, error)
      const errorMessage = parseUploadError(error) ?? resolveMessage(error, error.data?.message || 'unknown error')
      throw new Error(isWidget
        ? getI18nString('community.actions.error_uploading_widget_icon_error', {
            error: errorMessage,
          })
        : getI18nString('community.actions.error_uploading_plugin_icon_error', {
            error: errorMessage,
          }))
    })
  }
  let coverUploadPromise = Promise.resolve(false)
  const coverBlob = pluginVersion.coverBlob
  if (coverBlob != null) {
    coverUploadPromise = readImageBytes(coverBlob).then(bytes => uploadImageWithPresignedUrl(coverImageUploadUrl, coverBlob, bytes)).then(() => true).catch((error) => {
      reportError(ServiceCategories.COMMUNITY, error)
      const errorMessage = parseUploadError(error) ?? resolveMessage(error, getI18nString('community.actions.could_not_connect_to_the_server'))
      throw new Error(isWidget
        ? getI18nString('community.actions.error_uploading_widget_artwork_image_error', {
            error: errorMessage,
          })
        : getI18nString('community.actions.error_uploading_plugin_artwork_image_error', {
            error: errorMessage,
          }))
    })
  }
  const {
    snapshotBlob,
  } = pluginVersion
  let snapshotUploadPromise = Promise.resolve(false)
  if (snapshotBlob != null && snapshotUploadUrl) {
    snapshotUploadPromise = readImageBytes(snapshotBlob).then(bytes => uploadImageWithPresignedUrl(snapshotUploadUrl, snapshotBlob, bytes)).then(() => true).catch((error) => {
      reportError(ServiceCategories.COMMUNITY, error)
      throw new Error(getI18nString('community.actions.error_uploading_widget_snapshot_image_error', {
        error: parseUploadError(error) ?? resolveMessage(error, error.data?.message || 'unknown error'),
      }))
    })
  }
  const carouselUploadPromises = uploadCarouselImages(carouselImages, carouselMedia)
  const [codeUploaded, iconUploaded, coverUploaded, snapshotUploaded] = await Promise.all([codeUploadPromise, iconUploadPromise, coverUploadPromise, snapshotUploadPromise, ...carouselUploadPromises])
  const videoUploadPromises = uploadVideos.map(async (video) => {
    try {
      const result = await uploadVideoWithThumbnail(isWidget ? 'widgets' : 'plugins', pluginId, {
        sha1: video.sha1,
        bytes: video.bytes,
      }, video.video_thumbnail_buffer, video.video_thumbnail_sha1)
      allMedia.push({
        carousel_position: video.carousel_position,
        sha1: result.sha1,
        video_file_uuid: result.videoFileUuid,
        video_thumbnail_sha1: result.videoThumbnailSha1,
      })
      return true
    }
    catch (error) {
      reportError(ServiceCategories.COMMUNITY, error)
      return new Error(getI18nString('community.actions.error_uploading_plugin_video_error', {
        error: resolveMessage(error, error.data?.message || 'unknown error'),
      }))
    }
  })
  await Promise.all(videoUploadPromises)
  const {
    data,
  } = await sendWithRetry.put(`/api/${getPluginWidgetLabel(!!isWidget, {
    pluralized: true,
  })}/${pluginId}/versions/${versionId}`, {
    icon_uploaded: iconUploaded,
    cover_image_uploaded: coverUploaded,
    snapshot_uploaded: snapshotUploaded,
    carousel_media: allMedia,
    code_uploaded: codeUploaded,
    comments_setting: commentsSetting,
    category_id: categoryId,
    signature,
    image_upload_nonce: imageUploadNonce,
    agreed_to_tos: agreedToTos,
    org_id: orgId,
    playground_fig_file_key: pluginVersion.playground_fig_file_key,
    playground_file_publish_type: playgroundFilePublishType,
  }).catch((error) => {
    reportError(ServiceCategories.COMMUNITY, error)
    return new Error(isWidget
      ? getI18nString('community.actions.error_finalizing_widget_error', {
          error: resolveMessage(error, error.data?.message || ''),
        })
      : getI18nString('community.actions.error_finalizing_plugin_error', {
          error: resolveMessage(error, error.data?.message || ''),
        }))
  }) as any
  const responseData = data.meta
  const publishedPlugin = responseData.plugin
  if (publishedPlugin.id !== pluginId) {
    throw new Error(getI18nString('community.actions.the_published_resource_i_ds_do_not_match'))
  }
  trackEventAnalytics('Hub Plugin Publish Version', {
    pluginId,
    hasUI: !!manifest.ui,
    apiVersion: manifest.api,
    codeLength,
    iconFileSize,
    coverFileSize,
    isWidget,
    editorType: manifest.editorType?.sort().join(', '),
  })
  return {
    publishedPlugin,
    profile: responseData.profile,
  }
}
export const publishActionCreators = createPublishActionCreators('PLUGIN')
const {
  updateMetadata,
  updateStatus,
  clearMetadataAndStatus,
  clearMetadata,
} = publishActionCreators
const publishPluginVersionThunk = createOptimistThunk(async (dispatch, params) => {
  const {
    pluginVersion,
    localFileId,
    pluginId,
    commentsSetting,
    categoryId,
    callback,
    agreedToTos,
    orgId,
    isWidget,
    playgroundFilePublishType,
    tags,
    tagsV2,
  } = params
  dispatch.dispatch(updateStatus({
    id: localFileId,
    status: {
      code: UploadStatusEnum.UPLOADING,
    },
  }))
  try {
    const {
      publishedPlugin,
      profile,
    } = (await publishNewPluginVersion(pluginId, localFileId, pluginVersion, commentsSetting, categoryId, tags, tagsV2, agreedToTos, orgId, isWidget, playgroundFilePublishType)) as any
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: [publishedPlugin],
      src: 'publishPluginVersion',
    }))
    if (profile) {
      dispatch.dispatch(addAuthedCommunityProfileToHub(profile))
      dispatch.dispatch(putCommunityProfile(profile))
    }
    dispatch.dispatch(updateStatus({
      id: localFileId,
      status: {
        code: UploadStatusEnum.SUCCESS,
      },
    }))
    dispatch.dispatch(clearMetadata({
      id: localFileId,
    }))
    callback()
  }
  catch (error) {
    dispatch.dispatch(updateStatus({
      id: localFileId,
      status: {
        code: UploadStatusEnum.FAILURE,
        error: error.message,
      },
    }))
    const errorMessage = getI18nString('community.actions.could_not_publish_plugin_error', {
      error: resolveMessage(error, error.message),
    })
    if (error instanceof UploadError) {
      enqueueNetworkErrorBell(dispatch.dispatch, getI18nString('check_network_compatibility.error_bell.video_upload.message'))
    }
    else if (!error.message.includes('invalid word')) {
      dispatch.dispatch(VisualBellActions.enqueue({
        message: errorMessage,
        error: true,
      }))
    }
    reportError(ServiceCategories.COMMUNITY, error)
    return new Error(errorMessage)
  }
})
const updatePluginVersionThunk = createOptimistThunk(async (dispatch, params) => {
  const {
    resource,
    pluginVersion,
    callback,
    playgroundFilePublishType,
    localFileIdOrPluginId,
  } = params
  try {
    dispatch.dispatch(updateStatus({
      id: localFileIdOrPluginId,
      status: {
        code: UploadStatusEnum.UPLOADING,
      },
    }))
    const {
      profile,
      publishedPlugin,
    } = await updatePluginVersion(resource, pluginVersion, playgroundFilePublishType)
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: [publishedPlugin],
      src: 'updatePublishedPluginRole',
    }))
    if (profile) {
      dispatch.dispatch(putCommunityProfile(profile))
    }
    dispatch.dispatch(updateStatus({
      id: localFileIdOrPluginId,
      status: {
        code: UploadStatusEnum.SUCCESS,
      },
    }))
    callback()
  }
  catch (error) {
    const errorMessage = resolveMessage(error, error.message)
    if (error instanceof UploadError) {
      enqueueNetworkErrorBell(dispatch.dispatch, getI18nString('check_network_compatibility.error_bell.video_upload.message'))
    }
    else {
      dispatch.dispatch(VisualBellActions.enqueue({
        message: errorMessage,
        error: true,
      }))
    }
    dispatch.dispatch(updateStatus({
      id: localFileIdOrPluginId,
      status: {
        code: UploadStatusEnum.FAILURE,
        error: errorMessage,
      },
    }))
    reportError(ServiceCategories.COMMUNITY, error)
    return new Error(`Failed plugin patchVersion: ${error.message}`)
  }
})
const updatePluginRoleThunk = createOptimistThunk(async (dispatch, {
  pluginId,
  role,
  agreedToTos,
  isWidget,
}) => {
  const roleData = {
    org_id: role.org ? role.org.id : void 0,
    is_public: role.is_public,
    agreed_to_tos: agreedToTos,
  }
  const request = isWidget ? sendWithRetry.put(`/api/widgets/${pluginId}/roles`, roleData) : sendWithRetry.put(`/api/plugins/${pluginId}/roles`, roleData)
  await request.then(({
    data,
  }) => {
    const resource = data.meta
    trackEventAnalytics('Hub Plugin Publish Role', {
      pluginId,
      toPublic: resource.roles.is_public,
      toOrg: !!resource.roles.org,
      needApproval: isResourcePendingPublishing(resource),
      isWidget,
    })
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: [resource],
      src: 'updatePublishedPluginRole',
    }))
  }).catch((error) => {
    dispatch.dispatch(VisualBellActions.enqueue({
      message: getI18nString('community.publishing.could_not_publish_plugin_error', {
        error: resolveMessage(error, error.data?.message),
      }),
      error: true,
    }))
    reportError(ServiceCategories.COMMUNITY, error)
  })
})
const updatePublishedPluginThunk = createOptimistThunk(async (dispatch, params) => {
  if (params.authorOrgId && params.authorTeamId) {
    console.error('Attempting to set both authorOrgId and authorTeamId while publishing')
    return
  }
  const {
    isWidget,
    pluginId,
  } = params
  const updateData = {
    tags: params.tags,
    tags_v2: params.tagsV2,
    support_contact: params.supportContact,
    author_org_id: params.authorOrgId,
    author_team_id: params.authorTeamId,
    publisher_ids: params.publisherIds,
    hide_related_content_by_others: params.hideRelatedContentByOthers,
    agreed_to_tos: params.agreedToTos,
    is_paid: params.isPaid,
    is_subscription: params.isSubscription,
    price: params.price,
    has_freemium_code: params.hasFreemiumCode,
    category_id: params.categoryId,
    is_public: params.isPublic,
    annual_discount_percentage: params.annualDiscount,
    is_annual_discount_active: params.isAnnualDiscountActive,
  }
  const request = isWidget ? sendWithRetry.put(`/api/widgets/${pluginId}`, updateData) : sendWithRetry.put(`/api/plugins/${pluginId}`, updateData)
  await request.then(({
    data,
  }) => {
    const resource = data.meta
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: [resource],
      src: 'updatePublishedPlugin',
    }))
    params.onSuccess?.()
  }).catch((error) => {
    dispatch.dispatch(VisualBellActions.enqueue({
      message: getI18nString('community.publishing.could_not_publish_plugin_error', {
        error: resolveMessage(error, error.data?.message),
      }),
      error: true,
    }))
    reportError(ServiceCategories.COMMUNITY, error)
  })
})
const unpublishPluginThunk = createOptimistThunk((dispatch, {
  resource,
}) => {
  sendWithRetry.del(`/api/${getResourceTypeLabel(resource, {
    pluralized: true,
  })}/${resource.id}`).then(({
    data,
  }) => {
    const unpublishedResource = data.meta
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: [unpublishedResource],
      src: 'unpublishPublishedPlugin',
    }))
    trackEventAnalytics('Hub Unpublish Plugin', {
      pluginId: resource.id,
      ...getResourceRoleInfo(resource),
    })
  }).catch((error) => {
    dispatch.dispatch(VisualBellActions.enqueue({
      message: isWidget(resource)
        ? getI18nString('community.actions.could_not_publish_widget_error', {
            error: resolveMessage(error, error.data?.message),
          })
        : getI18nString('community.actions.could_not_publish_plugin_error', {
            error: resolveMessage(error, error.data?.message),
          }),
      error: true,
    }))
    reportError(ServiceCategories.COMMUNITY, error)
  })
})
const getResourceVersionsThunk = createOptimistThunk((dispatch, {
  id,
  resourceType,
}, {
  loadingKey,
}) => {
  const handleSuccess = resource => dispatch.dispatch(mergePublishedPluginThunk({
    publishedPlugins: [resource],
    src: 'getResourceVersions',
    overrideInstallStatus: true,
  }))
  const request = resourceType === HubTypeEnum.WIDGET
    ? widgetAPIClient.getVersions({
        widgetId: id,
      })
    : pluginAPIService.getVersions({
        pluginId: id,
      })
  setupLoadingStateHandler(request, dispatch, loadingKey)
  request.then(({
    data,
  }) => {
    handleSuccess(data.meta.plugin)
  }).catch((error) => {
    console.log(`Versions of ${resourceType} with id ${id} cannot be fetched at this time:`, error.data?.message)
  })
}, ({
  id,
}) => `GET_PLUGIN_VERSIONS_${id}`)
const setPluginPublisherRoleThunk = createOptimistThunk(async (dispatch, params) => {
  const {
    role,
    userId,
    resource,
  } = params
  try {
    const response = resource.is_widget
      ? await sendWithRetry.put(`/api/widgets/${resource.id}/publishers/${userId}`, {
          role,
        })
      : await sendWithRetry.put(`/api/plugins/${resource.id}/publishers/${userId}`, {
          role,
        })
    let updatedPlugin = response.data.meta.plugin
    const currentUser = dispatch.getState().user
    if (role === PublisherRole.NONE && userId === currentUser?.id) {
      updatedPlugin.plugin_publishers = {
        accepted: [],
        pending: [],
      }
    }
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: [updatedPlugin],
      src: 'setPluginPublisherRole',
    }))
    const state = dispatch.getState()
    const {
      publishingPlugins,
      localPlugins,
      publishedPlugins,
      publishedWidgets,
      currentUserOrgId,
      authedProfilesById,
    } = state
    const localPlugin = Object.values<ObjectOf>(localPlugins).find(plugin => plugin.plugin_id === resource.id)
    const metadataId = localPlugin?.localFileId ?? resource.id
    const publishingData = getPublishingData({
      ...getPermissionsState(state),
      currentUserOrgId,
      localPlugins,
      publishedPlugins,
      publishedWidgets,
      authedProfilesById,
    }, localPlugin?.localFileId)
    const updatedMetadata = {
      ...publishingPlugins[metadataId].metadata,
      author: publishingData.author,
      publishers: publishingData.publishers,
      creators: publishingData.creators,
      blockPublishingOnToS: publishingData.blockPublishingOnToS,
    }
    dispatch.dispatch(updateMetadata({
      id: metadataId,
      metadata: updatedMetadata,
    }))
  }
  catch (error) {
    dispatch.dispatch(VisualBellActions.enqueue({
      message: resolveMessage(error, error.message),
      error: true,
    }))
    reportError(ServiceCategories.COMMUNITY, error)
    return new Error(error.message)
  }
})
export function uploadPluginCode(uploadUrl, pluginSource) {
  const {
    fields,
    codePath,
    signedCloudfrontUrl,
  } = uploadUrl
  const formData = new FormData()
  Object.entries(fields).forEach(([key, value]: [string, any]) => formData.append(key, value))
  formData.set('Content-Type', 'text/javascript')
  formData.append('file', pluginSource)
  if (signedCloudfrontUrl && getFeatureFlags().ext_s3_url_use_figma_domains) {
    return sendWithRetry.crossOriginPut(signedCloudfrontUrl, pluginSource, {
      raw: true,
      headers: {
        'Content-Type': 'text/javascript',
        'Cache-Control': ', max-age=86400',
        'x-amz-acl': 'bucket-owner-full-control',
      },
    })
  }
  else {
    return sendWithRetry.crossOriginPost(codePath, formData, {
      raw: true,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Cache-Control': ', max-age=86400',
      },
    })
  }
}
export function parseUploadError(error) {
  const data = error.data
  if (!data || typeof data !== 'string') {
    return
  }
  const xmlDoc = new DOMParser().parseFromString(data, 'text/xml')
  const codeElements = xmlDoc.getElementsByTagName('Code')
  if (codeElements && codeElements[0] && codeElements[0].textContent === 'EntityTooLarge') {
    return getI18nString('community.actions.file_too_large')
  }
}
export const GV = deleteAllWidgets
export const l5 = mergePublishedPlugin
export const l7 = deleteAllPlugins
export const Qi = mergePublishedPluginThunk
export const uV = putAllWidgets
export const Vx = putAllPlugins
export const $Z = getCanvasWidgetVersion
export const Cf = fetchAndCacheWidgetVersionsThunk
export const Dl = publishPluginVersionThunk
export const Ij = clearMetadataAndStatus
export const KJ = publishActionCreators
export const L4 = replaceFeaturedPluginAction
export const LP = getOrgPublishedPluginsThunk
export const O8 = fetchPublishedWidgetsThunk
export const R8 = updatePublishedPluginThunk
export const Vp = updatePluginVersionThunk
export const W9 = fetchCanvasWidgetVersions
export const a8 = getOrgPublishedWidgetsThunk
export const af = getResourceVersionsThunk
export const b6 = cacheWidgetVersionsThunk
export const et = unpublishPluginThunk
export const f1 = fetchPublishedPluginsThunk
export const fd = unpublishedWidgetsQuery
export const fs = updatePublishedCanvasWidgetVersionsAction
export const fy = updateMetadata
export const gD = updateStatus
export const n1 = parseUploadError
export const pZ = getCommunityProfilePluginsThunk
export const pm = clearMetadata
export const se = unpublishedPluginsQuery
export const uF = initializeUserPublishedResourcesThunk
export const uT = uploadPluginCode
export const uX = getPublishedResourceThunk
export const uw = updateFetchedCanvasWidgetVersionsAction
export const wx = setPluginPublisherRoleThunk
export const zn = updatePluginRoleThunk
