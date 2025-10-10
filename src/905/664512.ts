import { aalSettingsConfig } from "../905/55273";
import { isApproximatelyEqual, EPSILON, calculateTransformedBoundingBox } from "../905/259345";
import { processVerticesLayout, VertexNodeMap, logVerMessage } from "../905/449579";
import { logger } from "../905/651849";
function s(e) {
  aalSettingsConfig.LOG_RESPONSIVE && logger.log(e);
}
async function o(e, t) {
  if (!("children" in e)) return !0;
  let i = e.findAllWithCriteria({
    types: ["TEXT"]
  });
  let r = [];
  for (let e of i) {
    if (e.hasMissingFont) {
      logger.log("Missing font on node: ", e.name, e.id, ", fontName: ", e.fontName);
    } else if (e.fontName !== t.mixed) {
      r.push(JSON.stringify(e.fontName));
    } else {
      for (let t of e.getRangeAllFontNames(0, e.characters.length)) r.push(JSON.stringify(t));
    }
  }
  let a = [...new Set(r)].map(e => JSON.parse(e));
  try {
    await Promise.all(a.map(e => t.loadFontAsync(e)));
  } catch (e) {
    logger.log("Error loading font: ", e);
    return !1;
  }
  return !0;
}
function l(e, t) {
  let i = e.parent;
  if (i && i.layoutMode !== "NONE") {
    if (i.layoutSizingHorizontal === "HUG" && (i.layoutSizingHorizontal = "FIXED"), t) {
      let t = i.width - i.paddingLeft - i.paddingRight - e.width;
      i.layoutMode === "VERTICAL" && t > 4 && "layoutMode" in e && e.layoutMode !== "NONE" && (e.paddingLeft = t / 2, e.paddingRight = t / 2);
    }
    e.layoutSizingHorizontal = "FILL";
    s(`    Set to FILL width (${e.width})`);
    s("--------------------------------");
  }
}
function d(e) {
  return "layoutPositioning" in e && e.layoutPositioning === "AUTO";
}
function c(e, t) {
  if (e.type === "TEXT") {
    try {
      e.textAlignHorizontal = t;
    } catch (e) {
      logger.log("Failed to set text align horizontal", e);
    }
  }
}
function u(e) {
  if (e.type === "TEXT") {
    if (e.textAutoResize === "WIDTH_AND_HEIGHT") return !0;
    let t = e.textAutoResize;
    let i = e.width;
    let n = e.height;
    let r = !1;
    e.textAutoResize = "WIDTH_AND_HEIGHT";
    r = Math.abs(e.width - i) < EPSILON;
    e.resize(i, n);
    e.textAutoResize = t;
    return r;
  }
  if ("children" in e && e.children.length > 0 && "layoutMode" in e && e.layoutMode !== "NONE" && "paddingLeft" in e && "paddingRight" in e) {
    let t = calculateTransformedBoundingBox(e.children);
    return isApproximatelyEqual(t.right - t.left, e.width - e.paddingLeft - e.paddingRight);
  }
  return !1;
}
function p(e) {
  if (e.characters.includes("\n")) return !0;
  if (e.textAutoResize === "WIDTH_AND_HEIGHT") return !1;
  let t = e.textAutoResize;
  let i = e.layoutSizingHorizontal;
  let n = e.width;
  let r = e.height;
  let s = !1;
  e.textAutoResize = "WIDTH_AND_HEIGHT";
  e.layoutSizingHorizontal = "HUG";
  s = Math.abs(e.width - n) > EPSILON;
  e.resize(n, r);
  e.textAutoResize = t;
  e.layoutSizingHorizontal = i;
  return s;
}
function m(e) {
  return "layoutMode" in e && !!e.findOne(t => "layoutPositioning" in t && t.layoutPositioning === "ABSOLUTE" && isApproximatelyEqual(t.width, e.width, 0.1) && isApproximatelyEqual(t.height, e.height, 0.1));
}
function h(e) {
  if (e && "layoutMode" in e) {
    let t = "fills" in e && Array.isArray(e.fills) && e.fills.filter(e => e.visible).length === 0;
    let i = "strokes" in e && Array.isArray(e.strokes) && e.strokes.filter(e => e.visible).length === 0;
    let n = "effects" in e && Array.isArray(e.effects) && e.effects.filter(e => e.visible).length === 0;
    return !(t && n && i) || m(e);
  }
  return !1;
}
function g(e, t) {
  if (!e.visible) return !1;
  let i = e.parent;
  for (; i && i.id !== t.id;) {
    if (!i.visible) return !1;
    i = i.parent;
  }
  return !0;
}
function f(e) {
  if (!("layoutMode" in e)) return !1;
  let t = m(e);
  if (e.width / e.height > 1.4 && e.width / e.height < 6 && e.findAll(t => t.type === "TEXT" && g(t, e)).length === 1) {
    let i = e.findAll(e => "children" in e && e.children.length > 0 && "fills" in e && e.fills.some(e => e.visible) || "strokes" in e && e.strokes.some(e => e.visible));
    if (i.length > 0 && i.some(t => "children" in t && t.findOne(t => t.type === "TEXT" && g(t, e))) || t) {
      let t = calculateTransformedBoundingBox("children" in e ? e.children : []);
      let i = t.left - e.x;
      let n = e.x + e.width - t.right;
      if (!(i > 4 * n || n > 4 * i)) {
        s("    Looks like a button.");
        return !0;
      }
    }
  }
  return !1;
}
async function _(e, t, i) {
  aalSettingsConfig.LOG_RESPONSIVE && logger.clear();
  (await o(e, t)) ? (function e(t, i) {
    if ("children" in t && t.children.length > 0 && (t.type === "FRAME" || t.type === "COMPONENT")) {
      for (let n of t.children.filter(d)) !i.includes(t.id) && e(n, i);
    }
    if (s(t.name), s(t), !("parent" in t) || !t.parent || !("layoutMode" in t.parent) || t.parent.layoutMode === "NONE") {
      s("    Not in a stack.");
      return;
    }
    if (!(t.type === "TEXT" || t.type === "FRAME" || t.type === "INSTANCE" || t.type === "COMPONENT" || t.type === "RECTANGLE" || t.type === "LINE")) {
      s("    Not a text, frame, instance, component, or rectangle.");
      return;
    }
    if (!("layoutPositioning" in t && t.layoutPositioning === "AUTO")) return;
    let n = t.parent;
    if (t.type === "TEXT" && f(n)) {
      u(t) && (t.textAutoResize = "WIDTH_AND_HEIGHT");
      return;
    }
    n.layoutMode === "VERTICAL" && function (e, t) {
      if (s("    In a vertical stack."), function (e) {
        let t = e.parent;
        return !!t && Math.abs(t.width - t.paddingLeft - t.paddingRight - e.width) <= aalSettingsConfig.AUTO_CHILDREN_WIDTH_SIMILARITY_LIMIT;
      }(e)) {
        s("    At fill width.");
        l(e, !1);
        return;
      }
      if ("layoutMode" in e && e.layoutMode !== "NONE") {
        if (t.counterAxisAlignItems === "CENTER") {
          if (!(e.width >= 0.8 * t.width) || h(e)) return;
          s("    Center aligned and wide enough.");
          l(e, !0);
          return;
        }
        if (e.layoutMode === "VERTICAL" && (s("    Is a vertical stack in a vertical stack."), e.findChild(e => "layoutSizingHorizontal" in e && e.layoutSizingHorizontal === "FILL") && t.counterAxisAlignItems === "MIN" && !h(e))) {
          s("    Has a child with Fill width and in a left aligned stack.");
          l(e, !1);
          return;
        }
        if (e.layoutMode === "HORIZONTAL") {
          if (s("    Is a horizontal stack in a vertical stack."), e.children.length > 1 && e.findChild(e => "layoutSizingHorizontal" in e && e.layoutSizingHorizontal === "FILL") === null && !h(e)) {
            s("    No children with Fill width.");
            l(e, !1);
            return;
          }
          let t = e.children[e.children.length - 1];
          if (e.children.length > 1 && t.type === "TEXT" && t.layoutSizingHorizontal === "FILL") {
            s("    Last child is a Fill width text node.");
            l(e, !1);
            return;
          }
        }
        s("    Is a stack but not a candidate for fill width.");
        return;
      }
      e.type === "TEXT" && (s("    Text node."), t.counterAxisAlignItems === "MIN" && (c(e, "LEFT"), l(e, !1)), t.counterAxisAlignItems !== "CENTER" || p(e) || (c(e, "CENTER"), l(e, !1)), t.counterAxisAlignItems === "MAX" && (c(e, "RIGHT"), l(e, !1)));
    }(t, n);
    n.layoutMode === "HORIZONTAL" && function (e, t) {
      if (s("    In a horizontal stack."), f(e)) {
        u(e) && (s("    At hug width."), function (e) {
          "children" in e && "layoutSizingHorizontal" in e && ("layoutMode" in e && e.layoutMode !== "NONE" || e.parent && e.type === "TEXT" && "layoutMode" in e.parent && e.parent.layoutMode !== "NONE") && (e.children.forEach(e => {
            d(e) && "layoutSizingHorizontal" in e && e.layoutSizingHorizontal === "FILL" && (e.layoutSizingHorizontal = "FIXED");
          }), e.layoutSizingHorizontal = "HUG", s(`    Set to Hug width (${e.width})`), s("--------------------------------"));
        }(e));
        return;
      }
      let i = t.children.filter(d);
      if (t.layoutWrap !== "WRAP") {
        if (e.width === e.height) {
          s("    Square or circle.");
          return;
        }
        if (t.findChild(t => "layoutSizingHorizontal" in t && t.layoutSizingHorizontal === "FILL" && t !== e)) {
          s("    Has a sibling with Fill width.");
          return;
        }
        if (t.primaryAxisAlignItems === "SPACE_BETWEEN") {
          if (s("    In a space between stack."), i.length === 2 && i[0] === e) {
            if (s("    Is the left item in a 2-item auto gap stack."), "layoutMode" in e) {
              if (s("    Is a frame/stack."), e.findChild(e => "layoutSizingHorizontal" in e && e.layoutSizingHorizontal === "FILL") === null) {
                s("    Has no children with Fill width.");
                return;
              }
              if (e.layoutMode === "HORIZONTAL" && e.primaryAxisAlignItems === "SPACE_BETWEEN") {
                s("    Is a horizontal stack with auto gap.");
                return;
              }
              h(e) || (s("    Is not a frame with visible fill or stroke."), l(e, !1));
            } else {
              s("    Is not a frame/stack.");
              e.type === "TEXT" && (s("    Is a text node."), c(e, "LEFT"));
              l(e, !1);
            }
          } else {
            s("    Not the left item in a 2-item auto gap stack.");
          }
        } else {
          if (s("    Not in a space between stack."), function (e) {
            if (!("children" in e) || e.children.length === 0) return !1;
            let t = (e, t) => Math.abs(e - t) < aalSettingsConfig.AUTO_CHILDREN_WIDTH_SIMILARITY_LIMIT;
            let i = e.children.filter(d);
            if (i.length === 0 || i.find(e => f(e))) return !1;
            let n = i[0].width;
            return i.every(e => t(e.width, n));
          }(t) && function (e) {
            let t = e.children.filter(d);
            let i = calculateTransformedBoundingBox(t);
            return Math.abs(i.right - i.left - (e.width - e.paddingLeft - e.paddingRight)) <= 4;
          }(t)) {
            for (let e of (s("    All siblings are the same width and take up all width."), i)) {
              s(`    Setting${e.name} to fill width.`);
              l(e, !1);
            }
            return;
          }
          let n = calculateTransformedBoundingBox(t.children);
          let o = n.right - n.left;
          if (e.width > 0.5 * o && function (e) {
            let t = e.parent;
            if (!t) return !1;
            let i = t.width - t.paddingLeft - t.paddingRight;
            let n = calculateTransformedBoundingBox(t.children);
            let r = n.right - n.left - e.width;
            if (t.primaryAxisAlignItems !== "SPACE_BETWEEN") return i - r - e.width <= 4;
            {
              let n = i;
              for (let i of t.children) i !== e && (n -= i.width);
              return r === n;
            }
          }(e)) {
            s("    Is > 50% of the content width and filling will not change width.");
            e.type !== "TEXT" && l(e, !1);
            return;
          }
          if (t.primaryAxisAlignItems === "MIN" && e === i[i.length - 1] && !h(e)) {
            s("    Is the right-most or only item in a left aligned stack.");
            e.type === "TEXT" && (s("    Left aligned text node."), c(e, "LEFT"));
            e.type === "FRAME" && e.layoutMode === "HORIZONTAL" && e.primaryAxisAlignItems !== "SPACE_BETWEEN" && (s("    Left aligned horizontal stack."), e.primaryAxisAlignItems = "MIN");
            e.type === "FRAME" && e.layoutMode === "VERTICAL" && (s("    Left aligned vertical stack."), e.counterAxisAlignItems = "MIN");
            l(e, !1);
            return;
          }
          t.primaryAxisAlignItems === "CENTER" && t.children.length === 1 && (s("    Is the only child in a center aligned stack."), e.type !== "TEXT" || p(e) || (s("    Center aligned text node."), c(e, "CENTER")), e.type === "FRAME" && e.layoutMode === "HORIZONTAL" && e.primaryAxisAlignItems !== "SPACE_BETWEEN" && (s("    Center aligned horizontal stack."), e.primaryAxisAlignItems = "CENTER"), e.type === "FRAME" && e.layoutMode === "VERTICAL" && (s("    Center aligned vertical stack."), e.counterAxisAlignItems = "CENTER"), l(e, !1));
        }
      }
    }(t, n);
  }(e, i), function e(t, i) {
    if ("children" in t && t.children.length > 0 && (t.type === "FRAME" || t.type === "COMPONENT")) {
      for (let n of t.children.filter(d)) !i.includes(t.id) && e(n, i);
    }
    if (t.type === "TEXT" && t.parent && "layoutMode" in t.parent && t.parent.layoutMode !== "NONE") {
      let e = t.height;
      t.layoutSizingHorizontal !== "HUG" && (t.layoutSizingVertical = "HUG", t.height !== e && t.resize(t.width, e));
      return;
    }
    if ("layoutMode" in t && t.layoutMode && t.layoutMode !== "NONE" && (function (e) {
      if (!("layoutMode" in e) || e.layoutMode === "NONE") return !1;
      let t = calculateTransformedBoundingBox("children" in e ? e.children : []);
      let i = t.bottom - t.top + e.paddingTop + e.paddingBottom;
      return isApproximatelyEqual(e.height, i);
    }(t) || function (e) {
      if (!("layoutMode" in e) || e.layoutMode === "NONE") return !1;
      let t = calculateTransformedBoundingBox("children" in e ? e.children : []);
      let i = t.bottom - t.top + e.paddingTop + e.paddingBottom;
      return e.height < i;
    }(t))) {
      let e = t.height;
      t.layoutSizingHorizontal !== "HUG" && (t.layoutSizingVertical = "HUG", t.height < e && t.resize(t.width, e));
    }
  }(e, i)) : logger.log("Not all fonts loaded in subtree, aborting responsive heuristics.");
}
async function y(e, t, i, r) {
  if (e.length === 0) {
    logger.log("No nodes to segment.");
    return;
  }
  e.length === 1 && e[0].type === "GROUP" && (e = [function (e, t) {
    let i = e.rotation;
    let n = t.createFrame();
    e.parent?.appendChild(n);
    n.fills = [];
    n.x = e.x;
    n.y = e.y;
    n.name = e.name.replace("Group", "Frame");
    n.resize(e.width, e.height);
    n.appendChild(e);
    e.x = 0;
    e.y = 0;
    e.rotation = 0;
    t.ungroup(e);
    n.rotation = i;
    return n;
  }(e[0], i || figma)]);
  let s = e[0]?.id;
  let o = calculateTransformedBoundingBox(e);
  let l = new Set();
  let d = e => {
    l.add(e.id);
  };
  let c = {
    ...t
  };
  t?.recurseOnlySingleLayer && (e.length > 1 ? (e.forEach(e => {
    d(e);
  }), c.noRecurse = !0) : "children" in e[0] && e[0].children.forEach(e => {
    d(e);
  }));
  let u = new VertexNodeMap();
  let p = processVerticesLayout(e, i || figma, u, {
    value: r || 1
  }, c);
  t?.skipResponsive || (await _(p, i || figma, [...l]));
  u.clearAfterComplete();
  s && p.id !== s && (p.x = o.left, p.y = o.top);
  return p;
}
async function b(e, t, i) {
  "constraints" in e && (e.constraints = {
    horizontal: "MIN",
    vertical: "MIN"
  });
  let r = t || figma;
  if (e.type === "TEXT") {
    try {
      if (e.fontName !== r.mixed ? await r.loadFontAsync(e.fontName) : await Promise.all(e.getRangeAllFontNames(0, e.characters.length).map(r.loadFontAsync)), e.hasMissingFont) throw new Error(`missing font on node ${e.name}`);
      let t = e.clone();
      t.textAutoResize = "WIDTH_AND_HEIGHT";
      t.width <= e.width && (e.textAutoResize = "WIDTH_AND_HEIGHT");
      t.remove();
    } catch (e) {
      logger.log("error loading font or changing text node", e);
    }
    return 0;
  }
  if (!("children" in e) || e.children.length === 0 || e.children.every(e => e.type === "VECTOR" || e.type === "BOOLEAN_OPERATION")) return 0;
  let a = e;
  let s = 0;
  if (i?.detachInstances && a.type === "INSTANCE" && (a = a.detachInstance()), a.type === "FRAME" || a.type === "GROUP" || a.type === "COMPONENT") {
    let e = [];
    let n = a.type === "GROUP" || a.fills !== r.mixed && a.fills.length === 0 && a.strokes.length === 0 && a.effects.length === 0;
    i?.removeFrames && a.type === "GROUP" ? e = r.ungroup(a) : i?.removeFrames && (a.type === "FRAME" || a.type === "COMPONENT") && n ? e = r.ungroup(a) : ((a.type === "FRAME" || a.type === "COMPONENT") && (a.layoutMode === "HORIZONTAL" || a.layoutMode === "VERTICAL") && (a.layoutMode = "NONE", s++), e = [...a.children]);
    s += (await Promise.all(e.map(async e => (e.layoutPositioning === "ABSOLUTE" && (e.layoutPositioning = "AUTO"), await b(e, t, i))))).reduce((e, t) => e + t, 0);
  }
  return s;
}
async function v(e, t, i) {
  let n = t || figma;
  return (await Promise.all(e.map(async e => {
    if (e.type === "FRAME" || e.type === "GROUP" || e.type === "INSTANCE" || e.type === "COMPONENT") {
      let r = !1;
      e.type !== "GROUP" && n.mixed !== e.fills && e.fills.length === 0 && (logVerMessage("destroy-structure-from-selection", `setting fills to white. Node name: ${e.name}`, 4), e.fills = [n.util.solidPaint("#FFFFFF")], r = !0);
      let a = await b(e, t, i);
      e.type !== "GROUP" && r && (e.fills = []);
      return a;
    }
    return 0;
  }))).reduce((e, t) => e + t, 0);
}
function I(e) {
  return {
    x: Math.round(e.x),
    y: Math.round(e.y),
    width: Math.round(e.width),
    height: Math.round(e.height)
  };
}
function E(e) {
  let t = e.findAll();
  let i = {};
  for (let e of t) {
    let a = [];
    for (let i of t) {
      var n;
      var r;
      e.id !== i.id && e.absoluteBoundingBox && i.absoluteBoundingBox && (n = e.absoluteBoundingBox, r = i.absoluteBoundingBox, n = I(n), r = I(r), n.x < r.x + r.width && n.x + n.width > r.x && n.y < r.y + r.height && n.y + n.height > r.y) && a.push(i.id);
    }
    a.length > 0 && (i[e.id] = a);
  }
  return i;
}
export function $$x4(e, t) {
  let i = t || figma;
  let s = e.map(e => i.getNodeById(e)).filter(e => e);
  let o = (s.length === 1 && s[0] && "children" in s[0] ? s[0].children : s).filter(e => e.visible);
  return !!(s.length === 1 && o.length <= 1 || s.find(e => e.type === "COMPONENT_SET") || o.find(e => e.type === "COMPONENT_SET")) || (o.length <= 1 ? (logVerMessage("shouldRunSimpleStackDetection", "Single node in selection, returning true", 1), !0) : !function (e) {
    if (e.length < 2) return !1;
    try {
      let t = -Number.MAX_VALUE;
      let i = -Number.MAX_VALUE;
      let n = Number.MAX_VALUE;
      let s = Number.MAX_VALUE;
      let o = new Map();
      e.forEach(e => {
        let r = calculateTransformedBoundingBox([e]);
        o.set(e.id, r);
        t = Math.max(r.left, t);
        n = Math.min(r.right, n);
        i = Math.max(r.top, i);
        s = Math.min(r.bottom, s);
      });
      let l = e.map(e => {
        let t = o.get(e.id);
        let n = Math.min(t.bottom, s) - i;
        if (n < 0) return !1;
        let a = t.bottom - t.top;
        return n / a > aalSettingsConfig.TIDY_UP_OVERLAP_THRESHOLD;
      });
      let d = e.map(e => {
        let i = o.get(e.id);
        let a = Math.min(i.right, n) - t;
        if (a < 0) return !1;
        let s = i.right - i.left;
        return a / s > aalSettingsConfig.TIDY_UP_OVERLAP_THRESHOLD;
      });
      if (l.every(Boolean) && d.every(Boolean)) {
        logVerMessage("shouldTidySelectionSingleDimension:", "All nodes overlap in both dimensions. Ret true", 3);
        return !0;
      }
      let c = calculateTransformedBoundingBox(e);
      let u = [...e].sort((e, t) => {
        let i = o.get(e.id);
        let n = o.get(t.id);
        return i.left - n.left;
      });
      let p = [...e].sort((e, t) => {
        let i = o.get(e.id);
        let n = o.get(t.id);
        return i.top - n.top;
      });
      if (!l.every(Boolean) && !d.every(Boolean)) {
        let e = [];
        for (let t = 0; t < u.length - 1; t++) {
          let i = u[t];
          let n = u[t + 1];
          let r = o.get(i.id);
          let a = o.get(n.id);
          r.right < a.left ? e.push(!1) : e.push(!0);
        }
        let t = [];
        for (let e = 0; e < p.length - 1; e++) {
          let i = p[e];
          let n = p[e + 1];
          let r = o.get(i.id);
          let a = o.get(n.id);
          r.bottom < a.top ? t.push(!1) : t.push(!0);
        }
        if (t.every(e => !e) && e.every(e => !e)) {
          logVerMessage("shouldTidySelectionSingleDimension:", "diagonal selection detected, returning true", 3);
          return !0;
        }
      }
      if (l.every(Boolean)) {
        let e = c.right - c.left;
        for (let t of u) {
          let i = o.get(t.id);
          e -= i.right - i.left;
        }
        let t = e / (u.length - 1);
        for (let e = 0; e < u.length - 1; e++) {
          let i = o.get(u[e + 1].id);
          let n = o.get(u[e].id);
          let a = i.left - n.right;
          if (Math.abs(a - t) / t > aalSettingsConfig.HORIZONTAL_TIDY_UP_SPACING_EQUALITY_THRESHOLD) {
            logVerMessage("shouldTidySelectionSingleDimension:", `width spacing check failed between node ordered ${e} - ${e + 1}`, 3);
            return !1;
          }
        }
        logVerMessage("shouldTidySelectionSingleDimension:", "width spacing check passed", 3);
        return !0;
      }
      if (d.every(Boolean)) {
        let e = c.bottom - c.top;
        for (let t of p) {
          let i = o.get(t.id);
          e -= i.bottom - i.top;
        }
        let t = e / (p.length - 1);
        for (let e = 0; e < p.length - 1; e++) {
          let i = o.get(p[e + 1].id);
          let n = o.get(p[e].id);
          let a = i.top - n.bottom;
          if (Math.abs(a - t) / t > aalSettingsConfig.VERTICAL_TIDY_UP_SPACING_EQUALITY_THRESHOLD) {
            logVerMessage("shouldTidySelectionSingleDimension:", `height spacing check failed between node ordered ${e} - ${e + 1}`, 3);
            return !1;
          }
        }
        logVerMessage("shouldTidySelectionSingleDimension:", "height spacing check passed", 3);
        return !0;
      }
    } catch (e) {
      logger.info("failed on checking shouldTidySelectionSingleDimension with error: ", e);
    }
    logVerMessage("shouldTidySelectionSingleDimension", "fallthrough, return false", 3);
    return !1;
  }(o) ? (logVerMessage("shouldRunSimpleStackDetection", "exiting with return false", 1), !1) : (logVerMessage("shouldRunSimpleStackDetection", "shouldTidySelectionSingleDimension() returned true", 1), !0));
}
export async function $$S1(e, t, i) {
  let n = e || figma;
  await n.currentPage.loadAsync();
  await y(n.currentPage.selection, t, n, i);
}
export async function $$w2(e, t, i) {
  let n = t || figma;
  await n.currentPage.loadAsync();
  return await y(e, {
    recurseOnlySingleLayer: !0
  }, n, i);
}
export async function $$C3(e, t) {
  let i = t || figma;
  await i.currentPage.loadAsync();
  let n = i.getNodeById(e);
  n && (await _(n, i, []));
}
export async function $$T0(e, t) {
  let i = t || figma;
  await i.currentPage.loadAsync();
  let n = e.map(e => i.getNodeById(e)).filter(e => e);
  return await v(n, i);
}
export const vk = $$T0;
export const o5 = $$S1;
export const N7 = $$w2;
export const cx = $$C3;
export const sg = $$x4;