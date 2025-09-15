import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk, Wk } from "../figma_app/272243";
import { N as _$$N } from "../905/438674";
import { U as _$$U } from "../0c62c2fd/547944";
import { getFeatureFlags } from "../905/601108";
import { xf } from "../figma_app/416935";
import { useSubscription } from "../figma_app/288654";
import { BigTextInputForwardRef, BUTTON_INTERNAL_CONST_Q33 } from "../figma_app/637027";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { LoadingOverlay } from "../figma_app/858013";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { renderI18nText, getI18nString } from "../905/303541";
import { bx } from "../905/34809";
import { vt } from "../figma_app/598926";
import { popModalStack, showModalHandler } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { TrackingProvider } from "../figma_app/831799";
import { h as _$$h } from "../905/864281";
import { b as _$$b2 } from "../905/388233";
import { selectCurrentUser } from "../905/372672";
import { FTeamAccessPermissionType, FPlanNameType, FPermissionLevelType, FResourceCategoryType } from "../figma_app/191312";
import { FolderCreation, UserFlagByName } from "../figma_app/43951";
import { mapOrgDomainProperties } from "../figma_app/349248";
import { H_ } from "../figma_app/336853";
import { getPermissionLevelName } from "../figma_app/12796";
import { t9, yI } from "../905/915142";
import { Wj } from "../905/913057";
import { UpsellModalType } from "../905/165519";
import { AccessLevelEnum } from "../905/557142";
import { Z as _$$Z } from "../figma_app/761870";
import { e0 } from "../905/696396";
import { e as _$$e } from "../905/393279";
import { useAtomWithSubscription } from "../figma_app/27355";
import { h as _$$h2 } from "../905/207101";
import { e as _$$e2 } from "../905/621515";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { N as _$$N2 } from "../figma_app/268271";
import { rq } from "../905/425180";
import { R as _$$R } from "../905/11928";
import { F_ } from "../905/858282";
import { QpH } from "../figma_app/6204";
import { _9, J4, YU, Iz } from "../figma_app/907616";
import { o6, gy } from "../905/986349";
import { F as _$$F } from "../905/154112";
let J = userFlagExistsAtomFamily("seen_sharing_clarity_project_modal_overlay");
let q = "sc_project_creation_permission_onboarding_key";
function X() {
  let e = useAtomWithSubscription(J);
  let {
    show,
    isShowing,
    complete
  } = _$$e2({
    overlay: QpH,
    priority: _$$N2.DEFAULT_MODAL
  }, [e]);
  _$$h2(() => {
    show({
      canShow: e => !e
    });
  });
  let i = jsx("a", {
    href: "https://help.figma.com/hc/articles/360038006494-Create-a-new-project",
    className: _$$s.colorTextOnbrand.underline.$,
    children: renderI18nText("rcs.sharing_clarity.learn_more")
  });
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: jsx("p", {
      children: renderI18nText("rcs.sharing_clarity.project_creation_permissions_description", {
        learnMoreLink: i
      })
    }),
    disableHighlight: !0,
    emphasized: !0,
    isShowing,
    onClose: complete,
    targetKey: q,
    title: renderI18nText("rcs.sharing_clarity.project_creation_permissions_title"),
    trackingContextName: "Sharing Clarity Project Creation Permission Onboarding",
    zIndex: _$$R.MODAL
  });
}
let et = "folder_creation_modal--sectionHeader--EcWYc text--fontPos11--2LvXf text--_fontBase--QdLsd";
export function $$er0(e) {
  let t = useDispatch();
  let [r, U] = useState("");
  let [W, $] = useState(!1);
  let [G, V] = useState(0);
  let z = FTeamAccessPermissionType.TEAM_ACCESS_EDIT;
  let H = _$$h.useTrackingContext({
    trigger: UpsellModalType.FOLDER_CREATION_MODAL
  });
  let K = useSelector(e => e.contacts);
  let Y = useSelector(e => e.dropdownShown);
  let J = useSelector(e => e.autocomplete);
  let er = selectCurrentUser();
  let ea = useSubscription(FolderCreation, {
    teamId: e.teamId
  });
  let es = useSubscription(UserFlagByName, {
    name: "seen_connected_project_in_project_creation_onboarding"
  });
  let ei = !!es.data?.currentUser?.userFlagByName;
  let en = getFeatureFlags().sc_workspace_audience;
  let eo = useMemo(() => {
    if ("loading" === ea.status || !ea.data) return null;
    let t = ea.data.team;
    if (!t) return null;
    let r = "loaded" === t.workspace.status ? t.workspace.data : void 0;
    let a = {
      id: e.teamId,
      name: t.name,
      imgUrl: t.imgUrl,
      subscription: t.subscription,
      student_team: !!t.studentTeamAt,
      grace_period_end: t.gracePeriodEnd,
      restrictions_list: t.restrictionsList,
      canAdmin: t.canAdmin,
      canEdit: t.canEdit,
      sharing_audience_control: t.sharingAudienceControl
    };
    let s = t.org && {
      id: t.org.id,
      name: t.org.name,
      img_url: t.org.imgUrl,
      org_domains: mapOrgDomainProperties(t.org.orgDomains),
      domain_capture: t.org.domainCapture,
      invite_whitelist_guest_invite_setting: t.org.inviteWhitelist?.guestInviteSetting
    };
    return {
      team: a,
      plan: t?.plan,
      org: s || null,
      workspace: r
    };
  }, [ea, e.teamId]);
  let el = eo && eo.team;
  let ed = eo && eo.org;
  let ec = eo && eo.plan;
  let eu = _$$b2(ec?.tier);
  let em = 1 === G && ec?.tier !== FPlanNameType.STARTER && eu && !ei;
  let e_ = ed && ed.org_domains ? ed.org_domains : {
    domains: [],
    isFetching: !1,
    fetchedAt: null
  };
  let ep = useCallback(() => el && el.sharing_audience_control !== FPermissionLevelType.ORG_EDIT && el.sharing_audience_control !== FPermissionLevelType.ORG_VIEW ? el.sharing_audience_control === FPermissionLevelType.WORKSPACE_EDIT || el.sharing_audience_control === FPermissionLevelType.WORKSPACE_VIEW ? _9.WORKSPACE : _9.INVITE_ONLY : _9.ORG, [el]);
  let ef = useCallback(() => el && (el.sharing_audience_control === FPermissionLevelType.ORG_EDIT || el.sharing_audience_control === FPermissionLevelType.WORKSPACE_EDIT) ? J4.EDIT : J4.VIEW, [el]);
  let [eg, eh] = useState(ep());
  let [ex, eb] = useState(ef());
  let [ev, ey] = useState(AccessLevelEnum.EDITOR);
  useEffect(() => {
    eh(ep());
    eb(ef());
  }, [ep, ef]);
  let ew = () => {
    1 === G ? V(0) : (t(popModalStack()), t(bx()));
  };
  let ej = e => t9(e, ed, e_);
  let eT = e => {
    let t = getFeatureFlags().folder_creation_restricted_guests_err_ui && ed?.invite_whitelist_guest_invite_setting != null;
    return yI(e, K.usersByEmail[e] || e, ed, e_, er.email, t ? getI18nString("project_creation.restricted_against_adding_external_users") : null);
  };
  let eE = () => ed && ed.domain_capture && e_.domains.length > 0 ? _$$Z(J).filter(e => xf(e) && !H_(e_.domains, e)) : [];
  let eI = e => {
    if (ed && ed?.invite_whitelist_guest_invite_setting == null && e.length > 0) {
      t(showModalHandler({
        type: _$$F,
        data: {
          emails: e,
          onConfirm: () => {
            eN();
          },
          popStack: !0,
          orgName: ed.name
        }
      }));
      return;
    }
  };
  let eN = () => {
    let a;
    eg === _9.ORG ? a = ex === J4.EDIT ? FPermissionLevelType.ORG_EDIT : FPermissionLevelType.ORG_VIEW : eg === _9.WORKSPACE ? a = ex === J4.EDIT ? FPermissionLevelType.WORKSPACE_EDIT : FPermissionLevelType.WORKSPACE_VIEW : eg === _9.INVITE_ONLY && (a = FPermissionLevelType.INVITE_ONLY);
    t(vt({
      shouldRedirect: !e.modalShown,
      name: r.trim(),
      teamId: e.teamId,
      isInviteOnly: void 0,
      isViewOnly: void 0,
      sharingAudienceControl: ed ? a : void 0,
      teamAccess: z,
      inviteEmails: _$$Z(J),
      inviteLevel: ev,
      orgId: ed?.id,
      onFolderCreated: e.onFolderCreated
    }));
  };
  let eC = useModalManager({
    open: e.open,
    onClose: ew
  });
  let eS = 0 === G ? jsxs(Fragment, {
    children: [jsx("div", {
      className: "folder_creation_modal--nameHeader--MgNL8 folder_creation_modal--sectionHeader--EcWYc text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: getI18nString("project_creation.name")
    }), jsx(BigTextInputForwardRef, {
      "aria-label": getI18nString("project_creation.project_name"),
      autoFocus: !0,
      className: "folder_creation_modal--folderNameInput--Lcn4c",
      maxLength: BUTTON_INTERNAL_CONST_Q33,
      minLength: 1,
      onBlur: () => $(!1),
      onChange: e => U(e.target.value),
      onFocus: () => $(!0),
      placeholder: getI18nString("project_creation.ex_growth_experiments"),
      required: !0,
      value: r
    }), 0 === r.trim().length && !W && jsx("div", {
      className: "folder_creation_modal--inputErrorMessage--AGzQC",
      children: getI18nString("project_creation.project_name_empty")
    }), ed && el && jsxs(Fragment, {
      children: [jsx("div", {
        className: et,
        "data-onboarding-key": q,
        children: getI18nString("project_creation.who_has_access")
      }), jsx(X, {}), jsx(YU, {
        resourceType: FResourceCategoryType.FOLDER,
        value: eg,
        onChange: eh,
        org: ed,
        team: el,
        audienceAccessLevel: ex,
        workspace: en ? eo.workspace : void 0
      }), eg !== _9.INVITE_ONLY && jsxs(Fragment, {
        children: [jsx("div", {
          className: et,
          children: getI18nString("folder_permissions_modal.what_they_can_do")
        }), jsx(Iz, {
          selectedPermissionsLevel: ex,
          setSelectedPermissionsLevel: eb
        }), jsx("div", {
          className: "folder_creation_modal--subtitle--H3qLc text--fontPos11--2LvXf text--_fontBase--QdLsd text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: ex === J4.VIEW ? getI18nString("project_creation.can_view_and_comment") : getI18nString("project_creation.can_create_and_edit_files")
        })]
      })]
    })]
  }) : (() => {
    let e = ed ? ed.id : null;
    let r = [AccessLevelEnum.EDITOR, AccessLevelEnum.VIEWER];
    return jsx("div", {
      className: "folder_creation_modal--stepTwoContainer--7Oi4o",
      children: jsx(_$$e, {
        SearchResultComponent: o6,
        TokenComponent: gy,
        autocomplete: J,
        dispatch: t,
        dropdownKey: "permissions-invite-dropdown",
        dropdownShown: Y,
        fixedAutocompleteResults: !0,
        getSearchResults: t => Wj(t, K.usersByEmail, er, [], e, null, null, {
          inviteLevel: ev,
          source: "folder-creation-modal"
        }),
        getSelectText: getPermissionLevelName,
        inviteLevel: ev,
        joinLinkShown: !1,
        onInviteLevelChange: ey,
        options: r,
        placeholderText: getI18nString("team_creation.add_a_name_or_email"),
        searchResultToken: ej,
        shouldAutoFocus: !0,
        useContainerRefForWidth: !0,
        validateToken: eT,
        validateTokensAsEmail: !0
      })
    });
  })();
  return jsx(TrackingProvider, {
    name: e0.CREATE_NEW_PROJECT_MODAL,
    properties: {
      teamId: el?.id,
      ...H
    },
    children: jsx(ModalRootComponent, {
      manager: eC,
      width: "lg",
      children: jsxs("div", {
        className: "folder_creation_modal--multiContents--U8sJ8",
        children: [jsxs(vo, {
          children: [jsx(Y9, {
            children: jsx(hE, {
              children: 0 === G ? getI18nString("project_creation.create_project") : getI18nString("project_creation.add_people_to_project_name", {
                projectName: r
              })
            })
          }), jsx(nB, {
            children: eo ? eS : jsx("div", {
              className: "folder_creation_modal--loading--9KmQd",
              children: jsx(LoadingOverlay, {})
            })
          }), eo && jsxs(wi, {
            children: [jsx("div", {
              className: "folder_creation_modal--footer--9Hie8 folder_creation_modal--subtitle--H3qLc text--fontPos11--2LvXf text--_fontBase--QdLsd",
              children: renderI18nText("project_creation.step_number_of_max_steps", {
                currentStep: G + 1,
                maxSteps: 2
              })
            }), jsxs(jk, {
              children: [jsx($z, {
                onClick: ew,
                variant: "secondary",
                children: 0 === G ? renderI18nText("project_creation.cancel") : renderI18nText("project_creation.back")
              }), jsx($z, {
                variant: "primary",
                onClick: () => {
                  if (0 === G) V(1);else if (ed) {
                    let e = eE();
                    e.length > 0 ? eI(e) : eN();
                  } else eN();
                },
                disabled: 0 === G && 0 === r.trim().length,
                children: 0 === G ? renderI18nText("general.continue") : renderI18nText("project_creation.create_project")
              })]
            })]
          })]
        }), em && jsx(Wk, {
          children: jsx(_$$_, {
            color: _$$S.INFORMATION,
            icon: jsx(_$$U, {}),
            onDismiss: () => {
              t(postUserFlag({
                seen_connected_project_in_project_creation_onboarding: !0
              }));
            },
            text: jsxs(Fragment, {
              children: [jsx("p", {
                className: _$$s.textBodyMediumStrong.$,
                children: getI18nString("project_creation.figma_has_connected_projects")
              }), jsx("p", {
                children: renderI18nText("project_creation.learn_more_about_the_benefit", {
                  learnMore: jsx(_$$N, {
                    newTab: !0,
                    href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
                    children: getI18nString("file_browser.team_settings.learn_more")
                  })
                })
              })]
            })
          })
        })]
      })
    })
  });
}
export const FolderCreationModal = $$er0;