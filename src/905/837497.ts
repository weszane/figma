import { pluginAPIService } from '../905/3209'
import { createActionCreator } from '../905/73481'
import { mergePublishedPluginThunk } from '../905/172918'
import { createOptimistThunk } from '../905/350402'
import { widgetAPIClient } from '../905/424668'
import { logWarning } from '../905/714362'
import { setPluginAllowlisted, setWidgetsAllowlisted } from '../905/717906'
import { getPluginAllowListKey, getWidgetAllowListKey } from '../figma_app/155287'
import { loadingStatePutFailure, loadingStatePutLoading, loadingStatePutSuccess } from '../figma_app/714946'

export const setPluginAllowlistedAction = setPluginAllowlisted
export const setWidgetsAllowlistedAction = setWidgetsAllowlisted

export const initializePluginAllowlist = createOptimistThunk((dispatch, params) => {
  const orgId = params.orgId || dispatch.getState().currentUserOrgId
  if (!orgId)
    return

  const state = dispatch.getState()
  const fileKey = state.openFile?.key ?? null
  const loadingKey = getPluginAllowListKey(orgId, fileKey)

  dispatch.dispatch(loadingStatePutLoading({ key: loadingKey }))

  pluginAPIService.getOrgWhitelist({
    orgId,
    profileId: params.profileId,
    fileKey,
  }).then(({ data }: { data: ObjectOf }) => {
    const plugins = data.meta
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: plugins,
      src: 'initializeAllowlistedPlugins',
    }))

    const allowlist = plugins.reduce((acc, plugin) => {
      acc[plugin.id] = true
      return acc
    }, {})

    dispatch.dispatch(setPluginAllowlistedAction(allowlist))
    dispatch.dispatch(loadingStatePutSuccess({ key: loadingKey }))
  }).catch((error) => {
    logWarning('plugin allowlist', 'Unable to fetch the plugin allowlist', {
      message: error.message,
    })
    dispatch.dispatch(loadingStatePutFailure({ key: loadingKey }))
  })
})

 export const initializeWidgetAllowlist = createOptimistThunk(async (dispatch, params) => {
  const orgId = params.orgId || dispatch.getState().currentUserOrgId
  if (!orgId)
    return

  const state = dispatch.getState()
  const fileKey = state.openFile?.key ?? null
  const loadingKey = getWidgetAllowListKey(orgId, fileKey)

  dispatch.dispatch(loadingStatePutLoading({ key: loadingKey }))

  try {
    const response = await widgetAPIClient.getOrgWhitelist({
      orgId,
      profileId: params.profileId,
      fileKey,
    })

    const widgets = response?.data?.meta || []
    dispatch.dispatch(mergePublishedPluginThunk({
      publishedPlugins: widgets,
      src: 'initializeAllowlistedWidgets',
    }))

    const allowlist = widgets.reduce((acc, widget) => {
      acc[widget.id] = true
      return acc
    }, {})

    dispatch.dispatch(setWidgetsAllowlistedAction(allowlist))
    dispatch.dispatch(loadingStatePutSuccess({ key: loadingKey }))
  }
  catch (error) {
    logWarning('widget allowlist', 'Unable to fetch the widget allowlist', {
      message: error.message,
    })
    dispatch.dispatch(loadingStatePutFailure({ key: loadingKey }))
  }
})

export const putAllowlistedPlugin = createActionCreator('PUT_ALLOWLISTED_PLUGIN')
export const deleteAllowlistedPlugin = createActionCreator('DEL_ALLOWLISTED_PLUGIN')
export const putAllowlistedWidget = createActionCreator('PUT_ALLOWLISTED_WIDGET')
export const deleteAllowlistedWidget = createActionCreator('DEL_ALLOWLISTED_WIDGET')

export const EE = putAllowlistedWidget
export const Pq = setPluginAllowlistedAction
export const Rg = putAllowlistedPlugin
export const Vl = initializePluginAllowlist
export const XV = deleteAllowlistedPlugin
export const Yw = deleteAllowlistedWidget
export const mV = initializeWidgetAllowlist
export const oO = setWidgetsAllowlistedAction
