import n from "../vendor/3757";
import { Fh } from "../905/448740";
import { getPublisherWorkspaceInfo, isSameWorkspace, extractWorkspaceId, isUserWorkspace, isOrgWorkspace, isTeamWorkspace } from "../figma_app/599979";
import { isWidgetOrPlugin } from "../figma_app/45218";
var r = n;
export let $$l0 = {
  displayName: "AuthorField",
  fetchInitialValue: ({
    existingResourceContent: e,
    user: t,
    existingAuthor: i,
    allowedAuthors: n,
    authedProfilesById: a,
    authedActiveCommunityProfile: l
  }) => {
    if (e && isWidgetOrPlugin(e) && i) return i;
    if (r()(n)) return;
    let d = getPublisherWorkspaceInfo(e || null, a, t.id || void 0);
    if (d && n.some(e => isSameWorkspace(e, d))) return d;
    let c = extractWorkspaceId(l);
    if (c && n.some(e => isSameWorkspace(e, c))) return c;
    let u = n.find(isUserWorkspace);
    if (u) return u;
    let p = n.find(isOrgWorkspace);
    if (p) return p;
    let m = n.find(isTeamWorkspace);
    if (m) return m;
  },
  validate: ({
    existingResourceContent: e,
    user: t,
    allowedAuthors: i
  }, n) => n ? !d(e, t) && i.every(e => !isSameWorkspace(e, n)) ? [{
    key: "INVALID_AUTHOR",
    data: {
      currentValue: n
    }
  }] : void 0 : [{
    key: "AUTHOR_MISSING",
    data: {}
  }],
  canSet: ({
    existingResourceContent: e,
    user: t
  }) => !d(e, t),
  isEqual: (e, t) => isSameWorkspace(e, t)
};
function d(e, t) {
  return !!(e && isWidgetOrPlugin(e) && !Fh(e) && e?.creator?.id && e.creator.id !== t.id);
}
export const q = $$l0;