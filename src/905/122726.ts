import { getCommunityHubNavigation } from '../905/428660'
import { communityPagePaths } from '../905/528121'
import { customHistory } from '../905/612521'
import { parseQuery } from '../905/634134'
import { languageCodes } from '../905/816253'
import { getProfileRouteHref } from '../905/934145'
import { StatusType, statusTypeToNumber } from '../figma_app/175992'
import { M3 } from '../figma_app/198840'
import { getPluginMetadata, getWidgetMetadata } from '../figma_app/300692'
import { ResourceType } from '../figma_app/354658'
import { throwTypeError } from '../figma_app/465776'
import { buildCommunityPath } from '../figma_app/471982'
import { buildBrowseOrSearchUrl, setupBrowseRoute } from '../figma_app/640564'
import { OnboardingStep, UserProfileTab, viewMappings } from '../figma_app/707808'
import { getResourceName } from '../figma_app/777551'

/**
 * Handles community hub navigation and view selection logic.
 * Original class: $$y0
 */
export class CommunityHubNavigator {
  /**
   * Maps a path and query to a selected view object.
   * @param context - Context object containing user info.
   * @param pathSegments - Array of path segments.
   * @param queryString - Query string.
   * @returns Selected view object or null.
   */
  pathToSelectedView(context: any, pathSegments: string[], queryString?: string): any {
    // Default view object
    const defaultView = { view: 'communityHub' }
    // Clone path segments for manipulation
    const segments = [...pathSegments]

    // Find matching community page path
    const matchedKey = Object.keys(communityPagePaths).find((key) => {
      const pagePath = communityPagePaths[key]
      return pagePath && pathSegments.join('/').startsWith(pagePath)
    })

    // Handle language-specific community paths
    pathSegments = pathSegments.slice(3)
    pathSegments.unshift('', 'community')
    if (
      matchedKey
      && matchedKey !== languageCodes.EN
      && pathSegments[1] === 'community'
    ) {
      const query = queryString ? parseQuery(queryString) : {}

      // Monetization redirect view
      if (pathSegments[2] === 'seller') {
        return {
          view: 'communityHub',
          subView: 'monetizationRedirectView',
          interstitialType: OnboardingStep.ONBOARDING,
          redirectUrl: query.redirect_url,
        }
      }

      // Hub file embed view
      if (
        pathSegments[2] === 'file'
        && pathSegments[3]
        && pathSegments.length > 4
        && pathSegments[pathSegments.length - 1] === 'embed'
      ) {
        return {
          ...defaultView,
          subView: 'hubFileEmbed',
          hubFileId: pathSegments[3],
        }
      }

      // File, plugin, or widget view
      if (['file', 'plugin', 'widget'].includes(pathSegments[2]) && pathSegments[3]) {
        const [resourceType, resourceId] = [pathSegments[2], pathSegments[3]]
        const commentThreadId = query.comment
        const nav = getCommunityHubNavigation(resourceType as 'file', resourceId)
        const urlParams = new URLSearchParams(queryString)
        const viewObj: ObjectOf = {
          ...nav,
          triggerCheckout: urlParams.get('checkout') ?? null,
          triggerFreemiumPreview: urlParams.get('freemium_preview') === '1',
          commentThreadId,
          rating: query.rating,
        }
        if (resourceType === 'file') {
          const previewState = query.preview
          if (previewState)
            viewObj.fullscreenState = previewState
        }
        return viewObj
      }

      // Iframe modal view
      if (pathSegments[2] === 'iframe_modal') {
        let modalType = viewMappings.ACCOUNT_SETTINGS
        const lastSegment = pathSegments[pathSegments.length - 1]
        if (lastSegment === 'settings') {
          modalType = viewMappings.ACCOUNT_SETTINGS
        }
        else if (lastSegment === 'publish') {
          modalType = viewMappings.UNIVERSAL_PUBLISHING
        }
        return {
          view: 'modalInIFrame',
          modalInIFrameType: modalType,
        }
      }

      // Collections or templates view
      if (pathSegments[2] === 'collections') {
        return {
          view: 'communityHub',
          subView: 'searchAndBrowse',
          data: undefined,
        }
      }
      if (pathSegments[2] === 'templates' && pathSegments[3]) {
        return {
          view: 'communityHub',
          subView: 'searchAndBrowse',
          data: undefined,
        }
      }

      // Default search and browse view
      return {
        view: 'communityHub',
        subView: 'searchAndBrowse',
        data: setupBrowseRoute(segments.join('/'), queryString),
      }
    }

    // Handle user profile view
    if (pathSegments[1]?.startsWith('@')) {
      const handle = pathSegments[1].slice(1)?.toLowerCase()
      const { user } = context
      if (!handle)
        return null
      let profileTab = pathSegments[2]
      if (
        profileTab === UserProfileTab.METRICS
        && statusTypeToNumber(user?.stripe_account_status) < statusTypeToNumber(StatusType.ACCEPTED)
      ) {
        profileTab = UserProfileTab.RESOURCES
      }
      return {
        ...defaultView,
        subView: 'handle',
        handle,
        profileTab,
      }
    }

    return null
  }

