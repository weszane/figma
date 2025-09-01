import { X } from "../905/361176";
import { H2 } from "../905/707098";
export class $$a0 {
  constructor(e, t, i, n) {
    this.cachedProperties = {};
    this._EXPENSIVE_TO_READ_node = e;
    this.nodeCache = t;
    this.boundVariables = i;
    this.inferredVariables = n;
  }
  static empty() {
    return new $$a0({
      bottomLeftRadius: 0,
      bottomRightRadius: 0,
      topLeftRadius: 0,
      topRightRadius: 0,
      strokeAlign: "CENTER",
      strokeBottomWeight: 0,
      strokeLeftWeight: 0,
      strokeRightWeight: 0,
      strokeTopWeight: 0,
      strokes: [],
      dashPattern: []
    }, null, {}, {});
  }
  readValue(e, t) {
    return H2(this.cachedProperties, e, this._EXPENSIVE_TO_READ_node, t);
  }
  get strokes() {
    return this.readValue("strokes", e => e.strokes.filter(e => e.visible ?? !0));
  }
  get strokeAlign() {
    return this.readValue("strokeAlign", e => e.strokeAlign);
  }
  get strokeTopWeight() {
    return this.readValue("strokeTopWeight", e => X(this.boundVariables, this.inferredVariables, this.nodeCache?.variableResolver, e.strokeTopWeight, "strokeTopWeight"));
  }
  get strokeBottomWeight() {
    return this.readValue("strokeBottomWeight", e => X(this.boundVariables, this.inferredVariables, this.nodeCache?.variableResolver, e.strokeBottomWeight, "strokeBottomWeight"));
  }
  get strokeLeftWeight() {
    return this.readValue("strokeLeftWeight", e => X(this.boundVariables, this.inferredVariables, this.nodeCache?.variableResolver, e.strokeLeftWeight, "strokeLeftWeight"));
  }
  get strokeRightWeight() {
    return this.readValue("strokeRightWeight", e => X(this.boundVariables, this.inferredVariables, this.nodeCache?.variableResolver, e.strokeRightWeight, "strokeRightWeight"));
  }
  get topLeftRadius() {
    return this.readValue("topLeftRadius", e => e.topLeftRadius);
  }
  get topRightRadius() {
    return this.readValue("topRightRadius", e => e.topRightRadius);
  }
  get bottomLeftRadius() {
    return this.readValue("bottomLeftRadius", e => e.bottomLeftRadius);
  }
  get bottomRightRadius() {
    return this.readValue("bottomRightRadius", e => e.bottomRightRadius);
  }
  get dashPattern() {
    return this.readValue("dashPattern", e => e.dashPattern);
  }
}
export const N = $$a0;