// Original function: $$r1
// Returns the library key based on subscription status and fallback options.
/**
 * Retrieves the library key from the provided object if subscribed, otherwise falls back to another object's library key.
 * @param e - Object containing subscription status and library key.
 * @param t - Fallback object with library key.
 * @returns The library key or undefined.
 */
export function getLibraryKey(
  e: { subscriptionStatus?: string, library_key?: string } | undefined,
  t: { libraryKey?: string } | undefined,
): string | undefined {
  if (!e)
    return undefined
  if (e.subscriptionStatus === 'SUBSCRIBED')
    return e.library_key
  return t?.libraryKey
}

// Original function: $$a0
// Creates a subscribed object from the input.
/**
 * Creates a subscription object with 'SUBSCRIBED' status and the provided library key.
 * @param e - Object containing the library key.
 * @returns The subscription object or undefined if input is falsy.
 */
export function createSubscribedObject(
  e: { libraryKey?: string } | undefined,
): { subscriptionStatus: string, library_key: string } | undefined {
  if (!e)
    return undefined
  return {
    subscriptionStatus: 'SUBSCRIBED',
    library_key: e.libraryKey,
  }
}

// Original function: $$s2
// Creates a subscription object based on a condition.
/**
 * Creates a subscription object, either subscribed with the library key or local.
 * @param e - Object containing the library key.
 * @param t - Condition to determine subscription type.
 * @returns The subscription object.
 */
export function createSubscriptionObject(
  e: { library_key?: string },
  t: boolean,
): { subscriptionStatus: string, library_key?: string } {
  if (t) {
    return {
      subscriptionStatus: 'SUBSCRIBED',
      library_key: e.library_key,
    }
  }
  return {
    subscriptionStatus: 'LOCAL',
  }
}

export const O8 = createSubscribedObject
export const ZR = getLibraryKey
export const cO = createSubscriptionObject
