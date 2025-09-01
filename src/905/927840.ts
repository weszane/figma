import { H2 } from "../905/707098";
export class $$r0 {
  constructor(e) {
    this._cachedProperties = {};
    this._EXPENSIVE_TO_READ_node = e;
  }
  readValue(e, t) {
    return H2(this._cachedProperties, e, this._EXPENSIVE_TO_READ_node, t);
  }
  readGridLayoutValue(e, t) {
    return this.readValue(e, t);
  }
  get layoutMode() {
    return this.readGridLayoutValue("layoutMode", e => e.layoutMode);
  }
  get gridRowCount() {
    return this.readGridLayoutValue("gridRowCount", e => e.gridRowCount);
  }
  get gridColumnCount() {
    return this.readGridLayoutValue("gridColumnCount", e => e.gridColumnCount);
  }
  get gridRowGap() {
    return this.readGridLayoutValue("gridRowGap", e => e.gridRowGap);
  }
  get gridColumnGap() {
    return this.readGridLayoutValue("gridColumnGap", e => e.gridColumnGap);
  }
  get gridRowSpan() {
    return this.readGridLayoutValue("gridRowSpan", e => e.gridRowSpan);
  }
  get gridColumnSpan() {
    return this.readGridLayoutValue("gridColumnSpan", e => e.gridColumnSpan);
  }
  get gridRowAnchorIndex() {
    return this.readGridLayoutValue("gridRowAnchorIndex", e => e.gridRowAnchorIndex);
  }
  get gridColumnAnchorIndex() {
    return this.readGridLayoutValue("gridColumnAnchorIndex", e => e.gridColumnAnchorIndex);
  }
  get gridChildHorizontalAlign() {
    return this.readGridLayoutValue("gridChildHorizontalAlign", e => e.gridChildHorizontalAlign);
  }
  get gridChildVerticalAlign() {
    return this.readGridLayoutValue("gridChildVerticalAlign", e => e.gridChildVerticalAlign);
  }
  get paddingLeft() {
    return this.readGridLayoutValue("paddingLeft", e => e.paddingLeft);
  }
  get paddingRight() {
    return this.readGridLayoutValue("paddingRight", e => e.paddingRight);
  }
  get paddingTop() {
    return this.readGridLayoutValue("paddingTop", e => e.paddingTop);
  }
  get paddingBottom() {
    return this.readGridLayoutValue("paddingBottom", e => e.paddingBottom);
  }
  get strokesIncludedInLayout() {
    return this.readValue("strokesIncludedInLayout", e => e.strokesIncludedInLayout);
  }
  get gridRowSizingCSS() {
    return this.readGridLayoutValue("gridRowSizingCSS", e => e.gridRowSizingCSS);
  }
  get gridColumnSizingCSS() {
    return this.readGridLayoutValue("gridColumnSizingCSS", e => e.gridColumnSizingCSS);
  }
  static from(e) {
    return "GROUP" === e.type ? this.fromGroupNode() : this.fromBaseFrame(e);
  }
  static fromBaseFrame(e) {
    return new $$r0(e);
  }
  static fromGroupNode() {
    return this.empty();
  }
  static empty() {
    return new $$r0({
      layoutMode: "NONE",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "FIXED",
      gridColumnCount: 0,
      gridRowCount: 0,
      gridRowGap: 0,
      gridColumnGap: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      strokesIncludedInLayout: !1,
      gridRowSpan: 0,
      gridColumnSpan: 0,
      gridRowAnchorIndex: -1,
      gridColumnAnchorIndex: -1,
      gridChildHorizontalAlign: "AUTO",
      gridChildVerticalAlign: "AUTO",
      gridRowSizingCSS: "",
      gridColumnSizingCSS: ""
    });
  }
}
export const R = $$r0;