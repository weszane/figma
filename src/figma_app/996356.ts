import { NC } from "../905/17179";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { nF } from "../905/350402";
import { Lo } from "../905/156213";
let $$c1 = nF((e, t) => {
  let r = e.getState();
  let {
    emails,
    isResentInvite,
    licenseGroupId,
    workspaceId,
    billableProductKey
  } = t;
  e.dispatch($$p3({
    creating: !0
  }));
  XHR.post("/api/org_invites", {
    org_id: r.currentUserOrgId,
    emails,
    billable_product_key: billableProductKey,
    license_group_id: licenseGroupId,
    workspace_id: workspaceId
  }).then(({
    data: t
  }) => {
    let r = t.meta;
    e.dispatch($$h2(r));
    e.dispatch($$p3({
      creating: !1
    }));
    e.dispatch(Lo());
    let i = _$$t("org_invite.invite_resent");
    if (!isResentInvite) {
      let e = emails.length - r.length;
      i = r.length > 0 ? 0 === e ? _$$t("org_invite.new_members_message", {
        numInvites: r.length
      }) : 1 === e ? _$$t("org_invite.new_members_and_one_existing_member_message", {
        numInvites: r.length
      }) : _$$t("org_invite.new_members_and_multiple_existing_members_message", {
        numInvites: r.length,
        numExisting: e
      }) : _$$t("org_invite.existing_members_message", {
        numExisting: e
      });
    }
    e.dispatch(F.enqueue({
      message: i
    }));
  }).catch(t => {
    let r = t.data?.message || _$$t("org_invite.org_invite_creation_error");
    e.dispatch($$p3({
      creating: !1
    }));
    e.dispatch(F.enqueue({
      message: r,
      error: !0
    }));
  });
});
let $$u0 = nF((e, t) => {
  let {
    idpUser
  } = t;
  let n = e.getState();
  XHR.del(`/api/org_invites/${idpUser.id}`, {
    org_id: n.currentUserOrgId
  }).then(t => {
    e.dispatch($$_4({
      org_invite_id: idpUser.id
    }));
    e.dispatch(_$$s.flash(_$$t("org_invite.org_invite_deletion_success", {
      email: idpUser.email
    })));
  }).catch(t => {
    let r = t.data?.message || _$$t("org_invite.org_invite_deletion_error");
    e.dispatch(_$$s.flash(r));
  });
});
let $$p3 = NC("IS_CREATING_ORG_INVITES");
let $$_4 = NC("DELETE_ORG_INVITE");
let $$h2 = NC("SET_ORG_INVITES");
export const Fb = $$u0;
export const MB = $$c1;
export const hZ = $$h2;
export const wc = $$p3;
export const yH = $$_4; 
