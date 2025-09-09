import { jsx } from "react/jsx-runtime";
import { useMemo, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { E } from "../905/632989";
import o from "classnames";
import { zq } from "../905/193529";
import { l as _$$l } from "../905/600666";
import { o as _$$o } from "../905/602035";
import { rH } from "../figma_app/404319";
var l = o;
export function $$m0({
  onShowPin: e,
  onShowThread: t,
  threadId: i,
  isDebugMode: o,
  setPos: m,
  setSize: h,
  pinStyles: g
}) {
  let [f, _, A] = _$$l(o ? [i] : []);
  let y = useMemo(() => _$$o({
    setPos: m,
    setSize: h
  }), [m, h]);
  let b = useDispatch();
  let v = useSelector(e => e.screenreader.lastCreatedCommentId);
  useLayoutEffect(() => {
    v && i === v && (A?.current?.focus(), b(zq({
      lastCreatedCommentId: null
    })));
  }, [v, i, b, A]);
  return jsx(E, {
    htmlAttributes: {
      id: `accessibility-comment-pin-${i}`,
      role: "button",
      tabIndex: -1,
      onFocus: e
    },
    ref: _,
    style: g,
    className: l()(rH, f),
    "aria-label": y,
    onClick: t,
    children: void 0
  });
}
export const g = $$m0;
