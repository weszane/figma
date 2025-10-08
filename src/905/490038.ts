import type { Atom, PrimitiveAtom, WritableAtom } from 'jotai'
import type { Store } from 'jotai/vanilla/store'
import type { Unsubscribe } from 'redux'
import { createStore } from 'jotai'


/**
 * AtomStoreManager manages atom state, subscriptions, and test resets.
 */
class AtomStoreManager {
  public jotaiAtomStore: Store
  public unsubscribeCallbacks: Set<Unsubscribe>
  public rerenderAtomsProviders: Set<() => void>

  constructor() {
    this.jotaiAtomStore = createStore()
    this.unsubscribeCallbacks = new Set()
    this.rerenderAtomsProviders = new Set()
  }

  /**
   * Gets the value of an atom.
   * @param atom The atom to get.
   */
  get<T>(atom: Atom<T>): T {
    return this.jotaiAtomStore.get(atom)
  }

  /**
   * Sets the value of a writable atom.
   * @param atom The writable atom to set.
   * @param args Additional arguments for setting.
   */
  set<T = any>(atom: PrimitiveAtom<T> | WritableAtom<T, T[], void>, ...args: any[]) {
    return this.jotaiAtomStore.set<T, any[], any>(atom, ...args)
  }

  /**
   * Subscribes to changes of an atom.
   * @param atom The atom to subscribe to.
   * @param callback The callback to invoke on change.
   * @param options Optional subscription options.
   * @param options.batchMicrotask If true, batches multiple rapid updates into a single callback invocation.
   * @returns Unsubscribe function.
   */
  sub(
    atom: Atom<unknown>,
    callback: () => void,
    options: { batchMicrotask?: boolean } = {},
  ): Unsubscribe {
    let isPending = false

    const batchedCallback = () => {
      if (!isPending) {
        isPending = true
        Promise.resolve().then(() => {
          isPending = false
          callback()
        })
      }
    }

    const unsubscribe = this.jotaiAtomStore.sub(atom, () => {
      try {
        options.batchMicrotask ? batchedCallback() : callback()
      }
      catch (error) {
        console.error(error)
        return error
      }
    })

    this.unsubscribeCallbacks.add(unsubscribe)
    return () => {
      unsubscribe()
      this.unsubscribeCallbacks.delete(unsubscribe)
    }
  }

  /**
   * Resets the store and all subscriptions for testing.
   */
  resetForTests(): void {
    for (const unsubscribe of this.unsubscribeCallbacks) {
      unsubscribe()
    }
    this.jotaiAtomStore = createStore()
    this.unsubscribeCallbacks = new Set()
    for (const rerender of this.rerenderAtomsProviders) {
      rerender()
    }
    this.rerenderAtomsProviders = new Set()
  }
}

export const atomStoreManager = new AtomStoreManager()

export const z = atomStoreManager
