import { useEffect } from "react";
export function $$r0(e, t = {}) {
  let {
    closeOnEsc,
    ignore = []
  } = t;
  useEffect(() => {
    let t = t => {
      if (e && "allClicks" !== ignore) {
        if (Array.isArray(ignore)) {
          for (let e of ignore) if (e && "current" in e && (e = e.current), e && function (e, t) {
            let i = e;
            for (; null !== i;) {
              if (i === t) return !0;
              i = i.parentElement;
            }
            return !1;
          }(t.target, e)) return;
        } else if (ignore(t.target)) return;
        e();
      }
    };
    let n = t => {
      "Escape" === t.key && e && e();
    };
    document.addEventListener("pointerdown", t);
    closeOnEsc && document.addEventListener("keydown", n);
    return () => {
      document.removeEventListener("pointerdown", t);
      closeOnEsc && document.removeEventListener("keydown", n);
    };
  }, [e, closeOnEsc, ignore]);
}
export const Y = $$r0;