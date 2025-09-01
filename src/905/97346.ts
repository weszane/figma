import { useRef, useState } from "react";
import { A as _$$A } from "../vendor/723372";
import { wo, NC, dG, Dm } from "../905/955878";
import { l as _$$l } from "../905/490996";
import { v as _$$v } from "../905/475481";
import { eB, GC } from "../905/914656";
import { f2, Re, TX, VO, bl, S8, WQ } from "../905/268491";
let c = {
  mouse: 8,
  pen: 16,
  touch: 16
};
function u(e) {
  return c[e] ?? c.mouse;
}
var p = "use-drag__draggingBody__Nz68k";
export let $$m1 = $$h0;
export function $$h0(e) {
  let t = useRef(f2);
  let i = useRef(null);
  let c = useRef(null);
  let m = useRef(null);
  let h = useRef(0);
  let g = useRef(_$$l);
  let [f, _] = useState(!1);
  if (e.disabled) return [!1, (...e) => _$$v(...e)];
  function A(e) {
    t.current = e(t.current);
  }
  function y(e) {
    e.addEventListener("abort", () => g.current(null, !0));
  }
  function b(e) {
    return Re(TX(e), t.current);
  }
  function v(t, i) {
    _(!0);
    c.current = i;
    i.setPointerCapture(t.pointerId);
    i.setAttribute("data-pointer-capture", "");
    document.body.classList.add(p);
    "mouse" !== t.pointerType && document.addEventListener("touchmove", wo, {
      passive: !1
    });
    e.onDragStart?.(t, {
      registerAbortSignal: y
    });
    let n = b(t);
    e.onDrag?.(Object.assign(t, {
      delta: n
    }), {
      updateStart: A
    });
  }
  function I(t, n) {
    if (!t || t.pointerId === i.current) {
      if (n && m.current) {
        m.current = null;
        i.current = null;
        return;
      }
      if (c.current?.removeAttribute("data-pointer-capture"), c.current = null, document.removeEventListener("touchmove", wo), document.body.classList.remove(p), n || window.getSelection()?.empty(), _(!1), i.current = null, n && !t) e.onDragEnd?.({
        cancelled: n
      });else {
        let i = b(t);
        e.onDragEnd?.(Object.assign(t, {
          delta: i,
          cancelled: n
        }));
      }
    }
  }
  function E(i) {
    if (!e.deadZone || !m.current) return !1;
    let n = "pointermove" === i.type;
    let r = b(i);
    let a = VO(r) < u(i.pointerType);
    if (n && a) return !0;
    if (0 === i.buttons || "mouse" !== i.pointerType && performance.now() - h.current > 900 || eB(i.currentTarget) || GC(i.target)) {
      I(i, !0);
      return !0;
    }
    if (a) {
      let e = bl(t.current, TX(i), i.currentTarget.getBoundingClientRect());
      if (!e) return !0;
      t.current = e;
    } else {
      let e = S8(r, u(i.pointerType));
      t.current = WQ(t.current, e);
    }
    v(i, m.current);
    m.current = null;
    return !0;
  }
  g.current = I;
  let x = {
    onPointerDown(n) {
      if (null != i.current || !e.customButtonCheck && 0 !== n.button || n.target.hasAttribute("data-temporary-fpl-no-drag")) return;
      let r = e.onBeforeDrag?.(n);
      if (!1 === r) return;
      n.stopPropagation();
      t.current = TX(n);
      i.current = n.pointerId;
      h.current = performance.now();
      let s = r instanceof Element ? r : n.currentTarget;
      if (e.deadZone && !NC(n) && !n.target.hasAttribute("data-no-dead-zone")) {
        m.current = s;
        return;
      }
      window.getSelection()?.empty();
      v(n, s);
    },
    onPointerMove(t) {
      if (t.pointerId !== i.current || E(t)) return;
      let n = b(t);
      e.onDrag?.(Object.assign(t, {
        delta: n
      }), {
        updateStart: A
      });
    },
    onPointerLeave(e) {
      e.pointerId === i.current && E(e);
    },
    onPointerUp(t) {
      I(t, !!(e.deadZone && m.current));
    },
    onLostPointerCapture(t) {
      "touch" !== t.pointerType && document.pointerLockElement !== t.target && I(t, !!(e.deadZone && m.current));
    },
    onPointerCancel(e) {
      I(e, !0);
    },
    onMouseDown: dG,
    className: _$$A("use-drag__base__YCEp1", Dm, {
      "use-drag__dragging__ZATZH": f
    })
  };
  return [f, (...e) => _$$v(x, ...e)];
}
export const M = $$h0;
export const i = $$m1;