import { jsxs, jsx } from "react/jsx-runtime";
import r from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { getPermissionLevelName } from "../figma_app/12796";
import { CM, hP } from "../905/144598";
import { zn, H, $S, NE, UU } from "../905/372455";
var a = r;
export function $$c0(e) {
  let t = e.user;
  let i = e.pending ? e.pendingEmail : t.name || t.email;
  let r = {
    id: t.id,
    name: t.name,
    email: t.email,
    img_url: t.img_url,
    handle: t.handle
  };
  return jsxs("div", {
    className: zn,
    children: [jsx("div", {
      className: a()(t.plan ? _$$s.w36.mr4.$ : H),
      children: t.plan ? jsx(CM, {
        user: r,
        id: t.id,
        plan: t.plan
      }) : jsx(hP, {
        user: r,
        id: t.id,
        pending: e.pending
      })
    }), jsxs("div", {
      className: $S,
      children: [jsx("div", {
        className: e.pending ? NE : UU,
        children: i
      }, `name-${e.id}`), jsx("span", {
        className: _$$s.colorTextSecondary.$,
        children: getPermissionLevelName(e.level)
      })]
    })]
  });
}
export const i = $$c0;