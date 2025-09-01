import { u as _$$u } from "../905/700827";
import { jsx } from "react/jsx-runtime";
import { Ay } from "../905/612521";
import { gV, wl } from "../figma_app/640564";
import { p as _$$p } from "../905/428660";
import { M } from "../905/722875";
let l = e => ({
  type: "SELECT_VIEW",
  payload: e
});
let d = /^\/community\/(file|widget|plugin)\/(\d+)/;
let c = /^\/@(.+)/;
let u = _$$u;
export function $$p0({
  to: e,
  onClickTracking: t,
  onClick: i,
  onClickOverride: p,
  className: m,
  children: h,
  style: g,
  onRef: f,
  target: _
}) {
  return jsx("a", {
    href: e,
    onClick: n => {
      if (t?.(n), n.ctrlKey || n.metaKey) {
        p && (n.preventDefault(), p(n));
        return;
      }
      if (i && i(n), p) {
        n.preventDefault();
        p(n);
        return;
      }
      if (function (e) {
        let t = gV(window.location.pathname);
        let i = gV(e);
        return t.reactRouterHandled && i.reactRouterHandled;
      }(e)) {
        n.preventDefault();
        Ay.push(e);
        return;
      }
      M() && function (e, t) {
        let i = !1;
        let {
          pathname
        } = window.location;
        if (!(/^\/community/.test(pathname) && M()) || d.test(e) || c.test(e)) {
          if (d.test(e)) {
            i = !0;
            let [t, n, r] = e.match(d);
            u(l(_$$p(n, r)));
          } else if (c.test(e)) {
            i = !0;
            u(l({
              view: "communityHub",
              subView: "handle",
              handle: e.match(c)[1]
            }));
          } else {
            i = !0;
            let [t, n] = e.split("?");
            n = n ? `?${n}` : "";
            u(l({
              data: wl(t, n),
              subView: "searchAndBrowse",
              view: "communityHub"
            }));
          }
          i && t && (t.preventDefault(), t.stopPropagation());
        }
      }(e, n);
    },
    style: g,
    className: m,
    ref: e => {
      f?.(e);
    },
    target: _,
    children: h
  });
}
export const A6 = $$p0;