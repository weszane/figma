/**
 * Action Processing and Reaction Management Module
 * 
 * This module handles complex action processing, reaction mapping, and interaction
 * state management extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - Action type processing and validation
 * - Reaction configuration and mapping
 * - Variable and media action handling
 * - Navigation and transition processing
 * - Conditional action logic
 * - Connection type management
 */

/**
 * Action Connection Types
 */
export enum ConnectionType {
  NONE = 'NONE',
  BACK = 'BACK',
  CLOSE = 'CLOSE',
  URL = 'URL',
  NODE = 'NODE',
  SET_VARIABLE = 'SET_VARIABLE',
  SET_VARIABLE_MODE = 'SET_VARIABLE_MODE',
  CONDITIONAL = 'CONDITIONAL',
  UPDATE_MEDIA_RUNTIME = 'UPDATE_MEDIA_RUNTIME'
}

/**
 * Media Action Types
 */
export enum MediaAction {
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  TOGGLE_PLAY_PAUSE = 'TOGGLE_PLAY_PAUSE',
  SKIP_FORWARD = 'SKIP_FORWARD',
  SKIP_BACKWARD = 'SKIP_BACKWARD',
  SKIP_TO = 'SKIP_TO',
  MUTE = 'MUTE',
  UNMUTE = 'UNMUTE',
  TOGGLE_MUTE = 'TOGGLE_MUTE'
}

/**
 * Variable Data Types
 */
export enum VariableDataType {
  BOOLEAN = 'BOOLEAN',
  FLOAT = 'FLOAT', 
  STRING = 'STRING',
  COLOR = 'COLOR',
  MAP = 'MAP',
  SYMBOL_ID = 'SYMBOL_ID'
}

/**
 * Action Processing Utilities
 */
export class ActionProcessor {
  /**
   * Process connection type actions
   */
  static processConnectionAction(action: any): any {
    switch (action.connectionType || 'NONE') {
      case ConnectionType.NONE:
        return null

      case ConnectionType.BACK:
        return {
          type: 'BACK'
        }

      case ConnectionType.CLOSE:
        return {
          type: 'CLOSE'
        }

      case ConnectionType.URL:
        const urlAction: any = {
          type: 'URL',
          url: action.connectionURL || ''
        }
        urlAction.openInNewTab = action.openUrlInNewTab ?? true
        return urlAction

      case ConnectionType.SET_VARIABLE:
        return this.processVariableAction(action)

      case ConnectionType.SET_VARIABLE_MODE:
        return this.processVariableModeAction(action)

      case ConnectionType.CONDITIONAL:
        return this.processConditionalAction(action)

      case ConnectionType.UPDATE_MEDIA_RUNTIME:
        return this.processMediaAction(action)

      case ConnectionType.NODE:
        return this.processNodeAction(action)

      default:
        console.warn(`Unknown connection type: ${action.connectionType}`)
        return null
    }
  }

  /**
   * Process variable setting actions
   */
  private static processVariableAction(action: any): any {
    const targetVariable = action.targetVariable?.id
    let variableId = null
    
    if (targetVariable) {
      // Mock variable ID processing - would need proper implementation
      variableId = targetVariable
    }

    return {
      type: 'SET_VARIABLE',
      variableId,
      variableValue: this.processVariableValue(action.targetVariableData)
    }
  }

  /**
   * Process variable mode actions
   */
  private static processVariableModeAction(action: any): any {
    // Check feature flag (mock implementation)
    if (!this.isVariableModeActionEnabled()) {
      return null
    }

    const variableSetID = action.targetVariableSetID
    let variableCollectionId = null
    
    if (variableSetID) {
      // Mock collection ID processing
      variableCollectionId = variableSetID
    }

    return {
      type: 'SET_VARIABLE_MODE',
      variableCollectionId,
      variableModeId: action.targetVariableModeID
    }
  }

  /**
   * Process conditional actions
   */
  private static processConditionalAction(action: any): any {
    if (!action.condition || !action.trueAction) {
      throw new Error('Conditional actions require condition and trueAction.')
    }

    const processedCondition = this.processVariableValue(action.condition)
    
    if (processedCondition.resolvedDataType !== 'BOOLEAN') {
      throw new Error('Conditional actions require a boolean condition.')
    }

    return {
      type: 'CONDITIONAL',
      condition: processedCondition,
      trueAction: this.processConnectionAction(action.trueAction),
      falseAction: action.falseAction ? this.processConnectionAction(action.falseAction) : null,
      expressions: action.expressions || []
    }
  }

