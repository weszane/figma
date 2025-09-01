import { useMemo, useRef, useEffect } from "react";
import { rXF } from "../figma_app/763686";
import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { eU, fp, md } from "../figma_app/27355";
import { k9 } from "../905/19536";
import { az } from "../905/449184";
import { w0 } from "../figma_app/594947";
import { g as _$$g } from "../905/880308";
import { qd } from "../figma_app/852050";
import { XN } from "../figma_app/633080";
import { D } from "../905/442915";
import { uQ } from "../figma_app/151869";
import { kA } from "../figma_app/726579";
import { Px } from "../figma_app/152690";
import { JC, UN as _$$UN, _t, O0, Mv, cQ, _e } from "../figma_app/225126";
import { Cg, wj, hs } from "../905/491994";
let b = eU({
  status: "unset"
});
let T = eU({
  status: "unset"
});
let I = eU({
  status: "unset"
});
export function $$S2(e) {
  return useMemo(() => {
    let t = {
      currentFloat: void 0,
      currentColor: void 0
    };
    null == e || ("number" == typeof e ? t.currentFloat = e : "object" != typeof e || "r" in e && "number" == typeof e.r && "g" in e && "number" == typeof e.g && "b" in e && "number" == typeof e.b && "a" in e && "number" == typeof e.a && (t.currentColor = {
      r: e.r,
      g: e.g,
      b: e.b,
      a: e.a
    }));
    return t;
  }, [e]);
}
export function $$v0(e, t, r, i, a) {
  let s = useRef(_$$g());
  let o = Px();
  return useMemo(() => ({
    suggestionType: r,
    entryPoint: t,
    property: e,
    modeContext: o,
    sessionId: s.current,
    queryId: "",
    currentColor: a,
    currentFloat: i
  }), [s, o, e, t, r, i, a]);
}
export function $$A1({
  variables: e,
  variableSets: t,
  subscribedLibraries: r,
  variableRerankingData: f,
  fileKey: S,
  orgId: v
}) {
  let A = useMemo(() => !!f.sessionId, [f]);
  let x = function(e, t) {
    let r = uQ();
    let [i, a] = fp(b);
    useEffect(() => {
      if (!t) {
        a({
          status: "unset"
        });
        return;
      }
      a({
        status: "loading"
      });
      JC(r, e).then(({
        data: e,
        timing: t
      }) => {
        a({
          status: "loaded",
          data: e,
          timing: t
        });
      }).catch(e => {
        console.error("Error computing variable consumption:", e);
        a({
          status: "error",
          error: e
        });
      });
      return () => {
        a({
          status: "unset"
        });
      };
    }, [r, a, e, t]);
    return i;
  }(f, A);
  let N = k9(() => A ? t.map(e => e) : [], [t, A]);
  let C = k9(() => A ? e.map(e => e) : [], [e, A]);
  let w = k9(() => A ? r.map(e => e.libraryKey) : [], [r, A]);
  !function(e, t, r) {
    let [i, a] = fp(T);
    let l = useMemo(() => _$$UN(e), [e]);
    useEffect(() => (r ? (a({
      status: "loading"
    }), getFeatureFlags().aip_flower_garden_shadow_reranker && getFeatureFlags().aip_flower_garden_shadow_reranker_top_k && l) ? w0(Cg).then(e => {
      let r = e.get(wj, hs);
      return kA({
        library_keys: t,
        entity_type: "VARIABLE",
        entity_value_type: l,
        max_results_per_library: r
      });
    }).then(e => {
      a({
        status: "loaded",
        data: e,
        timing: 0
      });
    }).catch(e => {
      console.error("Error fetching top k assets", e);
      a({
        status: "error",
        error: e
      });
    }) : a({
      status: "loaded",
      data: new Map(),
      timing: 0
    }) : a({
      status: "unset"
    }), () => {
      a({
        status: "unset"
      });
    }), [t, l, a, r]);
  }(f.suggestionType, w, A);
  let O = function(e, t, r, i) {
    let a = md(b);
    let l = md(T);
    let [d, c] = fp(I);
    useEffect(() => {
      if (!getFeatureFlags().aip_flower_garden_shadow_reranker || !i) return;
      let e = _t(t);
      return () => clearTimeout(e);
    }, [t, i]);
    let u = useMemo(() => getFeatureFlags().aip_flower_garden_shadow_reranker ? e.filter(XN).map(e => e.node_id) : [], [e]);
    let h = useMemo(() => r.modeContext ?? {}, [r]);
    let m = useMemo(() => O0(r), [r]);
    let g = qd(u, h);
    useEffect(() => {
      if (!i) {
        c({
          status: "unset"
        });
        return;
      }
      if ("loaded" === a.status && "loaded" === l.status && u.length) {
        c({
          status: "loading"
        });
        Mv(e, t, h, a.data.variableConsumptionInDocument, a.data.variableConsumptionInSubtree, g, r.suggestionType, m, l.data).then(({
          data: e,
          timing: t
        }) => {
          c({
            status: "loaded",
            data: e,
            timing: t
          });
        }).catch(e => {
          console.error("Error computing reranker candidates:", e);
          c({
            status: "error",
            error: e
          });
        });
        return () => {
          c({
            status: "unset"
          });
        };
      }
    }, [e, t, r, h, a, u, g, l, m, c, i]);
    return d;
  }(C, N, f, A);
  let R = function(e, t) {
    let r = uQ();
    let [i] = fp(b);
    return useMemo(() => {
      if (!getFeatureFlags().aip_flower_garden_shadow_reranker || !r || !t || !e || "loaded" !== i.status) return null;
      let n = performance.now();
      let o = UN().get(r);
      return o ? {
        context: cQ(o, t, i.data.variableConsumptionInDocument, i.data.variableConsumptionInSubtree),
        timing: performance.now() - n
      } : null;
    }, [r, t, i, e]);
  }(A, f?.property);
  useEffect(() => {
    let e;
    if (getFeatureFlags().aip_flower_garden_shadow_reranker && A && "loaded" === x.status && "loaded" === O.status && R) {
      switch (f.suggestionType) {
        case rXF.COLOR:
          e = "COLOR";
          break;
        case rXF.FLOAT:
          e = "NUMBER";
      }
      e && az.trackDefinedMetric("ai_productivity.variable_suggestion_context_collection_time", {
        loadTimeMS: O.timing + R.timing + x.timing,
        candidatesLoadTimeMS: O.timing,
        selectionContextLoadTimeMS: R.timing,
        variableConsumptionLoadTimeMS: x.timing,
        suggestionType: e
      });
    }
  }, [x, O, R, f, A]);
  (function({
    variableRerankingData: e,
    candidates: t,
    selectionContext: r,
    subscribedLibraryKeys: a,
    fileKey: o,
    orgId: l,
    isValidRerankingContext: d
  }) {
    useEffect(() => {
      if (!d || !getFeatureFlags().aip_flower_garden_shadow_reranker || e.suggestionType === rXF.FLOAT && !getFeatureFlags().aip_flower_garden_shadow_number_reranker) return;
      let n = _e(e?.suggestionType);
      if (!r || !n || "loaded" !== t.status || !e.sessionId || !e.modeContext || !e.entryPoint || !e.currentColor && void 0 === e.currentFloat) return;
      let c = _$$g();
      let p = {
        org_id: l ? Number(l) : void 0,
        entry_point: e.entryPoint,
        open_file_key: o ?? "",
        query_id: c,
        session_id: e.sessionId,
        candidates: t.data,
        current_value: O0(e),
        subscribed_library_keys: a,
        current_value_data_type: n,
        used_product_components_on_page: [],
        selection_context: r
      };
      e.queryId = c;
      try {
        D.recommendVariables(p);
      } catch { }
    }, [t, o, a, e, r, l, d]);
  })({
    candidates: O,
    selectionContext: R?.context ?? void 0,
    variableRerankingData: f,
    subscribedLibraryKeys: w,
    fileKey: S,
    orgId: v,
    isValidRerankingContext: A
  });
}
export const Fs = $$v0;
export const g$ = $$A1;
export const rv = $$S2; 
