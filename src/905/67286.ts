import { d9 } from '../905/579068'
import { calculatePickerPositionBelow, calculatePickerPositionLeft } from '../905/959568'

/**
 * Calculates the position for a picker element based on the provided refs and modal state.
 * @param inputRef - Reference to the input element.
 * @param rowRef - Reference to the row element.
 * @param isInStyleModal - Indicates if the picker is in a style modal.
 * @returns The calculated position or undefined if no valid element is found.
 */
export function calculatePickerPosition({
  inputRef,
  rowRef,
  isInStyleModal,
}: {
  inputRef: React.RefObject<HTMLElement>;
  rowRef: React.RefObject<HTMLElement>;
  isInStyleModal: boolean;
}) {
  // If in style modal and rowRef is available, position left of the row element
  if (isInStyleModal && rowRef?.current) {
    return calculatePickerPositionLeft(rowRef.current, d9);
  }

  // Otherwise, try to get the element from inputRef or rowRef
  const element = inputRef.current ?? rowRef?.current ?? null;
  if (element) {
    return calculatePickerPositionBelow(element, d9, false);
  }
}

export const k = calculatePickerPosition;
