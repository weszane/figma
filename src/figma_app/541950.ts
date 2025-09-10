import { permissionScopeHandler } from "../905/189185";
import { loadPluginFont } from "../905/426868";
import { analyticsEventManager } from "../905/449184";
import { colorToHexString, parseHex } from "../figma_app/191804";
import { _ } from "../figma_app/436731";
import { z } from "../figma_app/153551";
import { lu, vj } from "../figma_app/846140";
import { o$, $L, uq } from "../figma_app/857146";
import { lg, lH, Dk } from "../figma_app/18582";
import { JZ, oR, gU } from "../figma_app/234690";
export function $$_5(e, t) {
  let r = new Map();
  for (let [n, i] of e) {
    let e = t?.get(n);
    r.set(n, {
      stackSpacing: {
        rangeSize: e?.stackSpacing?.rangeSize ?? o$(i.stackSpacing),
        value: i.stackSpacing
      },
      stackTopPadding: {
        rangeSize: e?.stackTopPadding?.rangeSize ?? o$(i.stackTopPadding),
        value: i.stackTopPadding
      },
      stackBottomPadding: {
        rangeSize: e?.stackBottomPadding?.rangeSize ?? o$(i.stackBottomPadding),
        value: i.stackBottomPadding
      },
      stackLeftPadding: {
        rangeSize: e?.stackLeftPadding?.rangeSize ?? o$(i.stackLeftPadding),
        value: i.stackLeftPadding
      },
      stackRightPadding: {
        rangeSize: e?.stackRightPadding?.rangeSize ?? o$(i.stackRightPadding),
        value: i.stackRightPadding
      }
    });
  }
  return r;
}
export function $$h7(e, {
  ignoreOpacity: t = !1,
  pinnedRanges: r
} = {}) {
  let n = [];
  for (let t of Object.values($L(e))) if (t.rectangleCornerRadiiIndependent) n.push(t.rectangleTopLeftCornerRadius, t.rectangleTopRightCornerRadius, t.rectangleBottomRightCornerRadius, t.rectangleBottomLeftCornerRadius);else for (let e = 0; e < 4; e++) n.push(t.cornerRadius);
  let i = uq(e);
  let a = [];
  for (let e of i.values()) for (let t of Object.values(e)) a.push(t);
  let s = {
    colors: {
      content: [],
      bg: [],
      border: []
    },
    radiusValues: n,
    spacingValues: a,
    spacingRangesForGuids: $$_5(i, r)
  };
  JZ(e, s.colors, t);
  return s;
}
function m(e) {
  return Array.from(new Set(e));
}
export function $$g6(e, t) {
  let r = $$T0(e);
  let n = $$v1(e, r);
  return {
    fontFamilies: {
      title: m(n.title.map(e => e.family)),
      body: m(n.body.map(e => e.family)),
      label: m(n.label.map(e => e.family))
    },
    colors: {
      text: m(t.colors.content),
      background: m(t.colors.bg),
      border: m(t.colors.border)
    },
    spacing: m(t.spacingValues),
    borderRadii: m(t.radiusValues)
  };
}
export async function $$f3(e, t, r) {
  let o = $$v1(e, r);
  let l = new Map();
  for (let e of o.title) for (let t of e.nodeWeightInfos.map(e => e.nodeId)) l.set(t, "title");
  for (let e of o.body) for (let t of e.nodeWeightInfos.map(e => e.nodeId)) l.set(t, "body");
  for (let e of o.label) for (let t of e.nodeWeightInfos.map(e => e.nodeId)) l.set(t, "label");
  let {
    colors,
    borderRadii,
    spacing,
    fontFamilies
  } = t;
  let m = (e, t) => {
    let r = t.role === lg.BG ? colors?.background : t.role === lg.CONTENT ? colors?.text : colors?.border;
    if (!r) return;
    let n = r[colorToHexString({
      ...e,
      a: 1
    })];
    if (n) {
      let t = parseHex(n);
      if (t) return {
        ...t,
        a: e.a
      };
    }
  };
  let g = [{
    node: e
  }];
  for (; g.length > 0;) {
    let e = g.pop();
    if (!e) continue;
    let t = e.node;
    colors && permissionScopeHandler.ai("first-draft-make-changes-theme-colors", () => {
      oR({
        node: t,
        getNewColor: m,
        options: {
          mode: lH.LIGHT,
          modeChanged: !1,
          role: Dk(t),
          parentFillColor: e.parentFillColor
        }
      });
    });
    permissionScopeHandler.ai("first-draft-make-changes-theme-radius", () => {
      if (!borderRadii || !function (e) {
        let t = e.fills.length > 0;
        let r = e.strokePaints.data.length > 0;
        return t || r;
      }(t)) return;
      let e = t.cornerRadiusOrMixed;
      if (e && "mixed" !== e && e in borderRadii) t.setCornerRadiusAndClobber(borderRadii[e]);else {
        let e;
        (e = t.rectangleTopLeftCornerRadius) in borderRadii && (t.rectangleTopLeftCornerRadius = borderRadii[e]);
        (e = t.rectangleTopRightCornerRadius) in borderRadii && (t.rectangleTopRightCornerRadius = borderRadii[e]);
        (e = t.rectangleBottomLeftCornerRadius) in borderRadii && (t.rectangleBottomLeftCornerRadius = borderRadii[e]);
        (e = t.rectangleBottomRightCornerRadius) in borderRadii && (t.rectangleBottomRightCornerRadius = borderRadii[e]);
        (e = t.cornerRadius) in borderRadii && (t.cornerRadius = borderRadii[e]);
      }
    });
    permissionScopeHandler.ai("first-draft-make-changes-theme-spacing", () => {
      let e;
      spacing && ("HORIZONTAL" === t.stackMode || "VERTICAL" === t.stackMode) && ((e = t.stackSpacing) in spacing && (t.stackSpacing = spacing[e]), (e = t.stackTopPadding) in spacing && (t.stackTopPadding = spacing[e]), (e = t.stackBottomPadding) in spacing && (t.stackBottomPadding = spacing[e]), (e = t.stackLeftPadding) in spacing && (t.stackLeftPadding = spacing[e]), (e = t.stackRightPadding) in spacing && (t.stackRightPadding = spacing[e]));
    });
    let r = "TEXT" === t.type && "object" == typeof t.fontName ? t.fontName : void 0;
    if (r) {
      let e = t.guid;
      let s = l.get(e);
      if (!fontFamilies || !s) continue;
      let o = fontFamilies[s];
      if (!o) continue;
      if (r.family in o) {
        let e = {
          family: o[r.family],
          style: r.style,
          postscript: ""
        };
        try {
          await loadPluginFont(e);
          permissionScopeHandler.ai("first-draft-make-changes-theme-font", () => {
            t.fontName = e;
          });
        } catch (s) {
          let r = {
            ...e,
            style: "Regular"
          };
          try {
            await loadPluginFont(r);
            permissionScopeHandler.ai("first-draft-make-changes-theme-font", () => {
              t.fontName = r;
            });
          } catch (r) {
            let t = void 0 === r ? "undefined" : r instanceof Error ? r.message : JSON.stringify(r);
            analyticsEventManager.trackDefinedEvent("ai_generation.first_draft_font_error", {
              error: t,
              family: e.family,
              style: e.style,
              location: "make-changes"
            });
          }
        }
      }
    }
    if ("childrenNodes" in t) {
      let r = t.fills.some(e => "IMAGE" === e.type);
      let n = gU(t.fills, r ? void 0 : e.parentFillColor);
      g.push(...t.childrenNodes.map(e => ({
        node: e,
        parentFillColor: n
      })));
    }
  }
}
function E(e, t) {
  let r = {};
  if (!e || !t) return r;
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    if (void 0 === i) continue;
    let a = t[n];
    t.length <= n && ("number" == typeof i && (a = t[t.length - 1] || 0), "string" == typeof i && (a = t[t.length - 1] || ""));
    r[i] = a;
  }
  return r;
}
export function $$y4(e, t) {
  let r = {};
  e.fontFamilies && t.fontFamilies && (r.fontFamilies = {
    title: E(e.fontFamilies.title, t.fontFamilies.title),
    body: E(e.fontFamilies.body, t.fontFamilies.body),
    label: E(e.fontFamilies.label, t.fontFamilies.label)
  });
  e.colors && t.colors && (r.colors = {
    text: E(e.colors.text, t.colors.text),
    background: E(e.colors.background, t.colors.background),
    border: E(e.colors.border, t.colors.border)
  });
  e.borderRadii && t.borderRadii && (r.borderRadii = E(e.borderRadii, t.borderRadii));
  e.spacing && t.spacing && (r.spacing = E(e.spacing, t.spacing));
  return r;
}
export var $$b2 = (e => (e.Mobile = "mobile", e.Website = "website", e))($$b2 || {});
export function $$T0(e) {
  return e.size && e.size.x <= 768 ? "mobile" : "website";
}
let I = ["Bold", "SemiBold", "Semi Bold"];
function S(e) {
  let t = z[e.family];
  if (t) {
    for (let [r, n] of Object.entries(t[lu.LABEL])) if (n.style === e.style) return r;
  }
  return I.includes(e.style) ? vj.BOLD : "Medium" === e.style ? vj.MEDIUM : vj.REGULAR;
}
export function $$v1(e, t) {
  let r = {};
  let n = {};
  let i = {};
  let a = [e];
  for (; a.length > 0;) {
    let e = a.pop();
    if (e && e.visible) {
      if ("website" === t && e.name.toLowerCase().includes("button")) {
        !function e(t, r) {
          if ("TEXT" === t.type) {
            r[t.fontName.family] || (r[t.fontName.family] = []);
            r[t.fontName.family].push({
              nodeId: t.guid,
              weight: S(t.fontName)
            });
          } else {
            if ("FRAME" !== t.type && "INSTANCE" !== t.type && "SYMBOL" !== t.type || !("childrenNodes" in t)) return;
            for (let n of t.childrenNodes) e(n, r);
          }
        }(e, i);
        continue;
      }
      if ("TEXT" === e.type) {
        let a;
        if (e.parentNode?.name.toLowerCase().includes("logo")) continue;
        let s = {};
        if ("website" === t && e.name.toLowerCase().includes("label")) {
          s = i;
          a = S(e.fontName);
        } else {
          let {
            category,
            weight
          } = function (e, t) {
            let r = e.fontSize;
            let n = e.fontName.style;
            return "website" === t && r < 20 || "mobile" === t && r <= 20 ? I.includes(n) ? {
              category: lu.BODY,
              weight: vj.BOLD
            } : "Medium" !== n ? {
              category: lu.BODY,
              weight: vj.REGULAR
            } : "website" === t ? {
              category: lu.LABEL,
              weight: vj.MEDIUM
            } : {
              category: lu.BODY,
              weight: vj.MEDIUM
            } : r < 28 ? I.includes(n) ? {
              category: lu.TITLE,
              weight: vj.BOLD
            } : "Medium" === n ? "website" === t ? {
              category: lu.LABEL,
              weight: vj.MEDIUM
            } : {
              category: lu.TITLE,
              weight: vj.BOLD
            } : "website" === t ? {
              category: lu.BODY,
              weight: vj.REGULAR
            } : {
              category: lu.TITLE,
              weight: vj.REGULAR
            } : I.includes(n) ? {
              category: lu.TITLE,
              weight: vj.BOLD
            } : "Medium" === n ? {
              category: lu.TITLE,
              weight: vj.BOLD
            } : {
              category: lu.TITLE,
              weight: vj.REGULAR
            };
          }(e, t);
          switch (a = weight, category) {
            case lu.LABEL:
              s = i;
              break;
            case lu.BODY:
              s = r;
              break;
            case lu.TITLE:
              s = n;
          }
        }
        void 0 !== s && void 0 !== a && (s[e.fontName.family] || (s[e.fontName.family] = []), s[e.fontName.family].push({
          nodeId: e.guid,
          weight: a
        }));
      }
      "childrenNodes" in e && a.push(...e.childrenNodes);
    }
  }
  return {
    title: A(n),
    body: A(r),
    label: A(i)
  };
}
function A(e) {
  return Object.entries(e).map(([e, t]) => ({
    family: e,
    nodeWeightInfos: t
  })).sort((e, t) => -_(e.nodeWeightInfos.length, t.nodeWeightInfos.length));
}
export const BY = $$T0;
export const Mz = $$v1;
export const bq = $$b2;
export const jR = $$f3;
export const k5 = $$y4;
export const nF = $$_5;
export const rO = $$g6;
export const uP = $$h7;