import { C7, N$ } from "../vendor/57788";
import { v } from "../vendor/272995";
import { Y } from "../vendor/259657";
import { useMemo } from "react";
import { d as _$$d } from "../vendor/437567";
export function $$l0(e, t, a) {
  let {
    direction
  } = Y();
  let d = useMemo(() => C7(t), [t]);
  let c = () => {
    var e;
    if (!t.current) return;
    let a = window.event?.target;
    let n = N$(t.current, {
      tabbable: !0
    });
    if (a && (n.currentNode = a, a = n.previousNode()), !a) {
      let e;
      do (e = n.lastChild()) && (a = e); while (e);
    }
    for (; a?.hasAttribute("data-placeholder");) {
      let e = n.previousNode();
      if (e && e.hasAttribute("data-placeholder")) a = e;else break;
    }
    a && a.focus();
  };
  let {
    pressProps
  } = _$$d({
    preventFocusOnPress: !0,
    allowTextSelectionOnPress: !0,
    onPressStart(e) {
      "mouse" === e.pointerType && c();
    },
    onPress(e) {
      ("touch" === e.pointerType || "pen" === e.pointerType) && c();
    }
  });
  return v(pressProps, {
    onKeyDown: u => {
      if (u.currentTarget.contains(u.target) && (u.altKey && ("ArrowDown" === u.key || "ArrowUp" === u.key) && "setOpen" in e && (u.preventDefault(), u.stopPropagation(), e.setOpen(!0)), !a)) switch (u.key) {
        case "ArrowLeft":
          if (u.preventDefault(), u.stopPropagation(), "rtl" === direction) {
            if (t.current) {
              let e = u.target;
              let a = s(t.current, e.getBoundingClientRect().left, -1);
              a && a.focus();
            }
          } else d.focusPrevious();
          break;
        case "ArrowRight":
          if (u.preventDefault(), u.stopPropagation(), "rtl" === direction) {
            if (t.current) {
              let e = u.target;
              let a = s(t.current, e.getBoundingClientRect().left, 1);
              a && a.focus();
            }
          } else d.focusNext();
      }
    }
  });
}
function s(e, t, a) {
  let n = N$(e, {
    tabbable: !0
  });
  let r = n.nextNode();
  let i = null;
  let o = 1 / 0;
  for (; r;) {
    let e = r.getBoundingClientRect().left - t;
    let u = Math.abs(e);
    Math.sign(e) === a && u < o && (i = r, o = u);
    r = n.nextNode();
  }
  return i;
}
export const P = $$l0;