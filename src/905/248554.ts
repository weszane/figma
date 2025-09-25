import { H } from "../905/730910";
import { c as _$$c } from "../905/543659";
import { N } from "../905/64868";
import { R } from "../905/927840";
import { t } from "../905/367656";
import { normalizeObjectKeys } from "../905/8035";
import { F } from "../905/136718";
import { H2, fl, wI, $r, ut } from "../905/707098";
export class $$u0 {
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
    return !1;
  }
  get layout() {
    return this.readValue("layout", e => new t(e, this.nodeCache));
  }
  get autoLayout() {
    return this.readValue("autoLayout", e => _$$c.from(e));
  }
  get gridLayout() {
    return this.readValue("gridLayout", e => new R(e));
  }
  get border() {
    return this.readValue("border", e => new N(e, this.nodeCache, this.boundVariables, this.inferredVariables));
  }
  get fills() {
    return this.readValue("fills", e => "symbol" == typeof e?.fills ? [] : e?.fills?.filter(e => e.visible ?? !0) ?? []);
  }
  get effects() {
    return this.readValue("effects", e => e.effects.filter(e => e.visible ?? !0));
  }
  get clipsContent() {
    return this.readValue("clipsContent", e => e.clipsContent);
  }
  get properties() {
    return this.readValue("properties", e => normalizeObjectKeys(e.componentProperties));
  }
  get opacity() {
    return this.readValue("opacity", e => e.opacity);
  }
  get blendMode() {
    return this.readValue("blendMode", e => e.blendMode);
  }
  get overrides() {
    return this.readValue("overrides", e => e.overrides ?? []);
  }
  get fillStyle() {
    return this.readValue("fillStyle", e => fl(e, this.nodeCache.stylesResolver));
  }
  get strokeStyle() {
    return this.readValue("strokeStyle", e => wI(e, this.nodeCache.stylesResolver));
  }
  get effectStyle() {
    return this.readValue("effectStyle", e => $r(e, this.nodeCache.stylesResolver));
  }
  get mainComponent() {
    return this.readValue("mainComponent", e => e.mainComponent ? new F(e.mainComponent, this.nodeCache) : void 0);
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
  getVariableValue(e) {
    return ut(this.boundVariables, this.inferredVariables, e, this.nodeCache.variableResolver);
  }
  setName(e) {
    this._cachedProperties.name = e;
  }
  static from(e, t) {
    return new $$u0(e, t);
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
export const B = $$u0;