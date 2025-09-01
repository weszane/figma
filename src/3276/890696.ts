import { useMemo } from "react";
import { Point } from "../905/736624";
export class $$i0 {
  constructor(e, t) {
    this.guide = null;
    let n = 0;
    "number" == typeof e && (n = e);
    this.inset = {
      top: e.top || e.vertical || n,
      bottom: e.bottom || e.vertical || n,
      left: e.left || e.horizontal || n,
      right: e.right || e.horizontal || n
    };
    t && (this.guide = document.createElement("div"), this.guide.id = "inset-guide", this.guide.style.position = "fixed", this.guide.style.zIndex = "10", this.guide.style.display = "none", this.guide.style.pointerEvents = "none", document.firstElementChild.append(this.guide));
  }
  _computePositionWithinInsetBounds(e, t, n, o, a) {
    let i = n.top;
    let s = n.bottom - this.inset.bottom;
    let r = {};
    t.y < i ? r.y = i : t.y + e.clientHeight > s && (r.y = s - e.clientHeight);
    let l = n.left;
    let d = n.right;
    if (t.x < l ? r.x = l : t.x + e.clientWidth > d && (r.x = d - e.clientWidth), r.x && o && r.x < t.x) {
      let n = Math.min(o.x - (a?.x || 0), d) - e.clientWidth;
      n > l ? r.x = n : r.x = t.x;
    }
    return r;
  }
  computePositionWithinInsetBounds(e, t, n, o, a) {
    let i = {
      top: this.inset.top,
      left: this.inset.left,
      right: n.width - this.inset.right,
      bottom: n.y + n.height - this.inset.bottom
    };
    let s = this._computePositionWithinInsetBounds(e, t, i, o, a);
    if (this.guide) {
      let e = {
        top: n.y + this.inset.top,
        left: n.x + this.inset.left,
        width: n.width - this.inset.right - this.inset.left,
        height: n.height - this.inset.bottom - this.inset.top
      };
      this.guide.style.top = `${e.top}px`;
      this.guide.style.left = `${e.left}px`;
      this.guide.style.height = `${e.height}px`;
      this.guide.style.width = `${e.width}px`;
      this.guide.style.display = "block";
      s.y || s.x ? this.guide.style.border = "1px solid red" : this.guide.style.border = "1px solid green";
    }
    return s;
  }
}
export function $$s1(e, t, n, i, s, r) {
  let l = e.current;
  let d = useMemo(() => t ? Point.add(t, r) : null, [r, t]);
  return useMemo(() => {
    if (!d) return null;
    if (!l || !i) return d;
    let e = i.computePositionWithinInsetBounds(l, d, n, t, s);
    return {
      ...d,
      ...e
    };
  }, [l, n, i, d, t, s]);
}
export const Z = $$i0;
export const _ = $$s1;