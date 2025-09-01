import { S8, rk, A0 } from "../905/687992";
export class $$r0 {
  opts;
  min = void 0;
  max = void 0;
  constructor(e = {}) {
    this.opts = e;
    this.min = e.min;
    this.max = e.max;
  }
  format(e) {
    if (!s(e)) return "";
    let {
      idealLength
    } = this.opts;
    let i = a(e, this.opts);
    if (!idealLength || i.length <= idealLength) return i;
    let n = i.indexOf(".");
    if (-1 === n) return i;
    let r = i.length - n - 1;
    let o = this.opts.minimumFractionDigits ?? 0;
    if (o === r) return i;
    let l = Math.max(o, r - (i.length - idealLength));
    return a(e, {
      minimumFractionDigits: l,
      maximumFractionDigits: l
    });
  }
  parse(e) {
    let t = parseFloat(S8(e));
    if (!s(t)) throw Error(`Invalid number: ${e}`);
    return 0 === t ? 0 : t;
  }
  getNudgeAmount(e) {
    return e ? this.opts.bigNudge ?? rk : this.opts.nudge ?? A0;
  }
  incrementBy(e, t, i) {
    return e + t;
  }
  normalize = S8;
}
function a(e, t) {
  let i = {
    ...t,
    useGrouping: !1
  };
  try {
    return new Intl.NumberFormat("en-US", {
      ...i,
      trailingZeroDisplay: "stripIfInteger",
      signDisplay: "negative"
    }).format(e);
  } catch {
    return new Intl.NumberFormat("en-US", i).format(e).replace(/\.0+$/, "");
  }
}
function s(e) {
  return "number" == typeof e && !Number.isNaN(e) && Number.isFinite(e);
}
export const K = $$r0;