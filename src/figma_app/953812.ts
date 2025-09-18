import { jsx } from "react/jsx-runtime";
import { isChromebookTabbed } from "../figma_app/347146";
import { desktopAPIInstance } from "../figma_app/876459";
import { f } from "../figma_app/316722";
import { Y } from "../figma_app/667500";
export function $$l0() {
  return !!desktopAPIInstance || isChromebookTabbed();
}
export function $$d1({
  parentBackgroundColor: e
}) {
  let {
    goBack,
    goForward,
    canGoBack,
    canGoForward
  } = Y();
  return jsx(f, {
    onLeftClick: goBack,
    onRightClick: goForward,
    isLeftEnabled: canGoBack,
    isRightEnabled: canGoForward,
    parentBackgroundColor: e
  });
}
export const E = $$l0;
export const J = $$d1;