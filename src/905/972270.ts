import { jsxs, jsx } from "react/jsx-runtime";
import { UserAvatar, AvatarSize } from "../905/590952";
export function $$a0({
  avatarEntity: e,
  authorDisplayName: t,
  authorProfileHandle: i
}) {
  return jsxs("div", {
    className: "author_dropdown_option--profileRow--lDH-T",
    children: [e ? jsx(UserAvatar, {
      user: e,
      size: AvatarSize.MEDIUM
    }) : null, jsxs("div", {
      className: "author_dropdown_option--profileTextContainer--HNSfc",
      children: [jsx("div", {
        className: "author_dropdown_option--profileDisplayName--XU0Ry text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: t
      }), !!i && jsx("div", {
        className: "author_dropdown_option--profileHandle--XSlJL text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: `@${i}`
      })]
    })]
  });
}
export const A = $$a0;