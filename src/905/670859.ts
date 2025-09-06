import { jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { BrowserInfo } from "../figma_app/778880";
import { $z } from "../figma_app/617427";
import { Ph } from "../905/160095";
import { to } from "../905/156213";
import { kn } from "../905/219868";
export function $$c0({
  url: e,
  title: t
}) {
  let i = useDispatch();
  return BrowserInfo.isMeetDevice ? jsx($z, {
    variant: "link",
    onClick: () => i(to({
      type: kn,
      data: {
        url: e,
        title: t
      }
    })),
    children: t
  }) : jsx(Ph, {
    href: e,
    newTab: !0,
    trusted: !0,
    children: t
  });
}
export const V = $$c0;