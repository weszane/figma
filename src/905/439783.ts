import { jsx } from "react/jsx-runtime";
import { useRef, useCallback, useContext } from "react";
import { wA } from "../vendor/514228";
import { isNullish } from "../figma_app/95419";
import { y as _$$y } from "../905/292472";
import { glU, rXF } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { dI } from "../905/871411";
import u from "classnames";
import { t as _$$t } from "../905/303541";
import { Oe } from "../figma_app/933328";
import { bA, _q } from "../905/668764";
import { h7 } from "../figma_app/975811";
import { Y5 } from "../figma_app/455680";
import { gl } from "../905/216495";
import { SG } from "../figma_app/852050";
import { Ib } from "../905/129884";
import { e as _$$e } from "../905/579635";
import { Jl } from "../figma_app/178475";
import { sJ } from "../figma_app/841644";
import { h$ } from "../905/566585";
import { P as _$$P } from "../905/460261";
import { _X } from "../figma_app/260445";
import { p as _$$p } from "../905/427409";
import { u3 } from "../figma_app/152690";
import { k as _$$k } from "../905/67286";
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
  let L = wA();
  let F = useRef(null);
  let {
    consumedVariable
  } = u3(["LETTER_SPACING"], i, D);
  let j = useCallback(async e => {
    if (void 0 !== D) {
      if (e) {
        let t = await L(Oe(e));
        l7.user("editVariantVCMForTextStyleNode", () => {
          glU.editVariantVCMForTextStyleNode(dI(i), D, "LETTER_SPACING", t);
        });
      } else l7.user("editVariantVCMForTextStyleNode", () => {
        glU.clearVariantVCMFieldForTextStyleNode(dI(i), D, "LETTER_SPACING");
      });
    }
  }, [L, i, D]);
  let U = !!i;
  return jsx(_$$e, {
    condition: !E,
    wrapper: t => jsx(_X, {
      fields: ["LETTER_SPACING"],
      resolvedType: rXF.FLOAT,
      editingStyleGuid: i,
      responsiveTextStyleVariantIndex: D,
      onVariableSelected: void 0 !== D ? j : void 0,
      initialPickerPosition: () => _$$k({
        inputRef: F,
        rowRef: u,
        isInStyleModal: U
      }) ?? null,
      children: jsx(P, {
        currentFieldValue: isNullish(e) || gl(e) ? void 0 : e.value,
        isInStyleModal: U,
        rowElementRef: u,
        recordingKey: N,
        controlRef: F,
        children: t
      })
    }),
    children: jsx(Jl, {
      bigNudgeAmount: y,
      className: E ? p()({
        [ZC]: !0,
        [kL]: U
      }) : void 0,
      "data-tooltip": _$$P(_$$t("fullscreen.type_panel.letter_spacing")),
      "data-tooltip-type": Ib.TEXT,
      disabled: t,
      dispatch: L,
      formatter: new O({
        smallPixelNudgeAmount: f ?? bA,
        bigPixelNudgeAmount: y ?? _q,
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
          l7.user("editVariantLetterSpacingForTextStyleNode", () => glU.editVariantLetterSpacingForTextStyleNode(dI(i), D, t));
          return;
        }
        Y5.updateSelectionProperties({
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
  let l = useContext(_$$p);
  let d = SG(["LETTER_SPACING"]).data ?? [];
  let c = useCallback(() => {
    i.current && l?.showBindingUI(i.current, {
      currentFieldValue: e,
      initialPosition: _$$k({
        inputRef: s,
        rowRef: i,
        isInStyleModal: t
      })
    });
  }, [i, l, e, s, t]);
  return jsx(sJ, {
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