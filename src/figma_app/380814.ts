import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useCallback, useRef, useState, useMemo, useId } from "react";
import { useDispatch } from "../vendor/514228";
import { assertNotNullish } from "../figma_app/465776";
import { isNotNullish } from "../figma_app/95419";
import { bL } from "../905/911410";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { $n } from "../905/521428";
import { K as _$$K } from "../905/443068";
import { bL as _$$bL, DZ, mc, c$ } from "../905/493196";
import { U as _$$U } from "../905/708285";
import { CWU, G6k, HS4, Z_n, rXF } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { WI } from "../905/929949";
import { getFeatureFlags } from "../905/601108";
import { useLocalStorageSync } from "../905/657224";
import y from "../vendor/239910";
import { parsePxNumber } from "../figma_app/783094";
import { h as _$$h } from "../905/207101";
import { Pt, of } from "../figma_app/806412";
import { x1 } from "../905/714362";
import { L as _$$L } from "../905/408237";
import { t as _$$t, tx } from "../905/303541";
import { Y } from "../905/830372";
import { Oe } from "../figma_app/933328";
import { BQ, yp, rW } from "../figma_app/852050";
import { Um } from "../905/848862";
import { kz } from "../figma_app/633080";
import { Ib } from "../905/129884";
import { JU } from "../figma_app/626177";
import { l6, c$ as _$$c$ } from "../905/794875";
import { NF } from "../figma_app/406976";
import { $ } from "../905/483620";
import { Cr } from "../figma_app/260445";
import { y$ } from "../figma_app/152690";
import { Wc } from "../905/782020";
import { gJ } from "../905/923433";
import { dGl } from "../figma_app/27776";
import { hF, _Z, mL, NI } from "../905/306456";
var b = y;
let H = 2 * parsePxNumber(dGl);
export function $$z2({
  initialPosition: e,
  initialValue: t,
  initialWidth: r,
  resolvedType: i,
  onCreateVariable: a,
  onClose: s
}) {
  NF({
    resolvedType: i
  });
  let {
    onCreateVariableSubmit
  } = $$W7({
    onCreateVariable: a,
    onClose: s
  });
  return jsx(K, {
    initialPosition: e,
    initialValue: t,
    initialWidth: r,
    resolvedType: i,
    onCreateVariableSubmit,
    onClose: s,
    recordingKey: "createVariableModal"
  });
}
export function $$W7({
  onCreateVariable: e,
  onClose: t
}) {
  return {
    onCreateVariableSubmit: function ({
      varSetID: r,
      varName: n,
      varValue: i
    }) {
      if (!CWU.isValidVariableName(n, r)) {
        x1("variables", "Attempted to submit variable name that is invalid", {
          varName: n,
          _varSetID: r
        });
        return;
      }
      l7.user("create-variable", () => {
        let t = r ?? CWU.createVariableSet(_$$t("variables.variable_collection"), G6k.AUTOMATIC_FIRST_COLLECTION);
        let a = CWU.createVariable(n, t, i, HS4.VARIABLE_PICKER);
        let o = CWU.getLocalVariableInfo(a);
        assertNotNullish(o, `variable with id ${a} not found`);
        e(kz(o));
      });
      t();
    }
  };
}
function K({
  initialPosition: e,
  initialValue: t,
  initialWidth: r,
  resolvedType: i,
  recordingKey: a,
  onCreateVariableSubmit: s,
  onClose: o
}) {
  return jsx(bL, {
    onClose: o,
    defaultPosition: e,
    width: r,
    recordingKey: a,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: tx("variables.create_modal.title")
        })
      }), jsx(nB, {
        padding: 0,
        children: jsx($$J0, {
          resolvedType: i,
          initialValue: t,
          recordingKey: Pt(a, "createVariableForm"),
          onSubmit: s
        })
      })]
    })
  });
}
export function $$Y4(e) {
  let t = BQ(e.type === Z_n.ALIAS ? e.value : void 0);
  return isNotNullish(t) && "MIXED" !== t ? t : null;
}
export function $$$3({
  label: e,
  labelFor: t,
  labelId: r,
  input: i
}) {
  return jsxs(Y, {
    spacing: 0,
    horizontalAlignItems: "space-between",
    height: "hug-contents",
    padding: {
      horizontal: H
    },
    children: [jsx(JU, {
      htmlFor: t,
      id: r,
      children: e
    }), i]
  });
}
export function $$X6(e) {
  useEffect(() => {
    let t = e.current;
    if (!t) return;
    let r = e => e.preventDefault();
    t.addEventListener("contextmenu", r);
    return () => {
      t.removeEventListener("contextmenu", r);
    };
  }, [e]);
}
export function $$q5(e, t, r) {
  let n = useDispatch();
  return useCallback(async i => {
    if (i) {
      let e = await n(Oe(i));
      r(y$(t, e));
    } else e.type === Z_n.ALIAS && r(WI(t));
  }, [n, e, t, r]);
}
export function $$J0({
  resolvedType: e,
  initialValue: t,
  recordingKey: r,
  onSubmit: a
}) {
  let s = useRef(null);
  $$X6(s);
  let [o, l] = useState({
    varName: "",
    varValue: t ?? WI(e),
    varSetID: null
  });
  let d = useMemo(() => CWU.isValidVariableName(o.varName ?? "", o.varSetID ?? null), [o]);
  let u = of(r, "submit", () => {
    d && a({
      varName: o.varName,
      varValue: o.varValue,
      varSetID: o.varSetID ?? null
    });
  });
  return jsxs("form", {
    onSubmit: u,
    autoComplete: "no",
    children: [jsx(Y, {
      direction: "vertical",
      spacing: 0,
      height: "hug-contents",
      ref: s,
      children: jsx(Y, {
        direction: "vertical",
        spacing: `${parsePxNumber(dGl)}px`,
        padding: {
          top: H
        },
        height: "hug-contents",
        children: jsx($$Z1, {
          recordingKey: r ?? "",
          initialVarValue: t,
          resolvedType: e,
          setVariableFormSubmitData: l,
          variableFormSubmitData: o
        })
      })
    }), jsx(Y, {
      horizontalAlignItems: "end",
      verticalAlignItems: "center",
      padding: 16,
      children: jsx($n, {
        type: "submit",
        disabled: !d,
        recordingKey: Pt(r, "createButton"),
        htmlAttributes: {
          "data-tooltip": _$$t("variables.create_modal.invalid_variable_name"),
          "data-tooltip-type": d ? void 0 : Ib.TEXT
        },
        children: tx("variables.create_modal.create_button")
      })
    })]
  });
}
export function $$Z1({
  recordingKey: e,
  initialVarValue: t,
  resolvedType: r,
  setVariableFormSubmitData: a,
  variableFormSubmitData: s
}) {
  let o = yp();
  let l = useId();
  r === rXF.TEXT_DATA && (r = rXF.STRING);
  let [d, c] = useLocalStorageSync("last-used-variable-set-bottoms-up", o.length > 0 ? o[0].node_id : null);
  let p = useMemo(() => {
    let e = o.find(e => e.node_id === d);
    return !e && o.length > 0 ? o[0] : e;
  }, [o, d]);
  let m = rW(p?.node_id ?? null);
  let f = useRef(null);
  function y(e, t, r) {
    a({
      varName: e,
      varValue: t,
      varSetID: r
    });
  }
  function b(e) {
    y(s.varName, e, s.varSetID);
  }
  _$$h(() => {
    f.current?.select();
    y(Wc(m, r), t ?? WI(r), p?.node_id ?? null);
  });
  let T = $$Y4(s.varValue);
  let v = $$q5(s.varValue, r, b);
  return jsxs(Fragment, {
    children: [o.length > 0 && !!p && jsx($$$3, {
      label: tx("variables.create_modal.collection_label"),
      labelFor: "variable-create-modal-variable-set-select",
      labelId: l,
      input: jsx("div", {
        className: hF,
        children: jsx(Q, {
          ariaLabelledBy: l,
          selectedVariableSetID: p.node_id,
          variableSets: o,
          onChange: e => {
            c(e);
            y(s.varName, s.varValue, e);
          }
        })
      })
    }), jsx($$$3, {
      label: tx("variables.create_modal.name_label"),
      input: jsx(_$$L, {
        className: _Z,
        name: "variableName",
        value: s.varName,
        onChange: e => {
          y(e.target.value, s.varValue, s.varSetID);
        },
        ref: f,
        recordingKey: Pt(e, "variableNameInput"),
        delay: 50,
        "data-1p-ignore": !0,
        autoFocus: !0
      })
    }), jsx($$$3, {
      label: tx("variables.create_modal.value_label"),
      input: jsx("div", {
        className: hF,
        children: jsxs(Cr, {
          resolvedType: r,
          variableValue: s.varValue,
          onVariableValueChange: e => b(e),
          onVariableSelected: v,
          children: [jsx(gJ, {
            variableValue: s.varValue,
            contextType: $.FORM,
            onChange: e => b(e),
            recordingKey: Pt(e, "variableValueInput")
          }), T && jsx(_$$K, {
            type: "button",
            "aria-label": _$$t("variables.authoring_modal.table.detach_alias"),
            onClick: () => b(T),
            recordingKey: Pt(e, "detachVariableButton"),
            htmlAttributes: {
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": _$$t("variables.authoring_modal.table.detach_alias")
            },
            children: jsx(_$$U, {})
          })]
        })
      })
    })]
  });
}
function Q({
  selectedVariableSetID: e,
  variableSets: t,
  onChange: r,
  ariaLabelledBy: i
}) {
  return getFeatureFlags().ce_tv_fpl_select ? jsx(et, {
    selectedVariableSetID: e,
    variableSets: t,
    onChange: r,
    ariaLabelledBy: i
  }) : jsx(ee, {
    selectedVariableSetID: e,
    variableSets: t,
    onChange: r,
    ariaLabelledBy: i
  });
}
function ee({
  selectedVariableSetID: e,
  variableSets: t,
  onChange: r,
  ariaLabelledBy: s
}) {
  let o = useDispatch();
  let l = Um();
  let d = useMemo(() => b()(t, e => e.node_id), [t]);
  return jsx(l6, {
    ariaLabelledBy: s,
    id: "variable-create-modal-variable-set-select",
    property: d[e],
    formatter: {
      format: e => e?.name ?? ""
    },
    dispatch: o,
    chevronClassName: mL,
    inputClassName: NI,
    dropdownShown: l,
    onChange: e => r(e.node_id),
    children: t.map(function (e) {
      return jsx(_$$c$, {
        value: e
      }, e.node_id);
    })
  });
}
function et({
  selectedVariableSetID: e,
  variableSets: t,
  onChange: r,
  ariaLabelledBy: a
}) {
  let s = useCallback(e => {
    e && r(e);
  }, [r]);
  let o = useMemo(() => b()(t, e => e?.node_id), [t])[e];
  return jsxs(_$$bL, {
    onChange: s,
    value: o?.node_id,
    children: [jsx(DZ, {
      id: "variable-create-modal-variable-set-select",
      "aria-labelledby": a,
      width: "fill",
      children: o?.name
    }), jsx(mc, {
      children: t.map(e => jsx(c$, {
        value: e.node_id,
        children: e.name
      }, e.node_id))
    })]
  });
}
export const CreateVariableForm = $$J0;
export const CreateVariableFormInput = $$Z1;
export const VariableCreateModalRoot_UNSAFE = $$z2;
export const VariableFormRow = $$$3;
export const useDetachedVariableValue = $$Y4;
export const useHandleVariableSelected = $$q5;
export const useHideContextMenu = $$X6;
export const useVariableCreateModalActions = $$W7;