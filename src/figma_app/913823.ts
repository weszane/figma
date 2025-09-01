import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { zl, eU } from "../figma_app/27355";
import { getInitialOptions } from "../figma_app/169182";
import { $D } from "../905/11";
import { XHR } from "../905/910117";
import { f as _$$f } from "../905/412913";
import { D3 } from "../905/359847";
import { nF } from "../905/350402";
import { uo, yJ } from "../figma_app/78808";
import { uo as _$$uo, lx, Ho, dC } from "../905/879323";
import { tg, xZ, VF } from "../figma_app/933328";
import { Cx, x2, of } from "../figma_app/714946";
import { qp } from "../905/977779";
import { LC, Ve, iw, kG } from "../figma_app/646357";
import { l as _$$l } from "../905/997221";
import { YG } from "../905/921418";
import { aV } from "../905/405710";
import { Sc, D2, VP } from "../905/18797";
import { zg } from "../figma_app/193867";
import { kb } from "../figma_app/502247";
import { nT, Bu } from "../figma_app/53721";
import { PW, Yu } from "../figma_app/633080";
import { $A } from "../905/862883";
import { Z } from "../905/939602";
import { yD } from "../905/92359";
let O = new Map();
async function R(e, t) {
  let r = zg(e.getState().selectedView);
  let n = !getInitialOptions().user_data;
  if (n && !r) return;
  if ((O.get(t) || 0) > 20) {
    LC();
    return;
  }
  let d = yD(t);
  if (!Sc(e.getState().loadingState, d)) {
    LC();
    return;
  }
  e.dispatch(Cx({
    key: d
  }));
  let c = e.getState();
  try {
    let r = c.selectedView.editorType;
    let o = function (e) {
      switch (e) {
        case nT.Whiteboard:
          return "figjam";
        case nT.Slides:
          return "slides";
        case nT.Cooper:
          return "cooper";
        default:
          return "design";
      }
    }(r);
    let p = Z.getLibrarySubscribedComponentsEditorType({
      key: t,
      editorType: o
    });
    let [m] = await Promise.all([p]);
    n || (await kb.promise);
    e.dispatch(uo({
      files: m.data.meta.files,
      subscribeToRealtime: !0
    }));
    m.data.meta.files.forEach(e => {
      Ve(e.key);
    });
    let y = zl.get(qp);
    let T = m.data.meta.hub_files;
    T && (T.forEach(e => {
      Ve(e.id);
    }), e.dispatch(D3(T)));
    let I = m.data.meta.state_groups.map(e => ({
      ...e,
      team_id: y[e.library_key]?.team_id
    }));
    let S = m.data.meta.components.map(e => ({
      ...e,
      team_id: y[e.library_key]?.team_id
    }));
    if (e.dispatch(_$$uo({
      items: I,
      type: PW.STATE_GROUP
    })), e.dispatch(_$$uo({
      items: S,
      type: PW.COMPONENT
    })), getFeatureFlags().dse_lk_realtime_audit) {
      let e = S.filter(e => !e.library_key);
      let t = I.filter(e => !e.library_key);
      (e.length > 0 || t.length > 0) && $D(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, Error("Missing library keys for components or state groups"), {
        tags: {
          numComponentsWithMissingLibraryKeys: e.length,
          numStateGroupsWithMissingLibraryKeys: t.length
        }
      });
    }
    LC();
    e.dispatch(x2({
      key: d
    }));
    YG.queryDidChange(e);
  } catch (r) {
    LC();
    O.set(t, (O.get(t) || 0) + 1);
    e.dispatch(of({
      key: d
    }));
  }
}
async function L(e) {
  let t = e.getState().openFile;
  if (!t) return;
  let r = iw(t.key);
  let i = e.getState().loadingState;
  if (!(D2(i, r) || VP(i, r))) {
    e.dispatch(Cx({
      key: r
    }));
    try {
      let t = e.getState().selectedView;
      if ("fullscreen" !== t.view) return;
      let i = await Z.getDefaultLibraries({
        editorType: Bu(t.editorType)
      });
      D(e, i.data.meta.components, PW.COMPONENT);
      D(e, i.data.meta.state_groups, PW.STATE_GROUP);
      i.data.meta.files.forEach(t => {
        t.team_id = Yu;
        e.dispatch(yJ({
          file: t
        }));
      });
      let a = i.data.meta.files.map(_$$l).filter(isNotNullish);
      e.dispatch(lx({
        libraryKeys: a
      }));
      kG();
      e.dispatch(x2({
        key: r
      }));
    } catch (t) {
      kG();
      e.dispatch(of({
        key: r
      }));
      YG.queryDidChange(e);
    }
  }
}
let P = _$$f();
let D = (e, t, r) => {
  let n = {
    [Yu]: {}
  };
  let i = {};
  t.forEach(e => {
    let t = P(e = aV(e));
    n[Yu][t] = n[Yu][t] || {};
    n[Yu][t][e.node_id] = e;
    (i[e.library_key] ??= {})[e.node_id] = e;
  });
  e.dispatch(Ho({
    publishedItemsByTeamId: n,
    publishedItemsByLibraryKey: i,
    type: r
  }));
};
let $$k2 = eU("loading");
let $$M3 = nF(e => {
  let t = e.getState();
  let r = !!t.user;
  if (!t.openFile?.key) return;
  let n = e.getState().selectedView;
  n && "fullscreen" === n.view && (n.editorType === nT.Whiteboard || n.editorType === nT.Slides || n.editorType === nT.Cooper ? L(e) : kG(), r && j(e, n.editorType === nT.Whiteboard ? $A.FigJam : $A.Design));
  r && (e.dispatch(tg()), xZ(e));
});
let $$F1 = "FETCH_RECENTLY_USED_LIBRARY_ITEMS";
async function j(e, t) {
  let r;
  if (VP(e.getState().loadingState, $$F1)) return;
  zl.set($$k2, "loading");
  e.dispatch(Cx({
    key: $$F1
  }));
  let n = e.getState();
  if ("fullscreen" !== n.selectedView.view) {
    e.dispatch(x2({
      key: $$F1
    }));
    zl.set($$k2, "loaded");
    return;
  }
  let i = new Set();
  let a = new Set();
  for (let e of n.recentlyUsed.libraryItems[t]) {
    let t = e.library_key;
    e.type === PW.COMPONENT && e.key && !n.library.publishedByLibraryKey.components[e.team_id]?.[t]?.[e.node_id] ? i.add(e.key) : e.type === PW.STATE_GROUP && e.key && !n.library.publishedByLibraryKey.stateGroups[e.team_id]?.[t]?.[e.node_id] && a.add(e.key);
  }
  if (0 === i.size && 0 === a.size) {
    e.dispatch(x2({
      key: $$F1
    }));
    zl.set($$k2, "loaded");
    return;
  }
  try {
    r = await XHR.post("/api/design_systems/components_state_groups", {
      component_keys: Array.from(i),
      state_group_keys: Array.from(a),
      org_id: n.openFile?.parentOrgId
    });
  } catch (t) {
    e.dispatch(of({
      key: $$F1
    }));
    zl.set($$k2, "loaded");
    return;
  }
  e.dispatch(x2({
    key: $$F1
  }));
  zl.set($$k2, "loaded");
  e.dispatch(uo({
    files: r.data.meta.files,
    subscribeToRealtime: !1
  }));
  e.dispatch(dC({
    subscribedOldKeyToNewKey: r.data.meta.move_remappings,
    localOldGuidToNewKey: {}
  }));
  let o = zl.get(qp);
  VF(r.data.meta.components, PW.COMPONENT, o, e.dispatch);
  VF(r.data.meta.state_groups, PW.STATE_GROUP, o, e.dispatch);
}
export let $$U4 = nF(e => {
  let t = e.getState().openFile;
  t && R(e, t.key);
});
export function $$B0(e) {
  e.dispatch($$U4());
}
export const QC = $$B0;
export const fi = $$F1;
export const s9 = $$k2;
export const x4 = $$M3;
export const zK = $$U4;