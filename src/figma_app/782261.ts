var $$n6 = (e => (e[e.ROW = 0] = "ROW", e[e.TILE = 1] = "TILE", e[e.SEPARATOR = 2] = "SEPARATOR", e))($$n6 || {});
var $$i3 = (e => (e.LIBRARY = "library", e.PAGE = "page", e.NAME_GROUP = "name group", e.LOCAL_COMPONENTS = "local components", e.LOCAL_TEMPLATES = "local templates", e.COMPONENTS = "library components", e.TEMPLATES = "library templates", e.RESPONSIVE_SETS = "library responsive sets", e))($$i3 || {});
export function $$a1(e) {
  return 0 === e.type && "isSticky" in e && e.isSticky;
}
export function $$s2(e) {
  return 0 === e.type && "isExpandable" in e && e.isExpandable;
}
export function $$o0(e) {
  return 0 === e.type && "isButton" in e && e.isButton;
}
export class $$l4 {
  constructor(e) {
    this.allElements = [];
    this.isExpanded = e => $$s2(e) && e.isExpanded;
    this.offsetTop = e;
  }
  static getNextRenderedElementTop(e) {
    if (!e || 0 === e.length) return 0;
    let t = e[e.length - 1];
    return t.top + t.height;
  }
  reset() {
    this.allElements = [];
  }
  getTotalHeight() {
    let e = 0;
    for (let t of this.allElements) $$s2(t) && (e += d(t));
    return $$l4.getNextRenderedElementTop(this.allElements) + e;
  }
  findExpandableElementWithKey(e) {
    for (let t of function* e(t) {
      for (let r of t) {
        yield r;
        $$s2(r) && r.isExpanded && (yield* e(r.children));
      }
    }(this.allElements)) if ($$s2(t) && t.key === e) return t;
    return null;
  }
  getActualTop(e) {
    let t = 0;
    for (let r of this.allElements) {
      if (r.key === e) return r.top + t;
      this.isExpanded(r) && (t += d(r));
    }
    return null;
  }
  getRenderedElementsInView(e, t) {
    let r = e - this.offsetTop;
    let n = Math.ceil(t / 2);
    let i = Math.max(r - n, 0);
    let o = r + t + n;
    let l = (e, t) => !(e + t < i || e > o);
    let c = (e, n) => !(e + n < r || e > r + t);
    let u = [];
    let p = {};
    for (let {
      element,
      actualTop
    } of function* e(t, r) {
      for (let n of t) {
        let t = r + n.top;
        if (yield {
          element: n,
          actualTop: t
        }, $$s2(n) && n.isExpanded) {
          let i = t + n.height;
          yield* e(n.children, i);
          r += d(n);
        }
      }
    }(this.allElements, 0)) if (l(actualTop, element.height)) {
      p[element.key] = u.length;
      let r = {
        ...element,
        top: actualTop
      };
      u.push(r);
    }
    let _ = null;
    let h = 0;
    for (let e of u) if (r > 0 && c(e.top, e.height)) {
      0 === e.type && "isSticky" in e && e.isSticky && !($$s2(e) && !e.isExpanded) ? _ = e : e.parent && $$a1(e.parent) && (_ = {
        ...e.parent,
        key: `${e.key}:parent`,
        isStaticRow: !0
      }, u.push(_));
      break;
    }
    null != _ && $$a1(_) && r > _.top && (_.isFixed = !0, h = Math.max(r - _.top, 0));
    return {
      elementsInView: u,
      stickyHeader: _ && _.isFixed ? _ : null,
      stickyHeaderOffset: h
    };
  }
}
let d = e => {
  let t = 0;
  if (e.isExpanded) for (let r of (t += $$l4.getNextRenderedElementTop(e.children), e.children)) $$s2(r) && (t += d(r));
  return t;
};
export function $$c5(e) {
  let t = e;
  for (; t && !($$s2(t) && ["library", "local components", "local templates"].includes(t.rowType));) if (!(t = t.parent)) return null;
  return t;
}
export const GY = $$o0;
export const N0 = $$a1;
export const We = $$s2;
export const l$ = $$i3;
export const oz = $$l4;
export const wI = $$c5;
export const zq = $$n6;