import { jJ, Tj, pb, I6, zN, Si, U9 } from "../905/809288";
export class $$r0 {
  constructor(e) {
    this.id = e;
  }
  get displayProperties() {
    this._cachedDisplayProperties || (this._cachedDisplayProperties = this.generateDisplayProperties());
    return this._cachedDisplayProperties;
  }
  get searchProperties() {
    this._cachedSearchProperties || (this._cachedSearchProperties = this.generateSearchProperties());
    return this._cachedSearchProperties;
  }
  get rawProperties() {
    this._cachedRawProperties || (this._cachedRawProperties = this.generateRawProperties());
    return this._cachedRawProperties;
  }
  get computedProperties() {
    this._cachedComputedProperties || (this._cachedComputedProperties = this.generateComputedProperties());
    return this._cachedComputedProperties;
  }
  freeze() {
    return new a(this);
  }
  forEachAncestor(e, t) {
    return jJ(this, "parent", e, t);
  }
  forEachDescendant(e, t) {
    return jJ(this, "children", e, t);
  }
  mapAncestors(e, t) {
    return Tj(this, "parent", e, t);
  }
  mapDescendants(e, t) {
    return Tj(this, "children", e, t);
  }
  filterAncestors(e, t) {
    return pb(this, "parent", e, t);
  }
  filterDescendants(e, t) {
    return pb(this, "children", e, t);
  }
  findAncestor(e, t) {
    return I6(this, "parent", e, t);
  }
  findDescendant(e, t) {
    return I6(this, "children", e, t);
  }
  someAncestor(e, t) {
    return zN(this, "parent", e, t);
  }
  someDescendant(e, t) {
    return zN(this, "children", e, t);
  }
  everyAncestor(e, t) {
    return Si(this, "parent", e, t);
  }
  everyDescendant(e, t) {
    return Si(this, "children", e, t);
  }
  countAncestors(e, t) {
    return U9(this, "parent", e, t);
  }
  countDescendants(e, t) {
    return U9(this, "children", e, t);
  }
}
class a extends $$r0 {
  constructor(e) {
    super(e.id);
    this.parent = e.parent;
    this.children = e.children;
    this._cachedDisplayProperties = e.displayProperties;
    this._cachedSearchProperties = e.searchProperties;
    this._cachedRawProperties = e.rawProperties;
    this._cachedComputedProperties = e.computedProperties;
  }
  generateDisplayProperties() {
    return this._cachedDisplayProperties;
  }
  generateSearchProperties() {
    return this._cachedSearchProperties;
  }
  generateRawProperties() {
    return this._cachedRawProperties;
  }
  generateComputedProperties() {
    return this._cachedComputedProperties;
  }
}
export const s = $$r0;