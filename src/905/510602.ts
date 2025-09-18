import { jsx, Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { isNotNullish } from "../figma_app/95419";
import { s as _$$s } from "../905/583953";
import { getFeatureFlags } from "../905/601108";
import { useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { XC } from "../905/512783";
import { c4 } from "../figma_app/70421";
import { EO, l0 } from "../figma_app/536669";
import { g as _$$g } from "../905/88169";
import { g as _$$g2 } from "../905/388772";
import { x } from "../905/520155";
function g(e, t) {
  let i = Math.min(e.length, t.length);
  for (let n = 0; n < i; n++) {
    if (e[n] < t[n]) return -1;
    if (e[n] > t[n]) return 1;
  }
  return e.length - t.length;
}
export function $$f0({
  isDebugMode: e,
  threads: t,
  navigate: i,
  parentTransformProperties: f,
  intermediateTransformProperties: _,
  parentAbsoluteTransform: A,
  parentDimensions: y
}) {
  let b = _$$g2(i);
  let v = x(i);
  let I = useMemo(() => function (e) {
    let t = [...new Set((e ?? [])?.map(e => e.comments[0].client_meta?.stable_path).filter(isNotNullish))];
    t.sort(g);
    return t;
  }(t), [t]);
  let E = useStrictDeepEqualSceneValue((e, t) => {
    let i = JSON.parse(t);
    let n = new Map();
    for (let t of i) {
      let i = e.getFromStablePath(t);
      i && n.set(JSON.stringify(t), i.absoluteBoundingBox);
    }
    return n;
  }, JSON.stringify(I));
  return jsx(Fragment, {
    children: t?.map((i, r) => {
      let a;
      if (getFeatureFlags().a11y_design_dom_mirror) {
        let e = i.comments[0].client_meta;
        let t = E.get(JSON.stringify(e?.stable_path));
        if (e && t) {
          let i = e.node_offset ?? {
            x: 0,
            y: 0
          };
          let n = e.selection_box_anchor ?? {
            x: 24,
            y: 24
          };
          let r = _$$s.identity();
          r.translate(t.x, t.y);
          r.translate(i.x, i.y);
          a = EO(n, r.toFigMatrix(), y, A);
        } else a = {
          position: "absolute",
          width: 1,
          height: 1
        };
      } else {
        let e = i.comments[0].client_meta?.node_offset ?? {
          x: 0,
          y: 0
        };
        let t = c4(i.comments);
        let n = XC.getPinSize(t.length);
        let r = {
          x: e.x + (_?.x ?? 0),
          y: e.y + (_?.y ?? 0),
          width: n.width,
          height: n.height,
          angle: 0
        };
        a = l0(r, f);
      }
      return jsx(_$$g, {
        threadId: i.id,
        isDebugMode: e,
        setPos: r + 1,
        setSize: t.length,
        onShowPin: () => b(i),
        onShowThread: () => v(i),
        pinStyles: a
      }, i.id);
    })
  });
}
export const X = $$f0;