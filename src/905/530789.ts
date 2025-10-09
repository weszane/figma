import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { ButtonPrimitive } from "../905/632989";
import { x } from "../905/587214";
import { permissionScopeHandler } from "../905/189185";
import { supportedResolvedTypes } from "../905/929949";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { c$ } from "../figma_app/236327";
import { getI18nString } from "../905/303541";
import { getLocalVariablesForSet } from "../figma_app/852050";
import { useDropdown } from "../905/848862";
import { ConnectedPointingDropdown } from "../905/504727";
import { i as _$$i } from "../905/415810";
import { getVariableTypeInfo } from "../905/604606";
import { getGroupPath, insertVariableAtPosition } from "../905/782020";
import { ay } from "../905/886545";
import { ZS, Fs } from "../905/24780";
let $$v2 = "variables-modal-create-variable";
let I = forwardRef((e, t) => jsxs(ButtonPrimitive, {
  ...e,
  className: ZS,
  ref: t,
  children: [jsx(x, {}), jsx("span", {
    children: getI18nString("variables.authoring_modal.table.create_variable")
  })]
}));
export function $$E0(e) {
  let {
    showing,
    toggle,
    hide
  } = useDropdown(e.id);
  let s = useRef(null);
  let o = useCallback(() => {
    toggle();
  }, [toggle]);
  let l = getLocalVariablesForSet(e.variableSetID);
  let d = null;
  if (l.length > 0) {
    let t = e.selectedVariableIDs[e.selectedVariableIDs.length - 1];
    let i = l.findIndex(e => e.node_id === t);
    i >= 0 && (d = [t, l[i + 1]?.node_id ?? ""]);
  }
  let u = e.buttonComponent || I;
  return jsxs(Fragment, {
    children: [jsx(u, {
      ref: s,
      onClick: o,
      recordingKey: generateRecordingKey(e.recordingKey, "createVariableButton"),
      "aria-label": getI18nString("variables.authoring_modal.create_variable_button_label"),
      "aria-controls": e.id,
      "aria-expanded": showing
    }), showing && s.current && jsx($$x1, {
      groups: e.groups,
      id: e.id,
      insertVariableBetweenIDs: d,
      onClose: hide,
      recordingKey: e.recordingKey,
      selectedGroup: e.selectedGroup,
      setRenamingVariableID: e.setRenamingVariableID,
      setSelectedVariableID: e.setSelectedVariableID,
      targetRect: s.current.getBoundingClientRect(),
      variableSetID: e.variableSetID
    })]
  });
}
export function $$x1({
  id: e,
  targetRect: t,
  variableSetID: i,
  selectedGroup: r,
  groups: s,
  recordingKey: o,
  setRenamingVariableID: l,
  onClose: c,
  setSelectedVariableID: u,
  insertVariableBetweenIDs: p
}) {
  return createPortal(jsx(ConnectedPointingDropdown, {
    id: e,
    arrowOffsetFromRectLeft: 15,
    lean: "right",
    leanPadding: 2,
    minWidth: 130,
    targetRect: t,
    children: supportedResolvedTypes.map(e => jsx(S, {
      groupPrefix: r ?? "",
      groups: s,
      insertVariableBetweenIDs: p,
      onClose: c,
      recordingKey: o,
      resolvedType: e,
      setRenamingVariableID: l,
      setSelectedVariableID: u,
      variableSetID: i ?? null
    }, e))
  }), document.body);
}
function S(e) {
  let t = getLocalVariablesForSet(e.variableSetID);
  let i = ay();
  let a = getVariableTypeInfo(e.resolvedType);
  let s = useHandleMouseEvent(generateRecordingKey(e.recordingKey, "createVariableOption", a.name.toLowerCase()), "click", useCallback(() => {
    let n = e.groupPrefix;
    if (e.insertVariableBetweenIDs?.[0]) {
      let i = t.find(t => t.node_id === e.insertVariableBetweenIDs[0]);
      let r = getGroupPath(i?.name ?? "");
      r && (n = r);
    }
    let r = e.groups.map(e => e.name).includes(e.groupPrefix) ? n : void 0;
    let a = permissionScopeHandler.user("create-variable", () => i(e.variableSetID, t, e.resolvedType, r, void 0));
    e.setSelectedVariableID && e.setSelectedVariableID(a ? [a] : []);
    e.setRenamingVariableID?.(a);
    e.onClose();
    a && permissionScopeHandler.system("reorder-new-variable", () => {
      insertVariableAtPosition(a, e.insertVariableBetweenIDs, r ?? n, e.groups);
    });
  }, [i, e, t]));
  return jsx(c$, {
    onClick: s,
    children: jsxs("div", {
      className: Fs,
      "data-testid": `create-variable-${e.resolvedType}`,
      children: [jsx(_$$i, {
        type: e.resolvedType,
        showTooltip: !1
      }), a.name]
    })
  });
}
export const fr = $$E0;
export const mw = $$x1;
export const oU = $$v2;