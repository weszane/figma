import { jsx, Fragment } from "react/jsx-runtime";
import { Wl } from "../figma_app/318520";
import { bU } from "../figma_app/120529";
import { A } from "../3276/51271";
import { AL, Nn } from "../9410/232922";
var $$l0 = (e => (e[e.NONE = 0] = "NONE", e[e.DEFAULT = 2] = "DEFAULT", e[e.MINI = 1] = "MINI", e))($$l0 || {});
export function $$d1({
  userId: e,
  userName: t,
  microphoneStyle: n,
  call: a,
  volumeIconMutedState: l,
  alwaysShowVoiceBars: d,
  className: m
}) {
  return n === bU.HEADPHONES ? jsx(A.HeadphonesIcon, {
    size: 24,
    className: AL
  }) : n !== bU.NONE && a ? jsx(c, {
    userId: e,
    call: a,
    className: m,
    volumeIconMutedState: l || 0,
    alwaysShowVoiceBars: d,
    userName: t
  }) : jsx(Fragment, {});
}
function c({
  userId: e,
  call: t,
  volumeIconMutedState: n,
  alwaysShowVoiceBars: i,
  className: l,
  userName: d
}) {
  let c = Wl(e, t);
  if (!c) return null;
  if (c.isMuted) {
    if (2 === n) return jsx(A.Muted, {});
    if (1 === n) {
      let e = Nn;
      l && (e += " " + l);
      return jsx("span", {
        className: e,
        children: jsx(A.MutedMini, {
          userName: d
        })
      });
    }
    return null;
  }
  return jsx(A.UnmutedBars, {
    alwaysShowVoiceBars: i,
    className: l,
    volume: c?.volumeLevel,
    userName: d
  });
}
export const S = $$l0;
export const i = $$d1;