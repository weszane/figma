import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo, useCallback, Fragment as _$$Fragment, useRef, useState, useContext } from "react";
import { useDispatch } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { d as _$$d } from "../905/49800";
import { J } from "../905/270045";
import { Z_n, rXF } from "../figma_app/763686";
import { WI } from "../905/929949";
import { getFeatureFlags } from "../905/601108";
import m from "classnames";
import { L as _$$L } from "../905/210923";
import { Pt } from "../figma_app/806412";
import { Point } from "../905/736624";
import { t as _$$t } from "../905/303541";
import { TI } from "../905/713722";
import { RU, EU } from "../figma_app/740163";
import { Kd, BQ, u as _$$u, t8 } from "../figma_app/852050";
import { zk } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { gq, Pd } from "../figma_app/178475";
import { sJ } from "../figma_app/841644";
import { J as _$$J } from "../905/225412";
import { h as _$$h } from "../905/65944";
import { AN } from "../905/203369";
import { $, b as _$$b } from "../905/483620";
import { nE } from "../figma_app/260445";
import { p as _$$p } from "../905/427409";
import { _r, oG } from "../905/176258";
import { Oi, eF } from "../figma_app/394327";
import { G } from "../905/658204";
import { P as _$$P, J as _$$J2 } from "../figma_app/120873";
var h = m;
let F = "variables_modal_value_input--disabled--y64Jo";
let M = "variables_modal_value_input--comboBoxCell--YqnD4 variables_modal_value_input--_comboBoxBase--FJEcj variables_modal_value_input--inputCellFocus--vj5GD";
let j = "variables_modal_value_input--comboBoxForm--rPuqj";
let U = "variables_modal_value_input--colorOpacityContainer--J92uF";
let B = "variables_modal_value_input--colorOpacityInput--xTJIQ";
let $$V0 = "variable-value-input";
export function $$G1(e) {
  let t = e.variableOverride?.overrideValues[e.modeID];
  let i = void 0 !== t;
  let a = i ? t : e.variable.modeValues[e.modeID];
  let s = Kd(e.variable.node_id);
  let o = useMemo(() => e.modeID && s ? {
    [s]: e.modeID
  } : void 0, [e.modeID, s]);
  let l = BQ(e.variable.node_id);
  let d = _r(e.variable.node_id, e.modeID);
  oG(e.variable.node_id, e.modeID, useCallback(() => {
    let t = e.containerRef?.current;
    t && t.animate([{
      backgroundColor: "var(--color-bg-assistive-secondary)"
    }, {
      backgroundColor: "var(--color-bg-assistive-tertiary)",
      offset: .1
    }, {
      backgroundColor: "transparent"
    }], {
      duration: 5e3,
      easing: "linear"
    });
  }, [e.containerRef]));
  let c = (getFeatureFlags().prototype_variable_debug_view ? d : void 0) ?? a ?? l ?? WI(e.variable.resolvedType);
  return c ? jsx(nE, {
    variableSetId: e.variableSetId,
    variableID: e.variable.node_id,
    modeID: e.modeID,
    resolvedType: e.variable.resolvedType,
    children: jsx($$z2, {
      isInaccessible: e.isInaccessible,
      contextType: e.contextType,
      recordingKey: e.recordingKey,
      variableValue: c,
      isOverridden: i,
      varSetKeyToModeID: o,
      clearVariableOverride: e.clearVariableOverride,
      onChange: e.onSubmit,
      onPickerOpen: e.onCreateExpression
    })
  }) : null;
}
export function $$z2(e) {
  let t = useDispatch();
  let i = e.contextType ?? $.CELL;
  let u = RU();
  let p = EU();
  let m = t => (e.onChange({
    type: Z_n.STRING,
    resolvedType: rXF.STRING,
    value: t
  }, zk.YES), !0);
  let [_, y] = _$$L(e.variableValue, (t, i = zk.NO) => {
    e.onChange(t, i);
  });
  let v = e.isInaccessible ? _$$t("variables.authoring_modal.table.inaccessible_variable_tooltip") : void 0;
  let w = e.isOverridden ? G : _$$Fragment;
  switch (_.type) {
    case Z_n.STRING:
      return jsx("div", {
        className: h()({
          [M]: i === $.CELL,
          [j]: i === $.FORM
        }),
        children: jsx(sJ, {
          noBorder: !0,
          recordingKey: Pt(e.recordingKey, "stringVariableInputControl"),
          iconLayout: i === $.CELL ? "flex" : "absolute",
          handleClearOverride: e.isOverridden ? e.clearVariableOverride : void 0,
          children: jsx(w, {
            children: jsx(_$$b, {
              disabled: e.isInaccessible,
              id: $$V0,
              noBorderOnFocus: i === $.CELL,
              onCancel: m,
              onSubmit: m,
              onFinish: lQ,
              originalValue: _.value,
              recordingKey: Pt(e.recordingKey, "textInput"),
              type: $.CELL
            })
          })
        })
      });
    case Z_n.BOOLEAN:
      return jsx("div", {
        className: h()("variables_modal_value_input--booleanCell--kwjjI", {
          "variables_modal_value_input--booleanForm--l1Pjp variables_modal_value_input--booleanCell--kwjjI": i === $.FORM,
          [F]: e.isInaccessible
        }, e.innerContainerClassName),
        children: jsx(sJ, {
          noBorder: !0,
          recordingKey: Pt(e.recordingKey, "booleanVariableInputControl"),
          iconLayout: i === $.CELL ? "flex" : "absolute",
          handleClearOverride: e.isOverridden ? e.clearVariableOverride : void 0,
          children: jsx(w, {
            children: jsx(_$$d, {
              disabled: e.isInaccessible,
              checked: _.value,
              id: $$V0,
              recordingKey: Pt(e.recordingKey, "toggleInput"),
              label: jsx(J, {
                children: Oi(_)
              }),
              onChange: t => {
                e.onChange({
                  type: Z_n.BOOLEAN,
                  resolvedType: rXF.BOOLEAN,
                  value: t
                }, zk.YES);
              }
            })
          })
        })
      });
    case Z_n.FLOAT:
      {
        let r = jsx(w, {
          children: jsx(gq, {
            bigNudgeAmount: u,
            "data-tooltip": v ?? "",
            "data-tooltip-type": Ib.TEXT,
            dataTestId: Pt(e.recordingKey, "numberInput"),
            disabled: e.isInaccessible,
            dispatch: t,
            id: $$V0,
            inputClassName: "variables_modal_value_input--comboBoxInput--jNlas",
            isTokenizable: !0,
            noBorderOnFocus: i === $.CELL,
            noBorderOnHover: !0,
            noBorderOnScrub: !0,
            onValueChange: (e, t) => {
              y({
                type: Z_n.FLOAT,
                resolvedType: rXF.FLOAT,
                value: e
              }, t ?? zk.NO);
            },
            recordingKey: Pt(e.recordingKey, "numberInput"),
            scrubbingDisabled: !0,
            smallNudgeAmount: p,
            value: _.value
          })
        });
        return jsx("div", {
          className: h()({
            [M]: i === $.CELL,
            [j]: i === $.FORM,
            [F]: e.isInaccessible
          }),
          children: e.onPickerOpen ? jsx(sJ, {
            disabled: e.isInaccessible,
            iconLayout: i === $.CELL ? "flex" : "absolute",
            inputClassName: e.inputClassName,
            isActive: !1,
            noBorder: !0,
            handleClearOverride: e.isOverridden ? e.clearVariableOverride : void 0,
            onPickerOpen: e.onPickerOpen,
            recordingKey: Pt(e.recordingKey, "numberInput"),
            children: r
          }) : jsx(sJ, {
            disabled: e.isInaccessible,
            inputClassName: e.inputClassName,
            recordingKey: Pt(e.recordingKey, "numberInput"),
            noBorder: !0,
            iconLayout: i === $.CELL ? "flex" : "absolute",
            handleClearOverride: e.isOverridden ? e.clearVariableOverride : void 0,
            children: r
          })
        });
      }
    case Z_n.COLOR:
      return jsx(w, {
        children: jsx(H, {
          disabled: e.isInaccessible,
          innerContainerClassName: e.innerContainerClassName,
          contextType: i,
          variableValue: _,
          recordingKey: Pt(e.recordingKey, "colorInput"),
          onVariableValueChange: y,
          setVariableAction: e.setVariableAction,
          tooltip: v
        })
      });
    case Z_n.ALIAS:
      return jsx(W, {
        isInaccessible: e.isInaccessible,
        isOverridden: e.isOverridden,
        varSetKeyToModeID: e.varSetKeyToModeID,
        variableID: _.value,
        recordingKey: e.recordingKey,
        contextType: i
      });
    case Z_n.NODE_FIELD_ALIAS:
    case Z_n.MAP:
    case Z_n.FONT_STYLE:
    case Z_n.EXPRESSION:
    case Z_n.SYMBOL_ID:
    case Z_n.TEXT_DATA:
    case Z_n.MANAGED_STRING_ALIAS:
    case Z_n.CMS_ALIAS:
    case Z_n.IMAGE:
    case Z_n.LINK:
    case Z_n.JS_RUNTIME_ALIAS:
    case Z_n.DATE:
    case Z_n.SLOT_CONTENT_ID:
      return jsx(Fragment, {});
    default:
      throwTypeError(_, "Unknown VariableDataType");
  }
}
function H({
  contextType: e,
  variableValue: t,
  onVariableValueChange: i,
  setVariableAction: s,
  disabled: o = !1,
  tooltip: l,
  recordingKey: d,
  innerContainerClassName: c
}) {
  let u = useDispatch();
  let p = useRef(null);
  let m = useRef(null);
  let [g, A] = useState(!1);
  let b = useContext(_$$p);
  let v = g && s || !!b?.isShowingBindingUI;
  let S = (e, n) => {
    e && i({
      ...t,
      value: e
    }, n ?? zk.NO);
  };
  return jsxs("div", {
    className: h()({
      "variables_modal_value_input--focused--p4FQO": v,
      "variables_modal_value_input--colorCell--93yAz variables_modal_value_input--_colorBase--Fzvmq variables_modal_value_input--inputCellFocus--vj5GD": e === $.CELL,
      "variables_modal_value_input--colorForm--JJFwO variables_modal_value_input--_colorBase--Fzvmq variables_modal_value_input--inputCellFocus--vj5GD": e === $.FORM,
      [F]: o
    }, c),
    ref: m,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": l,
    children: [jsx("div", {
      ref: p,
      children: jsx(_$$J, {
        onClick: s ? () => {
          A(!0);
        } : function () {
          !o && b && b.showBindingUI(p.current);
        },
        className: "variables_modal_value_input--colorChit--yRVZo",
        color: t.value,
        recordingKey: Pt(d, "openColorPicker")
      })
    }), jsx(AN, {
      className: "variables_modal_value_input--colorInput--l-7v7",
      disabled: o,
      formatter: TI,
      property: t.value,
      onChange: e => S(e, zk.YES),
      noBorderOnFocus: !0,
      dataTestId: Pt(d, "textInput"),
      recordingKey: Pt(d, "textInput")
    }), e === $.CELL ? t.value.a < 1 && jsx(Pd, {
      disabled: o,
      className: U,
      inputClassName: B,
      value: t.value.a,
      onValueChange: (e, i) => {
        S({
          ...t.value,
          a: e
        }, i);
      },
      noLeftBorder: !0,
      noBorderOnFocus: !0,
      dispatch: u,
      recordingKey: Pt(d, "opacityInput")
    }) : jsx(Pd, {
      disabled: o,
      className: U,
      inputClassName: B,
      value: t.value.a,
      onValueChange: (e, i) => {
        S({
          ...t.value,
          a: e
        }, i);
      },
      noLeftBorder: !0,
      noBorderOnFocus: !0,
      dispatch: u,
      recordingKey: Pt(d, "opacityInput")
    }), function () {
      if (!g || !s || o) return null;
      let e = t.value;
      let r = m.current.getBoundingClientRect();
      return jsx(_$$h, {
        disabledVariableIds: new Set(),
        color: e,
        boundVariable: null,
        initialPosition: new Point(r.left, r.bottom),
        initialView: "custom_color",
        recordingKey: "variableBindingsDropdown",
        onChange: (e, n) => i({
          ...t,
          value: e
        }, n ?? zk.NO),
        onClose: () => A(!1)
      });
    }()]
  });
}
function W(e) {
  let t = useRef(null);
  let i = useContext(_$$p);
  let a = _$$u(e.variableID);
  let s = t8(e.variableID, e.varSetKeyToModeID);
  return jsx("div", {
    ref: t,
    className: h()({
      "variables_modal_value_input--aliasPillForm--gGjuR variables_modal_value_input--_aliasPillBase--NrZBg": e.contextType === $.FORM,
      "variables_modal_value_input--aliasPillCell--j0c50 variables_modal_value_input--_aliasPillBase--NrZBg": e.contextType === $.CELL
    }),
    children: jsx(_$$P, {
      colorTheme: e.isInaccessible ? _$$J2.DISABLED : e.isOverridden ? _$$J2.OVERRIDDEN : _$$J2.DEFAULT,
      disableHover: e.isInaccessible,
      isDeleted: !!a && eF(a),
      onClick: () => {
        !e.isInaccessible && i && i.showBindingUI(t.current);
      },
      recordingKey: Pt(e.recordingKey, "alias"),
      thumbnailValue: s,
      tooltipOverride: e.isInaccessible ? _$$t("variables.authoring_modal.table.inaccessible_variable_tooltip") : void 0,
      value: a?.name ?? _$$t("variables.missing_name"),
      variableId: a?.node_id,
      variablePillContainerClassName: "variables_modal_value_input--aliasPillContainer--gavRS"
    })
  });
}
export const I3 = $$V0;
export const cC = $$G1;
export const gJ = $$z2;