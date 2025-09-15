import { extractNormalizedObjectInfo } from '../905/155604'
import { allowedEntityTypes } from '../905/797765'
import { parseRealtimeToken } from '../figma_app/229837'

/**
 * Sets up a realtime subscription handler for normalized objects.
 * @param realtimeClient - The realtime client instance.
 * @param channelType - The type of the realtime channel.
 * @returns A function that handles subscription for a specific object.
 */
export function setupRealtimeSubscription(realtimeClient: any, channelType: string) {
  return (objectInfo: any, primaryKeyValue: string, objectDef: any) => {
    const { primaryKey, uniqueName } = extractNormalizedObjectInfo(objectDef.objectDef)

    // Early return if no realtime token
    if (!objectInfo.realtime_token) {
      return null
    }

    let parsedToken
    try {
      parsedToken = parseRealtimeToken(objectInfo.realtime_token)
    }
    catch {
      console.error(`LiveStore failed to parse realtime token ${objectInfo.realtime_token}`)
      parsedToken = null
    }

    // Early return if token parsing failed
    if (!parsedToken) {
      return null
    }

    // Validate channel type
    if (!channelType || !allowedEntityTypes.has(channelType)) {
      throw new Error(`Unknown realtime channel for object type ${uniqueName}`)
    }

    return realtimeClient.subscribe({
      type: channelType,
      token: parsedToken,
    }, (updateData: any) => {
      if (!(primaryKey in updateData)) {
        throw new Error(`Couldn't find primaryKey ${primaryKey} in ${updateData}`)
      }
      if (primaryKeyValue === updateData[primaryKey]) {
        objectDef.remoteUpdate({
          [primaryKeyValue]: updateData,
        })
      }
    })
  }
}

/**
 * Alias for setupRealtimeSubscription (original export name: $$s0).
 */
export const E = setupRealtimeSubscription
