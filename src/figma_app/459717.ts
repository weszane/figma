import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createElement, useRef, useCallback, useEffect, memo, useState, useLayoutEffect } from "react";
import { _ as _$$_ } from "../figma_app/496441";
import { getFeatureFlags } from "../905/601108";
import { f, h as _$$h } from "../905/693155";
import { W } from "../905/898204";
let d = "accessibilitytree--node--xYG8O";
let c = "accessibilitytree--disabled--m1ByR accessibilitytree--node--xYG8O";
let u = "accessibilitytree--scrollContainer--TNuEw accessibilitytree--node--xYG8O";
function p({
  parentId: e,
  nodeId: t,
  enabled: r = !0,
  focusRef: a,
  accessibilityScope: g,
  viewer: y
}) {
  let b;
  let T = W(t, g);
  let I = y.getPrototypeNode(t);
  if (!T || !I) return null;
  let {
    isClickable,
    tag = "div",
    role,
    label
  } = T;
  let N = m.get(tag) || {};
  switch (y.nodeType(I)) {
    case "TABLE":
      b = function (e, t) {
        let r = e.nodeTableCells(t).map(t => ({
          text: e.nodeTableCellContent(t),
          pos: e.nodeDisplayBounds(t)
        })).sort((e, t) => e.pos.x < t.pos.x ? -1 : 1);
        let i = {};
        for (let e of r) i[e.pos.y] ? i[e.pos.y].push(e) : i[e.pos.y] = [e];
        let a = Object.keys(i).sort();
        return [jsx("div", {
          role: "rowgroup",
          children: i[a[0]].map((e, t) => jsx("span", {
            role: "columnheader",
            style: {
              left: e.pos.x,
              top: e.pos.y,
              width: e.pos.width,
              height: e.pos.height
            }
          }, `header-${t}`))
        }, "table-header"), jsx("div", {
          role: "rowgroup",
          children: a.map((e, t) => jsx("div", {
            role: "row",
            "aria-rowindex": t,
            children: i[e].map((t, r) => jsx("span", {
              role: "cell",
              className: d,
              style: {
                display: "inline-block",
                left: t.pos.x,
                top: t.pos.y,
                width: t.pos.width,
                height: t.pos.height
              },
              children: t.text
            }, `${e}-${r}`))
          }, e))
        }, "table-body")];
      }(y, I);
      break;
    case "CODE_BLOCK":
      getFeatureFlags().slides_viewer_a11y && (b = function (e, t) {
        let r = e.mapChildren(t, e => e)?.[0];
        if (!r) return [];
        let i = E(e, r, "Line numbers");
        let a = E(e, r, "Text");
        if (!i || !a) return [];
        let s = (e.nodeText(i) || "").split("\n");
        let o = e.nodeText(a) || "";
        return s.length && o.length ? [jsxs(Fragment, {
          children: [jsx("pre", {
            children: jsx("code", {
              children: o
            })
          }), jsx("div", {
            className: "line-numbers",
            children: s.map(e => jsx("span", {
              children: e
            }, e))
          })]
        })] : [];
      }(y, I));
      break;
    case "TEXT":
      b = $$f0(y.nodeText(I) || "", y.nodeLineData(I) || [], y.nodeCharacterStyles(I), y.navigateToFrameAndCloseOverlays);
      break;
    default:
      b = T.childIds.map(e => jsx(p, {
        nodeId: e,
        accessibilityScope: g,
        focusRef: void 0,
        viewer: y,
        parentId: t
      }, e));
  }
  let C = y.nodeScrollBounds(I);
  let w = e && y.getPrototypeNode(e);
  let O = !r && "none" || w || "canvas";
  let R = h(y, I, C ? "scrollContainer" : O);
  let L = isClickable ? {
    onClick: e => {
      f(_$$h.PROTOTYPE_BUTTON_CLICKED, {
        isMouseEvent: e?.screenX !== 0 && e?.screenY !== 0
      });
      y.nodeTriggerInteraction(I, "ON_CLICK");
    },
    onFocus: () => void y.nodeHover(I),
    onBlur: () => void y.nodeReverseHover(I)
  } : {};
  let P = createElement(tag, {
    className: !r && c || !!C && u || d,
    style: R,
    tabIndex: a ? 0 : void 0,
    ref: a,
    role,
    key: t,
    "aria-label": label,
    ...N,
    ...L
  }, b);
  C && (P = jsx(_, {
    displayRect: h(y, I, O),
    enabled: r,
    scrollRect: C,
    onScrolled: (e, t) => y.nodeScrollTo(I, e, t),
    scrollAreaContent: P
  }));
  return P;
}
function _({
  displayRect: e,
  enabled: t,
  onScrolled: r,
  scrollRect: a,
  scrollAreaContent: s
}) {
  let o = useRef(null);
  let l = useRef(!1);
  let d = useCallback(e => {
    let t = e.target;
    ("number" == typeof t?.scrollLeft || "number" == typeof t?.scrollTop) && (l.current ? l.current = !1 : r?.(t.scrollLeft * a.width / t.scrollWidth, t.scrollTop * a.height / t.scrollHeight));
  }, [r, a.height, a.width]);
  useEffect(() => {
    let e = o.current;
    if (e) {
      e.addEventListener("scrollend", d);
      return () => e.removeEventListener("scrollend", d);
    }
  }, [d]);
  useEffect(() => {
    let e = o.current;
    e && (l.current = !0, a.width && (e.scrollLeft = a.x * e.scrollWidth / a.width), a.height && (e.scrollTop = a.y * e.scrollHeight / a.height));
  }, [a.x, a.y, a.width, a.height]);
  return jsx("div", {
    className: t ? u : c,
    style: e,
    ref: o,
    children: s
  });
}
function h(e, t, r) {
  switch (r) {
    case "none":
      return {};
    case "canvas":
      {
        let {
          x,
          y,
          width,
          height
        } = e.nodeDisplayBounds(t);
        return {
          left: x,
          top: y,
          width,
          height
        };
      }
    case "scrollContainer":
      {
        let r = e.nodeCanvasSpaceBounds(t);
        let n = e.nodeScrollBounds(t);
        if (!n) return {};
        {
          let e = "100%";
          let t = "100%";
          0 !== n.height && (e = `${100 * n.height / r.height}%`);
          0 !== n.width && (t = `${100 * n.width / r.width}%`);
          return {
            height: e,
            width: t
          };
        }
      }
    default:
      {
        let n = e.nodeCanvasSpaceBounds(r);
        let i = e.nodeScrollBounds(r);
        let a = e.nodeCanvasSpaceBounds(t);
        let s = i ? i.width : n.width;
        let o = i ? i.height : n.height;
        let l = n.x;
        let d = n.y;
        let c = (a.x - l) / s;
        let u = (a.y - d) / o;
        let p = a.width / s;
        let _ = a.height / o;
        return {
          top: `${100 * u}%`,
          left: `${100 * c}%`,
          height: `${100 * _}%`,
          width: `${100 * p}%`
        };
      }
  }
}
memo(function ({
  accessibilityScope: e,
  autofocus: t,
  setAutofocus: r,
  viewer: a
}) {
  let [s, o] = useState(void 0);
  let l = function (e, t) {
    let r = useRef(null);
    let n = r.current;
    let a = n?.contains(n?.ownerDocument?.activeElement);
    useLayoutEffect(() => {
      if (!e && !a) return;
      let n = r.current;
      n && (e || !n.contains(n.ownerDocument.activeElement)) && (n.focus(), e && t?.(!1));
    });
    return r;
  }(t, r);
  return (useEffect(() => {
    let e = () => {
      let e = a.getTopmostFrameNode();
      e && o(a.nodeId(e));
    };
    a.on("topLevelFrameChange", e);
    return () => {
      a.off("topLevelFrameChange", e);
    };
  }, [a]), useEffect(() => {
    let e = a.getTopmostFrameNode();
    o(e ? a.nodeId(e) : void 0);
  }, [a]), s) ? jsx(p, {
    nodeId: s,
    parentId: void 0,
    enabled: !0,
    focusRef: l,
    accessibilityScope: e,
    viewer: a
  }, s) : null;
});
let m = new Map([["form", {
  onSubmit: e => e.preventDefault()
}], ["button", {
  type: "button"
}], ["input", {
  readonly: "readonly"
}]]);
function g(e, t) {
  let r = e.nodeFillTypes(t);
  return 1 === r.length && "IMAGE" === r[0];
}
export function $$f0(e, t, r, s) {
  let o = e.split(/\n/mu);
  let l = [];
  function d(e) {
    for (; l.length > e + 1;) {
      let e;
      let t;
      let [r, n] = l.pop();
      switch (r) {
        case "UNORDERED_LIST":
          e = "ul";
          t = "li";
          break;
        case "ORDERED_LIST":
          e = "ol";
          t = "li";
          break;
        default:
          e = "p";
          t = "span";
      }
      l[l.length - 1][1].push(createElement(e, {
        key: l[l.length - 1][1].length
      }, n.map((e, r) => createElement(t, {
        key: r
      }, e))));
    }
  }
  let c = 0;
  for (let e = 0; e < o.length; e++) {
    let i = o[e];
    let u = t[e] || {
      type: "PLAIN",
      indentLevel: 0
    };
    for ("PLAIN" === u.lineType && (u.indentLevel = 0), d(u.indentLevel), l.length > 1 && l[l.length - 1][0] !== u.lineType && d(u.indentLevel - 1); l.length < u.indentLevel + 1;) l.push([u.lineType, []]);
    l[l.length - 1][1].push(function (e, t) {
      let i = [];
      for (let o of r) {
        let {
          start,
          end,
          props
        } = o;
        let c = [...t].length;
        if (start > e + c) break;
        if (end <= e) continue;
        r = Math.max(0, start - e);
        l = Math.min(c, end - e);
        let u = RegExp(`(?:[^]{${start}})([^]{${end - start}})`, "u");
        let p = t.match(u)?.[1];
        let _ = props?.get?.("HYPERLINK");
        let h = props?.get?.("FONT_STYLE");
        let m = h?.toLowerCase()?.includes("italic");
        let g = h?.toLowerCase()?.includes("bold");
        let f = props?.get?.("FONT_SIZE");
        let E = props?.get?.("TEXT_DECORATION");
        let y = {
          fontWeight: g ? "bold" : void 0,
          fontStyle: m ? "italic" : void 0,
          fontSize: f ? `${f}px` : void 0,
          textDecoration: new Map([["UNDERLINE", "underline"], ["STRIKETHROUGH", "line-through"]]).get(E)
        };
        if ("string" == typeof _?.url) i.push(jsx(_$$_, {
          style: y,
          href: _.url,
          newTab: !0,
          trusted: !0,
          children: p
        }, start + e));else if (s && "object" == typeof _?.guid) {
          let t = _.guid;
          i.push(jsx("button", {
            type: "button",
            role: "link",
            onClick: () => s(`${t.sessionID}:${t.localID}`),
            children: p
          }, start + e));
        } else g || m || f || E ? i.push(jsx("span", {
          style: y,
          children: p
        }, start + e)) : i.push(p);
      }
      return i;
    }(c, i));
    c += i.length + 1;
  }
  d(0);
  return l[0][1].map((e, t) => "string" != typeof e ? e : jsx("p", {
    children: e
  }, t));
}
function E(e, t, r) {
  let n = e.mapChildren(t, e => e);
  return n?.find(t => e.nodeName(t) === r) ?? null;
}
let y = {
  TITLE: "Title",
  HEADER_1: "Header 1",
  HEADER_2: "Header 2",
  HEADER_3: "Header 3"
};
let b = {
  H1: "h1",
  H2: "h2",
  H3: "h3"
};
let T = e => ({
  [y.TITLE]: b.H1,
  [y.HEADER_1]: b.H1,
  [y.HEADER_2]: b.H2,
  [y.HEADER_3]: b.H3
})[e] ?? null;
export const dU = $$f0;