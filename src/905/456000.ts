import { atom } from "../figma_app/27355";
/**
 * Atom for managing column resize state.
 * Original export: $$n0
 */
export const columnResizeAtom = atom({
  valueColumnWidths: new Map<string, number>(),
  isResizing: false
});

/**
 * Alias for columnResizeAtom.
 * Original export: X
 */
export const X = columnResizeAtom;
