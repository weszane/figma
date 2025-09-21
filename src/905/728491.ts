import { useSubscription } from '../figma_app/288654'
/**
 * Hook to check if a file has permission for a given key.
 * @param store - The store or context object.
 * @param key - The key to check permissions for.
 * @returns A boolean indicating if the file has permission.
 */
export function useHasFilePermission(store: any, key: string) {
  return useSubscription(store, {
    key,
  }, {
    enabled: !!key,
  }).transform(data => !!data.file?.hasPermission)
}
export const l = useHasFilePermission
