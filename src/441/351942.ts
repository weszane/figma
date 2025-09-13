import { jsx } from "react/jsx-runtime";
import { memo, useRef, useEffect } from "react";
import { Fullscreen } from "../figma_app/763686";
import { SvgComponent } from "../905/714743";
import { Ao, RN } from "../905/676397";
import { EE, lB } from "../figma_app/731583";
import { getViewportInfo, scaleRect } from "../figma_app/62612";
import { A } from "../b2835def/733644";
export let $$c0 = memo(function (e) {
  let {
    nodeId
  } = e;
  let i = useRef(null);
  let o = useRef(null);
  let s = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  useEffect(() => {
    let e = EE(`loading-embed-${nodeId}`, [nodeId], e => {
      if (!e.position) {
        Fullscreen.removeLoadingEmbed(nodeId);
        return;
      }
      o.current = e.position;
      p(i, s, o);
    });
    let n = e.currentNodePosition[nodeId]?.position;
    n ? (o.current = n, p(i, s, o)) : Fullscreen.removeLoadingEmbed(nodeId);
    return () => {
      lB(`loading-embed-${nodeId}`);
    };
  }, [nodeId, s]);
  return jsx("div", {
    ref: i,
    children: jsx(m, {})
  });
});
function m() {
  return jsx("span", {
    className: "loading_embed_overlay--root--UKqJ8",
    children: jsx(SvgComponent, {
      svg: A,
      className: "loading_embed_overlay--spinner--bw3Cv",
      autosize: !0
    })
  });
}
function p(e, t, i) {
  if (!e.current || !t || !i.current) return;
  let n = e.current;
  let r = i.current;
  let a = scaleRect(t, r);
  let o = 28 * t.zoomScale;
  n.style.transform = `translate(${a.x + (a.width - o) / 2 + t.x}px, ${a.y + (a.height * Ao / RN - o) / 2 + t.y}px) rotate(${r.angle}deg) scale(${t.zoomScale})`;
  n.style.transformOrigin = "top left";
  n.style.position = "absolute";
}
export const _ = $$c0;