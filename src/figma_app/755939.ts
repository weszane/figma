import { atom } from "../figma_app/27355"
import { setupRemovableAtomFamily } from "../figma_app/615482"

// Renamed variables for clarity, added types, simplified logic, and improved readability
// Preserved original export names as requested

// Enum for template source types
export enum TemplateSourceType {
  ALL = "ALL",
  ORG = "ORG",
  START_FROM_SCRATCH = "START_FROM_SCRATCH",
  NEW_TEMPLATE = "NEW_TEMPLATE",
  TEAM = "TEAM",
  TEMPLATES = "TEMPLATES",
  USE_CASE = "USE_CASE",
  IMPORT_FROM_DESIGN = "IMPORT_FROM_DESIGN",
}

// Enum for template browsing modes
export enum TemplateBrowsingMode {
  DEFAULT = "DEFAULT",
  BROWSING_TEMPLATE = "BROWSING_TEMPLATE",
}

// Enum for publish/unpublish states
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

// Type for publish state transitions
interface PublishStateTransition {
  state: PublishState
  request?: any
}

// Atoms for UI state management
export const isTemplateSelectorOpenAtomFamily = setupRemovableAtomFamily(() => atom<boolean>(false))
export const templateSourceAtom = atom<{ type: TemplateSourceType }>({
  type: TemplateSourceType.ALL,
})
export const isTemplateSearchEnabledAtomFamily = setupRemovableAtomFamily(() => atom<boolean>(true))
export const templateMetadataAtom = atom<Record<string, any>>({})
export const updateTemplateMetadataAtom = atom(
  get => get(templateMetadataAtom),
  (get, set, key: string, value: any) => {
    set(templateMetadataAtom, prev => ({
      ...prev,
      [key]: value,
    }))
  },
)
export const clearTemplateMetadataAtom = atom(null, (get, set) => {
  set(templateMetadataAtom, {})
})
export const selectedTemplateAtomFamily = setupRemovableAtomFamily(() => atom<string | null>(null))
export const isTemplatePreviewVisibleAtomFamily = setupRemovableAtomFamily(() => atom<boolean>(false))
export const isTemplatePublishingAtomFamily = setupRemovableAtomFamily(() => atom<boolean>(false))
export const templateRandomIdAtom = atom<number>(Math.random())
export const templateCommunityFilterAtomFamily = setupRemovableAtomFamily(() => atom<string>("COMMUNITY"))
export const templateSearchQueryAtomFamily = setupRemovableAtomFamily(() => atom<string>(""))
export const isTemplateFavoriteAtomFamily = setupRemovableAtomFamily(() => atom<boolean>(true))
export const isTemplateUsedAtomFamily = setupRemovableAtomFamily(() => atom<boolean>(true))
export const isTemplateEditableAtomFamily = setupRemovableAtomFamily(() => atom<boolean>(true))
export const templateBrowsingModeAtomFamily = setupRemovableAtomFamily(() => atom<{ type: TemplateBrowsingMode }>({
  type: TemplateBrowsingMode.DEFAULT,
}))
export const isTemplateDetailsVisibleAtomFamily = setupRemovableAtomFamily(() => atom<boolean>(false))

// Publish state management
export const initialPublishStates: PublishState[] = [
  PublishState.PUBLISH_HUB_FILE_INITIATED,
  PublishState.PUBLISH_TEMPLATE_INITIATED,
  PublishState.UNPUBLISH_TEMPLATE_INITIATED,
  PublishState.UNPUBLISH_HUB_FILE_INITIATED,
]

export const allPublishStates: PublishState[] = [...initialPublishStates, PublishState.CLEARED]

// Check if a state is an initial state
export function hasHubOrPublishState(state: PublishState): boolean {
  return initialPublishStates.includes(state)
}

