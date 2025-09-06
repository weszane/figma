import { trackEventAnalytics } from "../905/449184";
import { WB } from "../905/761735";
import { XHR } from "../905/910117";
import { s as _$$s, Q } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { nF } from "../905/350402";
import { cL } from "../905/748726";
import { Lo, to } from "../905/156213";
import { bE, yH } from "../905/98702";
import { ds, z_ } from "../figma_app/314264";
import { ZW, U5 } from "../figma_app/349248";
import { H_ } from "../figma_app/336853";
import { getRolesForResource, getResourceTeamId, hasEditorRoleAccessOnTeam, hasAdminRoleAccessOnTeam } from "../figma_app/642025";
import { e6 } from "../905/557142";
import { t as _$$t2 } from "../figma_app/32680";
import { oE } from "../905/249410";
import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { T as _$$T } from "../figma_app/257703";
import { fu } from "../figma_app/831799";
import { v as _$$v } from "../905/124421";
import { Ju } from "../905/102752";
import { yX } from "../figma_app/918700";
import { jE } from "../figma_app/639088";
import { DQ, Pw } from "../figma_app/121751";
import { HZ, A5 } from "../figma_app/391338";
import { b as _$$b } from "../905/165519";
let T = Ju(function (e) {
  let t = useDispatch();
  return jsx(fu, {
    name: "Sharing with external users is disabled modal",
    properties: {
      emails: e.emails.toString(),
      resourceIdOrKey: e.resourceIdOrKey,
      resourceType: e.resourceType
    },
    children: jsx(yX, {
      confirmationTitle: getI18nString("permissions.guests_banned.sharing_with_external_users_is_disabled"),
      confirmText: getI18nString("permissions.guests_banned.got_it"),
      onConfirm: () => t(Lo()),
      hideOnConfirm: !1,
      disableClickOutsideToHide: !0,
      popStack: e.popStack,
      size: "small",
      hideCancel: !0,
      children: jsx("div", {
        className: jE,
        children: renderI18nText("permissions.guests_banned.invite_wasnt_sent_org_name", {
          numEmails: e.emails.length,
          listEmails: jsx(_$$T, {
            children: e.emails.map(e => jsx("span", {
              children: e
            }, e))
          }),
          orgName: e.orgName
        })
      })
    })
  });
}, "ORG_GUESTS_BANNED_MODAL");
function k(e) {
  return jsx("div", {
    style: {
      height: e.height || 12
    }
  });
}
let R = Ju(function (e) {
  let t = useDispatch();
  return jsx(fu, {
    name: "Admin approval needed modal",
    properties: {
      emails: e.emails.toString(),
      resourceIdOrKey: e.resourceIdOrKey,
      resourceType: e.resourceType
    },
    children: jsx(yX, {
      confirmationTitle: getI18nString("permissions.invites_require_access.almost_there"),
      confirmText: getI18nString("permissions.invites_require_access.got_it"),
      onConfirm: () => t(Lo()),
      disableClickOutsideToHide: !0,
      hideOnConfirm: !1,
      popStack: e.popStack,
      size: "small",
      hideCancel: !0,
      children: jsxs("div", {
        className: jE,
        children: [renderI18nText("permissions.invites_require_access.invites_sent_but_will_require_access_org_name", {
          numEmails: e.emails.length,
          listEmails: jsx(_$$T, {
            children: e.emails.map(e => jsx("span", {
              children: e
            }, e))
          }),
          resourceType: _$$v(e.resourceType),
          orgName: e.orgName
        }), jsx(k, {
          height: 24
        }), renderI18nText("permissions.invites_require_access.we_ll_connect_them_with_an_admin_who_can_help")]
      })
    })
  });
}, "REQUEST_ACCESS_WARNING_MODAL");
let N = Ju(function (e) {
  let t = useDispatch();
  return jsx(fu, {
    name: "Invite whitelist error modal",
    properties: {
      emails: e.emails.toString(),
      resourceIdOrKey: e.resourceIdOrKey,
      resourceType: e.resourceType
    },
    children: jsx(yX, {
      confirmationTitle: getI18nString("permissions.invite_error_modal.couldn_t_send_invite"),
      confirmText: getI18nString("permissions.invites_whitelist.got_it"),
      onConfirm: () => t(Lo()),
      hideOnConfirm: !1,
      disableClickOutsideToHide: !0,
      popStack: e.popStack,
      size: "small",
      hideCancel: !0,
      children: jsx("div", {
        className: jE,
        children: renderI18nText("permissions.invites_whitelist.the_following_users_were_not_approved_guests_in_org_name_org_please_request_access_for_them", {
          numEmails: e.emails.length,
          listEmails: jsx(_$$T, {
            children: e.emails.map(e => jsx("span", {
              children: e
            }, e))
          }),
          orgName: e.orgName
        })
      })
    })
  });
}, "INVITE_WHITELIST_ERROR_MODAL");
let P = Ju(function (e) {
  let t = useDispatch();
  return jsx(fu, {
    name: "Deprovisioned user invite error modal",
    properties: {
      emails: e.emails.toString(),
      resourceIdOrKey: e.resourceIdOrKey,
      resourceType: e.resourceType
    },
    children: jsx(yX, {
      confirmationTitle: getI18nString("permissions.invite_error_modal.couldn_t_send_invite"),
      confirmText: getI18nString("permissions.deprovisioned_users.got_it"),
      onConfirm: () => t(Lo()),
      hideOnConfirm: !1,
      disableClickOutsideToHide: !0,
      popStack: e.popStack,
      size: "small",
      hideCancel: !0,
      children: jsx("div", {
        className: jE,
        children: renderI18nText("permissions.deprovisioned_users.these_users_are_no_longer_in_the_org_name_organization_add_them_again_through_SCIM", {
          numEmails: e.emails.length,
          listEmails: jsx(_$$T, {
            children: e.emails.map(e => jsx("span", {
              children: e
            }, e))
          }),
          orgName: e.orgName
        })
      })
    })
  });
}, "DEPROVISIONED_USER_MODAL");
let O = Ju(function (e) {
  let t = useDispatch();
  return jsx(fu, {
    name: "Deprovisioned user invite error modal",
    properties: {
      emails: e.emails.toString(),
      resourceIdOrKey: e.resourceIdOrKey,
      resourceType: e.resourceType
    },
    children: jsx(yX, {
      confirmationTitle: getI18nString("permissions.invite_error_modal.couldn_t_send_invite"),
      confirmText: getI18nString("permissions.org_restricted_invite.got_it"),
      onConfirm: () => t(Lo()),
      hideOnConfirm: !1,
      disableClickOutsideToHide: !0,
      popStack: e.popStack,
      size: "small",
      hideCancel: !0,
      children: jsx("div", {
        className: jE,
        children: renderI18nText("permissions.org_restricted_invite.these_invites_couldn_t_be_sent_with_org_name.seat_rename", {
          numEmails: e.emails.length,
          listEmails: jsx(_$$T, {
            children: e.emails.map(e => jsx("span", {
              children: e
            }, e))
          }),
          orgName: e.orgName
        })
      })
    })
  });
}, "ORG_RESTRICTED_INVITE_MODAL");
let $$M3 = nF((e, {
  emails: t,
  resourceType: i,
  resourceIdOrKey: o,
  level: l,
  emailsToExclude: d,
  onSuccess: _,
  optimisticUpdates: b,
  onFailure: v,
  nodeId: I,
  source: E,
  initialView: x,
  orgName: S,
  billableProductKey: w,
  teamId: C
}) => {
  let T = e.getState().contacts;
  let k = {};
  let R = [];
  let N = t.filter(e => !(d && d.has(e)));
  for (let t of N) {
    let n = T.usersByEmail[t];
    let r = {
      id: `temp-role-${t}`,
      created_at: Date.now(),
      user_id: null,
      user: {
        ...n,
        email: t
      },
      resource_type: i,
      resource_id_or_key: o,
      level: l,
      pending: !0,
      updated_at: `${new Date()}`
    };
    k[t] = r;
    R = [...R, r];
    e.dispatch(bE({
      role: r
    }));
  }
  b?.(R);
  let P = e.getState();
  if (P.currentUserOrgId) {
    let e = P.autocomplete.inputValue;
    let r = !!e && !H_(P.orgDomains.domains, e);
    let a = t.filter(t => t !== e && !H_(P.orgDomains.domains, t));
    let s = {
      resourceType: i,
      resourceIdOrKey: o,
      level: l,
      orgId: P.currentUserOrgId,
      numInvited: t.length,
      numValidated: P.autocomplete.tokens.length,
      numUnvalidated: e ? 1 : 0,
      numValidatedGuests: a.length,
      numUnvalidatedGuests: r ? 1 : 0,
      initialView: x,
      billableProductKey: w
    };
    "file" === i ? ds("Invited Emails", o, P, s) : trackEventAnalytics("Invited Emails", {
      ...s,
      source: E
    });
  }
  let O = XHR.post("/api/invites", {
    emails: t,
    resource_type: i,
    resource_id_or_key: o,
    level: l,
    node_id: I,
    initial_view: x,
    billable_product_key: w
  }).then(({
    data: t
  }) => {
    for (let n of (e.dispatch(cL()), t.meta.invites)) {
      z_("Role Invite Sent", n, {
        level: n.level,
        resourceType: i,
        roleUserEmail: n.user?.email
      }, {
        forwardToDatadog: !0
      });
      e.dispatch(bE({
        role: n
      }));
    }
    let n = !1;
    let r = t.meta.invites_with_status;
    r && (n = $$U0(r, i, o, e.dispatch, k, S));
    _?.(t.meta, n);
  }, ({
    response: n
  }) => {
    e.dispatch(cL());
    try {
      n = JSON.parse(n);
    } catch (e) {
      console.error("Failed to parse invite response:", e);
      n = {
        error: !0,
        reason: "json"
      };
    }
    if (n.error && !n.message && (n.message = `An error occurred while sending ${1 === t.length ? "this invite" : "these invites"}.`), "NEEDS_PAYMENT" === n.reason) {
      let t = null;
      let n = e.getState();
      let r = getRolesForResource(i, o, n);
      r && (t = getResourceTeamId(r[0], n));
      let a = DQ(Pw.GROUP_7);
      let s = HZ({
        oldValue: t ?? "",
        newValue: C,
        label: A5.RoleInvites.teamId,
        enableFullRead: a
      });
      if (a) e.dispatch(to({
        type: _$$t2,
        data: {
          teamId: s,
          canEditTeam: void 0
        }
      }));else {
        let t = s && {
          ...n.teams[s],
          canEdit: hasEditorRoleAccessOnTeam(s, n),
          canAdmin: hasAdminRoleAccessOnTeam(s, n)
        };
        e.dispatch(to({
          type: oE,
          data: {
            team: t,
            editorType: null,
            upsellSource: _$$b.ADD_EDITOR
          }
        }));
      }
    } else e.dispatch(_$$s.error(n.message));
    for (let t of N) e.dispatch(yH({
      role: k[t]
    }));
    v?.();
  });
  let M = ZW(i);
  M && WB().optimisticallyCreate({
    [M]: U5(N.map(e => ({
      id: `temp-role-${e}`,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: null,
      pending: !0,
      resourceType: i,
      resourceId: o,
      level: l,
      pendingEmail: e,
      user: null
    })))
  }, O);
});
let j = (e, t, i) => {
  if (i) for (let n of e) t(yH({
    role: i[n.email]
  }));
};
export function $$U0(e, t, i, n, r, a) {
  let l = e.reduce((e, t) => (t.type && (e[t.type] = e[t.type] || [], e[t.type].push(t)), e), Object.create(null));
  let d = Object.keys(l).length > 0;
  l.no_self_invite?.length > 0 && n(_$$s.error(getI18nString("team_view.team_permissions_modal.youre_not_able_to_send_an_invite_to_yourself")));
  l.user_requires_approval?.length > 0 && a && (n(to({
    type: R,
    data: {
      emails: l.user_requires_approval.map(e => e.email),
      resourceType: t,
      resourceIdOrKey: i,
      popStack: !0,
      orgName: a
    }
  })), j(l.user_requires_approval, n, r));
  l.org_guests_banned?.length > 0 && a && (n(to({
    type: T,
    data: {
      emails: l.org_guests_banned.map(e => e.email),
      resourceType: t,
      resourceIdOrKey: i,
      popStack: !0,
      orgName: a
    }
  })), j(l.org_guests_banned, n, r));
  l.org_whitelist?.length > 0 && a && (n(to({
    type: N,
    data: {
      emails: l.org_whitelist.map(e => e.email),
      resourceType: t,
      resourceIdOrKey: i,
      popStack: !0,
      orgName: a
    }
  })), j(l.org_whitelist, n, r));
  l.deprovisioned?.length > 0 && a && (n(to({
    type: P,
    data: {
      emails: l.deprovisioned.map(e => e.email),
      resourceType: t,
      resourceIdOrKey: i,
      popStack: !0,
      orgName: a
    }
  })), j(l.deprovisioned, n, r));
  l.org_restricted_invite?.length > 0 && a && (n(to({
    type: O,
    data: {
      emails: l.org_restricted_invite.map(e => e.email),
      resourceType: t,
      resourceIdOrKey: i,
      popStack: !0,
      orgName: a
    }
  })), j(l.org_restricted_invite, n, r));
  return d;
}
let $$B1 = nF((e, {
  invites: t,
  inviteLevel: i,
  file: n,
  folderName: r
}) => {
  let a = n && r ? `Moved '${n.name}' to ${r}` : void 0;
  i >= e6.EDITOR && r && n ? a && e.dispatch(_$$F.enqueue({
    type: "file-moved",
    message: ((e, t, i, n) => {
      if (0 === e.length) return n;
      let r = e.map(e => e.user.email).filter(e => void 0 !== e);
      if (0 === r.length) return n;
      let a = `been invited to edit '${t}' in ${i}`;
      return r.length > 1 ? `${r[0]} and ` + (r.length > 2 ? `${r.length - 1} others have ` : "1 other has ") + a : `${r[0]} has ${a}`;
    })(t, n.name, r, a)
  })) : e.dispatch(_$$F.enqueue({
    type: "invite-sent",
    message: getI18nString("file_permissions_modal.invited_num_people", {
      num_invites: t.length
    })
  }));
});
let $$V2 = nF((e, {
  role: t
}) => {
  let i = XHR.post("/api/invites/resend", {
    email: t.user.email,
    resource_type: t.resource_type,
    resource_id_or_key: t.resource_id_or_key
  }).then(() => {
    e.dispatch(_$$s.flash("Invite email sent again!"));
  });
  e.dispatch(Q({
    promise: i,
    fallbackError: "Failed to resend invite emails."
  }));
});
export const Ef = $$U0;
export const kF = $$B1;
export const $S = $$V2;
export const rq = $$M3;