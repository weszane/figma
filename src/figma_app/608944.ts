import type { PrimitiveAtom } from 'jotai'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideSpecificModal } from '../905/156213'
import { atom, atomStoreManager, useAtomValueAndSetter } from '../figma_app/27355'
// Original constants: $$o2, $$l0
export const COMPONENT_FLYOUT_MODAL_TYPE = 'ComponentFlyoutModal'
export const COMPONENT_FLYOUT_MODAL_CONTENT = 'ComponentFlyoutModalContent'

// Original atom: d
const flyoutPropsAtom = atom(null) as PrimitiveAtom<any | null>

/**
 * Hook to manage the component flyout modal state and actions.
 * Original function: $$c1
 */
export function useComponentFlyoutModal() {
  const dispatch = useDispatch()
  const modalShown = useSelector<AppState, AppState['modalShown']>(state => state.modalShown)
  const [flyoutProps, setFlyoutProps] = useAtomValueAndSetter(flyoutPropsAtom)

  const updateFlyoutProps = useCallback(
    (props: any) => {
      if (props === null) {
        setFlyoutProps(null)
      }
      else {
        setFlyoutProps(current => (current === null ? null : { ...current, ...props }))
      }
    },
    [setFlyoutProps],
  )

  const closeFlyout = useCallback(() => {
    updateFlyoutProps(null)
    dispatch(hideSpecificModal({ type: COMPONENT_FLYOUT_MODAL_TYPE }))
  }, [dispatch, updateFlyoutProps])

  const isFlyoutOpen = useMemo(
    () => flyoutProps !== null || modalShown?.type === COMPONENT_FLYOUT_MODAL_TYPE,
    [flyoutProps, modalShown?.type],
  )

  return {
    flyoutProps,
    setFlyoutProps,
    updateFlyoutProps,
    closeFlyout,
    isFlyoutOpen,
  }
}

/**
 * Function to close the component flyout modal.
 * Original function: $$u3
 * @param dispatch - The Redux dispatch function.
 */
export function closeComponentFlyoutModal(dispatch: any) {
  atomStoreManager.set(flyoutPropsAtom, null)
  dispatch(hideSpecificModal({ type: COMPONENT_FLYOUT_MODAL_TYPE }))
}

// Refactored exports matching original export names
export const Ev = COMPONENT_FLYOUT_MODAL_CONTENT
export const JA = useComponentFlyoutModal
export const VI = COMPONENT_FLYOUT_MODAL_TYPE
export const qr = closeComponentFlyoutModal
