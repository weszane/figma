import { atom } from 'jotai'
import { useEffect } from 'react'
import { LS } from '../905/782918'
import { useAtomValueAndSetter } from '../figma_app/27355'
import { isInteractionOrEvalMode } from '../figma_app/897289'

/**
 * Atom to track whether the timeout has completed.
 * Original name: o
 */
export const interactionTimeoutAtom = atom(false)

/**
 * Sets the interaction timeout and updates the atom when completed.
 * Original name: $$l0
 * @param timeoutMs - Timeout duration in milliseconds
 */
export function useSetupInteractionTimeout(timeoutMs: number): void {
  const [, setTimeoutComplete] = useAtomValueAndSetter(interactionTimeoutAtom)

  useEffect(() => {
    if (isInteractionOrEvalMode())
      return

    const timer = setTimeout(() => {
      setTimeoutComplete(true)
    }, timeoutMs)

    return () => {
      clearTimeout(timer)
      setTimeoutComplete(false)
    }
  }, [timeoutMs, setTimeoutComplete])
}

/**
 * Checks if the interaction timeout has completed and LS is truthy.
 * Original name: $$d1
 * @returns boolean
 */
export function isInteractionReady(): boolean {
  const lsValue = LS()
  const [isTimeoutComplete] = useAtomValueAndSetter(interactionTimeoutAtom)
  return isTimeoutComplete && !!lsValue
}

// Refactored exports for clarity and traceability
export const W = useSetupInteractionTimeout
export const e = isInteractionReady
