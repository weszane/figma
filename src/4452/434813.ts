import { jsxs, jsx } from "react/jsx-runtime";
import { AvatarSize, UserAvatar } from "../905/590952";
import { KindEnum } from "../905/129884";
import { W } from "../figma_app/54182";
let l = AvatarSize.MEDIUM20;
export function $$o0(e) {
  let t = e.users.slice(0, e.numAvatarsToDisplay);
  let a = e.users.slice(e.numAvatarsToDisplay);
  1 === a.length && t.push(a.pop());
  let o = a.slice(0, 25).map(e => e.handle).join("\n");
  return jsxs("div", {
    className: "avatars_pile--viewersList--nxwgy",
    children: [e.totalNum - t.length > 0 && jsx("div", {
      className: "avatars_pile--horizontalPileNumber--6h3zK avatars_pile--baseNumber--Qqq-z",
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": o,
      children: e.totalNum - t.length
    }), t.reverse().map(t => jsx("div", {
      className: "avatars_pile--avatar--6RPYa",
      children: jsx(W, {
        user: t,
        children: jsx(UserAvatar, {
          user: t,
          size: e.avatarSize ? e.avatarSize : l
        })
      })
    }, t.id))]
  });
}
export const u = $$o0;