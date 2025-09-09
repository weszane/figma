import { useSelector } from "react-redux";
import { fileEntityDataMapper } from "../905/943101";
import { FPermissionLevelType, FViewPermissionType } from "../figma_app/191312";
import { PS } from "../figma_app/598018";
import { C } from "../905/222694";
function l(e, t) {
  return !!t.fileByKey[e]?.trashed_at;
}
export function $$d4(e, t) {
  let i = {};
  for (let n of e) !l(n, t) && n in t.fileByKey && (i[n] = t.fileByKey[n]);
  return i;
}
export function $$c7(e, t) {
  let i = {};
  for (let n of e) n in t.fileByKey && l(n, t) && t.fileByKey[n].folder_id && (i[n] = t.fileByKey[n]);
  return i;
}
export function $$u3(e, t, i) {
  return (!i || !!t.parent_org_id || !t.parent_team || !!t.parent_team.subscription) && (!i || !!t.parent_org_id || !!t.parent_team) && e;
}
export function $$p1(e, t) {
  return !!e && (!!PS(e) || !t);
}
export function $$m9(e) {
  return !!e && !e.parent_org_id && (e.link_access === FPermissionLevelType.VIEW || e.link_access === FPermissionLevelType.EDIT);
}
export function $$h6(e) {
  return $$g2(fileEntityDataMapper.toLiveGraph(e));
}
export function $$g2(e) {
  return !!e.hasFileLinkPassword && (e.linkAccess === FPermissionLevelType.VIEW || e.linkAccess === FPermissionLevelType.EDIT);
}
export function $$f5(e) {
  return !!e.has_proto_link_password && e.proto_link_access === FViewPermissionType.VIEW;
}
export function $$_8() {
  return useSelector(e => e.fileByKey);
}
export const Cn = C;
export const Oi = $$p1;
export const Ph = $$g2;
export const QZ = $$u3;
export const RD = $$d4;
export const Uj = $$f5;
export const i4 = $$h6;
export const sR = $$c7;
export const ud = $$_8;
export const zb = $$m9;
