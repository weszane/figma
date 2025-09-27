import { createStore } from 'redux'

import { createReduxSubscriptionAtom } from '../905/111321'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { debugState } from '../905/407919'
import { getFeatureFlags } from '../905/601108'
import { logger } from '../905/651849'
import { logDebug, logWarning } from '../905/714362'
import { postUserFlag } from '../905/985254'
import { atomStoreManager, useAtomWithSubscription } from '../figma_app/27355'
import { getInitialOptions } from '../figma_app/169182'
import { trackUserEvent } from '../figma_app/314264'
import { isFigmaEmail } from '../figma_app/416935'
import { throwTypeError } from '../figma_app/465776'
import { FeedbackCategory, LogToConsoleMode } from '../figma_app/763686'

// Types and Interfaces
interface UserFlags {
  [key: string]: {
    id?: string
    createdAt?: string
    updatedAt?: string
  }
}

interface ReduxState {
  userFlags: UserFlags
  isStarterUser: boolean
}

interface LabConfigurationOptions {
  name: string
  getDisplayName: () => string
  getCanOverride: (state?: ReduxState) => boolean
  getDefaultValue: () => boolean
  getVisualBellMessage?: (enabled: boolean) => string
}

interface EffectiveValueParams {
  trueOverrideUserFlag: boolean
  falseOverrideUserFlag: boolean
  canOverride: boolean
  defaultValue: boolean
}

interface TrackChangeParams {
  user: any
  previousValue: boolean
  newValue: boolean
  source: string
}



/**
 * Gets the Redux store for lab configurations
 * Returns the debug state store or creates a mock store with empty user flags
 * @returns Redux store instance
 */
function getReduxStore() {
  return debugState || (
    logDebug('Labs', 'No global redux store set, so creating a mock store with empty userFlags'),
    createStore(() => ({
      userFlags: {},
      isStarterUser: false,
    }))
  )
}

/**
 * Lab Configuration class for managing feature flags and lab experiments
 * Handles user overrides, default values, and visual bell notifications
 */
class LabConfiguration {
  public readonly name: string
  public readonly getDisplayName: () => string
  public readonly getVisualBellMessage: (enabled: boolean) => string
  public readonly defaultValue: () => boolean
  public readonly trueOverrideUserFlag: string
  public readonly falseOverrideUserFlag: string
  public readonly atom: any
  public readonly canOverrideAtom: any

  /**
   * Creates a new LabConfiguration instance
   * @param options - Configuration options for the lab
   */
  constructor({
    name,
    getDisplayName,
    getCanOverride,
    getDefaultValue,
    getVisualBellMessage,
  }: LabConfigurationOptions) {
    this.name = name
    this.getDisplayName = getDisplayName
    this.getVisualBellMessage = getVisualBellMessage || this.getDefaultVisualBellMessage
    this.defaultValue = getDefaultValue
    this.trueOverrideUserFlag = `${name}_override_true`
    this.falseOverrideUserFlag = `${name}_override_false`
    this.atom = createReduxSubscriptionAtom(getReduxStore as any, (state: ReduxState) => this.getEffectiveValue(state.userFlags))
    this.canOverrideAtom = createReduxSubscriptionAtom(getReduxStore as any, (state: ReduxState) => getCanOverride(state))
  }

  /**
   * Gets the current value of the lab configuration
   * @returns Current boolean value
   */
  getValue(): boolean {
    return atomStoreManager.get(this.atom)
  }

  /**
   * Calculates the effective value based on user flags and overrides
   * @param userFlags - User flag configuration object
   * @returns Effective boolean value for the lab
   */
  getEffectiveValue(userFlags: UserFlags): boolean {
    const isOverriddenToTrue = this.isUserOverriddenToTrue(userFlags)
    const isOverriddenToFalse = this.isUserOverriddenToFalse(userFlags)
    
    let trueOverride = isOverriddenToTrue
    let falseOverride = isOverriddenToFalse

    // Handle conflicting override flags
    if (trueOverride && falseOverride) {
      logWarning('Labs', 'Unexpected state: both lab flags are set', {
        falseOverrideFlagId: userFlags[this.falseOverrideUserFlag]?.id,
        falseOverrideFlagCreatedAt: userFlags[this.falseOverrideUserFlag]?.createdAt,
        falseOverrideUserFlagUpdatedAt: userFlags[this.falseOverrideUserFlag]?.updatedAt,
        trueOverrideFlagId: userFlags[this.trueOverrideUserFlag]?.id,
        trueOverrideFlagCreatedAt: userFlags[this.trueOverrideUserFlag]?.createdAt,
        trueOverrideFlagUpdatedAt: userFlags[this.trueOverrideUserFlag]?.updatedAt,
      }, {
        modeEventName: 'labs_both_flags_set',
        figmentOnly: true,
        logToConsole: LogToConsoleMode.ALWAYS,
      })

      // Resolve conflict by using the most recently updated flag
      const trueUpdatedAt = userFlags[this.trueOverrideUserFlag]?.updatedAt
      const falseUpdatedAt = userFlags[this.falseOverrideUserFlag]?.updatedAt
      
      if (trueUpdatedAt !== falseUpdatedAt) {
        if (trueUpdatedAt && falseUpdatedAt && trueUpdatedAt > falseUpdatedAt) {
          falseOverride = false
        } else {
          trueOverride = false
        }
      }
    }

    return this.calculateEffectiveLabValue({
      trueOverrideUserFlag: trueOverride,
      falseOverrideUserFlag: falseOverride,
      canOverride: this.canOverride(),
      defaultValue: this.defaultValue(),
    })
  }

