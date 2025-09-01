import { jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useContext } from "react";
import { Qv } from "../905/959312";
import { r as _$$r } from "../905/577641";
import { A } from "../905/268204";
let l = createContext(void 0);
let $$d1 = l.Provider;
let $$c0 = forwardRef(({
  recordingKey: e,
  children: t,
  href: r,
  trusted: d,
  newTab: c,
  onClick: u,
  htmlAttributes: p,
  ..._
}, h) => {
  let m = useContext(l);
  let g = d ?? function (e) {
    if (!A) return !1;
    try {
      let t = window.location.origin;
      return new URL(e, t).origin === t;
    } catch {
      return !1;
    }
  }(r) ? "noopener" : "noopener nofollow noreferrer ugc";
  let f = Qv(u || m ? e => {
    m?.(e);
    u?.(e);
  } : void 0, {
    eventName: "click",
    recordingKey: e
  }, [u, m]);
  return jsx("a", {
    target: c ? "_blank" : void 0,
    rel: g,
    ..._$$r,
    ...p,
    ..._,
    ref: h,
    onClick: f,
    href: r,
    children: t
  });
});
$$c0.displayName = "LinkPrimitive";
export const _ = $$c0;
export const a = $$d1;