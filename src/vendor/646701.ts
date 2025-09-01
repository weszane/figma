import { ZR, ZI, OX } from "../vendor/470804";
import { A } from "../vendor/144305";
import { iP } from "../vendor/217512";
import { $ } from "../vendor/334217";
import { useRef, useEffect, useState } from "react";
import { X1 } from "../vendor/832351";
import { b as _$$b } from "../vendor/761747";
import { v as _$$v } from "../vendor/272995";
import { o as _$$o } from "../vendor/218120";
function l(e, t) {
  let a = useRef(!0);
  let u = useRef(null);
  useEffect(() => (a.current = !0, () => {
    a.current = !1;
  }), []);
  useEffect(() => {
    let n = u.current;
    a.current ? a.current = !1 : (!n || t.some((e, t) => !Object.is(e, n[t]))) && e();
    u.current = t;
  }, t);
}
export function $$h0(e, t) {
  return function (e, t) {
    var a;
    let h = _$$o((a = A) && a.__esModule ? a.$$default : a, "@react-aria/calendar");
    let D = $(e);
    let f = ZR(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1);
    let p = ZR(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
    l(() => {
      t.isFocused || iP(p);
    }, [p]);
    let y = ZI(t);
    l(() => {
      y && iP(y, "polite", 4e3);
    }, [y]);
    let g = X1([!!e.errorMessage, e.isInvalid, e.validationState]);
    (0, OX).set(t, {
      ariaLabel: e["aria-label"],
      ariaLabelledBy: e["aria-labelledby"],
      errorMessageId: g,
      selectedDateDescription: y
    });
    let [v, b] = useState(!1);
    let E = e.isDisabled || t.isNextVisibleRangeInvalid();
    E && v && (b(!1), t.setFocused(!0));
    let [C, x] = useState(!1);
    let B = e.isDisabled || t.isPreviousVisibleRangeInvalid();
    B && C && (x(!1), t.setFocused(!0));
    let w = _$$b({
      id: e.id,
      "aria-label": [e["aria-label"], p].filter(Boolean).join(", "),
      "aria-labelledby": e["aria-labelledby"]
    });
    return {
      calendarProps: _$$v(D, w, {
        role: "application",
        "aria-details": e["aria-details"] || void 0,
        "aria-describedby": e["aria-describedby"] || void 0
      }),
      nextButtonProps: {
        onPress: () => t.focusNextPage(),
        "aria-label": h.format("next"),
        isDisabled: E,
        onFocusChange: b
      },
      prevButtonProps: {
        onPress: () => t.focusPreviousPage(),
        "aria-label": h.format("previous"),
        isDisabled: B,
        onFocusChange: x
      },
      errorMessageProps: {
        id: g
      },
      title: f
    };
  }(e, t);
}
export const _ = $$h0;