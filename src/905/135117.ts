import { DSACppBindings } from '../figma_app/763686'

/**
 * Executes a callback function wrapped with DSA action start and end.
 * Original: $$r0
 * @param actionType - The type of DSA action.
 * @param actionData - Additional data for the DSA action.
 * @param callback - The function to execute within the DSA action context.
 */
export function executeWithDSAAction(actionType: any, actionData: any, callback: () => void): void {
  DSACppBindings.startDSAAction(actionType, actionData);
  try {
    callback();
  } finally {
    DSACppBindings.endDSAAction();
  }
}

/**
 * Alias for executeWithDSAAction.
 * Original: f
 */
export const f = executeWithDSAAction;
