import { z } from '../905/239603';
import { parseSessionLocalID } from '../905/871411';
import { Lv } from '../905/929949';
import { sD } from '../figma_app/243058';
import { Axis, FileAndBranchTipType, PropertyScope, SchemaJoinStatus, ViewType, LayoutTabType, DesignGraphElements, DiagramElementType, UserActionState, NodePropertyCategory, NoneColor, SessionStatus, BranchingOperation, VariableDataType } from '../figma_app/763686';
export let $$l3 = z.string();
z.string();
export let $$d1 = {
  isInitialized: !1,
  hasMissingFonts: !1,
  activeUserAction: UserActionState.DEFAULT,
  currentTool: DesignGraphElements.SELECT,
  currentStampToolName: null,
  activeCanvasEditModeType: LayoutTabType.DESIGN_LAYOUT,
  showUi: !0,
  showKeyboardShortcuts: !1,
  topLevelMode: ViewType.LAYOUT,
  urlNodeId: '-1:-1',
  showArtboardOutline: !1,
  useRealmsForPluginDev: !1,
  showComments: !0,
  currentSelectedGradientStop: {
    type: NoneColor.NONE,
    index: -1
  },
  currentSelectedProperty: {
    type: NodePropertyCategory.NONE,
    indices: []
  },
  isUserPresent: !1,
  showTogglePrototypeModeButton: !1,
  forcePublishFlattened: !1,
  prototypeCanvasUiVisible: !1,
  showTooltips: !1,
  prototypeBackgroundPickerOpen: !1,
  pastableStyleCount: 0,
  statePropertyToFocus: '',
  hoveredNode: '',
  multiplayerSessionState: SchemaJoinStatus.UNJOINED,
  isReadOnly: !0,
  isSceneReadOnly: !0,
  hyperlinkLocation: null,
  onCanvasNameEditorInfo: {
    mode: DiagramElementType.NONE,
    x: 0,
    y: 0,
    angle: 0,
    padding: {
      x: 0,
      y: 0
    },
    margin: {
      x: 0,
      y: 0
    },
    cornerRadius: 0,
    fontSize: 11,
    measurementId: '',
    initMeasurementText: '',
    isCentered: !1,
    invertTextPosition: !1,
    axis: Axis.X,
    trackId: '',
    isTLF: !1,
    initialText: '',
    isShownOnLeft: !1,
    shouldOpenDropdown: !1,
    varWidthNodeId: '',
    varWidthIndex: -1,
    varWidthTextDirection: {
      x: 0,
      y: 0
    }
  },
  votingSessionInfo: {
    sessionId: '',
    votingStage: SessionStatus.NO_SESSION,
    userVoteLimit: 0,
    votedNodes: [],
    userIdToVoteStampIds: {}
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
    id: 'WEB'
  },
  devHandoffPreferences: {
    codeExtensionPreferences: {}
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
      noSuggestionsFound: !1
    }
  },
  onCanvasPillInfo: null,
  activeTextReviewPlugin: null,
  hotReloadPluginDev: !0,
  useLocalRelatedLinkPlugin: !1
};
var $$c4 = (e => (e[e.MIXED_OR_NO_SYMBOLS = 0] = 'MIXED_OR_NO_SYMBOLS', e[e.SYMBOLS_ONLY = 1] = 'SYMBOLS_ONLY', e))($$c4 || {});
var $$u7 = (e => (e[e.NO = 0] = 'NO', e[e.YES = 1] = 'YES', e[e.YES_WITHOUT_TRACKING_AS_EDIT = 2] = 'YES_WITHOUT_TRACKING_AS_EDIT', e[e.YES_FORCE_TRACKING_AS_EDIT = 3] = 'YES_FORCE_TRACKING_AS_EDIT', e[e.NO_BUT_TRACK_AS_EDIT = 4] = 'NO_BUT_TRACK_AS_EDIT', e))($$u7 || {});
var $$p2 = (e => (e[e.NOT_ASSET = 0] = 'NOT_ASSET', e[e.ASSET_ICON = 1] = 'ASSET_ICON', e[e.ASSET_IMAGE = 2] = 'ASSET_IMAGE', e[e.ASSET_GIF = 4] = 'ASSET_GIF', e[e.ASSET_VIDEO = 8] = 'ASSET_VIDEO', e[e.ASSET_COMPONENT = 16] = 'ASSET_COMPONENT', e[e.ASSET_ILLUSTRATION = 32] = 'ASSET_ILLUSTRATION', e))($$p2 || {});
export function $$_0(e) {
  return e.map(e => PropertyScope[e]);
}
export function $$h5(e) {
  return e ? e.map(e => PropertyScope[e]) : [PropertyScope.ALL_SCOPES];
}
export function $$m6(e) {
  let t = {
    entries: []
  };
  Object.keys(e).forEach(r => {
    let o = e[r];
    if (o) {
      if (o.isMixed) return;
      {
        let e = function (e) {
          function t(e) {
            if (e.type !== VariableDataType.ALIAS) return null;
            let t = sD.fromString(e.value);
            return t ? sD.toKiwi(t) : null;
          }
          switch (e.type) {
            case VariableDataType.BOOLEAN:
              return {
                dataType: 'BOOLEAN',
                resolvedDataType: 'BOOLEAN',
                value: {
                  boolValue: e.value
                }
              };
            case VariableDataType.FLOAT:
              return {
                dataType: 'FLOAT',
                resolvedDataType: 'FLOAT',
                value: {
                  floatValue: e.value
                }
              };
            case VariableDataType.COLOR:
              return {
                dataType: 'COLOR',
                resolvedDataType: 'COLOR',
                value: {
                  colorValue: e.value
                }
              };
            case VariableDataType.STRING:
              return {
                dataType: 'STRING',
                resolvedDataType: 'STRING',
                value: {
                  textValue: e.value
                }
              };
            case VariableDataType.ALIAS:
              {
                let r = t(e);
                if (!r) return null;
                return {
                  dataType: 'ALIAS',
                  resolvedDataType: Lv(e.resolvedType),
                  value: {
                    alias: r
                  }
                };
              }
            case VariableDataType.NODE_FIELD_ALIAS:
              {
                let t = [];
                for (let r of e.value.stablePathToNode) {
                  let e = parseSessionLocalID(r);
                  if (!e) return null;
                  t.push(e);
                }
                let r = e.value.nodeField;
                let n = e.value.indexOrKey;
                if (!t || !r || !n) return null;
                if (r === 'COMPONENT_PROP_ASSIGNMENTS') {
                  return {
                    dataType: 'NODE_FIELD_ALIAS',
                    resolvedDataType: Lv(e.resolvedType),
                    value: {
                      nodeFieldAliasValue: {
                        stablePathToNode: {
                          guids: t
                        },
                        nodeField: r,
                        indexOrKey: n
                      }
                    }
                  };
                }
                return null;
              }
            case VariableDataType.FONT_STYLE:
              {
                let r = e.value.asFloat && t(e.value.asFloat) ? {
                  resolvedDataType: 'FLOAT',
                  fontStyleKey: 'asFloat',
                  variableId: t(e.value.asFloat)
                } : e.value.asString && t(e.value.asString) ? {
                  resolvedDataType: 'STRING',
                  fontStyleKey: 'asString',
                  variableId: t(e.value.asString)
                } : null;
                if (!r) return null;
                return {
                  dataType: 'FONT_STYLE',
                  resolvedDataType: 'FONT_STYLE',
                  value: {
                    fontStyleValue: {
                      [r.fontStyleKey]: {
                        dataType: 'ALIAS',
                        resolvedDataType: r.resolvedDataType,
                        value: {
                          alias: r.variableId
                        }
                      }
                    }
                  }
                };
              }
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
              return null;
          }
        }(o);
        e && t.entries?.push({
          variableData: e,
          variableField: r
        });
      }
    } else {
      t.entries.push({
        variableField: r
      });
    }
  });
  return t;
}
export const Ae = $$_0;
export const Gf = $$d1;
export const PW = $$p2;
export const ZI = $$l3;
export const fV = $$c4;
export const gK = $$h5;
export const w3 = $$m6;
export const zk = $$u7;