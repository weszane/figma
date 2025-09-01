// Original file: /Users/allen/sigma-main/src/figma_app/757801.ts
// Refactored to improve readability, maintainability, and TypeScript best practices.
// Grouped related functionality for playback handler management.
// Added types, JSDoc comments, and meaningful names while preserving original behavior.
// Original names are noted in comments for traceability.

interface PlaybackHandler {
  (data: any): any;
}

interface HandlerRegistry {
  [key: string]: PlaybackHandler[];
}

interface ObjectWithHandlers {
  __playbackHandlers?: { [event: string]: PlaybackHandler };
  __registeredRecordingKey?: string;
}

/**
 * Registry for playback handlers, keyed by event.
 * Original: a
 */
const handlerRegistry: HandlerRegistry = Object.create(null);

/**
 * Generates a unique key for a recording and event.
 * Original: l
 * @param recordingKey - The recording key.
 * @param event - The event name.
 * @returns The combined key.
 */
function generateHandlerKey(recordingKey: string, event: string): string {
  return `${recordingKey}.${event}`;
}

/**
 * Registers a playback handler for a specific event.
 * Throws if the handler is already registered.
 * Original: s
 * @param event - The event name.
 * @param handler - The handler function.
 */
function registerPlaybackHandler(event: string, handler: PlaybackHandler): void {
  if (handlerRegistry[event] && handlerRegistry[event].includes(handler)) {
    throw new Error(`Tried to register already registered playback handler for ${event}`);
  }
  handlerRegistry[event] = handlerRegistry[event] || [];
  handlerRegistry[event].push(handler);
}

/**
 * Unregisters a playback handler for a specific event.
 * Throws if the handler is not registered.
 * Original: o
 * @param event - The event name.
 * @param handler - The handler function.
 */
function unregisterPlaybackHandler(event: string, handler: PlaybackHandler): void {
  const index = handlerRegistry[event] ? handlerRegistry[event].indexOf(handler) : -1;
  if (index === -1) {
    throw new Error(`Tried to unregister unknown playback handler for ${event}`);
  }
  handlerRegistry[event].splice(index, 1);
  if (handlerRegistry[event].length === 0) {
    delete handlerRegistry[event];
  }
}

/**
 * Deregisters all playback handlers for an object.
 * Original: $$d5
 * @param obj - The object with handlers to deregister.
 */
export function deregisterAllHandlers(obj: ObjectWithHandlers): void {
  if (obj.__registeredRecordingKey) {
    for (const event in obj.__playbackHandlers) {
      unregisterPlaybackHandler(generateHandlerKey(obj.__registeredRecordingKey, event), obj.__playbackHandlers[event]);
    }
    obj.__registeredRecordingKey = null;
  }
}

/**
 * Sets up a playback handler for an object, with optional recording and playback transforms.
 * Original: $$u1
 * @param obj - The object to attach the handler to.
 * @param event - The event name.
 * @param handler - The handler function.
 * @param options - Options for recording and playback.
 * @returns A function to call the handler.
 */
export function setupPlaybackHandler(
  obj: ObjectWithHandlers,
  event: string,
  handler: PlaybackHandler,
  options: { record?: (data: any) => any; playback?: (data: any) => any } = {}
): (data?: any) => void {
  // const recordTransform = options.record || ((data: any) => data);
  const playbackTransform = options.playback || ((data: any) => data);
  const handlers = obj.__playbackHandlers || (obj.__playbackHandlers = Object.create(null));
  const previousHandler = handlers[event];
  handlers[event] = (data: any) => handler(playbackTransform(data));
  if (previousHandler && obj.__registeredRecordingKey) {
    const key = generateHandlerKey(obj.__registeredRecordingKey, event);
    unregisterPlaybackHandler(key, previousHandler);
    registerPlaybackHandler(key, handlers[event]);
  }
  return (data?: any) => {
    if (handler.length === 0) {
      data = undefined;
    }
    handler(data);
  };
}

/**
 * Registers an object's handlers with its recording key.
 * Original: Is
 * @param obj - The object to register.
 */
export function registerWithRecordingKey (obj: ObjectWithHandlers): void {
  const recordingKey = (obj as any).recordingKey?.(); // Assuming recordingKey is a method on obj
  if (recordingKey) {
    if (obj.__registeredRecordingKey) {
      if (recordingKey !== obj.__registeredRecordingKey) {
        deregisterAllHandlers(obj);
        registerWithRecordingKey(obj);
      }
    } else {
      obj.__registeredRecordingKey = recordingKey;
      for (const event in obj.__playbackHandlers) {
        registerPlaybackHandler(generateHandlerKey(recordingKey, event), obj.__playbackHandlers[event]);
      }
    }
  }
}

/**
 * Stub function, currently does nothing.
 * Original: $$i3
 * @param _e - First parameter.
 * @param _t - Second parameter.
 */
export function initializeStub(_e: any, _t?: any): void {}

/**
 * Returns false, indicating some disabled state.
 * Original: $$n4
 * @returns Always false.
 */
export function isDisabled(): boolean {
  return false;
}

/**
 * Constant for skipping recording.
 * Original: $$c2
 */
export const SKIP_RECORDING = "SKIP_RECORDING";

// Aliases for backward compatibility or external use
// Original: YJ, aH, g1, k3, nL
export const YJ = setupPlaybackHandler;
export const aH = SKIP_RECORDING;
export const g1 = initializeStub;
export const k3 = isDisabled;
export const nL = deregisterAllHandlers;
export const Is = registerWithRecordingKey;