  /**
   * Calculates the effective lab value based on override flags and permissions
   * @param params - Parameters for calculating effective value
   * @returns Effective boolean value
   */
  private calculateEffectiveLabValue({
    trueOverrideUserFlag,
    falseOverrideUserFlag,
    canOverride,
    defaultValue,
  }: EffectiveValueParams): boolean {
    if (!canOverride) {
      return defaultValue
    }

    if (trueOverrideUserFlag && falseOverrideUserFlag) {
      logger.error('[getEffectiveLabValue] Both override flags are set')
      return defaultValue
    }

    if (trueOverrideUserFlag) {
      return true
    }

    if (falseOverrideUserFlag) {
      return false
    }

    return defaultValue
  }

  /**
   * Checks if the user has overridden the lab to true
   * @param userFlags - User flag configuration object
   * @returns True if overridden to true
   */
  isUserOverriddenToTrue(userFlags: UserFlags): boolean {
    return !!userFlags[this.trueOverrideUserFlag]
  }

  /**
   * Checks if the user has overridden the lab to false
   * @param userFlags - User flag configuration object
   * @returns True if overridden to false
   */
  isUserOverriddenToFalse(userFlags: UserFlags): boolean {
    return !!userFlags[this.falseOverrideUserFlag]
  }

  /**
   * Checks if the user can override this lab configuration
   * @returns True if override is allowed
   */
  canOverride(): boolean {
    return atomStoreManager.get(this.canOverrideAtom)
  }

  /**
   * Checks if the lab value has been overridden by the user
   * @param userFlags - User flag configuration object
   * @returns True if overridden
   */
  isOverridden(userFlags: UserFlags): boolean {
    return this.canOverride() && (this.isUserOverriddenToTrue(userFlags) || this.isUserOverriddenToFalse(userFlags))
  }

  /**
   * Toggles the lab value and updates user flags
   * @param user - User object
   * @param dispatch - Redux dispatch function
   * @param source - Source of the toggle action
   */
  toggleValue(user: any, dispatch: any, source: string): void {
    if (!this.canOverride()) {
      return
    }

    const currentValue = this.getValue()
    const newValue = !currentValue
    
    const userFlagUpdates = {
      [this.trueOverrideUserFlag]: false,
      [this.falseOverrideUserFlag]: false,
    }
    
    userFlagUpdates[newValue ? this.trueOverrideUserFlag : this.falseOverrideUserFlag] = true

    dispatch(postUserFlag(userFlagUpdates))
    dispatch(VisualBellActions.enqueue({
      message: this.getVisualBellMessage(newValue),
    }))

    this.trackChange({
      user,
      previousValue: currentValue,
      newValue,
      source,
    })
  }

  /**
   * Gets the default visual bell message for lab state changes
   * @param enabled - Whether the lab is enabled
   * @returns Localized message string
   */
  getDefaultVisualBellMessage(enabled: boolean): string {
    return enabled
      ? getI18nString('lab.enabled', {
          labName: this.getDisplayName(),
        })
      : getI18nString('lab.disabled', {
          labName: this.getDisplayName(),
        })
  }

  /**
   * Resets the lab configuration to its default value
   * @param user - User object
   * @param dispatch - Redux dispatch function
   */
  resetToDefault(user: any, dispatch: any): void {
    const currentValue = this.getValue()
    
    dispatch(postUserFlag({
      [this.trueOverrideUserFlag]: false,
      [this.falseOverrideUserFlag]: false,
    }))

    this.trackChange({
      user,
      previousValue: currentValue,
      newValue: this.defaultValue(),
      source: 'reset',
    })
  }

  /**
   * Tracks changes to lab configuration for analytics
   * @param params - Parameters for tracking the change
   */
  trackChange({
    user,
    previousValue,
    newValue,
    source,
  }: TrackChangeParams): void {
    trackUserEvent('labs', {
      user,
    }, {
      name: this.name,
      canOverride: this.canOverride(),
      previousValue,
      newValue,
      defaultValue: this.defaultValue(),
      source,
      canToggleFF: null,
      defaultValueFF: null,
    })
  }
}

/**
 * Hook for using lab configuration with subscription
 * @param labConfig - Lab configuration instance
 * @returns Current lab value with subscription
 */
export function useLabConfiguration(labConfig: LabConfiguration): boolean {
  return useAtomWithSubscription(labConfig.atom)
}

