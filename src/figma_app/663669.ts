import { useState, useEffect } from "react";
import { getSingletonSceneGraph } from "../905/700578";
import {useDebounce} from 'use-debounce';
import { getVisibleArea, getViewportInfo } from "../figma_app/62612";
let $$o0 = "1.2";
let l = {
  noPanningZoomingMs: 300,
  screenAreaThresholdPercentage: .12,
  frameVisiblePercentage: .9,
  frameNotVisiblePercentage: .25,
  largestFrameWeight: .3,
  mostCentralFrameWeight: .7,
  maxDepth: 6
};
export function $$d5(e, t, r) {
  let i = $$u2(r);
  let [a, s] = useState(void 0);
  let {
    viewportIsStable
  } = $$p4(t, i);
  useEffect(() => {
    viewportIsStable && !t && s($$c3(e, i));
  }, [e, t, viewportIsStable, i]);
  return a;
}
export function $$c3(e, t) {
  let r = getSingletonSceneGraph().getCurrentPage();
  if (!r) return;
  let n = function (e, t, r) {
    let n = function (e) {
      let t = [];
      for (let r of e.childrenNodes) if ("FRAME" === r.type || "SECTION" === r.type) {
        if ("SECTION" === r.type) for (let e of r.childrenNodes) "FRAME" === e.type && t.push(e);else t.push(r);
      }
      return t;
    }(e);
    let i = [];
    let a = [];
    for (let e of n) {
      let n = h(e, t);
      n >= r.frameVisiblePercentage ? i.push(e) : n < r.frameNotVisiblePercentage && a.push(e);
    }
    if (1 === i.length && a.length === n.length - 1) return i[0];
  }(r, e, t);
  if (n) return n.guid;
  let a = function (e, t, r) {
    let {
      width,
      height
    } = getVisibleArea(t);
    let a = width * height;
    let o = [];
    let l = [{
      node: e,
      depth: 0
    }];
    for (; l.length;) {
      let {
        node,
        depth
      } = l.pop();
      if (!(depth >= r.maxDepth) && node.visible && !node.isInternalOnlyNode && !(node.opacity <= 0) && ("CANVAS" === node.type || "DOCUMENT" === node.type || ("FRAME" === node.type || "GROUP" === node.type || "SECTION" === node.type || "SLIDE_GRID" === node.type || "SLIDE_ROW" === node.type || "RESPONSIVE_SET" === node.type || "SLIDE" === node.type || "SECTION_OVERLAY" === node.type) && m(node, t) / a >= r.screenAreaThresholdPercentage)) for (let t of ("FRAME" === node.type && o.push(node), node.childrenNodes)) l.push({
        node: t,
        depth: depth + 1
      });
    }
    return o;
  }(r, e, t);
  if (!a.length) return;
  let o = a.filter(r => $$_1(r, e, t.frameVisiblePercentage));
  o.length || o.push(...a);
  let l = function (e, t, r) {
    let n = e.map(e => function (e, t) {
      let {
        x,
        y,
        width,
        height
      } = getVisibleArea(t);
      return Math.sqrt(Math.pow(x + width / 2 - (e.absoluteBoundingBox.x + e.absoluteBoundingBox.w / 2), 2) + Math.pow(y + height / 2 - (e.absoluteBoundingBox.y + e.absoluteBoundingBox.h / 2), 2));
    }(e, t));
    let i = e.map(e => m(e, t));
    let a = Math.max(...n);
    let o = Math.max(...i);
    let l = n.map(e => e / a);
    let d = i.map(e => e / o);
    let c = l.map((e, t) => r.largestFrameWeight * d[t] - r.mostCentralFrameWeight * e);
    return e[c.indexOf(Math.max(...c))];
  }(o, e, t);
  if (l) return function (e, t, r) {
    let n = e;
    for (; n.parentNode && "FRAME" === n.parentNode.type && $$_1(n.parentNode, t, r.frameVisiblePercentage);) n = n.parentNode;
    return n;
  }(l, e, t).guid;
}
export function $$u2(e = {}) {
  return {
    ...l,
    ...e
  };
}
export function $$p4(e, t) {
  let r = $$u2(t);
  let n = getViewportInfo({
    subscribeToUpdates_expensive: !e
  });
  let [i, {
    isPending: o
  }] = useDebounce(n, r.noPanningZoomingMs, {
    equalityFn: (e, t) => e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height && e.offsetX === t.offsetX && e.offsetY === t.offsetY && e.zoomScale === t.zoomScale
  });
  return {
    debouncedViewportInfo: i,
    viewportIsStable: !o()
  };
}
export function $$_1(e, t, r) {
  return h(e, t) >= r;
}
function h(e, t) {
  return m(e, t) / (e.absoluteBoundingBox.w * e.absoluteBoundingBox.h);
}
function m(e, t) {
  let {
    offsetX,
    offsetY,
    zoomScale,
    width,
    height
  } = t;
  let o = Math.max(e.absoluteBoundingBox.x, offsetX - width / 2 / zoomScale);
  let l = Math.min(e.absoluteBoundingBox.x + e.absoluteBoundingBox.w, offsetX + width / 2 / zoomScale);
  let d = Math.max(e.absoluteBoundingBox.y, offsetY - height / 2 / zoomScale);
  return Math.max(0, l - o) * Math.max(0, Math.min(e.absoluteBoundingBox.y + e.absoluteBoundingBox.h, offsetY + height / 2 / zoomScale) - d);
}
export const JL = $$o0;
export const Mw = $$_1;
export const Z9 = $$u2;
export const fX = $$c3;
export const pJ = $$p4;
export const pW = $$d5;
