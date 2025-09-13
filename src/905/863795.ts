import { isNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { atom } from "../figma_app/27355";
import { getResourceDataOrFallback } from "../905/723791";
import { orgSubscriptionAtom } from "../905/296690";
import { openFileAtom } from "../figma_app/516028";
import { ApprovedLibrariesForWorkspaceView, ApprovedLibrariesForOrgViewV2 } from "../figma_app/43951";
import { mainWorkspaceIdAtom } from "../figma_app/951233";
import { Oe } from "../figma_app/336853";
import { Me } from "../figma_app/598018";
let $$m4 = atom(e => {
  let t = (() => {
    let t = e(orgSubscriptionAtom);
    let i = e(openFileAtom);
    if (i) {
      if (!i.canEdit || !Oe(t)) return;
      let n = i.team?.workspaceId;
      return i.parentOrgId && !n ? e(mainWorkspaceIdAtom) : n;
    }
    let n = e(Me);
    if (Oe(t)) return n?.workspace_id;
  })();
  if (!t) return;
  let i = e(ApprovedLibrariesForWorkspaceView.Query({
    workspaceId: t
  }));
  return i.data?.workspace ?? void 0;
});
let $$h3 = atom(e => {
  let t = e($$m4);
  return A(t?.approvedLibraries ?? []);
});
let $$g2 = atom(e => {
  let t = e(orgSubscriptionAtom);
  if (!t || !Oe(t)) return new Set([]);
  let i = e(ApprovedLibrariesForOrgViewV2.Query({
    orgId: t.id
  }));
  return A(i.data?.org?.approvedLibraries ?? []);
});
let $$f0 = atom(e => {
  {
    let t = e(orgSubscriptionAtom);
    let i = e(mainWorkspaceIdAtom);
    if (!i || !Oe(t)) return;
    let n = e(ApprovedLibrariesForWorkspaceView.Query({
      workspaceId: i
    }));
    return n.data?.workspace ?? void 0;
  }
});
let $$_1 = atom(e => {
  let t = e($$f0);
  return A(t?.approvedLibraries ?? []);
});
function A(e) {
  return new Set(e.map(e => getResourceDataOrFallback(e.libraryKey)).filter(isNotNullish).map(_$$l));
}
export const G7 = $$f0;
export const Gg = $$_1;
export const S0 = $$g2;
export const bJ = $$h3;
export const d$ = $$m4;