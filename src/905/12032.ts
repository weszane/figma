import { atomWithReducer } from 'jotai/utils';
import { atom, atomWithReducer } from '../figma_app/27355';

/**
 * Atom to store the current overlay state.
 * Original variable: $$r0
 */
export const overlayStateAtom = atom<null>(null);

/**
 * Overlay reducer function to handle mount and unmount actions.
 * Original reducer logic from $$$$a1.
 */
type OverlayAction = {
  type: 'mount';
  uniqueOverlayId: string;
} | {
  type: 'unmount';
  uniqueOverlayId: string;
};

/**
 * Atom to manage a list of mounted overlay IDs.
 * Original variable: $$$$a1
 */
export const overlayIdsAtom = atomWithReducer<string[], OverlayAction>([], (state, action) => {
  switch (action.type) {
    case 'mount':
      return [...state, action.uniqueOverlayId];
    case 'unmount':
      return state.filter(id => id !== action.uniqueOverlayId);
    default:
      return state;
  }
});
export const D = overlayStateAtom;
export const a = overlayIdsAtom;