import { jsx } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { IconButton } from "../905/443068";
import { getI18nString } from "../905/303541";
import { h as _$$h } from "../figma_app/275739";
import { TI } from "../figma_app/318520";
import { KindEnum } from "../905/129884";
import { A } from "../3276/51271";
export function $$u0({
  userId: e,
  onMuteButtonClickCallback: t,
  disabled: i
}) {
  let u = _$$h.getInstance();
  let [p, h] = useState(null);
  let m = TI(e, u);
  let f = useCallback(async () => {
    !i && void 0 !== m && u && (await t(m, u), h(m ? "unmute" : "mute"));
  }, [m, t, h, u, i]);
  useEffect(() => {
    h(null);
  }, [m]);
  let g = () => i ? getI18nString("collaboration.voice.check_your_microphone_permissions_to_start_chatting") : m ? getI18nString("collaboration.voice.click_to_unmute") : getI18nString("collaboration.voice.click_to_mute");
  return jsx(IconButton, {
    onClick: f,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": g(),
    "data-tooltip-timeout-delay": i ? 50 : void 0,
    "aria-label": g(),
    "data-fullscreen-intercept": !0,
    disabled: i,
    children: i || "unmute" !== p && ("mute" === p || m) ? jsx(A.Muted, {}) : jsx(A.Unmuted, {})
  });
}
export const Y = $$u0;