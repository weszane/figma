import { Link } from '../905/438674'
import { LinkPrimitive } from '../figma_app/496441'
import { withTrackedClick } from '../figma_app/831799'

// Original variable: $$s0, export: Ph
/**
 * A Link component wrapped with tracking functionality.
 */
export const TrackedLink = withTrackedClick(Link)

// Original variable: $$$$o2, export: pW
/**
 * A Link.Button component wrapped with tracking functionality.
 */
export const TrackedLinkButton = withTrackedClick(Link.Button)

// Original variable: $$l1, export: o
/**
 * A LinkPrimitive component wrapped with tracking functionality.
 */
export const TrackedLinkPrimitive = withTrackedClick(LinkPrimitive)

export const Ph = TrackedLink
export const pW = TrackedLinkButton
export const o = TrackedLinkPrimitive
