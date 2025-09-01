export function $$n1(e) {
  let t = [];
  for (let [i, n] of Object.entries(e)) if (n) {
    if (Array.isArray(n)) for (let e of n) t.push({
      property: i,
      value: e,
      isExact: !0
    });else t.push({
      property: i,
      value: n,
      isExact: !0
    });
  }
  return t;
}
export function $$r0(e) {
  let t;
  let i = [];
  e = e.trim();
  let n = /([a-zA-Z0-9_.]+=)?("[^"]*"|'[^']*'|[^\s]+)/g;
  for (; t = n.exec(e);) {
    var r;
    let e = t[1]?.slice(0, -1) || void 0;
    let {
      value,
      isExact
    } = (r = t[2]).startsWith("'") && r.endsWith("'") || r.startsWith('"') && r.endsWith('"') ? {
      value: r.slice(1, -1),
      isExact: !0
    } : {
      value: r,
      isExact: !1
    };
    i.push({
      property: e,
      value,
      isExact
    });
  }
  i.length > 1 && (i = function (e) {
    let t = [];
    let i = e[0];
    let n = e[1];
    let r = 2;
    for (;;) if (n) {
      i.property || n.property || i.isExact || n.isExact ? (t.push(i), i = n) : i = {
        property: void 0,
        value: `${i.value} ${n.value}`,
        isExact: !1
      };
      n = e[r++];
    } else {
      t.push(i);
      break;
    }
    return t;
  }(i));
  return i;
}
export const B = $$r0;
export const R = $$n1;