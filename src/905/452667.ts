import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { h } from "../905/142086";
import { AccessLevelEnum } from "../905/557142";
import { L } from "../905/657783";
export function $$l2(e, t) {
  let i = (i, n) => {
    let r = n.requestType === AccessLevelEnum.EDITOR && t.isInDraftsFolder && !t.hasOrg;
    "approved" === i && r && t.isFreeUserOnly ? d(e, i, t.file, t.repo, n) : $$c3(e, i, n);
  };
  return e => ({
    handleApprove: () => i("approved", e),
    handleDeny: () => i("denied", e)
  });
}
let d = (e, t, i, n, r) => h(i, n, e, {
  handlesVisualBell: !0,
  callback: i => {
    $$c3(e, t, r);
  }
});
export async function $$c3(e, t, i) {
  let {
    roleRequestId,
    handle,
    requestType
  } = i;
  try {
    "approved" === t ? (await L.acceptFileRoleRequest({
      roleRequestId,
      source: "share-modal"
    }), e(FlashActions.flash(getI18nString("role_request_row.request_approved_for_user_props_handle_to_edit_file", {
      userHandle: handle,
      requestType: $$p4(requestType)
    })))) : "denied" === t && (await L.denyFileRoleRequest({
      roleRequestId,
      source: "share-modal"
    }), e(FlashActions.flash(getI18nString("role_request_row.request_denied_for_user_props_handle_to_edit_file", {
      userHandle: handle,
      requestType: $$p4(requestType)
    }))));
  } catch (t) {
    e(FlashActions.flash(`Couldn't modify ${handle}'s request: ${t.message}`));
  }
}
export var $$u0 = (e => (e.Approved = "approved", e.Denied = "denied", e.Pending = "pending", e))($$u0 || {});
export function $$p4(e) {
  return e === AccessLevelEnum.VIEWER ? getI18nString("role_requests.view") : getI18nString("role_requests.edit");
}
export function $$m1(e) {
  return e === AccessLevelEnum.VIEWER ? "View" : "Edit";
}
export const IZ = $$u0;
export const aD = $$m1;
export const iF = $$l2;
export const wR = $$c3;
export const zg = $$p4;