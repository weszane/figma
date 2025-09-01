import { H2 } from "../905/707098";
export class $$r0 {
  constructor(e) {
    this._cachedProperties = {};
    this._EXPENSIVE_TO_READ_node = e;
  }
  readValue(e, t) {
    return H2(this._cachedProperties, e, this._EXPENSIVE_TO_READ_node, t);
  }
  readAutoLayoutValue(e, t, i) {
    let n = this.readValue("inferredAutoLayout", e => e.inferredAutoLayout);
    return this.readValue(e, n ? i : t);
  }
  get layoutMode() {
    return this.readAutoLayoutValue("layoutMode", e => e.layoutMode, e => e.inferredAutoLayout.layoutMode);
  }
  get primaryAxisSizingMode() {
    return this.readAutoLayoutValue("primaryAxisSizingMode", e => e.primaryAxisSizingMode, e => e.inferredAutoLayout.primaryAxisSizingMode);
  }
  get counterAxisSizingMode() {
    return this.readAutoLayoutValue("counterAxisSizingMode", e => e.counterAxisSizingMode, e => e.inferredAutoLayout.counterAxisSizingMode);
  }
  get primaryAxisAlignItems() {
    return this.readAutoLayoutValue("primaryAxisAlignItems", e => e.primaryAxisAlignItems, e => e.inferredAutoLayout.primaryAxisAlignItems);
  }
  get counterAxisAlignItems() {
    return this.readAutoLayoutValue("counterAxisAlignItems", e => e.counterAxisAlignItems, e => e.inferredAutoLayout.counterAxisAlignItems);
  }
  get paddingLeft() {
    return this.readAutoLayoutValue("paddingLeft", e => e.paddingLeft, e => e.inferredAutoLayout.paddingLeft);
  }
  get paddingRight() {
    return this.readAutoLayoutValue("paddingRight", e => e.paddingRight, e => e.inferredAutoLayout.paddingRight);
  }
  get paddingTop() {
    return this.readAutoLayoutValue("paddingTop", e => e.paddingTop, e => e.inferredAutoLayout.paddingTop);
  }
  get paddingBottom() {
    return this.readAutoLayoutValue("paddingBottom", e => e.paddingBottom, e => e.inferredAutoLayout.paddingBottom);
  }
  get itemSpacing() {
    return this.readAutoLayoutValue("itemSpacing", e => e.itemSpacing, e => e.inferredAutoLayout.itemSpacing);
  }
  get strokesIncludedInLayout() {
    return this.readValue("strokesIncludedInLayout", e => e.strokesIncludedInLayout);
  }
  get layoutWrap() {
    return this.readValue("layoutWrap", e => e.layoutWrap);
  }
  get counterAxisAlignContent() {
    return this.readValue("counterAxisAlignContent", e => e.counterAxisAlignContent);
  }
  get counterAxisSpacing() {
    return this.readValue("counterAxisSpacing", e => e.counterAxisSpacing ?? void 0);
  }
  static empty() {
    return new $$r0({
      layoutMode: "NONE",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "MIN",
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      itemSpacing: 0,
      strokesIncludedInLayout: !1,
      inferredAutoLayout: null,
      layoutWrap: "NO_WRAP",
      counterAxisAlignContent: "AUTO",
      counterAxisSpacing: 0
    });
  }
  static from(e) {
    return "GROUP" === e.type ? this.fromGroupNode(e) : this.fromBaseFrame(e);
  }
  static fromBaseFrame(e) {
    return new $$r0(e);
  }
  static fromGroupNode(e) {
    return new $$r0({
      layoutMode: "NONE",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "MIN",
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      itemSpacing: 0,
      strokesIncludedInLayout: !1,
      inferredAutoLayout: e.inferredAutoLayoutResult,
      layoutWrap: "NO_WRAP",
      counterAxisAlignContent: "AUTO",
      counterAxisSpacing: 0
    });
  }
}
export const c = $$r0;