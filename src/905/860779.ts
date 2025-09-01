import { R } from "../905/927840";
import { t } from "../905/367656";
import { t2 } from "../905/8035";
import { H2, fl, _2, wI, ut } from "../905/707098";
export class $$o0 {
  constructor(e, t) {
    this._cachedProperties = {};
    this.children = [];
    this._EXPENSIVE_TO_READ_node = e;
    this.nodeCache = t;
  }
  readValue(e, t) {
    return H2(this._cachedProperties, e, this._EXPENSIVE_TO_READ_node, t);
  }
  static from(e, t) {
    return new $$o0(e, t);
  }
  get id() {
    return this.readValue("id", e => e.id);
  }
  get name() {
    return this.readValue("name", e => e.name);
  }
  get layout() {
    return this.readValue("layout", e => new t(e, this.nodeCache));
  }
  get gridLayout() {
    return this.readValue("gridLayout", e => new R(e));
  }
  get strokeWeight() {
    return this.readValue("strokeWeight", e => "GROUP" === e.type || "number" != typeof e.strokeWeight ? {
      rawValue: 0
    } : {
      rawValue: e.strokeWeight
    });
  }
  get strokes() {
    return this.readValue("strokes", e => "GROUP" === e.type ? [] : e.strokes ? e.strokes.filter(e => e.visible ?? !0) : []);
  }
  get fills() {
    return this.readValue("fills", e => "GROUP" === e.type || "symbol" == typeof e?.fills ? [] : e?.fills ? e.fills.filter(e => e.visible ?? !0) : []);
  }
  get fillStyle() {
    return this.readValue("fillStyle", e => "GROUP" !== e.type ? fl(e, this.nodeCache.stylesResolver) : _2.StyleNotSet);
  }
  get strokeStyle() {
    return this.readValue("strokeStyle", e => "GROUP" !== e.type ? wI(e, this.nodeCache.stylesResolver) : _2.StyleNotSet);
  }
  get effects() {
    return this.readValue("effects", e => e.effects ? e.effects.filter(e => e.visible ?? !0) : []);
  }
  get opacity() {
    return this.readValue("opacity", e => e.opacity);
  }
  get blendMode() {
    return this.readValue("blendMode", e => e.blendMode);
  }
  get boundVariables() {
    return this.readValue("boundVariables", e => e.boundVariables);
  }
  get inferredVariables() {
    return this.readValue("inferredVariables", e => e.availableInferredVariables);
  }
  getVariableValue(e) {
    return ut(this.boundVariables, this.inferredVariables, e, this.nodeCache.variableResolver);
  }
  setName(e) {
    this._cachedProperties.name = e;
  }
  async getDocumentAsync() {
    let e = this._EXPENSIVE_TO_READ_node;
    if (!e) throw Error("Node reference does not exist");
    if (!t2(this._cachedProperties.document)) {
      let t = new window.DOMParser();
      let i = new TextDecoder().decode(await e.exportAsync({
        format: "SVG"
      }));
      this._cachedProperties.document = t.parseFromString(i, "image/svg+xml");
    }
    return this._cachedProperties.document;
  }
  isAutoLayout() {
    return !1;
  }
  isGrid() {
    return !1;
  }
}
export const a = $$o0;