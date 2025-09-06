import { zS } from "../figma_app/479760";
import { jsx } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { SmY } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { lg } from "../figma_app/976749";
import { _Q } from "../figma_app/67099";
import { _X, Yb, ZT } from "../figma_app/62612";
import { j as _$$j } from "../905/214564";
import { ri } from "../905/337179";
import { ph, KG, kh } from "../905/50769";
let g = zS;
export function $$f0() {
  let [e, t] = useAtomValueAndSetter(ph);
  let s = useAtomWithSubscription(KG);
  let f = useAtomWithSubscription(kh);
  let x = _X({
    subscribeToUpdates_expensive: !0
  });
  let [y, _] = useState(null);
  let b = "whiteboard" === lg();
  let C = useCallback(() => {
    if (e) {
      let {
        emojis,
        index
      } = e;
      if (emojis && index >= 0 && index < emojis.length) {
        let e = _Q(emojis[index]);
        e && l7.user("insert-emoji", () => {
          trackEventAnalytics("inserted_editor_emoji", {
            emoji: e
          });
          SmY?.replaceCurrentShortcodeWithEmoji(e);
        });
      }
    }
  }, [e]);
  let j = useCallback(() => {
    t(null);
  }, [t]);
  if (!f || !e || null === s) return null;
  let v = Yb(x, f);
  if (!ZT(v, x)) return null;
  let S = {
    top: v.y + x.y - 8,
    bottom: v.y + x.y + v.height + 8,
    left: v.x + x.x,
    right: v.x + x.x + v.width,
    height: v.height,
    width: v.width
  };
  let k = y && S.height > 0 && S.bottom > x.height - y && S.top > x.height - S.bottom ? {
    positionFromBottom: {
      left: S.left,
      bottom: x.height + x.y - S.top
    },
    direction: ri.UPWARDS
  } : {
    targetRect: S,
    direction: ri.DOWNWARDS
  };
  return jsx("div", {
    children: jsx(_$$j, {
      dispatchTypeahead: t,
      onClear: j,
      onInsert: C,
      typeahead: e,
      width: 168,
      ...k,
      emojiImageSet: s,
      isFigJam: b,
      recordingKey: "emojiTypeaheadView",
      setMaxTypeaheadHeight: _,
      zIndex: g
    })
  });
}
export const J = $$f0;