  /**
   * Process media runtime actions
   */
  private static processMediaAction(action: any): any {
    const transitionNodeID = action.transitionNodeID
    let mediaSkipByAmount = 0
    let mediaSkipToTime = 0

    switch (action.mediaAction) {
      case MediaAction.SKIP_FORWARD:
      case MediaAction.SKIP_BACKWARD:
        mediaSkipByAmount = action.amountToSkip || 0
        break
      case MediaAction.SKIP_TO:
        mediaSkipToTime = action.newTimestamp || 0
        break
    }

    return {
      type: 'UPDATE_MEDIA_RUNTIME',
      transitionNodeID,
      mediaAction: action.mediaAction,
      mediaSkipByAmount,
      mediaSkipToTime
    }
  }

  /**
   * Process node navigation actions
   */
  private static processNodeAction(action: any): any {
    const destinationId = action.destinationId
    
    if (!destinationId) {
      return null
    }

    const processedAction: any = {
      type: 'NODE',
      destinationId,
      preserveScrollPosition: action.preserveScrollPosition,
      overlayRelativePosition: action.overlayRelativePosition,
      overlayBackgroundInteraction: action.overlayBackgroundInteraction,
      overlayCloseOnClickOutside: action.overlayCloseOnClickOutside,
      matchingPresentationMode: action.matchingPresentationMode,
      resetVideoPosition: action.resetVideoPosition,
      resetScrollPosition: action.resetScrollPosition,
      resetInteractiveComponentState: action.resetInteractiveComponentState
    }

    // Process navigation if present
    if (action.navigation && action.navigation.length > 0) {
      processedAction.navigation = this.processNavigation(action.navigation)
    }

    // Process overlay actions
    if (action.swapOverlayAction) {
      processedAction.swapOverlayAction = this.processConnectionAction(action.swapOverlayAction)
    }

    if (action.closeOverlayAction) {
      processedAction.closeOverlayAction = this.processConnectionAction(action.closeOverlayAction)
    }

    return processedAction
  }

  /**
   * Process navigation transitions
   */
  private static processNavigation(navigation: any[]): any[] {
    return navigation.map(nav => {
      const processedNav: any = {}

      // Process transition
      if (nav.transition && nav.transition.type !== 'NONE') {
        processedNav.transition = {
          type: nav.transition.type
        }

        // Add direction for non-dissolve transitions
        if (nav.transition.type !== 'DISSOLVE' && nav.transition.direction) {
          processedNav.transition.direction = nav.transition.direction
        }

        // Add easing
        if (nav.transition.easing) {
          if (nav.transition.easing.easingType === 'EASING_TYPE_CUSTOM_BEZIER') {
            processedNav.transition.easing = {
              type: 'EASE_OUT',
              easingBezier: nav.transition.easing.easingBezier
            }
          } else {
            processedNav.transition.easing = {
              type: nav.transition.easing.easingType
            }
          }
        }

        // Add duration
        if (nav.transition.duration !== undefined) {
          processedNav.transition.duration = nav.transition.duration
        }
      }

      // Add destination
      if (nav.destinationId) {
        processedNav.destinationId = nav.destinationId
      }

      return processedNav
    })
  }

  /**
   * Process variable values with type checking
   */
  private static processVariableValue(variableData: any): any {
    if (!variableData) {
      return null
    }

    const processed: any = {}

    // Process value
    if (variableData.value !== undefined) {
      processed.value = this.extractVariableValue(variableData.value)
    }

    // Add resolved data type
    processed.resolvedDataType = this.inferDataType(processed.value)

    return processed
  }

  /**
   * Extract variable value based on type
   */
  private static extractVariableValue(value: any): any {
    if (value.floatValue !== undefined) {
      return value.floatValue
    }
    if (value.textValue !== undefined) {
      return value.textValue
    }
    if (value.boolValue !== undefined) {
      return value.boolValue
    }
    if (value.colorValue !== undefined) {
      return value.colorValue
    }
    if (value.alias !== undefined) {
      return {
        type: 'VARIABLE_ALIAS',
        id: value.alias
      }
    }
    if (value.expressionValue) {
      return {
        expressionFunction: value.expressionValue.expressionFunction,
        expressionArguments: value.expressionValue.expressionArguments || []
      }
    }
    
    return value
  }

  /**
   * Infer data type from value
   */
  private static inferDataType(value: any): string {
    if (typeof value === 'boolean') return 'BOOLEAN'
    if (typeof value === 'number') return 'FLOAT'
    if (typeof value === 'string') return 'STRING'
    if (value && typeof value === 'object') {
      if (value.type === 'VARIABLE_ALIAS') return 'VARIABLE_ALIAS'
      if (value.r !== undefined && value.g !== undefined && value.b !== undefined) return 'COLOR'
      if (Array.isArray(value)) return 'MAP'
    }
    return 'STRING' // Default fallback
  }