// Check if running in non-production environment
const isNonProductionEnvironment = getInitialOptions().cluster_name !== 'prod'

/**
 * Lab configurations object containing all available lab experiments
 * Each lab can be toggled by users with appropriate permissions
 */
const labConfigurations = Object.freeze({
  customKeyboardShortcuts: new LabConfiguration({
    name: 'ce_custom_keyboard_shortcuts',
    getDisplayName: () => getI18nString('keyboard_settings.custom_keyboard_shortcuts'),
    getCanOverride: () => !!getFeatureFlags().ce_custom_keyboard_shortcuts,
    getDefaultValue: () => !!getFeatureFlags().ce_custom_keyboard_default,
  }),
  ui3: new LabConfiguration({
    name: 'unified_index_v3_endpoint',
    getDisplayName: () => getI18nString('lab.ui3'),
    getVisualBellMessage: (enabled: boolean) => enabled ? getI18nString('lab.ui3_enabled_message') : getI18nString('lab.ui3_disabled_message'),
    getCanOverride: () => true,
    getDefaultValue: () => true,
  }),
  ui3ForceDevOnly: new LabConfiguration({
    name: 'force_ui3_dev_only',
    getDisplayName: () => '[Dev only] Force UI3 everywhere',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => false,
  }),
  trackableDebug: new LabConfiguration({
    name: 'lab_trackable_debug_toggle',
    getDisplayName: () => getI18nString('lab.trackable_debug'),
    getCanOverride: () => isNonProductionEnvironment || isFigmaEmail(getInitialOptions().user_data?.email),
    getDefaultValue: () => false,
  }),
  interopFiles: new LabConfiguration({
    name: 'interop_files',
    getDisplayName: () => 'Interop Files',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().ui3p_interop_files,
  }),
  newResizablePanel: new LabConfiguration({
    name: 'new_resizable_panel',
    getDisplayName: () => 'New Resizable Panel',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().ui3p_new_resizable_panel,
  }),
  useGrid: new LabConfiguration({
    name: 'fpl_grid',
    getDisplayName: () => 'UI3: FPL Grid',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().fpl_a11y_grid,
  }),
  designSelectionActionsPanel: new LabConfiguration({
    name: 'ui3_selection_actions_refactor_in_design',
    getDisplayName: () => 'Design: Selection actions panel',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().ui3_selection_actions_refactor_in_design,
  }),
  designLeftRailPrototype: new LabConfiguration({
    name: 'design_left_rail_prototype',
    getDisplayName: () => 'Design: LeftRail Prototype for Make',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().ui3p_design_left_rail_prototype,
  }),
  designNavBar: new LabConfiguration({
    name: 'ui3p_design_navbar',
    getDisplayName: () => 'Design: Left NavBar',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().ui3p_design_navbar,
  }),
  variablePillA11y: new LabConfiguration({
    name: 'ui3_variable_pill_a11y',
    getDisplayName: () => 'UI3: Variable Pill A11y',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().ui3p_variable_pill_a11y,
  }),
  useGridPart2: new LabConfiguration({
    name: 'fpl_grid_part_2',
    getDisplayName: () => 'UI3: FPL Grid Part 2',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().fpl_a11y_grid && !!getFeatureFlags().fpl_a11y_grid_part_2,
  }),
  commentsA11y: new LabConfiguration({
    name: 'comments_a11y',
    getDisplayName: () => 'Comments A11y Improvements (Requires Page Refresh)',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().ui3p_comments_a11y,
  }),
  figjamPagePickerA11y: new LabConfiguration({
    name: 'figjam_page_picker_a11y',
    getDisplayName: () => 'Page Picker A11y',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().figjam_page_picker_a11y,
  }),
  fplScrubbableInput: new LabConfiguration({
    name: 'fpl_scrubbable_input',
    getDisplayName: () => 'FPL Scrubbable Input',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().fpl_scrubbable_input,
  }),
  quickActionsA11y: new LabConfiguration({
    name: 'ui3_quick_actions_a11y',
    getDisplayName: () => 'Quick Actions Menu A11y',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => !!getFeatureFlags().ui3_quick_actions_a11y,
  }),
  toolbeltPinning: new LabConfiguration({
    name: 'mw_toolbelt_pinning',
    getDisplayName: () => 'Maker week: Toolbelt pinning',
    getCanOverride: () => isNonProductionEnvironment,
    getDefaultValue: () => false,
  }),
})

/**
 * Determines if a feedback category should be enabled based on lab configurations
 * @param category - Feedback category to check
 * @returns True if the category should be enabled
 */
export function shouldEnableFeedbackCategory(category: FeedbackCategory): boolean {
  switch (category) {
    case FeedbackCategory.PLACEHOLDER:
      return false
    case FeedbackCategory.COMMENTS_A11Y:
      return labConfigurations.commentsA11y.getValue()
    default:
      throwTypeError(category)
  }
}

// Export aliases for backward compatibility
export const nt = labConfigurations
export const Xo = shouldEnableFeedbackCategory
export const o3 = useLabConfiguration
