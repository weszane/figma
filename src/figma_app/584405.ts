import { useCallback, useEffect } from 'react';
import { fetchVariableSetThumbnails } from '../905/711212';
import { atomStoreManager, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { _M, IZ } from '../figma_app/99772';
import { y4 } from '../figma_app/210234';
import { Iv, tS, yA } from '../figma_app/327683';
import { r8 } from '../figma_app/537824';
import { fetchDynamicConfig } from '../figma_app/594947';
import { sf } from '../figma_app/646031';
import { kA } from '../figma_app/726579';
import { Kk, u2, Ut, v4 } from '../figma_app/761118';
import { FR, td } from '../figma_app/827216';
import { pN } from '../figma_app/852050';
import { isInteractionOrEvalMode } from '../figma_app/897289';
import { F7, yU } from '../figma_app/908460';
export function $$E6() {
  let e = Xr(v4);
  let t = pN();
  let r = t.data?.libraryVariables;
  let s = t.data?.libraryVariableSets;
  let o = useAtomWithSubscription(Ut);
  useEffect(() => {
    if (!o) {
      isInteractionOrEvalMode() && e(e => ({
        ...e,
        status: 'loaded'
      }));
      return;
    }
    if (t.status === 'errors') {
      e(e => ({
        ...e,
        status: 'error'
      }));
      return;
    }
    if (t.status !== 'loaded') return;
    let n = new AbortController();
    let i = n.signal;
    (async function () {
      if (!s || !r) return;
      e(e => ({
        ...e,
        status: 'loading'
      }));
      let t = new Set();
      let n = [];
      s.forEach(e => {
        o?.has(e.library_key) && (n.push(e), t.add(e.library_key));
      });
      for (let e = 0; e < n.length; e += 2) {
        if (i.aborted) return;
        let t = n.slice(e, e + 2).map(e => fetchVariableSetThumbnails(e));
        await Promise.allSettled(t);
      }
      e({
        libraryVariables: r,
        libraryVariableSetIdToSet: n.reduce((e, t) => (t.node_id && (e[t.node_id] = t), e), {}),
        status: 'loaded',
        libraryKeys: t
      });
    })();
    return () => {
      n.abort();
    };
  }, [t.status, s, r, o, e]);
}
export function $$y8() {
  let e = useAtomWithSubscription(Ut);
  useEffect(() => {
    let t = [...(e ?? new Set())].map(e => e.toString());
    kA({
      library_keys: t,
      entity_type: 'VARIABLE',
      entity_value_type: 'FLOAT',
      max_results_per_library: 100
    });
    kA({
      library_keys: t,
      entity_type: 'STYLE',
      entity_value_type: 'TEXT',
      max_results_per_library: 100
    });
    fetchDynamicConfig(yA).then(e => {
      let r = e.get(tS, Iv);
      kA({
        library_keys: t,
        entity_type: 'VARIABLE',
        entity_value_type: 'COLOR',
        max_results_per_library: r
      });
    });
  }, [e]);
}
export function $$b2() {
  let e = useAtomWithSubscription(_M);
  return y4(e);
}
export function $$T1() {
  let e = useAtomWithSubscription(_M);
  return [FR.LANDING_PAGE_WELCOME, FR.LANDING_PAGE_NO_SELECTION, FR.LANDING_PAGE_LIMIT_EXCEEDED].includes(e);
}
export function $$I3() {
  return useAtomWithSubscription(u2) !== td.GROUPING_COMPLETE;
}
export function $$S0() {
  let e = Xr(_M);
  let t = sf();
  return useCallback(r => {
    t();
    r8()?.teardownLinter();
    e(r);
  }, [t, e]);
}
export function $$v5() {
  return useAtomWithSubscription(Kk) === 0;
}
export function $$A4() {
  return useCallback(async () => {
    let e = r8();
    if (!e) throw new Error('Linter is not initialized');
    try {
      await e.requestDetection();
    } catch (e) {
      if (e instanceof yU) {
        atomStoreManager.set(_M, FR.LANDING_PAGE_LIMIT_EXCEEDED);
        return;
      }
      if (e instanceof F7) {
        atomStoreManager.set(_M, FR.LANDING_PAGE_NO_SELECTION);
        return;
      }
      console.error('Unexpected error when running linter detection:', e);
    }
  }, []);
}
export function $$x7(e) {
  let t = sf();
  return useCallback(() => {
    t();
    let r = atomStoreManager.get(IZ).map(e => e.violationId);
    r8()?.ignoreAllViolationIds(r);
    e?.(!0);
  }, [t, e]);
}
export const Hl = $$S0;
export const PM = $$T1;
export const VK = $$b2;
export const _i = $$I3;
export const bk = $$A4;
export const l2 = $$v5;
export const mr = $$E6;
export const rL = $$x7;
export const vP = $$y8;