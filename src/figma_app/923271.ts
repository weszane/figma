import { createContext, useCallback, useContext } from 'react'
import { jsx } from 'react/jsx-runtime'

/**
 * Context for asset panel operations.
 * Original context variable: a
 */
const AssetPanelContext = createContext<{
  getLibrary: (key: string) => any
  getPage: (libraryKey: string, pageKey: string) => any
  getFolder: (libraryKey: string, pageKey: string, folderPath?: string[]) => any
}>({
  getLibrary: () => undefined,
  getPage: () => undefined,
  getFolder: () => undefined,
})

/**
 * Props for AssetPanelProvider.
 * Original function: $$s1
 */
interface AssetPanelProviderProps {
  children: React.ReactNode
  assetPanelItemsByLibraryKey: {
    allLibrariesUnsorted: Map<string, {
      pages: Map<string, {
        assets: any
        subtrees?: Map<string, any>
      }>
    }>
  }
}

/**
 * Provides asset panel context to children.
 * @param props AssetPanelProviderProps
 */
export function AssetPanelProvider({
  children,
  assetPanelItemsByLibraryKey,
}: AssetPanelProviderProps) {
  /**
   * Gets a library by key.
   * Original function: r
   */
  const getLibrary = useCallback((libraryKey: string) => {
    if (libraryKey)
      return assetPanelItemsByLibraryKey.allLibrariesUnsorted.get(libraryKey)
  }, [assetPanelItemsByLibraryKey])

  /**
   * Gets a page from a library.
   * Original function: s
   */
  const getPage = useCallback((libraryKey: string, pageKey: string) => {
    if (!libraryKey || !pageKey)
      return
    const library = getLibrary(libraryKey)
    return library?.pages.get(pageKey)
  }, [getLibrary])

  /**
   * Gets a folder or assets from a page.
   * Original function: o
   */
  const getFolder = useCallback(
    (libraryKey: string, pageKey: string, folderPath?: string[]) => {
      if (!libraryKey || !pageKey)
        return
      const page = getPage(libraryKey, pageKey)
      if (!page)
        return
      if (!folderPath)
        return page.assets
      let subtree = page.assets
      for (const segment of folderPath) {
        subtree = subtree.subtrees?.get(segment)
        if (!(subtree))
          return
      }
      return subtree
    },
    [getPage],
  )

  return jsx(AssetPanelContext.Provider, {
    value: {
      getLibrary,
      getPage,
      getFolder,
    },
    children,
  })
}

/**
 * Hook to access asset panel context.
 * Original function: $$o0
 */
export const useAssetPanelContext = () => useContext(AssetPanelContext)

// Export aliases for compatibility with original exports
export const G = useAssetPanelContext
export const K = AssetPanelProvider
