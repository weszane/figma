import { animate } from "motion"
import { atom, atomStoreManager, createRemovableAtomFamily } from "../figma_app/27355"

// Original code file: /Users/allen/sigma-main/src/figma_app/178273.ts

// Define types for better type safety
interface NodeState {
  guid: string
  boundingBox: any // Assuming Figma's bounding box type
  state: "deleting" | "writing"
  name: string
}
interface DeletionSettings {
  autoScroll: boolean
  guid?: string
}

// Refactored atoms with meaningful names
const nodeStatesMap = atom<Record<string, NodeState>>({})
const nodeStateFamily = createRemovableAtomFamily((guid: string) => atom(get => get(nodeStatesMap)[guid], (get, set, newState: NodeState) => {
  set(nodeStatesMap, prev => ({
    ...prev,
    [guid]: newState,
  }))
}))
export const allNodeStates = atom(get => Object.values(get(nodeStatesMap)))
export const isDeleting = atom(false)
export const deletionSettings = atom<DeletionSettings>({
  autoScroll: false,
})

/**
 * Animates the deletion of a node's name by gradually removing characters.
 * @param node - The Figma node to delete.
 * @param abortController - Controller to abort the animation.
 * @returns Promise that resolves when deletion animation completes.
 */
function animateDeletion(node: any, abortController: AbortController): Promise<void> {
  const {
    guid,
    name,
  } = node
  const duration = 0.03 * name.length
  return new Promise((resolve) => {
    animate(name.length, 0, {
      onUpdate: (progress) => {
        if (!abortController.signal.aborted && node.isAlive) {
          atomStoreManager.set(nodeStateFamily(guid), {
            guid,
            boundingBox: node.absoluteBoundingBox,
            state: "deleting",
            name: name.slice(0, Math.floor(progress)),
          })
        }
      },
      duration,
      ease: "linear",
      onComplete: resolve,
    })
  })
}

/**
 * Animates writing a new name to a node by gradually adding characters.
 * @param node - The Figma node to update.
 * @param newName - The new name to write.
 * @param abortController - Controller to abort the animation.
 * @returns Promise that resolves when writing animation completes.
 */
function animateWriting(node: any, newName: string, abortController: AbortController): Promise<void> {
  const {
    guid,
  } = node
  const duration = 0.07 * newName.length
  return new Promise((resolve) => {
    animate(0, newName.length, {
      onUpdate: (progress) => {
        if (!abortController.signal.aborted && node.isAlive) {
          atomStoreManager.set(nodeStateFamily(guid), {
            guid,
            boundingBox: node.absoluteBoundingBox,
            state: "writing",
            name: newName.slice(0, Math.floor(progress)),
          })
        }
      },
      duration,
      ease: "linear",
      onComplete: resolve,
    })
  })
}

/**
 * Deletes a node with animation and optionally writes a new name.
 * @param node - The Figma node.
 * @param newName - The new name to write after deletion.
 * @param abortController - Controller for the operation.
 * @param skipLoading - Whether to skip setting loading state.
 */
export async function deleteAndWriteNode(node: any, newName: string, abortController: AbortController, skipLoading: boolean = false): Promise<void> {
  const {
    guid,
  } = node

  // Update deletion settings if autoScroll is enabled
  atomStoreManager.set(deletionSettings, prev => prev.autoScroll
    ? {
        ...prev,
        guid,
      }
    : prev)

  // Set loading state unless skipped
  if (!skipLoading) {
    atomStoreManager.set(isDeleting, true)
  }

  // Animate deletion
  await animateDeletion(node, abortController)

  // Animate writing new name
  await animateWriting(node, newName, abortController)

  // Clean up state
  nodeStateFamily.remove(guid)
  atomStoreManager.set(nodeStatesMap, (prev) => {
    const updated = {
      ...prev,
    }
    delete updated[guid]
    return updated
  })

  // Reset loading state unless skipped
  if (!skipLoading) {
    atomStoreManager.set(isDeleting, false)
  }
}

/**
 * Clears all node states.
 */
export function clearAllNodeStates(): void {
  nodeStateFamily.removeAll()
}

// Refactored exports with meaningful names
export const EO = allNodeStates
export const aG = isDeleting
export const bK = deleteAndWriteNode
export const oZ = clearAllNodeStates
export const r8 = nodeStateFamily
export const uK = deletionSettings
