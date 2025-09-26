import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { getCategory, PickerOptionType, ResourceLibraryType } from '../905/211621'

import { analyticsEventManager } from '../905/449184'
import { useSingleEffect } from '../905/791079'

/**
 * Refactored Instance Swap Picker utilities and hooks.
 * Original export: S
 */

interface OpenFileProperties {
  userId: string | undefined
  teamId: string | undefined
  orgId: string | undefined
  fileKey: string | undefined
  libraryKey: string | undefined
}

/**
 * Entrypoint constants for InstancePicker and PreferredValuesPicker.
 * Original: InstancePickerEntrypoint, PreferredValuesPickerEntrypoint
 */
export const InstancePickerEntrypoint = {
  SELECTED_INSTANCE_SWAP: 'Instance Panel > Selected Instance Swap',
  INSTANCE_SWAP_PROP_INSTANCE_PANEL: 'Instance Panel > Instance Swap Prop Control',
  INSTANCE_SWAP_PROP_INSTANCE_PANEL_BUBBLED: 'Instance Panel (Bubbled) > Instance Swap Prop Control',
  INSTANCE_SWAP_PROP_PLAYGROUND: 'Playground > Instance Swap Prop Control',
  INSTANCE_SWAP_PROP_PLAYGROUND_BUBBLED: 'Playground (Bubbled) > Instance Swap Prop Control',
  CREATE_COMPONENT_PROP_PICKER: 'Create Component Prop Picker > Instance Swap Prop Control',
  EDIT_COMPONENT_PROP_PICKER: 'Edit Component Prop Picker > Instance Swap Prop Control',
}

export const PreferredValuesPickerEntrypoint = {
  CREATE_COMPONENT_PROP_PICKER: 'Create Component Prop Picker > Preferred Values Select',
  EDIT_COMPONENT_PROP_PICKER: 'Edit Component Prop Picker > Preferred Values Select',
}

/**
 * Selector for open file properties.
 * Original: selectOpenFileProperties
 */
export const selectOpenFileProperties = createSelector(
  [
    (state: AppState) => state.user?.id,
    (state: AppState) => state.openFile?.parentOrgId ?? undefined,
    (state: AppState) => state.openFile?.key,
    (state: AppState) => state.openFile?.teamId ?? undefined,
    (state: AppState) => state.openFile?.libraryKey,
  ],
  (userId, orgId, fileKey, teamId, libraryKey): OpenFileProperties => ({
    userId,
    teamId,
    orgId,
    fileKey,
    libraryKey,
  }),
)

/**
 * Hook to get open file properties from redux.
 * Original: useOpenFileProperties
 */
export function useOpenFileProperties(): OpenFileProperties {
  return useSelector(selectOpenFileProperties)
}

/**
 * Hook to track the launch event of the picker.
 * Original: useLaunchedEvent
 * @param params - Picker launch event parameters
 */
export function useLaunchedEvent({
  pickerType,
  sessionId,
  dropdownSelection,
  entrypoint,
}: {
  pickerType: PickerOptionType
  sessionId: string
  dropdownSelection: any
  entrypoint?: string
}) {
  const openFileProps = useOpenFileProperties()
  const isListLayout = useSelector((state: any) => state.instanceSwapPickerListLayout)
  const libraryKey = dropdownSelection.type === ResourceLibraryType.FILE ? dropdownSelection.libraryKey : undefined

  useSingleEffect(() => {
    if (
      pickerType === PickerOptionType.INSTANCE_SWAP_PICKER
      || pickerType === PickerOptionType.PREFERRED_VALUES_PICKER
    ) {
      analyticsEventManager.trackDefinedEvent('instance_swap_picker.launched', {
        ...openFileProps,
        sessionId,
        viewMode: isListLayout ? 'list' : 'grid',
        dropdownType: getCategory(dropdownSelection, openFileProps.libraryKey ?? ''),
        libraryKey,
        entrypoint: entrypoint ?? undefined,
        isPreferredValues: pickerType === PickerOptionType.PREFERRED_VALUES_PICKER,
      })
    }
  })
}

/**
 * Hook to track view toggle events.
 * Original: useTrackViewToggle
 * @param params - View toggle event parameters
 */
export function useTrackViewToggle({
  sessionId,
  queryId,
  isPreferredValues,
}: {
  sessionId: string
  queryId: string
  isPreferredValues: boolean
}) {
  const openFileProps = useOpenFileProperties()
  return useCallback(
    (isList: boolean) => {
      analyticsEventManager.trackDefinedEvent('instance_swap_picker.view_toggle', {
        ...openFileProps,
        viewMode: isList ? 'list' : 'grid',
        sessionId,
        queryId,
        isPreferredValues,
      })
    },
    [openFileProps, isPreferredValues, queryId, sessionId],
  )
}

/**
 * Exported object containing all refactored utilities and hooks.
 * Original export: S
 */
export const fileLaunchHelper = {
  InstancePickerEntrypoint,
  PreferredValuesPickerEntrypoint,
  selectOpenFileProperties,
  useOpenFileProperties,
  useLaunchedEvent,
  useTrackViewToggle,
}
