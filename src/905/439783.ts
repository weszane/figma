import { jsx } from "react/jsx-runtime";
import { useRef, useCallback, useContext } from "react";
import { useDispatch } from "react-redux";
import { isNullish } from "../figma_app/95419";
import { y as _$$y } from "../905/292472";
import { Fullscreen, VariableResolvedDataType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import u from "classnames";
import { getI18nString } from "../905/303541";
import { Oe } from "../figma_app/933328";
import { DEFAULT_FINE_NUDGE, DEFAULT_COARSE_NUDGE } from "../905/668764";
import { h7 } from "../figma_app/975811";
import { fullscreenValue } from "../figma_app/455680";
import { isInvalidValue } from "../905/216495";
import { SG } from "../figma_app/852050";
import { KindEnum } from "../905/129884";
import { conditionalWrapper } from "../905/579635";
import { PixelInput } from "../figma_app/178475";
import { FormattedInputWrapper } from "../figma_app/841644";
import { h$ } from "../905/566585";
import { P as _$$P } from "../905/460261";
import { FormattedInputWithWrapper } from "../figma_app/260445";
import { FormattedInputContext } from "../905/427409";
import { u3 } from "../figma_app/152690";
import { calculatePickerPosition } from "../905/67286";
import { ZC, kL, KY, Kk } from "../905/71683";
var p = u;
export function $$N0({
  letterSpacing: e,
  disabled: t,
  editingStyleGuid: i,
  rowElementRef: u,
  smallNudgeAmount: f,
  bigNudgeAmount: y,
  disableVariables: E,
  onChange: C,
  recordingKey: N,
  responsiveTextStyleVariantIndex: D
}) {
  let L = useDispatch();
  let F = useRef(null);
  let {
    consumedVariable
  } = u3(["LETTER_SPACING"], i, D);
  let j = useCallback(async e => {
    if (void 0 !== D) {
      if (e) {
        let t = await L(Oe(e));
        permissionScopeHandler.user("editVariantVCMForTextStyleNode", () => {
          Fullscreen.editVariantVCMForTextStyleNode(sessionLocalIDToString(i), D, "LETTER_SPACING", t);
        });
      } else permissionScopeHandler.user("editVariantVCMForTextStyleNode", () => {
        Fullscreen.clearVariantVCMFieldForTextStyleNode(sessionLocalIDToString(i), D, "LETTER_SPACING");
      });
    }
  }, [L, i, D]);
  let U = !!i;
  return jsx(conditionalWrapper, {
    condition: !E,
    wrapper: t => jsx(FormattedInputWithWrapper, {
      fields: ["LETTER_SPACING"],
      resolvedType: VariableResolvedDataType.FLOAT,
      editingStyleGuid: i,
      responsiveTextStyleVariantIndex: D,
      onVariableSelected: void 0 !== D ? j : void 0,
      initialPickerPosition: () => calculatePickerPosition({
        inputRef: F,
        rowRef: u,
        isInStyleModal: U
      }) ?? null,
      children: jsx(P, {
        currentFieldValue: isNullish(e) || isInvalidValue(e) ? void 0 : e.value,
        isInStyleModal: U,
        rowElementRef: u,
        recordingKey: N,
        controlRef: F,
        children: t
      })
    }),
    children: jsx(PixelInput, {
      bigNudgeAmount: y,
      className: E ? p()({
        [ZC]: !0,
        [kL]: U
      }) : void 0,
      "data-tooltip": _$$P(getI18nString("fullscreen.type_panel.letter_spacing")),
      "data-tooltip-type": KindEnum.TEXT,
      disabled: t,
      dispatch: L,
      formatter: new O({
        smallPixelNudgeAmount: f ?? DEFAULT_FINE_NUDGE,
        bigPixelNudgeAmount: y ?? DEFAULT_COARSE_NUDGE,
        hasVariableBound: !E && !!consumedVariable
      }),
      inputClassName: KY,
      isTokenizable: !E,
      noBorderOnHover: !E,
      onValueChange: (e, t) => {
        if (C?.(), void 0 !== D) {
          if (!i) throw Error("Expected editingStyleGuid to be set when responsiveTextStyleVariantIndex is set");
          let t = {
            value: e.value,
            units: e.units
          };
          permissionScopeHandler.user("editVariantLetterSpacingForTextStyleNode", () => Fullscreen.editVariantLetterSpacingForTextStyleNode(sessionLocalIDToString(i), D, t));
          return;
        }
        fullscreenValue.updateSelectionProperties({
          letterSpacing: e
        }, {
          shouldCommit: t
        });
        h$("LETTER_SPACING", t);
      },
      recordingKey: N,
      smallNudgeAmount: f,
      value: e,
      children: jsx("div", {
        className: Kk,
        children: jsx(_$$y, {})
      })
    })
  });
}
function P({
  currentFieldValue: e,
  isInStyleModal: t,
  rowElementRef: i,
  recordingKey: a,
  controlRef: s,
  children: o
}) {
  let l = useContext(FormattedInputContext);
  let d = SG(["LETTER_SPACING"]).data ?? [];
  let c = useCallback(() => {
    i.current && l?.showBindingUI(i.current, {
      currentFieldValue: e,
      initialPosition: calculatePickerPosition({
        inputRef: s,
        rowRef: i,
        isInStyleModal: t
      })
    });
  }, [i, l, e, s, t]);
  return jsx(FormattedInputWrapper, {
    ref: s,
    currentFieldValue: e,
    inputClassName: p()({
      [ZC]: !0,
      [kL]: t
    }),
    isActive: l?.isShowingBindingUI ?? !1,
    disableEntryPoint: 0 === d.length,
    recordingKey: a,
    onPickerOpen: c,
    children: o
  });
}
class O extends h7 {
  constructor(e) {
    super(e);
    this.hasVariableBound = e.hasVariableBound;
  }
  format(e) {
    if (this.hasVariableBound) {
      let t = parseFloat(super.format(e));
      return `${t}`;
    }
    return super.format(e);
  }
}
export const I = $$N0;