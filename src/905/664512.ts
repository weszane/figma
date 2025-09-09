import { logger } from "../905/651849";
import { N } from "../905/55273";
import { p8, uS, n4 } from "../905/259345";
import { Oc, aJ, Rm } from "../905/449579";
function s(e) {
  N.LOG_RESPONSIVE && logger.log(e);
}
async function o(e, t) {
  if (!("children" in e)) return !0;
  let i = e.findAllWithCriteria({
    types: ["TEXT"]
  });
  let r = [];
  for (let e of i) if (e.hasMissingFont) logger.log("Missing font on node: ", e.name, e.id, ", fontName: ", e.fontName);else if (e.fontName !== t.mixed) r.push(JSON.stringify(e.fontName));else for (let t of e.getRangeAllFontNames(0, e.characters.length)) r.push(JSON.stringify(t));
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
  if (i && "NONE" !== i.layoutMode) {
    if ("HUG" === i.layoutSizingHorizontal && (i.layoutSizingHorizontal = "FIXED"), t) {
      let t = i.width - i.paddingLeft - i.paddingRight - e.width;
      "VERTICAL" === i.layoutMode && t > 4 && "layoutMode" in e && "NONE" !== e.layoutMode && (e.paddingLeft = t / 2, e.paddingRight = t / 2);
    }
    e.layoutSizingHorizontal = "FILL";
    s("    Set to FILL width (" + e.width + ")");
    s("--------------------------------");
  }
}
function d(e) {
  return "layoutPositioning" in e && "AUTO" === e.layoutPositioning;
}
function c(e, t) {
  if ("TEXT" === e.type) try {
    e.textAlignHorizontal = t;
  } catch (e) {
    logger.log("Failed to set text align horizontal", e);
  }
}
function u(e) {
  if ("TEXT" === e.type) {
    if ("WIDTH_AND_HEIGHT" === e.textAutoResize) return !0;
    let t = e.textAutoResize;
    let i = e.width;
    let n = e.height;
    let r = !1;
    e.textAutoResize = "WIDTH_AND_HEIGHT";
    r = Math.abs(e.width - i) < p8;
    e.resize(i, n);
    e.textAutoResize = t;
    return r;
  }
  if ("children" in e && e.children.length > 0 && "layoutMode" in e && "NONE" !== e.layoutMode && "paddingLeft" in e && "paddingRight" in e) {
    let t = uS(e.children);
    return n4(t.right - t.left, e.width - e.paddingLeft - e.paddingRight);
  }
  return !1;
}
function p(e) {
  if (e.characters.includes("\n")) return !0;
  if ("WIDTH_AND_HEIGHT" === e.textAutoResize) return !1;
  let t = e.textAutoResize;
  let i = e.layoutSizingHorizontal;
  let n = e.width;
  let r = e.height;
  let s = !1;
  e.textAutoResize = "WIDTH_AND_HEIGHT";
  e.layoutSizingHorizontal = "HUG";
  s = Math.abs(e.width - n) > p8;
  e.resize(n, r);
  e.textAutoResize = t;
  e.layoutSizingHorizontal = i;
  return s;
}
function m(e) {
  return "layoutMode" in e && !!e.findOne(t => "layoutPositioning" in t && "ABSOLUTE" === t.layoutPositioning && n4(t.width, e.width, .1) && n4(t.height, e.height, .1));
}
function h(e) {
  if (e && "layoutMode" in e) {
    let t = "fills" in e && Array.isArray(e.fills) && 0 === e.fills.filter(e => e.visible).length;
    let i = "strokes" in e && Array.isArray(e.strokes) && 0 === e.strokes.filter(e => e.visible).length;
    let n = "effects" in e && Array.isArray(e.effects) && 0 === e.effects.filter(e => e.visible).length;
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
  if (e.width / e.height > 1.4 && e.width / e.height < 6 && 1 === e.findAll(t => "TEXT" === t.type && g(t, e)).length) {
    let i = e.findAll(e => "children" in e && e.children.length > 0 && "fills" in e && e.fills.some(e => e.visible) || "strokes" in e && e.strokes.some(e => e.visible));
    if (i.length > 0 && i.some(t => "children" in t && t.findOne(t => "TEXT" === t.type && g(t, e))) || t) {
      let t = uS("children" in e ? e.children : []);
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
  N.LOG_RESPONSIVE && logger.clear();
  (await o(e, t)) ? (function e(t, i) {
    if ("children" in t && t.children.length > 0 && ("FRAME" === t.type || "COMPONENT" === t.type)) for (let n of t.children.filter(d)) -1 === i.indexOf(t.id) && e(n, i);
    if (s(t.name), s(t), !("parent" in t) || !t.parent || !("layoutMode" in t.parent) || "NONE" === t.parent.layoutMode) {
      s("    Not in a stack.");
      return;
    }
    if (!("TEXT" === t.type || "FRAME" === t.type || "INSTANCE" === t.type || "COMPONENT" === t.type || "RECTANGLE" === t.type || "LINE" === t.type)) {
      s("    Not a text, frame, instance, component, or rectangle.");
      return;
    }
    if (!("layoutPositioning" in t && "AUTO" === t.layoutPositioning)) return;
    let n = t.parent;
    if ("TEXT" === t.type && f(n)) {
      u(t) && (t.textAutoResize = "WIDTH_AND_HEIGHT");
      return;
    }
    "VERTICAL" === n.layoutMode && function (e, t) {
      if (s("    In a vertical stack."), function (e) {
        let t = e.parent;
        return !!t && Math.abs(t.width - t.paddingLeft - t.paddingRight - e.width) <= N.AUTO_CHILDREN_WIDTH_SIMILARITY_LIMIT;
      }(e)) {
        s("    At fill width.");
        l(e, !1);
        return;
      }
      if ("layoutMode" in e && "NONE" !== e.layoutMode) {
        if ("CENTER" === t.counterAxisAlignItems) {
          if (!(e.width >= .8 * t.width) || h(e)) return;
          s("    Center aligned and wide enough.");
          l(e, !0);
          return;
        }
        if ("VERTICAL" === e.layoutMode && (s("    Is a vertical stack in a vertical stack."), e.findChild(e => "layoutSizingHorizontal" in e && "FILL" === e.layoutSizingHorizontal) && "MIN" === t.counterAxisAlignItems && !h(e))) {
          s("    Has a child with Fill width and in a left aligned stack.");
          l(e, !1);
          return;
        }
        if ("HORIZONTAL" === e.layoutMode) {
          if (s("    Is a horizontal stack in a vertical stack."), e.children.length > 1 && null === e.findChild(e => "layoutSizingHorizontal" in e && "FILL" === e.layoutSizingHorizontal) && !h(e)) {
            s("    No children with Fill width.");
            l(e, !1);
            return;
          }
          let t = e.children[e.children.length - 1];
          if (e.children.length > 1 && "TEXT" === t.type && "FILL" === t.layoutSizingHorizontal) {
            s("    Last child is a Fill width text node.");
            l(e, !1);
            return;
          }
        }
        s("    Is a stack but not a candidate for fill width.");
        return;
      }
      "TEXT" === e.type && (s("    Text node."), "MIN" === t.counterAxisAlignItems && (c(e, "LEFT"), l(e, !1)), "CENTER" !== t.counterAxisAlignItems || p(e) || (c(e, "CENTER"), l(e, !1)), "MAX" === t.counterAxisAlignItems && (c(e, "RIGHT"), l(e, !1)));
    }(t, n);
    "HORIZONTAL" === n.layoutMode && function (e, t) {
      if (s("    In a horizontal stack."), f(e)) {
        u(e) && (s("    At hug width."), function (e) {
          "children" in e && "layoutSizingHorizontal" in e && ("layoutMode" in e && "NONE" !== e.layoutMode || e.parent && "TEXT" === e.type && "layoutMode" in e.parent && "NONE" !== e.parent.layoutMode) && (e.children.forEach(e => {
            d(e) && "layoutSizingHorizontal" in e && "FILL" === e.layoutSizingHorizontal && (e.layoutSizingHorizontal = "FIXED");
          }), e.layoutSizingHorizontal = "HUG", s("    Set to Hug width (" + e.width + ")"), s("--------------------------------"));
        }(e));
        return;
      }
      let i = t.children.filter(d);
      if ("WRAP" !== t.layoutWrap) {
        if (e.width === e.height) {
          s("    Square or circle.");
          return;
        }
        if (t.findChild(t => "layoutSizingHorizontal" in t && "FILL" === t.layoutSizingHorizontal && t !== e)) {
          s("    Has a sibling with Fill width.");
          return;
        }
        if ("SPACE_BETWEEN" === t.primaryAxisAlignItems) {
          if (s("    In a space between stack."), 2 === i.length && i[0] === e) {
            if (s("    Is the left item in a 2-item auto gap stack."), "layoutMode" in e) {
              if (s("    Is a frame/stack."), null === e.findChild(e => "layoutSizingHorizontal" in e && "FILL" === e.layoutSizingHorizontal)) {
                s("    Has no children with Fill width.");
                return;
              }
              if ("HORIZONTAL" === e.layoutMode && "SPACE_BETWEEN" === e.primaryAxisAlignItems) {
                s("    Is a horizontal stack with auto gap.");
                return;
              }
              h(e) || (s("    Is not a frame with visible fill or stroke."), l(e, !1));
            } else {
              s("    Is not a frame/stack.");
              "TEXT" === e.type && (s("    Is a text node."), c(e, "LEFT"));
              l(e, !1);
            }
          } else s("    Not the left item in a 2-item auto gap stack.");
        } else {
          if (s("    Not in a space between stack."), function (e) {
            if (!("children" in e) || 0 === e.children.length) return !1;
            let t = (e, t) => Math.abs(e - t) < N.AUTO_CHILDREN_WIDTH_SIMILARITY_LIMIT;
            let i = e.children.filter(d);
            if (0 === i.length || i.find(e => f(e))) return !1;
            let n = i[0].width;
            return i.every(e => t(e.width, n));
          }(t) && function (e) {
            let t = e.children.filter(d);
            let i = uS(t);
            return 4 >= Math.abs(i.right - i.left - (e.width - e.paddingLeft - e.paddingRight));
          }(t)) {
            for (let e of (s("    All siblings are the same width and take up all width."), i)) {
              s("    Setting" + e.name + " to fill width.");
              l(e, !1);
            }
            return;
          }
          let n = uS(t.children);
          let o = n.right - n.left;
          if (e.width > .5 * o && function (e) {
            let t = e.parent;
            if (!t) return !1;
            let i = t.width - t.paddingLeft - t.paddingRight;
            let n = uS(t.children);
            let r = n.right - n.left - e.width;
            if ("SPACE_BETWEEN" !== t.primaryAxisAlignItems) return i - r - e.width <= 4;
            {
              let n = i;
              for (let i of t.children) i !== e && (n -= i.width);
              return r === n;
            }
          }(e)) {
            s("    Is > 50% of the content width and filling will not change width.");
            "TEXT" !== e.type && l(e, !1);
            return;
          }
          if ("MIN" === t.primaryAxisAlignItems && e === i[i.length - 1] && !h(e)) {
            s("    Is the right-most or only item in a left aligned stack.");
            "TEXT" === e.type && (s("    Left aligned text node."), c(e, "LEFT"));
            "FRAME" === e.type && "HORIZONTAL" === e.layoutMode && "SPACE_BETWEEN" !== e.primaryAxisAlignItems && (s("    Left aligned horizontal stack."), e.primaryAxisAlignItems = "MIN");
            "FRAME" === e.type && "VERTICAL" === e.layoutMode && (s("    Left aligned vertical stack."), e.counterAxisAlignItems = "MIN");
            l(e, !1);
            return;
          }
          "CENTER" === t.primaryAxisAlignItems && 1 === t.children.length && (s("    Is the only child in a center aligned stack."), "TEXT" !== e.type || p(e) || (s("    Center aligned text node."), c(e, "CENTER")), "FRAME" === e.type && "HORIZONTAL" === e.layoutMode && "SPACE_BETWEEN" !== e.primaryAxisAlignItems && (s("    Center aligned horizontal stack."), e.primaryAxisAlignItems = "CENTER"), "FRAME" === e.type && "VERTICAL" === e.layoutMode && (s("    Center aligned vertical stack."), e.counterAxisAlignItems = "CENTER"), l(e, !1));
        }
      }
    }(t, n);
  }(e, i), function e(t, i) {
    if ("children" in t && t.children.length > 0 && ("FRAME" === t.type || "COMPONENT" === t.type)) for (let n of t.children.filter(d)) -1 === i.indexOf(t.id) && e(n, i);
    if ("TEXT" === t.type && t.parent && "layoutMode" in t.parent && "NONE" !== t.parent.layoutMode) {
      let e = t.height;
      "HUG" !== t.layoutSizingHorizontal && (t.layoutSizingVertical = "HUG", t.height !== e && t.resize(t.width, e));
      return;
    }
    if ("layoutMode" in t && t.layoutMode && "NONE" !== t.layoutMode && (function (e) {
      if (!("layoutMode" in e) || "NONE" === e.layoutMode) return !1;
      let t = uS("children" in e ? e.children : []);
      let i = t.bottom - t.top + e.paddingTop + e.paddingBottom;
      return n4(e.height, i);
    }(t) || function (e) {
      if (!("layoutMode" in e) || "NONE" === e.layoutMode) return !1;
      let t = uS("children" in e ? e.children : []);
      let i = t.bottom - t.top + e.paddingTop + e.paddingBottom;
      return e.height < i;
    }(t))) {
      let e = t.height;
      "HUG" !== t.layoutSizingHorizontal && (t.layoutSizingVertical = "HUG", t.height < e && t.resize(t.width, e));
    }
  }(e, i)) : logger.log("Not all fonts loaded in subtree, aborting responsive heuristics.");
}
async function y(e, t, i, r) {
  if (0 === e.length) {
    logger.log("No nodes to segment.");
    return;
  }
  1 === e.length && "GROUP" === e[0].type && (e = [function (e, t) {
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
  let o = uS(e);
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
  let u = new Oc();
  let p = aJ(e, i || figma, u, {
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
  if ("TEXT" === e.type) {
    try {
      if (e.fontName !== r.mixed ? await r.loadFontAsync(e.fontName) : await Promise.all(e.getRangeAllFontNames(0, e.characters.length).map(r.loadFontAsync)), e.hasMissingFont) throw Error(`missing font on node ${e.name}`);
      let t = e.clone();
      t.textAutoResize = "WIDTH_AND_HEIGHT";
      t.width <= e.width && (e.textAutoResize = "WIDTH_AND_HEIGHT");
      t.remove();
    } catch (e) {
      logger.log("error loading font or changing text node", e);
    }
    return 0;
  }
  if (!("children" in e) || 0 === e.children.length || e.children.every(e => "VECTOR" === e.type || "BOOLEAN_OPERATION" === e.type)) return 0;
  let a = e;
  let s = 0;
  if (i?.detachInstances && "INSTANCE" === a.type && (a = a.detachInstance()), "FRAME" === a.type || "GROUP" === a.type || "COMPONENT" === a.type) {
    let e = [];
    let n = "GROUP" === a.type || a.fills !== r.mixed && 0 === a.fills.length && 0 === a.strokes.length && 0 === a.effects.length;
    i?.removeFrames && "GROUP" === a.type ? e = r.ungroup(a) : i?.removeFrames && ("FRAME" === a.type || "COMPONENT" === a.type) && n ? e = r.ungroup(a) : (("FRAME" === a.type || "COMPONENT" === a.type) && ("HORIZONTAL" === a.layoutMode || "VERTICAL" === a.layoutMode) && (a.layoutMode = "NONE", s++), e = [...a.children]);
    s += (await Promise.all(e.map(async e => ("ABSOLUTE" === e.layoutPositioning && (e.layoutPositioning = "AUTO"), await b(e, t, i))))).reduce((e, t) => e + t, 0);
  }
  return s;
}
async function v(e, t, i) {
  let n = t || figma;
  return (await Promise.all(e.map(async e => {
    if ("FRAME" === e.type || "GROUP" === e.type || "INSTANCE" === e.type || "COMPONENT" === e.type) {
      let r = !1;
      "GROUP" !== e.type && n.mixed !== e.fills && 0 === e.fills.length && (Rm("destroy-structure-from-selection", `setting fills to white. Node name: ${e.name}`, 4), e.fills = [n.util.solidPaint("#FFFFFF")], r = !0);
      let a = await b(e, t, i);
      "GROUP" !== e.type && r && (e.fills = []);
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
  let o = (1 === s.length && s[0] && "children" in s[0] ? s[0].children : s).filter(e => e.visible);
  return !!(1 === s.length && o.length <= 1 || s.find(e => "COMPONENT_SET" === e.type) || o.find(e => "COMPONENT_SET" === e.type)) || (o.length <= 1 ? (Rm("shouldRunSimpleStackDetection", "Single node in selection, returning true", 1), !0) : !function (e) {
    if (e.length < 2) return !1;
    try {
      let t = -Number.MAX_VALUE;
      let i = -Number.MAX_VALUE;
      let n = Number.MAX_VALUE;
      let s = Number.MAX_VALUE;
      let o = new Map();
      e.forEach(e => {
        let r = uS([e]);
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
        return n / a > N.TIDY_UP_OVERLAP_THRESHOLD;
      });
      let d = e.map(e => {
        let i = o.get(e.id);
        let a = Math.min(i.right, n) - t;
        if (a < 0) return !1;
        let s = i.right - i.left;
        return a / s > N.TIDY_UP_OVERLAP_THRESHOLD;
      });
      if (l.every(Boolean) && d.every(Boolean)) {
        Rm("shouldTidySelectionSingleDimension:", "All nodes overlap in both dimensions. Ret true", 3);
        return !0;
      }
      let c = uS(e);
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
          Rm("shouldTidySelectionSingleDimension:", "diagonal selection detected, returning true", 3);
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
          if (Math.abs(a - t) / t > N.HORIZONTAL_TIDY_UP_SPACING_EQUALITY_THRESHOLD) {
            Rm("shouldTidySelectionSingleDimension:", `width spacing check failed between node ordered ${e} - ${e + 1}`, 3);
            return !1;
          }
        }
        Rm("shouldTidySelectionSingleDimension:", "width spacing check passed", 3);
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
          if (Math.abs(a - t) / t > N.VERTICAL_TIDY_UP_SPACING_EQUALITY_THRESHOLD) {
            Rm("shouldTidySelectionSingleDimension:", `height spacing check failed between node ordered ${e} - ${e + 1}`, 3);
            return !1;
          }
        }
        Rm("shouldTidySelectionSingleDimension:", "height spacing check passed", 3);
        return !0;
      }
    } catch (e) {
      logger.info("failed on checking shouldTidySelectionSingleDimension with error: ", e);
    }
    Rm("shouldTidySelectionSingleDimension", "fallthrough, return false", 3);
    return !1;
  }(o) ? (Rm("shouldRunSimpleStackDetection", "exiting with return false", 1), !1) : (Rm("shouldRunSimpleStackDetection", "shouldTidySelectionSingleDimension() returned true", 1), !0));
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