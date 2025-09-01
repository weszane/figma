import { then } from "../1a115cee/344566";
import { Oin } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { NC } from "../905/17179";
import { sx } from "../905/449184";
import { N7 } from "../905/508367";
import { eD } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { serializeQuery } from "../905/634134";
import { H4 } from "../905/992467";
import { A as _$$A } from "../905/560427";
import { Ju } from "../905/102752";
import { to } from "../905/156213";
import { xA } from "../905/766303";
import { M as _$$M } from "../905/58217";
import { F as _$$F } from "../905/224";
import { Y5 } from "../figma_app/455680";
import { N as _$$N, L as _$$L } from "../905/293182";
import { ck } from "../figma_app/469876";
import { _I, $N, J5 } from "../905/327855";
import { Yu } from "../figma_app/139113";
import { FPlanLimitationType, FFileType } from "../figma_app/191312";
import { rR, sK } from "../figma_app/598018";
import { b as _$$b } from "../905/165519";
import { B } from "../905/18613";
import { vL, Bi } from "../905/652992";
import { f6, ai } from "../figma_app/915202";
import { ZN } from "../figma_app/630077";
import { t as _$$t } from "../figma_app/32680";
import { DV } from "../905/739964";
import { W } from "../905/442612";
import { i as _$$i } from "../figma_app/43065";
import { M as _$$M2 } from "../figma_app/854365";
import { nF } from "../905/350402";
let h = _$$A.createLazyComponent(() => then(e => e.AutosaveNewFileAlreadyOpenModal), {
  loading: () => null,
  error: H4.NONE,
  componentName: "AutosaveNewFileAlreadyOpenModal"
});
let g = Ju(h);
let $$j0 = nF((e, {
  state: t,
  from: i,
  editorType: n,
  triggerElement: a,
  team: s,
  openNewFileIn: o,
  fileName: l,
  folderId: d,
  isDraftsFolder: c,
  callback: u,
  presetName: p,
  figjamAiNewFileData: m,
  slidesAiNewFileData: h,
  figjamMakeSomethingUseCase: g,
  newFileDataLocalStorageKey: A,
  figmakeInitialMessage: b
}) => {
  if (s && !rR(s, {
    type: sK.ADD_FILE,
    editorType: n,
    isDestinationTeamDrafts: !!c
  })) {
    s.restrictions_list?.includes(FPlanLimitationType.LOCKED) ? e.dispatch(to({
      type: _$$t,
      data: {
        teamId: s.id,
        canEditTeam: void 0
      }
    })) : n === FFileType.FIGMAKE && W() ? e.dispatch(to({
      type: _$$i,
      data: {
        team: s
      }
    })) : n === FFileType.SITES && _$$M2 && !getFeatureFlags().sts_starter_enabled ? e.dispatch(to({
      type: _$$M2,
      data: {
        team: s
      }
    })) : e.dispatch(to({
      type: DV,
      data: {
        team: s,
        resource: n !== FFileType.FIGMAKE || getFeatureFlags().bake_starter_limit ? vL.FILE : Bi.FIGMAKE,
        action: ZN.CREATE_FILE,
        editorType: n,
        currentPlan: _$$F.Plan.STARTER,
        upsellPlan: _$$F.Plan.PRO,
        upsellSource: _$$b.CREATE_NEW_FILE
      }
    }));
    u && u(null);
    return;
  }
  let v = d ? {
    folderId: d
  } : i !== f6.FILE_BROWSER_SIDEBAR_DRAFTS && s ? null : "drafts";
  let I = xA({
    state: t,
    openNewFileIn: o,
    folderOverride: v,
    trackingInfo: {
      from: i,
      triggerElement: a,
      selectedView: t.selectedView
    },
    editorType: n,
    fileName: l,
    callback: u,
    figjamAiNewFileData: m,
    slidesAiNewFileData: h,
    figjamMakeSomethingUseCase: g,
    newFileDataLocalStorageKey: A,
    figmakeInitialMessage: b
  });
  p && (I.framePresetName = p);
  e.dispatch(V(I));
});
let $$U2 = nF((e, t) => {
  e.dispatch(V(t));
});
let $$B1 = nF((e, {
  file: t,
  openNewFileIn: i,
  source: n
}) => {
  let r = e.getState().user;
  if (!r) return;
  let a = () => {
    let r = B(t, i);
    e.dispatch($$U2(r));
    sx("New Autosave File Open", {
      openNewFileIn: i,
      source: n
    });
  };
  eD ? a() : _$$M(r.id, t).then(i => {
    if (i) {
      e.dispatch(to({
        type: g,
        data: {
          file: t
        }
      }));
      return;
    }
    a();
  });
});
let V = nF((e, t) => {
  if (ck() || !t.allowOnDesktop && 600 > _$$N()) return;
  let i = _I(t);
  if (Y5.resetLoadedFigFile(), eD) {
    if (t.allowOnDesktop) $N(e, t, !1);else {
      J5(e, t);
      return;
    }
  } else if (t.openNewFileIn === ai.NEW_TAB) {
    let e = serializeQuery(i);
    Ay.redirect(`/file/new${e ? "?" + e : ""}`, "_blank");
  } else if (N7(e.getState().currentUserOrgId, t.org_id)) {
    let e = serializeQuery(i);
    Ay.redirect(`/file/new${e ? "?" + e : ""}`);
  } else $N(e, t, !1);
  _$$L();
  let r = t.openNewFileIn === ai.SAME_TAB && (!eD || t.allowOnDesktop) ? Oin.HIDE_UI : Oin.OFF;
  Yu(!0);
  e.dispatch($$G3({
    openNewFileIn: t.openNewFileIn,
    progressBarMode: r
  }));
});
let $$G3 = NC("FULLSCREEN_NEW_FILE_OPEN");
export const zE = $$j0;
export const NA = $$B1;
export const uM = $$U2;
export const HO = $$G3;