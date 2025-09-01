import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useMemo, useContext, useState, useEffect, useRef } from "react";
import { d4, wA } from "../vendor/514228";
import { fp } from "../figma_app/27355";
import s from "classnames";
import { h4, Nz } from "../905/417232";
import { d as _$$d } from "../figma_app/429226";
import { Pt, rf } from "../figma_app/806412";
import { S as _$$S } from "../figma_app/552746";
import { tx, t as _$$t } from "../905/303541";
import { js, Z6, cP, _X } from "../figma_app/451499";
import { Um } from "../905/848862";
import { _P } from "../figma_app/2590";
import { c$, bL, l9, mc, wv } from "../905/493196";
import { h as _$$h } from "../905/270045";
import { J as _$$J } from "../905/614223";
import { glU, rXF } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { I7 } from "../figma_app/594947";
import { E7, gl, hS } from "../905/216495";
import { av } from "../figma_app/316316";
import { ZM } from "../figma_app/505098";
import { cJ } from "../905/561485";
import { xb } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { E as _$$E } from "../905/632989";
import { aI, Hr, dI } from "../905/871411";
import { Y1 } from "../905/143116";
import { s as _$$s } from "../cssbuilder/589278";
import { u as _$$u } from "../figma_app/852050";
import { y3 } from "../figma_app/741785";
import { aA } from "../figma_app/632975";
import { c as _$$c, P as _$$P } from "../905/200950";
import { YT, Oz, zt, hP, hV } from "../figma_app/84580";
import { eF } from "../figma_app/394327";
import { wG } from "../905/331989";
import { Li, O8, kE, It, ft, wu, zX, _2, LW, $l, KY, Iw, DM, vs, M9, I_, PE, Ze, rn, Gu, Yo, Oe, h2, Ob } from "../897/934363";
import { b as _$$b } from "../5421/909298";
import { x as _$$x } from "../5421/193325";
import { t as _$$t2 } from "../5421/711842";
import { qQ, Op } from "../figma_app/405038";
import { A as _$$A } from "../897/590880";
let a = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M11.5 6a.5.5 0 0 1 .5.5V11a1 1 0 0 0 1 1h4.5a.5.5 0 0 1 0 1H13a2 2 0 0 1-2-2V6.5a.5.5 0 0 1 .5-.5",
      clipRule: "evenodd"
    })
  });
});
var d = s;
function S({
  formatter: e,
  value: t,
  disabled: n
}) {
  return jsx(c$, {
    value: t,
    disabled: n,
    children: jsxs("div", {
      className: "x78zum5 x6s0dn4 x167g77z",
      children: [jsx("div", {
        className: "x78zum5 x6s0dn4 x1kky2od xlup9mm",
        children: jsx(_$$J, {
          mode: "dark",
          children: "MIXED" === t ? jsx("div", {
            className: "x1kky2od xlup9mm"
          }) : jsx(A, {
            action: t
          })
        })
      }), jsx("div", {
        children: "MIXED" === t ? tx("fullscreen.mixed") : e.format(t)
      })]
    })
  });
}
function A({
  action: e
}) {
  return jsx("div", {
    className: "prototype_action_dropdown--prototypeActionIcon--qChhY",
    children: av(e)
  });
}
function w(e) {
  let t = `prototype-action-select-${e.recordingKey}`;
  let n = e.dropdownShown && e.dropdownShown.type === t;
  let i = E7(e.action);
  let a = av(i);
  let l = d4(ZM);
  let s = new js(!0, l);
  let d = new Z6(!0, l);
  let c = !d4(e => e.mirror.selectionProperties.isValidPrototypingSourceSelected ?? !0);
  return jsx("div", {
    id: t,
    children: jsxs(bL, {
      onChange: e.onChange,
      value: e.action,
      recordingKey: Pt(e, "select"),
      children: [jsx(l9, {
        "data-testid": "action-select",
        disabled: c,
        iconLead: jsx("div", {
          className: "x180r7m8",
          children: a
        }),
        label: jsx(_$$h, {
          children: tx("proto.action")
        }),
        width: "fill",
        children: gl(e.action) ? _$$t("fullscreen.mixed") : null
      }), jsx(mc, {
        children: function (e, t) {
          let n = cJ();
          let i = jsx(S, {
            formatter: t,
            value: "NONE",
            disabled: !1
          }, "NONE");
          let r = jsx(S, {
            formatter: t,
            value: "NAVIGATE_TO",
            disabled: !1
          }, "NAVIGATE_TO");
          let a = jsx(S, {
            formatter: t,
            value: "SWAP_STATE_TO",
            disabled: !glU.isSelectionContainedInStateOrStateInstance()
          }, "SWAP_STATE_TO");
          let l = jsx(S, {
            formatter: t,
            value: "GO_BACK",
            disabled: !1
          }, "GO_BACK");
          let s = jsx(S, {
            formatter: t,
            value: "SCROLL_TO",
            disabled: !1
          }, "SCROLL_TO");
          let d = jsx(S, {
            formatter: t,
            value: "OPEN_URL",
            disabled: !1
          }, "OPEN_URL");
          let c = jsx(S, {
            formatter: t,
            value: "OPEN_OVERLAY",
            disabled: !1
          }, "OPEN_OVERLAY");
          let p = jsx(S, {
            formatter: t,
            value: "SWAP_WITH",
            disabled: !1
          }, "SWAP_WITH");
          let u = jsx(S, {
            formatter: t,
            value: "CLOSE_OVERLAY",
            disabled: !1
          }, "CLOSE_OVERLAY");
          let h = jsx(S, {
            formatter: t,
            value: "SET_VARIABLE",
            disabled: !1
          }, "SET_VARIABLE");
          let m = getFeatureFlags().prototype_set_mode_action && jsx(S, {
            formatter: t,
            value: "SET_VARIABLE_MODE",
            disabled: !1
          }, "SET_VARIABLE_MODE");
          let x = !e.isNestedInConditional && jsx(S, {
            formatter: t,
            value: "CONDITIONAL",
            disabled: !1
          }, "CONDITIONAL");
          let g = jsx(wv, {}, "first-divider");
          let y = jsx(wv, {}, "second-divider");
          let _ = jsx(wv, {}, "third-divider");
          let {
            getConfig
          } = I7("exp_prototyping_reorder_actions");
          let j = !!getConfig().getValue("new_ordering", !1);
          let N = n ? [a, l, s, g, h, x] : j ? [i, g, r, a, l, s, d, y, h, m, x, _, c, p, u] : [i, g, r, a, l, s, d, y, c, p, u, _, h, m, x];
          if (e.showVideoActions && !n) {
            let e = [jsx(wv, {}, "fourth-divider"), jsx(S, {
              formatter: t,
              value: "UPDATE_MEDIA_PLAY_PAUSE_OPTIONS",
              disabled: !1
            }, "UPDATE_MEDIA_PLAY_PAUSE_OPTIONS"), jsx(S, {
              formatter: t,
              value: "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS",
              disabled: !1
            }, "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS"), jsx(S, {
              formatter: t,
              value: "UPDATE_MEDIA_SKIP_TO",
              disabled: !1
            }, "UPDATE_MEDIA_SKIP_TO"), jsx(S, {
              formatter: t,
              value: "UPDATE_MEDIA_SKIP_BY_OPTIONS",
              disabled: !1
            }, "UPDATE_MEDIA_SKIP_BY_OPTIONS")];
            N = N.concat(e);
          }
          gl(e.action) && (N = [jsx(S, {
            formatter: t,
            value: "MIXED",
            disabled: !0
          }, "MIXED"), jsx(wv, {}, "mixed-divider")].concat(N));
          return N.filter(Boolean);
        }(e, n ? s : d)
      })]
    })
  });
}
let z = "prototype_action_verbose_title--actionNameInsertion--aF4kI";
let W = "prototype_action_verbose_title--actionName--qWJL3";
let Z = "prototype_action_verbose_title--actionNameUI3--JAYsG";
let G = () => {
  let e = d4(e => e.mirror.sceneGraph);
  return useMemo(() => new cP(e), [e]);
};
function Y({
  action: e,
  isNestedInConditional: t,
  isNarrowPanel: n,
  onClick: r
}) {
  let a = YT() === Oz.TWO_COL;
  let l = useContext(_$$c);
  let s = a && l === _$$P.LEFT;
  let c = t || n;
  let p = _$$u(hS(e.targetVariable) && e.targetVariable && "id" in e.targetVariable ? e.targetVariable?.id : void 0);
  let u = hS(e.targetVariable) && e.targetVariable && "nodeFieldAlias" in e.targetVariable ? aA(e.targetVariable.nodeFieldAlias.stablePathToNode, e.targetVariable.nodeFieldAlias.indexOrKey) : void 0;
  let h = p?.name ?? u?.name;
  let g = G();
  let y = new Z6(!0);
  let f = _X(e);
  let _ = E7(f);
  let b = av(_);
  let I = e => {
    if (!e.connectionType || gl(e.connectionType)) return null;
    let t = d()({
      [W]: !0,
      [Z]: a
    });
    let n = d()({
      "prototype_action_verbose_title--actionDestination--JZ-gU": !0,
      "prototype_action_verbose_title--actionDestinationUI3--ZGxbq": a
    });
    switch (e.connectionType) {
      case "NONE":
      case "SET_VARIABLE_MODE":
      case "OBJECT_ANIMATION":
        return null;
      case "INTERNAL_NODE":
      case "BACK":
      case "CLOSE":
      case "UPDATE_MEDIA_RUNTIME":
        {
          let i = e.transitionNodeID;
          if (gl(i)) return jsx("div", {
            className: t,
            children: _$$t("proto.variant_actions.mixed")
          });
          if (void 0 === i || aI(i, Hr)) return null;
          let r = dI(i);
          let a = g.format(r);
          return jsx("div", {
            className: n,
            children: a
          });
        }
      case "URL":
        {
          let i = e.connectionURL;
          if (!i) return null;
          if (gl(i)) return jsx("div", {
            className: t,
            children: _$$t("proto.variant_actions.mixed")
          });
          return jsx("div", {
            className: n,
            children: i
          });
        }
      case "SET_VARIABLE":
        if (!e.targetVariableData || gl(e.targetVariableData)) return null;
        return jsx("div", {
          className: "prototype_action_verbose_title--setVariablePreviewContainer--6omxy",
          children: jsx(y3, {
            targetVariableData: e.targetVariableData,
            onClick: lQ,
            showVariableThumbnails: !1,
            isNarrowPanel: c,
            isInConditional: !0
          })
        });
      case "CONDITIONAL":
        {
          if (gl(e) || gl(e.conditionalActions) || !e.conditionalActions) return null;
          let t = e.conditionalActions.length > 0 ? e.conditionalActions[0].condition : void 0;
          return jsx(y3, {
            targetVariableData: t,
            onClick: lQ,
            isInConditional: !0,
            showVariableThumbnails: !1
          });
        }
      default:
        xb(e.connectionType);
    }
  };
  let C = d()({
    [_$$s.block.bgTransparent.$]: !0,
    "prototype_action_verbose_title--buttonResetTextAlign--gy69p": !0,
    [Li]: c && !a,
    [O8]: !c && !a,
    [kE]: a
  });
  let N = d()({
    "prototype_action_verbose_title--iconContainer--jqarD": !0,
    "prototype_action_verbose_title--iconContainerUI3--yBP0-": a
  });
  return jsx(_$$E, {
    className: C,
    onClick: r,
    children: jsxs(Y1, {
      horizontalAlignItems: "space-between",
      width: "fill-parent",
      children: [jsx("div", {
        className: N,
        children: b
      }), (e => {
        let t = _ ? y.format(_) : "Undefined";
        let n = d()({
          [W]: !0,
          [Z]: a
        });
        if ((gl(e.connectionType) || gl(f)) && (t = _$$t("fullscreen.mixed")), !e.connectionType || gl(e.connectionType) || "NONE" === e.connectionType || "BACK" === e.connectionType || "CLOSE" === e.connectionType) return jsx(Fragment, {
          children: jsx("div", {
            className: n,
            children: t
          })
        });
        var i = I(e);
        switch (e.connectionType) {
          case "INTERNAL_NODE":
            if ("SWAP_STATE" === e.navigationType) return jsxs(Fragment, {
              children: [jsx("div", {
                className: n,
                children: _$$t("proto.action_change_to")
              }), i]
            });
            if (i) {
              if ("OVERLAY" === e.navigationType) return jsx(Fragment, {
                children: jsx("div", {
                  className: z,
                  children: tx("proto.action_overlay_title", {
                    overlayFrameName: jsx("span", {
                      children: i
                    })
                  })
                })
              });
              if ("SWAP" === e.navigationType) return jsxs(Fragment, {
                children: [jsx("div", {
                  className: n,
                  children: _$$t("proto.action_swap_overlay_title")
                }), i]
              });
            }
            return jsxs(Fragment, {
              children: [jsx("div", {
                className: n,
                children: t
              }), i]
            });
          case "UPDATE_MEDIA_RUNTIME":
            return jsxs(Fragment, {
              children: [jsx("div", {
                className: n,
                children: t
              }), i]
            });
          case "URL":
            return jsxs(Fragment, {
              children: [jsx("div", {
                className: n,
                children: i ? _$$t("proto.action_url_title") : _$$t("proto.action_open_link")
              }), i]
            });
          case "SET_VARIABLE":
            {
              let r = e.targetVariableData && hS(e.targetVariableData) && e.targetVariableData.resolvedType === rXF.COLOR;
              let l = d()({
                "prototype_action_verbose_title--actionNameInsertionColor--isir- prototype_action_verbose_title--actionNameInsertion--aF4kI": !0,
                "prototype_action_verbose_title--actionNameInsertionColorUI3--Apj0i": a
              });
              if (h && i) return jsx(Fragment, {
                children: jsx("div", {
                  className: r ? l : z,
                  children: tx("proto.action_set_variable_title", {
                    variableName: jsx("span", {
                      className: "prototype_action_verbose_title--variableNameContainer--XeJX2",
                      children: jsx(wG, {
                        text: h,
                        isDeleted: !!p && eF(p),
                        disableHover: s
                      })
                    }),
                    variableValue: jsx("span", {
                      className: "prototype_action_verbose_title--variableDestinationContainer--RXbKo prototype_action_verbose_title--variableNameContainer--XeJX2",
                      children: i
                    })
                  })
                })
              });
              return jsx(Fragment, {
                children: jsx("div", {
                  className: n,
                  children: t
                })
              });
            }
          case "SET_VARIABLE_MODE":
            return jsx(Fragment, {
              children: jsx("div", {
                className: n,
                children: _$$t("proto.action_set_variable_mode")
              })
            });
          case "CONDITIONAL":
            return jsxs(Fragment, {
              children: [jsx("div", {
                className: n,
                children: a ? _$$t("proto.if") : _$$t("proto.action_conditional_title")
              }), i]
            });
          case "OBJECT_ANIMATION":
            return jsx(Fragment, {});
          default:
            xb(e.connectionType);
        }
      })(e)]
    })
  });
}
let et = Symbol("ACTION_ROW");
export function $$en0({
  updateMultipleDestinationNodes: e,
  updateSelectionProperties: t,
  onDeleteAction: n,
  stateManagementVersion: s,
  selectedInteractions: f,
  autoOpenVariablePicker: _,
  autoOpenExpressionBuilder: b,
  setAutoOpenExpressionBuilder: v,
  ...I
}) {
  let C = wA();
  let {
    shouldShowAdvancedPrototypingPaywall,
    showAdvancedPrototypingVariablesModal,
    showAdvancedPrototypingConditionalActionsModal
  } = zt();
  let T = Um();
  let S = hP();
  let {
    firstVariableSetMode,
    firstVariableSetID
  } = _$$b();
  let P = I.action;
  let O = I.isNestedInConditional && qQ(I.action);
  let L = !!P.connectionType && "CONDITIONAL" === P.connectionType;
  let D = YT();
  let R = D === Oz.SINGLE_COL;
  let M = D === Oz.TWO_COL;
  let V = useContext(_$$c);
  let B = M && V === _$$P.RIGHT;
  let F = M && V === _$$P.LEFT;
  var K = I.selectedActionIndex.equals(I.actionIndexPath);
  let z = 1 === I.selectedActionIndex.path.length && I.isNestedInConditional && I.actionIndexPath[0] === I.selectedActionIndex.path[0];
  var W = void 0 === I.expandedRows || void 0 !== I.expandedRows.find(e => e.equals(I.actionIndexPath));
  W = !!R || !F || L;
  let [Z, G] = useState(!1);
  useEffect(() => {
    if (L) {
      let e = setTimeout(() => {
        G(!0);
      }, 0);
      return () => clearTimeout(e);
    }
    G(!0);
  }, [L]);
  let en = L && !W;
  let eo = L && W;
  let ei = useRef(null);
  let [er, ea] = fp(hV);
  let {
    position,
    dragItem
  } = h4(() => ({
    type: et,
    element: ei,
    item: {
      action: I.action,
      actionIndexPath: new Op(I.actionIndexPath)
    },
    dropPositionThreshold: eo ? .2 : en ? 1 / 3 : .5,
    getDeepestTargetOnly: !0,
    canDrag: !!F || !W,
    onDrop(e) {
      I.onDrop(e);
      ea(!0);
    }
  }));
  let ed = useMemo(() => {
    let e = ei.current;
    if (!e || !position || B) return;
    if (dragItem && "CONDITIONAL" === dragItem.connectionType && I.isNestedInConditional || qQ(dragItem)) {
      ea(!1);
      return;
    }
    let t = O ? Nz.BEFORE : position;
    var n = void 0;
    let o = e.offsetParent?.firstElementChild?.scrollTop ?? 0;
    t === Nz.BEFORE ? n = e.offsetTop - o : t === Nz.AFTER && (n = e.offsetTop + e.offsetHeight - o);
    ea(!0);
    return n;
  }, [position, B, dragItem, I.isNestedInConditional, O, ea]);
  let ec = position && L && !W && position === Nz.INSIDE && "CONDITIONAL" !== dragItem.connectionType;
  let ep = rf(I.recordingKey, "click", e => {
    I.onSelect(I.actionIndexPath, !0);
  });
  let eu = rf(I.recordingKey, "mousedown", e => {
    qQ(I.action) || I.onSelect(I.actionIndexPath, !0);
  });
  let eh = e => {
    var n = !0;
    var o = !1;
    switch (e) {
      case "NONE":
        t({
          connectionType: "NONE"
        });
        break;
      case "NAVIGATE_TO":
        t({
          connectionType: "INTERNAL_NODE",
          navigationType: "NAVIGATE"
        });
        break;
      case "OPEN_OVERLAY":
        t({
          connectionType: "INTERNAL_NODE",
          navigationType: "OVERLAY"
        });
        break;
      case "SCROLL_TO":
        t({
          connectionType: "INTERNAL_NODE",
          navigationType: "SCROLL_TO"
        });
        break;
      case "SWAP_WITH":
        t({
          connectionType: "INTERNAL_NODE",
          navigationType: "SWAP"
        });
        break;
      case "SWAP_STATE_TO":
        t({
          connectionType: "INTERNAL_NODE",
          navigationType: "SWAP_STATE"
        });
        break;
      case "GO_BACK":
        t({
          connectionType: "BACK"
        });
        break;
      case "CLOSE_OVERLAY":
        t({
          connectionType: "CLOSE"
        });
        break;
      case "OPEN_URL":
        t({
          connectionType: "URL"
        });
        break;
      case "SET_VARIABLE":
        shouldShowAdvancedPrototypingPaywall ? (n = !1, showAdvancedPrototypingVariablesModal()) : (t({
          connectionType: "SET_VARIABLE"
        }), _.current = !0);
        break;
      case "SET_VARIABLE_MODE":
        shouldShowAdvancedPrototypingPaywall ? (n = !1, showAdvancedPrototypingVariablesModal()) : t({
          connectionType: "SET_VARIABLE_MODE",
          targetVariableSetID: firstVariableSetID,
          targetVariableModeID: firstVariableSetMode
        });
        break;
      case "UPDATE_MEDIA_PLAY":
        t({
          connectionType: "UPDATE_MEDIA_RUNTIME",
          mediaAction: "PLAY"
        });
        break;
      case "UPDATE_MEDIA_PAUSE":
        t({
          connectionType: "UPDATE_MEDIA_RUNTIME",
          mediaAction: "PAUSE"
        });
        break;
      case "UPDATE_MEDIA_PLAY_PAUSE_OPTIONS":
      case "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE":
        t({
          connectionType: "UPDATE_MEDIA_RUNTIME",
          mediaAction: "TOGGLE_PLAY_PAUSE"
        });
        break;
      case "UPDATE_MEDIA_MUTE":
        t({
          connectionType: "UPDATE_MEDIA_RUNTIME",
          mediaAction: "MUTE"
        });
        break;
      case "UPDATE_MEDIA_UNMUTE":
        t({
          connectionType: "UPDATE_MEDIA_RUNTIME",
          mediaAction: "UNMUTE"
        });
        break;
      case "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS":
      case "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE":
        t({
          connectionType: "UPDATE_MEDIA_RUNTIME",
          mediaAction: "TOGGLE_MUTE_UNMUTE"
        });
        break;
      case "UPDATE_MEDIA_SKIP_BY_OPTIONS":
      case "UPDATE_MEDIA_SKIP_FORWARD":
        t({
          connectionType: "UPDATE_MEDIA_RUNTIME",
          mediaAction: "SKIP_FORWARD"
        });
        break;
      case "UPDATE_MEDIA_SKIP_BACKWARD":
        t({
          connectionType: "UPDATE_MEDIA_RUNTIME",
          mediaAction: "SKIP_BACKWARD"
        });
        break;
      case "UPDATE_MEDIA_SKIP_TO":
        t({
          connectionType: "UPDATE_MEDIA_RUNTIME",
          mediaAction: "SKIP_TO"
        });
        break;
      case "CONDITIONAL":
        o = !0;
        shouldShowAdvancedPrototypingPaywall ? (n = !1, showAdvancedPrototypingConditionalActionsModal()) : (t({
          connectionType: "CONDITIONAL"
        }), v && v(!0));
    }
    if (M && I.onExpand(I.actionIndexPath, o), n) {
      let t = f.filter(e => !!e.sourceNodeID && !!e.id).map(e => _$$d({
        nodeID: e.sourceNodeID,
        interactionID: e.id
      }));
      C(_P({
        name: "Prototype action changed",
        params: {
          action: e,
          source: "panel",
          connectorIds: JSON.stringify(t)
        }
      }));
    }
  };
  let em = I.isNestedInConditional ? It : ft;
  let ex = d()({
    [wu]: !F,
    [zX]: F && er
  });
  let eg = jsx(a, {
    className: _2
  });
  if (O && I.onAddAction) return jsxs("div", {
    className: F ? LW : void 0,
    children: [ed && jsx("hr", {
      className: em,
      style: {
        transform: `translateY(${ed}px)`
      }
    }), F && I.isNestedInConditional && eg, jsx("div", {
      className: ex,
      ref: ei,
      children: jsx(_$$t2, {
        addButtonPressed: I.onAddAction,
        recordingKey: Pt(I.recordingKey, "addAction"),
        isNestedInConditional: !0
      })
    })]
  });
  let ey = _X(P);
  let ef = "NONE" !== ey;
  let e_ = (W || !ef) && !F;
  let eb = I.numActions > 1;
  let ev = d()({
    [$l]: !0,
    [KY]: F && !I.isNestedInConditional,
    [Iw]: F && !I.isNestedInConditional && er,
    [DM]: F && I.isNestedInConditional,
    [vs]: F && I.isNestedInConditional && er,
    [M9]: F && I.isNestedInConditional && z && er,
    [I_]: F && L && !K && er,
    [PE]: K && F && !I.isNestedInConditional,
    [Ze]: ec
  });
  let eI = d()({
    [rn]: !0,
    [Gu]: F,
    [Yo]: I.isNestedInConditional && !B
  });
  let eC = jsx(Y, {
    action: P,
    isNestedInConditional: I.isNestedInConditional,
    isNarrowPanel: I.isNarrowPanel && eb,
    onClick: ep
  });
  let eE = jsx(w, {
    dispatch: C,
    dropdownShown: T,
    onChange: eh,
    action: ey,
    recordingKey: Pt(I.recordingKey, "actionDropdown"),
    showVideoActions: S,
    isNestedInConditional: I.isNestedInConditional
  });
  let ej = e_ ? eE : eC;
  let eN = jsx(_$$S.div, {
    className: eI,
    children: R || B ? jsx(_$$A, {
      label: _$$t("proto.action"),
      input: ej
    }) : ej
  });
  let eT = d()({
    [Oe]: !0,
    [h2]: K,
    [Ob]: L
  });
  return jsxs(_$$S.div, {
    className: ev,
    ref: ei,
    role: "button",
    tabIndex: 0,
    children: [void 0 !== ed && jsx("hr", {
      className: em,
      style: {
        transform: `translateY(${ed}px)`
      }
    }), F ? jsxs(_$$S.div, {
      className: eT,
      role: "button",
      tabIndex: 0,
      onMouseDown: eu,
      children: [I.isNestedInConditional && eg, eN]
    }) : eN, W && Z && jsx(_$$x, {
      action: P,
      actionIndexPath: I.actionIndexPath,
      autoOpenExpressionBuilder: b,
      autoOpenVariablePicker: _,
      expandedRows: I.expandedRows,
      handleMouseDownUI3: eu,
      interactionType: I.interactionType,
      isNarrowPanel: I.isNarrowPanel,
      isNestedInConditional: I.isNestedInConditional,
      onActionChange: eh,
      onDrop: I.onDrop,
      onExpand: I.onExpand,
      onNewActionAdded: I.onNewActionAdded,
      onSelect: I.onSelect,
      recordingKey: I.recordingKey,
      selectedActionIndex: I.selectedActionIndex,
      selectedInteractions: f,
      setAutoOpenExpressionBuilder: v,
      stateManagementVersion: s,
      updateMultipleDestinationNodes: e,
      updateSelectionProperties: t
    })]
  });
}
export const P = $$en0;