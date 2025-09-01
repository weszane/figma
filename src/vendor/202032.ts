import { ZR, OX } from "../vendor/470804";
import { kq, Ec, RZ } from "../vendor/969425";
import { useMemo } from "react";
import { b as _$$b } from "../vendor/761747";
import { v as _$$v } from "../vendor/272995";
import { Y } from "../vendor/259657";
import { i as _$$i } from "../vendor/471124";
export function $$d0(e, t) {
  let {
    startDate = t.visibleRange.start,
    endDate = t.visibleRange.end,
    firstDayOfWeek
  } = e;
  let {
    direction
  } = Y();
  let h = ZR(startDate, endDate, t.timeZone, !0);
  let {
    ariaLabel,
    ariaLabelledBy
  } = (0, OX).get(t);
  let p = _$$b({
    "aria-label": [ariaLabel, h].filter(Boolean).join(", "),
    "aria-labelledby": ariaLabelledBy
  });
  let y = _$$i({
    weekday: e.weekdayStyle || "narrow",
    timeZone: t.timeZone
  });
  let {
    locale
  } = Y();
  let v = useMemo(() => {
    let e = kq(Ec(t.timeZone), locale, firstDayOfWeek);
    return [...Array(7).keys()].map(a => {
      let u = e.add({
        days: a
      }).toDate(t.timeZone);
      return y.format(u);
    });
  }, [locale, t.timeZone, y, firstDayOfWeek]);
  let b = RZ(startDate, locale, firstDayOfWeek);
  return {
    gridProps: _$$v(p, {
      role: "grid",
      "aria-readonly": t.isReadOnly || void 0,
      "aria-disabled": t.isDisabled || void 0,
      "aria-multiselectable": "highlightedRange" in t || void 0,
      onKeyDown: e => {
        switch (e.key) {
          case "Enter":
          case " ":
            e.preventDefault();
            t.selectFocusedDate();
            break;
          case "PageUp":
            e.preventDefault();
            e.stopPropagation();
            t.focusPreviousSection(e.shiftKey);
            break;
          case "PageDown":
            e.preventDefault();
            e.stopPropagation();
            t.focusNextSection(e.shiftKey);
            break;
          case "End":
            e.preventDefault();
            e.stopPropagation();
            t.focusSectionEnd();
            break;
          case "Home":
            e.preventDefault();
            e.stopPropagation();
            t.focusSectionStart();
            break;
          case "ArrowLeft":
            e.preventDefault();
            e.stopPropagation();
            "rtl" === direction ? t.focusNextDay() : t.focusPreviousDay();
            break;
          case "ArrowUp":
            e.preventDefault();
            e.stopPropagation();
            t.focusPreviousRow();
            break;
          case "ArrowRight":
            e.preventDefault();
            e.stopPropagation();
            "rtl" === direction ? t.focusPreviousDay() : t.focusNextDay();
            break;
          case "ArrowDown":
            e.preventDefault();
            e.stopPropagation();
            t.focusNextRow();
            break;
          case "Escape":
            "setAnchorDate" in t && (e.preventDefault(), t.setAnchorDate(null));
        }
      },
      onFocus: () => t.setFocused(!0),
      onBlur: () => t.setFocused(!1)
    }),
    headerProps: {
      "aria-hidden": !0
    },
    weekDays: v,
    weeksInMonth: b
  };
}
export const g = $$d0;