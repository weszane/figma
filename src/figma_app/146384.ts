import { A } from "../905/920142";
import { h } from "../905/142086";
import { hideDropdownAction } from "../905/929976";
import { getRepoByIdAlt } from "../905/760074";
import { liveStoreInstance } from "../905/713695";
import { L } from "../905/657783";
export function $$d0(e, t) {
  return !!e && !!t && (e.creatorId === t.id && A(e.createdAt).add(30, "s").isAfter(A()) || e.canEdit);
}
export function $$c2(e, t, r, n) {
  return () => {
    if (e(hideDropdownAction()), !t) return;
    let o = getRepoByIdAlt(t, r);
    h({
      key: t.key,
      name: t.name,
      folder_id: t.folderId,
      team_id: t.teamId,
      editor_type: t.editorType,
      is_team_template: !!t.template && !t.template.unpublishedAt,
      is_published_site: t.isPublishedSite,
      parent_org_id: t.parentOrgId
    }, o, e, void 0, void 0, n);
  };
}
export function $$u1(e) {
  return !e.parentOrgId && !e.teamId;
}
liveStoreInstance.Query({
  fetch: async e => {
    if (!e) return null;
    let t = await L.getFileCanRequestEdit({
      fileKey: e
    });
    return !!t.data.meta?.can_request_edit;
  },
  key: "fileCanRequestEdit"
});
export const DF = $$d0;
export const Qy = $$u1;
export const RG = $$c2;