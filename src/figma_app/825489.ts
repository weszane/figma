import { noop } from 'lodash-es';
import { l as _$$l } from "../905/716947";
import { atom, createRemovableAtomFamily, mg, createAtomWithEquality, setupCustomAtom } from "../figma_app/27355";
import s from "../vendor/239910";
import { Xm } from "../905/723791";
import { equals } from "../figma_app/476572";
import { canAdminPublish } from "../figma_app/275462";
import { figmaLibrariesEnabledAtom } from "../figma_app/657017";
import { getProviderConfigType } from "../figma_app/155411";
import { hasRootPath } from "../figma_app/528509";
import { mapLoadedFileComponents } from "../905/9585";
import { i as _$$i } from "../905/667910";
import { o as _$$o } from "../905/738144";
import { F } from "../905/686267";
import { kX, cM } from "../905/261982";
import { openFileAtom } from "../figma_app/516028";
import { createAtomWithReduxWithState, createReduxSubscriptionAtomWithState, setupReduxAtomWithState, attachReducerWrapper } from "../905/270322";
import { SubscribedLibrariesForFile, CommunityLibraryComponentsAndStateGroups, CommunityLibraryStyleData, CommunityLibraryVariableCollectionDataWithVariables, CommunityLibraryModules } from "../figma_app/43951";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { transformAndFilterSubscriptions } from "../figma_app/155728";
import { currentTeamAtom } from "../figma_app/598018";
import { LibrarySourceEnum } from "../figma_app/633080";
var o = s;
let $$x0 = atom(e => {
  let t = e(openFileAtom);
  if (!t) return Xm();
  let r = t.parentOrgId;
  let n = !!t.teamId;
  let i = hasRootPath(t?.project);
  let a = e(SubscribedLibrariesForFile.Query({
    fileKey: t.key ?? "",
    teamId: t.teamId ?? "-1",
    workspaceId: t.team?.workspaceId ?? null,
    orgId: r,
    group: getProviderConfigType() ?? null
  }));
  let s = e(figmaLibrariesEnabledAtom);
  let o = e(currentTeamAtom);
  let d = hasTeamPaidAccess(o);
  return transformAndFilterSubscriptions(a, n, i, s, r, d);
});
let N = createRemovableAtomFamily(e => mg($$x0, t => new Set(t.data?.map(t => t[e])), equals));
export function $$C2(e) {
  return N(e);
}
let $$w5 = createAtomWithReduxWithState(LibrarySourceEnum.LIBRARY, "SET_LIBRARY_PUBLISHING_MODE");
let $$O6 = createReduxSubscriptionAtomWithState(e => e.openFile?.publishedHubFile?.id);
let $$R1 = createReduxSubscriptionAtomWithState(e => e.openFile?.publishedHubFile?.libraryKey ? _$$l(e.openFile.publishedHubFile.libraryKey) : null);
let L = createReduxSubscriptionAtomWithState(e => e.openFile?.editorType);
let $$P3 = atom(null);
let D = (e, t) => t;
let $$k4 = (() => {
  let e = createAtomWithEquality(atom(e => {
    let t = e($$O6);
    let r = e(L);
    let n = {
      variableSets: {},
      variables: {},
      styles: {},
      components: {},
      stateGroups: {},
      modules: {}
    };
    if (!t || !canAdminPublish(r ?? void 0)) return n;
    let i = e(CommunityLibraryComponentsAndStateGroups.Query({
      hubFileId: t
    }));
    let a = mapLoadedFileComponents(i);
    let s = _$$o(i);
    let l = e(CommunityLibraryStyleData.Query({
      hubFileId: t
    }));
    let d = F(l);
    let u = e(CommunityLibraryVariableCollectionDataWithVariables.Query({
      hubFileId: t
    }));
    let p = kX({
      type: "community",
      value: u
    }, !0);
    let _ = cM({
      type: "community",
      value: u
    }, !0);
    let y = e(CommunityLibraryModules.Query({
      hubFileId: t
    }));
    let b = _$$i(y);
    n.variables = o()(_, "node_id");
    n.variableSets = o()(p, "node_id");
    n.styles = o()(d, "node_id");
    n.components = o()(a, "node_id");
    n.stateGroups = o()(s, "node_id");
    n.modules = o()(b, "node_id");
    return n;
  }, noop));
  let t = setupReduxAtomWithState(e, "SET_OPEN_HUB_FILE_PUBLISHED_LIVEGRAPH", {
    variableSets: {},
    variables: {},
    styles: {},
    components: {},
    stateGroups: {},
    modules: {}
  });
  let r = setupCustomAtom(t, D);
  return attachReducerWrapper(r, t.reducer);
})();
export const I1 = $$x0;
export const RG = $$R1;
export const cY = $$C2;
export const dL = $$P3;
export const jz = $$k4;
export const pz = $$w5;
export const yP = $$O6;
