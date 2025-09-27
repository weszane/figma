import { useCallback } from 'react'
import { useSetAtom } from '../vendor/525001'
import { RESET } from '../vendor/812047'

export function useResetAtom(e, n) {
  let i = useSetAtom(e, n)
  return useCallback(() => i(RESET), [i])
}
export const AY = useResetAtom
