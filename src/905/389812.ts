import { jsx } from "react/jsx-runtime";
import { f } from "../905/167712";
import { C } from "../905/47358";
import { a as _$$a } from "../905/29104";
import { t as _$$t } from "../905/303541";
export function $$l0({
  isChatVisible: e,
  setIsChatVisible: t,
  disabled: i
}) {
  let l = _$$a() ? _$$t("sites.panel.chat_tooltip") : _$$t("sites.panel.chat_tooltip.ai");
  return jsx(f, {
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