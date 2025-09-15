import { createRealtimeManager } from '../figma_app/229837'

// Define types for better clarity
interface ParsedMessage {
  channel: string
  timestamp: number
  generation: number
  signature: string
}

// Refactored parsing function with meaningful name, types, and JSDoc. Original name: $$s0
/**
 * Parses a message string into its components.
 * @param message - The message string in format "channel:timestamp:generation:signature"
 * @returns The parsed message object
 */
export function parseMessage(message: string): ParsedMessage {
  const parts = message.split(':')
  return {
    channel: parts[0],
    timestamp: parseInt(parts[1]),
    generation: parseInt(parts[2]),
    signature: parts[3],
  }
}

// Create realtime manager and related variables. Original: o = createRealtimeManager(), $$l1 = o, $$d2 = o.v2
export const realtimeManager = createRealtimeManager()
export const realtimeClient = realtimeManager
export const realtimeV2 = realtimeManager.v2;

// Set global realtime client. Original: window.realtimeClient = o
(window as any).realtimeClient = realtimeManager

// Refactored queue and counter with meaningful names. Original: i = [], a = 0
let callbackQueue: (() => void)[] = []
let activeCount = 0;

// Refactored the pushed function with early return and meaningful names. Original: [].push(() => { ... })
[].push(() => {
  if (activeCount > 0)
    return // Early return to simplify conditional
  callbackQueue.forEach((callback) => {
    activeCount += 1
    setTimeout(() => {
      try {
        callback()
      }
      finally {
        activeCount -= 1
      }
    }, 60000 + 240000 * Math.random())
  })
})

// Exports with refactored names assigned to original export names. Original: EM = $$s0, J1 = $$l1
export const EM = parseMessage
export const J1 = realtimeClient
export const V$ = realtimeV2
