import { WB } from "../905/761735";
import { XHR } from "../905/910117";
import { createOptimistThunk } from "../905/350402";
export function $$s1(e, t, r, i, a) {
  e.id && "optimistic-id" !== e.id ? WB()?.optimisticallyUpdate({
    FileBrowserPreferences: {
      [e.id]: {
        orderedTeamIds: e.orderedTeamIds,
        orderedFavoritedResourceIds: e.orderedFavoritedResourceIds,
        orderedSidebarSections: e.orderedSidebarSections,
        orgId: r,
        teamId: i,
        orderedLicenseGroupIds: e.orderedLicenseGroupIds
      }
    }
  }, a) : null != t && WB()?.optimisticallyCreate({
    FileBrowserPreferences: {
      "optimistic-id": {
        userId: t,
        migratedToSections: !0,
        sidebarMigrationStatus: null,
        orderedTeamIds: e.orderedTeamIds || null,
        orderedFavoritedResourceIds: e.orderedFavoritedResourceIds || null,
        orderedSidebarSections: e.orderedSidebarSections || null,
        updatedAt: new Date(),
        createdAt: new Date(),
        orgId: r,
        teamId: i,
        orderedLicenseGroupIds: e.orderedLicenseGroupIds || null
      }
    }
  }, a);
}
let $$o2 = createOptimistThunk((e, t) => {
  let r = e.getState().user?.id;
  let n = e.getState().currentUserOrgId;
  let a = e.getState().currentTeamId;
  let o = XHR.put("/api/file_browser_preferences", {
    ordered_team_ids: t.prefs.orderedTeamIds,
    ordered_favorites: t.prefs.orderedFavoritedResourceIds,
    org_id: n,
    team_id: a,
    ordered_license_group_ids: t.prefs.orderedLicenseGroupIds,
    ordered_sidebar_sections: t.prefs.orderedSidebarSections
  });
  $$s1(t.prefs, r, n, a, o);
});
let $$l0 = createOptimistThunk((e, t) => {
  let r = e.getState().user?.id;
  let n = e.getState().currentTeamId;
  let a = t.teamUser;
  let o = t.prefs.orderedFavoritedResourceIds;
  let l = [];
  if (o) for (var d of o) (a.favoritedFiles?.some(e => e.id === d) || a.favoritedPrototypes?.some(e => e.id === d)) && l.push(d);
  let c = a.favoritedProjects?.filter(e => t.orderedFolderSubscriptions.includes(e.resourceId)).map(e => e.id) ?? [];
  l.push(...c);
  let u = XHR.put("/api/file_browser_preferences", {
    ordered_favorites: l,
    team_id: n
  });
  $$s1({
    id: "optimistic-id",
    orderedFavoritedResourceIds: l
  }, r, null, n, u);
});
export const Sh = $$l0;
export const ah = $$s1;
export const yJ = $$o2;