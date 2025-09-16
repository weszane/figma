import { throwTypeError } from '../figma_app/465776'
/**
 * Determines if the given view and subView are valid for the community hub.
 * @param params - The view parameters to check.
 * @returns True if the subView is allowed in the community hub, false otherwise.
 */
export interface CommunityHubViewParams {
  view: string
  subView: string
}

/**
 * Checks if the provided parameters match allowed community hub subViews.
 * Original function name: $$r0
 */
export function isCommunityHubSubView(params: CommunityHubViewParams): boolean {
  if (params.view !== 'communityHub')
    return false

  switch (params.subView) {
    case 'plugin':
    case 'widget':
    case 'hubFile':
    case 'searchAndBrowse':
    case 'handle':
      return true
    case 'hubFileEmbed':
    case 'monetizationRedirectView':
      return false
    default:
      // throwTypeError is imported from ../figma_app/465776
      return throwTypeError(params)
  }
}

/** Exported alias for isCommunityHubSubView (original: V) */
export const V = isCommunityHubSubView
