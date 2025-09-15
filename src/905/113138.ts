import { createActionCreator, createOptimistAction } from '../905/73481'
import { createReduxSubscriptionAtom } from '../905/111321'
import { LIVESTORE_LOADING, LIVESTORE_TOMBSTONED } from '../905/284406'
import { applyOptimisticUpdates } from '../905/581820'
import { createOptimistCommitAction, createOptimistRevertAction } from '../905/676456'
import { mergeWithObject } from '../905/848904'
import { atom } from '../figma_app/27355'
import { throwTypeError } from '../figma_app/465776'

// Original class: $$u2
// Refactored to LivestoreBinding for clarity
export class LivestoreBinding {
  binding: LivestoreStore
  constructor(e: any) {
    this.binding = new LivestoreStore(e, {}, {
      update: (state: any, payload: any) => {
        const { instance, id } = payload
        const newState = { ...state }
        if (newState[id]) {
          newState[id] = mergeWithObject(newState[id], instance)
        }
        else {
          newState[id] = instance
        }
        return newState
      },
      tombstone: (state: any, payload: any) => {
        const newState = { ...state }
        delete newState[payload.id]
        return newState
      },
      remoteUpdate: (state: any, payload: any) => {
        const newState = { ...state }
        for (const key in payload.instances) {
          if (newState[key]) {
            newState[key] = mergeWithObject(newState[key], payload.instances[key])
          }
          else {
            newState[key] = payload.instances[key]
          }
        }
        return newState
      },
      optimisticUpdate: (state: any, payload: any) => {
        const newState = { ...state }
        for (const key in payload.updates) {
          if (!state[key])
            continue
          const updated = applyOptimisticUpdates(newState[key], payload.updates[key])
          newState[key] = updated
        }
        return newState
      },
    }, (state: any, id: string) => state[id])
  }
}

// Original class: $$p1
// Refactored to LivestoreStore for clarity
export class LivestoreStore {
  debugName: string
  initialState: any
  actionHandlers: any
  getInstance: any
  actions: any
  reducer: any

  constructor(debugName: string, initialState: any, actionHandlers: any, getInstance: any) {
    this.debugName = debugName
    this.initialState = initialState
    this.actionHandlers = actionHandlers
    this.getInstance = getInstance
    this.actions = {
      update: createActionCreator(`LIVESTORE_UPDATE_${this.debugName}`),
      tombstone: createActionCreator(`LIVESTORE_TOMBSTONE_${this.debugName}`),
      remoteUpdate: createActionCreator(`LIVESTORE_REMOTE_UPDATE_${this.debugName}`),
      optimisticUpdate: createOptimistAction(`LIVESTORE_OPTIMISTIC_UPDATE_${this.debugName}`, (e: any, t: any, { optimistId }: any) => optimistId),
    }
    this.reducer = (state = this.initialState, action: any) => {
      if (this.actions.update.matches(action))
        return this.actionHandlers.update(state, action.payload)
      if (this.actions.tombstone.matches(action))
        return this.actionHandlers.tombstone(state, action.payload)
      if (this.actions.remoteUpdate.matches(action))
        return this.actionHandlers.remoteUpdate(state, action.payload)
      if (this.actions.optimisticUpdate.matches(action))
        return this.actionHandlers.optimisticUpdate(state, action.payload)
      return state
    }
  }
}

// Original class: $$m0
// Refactored to LivestoreManager for clarity
export class LivestoreManager {
  reduxStore: any
  reduxKey: string
  bindings: any
  objectDef: any
  fetchObject: any
  syncObject: any
  atoms: Map<string, any>

  constructor(reduxStore: any, reduxKey: string, bindings: any, objectDef: any, fetchObject: any, syncObject: any) {
    this.reduxStore = reduxStore
    this.reduxKey = reduxKey
    this.bindings = bindings
    this.objectDef = objectDef
    this.fetchObject = fetchObject
    this.syncObject = syncObject
    this.atoms = new Map()
  }

  /**
   * Dispatches a remote update action.
   * @param instances - The instances to update.
   */
  remoteUpdate(instances: any) {
    this.reduxStore().dispatch(this.bindings.actions.remoteUpdate({ instances }))
  }

  /**
   * Dispatches an optimistic update and returns a function to commit or reject.
   * @param updates - The updates to apply optimistically.
   * @returns A function to commit or reject the update.
   */
  optimisticUpdate(updates: any) {
    const dispatch = this.reduxStore().dispatch
    const action = dispatch(this.bindings.actions.optimisticUpdate({ updates }))
    return (type: string) => {
      if (type === 'COMMIT') {
        dispatch(createOptimistCommitAction(action))
      }
      else if (type === 'REJECT') {
        dispatch(createOptimistRevertAction(action))
      }
      else {
        throwTypeError(type)
      }
    }
  }

  /**
   * Creates an atom for the given ID.
   * @param id - The ID for the atom.
   * @returns The created atom.
   */
  createAtom(id: string) {
    let hasValue = false
    const subscriptionAtom = createReduxSubscriptionAtom(
      this.reduxStore,
      (state: any) => {
        const instance = this.bindings.getInstance(state[this.reduxKey], id)
        if (instance !== undefined)
          hasValue = true
        return instance
      },
      { notifyImmediate: true },
    )
    return atom<any, { type: string, value?: any }[], any>(
      get => get(subscriptionAtom) || (hasValue ? LIVESTORE_TOMBSTONED : LIVESTORE_LOADING),
      (get, set, update) => {
        if (update.type === 'REMOTE_UPDATE') {
          if (update.value === LIVESTORE_TOMBSTONED) {
            this.reduxStore().dispatch(this.bindings.actions.tombstone({ id }))
          }
          else {
            this.reduxStore().dispatch(this.bindings.actions.update({ id, instance: update.value }))
          }
          return
        }
        if (update.type === 'OPTIMISTIC_UPDATE') {
          throw new Error('Unexpected')
        }
      },
    )
  }

  /**
   * Gets or creates an atom for the given ID.
   * @param id - The ID for the atom.
   * @returns The atom.
   */
  atom(id: string) {
    if (this.atoms.has(id))
      return this.atoms.get(id)
    const newAtom = this.createAtom(id)
    this.atoms.set(id, newAtom)
    return newAtom
  }

  /**
   * Returns the debug state from the Redux store.
   * @returns The state.
   */
  debugState() {
    return this.reduxStore().getState()[this.reduxKey]
  }
}

// Refactored exports with meaningful names
export const OS = LivestoreManager // Original: OS = $$m0
export const Xc = LivestoreStore // Original: Xc = $$p1
export const cZ = LivestoreBinding // Original: cZ = $$u2
