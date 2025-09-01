import { wR, Rf } from "../figma_app/651866";
export function $$r2(e, t) {
  let i = [];
  if (0 === e.length) return {
    autoContentNodes: i,
    isMultiSelect: !1,
    selectedNodes: []
  };
  let n = !1;
  if (1 === e.length) {
    let [n] = e;
    i = n.childrenNodes.filter(e => e.visible && ("INSTANCE" === e.type || "FRAME" === e.type || "TEXT" === e.type) && "AUTO" === e.stackPositioning || t && "VERTICAL" === e.stackMode);
  } else {
    i = e.filter(e => e.visible && ("INSTANCE" === e.type || "FRAME" === e.type));
    n = !0;
  }
  return {
    autoContentNodes: i,
    isMultiSelect: n,
    selectedNodes: e
  };
}
export function $$a0(e, t, i, r, a) {
  let {
    shouldRegenerateDuplicates
  } = a;
  let o = function (e, t, i, r, a) {
    let {
      shouldReplaceFirstExampleRow
    } = a;
    if (r) return function (e, t, i, r) {
      let a = wR(e);
      let s = a.slice(t, i + t);
      let o = a.slice(i + t);
      let {
        shouldReplaceFirstExampleRow: _shouldReplaceFirstExampleRow
      } = r;
      _shouldReplaceFirstExampleRow && (o = a.slice(i + t - 1));
      return {
        exampleNodes: s,
        continuationNodes: o,
        guidsForKey: e.map(e => e.guid)
      };
    }(e, t, i, a);
    let o = e.slice(t, i + t);
    let l = e.slice(i + t);
    shouldReplaceFirstExampleRow && (l = e.slice(t + i - 1));
    return {
      exampleNodes: o.map(e => Rf(e, e.locked)),
      continuationNodes: l.map(e => Rf(e, e.locked)),
      guidsForKey: l.map(e => e.guid)
    };
  }(e, t, i, r, a);
  if (!o.exampleNodes.length || !o.exampleNodes[0]) return;
  let {
    deduplicatedExampleNodes,
    replaceableNodes
  } = function (e, t, i) {
    let n = new Set();
    let r = [];
    let a = [];
    for (let t of e) {
      let e = t.textNodes.map(e => e.node.textContent).join("");
      n.has(e) ? a.push(t) : (n.add(e), r.push(t));
    }
    i && t.unshift(...a);
    return {
      deduplicatedExampleNodes: r,
      replaceableNodes: t
    };
  }(o.exampleNodes, o.continuationNodes, shouldRegenerateDuplicates);
  return {
    exampleNodes: deduplicatedExampleNodes,
    continuationNodes: replaceableNodes,
    guidsForKey: o.guidsForKey
  };
}
export function $$s1(e, t) {
  return (t ? wR(e) : e.map(e => Rf(e, e.locked))).flatMap(e => e.textNodes.filter(e => !e.isLockedInCanvas && e.node.isAlive && e.node.visible).map(e => e.node));
}
export const LI = $$a0;
export const qk = $$s1;
export const xK = $$r2;