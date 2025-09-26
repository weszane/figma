import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceCategories } from "../905/165054";
import o from "classnames";
import { useSubscription } from "../figma_app/288654";
import { reportError } from "../905/11";
import { Badge, BadgeColor } from "../figma_app/919079";
import { BigTextInputForwardRef, ButtonSecondary, ButtonBasePrimaryTracked, linkWithTracking } from "../figma_app/637027";
import { BlueLoadingSpinner } from "../figma_app/858013";
import { P as _$$P } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { AvatarSize, TeamAvatar } from "../905/590952";
import { HAvatarType } from "../905/566881";
import { Cy } from "../905/844322";
import { showModalHandler } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { z as _$$z } from "../905/373223";
import { mE } from "../905/561087";
import { fileEntityDataMapper } from "../905/943101";
import { FFileType, FUserRoleType, FPlanRestrictionType } from "../figma_app/191312";
import { AccessibleFoldersV2 } from "../figma_app/43951";
import { isBigmaEnabledSimple } from "../figma_app/336853";
import { hasTeamStatePaidAccess, isTeamLocked } from "../figma_app/345997";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { AccessLevelEnum } from "../905/557142";
import { UserAPIHandlers } from "../905/93362";
import { registerModal } from "../905/102752";
import { fZ } from "../figma_app/805373";
import { ConfirmationModal, HeaderModal } from "../905/519092";
import { hK } from "../figma_app/211706";
import { bUL } from "../figma_app/822011";
import { FlashActions } from "../905/573154";
import { TextWithTruncation } from "../905/984674";
import { KQ } from "../figma_app/475472";
import { A as _$$A } from "../6828/7452";
import { A as _$$A2 } from "../1617/567223";
var l = o;
let M = registerModal(function (e) {
  let {
    teamName,
    userHasAdminLevelPermissions,
    draftsToMove,
    imminentDraftMoveUpgradeReason,
    onConfirm,
    onClose
  } = e;
  let l = draftsToMove.length;
  let d = () => "figjam" === imminentDraftMoveUpgradeReason ? renderI18nText("file_browser.draft_move_confirmation_modal.seat_type_figjam") : renderI18nText("file_browser.draft_move_confirmation_modal.seat_type_design");
  let c = () => userHasAdminLevelPermissions ? renderI18nText("file_browser.draft_move_confirmation_modal.move_drafts_team_owner_substring") : renderI18nText("file_browser.draft_move_confirmation_modal.move_drafts_team_member_substring");
  return jsx(TrackingProvider, {
    name: "Plan Spaces Pro Draft Move Confirmation Modal",
    children: jsx(ConfirmationModal, {
      title: getI18nString("file_browser.draft_move_modal.confirmation_modal_header", {
        fileCount: l,
        teamName
      }),
      maxWidth: 430,
      minWidth: 430,
      onClose,
      onConfirm,
      confirmText: getI18nString("file_browser.file_move.move"),
      dataTestId: "draft-move-confirmation-modal",
      fixedCenter: !0,
      focus: !0,
      children: jsxs(Fragment, {
        children: [l > 1 ? "designAndFigjam" === imminentDraftMoveUpgradeReason ? renderI18nText("file_browser.draft_move_confirmation_modal.move_multiple_drafts_dual_upgrade", {
          pluralizedDraftsRemainingString: renderI18nText("file_browser.draft_move_confirmation_modal.pluralized_remaining_drafts", {
            remainingDraftCount: l - 1
          }),
          draftName: draftsToMove[0].name,
          teamName,
          roleContextSubstring: c()
        }) : renderI18nText("file_browser.draft_move_confirmation_modal.move_multiple_drafts_singular_upgrade", {
          draftName: (e => {
            let t = draftsToMove.find(t => "figjam" === e && t.editorType === FFileType.WHITEBOARD || "design" === e && t.editorType === FFileType.DESIGN);
            return t ? t.name : draftsToMove[0].name;
          })(imminentDraftMoveUpgradeReason),
          pluralizedDraftsRemainingString: renderI18nText("file_browser.draft_move_confirmation_modal.pluralized_remaining_drafts", {
            remainingDraftCount: l - 1
          }),
          seatType: d(),
          teamName,
          roleContextSubstring: c()
        }) : renderI18nText("file_browser.draft_move_confirmation_modal.move_one_draft_singular", {
          fileTypeMoniker: "figjam" === imminentDraftMoveUpgradeReason ? renderI18nText("file_browser.draft_move_confirmation_modal.board") : renderI18nText("file_browser.draft_move_confirmation_modal.file"),
          seatType: d(),
          teamName,
          roleContextSubstring: c()
        }), jsx(hK, {
          height: 16
        })]
      })
    })
  });
}, "DRAFT_MOVE_CONFIRMATION_MODAL");
var j = (e => (e.DESIGN = "design", e.FIGJAM = "figjam", e.DESIGN_AND_FIGJAM = "designAndFigjam", e.NONE = "none", e))(j || {});
let z = "draft_move_modal--modalBody--tk8mC";
let H = "draft_move_modal--folderName--Edpgq ellipsis--ellipsis--Tjyfa";
let W = "draft_move_modal--destinationHeading--dBe0G";
let $$K = "draft_move_modal--destinationDescription--fMcX-";
let Y = "draft_move_modal--folderRow--ploo8";
let q = "draft_move_modal--hoverableFolderRow--hUAas";
let $ = "draft_move_modal--selectedFolderRow--XmVi7";
let Z = "draft_move_modal--iconContainer--YfzDe";
let X = "draft_move_modal--learnMoreLink--b5crD";
let Q = registerModal(function (e) {
  let {
    setNewlyCreatedTeamName,
    setHasCreatedTeam,
    onClose
  } = e;
  let [o, l] = useState("");
  let d = useDispatch();
  let c = !o.trim().length;
  return jsx(TrackingProvider, {
    name: "Plan Spaces Pro Draft Move Confirmation Modal",
    children: jsx(ConfirmationModal, {
      cancelText: getI18nString("file_browser.draft_move_modal.back"),
      confirmText: getI18nString("file_browser.draft_move_modal.create_and_move_drafts"),
      disabled: c,
      fixedCenter: !0,
      focus: !0,
      maxWidth: 480,
      minWidth: 480,
      onClose,
      onSubmit: () => {
        if (c) {
          d(FlashActions.error(getI18nString("team_creation.your_team_name_cannot_be_empty")));
          return;
        }
        d(KQ({
          teamName: o,
          orgAccess: bUL.PUBLIC,
          dontRedirect: !0,
          ignoreCurrentPlan: !0
        }));
        setNewlyCreatedTeamName(o);
        setHasCreatedTeam(!0);
        onClose();
      },
      title: getI18nString("file_browser.draft_move_modal.creating_your_new_team_header"),
      truncateTitleText: !0,
      children: jsxs(Fragment, {
        children: [jsx(TextWithTruncation, {
          children: renderI18nText("file_browser.draft_move_modal.before_we_move_your_drafts")
        }), jsx(hK, {
          height: 16
        }), jsx(TextWithTruncation, {
          fontWeight: "medium",
          children: renderI18nText("file_browser.draft_move_modal.team_name")
        }), jsx(hK, {
          height: 8
        }), jsx(BigTextInputForwardRef, {
          value: o,
          onChange: e => {
            l(e.target.value);
          },
          className: "draft_move_modal--teamCreationInput--oJhmi",
          maxLength: 118,
          placeholder: getI18nString("file_browser.draft_move_modal.team_creation_placeholder"),
          autoFocus: !0
        }), jsx(hK, {
          height: 8
        })]
      })
    })
  });
}, "DRAFT_MOVE_TEAM_CREATION_MODAL");
let et = "https://help.figma.com/hc/articles/18409526530967";
var ei = (e => (e.FREE = "Free", e.LOCKED = "Locked", e.EDU = "Edu", e.PRO = "Pro", e.ORG = "Org", e.ENT = "Enterprise", e.GUEST = "Guest", e))(ei || {});
export let $$en0 = registerModal(function (e) {
  let {
    onClose,
    draftsToMove,
    reposToMove,
    onMoveSuccess,
    setSynchronousFileTransferInProgress,
    moveAllDraftsAsync,
    isMoveAll
  } = e;
  let [U, B] = useState(null);
  let [V, G] = useState(!1);
  let [X, et] = useState("");
  let [ei, en] = useState(!1);
  let [es, eo] = useState([]);
  let el = useSelector(e => e.teamCreation.loading);
  let ed = useRef(null);
  let ec = useRef(null);
  let eu = useSelector(e => getPermissionsStateMemoized(e));
  let ep = useSubscription(AccessibleFoldersV2, {
    orgId: null
  });
  let em = useDispatch();
  let eh = _$$z();
  let eg = useCallback(() => {
    onClose();
    eh();
  }, [eh, onClose]);
  let ef = useMemo(() => {
    let e = e => e ? hasTeamStatePaidAccess(e) ? e.studentTeamAt ? "Edu" : "Pro" : isTeamLocked(e.id, eu) ? "Locked" : "Free" : "Free";
    let t = ({
      orgId: e,
      orgPermission: t,
      isEnterprise: i = !1
    }) => t === FUserRoleType.GUEST ? "Guest" : e && i ? "Enterprise" : "Org";
    let i = e => !!e && isBigmaEnabledSimple(eu.orgById[e]);
    let n = (ep.data?.currentUser?.teamRoles?.map(e => e.team).filter(e => !!e) ?? []).filter(e => e && !e.deletedAt).sort((e, t) => e.name.localeCompare(t.name)).map(t => ({
      name: t?.name ?? "",
      folderId: t?.currentTeamUser?.draftsFolderId,
      imgUrl: t?.imgUrl,
      teamId: t?.id,
      destinationBadgeType: e(t),
      isDisabled: !1,
      teamCreatedAt: t?.createdAt
    })).filter(e => !!e.folderId) ?? [];
    eo(ep.data?.currentUser?.allOrgUsers?.map(e => ({
      name: e?.org?.name ?? "",
      folderId: e?.draftsFolderId,
      imgUrl: e?.org?.imgUrl,
      teamId: e?.draftsProject?.teamId,
      isDisabled: !0,
      destinationBadgeType: t({
        orgId: e?.orgId,
        orgPermission: e?.permission,
        isEnterprise: i(e?.orgId)
      })
    })).filter(e => !!e.folderId) ?? []);
    return n;
  }, [eu, ep.data?.currentUser?.teamRoles, ep.data?.currentUser?.allOrgUsers]);
  useEffect(() => {
    let e = ef.filter(e => e.name === X).reduce((e, t) => {
      let i = e ? e.teamCreatedAt : null;
      let n = t.teamCreatedAt;
      return !i || n > i ? t : e;
    }, null);
    if (ei && X && e && (B(e.folderId), ed.current && ec.current)) {
      let e = ed.current;
      let t = ec.current;
      let i = e.getBoundingClientRect();
      let n = t.getScrollContainer().getBoundingClientRect();
      let r = i.top - n.top;
      r + 200 > t.getScrollContainer().clientHeight ? t.scrollTo(r - t.getScrollContainer().clientHeight + 200) : r < 0 && t.scrollTo(r);
      en(!1);
      et("");
    }
  }, [ei, X, ef]);
  let e_ = draftsToMove.map(e => e.name).concat(reposToMove.map(e => e.name));
  let eA = e_.length > 1 ? getI18nString("file_browser.draft_move_modal.header_multiple_files_move", {
    fileCount: e_.length
  }) : getI18nString("file_browser.draft_move_modal.header_single_file_move", {
    fileName: e_[0]
  });
  let ey = e => UserAPIHandlers.migrateAllPersonalDrafts(e).then(() => em(VisualBellActions.enqueue({
    message: getI18nString("file_browser.draft_move_modal.async_draft_move_scheduled")
  }))).catch(() => em(VisualBellActions.enqueue({
    message: getI18nString("file_browser.draft_move_modal.async_draft_move_scheduling_error")
  })));
  let eb = (e, t) => {
    let n = draftsToMove.map(e => fileEntityDataMapper.toSinatra(e));
    let r = onMoveSuccess ? e => onMoveSuccess(e, n.length) : void 0;
    n.length > 0 && em(Cy({
      files: n,
      folderName: e,
      folderId: t,
      isDraftsToMove: !0,
      onFinishCallback: r,
      fromFileModal: !0
    }));
    reposToMove.length > 0 && em(mE({
      repos: reposToMove,
      folderId: t,
      folderName: e
    }));
  };
  let ev = () => {
    let e = ef.find(e => e.folderId === U);
    U && e && (moveAllDraftsAsync ? ey(e.teamId) : (setSynchronousFileTransferInProgress(draftsToMove.length > 0), eb(e.name, U)), onClose());
  };
  let eI = (e, t, n) => {
    em(showModalHandler({
      type: M,
      data: {
        onConfirm: ev,
        teamName: e,
        userHasAdminLevelPermissions: t,
        imminentDraftMoveUpgradeReason: n,
        draftsToMove
      }
    }));
  };
  let eE = e => {
    let {
      teamId
    } = e;
    return ep.data?.currentUser?.teamRoles?.find(e => e.team?.id === teamId);
  };
  let ex = e => {
    let t = draftsToMove.some(e => e.editorType === FFileType.DESIGN);
    return {
      hasDesignFiles: t,
      hasFigjamFiles: draftsToMove.some(e => e.editorType === FFileType.WHITEBOARD),
      isFullSeatForDesign: e?.designPaidStatus === FPlanRestrictionType.FULL,
      isFullSeatForFigjam: e?.whiteboardPaidStatus === FPlanRestrictionType.FULL
    };
  };
  let eS = (e, t) => !!t && t.level >= AccessLevelEnum.ADMIN;
  let ew = (e, t) => {
    if (!t) return !1;
    let {
      hasDesignFiles,
      hasFigjamFiles,
      isFullSeatForDesign,
      isFullSeatForFigjam
    } = ex(t.team?.currentTeamUser);
    return hasDesignFiles && hasFigjamFiles ? isFullSeatForDesign && isFullSeatForFigjam : hasDesignFiles ? isFullSeatForDesign : !!hasFigjamFiles && isFullSeatForFigjam;
  };
  let eC = (e, t) => {
    if (!t) return j.NONE;
    let {
      hasDesignFiles,
      hasFigjamFiles,
      isFullSeatForDesign,
      isFullSeatForFigjam
    } = ex(t.team?.currentTeamUser);
    return hasDesignFiles && hasFigjamFiles && !isFullSeatForDesign && !isFullSeatForFigjam ? j.DESIGN_AND_FIGJAM : hasDesignFiles && !isFullSeatForDesign ? j.DESIGN : hasFigjamFiles && !isFullSeatForFigjam ? j.FIGJAM : j.NONE;
  };
  return "loading" === ep.status || el ? jsx(HeaderModal, {
    title: eA,
    fixedCenter: !0,
    minWidth: 480,
    maxWidth: 480,
    onClose,
    truncateTitleText: !0,
    children: jsx("div", {
      className: z,
      children: jsx(BlueLoadingSpinner, {
        className: "draft_move_modal--spinner--G4CKo"
      })
    })
  }) : jsx(TrackingProvider, {
    name: "draftMoveModal",
    properties: {
      itemCount: e_.length,
      IsMoveAsync: !!moveAllDraftsAsync,
      isMoveAll: !!isMoveAll
    },
    children: jsx(HeaderModal, {
      title: eA,
      fixedCenter: !0,
      minWidth: 480,
      maxWidth: 480,
      onClose,
      truncateTitleText: !0,
      children: jsxs("div", {
        className: z,
        children: [ef && jsx(_$$P, {
          width: 480,
          ref: ec,
          children: jsxs("div", {
            className: cssBuilderInstance.pl8.pr8.$,
            children: [jsx(function (e) {
              return jsxs("button", {
                "data-testid": "drafts-move-new-starter-team-button",
                className: l()(Y, e.checked ? $ : "", e.isHoverableRow ? q : ""),
                onClick: e.onClick,
                children: [jsx("div", {
                  className: Z,
                  children: jsx(fZ, {
                    size: AvatarSize.MEDIUM,
                    shape: "CIRCLE",
                    removeCustomFill: !0,
                    className: e.checked ? "draft_move_modal--newStarterTeamAvatarSelected--QfQVr" : "draft_move_modal--newStarterTeamAvatar--HHodh",
                    color: null,
                    svg: e.checked ? _$$A : _$$A2
                  })
                }), jsxs("div", {
                  className: H,
                  children: [jsx("span", {
                    className: W,
                    children: renderI18nText("file_browser.draft_move_modal.a_new_starter_team")
                  }), jsx("span", {
                    className: $$K,
                    children: renderI18nText("file_browser.draft_move_modal.none_of_these_teams_feel_right")
                  })]
                })]
              });
            }, {
              isHoverableRow: !V,
              checked: V,
              onClick: () => {
                B(null);
                V || G(!V);
              }
            }), ef.map(e => {
              let t = U === e.folderId;
              let i = t ? ed : null;
              return jsx(ea, {
                checked: t,
                destinationBadgeType: e.destinationBadgeType,
                folderId: e.folderId,
                folderRef: i,
                imgUrl: e.imgUrl,
                isDisabled: e.isDisabled,
                name: e.name,
                onSelect: () => {
                  G(!1);
                  B(e.folderId);
                },
                teamCreatedAt: e.teamCreatedAt,
                teamId: e.teamId
              }, e.folderId);
            })]
          })
        }), jsxs("div", {
          className: "draft_move_modal--footer--g-XqF",
          children: [jsx(er, {
            userOrgDestinations: es,
            onCreateNewTeamClick: eg
          }), jsxs("div", {
            className: "draft_move_modal--footerCTA--A8uBM",
            children: [jsx(ButtonSecondary, {
              onClick: onClose,
              children: renderI18nText("modal.cancel")
            }), V ? jsx(ButtonBasePrimaryTracked, {
              disabled: !V,
              onClick: () => {
                G(!1);
                em(showModalHandler({
                  type: Q,
                  data: {
                    setNewlyCreatedTeamName: et,
                    setHasCreatedTeam: en
                  }
                }));
              },
              children: getI18nString("file_browser.draft_move_modal.continue")
            }) : jsx(ButtonBasePrimaryTracked, {
              disabled: !U,
              onClick: () => {
                let e = ef.find(e => e.folderId === U);
                if (!e) {
                  reportError(ServiceCategories.WORKFLOW, Error("Draft Move attempted without a selected destination folder"));
                  onClose();
                  return;
                }
                let {
                  destinationBadgeType,
                  name
                } = e;
                let r = eE(e);
                "Pro" !== destinationBadgeType || ew(e, r) ? ev() : eI(name, eS(e, r), eC(e, r));
              },
              children: getI18nString("file_browser.file_move.move")
            })]
          })]
        })]
      })
    })
  });
}, "DraftMoveModal");
function er(e) {
  return e.userOrgDestinations.length ? jsx("div", {
    className: "draft_move_modal--chooseTeamOrOrgRow--OPBwF",
    "data-testid": "org-restriction-text",
    children: renderI18nText("file_browser.draft_move_modal.drafts_cannot_be_moved_to_organizations", {
      userOrgNames: function (e) {
        let t = e.map(e => e.name);
        let i = e => jsx("span", {
          className: cssBuilderInstance.fontSemiBold.$,
          children: e
        });
        switch (t.length) {
          case 0:
            return "";
          case 1:
            return i(t[0]);
          case 2:
            return renderI18nText("file_browser.draft_move_modal.org_restriction_text_two_orgs", {
              orgName1: i(t[0]),
              orgName2: i(t[1])
            });
          case 3:
            return renderI18nText("file_browser.draft_move_modal.org_restriction_text_three_orgs", {
              orgName1: i(t[0]),
              orgName2: i(t[1]),
              orgName3: i(t[2])
            });
          default:
            return renderI18nText("file_browser.draft_move_modal.org_restriction_text_multiple_orgs", {
              orgName1: i(t[0]),
              orgName2: i(t[1]),
              orgName3: i(t[2]),
              numRemainingOrgsSubstring: jsx("span", {
                className: cssBuilderInstance.fontSemiBold.$,
                children: renderI18nText("file_browser.drafts_to_move.org_restriction_text_orgs_remaining", {
                  numRemainingOrgs: t.length - 3
                })
              })
            });
        }
      }(e.userOrgDestinations),
      learnMoreLink: jsx(linkWithTracking, {
        className: X,
        trusted: !0,
        target: "_blank",
        href: et,
        children: renderI18nText("file_browser.draft_move_modal.learn_more_link")
      })
    })
  }) : null;
}
function ea(e) {
  let t;
  let i;
  let r = jsx(linkWithTracking, {
    className: X,
    trusted: !0,
    target: "_blank",
    href: et,
    children: renderI18nText("file_browser.draft_move_modal.learn_more_link")
  });
  let a = renderI18nText("file_browser.draft_move_modal.destination_description_cannot_be_moved_here", {
    learnMoreLink: r
  });
  switch (e.destinationBadgeType) {
    case "Free":
      t = renderI18nText("file_browser.draft_move_modal.destination_description_access_will_become_view_only");
      i = getI18nString("file_browser.draft_move_modal.destination_description_badge_free");
      break;
    case "Locked":
      t = renderI18nText("file_browser.draft_move_modal.destination_description_access_will_become_view_only");
      i = getI18nString("file_browser.draft_move_modal.destination_description_badge_locked");
      break;
    case "Edu":
      t = renderI18nText("file_browser.draft_move_modal.destination_description_collaborator_access_may_change");
      i = getI18nString("file_browser.draft_move_modal.destination_description_badge_edu");
      break;
    case "Pro":
      t = renderI18nText("file_browser.draft_move_modal.destination_description_collaborator_access_may_change");
      i = getI18nString("file_browser.draft_move_modal.destination_description_badge_pro");
      break;
    case "Org":
      i = getI18nString("file_browser.draft_move_modal.destination_description_badge_org");
      t = a;
      break;
    case "Enterprise":
      i = getI18nString("file_browser.draft_move_modal.destination_description_badge_ent");
      t = a;
      break;
    case "Guest":
      i = getI18nString("file_browser.draft_move_modal.destination_description_badge_guest");
      t = a;
  }
  let s = ["Org", "Enterprise", "Guest"].includes(e.destinationBadgeType);
  let o = !e.checked && !s;
  return jsxs("button", {
    "data-testid": `${e.name}-button`,
    className: l()(Y, e.checked ? $ : "", o ? q : ""),
    onClick: e.onSelect,
    disabled: e.isDisabled,
    ref: e.folderRef,
    children: [jsx("div", {
      className: Z,
      children: jsx(TeamAvatar, {
        size: AvatarSize.MEDIUM,
        shape: "CIRCLE",
        fallbackDisplay: HAvatarType.HIDDEN,
        team: {
          id: e.teamId,
          imgUrl: e.imgUrl
        }
      })
    }), jsxs("div", {
      className: H,
      children: [jsx("span", {
        className: W,
        children: e.name
      }), jsx("span", {
        className: s ? "draft_move_modal--destinationDescriptionOrg--wEClH draft_move_modal--destinationDescription--fMcX-" : $$K,
        children: t
      })]
    }), jsx(Badge, {
      text: i,
      dataTestId: `${e.name}-badge`,
      color: e.checked ? BadgeColor.TOOLBAR_SELECTED : BadgeColor.DEFAULT,
      className: l()("draft_move_modal--teamBadge--ODLch", cssBuilderInstance.mr8.if(!e.checked, cssBuilderInstance.colorBgBrandTertiary.colorText).$)
    })]
  });
}
export const K = $$en0;
