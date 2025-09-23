import { ServiceCategories } from "../905/165054";
import { reportError } from "../905/11";
export class $$a1 {
  constructor(e, t, r) {
    this.equals = e => JSON.stringify(this) === JSON.stringify(e);
    this.result = e;
    this.score = t;
    this.text = r;
  }
}
export class $$s0 {
  constructor(e, t) {
    this.isValidQuery = () => !!this.forwardRegex || !!this.backwardRegex;
    this.matchAndSort = (e, t) => {
      let r = [];
      e.forEach(e => {
        let n = this.matchAgainstItem(e, t);
        n && r.push(n);
      });
      return r.sort((e, t) => e.score > t.score || e.score === t.score && e.text < t.text ? -1 : 1);
    };
    this.matchAgainst = e => {
      let t = [];
      e.forEach(e => {
        let r = this.matchAgainstText(e);
        r && t.push(r);
      });
      return t.sort((e, t) => e.score > t.score || e.score === t.score && e.text < t.text ? -1 : 1);
    };
    this.matchAgainstItem = (e, t) => {
      if (!this.isValidQuery()) return null;
      let r = t(e);
      let n = this.forwardRegex?.exec(r);
      let i = this.backwardRegex?.exec(this.reverseText(r));
      if (!n || !i) return null;
      let s = n.slice(1);
      let o = i.slice(1).map(e => this.reverseText(e)).reverse();
      let l = this.scoreMatch(s);
      let d = this.scoreMatch(o);
      let c = Math.max(l, d);
      return new $$a1(l >= d ? s : o, c, e);
    };
    this.matchAgainstText = e => this.matchAgainstItem(e, e => e);
    this.compileRegularExpression = (e, t) => {
      let r = "^(.*)";
      let a = !1;
      for (let n of e) {
        let e = n >= "A" && n <= "Z" || n >= "a" && n <= "z" || n >= "0" && n <= "9";
        if (t || e) {
          let e = $$o2(n);
          r += `(${e})(.*?)`;
          a = !0;
        }
      }
      if (!a) return null;
      r += "$";
      try {
        return new RegExp(r, t ? "iu" : "i");
      } catch (a) {
        reportError(ServiceCategories.EXTENSIBILITY, a, {
          extra: {
            query: e,
            acceptsUnicode: t,
            regex: r
          }
        });
        return null;
      }
    };
    this.reverseText = e => {
      let t = "";
      for (let r = e.length - 1; r >= 0; r--) t += e[r];
      return t;
    };
    this.scoreMatch = e => {
      let t = "";
      let r = 0;
      for (let n = 0; n < e.length; n++) {
        let i = e[n];
        n % 2 && ("" === t ? (r += 10, 1 === n && r++) : " " === t.slice(-1) && (r += 10));
        t = i;
      }
      return r;
    };
    this.forwardRegex = this.compileRegularExpression(e, t);
    this.backwardRegex = this.compileRegularExpression(this.reverseText(e), t);
  }
}
export function $$o2(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
export const Ax = $$s0;
export const Jt = $$a1;
export const eY = $$o2;
