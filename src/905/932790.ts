import { jsx } from "react/jsx-runtime";
import { $7, Sy, yq, Ao, CN, Wz } from "../figma_app/651866";
import { LI, qk, xK } from "../905/543466";
import { ImageSourceType } from "../905/585727";
import { lQ } from "../905/934246";
import { ServiceCategories } from "../905/165054";
import { ComponentPropsAiCPPBindings } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { Timer } from "../905/609396";
import { reportError } from "../905/11";
import { trackFileEvent } from "../figma_app/314264";
import { IL, Lg, SA, YK, Aq } from "../905/843553";
import { logInfo } from "../905/714362";
import { cortexAPI, StreamAsyncIterator } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { Zr } from "../figma_app/462456";
import { JT } from "../figma_app/632248";
import { pP } from "../figma_app/862289";
import { mg, Xu, zA, SZ } from "../905/987149";
import { Mo } from "../905/913055";
import { b as _$$b } from "../905/776478";
import { dd } from "../figma_app/604494";
import { Jd } from "../figma_app/878113";
import { A as _$$A } from "../905/929620";
import { Vm, ks } from "../figma_app/838407";
import { xS } from "../figma_app/757114";
var S = (e => (e[e.IN_PROGRESS = 0] = "IN_PROGRESS", e[e.CANCELLED = 1] = "CANCELLED", e))(S || {});
let w = atom(new Map());
let C = atom(null, (e, t, i, n, r) => {
  let a = new Map(e(w));
  a.set(i, {
    status: 0,
    requestId: r,
    autoContentNodes: n
  });
  t(w, a);
});
let T = atom(null, (e, t, i) => {
  let n = new Map(e(w));
  n.$$delete(i);
  t(w, n);
});
atom(null, (e, t) => {
  let i = e(w);
  let n = new Map(i);
  for (let [e, t] of i.entries()) 0 === t.status && n.set(e, {
    ...t,
    status: 1
  });
  t(w, n);
});
let k = 0;
async function R(e, t, i, n, a, s, o, d, c, u) {
  let m;
  let f = 0;
  let {
    aiTrackingContext
  } = pP(JT.CONTENT_FILL);
  let C = {
    ..._$$Ay(),
    clientLifecycleId: i
  };
  let T = new Timer();
  T.start();
  let k = await cortexAPI.design.generateTextContentFromExamples({
    v: 0,
    data: s
  }, C);
  for await (let i of (u.timeOfCortexRequest = T.getElapsedTime(), new StreamAsyncIterator(k))) {
    let s = atomStoreManager.get(w).get(n);
    if (!s || s.requestId !== a || s.status === S.CANCELLED || t.signal && t.signal.aborted) return !1;
    if (i.result) {
      if (f < e.length) {
        u.timeToFirstToken = T.getElapsedTime();
        d.numReplaced++;
        let t = e[f];
        let {
          commitId,
          status
        } = $7(t, i.result, o);
        t.textNodes.forEach(e => {
          e.node && e.node.isAlive && c(e.node.guid);
        });
        commitId && (m = commitId);
        status !== Sy.SUCCESS || commitId || reportError(ServiceCategories.AI_PRODUCTIVITY, Error("Content fill missing commit id after successful text replacement"), {
          extra: {
            replaceableNodes: e,
            commitId,
            status
          }
        });
        f++;
      }
    } else if (i.cortex_error) {
      let e = Error();
      e.name = i.cortex_error.type;
      e.message = i.cortex_error.data;
      return e;
    } else if (i.trace) d.trace = i.trace;else if (!i.trace) throw new IL("Received invalid message from Cortex");
  }
  if (m) {
    let e = Zr(m, () => {
      e();
      mg(aiTrackingContext);
    });
  }
  await Promise.all([]);
  return !0;
}
async function N(e, t, i, n, a, s, o, d = !1) {
  let c = {
    completed: !1,
    numReplaced: 0,
    numReplaceableNodes: t.length
  };
  let u = yq(e);
  if (null === u) return c;
  let {
    fieldsToUserInstructions,
    fieldsToValues,
    nodesToSkip
  } = u;
  let {
    setLoadingStateMatchingNode,
    clearLoadingStateMatchingNode,
    clearAllLoadingStates
  } = Xu(t.flatMap(e => e.textNodes.map(e => e.node)));
  t.forEach(e => {
    e.textNodes.forEach(e => {
      setLoadingStateMatchingNode(e.node.guid);
    });
  });
  let E = {
    fieldsToUserInstructions,
    fieldsToValues,
    numToAdd: t.length,
    forceCacheMiss: !0
  };
  void 0 !== o && (E.userPrompt = o);
  d && logInfo("text-generation", "request-params", {
    requestData: E
  });
  let {
    hashKey,
    requestId
  } = function (e) {
    let t = e.join(",");
    let i = ++k;
    atomStoreManager.set(C, t, new Set(e), i);
    return {
      hashKey: t,
      requestId: i
    };
  }(i);
  let O = {
    numReplaced: 0,
    trace: void 0
  };
  try {
    let e = await R(t, n, a, hashKey, requestId, E, nodesToSkip, O, clearLoadingStateMatchingNode, s);
    c.completed = e;
    c.numReplaced = O.numReplaced;
    return c;
  } catch (i) {
    reportError(ServiceCategories.AI_PRODUCTIVITY, i, {
      extra: {
        replaceableNodesLength: t.length,
        exampleNodesLength: e.length
      }
    });
    trackFileEvent("ai_text_gen_request_failed", debugState.getState().openFile?.key, debugState.getState(), {
      error: i,
      requestType: "From examples",
      replaceableNodesLength: t.length,
      exampleNodesLength: e.length
    });
    i.trace = O.trace;
    return i;
  } finally {
    let e = atomStoreManager.get(w).get(hashKey);
    e && e.requestId === requestId && (atomStoreManager.set(T, hashKey), clearAllLoadingStates());
  }
}
async function U(e, t, i, n, s, o, c, u, p) {
  !function (e) {
    if (0 === e.length) throw new IL("No nodes selected");
    let t = e[0].parentNode;
    if (!t) throw new IL("No container node found for AutoContent Node");
    if (ComponentPropsAiCPPBindings?.nodeHasTooManyChildrenForRepeatingContent(t.guid)) throw new Lg();
  }(e);
  let m = 1;
  let h = i;
  let f = !1;
  let A = !1;
  for (; !f && m <= 4;) {
    let i = ComponentPropsAiCPPBindings?.getNumHeaderNodes() ?? 0;
    let y = LI(e, i, h, t, u);
    if (!y) {
      let e = new SA("Can't regenerate text - no selected nodes");
      reportError(ServiceCategories.AI_PRODUCTIVITY, e);
      return e;
    }
    if (!y.continuationNodes.length) throw new SA("Can't regenerate text - no replaceable nodes", {
      reportToSentry: !1
    });
    if (Ao(y.continuationNodes)) throw new Jd();
    for (let i of qk(e, t)) i && i.textData?.characters && c.set(i.guid, i.textData.characters);
    let b = await N(y.exampleNodes, y.continuationNodes, y.guidsForKey, n, s, o, p);
    if (n.signal.aborted || !b.completed) {
      A = !0;
      break;
    }
    if (0 === b.numReplaced && m > 1) {
      let e = new YK("Failed to replace text content in all rows");
      reportError(ServiceCategories.AI_PRODUCTIVITY, e, {
        extra: {
          attempts: m
        }
      });
      return e;
    }
    b.numReplaceableNodes <= b.numReplaced ? f = !0 : (m++, h += b.numReplaced);
  }
  if (m > 4) {
    let e = new YK("Failed to replace text content in all rows after maximum retries");
    reportError(ServiceCategories.AI_PRODUCTIVITY, e, {
      extra: {
        attempts: m,
        max_attempts: 4
      }
    });
    return e;
  }
  return {
    attempt: m,
    cancelled: A
  };
}
export let $$B0 = async ({
  abortController: e,
  params: t,
  clientLifecycleId: i
}) => {
  let l = new Timer();
  l.start();
  let {
    guids,
    numExampleRows,
    source,
    userPrompt
  } = t;
  let v = atomStoreManager.get(dd);
  if (numExampleRows < 0) throw new SA("numExampleRows must be zero or higher");
  if ("DUPLICATE_SESSION_TOAST" === source && guids.length <= 1) throw new Aq("No additional duplicate nodes found");
  let I = (ComponentPropsAiCPPBindings?.getActiveNodeIds() ?? []).map(e => getSingletonSceneGraph().get(e)).filter(e => !!e);
  if (ComponentPropsAiCPPBindings?.imageFillAvailable()) {
    await Promise.all(I.map(async t => (Vm(t.guid, jsx(_$$A, {
      borderRadiusStyle: _$$b(t)
    })), await xS({
      node: t,
      modelType: ImageSourceType.IMAGEN_3,
      clientLifecycleId: i,
      abortController: e
    }).finally(() => ks(t.guid)))));
    return {
      iterationParams: {
        ...t,
        guids: I.map(e => e.guid)
      },
      reset: lQ
    };
  }
  let E = new Map();
  let S = ComponentPropsAiCPPBindings?.isColumnwiseTable() ?? !1;
  let {
    autoContentNodes
  } = xK(I, S);
  let {
    clearAllLoadingStates
  } = Xu(autoContentNodes);
  let T = I.map(e => e.guid);
  let k = 1;
  let R = function (e) {
    let t = {
      x: 0,
      y: 0
    };
    if (0 === e.length) return t;
    if (1 === e.length) return e[0]?.size ?? t;
    let i = e[0]?.parentNode;
    return i?.size ?? t;
  }(I);
  let N = zA().map(e => e?.content);
  let {
    numTextLayers,
    totalNumCharacters
  } = CN(I);
  let V = {
    nodeIds: T,
    numRows: Wz(autoContentNodes, S),
    numColumns: S ? autoContentNodes.length : 1,
    isColumnwiseTable: S,
    hasCustomPrompt: void 0 !== userPrompt,
    hasEditedPrompt: void 0 !== userPrompt && !N.includes(userPrompt),
    source,
    numAttempts: k,
    selectionWidth: R.x,
    selectionHeight: R.y,
    numTextSublayers: numTextLayers,
    numInputCharacters: totalNumCharacters,
    numExampleRows,
    quick_actions_session_id: v,
    clientLifecycleId: i,
    isAutolayoutStack: 1 === I.length && I[0]?.isStack,
    hasImageNodes: SZ(I)
  };
  try {
    trackFileEvent("ai_text_gen_started", debugState.getState().openFile?.key, debugState.getState(), {
      ...V
    });
    let {
      attempt,
      cancelled
    } = await U(autoContentNodes, S, numExampleRows, e, i, V, E, {
      shouldRegenerateDuplicates: !0,
      shouldReplaceFirstExampleRow: "ACTIONS_MENU" === source
    }, userPrompt);
    k = attempt;
    V.timeToCompletion = l.getElapsedTime();
    cancelled ? trackFileEvent("ai_text_gen_cancelled", debugState.getState().openFile?.key, debugState.getState(), {
      ...V
    }) : trackFileEvent("ai_text_gen_completed", debugState.getState().openFile?.key, debugState.getState(), {
      ...V
    });
  } catch (e) {
    V.timeToCompletion = l.getElapsedTime();
    trackFileEvent("ai_text_gen_failed", debugState.getState().openFile?.key, debugState.getState(), {
      error: e,
      ...V
    });
    return e;
  } finally {
    clearAllLoadingStates();
  }
  return {
    iterationParams: {
      ...t,
      guids: T
    },
    reset: () => {
      (function (e) {
        for (let [t, i] of e.entries()) {
          let e = getSingletonSceneGraph().get(t);
          if (e) for (let t of Mo(e, "text-data")) t && t.isAlive && t.visible && !t.locked && permissionScopeHandler.ai("content_fill", () => {
            ComponentPropsAiCPPBindings?.setTextContentOnTextNode(t.guid, i);
          });
        }
      })(E);
      t.nodesFromMagicHandle && function (e) {
        let t = getSingletonSceneGraph();
        for (let i of e) {
          let e = t.get(i);
          if (e) for (let t of Mo(e, "text-data")) t && t.isAlive && permissionScopeHandler.ai("content_fill", () => {
            t.removeSelfAndChildren();
          });
        }
      }(t.nodesFromMagicHandle);
    }
  };
};
export const c = $$B0;
