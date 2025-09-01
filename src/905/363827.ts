export class $$n0 {
  constructor() {
    this.suggestedVars = new Map();
  }
  set(e, t) {
    this.suggestedVars.set(e, t);
  }
  get(e) {
    return this.suggestedVars.get(e);
  }
  has(e) {
    return this.suggestedVars.has(e);
  }
  keys() {
    return this.suggestedVars.keys();
  }
  merge(e) {
    for (let t in e.keys()) this.set(t, e.get(t));
    return this;
  }
}
export class $$r1 {
  constructor(e, t) {
    this.raw = e;
    this.matchingVarId = t;
  }
  get value() {
    return `/*SUGGESTED_VAR_START_${this.matchingVarId}*/${this.raw.value}/*SUGGESTED_VAR_END*/`;
  }
  equals(e) {
    return e instanceof $$r1 && this.raw.value === e.raw.value;
  }
}
export const E = $$n0;
export const u = $$r1;