// Define valid state transitions
const validStateTransitions: Record<PublishState, PublishState[]> = {
  [PublishState.CLEARED]: initialPublishStates,
  [PublishState.PUBLISH_TEMPLATE_INITIATED]: [
    PublishState.PUBLISH_TEMPLATE_COMPLETED,
    PublishState.PUBLISH_TEMPLATE_ERRORED,
  ],
  [PublishState.PUBLISH_TEMPLATE_COMPLETED]: allPublishStates,
  [PublishState.PUBLISH_TEMPLATE_ERRORED]: allPublishStates,
  [PublishState.UNPUBLISH_TEMPLATE_INITIATED]: [
    PublishState.UNPUBLISH_COMPLETED,
    PublishState.UNPUBLISH_TEMPLATE_ERRORED,
  ],
  [PublishState.UNPUBLISH_HUB_FILE_INITIATED]: [
    PublishState.UNPUBLISH_COMPLETED,
    PublishState.UNPUBLISH_TEMPLATE_ERRORED,
  ],
  [PublishState.UNPUBLISH_COMPLETED]: allPublishStates,
  [PublishState.UNPUBLISH_TEMPLATE_ERRORED]: allPublishStates,
  [PublishState.PUBLISH_HUB_FILE_INITIATED]: [
    PublishState.PUBLISH_HUB_FILE_COMPLETED,
    PublishState.PUBLISH_HUB_FILE_ERRORED,
  ],
  [PublishState.PUBLISH_HUB_FILE_COMPLETED]: allPublishStates,
  [PublishState.PUBLISH_HUB_FILE_ERRORED]: allPublishStates,
}

// Atom for current publish state
export const publishStateAtom = atom<{ state: PublishState, request?: any }>({
  state: PublishState.CLEARED,
})

// Atom to get current publish state value
export const currentPublishStateAtom = atom(get => get(publishStateAtom).state)

// Atom to get publish request when in template publish initiated state
export const publishRequestAtom = atom((get) => {
  const state = get(publishStateAtom)
  return state.state === PublishState.PUBLISH_TEMPLATE_INITIATED ? state.request : null
})

// Atom to update publish state with validation
export const updatePublishStateAtom = atom(
  null,
  (get, set, newState: PublishStateTransition) => {
    const currentState = get(currentPublishStateAtom)
    const { state } = newState

    if (validStateTransitions[currentState].includes(state)) {
      set(publishStateAtom, newState)
    }
    else {
      throw new Error(
        `Invalid state transition from ${currentState} to ${state}. Please check the state transition logic.`,
      )
    }
  },
)

// Get human-readable label for publish state
export function getCooperString(state: PublishState): string {
  switch (state) {
    case PublishState.PUBLISH_TEMPLATE_ERRORED:
    case PublishState.PUBLISH_TEMPLATE_INITIATED:
      return "Cooper Team Template Publish"
    case PublishState.UNPUBLISH_TEMPLATE_INITIATED:
    case PublishState.UNPUBLISH_TEMPLATE_ERRORED:
      return "Cooper Team Template Unpublish"
    case PublishState.PUBLISH_HUB_FILE_ERRORED:
    case PublishState.PUBLISH_HUB_FILE_INITIATED:
      return "Cooper Hub File Publish"
    case PublishState.UNPUBLISH_HUB_FILE_INITIATED:
      return "Cooper Hub File Unpublish"
    default:
      return state
  }
}



// Exported atom families and constants with original names preserved
export let isTemplateSubMenuOpen = setupRemovableAtomFamily(() => atom<boolean>(false))
export const Co = templateRandomIdAtom
export const EC = isTemplateFavoriteAtomFamily
export const Ef = TemplateBrowsingMode
export const Fs = isTemplateEditableAtomFamily
export const Hb = selectedTemplateAtomFamily
export const Hk = isTemplateDetailsVisibleAtomFamily
export const Jw = getCooperString
export const Ku = isTemplateSubMenuOpen
export const L1 = updateTemplateMetadataAtom
export const Lm = templateSourceAtom
export const Lo = clearTemplateMetadataAtom
export const Md = hasHubOrPublishState
export const Tw = isTemplateSearchEnabledAtomFamily
export const UV = currentPublishStateAtom
export const U_ = templateCommunityFilterAtomFamily
export const VW = PublishState
export const WU = publishRequestAtom
export const YA = isTemplateSelectorOpenAtomFamily
export const _9 = updatePublishStateAtom
export const az = isTemplatePreviewVisibleAtomFamily
export const ce = templateSearchQueryAtomFamily
export const d2 = templateBrowsingModeAtomFamily
export const hc = isTemplatePublishingAtomFamily
export const mF = TemplateSourceType
export const xB = isTemplateUsedAtomFamily
