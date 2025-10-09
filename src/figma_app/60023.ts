import { atom } from "../figma_app/27355"
import { setupRemovableAtomFamily } from "../figma_app/615482"

// Origin: /Users/allen/sigma-main/src/figma_app/60023.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability, and ensured type safety.
// Assumed dependencies: atom, setupRemovableAtomFamily (from local modules)
// Note: Some atom logic assumes Jotai-like API. Adjust imports/types if using a different state management library.

/**
 * Enum for file types.
 */
export enum FileType {
  ALL = "ALL",
  ORG = "ORG",
  TEMPLATE = "TEMPLATE",
  HUB_FILE = "HUB_FILE",
  FILE_PICKER = "FILE_PICKER",
  TEMPLATE_PICKER = "TEMPLATE_PICKER",
  TEAM = "TEAM",
}

/**
 * Atom families for removable boolean atoms.
 */
export const draftModeAtomFamily = setupRemovableAtomFamily(() => atom(false))
export const selectionAtomFamily = setupRemovableAtomFamily(() => atom(false))
export const lockAtomFamily = setupRemovableAtomFamily(() => atom(false))

/**
 * Atom for current file type.
 */
const fileTypeAtom = atom<{ type: FileType }>({
  type: FileType.ALL,
})

/**
 * Atom for organization string.
 */
const orgAtom = atom<string>("")

/**
 * Atom for a generic object state.
 */
const stateAtom = atom<Record<string, unknown>>({})

/**
 * Atom for updating a key in the state object.
 */
const updateStateAtom = atom(
  get => get(stateAtom),
  (get, set, key: string, value: unknown) => {
    set(stateAtom, prev => ({
      ...prev,
      [key]: value,
    }))
  },
)

/**
 * Atom for resetting the state object.
 */
const resetStateAtom = atom(
  null,
  (get, set) => {
    set(stateAtom, {})
  },
)

/**
 * Atom for a numeric value (e.g., counter).
 */
const counterAtom = atom<number>(0)

/**
 * Enum for publish/unpublish states.
 */
export enum PublishState { 
  PUBLISH_HUB_FILE_INITIATED = "PUBLISH_HUB_FILE_INITIATED",
  PUBLISH_HUB_FILE_COMPLETED = "PUBLISH_HUB_FILE_COMPLETED",
  PUBLISH_HUB_FILE_ERRORED = "PUBLISH_HUB_FILE_ERRORED",
  PUBLISH_TEMPLATE_INITIATED = "PUBLISH_TEMPLATE_INITIATED",
  PUBLISH_TEMPLATE_COMPLETED = "PUBLISH_TEMPLATE_COMPLETED",
  PUBLISH_TEMPLATE_ERRORED = "PUBLISH_TEMPLATE_ERRORED",
  UNPUBLISH_TEMPLATE_INITIATED = "UNPUBLISH_TEMPLATE_INITIATED",
  UNPUBLISH_HUB_FILE_INITIATED = "UNPUBLISH_HUB_FILE_INITIATED",
  UNPUBLISH_COMPLETED = "UNPUBLISH_COMPLETED",
  UNPUBLISH_TEMPLATE_ERRORED = "UNPUBLISH_ERRORED",
  CLEARED = "CLEARED",
}

/**
 * List of states that represent an "initiated" action.
 */
const initiatedStates: PublishState[] = [
  PublishState.PUBLISH_HUB_FILE_INITIATED,
  PublishState.PUBLISH_TEMPLATE_INITIATED,
  PublishState.UNPUBLISH_TEMPLATE_INITIATED,
  PublishState.UNPUBLISH_HUB_FILE_INITIATED,
]

/**
 * List of all states that can be cleared.
 */
export const clearedStates: (PublishState | "CLEARED")[] = [
  ...initiatedStates,
  PublishState.CLEARED,
]

/**
 * Checks if a state is an "initiated" state.
 */
export function isInitiatedState(state: PublishState): boolean {
  return initiatedStates.includes(state)
}

/**
 * State transition map for publish/unpublish actions.
 */
