import { createPortal } from 'react-dom'
import { atom, useAtomWithSubscription } from '../figma_app/27355'
import { yA } from '../figma_app/581520'

const PORTAL_TARGET_ID = 'curator-portal-target'
const PORTAL_TARGET_NO_FULLSCREEN_ID = 'portal-target-no-fullscreen-intercept'

const portalTargetAtom = atom<HTMLElement>(() => {
  let element = document.getElementById(PORTAL_TARGET_ID)
  if (element != null) {
    return element
  }

  element = document.createElement('div')
  element.id = PORTAL_TARGET_ID
  element.classList.add(...yA.split(' '))
  document.body.appendChild(element)
  return element
})

const portalTargetNoFullscreenAtom = atom<HTMLElement>(() => {
  let element = document.getElementById(PORTAL_TARGET_NO_FULLSCREEN_ID)
  if (element != null) {
    return element
  }

  element = document.createElement('div')
  element.id = PORTAL_TARGET_NO_FULLSCREEN_ID
  element.classList.add(...yA.split(' '))
  document.body.appendChild(element)
  return element
})

export interface PortalProps {
  /**
   * The children to render in the portal
   */
  children: React.ReactNode
  /**
   * Whether to intercept fullscreen mode (default: true)
   */
  dataFullscreenIntercept?: boolean
}

/**
 * A portal component that renders children in a designated target element.
 * Creates the target element if it doesn't exist.
 *
 * @param props - The portal props
 * @returns A React portal
 */
export function CuratorPortal({
  children,
  dataFullscreenIntercept = true,
}: PortalProps) {
  const targetElement = useAtomWithSubscription(
    dataFullscreenIntercept ? portalTargetAtom : portalTargetNoFullscreenAtom,
  )

  return createPortal(children, targetElement)
}

export const Q = CuratorPortal
