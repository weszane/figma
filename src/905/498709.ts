import { useCallback, useEffect } from "react"
import { atom, atomStoreManager } from "../figma_app/27355"
import { createEventEmitter, useEventSubscription } from "../figma_app/516794"

export function createRegisterMenuEvent() {
  // Create event emitters for opening and closing the menu
  const openEventEmitter = createEventEmitter()
  const closeEventEmitter = createEventEmitter()

  // Create an atom to track the open/close state
  const isOpenAtom = atom(false)

  /**
   * Custom hook to register menu events and synchronize state
   * @param menuManager - The menu manager object with setOpen and isOpen properties
   */
  const useRegisterMenu = (menuManager: { setOpen: (isOpen: boolean) => void, isOpen: boolean }) => {
    const { setOpen } = menuManager

    // Subscribe to open events
    useEventSubscription(
      openEventEmitter,
      useCallback(() => {
        setOpen(true)
      }, [setOpen]),
    )

    // Subscribe to close events
    useEventSubscription(
      closeEventEmitter,
      useCallback(() => {
        setOpen(false)
      }, [setOpen]),
    )

    // Sync the atom store with the current open state
    useEffect(() => {
      atomStoreManager.set(isOpenAtom, menuManager.isOpen)
    }, [menuManager.isOpen, isOpenAtom])
  }

  return {
    useRegisterMenu,
    open: () => openEventEmitter.emit(),
    close: () => closeEventEmitter.emit(),
    isOpenAtom,
  }
}
export const K = createRegisterMenuEvent
