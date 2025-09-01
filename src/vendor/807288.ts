import { OX, cf } from "../vendor/470804";
import { A as _$$A } from "../vendor/144305";
import { ro, NV, cK } from "../vendor/969425";
import { k as _$$k } from "../vendor/155810";
import { I as _$$I } from "../vendor/449592";
import { e as _$$e } from "../vendor/344038";
import { o as _$$o } from "../vendor/92922";
import { m as _$$m } from "../vendor/777912";
import { v } from "../vendor/272995";
import { d as _$$d } from "../vendor/437567";
import { ME } from "../vendor/49330";
import { o as _$$o2 } from "../vendor/218120";
import { i as _$$i } from "../vendor/471124";
import { useMemo, useRef, useEffect } from "react";
export function $$y0(e, t, a) {
  var y;
  let g;
  let {
    date,
    isDisabled
  } = e;
  let {
    errorMessageId,
    selectedDateDescription
  } = (0, OX).get(t);
  let x = _$$o2((y = _$$A) && y.__esModule ? y.$$default : y, "@react-aria/calendar");
  let B = _$$i({
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    era: cf(date),
    timeZone: t.timeZone
  });
  let w = t.isSelected(date);
  let F = t.isCellFocused(date) && !e.isOutsideMonth;
  b = isDisabled || t.isCellDisabled(date);
  let k = t.isCellUnavailable(date);
  let P = !isDisabled && !k;
  let $ = t.isValueInvalid && !!("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && date.compare(t.highlightedRange.start) >= 0 && 0 >= date.compare(t.highlightedRange.end) : t.value && ro(t.value, date));
  $ && (w = !0);
  v = _$$k(date, NV);
  let R = useMemo(() => date.toDate(t.timeZone), [date, t.timeZone]);
  let A = cK(date, t.timeZone);
  let S = useMemo(() => {
    let e = "";
    "highlightedRange" in t && t.value && !t.anchorDate && (ro(date, t.value.start) || ro(date, t.value.end)) && (e = selectedDateDescription + ", ");
    e += B.format(R);
    A ? e = x.format(w ? "todayDateSelected" : "todayDate", {
      date: e
    }) : w && (e = x.format("dateSelected", {
      date: e
    }));
    t.minValue && ro(date, t.minValue) ? e += ", " + x.format("minimumDate") : t.maxValue && ro(date, t.maxValue) && (e += ", " + x.format("maximumDate"));
    return e;
  }, [B, R, x, w, A, date, t, selectedDateDescription]);
  let T = "";
  "anchorDate" in t && F && !t.isReadOnly && P && (T = t.anchorDate ? x.format("finishRangeSelectionPrompt") : x.format("startRangeSelectionPrompt"));
  let M = _$$I(T);
  let V = useRef(!1);
  let I = useRef(!1);
  let N = useRef(void 0);
  let {
    pressProps,
    isPressed
  } = _$$d({
    shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
    preventFocusOnPress: !0,
    isDisabled: !P || t.isReadOnly,
    onPressStart(e) {
      if (t.isReadOnly) {
        t.setFocusedDate(date);
        return;
      }
      if ("highlightedRange" in t && !t.anchorDate && ("mouse" === e.pointerType || "touch" === e.pointerType)) {
        if (t.highlightedRange && !$) {
          if (ro(date, t.highlightedRange.start)) {
            t.setAnchorDate(t.highlightedRange.end);
            t.setFocusedDate(date);
            t.setDragging(!0);
            I.current = !0;
            return;
          }
          if (ro(date, t.highlightedRange.end)) {
            t.setAnchorDate(t.highlightedRange.start);
            t.setFocusedDate(date);
            t.setDragging(!0);
            I.current = !0;
            return;
          }
        }
        let a = () => {
          t.setDragging(!0);
          N.current = void 0;
          t.selectDate(date);
          t.setFocusedDate(date);
          V.current = !0;
        };
        "touch" === e.pointerType ? N.current = setTimeout(a, 200) : a();
      }
    },
    onPressEnd() {
      I.current = !1;
      V.current = !1;
      clearTimeout(N.current);
      N.current = void 0;
    },
    onPress() {
      "anchorDate" in t || t.isReadOnly || (t.selectDate(date), t.setFocusedDate(date));
    },
    onPressUp(e) {
      if (!t.isReadOnly && ("anchorDate" in t && N.current && (t.selectDate(date), t.setFocusedDate(date)), "anchorDate" in t)) {
        if (I.current) t.setAnchorDate(date);else if (t.anchorDate && !V.current) {
          t.selectDate(date);
          t.setFocusedDate(date);
        } else if ("keyboard" !== e.pointerType || t.anchorDate) "virtual" === e.pointerType && (t.selectDate(date), t.setFocusedDate(date));else {
          t.selectDate(date);
          let e = date.add({
            days: 1
          });
          t.isInvalid(e) && (e = date.subtract({
            days: 1
          }));
          t.isInvalid(e) || t.setFocusedDate(e);
        }
      }
    }
  });
  isDisabled || (g = ro(date, t.focusedDate) ? 0 : -1);
  useEffect(() => {
    F && a.current && (_$$e(a.current), "pointer" !== ME() && document.activeElement === a.current && _$$o(a.current, {
      containingElement: _$$m(a.current)
    }));
  }, [F, a]);
  let j = _$$i({
    day: "numeric",
    timeZone: t.timeZone,
    calendar: date.calendar.identifier
  });
  let z = useMemo(() => j.formatToParts(R).find(e => "day" === e.type).value, [j, R]);
  return {
    cellProps: {
      role: "gridcell",
      "aria-disabled": !P || void 0,
      "aria-selected": w || void 0,
      "aria-invalid": $ || void 0
    },
    buttonProps: v(pressProps, {
      onFocus() {
        isDisabled || t.setFocusedDate(date);
      },
      tabIndex: g,
      role: "button",
      "aria-disabled": !P || void 0,
      "aria-label": S,
      "aria-invalid": $ || void 0,
      "aria-describedby": [$ ? errorMessageId : void 0, M["aria-describedby"]].filter(Boolean).join(" ") || void 0,
      onPointerEnter(e) {
        "highlightDate" in t && ("touch" !== e.pointerType || t.isDragging) && P && t.highlightDate(date);
      },
      onPointerDown(e) {
        "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId);
      },
      onContextMenu(e) {
        e.preventDefault();
      }
    }),
    isPressed,
    isFocused: F,
    isSelected: w,
    isDisabled,
    isUnavailable: k,
    isOutsideVisibleRange: 0 > date.compare(t.visibleRange.start) || date.compare(t.visibleRange.end) > 0,
    isInvalid: $,
    formattedDate: z
  };
}
export const E = $$y0;