function n(e, t, i) {
  for (let t = 0; t < 16; t = t + 1 | 0) e[t] = i[t << 2] << 24 | i[(t << 2) + 1 | 0] << 16 | i[(t << 2) + 2 | 0] << 8 | i[(t << 2) + 3 | 0];
  for (let t = 16; t < 80; t = t + 1 | 0) {
    let i = e[t - 3 | 0] ^ e[t - 8 | 0] ^ e[t - 14 | 0] ^ e[t - 16 | 0];
    e[t] = i << 1 | i >>> 31;
  }
  let n = t[0];
  let r = t[1];
  let a = t[2];
  let s = t[3];
  let o = t[4];
  for (let t = 0; t < 80; t = t + 1 | 0) {
    let i = ((n << 5 | n >>> 27) + o | 0) + e[t] | 0;
    i = t < 20 ? (i + (r & a | ~r & s) | 0) + 0x5a827999 | 0 : t < 40 ? (i + (r ^ a ^ s) | 0) + 0x6ed9eba1 | 0 : t < 60 ? (i + (r & a | r & s | a & s) | 0) + 0x8f1bbcdc | 0 : (i + (r ^ a ^ s) | 0) + 0xca62c1d6 | 0;
    o = s;
    s = a;
    a = r << 30 | r >>> 2;
    r = n;
    n = i;
  }
  t[0] = t[0] + n | 0;
  t[1] = t[1] + r | 0;
  t[2] = t[2] + a | 0;
  t[3] = t[3] + s | 0;
  t[4] = t[4] + o | 0;
}
export function $$r1(e) {
  let t = new Uint8Array(20);
  let i = new Int32Array(80);
  let r = new Uint8Array(64);
  let a = new Int32Array([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
  let s = 0;
  let o = 0;
  let l = e.length;
  for (; l > 0;) {
    l = l - 1 | 0;
    r[o] = e[s];
    s = s + 1 | 0;
    64 == (o = o + 1 | 0) && (n(i, a, r), o = 0);
  }
  if (r[o] = 128, (o = o + 1 | 0) > 56) {
    for (; o < 64;) {
      r[o] = 0;
      o = o + 1 | 0;
    }
    n(i, a, r);
    o = 0;
  }
  for (let e = o; e < 56; e = e + 1 | 0) r[e] = 0;
  let d = s << 3;
  for (let e = 7; e >= 0; e = e - 1 | 0) {
    r[56 + e | 0] = 255 & d;
    d >>>= 8;
  }
  o = 64;
  n(i, a, r);
  for (let e = 0; e < 5; e = e + 1 | 0) {
    let i = a[e];
    for (let n = 3; n >= 0; n = n - 1 | 0) {
      t[(e << 2) + n | 0] = 255 & i;
      i >>>= 8;
    }
  }
  let c = [];
  for (var u = 0; u < t.length; u++) c.push((256 | t[u]).toString(16).slice(1));
  return c.join("");
}
export function $$a4(e) {
  return $$r1(new TextEncoder().encode(e));
}
export function $$s3(e) {
  (function (e) {
    if (20 !== e.length) throw Error("Invalid SHA1 hash");
  })(e);
  return $$l0(e);
}
export function $$o2(e) {
  !function (e) {
    if (!/^[0-9A-Fa-f]{40}$/.test(e)) throw Error("Invalid SHA1 hash");
  }(e);
  let t = new Uint8Array(20);
  for (let i = 0; i < 40; i += 2) t[i / 2] = parseInt(e.slice(i, i + 2), 16);
  return t;
}
export function $$l0(e) {
  return [].map.call(e, e => (256 | e).toString(16).slice(1)).join("");
}
export const B9 = $$l0;
export const Et = $$r1;
export const aD = $$o2;
export const nj = $$s3;
export const yS = $$a4;