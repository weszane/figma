import { subscribeObservable } from '../figma_app/84367'
import { desktopAPIInstance } from '../figma_app/876459'

/**
 * Stores property actions by property name.
 * Original variable: a
 */
const propertyActions: Record<string, { actions: Array<{ name: string, propertyValue: boolean | string }> }> = {}

/**
 * Stores unsubscribe functions for observables by action name.
 * Original variable: s
 */
const unsubscribeMap = new Map<string, () => void>()

/**
 * Retrieves property actions for a given property name.
 * Original function: $$o1
 * @param propertyName - The property name to look up.
 * @returns The property actions object or undefined.
 */
export function getPropertyActions(propertyName: string) {
  return propertyActions[propertyName]
}

/**
 * Handles property state and updates fullscreen menu state.
 * Original function: $$l0
 * @param params - The property parameters.
 * @param actionName - The action name.
 * @param currentValues - The current property values.
 * @returns An object with isChecked state or null.
 */
export function handlePropertyState(params: {
  property: string | { getCopy: () => boolean | string }
  propertyValue: boolean | string
}, actionName: string, currentValues: Record<string, boolean | string>): { isChecked: boolean } | null {
  if (params.property == null)
    return null

  const { property, propertyValue } = params

  // Observable property handling
  if (typeof property !== 'string') {
    const unsubscribe = unsubscribeMap.get(actionName)
    if (unsubscribe)
      unsubscribe()

    unsubscribeMap.set(
      actionName,
      subscribeObservable(property, {
        onChangeImmediate: () => {
          if (desktopAPIInstance) {
            const isChecked = property.getCopy() === propertyValue
            desktopAPIInstance.updateFullscreenMenuState({
              actionCheckedState: {
                [actionName]: isChecked,
              },
            })
          }
        },
      }),
    )
    return {
      isChecked: property.getCopy() === propertyValue,
    }
  }

  // Boolean or string property value handling
  if (typeof propertyValue === 'boolean' || typeof propertyValue === 'string') {
    const actions = propertyActions[property]?.actions ?? []
    propertyActions[property] = {
      actions: [
        ...actions,
        {
          name: actionName,
          propertyValue,
        },
      ],
    }
    return {
      isChecked: currentValues[property] === propertyValue,
    }
  }

  return null
}

// Refactored exports for compatibility
export const e = handlePropertyState // setupPlaybackHandler
export const m = getPropertyActions // getPropertyActions
