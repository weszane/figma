import { jXp } from "../figma_app/763686";
import { qO } from "../905/165290";
import { H } from "../905/240327";
import { debugState } from "../905/407919";
import { Lg } from "../figma_app/257275";
export let $$l0 = new Set([
  "fontName",
  "fontSize",
  "textCase",
  "textDecoration",
  "letterSpacing",
  "lineHeight",
  "hyperlink",
  "fills",
  "listOptions",
  "indentation",
]);
export function $$d1({ vNode: e, options: t, Span: i, fontProps: n }) {
  if (e?.type !== "text" && e?.type !== "input") return null;
  let r = "";
  let a = [];
  let s = (e, n) => {
    if (null != e && !1 !== e) {
      if ("string" == typeof e || "number" == typeof e) {
        r += String(e);
        return;
      }
      if (Array.isArray(e)) {
        e.forEach((e) => s(e, n));
        return;
      }
      if ("Span" === e.type) {
        let o = r.length;
        let l = {
          ...n,
          ...$$h2(e.props),
        };
        let { textStyle: _textStyle } = $$c4(
          i(
            {
              ...e.props,
              font: $$p3(l),
            },
            t,
          ).props,
        );
        Array.isArray(e.props?.children)
          ? e.props?.children.forEach((e) => s(e, l))
          : s(e.children, l);
        let u = r.length;
        a.push({
          start: o,
          end: u,
          style: _textStyle,
        });
      }
    }
  };
  s(e.renderMetaData.children, n);
  a.reverse();
  let { textStyle } = $$c4(e.props);
  return {
    style: textStyle,
    ranges: a,
    characters: r,
  };
}
export function $$c4(e) {
  let t = {};
  let i = {};
  for (let n in e) $$l0.has(n) ? (t[n] = e[n]) : (i[n] = e[n]);
  return {
    textStyle: t,
    otherProps: i,
  };
}
let u = "Regular";
export function $$p3(e) {
  let { font, italic = !1, fontWeight = 400, fontFamily = "Inter" } = e;
  return font ||
    null != e.italic ||
    null != e.fontWeight ||
    null != e.fontFamily
    ? font ||
        ("Roboto" === fontFamily ||
          "Inter" === fontFamily ||
          H(fontFamily) ||
          (Lg() ||
            console.error(
              `Use of non-supported font '${fontFamily}'. Use Roboto, Inter, or another Google font.`,
            ),
          (d = "Inter")),
        {
          family: fontFamily,
          style: (function ({ fontFamily: e, fontWeight: t, italic: i }) {
            let a = (debugState.getState().fonts || {})[e] || [];
            for (let s in a) {
              let l = a[s].styles;
              a[s].source === jXp.GOOGLE ||
                Lg() ||
                console.warn(
                  `Font '${e}' is not loaded from Google fonts. The font may be a shared font or installed locally.`,
                );
              let d = Object.keys(l)
                .filter((e) => l[e].italic === i && l[e].weight === t)
                .sort(
                  (e, t) =>
                    Math.abs(l[e].stretch || qO - qO) -
                    Math.abs(l[t].stretch || qO - qO),
                )
                .pop();
              if (d) return d;
            }
            console.error(
              `Unable to resolve font for fontFamily=${e}, fontWeight=${t}, italic=${i} - falling back to ${u}.`,
            );
            return u;
          })({
            fontFamily,
            fontWeight: m.get(fontWeight) || 400,
            italic,
          }),
        })
    : {
        family: "Inter",
        style: "Medium",
      };
}
let m = new Map([
  [100, 100],
  [200, 200],
  [300, 300],
  [400, 400],
  [500, 500],
  [600, 600],
  [700, 700],
  [800, 800],
  [900, 900],
  ["thin", 100],
  ["extra-light", 200],
  ["light", 300],
  ["normal", 400],
  ["medium", 500],
  ["semi-bold", 600],
  ["bold", 700],
  ["extra-bold", 800],
  ["black", 900],
]);
export function $$h2(e) {
  return e
    ? (function (e) {
        for (let t in e) void 0 === e[t] && delete e[t];
        return e;
      })({
        font: e.font,
        italic: e.italic,
        fontWeight: e.fontWeight,
        fontFamily: e.fontFamily,
      })
    : {};
}
export const $U = $$l0;
export const ZW = $$d1;
export const _u = $$h2;
export const c8 = $$p3;
export const hH = $$c4;
