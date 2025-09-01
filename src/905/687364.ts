import { H } from "../905/730910";
import { c } from "../905/543659";
import { N } from "../905/64868";
import { R } from "../905/927840";
import { t } from "../905/367656";
import { H2, fl, _2, wI, $r, Hb, ut } from "../905/707098";
import { dN } from "../905/121113";
export class $$c0 {
  constructor(e, t) {
    this._cachedProperties = {};
    this._EXPENSIVE_TO_READ_node = e;
    this.nodeCache = t;
  }
  readValue(e, t) {
    return H2(this._cachedProperties, e, this._EXPENSIVE_TO_READ_node, t);
  }
  get id() {
    return this.readValue("id", e => e.id);
  }
  get name() {
    return this.readValue("name", e => e.name);
  }
  get isGroup() {
    return this.readValue("isGroup", e => "GROUP" === e.type);
  }
  get layout() {
    return this.readValue("layout", e => "GROUP" === e.type ? new t(new dN(e), this.nodeCache) : new t(e, this.nodeCache));
  }
  get autoLayout() {
    return this.readValue("autoLayout", e => c.from(e));
  }
  get gridLayout() {
    return this.readValue("gridLayout", e => R.from(e));
  }
  get border() {
    return this.readValue("border", e => "GROUP" !== e.type ? new N(e, this.nodeCache, this.boundVariables, this.inferredVariables) : N.empty());
  }
  get fills() {
    return this.readValue("fills", e => "symbol" == typeof e?.fills ? [] : "GROUP" !== e.type ? e?.fills?.filter(e => e.visible ?? !0) ?? [] : []);
  }
  get effects() {
    return this.readValue("effects", e => e.effects ? e.effects.filter(e => e.visible ?? !0) : []);
  }
  get clipsContent() {
    return this.readValue("clipsContent", e => "GROUP" !== e.type && e.clipsContent);
  }
  get opacity() {
    return this.readValue("opacity", e => e.opacity);
  }
  get blendMode() {
    return this.readValue("blendMode", e => e.blendMode);
  }
  get fillStyle() {
    return this.readValue("fillStyle", e => "GROUP" !== e.type ? fl(e, this.nodeCache.stylesResolver) : _2.StyleNotSet);
  }
  get strokeStyle() {
    return this.readValue("strokeStyle", e => "GROUP" !== e.type ? wI(e, this.nodeCache.stylesResolver) : _2.StyleNotSet);
  }
  get effectStyle() {
    return this.readValue("effectStyle", e => "GROUP" !== e.type ? $r(e, this.nodeCache.stylesResolver) : _2.StyleNotSet);
  }
  get boundVariables() {
    return this.readValue("boundVariables", e => e.boundVariables);
  }
  get inferredVariables() {
    return this.readValue("inferredVariables", e => e.availableInferredVariables);
  }
  get children() {
    return this.readValue("children", e => H(this.nodeCache, e));
  }
  hasVariable(e) {
    return Hb(this.boundVariables, e);
  }
  getVariableValue(e) {
    return ut(this.boundVariables, this.inferredVariables, e, this.nodeCache.variableResolver);
  }
  setName(e) {
    this._cachedProperties.name = e;
  }
  static from(e, t) {
    return new $$c0(e, t);
  }
  isLayoutContainer() {
    return "NONE" !== this.autoLayout.layoutMode;
  }
  isAutoLayout() {
    return "NONE" !== this.autoLayout.layoutMode && !this.isGrid();
  }
  isGrid() {
    return "GRID" === this.gridLayout.layoutMode;
  }
}
export const L = $$c0;