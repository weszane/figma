import { useSelector } from 'react-redux'
import { jsx, jsxs } from 'react/jsx-runtime'
import { MediaQuerySvgComponent } from '../905/331623'
import { D8, kL, oi, t7, VT, YV, zc } from '../905/498633'
import { A as SVG } from '../5724/83071'
import { A as SVG2 } from '../6041/915738'
import { A as SVG1 } from '../6041/980297'
import { Ro } from '../figma_app/805373'
import { getCurrentFileType } from '../figma_app/976749'

/**
 * Renders an avatar or icon based on user, profile, org, or team context.
 * Original function name: $$p0
 * @param props - Avatar rendering options and entity IDs.
 * @returns JSX.Element | null
 */
export function renderAvatar(props: {
  userId: string
  profileId?: string
  orgId?: string
  teamId?: string
  size?: number
  forceAvatar?: boolean
  skipExternalTeamsIcon?: boolean
  skipUserIcon?: boolean
  personalSpaceIcon?: any
  personalSpaceIcon1x?: any
  forceNoWhiteboardBorder?: boolean
  className?: string
  ['data-tooltip-type']?: string
  ['data-tooltip']?: string
  ['data-tooltip-show-immediately']?: boolean
  ['data-tooltip-max-width']?: number
  ['data-tooltip-offset-y']?: number
}) {
  // Select user, profile, org, and team from Redux store
  const user = useSelector<AppState>(state => state.authedUsers.byId[props.userId])
  const profile = useSelector<AppState>(state => props.profileId ? state.authedProfilesById[props.profileId] : null)
  const org = useSelector<AppState>(state => props.orgId ? state.orgById[props.orgId] : null)
  const team = useSelector<AppState>(state => props.teamId ? state.teams[props.teamId] : null)
  const isWhiteboard = getCurrentFileType() === 'whiteboard'
  const showAvatar = !props.forceAvatar
  const sizeClass = props.size === 16 ? oi : props.size === 32 ? YV : D8

  let content: React.ReactElement | null = null

  // Render external teams icon if not skipped
  if (!props.skipExternalTeamsIcon) {
    content = props.size === 16
      ? jsx(MediaQuerySvgComponent, { svg: SVG })
      : jsx(MediaQuerySvgComponent, { svg: SVG2, fallbackSvg: SVG1 })
  }

  // Render user icon if allowed
  if (showAvatar && !props.skipUserIcon) {
    if (props.personalSpaceIcon && props.personalSpaceIcon1x) {
      content = jsx(MediaQuerySvgComponent, {
        svg: props.personalSpaceIcon,
        fallbackSvg: props.personalSpaceIcon1x,
      })
    }
    else if (user) {
      content = jsxs('div', {
        className: zc,
        children: [
          jsx(Ro, {
            size: props.size ?? 24,
            entity: profile || user,
          }),
          jsx('div', { className: sizeClass }),
        ],
      })
    }
  }

  // Render org or team icon if available
  const entity = org || team
  if (entity) {
    content = jsxs('div', {
      className: zc,
      children: [
        jsx(Ro, {
          size: props.size ?? 24,
          entity,
          className: isWhiteboard && !props.forceNoWhiteboardBorder ? VT : undefined,
        }),
        !isWhiteboard && jsx('div', { className: sizeClass }),
      ],
    })
  }

  // Wrap content with tooltip and className if content exists
  if (content) {
    return jsx('div', {
      'className': `${props.size === 16 ? t7 : kL} ${props.className || ''}`,
      'data-tooltip-type': props['data-tooltip-type'],
      'data-tooltip': props['data-tooltip'],
      'data-tooltip-show-immediately': props['data-tooltip-show-immediately'],
      'data-tooltip-max-width': props['data-tooltip-max-width'],
      'data-tooltip-offset-y': props['data-tooltip-offset-y'],
      'children': content,
    })
  }
  return null
}

/** Exported as n (original: $$p0) */
export const n = renderAvatar
