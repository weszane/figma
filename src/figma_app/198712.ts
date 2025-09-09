import type { SessionLocalID } from '../905/871411'
import { z } from 'zod'
import { parseSessionLocalID } from '../905/871411'
import { getResolvedTypeName } from '../905/929949'
import { VariableIdHandler } from '../figma_app/243058'
import { Axis, BranchingOperation, DesignGraphElements, DiagramElementType, FileAndBranchTipType, LayoutTabType, NodePropertyCategory, NoneColor, PropertyScope, SchemaJoinStatus, SessionStatus, UserActionState, VariableDataType, ViewType } from '../figma_app/763686'

/**
 * Zod schema for string validation.
 * Original name: $$l3
 */
export const stringSchema = z.string()

/**
 * Default application state object.
 * Original name: $$d1
 */
export const defaultAppState = {
  isInitialized: false,
  hasMissingFonts: false,
  activeUserAction: UserActionState.DEFAULT,
  currentTool: DesignGraphElements.SELECT,
  currentStampToolName: null,
  activeCanvasEditModeType: LayoutTabType.DESIGN_LAYOUT,
  showUi: true,
  showKeyboardShortcuts: false,
  topLevelMode: ViewType.LAYOUT,
  urlNodeId: '-1:-1',
  showArtboardOutline: false,
  useRealmsForPluginDev: false,
  showComments: true,
  currentSelectedGradientStop: {
    type: NoneColor.NONE,
    index: -1,
  },
  currentSelectedProperty: {
    type: NodePropertyCategory.NONE,
    indices: [],
  },
  isUserPresent: false,
  showTogglePrototypeModeButton: false,
  forcePublishFlattened: false,
  prototypeCanvasUiVisible: false,
  showTooltips: false,
  prototypeBackgroundPickerOpen: false,
  pastableStyleCount: 0,
  statePropertyToFocus: '',
  hoveredNode: '',
  multiplayerSessionState: SchemaJoinStatus.UNJOINED,
  isReadOnly: true,
  isSceneReadOnly: true,
  hyperlinkLocation: null,
  onCanvasNameEditorInfo: {
    mode: DiagramElementType.NONE,
    x: 0,
    y: 0,
    angle: 0,
    padding: {
      x: 0,
      y: 0,
    },
    margin: {
      x: 0,
      y: 0,
    },
    cornerRadius: 0,
    fontSize: 11,
    measurementId: '',
    initMeasurementText: '',
    isCentered: false,
    invertTextPosition: false,
    axis: Axis.X,
    trackId: '',
    isTLF: false,
    initialText: '',
    isShownOnLeft: false,
    shouldOpenDropdown: false,
    varWidthNodeId: '',
    varWidthIndex: -1,
    varWidthTextDirection: {
      x: 0,
      y: 0,
    },
  },
  votingSessionInfo: {
    sessionId: '',
    votingStage: SessionStatus.NO_SESSION,
    userVoteLimit: 0,
    votedNodes: [],
    userIdToVoteStampIds: {},
  },
  loadingEmbeds: [],
  temporarilyExpandedInstanceLayers: [],
  keyboardShortcuts: {},
  selectedInteractions: [],
  hoveredInteractions: [],
  currentPage: '0:1',
  pagesList: [],
  devHandoffCodeLanguage: {
    type: 'first-party',
    id: 'WEB',
  },
  devHandoffPreferences: {
    codeExtensionPreferences: {},
  },
  branchingSceneState: FileAndBranchTipType.ATTACHED_FILE_TIP,
  lastBranchingStagingAction: BranchingOperation.NONE,
  themePreference: null,
  sceneGeneration: 0,
  spellCheckSuggestions: {
    figma: {
      suggestions: [],
      rangeText: '',
      rangeStart: 0,
      rangeEnd: 0,
      noSuggestionsFound: false,
    },
  },
  onCanvasPillInfo: null,
  activeTextReviewPlugin: null,
  hotReloadPluginDev: true,
  useLocalRelatedLinkPlugin: false,
}

/**
 * Enum for symbol usage.
 * Original name: $$c4
 */
export enum SymbolUsageEnum {
  MIXED_OR_NO_SYMBOLS = 0,
  SYMBOLS_ONLY = 1,
}
export const symbolUsageEnum = SymbolUsageEnum

/**
 * Enum for yes/no tracking options.
 * Original name: $$u7
 */
export enum YesNoTrackingEnum {
  NO = 0,
  YES = 1,
  YES_WITHOUT_TRACKING_AS_EDIT = 2,
  YES_FORCE_TRACKING_AS_EDIT = 3,
  NO_BUT_TRACK_AS_EDIT = 4,
}
export const yesNoTrackingEnum = YesNoTrackingEnum

/**
 * Enum for asset types.
 * Original name: $$p2
 */
export enum AssetTypeEnum {
  NOT_ASSET = 0,
  ASSET_ICON = 1,
  ASSET_IMAGE = 2,
  ASSET_GIF = 4,
  ASSET_VIDEO = 8,
  ASSET_COMPONENT = 16,
  ASSET_ILLUSTRATION = 32,
}
export const assetTypeEnum = AssetTypeEnum

/**
 * Maps array of property scope keys to their corresponding PropertyScope values.
 * Original name: $$_0
 * @param keys Array of PropertyScope keys
 * @returns Array of PropertyScope values
 */
