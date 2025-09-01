import { H } from "../905/730910";
import { t } from "../905/367656";
import { Z3 } from "../905/8035";
import { H2 } from "../905/707098";
export class $$o0 {
  constructor(e, t) {
    this._cachedProperties = {};
    this.nodeCache = t;
    this._EXPENSIVE_TO_READ_node = e;
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
  get layout() {
    return this.readValue("layout", e => new t(e, this.nodeCache));
  }
  get properties() {
    return this.readValue("properties", e => Z3(e.componentPropertyDefinitions));
  }
  get children() {
    return this.readValue("children", e => H(this.nodeCache, e));
  }
  getVariableValue(e) {
    return null;
  }
  setName(e) {
    this._cachedProperties.name = e;
  }
  static from(e, t) {
    return new $$o0(e, t);
  }
  isAutoLayout() {
    return !1;
  }
  isLayoutContainer() {
    return !1;
  }
  isGrid() {
    return !1;
  }
}
export const B = $$o0;