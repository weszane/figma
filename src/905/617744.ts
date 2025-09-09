import { atom } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { openFileAtom } from '../figma_app/516028'

// Original: $$a2
/** Atom representing an active state flag. */
export const isActiveAtom = atom<boolean>(false)

// Original: $$s1
/** Atom representing the current selection state. */
export const currentSelectionAtom = atom<unknown | null>(null)

// Original: o
/** Selector atom for extracting the source file from openFileAtom. */
export const sourceFileSelector = selectAtom(openFileAtom, (file) => file?.sourceFile)

// Original: $$l0
/** Selector atom for extracting the library key from the source file. */
export const libraryKeySelector = selectAtom(sourceFileSelector, (sourceFile) => sourceFile?.libraryKey)

export const Nc = libraryKeySelector
export const nX = currentSelectionAtom
export const qm = isActiveAtom
