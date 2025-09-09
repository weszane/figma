import { useCallback, useRef, useEffect } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { n3, VariableStyleId } from "../905/859698";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { reportError } from "../905/11";
import { HH } from "../figma_app/3776";
import { Gc } from "../figma_app/456871";
import { I9 } from "../figma_app/151869";
import { wj, qy } from "../figma_app/862289";
import { F7 } from "../figma_app/784857";
import { o2 } from "../figma_app/667212";
export function $$f1(e, t, r) {
  let i = useCallback(r => {
    e(r);
    t();
  }, [e, t]);
  let a = useCallback(e => {
    r(e);
  }, [r]);
  return useCallback(e => {
    let {
      eventType,
      node
    } = e;
    switch (eventType) {
      case "BEFORE_STREAM_START":
        i(node);
        return;
      case "AFTER_STREAM_CHUNK":
        a(node);
        return;
    }
  }, [i, a]);
}
export function $$E0(e, t) {
  let r = useRef(new Map());
  let p = wj(e).state;
  useEffect(() => {
    p !== qy.RUNNING && r.current.size > 0 && (r.current = new Map());
  }, [p]);
  return {
    slidesTextResizeCallback: useCallback(e => {
      if (!e.isInSlide) return;
      let n = r.current;
      let p = n.get(e.guid);
      p && cancelAnimationFrame(p);
      let _ = requestAnimationFrame(() => {
        permissionScopeHandler.ai(t, () => {
          (function (e) {
            let t = e.containingSlideId;
            let r = getSingletonSceneGraph().get(t);
            if (!r || "WIDTH_AND_HEIGHT" !== e.textAutoResize) return;
            let n = r.size.x;
            let i = r.absoluteTransform.m02;
            let a = i + n;
            let s = e.absoluteTransform.m02;
            let o = e.size.x;
            if (s <= i + 16) {
              if (e.parentGuid === t) HH(e, 16, e.relativeTransform.m12); else {
                let r = e;
                for (; r.parentGuid !== t && r.parentNode;) r = r.parentNode;
                HH(r, 16, r.relativeTransform.m12);
              }
              let r = i + 16 - s;
              e.resizeWithConstraints(o - r, e.size.y);
              s = e.absoluteTransform.m02;
              o -= r;
            }
            s + o >= a - 16 && e.resizeWithConstraints(a - 16 - s, e.size.y);
          })(e);
          (function (e) {
            let t = e.containingSlideId;
            let r = getSingletonSceneGraph().get(t);
            if (!r || "HEIGHT" !== e.textAutoResize && "WIDTH_AND_HEIGHT" !== e.textAutoResize) return;
            let n = r.absoluteTransform.m12;
            let o = r.absoluteTransform.m12 + r.size.y;
            let u = e.size.y;
            let p = e.absoluteTransform.m12;
            if (p < n + 16 || p + u > o - 16) {
              let t;
              e.inheritedTextStyle && (Fullscreen?.applyStyleToSelection("inheritTextStyleKey", defaultSessionLocalIDString, !1), Fullscreen?.selectStyle(n3.INVALID, VariableStyleId.INVALID));
              let r = Math.max(0, n + 16 - p);
              let d = Math.max(0, p + u - (o - 16));
              let _ = e.lineHeightOrMixed;
              "mixed" === _ && (_ = e.getRangeLineHeight(0, 1));
              "mixed" === _ ? (t = 1, reportError(_$$e.AI_PRODUCTIVITY, Error("Unexpected mixed line height while resizing text node for slide bounds"))) : "PIXELS" === _.units ? (t = _.value / e.fontSize, e.lineHeight = {
                units: "RAW",
                value: t
              }) : t = _.value;
              let h = u / (e.fontSize * t);
              let m = Math.floor((e.fontSize * t - (r + d) / h) / t);
              e.fontSize = Math.max(m, 8);
            }
          })(e);
        });
      });
      n.set(e.guid, _);
    }, [t])
  };
}
export function $$y2(e) {
  let t = I9();
  let r = Gc(t, {
    allowEmpty: !1,
    excludeLockedNodes: !0
  });
  let i = useRef(new Map());
  let a = useCallback(() => {
    i.current.clear();
  }, []);
  let s = useCallback(() => {
    permissionScopeHandler.ai(e, () => {
      for (let [e, t] of i.current) {
        let r = getSingletonSceneGraph().get(e);
        r && HH(r, t.x, t.y);
      }
      i.current.clear();
    });
  }, [e]);
  let l = useCallback(e => {
    i.current.has(e.guid) || i.current.set(e.guid, {
      x: e.relativeTransform.m02,
      y: e.relativeTransform.m12
    });
  }, []);
  return {
    shiftAllNodesOutOfSlideMargins: useCallback(() => {
      r.forEach(e => {
        permissionScopeHandler.ai(o2, () => {
          let t = e.containingSlideId;
          let r = getSingletonSceneGraph().get(t);
          if (!r) return;
          let n = e.absoluteTransform.m12;
          let i = e.size.y;
          let a = r.absoluteTransform.m12;
          let s = a + r.size.y;
          let o = F7(e);
          if (n < a + 16) {
            l(o);
            HH(o, o.relativeTransform.m02, 16);
          } else if (n + i > s - 16) {
            let e = Math.max(o.relativeTransform.m12 - (n + i - (s - 16)), 16);
            l(o);
            HH(o, o.relativeTransform.m02, e);
          }
        });
      });
    }, [r, l]),
    resetShiftedNodes: s,
    resetNodePositionMap: a
  };
}
export const DX = $$E0;
export const FT = $$f1;
export const l3 = $$y2;
