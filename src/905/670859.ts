import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { BrowserInfo } from "../figma_app/778880";
import { WithTrackedButton } from "../figma_app/617427";
import { TrackedLink } from "../905/160095";
import { showModalHandler } from "../905/156213";
import { googleDeviceIframeModal } from "../905/219868";
export function $$c0({
  url: e,
  title: t
}) {
  let i = useDispatch<AppDispatch>();
  return BrowserInfo.isMeetDevice ? jsx(WithTrackedButton, {
    variant: "link",
    onClick: () => i(showModalHandler({
      type: googleDeviceIframeModal,
      data: {
        url: e,
        title: t
      }
    })),
    children: t
  }) : jsx(TrackedLink, {
    href: e,
    newTab: !0,
    trusted: !0,
    children: t
  });
}
export const V = $$c0;
