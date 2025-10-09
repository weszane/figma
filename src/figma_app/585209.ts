import { ss } from "../figma_app/479760";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showEmojiPicker, setTypeahead } from "../figma_app/770088";
import { getPinSizeOGx } from "../figma_app/12220";
import { getViewportInfo } from "../figma_app/62612";
import { selectCurrentUser } from "../905/372672";
import { _ as _$$_ } from "../figma_app/433187";
import { NS, Cs } from "../905/603628";
import { j } from "../905/214564";
import { E as _$$E } from "../905/486517";
import { ri } from "../905/337179";
let m = ss;
export function $$g0(e) {
  let t = useSelector(e => e.comments.typeahead);
  return e.mentionsDisabled && t?.type === "mentions" ? null : jsx($$E1, {
    onInsert: e.onInsert,
    onClear: e.onClear,
    isCommunityMentions: !1,
    decoratorsRef: e.decoratorsRef,
    width: e.width,
    direction: e.direction,
    targetRect: e.targetRect,
    useFixedPosition: !0,
    useWindowAsViewport: !0
  });
}
export function $$f2(e) {
  let t = useSelector(e => e.comments.typeaheadPositionOffset);
  let r = useMemo(() => {
    let r = e.position || {
      x: 0,
      y: 0
    };
    return {
      top: t.top + r.y,
      right: t.right + r.x,
      bottom: t.bottom + r.y,
      left: t.left + r.x,
      width: t.width,
      height: t.height
    };
  }, [t, e.position]);
  let s = getPinSizeOGx();
  return jsx($$E1, {
    onInsert: e.onInsert,
    onClear: e.onClear,
    isCommunityMentions: e.isCommunityMentions,
    decoratorsRef: e.decoratorsRef,
    width: s,
    direction: ri.DOWNWARDS,
    targetRect: r
  });
}
export function $$E1(e) {
  let t;
  let r = useSelector(e => e.comments.emojiPicker);
  let o = useSelector(e => e.comments.typeahead);
  let [g, f] = useState(null);
  useEffect(() => {
    o?.type === "suggestions" && f(NS);
  }, [o?.type]);
  let E = useDispatch<AppDispatch>();
  let y = useCallback(() => {
    E(showEmojiPicker({
      visible: !1
    }));
  }, [E]);
  let b = useCallback(e => {
    E(setTypeahead(e));
  }, [E]);
  let T = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let I = useMemo(() => e.viewportInfo ? e.viewportInfo : e.useWindowAsViewport ? {
    isPanning: !1,
    isZooming: !1,
    height: window.innerHeight
  } : T, [e.useWindowAsViewport, T, e.viewportInfo]);
  let S = (I?.isPanning || I?.isZooming) && r?.visible;
  useEffect(() => {
    S && y();
  }, [S, y]);
  let v = selectCurrentUser();
  let A = !!(r && r.visible || o);
  let {
    onClear
  } = e;
  let N = useCallback(() => {
    r && r.visible && y();
    o && onClear();
  }, [r, o, y, onClear]);
  let {
    decoratorsRef
  } = e;
  useEffect(() => {
    decoratorsRef && (decoratorsRef.current = {
      visible: A,
      clearDecorators: N
    });
  }, [N, decoratorsRef, A]);
  t = {
    ...(t = e.useFixedPosition || e.direction !== ri.UPWARDS ? g && e.targetRect.height > 0 && e.targetRect.bottom > I.height - g && e.targetRect.top > I.height - e.targetRect.bottom ? e.useFixedPosition ? {
      useFixedPosition: !0,
      targetRect: e.targetRect,
      direction: ri.UPWARDS
    } : {
      positionFromBottom: {
        left: e.targetRect.left,
        bottom: I.height - e.targetRect.top
      },
      direction: ri.UPWARDS
    } : {
      useFixedPosition: e.useFixedPosition,
      targetRect: e.targetRect,
      direction: ri.DOWNWARDS
    } : {
      positionFromBottom: e.positionFromBottom,
      direction: ri.UPWARDS
    }),
    useWindowAsViewport: e.useWindowAsViewport
  };
  return jsxs("div", {
    style: {
      pointerEvents: "auto"
    },
    children: [r && r.visible && jsx(_$$_, {
      onInsert: r.onPick,
      onCancel: r.onCancel ?? y,
      targetRect: r.targetRect
    }), o && "emojis" === o.type && jsx(j, {
      dispatchTypeahead: b,
      typeahead: o,
      onInsert: e.onInsert,
      onClear: e.onClear,
      width: e.width,
      setMaxTypeaheadHeight: f,
      isComments: !0,
      ...t
    }), v && o && "mentions" === o.type && (o.search || o.mentions.length > 0) && jsx(_$$E, {
      dataTestId: "comment-mentions-typeahead",
      dispatch: E,
      entity: v,
      isComments: !0,
      isCommunityMentions: e.isCommunityMentions,
      onClear: e.onClear,
      onInsert: e.onInsert,
      recordingKey: "mentionsTypeaheadView",
      setMaxTypeaheadHeight: f,
      setTypeahead: b,
      typeahead: o,
      width: e.width,
      zIndex: e.isCommunityMentions ? void 0 : m,
      ...t
    }), o && "suggestions" === o.type && jsx(Cs, {
      setTypeahead: b,
      typeahead: o,
      onInsert: e.onInsert,
      onClear: e.onClear,
      width: e.width,
      ...t
    })]
  });
}
export const Uu = $$g0;
export const rf = $$E1;
export const wV = $$f2;
