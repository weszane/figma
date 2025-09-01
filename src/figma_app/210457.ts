export class $$n1 {
  constructor() {
    this.lastCursorLocations = {};
    this.CANVAS_SPACE_SPEED_THRESHOLD = 2;
    this.cursorHandsOnRight = new Set();
  }
  getHandsOnRight() {
    return this.cursorHandsOnRight;
  }
  updateSingleCursor(e, t, r) {
    let n = this.lastCursorLocations[r];
    n && (t.x > n.x + this.CANVAS_SPACE_SPEED_THRESHOLD && this.cursorHandsOnRight.add(r), t.x < n.x - this.CANVAS_SPACE_SPEED_THRESHOLD && this.cursorHandsOnRight.$$delete(r));
    e[r] = t;
  }
  updateCursors(e, t, r, n) {
    let i = {};
    for (let r of e) t.toString() !== r.sessionId && this.updateSingleCursor(i, r.mouse.canvasSpacePosition, r.sessionId);
    for (let e of (r && this.updateSingleCursor(i, {
      x: n.x,
      y: n.y
    }, t.toString()), this.lastCursorLocations = i, this.cursorHandsOnRight.keys())) i[e] || this.cursorHandsOnRight.$$delete(e);
  }
}
export function $$i0(e, t) {
  return e.has(t);
}
export const I = $$i0;
export const p = $$n1;