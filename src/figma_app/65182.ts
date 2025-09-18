import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uN } from "../figma_app/338442";
import { ComponentPropType, ComponentType, Fullscreen } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useMemoStable } from "../905/19536";
import { createSelector } from "../vendor/925040";
import { createOptimistThunk } from "../905/350402";
import { tL } from "../figma_app/933328";
import { CG, NY } from "../figma_app/646357";
import { Qp, FZ } from "../figma_app/803787";
import { aR } from "../905/128313";
import { c5 } from "../figma_app/645694";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { KindEnum } from "../905/129884";
import { pf } from "../905/221848";
import { n as _$$n } from "../905/347702";
import { Lg } from "../figma_app/505098";
export function $$T2(e) {
  return e === ComponentPropType.INSTANCE_SWAP || !!getFeatureFlags().dse_slots && e === ComponentPropType.SLOT;
}
let $$I6 = e => ["preferredValuesInstancePicker", ...e];
let $$S0 = e => ({
  "data-tooltip-type": KindEnum.TEXT,
  "data-tooltip-show-left": !0,
  ...pf(e)
});
let v = () => {};
let A = new Promise(e => {
  v = e;
});
function x() {
  v();
  A = new Promise(e => {
    v = e;
  });
}
let $$N3 = e => `GET_MISSING_PREFERRED_PRODUCT_COMPONENTS_FOR_${e}`;
let C = (e, t) => ({
  callback: v,
  promise: A,
  resetPromise: x,
  loadingKey: $$N3(e.getState().openFile?.key),
  callbackForComponent: t
});
let w = createOptimistThunk((e, {
  stateGroupKeys: t,
  componentKeys: r,
  callback: n
}) => {
  tL(r, t, e, C(e, n));
});
let O = () => createSelector([Qp, (e, t) => t], (e, t) => {
  let r = [];
  let n = [];
  t.forEach(t => {
    let i = e[t.key];
    i ? r.push(i) : n.push(t);
  });
  return {
    preferredProductComponents: r,
    missingValues: n
  };
});
export var $$R1 = (e => (e.ADD = "ADD", e.REMOVE = "REMOVE", e))($$R1 || {});
export function $$L9(e) {
  let t = useMemoStable(() => {
    var t;
    var r;
    return $$T2(e?.type) ? (t = e.type, r = e.preferredValues, $$T2(t) ? r.filter(e => "key" in e && "string" == typeof e.key && "type" in e && e.type in ComponentType) : []) : [];
  }, [e]);
  let r = useSelector(aR);
  let o = useMemo(() => t.map(e => {
    let t = r[e.key];
    return t ? {
      type: e.type,
      key: t
    } : e;
  }), [r, t]);
  let d = useMemo(O, []);
  let {
    preferredProductComponents,
    missingValues
  } = useSelector(e => d(e, o));
  let _ = useDispatch();
  let m = useRef(new Set());
  let [f, E] = useState(!1);
  let [y, b] = useState(0);
  let I = useCallback(() => b(e => e + 1), []);
  useEffect(() => {
    let e = [];
    let t = [];
    missingValues.forEach(r => {
      m.current.has(r.key) || (r.type === ComponentType.COMPONENT ? e.push(r.key) : t.push(r.key));
    });
    e.length > 0 || t.length > 0 ? _(w({
      componentKeys: e,
      stateGroupKeys: t,
      callback: r => {
        r ? ([...e, ...t].forEach(e => m.current.add(e)), E(!1)) : E(!0);
      }
    })) : E(!1);
  }, [missingValues, _, y]);
  return {
    preferredValues: preferredProductComponents,
    togglePreferredValues: useCallback((n, i) => {
      if (e && e.kind === uN.TYPED) {
        let a = [...t];
        n.forEach(e => {
          let t = CG(e);
          let n = a.findIndex(e => e.key === t || r[e.key] === t);
          -1 !== n && "ADD" !== i ? a.splice(n, 1) : -1 === n && "REMOVE" !== i && a.push({
            key: t,
            type: e.type === PrimaryWorkflowEnum.COMPONENT ? ComponentType.COMPONENT : ComponentType.STATE_GROUP
          });
        });
        Object.keys(r).length > 0 && a.forEach((e, t) => {
          let n = r[e.key];
          n && (a[t].key = n);
        });
        Fullscreen.editInstanceSwapPreferredValues(e.explicitDefID, a);
      }
    }, [e, r, t]),
    handleSetPreferredValues: useCallback(t => {
      if (e?.kind !== uN.TYPED) return;
      let n = t.map(e => {
        let t = CG(e);
        return {
          key: r[t] ?? t,
          type: e.type === PrimaryWorkflowEnum.COMPONENT ? ComponentType.COMPONENT : ComponentType.STATE_GROUP
        };
      });
      Fullscreen.editInstanceSwapPreferredValues(e.explicitDefID, n);
    }, [e, r]),
    preferredValuesFetchError: f,
    retryPreferredValuesFetch: I
  };
}
export function $$P7(e, t) {
  let r = useSelector(FZ);
  let a = useSelector(c5);
  let [s, o] = useState(() => {
    let n = [];
    if ("string" == typeof e) {
      let i = NY(e, t, r, a);
      i && n.push(i);
    }
    return n;
  });
  return [s, o];
}
export function $$D4(e) {
  return useCallback((t, r) => {
    e(e => {
      let n = [...e];
      t.forEach(e => {
        let t = CG(e);
        let i = n.findIndex(e => t === CG(e));
        i > -1 && "ADD" !== r ? n.splice(i, 1) : -1 === i && "REMOVE" !== r && n.push(e);
      });
      return n;
    });
  }, [e]);
}
export function $$k5(e) {
  return useCallback(t => {
    e([...t]);
  }, [e]);
}
let M = _$$n(e => (!!e.component_key || !!e.key) && !e.unpublished_at);
export function $$F8(e) {
  let t = useSelector(Lg);
  let r = useSelector(FZ);
  let a = useMemo(() => !!t && M(r[t] ?? {}), [t, r]);
  return useMemoStable(() => a ? new Set(e.filter(e => !M(e)).map(e => e.node_id)) : new Set(), [a, e]);
}
export const J0 = $$S0;
export const Kn = $$R1;
export const Zu = $$T2;
export const _A = $$N3;
export const bq = $$D4;
export const dl = $$k5;
export const fN = $$I6;
export const i0 = $$P7;
export const wS = $$F8;
export const xP = $$L9;