import { zS } from "../figma_app/479760";
import { jsx } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { EmojiCppBindings } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { lg } from "../figma_app/976749";
import { _Q } from "../figma_app/67099";
import { _X, Yb, ZT } from "../figma_app/62612";
import { j as _$$j } from "../905/214564";
import { ri } from "../905/337179";
import { ph, KG, kh } from "../905/50769";
let f = zS;
export function $$_0() {
  let [e, t] = useAtomValueAndSetter(ph);
  let i = useAtomWithSubscription(KG);
  let _ = useAtomWithSubscription(kh);
  let x = _X({
    subscribeToUpdates_expensive: !0
  });
  let [g, j] = useState(null);
  let b = "whiteboard" === lg();
  let y = useCallback(() => {
    if (e) {
      let {
        emojis,
        index
      } = e;
      if (emojis && index >= 0 && index < emojis.length) {
        let e = _Q(emojis[index]);
        e && permissionScopeHandler.user("insert-emoji", () => {
          trackEventAnalytics("inserted_editor_emoji", {
            emoji: e
          });
          EmojiCppBindings?.replaceCurrentShortcodeWithEmoji(e);
        });
      }
    }
  }, [e]);
  let v = useCallback(() => {
    t(null);
  }, [t]);
  if (!_ || !e || null === i) return null;
  let C = Yb(x, _);
  if (!ZT(C, x)) return null;
  let T = {
    top: C.y + x.y - 8,
    bottom: C.y + x.y + C.height + 8,
    left: C.x + x.x,
    right: C.x + x.x + C.width,
    height: C.height,
    width: C.width
  };
  let E = g && T.height > 0 && T.bottom > x.height - g && T.top > x.height - T.bottom ? {
    positionFromBottom: {
      left: T.left,
      bottom: x.height + x.y - T.top
    },
    direction: ri.UPWARDS
  } : {
    targetRect: T,
    direction: ri.DOWNWARDS
  };
  return jsx("div", {
    children: jsx(_$$j, {
      dispatchTypeahead: t,
      onClear: v,
      onInsert: y,
      typeahead: e,
      width: 168,
      ...E,
      emojiImageSet: i,
      isFigJam: b,
      recordingKey: "emojiTypeaheadView",
      setMaxTypeaheadHeight: j,
      zIndex: f
    })
  });
}
export const J = $$_0;