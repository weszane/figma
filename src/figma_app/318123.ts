import { ServiceCategories as _$$e } from "../905/165054";
import { IPanelType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atom } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { getTrackingSessionId } from "../905/471229";
import { y8 } from "../figma_app/459490";
import { b as _$$b } from "../905/985254";
import { B as _$$B } from "../figma_app/750676";
import { T as _$$T } from "../905/793009";
import { _s } from "../figma_app/33126";
import { r1 } from "../figma_app/545877";
import { J } from "../905/915227";
import { kS } from "../figma_app/864723";
import { openFileTeamIdAtom, openFileKeyAtom } from "../figma_app/516028";
import { Wh } from "../figma_app/615482";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { l5 } from "../figma_app/728657";
import { fD } from "../figma_app/816671";
import { P } from "../905/184837";
import { iH } from "../figma_app/449975";
import { P as _$$P } from "../905/255442";
import { Uy, $B, es } from "../figma_app/610446";
import { Mg, h5, fK, LX, lx } from "../figma_app/862108";
import { c as _$$c } from "../905/850166";
import { L as _$$L } from "../905/978623";
import { Xi, $D as _$$$D } from "../905/990497";
import { E$, ez } from "../figma_app/835718";
var $$L12 = (e => (e.NONE = "none", e.TOP_BAR = "top-bar", e.NEW_FILE = "new-file", e))($$L12 || {});
let $$P11 = "used_figjam_ai_generate";
let $$D7 = "used_figjam_ai_generate_modal_v2";
let k = atom(!1);
let $$M13 = atom(null, (e, t) => {
  t(k, !0);
  t($$X20, void 0);
});
let $$F19 = atom(null, (e, t) => {
  t(V);
  t(k, !1);
});
let $$j17 = atom(!1);
let U = atom(null, (e, t) => {
  t(V);
  t($$j17, !0);
});
let B = createReduxSubscriptionAtomWithState(() => Uy() && !getFeatureFlags().figjam_generate_handbrake && !y8({
  isDisabledForViewers: !0
}));
let $$G22 = atom(e => e(B) ? e(k) ? "top-bar" : e(P) !== iH.TRUE || e($$j17) || e(l5) !== fD.NONE ? "none" : "new-file" : "none");
let V = atom(null, (e, t) => {
  t(K);
  t($$X20, void 0);
});
let $$H3 = atom(null, (e, t) => {
  let r = e($$G22);
  "top-bar" === r ? t($$F19) : "new-file" === r && t(U);
});
let $$z9 = atom(null, (e, t) => {
  e(ei).abort();
  t(ei, new AbortController());
  t($$ee14, {
    status: _$$c.NONE
  });
});
let $$W0 = atom(null, (e, t) => {
  t(V);
  t($$j17, !1);
  t(k, !1);
});
let K = atom(null, (e, t) => {
  t($$z9);
  t($$J5, void 0);
  t($$Z16, Xi());
  t($$Q10, IPanelType.BASIC);
});
let $$Y21 = Wh(() => atom(!1));
let $$$1 = atom("");
let $$X20 = atom(void 0);
let $$q6 = atom("");
let $$J5 = atom(void 0);
let $$Z16 = atom(Xi());
let $$Q10 = atom(IPanelType.BASIC);
let $$ee14 = atom({
  status: _$$c.NONE
});
let $$et4 = atom(null);
let $$er18 = Wh(() => atom(!1));
let $$en8 = atom(null, (e, t, r) => {
  t($$er18, r);
});
let ei = atom(new AbortController());
let ea = atom(null, async (e, t, {
  fileKey: r,
  prompt: i,
  stage: s,
  useCaseCategory: c,
  useCase: y,
  subtitle: b,
  entrypoint: T,
  fromGenerateModalV2: I,
  pageNodeId: S
}) => {
  let v;
  if (null === r && reportError(_$$e.AI_PRODUCTIVITY, Error("No file key provided for FigJam AI Generate request")), !i) return {
    status: _$$c.NONE
  };
  t(Mg, e => e + 1);
  e(r1($$P11)).data || debugState.dispatch(_$$b({
    [$$P11]: !0
  }));
  let L = e(r1($$D7)).data;
  I && !L && debugState.dispatch(_$$b({
    [$$D7]: !0
  }));
  t($$z9);
  let k = e(ei).signal;
  let M = {
    orgId: e(_s),
    teamId: e(openFileTeamIdAtom) || null,
    fileKey: r,
    userId: e(kS) || null,
    trackingSessionId: getTrackingSessionId(),
    fileSeq: e(J)?.toString() || null
  };
  t($$ee14, {
    status: _$$c.LOADING
  });
  t($$J5, c);
  t($$et4, S);
  let F = "board";
  try {
    globalThis.AI_DEBUG_XML && getFeatureFlags().figjam_text_to_template_debug ? F = "board" : (F = (await _$$P({
      prompt: i,
      signal: k,
      authInfo: M
    })) || "board", getFeatureFlags().figjam_text_to_visual_timeline || "timeline" !== F || (F = "gantt"), $B() || "mindmap" !== F || (F = "board"));
  } catch (a) {
    let e = E$(a, ez.GENERATE);
    v = {
      status: _$$c.ERROR,
      type: F,
      errorMessage: e.message,
      trace: a.trace
    };
    h5(r, 0, 1, i, "inappropriate", s, T, c, y, b);
    fK(r, e.message);
    e.reportToSentry && reportError(_$$e.AI_PRODUCTIVITY, a);
    t($$ee14, v);
    return v;
  }
  c && (c === es.FLOW_CHART ? F = "diagram" : c === es.GANTT_CHART ? F = "gantt" : c === es.ORG_CHART && (F = "orgchart"));
  let j = e($$q6);
  let U = j && i.includes(j) ? j : void 0;
  t($$q6, "");
  h5(r, 0, 1, i, F, s, T, c, y, b, U);
  try {
    v = await _$$B(() => e(LX) || "null", r, _$$T.AI, async () => {
      let t;
      if ("board" === F) {
        let n = e(_s);
        t = await _$$L({
          prompt: i,
          signal: k,
          fileKey: r,
          authInfo: M,
          orgId: n
        });
      } else {
        let t = e($$Q10);
        let r = e($$Z16);
        let n = F;
        await _$$$D({
          prompt: i,
          signal: k,
          visualType: n,
          authInfo: M,
          ganttColor: r,
          ganttType: t
        });
      }
      let n = e(LX);
      lx(r, 0, i, F, n);
      return {
        status: _$$c.SUCCESS,
        type: F,
        trace: t
      };
    });
  } catch (e) {
    if (e?.name === "AbortError") v = {
      status: _$$c.NONE
    };else {
      let t = E$(e, ez.GENERATE);
      v = {
        status: _$$c.ERROR,
        type: F,
        errorMessage: t.message,
        trace: e.trace
      };
      t.reportToSentry && reportError(_$$e.AI_PRODUCTIVITY, e);
      fK(r, t.message);
    }
  }
  t($$ee14, v);
  return v;
});
let $$es15 = atom(null, (e, t, {
  prompt: r,
  stage: i,
  useCaseCategory: a,
  useCase: s,
  subtitle: o,
  entrypoint: d,
  fromGenerateModalV2: c,
  pageNodeId: u
}) => {
  let p = e(openFileKeyAtom);
  if (null === p || 0 === p.length) {
    reportError(_$$e.AI_PRODUCTIVITY, Error("No file key found for loaded file to use for FigJam AI Generate request"));
    return;
  }
  t(ea, {
    fileKey: p,
    prompt: r,
    stage: i,
    useCaseCategory: a,
    useCase: s,
    subtitle: o,
    entrypoint: d,
    fromGenerateModalV2: c,
    pageNodeId: u
  });
});
let $$eo2 = atom(null, (e, t, {
  fileKey: r,
  prompt: n,
  stage: i,
  useCaseCategory: a,
  useCase: s,
  subtitle: o,
  entrypoint: l,
  fromGenerateModalV2: d,
  pageNodeId: c
}) => {
  t(ea, {
    fileKey: r,
    prompt: n,
    stage: i,
    useCaseCategory: a,
    useCase: s,
    subtitle: o,
    entrypoint: l,
    fromGenerateModalV2: d,
    pageNodeId: c
  });
});
export const A0 = $$W0;
export const Ac = $$$1;
export const D2 = $$eo2;
export const H4 = $$H3;
export const J1 = $$et4;
export const JV = $$J5;
export const KL = $$q6;
export const Pg = $$D7;
export const RC = $$en8;
export const RJ = $$z9;
export const Sn = $$Q10;
export const W1 = $$P11;
export const Wl = $$L12;
export const bJ = $$M13;
export const dO = $$ee14;
export const ft = $$es15;
export const l1 = $$Z16;
export const qe = $$j17;
export const rM = $$er18;
export const tz = $$F19;
export const xc = $$X20;
export const yt = $$Y21;
export const zS = $$G22;