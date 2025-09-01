import { sD } from "../figma_app/243058";
import { QOV, NLJ, m1T, lyf, vRS, rrT, kul, nzw, _0v, W8Y, aTl, YIO, j0r, Z_n } from "../figma_app/763686";
import { sH } from "../905/871411";
import { Lv } from "../905/929949";
import { z } from "../905/239603";
export let $$l3 = z.string();
z.string();
export let $$d1 = {
  isInitialized: !1,
  hasMissingFonts: !1,
  activeUserAction: QOV.DEFAULT,
  currentTool: NLJ.SELECT,
  currentStampToolName: null,
  activeCanvasEditModeType: m1T.DESIGN_LAYOUT,
  showUi: !0,
  showKeyboardShortcuts: !1,
  topLevelMode: lyf.LAYOUT,
  urlNodeId: "-1:-1",
  showArtboardOutline: !1,
  useRealmsForPluginDev: !1,
  showComments: !0,
  currentSelectedGradientStop: {
    type: vRS.NONE,
    index: -1
  },
  currentSelectedProperty: {
    type: rrT.NONE,
    indices: []
  },
  isUserPresent: !1,
  showTogglePrototypeModeButton: !1,
  forcePublishFlattened: !1,
  prototypeCanvasUiVisible: !1,
  showTooltips: !1,
  prototypeBackgroundPickerOpen: !1,
  pastableStyleCount: 0,
  statePropertyToFocus: "",
  hoveredNode: "",
  multiplayerSessionState: kul.UNJOINED,
  isReadOnly: !0,
  isSceneReadOnly: !0,
  hyperlinkLocation: null,
  onCanvasNameEditorInfo: {
    mode: nzw.NONE,
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
    measurementId: "",
    initMeasurementText: "",
    isCentered: !1,
    invertTextPosition: !1,
    axis: _0v.X,
    trackId: "",
    isTLF: !1,
    initialText: "",
    isShownOnLeft: !1,
    shouldOpenDropdown: !1,
    varWidthNodeId: "",
    varWidthIndex: -1,
    varWidthTextDirection: {
      x: 0,
      y: 0
    }
  },
  votingSessionInfo: {
    sessionId: "",
    votingStage: W8Y.NO_SESSION,
    userVoteLimit: 0,
    votedNodes: [],
    userIdToVoteStampIds: {}
  },
  loadingEmbeds: [],
  temporarilyExpandedInstanceLayers: [],
  keyboardShortcuts: {},
  selectedInteractions: [],
  hoveredInteractions: [],
  currentPage: "0:1",
  pagesList: [],
  devHandoffCodeLanguage: {
    type: "first-party",
    id: "WEB"
  },
  devHandoffPreferences: {
    codeExtensionPreferences: {}
  },
  branchingSceneState: aTl.ATTACHED_FILE_TIP,
  lastBranchingStagingAction: YIO.NONE,
  themePreference: null,
  sceneGeneration: 0,
  spellCheckSuggestions: {
    figma: {
      suggestions: [],
      rangeText: "",
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
var $$c4 = (e => (e[e.MIXED_OR_NO_SYMBOLS = 0] = "MIXED_OR_NO_SYMBOLS", e[e.SYMBOLS_ONLY = 1] = "SYMBOLS_ONLY", e))($$c4 || {});
var $$u7 = (e => (e[e.NO = 0] = "NO", e[e.YES = 1] = "YES", e[e.YES_WITHOUT_TRACKING_AS_EDIT = 2] = "YES_WITHOUT_TRACKING_AS_EDIT", e[e.YES_FORCE_TRACKING_AS_EDIT = 3] = "YES_FORCE_TRACKING_AS_EDIT", e[e.NO_BUT_TRACK_AS_EDIT = 4] = "NO_BUT_TRACK_AS_EDIT", e))($$u7 || {});
var $$p2 = (e => (e[e.NOT_ASSET = 0] = "NOT_ASSET", e[e.ASSET_ICON = 1] = "ASSET_ICON", e[e.ASSET_IMAGE = 2] = "ASSET_IMAGE", e[e.ASSET_GIF = 4] = "ASSET_GIF", e[e.ASSET_VIDEO = 8] = "ASSET_VIDEO", e[e.ASSET_COMPONENT = 16] = "ASSET_COMPONENT", e[e.ASSET_ILLUSTRATION = 32] = "ASSET_ILLUSTRATION", e))($$p2 || {});
export function $$_0(e) {
  return e.map(e => j0r[e]);
}
export function $$h5(e) {
  return e ? e.map(e => j0r[e]) : [j0r.ALL_SCOPES];
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
            if (e.type !== Z_n.ALIAS) return null;
            let t = sD.fromString(e.value);
            return t ? sD.toKiwi(t) : null;
          }
          switch (e.type) {
            case Z_n.BOOLEAN:
              return {
                dataType: "BOOLEAN",
                resolvedDataType: "BOOLEAN",
                value: {
                  boolValue: e.value
                }
              };
            case Z_n.FLOAT:
              return {
                dataType: "FLOAT",
                resolvedDataType: "FLOAT",
                value: {
                  floatValue: e.value
                }
              };
            case Z_n.COLOR:
              return {
                dataType: "COLOR",
                resolvedDataType: "COLOR",
                value: {
                  colorValue: e.value
                }
              };
            case Z_n.STRING:
              return {
                dataType: "STRING",
                resolvedDataType: "STRING",
                value: {
                  textValue: e.value
                }
              };
            case Z_n.ALIAS:
              {
                let r = t(e);
                if (!r) return null;
                return {
                  dataType: "ALIAS",
                  resolvedDataType: Lv(e.resolvedType),
                  value: {
                    alias: r
                  }
                };
              }
            case Z_n.NODE_FIELD_ALIAS:
              {
                let t = [];
                for (let r of e.value.stablePathToNode) {
                  let e = sH(r);
                  if (!e) return null;
                  t.push(e);
                }
                let r = e.value.nodeField;
                let n = e.value.indexOrKey;
                if (!t || !r || !n) return null;
                if ("COMPONENT_PROP_ASSIGNMENTS" === r) return {
                  dataType: "NODE_FIELD_ALIAS",
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
                return null;
              }
            case Z_n.FONT_STYLE:
              {
                let r = e.value.asFloat && t(e.value.asFloat) ? {
                  resolvedDataType: "FLOAT",
                  fontStyleKey: "asFloat",
                  variableId: t(e.value.asFloat)
                } : e.value.asString && t(e.value.asString) ? {
                  resolvedDataType: "STRING",
                  fontStyleKey: "asString",
                  variableId: t(e.value.asString)
                } : null;
                if (!r) return null;
                return {
                  dataType: "FONT_STYLE",
                  resolvedDataType: "FONT_STYLE",
                  value: {
                    fontStyleValue: {
                      [r.fontStyleKey]: {
                        dataType: "ALIAS",
                        resolvedDataType: r.resolvedDataType,
                        value: {
                          alias: r.variableId
                        }
                      }
                    }
                  }
                };
              }
            case Z_n.MAP:
            case Z_n.EXPRESSION:
            case Z_n.SYMBOL_ID:
            case Z_n.TEXT_DATA:
            case Z_n.MANAGED_STRING_ALIAS:
            case Z_n.CMS_ALIAS:
            case Z_n.IMAGE:
            case Z_n.LINK:
            case Z_n.JS_RUNTIME_ALIAS:
            case Z_n.SLOT_CONTENT_ID:
            case Z_n.DATE:
              return null;
          }
        }(o);
        e && t.entries?.push({
          variableData: e,
          variableField: r
        });
      }
    } else t.entries.push({
      variableField: r
    });
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