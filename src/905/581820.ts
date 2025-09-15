/**
 * Applies optimistic updates to the given state.
 * @param state - The current state object.
 * @param update - Either an array of updates or a single update object.
 * @returns The updated state after applying the updates.
 */
export function applyOptimisticUpdates(state: any, update: any[] | { type: string, update: (s: any) => any }): any {
  if (Array.isArray(update)) {
    return update.reduce((acc, curr) => applyOptimisticUpdates(acc, curr), state)
  }
  if (update.type !== 'UPDATE') {
    throw new Error(`Unexpected optimistic layer type ${update.type}`)
  }
  return update.update(state)
}

export const H = applyOptimisticUpdates
