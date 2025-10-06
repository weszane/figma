import { useLayoutEffect, useRef } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { M } from '../905/28866'
import { atom, useAtomWithSubscription } from '../figma_app/27355'
import { getFalseValue } from '../figma_app/897289'

/**
 * Hides the DOM element with the given ID.
 * @param elementId - The ID of the DOM element to hide.
 * @see $$l1
 */
export function hideElementById(elementId: string): void {
  hideElement(document.getElementById(elementId))
}

/**
 * Hides the given DOM element by setting its display to 'none'.
 * @param element - The DOM element to hide.
 * @see d
 */
function hideElement(element: HTMLElement | null): void {
  if (element) {
    element.style.display = 'none'
  }
}

/**
 * Creates a React component that snapshots a DOM element and renders its clone.
 * @param elementId - The ID of the DOM element to snapshot.
 * @param onClone - Optional callback invoked with the cloned node.
 * @param onMount - Optional callback invoked after mounting the clone.
 * @see $$c2
 */
export function createSnapshotComponent(elementId: string, onClone?: (clone: HTMLElement) => void, onMount?: (clone: HTMLElement) => void) {
  const originalElement = document.getElementById(elementId)
  if (!originalElement) {
    if (!getFalseValue()) {
      console.warn(`Expected to find DOM element to snapshot:  ${elementId}`)
    }
    return () => null
  }
  const clonedNode = originalElement.cloneNode(true) as HTMLElement
  onClone?.(clonedNode)

  let cleanup = () => {
    hideElement(originalElement)
    cleanup = null as any
  }
  let mountCallback = onMount

  /**
   * React component that renders the cloned node.
   */
  const SnapshotComponent = () => {
    const ref = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
      if (ref.current) {
        ref.current.appendChild(clonedNode)
        mountCallback?.(clonedNode)
        mountCallback = null
      }
      cleanup?.()
    }, [ref])

    return jsx('div', {
      ref,
      className: [...Array.from(clonedNode.classList).values()].join(' '),
    })
  }

  return SnapshotComponent
}

/**
 * Manages dependencies and their loading status.
 * @see u
 */
class DependencyManager {
  deps: Record<string, Promise<void>> = {}
  onStatusChange: (status: string) => void

  constructor(onStatusChange: (status: string) => void) {
    this.onStatusChange = onStatusChange
  }

  /**
   * Adds a dependency with a given status.
   * @param key - Dependency key.
   * @param status - 'pending' | 'resolved' | 'rejected' | Promise<void>
   */
  add = (key: string, status: 'pending' | 'resolved' | 'rejected' | Promise<void>): void => {
    if (status === 'pending') {
      const promise = new Promise<void>((resolve) => {
        setTimeout(resolve, 5000)
      })
      this.deps[key] = promise
      return
    }
    if (status === 'resolved') {
      const promise = Promise.resolve()
      this.deps[key] = promise
      this.onDependencyResolved(key, promise)
      return
    }
    if (status === 'rejected') {
      const promise = Promise.reject()
      this.deps[key] = promise
      this.onDependencyRejected(key, promise)
      return
    }
    this.onStatusChange('pending');
    (status as Promise<void>)
      .then(() => this.onDependencyResolved(key, status as Promise<void>))
      .catch(() => this.onDependencyRejected(key, status as Promise<void>))
    this.deps[key] = status as Promise<void>
  }

  /**
   * Called when a dependency is resolved.
   * @param key - Dependency key.
   * @param promise - The resolved promise.
   */
  onDependencyResolved = (key: string, promise: Promise<void>): void => {
    if (this.deps[key] === promise) {
      delete this.deps[key]
      if (Object.keys(this.deps).length === 0) {
        this.onStatusChange('resolved')
      }
    }
  }

  /**
   * Called when a dependency is rejected.
   * @param key - Dependency key.
   * @param promise - The rejected promise.
   */
  onDependencyRejected = (key: string, promise: Promise<void>): void => {
    if (this.deps[key] === promise) {
      delete this.deps[key]
      this.onStatusChange('rejected')
    }
  }
}

/**
 * Creates a loadable page manager with dependency tracking.
 * @param atomManager - Atom manager for state.
 * @param label - Debug label for the atom.
 * @see $$p0
 */
export function setupLoadablePageManager(atomManager: { set: (atom: any, value: string) => void }, label: string) {
  const statusAtom = atom('pending')
  statusAtom.debugLabel = `${label}:LoadingPageStatus`

  const dependencyManager = new DependencyManager((status) => {
    atomManager.set(statusAtom, status)
  })

  return {
    /**
     * Adds a dependency to the manager.
     */
    addDependency: dependencyManager.add,

    /**
     * Returns true if the page is loading.
     */
    useIsLoading(): boolean {
      return useAtomWithSubscription(statusAtom) === 'pending'
    },

    /**
     * Returns a React component that renders either the loaded page or a loading fallback.
     * @param PageComponent - The main page component.
     * @param LoadingComponent - The loading fallback component.
     * @param onLoaded - Optional callback after loading.
     */
    LoadablePage(
      PageComponent: React.ComponentType<any>,
      LoadingComponent: React.ComponentType<any>,
      onLoaded?: () => void,
    ) {
      let resolved = false

      /**
       * LoadablePage component.
       */
      function LoadablePageComponent(props: any) {
        if (!resolved) {
          resolved = true
          dependencyManager.add('LoadablePage', 'resolved')
        }
        const isLoaded = useAtomWithSubscription(statusAtom) !== 'pending'

        useLayoutEffect(() => {
          onLoaded?.()
        }, [])

        return jsxs(Fragment, {
          children: [
            isLoaded && jsx(PageComponent, { ...props }),
            !isLoaded && jsx(LoadingComponent, {}),
          ],
        })
      }

      LoadablePageComponent.displayName = M(PageComponent)
      return LoadablePageComponent
    },
  }
}

// Exported names refactored for clarity and traceability
export const QH = setupLoadablePageManager
export const Ze = hideElementById
export const h8 = createSnapshotComponent
