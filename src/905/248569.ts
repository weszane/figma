import { ColorSpaceEnum } from "../figma_app/763686";
import { $q } from "../figma_app/191804";
let a = e => {
  let t;
  let i = -1;
  let n = 0;
  let r = [];
  let a = 0;
  for (; a < 256; a++) {
    t = a;
    for (let e = 0; e < 8; e++) t = 1 & t ? 0xedb88320 ^ t >>> 1 : t >>> 1;
    r[a] = t;
  }
  for (; n < e.length; n++) i = i >>> 8 ^ r[255 & (i ^ e.charCodeAt(n))];
  return (-1 ^ i) >>> 0;
};
let s = e => e.replace(/[^A-F0-9]/gi, "");
let o = e => {
  let t = "";
  for (let i = 0; i < e.length; i += 2) t += String.fromCharCode(parseInt(e.substr(i, 2), 16));
  return t;
};
let l = e => a(o(s(e))).toString(16).toUpperCase().padStart(8, "0");
let d = e => Math.round(255 * e).toString(16).toUpperCase().padStart(2, "0");
let c = (e, t) => {
  let i = `504C5445 ${e}`;
  let r = l(i);
  return t === ColorSpaceEnum.DISPLAY_P3 ? `
    89504E47 0D0A1A0A 0000000D 49484452 00000001 00000001 08030000 0028CB34
    BB000001 62694343 50696363 00002891 7590BD4B C35014C5 4FAB52D0 3A880E1D
    1C328943 D4D20A76 71682B14 45305405 AB539A7E 096D7C24 29527113 5729F81F
    58C15970 B0885470 71701044 0711DD9C 3A29B868 78DE9754 DA22DEC7 E5FD389C
    73B95CC0 1B50192B F60228E9 96914CC4 A4B5D4BA E47B8387 9E53AA66 B2A8A22C
    0AFEFDBB EBF3D1F5 DE4F8859 4DBB7610 D94F5C97 CE2E9776 9E02537F FD5DD59F
    C99A1AFD DFD4418D 1916E091 89956D8B 09DE251E 316829E2 AAE0BCCB C782D32E
    9F3B9E95 649CF896 58D20A6A 86B8492C A73BF47C 07978A65 ADB583D8 DE9FD557
    97C51CEA 51CC6113 26188A50 51810405 E17FFCD3 8E3F8E2D 72576050 2E8F022C
    CA444911 13B2C4F3 D0A16112 32710841 EA90B873 EB7E0FAD FBC96D6D EF15986D
    70CE2FDA DA420338 9DA193D5 DBDA7804 181A006E EA4C3554 47EAA1F6 E672C0FB
    09309802 86EF28B3 61E6C221 777B7F0C E87BE1FC 630CF01D 027695F3 AF23CEED
    1A859F81 2BFD0717 296ABCEC 1BF56300 000003 ${i} ${r} 0000 00077449
    4D4507E7 010C0637 2418AA2F C5000000 0D494441 54081D01 0200FDFF 00000002
    0001CDE3 D12B0000 00004945 4E44AE42 6082
    ` : `
    89504E47 0D0A1A0A 0000000D 49484452 00000001 00000001 08030000 0028CB34
    BB000000 20634852 4D00007A 26000080 840000FA 00000080 E8000075 300000EA
    6000003A 98000017 709CBA51 3C000000 03 ${i} ${r} 00000007 74494D45
    07E7010C 06210D46 80027E00 00000D49 44415408 1D010200 FDFF0000 00020001
    CDE3D12B 00000000 49454E44 AE426082
    `;
};
let u = (e, t) => {
  let i = c(e, t).replace(/[^A-F0-9]/gi, "");
  return `data:image/png;base64,${btoa(o(i))}`;
};
let $$p2 = (e, t) => u(`${d(e.r)}${d(e.g)}${d(e.b)}`, t);
let m = e => {
  if ("#" === e[0]) return {
    r: parseInt(e.substring(1, 3), 16) / 255,
    g: parseInt(e.substring(3, 5), 16) / 255,
    b: parseInt(e.substring(5, 7), 16) / 255,
    a: 1
  };
};
let h = e => {
  let t = e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  if (t) {
    let e = parseInt(t[1], 10);
    return {
      r: e / 255,
      g: parseInt(t[2], 10) / 255,
      b: parseInt(t[3], 10) / 255,
      a: t[4] ? parseFloat(t[4]) : 1
    };
  }
};
export function $$g1(e) {
  let t;
  try {
    if ((t = m(e)) || (t = h(e)) || $q[e] && (t = m($q[e]))) return t;
  } catch (e) {}
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  };
}
function f(e) {
  return +e.toFixed(4);
}
export function $$_0(e, t = 1) {
  let {
    r: _r,
    g,
    b,
    a: _a = 1
  } = e;
  let s = _a * t;
  return 1 === s ? `color(display-p3 ${f(_r)} ${f(g)} ${f(b)})` : `color(display-p3 ${f(_r)} ${f(g)} ${f(b)} / ${s.toFixed(2)})`;
}
export const Qf = $$_0;
export const dy = $$g1;
export const rl = $$p2;