import { ServiceCategories as _$$e } from "../905/165054";
import { VariableIdHandler } from "../figma_app/243058";
import { FileSourceType, VariableDataType, FirstDraftHelpers, SceneGraphTsApi, FacetType, Thumbnail, DraftState } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { loadPluginFont } from "../905/426868";
import { ReduxSceneGraph, getSingletonSceneGraph } from "../905/700578";
import { analyticsEventManager } from "../905/449184";
import { reportError } from "../905/11";
import { Point } from "../905/736624";
import { i2 } from "../905/296461";
import { oT } from "../figma_app/566517";
import { Gy } from "../figma_app/193952";
import { fullscreenValue } from "../figma_app/455680";
import { Pv } from "../905/619652";
import { re } from "../figma_app/234690";
import { bq, BY } from "../figma_app/541950";
export let $$y4 = 6;
export function $$b2(e) {
  if ("FRAME" === e.type && "true" === e.getSharedPluginData("jsx", "isLayoutNode")) for (let t of e.childrenNodes) "INSTANCE" === t.type && t.fills.filter(e => "SOLID" === e.type).length > 0 && permissionScopeHandler.ai("first-draft-override-layout-node", () => {
    e.fills = t.fills;
  });
}
let $$T3 = {
  fontFamilyTitle: "\u2726/font/title/bold/family",
  fontFamilyBody: "\u2726/font/body/regular/family",
  fontFamilyLabel: "\u2726/font/label/medium/family",
  textColor: "\u2726/color/1/content-primary",
  cornerRadius: "\u2726/cornerRadius/small",
  cornerRadiusFallback: "\u2726/cornerRadius/large",
  bgBrandColor: "\u2726/color/1/bg-brand",
  bgColor: "\u2726/color/2/bg-primary"
};
let $$I0 = {
  fontFamilyTitle: "\u2726/font/title/bold/family",
  fontFamilyBody: "\u2726/font/body/regular/family",
  fontFamilyLabel: "\u2726/font/label/medium/family",
  textColor: "\u2726/color/1/text-default",
  cornerRadius: "\u2726/cornerRadius/medium",
  cornerRadiusFallback: "\u2726/cornerRadius/large",
  bgBrandColor: "\u2726/color/1/bg-brand",
  bgColor: "\u2726/color/2/bg-primary"
};
function S(e, t, r, n, i) {
  if (!r && (r || i[e])) {
    let t = i[e];
    if (t) return t;
  } else {
    let r = t.resolveVariable(e);
    if (r?.type === n) return r.value;
  }
  return null;
}
async function v(e, t, r, n) {
  let i = new ReduxSceneGraph(FileSourceType.FIRST_DRAFT);
  let s = i.createNode("FRAME");
  if (s.resizeWithoutConstraints(56, 56), r.bgColor) {
    let i = S(r.bgColor, e, t, VariableDataType.COLOR, n);
    i && (s.fills = [{
      type: "SOLID",
      color: i
    }]);
  }
  let c = i.createNode("TEXT");
  s.appendChild(c);
  c.fontSize = 18;
  c.characters = "Aa";
  c.leadingTrim = "CAP_HEIGHT";
  c.relativeTransform = {
    ...c.relativeTransform,
    m02: 8,
    m12: 4
  };
  let u = async r => {
    if (r) {
      let i = S(r, e, t, VariableDataType.STRING, n);
      if (i) {
        let e = {
          ...c.fontName,
          family: i
        };
        try {
          await loadPluginFont(e);
          c.fontName = e;
        } catch (r) {
          let t = void 0 === r ? "undefined" : r instanceof Error ? r.message : JSON.stringify(r);
          analyticsEventManager.trackDefinedEvent("ai_generation.first_draft_font_error", {
            error: t,
            family: e.family,
            style: e.style,
            location: "apply-preset"
          });
        }
        c.update();
        let t = 11 - (c.size.y - 13) / 2;
        c.y = t;
      }
    }
  };
  if (await u(r.fontFamilyTitle || r.fontFamilyBody || r.fontFamilyLabel), r.textColor) {
    let i = S(r.textColor, e, t, VariableDataType.COLOR, n);
    if (i) {
      let e = s.fills[0].color;
      let t = e ? re(i, e) ?? i : i;
      c.fills = [{
        type: "SOLID",
        color: t
      }];
    }
  }
  if (r.bgBrandColor) {
    let o = i.createNode("RECTANGLE");
    s.appendChild(o);
    o.resizeWithoutConstraints(56, 28);
    o.relativeTransform = {
      ...o.relativeTransform,
      m02: 8,
      m12: 32
    };
    let l = S(r.bgBrandColor, e, t, VariableDataType.COLOR, n);
    l && (o.fills = [{
      type: "SOLID",
      color: l
    }]);
    let d = r.cornerRadius ?? r.cornerRadiusFallback;
    if (d) {
      let r = S(d, e, t, VariableDataType.FLOAT, n);
      null !== r && (o.cornerRadius = r);
    }
  }
  return s;
}
function A() {
  let e = Gy(FileSourceType.FIRST_DRAFT).filter(e => e.name === i2);
  if (e && 0 !== e.length) {
    e.length > 1 && reportError(_$$e.AI_GENERATION, Error("Multiple Presets collections found, returning the first one"), {
      tags: {
        collectionIds: e.map(e => e.id).join(",")
      }
    });
    return e[0];
  }
}
export async function $$x5(e, t, r, s, o = $$y4) {
  let d = getSingletonSceneGraph().get(t);
  if (!d) return [];
  FirstDraftHelpers.clearFDScene();
  let p = FirstDraftHelpers.updateFDSceneFromNode(t, o);
  let h = new ReduxSceneGraph(FileSourceType.FIRST_DRAFT);
  let m = p.map(e => h.get(e));
  if (m.some(e => !e)) {
    reportError(_$$e.AI_GENERATION, Error("Copied node not found"));
    return [];
  }
  let f = [];
  let S = A();
  if (!S || 0 === S.modes.length) return [];
  let N = function (e, t) {
    let r = new ReduxSceneGraph(FileSourceType.FIRST_DRAFT);
    let n = r.getVariableCollectionNode(e.id);
    if (!n) return null;
    let s = {
      fontFamilyTitle: null,
      fontFamilyBody: null,
      fontFamilyLabel: null,
      textColor: null,
      cornerRadius: null,
      cornerRadiusFallback: null,
      bgBrandColor: null,
      bgColor: null
    };
    let o = t === bq.Website ? $$T3 : $$I0;
    n.variableIds.forEach(e => {
      let t = SceneGraphTsApi.getGUIDForAssetId(r.scene, VariableIdHandler.fromString(e) ?? VariableIdHandler.INVALID, FacetType.VARIABLE);
      if (!t) return null;
      let n = r.get(t);
      n && Object.entries(o).forEach(([t, r]) => {
        n.name === r && (s[t] = e);
      });
    });
    return s;
  }(S, BY(d));
  if (!N) return [];
  let C = function (e, t) {
    let r = getSingletonSceneGraph();
    let n = new ReduxSceneGraph(FileSourceType.FIRST_DRAFT);
    let s = n.getVariableCollectionNode(t.id);
    if (!s) return {};
    let o = {};
    let d = function (e, t) {
      let r = {};
      t.variableIds.forEach(t => {
        let n = e.getVariableNode(VariableIdHandler.fromString(t) ?? VariableIdHandler.INVALID);
        if (!n) return null;
        r[n.name] = {
          id: t,
          name: n.name,
          variableResolvedType: n.variableResolvedType
        };
      });
      return r;
    }(n, s);
    for (let t in e) {
      let n = SceneGraphTsApi.getGUIDForAssetId(r.scene, VariableIdHandler.fromString(t) ?? VariableIdHandler.INVALID, FacetType.VARIABLE);
      if (!n) continue;
      let s = r.get(n);
      s && d[s.name] && (o[d[s.name].id] = e[t]);
    }
    return o;
  }(s, S);
  let w = S.modes[0].id;
  let O = r.filter(e => S.modes.some(t => t.id === e) && e !== w).slice(0, o - 1);
  if (O.length < o - 1) {
    let e = S.modes.slice(1).map(e => e.id).filter(e => !O.includes(e));
    let t = o - 1 - O.length;
    O.push(...e.slice(0, t));
  }
  if (0 === O.length) return [];
  try {
    let t = 0;
    for (let r of m.slice(0, O.length + 1)) {
      let n = 0 === t ? null : O[t - 1];
      t > 0 && n && (r.setExplicitVariableModeForCollection(S.id, n), $$b2(r));
      let i = await v(r, n, N, C);
      let s = function (e) {
        let t = Thumbnail.generateThumbnailForNode(e.guid, 0, 0, 1, {
          inFirstDraftScene: !0,
          type: "UNCOMPRESSED",
          scale: 184 / e.size.x
        });
        return t && t[0] ? Pv(t[1], new Point(t[0].width, t[0].height)) : null;
      }(i);
      s && f.push({
        attachedNodeId: r.guid,
        modeId: n,
        dataURI: s
      });
      let o = Object.keys(C).length > 0 && "1P_LIBRARY" === e.type;
      await oT(e, r.guid, DraftState.FIRST_DRAFT, {
        detachVariables: o
      });
      t++;
    }
  } catch (e) {
    reportError(_$$e.AI_GENERATION, e);
    return [];
  }
  return f;
}
export function $$N1(e, t, r) {
  if (!new ReduxSceneGraph(FileSourceType.FIRST_DRAFT).get(e.attachedNodeId)) throw Error("Attached node not found");
  if (e.modeId && !A()) throw Error("Preset collection not found");
  let n = permissionScopeHandler.ai("first-draft-apply-theme-preset", () => FirstDraftHelpers.insertFromFDScene(e.attachedNodeId));
  let i = getSingletonSceneGraph();
  let o = i.get(n);
  if (!o) throw Error("Inserted preset node not found");
  permissionScopeHandler.ai("first-draft-apply-theme-preset", () => {
    o.locked = !1;
  });
  permissionScopeHandler.ai("first-draft-apply-theme-preset", () => {
    let e = i.get(t);
    e && (e.parentNode?.type === "CANVAS" && (o.relativeTransform = e.relativeTransform), e.removeSelfAndChildren());
    r && r.forEach(e => {
      let t = i.get(e);
      t && t.removeSelfAndChildren();
    });
  });
  fullscreenValue.commit();
  return n;
}
export const Cr = $$I0;
export const DP = $$N1;
export const V5 = $$b2;
export const ZO = $$T3;
export const k_ = $$y4;
export const xk = $$x5;