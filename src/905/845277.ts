import { jsx } from "react/jsx-runtime";
import { isNotNullish } from "../figma_app/95419";
import { Egt } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { logError } from "../905/714362";
import { Y5 } from "../figma_app/455680";
import { dU } from "../figma_app/459717";
import { xR, EO, l0 } from "../figma_app/536669";
import { rH } from "../figma_app/404319";
function p(e, t, i, n, r, a) {
  let s = new Map();
  t.forEach((e, t) => s.set(t, e));
  null != i && i.hyperlink && s.set("HYPERLINK", i.hyperlink);
  1 === e && (s.set("FONT_STYLE", i?.fontName?.style ?? n?.style), s.set("FONT_SIZE", i?.fontSize ?? r), s.set("TEXT_DECORATION", i?.textDecoration ?? a));
  return s;
}
function m(e) {
  Y5.triggerAction("goto-layer", {
    args: {
      nodeId: e
    }
  });
}
export function $$h2(e, t) {
  if (!e.characters) return [];
  let i = e.lines?.map(e => {
    let t = e.lineType ? e.lineType : null;
    return t ? {
      indentLevel: e.indentationLevel ?? 0,
      lineType: t
    } : null;
  }).filter(isNotNullish) ?? [];
  let a = e.styleOverrideTable;
  let s = function (e) {
    if (null == e || "mixed" === e) return new Map([["HYPERLINK", null]]);
    let t = null;
    if ("URL" === e.type) t = e.value;else {
      let i = e.value.split(":", 3);
      2 === i.length && (t = {
        sessionID: parseInt(i[0], 10),
        localID: parseInt(i[1], 10)
      });
    }
    let i = "URL" === e.type ? "url" : "guid";
    return new Map([["HYPERLINK", null != t ? {
      [i]: t
    } : null]]);
  }(e.hyperlink ?? null);
  let l = [];
  let c = 0;
  let u = 0;
  let h = [...e.characters].length;
  for (let i = 0; i < h; i++) {
    let n = e.characterStyleIDs && e.characterStyleIDs.length > i ? e.characterStyleIDs[i] : 0;
    let r = p(t, s, a ? a.find(e => e.styleID === c) ?? null : null, e.defaultFont, e.defaultFontSize, e.defaultTextDecoration ?? void 0);
    a || (n = 0);
    c !== n && (l.push({
      start: u,
      end: i,
      props: r
    }), c = n, u = i);
  }
  let g = p(t, s, a ? a.find(e => e.styleID === c) ?? null : null, e.defaultFont, e.defaultFontSize, e.defaultTextDecoration ?? void 0);
  l.push({
    start: u,
    end: h,
    props: g
  });
  try {
    return dU(e.characters, i, l, m);
  } catch (t) {
    logError("accessibility", "Error rendering styled text", {
      message: t.message,
      lineData: i,
      characterData: l,
      characters: e.characters
    });
    return [jsx("p", {
      children: e.characters
    }, "0")];
  }
}
export function $$g0(e, t, i) {
  let r = !!getFeatureFlags().a11y_design_dom_mirror;
  if (!i) return [];
  let o = e.get(t);
  if (!o) return [];
  let l = {};
  for (let t = 0; t < o.tableNumRows; t++) {
    let n = [];
    for (let r = 0; r < o.tableNumColumns; r++) {
      let s = i[t * o.tableNumColumns + r];
      if (!s) return [];
      let l = e.get(s);
      let d = l?.textSublayer;
      if (l && d) {
        let e = {
          text: d.characters,
          absoluteTransform: l.absoluteTransform,
          dimensions: l.size,
          pos: xR(Egt.getNodeTransformProperties(s)),
          hyperlink: d?.hyperlink
        };
        n.push(e);
      }
    }
    l[t] = n;
  }
  let d = Array.from(Array(o.tableNumRows).keys());
  let p = o.size;
  let m = o.absoluteTransform;
  let h = xR(Egt.getNodeTransformProperties(t));
  return [jsx("div", {
    role: "rowgroup",
    children: l[0].map((e, t) => {
      let i = r ? EO(e.dimensions, e.absoluteTransform, p, m) : l0(e.pos, h);
      return jsx("span", {
        role: "columnheader",
        style: {
          ...i,
          height: 0
        }
      }, `header-${t}`);
    })
  }, "table-header"), jsx("div", {
    role: "rowgroup",
    children: d.map((e, t) => jsx("div", {
      role: "row",
      "aria-rowindex": t,
      children: l[e].map((t, i) => {
        let a = r ? EO(t.dimensions, t.absoluteTransform, p, m) : l0(t.pos, h);
        return jsx("span", {
          role: "cell",
          className: rH,
          style: {
            ...a,
            display: "inline-block",
            whiteSpace: "normal"
          },
          children: "mixed" !== t.hyperlink && t.hyperlink?.type === "URL" ? jsx("a", {
            href: t.hyperlink.value,
            children: t.text
          }) : t.text
        }, `${e}-${i}`);
      })
    }, e))
  }, "table-body")];
}
export var $$f1 = (e => (e[e.SEMANTIC = 0] = "SEMANTIC", e[e.DISPLAY = 1] = "DISPLAY", e))($$f1 || {});
export const Dm = $$g0;
export const d2 = $$f1;
export const rp = $$h2;