import { jsx } from "react/jsx-runtime";
import { useRef, useCallback } from "react";
import { lQ } from "../905/934246";
import { F } from "../905/768014";
import { isFakeTouchEvent } from "../905/955878";
import { hg } from "../905/705398";
import { getFeatureFlags } from "../905/601108";
import { cZ } from "../figma_app/272902";
import { $z } from "../figma_app/297733";
export function $$p0(e) {
  return getFeatureFlags().fpl_app_focus_improvements ? jsx(_, {
    ...e
  }) : jsx(h, {
    ...e
  });
}
function _({
  children: e
}) {
  let t = function () {
    let e = useRef(!1);
    let t = useRef("pointer");
    return {
      onFocus(r) {
        let {
          target
        } = r;
        !(e.current || !(target instanceof HTMLElement) || m(r)) && (null == r.relatedTarget || r.relatedTarget.closest('dialog,[role="dialog"]')) && ("pointer" !== t.current || target instanceof HTMLInputElement || target.blur());
      },
      onBlur(e) {
        !(!e.relatedTarget || m(e)) && (e.currentTarget.contains(e.relatedTarget) || (t.current = F.type));
      },
      onPointerDown(r) {
        m(r) || (t.current = "pointer");
        e.current = isFakeTouchEvent(r);
      },
      onPointerUp(t) {
        let r = t.target;
        let n = !1;
        !e.current && (r instanceof HTMLLabelElement && (r = r.control, n = !0), r && (r instanceof HTMLButtonElement || hg(r)) && (n ? r.addEventListener("click", () => r.blur(), {
          once: !0
        }) : r.blur()));
      },
      onKeyDown(e) {
        "Escape" === e.key && (e.stopPropagation(), e.preventDefault(), $z());
      }
    };
  }();
  return jsx("div", {
    ...t,
    children: e
  });
}
function h({
  children: e
}) {
  let t = function (e) {
    let t = useRef(lQ);
    let r = useRef(lQ);
    let n = useRef(lQ);
    let d = useRef(!1);
    return useCallback(e => {
      cZ(void 0, e);
      t.current();
      r.current();
      n.current();
      n.current = g(e, "focusin", e => {
        let {
          target
        } = e;
        if (d.current || !(target instanceof HTMLElement) || null != e.relatedTarget || "keyboard" === F.type) return;
        let r = target.getAttribute("aria-haspopup");
        null !== r && "false" !== r && target.blur();
      });
      r.current = g(e, "pointerdown", e => {
        d.current = isFakeTouchEvent(e);
      });
      t.current = g(e, "pointerup", e => {
        let {
          target
        } = e;
        let r = !1;
        !d.current && (target instanceof HTMLLabelElement && (t = target.control, r = !0), target && (target instanceof HTMLButtonElement || hg(target)) && (r ? target.addEventListener("click", () => target.blur(), {
          once: !0
        }) : target.blur()));
      });
    }, [e]);
  }();
  return jsx("div", {
    ref: t,
    children: e
  });
}
function m(e) {
  return !e.currentTarget.contains(e.target);
}
function g(e, t, r) {
  return e ? (e.addEventListener(t, r), () => e.removeEventListener(t, r)) : lQ;
}
export const bo = $$p0;