import _require from "../svg/764361";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useContext, useRef } from "react";
import { useDispatch } from "react-redux";
import { Fullscreen, VariableResolvedDataType, PropertyScope } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { generateRecordingKey } from "../figma_app/878298";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { Oe } from "../figma_app/933328";
import { Lk } from "../figma_app/975811";
import { fullscreenValue } from "../figma_app/455680";
import { getNudgeAmounts } from "../figma_app/740163";
import { isValidValue } from "../905/216495";
import { useDropdownState } from "../905/848862";
import { TK } from "../905/129660";
import { KindEnum } from "../905/129884";
import { NumericDropdownInput } from "../figma_app/178475";
import { a2 } from "../figma_app/762558";
import { ow } from "../905/188421";
import { c$, sK, tV } from "../905/794875";
import { pW, gm } from "../figma_app/335781";
import { ChevronContainer } from "../905/1946";
import { B as _$$B2 } from "../905/957400";
import { ControlledVariablePickerProvider, VariablePicker } from "../figma_app/260445";
import { FormattedInputContext } from "../905/427409";
import { u3, y$ } from "../figma_app/152690";
import { MH } from "../figma_app/394327";
import { calculatePickerPosition } from "../905/67286";
import { Ej, hE } from "../905/71683";
class L extends c$ {}
let F = [10, 11, 12, 13, 14, 15, 16, 20, 24, 32, 36, 40, 48, 64, 96, 128];
export function $$M0({
  id: e,
  fontSize: t,
  onChange: i,
  disabled: d,
  recordingKey: c,
  rowElementRef: u,
  editingStyleGuid: p,
  hideVariableOptions: m,
  responsiveTextStyleVariantIndex: g
}) {
  let f = useDispatch();
  let {
    consumedVariable,
    updateVariableConsumption,
    clearVariableConsumption
  } = u3(["FONT_SIZE"], p, g);
  let b = MH(consumedVariable) ?? void 0;
  let v = useCallback(async (e, t, i) => {
    i ? e(await f(Oe(i))) : t();
  }, [f]);
  let I = useCallback(async e => {
    void 0 !== g ? await v(e => {
      permissionScopeHandler.user("editVariantVCMForTextStyleNode", () => {
        Fullscreen.editVariantVCMForTextStyleNode(sessionLocalIDToString(p), g, "FONT_SIZE", e);
      });
    }, () => {
      permissionScopeHandler.user("editVariantVCMForTextStyleNode", () => {
        Fullscreen.clearVariantVCMFieldForTextStyleNode(sessionLocalIDToString(p), g, "FONT_SIZE");
      });
    }, e) : await v(e => updateVariableConsumption(y$(VariableResolvedDataType.FLOAT, e)), clearVariableConsumption, e);
  }, [g, v, p, clearVariableConsumption, updateVariableConsumption]);
  return jsxs(ControlledVariablePickerProvider, {
    boundVariableId: b,
    resolvedType: VariableResolvedDataType.FLOAT,
    onVariableSelected: I,
    children: [jsx(VariablePicker, {
      variableScope: PropertyScope.FONT_SIZE
    }), jsx(j, {
      id: e,
      fontSize: t,
      onChange: i,
      disabled: d,
      recordingKey: c,
      rowElementRef: u,
      editingStyleGuid: p,
      hideVariableOptions: m,
      responsiveTextStyleVariantIndex: g
    })]
  });
}
function j({
  id: e,
  fontSize: t,
  onChange: h,
  disabled: g,
  recordingKey: k,
  rowElementRef: N,
  editingStyleGuid: P,
  hideVariableOptions: M,
  responsiveTextStyleVariantIndex: j
}) {
  let B = useContext(FormattedInputContext);
  let V = useRef(null);
  let G = useDispatch();
  let z = useDropdownState();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = getNudgeAmounts();
  let K = _$$B2();
  let Y = !!P;
  let q = useCallback((e, t) => {
    if (h?.(), -1 === e) {
      let e = V.current;
      e && B?.showBindingUI(e, {
        initialPosition: calculatePickerPosition({
          inputRef: V,
          rowRef: N,
          isInStyleModal: Y
        })
      });
    } else {
      if (void 0 !== j) {
        if (!P) throw Error("Expected editingStyleGuid to be set when responsiveTextStyleVariantIndex is set");
        permissionScopeHandler.user("editVariantFontSizeForTextStyleNode", () => Fullscreen.editVariantFontSizeForTextStyleNode(sessionLocalIDToString(P), j, e));
        return;
      }
      getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor_type_panel_change", {
        key: "fontSize"
      });
      let i = {
        fontSize: e
      };
      if (isValidValue(K.lineHeight)) {
        let e = TK(K, K.lineHeight);
        e !== K.lineHeight && (i.lineHeight = e);
      }
      fullscreenValue.updateSelectionProperties(i, {
        shouldCommit: t
      });
      a2("fontSize");
    }
  }, [h, B, Y, N, j, K, P]);
  let $ = [];
  $.push(F.map(e => jsx(L, {
    value: e,
    recordingKey: generateRecordingKey(k, `${e}`),
    children: e
  }, `font-size-${e}`)));
  M || $.push(jsx(sK, {}, "divider"), jsx(L, {
    icon: jsx(SvgComponent, {
      svg: _require
    }),
    value: -1,
    tooltip: getI18nString("fullscreen.properties_panel.apply_variable"),
    tooltipType: KindEnum.TEXT
  }, "apply-variable"));
  return jsx(Fragment, {
    children: jsx(ow, {
      value: {
        select: pW,
        inputComponent: gm
      },
      children: jsx(tV, {
        value: {
          chevron: ChevronContainer
        },
        children: jsx(NumericDropdownInput, {
          ariaLabel: getI18nString("fullscreen.type_panel.font_size"),
          bigNudgeAmount,
          className: Ej,
          "data-tooltip": getI18nString("fullscreen.type_panel.font_size"),
          "data-tooltip-type": KindEnum.TEXT,
          disabled: g,
          dispatch: G,
          dropdownClassName: hE,
          dropdownShown: z,
          enablePreview: !P,
          formatter: new U({
            min: 1,
            max: void 0,
            smallNudgeAmount,
            bigNudgeAmount
          }),
          forwardedRef: V,
          id: e,
          isTokenizable: !0,
          min: 1,
          onValueChange: q,
          optionsWithDisabledPreviews: [-1],
          recordingKey: k,
          smallNudgeAmount,
          tooltipForScreenReadersOnly: !0,
          value: t,
          willShowDropdown: () => (fullscreenValue.commit(), getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-type-panel-dropdown-show", {
            key: "fontSize"
          }), Promise.resolve()),
          children: $
        })
      })
    })
  });
}
class U extends Lk {
  constructor(e) {
    super(e);
    this.floatingPointFormat = e.floatingPointFormat;
  }
  format(e) {
    return null == e || -1 === e ? "" : super.format(e);
  }
}
export const Z = $$M0;