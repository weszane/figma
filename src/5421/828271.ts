import { registerTooltip } from "../905/524523";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, memo, useMemo, useCallback, useRef, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noop } from 'lodash-es';
import { Label } from "../905/270045";
import { DialogTriggerButton } from "../905/976845";
import { IconButton } from "../905/443068";
import { PopupButtonPrimitive } from "../905/65923";
import { Z as _$$Z } from "../905/279476";
import { O as _$$O } from "../905/487602";
import { SymbolOverrideType, Fullscreen, NodePropertyCategory, CanvasComponentType } from "../figma_app/763686";
import { permissionScopeHandler, scopeAwareFunction } from "../905/189185";
import { parseSessionLocalID, defaultSessionLocalID, sessionLocalIDToString, isValidSessionLocalID } from "../905/871411";
import { findVisibleSectionChild } from "../figma_app/387100";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import _ from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { trackFileEventWithStore } from "../figma_app/901889";
import { useLatestRef } from "../figma_app/922077";
import { d as _$$d2, s as _$$s } from "../figma_app/429226";
import { generateRecordingKey } from "../figma_app/878298";
import { RecordableDiv } from "../905/511649";
import { Point } from "../905/736624";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { hidePickerThunk, showPickerThunk } from "../figma_app/91703";
import { AO, o$ } from "../figma_app/8833";
import { JV, Eq, sX, cP, js, mj } from "../figma_app/451499";
import { isSitesFileType } from "../figma_app/976749";
import { fullscreenValue } from "../figma_app/455680";
import { isInvalidValue } from "../905/216495";
import { e7, av } from "../figma_app/316316";
import { NE } from "../3276/373312";
import { selectCurrentFile } from "../figma_app/516028";
import { useLabConfiguration, labConfigurations } from "../905/226610";
import { selectSceneGraph, selectSceneGraphSelection } from "../figma_app/889655";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { J as _$$J2 } from "../905/980942";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
import { selectAreAllSymbolsOrInstances } from "../figma_app/505098";
import { e as _$$e } from "../figma_app/905311";
import { h6 } from "../905/401389";
import { Zj } from "../figma_app/365713";
import { hD } from "../figma_app/84580";
import { parseKeyCodes, getGamepadInputLabel, formatKeyboardShortcut } from "../figma_app/800999";
import { Cy, n9, DV, a2, R as _$$R } from "../figma_app/976110";
import { B as _$$B2 } from "../905/872019";
import { a as _$$a } from "../905/29104";
import { trackDefinedFileEventWrapper } from "../figma_app/2590";
import { Yh } from "../figma_app/357047";
import { hasJubileePermissionForDesign } from "../figma_app/251115";
import { JT } from "../figma_app/632248";
import { B3, Ag } from "../figma_app/862289";
import { ExtensionFeatureKey } from "../905/946805";
import { $I } from "../figma_app/322845";
import { p as _$$p } from "../figma_app/398051";
import { e as _$$e2 } from "../905/462154";
import { Zk } from "../figma_app/626177";
import { dD, lt } from "../figma_app/941824";
import { Y9, s2 } from "../figma_app/811257";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { j as _$$j, u as _$$u2 } from "../642/638075";
import { qd } from "../5421/889757";
import { zL, pL } from "../figma_app/369750";
import { QY } from "../figma_app/651753";
import { rightNavGridRowHeight } from "../figma_app/786175";
import { A as _$$A } from "../svg/57540";
var b = _;
function Y(e) {
  return e ?? "Default";
}
let q = createContext({
  getNodeName: Y
});
let X = memo(function ({
  getNodeName: e = Y,
  children: t
}) {
  let n = useMemo(() => ({
    getNodeName: e
  }), [e]);
  return jsx(q.Provider, {
    value: n,
    children: t
  });
});
function eu() {
  let e = useDispatch();
  let t = useSelector(e => Yh(e.mirror.appModel, JT.MAGIC_LINK));
  let n = _$$a();
  if (!hasJubileePermissionForDesign()) return null;
  let i = n ? getI18nString("fullscreen.toolbar.prototyping-add-interactions-tooltip-v2") : getI18nString("fullscreen.toolbar.prototyping-add-interactions-tooltip-ga");
  return jsx("span", {
    className: "magic_link--magicLinkButton--CWefW",
    "data-testid": "magic-link-entry",
    children: jsx(IconButton, {
      recordingKey: generateRecordingKey("prototypeInteractionList", "magicLinkButton"),
      "aria-label": i,
      onClick: () => {
        $I({
          moduleToOpen: {
            type: "custom",
            module: jsx(_$$p, {}),
            name: ExtensionFeatureKey.MAGIC_LINK,
            beforeModuleOpen: () => {
              e(trackDefinedFileEventWrapper({
                name: "prototype.ai_magic_link_entry_clicked",
                params: {
                  source: "properties_panel"
                }
              }));
              B3(JT.MAGIC_LINK);
              t && Ag(JT.MAGIC_LINK, _$$e2, {});
            }
          },
          trackingData: {
            source: "prototype_magic_link_triggered"
          }
        });
      },
      htmlAttributes: {
        "data-tooltip": i,
        "data-tooltip-show-above": !0
      },
      children: jsx(_$$B2, {})
    })
  });
}
let ey = registerTooltip("prototype_info", function (e) {
  let {
    tooltipText
  } = e;
  return jsx("div", {
    className: cssBuilderInstance.flex.justifyCenter.itemsCenter.$,
    children: jsx("span", {
      className: cssBuilderInstance.m6.flexGrow1.$,
      style: {
        maxWidth: 144
      },
      children: tooltipText
    })
  });
}, e => ({
  tooltipText: e.getAttribute("data-tooltip-text")
}));
let eE = new JV();
let ej = new Eq();
let eN = new sX();
let $$eT0 = memo(function ({
  filterInteractionCategory: e
}) {
  let t = useDispatch();
  let n = useSelector(Cy);
  let a = useSelector(n9);
  let l = useSelector(DV);
  let s = useSelector(ek);
  let d = useSelector(selectSceneGraph);
  let c = useSelector(selectSceneGraphSelection);
  let p = a2();
  let u = _$$R();
  let y = useSelector(eO);
  let f = useSelector(ew);
  let _ = Object.keys(c).length > 1;
  let b = eL();
  let C = function () {
    let e = eL();
    let t = useSelector(eP);
    return !!e && !!t && t.selectionOverrides[SymbolOverrideType.PROTOTYPE_INTERACTIONS];
  }();
  let j = selectCurrentFile();
  let N = trackFileEventWithStore();
  let S = isSitesFileType();
  let A = useMemo(() => new cP(d), [d]);
  let D = useCallback(e => A.format(e), [A]);
  let R = useRef(null);
  let M = e => {
    fullscreenValue.updateSelectionProperties({
      prototypeInteractions: e
    }, {
      shouldCommit: yesNoTrackingEnum.NO_BUT_TRACK_AS_EDIT
    });
    fullscreenValue.commit();
  };
  let B = Zj(Object.keys(c));
  let K = jsx(eS, {
    currentSelectedProperty: s,
    dispatch: t,
    filterInteractionCategory: e,
    headerAccessory: B && jsx(eu, {}),
    inSites: S,
    inheritedInternalInteractionGroups: u,
    interactionGroups: p,
    isOrInInstance: b,
    isValidPrototypingSourceSelected: y,
    mixed: _,
    onAddProperty: e => {
      e.stopPropagation();
      let t = [];
      let o = [];
      for (let e of Object.keys(c)) {
        let n = Fullscreen.generateUniqueID();
        if (!n) return;
        let i = parseSessionLocalID(n);
        if (!i) return;
        let r = {
          id: i,
          sourceNodeID: parseSessionLocalID(e) ?? defaultSessionLocalID,
          event: {
            interactionType: $$eR1(p, void 0, S)
          }
        };
        r.stateManagementVersion = 1;
        r.actions = [{
          connectionType: "NONE"
        }];
        t.push(r);
        let a = findVisibleSectionChild(d, e);
        o.push(a ? a.guid : "");
      }
      let i = t.map(e => _$$d2({
        nodeID: e.sourceNodeID,
        interactionID: e.id
      }));
      if (i.length > 0) {
        Fullscreen.setSelectedInteractions(i);
        let e = calculatePickerPositionLeft(R.current);
        $$eU3(new Point(e.x, e.y + parsePxNumber(rightNavGridRowHeight)), !1);
      }
      let r = [...n, ...t, ...a];
      N("prototype_interaction_added", {
        interactionCount: r.length,
        sourceTlfIds: JSON.stringify(o)
      });
      M(r);
    },
    onChange: (e, t) => {
      let o = e.map(e => e.interactions).reduce((e, t) => e.concat(t), []);
      let i = new Set();
      let r = [];
      for (let e of o) {
        let t = sessionLocalIDToString(e.id);
        if (t && !i.has(t)) r.push(e);else {
          if (!(t = Fullscreen.generateUniqueID())) continue;
          let n = parseSessionLocalID(t);
          if (!n) continue;
          r.push({
            ...e,
            id: n
          });
        }
        t && i.add(t);
      }
      t === _$$J2.NORMAL ? r = [...r, ...a] : t === _$$J2.INHERITED_INTERNAL && (r = [...n, ...r]);
      M(r);
    },
    onDeleteProperty: (e, t) => {
      let n = (t === _$$J2.NORMAL ? p : u).filter((t, n) => e.has(n));
      let o = [];
      for (let e of n) o.push(...e.interactions);
      let i = $$eH2(o);
      permissionScopeHandler.user("delete-prototype-interactions", () => Fullscreen.deleteInteractions(i));
      fullscreenValue.deselectProperty();
    },
    openFile: j,
    shouldIgnoreKeyboardEvents: l.length > 0 || s.type !== NodePropertyCategory.PROTOTYPE_INTERACTION && s.type !== NodePropertyCategory.PROTOTYPE_INHERITED_INTERNAL_INTERACTION,
    showResetInteractionsButton: C,
    toggleScrollBehaviorPicker: () => {
      if (f?.id === AO) t(hidePickerThunk());else {
        let e = calculatePickerPositionLeft(R.current);
        t(showPickerThunk({
          id: AO,
          initialX: e.x,
          initialY: e.y
        }));
      }
    }
  });
  return jsx(X, {
    getNodeName: D,
    children: S ? K : jsx(Zk, {
      "data-onboarding-key": "prototypePanel",
      ref: R,
      "data-testid": "prototype-interaction-list",
      children: K
    })
  });
});
function eS(e) {
  let t = useRef(!1);
  let n = !!e.filterInteractionCategory;
  let r = !n || e.filterInteractionCategory === _$$J2.NORMAL;
  let s = e.isOrInInstance && e.inheritedInternalInteractionGroups.length > 0;
  let d = n ? e.filterInteractionCategory === _$$J2.INHERITED_INTERNAL && s : s;
  let c = jsx("div", {
    className: "prototype_interaction_list--categoryRow--Xxfm4",
    children: jsx(Label, {
      className: "prototype_interaction_list--categoryLabel--0dGOM",
      children: renderI18nText("proto.interaction_list.variant_interactions")
    })
  });
  let p = useLabConfiguration(labConfigurations.useGrid);
  return jsxs(Fragment, {
    children: [r && jsx(dD.Provider, {
      value: {
        useGrid: p
      },
      children: jsx(h6, {
        addProperty: e.onAddProperty,
        boldHeaderRow: e.interactionGroups.length >= 1 || e.inheritedInternalInteractionGroups.length >= 1,
        currentSelectedProperty: e.currentSelectedProperty,
        dispatch: e.dispatch,
        headerAccessory: e.headerAccessory,
        hideAddButton: !e.isValidPrototypingSourceSelected,
        onChange: t => e.onChange(t, _$$J2.NORMAL),
        onDeleteProperty: t => e.onDeleteProperty(t, _$$J2.NORMAL),
        onResetInteractions: scopeAwareFunction.user("reset-instance-interactions", () => Fullscreen.resetSymbolOverrides(SymbolOverrideType.PROTOTYPE_INTERACTIONS)),
        openFile: e.openFile,
        pickerShown: null,
        propertyList: e.interactionGroups,
        recordingKey: "prototypeInteractionList",
        renderProperty: (n, i, r, a, l, s, d, c, u) => jsx(eA, {
          autoOpenVariablePicker: t,
          category: _$$J2.NORMAL,
          dispatch: e.dispatch,
          hasFocus: l,
          inSites: e.inSites,
          index: i,
          interactionGroup: n,
          interactionGroups: e.interactionGroups,
          isDragging: a,
          onMouseDown: d,
          onMouseMove: c,
          onMouseUp: u,
          recordingKey: generateRecordingKey("prototypeInteractionList", i),
          selected: r,
          singletonRow: e.interactionGroups.length <= 1
        }, p ? void 0 : i),
        selectedPropertyType: NodePropertyCategory.PROTOTYPE_INTERACTION,
        shouldIgnoreKeyboardEvents: e.shouldIgnoreKeyboardEvents,
        showResetInteractionsButton: e.showResetInteractionsButton,
        stylePickerShown: {
          isShown: !1
        },
        title: e.inSites ? "" : getI18nString("proto.title_interactions"),
        toggleScrollBehaviorPicker: e.toggleScrollBehaviorPicker
      })
    }), d && c, d && jsx(dD.Provider, {
      value: {
        useGrid: p
      },
      children: jsx(h6, {
        addProperty: noop,
        currentSelectedProperty: e.currentSelectedProperty,
        dispatch: e.dispatch,
        hideAddButton: !0,
        onChange: t => e.onChange(t, _$$J2.INHERITED_INTERNAL),
        onDeleteProperty: t => e.onDeleteProperty(t, _$$J2.INHERITED_INTERNAL),
        openFile: e.openFile,
        pickerShown: null,
        propertyList: e.inheritedInternalInteractionGroups,
        recordingKey: generateRecordingKey("prototypeInheritedInternalInteractionList"),
        renderProperty: (n, i, r, a, l, s, d, c, u) => jsx(eA, {
          autoOpenVariablePicker: t,
          category: _$$J2.INHERITED_INTERNAL,
          dispatch: e.dispatch,
          hasFocus: l,
          inSites: e.inSites,
          index: i,
          interactionGroup: n,
          interactionGroups: e.inheritedInternalInteractionGroups,
          isDragging: a,
          onMouseDown: d,
          onMouseMove: c,
          onMouseUp: u,
          recordingKey: generateRecordingKey("prototypeInheritedInternalInteractionList", i),
          selected: r,
          singletonRow: e.inheritedInternalInteractionGroups.length <= 1
        }, p ? void 0 : i),
        selectedPropertyType: NodePropertyCategory.PROTOTYPE_INHERITED_INTERNAL_INTERACTION,
        shouldIgnoreKeyboardEvents: e.shouldIgnoreKeyboardEvents,
        stylePickerShown: {
          isShown: !1
        },
        title: "",
        toggleScrollBehaviorPicker: e.toggleScrollBehaviorPicker
      })
    })]
  });
}
function eA({
  interactionGroups: e,
  interactionGroup: t,
  index: n,
  hasFocus: a,
  isDragging: l,
  selected: g,
  singletonRow: _,
  onMouseDown: v,
  onMouseMove: T,
  onMouseUp: O,
  dispatch: D,
  category: V,
  recordingKey: B,
  inSites: U
}) {
  let {
    getNodeName
  } = useContext(q);
  let G = useSelector(DV);
  let Y = a2();
  let X = useSelector(ew);
  let Q = X?.id === o$ ? X : null;
  let et = useSelector(selectSceneGraph);
  let [en, eo] = useState(!1);
  let ei = useAtomWithSubscription(NE) ? ej : eE;
  let er = useContext(qd);
  let ea = function (e, t) {
    let n = new Set(t.map(e => {
      let t = _$$s(e);
      return t ? sessionLocalIDToString(t.interactionID) : "";
    }).filter(e => "" !== e));
    for (let t of e.interactions) {
      let e = sessionLocalIDToString(t.id);
      if (e && n.has(e)) return !0;
    }
    return !1;
  }(t, G);
  let [el, es] = useAtomValueAndSetter(_$$j);
  let ed = useAtomWithSubscription(_$$u2);
  let {
    useGrid
  } = useContext(dD);
  let ep = useRef(null);
  let eu = useRef(null);
  let eh = useCallback(() => {
    let e = U ? eu.current : ep.current;
    $$eU3(calculatePickerPositionLeft(e), !1);
  }, [U]);
  let eg = useCallback(() => {
    Fullscreen.setSelectedInteractions([]);
    D(hidePickerThunk());
    fullscreenValue.deselectProperty();
  }, [D]);
  let eI = n => {
    if (!ep || !eu) return;
    U && ed?.focus();
    let o = eB(t);
    let i = n.metaKey || n.ctrlKey;
    if (i) ea ? o = G.filter(e => !o.includes(e)) : o.push(...G);else if (!U && n.shiftKey) {
      var r;
      let n;
      let i;
      r = t.key;
      let a = e.findIndex(({
        key: e
      }) => e === r);
      if (-1 === a) return;
      let l = function (e, t) {
        let n = 1 / 0;
        let o = e;
        for (let i of t) {
          let t = Math.abs(e - i);
          t < n && (o = i, n = t);
        }
        return o;
      }(a, function (e, t) {
        let n = new Set();
        let o = new Set(t);
        for (let t = 0; t < e.length; t++) eB(e[t]).some(e => o.has(e)) && n.add(t);
        return n;
      }(e, G));
      n = a;
      i = l;
      a > l && (n = l, i = a);
      let s = e.slice(n, i + 1);
      for (let e of (o = [...G], s)) o.push(...eB(e));
    }
    if (Fullscreen.setSelectedInteractions(o), fullscreenValue.updateAppModel({
      currentSelectedProperty: {
        type: V === _$$J2.NORMAL ? NodePropertyCategory.PROTOTYPE_INTERACTION : NodePropertyCategory.PROTOTYPE_INHERITED_INTERNAL_INTERACTION,
        indices: []
      }
    }), o.length) {
      let e = Q && Q.shouldPin;
      if (U) {
        let t = el.length + o.length > 1;
        i ? (i || t) && D(hidePickerThunk()) : (es([]), e || eh());
      } else e || eh();
    } else eg();
  };
  let eN = useSelector(selectAreAllSymbolsOrInstances);
  let eT = !1;
  let eS = null;
  let eA = null;
  for (let e of t.interactions) if (!eS && e.actions && e.actions.length > 0) {
    eS = e.actions[0];
    eA = e;
  } else if (eV(eS, getNodeName, !0, eN) != eV((e.actions ?? [])[0], getNodeName, !0, eN)) {
    eT = !0;
    break;
  }
  let ek = () => {
    let e = $$eH2(t.interactions);
    Fullscreen.hoverInteractions(e);
    eo(!0);
  };
  let eP = () => {
    Fullscreen.hoverInteractions([]);
    eo(!1);
  };
  let eO = new js(!0, eN);
  let eL = mj(eS);
  let eD = eA?.actions?.length ?? 0;
  let eR = eD > 1 ? getI18nString("sites.panel.interaction_summary", {
    numActions: eD
  }) : eT || !eS || "NONE" === eL ? void 0 : eO.format(eL);
  let {
    tooltipText,
    showTooltip
  } = QY(eR);
  let e$ = e => {
    e.stopPropagation();
  };
  let ez = e => {
    e.stopPropagation();
    let n = $$eH2(t.interactions);
    permissionScopeHandler.user("delete-prototype-interactions", () => Fullscreen.deleteInteractions(n));
    fullscreenValue.deselectProperty();
    fullscreenValue.commit();
  };
  let eW = !1;
  let eZ = !1;
  if (V === _$$J2.NORMAL) {
    for (let e of t.interactions) {
      if (!e.actions || 0 === e.actions.length) continue;
      let t = e.actions[0];
      if (!t || "SWAP_STATE" !== t.navigationType) continue;
      let n = "";
      if (t.transitionNodeID) {
        let e = et.get(sessionLocalIDToString(t.transitionNodeID));
        if (e) {
          if (e.isState) n = e.parentGuid || "";else {
            eW = !0;
            break;
          }
        }
      }
      let o = Fullscreen.getContainingStateGroupOrSelf(sessionLocalIDToString(e.sourceNodeID ?? defaultSessionLocalID)) || "";
      if ("" === o || "" !== n && o !== n) {
        eW = !0;
        break;
      }
    }
    let n = ["ON_CLICK", "MOUSE_DOWN", "MOUSE_UP"].includes(t.event.interactionType ?? "");
    let o = e.some(e => "ON_HOVER" === e.event.interactionType);
    eZ = n && o;
  }
  eW = V !== _$$J2.INHERITED_INTERNAL && eW;
  let eG = function (e, t, n) {
    if (e !== _$$J2.INHERITED_INTERNAL) return null;
    let o = n.find(e => e.key === t.key && e.interactions.length === t.interactions.length && 1 === t.interactions.length && function (e, t) {
      let n = void 0 !== e.actions && e.actions.length >= 1;
      let o = void 0 !== t.actions && t.actions.length >= 1;
      if (!n || !o) return !1;
      let i = e.actions.every(e => "UPDATE_MEDIA_RUNTIME" === e.connectionType);
      let r = e.actions.every(e => isValidSessionLocalID(e.transitionNodeID));
      var a = !1;
      for (let e of t.actions) if ("INTERNAL_NODE" === e.connectionType && "SWAP_STATE" === e.navigationType) {
        a = !0;
        break;
      }
      return i && r && a;
    }(e.interactions[0], t.interactions[0]));
    return o?.interactions[0] ?? null;
  }(V, t, e);
  let eY = useLatestRef(eG);
  let eq = trackFileEventWithStore();
  if (useEffect(() => {
    null === eY && eG && eq("prototype_interaction_conflict_override_created", {
      interaction_type: t.interactions[0].event?.interactionType,
      action_type: eG.event?.interactionType
    });
  }), t.event.interactionType && er && er !== hD(t.event.interactionType) || "mouse" === er && zL(t.interactions) || U && getFeatureFlags().sts_links_v2 && pL(t.interactions)) return null;
  let eX = V === _$$J2.INHERITED_INTERNAL && Y.some(e => e.key === t.key) && !eG;
  let eJ = g && a;
  let eQ = ea && !g;
  let e0 = jsx(_$$Z, {});
  let e1 = eW || eZ || eX;
  let e2 = eW ? getI18nString("proto.prototype_panel.this_interaction_must_swap_from_a_variant_to_another_variant_within_the_same_component_set_tooltip") : eZ ? getI18nString("proto.prototype_panel.prototype_multiple_interactions_mouse_and_hover_tooltip") : eX ? getI18nString("proto.prototype_panel.this_interaction_will_not_be_triggered_as_interactions_on_instances_are_triggered_before_inherited_internal_interactions_tooltip") : "";
  let e3 = jsx(Y9, {
    ref: eu,
    "data-testid": `prototypeInteractionItem-${n}`,
    hideGrabber: !0,
    onMouseEnter: ek,
    onMouseLeave: eP,
    onClick: eI,
    recordingKey: generateRecordingKey(B, "draggableRow"),
    selected: ea,
    "aria-selected": ea,
    children: jsx(s2, {
      label: null,
      leftIcon: jsx(DialogTriggerButton, {
        "aria-expanded": eQ && !!Q,
        recordingKey: generateRecordingKey(B, "interactionIcon"),
        htmlAttributes: {
          onMouseDown: e$,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": e1 ? e2 : eM(t.event, ei, !!U)
        },
        "aria-label": e1 ? e2 : eM(t.event, ei, !!U),
        children: e1 ? e0 : e7(t.event.interactionType)
      }),
      input: jsxs(RecordableDiv, {
        onMouseDown: e$,
        recordingKey: generateRecordingKey(B, "interactionText"),
        className: "prototype_interaction_list--ellipsis--ro1zN ellipsis--ellipsis--Tjyfa",
        onMouseEnter: showTooltip,
        children: [eM(t.event, ei, !!U), eR && jsxs("span", {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": tooltipText,
          className: "prototype_interaction_list--summaryText--hGpp4",
          children: ["\xa0\xb7\xa0", eR]
        })]
      }),
      rightIcon: jsx("div", {
        hidden: !en,
        children: jsx(IconButton, {
          onClick: ez,
          "aria-label": getI18nString("proto.prototype_panel.remove_interaction_tooltip"),
          recordingKey: generateRecordingKey(B, "removeButton"),
          htmlAttributes: {
            onMouseDown: e$
          },
          children: jsx(_$$O, {})
        })
      })
    })
  });
  if (U) return e3;
  let e5 = jsxs(PopupButtonPrimitive, {
    className: b()({
      "prototype_interaction_list--interactionButton--q-58Q": !0,
      "prototype_interaction_list--interactionButtonSelected--8YX9A": eJ,
      "prototype_interaction_list--interactionButtonSelectedSecondary--Nx73L": eQ
    }),
    onClick: eI,
    htmlAttributes: {
      onKeyDown: e => {
        useGrid && ("Enter" !== e.key && (" " !== e.key || e.shiftKey) || eI(e));
      },
      onMouseDown: e$
    },
    "aria-haspopup": "dialog",
    "aria-expanded": !!Q,
    recordingKey: B,
    children: [e1 && jsx(SvgComponent, {
      className: "prototype_interaction_list--warningIcon--Mgr5O",
      svg: _$$A,
      "data-tooltip-type": KindEnum.SPECIAL,
      "data-tooltip": ey,
      "data-tooltip-text": e2
    }), jsx("div", {
      className: e1 ? "prototype_interaction_list--interactionNameShort--5UMLL prototype_interaction_list--interactionName--zQsSL" : "prototype_interaction_list--interactionName--zQsSL",
      children: eM(t.event, ei, !!U)
    }), av(mj(eS)), jsx("div", {
      className: "prototype_interaction_list--targetText--UMXyE",
      dir: "auto",
      children: eT ? getI18nString("proto.variant_actions.mixed") : V === _$$J2.INHERITED_INTERNAL ? getI18nString("proto.variant_actions.change_to") : eV(eS, getNodeName, !0, eN)
    })]
  });
  let e6 = jsx("span", {
    className: "prototype_interaction_list--removeButton--g6aiQ",
    children: jsx(IconButton, {
      onClick: ez,
      "aria-label": getI18nString("proto.prototype_panel.remove_interaction_tooltip"),
      recordingKey: generateRecordingKey(B, "removeButton"),
      htmlAttributes: {
        onMouseDown: e$
      },
      children: jsx(_$$O, {})
    })
  });
  return useGrid ? jsx(lt, {
    ref: ep,
    htmlAttributes: {
      "data-testid": `prototypeInteractionItem-${n}`
    },
    input: e5,
    icon: e6,
    selected: g || ea,
    hasFocus: eJ,
    singletonRow: _,
    recordingKey: generateRecordingKey(B, "draggableRow")
  }) : jsx("div", {
    children: jsxs(_$$e, {
      ref: ep,
      className: "prototype_interaction_list--interactionListRow---i0Rg ui3_rows--ui3OneInputOneIconRow--SMoQ9 ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu",
      "data-testid": `prototypeInteractionItem-${n}`,
      dragging: l,
      onMouseDown: v,
      onMouseEnter: ek,
      onMouseLeave: eP,
      onMouseMove: T,
      onMouseUp: O,
      recordingKey: generateRecordingKey(B, "draggableRow"),
      selected: eJ,
      selectedSecondary: eQ,
      singletonRow: _,
      children: [e5, e6]
    })
  });
}
function ew(e) {
  return e.pickerShown;
}
function ek(e) {
  return e.mirror.appModel.currentSelectedProperty;
}
function eP(e) {
  return e.mirror.selectionProperties.resettableInstanceOverrides;
}
function eO(e) {
  return e.mirror.selectionProperties.isValidPrototypingSourceSelected ?? !0;
}
function eL() {
  let e = useSelector(selectSceneGraphSelection);
  let t = useSelector(selectSceneGraph);
  for (let n of Object.keys(e)) {
    let e = t.get(n);
    if (e && ("INSTANCE" === e.type || e.isInstanceSublayer)) return !0;
  }
  return !1;
}
let eD = ["ON_CLICK", "DRAG", "ON_HOVER", "ON_PRESS", "MOUSE_ENTER", "MOUSE_LEAVE", "MOUSE_DOWN", "MOUSE_UP"];
export function $$eR1(e, t, n) {
  let o = new Set();
  for (let {
    event
  } of e) o.add(event.interactionType);
  for (let e of eD) if (!o.has(e) && (!n || "DRAG" !== e) && ("BACK" !== t || "ON_HOVER" !== e && "ON_PRESS" !== e)) return e;
  return "ON_KEY_DOWN";
}
function eM(e, t, n) {
  let o = t.format(e.interactionType ?? "NONE");
  if ("ON_KEY_DOWN" === e.interactionType && e.keyTrigger && e.keyTrigger.keyCodes) {
    let t = parseKeyCodes(e.keyTrigger.keyCodes);
    let i = getGamepadInputLabel(e.keyTrigger, !0);
    if ("KEYBOARD" === e.keyTrigger.triggerDevice && t) return n ? formatKeyboardShortcut(t) : o + " (" + formatKeyboardShortcut(t) + ")";
    if (i) return n ? i : o + " (" + i + ")";
  }
  return o;
}
function eV(e, t, n, o) {
  let i = new js(n, o);
  if (!e) return i.format("NONE");
  let r = mj(e);
  switch (r) {
    case "NONE":
    case "GO_BACK":
    case "CLOSE_OVERLAY":
    case "SET_VARIABLE":
    case "SET_VARIABLE_MODE":
    case "CONDITIONAL":
      return i.format(r);
    case "OPEN_URL":
      if (null != e.connectionURL) {
        if (isInvalidValue(e.connectionURL)) return getI18nString("fullscreen.mixed");
        return e.connectionURL.replace(/https?:\/\//, "");
      }
      return i.format("NONE");
    case "UPDATE_MEDIA_PLAY":
    case "UPDATE_MEDIA_PAUSE":
    case "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE":
    case "UPDATE_MEDIA_MUTE":
    case "UPDATE_MEDIA_UNMUTE":
    case "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE":
    case "UPDATE_MEDIA_SKIP_FORWARD":
    case "UPDATE_MEDIA_SKIP_BACKWARD":
    case "UPDATE_MEDIA_SKIP_TO":
      return eN.format(e);
  }
  return e.transitionNodeID ? isInvalidValue(e.transitionNodeID) ? getI18nString("fullscreen.mixed") : t(sessionLocalIDToString(e.transitionNodeID)) : i.format("NONE");
}
function eB(e) {
  return e.interactions.filter(e => e.id && e.sourceNodeID).map(e => _$$d2({
    nodeID: e.sourceNodeID,
    interactionID: e.id
  }));
}
export function $$eH2(e) {
  let t = [];
  for (let n of e) {
    let {
      sourceNodeID,
      id
    } = n;
    sourceNodeID && id && t.push(_$$d2({
      nodeID: sourceNodeID,
      interactionID: id
    }));
  }
  return t;
}
export function $$eU3(e, t) {
  fullscreenValue.triggerAction("show-prototype-interaction-edit-modal", {
    args: {
      source: CanvasComponentType.PROPERTIES_PANEL,
      x: e.x,
      y: e.y,
      isBehaviorsOnly: t
    }
  });
}
export const y7 = $$eT0;
export const a1 = $$eR1;
export const wU = $$eH2;
export const dT = $$eU3;