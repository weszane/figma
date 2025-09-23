import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { c as _$$c } from '../905/231180';
import { g4 } from '../905/368836';
import { debugState } from '../905/407919';
import { Ac, bc } from '../905/499389';
import { getFeatureFlags } from '../905/601108';
import { getSingletonSceneGraph } from '../905/700578';
import { logDebug } from '../905/714362';
import { E0 } from '../905/848469';
import { e_ } from '../905/866195';
import { iconClassifierEndpointSchema } from '../905/889788';
import { Zh } from '../figma_app/2590';
import { computeFullscreenViewportForNode } from '../figma_app/62612';
import { isMagicLinkEnabled } from '../figma_app/144974';
import { FI, rq, Sh } from '../figma_app/262240';
import { bA, dT, ft, k9, kC, LI, Pe } from '../figma_app/365713';
import { findVisibleSectionChild } from '../figma_app/387100';
import { cortexAPI } from '../figma_app/432652';
import { fullscreenValue } from '../figma_app/455680';
import { getExperimentConfigAsync } from '../figma_app/594947';
import { PrototypingTsApi } from '../figma_app/763686';
import { uint8ArrayToBase64 } from '../figma_app/930338';
import { Ay as _$$Ay } from '../figma_app/948389';
export let $$C1 = async ({
  clientLifecycleId: e,
  abortController: t
}) => {
  getFeatureFlags().prototype_ai_magic_link_ensemble_model && (g4(e => {
    let t = e.name;
    let i = e.time;
    debugState.dispatch(Zh({
      name: 'prototype.ai_magic_link_feature_computed',
      params: {
        name: t,
        time: i
      }
    }));
  }), e => {
    let t = {
      gpt_elapsed_time: e.gptElapsedTime,
      num_gpt_interactions: e.numGPTInteractions,
      interactions_removed: e.interactionsRemoved,
      num_interactions_need_destination_node: e.numInteractionsNeedDestinationNode,
      num_interactions_destination_node_is_same_tlf: e.numInteractionsDestinationNodeIsSameTLF
    };
    debugState.dispatch(Zh({
      name: 'prototype.ai_magic_link_gpt_post_processing',
      params: t
    }));
  });
  bA();
  let i = getSingletonSceneGraph();
  if (!i) throw new Error('No scene found');
  let f = i.getCurrentPage();
  if (!f) throw new Error('No page found');
  let C = debugState.getState().mirror.sceneGraphSelection;
  let T = debugState.dispatch;
  let k = (await getExperimentConfigAsync('magic_link_ai_models_v2')).get('variant', 'gpt-fine-tuned');
  let R = Ac(k);
  _$$c(async e => {
    let t = e.map(e => i.get(e.id)).map(async e => {
      let t = await e.loadImagesAndExport([{
        imageType: 'PNG',
        suffix: 'png'
      }]);
      return uint8ArrayToBase64(t);
    });
    return await Promise.all(t);
  });
  E0(async t => {
    let i = {
      endpointName: R.iconClassifierEndpointName,
      data: t.batch
    };
    let n = iconClassifierEndpointSchema.parse(i);
    return await cortexAPI.design.iconClassifier(n, {
      ..._$$Ay(),
      clientLifecycleId: e
    });
  });
  let N = Object.keys(C);
  N = N.flatMap(e => {
    let t = i.get(e);
    return t && t.type === 'SECTION' && t.childrenNodes ? t.childrenNodes.map(e => e.guid) : [e];
  });
  let P = Object.keys(C);
  if (P.length === 1) {
    let e = i.get(P[0]);
    e && e.type === 'SECTION' && (P = e.childrenNodes.filter(e => e.isTopLevelFrame()).map(e => e.guid));
  }
  P = (P = P.filter(e => e && PrototypingTsApi.isValidNodeForMagicLink(e))).flatMap(e => findVisibleSectionChild(i, e)?.guid ?? []);
  let {
    TEXT,
    ICON,
    IMAGE
  } = kC(i, P, ['TEXT', 'ICON', 'IMAGE']);
  T(Zh({
    name: 'prototype.ai_magic_link_started',
    params: {
      selectedNodeIds: JSON.stringify(N),
      numSelectedNodes: N?.length ?? 0,
      acceptedNodeIds: JSON.stringify(P),
      numAcceptedNodes: P?.length ?? 0,
      selectionType: 'broad',
      selectedNodeTlfIds: JSON.stringify(P),
      numTextNodes: TEXT?.length ?? 0,
      numVectorNodes: ICON?.length ?? 0,
      numImageNodes: IMAGE?.length ?? 0
    }
  }));
  try {
    if (!isMagicLinkEnabled()) throw new Error('Magic link is not enabled');
    let s = i.get(f.guid);
    if (!s || !s.childrenGuids) throw new Error('No page node found');
    let o = k9(s.guid, i);
    let l = P.map(e => Sh(e, o)).filter(Pe);
    let d = rq({
      ...o,
      children: l
    });
    let u = dT(P, i, !1, bc.jsxFilters).map(e => e.id).filter(e => void 0 !== e);
    let {
      selectionInput
    } = await e_(k, u, d);
    getFeatureFlags().internal_only_debug_tools && console.log('Kicking off Magic Link', {
      method: 'Broad'
    });
    let m = LI(selectionInput, e, t, T);
    let h = new Promise(e => {
      t.signal.addEventListener('abort', () => e({
        generatedInteractions: [],
        errorMessage: 'aborted'
      }));
    });
    let b = await Promise.race([m, h]);
    if (b.errorMessage) {
      if (b.errorMessage === 'aborted') {
        fullscreenValue.triggerAction('end-magic-link');
        return b;
      }
      if (b.errorMessage === 'All frames were filtered out') throw new ft();
      throw new Error(b.errorMessage);
    }
    let v = b.generatedInteractions.map(e => e.id);
    T(Zh({
      name: 'prototype.ai_magic_link_completed',
      params: {
        status: 'success',
        connectorIds: JSON.stringify(v),
        numConnectors: v.length
      }
    }));
    return b;
  } catch (e) {
    e instanceof FI && (logDebug('Magic Link', JSON.stringify(e.looseNodeInfo)), reportError(ServiceCategories.PROTOTYPING, new Error(e.toString())));
    T(Zh({
      name: 'prototype.ai_magic_link_completed',
      params: {
        status: 'failure',
        reason: e.toString(),
        numConnectors: 0
      }
    }));
    return e;
  }
};
export function $$T0(e, t) {
  let i = function (e, t) {
    if (e.length === 0) return null;
    let i = e.flatMap(e => {
      let {
        buttonID,
        destinationScreenID
      } = e;
      return [findVisibleSectionChild(t, buttonID) || t.get(buttonID), destinationScreenID ? t.get(destinationScreenID) : null].filter(e => !!e);
    }).map(e => e.absoluteBoundingBox).reduce((e, t) => e ? {
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      w: Math.max(e.x + e.w, t.x + t.w) - Math.min(e.x, t.x),
      h: Math.max(e.y + e.h, t.y + t.h) - Math.min(e.y, t.y)
    } : t);
    return {
      origin: {
        x: i.x,
        y: i.y
      },
      size: {
        x: i.w,
        y: i.h
      }
    };
  }(e, t);
  let n = t.getCurrentPage();
  let r = n?.guid;
  return i && r ? computeFullscreenViewportForNode({
    nodeId: r,
    nodeAbsoluteBounds: i,
    alwaysPan: !0,
    noPanViewportMultiplier: 0,
    panJustEnoughViewportMultiplier: 0.5
  }) : Promise.resolve(null);
}
export const Y = $$T0;
export const e = $$C1;
