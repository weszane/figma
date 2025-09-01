import { u5, ip } from "../905/936492";
import { XC } from "../905/512783";
import { rectDistance } from "../905/736624";
class s {
  constructor(e, t, n) {
    this.cellSize = e;
    this.neighborThreshold = t;
    this.sizeFn = n;
    this.grid = new Map();
    this.NEIGHBORING_CELL_DELTAS = [[0, 0], [-1, 0], [0, -1], [0, 1], [1, 0], [1, -1], [1, 1], [-1, -1], [-1, 1]];
  }
  add(e) {
    let {
      x,
      y
    } = this.getCoords(e);
    let o = this.toCellIndex(y);
    let a = this.toCellIndex(x);
    this.getCell(o, a).push(e);
  }
  findNeighbor(e) {
    let t = this.sizeFn(e);
    let {
      x,
      y
    } = this.getCoords(e);
    let a = this.toCellIndex(y);
    let s = this.toCellIndex(x);
    for (let [n, o] of this.NEIGHBORING_CELL_DELTAS) for (let r of this.getCell(a + n, s + o)) if (r !== e) {
      let e = this.sizeFn(r);
      if (rectDistance(t, e) <= this.neighborThreshold) return r;
    }
    return null;
  }
  getCoords(e) {
    let t = this.sizeFn(e);
    return {
      x: t.x + t.width / 2,
      y: t.y + t.height / 2
    };
  }
  getCell(e, t) {
    let n = this.grid.get(e);
    n || (n = new Map(), this.grid.set(e, n));
    let o = n.get(t);
    o || (o = [], n.set(t, o));
    return o;
  }
  toCellIndex(e) {
    return Math.floor(e / this.cellSize);
  }
}
export function $$r1(e, t) {
  return Math.max(e.minZoomPercentage / 100 - t, 0) * e.zoomScaleOverlap;
}
let l = (e, t) => {
  t.forEach(t => {
    let n = e.threads.length;
    let o = t.threads.length;
    let a = n + o;
    let i = e.x * n / a + t.x * o / a;
    let s = e.y * n / a + t.y * o / a;
    e.x = i;
    e.y = s;
    e.threads = e.threads.concat(t.threads);
  });
};
class d {
  constructor(e, t, n) {
    let i = $$r1(t, e.zoomScale);
    let l = XC.getPinSize(3);
    let d = Math.ceil(Math.max(u5, l.width, l.height) + i);
    this.distanceGrid = new s(d, i, n);
  }
  getNearbyNeighbor(e) {
    return this.distanceGrid.findNeighbor(e) || void 0;
  }
  onAddToResultCluster(e) {
    this.distanceGrid?.add(e);
  }
}
export function $$c0(e, t, n) {
  let a = [];
  let i = null;
  for (let t of e) t.isActive ? i = t : a.push({
    x: t.canvasPosition.x,
    y: t.canvasPosition.y,
    threads: [t]
  });
  let s = e => ip.getClusterViewportRect(e, t);
  if (t.zoomScale <= n.minZoomPercentage / 100) {
    let e = new Map();
    do {
      e.clear();
      let o = new d(t, n, s);
      let i = [];
      for (let t of a) {
        let n = o.getNearbyNeighbor(t);
        n ? e.has(n) ? e.get(n).push(t) : e.set(n, [t]) : (o.onAddToResultCluster(t), i.push(t));
      }
      e.forEach((e, t) => {
        l(t, e);
      });
      a = i;
    } while (e.size > 0);
  }
  if (i) {
    let {
      canvasPosition
    } = i;
    canvasPosition && a.push({
      x: canvasPosition.x,
      y: canvasPosition.y,
      threads: [i]
    });
  }
  return a;
}
export const g = $$c0;
export const H = $$r1;