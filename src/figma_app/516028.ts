import { addBreadcrumb } from '@sentry/browser';
import { atom } from 'jotai';
import { selectAtom } from 'jotai/utils';
import { useSelector } from 'react-redux';
import { selectWithShallowEqual } from '../905/103090';
import { createReduxSubscriptionAtomWithState } from '../905/270322';
import { teamsAtom } from '../905/338617';
import { D } from '../905/347702';
import { iZ } from '../905/372672';
import { trackEventAnalytics } from '../905/449184';
import { subscribeAndAwaitData } from '../905/553831';
import { getFeatureFlags } from '../905/601108';
import { UE } from '../905/628874';
import { i as _$$i } from '../905/651613';
import { l as _$$l } from '../905/716947';
import { lQ } from '../905/934246';
import { resourceUtils } from '../905/989992';
import { qd } from '../figma_app/39751';
import { ehp, kKC, N6_ } from '../figma_app/43951';
import { Bh, Rs } from '../figma_app/288654';
import { IT, QV } from '../figma_app/566371';
import { useAtomWithSubscription } from './27355';
export async function $$S2(e) {
  let t = e.getState().selectedView;
  let r = t.view === 'fullscreen' && t.fileKey;
  return r && (await subscribeAndAwaitData(ehp, {
    fileKey: r
  })).file || null;
}
export function $$v6() {
  let e = useSelector(e => {
    if (e.selectedView?.view === 'fullscreen') return e.selectedView.fileKey;
  });
  (function (e) {
    let t = getFeatureFlags().iam_pv2_lg_pol_smoke;
    Rs(N6_, {
      fileKey: e,
      linkAccessOverrideKey: null
    }, {
      enabled: t && !!e
    });
  })(e || '');
  (function (e) {
    let t = getFeatureFlags().pv2_plan_record_dummy_policy;
    Rs(kKC, {
      key: e
    }, {
      enabled: t && !!e
    });
  })(e || '');
  let t = Rs(ehp, {
    fileKey: e || ''
  }, {
    enabled: !!e
  });
  return resourceUtils.useTransform(t, ({
    file: e
  }) => e);
}
export function $$A16(e) {
  return e.openFile;
}
let $$x20 = createReduxSubscriptionAtomWithState($$A16);
let $$N3 = atom(e => {
  let t = e($$x20);
  let r = e(teamsAtom);
  return t?.teamId ? r[t.teamId] ?? null : null;
});
let $$C0 = selectAtom($$x20, e => e?.teamId ?? void 0);
export function $$w15(e) {
  return e.openFile?.key || null;
}
export let $$O21 = createReduxSubscriptionAtomWithState($$w15);
export function $$R7(e) {
  let t = $$A16(e);
  return t ? _$$l(t.libraryKey) : null;
}
let $$L10 = createReduxSubscriptionAtomWithState($$R7);
let $$P9 = D(() => useAtomWithSubscription($$L10));
export function $$D4() {
  let e = $$B17();
  let t = $$P9();
  return _$$i(e, t);
}
export function $$k19(e) {
  return e.openFile?.key && e.fileByKey[e.openFile.key] || null;
}
function M() {
  return useSelector($$A16);
}
export function $$F13() {
  let e = useSelector(e => e.selectedView?.view === 'prototype');
  let t = function () {
    let e = useSelector(e => e.selectedView?.view === 'fullscreen' ? e.selectedView.fileKey : null);
    let t = Bh(ehp(e ? {
      fileKey: e
    } : null));
    return resourceUtils.useTransform(t, ({
      file: e
    }) => e);
  }();
  let r = M();
  return e ? r : t.data ?? null;
}
export let $$j14 = getFeatureFlags().preload_open_editor_file_data ? $$F13 : M;
export function $$U8() {
  let e = $$j14();
  return e?.editorType;
}
export let $$B17 = D(() => $$j14()?.key || null);
export function $$G18() {
  let e = $$j14();
  return (e?.sourceFileKey ?? e?.key) || null;
}
export function $$V5() {
  let e = $$j14();
  let t = iZ();
  return e?.creatorId === t?.id;
}
export function $$H1(e) {
  return $$z11(selectWithShallowEqual(e => ({
    openFile: e.openFile,
    fileByKey: e.fileByKey
  })), e);
}
export function $$z11(e, t) {
  let r = $$k19(e);
  return t?.useSinatraType ? r : r ? UE(r) : null;
}
function W(e) {
  console.log('_useRequireOpenFileOrSuspend resolved');
  addBreadcrumb({
    category: 'suspense',
    message: '_useRequireOpenFileOrSuspend resolved successfully'
  });
  trackEventAnalytics('open_file_lg_suspended', {
    suspenseDuration: e
  });
}
function K() {
  console.log('_useRequireOpenFileOrSuspend is about to suspend');
  addBreadcrumb({
    category: 'suspense',
    message: '_useRequireOpenFileOrSuspend is about to suspend'
  });
}
export let $$Y12 = getFeatureFlags().preload_open_editor_file_data ? function (e) {
  let t = qd(e ?? null);
  let [r] = IT(ehp({
    fileKey: e
  }), {
    enabled: !!e
  });
  let n = QV(r, e && t === null ? 'passthrough' : 'suspend', {
    willSuspend: K,
    onResolveForMetrics: W,
    metricKey: 'openFile'
  });
  if (n.status === 'errors') throw n.errors[0];
  return n.status === 'disabled' || n.status === 'loading' ? null : n.data.file;
} : lQ;
export const As = $$C0;
export const Cq = $$H1;
export const Dz = $$S2;
export const Hu = $$N3;
export const K5 = $$D4;
export const Kf = $$V5;
export const MY = $$v6;
export const XJ = $$R7;
export const XO = $$U8;
export const _G = $$P9;
export const _S = $$L10;
export const bv = $$z11;
export const eq = $$Y12;
export const l3 = $$F13;
export const q5 = $$j14;
export const sS = $$w15;
export const tB = $$A16;
export const tS = $$B17;
export const uL = $$G18;
export const vu = $$k19;
export const yV = $$x20;
export const ze = $$O21;