export function mapPropertyScopeKeys(keys: (keyof typeof PropertyScope)[]): PropertyScope[] {
  return keys.map(key => PropertyScope[key])
}

/**
 * Maps array of property scope keys to their corresponding PropertyScope values, or returns all scopes if input is falsy.
 * Original name: $$h5
 * @param keys Array of PropertyScope keys or undefined
 * @returns Array of PropertyScope values
 */
export function getPropertyScopes(keys?: (keyof typeof PropertyScope)[]): PropertyScope[] {
  return keys ? keys.map(key => PropertyScope[key]) : [PropertyScope.ALL_SCOPES]
}

/**
 * Converts variable data object to a structured variable entries object.
 * Original name: $$m6
 * @param variableData Object containing variable data fields
 * @returns Object with entries array
 */
export function convertVariableDataToEntries(variableData: Record<string, any>) {
  const result: { entries: any[] } = { entries: [] }

  Object.keys(variableData).forEach((field) => {
    const value = variableData[field]
    if (value) {
      if (value.isMixed)
        return
      function convertVariableData(variable: any) {
        /**
         * Helper to resolve alias variable IDs.
         */
        function resolveAlias(variable: any) {
          if (variable.type !== VariableDataType.ALIAS)
            return null
          const id = VariableIdHandler.fromString(variable.value)
          return id ? VariableIdHandler.toKiwi(id) : null
        }

        switch (variable.type) {
          case VariableDataType.BOOLEAN:
            return {
              dataType: 'BOOLEAN',
              resolvedDataType: 'BOOLEAN',
              value: { boolValue: variable.value },
            }
          case VariableDataType.FLOAT:
            return {
              dataType: 'FLOAT',
              resolvedDataType: 'FLOAT',
              value: { floatValue: variable.value },
            }
          case VariableDataType.COLOR:
            return {
              dataType: 'COLOR',
              resolvedDataType: 'COLOR',
              value: { colorValue: variable.value },
            }
          case VariableDataType.STRING:
            return {
              dataType: 'STRING',
              resolvedDataType: 'STRING',
              value: { textValue: variable.value },
            }
          case VariableDataType.ALIAS: {
            const alias = resolveAlias(variable)
            if (!alias)
              return null
            return {
              dataType: 'ALIAS',
              resolvedDataType: getResolvedTypeName(variable.resolvedType),
              value: { alias },
            }
          }
          case VariableDataType.NODE_FIELD_ALIAS: {
            const guids: SessionLocalID[] = []
            for (const stablePath of variable.value.stablePathToNode) {
              const parsed = parseSessionLocalID(stablePath)
              if (!parsed)
                return null
              guids.push(parsed)
            }
            const nodeField = variable.value.nodeField
            const indexOrKey = variable.value.indexOrKey
            if (!guids || !nodeField || !indexOrKey)
              return null
            if (nodeField === 'COMPONENT_PROP_ASSIGNMENTS') {
              return {
                dataType: 'NODE_FIELD_ALIAS',
                resolvedDataType: getResolvedTypeName(variable.resolvedType),
                value: {
                  nodeFieldAliasValue: {
                    stablePathToNode: { guids },
                    nodeField,
                    indexOrKey,
                  },
                },
              }
            }
            return null
          }
          case VariableDataType.FONT_STYLE: {
            let fontStyleEntry = null
            if (variable.value.asFloat && resolveAlias(variable.value.asFloat)) {
              fontStyleEntry = {
                resolvedDataType: 'FLOAT',
                fontStyleKey: 'asFloat',
                variableId: resolveAlias(variable.value.asFloat),
              }
            }
            else if (variable.value.asString && resolveAlias(variable.value.asString)) {
              fontStyleEntry = {
                resolvedDataType: 'STRING',
                fontStyleKey: 'asString',
                variableId: resolveAlias(variable.value.asString),
              }
            }
            if (!fontStyleEntry)
              return null
            return {
              dataType: 'FONT_STYLE',
              resolvedDataType: 'FONT_STYLE',
              value: {
                fontStyleValue: {
                  [fontStyleEntry.fontStyleKey]: {
                    dataType: 'ALIAS',
                    resolvedDataType: fontStyleEntry.resolvedDataType,
                    value: { alias: fontStyleEntry.variableId },
                  },
                },
              },
            }
          }
          // Unsupported types
          case VariableDataType.MAP:
          case VariableDataType.EXPRESSION:
          case VariableDataType.SYMBOL_ID:
          case VariableDataType.TEXT_DATA:
          case VariableDataType.MANAGED_STRING_ALIAS:
          case VariableDataType.CMS_ALIAS:
          case VariableDataType.IMAGE:
          case VariableDataType.LINK:
          case VariableDataType.JS_RUNTIME_ALIAS:
          case VariableDataType.SLOT_CONTENT_ID:
          case VariableDataType.DATE:
            return null
        }
      }
      const entry = convertVariableData(value)
      if (entry) {
        result.entries.push({
          variableData: entry,
          variableField: field,
        })
      }
    }
    else {
      result.entries.push({
        variableField: field,
      })
    }
  })
  return result
}

// Export original names for compatibility
export const Ae = mapPropertyScopeKeys
export const Gf = defaultAppState
export const PW = assetTypeEnum
export const ZI = stringSchema
export const fV = symbolUsageEnum
export const gK = getPropertyScopes
export const w3 = convertVariableDataToEntries
export const zk = yesNoTrackingEnum
