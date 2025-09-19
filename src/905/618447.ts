import { createConditionalObservableAtom } from '../905/508457'
import { getSingletonSceneGraph } from '../905/700578'
import { atom } from '../figma_app/27355'
import { isNotNullish } from '../figma_app/95419'
import { AppStateTsApi } from '../figma_app/763686'
// Original: $$o0 - Conditional observable atom for canvas grid array
export const canvasGridAtom = createConditionalObservableAtom(() => AppStateTsApi?.canvasGrid().canvasGridArray, [])

// Original: l - Atom that flattens the 2D grid into an array of grid items with id, coord, and node
export const gridItemsAtom = atom((get) => {
  const grid = get(canvasGridAtom)
  const items: GridItem[] = []
  grid.forEach((row, rowIndex) => {
    row.forEach((id, colIndex) => {
      const node = getSingletonSceneGraph().get(id)
      if (node) {
        items.push({
          id,
          coord: { row: rowIndex, col: colIndex },
          node,
        })
      }
    })
  })
  return items
})

// Original: d - Atom that creates a Map from id to grid item
export const gridItemsMapAtom = atom((get) => {
  const items = get(gridItemsAtom)
  const map = new Map<string, GridItem>()
  items.forEach(item => map.set(item.id, item))
  return map
})

// Original: $$c1 - Atom that reconstructs the 2D grid with nodes instead of ids, filtering nullish
export const nodeGridAtom = atom((get) => {
  const grid = get(canvasGridAtom) as any[][]
  const itemsMap = get(gridItemsMapAtom)
  return grid.reduce((prev, cur, index) => {
    prev[index] = cur.map(id => itemsMap.get(id)).filter(isNotNullish)
    return prev
  }, {})
})

// Define types for clarity
interface Coord {
  row: number
  col: number
}

interface GridItem {
  id: string
  coord: Coord
  node: any // Replace 'any' with the actual node type if available
}

// Export with meaningful names
export const BT = canvasGridAtom
export const Un = nodeGridAtom
