import { useSelector } from 'react-redux'
/**
 * Checks if all selected scene graph items are of type "INSTANCE".
 * Original function name: $$r0
 */
export function areAllSelectedInstances(): boolean {
  // Get the sceneGraph from Redux store
  const sceneGraph = useSelector((state: AppState) => state.mirror.sceneGraph)

  // Get selected keys and map to sceneGraph items
  const selectedKeys = Object.keys(
    useSelector((state: AppState) => state.mirror.sceneGraphSelection),
  )
  const selectedItems = selectedKeys.map(key => sceneGraph.get(key))

  // Return true if all selected items are of type "INSTANCE"
  if (selectedItems.length === 0)
    return false
  return selectedItems.every(item => item?.type === 'INSTANCE')
}

/** Exported alias for areAllSelectedInstances (original: A) */
export const A = areAllSelectedInstances
