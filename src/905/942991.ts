import { LRUCache } from "../905/196201";
import { Ax } from "../figma_app/616261";
import { dU } from "../905/660732";
import { BB } from "../figma_app/98578";
import { n as _$$n } from "../905/548236";
class l {
  constructor(e, t) {
    this.factors = e;
    this.opts = t;
    let i = e.reduce((e, t) => e + t.weight, 0);
    if (1 !== i) throw Error(`Total weight must be 1, but was ${i}`);
  }
  scoreFactor(e, t, i) {
    return i.normalizedScore(e, t, this.opts) * i.weight;
  }
  score(e, t) {
    return this.factors.reduce((i, n) => {
      let r = n.normalizedScore(e, t, this.opts);
      if (r < 0 || r > 1) throw Error(`Normalized score for '${n.name}' must be between 0 and 1, but was ${r}`);
      return i + this.scoreFactor(e, t, n);
    }, 0);
  }
  sort(e, t, i) {
    return this.score(e, t) > this.score(e, i) ? -1 : 1;
  }
  debugData(e, t) {
    let i = this.score(e, t);
    let n = `- Total Score: ${i.toFixed(2)}`;
    return {
      score: i,
      details: ["Weighted sort (w=weight, s=score):", n, ...this.factors.sort((i, n) => this.scoreFactor(e, t, n) - this.scoreFactor(e, t, i)).map(i => {
        let n = i.normalizedScore(e, t, this.opts);
        let r = i.debugInfo && i.debugInfo(e, t, this.opts) || "";
        return `- ${i.name}: w=${i.weight} x s=${n.toFixed(2)} = ${this.scoreFactor(e, t, i).toFixed(2)} ${r}`;
      })].join("\n")
    };
  }
}
let d = new LRUCache(1e3);
function c(e, t, i) {
  let n = t.fullscreenMenuAction.stringMatchedAgainst;
  let a = t.fullscreenMenuAction.stringMatchScore;
  if (!n || !a) return 0;
  let s = d.get(n);
  if (!s) {
    let e = new Ax(n, i.acceptsUnicode).matchAgainstText(n);
    d.set(n, e?.score ?? 1);
    s = e?.score ?? 1;
  }
  let o = Math.max(s, a);
  return a / o;
}
function u(e, t) {
  let i = t.fullscreenMenuAction.substringMatchedAgainst;
  let n = t.fullscreenMenuAction.substringMatchScore;
  if (!i || !n) return 0;
  let r = new dU(i).perfectScore();
  return 0 === r ? 0 : n / r;
}
let p = {
  normalizedScore: (e, t, i) => Math.max(c(e, t, i), u(e, t)),
  weight: .4,
  name: "String match",
  debugInfo(e, t, i) {
    let n = c(e, t, i);
    let r = u(e, t);
    return n > 0 || r > 0 ? `Fuzzy match: ${n.toFixed(2)}, Synonym match: ${r.toFixed(2)}` : "";
  }
};
let m = {
  normalizedScore: (e, t) => BB(t.fullscreenMenuAction) ? 1 : 0,
  weight: .1,
  name: "isAI"
};
let h = {
  normalizedScore: (e, t) => t.fullscreenMenuAction.disabled ? 0 : 1,
  weight: .3,
  name: "isEnabled"
};
export function $$g0({
  actions: e,
  acceptsUnicode: t = !0
}) {
  return new l([p, {
    normalizedScore(t, i) {
      var n;
      let r = _$$n(i.fullscreenMenuAction);
      return (n = e.data(r)?.score() ?? 0) / (n + 1e3);
    },
    weight: .2,
    name: "Action Frecency"
  }, m, h], {
    acceptsUnicode: t
  });
}
export const ou = $$g0;