  /**
   * Check if variable mode actions are enabled (mock)
   */
  private static isVariableModeActionEnabled(): boolean {
    // Mock feature flag check
    return true
  }
}

/**
 * Reaction Management System
 */
export class ReactionManager {
  /**
   * Process reactions with actions
   */
  static processReactions(reactions: any[]): any[] {
    const processed: any[] = []

    for (const reaction of reactions) {
      const processedReaction: any = {}

      // Process actions
      if (reaction.actions) {
        if (reaction.actions.length > 1 && !this.isMultipleActionsAllowed()) {
          throw new Error('You cannot create multiple actions on Reactions with your current plan.')
        }

        processedReaction.actions = reaction.actions.length < 1 
          ? [{ connectionType: 'NONE' }]
          : reaction.actions
            .map(action => ActionProcessor.processConnectionAction(action))
            .filter(action => action !== null)
      } else if (reaction.action) {
        // Handle single action format
        processedReaction.actions = [ActionProcessor.processConnectionAction(reaction.action)]
      }

      // Process trigger
      if (reaction.trigger) {
        processedReaction.trigger = reaction.trigger
      }

      // Add metadata
      processedReaction.id = this.generateUniqueID()
      processedReaction.stateManagementVersion = 1

      processed.push(processedReaction)
    }

    return processed
  }

  /**
   * Check if multiple actions are allowed
   */
  private static isMultipleActionsAllowed(): boolean {
    // Mock plan check - would normally verify user subscription
    return true
  }

  /**
   * Generate unique ID for reactions
   */
  private static generateUniqueID(): string {
    return `reaction_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
}

/**
 * Action Validation Utilities
 */
export class ActionValidator {
  /**
   * Validate action configuration
   */
  static validateAction(action: any): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!action) {
      errors.push('Action is required')
      return { valid: false, errors }
    }

    // Validate connection type
    if (!Object.values(ConnectionType).includes(action.connectionType)) {
      errors.push(`Invalid connection type: ${action.connectionType}`)
    }

    // Type-specific validation
    switch (action.connectionType) {
      case ConnectionType.URL:
        if (!action.connectionURL) {
          errors.push('URL actions require a connectionURL')
        }
        break

      case ConnectionType.NODE:
        if (!action.destinationId) {
          errors.push('Node actions require a destinationId')
        }
        break

      case ConnectionType.SET_VARIABLE:
        if (!action.targetVariable?.id) {
          errors.push('Variable actions require a target variable ID')
        }
        break

      case ConnectionType.CONDITIONAL:
        if (!action.condition) {
          errors.push('Conditional actions require a condition')
        }
        if (!action.trueAction) {
          errors.push('Conditional actions require a trueAction')
        }
        break
    }

    return {
      valid: errors.length === 0,
      errors
    }
  }

  /**
   * Validate transition configuration
   */
  static validateTransition(transition: any): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!transition) {
      return { valid: true, errors }
    }

    const validTypes = ['DISSOLVE', 'SLIDE_IN', 'SLIDE_OUT', 'PUSH', 'MOVE_IN', 'MOVE_OUT']
    if (!validTypes.includes(transition.type)) {
      errors.push(`Invalid transition type: ${transition.type}`)
    }

    if (transition.type !== 'DISSOLVE' && transition.direction) {
      const validDirections = ['LEFT', 'RIGHT', 'TOP', 'BOTTOM']
      if (!validDirections.includes(transition.direction)) {
        errors.push(`Invalid transition direction: ${transition.direction}`)
      }
    }

    return {
      valid: errors.length === 0,
      errors
    }
  }
}

/**
 * Factory Functions
 */

/**
 * Create action processor
 */
export function createActionProcessor(): typeof ActionProcessor {
  return ActionProcessor
}

/**
 * Create reaction manager
 */
export function createReactionManager(): typeof ReactionManager {
  return ReactionManager
}

/**
 * Create action validator
 */
export function createActionValidator(): typeof ActionValidator {
  return ActionValidator
}

/**
 * Convenience Exports
 */
export {
  ActionProcessor as ActionHandler,
  ActionValidator as ActionValidation,
  ReactionManager as ReactionProcessor
}

/**
 * Default Export
 */
export default {
  ActionProcessor,
  ReactionManager,
  ActionValidator,
  ConnectionType,
  MediaAction,
  VariableDataType,
  createActionProcessor,
  createReactionManager,
  createActionValidator
}
