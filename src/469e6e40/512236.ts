import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { showModalHandler } from "../905/156213";
import { batchUpdateOrgUsersAction } from "../figma_app/990058";
import { FUserRoleType } from "../figma_app/191312";
import { IY, PT, FW } from "../469e6e40/241454";
export function $$d1(e, t, a, n = {}) {
  a(showModalHandler({
    type: IY,
    data: {
      org: t,
      orgUserIds: e
    },
    showModalsBeneath: n.showModalsBeneath
  }));
}
export function $$c0(e, t, a, n, s, r, l, d = {}) {
  s(showModalHandler({
    type: PT,
    data: {
      org: n,
      orgUserIds: e,
      accountType: a,
      licenseType: t,
      updateAccountTypeFilterCounts: r,
      lastUpdateTimestampIfUsingUnloadedOrgUsers: l
    },
    showModalsBeneath: d.showModalsBeneath
  }));
}
export function $$_4(e, t, a, n, s, r, l, d, c = !1) {
  let u = a[t];
  r(showModalHandler({
    type: FW,
    data: {
      org: s,
      orgUserIds: e,
      newLicenseGroup: u,
      isCurrentUserOrgAdmin: n,
      updateLicenseGroupFilterCounts: l,
      lastUpdateTimestampIfUsingUnloadedOrgUsers: d
    },
    showModalsBeneath: c
  }));
}
export function $$u3(e, t, a, i, l, o) {
  let d;
  d = t ? {
    org_user_ids: e,
    workspace_id: t
  } : {
    org_user_ids: e,
    workspace_id: null
  };
  i(batchUpdateOrgUsersAction({
    orgId: a.id,
    lastUpdateTimestampOverride: o,
    params: d,
    successCallback: () => {
      i(VisualBellActions.enqueue({
        message: getI18nString("confirm_workspace_change.success_message", {
          numUsers: e.length
        }),
        type: "workspace-changed"
      }));
      l();
    }
  }));
}
export function $$m2(e, t, a) {
  t(batchUpdateOrgUsersAction({
    orgId: e.org_id,
    params: {
      org_user_ids: [e.id],
      permission: e.permission
    },
    successCallback: () => {
      t(VisualBellActions.enqueue({
        message: getI18nString("members_table.change_member_permission.success"),
        type: "member-permission-changed"
      }));
      (e.permission === FUserRoleType.ADMIN || e.permission === FUserRoleType.MEMBER) && a();
    }
  }));
}
export const Pt = $$c0;
export const QV = $$d1;
export const VS = $$m2;
export const ep = $$u3;
export const qj = $$_4;