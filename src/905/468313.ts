import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useContext, useRef, useCallback, useState, forwardRef, useImperativeHandle } from "react";
import { useSelector } from "../vendor/514228";
import { E as _$$E } from "../905/632989";
import { K } from "../905/443068";
import { U as _$$U } from "../905/708285";
import { RR } from "../figma_app/338442";
import { Z_n, rcl, rXF, j0r } from "../figma_app/763686";
import { X } from "../905/606795";
import { Uz } from "../905/63728";
import { rf, Pt } from "../figma_app/806412";
import { getI18nString } from "../905/303541";
import { X as _$$X } from "../905/190511";
import { sD } from "../905/937198";
import { Y5 } from "../figma_app/455680";
import { hS, gl } from "../905/216495";
import { u as _$$u, BQ } from "../figma_app/852050";
import { Sh } from "../figma_app/889655";
import { zk } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { L as _$$L } from "../figma_app/884735";
import { UT } from "../figma_app/95266";
import { Lg } from "../figma_app/505098";
import { K as _$$K } from "../905/636142";
import { v as _$$v } from "../905/318279";
import { YW } from "../figma_app/778125";
import { _j } from "../figma_app/843119";
import { y3 } from "../figma_app/741785";
import { Xx } from "../figma_app/632975";
import { FX } from "../figma_app/831569";
import { DE } from "../figma_app/811257";
import { p as _$$p } from "../905/427409";
import { u3 } from "../figma_app/152690";
import { P as _$$P, J } from "../figma_app/120873";
import { V5 } from "../figma_app/260445";
import { eF, MH } from "../figma_app/394327";
import { k as _$$k } from "../905/67286";
import { wG, J2 } from "../905/331989";
import { XA, Ig } from "../905/805224";
import { Cl, $1, OR, NU, Ds, X$, P as _$$P2, Dp, gb } from "../905/71683";
import { $$default } from "../svg/764361";
let M = memo(function ({
  value: e,
  label: t,
  recordingKey: i
}) {
  let a;
  let s = useContext(_$$p);
  let d = useRef(null);
  let {
    isShowingBindingUI,
    showBindingUI,
    onVariableSelected,
    boundVariableId,
    isBoundVariableDeleted,
    onExpressionSubmitted
  } = s ?? {};
  let E = _$$u(boundVariableId ?? void 0);
  let x = BQ(boundVariableId ?? void 0);
  let S = u3(["TEXT_DATA"]);
  let w = u3(["CMS_SERIALIZED_RICH_TEXT_DATA"]);
  let C = S.consumedVariable || w.consumedVariable;
  let T = C && hS(C) && C.type === Z_n.CMS_ALIAS;
  let M = T ? C.value.fieldSchemaId : void 0;
  let j = w.consumedVariable ? _j.RICH_TEXT : _j.PLAIN_TEXT;
  let U = useCallback(() => {
    T ? Y5.triggerActionEnumInUserEditScope(rcl.UNBIND_SELECTION, {
      fieldSchemaId: M,
      fieldType: j,
      removeBoundData: !1
    }) : onExpressionSubmitted ? onExpressionSubmitted(void 0) : onVariableSelected && onVariableSelected(void 0);
  }, [T, onExpressionSubmitted, onVariableSelected, M, j]);
  let B = rf(i, "click", () => showBindingUI?.(d.current));
  if (!s) return null;
  a = T ? Xx(C.resolvedType) ?? void 0 : "MIXED" !== x ? x : void 0;
  let V = onExpressionSubmitted ? jsx(y3, {
    targetVariableData: C && !gl(C) ? C : void 0,
    onClick: B,
    isNarrowPanel: !0,
    isInCell: !1,
    showVariableThumbnails: !0,
    isInConditional: !1,
    isMixed: gl(C)
  }) : jsx("button", {
    className: "text_content_variable_pill--variablePill--NNm9-",
    onClick: B,
    children: jsx(_$$P, {
      isStandalone: !0,
      value: E?.name ?? e,
      colorTheme: isShowingBindingUI ? J.SELECTED : J.DEFAULT,
      variableId: boundVariableId ?? void 0,
      isDeleted: isBoundVariableDeleted,
      thumbnailValue: a,
      classNameOverride: "text_content_variable_pill--ui3VariablePillCover--A9fcr",
      variablePillContainerClassName: "text_content_variable_pill--ui3VariablePillContainer--g-tSy"
    })
  });
  let G = T ? getI18nString("dakota.collection_selector.disconnect_submenu_title") : getI18nString("variables.binding_ui.detach_variable_tooltip");
  let z = jsx("span", {
    className: "text_content_variable_pill--detachButton--qEu-Y",
    children: jsx(K, {
      onClick: U,
      "aria-label": G,
      recordingKey: Pt(i, "detachBindingButton"),
      htmlAttributes: {
        "data-tooltip": G,
        "data-tooltip-type": Ib.TEXT,
        "data-onboarding-key": FX
      },
      children: jsx(_$$U, {})
    })
  });
  return jsx(DE, {
    ref: d,
    appendedClassName: "text_content_variable_pill--ui3TextInputRow--wceiG type_panel--ui3TextInputRow--HAi69 prop_assignment_row--ui3TypedPropAssignmentRow--3MHYU prop_assignment_row--ui3RowWithIcon--MjxKa",
    label: t,
    input: V,
    icon: z
  });
});
export function $$W1({
  elementRef: e,
  variable: t,
  tooltip: i,
  isInStyleModal: a,
  invalid: o = !1
}) {
  let l = useContext(_$$p);
  let d = BQ(t.node_id ?? void 0);
  return jsx(_$$E, {
    className: Cl,
    onClick: function () {
      e.current && l?.showBindingUI(e.current, {
        initialPosition: _$$k({
          inputRef: e,
          isInStyleModal: a
        })
      });
    },
    children: jsx(wG, {
      colorTheme: l?.isShowingBindingUI ? J2.SELECTED : J2.DEFAULT,
      containerClassName: $1,
      fullWidth: !0,
      invalid: o,
      isDeleted: eF(t),
      isNonInteractive: !0,
      text: t.name,
      thumbnailValue: d && "MIXED" !== d ? d : void 0,
      tooltip: i,
      variableDescription: t.description,
      variableValue: d && "MIXED" !== d ? d.value.toString() : void 0
    })
  });
}
export function $$K0({
  elementRef: e,
  invalid: t,
  editingStyleGuid: i
}) {
  let {
    consumedVariable,
    clearVariableConsumption
  } = u3(["FONT_STYLE"], i);
  let s = _$$u(MH(consumedVariable) ?? void 0);
  return s ? jsx("div", {
    className: OR,
    children: jsxs(XA, {
      children: [jsx("div", {
        className: NU,
        children: jsx($$W1, {
          elementRef: e,
          variable: s,
          invalid: t,
          tooltip: function ({
            boundVariable: e
          }) {
            return t && e?.resolvedType === rXF.STRING ? getI18nString("variables.binding_ui.missing_font_style") : null;
          }({
            boundVariable: s
          }) ?? void 0,
          isInStyleModal: !!i
        })
      }), jsx("span", {
        className: Ds,
        children: jsx(K, {
          onClick: () => clearVariableConsumption(zk.YES),
          "aria-label": getI18nString("variables.binding_ui.detach_variable_tooltip"),
          htmlAttributes: {
            "data-tooltip": getI18nString("variables.binding_ui.detach_variable_tooltip"),
            "data-tooltip-type": Ib.TEXT
          },
          children: jsx(_$$U, {})
        })
      })]
    })
  }) : null;
}
export function $$Y2(e) {
  let t = getI18nString("design_systems.component_properties.text_content");
  let i = e.textContentBoundAsset;
  return i?.boundAssetType === "variable" ? jsx(Ig, {
    children: jsx(M, {
      recordingKey: "textContentBoundAssetRow",
      value: i.currentValue ?? "",
      label: t
    })
  }) : i?.boundAssetType === "prop" ? jsx(Ig, {
    children: jsx("div", {
      className: X$,
      children: jsx(_$$L, {
        nodeField: RR.TEXT,
        label: t
      })
    })
  }) : i?.boundAssetType === "cms" ? jsx(q, {
    fieldSchemaId: i.fieldSchemaId,
    collectionId: i.collectionId
  }) : jsx(Ig, {
    children: jsx($, {
      label: t,
      recordingKey: Pt(e.recordingKey, "textContent")
    })
  });
}
function q({
  collectionId: e,
  fieldSchemaId: t
}) {
  let i = _$$X({
    collectionStableId: e,
    fieldSchemaStableId: t
  });
  if ("loaded" !== i.status) return null;
  let {
    fieldSchema
  } = i;
  if (null == fieldSchema) {
    sD("Expected field schema to exist.", {
      collectionId: e,
      fieldSchemaId: t
    });
    return null;
  }
  let a = fieldSchema.name;
  return jsx(Ig, {
    children: jsx(M, {
      recordingKey: "cmsContentBoundAssetRow",
      value: a,
      label: null
    })
  });
}
function $({
  recordingKey: e,
  label: t
}) {
  let i = useSelector(e => UT(e) ?? "");
  let r = useSelector(e => Sh(e));
  let s = useSelector(e => {
    let t = Lg(e);
    return t ? e.mirror.sceneGraph.get(t) : null;
  });
  let o = useSelector(e => r.every(t => {
    let i = e.mirror.sceneGraph.get(t);
    return (i?.type === "TEXT" || i?.type === "CMS_RICH_TEXT") && null !== i.getNearestDakotaCollectionId();
  }));
  let l = o ? getI18nString("dakota.properties_panel.collection_panel.field_binding") : getI18nString("proto.apply_assignment_property");
  if (!s?.guid && !o) return null;
  let d = jsx(Z, {
    value: i,
    recordingKey: Pt(e, "input"),
    isCmsTextNode: o
  });
  let u = jsxs(Fragment, {
    children: [jsx(V5, {
      variableScope: j0r.TEXT_CONTENT
    }), jsx(_$$K, {
      recordingKey: Pt(e, "assignTextContent"),
      tooltip: l,
      showAlways: !0
    })]
  });
  return jsx(DE, {
    appendedClassName: _$$P2,
    label: t,
    input: d,
    icon: u
  });
}
function Z({
  value: e,
  recordingKey: t,
  isCmsTextNode: i = !1
}) {
  let [a, s] = useState(null);
  let {
    inputRef,
    inputProps: {
      onChange,
      onMouseUp,
      onMouseLeave,
      onFocus,
      onKeyUp
    }
  } = X({
    onFocus: () => {
      gl(e) ? s("") : s(e);
    },
    onChange: e => s(e.currentTarget.value)
  });
  return jsx(_$$v, {
    ref: e => {
      e?.textarea && (inputRef.current = e.textarea);
    },
    className: Dp,
    disableInput: i && gl(e),
    onBlur: function () {
      a && (Y5.updateSelectionProperties({
        textContent: a
      }), Y5.commit());
      s(null);
    },
    onChange,
    onFocus,
    onKeyDown: function (e) {
      e.keyCode !== Uz.ESCAPE && (e.keyCode !== Uz.ENTER || e.shiftKey) || (e.stopPropagation(), e.currentTarget.blur());
    },
    onKeyUp,
    onMouseLeave,
    onMouseUp,
    recordingKey: t,
    value: a
  });
}
export function $$X4({
  elementRef: e,
  dataTestId: t,
  recordingKey: i
}) {
  let s = useContext(_$$p);
  let o = useSelector(e => UT(e) ?? "");
  let l = gl(o) ? getI18nString("fullscreen.mixed") : o;
  return jsx(YW, {
    className: gb,
    svg: $$default,
    selected: s?.isShowingBindingUI,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("fullscreen.properties_panel.apply_variable"),
    recordingKey: i,
    onClick: () => {
      let t = e.current;
      t && s?.showBindingUI(t, {
        currentFieldValue: l
      });
    },
    dataTestId: t
  });
}
export let $$Q3 = forwardRef(function ({
  rowRef: e,
  elementRef: t,
  currentFieldValue: i,
  isInStyleModal: n
}, a) {
  let s = useContext(_$$p);
  useImperativeHandle(a, () => ({
    showVariablePicker: () => {
      t.current && s?.showBindingUI(t.current, {
        currentFieldValue: i,
        initialPosition: _$$k({
          inputRef: t,
          rowRef: e,
          isInStyleModal: n
        })
      });
    }
  }));
  return null;
});
export const H = $$K0;
export const JD = $$W1;
export const Fc = $$Y2;
export const bd = $$Q3;
export const EI = $$X4;