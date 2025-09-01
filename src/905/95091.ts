import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { K } from "../905/443068";
import { U } from "../905/708285";
import { dI } from "../905/805904";
import { getFeatureFlags } from "../905/601108";
import { colorToHex } from "../905/436288";
import { Pt } from "../figma_app/806412";
import { B } from "../905/714743";
import { t as _$$t } from "../905/303541";
import { X } from "../905/190511";
import { sD } from "../905/937198";
import { dG } from "../figma_app/753501";
import { u as _$$u } from "../figma_app/852050";
import { Ib } from "../905/129884";
import { J } from "../905/225412";
import { eF } from "../figma_app/394327";
import { s as _$$s } from "../figma_app/268276";
import { zm, Bx } from "../figma_app/228217";
import { A as _$$A } from "../1617/991344";
export function $$I2({
  variableId: e,
  ...t
}) {
  let i = _$$u(dI(e));
  let r = i?.name ?? "";
  let a = i?.description;
  let o = !!i && eF(i);
  let d = t.paint;
  let c = d.color && d.opacity ? `${colorToHex(d.color)}, ${(100 * d.opacity).toLocaleString("en", {
    maximumFractionDigits: 2
  })}%` : void 0;
  return jsx(S, {
    ...t,
    variableName: r,
    variableDescription: a,
    variableValue: c,
    isVariableDeleted: o
  });
}
export function $$E0({
  boundPaintVariable: e,
  ...t
}) {
  let i = e?.value?.cmsAliasValue?.fieldId;
  let r = e?.value?.cmsAliasValue?.collectionId;
  let a = X({
    fieldSchemaStableId: i,
    collectionStableId: r
  });
  if ("loaded" !== a.status || e?.dataType !== "CMS_ALIAS") return null;
  let s = a.fieldSchema;
  if (null == s) {
    sD("Expected fieldSchema to be present.", {
      boundPaintVariable: e
    });
    return null;
  }
  let o = s.name;
  return jsx(S, {
    ...t,
    variableName: o,
    variableDescription: void 0,
    variableValue: void 0,
    isVariableDeleted: !1
  });
}
export function $$x1({
  onClick: e,
  recordingKey: t
}) {
  return jsx("span", {
    className: zm,
    children: jsx(K, {
      "aria-label": _$$t("fullscreen.properties_panel.fill.detach_variable"),
      onClick: e,
      recordingKey: Pt(t, "paint", "detachVariableButton"),
      htmlAttributes: {
        onMouseDown: dG,
        "data-tooltip": _$$t("fullscreen.properties_panel.fill.detach_variable"),
        "data-tooltip-type": Ib.TEXT
      },
      children: jsx(U, {})
    })
  });
}
function S({
  variableName: e,
  variableDescription: t,
  variableValue: i,
  isVariableDeleted: r,
  paint: a,
  onClick: s,
  recordingKey: l,
  selected: p,
  hasFocus: m,
  onDetachClick: h,
  enableDetach: g
}) {
  let A = null;
  r || (A = jsx(J, {
    paint: a
  }));
  let I = getFeatureFlags().ds_qw_variable_and_style_visibility && g ? jsx($$x1, {
    onClick: h,
    recordingKey: Pt(l, "paint", "detachVariableButton")
  }) : jsx(Fragment, {});
  return jsxs(Fragment, {
    children: [jsx(_$$s, {
      selected: p,
      hasFocus: m,
      styleIcon: A || jsx("div", {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("variables.variable_was_deleted"),
        children: jsx(B, {
          className: Bx,
          svg: _$$A
        })
      }),
      styleName: e,
      styleDescription: t,
      styleValue: i,
      onClick: s,
      shouldStretch: getFeatureFlags().ds_qw_variable_and_style_visibility,
      recordingKey: Pt(l, "styleButton")
    }), I]
  });
}
export const Sw = $$E0;
export const UM = $$x1;
export const rM = $$I2;