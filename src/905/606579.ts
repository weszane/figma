import { selectCurrentFile } from '../figma_app/516028'
/**
 * Returns the first active project resource connection from the current file.
 * @returns The first active project resource connection, or undefined if not available.
 * (Original function: $$r0)
 */
export function getFirstActiveProjectResourceConnection() {
  const currentFile = selectCurrentFile()
  const connections = currentFile?.project?.activeProjectResourceConnections
  return connections ? connections[0] : undefined
}

/** Alias for getFirstActiveProjectResourceConnection (Original: c) */
export const c = getFirstActiveProjectResourceConnection
