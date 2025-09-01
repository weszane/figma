let u = new Map();
let n = new Set();
function r() {
  if ("undefined" == typeof window) return;
  function e(e) {
    return "propertyName" in e;
  }
  let t = a => {
    if (!e(a) || !a.target) return;
    let r = u.get(a.target);
    if (r && (r.$$delete(a.propertyName), 0 === r.size && (a.target.removeEventListener("transitioncancel", t), u.$$delete(a.target)), 0 === u.size)) {
      for (let e of n) e();
      n.clear();
    }
  };
  document.body.addEventListener("transitionrun", a => {
    if (!e(a) || !a.target) return;
    let n = u.get(a.target);
    n || (n = new Set(), u.set(a.target, n), a.target.addEventListener("transitioncancel", t, {
      once: !0
    }));
    n.add(a.propertyName);
  });
  document.body.addEventListener("transitionend", t);
}
export function $$i0(e) {
  requestAnimationFrame(() => {
    !function () {
      for (let [e] of u) "isConnected" in e && !e.isConnected && u.$$delete(e);
    }();
    0 === u.size ? e() : n.add(e);
  });
}
"undefined" != typeof document && ("loading" !== document.readyState ? r() : document.addEventListener("DOMContentLoaded", r));
export const v = $$i0;