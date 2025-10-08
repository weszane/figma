import { createFigmaPluginScope } from "../905/629114";
let i = ["RECTANGLE", "ELLIPSE", "FRAME", "POLYGON", "VECTOR", "STAR", "LINE", "BOOLEAN_OPERATION", "GROUP"];
export async function $$a0({
  guid: e,
  name: t,
  width: r = 430,
  parentId: i,
  shouldSelectNewNode: a = !0,
  shouldAdjustFontSize: o = !1
}) {
  let l = createFigmaPluginScope();
  let d = l.getNodeById(e);
  if (!d) {
    console.warn("Could not find node", e);
    return;
  }
  let u = d.clone();
  if (t && (u.name = t), i) {
    let e = l.getNodeById(i);
    e && e.appendChild(u);
  } else u.x = u.x + u.width + 40;
  let p = function e(t, r = {}) {
    if (t && r) {
      r[t.id] = {
        width: t.width,
        height: t.height,
        layoutSizingHorizontal: "layoutSizingHorizontal" in t ? t.layoutSizingHorizontal : void 0,
        layoutSizingVertical: "layoutSizingVertical" in t ? t.layoutSizingVertical : void 0
      };
      "children" in t && t.children && t.children.forEach(t => {
        e(t, r);
      });
      return r;
    }
  }(u);
  u.resize(r, u.height);
  (function e(t, r, n, i = 0, a = 0, s = {}) {
    if (!r || a >= 20) return;
    if (function (e, t) {
      if (!("paddingLeft" in e && "paddingRight" in e)) return;
      let r = e.paddingLeft;
      let n = e.paddingRight;
      let i = r + n;
      let a = .236076 * t;
      i >= a && (r = r / i * a, n = n / i * a, e.paddingLeft = Math.floor(r), e.paddingRight = Math.floor(n));
    }(r, n), "layoutMode" in r && "HORIZONTAL" === r.layoutMode && "NO_WRAP" === r.layoutWrap && function e(t, r, n, i) {
      if (!("paddingLeft" in r)) return;
      let {
        children,
        width,
        paddingLeft,
        paddingRight,
        itemSpacing,
        primaryAxisAlignItems
      } = r;
      let u = 0;
      let p = r.clone();
      let _ = function e(t, r, n, i = {}) {
        "children" in r && "children" in t && r?.children?.forEach((r, a) => {
          let s = t.children?.[a];
          if (!s) return;
          let o = n[s.id];
          o && (i[r.id] = o);
          "children" in r && r.children?.length && e(s, r, n, i);
        });
        return i;
      }(r, p, i);
      if (isNaN(width) || isNaN(n) || n <= 0) {
        p.remove();
        return !0;
      }
      p.resize(n, p.height);
      p.children?.forEach(r => {
        if ("layoutSizingHorizontal" in r && "FILL" === r.layoutSizingHorizontal) {
          e(t, r, r.width, _) && (u += 1 / 0);
          r.minWidth ? u += r.minWidth : u += function (e, t, r) {
            let {
              type
            } = t;
            switch (type) {
              case "TEXT":
                let {
                  characters,
                  fontSize
                } = t;
                if (characters?.length > 40) return 40 * (fontSize === e.mixed ? 16 : fontSize) * .618;
                return 0;
              case "RECTANGLE":
              case "FRAME":
                let s = t.fills === e.mixed ? [] : t.fills;
                if (s?.some?.(e => "IMAGE" === e.type)) return r?.width ?? 0;
                return 0;
              default:
                return 20;
            }
          }(t, r, _[r.id]) ?? 0;
          return;
        }
        u += r.width;
      });
      p.remove();
      let h = u + paddingLeft + paddingRight;
      "SPACE_BETWEEN" !== primaryAxisAlignItems && (h += itemSpacing * (children?.length - 1));
      return h > n;
    }(t, r, n, s)) {
      let e = s[r.id];
      e && (e.wasConvertedToVertical = !0);
      (function (e, t) {
        let r = {
          x: e.x,
          y: e.y,
          width: e.width,
          height: e.height,
          counterAxisAlignItems: e.counterAxisAlignItems,
          primaryAxisAlignItems: e.primaryAxisAlignItems,
          layoutSizingHorizontal: e.layoutSizingHorizontal
        };
        let n = {};
        e.children.forEach(e => {
          n[e.id] = {
            width: e.width,
            height: e.height,
            layoutSizingHorizontal: "layoutSizingHorizontal" in e ? e.layoutSizingHorizontal : void 0,
            layoutSizingVertical: "layoutSizingVertical" in e ? e.layoutSizingVertical : void 0,
            targetAspectRatio: "targetAspectRatio" in e ? e.targetAspectRatio : void 0
          };
        });
        e.layoutMode = "VERTICAL";
        e.layoutSizingVertical = "HUG";
        e.primaryAxisAlignItems = "MIN";
        r.counterAxisAlignItems && (e.counterAxisAlignItems = r.counterAxisAlignItems);
        "SPACE_BETWEEN" === r.primaryAxisAlignItems && (e.itemSpacing = 40);
        "ABSOLUTE" === e.layoutPositioning && (e.x = r.x, r.width !== e.width && (e.layoutSizingHorizontal = "FIXED", e.resize(t, e.height), e.layoutSizingVertical = "HUG"));
        e.children.forEach(e => {
          let {
            id
          } = e;
          let r = n[id];
          if (!("layoutSizingHorizontal" in e)) return;
          e.layoutSizingHorizontal = r.layoutSizingHorizontal;
          let i = c(e);
          let a = "TEXT" === e.type;
          "FILL" === e.layoutSizingVertical && (i || a) && (e.layoutSizingVertical = "HUG");
          r.targetAspectRatio && (e.resize(e.width, e.width * r.targetAspectRatio.y / r.targetAspectRatio.x), "lockAspectRatio" in e && e.lockAspectRatio());
          e.width === r.width && e.resize(e.width, r.height);
        });
      })(r, n);
      [].push(r);
    }
    let o = "paddingRight" in r ? 0 === i ? n - r.paddingLeft - r.paddingRight : Math.min(n, n - r.paddingLeft - r.paddingRight) : n;
    "children" in r && r.children && r.children?.forEach(r => {
      e(t, r, o, i + 1, a + 1, s);
    });
  })(l, u, r, 0, 0, p);
  await s(l, u, r, 0, p, !1, {
    shouldAdjustFontSize: o
  });
  a && (l.currentPage.selection = [u]);
  l.commitUndo();
}
async function s(e, t, r, n = 0, i = {}, a = !1, l = {
  shouldAdjustFontSize: !1
}) {
  if (!("children" in t) || !t.children?.length || "COMPONENT" === t.type) return;
  let d = i[t.id]?.wasConvertedToVertical;
  let u = c(t);
  let p = a || "INSTANCE" === t.type;
  let _ = u && "paddingLeft" in t ? t.paddingLeft : 0;
  let h = u && "paddingRight" in t ? t.paddingRight : 0;
  let m = 0 === n ? r - _ - h : Math.min(r, t.width - _ - h);
  if (!(m < 1)) for (let a = 0; a < t.children.length; a++) {
    let s = t.children[a];
    s && (await o(e, s, !!d, p, l, i, m, r, n));
  }
}
async function o(e, t, r, n, i = {
  shouldAdjustFontSize: !1
}, a, d, p, _) {
  let {
    id,
    type,
    width
  } = t;
  let f = a[id];
  if (!f) return;
  let E = !n && ("TEXT" === t.type ? !t.textStyleId && i.shouldAdjustFontSize && width > d : width > d);
  let y = c(t);
  let b = u(t);
  let T = u(t) && ((f.width ?? 0) <= 4 || (f.height ?? 0) <= 4);
  let I = ("TEXT" === type || b) && !T;
  let S = y && !n;
  !r && "layoutSizingVertical" in t && f.layoutSizingVertical !== t.layoutSizingVertical && f.layoutSizingVertical && (t.layoutSizingVertical = f.layoutSizingVertical);
  T && "paddingLeft" in t && (f.height ?? 0) > (f.width ?? 0) && (t.resize(Math.max(width, 1), Math.max(f.width ?? 0, 1)), "FILL" === f.layoutSizingVertical && "layoutSizingHorizontal" in t && (t.layoutSizingHorizontal = "FILL"));
  E && function (e, t, r, n, i) {
    let a;
    let s;
    if (!("layoutPositioning" in e)) return;
    let {
      type,
      layoutPositioning,
      width,
      height,
      x
    } = e;
    let p = "ABSOLUTE" === layoutPositioning;
    p && (a = x + width / 2, s = x + width);
    let _ = "HUG" === t.layoutSizingHorizontal;
    let h = "HUG" === t.layoutSizingVertical;
    let m = Math.floor(r);
    let g = Math.floor(height / width * r);
    if (n && m > 0 && g > 0 && ("FIXED" === t.layoutSizingHorizontal && "FIXED" === t.layoutSizingVertical ? e.rescale(m / width) : e.resize(m, g)), i && (e.maxWidth = m), h && (e.layoutSizingVertical = "HUG"), _ && ("TEXT" === type ? e.layoutSizingHorizontal = "FIXED" : e.layoutSizingHorizontal = "HUG"), p && "constraints" in e) {
      let t = e.constraints?.horizontal;
      if ("CENTER" === t) {
        let t = (a ?? 0) - (e.x + e.width / 2);
        e.x = e.x + t;
      } else if ("MAX" === t) {
        let t = (s ?? 0) - (e.x + e.width);
        e.x = e.x + t;
      }
    }
  }(t, f, d, I, S);
  i.shouldAdjustFontSize && "TEXT" === t.type && (await l(e, t));
  (I || S || y) && (await s(e, t, p, _ + 1, a, n, i));
}
async function l(e, t) {
  let {
    characters,
    fontSize,
    lineHeight,
    textStyleId
  } = t;
  if (fontSize === e.mixed || textStyleId) return;
  let s = Math.ceil(t.width / (.618 * fontSize));
  let o = Math.floor(characters.length / s);
  if (fontSize >= 24 && o >= 2 && s < 10) {
    let r = t.width / 6.18;
    if (Math.abs(r - fontSize) >= 8 && r >= 24 && (await d(e, t), t.fontSize = Math.round(r), lineHeight && lineHeight !== e.mixed && "PIXELS" === lineHeight.unit)) {
      let e = lineHeight.value / fontSize;
      t.lineHeight = {
        value: Math.round(r * e),
        unit: "PIXELS"
      };
    }
  }
}
async function d(e, t) {
  let r = [];
  async function n(t) {
    let n = t && t.family + "|" + t.style;
    if (!r.includes(n)) {
      r.push(n);
      return await e.loadFontAsync(t);
    }
  }
  if ("TEXT" === t.type) {
    let {
      characters,
      fontName
    } = t;
    if (fontName === e.mixed) for (let e of t.getRangeAllFontNames(0, characters.length)) await n(e);else await n(fontName);
  }
}
function c(e) {
  return "layoutMode" in e && ("VERTICAL" === e.layoutMode || "HORIZONTAL" === e.layoutMode);
}
function u(e) {
  let {
    type
  } = e;
  let r = !0;
  "children" in e && e.children?.length && (r = e.children.every(e => u(e)));
  return i.includes(type) && r;
}
export const b = $$a0;