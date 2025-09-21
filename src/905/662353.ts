import type { PrimitiveAtom } from 'jotai'
import { atom } from '../figma_app/27355'

export let fileKeyAtom = atom(null) as PrimitiveAtom<string | null>
export const h = fileKeyAtom
