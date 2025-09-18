/**
 * Attempts to create a WebGL rendering context (webgl2 or webgl) on a canvas.
 * @param useWebGL2 - If true, tries to get a webgl2 context; otherwise, webgl.
 * @param contextAttributes - Optional context attributes for getContext.
 * @param canvas - Optional canvas element. If not provided, creates a new canvas.
 * @returns The WebGLRenderingContext or null if creation fails.
 * @originalName $$n1
 */
export function createWebGLContext(useWebGL2: boolean, contextAttributes: WebGLContextAttributes = {}, canvas: HTMLCanvasElement | null = null): WebGLRenderingContext | WebGL2RenderingContext | null {
  const targetCanvas = canvas ?? document.createElement('canvas')
  let context: WebGLRenderingContext | WebGL2RenderingContext | null = null
  try {
    context = useWebGL2
      ? targetCanvas.getContext('webgl2', contextAttributes)
      : targetCanvas.getContext('webgl', contextAttributes)
  }
  catch {
    // Ignore errors and return null
  }
  return context
}

/**
 * Tries to create a high-performance WebGL context, falling back to default if needed.
 * @param useWebGL2 - If true, tries to get a webgl2 context; otherwise, webgl.
 * @param canvas - Optional canvas element.
 * @returns The WebGLRenderingContext or null if creation fails.
 * @originalName $$r2
 */
export function getPreferredWebGLContext(useWebGL2: boolean, canvas: HTMLCanvasElement | null = null): WebGLRenderingContext | WebGL2RenderingContext | null {
  let context = createWebGLContext(useWebGL2, { powerPreference: 'high-performance' }, canvas)
  if (!context) {
    context = createWebGLContext(useWebGL2, { powerPreference: 'default' }, canvas)
  }
  return context
}

/**
 * Registers a WebGL context and makes it current using the provided manager.
 * @param context - The WebGL context to register.
 * @param contextType - The type of context (e.g., "webgl2" or "webgl").
 * @param manager - The context manager with registerContext and makeContextCurrent methods.
 * @originalName $$a0
 */
export function setupPlaybackHandler(context: WebGLRenderingContext | WebGL2RenderingContext, contextType: string, manager: { registerContext: any, makeContextCurrent: any }): void {
  const registeredContext = manager.registerContext(context, contextType)
  manager.makeContextCurrent(registeredContext)
}

// Refactored exports for clarity and traceability
export const Rx = setupPlaybackHandler // original: $$a0
export const j9 = createWebGLContext // original: $$n1
export const zD = getPreferredWebGLContext // original: $$r2
