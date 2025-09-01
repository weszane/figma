import { hV } from "../figma_app/387100";
import { zl } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { Ay } from "../905/931912";
import { G } from "../figma_app/714966";
import { $z } from "../905/62762";
import { EA } from "../905/18800";
import { GS } from "../figma_app/314264";
import { Nt } from "../figma_app/342355";
import { a as _$$a } from "../905/882689";
export function $$m2(e, t, i) {
  GS("mcp.client_tool_call_duration_split", debugState.getState().openFile?.key || "", debugState.getState(), {
    operation: e,
    durationMs: Math.round(t),
    toolName: i
  });
}
export function $$h1({
  store: e,
  startingNode: t,
  codeSyntax: i,
  responseSize: r,
  toolArgs: a,
  toolName: s,
  codeConnectMapping: o
}) {
  let l = {
    numComponents: 0,
    numInstances: 0,
    numVariables: 0,
    numChildren: 0,
    nodeType: t.type,
    colorVariablesUsed: 0,
    effectStylesUsed: 0,
    framesWithAutoLayout: 0,
    framesWithGridLayout: 0,
    responseSize: r,
    nodesWithCodeConnect: 0,
    numHiddenNodes: 0,
    isComponentSet: !1,
    nodesWithCodeConnectV1: 0,
    nodesWithCodeConnectLibrary: 0,
    nodesWithCodeConnectSnippet: 0,
    nodesWithAnnotations: 0
  };
  let d = new Map();
  hV(t, (e) => {
    let t;
    if (!e.visible) {
      l.numHiddenNodes += 1;
      return;
    }
    if (e.annotations && e.annotations.length > 0 && (l.nodesWithAnnotations += 1), "SYMBOL" === e.type ? l.numComponents += 1 : "INSTANCE" === e.type && (l.numInstances += 1), e.isStateGroup && (l.isComponentSet = !0), "FRAME" === e.type && (["HORIZONTAL", "VERTICAL"].includes(e.stackMode) && (l.framesWithAutoLayout += 1), "GRID" === e.stackMode && (l.framesWithGridLayout += 1)), "FRAME" === e.type && ["HORIZONTAL", "VERTICAL"].includes(e.stackMode) && (l.framesWithAutoLayout += 1), e.boundVariables && _$$a(e, i).forEach((e) => {
      e && null !== e.value && d.set(e.codeSyntaxName || e.name, e.type);
    }), e.childrenNodes && (l.numChildren += e.childrenNodes.length), e.id in o) {
      let t = o[e.id];
      t && (l.nodesWithCodeConnect += 1, t.snippet && (l.nodesWithCodeConnectSnippet += 1), "figmadoc" === t.version && (l.nodesWithCodeConnectV1 += 1), "component_browser" === t.version && (l.nodesWithCodeConnectLibrary += 1));
    }
    t = 0;
    e.effects && e.effects.length > 0 && (t = e.effects.filter((e) => e.visible).length);
    let {
      effectStylesUsed
    } = {
      effectStylesUsed: t
    };
    l.effectStylesUsed += effectStylesUsed;
  });
  l.numVariables = d.size;
  d.forEach((e, t) => {
    "color" === e && (l.colorVariablesUsed += 1);
  });
  GS("mcp.client_tool_call_completed", e.getState().openFile?.key || "", e.getState(), {
    toolArgs: JSON.stringify(a),
    currentSelection: JSON.stringify(Object.keys(e.getState().mirror.sceneGraphSelection)),
    rawToolName: s,
    toolName: s,
    clientLanguages: a?.clientLanguages,
    clientFrameworks: a?.clientFrameworks,
    ...l,
    ...Nt()
  });
}
export function $$g0(e) {
  let t = zl.get(EA);
  $z({
    canUseCookieForAnalytics: t,
    geofence: {}
  }) && Ay.sendMessage({
    type: G.Call,
    content: {
      args: ["track", "mcp_tool_used", {
        toolName: e
      }]
    }
  });
}
export const CX = $$g0;
export const Kl = $$h1;
export const w6 = $$m2;