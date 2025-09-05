import { jsx } from "react/jsx-runtime";
import { useRef, useCallback, useContext } from "react";
import { useDispatch } from "../vendor/514228";
import { o as _$$o } from "../905/347208";
import { glU, rXF } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { dI } from "../905/871411";
import { Pt } from "../figma_app/806412";
import { t as _$$t } from "../905/303541";
import { Oe } from "../figma_app/933328";
import { gl } from "../905/216495";
import { Ib } from "../905/129884";
import { e as _$$e } from "../905/579635";
import { $j } from "../figma_app/178475";
import { sJ } from "../figma_app/841644";
import { _X } from "../figma_app/260445";
import { p as _$$p } from "../905/427409";
import { k as _$$k } from "../905/67286";
import { hf, KY, Kk } from "../905/71683";
export function $$I0({
  paragraphSpacing: e,
  editingStyleGuid: t,
  rowElementRef: i,
  isDisabled: c,
  smallNudgeAmount: _,
  bigNudgeAmount: y,
  recordingKey: I,
  onChange: x,
  disableVariables: S,
  responsiveTextStyleVariantIndex: w
}) {
  let C = useDispatch();
  let T = useRef(null);
  let k = useCallback(async e => {
    if (void 0 !== w) {
      if (e) {
        let i = await C(Oe(e));
        l7.user("editVariantVCMForTextStyleNode", () => {
          glU.editVariantVCMForTextStyleNode(dI(t), w, "PARAGRAPH_SPACING", i);
        });
      } else l7.user("editVariantVCMForTextStyleNode", () => {
        glU.clearVariantVCMFieldForTextStyleNode(dI(t), w, "PARAGRAPH_SPACING");
      });
    }
  }, [C, t, w]);
  return jsx(_$$e, {
    condition: !S,
    wrapper: r => jsx(_X, {
      fields: ["PARAGRAPH_SPACING"],
      resolvedType: rXF.FLOAT,
      editingStyleGuid: t,
      responsiveTextStyleVariantIndex: w,
      onVariableSelected: void 0 !== w ? k : void 0,
      initialPickerPosition: () => _$$k({
        inputRef: T,
        rowRef: i,
        isInStyleModal: !!t
      }) ?? null,
      children: jsx(E, {
        inputClassName: hf,
        currentFieldValue: gl(e) ? void 0 : e,
        isInStyleModal: !!t,
        rowElementRef: i,
        recordingKey: I,
        controlRef: T,
        children: r
      })
    }),
    children: jsx($j, {
      bigNudgeAmount: y,
      "data-tooltip": _$$t("fullscreen.type_panel.paragraph_spacing"),
      "data-tooltip-type": Ib.TEXT,
      disabled: c,
      dispatch: C,
      inputClassName: KY,
      isTokenizable: !0,
      noBorderOnHover: !0,
      onValueChange: x,
      recordingKey: I,
      smallNudgeAmount: _,
      value: e,
      children: jsx("div", {
        className: Kk,
        children: jsx(_$$o, {})
      })
    })
  });
}
function E({
  inputClassName: e,
  currentFieldValue: t,
  isInStyleModal: i,
  rowElementRef: a,
  recordingKey: s,
  children: o,
  controlRef: l
}) {
  let d = useContext(_$$p);
  let u = useCallback(() => {
    a.current && d?.showBindingUI(a.current, {
      currentFieldValue: t,
      initialPosition: _$$k({
        inputRef: l,
        rowRef: a,
        isInStyleModal: i
      })
    });
  }, [d, t, i, a, l]);
  return jsx(sJ, {
    ref: l,
    inputClassName: e,
    currentFieldValue: t,
    isActive: d?.isShowingBindingUI ?? !1,
    recordingKey: Pt(s, "variableControl"),
    onPickerOpen: u,
    children: o
  });
}
export const e = $$I0;