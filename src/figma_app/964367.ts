/**
 * Loads the JSX handler module from the relative path.
 * @returns The imported JSX handler module.
 */
async function loadJSXHandler(): Promise<typeof import('../5973/625973')> {
  return await import('../5973/625973')
}

/**
 * Serializes a JSX element to a string representation.
 * @param element - The JSX element to serialize.
 * @param options - Serialization options, defaults to { includeIDs: false }.
 * @returns The serialized JSX string.
 */
export async function serializeJSX(element: any, options: { includeIDs?: boolean } = { includeIDs: false }): Promise<string> {
  return (await loadJSXHandler()).serializeJSX(element, options)
}

/**
 * Deserializes a JSX string back to a JSX element.
 * @param jsxString - The JSX string to deserialize.
 * @param options - Deserialization options, defaults to { includeIDs: false }.
 * @returns The deserialized JSX element.
 */
export async function deserializeJSX(jsxString: string, options: { includeIDs?: boolean } = { includeIDs: false }): Promise<any> {
  const handler = await loadJSXHandler()
  return await handler.deserializeJSX(jsxString, options)
}

/**
 * Reconciles a JSX element.
 * @param element - The JSX element to reconcile.
 * @returns The reconciled JSX element.
 */
export async function reconcileJSX(element: any): Promise<any> {
  const handler = await loadJSXHandler()
  return await handler.reconcileJSX(element)
}

/**
 * Reconciles a JSX element specifically for elements.
 * @param element - The JSX element to reconcile.
 * @returns The reconciled JSX element.
 */
export async function reconcileJSXElement(element: any): Promise<any> {
  const handler = await loadJSXHandler()
  return await handler.reconcileJSXElement(element)
}

/**
 * Gets the React function component definition.
 * @param name - The component name.
 * @param props - The component props.
 * @param children - The component children.
 * @returns The React function component definition.
 */
export async function getReactFunctionComponentDefinition(name: string, props: any, children: any): Promise<any> {
  return (await loadJSXHandler()).getReactFunctionComponentDefinition(name, props, children)
}

// Refactored export names to match the new function names
export const oy = serializeJSX
export const LZ = deserializeJSX
export const Go = reconcileJSX
export const m = reconcileJSXElement
export const gZ = getReactFunctionComponentDefinition
