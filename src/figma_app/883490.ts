import { atom } from 'jotai';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { F } from '../905/302958';
import { getI18nString } from '../905/303541';
import { nF } from '../905/350402';
import { debugState } from '../905/407919';
import { zX } from '../905/576487';
import { gc } from '../figma_app/120227';
import { PW } from '../figma_app/198712';
import { mJ } from '../figma_app/311375';
import { tJ } from '../figma_app/741237';
import { tKW } from '../figma_app/763686';
let $$m7 = atom(!1);
let $$g3 = atom({});
export function $$f8({
  type: e
}) {
  return e & PW.ASSET_GIF;
}
export function $$E5({
  type: e
}) {
  return e & PW.ASSET_VIDEO;
}
export function $$y4(e) {
  return e & PW.ASSET_ICON ? 'icon' : e & PW.ASSET_ILLUSTRATION ? 'illustration' : e & PW.ASSET_IMAGE ? 'img' : e & PW.ASSET_VIDEO ? 'video' : e & PW.ASSET_GIF ? 'gif' : e & PW.ASSET_COMPONENT ? 'component' : void 0;
}
export function $$b10({
  pxWidth: e,
  pxHeight: t,
  dataTestId: r
}) {
  let {
    unit
  } = gc();
  let s = unit === tKW.SCALED;
  let o = e => (e ?? 0).toLocaleString('en', {
    maximumFractionDigits: 2
  });
  let l = o(e);
  let d = o(t);
  let u = jsx('span', {
    'data-testid': `${r}Width`,
    'children': l
  });
  let p = jsx('span', {
    'data-testid': `${r}Height`,
    'children': d
  });
  return jsxs(Fragment, {
    children: [u, '\u2009x\u2009', p, jsx('span', {
      'data-testid': `${r}Unit`,
      'children': s ? ' (px)' : ''
    })]
  });
}
export function $$T0({
  assetInfo: e,
  media: t,
  dataTestId: r,
  shouldShowTypeLabel: i,
  hideDot: a
}) {
  let s = mJ(e.instancesGUIDs?.[0] ?? e.assetId);
  let o = s?.size?.x ?? 0;
  let l = s?.size?.y ?? 0;
  if (t && t.length > 0) {
    let e = t[0];
    o = e.width;
    l = e.height;
  }
  return jsx($$I1, {
    assetType: e.type,
    pxWidth: o,
    pxHeight: l,
    dataTestId: r,
    hideDot: a,
    shouldShowTypeLabel: i
  });
}
export function $$I1({
  assetType: e,
  pxWidth: t,
  pxHeight: r,
  dataTestId: i,
  hideDot: a,
  shouldShowTypeLabel: s
}) {
  let l = e & PW.ASSET_VIDEO ? getI18nString('dev_handoff.assets.video') : e & PW.ASSET_GIF ? getI18nString('dev_handoff.assets.gif') : e & PW.ASSET_IMAGE ? getI18nString('dev_handoff.assets.image') : e & PW.ASSET_ICON ? getI18nString('dev_handoff.assets.icon') : e & PW.ASSET_COMPONENT ? getI18nString('dev_handoff.assets.instance') : e & PW.ASSET_ILLUSTRATION ? getI18nString('dev_handoff.assets.asset') : void 0;
  return jsxs('span', {
    children: [s && l, !a && jsxs(Fragment, {
      children: ['\xA0', '\xB7 ']
    }), jsx($$b10, {
      pxWidth: t,
      pxHeight: r,
      dataTestId: i
    })]
  });
}
export function $$S6(e) {
  return e & (PW.ASSET_ICON | PW.ASSET_IMAGE | PW.ASSET_GIF | PW.ASSET_VIDEO);
}
let v = 'return_to_previous';
let A = null;
let x = !1;
let N = null;
let $$C9 = nF((e, t) => {
  t && (A = {
    guidsToReturnTo: Object.keys(e.getState().mirror.sceneGraphSelection).sort(),
    selectedGUID: t
  });
});
let $$w2 = nF(e => {
  let t = Object.keys(e.getState().mirror.sceneGraphSelection).sort();
  let r = A && t.length === 1 && A.selectedGUID === t[0];
  r && !x ? (document.addEventListener('keydown', O), e.dispatch(F.enqueue({
    type: v,
    message: '',
    icon: zX.RETURN_TO_INSTANCE,
    button: {
      text: getI18nString('dev_handoff.assets.return_to_previous'),
      action: R
    },
    onDismiss: () => {
      A = null;
      x = !1;
      document.removeEventListener('keydown', O);
    }
  })), x = !0, clearTimeout(N)) : !r && x && (document.removeEventListener('keydown', O), e.dispatch(F.dequeue({
    matchType: v
  })), x = !1, N = setTimeout(() => {
    A = null;
  }, 3e4));
});
function O(e) {
  let t = e.ctrlKey && e.altKey && e.metaKey;
  let r = e.ctrlKey && e.altKey && e.shiftKey;
  (t || r) && e.code === 'KeyK' && (R(), debugState.dispatch(F.dequeue({
    matchType: v
  })));
}
function R() {
  A && (tJ(A.guidsToReturnTo), A = null, x = !1);
  document.removeEventListener('keydown', O);
}
export const $R = $$T0;
export const B7 = $$I1;
export const Ed = $$w2;
export const Qm = $$g3;
export const Vx = $$y4;
export const cZ = $$E5;
export const fk = $$S6;
export const g6 = $$m7;
export const p2 = $$f8;
export const vI = $$C9;
export const yP = $$b10;