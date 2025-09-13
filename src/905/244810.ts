import { jsx, jsxs } from "react/jsx-runtime";
import r from "classnames";
import { q3, rR } from "../figma_app/258114";
import { KindEnum } from "../905/129884";
import { Ro } from "../figma_app/805373";
import { f } from "../figma_app/750432";
import { W as _$$W } from "../figma_app/54182";
import { c as _$$c } from "../905/784033";
import { R3, DA, Ou, my, wn, yZ } from "../905/497688";
var a = r;
export function $$m0(e) {
  let t = e => void 0 !== e.level && !1 == e.pending && void 0 != e.user;
  let i = e => t(e) ? e.user : q3(e) ? rR(e) : e;
  let r = (r, s) => {
    let o = i(r);
    let d = t(r) ? {
      role: r
    } : {
      user: o
    };
    return jsx("div", {
      className: a()({
        [R3]: !e.isVoiceAvatar,
        [DA]: e.isVoiceAvatar,
        [Ou]: e.overlapped
      }),
      children: jsx(_$$W, {
        ...d,
        children: jsx(Ro, {
          className: my,
          entity: o,
          size: 24
        })
      })
    }, r.id);
  };
  let m = e.maxNumHeads || -1;
  let h = e.entityList ? Array.from(e.entityList) : [];
  let g = [];
  m > 0 && (g = h.splice(m - 1));
  return jsxs("div", {
    className: a()(wn, e.className),
    children: [h.map((e, t) => r(e, t)), g.length ? (t => {
      if (1 === t.length) return r(t[0], e.maxNumHeads);
      let s = t.length < 10 ? `+${t.length}` : `${t.length}`;
      return jsx("div", {
        className: a()(yZ, {
          [Ou]: e.overlapped
        }),
        "data-tooltip-type": KindEnum.SPECIAL,
        "data-tooltip": _$$c,
        "data-tooltip-timeout-delay": 150,
        "data-tooltip-max-width": 300,
        "data-tooltip-offset-y": 8,
        "data-tooltip-interactive": !1,
        "data-tooltip-overflow-user-data": JSON.stringify(t.map(i)),
        "data-tooltip-current-user-data": JSON.stringify(e.currentUser),
        children: e.OverflowItem ? jsx(e.OverflowItem, {
          overflowUsersLength: t.length
        }) : jsx(f, {
          className: my,
          text: s
        })
      });
    })(g) : null]
  });
}
export const W = $$m0;