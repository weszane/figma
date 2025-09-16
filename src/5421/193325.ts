import { ex as _$$ex } from "../905/524523";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useState, useRef, useCallback, PureComponent, useId, useMemo, Fragment as _$$Fragment, memo, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateTsApi, PrototypingTsApi, VariableResolvedDataType, ExportScope, StateHierarchy, VariablesBindings } from "../figma_app/763686";
import { sessionLocalIDToString, defaultSessionLocalIDString, parseSessionLocalID, defaultSessionLocalID } from "../905/871411";
import s from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { d as _$$d } from "../figma_app/429226";
import { generateRecordingKey } from "../figma_app/878298";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { Cr, cP, js, Z6, Od } from "../figma_app/451499";
import { isDesignFileType, isSitesFileType } from "../figma_app/976749";
import { fullscreenValue } from "../figma_app/455680";
import { valueOrFallback, normalizeValue, isValidValue, isInvalidValue, MIXED_MARKER } from "../905/216495";
import { Um } from "../905/848862";
import { _P, Zh } from "../figma_app/2590";
import { J as _$$J } from "../905/980942";
import { uQ } from "../figma_app/151869";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { permissionScopeHandler } from "../905/189185";
import { Point } from "../905/736624";
import { TI } from "../905/713722";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { cn } from "../905/959568";
import { Pd, gq, qd, dE } from "../figma_app/178475";
import { J as _$$J3 } from "../905/225412";
import { h as _$$h } from "../905/65944";
import { AN } from "../905/203369";
import { A as _$$A, F as _$$F } from "../897/590880";
import { subscribeObservable } from "../figma_app/84367";
import { Zk, fI, nV } from "../figma_app/626177";
import { l6, c$, sK } from "../905/794875";
import { TN, Cm } from "../figma_app/334459";
import { DxS } from "../figma_app/27776";
import { X7 } from "../897/50897";
import { ButtonPrimitive } from "../905/632989";
import { Y1 } from "../905/143116";
import { p8 } from "../figma_app/722362";
import { KN } from "../figma_app/741785";
import { Op } from "../figma_app/405038";
import { YT, Oz, zt, LH, kM, uU, hU, oc, GB, Fp } from "../figma_app/84580";
import { Ad } from "../figma_app/811257";
import { SvgComponent } from "../905/714743";
import { AutoLayout } from "../905/470281";
import { P as _$$P } from "../5421/146016";
import { t as _$$t2 } from "../5421/711842";
import { A as _$$A2 } from "../svg/609746";
import { A as _$$A3 } from "../6041/969560";
import { $$default } from "../svg/764361";
import { Ql, X4, H_ } from "../figma_app/387100";
import eg from "../vendor/223926";
import { isInteractionPathCheck } from "../figma_app/897289";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { updateHoveredNode } from "../figma_app/741237";
import { useCurrentFileKey, useOpenFileLibraryKey } from "../figma_app/516028";
import { Sh, dK } from "../figma_app/889655";
import { D as _$$D } from "../figma_app/335489";
import { lS } from "../figma_app/218448";
import { cP as _$$cP } from "../figma_app/264776";
import { useIsFullscreenSitesView } from "../905/561485";
import { c as _$$c, P as _$$P2 } from "../905/200950";
import { getFeatureFlags } from "../905/601108";
import { h as _$$h2 } from "../905/207101";
import { RecordableDiv } from "../905/511649";
import { C as _$$C, B as _$$B2 } from "../905/330741";
import { tZ, u as _$$u, BQ } from "../figma_app/852050";
import { ZM } from "../figma_app/505098";
import { f as _$$f } from "../37/573389";
import { m9, tz, aA, Xx } from "../figma_app/632975";
import { eF as _$$eF } from "../figma_app/394327";
import { Z as _$$Z } from "../905/230174";
import { YK, $3 } from "../figma_app/149989";
import { wG, J2 } from "../905/331989";
import { gJ } from "../905/923433";
import { Ao } from "../905/748636";
import { I as _$$I } from "../5421/909298";
import { bL, Y9, JU, UC } from "../figma_app/57171";
import { iv, Uj, mc, UC as _$$UC } from "../905/872285";
import { B as _$$B3 } from "../905/950875";
import { k as _$$k2 } from "../905/582200";
import { In } from "../905/672640";
import { KindEnum } from "../905/129884";
import { zZ } from "../figma_app/299859";
import { N as _$$N } from "../905/438674";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { sT, RU } from "../figma_app/740163";
import { oM, QK, Ti, PB, x as _$$x, iR } from "../897/934363";
import { Y as _$$Y2 } from "../5421/483739";
import { Ay } from "../figma_app/976110";
var d = s;
function R(e) {
  useEffect(() => {
    let t = AppStateTsApi?.prototypingEditorState().colorPickerEyedropperVarData;
    if (t) return subscribeObservable(t, {
      onChangeImmediate() {
        let n = t.getCopy();
        n && e(n);
      }
    });
  }, [e]);
}
let U = TI;
function F({
  children: e
}) {
  return jsx(TN, {
    children: e
  });
}
function K({
  interactionType: e,
  recordingKey: t,
  actionIndexPath: n,
  nodeId: s
}) {
  let [d, p] = useState(!1);
  let [h, x] = useState(new Point());
  let g = useDispatch();
  let y = "{ " + n.join(", ") + " }";
  let {
    destinationOverlayBackgroundColor,
    destinationOverlayBackgroundType,
    destinationOverlayPositionType,
    destinationOverlayBackgroundInteraction
  } = selectWithShallowEqual(e => ({
    destinationOverlayBackgroundColor: e.mirror.selectionProperties.actionIndexPathToOverlaySettings?.[y]?.destinationOverlayBackgroundColor,
    destinationOverlayBackgroundType: e.mirror.selectionProperties.actionIndexPathToOverlaySettings?.[y]?.destinationOverlayBackgroundType,
    destinationOverlayPositionType: e.mirror.selectionProperties.actionIndexPathToOverlaySettings?.[y]?.destinationOverlayPositionType,
    destinationOverlayBackgroundInteraction: e.mirror.selectionProperties.actionIndexPathToOverlaySettings?.[y]?.destinationOverlayBackgroundInteraction
  }));
  let D = useRef(null);
  let V = useCallback(() => {
    p(!1);
  }, [p]);
  let B = useCallback(() => {
    if (d) V();else {
      p(!0);
      let e = D.current;
      x(cn(e));
    }
  }, [d, V]);
  let H = useCallback(e => {
    let t = e ? "SOLID_COLOR" : "NONE";
    permissionScopeHandler.user("overlay-background-type-edit-scope", () => {
      PrototypingTsApi.setOverlayBackgroundType(sessionLocalIDToString(s), t);
    });
    g(_P({
      name: "Overlay background visible changed",
      params: {
        backgroundType: t
      }
    }));
  }, [g, s]);
  let K = useCallback(e => {
    let t = e ? "CLOSE_ON_CLICK_OUTSIDE" : "NONE";
    permissionScopeHandler.user("overlay-background-interaction-edit-scope", () => {
      PrototypingTsApi.setOverlayBackgroundInteraction(sessionLocalIDToString(s), t);
    });
    g(_P({
      name: "Overlay background interaction changed",
      params: {
        backgroundInteraction: t
      }
    }));
  }, [g, s]);
  let $ = useCallback(() => valueOrFallback(destinationOverlayBackgroundColor, {
    r: 0,
    g: 0,
    b: 0,
    a: .25
  }), [destinationOverlayBackgroundColor]);
  let z = useCallback((e, t) => {
    t !== yesNoTrackingEnum.NO && permissionScopeHandler.user("overlay-background-color-edit-scope", () => {
      PrototypingTsApi.setOverlayBackgroundColor(sessionLocalIDToString(s), e);
    });
  }, [s]);
  R(e => {
    z(e.value, yesNoTrackingEnum.YES);
  });
  let W = useCallback((e, t) => {
    z(e, yesNoTrackingEnum.YES);
  }, [z]);
  let G = useCallback((e, t) => {
    let n = $();
    z({
      r: n.r,
      g: n.g,
      b: n.b,
      a: e
    }, t);
  }, [$, z]);
  let Y = useCallback(e => {
    permissionScopeHandler.user("overlay-position-type-edit-scope", () => {
      PrototypingTsApi.setOverlayPositionType(sessionLocalIDToString(s), e);
    });
    g(_P({
      name: "Overlay position changed",
      params: {
        position: e
      }
    }));
  }, [g, s]);
  let q = $();
  let X = $().a;
  let J = normalizeValue(destinationOverlayPositionType);
  let Q = "CLOSE_ON_CLICK_OUTSIDE" === normalizeValue(destinationOverlayBackgroundInteraction);
  let ee = "SOLID_COLOR" === normalizeValue(destinationOverlayBackgroundType);
  let et = jsxs("div", {
    className: "overlay_panel--colorValueContainer--gJtb9 paint_panels--colorValueContainer--DGeSP raw_components--borderFocusWithin--BaipZ paint_panels--_baseColorValueContainer--t-UIV raw_components--base--T7G0z raw_components--singleRowHeight--dKM4t",
    children: [jsx(_$$J3, {
      onClick: ee ? B : () => {},
      color: q,
      opacity: X,
      recordingKey: generateRecordingKey(t, "chit"),
      className: "overlay_panel--chit--Zn66r paint_panels--chit--twQEy"
    }), jsx(AN, {
      className: "overlay_panel--colorInputUI3--ozOrK paint_panels--colorInput--nSz13",
      noLeftBorder: !0,
      formatter: U,
      property: q,
      disabled: !ee,
      onChange: W,
      recordingKey: generateRecordingKey(t, "colorInput"),
      noBorderOnFocus: !0
    }), jsx(Pd, {
      className: "overlay_panel--opacity--vrrjV paint_panels--opacityInputContainer--oqlsk",
      value: X,
      onValueChange: G,
      dispatch: g,
      disabled: !ee,
      noBorderOnFocus: !0,
      recordingKey: generateRecordingKey(t, "opacity")
    })]
  });
  return jsxs(Zk, {
    className: "overlay_panel--overlayPanelUI3--GLqgD",
    children: [jsx(Z, {
      overlayPositionType: J,
      onOverlayPositionTypeChange: Y,
      recordingKey: t
    }), !("ON_HOVER" === e || "ON_PRESS" === e) && jsx(F, {
      children: jsx(Checkbox, {
        label: jsx(Label, {
          children: renderI18nText("proto.close_when_clicking_outside")
        }),
        recordingKey: generateRecordingKey(t, "closeOnClickOutside"),
        onChange: K,
        checked: Q
      })
    }), jsx(F, {
      children: jsx(Checkbox, {
        label: jsx(Label, {
          children: renderI18nText("proto.overlay_panel.background")
        }),
        recordingKey: generateRecordingKey(t, "addBackgroundBehindOverlay"),
        onChange: H,
        checked: ee
      })
    }), ee && jsx(_$$A, {
      ref: D,
      label: getI18nString("proto.overlay_panel.background"),
      input: et
    }), d && jsx(_$$h, {
      disabledVariableIds: new Set(),
      initialPosition: h,
      color: q,
      boundVariable: null,
      onChange: z,
      onClose: V,
      recordingKey: generateRecordingKey(t, "colorPicker")
    })]
  });
}
let $ = l6;
let z = c$;
class W extends PureComponent {
  constructor() {
    super(...arguments);
    this.titleFormatter = new Cr();
    this.renderOverlayPositionOption = (e, t) => jsx(z, {
      value: e,
      recordingKey: generateRecordingKey(this.props, e)
    }, t);
  }
  render() {
    let e = ["CENTER", "TOP_LEFT", "TOP_CENTER", "TOP_RIGHT", "BOTTOM_LEFT", "BOTTOM_CENTER", "BOTTOM_RIGHT"].map(this.renderOverlayPositionOption);
    return jsxs($, {
      ariaLabelledBy: this.props.ariaLabelledBy,
      chevronClassName: "overlay_panel--chevron--7RTA-",
      className: this.props.className,
      dispatch: this.props.dispatch,
      dropdownShown: this.props.dropdownShown,
      dropdownWidth: DxS,
      formatter: this.titleFormatter,
      id: this.props.recordingKey ?? "overlay-position_select",
      inputClassName: "overlay_panel--input--tGHHB",
      onChange: this.props.onChange,
      property: this.props.property,
      recordingKey: generateRecordingKey(this.props, "select"),
      children: [e, jsx(sK, {}), this.renderOverlayPositionOption("MANUAL", 10)]
    });
  }
}
function Z({
  overlayPositionType: e,
  onOverlayPositionTypeChange: t,
  recordingKey: n
}) {
  let a = useDispatch();
  let l = Um();
  let s = useId();
  let d = jsx(W, {
    ariaLabelledBy: s,
    className: "overlay_panel--overlayPositionDropdown--ZxxSI",
    property: e,
    dispatch: a,
    dropdownShown: l,
    onChange: t,
    recordingKey: generateRecordingKey(n, "overlayPositionDropdown")
  });
  return jsx(_$$A, {
    label: getI18nString("proto.overlay_panel.position"),
    labelId: s,
    input: d
  });
}
W.displayName = "OverlayPositionDropdown";
let ea = "prototype_conditional_controls--conditionalRowUI3--rQlu6";
let el = "prototype_conditional_controls--conditionIcon--Npk57";
function ep({
  onDeleteAction: e,
  updateMultipleDestinationNodes: t,
  updateSelectionProperties: n,
  updateCondition: i,
  updateActions: r,
  onAddAction: l,
  autoOpenVariablePicker: s,
  isSelected: d,
  handleMouseDownUI3: c,
  ...p
}) {
  let h = p.conditionalActions;
  let x = h?.actions ? h?.actions : [];
  let g = h?.condition ? h?.condition : void 0;
  let y = YT() === Oz.TWO_COL;
  let _ = y ? ea : "prototype_conditional_controls--conditionalRowIf--25FqB prototype_conditional_controls--conditionalRow--u0PaS";
  let b = jsx(KN, {
    resolvedType: VariableResolvedDataType.BOOLEAN,
    targetVariableData: g,
    updateSelectionProperties: n,
    recordingKey: p.recordingKey,
    updateConditionInConditionalAction: i,
    showVariableThumbnails: !0,
    isNarrowPanel: !0
  });
  let v = jsx("div", {
    className: "prototype_conditional_controls--addButton--vlYLn",
    children: jsx(_$$t2, {
      addButtonPressed: l,
      recordingKey: generateRecordingKey(p.recordingKey, "addActionToIfButton"),
      renderButton: !0,
      isNestedInConditional: !0
    })
  });
  let I = jsxs(Fragment, {
    children: [y ? jsx("span", {
      className: "prototype_conditional_controls--conditionIconUI3--zcwx0",
      children: renderI18nText("proto.else")
    }) : jsx(SvgComponent, {
      className: el,
      svg: _$$A2
    }), !y && x.length > 0 && jsx("div", {
      className: "prototype_conditional_controls--addButtonForElse--ogBWu prototype_conditional_controls--addButton--vlYLn",
      children: jsx(_$$t2, {
        addButtonPressed: l,
        recordingKey: generateRecordingKey(p.recordingKey, "addActionToElseButton"),
        renderButton: !y,
        isNestedInConditional: !0
      })
    })]
  });
  let C = y ? jsx(ButtonPrimitive, {
    className: "prototype_conditional_controls--elseBlockRowUI3--VXjmO",
    onClick: c,
    children: I
  }) : jsx(fI, {
    className: y ? ea : "prototype_conditional_controls--conditionalRow--u0PaS",
    children: I
  });
  return jsxs(Fragment, {
    children: [p.ifStatement && jsx("div", {
      className: _,
      children: !y && jsxs(AutoLayout, {
        direction: "horizontal",
        spacing: 4,
        children: [jsx("span", {
          className: y ? "prototype_conditional_controls--conditionalRowConditionUI3--M2mOx" : "prototype_conditional_controls--conditionalRowCondition--kn-f7",
          children: jsxs(AutoLayout, {
            direction: "horizontal",
            spacing: 0,
            children: [jsx(SvgComponent, {
              className: el,
              svg: _$$A3
            }), jsx(AutoLayout, {
              direction: "horizontal",
              spacing: 0,
              children: isValidValue(g) && b
            }), jsx(SvgComponent, {
              className: "prototype_conditional_controls--icon--JV1i0",
              svg: $$default
            })]
          })
        }), !y && x.length > 0 && v]
      })
    }), !p.ifStatement && C, x && x.map((i, r) => jsx(_$$P, {
      action: i,
      actionIndexPath: [p.actionIndexPath[0], p.actionIndexPath[1], r],
      autoOpenVariablePicker: s,
      expandedRows: p.expandedRows,
      interactionType: p.interactionType,
      isNestedInConditional: !0,
      numActions: x.length,
      onAddAction: l,
      onDeleteAction: () => e(r),
      onDrop: p.onDrop,
      onExpand: p.onExpand,
      onSelect: p.onSelect,
      recordingKey: generateRecordingKey(p.recordingKey, "conditional-action-row", r),
      selectedActionIndex: p.selectedActionIndex,
      selectedInteractions: p.selectedInteractions,
      stateManagementVersion: p.stateManagementVersion,
      updateMultipleDestinationNodes: t.appendActionIndex(r),
      updateSelectionProperties: n.appendActionIndex(r)
    }, r)), 0 === x.length && jsx(_$$P, {
      action: p.emptyAction,
      actionIndexPath: [p.actionIndexPath[0], p.actionIndexPath[1], 0],
      autoOpenVariablePicker: s,
      expandedRows: p.expandedRows,
      interactionType: p.interactionType,
      isNestedInConditional: !0,
      numActions: x.length,
      onAddAction: l,
      onDeleteAction: () => e(0),
      onDrop: p.onDrop,
      onExpand: p.onExpand,
      onSelect: p.onSelect,
      recordingKey: generateRecordingKey(p.recordingKey, "conditional-action-row", 0),
      selectedActionIndex: p.selectedActionIndex,
      selectedInteractions: p.selectedInteractions,
      stateManagementVersion: p.stateManagementVersion,
      updateMultipleDestinationNodes: t.appendActionIndex(0),
      updateSelectionProperties: n.appendActionIndex(0)
    }, 0)]
  });
}
function eu(e, t, n) {
  return function (o) {
    var i = [...t];
    i.length > e ? i[e].condition = o : i.push({
      condition: 0 === e ? o : void 0,
      actions: []
    }, {
      condition: 1 === e ? o : void 0,
      actions: []
    });
    n({
      conditionalActions: i
    });
  };
}
function eh({
  onDrop: e,
  onSelect: t,
  onExpand: n,
  action: i,
  updateMultipleDestinationNodes: a,
  updateSelectionProperties: l,
  interactionType: s,
  recordingKey: d,
  stateManagementVersion: c,
  selectedInteractions: p,
  actionIndexPath: h,
  selectedActionIndex: x,
  expandedRows: g,
  autoOpenVariablePicker: y,
  onNewActionAdded: _,
  handleMouseDownUI3: v
}) {
  let I = useDispatch();
  let C = p8("currentPage");
  let E = YT() === Oz.TWO_COL;
  let j = E ? x.equals(h) : void 0;
  let {
    shouldShowAdvancedPrototypingPaywall,
    showAdvancedPrototypingConditionalActionsModal
  } = zt();
  let S = isValidValue(i.conditionalActions) && i.conditionalActions ? i.conditionalActions : [];
  let A = e => function (t) {
    var n = [...S];
    n.length > e ? n[e].actions = [...t] : n.push({
      actions: t
    });
    l({
      conditionalActions: n
    });
  };
  let w = e => function (t) {
    var n = [...S];
    var o = 0;
    if (n.length > e) {
      var i = n[e].actions;
      i ? i.push(t) : i = [t];
      o = i.length;
    } else {
      n.push({
        actions: 0 === e ? [t] : []
      }, {
        actions: 1 === e ? [t] : []
      });
      o = 1;
    }
    "SET_VARIABLE" === t.connectionType && (y.current = !0);
    l({
      conditionalActions: n
    });
    _ && _(new Op([h[0], e, o - 1]));
    I(_P({
      name: "Prototype add action",
      params: {
        action: t.connectionType ? t.connectionType : "NONE",
        source: "panel",
        page_id: C,
        actionInConditionalAction: !0
      }
    }));
  };
  let k = e => function (t) {
    if (shouldShowAdvancedPrototypingPaywall) showAdvancedPrototypingConditionalActionsModal();else {
      var n = [...S];
      let o = S[e];
      let i = [];
      if (o && o.actions) for (let e = 0; e < o.actions.length; e++) {
        let n = o.actions[e];
        e !== t ? i.push(n) : I(_P({
          name: "Prototype delete action",
          params: {
            action: n.connectionType ? n.connectionType : "NONE",
            source: "panel",
            page_id: C,
            actionInConditionalAction: !0
          }
        }));
      }
      n[e].actions = i;
      l({
        conditionalActions: n
      });
    }
  };
  let P = S.length > 0 ? S[0] : void 0;
  let O = S.length > 1 ? S[1] : void 0;
  return jsxs("div", {
    style: E ? {
      position: "relative"
    } : void 0,
    children: [isInvalidValue(i.conditionalActions) && jsx(Y1, {
      children: jsx(ButtonPrimitive, {
        className: "prototype_conditional_controls--mixedConditionalText--6O32b",
        onClick: () => {
          var e = [];
          e.push({}, {});
          l({
            conditionalActions: e
          });
        },
        children: getI18nString("fullscreen.properties_panel.click_to_replace_mixed_content")
      })
    }), isValidValue(i.conditionalActions) && jsxs(Fragment, {
      children: [jsx(ep, {
        actionIndexPath: [h[0], 0],
        autoOpenVariablePicker: y,
        conditionalActions: P,
        emptyAction: {
          ifStatement: !0,
          action: i
        },
        expandedRows: g,
        handleMouseDownUI3: v,
        ifStatement: !0,
        interactionType: s,
        isSelected: j,
        onAddAction: w(0),
        onDeleteAction: k(0),
        onDrop: e,
        onExpand: n,
        onSelect: t,
        recordingKey: generateRecordingKey(d, "conditional-block", 0),
        selectedActionIndex: x,
        selectedInteractions: p,
        stateManagementVersion: c,
        updateActions: A(0),
        updateCondition: eu(0, S, l),
        updateMultipleDestinationNodes: a.appendActionIndex(0),
        updateSelectionProperties: l.appendActionIndex(0)
      }, 0), jsx(ep, {
        actionIndexPath: [h[0], 1],
        autoOpenVariablePicker: y,
        conditionalActions: O,
        emptyAction: {
          ifStatement: !1,
          action: i
        },
        expandedRows: g,
        handleMouseDownUI3: v,
        ifStatement: !1,
        interactionType: s,
        isSelected: j,
        onAddAction: w(1),
        onDeleteAction: k(1),
        onDrop: e,
        onExpand: n,
        onSelect: t,
        recordingKey: generateRecordingKey(d, "conditional-block", 1),
        selectedActionIndex: x,
        selectedInteractions: p,
        stateManagementVersion: c,
        updateActions: A(1),
        updateCondition: eu(1, S, l),
        updateMultipleDestinationNodes: a.appendActionIndex(1),
        updateSelectionProperties: l.appendActionIndex(1)
      }, 1)]
    })]
  });
}
function em({
  updateSelectionProperties: e,
  conditionalActions: t,
  autoOpenExpressionBuilder: n,
  setAutoOpenExpressionBuilder: i,
  ...r
}) {
  let l = t.length > 0 ? t[0] : void 0;
  let s = l?.condition ? l?.condition : void 0;
  let c = d()({
    "prototype_conditional_controls--standaloneIfConditional--GLFDU": !0,
    "prototype_conditional_controls--placeholderText--esG0u": !s
  });
  return jsxs(Fragment, {
    children: [jsx(_$$A, {
      input: null,
      label: getI18nString("proto.condition")
    }), jsx(Ad, {
      appendedClassName: "prototype_conditional_controls--conditionalActionRightPadding--xpK6Z",
      label: null,
      input: isValidValue(s) ? jsx("div", {
        className: c,
        children: jsx(KN, {
          resolvedType: VariableResolvedDataType.BOOLEAN,
          targetVariableData: s,
          updateSelectionProperties: e.appendActionIndex(0),
          recordingKey: r.recordingKey,
          updateConditionInConditionalAction: eu(0, t, e),
          autoOpenExpressionBuilder: n,
          setAutoOpenExpressionBuilder: i,
          showVariableThumbnails: !0,
          isNarrowPanel: !0
        })
      }) : null
    })]
  });
}
var ey = eg;
class eb {
  constructor(e, t) {
    this.nodeFormatter = e;
    this.scene = t;
    this.format = e => {
      let t = this.nodeFormatter.format(e);
      if (this.scene && e !== defaultSessionLocalIDString && null != e) {
        let n = this.scene.get(e);
        if (n?.isResponsiveSet) return "/" === t ? getI18nString("sites.panel.home") : t;
      }
      return t;
    };
  }
}
let eS = c$;
let eA = l6;
function ew(e) {
  let t = useMemo(() => new cP(e.scene), [e.scene]);
  let [n, r] = useState([]);
  let [s, d] = useState([]);
  let c = useIsFullscreenSitesView();
  let p = e.nodeId === MIXED_MARKER ? MIXED_MARKER : sessionLocalIDToString(e.nodeId);
  let h = n;
  isValidValue(p) && p !== defaultSessionLocalIDString && -1 === h.indexOf(p) && (h = h.concat([p]));
  let m = `prototype-destination-select-${e.recordingKey}`;
  let g = "SCROLL_TO" !== e.action ? h.filter(e => t.hasNameForNode(e)).map((t, n) => jsx(eS, {
    value: t,
    recordingKey: generateRecordingKey(e, `viable-option-${n}`),
    disabled: !1
  }, `enabled-${t}`)) : ((n, i) => {
    let r = ey()(n.filter(e => t.hasNameForNode(e)), t => t === i && isValidValue(i) ? Ql(e.scene, t)?.guid : e.scene.get(t)?.parentGuid);
    let a = Object.keys(r);
    X4(a, t.format.bind(t));
    let {
      tlfId,
      index
    } = H_(e.scene, a);
    tlfId && index && (a.splice(index, 1), a = [tlfId, ...a]);
    return a.reduce((t, n, i) => (0 !== i && t.push(jsx(sK, {}, i)), t.push(jsx(eS, {
      value: n + " ",
      recordingKey: generateRecordingKey(e, `disabled-option-${n}`),
      disabled: !0
    }, `disabled-${n}`)), r[n].forEach((n, i) => {
      t.push(jsx(eS, {
        value: n,
        recordingKey: generateRecordingKey(e, `viable-option-${i}`),
        disabled: !1
      }, `enabled-${n + i}`));
    }), t), []);
  })(h, p);
  let y = s.filter(e => t.hasNameForNode(e)).map((t, n) => jsx(eS, {
    value: t,
    recordingKey: generateRecordingKey(e, `disabled-option-${n}`),
    disabled: !0
  }, `disabled-${t}`));
  let _ = e.isUI3 ? _$$Fragment : fI;
  return jsx(_, {
    children: jsxs(eA, {
      ariaLabelledBy: e.ariaLabelledBy,
      chevronClassName: "prototype_destination_dropdown--chevron--pmWtI",
      className: e.className,
      dataTestId: "destination-select",
      dispatch: e.dispatch,
      dropdownShown: e.dropdownShown,
      dropdownWidth: DxS,
      formatter: new eb(t, e.scene),
      hideDropdownWhenContainerMoves: !isInteractionPathCheck(),
      id: m,
      inputClassName: "prototype_destination_dropdown--input--rzglN",
      onChange: e.onChange,
      onOptionFocus: e => {
        updateHoveredNode(e ?? "");
      },
      property: p,
      recordingKey: generateRecordingKey(e, "select"),
      willShowDropdown: () => {
        let t = ExportScope.ALL;
        "SCROLL_TO" === e.action ? t = ExportScope.SCROLL_TO : "SWAP_STATE_TO" === e.action ? t = ExportScope.STATES : "NAVIGATE_TO" === e.action && c && (t = ExportScope.RESPONSIVE_SETS);
        let {
          viableIds,
          disabledIds
        } = PrototypingTsApi.getTransitionDestinationsOnActiveCanvas(t);
        r(viableIds);
        d(disabledIds);
        return Promise.resolve();
      },
      children: [g || null, 0 !== s.length && 0 !== h.length && jsx(sK, {}), y]
    })
  });
}
let ek = memo(function (e) {
  let t = useCurrentFileKey();
  let n = useOpenFileLibraryKey();
  let l = useSelector(eP);
  let s = useSelector(Sh);
  let d = useSelector(dK);
  let c = useIsSelectedViewFullscreenCooper();
  let p = _$$D(s, d);
  let u = useSelector(eO);
  let h = useMemo(() => _$$cP(u, t, n, c, e.actionIndexPath), [u, t, n, e.actionIndexPath, c]);
  let m = useMemo(() => _$$cP(l, t, n, c), [l, t, n, c]);
  let x = h || m;
  if (!x || x.mode !== StateHierarchy.STATE_OR_STATE_INSTANCE_SUBLAYER) return null;
  let {
    allStates,
    stateGroupModel,
    selectedStates,
    selectedStatesPropertyValues
  } = x;
  let b = stateGroupModel.propertySortOrder || [];
  let v = stateGroupModel.propertyValues;
  return v ? jsx(lS, {
    allStates,
    extended: !0,
    hideErrorsPanel: !0,
    onSelectProperty: t => {
      let n = {};
      for (let e of Object.keys(t)) {
        let o = t[e].symbol.node_id;
        for (let t of (n[e] = o, p[e] || [])) n[t] = o;
        for (let e of s) n[e] || (n[e] = o);
      }
      e.onChange(n);
    },
    recordingKey: e.recordingKey,
    selectedStates,
    selectedStatesPropertyValues,
    shouldIndent: !0,
    sortedProperties: b,
    stateGroupPropertyValues: v
  }) : null;
});
function eP(e) {
  return e.mirror.selectionProperties.stateGroupSelectionInfo;
}
function eO(e) {
  return e.mirror.selectionProperties.prototypeDestinationStateGroupSelectionInfo;
}
let eY = "prototype_set_variable_controls--dropdownAndIconContainer--6m3Tw";
let eq = "prototype_set_variable_controls--placeholderText--PBIqf";
function eX({
  targetVariableData: e,
  targetVariable: t,
  updateSelectionProperties: n,
  autoOpenVariablePicker: s,
  ...c
}) {
  let p = useRef(null);
  let x = useDispatch();
  let g = useSelector(e => e.variablePickerShown);
  let y = tZ(isValidValue(t) && "id" in t ? t.id : void 0);
  let _ = _$$u(isValidValue(t) && "id" in t ? t.id : void 0);
  let [v, I] = useState("");
  _$$h2(() => {
    s && !0 === s.current && (E(), s.current = !1);
  });
  let C = BQ(isValidValue(t) && "id" in t ? t.id : void 0) ?? m9(isValidValue(t) && "nodeFieldAlias" in t ? t.nodeFieldAlias : void 0);
  useEffect(() => {
    void 0 !== e && C && "MIXED" !== C && isValidValue(e) && e.resolvedType !== C.resolvedType && !(tz(e.resolvedType) && tz(C.resolvedType)) && n({
      targetVariableData: void 0
    });
  }, [C, n, e]);
  let E = () => {
    let e = p.current.getBoundingClientRect();
    x(_$$C({
      type: "variable-picker-set-variable-action",
      isShown: !0,
      resolvedType: VariableResolvedDataType.STRING,
      initialPosition: new Point(e.left - 20, e.top),
      key: c.recordingKey,
      onVariableSelected: A
    }));
  };
  let j = useCallback(() => {
    x(_$$B2());
  }, [x]);
  let [T, S] = useState(!1);
  let A = useCallback(t => {
    if (void 0 !== t && t.node_id) {
      let o = {
        targetVariable: {
          id: t.node_id
        }
      };
      let i = VariablesBindings.getVariableResolvedValue(t.node_id, new Map());
      !e && t.resolvedType === VariableResolvedDataType.COLOR && i && (o.targetVariableData = i ?? void 0);
      n(o);
      x(Zh({
        name: "prototype.variable_selected",
        params: {
          collectionId: t.variableSetId,
          variableId: t.node_id,
          variableType: t.resolvedType
        }
      }));
      S(!0);
    }
  }, [x, e, n]);
  let w = useCallback(e => {
    e.value.stablePath.map(e => parseSessionLocalID(e)) && (n({
      targetVariable: {
        nodeFieldAlias: {
          stablePathToNode: e.value.stablePath,
          nodeField: "COMPONENT_PROP_ASSIGNMENTS",
          indexOrKey: e.value.explicitDefId
        }
      }
    }), S(!0));
  }, [n]);
  let k = useMemo(() => ({
    type: "LOCAL_VARIABLES",
    layout: "list"
  }), []);
  let P = useRef(null);
  R(e => {
    n({
      targetVariableData: e
    });
  });
  let O = "nodeFieldAlias" in t ? aA(t.nodeFieldAlias.stablePathToNode, t.nodeFieldAlias.indexOrKey) : void 0;
  let D = O ? Xx(O.varValue.resolvedType) : null;
  let M = null;
  if (isInvalidValue(t)) M = null;else if (C?.resolvedType === VariableResolvedDataType.COLOR) M = isInvalidValue(e) ? jsx("div", {
    className: "prototype_set_variable_controls--targetVariableDataMixedContainer--H6uGu",
    children: getI18nString("fullscreen.mixed")
  }) : jsx(Fragment, {
    children: jsx(gJ, {
      variableValue: e ?? C,
      onChange: e => {
        n({
          targetVariableData: e
        });
      },
      recordingKey: generateRecordingKey(c.recordingKey, "variableValueInput"),
      setVariableAction: !0,
      innerContainerClassName: "prototype_set_variable_controls--variableColorInputContainer--NaOmp"
    })
  });else {
    let t = VariableResolvedDataType.BOOLEAN;
    _ ? t = _.resolvedType : O && (t = O.varValue.resolvedType === VariableResolvedDataType.TEXT_DATA ? VariableResolvedDataType.STRING : O.varValue.resolvedType);
    M = jsx("div", {
      children: jsx("div", {
        className: eY,
        children: jsx(KN, {
          resolvedType: t,
          targetVariableData: e,
          autoOpenExpressionBuilder: T,
          setAutoOpenExpressionBuilder: S,
          updateSelectionProperties: n,
          recordingKey: c.recordingKey,
          isNarrowPanel: c.isNarrowPanel,
          showVariableThumbnails: !0
        })
      })
    });
  }
  let V = d()({
    "prototype_set_variable_controls--targetVariableDropdownUI3--Pz71q": !0,
    [eq]: !(y || O)
  });
  let B = useSelector(ZM) ? getI18nString("proto.select_variable_unified") : getI18nString("proto.select_variable.short");
  let H = jsx(RecordableDiv, {
    recordingKey: generateRecordingKey(c.recordingKey, "selectTargetVariable"),
    onClick: E,
    children: jsx("div", {
      ref: p,
      children: jsx(AutoLayout, {
        children: jsx("div", {
          className: V,
          children: jsx("div", {
            className: eY,
            children: isInvalidValue(t) ? jsx("div", {
              className: d()(_$$s.pt2.$, _$$s.pb2.$),
              children: getI18nString("fullscreen.mixed")
            }) : y ? jsx(wG, {
              text: y,
              thumbnailValue: C,
              isDeleted: !!_ && _$$eF(_)
            }) : O ? jsx(wG, {
              text: O.name,
              thumbnailValue: D,
              isDeleted: !1,
              colorTheme: J2.COMPONENT
            }) : jsx("div", {
              className: d()(_$$s.pt2.$, _$$s.pb2.$, "prototype_set_variable_controls--placeholderTextColorUI3--Pc-4N"),
              children: B
            })
          })
        })
      })
    })
  });
  let U = jsx(_$$A, {
    input: H,
    label: getI18nString("proto.target")
  });
  let F = d()({
    "prototype_set_variable_controls--setVariableToContainerUI3--pGbDe": !0,
    [eq]: !e && C?.resolvedType !== VariableResolvedDataType.COLOR
  });
  let K = jsx("div", {
    className: F,
    "data-testid": "set-variable-container",
    children: M
  });
  let $ = null !== M ? jsx(_$$A, {
    label: getI18nString("proto.variable.value"),
    input: K
  }) : null;
  return jsxs("div", {
    children: [U, g.isShown && "variable-picker-set-variable-action" === g.type && g.key === c.recordingKey ? jsxs(Fragment, {
      children: [jsx(Ao, {
        title: "",
        headerSize: "hidden",
        initialPosition: g.initialPosition,
        onClose: j,
        dragHeaderOnly: !1,
        initialWidth: 216,
        canRenderBelowViewport: !0,
        children: jsx(YK, {
          currentView: k,
          disabledVariableIds: new Set(),
          onClose: j,
          onComponentPropSelected: getFeatureFlags().ds_variable_props_proto ? w : void 0,
          onSearchInputChange: I,
          onVariableSelected: A,
          pickerType: "set-variable",
          recordingKey: generateRecordingKey(c.recordingKey, "variablePickerForSelection"),
          renderSetControls: () => jsx(_$$Z, {
            currentView: k,
            subscribedLibraries: [],
            setControlRightButtons: jsx(_$$f, {
              resolvedTypes: [VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.STRING, VariableResolvedDataType.FLOAT, VariableResolvedDataType.COLOR]
            }),
            recordingKey: generateRecordingKey(c.recordingKey, "variablePickerForSelection")
          }),
          searchInputRef: P,
          searchQuery: v,
          selectedItem: _
        })
      }), jsx($3, {
        onClose: j
      })]
    }) : null, $]
  });
}
function e9() {
  let e = jsx(_$$N, {
    newTab: !0,
    href: "https://help.figma.com/hc/articles/14397859494295",
    htmlAttributes: {
      rel: "noopener noreferrer",
      onMouseDown: e => {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    children: renderI18nText("proto.state_management.info_tooltip_learn_more")
  });
  let t = jsx("span", {
    children: jsx("strong", {
      children: renderI18nText("proto.animation_panel.preserve_scroll_position")
    })
  });
  return jsx(Fragment, {
    children: renderI18nText("proto.state_management.info_tooltip", {
      PreserveScrollPositionBold: t,
      LearnMoreLink: e
    })
  });
}
let e7 = _$$ex("prototype_state_management_info", function () {
  return jsx("div", {
    className: "prototype_state_management_info_tooltip--stateManagementMoreInfo---gER1 tooltip--text--Ll1mS",
    children: jsx(e9, {})
  });
});
let e4 = "prototype_state_management_panel--stateManagementPanelTooltipUI3--x5MQ3";
function te({
  transition: e,
  navigationType: t,
  recordingKey: n,
  showPreserveScrollPosition: a,
  showResetVideoState: l,
  showResetInteractiveComponentState: s,
  updateSelectionProperties: d,
  stateManagementVersion: c,
  selectedInteractions: p
}) {
  let h = useDispatch();
  let x = isDesignFileType();
  let y = useContext(_$$c);
  let _ = YT() === Oz.TWO_COL && y === _$$P2.LEFT;
  let v = iv({
    placement: "bottom"
  });
  if (_) return null;
  let I = LH(c);
  let j = jsx(Checkbox, {
    onChange: t => {
      h(_P({
        name: "Preserve Scroll Changed",
        params: {
          newValue: t
        }
      }));
      d({
        ...function (e) {
          if (isValidValue(e.preserveScroll)) return {
            transitionPreserveScroll: e.preserveScroll
          };
        }({
          ...e,
          preserveScroll: t
        })
      });
    },
    checked: !0 === e.preserveScroll,
    mixed: isInvalidValue(e.preserveScroll),
    recordingKey: generateRecordingKey(n, "preserve-scroll-check"),
    label: jsx(Label, {
      children: renderI18nText("proto.animation_panel.preserve_scroll_position")
    })
  });
  let N = jsx(TN, {
    children: j
  });
  let T = jsx(Checkbox, {
    onChange: t => {
      h(_P({
        name: "Reset Scroll Position Changed",
        params: {
          newValue: t,
          noodleUpgradedThisSession: zZ.haveAnyInteractionsBeenUpgraded(p)
        }
      }));
      d({
        ...function (e) {
          if (isValidValue(e.resetScrollPosition)) return {
            transitionResetScrollPosition: e.resetScrollPosition
          };
        }({
          ...e,
          resetScrollPosition: t
        })
      });
    },
    checked: !0 === e.resetScrollPosition,
    mixed: isInvalidValue(e.resetScrollPosition),
    recordingKey: generateRecordingKey(n, "reset-scroll-position-check"),
    label: jsx(Label, {
      children: renderI18nText("proto.animation_panel.reset_scroll_position")
    })
  });
  let S = getFeatureFlags().fpl_toggle_tip ? jsxs("div", {
    className: e4,
    children: [jsx(Uj, {
      ...v.getTriggerProps(),
      children: jsx(_$$B3, {})
    }), jsx(mc, {
      manager: v,
      children: jsx(_$$UC, {
        maxWidth: 240,
        children: jsx(e9, {})
      })
    })]
  }) : jsx("div", {
    "data-tooltip-type": KindEnum.SPECIAL,
    "data-tooltip": e7,
    "data-tooltip-interactive": !0,
    "data-tooltip-show-immediately": !0,
    "data-tooltip-max-width": 240,
    className: e4,
    children: jsx(In, {
      icon: "info-16"
    })
  });
  let A = jsxs(TN, {
    children: [T, " ", x && S]
  });
  let w = jsx(Checkbox, {
    onChange: t => {
      h(_P({
        name: "Reset Component State Changed",
        params: {
          newValue: t,
          noodleUpgradedThisSession: zZ.haveAnyInteractionsBeenUpgraded(p)
        }
      }));
      d({
        ...function (e) {
          if (isValidValue(e.resetInteractiveComponents)) return {
            transitionResetInteractiveComponents: e.resetInteractiveComponents
          };
        }({
          ...e,
          resetInteractiveComponents: t
        })
      });
    },
    checked: !0 === e.resetInteractiveComponents,
    mixed: isInvalidValue(e.resetInteractiveComponents),
    recordingKey: generateRecordingKey(n, "reset-component-state-check"),
    label: jsx(Label, {
      children: renderI18nText("proto.animation_panel.reset_component_state")
    })
  });
  let k = jsx(TN, {
    children: w
  });
  let P = jsx(Checkbox, {
    onChange: t => {
      h(_P({
        name: "Reset Video Position Changed",
        params: {
          newValue: t
        }
      }));
      d({
        ...function (e) {
          if (isValidValue(e.resetVideoPosition)) return {
            transitionResetVideoPosition: e.resetVideoPosition
          };
        }({
          ...e,
          resetVideoPosition: t
        })
      });
    },
    checked: !0 === e.resetVideoPosition,
    mixed: isInvalidValue(e.resetVideoPosition),
    recordingKey: generateRecordingKey(n, "reset-video-position-check"),
    label: jsx(Label, {
      children: LH(c) ? renderI18nText("proto.state_management.reset_video_state") : renderI18nText("proto.animation_panel.reset_video_state")
    })
  });
  let O = jsx(TN, {
    children: P
  });
  let L = jsxs(Zk, {
    className: `prototype_state_management_panel--stateManagementPanel--sYaaj ${kM(c) && "prototype_state_management_panel--stateManagementPanelWithVersion--AovOP"}`,
    children: [uU(c) && a && N, l && uU(c) && O, I && A, I && s && k, I && l && O, isInvalidValue(c) && jsx(AutoLayout, {
      direction: "horizontal",
      padding: {
        horizontal: 12,
        vertical: 12
      },
      children: jsx(nV, {
        children: renderI18nText("proto.state_management.mixed_state_update")
      })
    })]
  });
  return jsx(_$$k2, {
    name: "prototype_state_management_panel",
    children: jsxs(bL, {
      defaultOpen: !1,
      children: [jsx(Y9, {
        children: jsx(JU, {
          recordingKey: generateRecordingKey(n, "expand-caret"),
          actionOnPointerDown: !0,
          children: renderI18nText("proto.state")
        }, "expand-caret")
      }), jsx(UC, {
        children: L
      })]
    })
  });
}
let tt = c$;
let tn = l6;
let to = defaultSessionLocalIDString;
class ti extends cP {
  format(e) {
    return e === to || null === e ? getI18nString("proto.target_video_node_name_formatter.this_video") : super.format(e);
  }
}
function tr(e) {
  let {
    viableSameFrameVideoIds,
    disabledSameFrameVideoIds,
    scene,
    dropdownShown,
    targetVideoNodeID,
    isVideoSelected,
    onChange
  } = e;
  let h = useDispatch();
  let [g, y] = useState(() => isVideoSelected ? new ti(scene) : new cP(scene));
  viableSameFrameVideoIds.sort((e, t) => {
    let n = g.format(e);
    let o = g.format(t);
    return n.localeCompare(o);
  });
  isVideoSelected && viableSameFrameVideoIds.unshift(to);
  let _ = viableSameFrameVideoIds.length > 0 && disabledSameFrameVideoIds.length > 0;
  let b = `prototype-target-video-select-${e.recordingKey}`;
  let v = useId();
  let I = jsxs(tn, {
    ariaLabelledBy: v,
    chevronClassName: "prototype_target_video_dropdown--chevron--jgz53",
    className: "prototype_target_video_dropdown--targetVideoDropdown--6hKF-",
    dataTestId: "target-video-select",
    dispatch: h,
    dropdownAlignment: "left",
    dropdownShown,
    formatter: g,
    id: b,
    inputClassName: "prototype_target_video_dropdown--input--infAK",
    onChange,
    onOptionFocus: e => {
      updateHoveredNode(e ?? "");
    },
    property: isInvalidValue(targetVideoNodeID) ? targetVideoNodeID : sessionLocalIDToString(targetVideoNodeID),
    recordingKey: generateRecordingKey(e, "select"),
    children: [viableSameFrameVideoIds.filter(e => g.hasNameForNode(e)).map((t, n) => jsx(tt, {
      value: t,
      recordingKey: generateRecordingKey(e, `viable-option-${n}`),
      disabled: !1
    }, `enabled-${n}`)), _ && jsx(sK, {}), disabledSameFrameVideoIds.filter(e => g.hasNameForNode(e)).map((t, n) => jsx(tt, {
      value: t,
      recordingKey: generateRecordingKey(e, `viable-option-${n}`),
      disabled: !0
    }, `disabled-${n}`))]
  });
  return jsx(_$$A, {
    input: I,
    label: getI18nString("proto.video_dropdown.label"),
    labelId: v
  });
}
function tl({
  action: e,
  recordingKey: t,
  onURLChange: n,
  onOpenInNewTabChange: i
}) {
  let r = jsx(BigTextInputForwardRef, {
    className: "prototype_open_url_action_options--urlInputUI3--H-JfT",
    dataTestId: "url-input",
    placeholder: getI18nString("proto.interaction.example_com"),
    value: isInvalidValue(e.connectionURL) ? getI18nString("fullscreen.mixed") : valueOrFallback(e.connectionURL, ""),
    onChange: n,
    recordingKey: generateRecordingKey(t, "urlTextInput"),
    autoFocus: !1
  });
  let a = jsx(Checkbox, {
    label: jsx(Label, {
      children: renderI18nText("proto.action_open_url_in_new_tab")
    }),
    onChange: i,
    recordingKey: generateRecordingKey(t, "open-url-in-new-tab-check"),
    checked: void 0 === e.openUrlInNewTab || !0 === e.openUrlInNewTab
  });
  return jsxs(Fragment, {
    children: [jsx(_$$A, {
      label: getI18nString("proto.open_url.text_input_label"),
      input: r
    }), jsx(TN, {
      children: a
    })]
  });
}
function tc({
  updateSelectionProperties: e,
  action: t,
  extraScrollOffset: n,
  showScrollToOptions: i,
  recordingKey: a,
  setPropertiesForAnchorLink: l
}) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let c = useDispatch();
  let p = (t, n) => (o, i) => {
    if (t) {
      if (l) {
        l({
          extraScrollOffset: {
            ...t,
            [n]: o
          }
        });
        return;
      }
      e({
        extraScrollOffset: {
          ...t,
          [n]: o
        }
      }, {
        shouldCommit: i
      });
    }
  };
  let h = valueOrFallback(n, {
    x: 0,
    y: 0
  });
  if (!i || "SCROLL_TO" !== t) return null;
  let x = jsx(gq, {
    bigNudgeAmount,
    "data-tooltip": getI18nString("proto.trigger.y_offset"),
    "data-tooltip-type": KindEnum.TEXT,
    dispatch: c,
    inputClassName: oM,
    onValueChange: p(h, "y"),
    recordingKey: generateRecordingKey(a, "extraScrollOffsetY"),
    scrubMultiplier: smallNudgeAmount,
    smallNudgeAmount,
    tooltipForScreenReadersOnly: !1,
    value: h.y,
    wheelMultiplier: smallNudgeAmount,
    children: jsx("span", {
      className: QK,
      children: renderI18nText("proto.scroll_options.scroll_offset.y")
    })
  });
  let g = jsx(gq, {
    bigNudgeAmount,
    "data-tooltip": getI18nString("proto.trigger.x_offset"),
    "data-tooltip-type": KindEnum.TEXT,
    dispatch: c,
    inputClassName: oM,
    onValueChange: p(h, "x"),
    recordingKey: generateRecordingKey(a, "extraScrollOffsetX"),
    scrubMultiplier: smallNudgeAmount,
    smallNudgeAmount,
    tooltipForScreenReadersOnly: !1,
    value: h.x,
    wheelMultiplier: smallNudgeAmount,
    children: jsx("span", {
      className: QK,
      children: renderI18nText("proto.scroll_options.scroll_offset.x")
    })
  });
  return jsx(Cm, {
    label: jsx(_$$F, {
      tooltip: getI18nString("proto.scroll_options.offset"),
      children: getI18nString("proto.scroll_options.offset")
    }),
    leftInput: g,
    rightInput: x
  });
}
let tu = "prototype_video_action_options--chevron--mkNyv";
let th = "prototype_video_action_options--input--3-cEi";
let tm = c$;
let tx = l6;
let tg = new js();
let ty = new Z6();
function tf({
  action: e,
  onChange: t,
  updateSelectionProperties: n,
  dropdownShown: a,
  recordingKey: l
}) {
  let s = Od(e);
  let d = normalizeValue(e.mediaAction);
  let c = "UPDATE_MEDIA_RUNTIME" === normalizeValue(e.connectionType);
  let p = "SKIP_TO" === d;
  let h = "SKIP_FORWARD" === d || "SKIP_BACKWARD" === d;
  let g = "PLAY" === d || "PAUSE" === d || "TOGGLE_PLAY_PAUSE" === d;
  let y = "MUTE" === d || "UNMUTE" === d || "TOGGLE_MUTE_UNMUTE" === d;
  let _ = useDispatch();
  let v = RU();
  let I = useCallback(e => {
    n({
      mediaSkipToTime: e
    });
    _(_P({
      name: "Media skip to time changed",
      params: {
        value: e
      }
    }));
  }, [_, n]);
  let C = `prototype-media-action-select-${l}`;
  let E = "prototype_video_action_options--shortDropdown--NOXXv";
  let j = a && a.type === C ? tg : ty;
  let N = useId();
  let T = jsxs(tx, {
    ariaLabelledBy: N,
    chevronClassName: tu,
    className: E,
    dataTestId: "media-play-pause-select",
    dispatch: _,
    dropdownShown: a,
    formatter: j,
    id: C,
    inputClassName: th,
    onChange: t,
    property: s,
    recordingKey: generateRecordingKey(l, "select"),
    children: [jsx(tm, {
      value: "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE",
      recordingKey: generateRecordingKey(l, "toggle-play-pause-option"),
      disabled: !1
    }, "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE"), jsx(tm, {
      value: "UPDATE_MEDIA_PLAY",
      recordingKey: generateRecordingKey(l, "play-option"),
      disabled: !1
    }, "UPDATE_MEDIA_PLAY"), jsx(tm, {
      value: "UPDATE_MEDIA_PAUSE",
      recordingKey: generateRecordingKey(l, "pause-option"),
      disabled: !1
    }, "UPDATE_MEDIA_PAUSE")]
  });
  let S = useId();
  let A = jsxs(tx, {
    ariaLabelledBy: S,
    chevronClassName: tu,
    className: E,
    dataTestId: "media-mute-unmute-select",
    dispatch: _,
    dropdownShown: a,
    formatter: j,
    id: C,
    inputClassName: th,
    onChange: t,
    property: s,
    recordingKey: generateRecordingKey(l, "select"),
    children: [jsx(tm, {
      value: "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE",
      recordingKey: generateRecordingKey(l, "toggle-mute-unmute-option"),
      disabled: !1
    }, "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE"), jsx(tm, {
      value: "UPDATE_MEDIA_MUTE",
      recordingKey: generateRecordingKey(l, "mute-option"),
      disabled: !1
    }, "UPDATE_MEDIA_MUTE"), jsx(tm, {
      value: "UPDATE_MEDIA_UNMUTE",
      recordingKey: generateRecordingKey(l, "unmute-option"),
      disabled: !1
    }, "UPDATE_MEDIA_UNMUTE")]
  });
  let k = useId();
  let P = jsxs(tx, {
    ariaLabelledBy: k,
    chevronClassName: tu,
    className: E,
    dataTestId: "media-skip-by-select",
    dispatch: _,
    dropdownShown: a,
    dropdownWidth: 160,
    formatter: j,
    id: C,
    inputClassName: th,
    onChange: t,
    property: s,
    recordingKey: generateRecordingKey(l, "select"),
    children: [jsx(tm, {
      value: "UPDATE_MEDIA_SKIP_FORWARD",
      recordingKey: generateRecordingKey(l, "skip-forward-option"),
      disabled: !1
    }, "UPDATE_MEDIA_SKIP_FORWARD"), jsx(tm, {
      value: "UPDATE_MEDIA_SKIP_BACKWARD",
      recordingKey: generateRecordingKey(l, "skip-backward-option"),
      disabled: !1
    }, "UPDATE_MEDIA_SKIP_BACKWARD")]
  });
  let O = jsx(qd, {
    className: "prototype_video_action_options--timestampContainer---DdaI",
    "data-tooltip": getI18nString("proto.trigger.timestamp_to_set_to"),
    "data-tooltip-type": KindEnum.TEXT,
    dataTestId: "mediaSkipToTime-input",
    dispatch: _,
    displayFractions: !0,
    inputClassName: "prototype_video_action_options--timestamp--luOrs",
    max: 3600,
    onValueChange: I,
    recordingKey: generateRecordingKey(l, "mediaSkipToTimeInput"),
    scrubMultiplier: v / 1e3,
    tooltipForScreenReadersOnly: !0,
    value: e.mediaSkipToTime || 0,
    wheelMultiplier: v / 1e3,
    children: jsx(_$$Y2, {})
  });
  let D = "SKIP_BACKWARD" === d ? getI18nString("proto.trigger.duration_to_jump_backward") : getI18nString("proto.trigger.duration_to_jump_forward");
  let R = jsx(dE, {
    className: "prototype_video_action_options--timeAmountContainer--5kpHn",
    "data-tooltip": D,
    "data-tooltip-type": KindEnum.TEXT,
    dataTestId: "mediaSkipByAmount-input",
    dispatch: _,
    max: 3600,
    onValueChange: e => {
      n({
        mediaSkipByAmount: e
      });
      _(_P({
        name: "Media skip by amount changed",
        params: {
          value: e
        }
      }));
    },
    recordingKey: generateRecordingKey(l, "mediaSkipByAmountInput"),
    scrubMultiplier: v / 1e3,
    tooltipForScreenReadersOnly: !0,
    value: e.mediaSkipByAmount || 5,
    wheelMultiplier: v / 1e3
  });
  return c ? g ? jsx(_$$A, {
    input: T,
    label: getI18nString("proto.video_options.behavior"),
    labelId: N
  }) : y ? jsx(_$$A, {
    input: A,
    label: getI18nString("proto.video_options.behavior"),
    labelId: S
  }) : h ? jsxs(Fragment, {
    children: [jsx(_$$A, {
      input: P,
      label: getI18nString("proto.video_options.direction"),
      labelId: k
    }), jsx(_$$A, {
      input: R,
      label: getI18nString("proto.video_options.offset")
    })]
  }) : p ? jsx(_$$A, {
    input: O,
    label: getI18nString("proto.video_options.timestamp")
  }) : jsxs(fI, {
    children: [g && T, y && A, h && P, h && R, p && O]
  }) : null;
}
let tb = ({
  onUpdateTransitionNodeID: e
}) => {
  let t = useDispatch();
  return useCallback((n, o) => {
    let i = parseSessionLocalID(n);
    i && e(i);
    t(_P({
      name: "Prototype navigation destination changed",
      params: {
        source: "panel",
        connectorIds: JSON.stringify(o),
        destinationTlfId: n
      }
    }));
  }, [t, e]);
};
export function $$tv0({
  action: e,
  recordingKey: t,
  interactionType: n,
  onActionChange: s,
  updateMultipleDestinationNodes: m,
  updateSelectionProperties: y,
  stateManagementVersion: C,
  autoOpenVariablePicker: E,
  autoOpenExpressionBuilder: j,
  setAutoOpenExpressionBuilder: N,
  ...T
}) {
  let S = useDispatch();
  let A = Um();
  let {
    scene
  } = selectWithShallowEqual(e => ({
    scene: e.mirror.sceneGraph
  }));
  let k = isSitesFileType();
  let P = YT();
  let O = P === Oz.SINGLE_COL;
  let L = P === Oz.TWO_COL;
  let D = useContext(_$$c);
  let R = L && D === _$$P2.RIGHT;
  let M = "SET_VARIABLE" === normalizeValue(e.connectionType);
  let V = "SET_VARIABLE_MODE" === normalizeValue(e.connectionType);
  let B = "CONDITIONAL" === normalizeValue(e.connectionType);
  let H = "INTERNAL_NODE" === normalizeValue(e.connectionType);
  let U = "INTERNAL_NODE" === normalizeValue(e.connectionType) && "SWAP_STATE" === normalizeValue(e.navigationType);
  let F = "URL" === normalizeValue(e.connectionType);
  let K = H || "BACK" === normalizeValue(e.connectionType) || "CLOSE" === normalizeValue(e.connectionType);
  let $ = "UPDATE_MEDIA_RUNTIME" === normalizeValue(e.connectionType);
  let z = useSelector(e => {
    let t = e.mirror.selectionProperties.numSelected;
    let n = e.mirror.selectionProperties.numVideosSelected;
    return 1 === t && !!n;
  });
  let W = uQ();
  let Z = [];
  let Y = [];
  if (W) {
    let {
      viableIds,
      disabledIds
    } = PrototypingTsApi.getVideoNodesOnSameTlfAsNode(W);
    Z = viableIds;
    Y = disabledIds;
  }
  let q = sessionLocalIDToString(normalizeValue(e.transitionNodeID));
  let X = null != q && q !== defaultSessionLocalIDString;
  let J = H && (!isValidValue(e.transitionNodeID) || X) && !(k && !U && "SCROLL_TO" !== normalizeValue(e.navigationType));
  let Q = normalizeValue(e.navigationType);
  let et = H && "OVERLAY" === normalizeValue(Q);
  let en = hU(e.transitionType, e.easingType, e.easingFunction, e.transitionDuration, e.transitionShouldSmartAnimate, e.transitionPreserveScroll, e.transitionResetVideoPosition, e.openUrlInNewTab, e.transitionResetScrollPosition, e.transitionResetInteractiveComponents);
  let eo = K && !et && ("INSTANT" === en.behavior || "DISSOLVE" === en.behavior);
  let ei = !$ && oc(e);
  let er = GB(e);
  let ea = uU(C) ? eo || ei : Fp(C, e.connectionType, e.navigationType);
  let {
    selectedInteractions
  } = Ay(_$$J.NORMAL);
  let es = selectedInteractions.filter(e => !!e.sourceNodeID && !!e.id).map(e => _$$d({
    nodeID: e.sourceNodeID,
    interactionID: e.id
  }));
  let ed = tb({
    onUpdateTransitionNodeID: e => {
      y({
        transitionNodeID: e
      });
    }
  });
  let ec = e => ed(e, es);
  let ep = useCallback(e => {
    m(e);
    S(_P({
      name: "Variant based prototyping UI changed",
      params: {
        source: "panel"
      }
    }));
    S(_P({
      name: "Prototype navigation destination changed",
      params: {
        source: "panel",
        connectorIds: JSON.stringify(es)
      }
    }));
  }, [m, S, es]);
  let eu = useCallback(e => {
    y({
      connectionURL: e.target.value
    });
  }, [y]);
  let ex = Od(e);
  let eg = d()({
    [Ti]: T.isNestedInConditional && !O && !R
  });
  let ey = H && !U;
  return jsxs("div", {
    className: eg,
    children: [ey && jsx($$tI1, {
      action: e,
      interactionType: n,
      updateSelectionProperties: y,
      recordingKey: t,
      actionIndexPath: T.actionIndexPath
    }), F && jsx(tl, {
      action: e,
      recordingKey: t,
      onOpenInNewTabChange: e => {
        y({
          openUrlInNewTab: e
        });
        S(_P({
          name: "Open Url In New Tab Changed",
          params: {
            value: e
          }
        }));
      },
      onURLChange: eu
    }), $ && jsx(tr, {
      dropdownShown: A,
      scene,
      targetVideoNodeID: e.transitionNodeID || defaultSessionLocalID,
      recordingKey: generateRecordingKey(t, "targetVideoDropdown"),
      viableSameFrameVideoIds: Z,
      disabledSameFrameVideoIds: Y,
      isVideoSelected: z,
      onChange: ec
    }), jsx(tf, {
      dropdownShown: A,
      action: e,
      onChange: s,
      updateSelectionProperties: y,
      recordingKey: t
    }), M && jsx("div", {
      children: jsx(eX, {
        action: ex,
        autoOpenVariablePicker: E,
        className: PB,
        dispatch: S,
        isNarrowPanel: T.isNestedInConditional || T.isNarrowPanel,
        isNestedInConditional: T.isNestedInConditional,
        nodeId: e.transitionNodeID || defaultSessionLocalID,
        onChange: ec,
        recordingKey: generateRecordingKey(t, "setVariableControls"),
        targetVariable: e.targetVariable || {
          id: ""
        },
        targetVariableData: e.targetVariableData,
        updateSelectionProperties: y
      })
    }), V && jsx("div", {
      children: jsx(_$$I, {
        dispatch: S,
        targetVariableSetID: e.targetVariableSetID,
        targetVariableModeID: e.targetVariableModeID,
        deprecatedTargetVariableSetKey: e.targetVariableSetKey,
        updateSelectionProperties: y,
        recordingKey: generateRecordingKey(t, "setVariableControls"),
        actionIndexPath: T.actionIndexPath.join(",")
      })
    }), B && (R ? jsx(em, {
      recordingKey: generateRecordingKey(t, "conditionalActionSection", "conditional-block", 0),
      autoOpenExpressionBuilder: j,
      setAutoOpenExpressionBuilder: N,
      updateSelectionProperties: y,
      conditionalActions: isValidValue(e.conditionalActions) && e.conditionalActions ? e.conditionalActions : []
    }) : jsx(eh, {
      action: e,
      actionIndexPath: T.actionIndexPath,
      autoOpenVariablePicker: E,
      expandedRows: T.expandedRows,
      handleMouseDownUI3: T.handleMouseDownUI3,
      interactionType: n,
      onDrop: T.onDrop,
      onExpand: T.onExpand,
      onNewActionAdded: T.onNewActionAdded,
      onSelect: T.onSelect,
      recordingKey: generateRecordingKey(t, "conditionalActionSection"),
      selectedActionIndex: T.selectedActionIndex,
      selectedInteractions: T.selectedInteractions,
      stateManagementVersion: C,
      updateMultipleDestinationNodes: m,
      updateSelectionProperties: y
    })), U && jsx("div", {
      className: _$$s.ml0.$,
      children: jsx(ek, {
        onChange: ep,
        nodeId: e.transitionNodeID || defaultSessionLocalID,
        recordingKey: generateRecordingKey(t, "consumption"),
        actionIndexPath: T.actionIndexPath
      })
    }), J && jsxs(Fragment, {
      children: [jsx("div", {
        className: _$$x
      }), jsx(X7, {
        transition: en,
        interactionType: n,
        navigationType: e.navigationType,
        recordingKey: generateRecordingKey(t, "animationPanel"),
        updateSelectionProperties: y,
        isNarrowPanel: T.isNestedInConditional || T.isNarrowPanel,
        stateManagementVersion: C
      })]
    }), ea && jsxs(Fragment, {
      children: [jsx("div", {
        className: _$$x
      }), jsx(te, {
        connectionType: e.connectionType,
        navigationType: e.navigationType,
        recordingKey: generateRecordingKey(t, "stateManagementPanel"),
        selectedInteractions: T.selectedInteractions,
        showPreserveScrollPosition: eo,
        showResetInteractiveComponentState: !!er,
        showResetVideoState: !!ei,
        stateManagementVersion: C,
        transition: en,
        updateSelectionProperties: y
      })]
    })]
  });
}
export function $$tI1({
  action: e,
  interactionType: t,
  updateSelectionProperties: n,
  actionIndexPath: a,
  recordingKey: s,
  setPropertiesForAnchorLink: d
}) {
  let h = useDispatch();
  let g = Um();
  let {
    scene
  } = selectWithShallowEqual(e => ({
    scene: e.mirror.sceneGraph
  }));
  let I = "INTERNAL_NODE" === normalizeValue(e.connectionType);
  let C = Od(e);
  let E = sessionLocalIDToString(normalizeValue(e.transitionNodeID));
  let j = null != E && E !== defaultSessionLocalIDString;
  let N = I && "OVERLAY" === normalizeValue(e.navigationType) && j;
  let T = normalizeValue(e.navigationType);
  let S = I && "OVERLAY" === normalizeValue(T);
  let A = I && (S || "SWAP" === normalizeValue(T));
  let w = useId();
  let {
    selectedInteractions
  } = Ay(_$$J.INHERITED_INTERNAL);
  let P = selectedInteractions.filter(e => !!e.sourceNodeID && !!e.id).map(e => _$$d({
    nodeID: e.sourceNodeID,
    interactionID: e.id
  }));
  let O = tb({
    onUpdateTransitionNodeID: e => {
      if (d) {
        d({
          transitionNodeID: e
        });
        return;
      }
      n ? n({
        transitionNodeID: e
      }) : fullscreenValue.updateSelectionProperties({
        transitionNodeID: e
      });
    }
  });
  let D = jsx(ew, {
    action: C,
    ariaLabelledBy: w,
    className: iR,
    dispatch: h,
    dropdownShown: g,
    isUI3: !0,
    nodeId: e.transitionNodeID || defaultSessionLocalID,
    onChange: e => O(e, P),
    recordingKey: generateRecordingKey(s, "destinationDropdown"),
    scene
  });
  let R = jsx(tc, {
    action: C,
    showScrollToOptions: "SCROLL_TO" === C,
    extraScrollOffset: e.extraScrollOffset,
    updateSelectionProperties: n || fullscreenValue.updateSelectionProperties,
    recordingKey: generateRecordingKey(s, "scrollOptionsPanel"),
    setPropertiesForAnchorLink: d
  });
  let M = a ? jsx(K, {
    interactionType: t,
    updateSelectionProperties: n || fullscreenValue.updateSelectionProperties,
    recordingKey: generateRecordingKey(s, "overlaySettings"),
    actionIndexPath: a,
    nodeId: e.transitionNodeID || defaultSessionLocalID
  }) : null;
  return jsxs(Fragment, {
    children: [jsx(_$$A, {
      labelId: w,
      label: A ? getI18nString("proto.overlay") : getI18nString("proto.destination"),
      input: D
    }), R, N && M]
  });
}
export const x = $$tv0;
export const k = $$tI1;