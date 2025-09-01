import { glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { UN } from "../905/700578";
import s from "../vendor/128080";
import $$l from "../vendor/241899";
import { zk } from "../figma_app/198712";
var o = s;
var d = $$l;
function u(e, t, i, n, a) {
  let s = e;
  let l = Object.keys(e);
  let c = l[0];
  if (!c) return;
  let u = e[c];
  l.every(t => e[t] === u) && (s = u);
  let p = t[n] ? d()(t, l) : t[a];
  o()(p, s) || (l7.user(`update-${a}`, () => {
    "number" == typeof s ? (l.forEach(e => {
      t[e] = s;
    }), t[n] = !1, t[a] = s) : (t[n] = !0, l.forEach(e => {
      t[e] = s[e];
    }));
  }), i.current = !0);
}
export class $$p1 {
  constructor({
    isDisaggregated: e,
    disaggregatedValues: t,
    aggregatedValue: i
  }) {
    this.isDisaggregated = e;
    this.disagreggatedValues = t;
    this.aggregatedValue = i;
  }
  getValue() {
    let e = new Map();
    UN().getDirectlySelectedNodes().forEach(t => {
      e.set(t.guid, t[this.isDisaggregated] ? d()(t, this.disagreggatedValues) : t[this.aggregatedValue]);
    });
    return e;
  }
  onChange(e, t, i) {
    let r = {
      current: !1
    };
    UN().getDirectlySelectedNodes().forEach(i => {
      let n = e.get(i.guid);
      if (null == n) return;
      if ("number" == typeof n) {
        let e = t(n);
        u(this.disagreggatedValues.reduce((t, i) => (t[i] = e, t), {}), i, r, this.isDisaggregated, this.aggregatedValue);
        return;
      }
      let a = {
        ...n
      };
      this.disagreggatedValues.forEach(e => {
        a[e] = t(a[e]);
      });
      u(a, i, r, this.isDisaggregated, this.aggregatedValue);
    });
    i !== zk.NO && r.current && glU && glU.triggerAction("commit", {});
  }
}
export class $$m0 {
  constructor({
    key: e,
    disaggregatedValues: t,
    isDisaggregated: i,
    aggregatedValue: n
  }) {
    this.key = e;
    this.disaggregatedValues = t;
    this.isDisaggregated = i;
    this.aggregatedValue = n;
  }
  getValue() {
    let e = new Map();
    UN().getDirectlySelectedNodes().forEach(t => {
      let i = t[this.isDisaggregated] ? t[this.key] : t[this.aggregatedValue];
      e.set(t.guid, i);
    });
    return e;
  }
  onChange(e, t, i) {
    let r = {
      current: !1
    };
    UN().getDirectlySelectedNodes().forEach(i => {
      let n = e.get(i.guid);
      if (null == n) return;
      let a = t(n);
      u({
        ...function (e, t, i, n) {
          let r = d()(e, t);
          e[i] || t.forEach(t => {
            r[t] = e[n];
          });
          return r;
        }(i, this.disaggregatedValues, this.isDisaggregated, this.aggregatedValue),
        [this.key]: a
      }, i, r, this.isDisaggregated, this.aggregatedValue);
    });
    i !== zk.NO && r.current && glU && glU.triggerAction("commit", {});
  }
}
export const l = $$m0;
export const x = $$p1;