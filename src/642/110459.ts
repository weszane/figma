import { jsx } from "react/jsx-runtime";
import { useCallback, useMemo, useRef } from "react";
import { f as _$$f } from "../905/167712";
import { _ as _$$_ } from "../905/410717";
import { j as _$$j } from "../905/519202";
import { RR } from "../figma_app/338442";
import { selectWithShallowEqual } from "../905/103090";
import { Pt } from "../figma_app/806412";
import { getI18nString } from "../905/303541";
import { Y5 } from "../figma_app/455680";
import { gl, oV } from "../905/216495";
import { lJ } from "../905/275640";
import { SG, u as _$$u } from "../figma_app/852050";
import { Sh } from "../figma_app/889655";
import { Ib } from "../905/129884";
import { Tn, On } from "../figma_app/323320";
import { JQ } from "../figma_app/841644";
import { u3 } from "../figma_app/152690";
import { ND, $V } from "../figma_app/755783";
import { RK } from "../1528/277451";
let v = Tn();
export function $$S0(e) {
  let t = useCallback(e => {
    Y5.updateSelectionProperties({
      visible: e
    });
  }, []);
  let s = useMemo(On, []);
  let {
    isDefReferencedBySelection,
    visibilityIsBoundToComponentProp
  } = selectWithShallowEqual(e => ({
    isDefReferencedBySelection: !!s(e, RR.VISIBLE),
    visibilityIsBoundToComponentProp: v(e, Sh(e), RR.VISIBLE)
  }));
  let w = SG(["VISIBLE"]).data ?? [];
  let [T] = lJ("visible");
  let {
    consumedVariable
  } = u3(["VISIBLE"]);
  let I = useRef(null);
  let [E, M] = ND("visibility-icon");
  let A = $V();
  let P = _$$u(A);
  let L = !!consumedVariable && !!P;
  let R = L || visibilityIsBoundToComponentProp || isDefReferencedBySelection;
  let O = !L && !visibilityIsBoundToComponentProp && w.length > 0;
  let D = T ? getI18nString("fullscreen.properties_panel.tooltip_hide") : getI18nString("fullscreen.properties_panel.tooltip_show");
  return jsx("div", {
    className: RK,
    children: jsx(JQ, {
      ref: I,
      currentFieldValue: !!gl(T) || T,
      isActive: E,
      disabled: e.disabled || !O,
      onPickerOpen: () => M(I.current),
      recordingKey: Pt(e, "visibilityVariableControl"),
      dataTestId: "visibility-variable-control",
      openOnRightClick: !0,
      children: jsx(_$$f, {
        "aria-label": D,
        checked: !R && !T,
        disabled: R,
        htmlAttributes: {
          "data-test-id": "visibility-variable-control",
          "data-tooltip": D,
          "data-tooltip-type": Ib.TEXT
        },
        mixed: !R && gl(T),
        offIcon: jsx(_$$_, {}),
        onChange: () => t(T === oV || !T),
        onIcon: jsx(_$$j, {}),
        recordingKey: Pt(e, "visibleToggle"),
        variant: "highlighted"
      })
    })
  });
}
export const C = $$S0;