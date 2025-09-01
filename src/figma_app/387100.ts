import { F } from "../905/266460";
import { getFeatureFlags } from "../905/601108";
import { UN } from "../905/700578";
export function $$s20(e, t) {
  let r = t(e);
  if ("stop" === r || "skip" === r) return r;
  for (let r of e.childrenNodes) if ("stop" === $$s20(r, t)) return "stop";
}
export function $$o9(e, t) {
  return e.get(t)?.parentNode || null;
}
export function $$l11(e, t, r) {
  let n = $$o9(e, t);
  for (; n;) {
    if ("CANVAS" === n.type || "DOCUMENT" === n.type) return;
    if ("stop" === r(n)) break;
    n = n.parentNode;
  }
}
export function $$d19(e, t, r) {
  let n = e.get(t);
  n && "stop" !== r(n) && $$l11(e, t, r);
}
export function $$c0(e, t) {
  let r = [];
  $$l11(e, t, e => {
    r.push(e);
  });
  return r;
}
export function $$u25(e, t, r) {
  if (t === r) return !0;
  let n = $$o9(e, r);
  for (; n;) {
    if (n.guid === t) return !0;
    n = n.parentNode;
  }
  return !1;
}
export function $$p2(e, t) {
  let r = 0;
  let n = e.get(t) || null;
  for (; n && "CANVAS" !== n.type && "DOCUMENT" !== n.type;) {
    r++;
    n = $$o9(e, n.guid);
  }
  return r;
}
export function $$_18(e, t) {
  return [...new Set(t)].reduce((t, r) => {
    let n = m(e, r, "CANVAS");
    n && UN().get(n)?.isInternalOnlyNode && (n = null);
    t[r] = n;
    return t;
  }, {});
}
export function $$h4(e, t) {
  return [...new Set(t)].reduce((t, r) => (t[r] = m(e, r, "RESPONSIVE_SET"), t), {});
}
function m(e, t, r) {
  if (!t) return null;
  let n = e.get(t);
  if (!n) return null;
  let i = n;
  for (; i.type !== r;) {
    let e = i.parentNode;
    if (!e) break;
    i = e;
  }
  return i.guid;
}
export function $$g22(e) {
  return ("CODE_INSTANCE" === e ? !!getFeatureFlags().bake_direct_manipulation_on_canvas : "DOCUMENT" === e || "CANVAS" === e || "GROUP" === e || "FRAME" === e || "SYMBOL" === e || "INSTANCE" === e || "BOOLEAN_OPERATION" === e || "STICKY" === e || "SHAPE_WITH_TEXT" === e || "CONNECTOR" === e || "CODE_BLOCK" === e || "TABLE" === e || "TABLE_CELL" === e || "VARIABLE_SET" === e || "MODULE" === e || "SLIDE" === e || "SLIDE_ROW" === e || "SLIDE_GRID" === e || "RESPONSIVE_SET" === e || "WEBPAGE" === e || "TRANSFORM" === e) && !$$E7(e);
}
export function $$f23(e) {
  return "VECTOR" === e || "STAR" === e || "LINE" === e || "ELLIPSE" === e || "RECTANGLE" === e || "REGULAR_POLYGON" === e || "ROUNDED_RECTANGLE" === e;
}
export function $$E7(e) {
  return "STICKY" === e || "SHAPE_WITH_TEXT" === e || "CONNECTOR" === e || "CODE_BLOCK" === e || "MEDIA" === e || "SECTION_OVERLAY" === e || "TABLE" === e;
}
export function $$y3(e) {
  return "STAMP" === e.type || "ROUNDED_RECTANGLE" === e.type && e.name?.includes("FigJam Stamp Icon");
}
function b(e, t) {
  return t && "CANVAS" === t.type && t.visible && F(e.type) && e.visible;
}
export function $$T16(e, t) {
  let r = [];
  let n = e.get(t);
  if (!n) return r;
  for (let t of n.uiOrderedChildren) {
    let i = e.get(t);
    b(i, n) && r.push(i);
  }
  return r;
}
export function $$I8(e, t) {
  let r = [];
  let n = e.get(t);
  if (!n) return [];
  for (let t of n.uiOrderedChildren) {
    let i = e.get(t);
    i && i.isResponsiveSetOrWebpage && b(i, n) && r.push(i);
  }
  return r;
}
export function $$S5(e, t) {
  let r = null;
  let n = null;
  for (let i = 0; i < t.length; i++) {
    let a = e.get(t[i]);
    let s = $$o9(e, t[i]);
    if (a && s && b(a, s)) {
      r = t[i];
      n = i;
      break;
    }
  }
  return {
    tlfId: r,
    index: n
  };
}
export function $$v14(e, t) {
  e.sort((e, r) => {
    let n = t(e);
    let i = t(r);
    return n < i ? -1 : n > i ? 1 : 0;
  });
}
export function $$A10(e, t) {
  let r = null;
  $$l11(e, t, e => {
    if (!r) {
      if ("NONE" !== e.scrollDirection) {
        r = e;
        return "stop";
      }
      {
        let t = e.parentNode;
        if (t && b(e, t)) {
          r = e;
          return "stop";
        }
      }
    }
  });
  return r;
}
export function $$x1(e, t) {
  let r = null;
  $$d19(e, t, e => {
    let t = e.parentNode;
    t && b(e, t) && (r = e);
  });
  return r;
}
export function $$N6(e) {
  let t = null;
  let r = e.parentNode;
  for (; r;) {
    if (r.isStackOrFixedSizeContainer) {
      t = r;
      break;
    }
    r = r.parentNode;
  }
  return t;
}
export function $$C21(e, t) {
  let r = null;
  $$d19(e, t, e => {
    let t = e.parentNode;
    t && t && ("CANVAS" === t.type || "SECTION" === t.type) && t.visible && F(e.type) && e.visible && "SECTION" !== e.type && (r = e);
  });
  return r;
}
export function $$w17(e, t, r) {
  let n;
  if (!r) {
    let e = t.getCurrentPage();
    if (!e) return;
    r = e;
  }
  $$s20(r, r => {
    if (e(r, t)) {
      n = r;
      return "stop";
    }
  });
  return n;
}
export function $$O13(e, t) {
  let r;
  let n = t.getCurrentPage();
  if (n) {
    $$s20(n, n => {
      if (e(n, t)) {
        if (void 0 === r) r = n;else {
          let [e, t] = n.guid.split(":").map(Number);
          let [i, a] = r.guid.split(":").map(Number);
          r = e === i ? t > a ? n : r : e > i ? n : r;
        }
      }
    });
    return r;
  }
}
export function $$R12() {
  let e = UN();
  let t = [];
  $$s20(e.getRoot(), e => {
    t.push(e.guid);
  });
  return t;
}
export const DS = $$c0;
export const E6 = $$x1;
export const F0 = $$p2;
export const GI = $$y3;
export const HL = $$h4;
export const H_ = $$S5;
export const Ji = $$N6;
export const MT = $$E7;
export const O5 = $$I8;
export const PA = $$o9;
export const Ql = $$A10;
export const Si = $$l11;
export const UP = $$R12;
export const WY = $$O13;
export const X4 = $$v14;
export const ZQ = function e(t, r, n = []) {
  let i = t.get(r);
  if (!i || !i.childrenNodes) return n;
  for (let r of i.childrenNodes) (function (e) {
    let t = e.parentNode;
    return !!t && ("CANVAS" === t.type || "SECTION" === t.type) && t.visible && e.visible;
  })(r) && ("SECTION" === r.type ? e(t, r.guid, n) : n.push(r));
  return n;
};
export const bV = $$T16;
export const cy = $$w17;
export const dA = $$_18;
export const hD = $$d19;
export const hV = $$s20;
export const kh = $$C21;
export const nO = $$g22;
export const oY = $$f23;
export const qT = function e(t, r, i = []) {
  let a = t.get(r);
  if (!a || !a.childrenNodes) return i;
  for (let r of a.childrenNodes) (function (e) {
    let t = e.parentNode;
    return !!t && ("CANVAS" === t.type || "SECTION" === t.type) && t.visible && F(e.type) && e.visible;
  })(r) && ("SECTION" === r.type ? e(t, r.guid, i) : i.push(r));
  return i;
};
export const rV = $$u25;