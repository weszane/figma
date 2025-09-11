import { jsx } from "react/jsx-runtime";
import { setupToggleButton } from "../905/167712";
import { C } from "../905/47358";
import { a as _$$a } from "../905/29104";
import { getI18nString } from "../905/303541";
export function $$l0({
  isChatVisible: e,
  setIsChatVisible: t,
  disabled: i
}) {
  let l = _$$a() ? getI18nString("sites.panel.chat_tooltip") : getI18nString("sites.panel.chat_tooltip.ai");
  return jsx(setupToggleButton, {
    onChange: () => t(!e),
    "aria-label": l,
    checked: e,
    offIcon: jsx(C, {}),
    onIcon: jsx(C, {}),
    variant: "highlighted",
    disabled: i,
    recordingKey: "codeChatButton"
  });
}
export const U = $$l0;