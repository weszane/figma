import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { FruitTypes } from "../figma_app/763686";
import { dN } from "../vendor/291472";
import { buildStaticUrl } from "../figma_app/169182";
import { KindEnum } from "../905/129884";
let $$l7 = RegExp("\\p{Emoji_Presentation}+(\\u200D\\p{Emoji_Presentation}+)?", "gu");
let d = /(?:\:([a-zA-Z0-9_\-\+]+)\:)(?:\:skin-tone-(\d)\:)?/;
let c = RegExp(d.source, "g");
let u = RegExp(`^${d.source}$`);
let p = RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.source, "g");
let m = RegExp(/_/, "g");
let h = buildStaticUrl("emoji/5/");
let g = {
  2: "1f3fb",
  3: "1f3fc",
  4: "1f3fd",
  5: "1f3fe",
  6: "1f3ff"
};
export function $$f4(e) {
  let t = null;
  for (; null !== (t = c.exec(e));) {
    let e = t[0].match(d);
    if (e && dN.get(e[1])) {
      c.lastIndex = 0;
      return !0;
    }
  }
  return !1;
}
export function $$_10(e) {
  return !!RegExp("\\p{Emoji_Modifier_Base}", "u").test($$S8(e)[0]?.unicode);
}
let A = e => e && e in g ? `:skin-tone-${e}:` : null;
export function $$y0() {
  return A(localStorage.getItem("emoji-mart.skin"));
}
export function $$b3(e) {
  if ($$_10(e)) {
    let t = d.exec(e);
    if (t) return [`:${t[1]}:`, A(t[2]) ?? ""];
  }
  return [e, null];
}
export function $$v5(e, t) {
  let i = e.id.toLowerCase().replace(m, "-");
  let r = t.toLowerCase().replace(m, "-");
  let a = i.indexOf(r);
  if (-1 === a) return i;
  let s = i.slice(0, a);
  let o = i.slice(a, a + r.length);
  let l = i.slice(a + r.length);
  return jsxs(Fragment, {
    children: [s, jsx("b", {
      children: o
    }), l]
  });
}
export function $$I13(e) {
  let t = e.match(u);
  return !!t && !!dN.get(t[1]);
}
export function $$E2(e) {
  return dN.getShortcodeFromNative(e) || e;
}
export function $$x9(e) {
  return String.fromCodePoint(...e.split("-").map(e => parseInt(e, 16)));
}
export function $$S8(e) {
  return function (e) {
    let t = e.match(d);
    if (t) {
      let e = t[1];
      let i = dN.get(e);
      if (i) {
        let e = t[2] ? parseInt(t[2]) : null;
        if (e) {
          if (i.skins[e - 1]) {
            let t = i.skins[e - 1].unified;
            return [{
              text: t,
              meta: i.skins[e - 1].shortcodes,
              unicode: $$x9(t)
            }];
          }
          if (g[e]) {
            let t = i.skins[0].unified;
            return [{
              text: t,
              meta: `:${i.id}:`,
              unicode: $$x9(t)
            }, {
              text: g[e],
              meta: `:skin-tone-${e}:`,
              unicode: $$x9(g[e])
            }];
          }
        }
        let n = i.skins[0].unified;
        return [{
          text: n,
          meta: `:${i.id}:`,
          unicode: $$x9(n)
        }];
      }
    }
    return [{
      text: e,
      meta: e,
      unicode: e
    }];
  }(e);
}
export function $$w6(e, t = FruitTypes.APPLE) {
  return h + FruitTypes[t].toLowerCase() + "/small/" + e + ".png";
}
export function $$C11(e) {
  let t = new Set();
  let i = null;
  for (; null !== (i = p.exec(e));) for (let e = i.index; e < i.index + i[0].length; e++) t.add(e);
  p.lastIndex = 0;
  let n = 0;
  let r = [];
  let a = null;
  for (; null !== (a = c.exec(e));) t.has(a.index) || (a.index > n && r.push(e.slice(n, a.index)), r.push(a[0]), n = a.index + a[0].length);
  n !== e.length && r.push(e.slice(n, n + e.length));
  c.lastIndex = 0;
  return r;
}
export function $$T1(e) {
  let t = [];
  $$C11(e).forEach(e => {
    $$I13(e) ? $$S8(e).forEach(e => {
      t.push(e.unicode);
    }) : t.push(e);
  });
  return t.join("");
}
export function $$k12(e) {
  if (!e) return [""];
  let t = [];
  $$C11(e).forEach(e => {
    $$I13(e) ? $$S8(e).forEach(e => {
      let i = Math.random().toString(36).substring(2);
      t.push(jsx("span", {
        className: "inline-emoji",
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": e.meta,
        "data-text": e.unicode,
        children: e.unicode
      }, i));
    }) : t.push(e);
  });
  return t;
}
export const $f = $$y0;
export const Bx = $$T1;
export const H3 = $$E2;
export const Kh = $$b3;
export const Lg = $$f4;
export const OV = $$v5;
export const PC = $$w6;
export const Py = $$l7;
export const UF = $$S8;
export const iA = $$x9;
export const uD = $$_10;
export const wd = $$C11;
export const x6 = $$k12;
export const xM = $$I13;