const stateTransitionMap = {
  CLEARED: initiatedStates,
  PUBLISH_TEMPLATE_INITIATED: [
    PublishState.PUBLISH_TEMPLATE_COMPLETED,
    PublishState.PUBLISH_TEMPLATE_ERRORED,
  ],
  PUBLISH_TEMPLATE_COMPLETED: clearedStates,
  PUBLISH_TEMPLATE_ERRORED: clearedStates,
  UNPUBLISH_TEMPLATE_INITIATED: [
    PublishState.UNPUBLISH_COMPLETED,
    PublishState.UNPUBLISH_ERRORED,
  ],
  UNPUBLISH_HUB_FILE_INITIATED: [
    PublishState.UNPUBLISH_COMPLETED,
    PublishState.UNPUBLISH_ERRORED,
  ],
  UNPUBLISH_COMPLETED: clearedStates,
  UNPUBLISH_ERRORED: clearedStates,
  PUBLISH_HUB_FILE_INITIATED: [
    PublishState.PUBLISH_HUB_FILE_COMPLETED,
    PublishState.PUBLISH_HUB_FILE_ERRORED,
  ],
  PUBLISH_HUB_FILE_COMPLETED: clearedStates,
  PUBLISH_HUB_FILE_ERRORED: clearedStates,
}

/**
 * Atom for current publish/unpublish state.
 */
interface PublishAtomState {
  state: PublishState
  request?: unknown
}
export const publishStateAtom = atom<PublishAtomState>({
  state: PublishState.CLEARED,
})

/**
 * Atom for getting the current state value.
 */
export const currentStateAtom = atom(get => get(publishStateAtom).state)

/**
 * Atom for getting the current request if state is PUBLISH_TEMPLATE_INITIATED.
 */
export const currentRequestAtom = atom<PublishRequestParams>((get) => {
  const { state, request } = get(publishStateAtom)
  return state === PublishState.PUBLISH_TEMPLATE_INITIATED ? request : null
})

/**
 * Atom for updating the publish state, with validation for allowed transitions.
 */
export const updatePublishStateAtom = atom(
  null,
  (get, set, newState: PublishAtomState) => {
    const currentState = get(currentStateAtom)
    if (stateTransitionMap[currentState].includes(newState.state)) {
      set(publishStateAtom, newState)
    }
    else {
      throw new Error(
        `Invalid state transition from ${currentState} to ${newState.state}. Please check the state transition logic.`,
      )
    }
  },
)

/**
 * Maps publish/unpublish states to human-readable labels.
 */
export function getPublishLabel(state: PublishState): string {
  switch (state) {
    case PublishState.PUBLISH_TEMPLATE_ERRORED:
    case PublishState.PUBLISH_TEMPLATE_INITIATED:
      return "Slides Team Template Publish"
    case PublishState.UNPUBLISH_TEMPLATE_INITIATED:
    case PublishState.UNPUBLISH_ERRORED:
      return "Slides Team Template Unpublish"
    case PublishState.PUBLISH_HUB_FILE_ERRORED:
    case PublishState.PUBLISH_HUB_FILE_INITIATED:
      return "Slides Hub File Publish"
    case PublishState.UNPUBLISH_HUB_FILE_INITIATED:
      return "Slides Hub File Unpublish"
    default:
      return state
  }
}

/**
 * Enum for selection modes.
 */
export enum SelectionMode {
  ALL = "ALL",
  SINGLE = "SINGLE",
  NONE = "NONE",
}

/**
 * Atom families for various states.
 */
export const selectionModeAtomFamily = setupRemovableAtomFamily(() =>
  atom<{ type: SelectionMode }>({ type: SelectionMode.NONE }),
)
export const stringAtomFamily = setupRemovableAtomFamily(() => atom<string>(""))
export const booleanAtomFamily = setupRemovableAtomFamily(() => atom<boolean>(false))
export const nullAtomFamily = setupRemovableAtomFamily(() => atom<null>(null))
export const genericNullAtomFamily = setupRemovableAtomFamily(() => atom<null>(null))

/**
 * Exported atoms and enums (original names preserved on left).
 */
export const DM = lockAtomFamily
export const Ei = draftModeAtomFamily
export const F4 = PublishState
export const Jw = getPublishLabel
export const M0 = stringAtomFamily
export const Md = isInitiatedState
export const Mt = updateStateAtom
export const OR = orgAtom
export const UM = updatePublishStateAtom
export const V6 = selectionModeAtomFamily
export const VZ = selectionAtomFamily
export const Vf = FileType
export const _g = currentStateAtom
export const bY = fileTypeAtom
export const cZ = currentRequestAtom
export const i6 = SelectionMode
export const ke = counterAtom
export const oQ = genericNullAtomFamily
export const q7 = booleanAtomFamily
export const ux = nullAtomFamily
export const xw = resetStateAtom
