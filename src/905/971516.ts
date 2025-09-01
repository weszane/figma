import { ServiceCategories as _$$e } from "../905/165054";
import { $D } from "../905/11";
import { N } from "../905/64868";
import { R } from "../905/927840";
import { t as _$$t } from "../905/367656";
import { H2, fl, wI, $r, ut } from "../905/707098";
import { Ux, Q } from "../905/121113";
export class $$c0 {
  constructor(e, t) {
    this._cachedProperties = {};
    this._EXPENSIVE_TO_READ_node = e;
    this.nodeCache = t;
  }
  static from(e, t) {
    return new $$c0(e, t);
  }
  readValue(e, t) {
    return H2(this._cachedProperties, e, this._EXPENSIVE_TO_READ_node, t);
  }
  get isGroup() {
    return !1;
  }
  get border() {
    return this.readValue("border", (e) => {
      let t;
      "RECTANGLE" === e.type ? t = new N(e, this.nodeCache, this.boundVariables, this.inferredVariables) : "LINE" === e.type ? t = new N({
        strokes: [],
        strokeAlign: e.strokeAlign,
        strokeBottomWeight: 0,
        strokeTopWeight: 0,
        strokeLeftWeight: 0,
        strokeRightWeight: 0,
        bottomRightRadius: 0,
        topLeftRadius: 0,
        topRightRadius: 0,
        bottomLeftRadius: 0,
        dashPattern: []
      }, this.nodeCache, this.boundVariables, this.inferredVariables) : "ELLIPSE" === e.type ? t = new N(new Ux(e), this.nodeCache, this.boundVariables, this.inferredVariables) : $D(_$$e.DEVELOPER_TOOLS, Error(`Unexpected node type for border: ${e?.type}`));
      return t;
    });
  }
  get fills() {
    return this.readValue("fills", (e) => {
      let t;
      return "symbol" == typeof e?.fills ? [] : ("RECTANGLE" === e.type ? t = e?.fills?.filter((e) => e.visible ?? !0) ?? [] : "LINE" === e.type ? t = e?.strokes?.filter((e) => e.visible ?? !0) ?? [] : "ELLIPSE" === e.type ? t = e?.fills?.filter((e) => e.visible ?? !0) ?? [] : $D(_$$e.DEVELOPER_TOOLS, Error(`Unexpected node type for fill: ${e?.type}`)), t);
    });
  }
  get layout() {
    return this.readValue("layout", (e) => {
      let t;
      if ("RECTANGLE" === e.type) t = new _$$t(e, this.nodeCache);else if ("LINE" === e.type) {
        let i = 0;
        let n = 0;
        switch (Math.round(e.rotation)) {
          case 0:
          case 180:
            i = e.width;
            n = e.strokeWeight;
            break;
          case 90:
          case -90:
            i = e.strokeWeight;
            n = e.width;
            break;
          default:
            i = e.width;
            n = e.height;
        }
        t = new _$$t(new Q(e, i, n), this.nodeCache);
      } else "ELLIPSE" === e.type && (t = new _$$t(e, this.nodeCache));
      return t;
    });
  }
  get gridLayout() {
    return this.readValue("gridLayout", (e) => new R(e));
  }
  get fillStyle() {
    return this.readValue("fillStyle", (e) => fl(e, this.nodeCache.stylesResolver));
  }
  get strokeStyle() {
    return this.readValue("strokeStyle", (e) => wI(e, this.nodeCache.stylesResolver));
  }
  get effectStyle() {
    return this.readValue("effectStyle", (e) => $r(e, this.nodeCache.stylesResolver));
  }
  get id() {
    return this.readValue("id", (e) => e.id);
  }
  get name() {
    return this.readValue("name", (e) => e.name);
  }
  get effects() {
    return this.readValue("effects", (e) => e.effects.filter((e) => e.visible ?? !0));
  }
  get opacity() {
    return this.readValue("opacity", (e) => e.opacity);
  }
  get blendMode() {
    return this.readValue("blendMode", (e) => e.blendMode);
  }
  get boundVariables() {
    return this.readValue("boundVariables", (e) => e.boundVariables);
  }
  get inferredVariables() {
    return this.readValue("inferredVariables", (e) => e.availableInferredVariables);
  }
  getVariableValue(e) {
    return ut(this.boundVariables, this.inferredVariables, e, this.nodeCache.variableResolver);
  }
  setName(e) {
    this._cachedProperties.name = e;
  }
  isAutoLayout() {
    return !1;
  }
  isGrid() {
    return !1;
  }
}
export const j = $$c0;