import { mapComponentProperties } from '../figma_app/349248'

/**
 * Transforms loaded file components into mapped properties.
 * Original function name: $$r0
 * @param e - The input object containing status and data.
 * @returns Array of mapped component properties.
 */
export function mapLoadedFileComponents(e: {
  status?: string
  data?: {
    file?: {
      components: any[]
      hubFileId: string
      libraryKey: string
    }
  }
}): any[] {
  if (e?.status !== 'loaded' || !e.data?.file)
    return []

  const { components, hubFileId, libraryKey } = e.data.file
  return components.map(component =>
    mapComponentProperties(component, {
      type: 'hubFile',
      file: { id: hubFileId, libraryKey },
    }),
  )
}

// Refactored export name for clarity and maintainability
export const J = mapLoadedFileComponents
