import { useCallback, useEffect } from "react";
import { wA, d4 } from "../vendor/514228";
import { ServiceCategories } from "../905/165054";
import { ey } from "../905/859698";
import { BXd, CWU, glU } from "../figma_app/763686";
import { md, fp } from "../figma_app/27355";
import { az } from "../905/449184";
import { U as _$$U } from "../figma_app/901889";
import { h as _$$h } from "../905/207101";
import { ZC } from "../figma_app/39751";
import { jk } from "../905/609396";
import { $D } from "../905/11";
import { x1 } from "../905/714362";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { yA, rX, As, t5, _K, f$, Qn } from "../figma_app/933328";
import { ni, kX, V2 } from "../905/63598";
import { Ce } from "../905/156213";
import { Ak, Ki, Ff } from "../figma_app/582924";
import { wM } from "../figma_app/852050";
import { c as _$$c } from "../905/210851";
import { yV, q5 } from "../figma_app/516028";
import { Z } from "../905/116724";
import { TA } from "../905/372672";
import { rt } from "../figma_app/615482";
import { aD } from "../figma_app/646357";
import { T as _$$T } from "../905/486858";
import { bA } from "../figma_app/745458";
import { He } from "../figma_app/155728";
import { PW } from "../figma_app/633080";
import { AX, r6 } from "../905/542608";
import { sz } from "../905/753512";
function k() {
  $D(ServiceCategories.SCENEGRAPH_AND_SYNC, Error("Query for library consumers aborted during reconnect"));
}
export async function $$M1(e) {
  let t = Ak();
  let r = Ki(t);
  let {
    componentKeys,
    localIds
  } = e.reduce((e, t) => (t.component_key && e.componentKeys.push(t.component_key), e.componentKeys.push(...t.oldSubscribedKeysToUpdate), e.localIds.push(...t.localIdsToUpdate), e), {
    componentKeys: [],
    localIds: []
  });
  BXd.downloadAllSubscribedInstancesForUpdate(componentKeys, [], localIds, t);
  try {
    await r;
  } catch (e) {
    k();
  }
}
export async function $$F5(e) {
  let t = Ak();
  let r = Ki(t);
  let {
    componentKeys,
    stateGroupKeys,
    localIds
  } = e.reduce((e, t) => {
    for (let [r, n] of (e.stateGroupKeys.push(t.key), Object.entries(t.newStateKeyToOutdatedItems))) {
      e.componentKeys.push(r, ...n.oldSubscribedKeysToUpdate);
      e.localIds.push(...n.localIdsToUpdate);
    }
    return e;
  }, {
    componentKeys: [],
    stateGroupKeys: [],
    localIds: []
  });
  BXd.downloadAllSubscribedInstancesForUpdate(componentKeys, stateGroupKeys, localIds, t);
  try {
    await r;
  } catch (e) {
    k();
  }
}
export async function $$j3(e) {
  let t = Ak();
  let r = Ki(t);
  let {
    styleKeys,
    localIds
  } = e.reduce((e, t) => (e.styleKeys.push(t.key, ...t.oldSubscribedKeysToUpdate), e.localIds.push(...t.localIdsToUpdate), e), {
    styleKeys: [],
    localIds: []
  });
  BXd.downloadAllSubscribedStyleConsumersForUpdate(styleKeys, localIds, t);
  try {
    await r;
  } catch (e) {
    k();
  }
}
async function U(e) {
  let t = {
    [PW.CODE_COMPONENT]: []
  };
  for (let r of e) t[r.type].push(r.key);
  let r = [];
  for (let e of Object.keys(t)) if (t[e].length && e === PW.CODE_COMPONENT) {
    let n = Ak();
    let i = Ki(n);
    r.push(i);
    BXd.downloadAllSubscribedCodeInstancesForUpdate(t[e], n);
  }
  try {
    await Promise.all(r);
  } catch (e) {
    k();
  }
}
export async function $$B0(e, t) {
  let r = BXd.getTimestampForLibraryUpdateStart();
  Ff() && (await U(t));
  await e.dispatch(yA({
    assets: t,
    updateStartTime: r
  }));
}
export function $$G6(e, t = aD.ALL, r) {
  let a = wA();
  let u = bA(t);
  let p = md(yV);
  let {
    scopedComponentUpdates,
    scopedStateGroupUpdates,
    scopedStyleUpdates,
    scopedVariableSetUpdates,
    scopedLibraryAssetUpdates
  } = md(u);
  let B = d4(_$$c);
  let V = B.file_key;
  let H = p?.parentOrgId?.toString();
  let z = B.file_team_id?.toString();
  let W = B.productType;
  let {
    sessionId
  } = sz() ?? {};
  let Y = wM(scopedVariableSetUpdates.map((e) => e.key));
  let $ = useCallback((e, r) => {
    if (Object.values(AX).includes(e)) {
      let t = e === AX.REVIEW_INSTANCE_UPDATES_MODAL_UPDATE_INSTANCE || e === AX.DROPDOWN_UPDATE_SELECTED_INSTANCE;
      return `Instance Actions Menu > ${e} > ${t ? "Update instance" : "Update all"}`;
    }
    return Object.values(r6).includes(e) ? `${e} > Updates Modal > ${t} > ${r ? "Update all" : "Update"}` : "";
  }, [t]);
  let X = He();
  let q = _$$T();
  let J = useCallback(async (t, r) => {
    let n = BXd.getTimestampForLibraryUpdateStart();
    Ff() && (await $$M1(t));
    await a(rX({
      components: t,
      usedItemsByKey: e,
      instanceIdsToUpdate: r ?? [],
      updateStartTime: n,
      subscribedLibraryKeys: X,
      fileSubscribedLibraryKeys: q
    }));
  }, [a, e, X, q]);
  let Z = useCallback(async (t, r) => {
    let n = BXd.getTimestampForLibraryUpdateStart();
    Ff() && (await $$F5(t));
    await a(As({
      stateGroups: t,
      usedItemsByKey: e,
      instanceIdsToUpdate: r ?? [],
      updateStartTime: n,
      subscribedLibraryKeys: X,
      fileSubscribedLibraryKeys: q
    }));
  }, [a, e, X, q]);
  let Q = useCallback(async (e) => {
    let t = BXd.getTimestampForLibraryUpdateStart();
    Ff() && (await $$j3(e));
    await a(t5({
      styles: e,
      updateStartTime: t,
      subscribedLibraryKeys: X,
      fileSubscribedLibraryKeys: q
    }));
  }, [a, X, q]);
  let ee = useCallback(async (e) => {
    let t = BXd.getTimestampForLibraryUpdateStart();
    if (Ff()) {
      let t = Ak();
      let r = Ki(t);
      BXd.downloadAllSubscribedVariableSetConsumersForUpdate(e.map((e) => e.key), t);
      try {
        await r;
      } catch (e) {
        k();
      }
      for (let t of e) {
        let e = [];
        if (t.libraryVariableIdsForUpdate) {
          for (let [r, n] of CWU.getUsedSubscribedVariablesInSetByVariableKey(t.key)) {
            let t = Y[ey(r)];
            t && (n.size > 0 || !n.has(t.version)) && e.push(`VariableID:${r}/${t.version}`);
          }
          t.libraryVariableIdsForUpdate = e;
        } else x1("variables", "Expected variableSet to be an UpdateRootVariableSet");
      }
    }
    let r = CWU?.getSubscribedVariableSetsInfo();
    let n = new Map(r?.map((e) => [e.id.toString().split("/")[0], e.defaultModeID]));
    await a(_K({
      variableSets: e,
      updateStartTime: t
    }));
    let i = CWU?.getSubscribedVariableSetsInfo();
    let l = !1;
    if (!i) return !1;
    for (let e of i) if (n.get(e.id.toString().split("/")[0]) !== e.defaultModeID) {
      l = !0;
      break;
    }
    return l;
  }, [a, Y]);
  let et = useCallback(async (e) => {
    let t = BXd.getTimestampForLibraryUpdateStart();
    Ff() && (await U(e));
    await a(f$({
      assets: e,
      updateStartTime: t
    }));
  }, [a]);
  let er = useCallback(async (e) => {
    await et([e]);
  }, [et]);
  let en = useCallback((e, t) => {
    J([e], t);
    az.trackDefinedEvent("design_systems_analytics.ds_asset_updated", {
      fileKey: V,
      fileParentOrgId: H,
      fileTeamId: z,
      productType: W,
      libraryModalSessionId: sessionId,
      components: [e.component_key].toString(),
      entrypoint: $(r, !1)
    });
  }, [r, V, H, z, $, W, J, sessionId]);
  let ei = useCallback((e, t) => {
    Z([e], t);
    az.trackDefinedEvent("design_systems_analytics.ds_asset_updated", {
      fileKey: V,
      fileParentOrgId: H,
      fileTeamId: z,
      productType: W,
      libraryModalSessionId: sessionId,
      stateGroups: [e.key].toString(),
      entrypoint: $(r, !1)
    });
  }, [r, V, H, z, $, W, Z, sessionId]);
  let ea = useCallback((e) => {
    Q([e]);
    az.trackDefinedEvent("design_systems_analytics.ds_asset_updated", {
      fileKey: V,
      fileParentOrgId: H,
      fileTeamId: z,
      productType: W,
      libraryModalSessionId: sessionId,
      styles: [e.key].toString(),
      entrypoint: $(r, !1)
    });
  }, [r, V, H, z, $, W, Q, sessionId]);
  let es = useCallback(async (e) => {
    let t = await ee([e]);
    az.trackDefinedEvent("design_systems_analytics.ds_asset_updated", {
      fileKey: V,
      fileParentOrgId: H,
      fileTeamId: z,
      libraryModalSessionId: sessionId,
      productType: W,
      variableSets: [e.key].toString(),
      entrypoint: $(r, !1)
    });
    t && a(F.enqueue({
      type: "default-mode-changed",
      message: _$$t("variables.authoring_modal.default_mode_changed")
    }));
  }, [ee, V, H, z, sessionId, W, $, r, a]);
  let eo = _$$U();
  return {
    updateComponent: en,
    updateStateGroup: ei,
    updateStyle: ea,
    updateVariableSet: es,
    updateLibraryAsset: er,
    updateAll: useCallback(async () => {
      eo("library.update_all.attempt", {}, {
        forwardToDatadog: !0
      });
      let e = new jk("updateAll", {});
      e.start();
      try {
        let t = scopedComponentUpdates.length + scopedStateGroupUpdates.length + scopedStyleUpdates.length + scopedVariableSetUpdates.length;
        a(ni({
          total: t
        }));
        a(Ce());
        az.trackDefinedEvent("design_systems_analytics.ds_asset_updated", {
          fileKey: V,
          fileParentOrgId: H,
          fileTeamId: z,
          productType: W,
          libraryModalSessionId: sessionId,
          components: scopedComponentUpdates.map((e) => e.component_key).toString(),
          stateGroups: scopedStateGroupUpdates.map((e) => e.key).toString(),
          styles: scopedStyleUpdates.map((e) => e.key).toString(),
          variableSets: scopedVariableSetUpdates.map((e) => e.key).toString(),
          entrypoint: $(r, !0)
        });
        await J(scopedComponentUpdates, void 0);
        await Z(scopedStateGroupUpdates, void 0);
        await Q(scopedStyleUpdates);
        let n = await ee(scopedVariableSetUpdates);
        await et(scopedLibraryAssetUpdates);
        a(kX());
        n && a(F.enqueue({
          type: "default-mode-changed",
          message: _$$t("variables.authoring_modal.default_mode_changed")
        }));
        let i = e.stop();
        eo("library.update_all.success", {
          elapsedMs: i
        }, {
          forwardToDatadog: !0
        });
      } catch (t) {
        a(V2());
        eo("library.update_all.failure", {
          elapsedMs: e.stop()
        }, {
          forwardToDatadog: !0
        });
        return t;
      }
    }, [J, scopedComponentUpdates, scopedLibraryAssetUpdates, et, Z, scopedStateGroupUpdates, Q, scopedStyleUpdates, ee, scopedVariableSetUpdates, V, H, z, W, $, r, a, eo, sessionId])
  };
}
export function $$V4(e, t) {
  let {
    updateComponent,
    updateStateGroup
  } = $$G6(e, void 0, t);
  let s = wA();
  let l = useCallback((e, t) => {
    let r = glU.getOutdatedStyleConsumers(t);
    s(Qn({
      styleUpdateInfo: e,
      oldStyleGUID: t,
      consumerGUIDsToUpdate: r
    }));
  }, [s]);
  return {
    updateIndividualInstances: useCallback((e, t) => {
      for (let t of Object.values(e)) updateComponent(t.updateAsset, t.instanceIdsToUpdate);
      for (let e of Object.values(t)) updateStateGroup(e.updateAsset, e.instanceIdsToUpdate);
    }, [updateComponent, updateStateGroup]),
    updateAllConsumersOfStyleVersion: l
  };
}
let H = rt(!1);
export function $$z2({
  showBadge: e,
  hasChangesToPull: t,
  disabled: r
}) {
  let i = TA() ?? void 0;
  let a = q5();
  let [s, o] = fp(H);
  let c = ZC(e);
  let _ = useCallback((e) => {
    az.trackDefinedEvent("design_systems_analytics.update_notification_displayed", {
      userId: i,
      fileKey: a?.key,
      fileParentOrgId: a?.parentOrgId ?? void 0,
      fileTeamId: a?.teamId ?? void 0,
      onFileOpen: e,
      hasChangesToPull: t
    });
  }, [i, a?.key, a?.parentOrgId, a?.teamId, t]);
  let {
    start
  } = Z(() => {
    e && _(!0);
    o(!0);
  });
  _$$h(() => {
    r || start(1e3);
  });
  useEffect(() => {
    !r && s && e !== c && (e ? _(!1) : az.trackDefinedEvent("design_systems_analytics.update_notification_undisplayed", {
      userId: i,
      fileKey: a?.key,
      fileParentOrgId: a?.parentOrgId ?? void 0,
      fileTeamId: a?.teamId ?? void 0
    }));
  }, [_, e, c, s, i, a?.key, a?.parentOrgId, a?.teamId, r]);
}
export const L8 = $$B0;
export const Mz = $$M1;
export const Pf = $$z2;
export const RL = $$j3;
export const TM = $$V4;
export const a7 = $$F5;
export const se = $$G6;