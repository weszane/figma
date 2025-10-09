import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import o from "classnames";
import { isValidEmail } from "../figma_app/416935";
import { useSubscription } from "../figma_app/288654";
import { SecureLink } from "../figma_app/637027";
import { ListFormatter } from "../figma_app/257703";
import { renderI18nText, getI18nString } from "../905/303541";
import { autocompleteReset } from "../905/748726";
import { showModalHandler, popModalStack } from "../905/156213";
import { createOrgInvitesThunk } from "../figma_app/996356";
import { TrackingProvider } from "../figma_app/831799";
import { ViewAccessTypeEnum } from "../905/513035";
import { useCurrentUserOrg } from "../905/845253";
import { FPlanFeatureType } from "../figma_app/191312";
import { OrgInviteModalView } from "../figma_app/43951";
import { checkDomainExists } from "../figma_app/336853";
import { baseErrorSeverity } from "../905/44199";
import { ApprovalStatusEnum } from "../figma_app/736948";
import { getAllAutocompleteStrings } from "../figma_app/761870";
import { registerModal } from "../905/102752";
import { e as _$$e } from "../905/393279";
import { HeaderModal } from "../905/519092";
import { ConfirmationModal2 } from "../figma_app/918700";
import { jE } from "../figma_app/639088";
var l = o;
export function $$I0(e) {
  return jsx("div", {
    children: e.token.content
  });
}
export function $$U3({
  licenseGroupId: e,
  workspaceId: i,
  seatType: t,
  configs: o
}) {
  var l;
  let p = useDispatch<AppDispatch>();
  let E = useCurrentUserOrg();
  let T = useSelector(e => e.orgDomains.domains);
  let R = useSelector(({
    licenseGroups: i
  }) => e ? i[e] : void 0);
  let N = useSubscription(OrgInviteModalView, {
    workspaceId: i
  }, {
    enabled: !!i
  });
  let A = N.data?.workspace;
  let O = useSelector(e => e.selectedView);
  let j = useSelector(e => e.idpUserById.isCreatingOrgInvite);
  let [I, U] = useState(!1);
  let M = useMemo(() => o?.groupNameClassName ? e => jsx("span", {
    className: o.groupNameClassName,
    children: e
  }) : e => e, [o?.groupNameClassName]);
  let y = useMemo(() => R && A ? renderI18nText("org_invite.email_input_description.billing_group_and_workspace_disclaimer", {
    billingGroupName: M(R.name),
    workspaceName: M(A.name)
  }) : R ? renderI18nText("org_invite.email_input_description.billing_group_disclaimer", {
    billingGroupName: M(R.name)
  }) : A ? renderI18nText("org_invite.email_input_description.workspace_disclaimer", {
    workspaceName: M(A.name)
  }) : null, [R, A, M]);
  let D = n => {
    p(createOrgInvitesThunk({
      emails: getAllAutocompleteStrings(n),
      licenseGroupId: e,
      workspaceId: i,
      billableProductKey: t === ViewAccessTypeEnum.VIEW ? null : t
    }));
    p(autocompleteReset());
  };
  l = O.view;
  let G = !E.invite_whitelist_member_allowlist_enabled || "orgAdminSettings" === l;
  let P = S(E, O.view);
  let F = useMemo(() => {
    if (P) return renderI18nText("org_invite.email_input_description.guest_invite_allow_list", {
      orgName: E.name
    });
    let e = T.map(e => `@${e.domain}`);
    if (I) return renderI18nText("org_invite.email_input_description.multiple_domains.expanded", {
      orgName: E.name,
      domainList: jsx(ListFormatter, {
        children: e.map(e => jsx("span", {
          children: e
        }, e))
      })
    });
    let i = e[0];
    let t = e.length - 1;
    return 0 === t ? renderI18nText("org_invite.email_input_description.single_domain", {
      domain: i,
      orgName: E.name
    }) : renderI18nText("org_invite.email_input_description.multiple_domains.with_expand_link", {
      orgName: E.name,
      domain: i,
      expandLink: jsx(SecureLink, {
        onClick: () => U(!0),
        trusted: !0,
        children: renderI18nText("org_invite.email_input_description.multiple_domains.expand_link", {
          remainingDomainCount: t
        })
      })
    });
  }, [T, I, E.name, P]);
  let V = L(E, P);
  return {
    isSubmitting: j,
    submit: e => {
      if (T.length >= 1) {
        let i = getAllAutocompleteStrings(e).filter(e => isValidEmail(e) && !checkDomainExists(T, e));
        if ((i = [...new Set(i)]).length > 0) {
          p(showModalHandler({
            type: C,
            data: {
              emails: i,
              onConfirm: () => {
                D(e);
              }
            }
          }));
          return;
        }
      }
      D(e);
    },
    onValidateToken: e => {
      let i = isValidEmail(e) && checkDomainExists(T, e) && G;
      let t = isValidEmail(e) && P;
      return {
        state: i || t ? baseErrorSeverity.OK : baseErrorSeverity.ERROR,
        content: e
      };
    },
    infoText: jsxs(Fragment, {
      children: [F, " ", y]
    }),
    title: V
  };
}
function L(e, i) {
  return i ? getI18nString("org_invite.invite_users", {
    orgName: e.name
  }) : getI18nString("org_invite.invite_members", {
    orgName: e.name
  });
}
export function $$M2({
  licenseGroupId: e,
  workspaceId: i,
  dispatch: t,
  multiLineForm: a,
  buttonClassName: o,
  modalWrapperClassName: d,
  descriptionClassName: s
}) {
  let _ = useSelector(e => e.autocomplete);
  let {
    isSubmitting,
    onValidateToken,
    submit,
    infoText
  } = $$U3({
    licenseGroupId: e,
    workspaceId: i
  });
  return jsxs("div", {
    className: l()("org_invite_modal--modalWrapper--oH5a6", d),
    children: [jsx("p", {
      className: l()("org_invite_modal--description--dT4ZB", s),
      children: infoText
    }), jsx(_$$e, {
      TokenComponent: $$I0,
      autocomplete: _,
      buttonClassName: o,
      buttonText: getI18nString("org_invite.invite_button"),
      dispatch: t,
      dropdownShown: null,
      inviteLevel: FPlanFeatureType.STARTER,
      isSubmitting,
      multiLineForm: !!a,
      onSubmit: submit,
      shouldAutoFocus: !0,
      validateToken: onValidateToken
    })]
  });
}
function S(e, i) {
  return e.invite_whitelist_guest_invite_setting === ApprovalStatusEnum.REQUIRE_APPROVAL && "licenseGroup" !== i;
}
let $$y1 = registerModal(function ({
  licenseGroupId: e,
  workspaceId: i
}) {
  let t = useCurrentUserOrg();
  let a = useDispatch<AppDispatch>();
  let o = useSelector(e => e.selectedView);
  if (!t) return jsx(Fragment, {});
  let l = S(t, o.view);
  let d = L(t, l);
  return jsx(TrackingProvider, {
    name: "Org Invite Modal",
    children: jsx(HeaderModal, {
      title: d,
      onClose: () => {
        a(popModalStack());
        a(autocompleteReset());
      },
      children: jsx($$M2, {
        licenseGroupId: e,
        workspaceId: i,
        dispatch: a
      })
    })
  });
}, "ORG_INVITE_MODAL");
let C = registerModal(function (e) {
  return jsx(ConfirmationModal2, {
    confirmationTitle: getI18nString("org_invite.pending_guest_confirmation.title"),
    confirmText: getI18nString("org_invite.pending_guest_confirmation.button"),
    disableClickOutsideToHide: !0,
    onConfirm: e.onConfirm,
    popStack: !0,
    size: "small",
    children: jsx("div", {
      className: jE,
      children: jsxs(Fragment, {
        children: [renderI18nText("org_invite.pending_guest_confirmation.description", {
          numEmails: e.emails.length,
          emailList: jsx(ListFormatter, {
            className: "org_invite_modal--orgGuestEmails--JpKT2",
            children: e.emails
          })
        }), jsxs("a", {
          className: "org_invite_modal--orgGuestLink--tugVV blue_link--blueLink--9rlnd",
          target: "_blank",
          rel: "noopener",
          href: "https://help.figma.com/hc/articles/4420557314967-Members-versus-guests",
          children: [" ", renderI18nText("org_invite.pending_guest_confirmation.learn_more_link")]
        })]
      })
    })
  });
}, "CONFIRM_WHITELIST_ORG_GUEST_INVITE_MODAL");
export const rG = $$I0;
export const F4 = $$y1;
export const v$ = $$M2;
export const _u = $$U3;
