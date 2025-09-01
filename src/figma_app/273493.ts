export function $$n3(e) {
  if (0 === e.s) return {
    r: e.l,
    g: e.l,
    b: e.l,
    a: e.a
  };
  let t = e.l < .5 ? e.l * (1 + e.s) : e.l + e.s - e.l * e.s;
  let r = 2 * e.l - t;
  let n = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    let a = e.h + -(1 / 3 * (i - 1));
    a < 0 && a++;
    a > 1 && a--;
    6 * a < 1 ? n[i] = r + (t - r) * 6 * a : 2 * a < 1 ? n[i] = t : 3 * a < 2 ? n[i] = r + (t - r) * (2 / 3 - a) * 6 : n[i] = r;
  }
  return {
    r: n[0],
    g: n[1],
    b: n[2],
    a: e.a
  };
}
export function $$i11(e) {
  let t = e.r;
  let r = e.g;
  let n = e.b;
  let i = Math.min(Math.min(t, r), n);
  let a = Math.max(Math.max(t, r), n);
  let s = a - i;
  let o = 0;
  a === i ? o = 0 : t === a ? o = (r - n) / s : r === a ? o = 2 + (n - t) / s : n === a && (o = 4 + (t - r) / s);
  (o = Math.min(60 * o, 360)) < 0 && (o += 360);
  let l = (i + a) / 2;
  return {
    h: o /= 360,
    s: a === i ? 0 : l <= .5 ? s / (a + i) : s / (2 - a - i),
    l,
    a: e.a
  };
}
export function $$a10(e) {
  let t = (e.h - Math.floor(e.h)) * 6;
  let r = e.v * e.s;
  let n = r * (1 - Math.abs(t % 2 - 1));
  let i = e.s <= 0 ? 0 : t < 1 ? r : t < 2 ? n : t < 3 ? 0 : t < 4 ? 0 : t < 5 ? n : r;
  let a = e.s <= 0 ? 0 : t < 1 ? n : t < 2 ? r : t < 3 ? r : t < 4 ? n : 0;
  let s = e.s <= 0 ? 0 : t < 1 ? 0 : t < 2 ? 0 : t < 3 ? n : t < 4 ? r : t < 5 ? r : n;
  let o = e.v - r;
  return {
    r: i + o,
    g: a + o,
    b: s + o,
    a: e.a
  };
}
export function $$s14(e) {
  let t = Math.max(Math.max(e.r, e.g), e.b);
  let r = t - Math.min(Math.min(e.r, e.g), e.b);
  return {
    h: (0 === r ? 0 : t === e.r ? ((e.g - e.b) / r + 6) % 6 : t === e.g ? (e.b - e.r) / r + 2 : (e.r - e.g) / r + 4) / 6,
    s: 0 === t ? 0 : r / t,
    v: t,
    a: e.a
  };
}
export function $$o15(e) {
  return "l" in e ? $$n3(e) : $$a10(e);
}
export function $$l2(e) {
  return "l" in e ? {
    ...e,
    s: 1,
    l: .5,
    a: 1
  } : {
    ...e,
    s: 1,
    v: 1,
    a: 1
  };
}
export function $$d0(e, t) {
  let r = $$i11(e);
  let a = 360 * r.h;
  return $$n3({
    ...r,
    h: (a + t) % 360 / 360
  });
}
function c(e) {
  return 255 & (e > 0 ? 255 * e + .5 : 0);
}
function u(e, t, r, n) {
  return c(e) | c(t) << 8 | c(r) << 16 | c(n) << 24;
}
export function $$p4(e, t, r) {
  return c(e) | c(t) << 8 | c(r) << 16 | -0x1000000;
}
export function $$_9(e) {
  return c(e.red) | c(e.green) << 8 | c(e.blue) << 16 | c(e.alpha) << 24;
}
export function $$h5(e) {
  return {
    red: (255 & e) / 255,
    green: (e >> 8 & 255) / 255,
    blue: (e >> 16 & 255) / 255,
    alpha: (e >> 24 & 255) / 255
  };
}
export function $$m8(e, t) {
  let r = e.alpha;
  let n = t.alpha;
  let i = r * (1 - n);
  let a = i + n;
  let s = i / a;
  let o = n / a;
  return {
    red: e.red * s + t.red * o,
    green: e.green * s + t.green * o,
    blue: e.blue * s + t.blue * o,
    alpha: a
  };
}
export function $$g6(e, t) {
  return !!e && !!t && u(e.r, e.g, e.b, e.a) === u(t.r, t.g, t.b, t.a);
}
export function $$f12(e) {
  return {
    red: e.r,
    green: e.g,
    blue: e.b,
    alpha: e.a
  };
}
export function $$E7(e) {
  return {
    r: e.red,
    g: e.green,
    b: e.blue,
    a: e.alpha
  };
}
function y(e, t) {
  let r = [];
  for (let n = 0; n < 3; n++) r.push(e[n][0] * t[0] + e[n][1] * t[1] + e[n][2] * t[2]);
  return r;
}
export function $$b1(e) {
  return $$T13({
    l: e.l,
    ax: e.c * Math.cos(360 * e.h * Math.PI / 180),
    bx: e.c * Math.sin(360 * e.h * Math.PI / 180),
    a: e.a
  });
}
export function $$T13(e) {
  let t = y([[.9999999984505198, .39633779217376786, .2158037580607588], [1.000000008881761, -.10556134232365635, -.0638541747717059], [1.000000054672411, -.0894841820949658, -1.2914855378640917]], [e.l, e.ax, e.bx]);
  let r = y([[1.2268798733741557, -.5578149965554813, .28139105017721583], [-.04057576262431372, 1.1122868293970594, -.07171106666151701], [-.07637294974672142, -.4214933239627914, 1.5869240244272418]], t.map(e => e ** 3));
  let n = y([[12831 / 3959, -329 / 214, -1974 / 3959], [-851781 / 878810, 1648619 / 878810, 36519 / 878810], [705 / 12673, -2585 / 12673, 705 / 667]], r).map(function (e) {
    let t = Math.abs(e);
    return t > .0031308 ? (e < 0 ? -1 : 1) * (1.055 * Math.pow(t, 1 / 2.4) - .055) : 12.92 * e;
  });
  return {
    r: n[0],
    g: n[1],
    b: n[2],
    a: e.a
  };
}
export const Ad = $$d0;
export const I0 = $$b1;
export const Ih = $$l2;
export const In = $$n3;
export const QR = $$p4;
export const R0 = $$h5;
export const Vm = $$g6;
export const aH = $$E7;
export const au = $$m8;
export const bi = $$_9;
export const kE = $$a10;
export const oB = $$i11;
export const oU = $$f12;
export const oq = $$T13;
export const qN = $$s14;
export const w_ = $$o15;