  /**
   * Determines if a history change is required between two views.
   * Original method: requireHistoryChange
   */
  requireHistoryChange(prevView: any, nextView: any): boolean {
    if (prevView.view !== 'communityHub' || nextView.view !== 'communityHub') {
      return prevView.view === 'communityHub' !== (nextView.view === 'communityHub')
    }
    if (prevView.subView === 'handle' && nextView.subView === 'handle') {
      return prevView.handle !== nextView.handle || prevView.profileTab !== nextView.profileTab
    }
    if (prevView.subView === 'plugin' && nextView.subView === 'plugin') {
      return prevView.publishedPluginId !== nextView.publishedPluginId
    }
    if (prevView.subView === 'widget' && nextView.subView === 'widget') {
      return prevView.widgetId !== nextView.widgetId
    }
    if (prevView.subView === 'hubFile' && nextView.subView === 'hubFile') {
      return prevView.hubFileId !== nextView.hubFileId
    }
    return prevView.subView !== nextView.subView
  }

  /**
   * Gets the display name for the selected view.
   * Original method: selectedViewName
   */
  selectedViewName(selectedView: any, publishedData: any): string | null {
    if (selectedView.view !== 'communityHub')
      return null
    switch (selectedView.subView) {
      case 'plugin': {
        const pluginMeta = getPluginMetadata(selectedView.publishedPluginId, publishedData.publishedPlugins)
        return getResourceName(pluginMeta)
      }
      case 'widget': {
        const widgetMeta = getWidgetMetadata(selectedView.widgetId, publishedData.publishedWidgets)
        return getResourceName(widgetMeta)
      }
      case 'hubFile': {
        const fileMeta = M3(selectedView.hubFileId, publishedData.hubFiles)
        return getResourceName(fileMeta)
      }
      case 'hubFileEmbed':
      case 'searchAndBrowse':
        return 'Community'
      case 'handle':
        return `@${selectedView.handle}`
      case 'monetizationRedirectView':
        return 'Stripe onboarding complete'
      default:
        throwTypeError(selectedView)
    }
  }

  /**
   * Converts a selected view object to a path string.
   * Original method: selectedViewToPath
   */
  selectedViewToPath(selectedView: any, publishedData: any): string | null {
    if (selectedView.view === 'modalInIFrame') {
      return `/community/iframe_modal/${selectedView.modalInIFrameType}`
    }
    if (selectedView.view !== 'communityHub') {
      return null
    }
    if (
      selectedView.subView === 'monetizationRedirectView'
      && selectedView.interstitialType === OnboardingStep.ONBOARDING
    ) {
      return '/community/seller/onboarding/completed'
    }
    if (selectedView.subView === 'plugin' || selectedView.subView === 'widget') {
      const resourceName = this.selectedViewName(selectedView, publishedData)
      let path = buildCommunityPath({
        path: selectedView.subView,
        id: selectedView.subView === 'plugin' ? selectedView.publishedPluginId : selectedView.widgetId,
        name: resourceName,
      })
      if (selectedView.triggerCheckout !== null && selectedView.triggerCheckout !== undefined) {
        path += `?checkout=${selectedView.triggerCheckout}`
      }
      if (selectedView.commentThreadId) {
        path += `${!path.includes('?') ? '?' : '&'}comment=${selectedView.commentThreadId}`
      }
      if (selectedView.rating) {
        path += `${!path.includes('?') ? '?' : '&'}rating=${selectedView.rating}`
      }
      return path
    }
    if (selectedView.subView === 'hubFile') {
      const params: Record<string, string> = {}
      if (selectedView.commentThreadId)
        params.comment = selectedView.commentThreadId
      if (selectedView.fullscreenState)
        params.preview = selectedView.fullscreenState
      if (selectedView.triggerCheckout !== null && selectedView.triggerCheckout !== undefined) {
        params.checkout = selectedView.triggerCheckout
      }
      if (selectedView.triggerFreemiumPreview)
        params.freemium_preview = '1'
      if (selectedView.rating)
        params.rating = selectedView.rating
      const resourceName = this.selectedViewName(selectedView, publishedData)
      const basePath = buildCommunityPath({
        path: ResourceType.FILE,
        id: selectedView.hubFileId,
        name: resourceName,
      })
      const queryString = new URLSearchParams(params).toString()
      return `${basePath}${queryString ? `?${queryString}` : ''}`
    }
    if (selectedView.subView === 'hubFileEmbed') {
      return `/community/file/${selectedView.hubFileId}/embed`
    }
    if (selectedView.subView === 'handle') {
      return getProfileRouteHref(selectedView.handle, selectedView.profileTab, publishedData.user)
    }
    if (selectedView.subView === 'searchAndBrowse') {
      return selectedView.data ? buildBrowseOrSearchUrl(selectedView.data) : customHistory.location.pathname
    }
    return '/community'
  }
}

// Export with refactored name
export const B = CommunityHubNavigator
