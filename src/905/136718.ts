import { H } from "../905/730910";
import { c } from "../905/543659";
import { N } from "../905/64868";
import { R } from "../905/927840";
import { t } from "../905/367656";
import { normalizeObjectKeys } from "../905/8035";
import { H2, fl, wI, $r, ut } from "../905/707098";
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
    return !1;
  }
  get layout() {
    return this.readValue("layout", e => new t(e, this.nodeCache));
  }
  get autoLayout() {
    return this.readValue("autoLayout", e => new c(e));
  }
  get gridLayout() {
    return this.readValue("gridLayout", e => new R(e));
  }
  get border() {
    return this.readValue("border", e => new N(e, this.nodeCache, this.boundVariables, this.inferredVariables));
  }
  get fills() {
    return this.readValue("fills", e => "symbol" == typeof e?.fills ? [] : (e?.fills ?? []).filter(e => e.visible ?? !0));
  }
  get effects() {
    return this.readValue("effects", e => e.effects.filter(e => e.visible ?? !0));
  }
  get clipsContent() {
    return this.readValue("clipsContent", e => e.clipsContent);
  }
  get variantProperties() {
    return this.readValue("variantProperties", e => e.variantProperties);
  }
  get opacity() {
    return this.readValue("opacity", e => e.opacity);
  }
  get blendMode() {
    return this.readValue("blendMode", e => e.blendMode);
  }
  get componentName() {
    return this.readValue("componentName", e => e.parent?.type === "COMPONENT_SET" ? e.parent.name : e.name);
  }
  get properties() {
    return this.readValue("properties", e => {
      let t;
      if (e.parent?.type === "COMPONENT_SET") {
        let i = e.parent;
        t = normalizeObjectKeys(i.componentPropertyDefinitions);
      } else t = normalizeObjectKeys(e.componentPropertyDefinitions);
      return t;
    });
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
    return new $$c0(e, t);
  }
  isAutoLayout() {
    return "NONE" !== this.autoLayout.layoutMode && !this.isGrid();
  }
  isLayoutContainer() {
    return "NONE" !== this.autoLayout.layoutMode;
  }
  isGrid() {
    return "GRID" === this.gridLayout.layoutMode;
  }
}
export const F = $$c0;