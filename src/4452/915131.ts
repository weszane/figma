import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo, useCallback, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { Textarea } from "../905/909590";
import { bL, l9, mc, c$ } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { LabelPrimitive } from "../905/865071";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { isValidEmail } from "../figma_app/416935";
import { useSubscription } from "../figma_app/288654";
import { BigTextInputForwardRef, ButtonSecondaryTracked, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { LoadingOverlay } from "../figma_app/858013";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { cL } from "../905/748726";
import { fetchContactsOptimist } from "../905/14223";
import { popModalStack, showModalHandler } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { KQ as _$$KQ } from "../figma_app/475472";
import { selectCurrentUser } from "../905/372672";
import { FPermissionLevelType, FAccessLevelType, FBasicPermissionType, FPlanNameType, FResourceCategoryType } from "../figma_app/191312";
import { TeamCreationWorkspaceView } from "../figma_app/43951";
import { checkDomainExists } from "../figma_app/336853";
import { getPermissionLevelName } from "../figma_app/12796";
import { t9, yI } from "../905/915142";
import { useCurrentPlanUser, useIsOrgAdminUser, useCurrentPublicPlan } from "../figma_app/465071";
import { Wj } from "../905/913057";
import { AccessLevelEnum } from "../905/557142";
import { teamVisibilityEnum, teamConstant } from "../figma_app/630077";
import { UNASSIGNED } from "../905/247093";
import { Z as _$$Z } from "../figma_app/761870";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { e as _$$e } from "../905/393279";
import { z6 } from "../figma_app/805373";
import { j as _$$j, F as _$$F } from "../4452/869669";
import { HeaderModal } from "../905/519092";
import { _9, J4, YU, Kd, Iz } from "../figma_app/907616";
import { o6, gy } from "../905/986349";
import { confirmOrgGuestInviteModal } from "../905/154112";
import { A as _$$A } from "../svg/38542";
let W = "team_creation_modal--sectionHeader--WhxZn text--fontPos11--2LvXf text--_fontBase--QdLsd";
let z = "team_creation_modal--flexRow---ZX7J";
function Q(e) {
  let t = useDispatch();
  let a = useSelector(e => e.contacts);
  let n = useSelector(e => e.orgDomains);
  let i = useSelector(e => e.orgById);
  let l = useSelector(e => e.dropdownShown);
  let o = useSelector(e => e.autocomplete);
  let d = selectCurrentUser();
  let c = t => {
    let a = e.currentOrgId ? i[e.currentOrgId] : null;
    return t9(t, a, n);
  };
  let m = t => {
    let s = e.currentOrgId ? i[e.currentOrgId] : null;
    let r = getFeatureFlags().team_creation_restricted_guests_err_ui && s?.invite_whitelist_guest_invite_setting != null;
    return yI(t, a.usersByEmail[t] || t, s, n, d.email, r ? getI18nString("team_creation.restricted_against_adding_external_users") : null);
  };
  let _ = [AccessLevelEnum.ADMIN, AccessLevelEnum.EDITOR, AccessLevelEnum.VIEWER];
  return e.inviteLevel && e.onInviteLevelChange ? jsx(_$$e, {
    SearchResultComponent: o6,
    TokenComponent: gy,
    autocomplete: o,
    dispatch: t,
    dropdownKey: "permissions-invite-dropdown",
    dropdownShown: l,
    getSearchResults: t => Wj(t, a.usersByEmail, d, [], e.currentOrgId, null, null, {
      inviteLevel: e.inviteLevel,
      source: "team-invite-bar"
    }),
    getSelectText: getPermissionLevelName,
    inviteLevel: e.inviteLevel,
    joinLinkShown: !1,
    onInviteLevelChange: e.onInviteLevelChange,
    options: _,
    placeholderText: getI18nString("team_creation.add_a_name_or_email"),
    searchResultToken: c,
    shouldAutoFocus: !0,
    validateToken: m,
    validateTokensAsEmail: !0
  }) : jsx(_$$e, {
    SearchResultComponent: o6,
    TokenComponent: gy,
    autocomplete: o,
    dispatch: t,
    dropdownShown: l,
    getSearchResults: t => Wj(t, a.usersByEmail, d, [], e.currentOrgId, null, null, {
      inviteLevel: e.inviteLevel,
      source: "team-invite-bar"
    }),
    inviteLevel: e.permissionLevel,
    joinLinkShown: !1,
    searchResultToken: c,
    shouldAutoFocus: !0,
    validateToken: m
  });
}
export function $$Y1(e, t) {
  return e === _9.ORG ? t === J4.EDIT ? FPermissionLevelType.ORG_EDIT : FPermissionLevelType.ORG_VIEW : e === _9.WORKSPACE ? t === J4.EDIT ? FPermissionLevelType.WORKSPACE_EDIT : FPermissionLevelType.WORKSPACE_VIEW : FPermissionLevelType.INVITE_ONLY;
}
export let $$K0 = registerModal(function (e) {
  let t = useDispatch();
  let a = useSelector(e => e.currentUserOrgId) ?? "";
  let N = useSelector(e => e.orgById)[a];
  let R = selectCurrentUser();
  let k = useSelector(e => e.orgDomains);
  let [P, D] = useState(!0);
  useEffect(() => {
    trackEventAnalytics("team_creation_started", {
      user_id: R?.id ?? "",
      org_id: a
    });
  }, []);
  useEffect(() => {
    t(fetchContactsOptimist());
  }, [t]);
  let V = useSubscription(TeamCreationWorkspaceView({
    orgId: a
  }));
  let K = useCurrentPlanUser("TeamCreationModal");
  let X = useIsOrgAdminUser(K).unwrapOr(!1);
  let J = useMemo(() => {
    if ("loaded" === V.status) {
      let e = V.data.org?.workspaces?.filter(e => e.canCreateTeam) ?? [];
      sortByPropertyWithOptions(e, "name");
      return e;
    }
    return [];
  }, [V]);
  let Z = useMemo(() => {
    if ("loaded" === V.status) {
      let e = V.data.currentUser.baseOrgUser?.workspaceUsers?.filter(e => e.isMainWorkspace);
      return e && e.length > 0 ? e[0].workspaceId : UNASSIGNED;
    }
    return null;
  }, [V]);
  let ee = e.workspaceId;
  let et = J.find(e => e.id === ee);
  let ea = et && et.orgAccess === FAccessLevelType.SECRET ? FAccessLevelType.PRIVATE : FAccessLevelType.PUBLIC;
  let es = et && et.orgAccess === FAccessLevelType.SECRET ? _9.INVITE_ONLY : _9.ORG;
  let en = useMemo(() => ("loading" !== V.status && D(!1), "loaded" === V.status) ? V.data.currentUser.baseOrgUser : null, [V]);
  let [er, ei] = useState(0);
  let [el, eo] = useState(ea);
  useEffect(() => {
    eo(ea);
  }, [ea]);
  let ed = FBasicPermissionType.EDIT;
  let [ec, eu] = useState(AccessLevelEnum.EDITOR);
  let [em, e_] = useState(e?.workspaceId ?? Z);
  let ep = getFeatureFlags().sc_workspace_audience;
  let eg = useCallback(e => {
    let t = J.find(t => t.id === e);
    if (ep && t) return {
      id: t.id,
      name: t.name,
      imgUrl: t.imgUrl
    };
  }, [J, ep]);
  let [eh, ex] = useState(eg(em));
  useEffect(() => {
    e_(e => e ?? Z);
    ex(eg(em));
  }, [Z, em, eg]);
  let ef = useSelector(e => e.autocomplete);
  let ev = !!ef.errorMessage;
  let [eb, ey] = useState(J4.VIEW);
  let [ej, eI] = useState(teamVisibilityEnum.ORG_BROWSABLE);
  let [eE, eS] = useState(es);
  useEffect(() => {
    eS(es);
  }, [es]);
  let [eT, eA] = useState("");
  let [ew, eN] = useState("");
  let eR = useCurrentPublicPlan("TeamCreationModal").transform(e => e.tier === FPlanNameType.ENTERPRISE).unwrapOr(!1) && J.length > 0;
  (X || Z === UNASSIGNED) && J.length > 0 && (J = J.concat({
    id: UNASSIGNED,
    name: getI18nString("team_creation.unassigned_workspace"),
    canCreateTeam: !0,
    orgAccess: FAccessLevelType.PUBLIC,
    imgUrl: null
  }));
  let eC = useId();
  let ek = getFeatureFlags().fpl_textarea_migration ? jsx(Textarea, {
    onChange: eN,
    value: ew,
    placeholder: getI18nString("team_creation.optional"),
    id: eC
  }) : jsx(BigTextInputForwardRef, {
    className: "team_creation_modal--descriptionInput--cLVf4",
    type: "textarea",
    onChange: e => eN(e.target.value),
    value: ew,
    placeholder: getI18nString("team_creation.optional"),
    id: eC
  });
  let eq = e => jsx("div", {
    className: "team_creation_modal--workspaceIcon--s7G4E",
    children: e && e.id !== UNASSIGNED ? jsx(z6, {
      entity: e,
      size: 16
    }) : jsx(SvgComponent, {
      svg: _$$A
    })
  });
  let eM = jsxs(bL, {
    value: em ?? UNASSIGNED,
    onChange: e => e_(e ?? UNASSIGNED),
    children: [jsx(l9, {
      label: jsx(HiddenLabel, {
        children: getI18nString("team_creation.workspace")
      }),
      size: "lg",
      width: "fill",
      children: jsx("div", {
        className: "team_creation_modal--workspaceSelectorTrigger--rUsd4",
        id: "create-team-modal-workspace-selector",
        children: jsxs("div", {
          className: z,
          children: [jsx("div", {
            children: eq(J.find(e => e.id === em))
          }), jsx("div", {
            children: J.find(e => e.id === em)?.name ?? ""
          })]
        })
      })
    }), jsx(mc, {
      children: J.map(e => jsx(c$, {
        value: e.id,
        children: jsxs("div", {
          className: z,
          children: [eq(e), e.name]
        })
      }, e.id))
    })]
  });
  let eO = useId();
  let eL = jsx(Fragment, {
    children: jsx(BigTextInputForwardRef, {
      autoFocus: !0,
      className: "team_creation_modal--teamNameInputSC--bbcKV",
      "data-testid": "team_creation_modal_title",
      id: eO,
      maxLength: teamConstant,
      minLength: 1,
      onChange: e => eA(e.target.value),
      placeholder: getI18nString("team_creation.writer_s_guild_placeholder"),
      required: !0,
      value: eT
    })
  });
  function eP() {
    let {
      onSubmitReturnToPrevView = !0
    } = e;
    let s = ec ?? AccessLevelEnum.EDITOR;
    t(_$$KQ({
      teamName: eT,
      orgAccess: el,
      workspaceId: em ?? void 0,
      dontRedirect: !onSubmitReturnToPrevView,
      inviteEmails: _$$Z(ef),
      defaultPermission: ed,
      description: ew,
      sharingAudienceControl: $$Y1(eE, eb),
      orgBrowsable: eE === _9.INVITE_ONLY && ej === teamVisibilityEnum.ORG_BROWSABLE,
      hidden: eE === _9.INVITE_ONLY && ej === teamVisibilityEnum.HIDDEN,
      inviteLevel: s
    }));
    e.afterSubmit && e.afterSubmit();
    t(popModalStack());
  }
  function eD() {
    t(popModalStack());
    t(cL());
  }
  return jsx(TrackingProvider, {
    name: "Team Creation",
    children: jsx(HeaderModal, {
      title: 1 === er ? getI18nString("team_creation.add_people_to_team_name", {
        teamName: eT
      }) : getI18nString("team_creation.org_modal_title_sc"),
      onClose: eD,
      maxWidth: 480,
      children: jsxs("div", {
        className: cssBuilderInstance.m16.$,
        children: [0 === er ? jsxs(Fragment, {
          children: [jsx(LabelPrimitive, {
            className: W,
            htmlFor: eO,
            children: getI18nString("team_creation.name")
          }), eL, jsx(LabelPrimitive, {
            className: W,
            htmlFor: eC,
            children: getI18nString("team_creation.team_description")
          }), ek, eR && jsxs(Fragment, {
            children: [jsx("div", {
              className: W,
              children: getI18nString("team_creation.workspace")
            }), eM]
          }), jsx("div", {
            className: W,
            children: getI18nString("team_creation.who_has_access")
          }), jsx(_$$j, {}), jsx(YU, {
            resourceType: FResourceCategoryType.TEAM,
            value: eE,
            onChange: eS,
            org: N,
            audienceAccessLevel: eb,
            workspace: eh,
            dataOnboardingKey: _$$F
          }), jsx("div", {
            className: W,
            children: jsxs("fieldset", {
              children: [jsx("legend", {
                children: eE === _9.INVITE_ONLY ? getI18nString("team_creation.visibility") : getI18nString("team_creation.what_they_can_do")
              }), eE === _9.INVITE_ONLY ? jsx(Kd, {
                selectedDiscoverability: ej,
                setSelectedDiscoverability: eI
              }) : jsxs(Fragment, {
                children: [jsx(Iz, {
                  selectedPermissionsLevel: eb,
                  setSelectedPermissionsLevel: ey
                }), jsx("div", {
                  className: "team_creation_modal--subtitle--j8wZc text--fontPos11--2LvXf text--_fontBase--QdLsd",
                  children: eb === J4.VIEW ? getI18nString("team_creation.can_view_and_comment") : getI18nString("team_creation.can_create_and_edit_files")
                })]
              })]
            })
          })]
        }) : P ? jsx("div", {
          className: "team_creation_modal--modalSecondStep--L-6u-",
          children: jsx("div", {
            className: "team_creation_modal--loadingState--y80el",
            children: jsx(LoadingOverlay, {})
          })
        }) : jsx("div", {
          children: jsx(Q, {
            permissionLevel: ed,
            currentOrgId: a,
            currentOrgUser: en,
            inviteLevel: ec,
            onInviteLevelChange: eu
          })
        }), jsxs("div", {
          className: "team_creation_modal--bottomRow--IWTyZ",
          children: [jsx("div", {
            className: "team_creation_modal--footer--EAx7f team_creation_modal--subtitle--j8wZc text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: renderI18nText("team_creation.step_number_of_max_steps", {
              currentStep: er + 1,
              maxSteps: 2
            })
          }), jsxs("div", {
            className: "team_creation_modal--buttons--jSrKt",
            children: [jsx(ButtonSecondaryTracked, {
              onClick: eD,
              children: renderI18nText("project_creation.cancel")
            }), jsx(ButtonBasePrimaryTracked, {
              onClick: function () {
                if (0 === er) ei(1);else {
                  let e = N && N.domain_capture && k.domains.length > 0 ? _$$Z(ef).filter(e => isValidEmail(e) && !checkDomainExists(k.domains, e)) : [];
                  e.length > 0 ? function (e) {
                    if (N?.invite_whitelist_guest_invite_setting == null && e.length > 0) {
                      t(showModalHandler({
                        type: confirmOrgGuestInviteModal,
                        data: {
                          emails: e,
                          onConfirm: () => {
                            eP();
                          },
                          popStack: !0,
                          orgName: N.name
                        }
                      }));
                      return;
                    }
                  }(e) : eP();
                }
              },
              disabled: 0 === er && 0 === eT.trim().length || 1 === er && ev,
              children: 0 === er ? renderI18nText("general.continue") : renderI18nText("team_creation.create_team")
            })]
          })]
        })]
      })
    })
  });
}, "TEAM_CREATION_MODAL", ModalSupportsBackground.YES);
export const Uc = $$K0;
export const MF = $$Y1;