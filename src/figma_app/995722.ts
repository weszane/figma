import { showModalHandler } from "../905/156213";
import { F } from "../905/224";
import { FViewPermissionType, FPermissionLevelType } from "../figma_app/191312";
import { Bi } from "../905/652992";
import { mapEditorTypeToFileType } from "../figma_app/53721";
import { DV } from "../905/739964";
export function $$d1(e) {
  let t = {
    audience: "inherit",
    level: "view",
    publicProto: null
  };
  e.proto_link_access === FViewPermissionType.ORG_VIEW || e.link_access === FPermissionLevelType.ORG_VIEW || e.link_access === FPermissionLevelType.ORG_EDIT || e.org_audience && null !== e.proto_link_access ? (e.org_browsable ? t.audience = "org-browsable" : t.audience = "org", t.publicProto = e.proto_link_access === FViewPermissionType.VIEW ? "on" : "off") : (e.link_access === FPermissionLevelType.VIEW || e.link_access === FPermissionLevelType.EDIT || e.proto_link_access === FViewPermissionType.VIEW) && (e.has_file_link_password || e.has_proto_link_password ? t.audience = "public-password" : t.audience = "public");
  e.link_access === FPermissionLevelType.EDIT || e.link_access === FPermissionLevelType.ORG_EDIT ? t.level = "edit" : e.link_access === FPermissionLevelType.ORG_VIEW || e.link_access === FPermissionLevelType.VIEW ? t.level = "view" : e.link_access === FPermissionLevelType.INHERIT && e.proto_link_access !== FViewPermissionType.INHERIT && null !== e.proto_link_access && (t.level = "proto-view-only");
  return t;
}
export function $$c0(e, t, r) {
  e(showModalHandler({
    type: DV,
    data: {
      team: r,
      editorType: mapEditorTypeToFileType(t),
      resource: Bi.PASSWORD_PROTECTION,
      currentPlan: F.Plan.STARTER,
      upsellPlan: F.Plan.PRO
    }
  }));
}
export const $ = $$c0;
export const v = $$d1;