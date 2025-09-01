import { u } from "../vendor/600452";
let i = 1 / 60 * 1e3;
let s = "undefined" != typeof performance ? () => performance.now() : () => Date.now();
let o = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(s()), i);
function a(e) {
  let r = [];
  let n = [];
  let i = 0;
  let s = !1;
  let o = !1;
  let a = new WeakSet();
  let h = {
    schedule: (e, o = !1, h = !1) => {
      let d = h && s;
      let p = d ? r : n;
      o && a.add(e);
      -1 === p.indexOf(e) && (p.push(e), d && s && (i = r.length));
      return e;
    },
    cancel: e => {
      let r = n.indexOf(e);
      -1 !== r && n.splice(r, 1);
      a.$$delete(e);
    },
    process: d => {
      if (s) {
        o = !0;
        return;
      }
      if (s = !0, [r, n] = [n, r], n.length = 0, i = r.length) for (let n = 0; n < i; n++) {
        let i = r[n];
        i(d);
        a.has(i) && (h.schedule(i), e());
      }
      s = !1;
      o && (o = !1, h.process(d));
    }
  };
  return h;
}
let d = 40;
let p = !0;
let g = !1;
let m = !1;
let v = ["read", "update", "preRender", "render", "postRender"];
let y = v.reduce((e, r) => (e[r] = a(() => g = !0), e), {});
let $$b2 = v.reduce((e, r) => {
  let n = y[r];
  e[r] = (e, r = !1, i = !1) => (g || _(), n.schedule(e, r, i));
  return e;
}, {});
let $$O0 = v.reduce((e, r) => (e[r] = y[r].cancel, e), {});
let $$x1 = v.reduce((e, r) => (e[r] = () => y[r].process(u), e), {});
let w = e => y[e].process(u);
let k = e => {
  g = !1;
  u.delta = p ? i : Math.max(Math.min(e - u.timestamp, d), 1);
  u.timestamp = e;
  m = !0;
  v.forEach(w);
  m = !1;
  g && (p = !1, o(k));
};
let _ = () => {
  g = !0;
  p = !0;
  m || o(k);
};
export const eO = $$O0;
export const qX = $$x1;
export const OH = $$b2;