import { filterNumberValues } from "../905/807535";
import { packRgb } from "../figma_app/273493";
import { Axis, InteractionCpp, LayoutDirection, HideMode } from "../figma_app/763686";
import { Rectangle } from "../905/249071";
import { Vector2D } from "../905/512402";
var $$l4 = (e => (e[e.NONE = 0] = "NONE", e[e.REORDER = 1] = "REORDER", e[e.ADD = 2] = "ADD", e[e.APPEND = 3] = "APPEND", e[e.RESIZE = 4] = "RESIZE", e))($$l4 || {});
var $$d0 = (e => (e[e.INACTIVE = 0] = "INACTIVE", e[e.HOVERED = 1] = "HOVERED", e[e.SELECTED = 2] = "SELECTED", e[e.DRAGGED = 3] = "DRAGGED", e))($$d0 || {});
export function $$c2(e, t, i, n, o) {
  for (let l of (e.fillRoundedRect(t.expand($$m1.borderStrokeWidth), $$m1.reorderHandleHoveredCornerRadius + 2, packRgb(1, 1, 1)), e.fillRoundedRect(t, $$m1.reorderHandleHoveredCornerRadius, i), $$m1.equalIconOffsets)) {
    let i = new Rectangle(l, $$m1.equalIconSize);
    i = o === Axis.X ? i : i.transpose();
    e.fillRoundedRect(i.offsetBy(t.topLeft()), $$m1.equalIconCornerRadius, n);
  }
}
export function $$u3(e, t, i) {
  e.fillRoundedRect(t.expand($$m1.borderStrokeWidth), $$m1.reorderHandleInactiveCornerRadius + 1, packRgb(1, 1, 1));
  e.fillRoundedRect(t, $$m1.reorderHandleInactiveCornerRadius, i);
}
let p = class e {
  constructor(t, i, n, s, o) {
    this._bounds = t;
    this._widths = i;
    this._heights = n;
    this._canvasScale = s;
    this._shouldRender = o;
    let l = e.cellStrokeWeight * s;
    this._columnPositions = i.reduce((e, t, i) => (e.push(t + e[i]), e), [0]).map((e, t) => 0 === t ? e : e - l);
    this._rowPositions = n.reduce((e, t, i) => (e.push(t + e[i]), e), [0]).map((e, t) => 0 === t ? e : e - l);
    this._inactiveColor = InteractionCpp.getTableNodeColorInactive();
    this._hoverColorPrimary = InteractionCpp.getTableNodeColorHoveredPrimary();
    this._hoverColorSecondary = InteractionCpp.getTableNodeColorHoveredSecondary();
    this._selectedColor = InteractionCpp.getTableNodeColorSelected();
    this._whiteColor = packRgb(1, 1, 1);
    this.numColumns = i.length;
    this.numRows = n.length;
    this._tableUiHorizontalAxis = this._bounds.origin.y - e.padding - e.reorderHandleInactiveSize.y / 2;
    this._tableUiVerticalAxis = this._bounds.origin.x - e.padding - e.reorderHandleInactiveSize.y / 2;
    this._addColumnButtonPositions = this._getAddColumnButtonPositions();
    this._addRowButtonPositions = this._getAddRowButtonPositions();
    this._addColumnButtonHitTestBounds = this._getAddColumnButtonHitTestBounds();
    this._addRowButtonHitTestBounds = this._getAddRowButtonHitTestBounds();
    this._hoveredReorderColumnHandleBounds = this._computeReorderColumnHandleBounds(!0);
    this._hoveredReorderRowHandleBounds = this._computeReorderRowHandleBounds(!0);
    this._inactiveReorderColumnHandleBounds = this._computeReorderColumnHandleBounds(!1);
    this._inactiveReorderRowHandleBounds = this._computeReorderRowHandleBounds(!1);
    this._reorderColumnHandleHitTestBounds = this._computeReorderColumnHandleHitTestBounds();
    this._reorderRowHandleHitTestBounds = this._computeReorderRowHandleHitTestBounds();
    this._appendColumnBounds = this._getAppendColumnBounds();
    this._appendRowBounds = this._getAppendRowBounds();
    this._columnDividerHitTestBounds = this._getColumnDividerBounds(!0);
    this._rowDividerHitTestBounds = this._getRowDividerBounds(!0);
    this._columnDividerRenderBounds = this._getColumnDividerBounds(!1);
    this._rowDividerRenderBounds = this._getRowDividerBounds(!1);
  }
  isDirty(e, t, i, n, r) {
    if (!e.equals(this._bounds) || n !== this._canvasScale || r !== this._shouldRender || t.length !== this._widths.length || i.length !== this._heights.length) return !0;
    for (let e = 0; e < t.length; e++) if (t[e] !== this._widths[e]) return !0;
    for (let e = 0; e < i.length; e++) if (i[e] !== this._heights[e]) return !0;
    return !1;
  }
  _getBackgroundColor(e) {
    switch (e) {
      case 0:
      case 1:
        return this._hoverColorSecondary;
      case 3:
      case 2:
        return this._selectedColor;
      default:
        return packRgb(1, 0, 0);
    }
  }
  _getForegroundColor(e) {
    switch (e) {
      case 0:
      case 1:
        return this._hoverColorPrimary;
      case 3:
      case 2:
        return this._whiteColor;
      default:
        return packRgb(1, 0, 0);
    }
  }
  _getAppendColumnBounds() {
    let t = e.appendButtonLength;
    let i = new Vector2D(this._bounds.right() + e.appendButtonPadding, this._bounds.top());
    return new Rectangle(i, new Vector2D(t, this._bounds.height()));
  }
  _getAppendRowBounds() {
    let t = e.appendButtonLength;
    let i = new Vector2D(this._bounds.left(), this._bounds.bottom() + e.appendButtonPadding);
    return new Rectangle(i, new Vector2D(this._bounds.width(), t));
  }
  _getAddColumnButtonPositions() {
    let e = [];
    for (let t = 0; t <= this.numColumns; t++) {
      let i = this._bounds.origin.x + this._columnPositions[t];
      let n = this._tableUiHorizontalAxis;
      e.push(new Vector2D(i, n));
    }
    return e;
  }
  _getAddRowButtonPositions() {
    let e = [];
    for (let t = 0; t <= this.numRows; t++) {
      let i = this._tableUiVerticalAxis;
      let n = this._bounds.origin.y + this._rowPositions[t];
      e.push(new Vector2D(i, n));
    }
    return e;
  }
  _getAddColumnButtonHitTestBounds() {
    let t = [];
    for (let i = 0; i < this.numColumns; i++) {
      let n = new Vector2D(this._columnPositions[i], -e.hitTestPaddingThreshold.y);
      let r = this._bounds.origin.plus(n);
      let a = Rectangle.fromCenterSize(r, e.hitTestPaddingThreshold.multiplyBy(2));
      t.push(a);
    }
    return t;
  }
  _getAddRowButtonHitTestBounds() {
    let t = [];
    for (let i = 0; i < this.numRows; i++) {
      let n = new Vector2D(-e.hitTestPaddingThreshold.y, this._rowPositions[i]);
      let r = this._bounds.origin.plus(n);
      let a = Rectangle.fromCenterSize(r, e.hitTestPaddingThreshold.multiplyBy(2).transpose());
      t.push(a);
    }
    return t;
  }
  _getRowPositions() {
    return this._rowPositions;
  }
  _getColumnPositions() {
    return this._columnPositions;
  }
  _computeReorderColumnHandleHitTestBounds() {
    let t = [];
    for (let i = 0; i < this.numColumns; i++) {
      let n = new Vector2D((this._columnPositions[i] + this._columnPositions[i + 1]) / 2, -e.hitTestPaddingThreshold.y);
      let r = this._bounds.origin.plus(n);
      let a = new Vector2D(this._columnPositions[i + 1] - this._columnPositions[i], 2 * e.hitTestPaddingThreshold.y);
      t.push(Rectangle.fromCenterSize(r, a));
    }
    return t;
  }
  _computeReorderRowHandleHitTestBounds() {
    let t = [];
    for (let i = 0; i < this.numRows; i++) {
      let n = new Vector2D(-e.hitTestPaddingThreshold.y, (this._rowPositions[i] + this._rowPositions[i + 1]) / 2);
      let r = this._bounds.origin.plus(n);
      let a = new Vector2D(2 * e.hitTestPaddingThreshold.y, this._rowPositions[i + 1] - this._rowPositions[i]);
      t.push(Rectangle.fromCenterSize(r, a));
    }
    return t;
  }
  _computeReorderColumnHandleBounds(t) {
    let i = [];
    let n = t ? e.reorderHandleHoveredSize : e.reorderHandleInactiveSize;
    let r = n.divideBy(2);
    let a = this._columnPositions;
    for (let e = 0; e < this.numColumns; e++) {
      let t = this._bounds.origin.x + (a[e] + a[e + 1]) / 2;
      let l = this._tableUiHorizontalAxis;
      let d = new Vector2D(t, l).minus(r);
      let c = new Rectangle(d, n);
      i.push(c);
    }
    return i;
  }
  _computeReorderRowHandleBounds(t) {
    let i = [];
    let n = (t ? e.reorderHandleHoveredSize : e.reorderHandleInactiveSize).transpose();
    let r = n.divideBy(2);
    let a = this._rowPositions;
    for (let e = 0; e < this.numRows; e++) {
      let t = this._tableUiVerticalAxis;
      let l = this._bounds.origin.y + (a[e] + a[e + 1]) / 2;
      let d = new Vector2D(t, l).minus(r);
      let c = new Rectangle(d, n);
      i.push(c);
    }
    return i;
  }
  _getColumnDividerBounds(t) {
    let i = [];
    let n = e.dividerHeight + (t ? e.dividerHitTestPadding : 0);
    for (let e = 0; e < this._addColumnButtonPositions.length; e++) {
      let t = this._addColumnButtonPositions[e].x - n / 2;
      let r = this._bounds.top();
      let a = new Vector2D(t, r);
      let l = new Vector2D(n, this._bounds.height());
      i.push(new Rectangle(a, l));
    }
    return i;
  }
  _getRowDividerBounds(t) {
    let i = [];
    let n = e.dividerHeight + (t ? e.dividerHitTestPadding : 0);
    for (let e = 0; e < this._addRowButtonPositions.length; e++) {
      let t = this._bounds.left();
      let r = this._addRowButtonPositions[e].y - n / 2;
      let a = new Vector2D(t, r);
      let l = new Vector2D(this._bounds.width(), n);
      i.push(new Rectangle(a, l));
    }
    return i;
  }
  _isOutsideTableUIBounds(t) {
    return !this._bounds.expand(2 * e.hitTestPaddingThreshold.y).containsPointIncludingBoundary(t);
  }
  getHoveredSpan(e) {
    if (this._isOutsideTableUIBounds(e)) return new Vector2D(-1, -1);
    let t = this.numColumns;
    for (let i = 1; i < this._addColumnButtonPositions.length; i++) if (e.x <= this._addColumnButtonPositions[i].x) {
      t = i;
      break;
    }
    let i = this.numRows;
    for (let t = 1; t < this._addRowButtonPositions.length; t++) if (e.y <= this._addRowButtonPositions[t].y) {
      i = t;
      break;
    }
    return new Vector2D(t - 1, i - 1);
  }
  getHoveredRegion(e) {
    if (this._bounds.isEmpty() || !this.shouldRender() || this._isOutsideTableUIBounds(e)) return {
      element: 0
    };
    if (this.shouldRenderAddButton()) {
      let t = this._addColumnButtonHitTestBounds;
      for (let i = 1; i < t.length; i++) if (t[i].containsPointIncludingBoundary(e)) return {
        element: 2,
        tableAxis: LayoutDirection.COLUMN,
        elementIndex: i
      };
      let i = this._addRowButtonHitTestBounds;
      for (let t = 1; t < i.length; t++) if (i[t].containsPointIncludingBoundary(e)) return {
        element: 2,
        tableAxis: LayoutDirection.ROW,
        elementIndex: t
      };
    }
    for (let t = 0; t < this.numColumns; t++) {
      let i = this.getReorderHandleHitTestBounds(LayoutDirection.COLUMN, t);
      if (i && i.containsPointIncludingBoundary(e)) return {
        element: 1,
        tableAxis: LayoutDirection.COLUMN,
        elementIndex: t
      };
    }
    for (let t = 0; t < this.numRows; t++) {
      let i = this.getReorderHandleHitTestBounds(LayoutDirection.ROW, t);
      if (i && i.containsPointIncludingBoundary(e)) return {
        element: 1,
        tableAxis: LayoutDirection.ROW,
        elementIndex: t
      };
    }
    if (this._appendColumnBounds.containsPointIncludingBoundary(e)) return {
      element: 3,
      tableAxis: LayoutDirection.COLUMN
    };
    if (this._appendRowBounds.containsPointIncludingBoundary(e)) return {
      element: 3,
      tableAxis: LayoutDirection.ROW
    };
    for (let t = 0; t < this._columnDividerHitTestBounds.length; t++) if (this._columnDividerHitTestBounds[t].containsPointIncludingBoundary(e)) return {
      element: 4,
      tableAxis: LayoutDirection.COLUMN,
      elementIndex: t
    };
    for (let t = 0; t < this._rowDividerHitTestBounds.length; t++) if (this._rowDividerHitTestBounds[t].containsPointIncludingBoundary(e)) return {
      element: 4,
      tableAxis: LayoutDirection.ROW,
      elementIndex: t
    };
    return {
      element: 0
    };
  }
  getNearestSpan(e, t) {
    let i = e === LayoutDirection.ROW ? this._addRowButtonPositions : this._addColumnButtonPositions;
    let n = e === LayoutDirection.ROW ? Axis.Y : Axis.X;
    for (let e = 0; e < i.length - 1; e++) if (t <= (i[e].component(n) + i[e + 1].component(n)) / 2) return e;
    return i.length - 1;
  }
  getNearestColumn(e) {
    return this.getNearestSpan(LayoutDirection.COLUMN, e);
  }
  getNearestRow(e) {
    return this.getNearestSpan(LayoutDirection.ROW, e);
  }
  displaceRectForSpan(e, t, i) {
    let n = InteractionCpp.getTableSpanIdAtIndex(e, t);
    let r = InteractionCpp.getViewportTableSpanDisplacement(n);
    i.origin = i.origin.plus(Vector2D.fromFigVector(r));
  }
  getSpanThickness(e, t) {
    return t === LayoutDirection.COLUMN ? this._widths[e] / this._canvasScale : this._heights[e] / this._canvasScale;
  }
  getReorderHandleHitTestBounds(e, t) {
    let i = e === LayoutDirection.ROW ? this._reorderRowHandleHitTestBounds : this._reorderColumnHandleHitTestBounds;
    if (t < 0 || t >= i.length) return null;
    let n = i[t].clone();
    this.displaceRectForSpan(e, t, n);
    return n;
  }
  getReorderHandleBounds(e, t, i) {
    let n = e === LayoutDirection.COLUMN ? this._inactiveReorderColumnHandleBounds : this._inactiveReorderRowHandleBounds;
    let r = e === LayoutDirection.COLUMN ? this._hoveredReorderColumnHandleBounds : this._hoveredReorderRowHandleBounds;
    let s = 0 === i ? n : r;
    if (t < 0 || t >= s.length) return null;
    let o = s[t].clone();
    this.displaceRectForSpan(e, t, o);
    return o;
  }
  renderInactiveReorderHandle(e, t, i) {
    let n = this.getReorderHandleBounds(t, i, 0);
    null !== n && $$u3(e, n, this._inactiveColor);
  }
  renderInactiveAddButton(t, i, n) {
    if (!this.shouldRenderAddButton()) return;
    let r = i === LayoutDirection.COLUMN ? this._addColumnButtonPositions : this._addRowButtonPositions;
    if (n < 1 || n >= r.length - 1) return;
    let s = r[n];
    t.fillCircle(s, e.addButtonInactiveRadius + e.borderStrokeWidth, this._whiteColor);
    t.fillCircle(s, e.addButtonInactiveRadius, this._inactiveColor);
  }
  renderHitTestBoundsForDebugging(e) {
    for (let t = 0; t < Math.max(this.numRows, this.numColumns); ++t) for (let i of [LayoutDirection.ROW, LayoutDirection.COLUMN]) if (t < (i === LayoutDirection.ROW ? this.numRows : this.numColumns)) {
      let n = this.getReorderHandleHitTestBounds(i, t);
      n && e.fillRoundedRect(n, 0, packRgb(0, 1, 0));
    }
    if (this.shouldRenderAddButton()) {
      for (let t of this._addColumnButtonHitTestBounds.slice(1)) e.fillRoundedRect(t, 0, packRgb(1, 0, 0));
      for (let t of this._addRowButtonHitTestBounds.slice(1)) e.fillRoundedRect(t, 0, packRgb(1, 0, 0));
    }
  }
  renderExpandedReorderHandle(e, t, i, n) {
    let r = this.getReorderHandleBounds(t, i, n);
    if (null !== r) $$c2(e, r, this._getBackgroundColor(n), this._getForegroundColor(n), t === LayoutDirection.COLUMN ? Axis.X : Axis.Y);
  }
  _renderPlusButton(t, i, n) {
    let r = e.plusIconStrokeWidth;
    let a = e.plusIconLength;
    let l = new Rectangle(new Vector2D(i.x - a / 2, i.y - r / 2), new Vector2D(a, r));
    let d = new Rectangle(new Vector2D(i.x - r / 2, i.y - a / 2), new Vector2D(r, a));
    t.fillRect(l, n);
    t.fillRect(d, n);
  }
  renderExpandedAddButton(t, i, n) {
    t.fillCircle(i, e.addButtonHoveredRadius + e.borderStrokeWidth, this._whiteColor);
    t.fillCircle(i, e.addButtonHoveredRadius, this._getBackgroundColor(n));
    this._renderPlusButton(t, i, this._getForegroundColor(n));
  }
  renderAppendButton(t, i, n) {
    let r = i === LayoutDirection.COLUMN ? this._appendColumnBounds : this._appendRowBounds;
    let s = 0 === n ? this._hoverColorSecondary : this._selectedColor;
    let o = 0 === n ? this._hoverColorPrimary : this._whiteColor;
    t.fillRoundedRect(r, e.appendButtonCornerRadius, s);
    this._renderPlusButton(t, r.center(), o);
  }
  renderDivider(t, i, n, r) {
    let s = i === LayoutDirection.COLUMN ? this._columnDividerRenderBounds : this._rowDividerRenderBounds;
    if (n < 0 || n >= s.length) return;
    let o = s[n];
    let l = this._getBackgroundColor(r);
    t.fillRoundedRect(o, e.dividerCornerRadius, l);
  }
  renderAddButton(e, t, i, n) {
    if (!this.shouldRenderAddButton()) return;
    let r = t === LayoutDirection.COLUMN ? this._addColumnButtonPositions : this._addRowButtonPositions;
    if (i < 0 || i > r.length) return;
    let s = r[i];
    this.renderExpandedAddButton(e, s, n);
  }
  renderHoveredInactiveElements(e, t) {
    for (let i of filterNumberValues(LayoutDirection)) {
      let n = t.component(i ? Axis.X : Axis.Y);
      this.renderInactiveReorderHandle(e, i, n);
      this.renderInactiveAddButton(e, i, n);
      this.renderInactiveAddButton(e, i, n + 1);
    }
  }
  renderAllInactiveElements(e) {
    for (let t of filterNumberValues(LayoutDirection)) {
      let i = t === LayoutDirection.COLUMN ? this.numColumns : this.numRows;
      for (let n = 0; n < i; n++) this.renderInactiveReorderHandle(e, t, n);
      for (let n = 1; n < i; n++) this.renderInactiveAddButton(e, t, n);
    }
  }
  renderHoveredInactiveElementsUnderEditModeUI(e, t) {
    t.x === this.numColumns - 1 && this.renderAppendButton(e, LayoutDirection.COLUMN, 0);
    t.y === this.numRows - 1 && this.renderAppendButton(e, LayoutDirection.ROW, 0);
  }
  renderAllInactiveElementsUnderEditModeUI(e) {
    for (let t of filterNumberValues(LayoutDirection)) this.renderAppendButton(e, t, 0);
  }
  shouldRender() {
    return !this._bounds.isInvalid() && this._shouldRender !== HideMode.HIDE;
  }
  shouldRenderAddButton() {
    return this.shouldRender() && this._shouldRender === HideMode.FULL;
  }
  bounds() {
    return this._bounds.scaledBy(1 / this._canvasScale);
  }
};
p.hitTestPaddingThreshold = new Vector2D(11, 22);
p.padding = 18;
p.spacing = 18;
p.borderStrokeWidth = 2;
p.reorderHandleInactiveSize = new Vector2D(18, 6);
p.reorderHandleInactiveCornerRadius = 4;
p.reorderHandleHoveredLength = 22;
p.reorderHandleHoveredSize = new Vector2D(p.reorderHandleHoveredLength, p.reorderHandleHoveredLength);
p.reorderHandleHoveredCornerRadius = 6;
p.addButtonInactiveRadius = 4;
p.addButtonHoveredRadius = 11;
p.appendButtonLength = 26;
p.appendButtonCornerRadius = 5;
p.appendButtonPadding = 10;
p.dividerCornerRadius = 100;
p.dividerHeight = 4;
p.dividerHitTestPadding = 4;
p.plusIconStrokeWidth = 2;
p.plusIconLength = 12;
p.equalIconSize = new Vector2D(12, 2);
p.equalIconCornerRadius = 2;
p.equalIconOffsets = [new Vector2D(5, 8), new Vector2D(5, 12)];
p.cellStrokeWeight = 1;
export let $$m1 = p;
export const Dv = $$d0;
export const Ro = $$m1;
export const dw = $$c2;
export const fl = $$u3;
export const xT = $$l4;