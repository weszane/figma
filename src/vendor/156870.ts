let $$t4 = "?";
let f = /\(error: (.*)\)/;
let r = /captureMessage|captureException/;
export function $$a1(...e) {
  let n = e.sort((e, n) => e[0] - n[0]).map(e => e[1]);
  return (e, i = 0, a = 0) => {
    let o = [];
    let l = e.split("\n");
    for (let e = i; e < l.length; e++) {
      let i = l[e];
      if (i.length > 1024) continue;
      let t = f.test(i) ? i.replace(f, "$1") : i;
      if (!t.match(/\S*Error: /)) {
        for (let e of n) {
          let n = e(t);
          if (n) {
            o.push(n);
            break;
          }
        }
        if (o.length >= 50 + a) break;
      }
    }
    return function (e) {
      if (!e.length) return [];
      let n = Array.from(e);
      /sentryWrapped/.test(u(n).$$function || "") && n.pop();
      n.reverse();
      r.test(u(n).$$function || "") && (n.pop(), r.test(u(n).$$function || "") && n.pop());
      return n.slice(0, 50).map(e => ({
        ...e,
        filename: e.filename || u(n).filename,
        function: e.$$function || $$t4
      }));
    }(o.slice(a));
  };
}
export function $$o3(e) {
  return Array.isArray(e) ? $$a1(...e) : e;
}
function u(e) {
  return e[e.length - 1] || {};
}
let l = "<anonymous>";
export function $$d2(e) {
  try {
    if (!e || "function" != typeof e) return l;
    return e.name || l;
  } catch (e) {
    return l;
  }
}
export function $$s0(e) {
  let n = e.exception;
  if (n) {
    let e = [];
    try {
      n.values.forEach(n => {
        n.stacktrace.frames && e.push(...n.stacktrace.frames);
      });
      return e;
    } catch (e) {}
  }
}
export const RV = $$s0;
export const gd = $$a1;
export const qQ = $$d2;
export const vk = $$o3;
export const yF = $$t4;