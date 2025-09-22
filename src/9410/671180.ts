import { jsx, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useCallback } from "react";
import { yT, eb, Kf, BW, JF, sw } from "../figma_app/257655";
import { CortexError, getErrorStatus } from "../figma_app/691470";
import { ServiceCategories as _$$e } from "../905/165054";
import { DraftState } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { useDebouncedCallback } from "use-debounce";
import { sendBatchedHistograms } from "../905/485103";
import { observabilityClient } from "../905/602906";
import { reportError, NU } from "../905/11";
import { logDebug } from "../905/714362";
import { f as _$$f } from "../9410/885134";
import { OJ, Ms, D9, fE, RY, oT } from "../figma_app/566517";
import { pK } from "../9410/215872";
import { Mb } from "../9410/483857";
import { ks, Vm } from "../figma_app/838407";
export function $$C0(e) {
  return new yT({
    dsKitKey: e.dsKitKey,
    publishedComponentToInsertResult: e.componentNameToInsertResult ?? {},
    componentInfoByName: e.componentNameToInfo ?? {},
    options: {
      enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays,
      shareJSX: !!getFeatureFlags().first_draft_share_jsx,
      useAllComponents: !!getFeatureFlags().first_draft_publish_all_components,
      onError: (e, t) => {
        reportError(_$$e.AI_GENERATION, e, t);
      }
    }
  });
}
async function v(e, t, i = {}) {
  let r;
  let n = eb(e.jsxStr);
  let s = n && "" !== n ? n : e.jsxStr;
  if ((i.prevJsxStr ?? "") === s) return {};
  if (!i.prevNodeId && i.prevJsxJSON && i.prevJsxJSON.length > 0) throw Error("prevJsxJSON should be null");
  let l = await Kf(s);
  if (!l) return {};
  await i.onBeforeInsertJSX?.(l);
  let d = {
    prevNodeId: i.prevNodeId,
    isIncomplete: !function (e) {
      let t = e.match(/<([^\/\s>]+)[^>]*>/);
      let i = e.match(/<\/([^>]+)>/g)?.pop();
      return !!t && !!i && t[1] === i.replace("</", "").replace(">", "");
    }(s),
    autoFillParent: !0,
    insertBehavior: "viewport-ease",
    shouldGenerateImages: !0,
    ...e.options
  };
  let u = $$C0(d);
  t.resetComponentStats();
  let p = await BW(l, u, t, {
    directGen: !!d.directGeneration,
    showUnhandled: !!getFeatureFlags().first_draft_debug,
    useShareJSX: !!getFeatureFlags().first_draft_share_jsx
  });
  if (0 === p.length) return {};
  try {
    r = JF(p);
  } catch (t) {
    let e = {
      elements: p.length
    };
    reportError(_$$e.AI_GENERATION, t, e);
    return {};
  }
  let {
    insertNodeIds,
    customizationResult
  } = await _$$f({
    jsxStr: s,
    jsxElement: r,
    prevExpandedJsx: i.prevExpandedJsx ?? [],
    customJsxElementRegistry: u,
    options: d
  }, t);
  return {
    insertNodeIds,
    customizationResult,
    jsxStr: s,
    jsxJSON: l,
    expandedJsx: p
  };
}
export function $$E1({
  onAfterInsertPartialJsx: e,
  onReset: t,
  onImageProgress: i,
  shouldContinueStream: g,
  clientLifecycleId: C,
  insertType: E
}) {
  let T = useRef({});
  let w = useRef(null);
  let S = useRef({});
  let j = useRef({});
  let I = useRef({});
  let k = useRef(new sw(E || "generate", sendBatchedHistograms));
  let N = useRef(null);
  useEffect(() => {
    N.current = observabilityClient.startUserFlow({
      name: "first_draft_generate",
      team: _$$e.AI_GENERATION
    });
  }, []);
  let A = useCallback(async t => {
    try {
      let i = N.current?.startDuration("first_draft_insert_jsx");
      T.current.isRunning = !0;
      T.current.donePromise = (async () => {
        try {
          let e = {
            jsxStrLength: t.jsxStr?.length,
            options: {
              parentNodeId: t.options.parentNodeId,
              isIncomplete: t.options.isIncomplete,
              prevNodeId: t.options.prevNodeId
            },
            clientLifecycleId: C
          };
          let n = {
            ...e,
            jsxStr: t.jsxStr
          };
          logDebug("first-draft", "Inserting Streamed JSX Updates", e, {
            createSentryBreadcrumb: !0,
            logToConsole: NU.NEVER
          });
          logDebug("first-draft", "Inserting Streamed JSX Updates", n, {
            createSentryBreadcrumb: !1
          });
          T.current.doneTextLayerIds = T.current.doneTextLayerIds || new Set();
          T.current.componentNameToInfo = {
            ...T.current.componentNameToInfo,
            ...t.options.componentNameToInfo
          };
          T.current.componentNameToInsertResult = T.current.componentNameToInsertResult || {};
          let {
            insertNodeIds,
            customizationResult,
            jsxJSON,
            jsxStr,
            expandedJsx
          } = await v({
            ...t,
            options: {
              ...t.options,
              componentNameToInsertResult: T.current.componentNameToInsertResult,
              componentNameToInfo: T.current.componentNameToInfo,
              shouldAnimateLoading: getFeatureFlags().first_draft_animations,
              doneTextLayerIds: T.current.doneTextLayerIds,
              clientLifecycleId: C
            }
          }, k.current, {
            prevNodeId: w.current,
            prevJsxStr: T.current.jsxStr,
            prevJsxJSON: T.current.jsxJSON,
            prevExpandedJsx: T.current.expandedJsx,
            onBeforeInsertJSX: async e => {
              await pK({
                jsxJSON: e,
                dsKitKey: t.options.dsKitKey,
                componentNameToInsertResult: T.current.componentNameToInsertResult ?? {}
              });
            }
          });
          if (i?.addContext({
            hasJson: void 0 !== jsxJSON,
            insertNodeIdsLength: insertNodeIds?.length
          }), i?.stop(), !insertNodeIds) {
            if (void 0 === jsxJSON) return;
            throw Error("Failed to insert any nodes");
          }
          if (insertNodeIds.length > 1) throw Error("Expected at most one node to be inserted");
          OJ(insertNodeIds[0]);
          w.current !== insertNodeIds[0] && (w.current && ks(w.current), Vm(insertNodeIds[0], jsx(Fragment, {}), {
            overflowHidden: !0
          }));
          w.current = insertNodeIds[0];
          S.current = {
            ...S.current,
            ...(customizationResult?.themeOverrideMap ?? {})
          };
          T.current.jsxStr = jsxStr;
          T.current.jsxJSON = jsxJSON;
          T.current.expandedJsx = expandedJsx;
          T.current.queuedEffects = T.current.queuedEffects || {};
        } catch (e) {
          reportError(_$$e.AI_GENERATION, e instanceof Error ? e : Error(e));
          w.current && !getSingletonSceneGraph().get(w.current) && (w.current = null, T.current.jsxStr = void 0, T.current.jsxJSON = void 0, T.current.expandedJsx = void 0);
        }
        try {
          if (w.current) {
            if (t.options?.shouldGenerateImages) {
              if (t.options.imageArgs) Ms({
                containingNodeId: w.current,
                queuedEffects: T.current.queuedEffects,
                shouldContinueStream: g,
                imagesTrace: I.current,
                jsxJSON: T.current.jsxJSON,
                initialUserPrompt: t.options.imageArgs?.initialUserPrompt || "",
                clientLifecycleId: C,
                instrumentationRef: k
              });else throw Error("Tried to generate images without image args");
            }
            D9(w.current, T.current.queuedEffects, t.options);
            getFeatureFlags().first_draft_direct_gen || fE({
              containingNodeId: w.current
            });
            e?.(w.current);
          }
        } catch (e) {
          reportError(_$$e.AI_GENERATION, e instanceof Error ? e : Error(e));
        }
      })();
      await T.current.donePromise;
      T.current.insertAgainWhenDone && (logDebug("first-draft", "Re-Inserting JSX Updates (Immediate)", {
        jsxStrLength: T.current.lastArgs?.jsxStr?.length,
        options: {
          parentNodeId: T.current.lastArgs?.options.parentNodeId,
          isIncomplete: T.current.lastArgs?.options.isIncomplete,
          prevNodeId: T.current.lastArgs?.options.prevNodeId
        }
      }), T.current.insertAgainWhenDone = !1, await A(T.current.lastArgs));
    } finally {
      T.current.isRunning = !1;
    }
  }, [e, g, C]);
  let O = useDebouncedCallback(A, 500, {
    leading: !0,
    maxWait: 1e3
  });
  let L = useCallback(async () => {
    await N.current?.measureDurationAsync("flushPending", async () => {
      for (O.isPending() && (await O.flush()); T.current.isRunning;) {
        T.current.donePromise && (await T.current.donePromise);
        await Mb(10);
      }
      let e = T.current.queuedEffects ?? {};
      (await Promise.allSettled(Array.from(Object.values(e)))).forEach(e => {
        "rejected" !== e.status || e.reason instanceof CortexError && 500 > getErrorStatus(e.reason) || reportError(_$$e.AI_GENERATION, e.reason);
      });
    });
  }, [O]);
  let R = useCallback(async () => {
    try {
      await L();
    } finally {
      if (t?.(), w.current && (ks(w.current), RY(w.current)), T.current.lastArgs) {
        let e = Object.keys(S.current).length > 0;
        await oT(T.current.lastArgs.options?.dsKitKey, w.current, DraftState.CURRENT, {
          detachVariables: e
        });
      }
      w.current = null;
      T.current = {};
      j.current = {};
      I.current = {};
    }
  }, [L, t]);
  let D = useCallback(e => (T.current.lastArgs = e, T.current.isRunning) ? (T.current.insertAgainWhenDone = !0, Promise.resolve()) : O?.(e) || Promise.resolve(), [O]);
  useEffect(() => {
    let e = k.current;
    if (!i) return;
    let t = () => i(e.instrumentationData.imageSuccesses, e.instrumentationData.numImages);
    e.imageProgressEmitter.on("statusChanged", t);
    return () => {
      e.imageProgressEmitter.removeListener("statusChanged", t);
    };
  }, [k, i]);
  return {
    insertJSX: D,
    resetAsync: R,
    flushPending: L,
    nodeIdRef: w,
    imagesTraceRef: I,
    themeOverrideMapRef: S,
    userFlowRef: N,
    instrumentationRef: k
  };
}
export const C2 = $$C0;
export const Vh = $$E1;