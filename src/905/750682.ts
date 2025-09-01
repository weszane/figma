import { QR } from "../figma_app/273493";
import { Ez5, Roq, qmM, NLJ, glU, btW } from "../figma_app/763686";
import { M } from "../905/512402";
import { UN } from "../905/700578";
import { GJ, kP, Bm, ZR } from "../905/430950";
import { j } from "../905/881708";
let d = "-1:-1";
var c = (e => (e.INACTIVE = "inactive", e.FRAME_ALREADY_SELECTED = "frameAlreadySelected", e.HOVERED_INSIDE = "hoveredInside", e.HOVERED_OUTSIDE = "hoveredOutside", e.HOVERED_OVER_BUTTON_LEFT = "hoveredOverButtonLeft", e.HOVERED_OVER_BUTTON_RIGHT = "hoveredOverButtonRight", e))(c || {});
let u = ["hoveredOverButtonLeft", "hoveredOverButtonRight"];
function p({
  leftGapWidth: e,
  rightGapWidth: t,
  heightOfShortestFrame: i,
  medianYPosition: n,
  defaults: r
}, a) {
  function s(e, t, i, n) {
    return null !== e ? e : null !== t ? t < i ? i : t : n;
  }
  let o = e ?? null;
  let l = t ?? null;
  let d = r.gapWidth;
  return {
    leftGapWidth: s(o, l, a, d),
    rightGapWidth: s(l, o, a, d),
    height: i,
    topYPosition: n
  };
}
function m(e, {
  leftGapWidth: t,
  rightGapWidth: i,
  topYPosition: n,
  height: r
}) {
  return {
    left: M.fromVectorD({
      x: e.x - t / 2,
      y: n + r / 2
    }),
    right: M.fromVectorD({
      x: e.x + e.w + i / 2,
      y: n + r / 2
    })
  };
}
function h(e, {
  leftGapWidth: t,
  rightGapWidth: i,
  height: n
}) {
  return {
    left: {
      x: e.x - t,
      y: e.y,
      w: t,
      h: n
    },
    right: {
      x: e.x + e.w,
      y: e.y,
      w: i,
      h: n
    }
  };
}
function g(e, t, i) {
  let a = QR(1, 1, 1);
  GJ(e, t, i, a, Ez5.getCanvasButton());
}
function f(e, t, i) {
  let a = QR(1, 1, 1);
  kP(e, t, i, Ez5.getCanvasButton(), a);
}
export class $$$$_0 extends j {
  constructor(e) {
    super(e);
    this._state = "inactive";
    this._insertionType = Roq.DUPLICATE;
    this._canvasSpaceMousePosition = new M();
    this._hoveredFrameGuid = null;
    this._seriesMeasurementsFromActiveFrame = null;
    this._previousCurrentTool = null;
    this._selectedFrameGuid = null;
  }
  _resetState() {
    this._state = "inactive";
    this._insertionType = Roq.DUPLICATE;
  }
  _getActiveFrameGuidOrNull() {
    return this._selectedFrameGuid ?? this._hoveredFrameGuid;
  }
  handleMouseLeave(e) {}
  handleMouseMove(e) {
    if (this._state = "inactive", this._insertionType = Roq.DUPLICATE, this._canvasSpaceMousePosition = M.fromVectorD(e.canvasSpaceMouse()), !qmM || !qmM.isFrameQuickAddEnabled()) return;
    let t = this._getActiveFrameGuidOrNull();
    let i = qmM.setHoveredNodeForFrameQuickAdd(e, this._hoveredFrameGuid ?? d);
    this._hoveredFrameGuid = i === d ? null : i;
    let n = qmM.getCurrentTool();
    if (this._hoveredFrameGuid) this._selectedFrameGuid = null;else if (n === NLJ.FRAME && this._previousCurrentTool !== n) {
      let t = qmM.getSingleSelectedNodeIfEligibleForFrameQuickAdd(e);
      this._selectedFrameGuid = t === d ? null : t;
    }
    this._previousCurrentTool = n;
    let l = this._getActiveFrameGuidOrNull();
    if (l) {
      let i = UN().get(l);
      if (!i || (t !== l && (this._seriesMeasurementsFromActiveFrame = function (e) {
        let t = UN().get(e);
        if (!qmM || !t) return null;
        let i = t.absoluteBoundingBox;
        let {
          gapWidthsForSourceFrame,
          heightOfShortestFrame,
          medianYPosition
        } = qmM.getSeriesMeasurements(e);
        let l = qmM.getDefaultGapWidthForFrameQuickAdd(e);
        let d = qmM.getDefaultHeightForFrameQuickAdd(e);
        return {
          leftGapWidth: gapWidthsForSourceFrame.left,
          rightGapWidth: gapWidthsForSourceFrame.right,
          heightOfShortestFrame,
          medianYPosition: medianYPosition ?? i.y,
          defaults: {
            height: d,
            gapWidth: l
          }
        };
      }(l)), !this._seriesMeasurementsFromActiveFrame)) return;
      let n = i.absoluteBoundingBox;
      let d = qmM.getMinimumAllowedGapWidthForFrameQuickAdd();
      let c = p(this._seriesMeasurementsFromActiveFrame, d);
      if (!function (e, t, i) {
        let n = e.canvasSpaceViewportRect();
        if (t.y < n.origin.y && t.y + t.h > n.origin.y + n.size.y) return !1;
        let {
          left,
          right
        } = m(t, i);
        let l = M.fromVectorD({
          x: t.x,
          y: t.y
        });
        let d = M.fromVectorD({
          x: t.x + t.w,
          y: t.y
        });
        let c = e.canvasSpaceToViewportSpace(l);
        let u = e.canvasSpaceToViewportSpace(d);
        let p = e.canvasSpaceToViewportSpace(left);
        let h = e.canvasSpaceToViewportSpace(right);
        let g = p.x + Bm;
        let f = h.x - Bm;
        let _ = g > c.x && Math.abs(g - c.x) > 8;
        let A = f < u.x && Math.abs(u.x - f) > 8;
        return !_ || !A;
      }(e.viewport(), n, c)) return;
      this._state = this.getBehaviorStateOnMouseMove(e, n, d, c);
      this._insertionType = this.getInsertionTypeFromEvent(e);
      u.includes(this._state) && (qmM.setEventCursor(e, "blackCursor"), e.accept(this));
    }
  }
  getBehaviorStateOnMouseMove(e, t, i, n) {
    if (this._canvasSpaceMousePosition.x >= t.x && this._canvasSpaceMousePosition.x <= t.x + t.w) return "hoveredInside";
    let r = n.leftGapWidth >= i;
    let a = n.rightGapWidth >= i;
    let {
      left,
      right
    } = m(t, n);
    let d = left.distanceTo(this._canvasSpaceMousePosition) * e.viewport().canvasScale();
    let c = right.distanceTo(this._canvasSpaceMousePosition) * e.viewport().canvasScale();
    if (r && d < Bm + 24) return "hoveredOverButtonLeft";
    if (a && c < Bm + 24) return "hoveredOverButtonRight";
    let {
      left: _left,
      right: _right
    } = h(t, n);
    let g = this._canvasSpaceMousePosition.x >= _left.x && this._canvasSpaceMousePosition.x <= _left.x + _left.w;
    let f = this._canvasSpaceMousePosition.x >= _right.x && this._canvasSpaceMousePosition.x <= _right.x + _right.w;
    return g || f ? "hoveredOutside" : this._selectedFrameGuid ? "frameAlreadySelected" : "inactive";
  }
  getInsertionTypeFromEvent(e) {
    return e.isAltPressed() && "inactive" !== this._state ? Roq.BLANK : Roq.DUPLICATE;
  }
  handleMouseDown(e) {
    if (!qmM || !glU || this._hoveredFrameGuid && qmM.setHoveredNodeForFrameQuickAdd(e, this._hoveredFrameGuid) !== this._hoveredFrameGuid) return;
    let t = this._getActiveFrameGuidOrNull();
    t && this._seriesMeasurementsFromActiveFrame && (this._insertionType = this.getInsertionTypeFromEvent(e), "hoveredOverButtonLeft" === this._state ? glU.createFrameFromQuickAdd(t, btW.LEFT, this._insertionType) : "hoveredOverButtonRight" === this._state && glU.createFrameFromQuickAdd(t, btW.RIGHT, this._insertionType), u.includes(this._state) ? e.accept(this) : this._resetState());
  }
  handleMouseDrag(e) {}
  handleMouseUp(e) {}
  handleContextMenuOpen() {}
  handleBeforeFrame() {}
  reset() {}
  render(e, t) {
    let i = this._getActiveFrameGuidOrNull();
    if (!i || !this._seriesMeasurementsFromActiveFrame || !qmM) return;
    let n = UN().get(i);
    if (!n) return;
    let a = qmM.getMinimumAllowedGapWidthForFrameQuickAdd();
    let o = n.absoluteBoundingBox;
    let l = p(this._seriesMeasurementsFromActiveFrame, a);
    let {
      left,
      right
    } = h(o, l);
    let u = left.w >= a;
    let g = right.w >= a;
    let {
      left: _left2,
      right: _right2
    } = m(o, l);
    ("hoveredOverButtonLeft" === this._state || "hoveredOverButtonRight" === this._state) && this._insertionType === Roq.DUPLICATE && qmM.renderHoverOutlineAroundFrameForQuickAdd(i, e, t);
    "inactive" !== this._state && this.renderHoveredState({
      leftDotOrButtonPosition: _left2,
      rightDotOrButtonPosition: _right2,
      viewport: e,
      canvasContext: t,
      shouldRenderLeftDotOrButton: u,
      shouldRenderRightDotOrButton: g
    });
  }
  renderHoveredState({
    leftDotOrButtonPosition: e,
    rightDotOrButtonPosition: t,
    viewport: i,
    canvasContext: n,
    shouldRenderLeftDotOrButton: a,
    shouldRenderRightDotOrButton: s
  }) {
    if ("inactive" === this._state || !qmM) return;
    let l = qmM.getIndicatorColorForFrameQuickAdd();
    "hoveredOverButtonLeft" === this._state ? a && (this._insertionType === Roq.BLANK ? f(e, i, n) : g(e, i, n)) : a && ZR(e, i, n, l, 0);
    "hoveredOverButtonRight" === this._state ? s && (this._insertionType === Roq.BLANK ? f(t, i, n) : g(t, i, n)) : s && ZR(t, i, n, l, 0);
  }
  renderUnderEditModeUI(e, t) {}
}
export const _ = $$$$_0;