import { useRef, useEffect } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { ZC } from "../figma_app/39751";
import { getInitialOptions } from "../figma_app/169182";
import { F } from "../905/422355";
import { reportError } from "../905/11";
import { w0 } from "../figma_app/594947";
import { isInteractionOrEvalMode } from "../figma_app/897289";
import { OE } from "../figma_app/164212";
import { RB } from "../figma_app/626952";
import { PE } from "../figma_app/251115";
import { Vg } from "../figma_app/460003";
import { f as _$$f } from "../figma_app/443973";
import { V2, p3 } from "../figma_app/578955";
let $$T2 = atom(null);
let $$I0 = atom(void 0);
export function $$S1() {
  let e = useAtomWithSubscription($$T2);
  let t = useAtomWithSubscription($$I0);
  let r = useRef(new Map());
  let S = useRef(0);
  let v = getSingletonSceneGraph();
  let A = useRef(3e5);
  let x = useRef(0);
  !async function () {
    if (!isInteractionOrEvalMode() && !getInitialOptions().e2e_traffic) {
      let e = await w0("autosuggest_prop_shadow_reads");
      A.current = e.get("delayForComparisonMs", 3e5);
      x.current = e.get("proportionLogged", 0);
    }
  }();
  let N = Vg(e ? [e] : [], v);
  let C = RB([N], OE.ASSIGNMENT);
  ZC(e) !== e && (S.current = Math.random());
  let w = !!(PE() && getFeatureFlags().anticipation_props_shadow_reads && S.current < x.current);
  let {
    autosuggestedValues,
    isLoading
  } = V2(N, C, w, v);
  useEffect(() => {
    !isLoading && e && r.current.set(e, autosuggestedValues);
  }, [isLoading, autosuggestedValues, e]);
  let L = e ? v?.get(e) : null;
  let P = null;
  try {
    P = L?.type === "INSTANCE" ? L.componentProperties() : null;
  } catch (e) {
    reportError(_$$e.SEARCH_EXPERIENCE, e);
  }
  let D = ZC(e);
  useEffect(() => {
    e && w && setTimeout(() => {
      let n = v?.get(e);
      let a = r.current.get(e)?.componentProps;
      let s = null;
      try {
        s = n?.type === "INSTANCE" ? n?.componentProperties() : null;
      } catch (e) {
        reportError(_$$e.SEARCH_EXPERIENCE, e);
      }
      if (a && s) {
        let e = {
          TEXT: 0,
          VARIANT: 0
        };
        let r = {
          TEXT: 0,
          VARIANT: 0
        };
        let i = {
          TEXT: 0,
          VARIANT: 0
        };
        let o = {
          TEXT: 0,
          VARIANT: 0
        };
        let d = {
          TEXT: 0,
          VARIANT: 0
        };
        let c = {
          TEXT: 0,
          VARIANT: 0
        };
        let p = 0;
        Object.entries(a).forEach(t => {
          let [n, a] = t;
          if (s[n]) {
            let t = s[n]?.value;
            let l = P?.[n]?.value;
            let u = s[n]?.type;
            "TEXT" === u || "VARIANT" === u ? (e[u]++, a === t ? (r[u]++, null !== l && (a === l ? c[u]++ : d[u]++)) : null !== l && (a === l ? i[u]++ : o[u]++)) : p++;
          }
        });
        analyticsEventManager.trackDefinedEvent("auto_suggest.props_shadow_read", {
          textAccuracy: r.TEXT / e.TEXT,
          textCANCount: i.TEXT,
          textCNNCount: o.TEXT,
          textCRPCount: d.TEXT,
          textCNPCount: c.TEXT,
          textPropertyCount: e.TEXT,
          variantAccuracy: r.VARIANT / e.VARIANT,
          variantCANCount: i.VARIANT,
          variantCNNCount: o.VARIANT,
          variantCRPCount: d.VARIANT,
          variantCNPCount: c.VARIANT,
          variantPropertyCount: e.VARIANT,
          missingPropertyCount: p,
          suggestionMethod: p3(),
          gptPromptMd5Version: F(_$$f()),
          delayForComparisonMs: A.current,
          numDescendants: n?.getVisibleDescendantIds().length,
          componentKey: t
        });
      }
      r.current.$$delete(e);
    }, A.current);
  }, [e, t, D, P, v, w]);
}
export const fu = $$I0;
export const qh = $$S1;
export const xB = $$T2;
