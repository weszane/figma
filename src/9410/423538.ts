import { useRef, useState, useCallback } from "react";
import { eb } from "../figma_app/257655";
import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { Fullscreen, FirstDraftHelpers } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { reportError } from "../905/11";
import { logWarning } from "../905/714362";
import { p4 } from "../figma_app/412398";
import { t_ } from "../9410/141954";
import { B as _$$B } from "../905/521763";
import { fullscreenValue } from "../figma_app/455680";
import { clearSelection, addToSelection } from "../figma_app/741237";
import { useCurrentFileKey } from "../figma_app/516028";
import { S } from "../figma_app/106763";
import { ce, yh } from "../9410/58505";
import { useIsFullscreenSitesView } from "../905/561485";
import { Vh } from "../9410/671180";
import { _J } from "../9410/483857";
async function E(e = {}) {
  let {
    sleepTime = 100
  } = e;
  await new Promise(e => setTimeout(e, sleepTime));
}
async function* T(e, t = {}) {
  let {
    chunksPerYield = 20,
    useWords = !0
  } = t;
  if (useWords) {
    let r = e.split(" ");
    let n = [];
    for (let e = 0; e < r.length; e += chunksPerYield) {
      n.push(...r.slice(e, e + chunksPerYield));
      await E(t);
      yield n.join(" ");
    }
  } else {
    let r = e.split("");
    let n = [];
    for (let e = 0; e < r.length; e += chunksPerYield) {
      n.push(...r.slice(e, e + chunksPerYield));
      await E(t);
      yield n.join("");
    }
  }
}
export function $$w0() {
  return {
    loadingComponentType: "ComponentLoading",
    shouldGenerateImages: !0
  };
}
export function $$S1(e) {
  return e?.metadata.direct_generation || e?.dsKitKey?.type === "USER_LIBRARY" || e?.dsKitKey?.type === "LOCAL";
}
export function $$j2({
  mockStreamOptions: e,
  onInsertJSXDone: t,
  onAfterInsertPartialJsx: i,
  shouldContinueStream: j,
  clientLifecycleId: k,
  insertType: N
}) {
  let A = useCurrentFileKey();
  let O = useIsFullscreenSitesView();
  let L = useRef(null);
  let R = useRef(void 0);
  let D = useRef(void 0);
  let M = useRef(null);
  let P = useRef(null);
  let [F, B] = useState({
    loaded: 0,
    total: 0
  });
  let {
    insertJSX,
    resetAsync,
    flushPending,
    nodeIdRef,
    imagesTraceRef,
    instrumentationRef,
    userFlowRef,
    themeOverrideMapRef
  } = Vh({
    onAfterInsertPartialJsx: e => {
      if (O && e) {
        let t = getSingletonSceneGraph().get(e);
        t?.isBreakpointFrame && (t?.parentNode?.childrenNodes ?? []).length > 1 && (permissionScopeHandler.ai("first-draft-sites-page-remove", () => {
          t.parentNode?.childrenNodes.filter(e => e.guid !== t.guid).forEach(e => e.removeSelfAndChildren());
        }), setTimeout(() => {
          Fullscreen.triggerAction("goto-layer", {
            args: {
              nodeId: e
            }
          });
        }, 200));
      }
      i?.(e);
    },
    onReset: () => {
      R.current = void 0;
      B({
        loaded: 0,
        total: 0
      });
    },
    onImageProgress: (e, t) => {
      B({
        loaded: e,
        total: t
      });
    },
    shouldContinueStream: j,
    clientLifecycleId: k,
    insertType: N
  });
  let {
    isRunning,
    runPrompt,
    runPromptMocked
  } = function ({
    onPromptOutput: e,
    onBeforeRunPrompt: t,
    onRunPromptSuccess: i,
    onRunPromptError: n,
    shouldContinueStream: a,
    mockStreamOptions: s,
    clientLifecycleId: o
  }) {
    let [l, d] = useState(!1);
    let c = useRef({});
    let u = useCallback(async (r, s) => {
      if (!l) try {
        c.current = {};
        d(!0);
        t?.(s);
        await r(t => {
          e?.(t, s);
          c.current = t;
        }, a);
        await i?.(c.current, s);
      } catch (e) {
        await n?.(e, c.current, s);
        return e;
      } finally {
        d(!1);
      }
    }, [l, t, e, n, i, a]);
    return {
      isRunning: l,
      runPrompt: useCallback(async (e, t) => await u(async (t, i) => {
        await _J(e, t, i, o);
      }, t), [o, u]),
      runPromptMocked: useCallback(async (e, t) => await u(async t => {
        if (await E(s), !e.dsKit) throw Error("dsKit is required in mockedResponse");
        let i = e.dsKit;
        let r = e.theme ?? {};
        let n = e.jsx ?? "";
        for await (let e of (t({
          theme: r
        }), await E(s), T(n, s))) t({
          dsKit: i,
          theme: r,
          jsx: e
        });
        t({
          dsKit: i,
          theme: r,
          jsx: n
        });
      }, t), [u, s])
    };
  }({
    mockStreamOptions: e,
    shouldContinueStream: j,
    clientLifecycleId: k,
    onBeforeRunPrompt: e => {
      if (e.analyticsOptions) {
        let {
          dsKitType,
          isLocal,
          kitKey
        } = I(null, e.insertJSXOptions);
        instrumentationRef.current.start();
        userFlowRef.current?.addContext({
          file_key: A,
          generateId: k,
          clientLifecycleId: k,
          dsKitType,
          isLocal,
          kitKey,
          kitIdentifier: P.current?.metadata.identifier ?? null
        });
        userFlowRef.current?.trackEvent("First Draft: Layout Generation Started", {
          forwardToDatadog: !0,
          batchRequest: !0,
          mlEvent: !0
        });
      }
    },
    onRunPromptSuccess: async (e, i) => {
      if (instrumentationRef.current.trackLastStreamByteReceived(), await flushPending(), e.trace) {
        let t = {
          ...L.current,
          ...e.trace,
          children: [...(L.current?.children ?? []), ...e.trace.children, ...Object.values(imagesTraceRef.current)]
        };
        L.current = t;
      }
      if (j()) {
        let i = eb(e.jsx ?? "");
        if (!e.dsKit && !nodeIdRef.current) throw Error("No dsKit in prompt output");
        if (i && !nodeIdRef.current) throw Error("JSX was present in the prompt output but no node was inserted");
        try {
          await t?.(nodeIdRef.current, themeOverrideMapRef.current, M.current, D.current ?? []);
        } catch (e) {
          reportError(_$$e.AI_GENERATION, e, {
            extra: {
              nodeId: nodeIdRef.current,
              themeOverrideMap: themeOverrideMapRef.current,
              dsKitKey: M.current,
              presets: D.current
            }
          });
        }
      }
      if (i.analyticsOptions) {
        let {
          dsKitType,
          isLocal,
          kitKey
        } = I(e, i.insertJSXOptions);
        userFlowRef.current?.addContext({
          promptOutput: JSON.stringify({
            dsKit: e.dsKit,
            theme: e.theme,
            presets: e.presets
          }),
          timeElapsedMs: Date.now() - i.analyticsOptions.startTime,
          dsKitType,
          isLocal,
          kitKey,
          file_key: A,
          generateId: k,
          clientLifecycleId: k,
          kitIdentifier: P.current?.metadata.identifier ?? null
        });
        j() ? nodeIdRef.current ? (instrumentationRef.current.trackFinished("success"), userFlowRef.current?.addContext({
          nodeId: nodeIdRef.current,
          status: "completed",
          instrumentationData: JSON.stringify(instrumentationRef.current.instrumentationData)
        })) : (instrumentationRef.current.trackFinished("failure"), userFlowRef.current?.addContext({
          status: "failed",
          reason: "empty generation",
          instrumentationData: JSON.stringify(instrumentationRef.current.instrumentationData)
        })) : (instrumentationRef.current.trackFinished("stopped"), userFlowRef.current?.addContext({
          nodeId: nodeIdRef.current,
          status: "failed",
          reason: "stopped",
          instrumentationData: JSON.stringify(instrumentationRef.current.instrumentationData)
        }));
        userFlowRef.current?.end();
        userFlowRef.current?.trackEvent("First Draft: Layout Generation Ended", {
          forwardToDatadog: !0,
          batchRequest: !0,
          mlEvent: !0
        });
      }
    },
    onRunPromptError: (e, t, i) => {
      instrumentationRef.current.trackFinished("failure");
      t.trace && (L.current = {
        ...L.current,
        ...t.trace
      });
      let {
        dsKitType,
        isLocal,
        kitKey
      } = I(t, i.insertJSXOptions);
      let o = {
        promptOutput: JSON.stringify({
          dsKit: t.dsKit ?? {},
          jsx: t.jsx ?? "",
          theme: t.theme ?? {}
        }),
        error: e.toString(),
        timeElapsedMs: Date.now() - (i.analyticsOptions?.startTime ?? 0),
        dsKitType,
        isLocal,
        kitKey,
        file_key: A,
        clientLifecycleId: k,
        kitIdentifier: P.current?.metadata.identifier ?? null
      };
      let l = reportError(_$$e.AI_GENERATION, e, {
        extra: o
      });
      userFlowRef.current?.addContext({
        ...o,
        status: "failed",
        reason: "error",
        nodeId: nodeIdRef.current,
        sentryEventId: l
      });
      userFlowRef.current?.trackEvent("First Draft: Layout Generation Ended", {
        forwardToDatadog: !0,
        batchRequest: !0,
        mlEvent: !0
      });
    },
    onPromptOutput: (e, t) => {
      if (instrumentationRef.current.trackFirstByteReceived(), e.dsKit) {
        if (e.dsKit.isLocal) {
          let e = t.insertJSXOptions.dsKitKey;
          M.current = {
            type: "LOCAL",
            pageId: e.pageId
          };
        } else e.dsKit.isDirectGenLibrary ? M.current = {
          type: "USER_LIBRARY",
          key: e.dsKit.kitKey
        } : M.current = {
          type: "1P_LIBRARY",
          key: e.dsKit.kitKey
        };
        if (!R.current && e.theme && (R.current = t_(e.theme, {
          generateId: k
        })), !D.current && e.presets && (D.current = e.presets), e.jsx) return insertJSX({
          jsxStr: e.jsx,
          options: {
            ...t.insertJSXOptions,
            theme: R.current,
            dsKitKey: M.current
          }
        });
      }
    }
  });
  let Z = _$$B();
  let Q = useCallback(async e => {
    "LOCAL" === e.dsKitKey.type && A && (await p4(A, e, Z));
  }, [A, Z]);
  let $ = useCallback(async (e, t, i) => {
    let r;
    let n = e.prompt;
    if (isRunning) return {
      nodeId: null,
      success: !0
    };
    await resetAsync();
    let {
      designSystem
    } = t;
    P.current = designSystem;
    try {
      designSystem && (await Q(designSystem));
    } catch (e) {
      reportError(_$$e.AI_GENERATION, e);
      return {
        nodeId: null,
        success: !1,
        error: e
      };
    }
    let h = function (e, t) {
      if (!t) return {
        userPrompt: e
      };
      if ("LOCAL" !== t.dsKitKey.type) return {
        userPrompt: e,
        kitKey: t.dsKitKey.key,
        isLocal: !1,
        isDirectGenerationCompatible: t.metadata?.direct_generation
      };
      let i = FirstDraftHelpers.getKitKey(t.dsKitKey.pageId);
      if (!i) throw Error("Failed to get a kitKey for local kit");
      return {
        userPrompt: e,
        kitKey: i,
        isLocal: !0,
        isDirectGenerationCompatible: t.metadata?.direct_generation
      };
    }(n, designSystem);
    let m = null;
    if (t.selectedNodeIds && t.selectedNodeThumbnailsCache && t.selectedNodeIds.length > 0) {
      let i = t.selectedNodeIds.map(e => getSingletonSceneGraph().get(e)).filter(isNotNullish);
      i.length !== t.selectedNodeIds.length && logWarning("first-draft", "Some selected nodes were not found", {
        selectedNodeIds: t.selectedNodeIds,
        selectedNodes: i
      });
      m = ce(i);
      h.extraMessagesFigmateOnly = await yh(i, t.selectedNodeThumbnailsCache, e.attachmentMetadata);
    }
    let _ = {};
    if (O) {
      let e = getSingletonSceneGraph().getCurrentPage();
      if (e) {
        let t = 1 === e.childCount && e.childrenNodes[0].isResponsiveSet && 1 === e.childrenNodes[0].childCount && e.childrenNodes[0].childrenNodes[0].isBreakpointFrame && 0 === e.childrenNodes[0].childrenNodes[0].childCount;
        let i = null;
        t ? (clearSelection(), S("panel"), addToSelection([e.childrenGuids[0]])) : permissionScopeHandler.ai("first-draft-sites-page-create", () => {
          Fullscreen.createResponsiveSet(null);
        });
        i = getSingletonSceneGraph().get(Fullscreen.getFirstSelectedNodeIdForCurrentPage());
        _.parentNodeId = i?.guid;
        _.createNewSitesWebpage = !0;
        _.frameName = "Primary";
      }
    }
    try {
      instrumentationRef.current.start();
      await runPrompt(h, {
        insertJSXOptions: {
          frameName: n,
          imageArgs: {
            initialUserPrompt: n
          },
          ...$$w0(),
          ...i,
          ...(m ? {
            componentNameToInfo: {
              ...m,
              ...i.componentNameToInfo
            }
          } : {}),
          ..._,
          sharedPluginData: {
            userPrompt: n,
            ...i.sharedPluginData
          },
          dsKitKey: designSystem?.dsKitKey,
          directGeneration: $$S1(designSystem)
        },
        analyticsOptions: {
          startTime: instrumentationRef.current.startTime,
          clientLifecycleId: k
        }
      });
    } catch (e) {
      r = e;
    }
    let b = nodeIdRef.current;
    if (await resetAsync(), b && !getSingletonSceneGraph().get(b)) throw Error("Failed to insert node");
    fullscreenValue.commit();
    return {
      nodeId: b,
      success: !r,
      error: r
    };
  }, [isRunning, resetAsync, runPrompt, nodeIdRef, k, Q, O, instrumentationRef]);
  return {
    submitPromptMocked: useCallback(async (e, t) => {
      if (isRunning) return {
        nodeId: null,
        success: !0
      };
      await resetAsync();
      await runPromptMocked(e, {
        insertJSXOptions: {
          ...$$w0(),
          ...t,
          imageArgs: {
            initialUserPrompt: "website"
          }
        },
        analyticsOptions: null
      });
      let i = nodeIdRef.current;
      await resetAsync();
      return {
        nodeId: i,
        success: !0
      };
    }, [isRunning, resetAsync, runPromptMocked, nodeIdRef]),
    submitPrompt: $,
    isRunning,
    executionTrace: L.current,
    imageProgress: F
  };
}
function I(e, t) {
  let i = t.dsKitKey;
  let r = i?.type ?? "AUTO";
  let n = i?.type === "LOCAL" || e?.dsKit?.isLocal;
  let a = i ? "key" in i ? i.key : i.pageId : e?.dsKit?.kitKey ?? null;
  return {
    dsKitOption: i,
    dsKitType: r,
    isLocal: n,
    kitKey: a
  };
}
export const Dp = $$w0;
export const WX = $$S1;
export const TM = $$j2;