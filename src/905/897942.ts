import { R } from "../905/927840";
import { t } from "../905/367656";
import { X } from "../905/361176";
import { H2, fl, $r, wI, V$, Hb, ut } from "../905/707098";
export class $$o0 {
  constructor(e, t) {
    this._cachedProperties = {};
    this._EXPENSIVE_TO_READ_node = e;
    this.nodeCache = t;
  }
  static from(e, t) {
    return new $$o0(e, t);
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
  get autoRename() {
    return this.readValue("autoRename", e => e.autoRename);
  }
  get layout() {
    return this.readValue("layout", e => new t(e, this.nodeCache));
  }
  get gridLayout() {
    return this.readValue("gridLayout", e => new R(e));
  }
  get opacity() {
    return this.readValue("opacity", e => e.opacity);
  }
  get blendMode() {
    return this.readValue("blendMode", e => e.blendMode);
  }
  get characters() {
    return this.readValue("characters", e => e.characters);
  }
  get textAlignHorizontal() {
    return this.readValue("textAlignHorizontal", e => e.textAlignHorizontal);
  }
  get textAlignVertical() {
    return this.readValue("textAlignVertical", e => e.textAlignVertical);
  }
  get textAutoResize() {
    return this.readValue("textAutoResize", e => e.textAutoResize);
  }
  get paragraphIndent() {
    return this.readValue("paragraphIndent", e => e.paragraphIndent);
  }
  get paragraphSpacing() {
    return this.readValue("paragraphSpacing", e => e.paragraphSpacing);
  }
  get effects() {
    return this.readValue("effects", e => e.effects.filter(e => e.visible ?? !0));
  }
  get strokes() {
    return this.readValue("strokes", e => e.strokes.filter(e => e.visible ?? !0));
  }
  get strokeWeight() {
    return this.readValue("strokeWeight", e => "number" != typeof e.strokeWeight ? 0 : e.strokeWeight);
  }
  get fillStyle() {
    return this.readValue("fillStyle", e => fl(e, this.nodeCache.stylesResolver));
  }
  get effectStyle() {
    return this.readValue("effectStyle", e => $r(e, this.nodeCache.stylesResolver));
  }
  get strokeStyle() {
    return this.readValue("strokeStyle", e => wI(e, this.nodeCache.stylesResolver));
  }
  get textStyle() {
    return this.readValue("textStyle", e => V$(e, this.nodeCache.stylesResolver));
  }
  get maxLines() {
    return this.readValue("maxLines", e => e.maxLines ?? void 0);
  }
  get textSegments() {
    return this.readValue("textSegments", e => (e.textSegments ? e.textSegments : e.getStyledTextSegments(["fontSize", "fontName", "fontWeight", "textCase", "textDecoration", "textDecorationStyle", "textDecorationSkipInk", "textDecorationColor", "textDecorationThickness", "textDecorationOffset", "letterSpacing", "lineHeight", "fills", "textStyleId", "fillStyleId", "hyperlink", "boundVariables"])).map(e => {
      let t = X(e.boundVariables ?? {}, {}, this.nodeCache.variableResolver, e.fontName.family, "fontFamily");
      let i = X(e.boundVariables ?? {}, {}, this.nodeCache.variableResolver, e.fontWeight, "fontWeight");
      let n = i.variable?.value?.resolvedType === "FLOAT" ? i : {
        rawValue: e.fontWeight
      };
      let r = X(e.boundVariables ?? {}, {}, this.nodeCache.variableResolver, e.fontSize, "fontSize");
      let s = X(e.boundVariables ?? {}, {}, this.nodeCache.variableResolver, e.lineHeight, "lineHeight");
      let o = X(e.boundVariables ?? {}, {}, this.nodeCache.variableResolver, e.letterSpacing, "letterSpacing");
      let l = X(e.boundVariables ?? {}, {}, this.nodeCache.variableResolver, e.textDecorationColor, "textDecorationColor");
      return {
        ...e,
        fontName: {
          ...e.fontName,
          family: t
        },
        fontWeight: n,
        fontSize: r,
        lineHeight: s,
        letterSpacing: o,
        textDecorationColor: l
      };
    }));
  }
  get leadingTrim() {
    return this.readValue("leadingTrim", e => e.leadingTrim);
  }
  get openTypeFeatures() {
    return this.readValue("openTypeFeatures", e => e?.openTypeFeatures);
  }
  get boundVariables() {
    return this.readValue("boundVariables", e => e.boundVariables);
  }
  get inferredVariables() {
    return this.readValue("inferredVariables", e => e.availableInferredVariables);
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
  isAutoLayout() {
    return !1;
  }
  isGrid() {
    return !1;
  }
}
export const z = $$o0;