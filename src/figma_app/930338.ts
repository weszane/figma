import { getI18nState } from '../figma_app/363242';
export function $$i15(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
export function $$a25(e) {
  return e.toLowerCase().replace(/-(.)/g, (e, t) => {
    return t.toUpperCase();
  });
}
export function $$s24(e) {
  return e.replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase().replace(/[\W_]+/g, '_');
}
export function $$o10(e) {
  return e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
export function $$l16(e) {
  return e.replace(/([A-Z])/g, '_$1').toLowerCase();
}
export function $$d19(e) {
  return e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
export function $$c12(e) {
  let t = unescape(encodeURIComponent(e));
  let r = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) r[n] = t.charCodeAt(n);
  return r;
}
export function $$u21(e) {
  return String.prototype.toWellFormed ? e.toWellFormed() : function (e) {
    function t(e) {
      return (63488 & e) == 55296;
    }
    let r = '';
    for (let n = 0; n < e.length; ++n) {
      let i = e.charCodeAt(n);
      if (!t(i)) {
        r += e.charAt(n);
        continue;
      }
      if (!((1024 & i) != 0) && n + 1 < e.length) {
        let i = e.charCodeAt(n + 1);
        if (t(i) && (1024 & i) != 0) {
          r += e.charAt(n);
          r += e.charAt(n + 1);
          ++n;
          continue;
        }
      }
      r += '\uFFFD';
    }
    return r;
  }(e);
}
export function $$p3(e, t) {
  return e.length > t ? `${e.slice(0, t - 1).trimEnd()}\u2026` : e;
}
export function $$_8(e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let n = function (e, t) {
      let r = e.charCodeAt(t);
      if (Number.isNaN(r)) return '';
      if (r < 55296 || r > 57343) return e.charAt(t);
      if (r >= 55296 && r <= 56319) {
        if (e.length <= t + 1) throw new Error('High surrogate without following low surrogate');
        let r = e.charCodeAt(t + 1);
        if (r < 56320 || r > 57343) throw new Error('High surrogate without following low surrogate');
        return e.charAt(t) + e.charAt(t + 1);
      }
      throw new Error('Not the start of a single- or multibyte-character');
    }(e, r);
    r += n.length - 1;
    t.push(n);
  }
  return t;
}
let h = {
  numeric: !0,
  sensitivity: 'base'
};
export function $$m2(e, t, r = h) {
  let i = getI18nState().getPrimaryLocale(!1);
  let a = new Intl.Collator(i, r);
  return e.sort((e, r) => a.compare(t(e), t(r)));
}
let g = {};
export function $$f14(e, t = 'conjunction') {
  let r = getI18nState().getPrimaryLocale(!1);
  g[t] || (g[t] = new Intl.ListFormat(r, {
    type: t
  }));
  return g[t].format(e);
}
export function $$E1(e) {
  let t = [];
  (e = e.replace(/_|-/g, ' ')).split(' ').forEach(e => {
    t.push(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
  });
  return t.join(' ');
}
export function $$y6(e, t, r) {
  r = r || `${t}s`;
  return e === 1 ? t : r;
}
export function $$b23(e, t, r) {
  e == null && (e = 0);
  return `${e} ${$$y6(e, t, r)}`;
}
export function $$T0(e) {
  return e < 1e3 ? e.toString() : e < 1e5 ? `${Math.floor(e / 100) / 10}k` : e < 1e6 ? `${Math.floor(e / 1e3)}k` : e < 1e8 ? `${Math.floor(e / 1e5) / 10}m` : e < 1e9 ? `${Math.floor(e / 1e6)}m` : e < 1e11 ? `${Math.floor(e / 1e8) / 10}b` : `${Math.floor(e / 1e9)}b`;
}
let I = new RegExp(`[${[':', '/', '?', '#', '[', ']', '@', '!', '$', '&', '\'', '(', ')', '*', '+', ',', ';', '=', '%'].map(e => `\\${e}`).join('')}]`, 'g');
export function $$S22(e) {
  let t = e;
  return encodeURIComponent(t = (t = t.replace(I, '-')).replace(/ /g, '-'));
}
export function $$v13(e, t = {
  stripLeadingHyphens: !0,
  stripTrailingHyphens: !0
}) {
  let r = e.toLowerCase();
  r = (r = (r = (r = (r = r.normalize('NFD')).replace(/[\u0300-\u036F]/g, '')).replace(/[ .\-_/\\:;|,&+=*]/g, '-')).replace(/[^a-z0-9\-]/g, '')).replace(/-+/g, '-');
  t.stripLeadingHyphens && (r = r.replace(/^-+/, ''));
  r = r.substring(0, 100);
  t.stripTrailingHyphens && (r = r.replace(/-+$/, ''));
  return r;
}
let A = ['thumbnail', 'icon', 'code', 'snapshot', 'duplicate', 'embed', 'canvas', 'remixes'];
export function $$x17(e) {
  if (e == null) return;
  let t = $$v13(e);
  if (!A.includes(t)) return $$S22(t);
}
export let $$N18 = e => /[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,18}\b([-\w()@:%+.~#?&/=]*)/i.test(e);
export function $$C11(e) {
  for (t = 0, r = e.length >>> 2, n = new Uint8Array(3 * r), i = 0, a = [], s = 0, void 0; s < 127; s++) {
    var t;
    var r;
    var n;
    var i;
    var a;
    var s;
    a[s] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(String.fromCharCode(s));
  }
  for (; t < r << 2;) {
    let o = a[e.charCodeAt(t++)];
    let l = a[e.charCodeAt(t++)];
    let d = a[e.charCodeAt(t++)];
    let c = a[e.charCodeAt(t++)];
    n[i++] = o << 2 | l >>> 4;
    d >= 0 && (n[i++] = l << 4 | d >>> 2);
    c >= 0 && (n[i++] = d << 6 | c);
  }
  return i === n.length ? n : n.subarray(0, i);
}
export function $$w5(e) {
  for (t = '', r = e.length, n = 0, void 0; n < r; n += 1024) {
    var t;
    var r;
    var n;
    t += String.fromCharCode.apply(String, e.subarray(n, n + 1024));
  }
  return btoa(t);
}
export function $$O9(e) {
  for (t = '', r = 0, void 0; r < e.length; r++) {
    var t;
    var r;
    t += `00${e[r].toString(16)}`.slice(-2);
  }
  return t;
}
export function $$R4(e) {
  return e.replace(/\s+/g, '');
}
export function $$L7(e, t) {
  return $$R4(e) === $$R4(t);
}
export function $$P20(e) {
  return /^\s*$/.test(e);
}
export const $M = $$T0;
export const Ay = $$E1;
export const DV = $$m2;
export const EJ = $$p3;
export const FS = $$R4;
export const H9 = $$w5;
export const LD = $$y6;
export const Qp = $$L7;
export const Qt = $$_8;
export const Rw = $$O9;
export const VZ = $$o10;
export const Vs = $$C11;
export const YH = $$c12;
export const Yv = $$v13;
export const Yx = $$f14;
export const Zr = $$i15;
export const _5 = $$l16;
export const fs = $$x17;
export const gU = $$N18;
export const hX = $$d19;
export const jN = $$P20;
export const lH = $$u21;
export const sy = $$S22;
export const td = $$b23;
export const uc = $$s24;
export const zS = $$a25;