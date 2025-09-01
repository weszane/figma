import { jsx } from "react/jsx-runtime";
import { useContext } from "react";
import i from "classnames";
import { d as _$$d } from "../vendor/456530";
import { G } from "../vendor/697048";
import { P } from "../vendor/348225";
import { m as _$$m } from "../3276/310657";
import { lo } from "../3276/256210";
import { h as _$$h } from "../3276/814771";
var s = i;
export function $$p0(e) {
  let {
    borderInfo
  } = useContext(_$$h);
  let n = borderInfo.width;
  let i = e.docked ? 0 : 8;
  let p = _$$d(i);
  let h = G(p, [8, n, 0], [0, 0, 1]);
  let f = G(p, [8, 0], [0, 1]);
  let _ = 0 === borderInfo.width ? f : h;
  return jsx(P.div, {
    className: s()({
      "positioned_multiplayer_bell--multiplayerBellContainer--Ad5kg": !0,
      "positioned_multiplayer_bell--ghost--vYS1y": e.ghost
    }),
    animate: {
      top: i
    },
    style: {
      top: p
    },
    initial: !1,
    transition: {
      type: "easeout",
      duration: lo
    },
    children: jsx(_$$m, {
      ...e,
      docked: !!e.docked && _,
      dockedBorderInfo: borderInfo,
      recordingKey: "multiplayerBell",
      isTabAccessible: e.isTabAccessible
    })
  }, e.renderKey);
}
export const Y = $$p0;