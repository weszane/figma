import { atom } from 'jotai'
import { atomWithDefault } from 'jotai/utils'
import { useEffect, useState } from 'react'
import { fullscreenValue } from '../figma_app/455680'
/**
 * Checks if fullscreenValue is ready and subscribes to its readiness.
 * Original function: $$s0
 * @returns {boolean} readiness state
 */
export function useFullscreenReady(): boolean {
  const [isReady, setIsReady] = useState(
    fullscreenValue !== undefined && fullscreenValue.isReady(),
  )

  useEffect(() => {
    if (
      fullscreenValue === undefined
      || fullscreenValue.isReady()
    ) {
      return
    }
    fullscreenValue.onReady().then(() => {
      setIsReady(fullscreenValue.isReady())
    })
  }, [])

  return isReady
}

/**
 * Atom that tracks fullscreenValue readiness.
 * Original variable: $$o1
 */
export const fullscreenReadyAtom = (() => {
  const baseAtom = atomWithDefault(
    () => fullscreenValue !== undefined && fullscreenValue.isReady(),
  )

  baseAtom.onMount = (setAtom) => {
    if (
      fullscreenValue === undefined
      || fullscreenValue.isReady()
    ) {
      return
    }
    fullscreenValue.onReady().then(() => {
      setAtom(fullscreenValue.isReady())
    })
  }

  return atom(get => get(baseAtom))
})()

// Export refactored names for external usage
export const q = useFullscreenReady
export const w = fullscreenReadyAtom
