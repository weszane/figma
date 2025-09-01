let n = ["unit-test", "local", "devenv01", "staging", "production", "gov"];
function r(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export let $$a1 = {
  statusCode: 587,
  statusText: "Model parsing failed"
};
export class $$s0 extends Error {
  static isInstance(e) {
    return $$s0.hasMarker(e, $$s0.marker);
  }
  static hasMarker(e, t) {
    return null != e && "object" == typeof e && "marker" in e && e.marker === t;
  }
  static fromJSON(e) {
    return new $$s0(e);
  }
  getParamsWithoutPII() {
    return {
      message: this.message,
      marker: this.marker,
      name: this.name,
      statusCode: this.statusCode,
      trace: this.trace,
      requestUuid: this.requestUuid
    };
  }
  getParamsWithPII() {
    return {};
  }
  toJSON(e) {
    e ??= "production";
    n.includes(e) || (e = "production");
    return ["production", "gov"].includes(e) ? this.getParamsWithoutPII() : {
      ...this.getParamsWithoutPII(),
      ...this.getParamsWithPII()
    };
  }
  constructor({
    message: e,
    requestUuid: t,
    statusCode: i,
    trace: n
  }) {
    super(e);
    r(this, "marker", void 0);
    r(this, "statusCode", 500);
    r(this, "trace", void 0);
    r(this, "requestUuid", void 0);
    r(this, "sentryTags", void 0);
    null != i && (this.statusCode = i);
    this.marker = this.constructor.marker;
    this.name = this.marker;
    this.trace = n;
    this.requestUuid = t;
  }
}
r($$s0, "marker", "CortexError");
export const G = $$s0;
export const e = $$a1;