import { G1 } from "../figma_app/691470";
class r extends G1 {
  constructor({
    type: e,
    data: t,
    reportToSentry: i,
    message: n,
    trace: r,
    metadata: a,
    sentryTags: s,
    stack: o
  }) {
    super(e, t, n, o, r);
    (function (e, t, i) {
      t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i;
    })(this, "reportToSentry", void 0);
    this.reportToSentry = i ?? !0;
    a && (this.metadata = a);
    s && (this.sentryTags = s);
  }
}
export class $$a1 extends r {
  constructor(e) {
    super({
      ...e
    });
    this.name = "OfflineError";
  }
}
export class $$s3 extends r {
  constructor(e) {
    super({
      ...e
    });
    this.name = "RateLimitError";
  }
}
export class $$o5 extends r {
  constructor(e) {
    super({
      ...e
    });
    this.name = "ContentLengthLimitError";
  }
}
export class $$l0 extends r {
  constructor(e) {
    super({
      ...e
    });
    this.name = "UnsafeHarmfulContentError";
  }
}
export class $$d2 extends r {
  constructor(e) {
    super({
      ...e
    });
    this.name = "MeterExceededError";
  }
}
export class $$c4 extends r {
  constructor(e) {
    super({
      ...e
    });
    this.name = "ServiceIssueError";
  }
}
export class $$u6 extends r {
  constructor(e) {
    super({
      ...e
    });
    this.name = "AIOptOutError";
  }
}
export class $$p7 extends r {
  constructor(e) {
    super({
      ...e
    });
    this.name = "GenericCortexError";
  }
}
export const $L = $$l0;
export const M_ = $$a1;
export const NZ = $$d2;
export const OE = $$s3;
export const PI = $$c4;
export const ZO = $$o5;
export const g6 = $$u6;
export const rY = $$p7;