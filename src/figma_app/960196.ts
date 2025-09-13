import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useContext, useMemo, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { K } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { VariableDataType, VariableResolvedDataType, VariablesBindings } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { selectWithShallowEqual } from "../905/103090";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString, renderI18nText } from "../905/303541";
import { wv } from "../figma_app/328825";
import { h as _$$h } from "../905/78925";
import { B } from "../905/330741";
import { fullscreenValue } from "../figma_app/455680";
import { bL, u as _$$u } from "../figma_app/852050";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { cn } from "../905/959568";
import { Nw, y7 } from "../figma_app/505098";
import { k } from "../905/689791";
import { l as _$$l } from "../905/331642";
import { i as _$$i } from "../905/649519";
import { d9 } from "../905/579068";
import { Rp, $3 } from "../figma_app/149989";
import { x as _$$x } from "../905/244860";
import { Kq, P3, IQ } from "../figma_app/462397";
import { I as _$$I } from "../905/70590";
import { yg, iG } from "../figma_app/481279";
import { ns, d2 } from "../figma_app/225126";
import { rv, Fs } from "../figma_app/743107";
function P({
  disabledVariableIds: e,
  boundVariable: t,
  resolvedType: r,
  requestedTypes: a,
  variableFilters: l,
  fields: d,
  pickerType: _,
  variableScopes: h,
  recordingKey: m,
  onVariableSelected: g,
  onComponentPropSelected: f,
  onClose: E,
  openCreationModal: b
}) {
  let {
    VariableAndComponentPropCreateModalRoot
  } = useContext(_$$l) ?? {};
  let v = selectWithShallowEqual(e => Nw(e) ?? y7(e));
  let A = useMemo(() => Kq(!!VariableAndComponentPropCreateModalRoot, !!v, d), [VariableAndComponentPropCreateModalRoot, v, d]);
  function N() {
    b?.();
  }
  return jsx(Rp, {
    disabledVariableIds: e,
    onClose: E,
    onComponentPropSelected: f,
    onVariableSelected: g,
    pickerType: _,
    recordingKey: m,
    requestedTypes: a,
    resolvedType: r,
    selectedItem: t,
    setControlRightButtons: function () {
      if (void 0 === r || "fields" !== _ && "prop-assignment" !== _) return;
      let e = A ? getI18nString("variables.binding_ui.create_variable_property_button_tooltip") : getI18nString("variables.binding_ui.create_variable_button_tooltip");
      return jsx(K, {
        "aria-label": e,
        recordingKey: generateRecordingKey(m, "createVariable"),
        onClick: N,
        htmlAttributes: {
          "data-tooltip": e,
          "data-tooltip-type": KindEnum.TEXT
        },
        children: jsx(_$$e, {})
      });
    }(),
    variableFilters: l,
    variableScopes: h
  }, "Libraries");
}
export function $$D4({
  fields: e,
  resolvedType: t,
  initialPosition: r,
  onVariableSelected: a,
  currentFieldValue: s,
  requestedTypes: o,
  variableFilters: l,
  onComponentPropSelected: d,
  onClose: c
}) {
  let [u, _] = useState(!1);
  let h = useRef(null);
  let m = h.current ? cn(h.current, _$$i) : void 0;
  let {
    boundVariableId,
    boundVariable
  } = P3(e ?? []);
  let E = useMemo(() => IQ(t, boundVariable, s, boundVariableId), [t, boundVariable, s, boundVariableId]);
  let y = useMemo(() => {
    if (yg(t, o)) return iG(e);
  }, [o, e, t]);
  let T = rv(s);
  let S = Fs(ns(e), "PROPS_PANEL", t, T.currentFloat, T.currentColor);
  let x = {
    tabs: [{
      name: "library",
      displayText: renderI18nText("variables.binding_ui.variable_library_tab_name"),
      content: jsx(P, {
        boundVariable,
        disabledVariableIds: new Set(),
        fields: e,
        onClose: c,
        onComponentPropSelected: d,
        onVariableSelected: a,
        openCreationModal: () => _(!0),
        pickerType: "fields",
        recordingKey: "variableBindingsDropdown",
        requestedTypes: o,
        resolvedType: t,
        variableFilters: l,
        variableScopes: y
      })
    }]
  };
  return jsxs(d2.Provider, {
    value: S,
    children: [jsx(k, {
      tabProps: x,
      onClose: c,
      initialPosition: r,
      initialWidth: d9,
      recordingKey: "variableBindingsDropdown",
      ref: h
    }), u && void 0 !== t && m && jsx(_$$x, {
      resolvedType: t,
      creationModalInitialPosition: m,
      newVariableInitialValue: E,
      onClose: () => _(!1),
      onVariableSelected: a,
      fields: e
    })]
  });
}
export function $$k6() {
  let e = useDispatch();
  let t = useCallback(() => {
    e(B());
  }, [e]);
  let r = useSelector(e => e.variablePickerShown);
  return r.isShown && "variable-picker-fields" === r.type ? jsx($$D4, {
    ...r,
    onClose: t
  }) : null;
}
function M({
  fields: e,
  resolvedType: t,
  initialPosition: r,
  onVariableSelected: s,
  currentFieldValue: o,
  requestedTypes: l,
  variableFilters: d,
  onComponentPropSelected: c,
  cmsFieldTypes: u
}) {
  let g = useDispatch();
  let f = useCallback(() => {
    g(B());
  }, [g]);
  let [E, y] = useState(!1);
  let T = useRef(null);
  let S = T.current ? cn(T.current, _$$i) : void 0;
  let {
    boundVariableId,
    boundVariable
  } = P3(e ?? []);
  let R = useMemo(() => IQ(t, boundVariable, o, boundVariableId), [t, boundVariable, o, boundVariableId]);
  let L = useMemo(() => {
    if (yg(t, l)) return iG(e);
  }, [l, e, t]);
  let D = {
    tabs: [{
      name: "library",
      displayText: renderI18nText("variables.binding_ui.variable_library_tab_name"),
      content: jsx(P, {
        boundVariable,
        disabledVariableIds: new Set(),
        fields: e,
        onClose: f,
        onComponentPropSelected: c,
        onVariableSelected: s,
        openCreationModal: () => y(!0),
        pickerType: "fields",
        recordingKey: "variableBindingsDropdown",
        requestedTypes: l,
        resolvedType: t,
        variableFilters: d,
        variableScopes: L
      })
    }]
  };
  e.length > 0 && (D.tabs.push({
    name: "dakota",
    displayText: renderI18nText("variables.binding_ui.variable_dakota_tab_name"),
    content: jsx(_$$h, {
      onClose: f,
      cmsFieldTypes: u
    })
  }), wv(u) || (D.defaultActiveTabId = "dakota"));
  return jsxs(Fragment, {
    children: [jsx(k, {
      tabProps: D,
      onClose: f,
      initialPosition: r,
      initialWidth: d9,
      recordingKey: "variableBindingsDropdown",
      ref: T
    }), E && S && jsx(_$$x, {
      resolvedType: t,
      creationModalInitialPosition: S,
      newVariableInitialValue: R,
      onClose: () => y(!1),
      onVariableSelected: s,
      fields: e
    })]
  });
}
export function $$F0({
  cmsFieldTypes: e
}) {
  let t = useSelector(e => e.variablePickerShown);
  return t.isShown && "variable-picker-fields" === t.type ? jsx(M, {
    ...t,
    cmsFieldTypes: e
  }) : null;
}
function j({
  variableID: e,
  modeID: t,
  resolvedType: r,
  initialPosition: s,
  initialView: o,
  onVariableSelected: c,
  variableFilters: _
}) {
  let h = useDispatch();
  let y = bL(e, t);
  let b = _$$u(y?.type === VariableDataType.ALIAS ? y?.value : void 0);
  let T = useCallback(() => {
    h(B());
  }, [h]);
  let S = useCallback((r, n) => {
    let i = {
      type: VariableDataType.COLOR,
      resolvedType: VariableResolvedDataType.COLOR,
      value: r
    };
    permissionScopeHandler.user("set-color-variable-value", () => VariablesBindings.setVariableValueForMode(e, t, i)) && n === yesNoTrackingEnum.YES && fullscreenValue.triggerAction("commit");
  }, [e, t]);
  if (y?.resolvedType === VariableResolvedDataType.COLOR && y?.type !== VariableDataType.NODE_FIELD_ALIAS) return jsxs(Fragment, {
    children: [jsx(_$$I, {
      disabledVariableIds: new Set([e]),
      boundVariable: b,
      variableValue: y,
      initialPosition: s,
      initialView: o,
      onColorChange: S,
      onVariableSelected: c,
      onClose: T,
      recordingKey: "variableBindingsDropdown"
    }), jsx($3, {
      recordingKey: generateRecordingKey("variableBindingsDropdown", "closer"),
      onClose: T
    })]
  });
  let v = {
    tabs: [{
      name: "library",
      displayText: renderI18nText("variables.binding_ui.variable_library_tab_name"),
      content: jsx(P, {
        disabledVariableIds: new Set([e]),
        boundVariable: b,
        resolvedType: r,
        variableFilters: _,
        onVariableSelected: c,
        onClose: T,
        pickerType: "alias",
        recordingKey: "variableBindingsDropdown"
      })
    }]
  };
  return jsx(k, {
    tabProps: v,
    onClose: T,
    initialPosition: s,
    initialWidth: d9,
    recordingKey: "variableBindingsDropdown"
  });
}
export function $$U2() {
  let e = useSelector(e => e.variablePickerShown);
  return e.isShown && "variable-picker-alias" === e.type ? jsx(j, {
    ...e
  }) : null;
}
export function $$B1({
  resolvedType: e,
  requestedTypes: t,
  initialPosition: r,
  variableID: a,
  onVariableSelected: s,
  onComponentPropSelected: o,
  onClose: l,
  variableScopes: d
}) {
  let c = _$$u(a);
  let [u, _] = useState(!1);
  let h = useRef(null);
  let m = h.current ? cn(h.current, _$$i) : void 0;
  let g = {
    tabs: [{
      name: "library",
      displayText: renderI18nText("variables.binding_ui.variable_library_tab_name"),
      content: jsx(P, {
        boundVariable: c,
        disabledVariableIds: new Set(),
        onClose: l,
        onComponentPropSelected: o,
        onVariableSelected: s,
        openCreationModal: () => _(!0),
        pickerType: o ? "prop-assignment" : "fields",
        recordingKey: "variableBindingsDropdown",
        requestedTypes: t,
        resolvedType: e,
        variableScopes: d
      })
    }]
  };
  return jsxs(Fragment, {
    children: [jsx(k, {
      tabProps: g,
      onClose: l,
      initialPosition: r,
      initialWidth: d9,
      recordingKey: "variableBindingsDropdown",
      ref: h
    }), u && m && jsx(_$$x, {
      resolvedType: e,
      creationModalInitialPosition: m,
      onClose: () => _(!1),
      onVariableSelected: s
    })]
  });
}
export function $$G5({
  variableScope: e
}) {
  let t = useDispatch();
  let r = useCallback(() => {
    t(B());
  }, [t]);
  let s = useSelector(e => e.variablePickerShown);
  return s.isShown && "variable-picker-controlled" === s.type ? jsx($$B1, {
    ...s,
    onClose: r,
    variableScopes: e ? new Set([e]) : void 0
  }) : null;
}
export function $$V3({
  resolvedType: e,
  onVariableSelected: t,
  onClose: r,
  initialPosition: a,
  pickerType: s
}) {
  let [o, l] = useState(!1);
  let d = useRef(null);
  let c = d.current ? cn(d.current, _$$i) : void 0;
  let u = useMemo(() => IQ(e, null), [e]);
  let _ = {
    tabs: [{
      name: "library",
      displayText: renderI18nText("variables.binding_ui.variable_library_tab_name"),
      content: jsx(P, {
        disabledVariableIds: new Set(),
        boundVariable: null,
        resolvedType: e,
        onVariableSelected: t,
        onClose: r,
        pickerType: s,
        recordingKey: "variableBindingsDropdown",
        openCreationModal: () => l(!0)
      })
    }]
  };
  return jsxs(Fragment, {
    children: [jsx(k, {
      tabProps: _,
      onClose: r,
      initialPosition: a,
      initialWidth: d9,
      recordingKey: "variableBindingsDropdown",
      ref: d
    }), o && void 0 !== e && c && jsx(_$$x, {
      resolvedType: e,
      creationModalInitialPosition: c,
      newVariableInitialValue: u,
      onClose: () => l(!1),
      onVariableSelected: t
    })]
  });
}
export const G6 = $$F0;
export const ND = $$B1;
export const Q8 = $$U2;
export const Ti = $$V3;
export const jp = $$D4;
export const rf = $$G5;
export const tZ = $$k6;