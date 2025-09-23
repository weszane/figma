import { jsxs, jsx } from "react/jsx-runtime";
import { xb } from "../figma_app/651866";
import { CortexError } from "../figma_app/691470";
import { ServiceCategories as _$$e } from "../905/165054";
import { Fullscreen, TextModificationAction } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, useAtomValueAndSetter } from "../figma_app/27355";
import { oy } from "../figma_app/964367";
import { debugState } from "../905/407919";
import { Timer } from "../905/609396";
import { reportError, setTagGlobal } from "../905/11";
import g, { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { on, Gc } from "../figma_app/456871";
import { trackFileEvent } from "../figma_app/314264";
import { StreamAsyncIterator } from "../figma_app/432652";
import { Ay, Gx } from "../figma_app/948389";
import { fullscreenValue } from "../figma_app/455680";
import { Mo, i2 } from "../905/913055";
import { Zr } from "../figma_app/462456";
import { JT } from "../figma_app/632248";
import { pP, z8, RL } from "../figma_app/862289";
import { dd, Q8, F3, DZ } from "../figma_app/604494";
import { B } from "../905/222272";
import { SZ, zA, Xu, mg } from "../905/987149";
export class $$O4 extends Error {
  constructor(e) {
    super();
    this.message = e;
  }
}
export class $$R3 extends Error {
  constructor() {
    super();
    this.reportToSentry = !1;
    this.name = "TooManyTextLayersError";
    this.message = "Too many text layers";
  }
}
export class $$L7 extends Error {
  constructor() {
    super();
    this.reportToSentry = !1;
    this.name = "NoTextCharactersFoundError";
    this.type = "no_text_characters_found";
  }
}
export class $$P2 extends Error {
  constructor() {
    super();
    this.reportToSentry = !1;
    this.name = "MissingFontsError";
    this.message = "Missing Fonts";
  }
}
export async function $$D6(e, t = 100) {
  let r = getSingletonSceneGraph().get(e.findContainingTopLevelFrameOrSelf());
  return r ? (await oy(r, {
    includeIDs: !0,
    excludeImageData: !0,
    excludeVectorData: !0,
    includeNames: !0,
    ignoreFetchingComponentData: !0,
    includeNodeTypes: ["RECTANGLE", "ROUNDED_RECTANGLE", "TEXT", "FRAME", "GROUP", "INSTANCE"],
    fieldGroups: [],
    strict: !1,
    includeInstanceSublayers: !0,
    ignoreDeveloperFriendlyIds: !0,
    focusNodeId: e.guid,
    maxSerializeNodes: t
  })).jsxStr : Promise.resolve("");
}
let k = async ({
  params: e,
  abortController: t,
  onTasksUpdate: r,
  clientLifecycleId: n
}) => {
  await $$M0({
    params: {
      ...e,
      clientLifecycleId: n
    },
    abortController: t,
    onTasksUpdate: r
  });
};
export async function $$M0({
  params: e,
  abortController: t,
  onTasksUpdate: r
}) {
  let n;
  let p = new Timer();
  p.start();
  let {
    state,
    makeCortexRequest,
    clientLifecycleId,
    featureType,
    excludeDigitsAndSpecialChar,
    onNodeStreamEvent,
    onError,
    onSuccess,
    editScopeLabel
  } = e;
  let {
    targets,
    parameters,
    selection,
    activeNodes
  } = g;
  let {
    aiTrackingContext
  } = pP(featureType);
  let W = debugState.getState();
  let K = W.openFile?.key;
  let Y = atomStoreManager.get(dd);
  let $ = targets.reduce((e, t) => e + t.effectiveText.length, 0);
  let X = {
    numLayers: targets.length,
    numInputCharacters: $,
    numLayersAdjusted: 0,
    numDeltasHallucinated: 0,
    featureType,
    quick_actions_session_id: Y,
    clientLifecycleId
  };
  if (featureType === JT.CONTENT_FILL) {
    let e = SZ(activeNodes);
    let t = zA().map(e => e?.content);
    X = {
      ...X,
      nodeIds: activeNodes.map(e => e.guid),
      hasCustomPrompt: parameters?.prompt !== void 0,
      hasEditedPrompt: parameters?.prompt !== void 0 && !t.includes(parameters?.prompt),
      source: "ACTIONS_MENU",
      hasImageNodes: e
    };
  }
  parameters && "prompt" in parameters && parameters.prompt && "string" == typeof parameters.prompt && (X.promptLength = parameters.prompt.length);
  parameters && "language" in parameters && parameters.language && "string" == typeof parameters.language && (X.language = parameters.language);
  trackFileEvent("ai_text_tools_started", K, W, X);
  let q = e => (onError?.(e), e);
  let J = e => {
    X.timeToCompletion = p.getElapsedTime();
    trackFileEvent("ai_text_tools_failed", K, W, {
      ...X,
      error: e
    });
  };
  if (targets.length > 100) {
    let e = new $$R3();
    J(e);
    return q(e);
  }
  if (excludeDigitsAndSpecialChar && 0 === targets.length) {
    let e = new $$L7();
    J(e);
    return q(e);
  }
  if (0 === targets.length) {
    trackFileEvent("ai_text_tools_complete", K, W, X);
    onSuccess?.(parameters);
    return;
  }
  let Z = [];
  let Q = new Map();
  let ee = [];
  if (featureType === JT.CONTENT_FILL) {
    let e = new Timer();
    e.start();
    let t = targets.map(e => e.node);
    let r = await xb(t);
    e.stop();
    r && (n = r);
    X.timeOfSerialization = e.getElapsedTime();
  }
  for (let e of targets) {
    let t = (Q.size + 1).toString();
    let {
      node,
      effectiveText
    } = e;
    if (node.hasMissingFont) Z.push({
      taskId: e.node.guid,
      state: z8.FAILED,
      error: new $$P2()
    });else {
      let i = {
        id: t,
        text: effectiveText
      };
      i.guid = node.guid;
      ee.push(i);
      Q.set(t, e);
      Z.push({
        taskId: e.node.guid,
        state: z8.INCOMPLETE
      });
    }
  }
  if (r && r(Z), 0 !== Z.length && Z.every(e => e.state === z8.FAILED && e.error instanceof $$P2)) {
    let e = new $$P2();
    J(e);
    return q(e);
  }
  let {
    setLoadingStateMatchingNode,
    clearLoadingStateMatchingNode,
    clearAllLoadingStates
  } = Xu(Z.map(e => getSingletonSceneGraph().get(e.taskId)).filter(e => !!e));
  for (let e of Z) {
    let t = getSingletonSceneGraph().get(e.taskId);
    t && setLoadingStateMatchingNode(t.guid);
  }
  let ei = null;
  try {
    let e;
    let i = new Timer();
    i.start();
    let a = {
      ...Ay(),
      clientLifecycleId
    };
    if (ei = await makeCortexRequest({
      texts: ee,
      parameters,
      authInfo: a,
      jsonMode: !0,
      targetMap: Q,
      surroundingContext: n
    }), i.stop(), X.timeOfCortexRequest = i.getElapsedTime(), t.signal.aborted || !getSingletonSceneGraph().getCurrentPage()) return;
    let u = new StreamAsyncIterator(ei);
    let _ = new Map();
    let g = !0;
    let A = getFeatureFlags().aip_text_undo_midstream_fix;
    for await (let {
      delta,
      id
    } of u) {
      let a;
      if (t.signal.aborted) return;
      if (1 === Q.size) a = Q.values().next().value;else {
        if (!id) throw q(new $$O4("Missing ID in response from Cortex"));
        a = Q.get(id);
      }
      if (X.timeToFirstToken = p.getElapsedTime(), !a) {
        X.numDeltasHallucinated++;
        continue;
      }
      if (!a.node.isAlive) continue;
      Z = Z.map(e => e.taskId === a.node.guid ? {
        ...e,
        state: z8.SUCCEEDED
      } : e);
      clearLoadingStateMatchingNode(a.node.guid);
      r && r(Z);
      let s = a.selectionRange?.start ?? 0;
      let c = a.selectionRange?.end ?? a.node.characters.length;
      let u = a.node;
      _.has(a) || (permissionScopeHandler.ai(editScopeLabel, () => {
        for (let e of Mo(u, "text-data")) {
          c > e.characters.length && (c = e.characters.length);
          e.spliceCharacters(s, c, "", "BEFORE");
          onNodeStreamEvent?.({
            eventType: "BEFORE_STREAM_START",
            node: e
          });
        }
      }), _.set(a, s));
      let h = _.get(a);
      permissionScopeHandler.ai(editScopeLabel, () => {
        if (delta && u) {
          var r;
          if (A && (r = a, u.characters === r.effectiveText && u.characters.length !== h)) {
            t.abort();
            return;
          }
          for (let e of Mo(u, "text-data")) {
            e.spliceCharacters(h, h, delta, "BEFORE");
            onNodeStreamEvent?.({
              eventType: "AFTER_STREAM_CHUNK",
              node: e
            });
          }
          _.set(a, h + delta.length);
          X.numLayersAdjusted = _.size;
          a.selectionRange ? getSingletonSceneGraph().getCurrentPage()?.setSelectedTextRange(a.node.guid, a.selectionRange.start, h + delta.length) : 1 === targets.length && 1 === selection.length && $$U8(u.guid);
          A && (g ? (Fullscreen?.requestNextCommitMergeWithPrevious(TextModificationAction.AI_TEXT_MANIPULATION_START), g = !1) : Fullscreen?.requestNextCommitMergeWithPrevious(TextModificationAction.AI_TEXT_MANIPULATION_DELTA), e = fullscreenValue.commit());
        }
      });
    }
    A || (e = fullscreenValue.commit());
    let N = Z.filter(e => e.state === z8.FAILED);
    if (N.length > 0 && N[0].state === z8.FAILED) throw q(N[0].error);
    if (X.timeToCompletion = p.getElapsedTime(), trackFileEvent("ai_text_tools_complete", K, W, X), onSuccess?.(parameters), e) {
      let t = Zr(e, () => {
        t();
        mg(aiTrackingContext);
      });
    } else reportError(_$$e.AI_PRODUCTIVITY, Error("Text tools commit failed unexpectedly"));
  } catch (t) {
    clearAllLoadingStates();
    Z = Z.map(e => e.state !== z8.SUCCEEDED ? {
      ...e,
      state: z8.FAILED,
      error: t
    } : e);
    r && r(Z);
    let e = t;
    featureType === JT.SLIDES_REWRITE_TEXT && t instanceof CortexError && (e = Gx(t));
    "reportToSentry" in e && !e.reportToSentry || (setTagGlobal("text_feature_type", X.featureType), reportError(_$$e.AI_PRODUCTIVITY, e, {
      extra: {
        ...X,
        numberOfNodes: targets.length
      }
    }));
    J(e);
    return q(e);
  } finally {
    X.timeToCompletion = p.getElapsedTime();
    p.stop();
    t.signal.aborted && trackFileEvent("ai_text_tools_cancelled", K, W, X);
    clearAllLoadingStates();
    ei?.cancel();
  }
}
export function $$F1({
  makeCortexRequest: e,
  featureType: t,
  allowEmptyTextNodes: r = !1,
  allowEditsToLockedNodes: n = !1,
  excludeDigitsAndSpecialChar: i = !1,
  onNodeStreamEvent: a,
  onError: s,
  onSuccess: o,
  editScopeLabel: c = "adjust-text"
}) {
  let p = RL(t, k);
  let {
    start,
    stop
  } = p;
  let [, m] = useAtomValueAndSetter(Q8);
  let [g, f] = useAtomValueAndSetter(F3);
  let [y, b] = useAtomValueAndSetter(DZ);
  function T() {
    permissionScopeHandler.ai(c, () => {
      if (g) {
        let e = getSingletonSceneGraph().getCurrentPage();
        for (let {
          node,
          nodeText,
          selectionRange
        } of g.targets) if (node.isAlive) {
          for (let e of Mo(node, "text-data")) e.characters = nodeText;
          if (selectionRange) {
            let {
              start,
              end
            } = selectionRange;
            e?.setSelectedTextRange(node.guid, start, end);
          }
        }
        e && g.selection.length > 1 && (e.directlySelectedNodes = g.selection);
      }
    });
  }
  return {
    resetText: T,
    restoreSelection: function () {
      let e = getSingletonSceneGraph().getCurrentPage();
      e && g && g.selection.length > 1 && (e.directlySelectedNodes = g.selection);
    },
    lastParameters: y,
    onRun: async function (l) {
      let u = i2();
      let p = {
        targets: on(u, {
          allowEmpty: r,
          excludeDigitsAndSpecialChar: i,
          excludeLockedNodes: !n,
          excludeStickyAuthor: !0
        }),
        parameters: l,
        selection: getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes ?? [],
        activeNodes: u
      };
      m("");
      f(p);
      b(l);
      await start({
        state: p,
        makeCortexRequest: e,
        featureType: t,
        excludeDigitsAndSpecialChar: i,
        onNodeStreamEvent: a,
        onError: s,
        onSuccess: o,
        editScopeLabel: c
      });
    },
    cancel: function () {
      stop();
      T();
    },
    longRunningAction: p,
    lastRun: g
  };
}
export function $$j5(e, t) {
  let {
    onlyAllowSingular,
    allowEmptyText
  } = t;
  let a = i2();
  let s = getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes;
  let o = t.instruction ?? renderI18nText("ai_text_tools.selection_instruction");
  if (onlyAllowSingular && a && (0 === a.length || a.length > 1 || "TEXT" !== a[0].type)) return o;
  if (a?.length === 0 && s && s?.length > 0) return renderI18nText("fullscreen_actions.ai_content_fill.select_items_in_one_breakpoint");
  let l = Gc(a, {
    allowEmpty: !0,
    excludeLockedNodes: !0
  });
  if (0 === l.length) return o;
  let c = l.reduce((e, t) => e + t.characters.length, 0);
  if (0 === c && !allowEmptyText) return o;
  if (c > 4e4) return jsxs(B, {
    gap: 8,
    children: [jsx("span", {
      className: cssBuilderInstance.textBodyMediumStrong.$,
      children: renderI18nText("ai_text_tools.select_fewer_characters")
    }), jsx("span", {
      className: cssBuilderInstance.textBodyMedium.colorTextSecondary.$,
      children: `${c.toLocaleString()} / ${4e4.toLocaleString()}`
    })]
  });
  if (e?.length && a?.length && t.onlyAllowSingleTLF) {
    let t = e[0]?.findContainingTopLevelFrameOrSelf();
    for (let r of e ?? []) if (t !== r.findContainingTopLevelFrameOrSelf()) return renderI18nText("fullscreen_actions.ai_content_fill.select_items_in_same_tlf");
  }
  return o;
}
export function $$U8(e) {
  let t = getSingletonSceneGraph().getCurrentPage();
  let r = t?.directlySelectedNodes[0]?.guid;
  t && r === e && t.setSelectionToSingleNode(e);
}
export const GD = $$M0;
export const Hd = $$F1;
export const Jd = $$P2;
export const Vz = $$R3;
export const ay = $$O4;
export const bu = $$j5;
export const k4 = $$D6;
export const n4 = $$L7;
export const y_ = $$U8;