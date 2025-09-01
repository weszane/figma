import { jsx } from "react/jsx-runtime";
import { createContext, useState, useContext, useMemo, useEffect, useLayoutEffect } from "react";
import { sYL, H$z } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { sx } from "../905/449184";
import { nX } from "../905/617744";
import { Z_ } from "../figma_app/793953";
import { Kn, ap } from "../905/535806";
import { kB, kL, qr, rb, pz } from "../905/710747";
export function $$m4(e) {
  return jsx("div", {
    className: `${kB} ${e.className ?? ""}`,
    inert: e.inert ? "" : void 0,
    children: e.children
  });
}
export function $$h7(e) {
  return jsx("div", {
    className: kL,
    children: e.children
  });
}
export function $$g2(e) {
  return jsx("div", {
    className: qr,
    children: e.children
  });
}
export function $$f3(e) {
  return jsx("div", {
    className: rb,
    children: e.children
  });
}
export function $$_0(e) {
  return jsx("div", {
    className: `${pz} ${e.className}`,
    children: e.children
  });
}
export let $$A5 = createContext(0);
export function $$y1(e) {
  let t = zl.get(nX);
  let {
    metrics,
    ...n
  } = e;
  let r = {
    ...n,
    direction: t,
    diffType: sYL[n.diffType],
    setDiffResult: H$z[n.setDiffResult],
    ...metrics
  };
  sx("Branch Modal setDiff Performance Delta", r, {
    forwardToDatadog: !0
  });
}
export function $$b6(e) {
  let [t] = useState(Date.now());
  let [i, n] = useState(0);
  let [a, o] = useState(null);
  let {
    displayGroups,
    conflictGroups,
    direction,
    branchFileKey,
    sourceFileKey,
    fileRepoId,
    isDoneLoading,
    entryPointDirection
  } = e;
  let b = useContext($$A5);
  let v = useMemo(() => {
    let e = displayGroups.filter(e => "state-group" === e.type || "generic" === e.type).map(e => e.affectedChunks.length).reduce((e, t) => e + t, 0);
    let t = displayGroups.filter(e => "variable-collection" === e.type).map(e => e.variableChunks.length).reduce((e, t) => e + t, 0);
    let i = displayGroups.filter(e => "state-group" === e.type).map(e => e.variantChunks.length).reduce((e, t) => e + t, 0);
    let n = direction === Kn.FROM_SOURCE && conflictGroups.length > 0;
    return {
      branchFileKey,
      sourceFileKey,
      fileRepoId,
      direction,
      changeCount: displayGroups.length,
      affectedItemCount: e,
      variableCount: t,
      variantCount: i,
      conflictCount: conflictGroups.length,
      isConflictResolution: n,
      branchModalTrackingId: b
    };
  }, [displayGroups, conflictGroups, direction, branchFileKey, sourceFileKey, fileRepoId, b]);
  useEffect(() => {
    let e = () => {
      if (!isDoneLoading) {
        if ("hidden" === document.visibilityState) {
          let e = Date.now();
          if (null == a) {
            if (0 === i) {
              let i = {
                durationMs: e - t,
                loadType: ap.TOTAL,
                ...v
              };
              sx("Branch Modal Load Backgrounded", i, {
                forwardToDatadog: !0
              });
            }
            o(e);
          }
        } else "visible" === document.visibilityState && a && (n(i + (Date.now() - a)), o(null));
      }
    };
    isDoneLoading || document.addEventListener("visibilitychange", e);
    return () => {
      document.removeEventListener("visibilitychange", e);
    };
  }, [a, o, i, n, t, v, isDoneLoading]);
  useEffect(() => {
    if (e.isDoneLoadingSourceDiff && e.branchFileKey && e.sourceFileKey && e.fileRepoId) {
      let n = Date.now() - t;
      getFeatureFlags().internal_only_debug_tools && console.log(`[Branching][${e.direction}] modal loaded source diff loadtime=${(n / 1e3).toFixed(2)}s`);
      let r = {
        durationMs: n,
        loadType: ap.TOTAL,
        backgrounded: i > 0,
        backgroundDurationMs: i,
        ...v
      };
      sx("Branch Modal Source Diff Load Time", r, {
        forwardToDatadog: !0
      });
    }
  }, [e.isDoneLoadingSourceDiff, e.direction, t, i]);
  useEffect(() => {
    if (e.isDoneLoading && e.branchFileKey && e.sourceFileKey && e.fileRepoId) {
      let n = Date.now() - t;
      if (getFeatureFlags().internal_only_debug_tools && console.log(`[Branching][${e.direction}] modal loadtime=${(n / 1e3).toFixed(2)}s`), entryPointDirection === Kn.TO_SOURCE && direction === Kn.FROM_SOURCE) return;
      let r = {
        durationMs: n,
        loadType: ap.TOTAL,
        backgrounded: i > 0,
        backgroundDurationMs: i,
        ...v,
        ...Z_()
      };
      sx("Branch Modal Load Time", r, {
        forwardToDatadog: !0
      });
    }
  }, [e.isDoneLoading, e.direction, t, i]);
  useEffect(() => {
    if (e.isDoneLoading && e.branchFileKey && e.sourceFileKey && e.fileRepoId) {
      var n;
      n = () => {
        let n = Date.now() - t;
        getFeatureFlags().internal_only_debug_tools && console.log(`[Branching][${e.direction}] modal time to browser paint=${(n / 1e3).toFixed(2)}s`);
        let r = {
          durationMs: n,
          loadType: ap.TOTAL,
          backgrounded: i > 0,
          backgroundDurationMs: i,
          ...v
        };
        sx("Branch Modal Time to Browser Painted", r, {
          forwardToDatadog: !0
        });
      };
      requestAnimationFrame(() => {
        let e = new MessageChannel();
        e.port1.onmessage = n;
        e.port2.postMessage(void 0);
      });
    }
  }, [e.isDoneLoading, e.branchFileKey, e.sourceFileKey, e.fileRepoId]);
  useEffect(() => {
    if (e.direction === Kn.TO_SOURCE && e.isDoneLoadingConflicts && e.branchFileKey && e.sourceFileKey && e.fileRepoId) {
      let n = Date.now() - t;
      getFeatureFlags().internal_only_debug_tools && console.log(`[Branching][${e.direction}] conflicts loadtime=${(n / 1e3).toFixed(2)}s`);
      let r = {
        durationMs: n,
        loadType: ap.TOTAL,
        backgrounded: i > 0,
        backgroundDurationMs: i,
        ...v
      };
      sx("Branch Modal Conflicts Load Time", r, {
        forwardToDatadog: !0
      });
    }
  }, [e.isDoneLoadingConflicts, e.branchFileKey, e.sourceFileKey, e.fileRepoId, e.direction, v, t, i]);
  useLayoutEffect(() => {
    if (!e.isDoneLoading && e.modalCloseIntent) {
      let e = Date.now() - t;
      sx("Branch Modal Load Aborted", {
        durationMs: e,
        backgrounded: i > 0,
        backgroundDurationMs: i,
        ...v
      }, {
        forwardToDatadog: !0
      });
    }
  }, [e.isDoneLoading, e.modalCloseIntent]);
}
export const FA = $$_0;
export const FT = $$y1;
export const ak = $$g2;
export const nS = $$f3;
export const qj = $$m4;
export const ss = $$A5;
export const tW = $$b6;
export const wy = $$h7;