import { isPartOfGroup, resetTypeInfoCache, getTypeInfoCached, getComponentInfoById } from "../figma_app/664063";
import { J } from "../905/223510";
import { __ } from "../figma_app/257655";
import { ServiceCategories as _$$e } from "../905/165054";
import { B } from "../905/94678";
import { CWU } from "../figma_app/763686";
import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { gZ, oy } from "../figma_app/964367";
import { $D } from "../905/11";
import { xi } from "../905/714362";
import { VN, vh, i2 } from "../905/296461";
import { gZ as _$$gZ, Py, RI } from "../figma_app/50224";
import { C, n6 } from "../figma_app/193952";
let f = e => {
  let t = UN().get(e);
  return !!t && (t.isStateGroup ? t.childrenNodes.every(e => e.isIconLikeContainer) : t.isIconLikeContainer);
};
export async function $$E6(e) {
  let {
    info
  } = await b({
    rootNodes: {
      dsKitKey: {
        type: "LOCAL",
        pageId: e
      },
      useAllPages: getFeatureFlags().first_draft_publish_all_components,
      pageChildrenName: getFeatureFlags().first_draft_publish_all_components ? void 0 : C
    },
    includeJSX: !1
  });
  return info.filter(e => getFeatureFlags().first_draft_publish_all_components ? f(e.componentId) : isPartOfGroup(e.componentGroupPath, C));
}
export async function $$y0(e) {
  let t = getFeatureFlags().first_draft_publish_all_components && !e;
  let {
    info
  } = await b({
    rootNodes: {
      dsKitKey: {
        type: "LOCAL",
        pageId: e
      },
      useAllPages: t
    },
    includeJSX: !!getFeatureFlags().first_draft_direct_gen && !!getFeatureFlags().first_draft_full_component_def
  });
  let i = VN(e);
  let a = await T(i, !0);
  return info.filter(e => getFeatureFlags().first_draft_publish_all_components ? !f(e.componentId) : isPartOfGroup(e.componentGroupPath, vh)).concat(a);
}
async function b(e) {
  let t = __(e);
  let r = B([...t], {
    followInstances: !1
  }).filter(e => "SYMBOL" === e.type ? e.isSymbolPublishable : !!e.isStateGroup && !e.hiddenFromPublishing);
  return {
    info: await T(r, e.includeJSX)
  };
}
async function T(e, t) {
  resetTypeInfoCache();
  return (await Promise.all(e.map(async e => {
    try {
      let r = getTypeInfoCached(e, {
        enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
      });
      if (!t) return r;
      let i = getFeatureFlags().first_draft_share_jsx ? await gZ(e, {
        topLevelComponentProps: !0
      }, {
        useDivTagsForFrames: !0,
        inlineVectorData: !1,
        useCustomGroupAndImageFormatForFirstDraft: !0
      }) : _$$gZ(e, r);
      return {
        ...r,
        jsxComponentDef: i
      };
    } catch (t) {
      $D(_$$e.AI_GENERATION, t, {
        extra: {
          nodeId: e.guid
        }
      });
    }
  }))).filter(Boolean);
}
export function $$I1() {
  return CWU.getLocalVariableSetsInfo().filter(e => !e.isSoftDeleted && n6(e.name, i2)).map(e => ({
    key: e.keyForPublish,
    name: e.name,
    version: e.userFacingVersion,
    nodeId: e.id,
    defaultModeId: e.defaultModeID,
    modes: e.modes
  }));
}
export function $$S4() {
  let e = $$I1().sort((e, t) => e.nodeId.localeCompare(t.nodeId));
  if (0 !== e.length && !(e.length > 1)) return e[0];
}
async function v(e) {
  return (await oy(e, {
    tailwind: !0,
    includeIDs: !1,
    topLevelComponentProps: !0,
    strict: !1,
    transformUnhandledNodes: !!getFeatureFlags().first_draft_debug,
    useCustomGroupAndImageFormatForFirstDraft: !0,
    useDivTagsForFrames: !0
  })).jsxStr;
}
export async function $$A3(e) {
  return getFeatureFlags().first_draft_share_jsx ? await v(e) : Py(e, {
    skipNodeIds: !0,
    autoLayoutTagName: "Frame",
    frameTagName: "Frame",
    formatJSX: !0,
    includeDefaultValues: !0,
    includeCustomImageAndIconProps: !0
  });
}
export async function $$x5(e) {
  let t = UN().get(e);
  if (!t || "FRAME" !== t.type) return null;
  let r = await $$A3(t);
  return r ? {
    jsx: r,
    buildingBlockToRegion: {}
  } : null;
}
function N(e) {
  let {
    layoutName,
    header,
    mainContent,
    footer,
    sidebar
  } = e;
  let s = {};
  for (let e of (s[header.name] = "header", mainContent)) s[e.name] = "mainContent";
  if (sidebar) for (let e of sidebar.blocks) s[e.name] = "sidebarContent";
  s[footer.name] = "footer";
  return {
    jsx: `<${layoutName} header={${header.tag}} mainContent={[${mainContent.map(e => e.tag).join(", ")}]}${sidebar ? ` sidebarContent={[${sidebar.blocks.map(e => e.tag).join(", ")}]} sidebarWidth={${sidebar.width}}` : ""} footer={${footer.tag}} />`,
    jsxWithProps: `<${layoutName} header={${header.tagWithProps}} mainContent={[${mainContent.map(e => e.tagWithProps).join(", ")}]}${sidebar ? ` sidebarContent={[${sidebar.blocks.map(e => e.tagWithProps).join(", ")}]} sidebarWidth={${sidebar.width}}` : ""} footer={${footer.tagWithProps}} />`,
    buildingBlockToRegion: s
  };
}
export async function $$C2(e, t) {
  let r = async e => {
    let t = getComponentInfoById(e.symbolId ?? "", {
      enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
    });
    if (!t || t.componentType !== J.BUILDING_BLOCK) throw Error("Expected building block");
    return {
      name: t.jsxName,
      tag: `<${t.jsxName} />`,
      tagWithProps: getFeatureFlags().first_draft_share_jsx ? await v(e) : RI(e, {
        skipNodeIds: !0,
        includeDefaultValues: !0,
        includeCustomImageAndIconProps: !0
      })
    };
  };
  let a = e => "FRAME" === e.type && (n6(e.name, "spacer") || n6(e.name, "filler"));
  try {
    let s = function (e) {
      let t = e.toLowerCase();
      return t.includes("mobile") || t.includes("app") ? "mobile" : t.includes("site") ? "website" : "vstack-only";
    }(e);
    if ("vstack-only" === s) return null;
    let o = UN().get(t);
    if (!o || "FRAME" !== o.type) return null;
    for (let e of function e(t) {
      if (t.isPrimaryInstance) return [t];
      if (t.isInstanceSublayer) return [];
      let r = [];
      for (let n of t.childrenNodes) r.push(...e(n));
      return r;
    }(o)) {
      let t = getComponentInfoById(e.symbolId ?? "", {
        enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
      });
      if (!t || t.componentType !== J.BUILDING_BLOCK) return null;
    }
    if ("VERTICAL" === o.stackMode && o.childrenNodes.filter(e => "INSTANCE" === e.type).length >= 3 && o.childrenNodes.every(e => "INSTANCE" === e.type || a(e))) {
      let e = o.childrenNodes.filter(e => "INSTANCE" === e.type);
      let t = await Promise.all(e.map(r));
      return N({
        layoutName: "website" === s ? "DesktopSingleCol" : "MobileSingleCol",
        header: t[0],
        mainContent: t.slice(1, t.length - 1),
        footer: t[t.length - 1]
      });
    }
    if ("VERTICAL" === o.stackMode && 3 === o.childCount && "INSTANCE" === o.childrenNodes[0].type && "FRAME" === o.childrenNodes[1].type && "VERTICAL" === o.childrenNodes[1].stackMode && o.childrenNodes[1].childrenNodes.every(e => "INSTANCE" === e.type || a(e)) && "INSTANCE" === o.childrenNodes[2].type) {
      let e = await r(o.childrenNodes[0]);
      let t = await r(o.childrenNodes[2]);
      let n = o.childrenNodes[1].childrenNodes.filter(e => "INSTANCE" === e.type);
      let i = await Promise.all(n.map(r));
      return N({
        layoutName: "website" === s ? "DesktopSingleCol" : "MobileSingleCol",
        header: e,
        mainContent: i,
        footer: t
      });
    }
    if ("website" === s && "VERTICAL" === o.stackMode && 3 === o.childCount && "INSTANCE" === o.childrenNodes[0].type && "FRAME" === o.childrenNodes[1].type && "HORIZONTAL" === o.childrenNodes[1].stackMode && 2 === o.childrenNodes[1].childCount && o.childrenNodes[1].childrenNodes.every(e => "FRAME" === e.type && "VERTICAL" === e.stackMode && e.childrenNodes.every(e => "INSTANCE" === e.type)) && "INSTANCE" === o.childrenNodes[2].type) {
      let e = await r(o.childrenNodes[0]);
      let t = await r(o.childrenNodes[2]);
      let n = o.childrenNodes[1].childrenNodes[0];
      let i = o.childrenNodes[1].childrenNodes[1];
      if (!n || !i) return null;
      let a = n.absoluteRenderBounds.w < i.absoluteRenderBounds.w;
      let s = a ? i : n;
      let l = a ? n : i;
      let d = l.absoluteRenderBounds.w;
      let c = await Promise.all(s.childrenNodes.map(r));
      let u = await Promise.all(l.childrenNodes.map(r));
      return N({
        layoutName: a ? "DesktopTwoColWithLeftSidebar" : "DesktopTwoColWithRightSidebar",
        header: e,
        mainContent: c,
        footer: t,
        sidebar: {
          width: d,
          blocks: u
        }
      });
    }
  } catch (r) {
    xi("getNodeJSXFromExample", "unhandled error", {
      error: r,
      kitName: e,
      exampleNodeId: t
    });
  }
  return null;
}
export const LQ = $$y0;
export const _ = $$I1;
export const au = $$C2;
export const nX = $$A3;
export const pX = $$S4;
export const tV = $$x5;
export const vg = $$E6;