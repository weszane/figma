import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assertNotNullish } from "../figma_app/95419";
import { ServiceCategories } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { Wn } from "../figma_app/88484";
import { useLatestRef } from "../figma_app/922077";
import { useSubscription } from "../figma_app/288654";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { reportError } from "../905/11";
import { Ve, c$ } from "../figma_app/236327";
import { ButtonSecondaryTracked, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { z as _$$z } from "../905/284530";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { BellId } from "../905/576487";
import { UserAvatar, AvatarSize, TeamAvatar } from "../905/590952";
import { HAvatarType } from "../905/566881";
import { showDropdownThunk, hideDropdownAction } from "../905/929976";
import { z as _$$z2 } from "../905/404751";
import { showModalHandler, hideModalHandler } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { getCurrentFileType } from "../figma_app/976749";
import { consumptionPaywallUtils } from "../905/224";
import { useDropdownState } from "../905/848862";
import { selectCurrentFile } from "../figma_app/516028";
import { FFileType, FPlanLimitationType } from "../figma_app/191312";
import { MoveDraftsTeamData, MoveDraftsNudgeV2OverlayRecentFilesView, MoveDraftsNudgeV2OverlayRecentFilesLegacyView } from "../figma_app/43951";
import { mapRecentFilesAndRepos } from "../figma_app/349248";
import { PageFolderFile, FeatureFlag } from "../905/652992";
import { fileActionEnum } from "../figma_app/630077";
import { KindEnum } from "../905/129884";
import { registerModal } from "../905/102752";
import { eg, O0, Lh } from "../figma_app/452252";
import { s as _$$s2 } from "../figma_app/825649";
import { RG } from "../figma_app/146384";
import { PositioningStrategy } from "../905/748636";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { OA, CR } from "../figma_app/419216";
import { v4 } from "../figma_app/598952";
import { A as _$$A } from "../6041/578888";
import { A as _$$A2 } from "../1617/230645";
var c = d;
let $ = "move_drafts_nudge_rcs_steps--bodyWithoutTitle--H7oik";
let X = "move_drafts_nudge_rcs_steps--infoText--dIEdg";
export function $$Z1(e) {
  let t = useDispatch<AppDispatch>();
  let r = useDropdownState();
  let s = selectCurrentFile();
  let o = useSelector(e => e.repos);
  let l = useSelector(e => e.userFlags.seen_move_drafts_nudge);
  let [d, c] = useState(!1);
  let {
    dismissModal
  } = e;
  setTimeout(() => {
    c(!0);
  }, 3e3);
  let p = () => t(postUserFlag({
    dismissed_move_drafts_nudge: !0
  }));
  useEffect(() => () => {
    l || t(postUserFlag({
      seen_move_drafts_nudge: !0
    }));
  }, [t, l]);
  let _ = () => {
    l ? (p(), dismissModal()) : e.onClickPrimaryCta();
  };
  useEffect(() => {
    r?.type === eg && dismissModal();
  }, [r?.type, dismissModal]);
  let h = l ? getI18nString("rcs.move_drafts_nudge.dismiss") : getI18nString("rcs.move_drafts_nudge.not_now");
  return d ? jsx(OA, {
    targetKey: O0,
    dismissModal: _,
    title: getI18nString("rcs.move_drafts_nudge.when_to_draft_when_to_file"),
    ctaText: getI18nString("rcs.move_drafts_nudge.move_file"),
    onClickPrimaryCta: () => {
      p();
      RG(t, s, o)();
    },
    secondaryCtaText: h,
    onClickSecondaryCta: _,
    width: 268,
    children: jsx("p", {
      children: renderI18nText("rcs.move_drafts_nudge.you_re_currently_working_solo_on_a_draft")
    })
  }) : null;
}
export function $$Q0(e) {
  let t = useDispatch<AppDispatch>();
  let r = useDropdownState();
  let {
    dismissModal
  } = e;
  let o = r?.type === eg;
  let l = useLatestRef(o);
  useEffect(() => {
    l && !o && dismissModal();
  }, [o, l, dismissModal]);
  useEffect(() => {
    if (!Lh?.current) {
      dismissModal();
      return;
    }
    t(showDropdownThunk({
      type: eg,
      data: {
        targetRect: Lh.current?.getBoundingClientRect(),
        activatePathOnMount: [getI18nString("fullscreen.filename_view.move-to-project")]
      }
    }));
    return () => {
      t(hideDropdownAction());
    };
  }, [t, dismissModal]);
  return jsx("div", {
    onMouseDown: e => {
      e.stopPropagation();
    },
    onClick: e => {
      e.stopPropagation();
    },
    children: jsx(OA, {
      targetKey: _$$s2,
      title: "",
      shouldCenterArrow: PositioningStrategy.FALLBACK,
      dismissModal,
      ctaText: getI18nString("rcs.move_drafts_nudge.got_it"),
      onClickPrimaryCta: e.onClickPrimaryCta,
      width: 268,
      children: jsx("p", {
        className: $,
        children: renderI18nText("rcs.move_drafts_nudge.okay_you_can_move_drafts_and_files_into_team_projects_here_any_time")
      })
    })
  });
}
export function $$ee2({
  dismissModal: e,
  onClickPrimaryCta: t
}) {
  var r;
  let d = useDispatch<AppDispatch>();
  let u = useDropdownState();
  let p = getCurrentFileType();
  let h = selectCurrentFile();
  let x = et();
  let [w, M] = useState(void 0);
  useEffect(() => {
    u?.type === eg && e();
  }, [u?.type, e]);
  let B = useSubscription(MoveDraftsTeamData, {
    orgId: null
  });
  if ("loaded" !== B.status || 0 === B.data.currentUser.teamEditRoles.length) return null;
  let V = B.data.currentUser.teamEditRoles.map(e => e.team).filter(e => e && e.projects && !e.deletedAt && e.projects.length > 0);
  if (0 === V.length) {
    reportError(ServiceCategories.MONETIZATION_UPGRADES, Error("MoveDraftsTeamNudgeView rendered with noTeamWithProjects"));
    return null;
  }
  let H = 1 === V.length;
  if (!w) {
    let e = H ? V[0] : function (e, t) {
      if (null === t) return e[0];
      let r = new Map();
      for (let t = 0; t < e.length; t++) {
        let n = e[t];
        r.set(n ? n.id : null, {
          count: 0,
          index: t
        });
      }
      let n = 0;
      let i = 0;
      for (let e of t) if (e.teamId && r.has(e.teamId)) {
        let t = r.get(e.teamId);
        t.count++;
        t.count > n && (n = t.count, i = t.index);
      }
      return e[i];
    }(V, x?.data);
    null !== e && M(e);
  }
  if (!w || !h) return null;
  let z = {
    key: h.key,
    name: h.name,
    folder_id: h.folderId,
    editor_type: h.editorType,
    is_team_template: h.isTeamTemplate,
    parent_org_id: h.parentOrgId,
    team_id: h.teamId
  };
  let Y = e => {
    d(VisualBellActions.enqueue({
      type: "file-moved",
      i18n: {
        id: BellId.FILE_MOVE_FOLDER_BELL_ID,
        params: {
          text: e || ""
        }
      }
    }));
    d(showModalHandler({
      type: er
    }));
  };
  function $(e) {
    switch (h?.editorType) {
      case FFileType.SLIDES:
        return [FPlanLimitationType.SLIDE_FILES_LIMITED, FPlanLimitationType.SLIDE_FILES_LIMITED_BETA].some(t => !!e.restrictionsList?.includes(t));
      case FFileType.WHITEBOARD:
        return [FPlanLimitationType.WHITEBOARD_FILES_LIMITED, FPlanLimitationType.WHITEBOARD_FILES_LIMITED_BETA].some(t => !!e.restrictionsList?.includes(t));
      default:
        return [FPlanLimitationType.FILES_LIMITED, FPlanLimitationType.FILES_LIMITED_LEGACY].some(t => !!e.restrictionsList?.includes(t));
    }
  }
  return jsxs(CR, {
    targetKey: O0,
    dismissModal: e,
    width: 268,
    children: [function (e, t) {
      let r = e.roles.filter(e => !!e.user && e.user.id !== t);
      let i = r.sort(() => Math.random() - Math.random()).slice(0, Math.min(r.length, 3)).map(e => assertNotNullish(e.user));
      let a = renderI18nText("rcs.move_drafts_nudge.ready_to_bring_in_your_team");
      if (0 === i.length) a = renderI18nText("rcs.move_drafts_nudge.want_to_get_ideas_from_teammates");else if (1 === i.length) {
        let e = i[0];
        a = renderI18nText("rcs.move_drafts_nudge.want_to_get_ideas_from_user_name", {
          userName: e.name ? e.name.split(" ")[0] : e.email || e.handle
        });
      }
      return jsxs(Fragment, {
        children: [jsx("div", {
          className: "move_drafts_nudge_rcs_steps--avatarRow--cUnRs",
          children: i.map(e => jsx("div", {
            className: cssBuilderInstance.relative.$,
            children: jsx(UserAvatar, {
              user: {
                name: e.name || e.email || "",
                img_url: e.imgUrl
              },
              size: AvatarSize.LARGE
            })
          }, e.id))
        }), jsx("h1", {
          className: "move_drafts_nudge_rcs_steps--modalTitle--Rk7Jg",
          children: a
        })]
      });
    }(w, B.data.currentUser.id), (r = H ? w : null) ? jsx("p", {
      className: X,
      children: renderI18nText("rcs.move_drafts_nudge.drafts_are_great_for_solo_work_but_teammates_can_t_find_or_contribute_to_this_file_move_it_to_team_name_to_let_others_edit", {
        teamName: jsx("b", {
          children: r.name
        })
      })
    }) : jsx("p", {
      className: X,
      children: renderI18nText("rcs.move_drafts_nudge.drafts_are_great_for_solo_work_but_teammates_can_t_find_or_contribute_to_this_file_move_it_to_your_team_to_let_others_edit")
    }), !H && jsxs("div", {
      className: "move_drafts_nudge_rcs_steps--moveFileSelector--bUHWg",
      children: [jsx("h2", {
        children: renderI18nText("rcs.move_drafts_nudge.move_file_to")
      }), jsx(Ve, {
        className: "move_drafts_nudge_rcs_steps--dropdownSelector--vE83U",
        optionsBelowSelector: !0,
        shouldRenderAutocompleteStyles: !0,
        label: getI18nString("rcs.move_drafts_nudge.team_project", {
          teamName: w.name,
          projectName: w.projects[0].path
        }),
        iconLabel: jsx(TeamAvatar, {
          size: AvatarSize.XSMALL,
          fallbackDisplay: HAvatarType.HIDDEN,
          team: {
            id: w.id,
            imgUrl: w.imgUrl || void 0
          }
        }),
        options: V.map((e, t) => !!e && !!e.projects && jsxs(c$, {
          id: String(t),
          onClick: e => M(V[parseInt(e.currentTarget.id)]),
          className: "move_drafts_nudge_rcs_steps--projectRow--4JZde",
          children: [jsx("div", {
            className: "move_drafts_nudge_rcs_steps--teamAvatarIcon--vjnRi",
            children: jsx(TeamAvatar, {
              size: AvatarSize.XSMALL,
              fallbackDisplay: HAvatarType.HIDDEN,
              team: {
                id: e.id,
                imgUrl: e.imgUrl || void 0
              }
            })
          }), jsx("div", {
            className: c()("move_drafts_nudge_rcs_steps--optionText----TA7", {
              "move_drafts_nudge_rcs_steps--optionTextWithWarning--ENYe0": $(e)
            }),
            children: renderI18nText("rcs.move_drafts_nudge.team_project", {
              teamName: e.name,
              projectName: e.projects[0].path
            })
          }), $(e) && jsx("div", {
            className: "move_drafts_nudge_rcs_steps--warningIcon--KHIj5",
            children: jsx(SvgComponent, {
              svg: _$$A,
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("file_browser.file_move.paywall_team_tooltip")
            })
          })]
        }, t))
      })]
    }), $(w) && jsx("div", {
      className: "move_drafts_nudge_rcs_steps--banner--S35O-",
      children: jsx(_$$z, {
        orientation: "vertical",
        variant: "warning",
        iconSrc: _$$A2,
        action: {
          label: getI18nString("rcs.move_drafts_nudge.upgrade_to_continue"),
          onClick: () => {
            d(showModalHandler({
              type: ConsumptionPaywallModalPlansPricing,
              data: {
                team: w,
                resource: p !== FFileType.FIGMAKE || getFeatureFlags().bake_starter_limit ? PageFolderFile.FILE : FeatureFlag.FIGMAKE,
                action: fileActionEnum.MOVE_FILES,
                currentPlan: consumptionPaywallUtils.Plan.STARTER,
                upsellPlan: consumptionPaywallUtils.Plan.PRO,
                editorType: p,
                multipleResources: !1
              }
            }));
          }
        },
        children: renderI18nText("rcs.move_drafts_nudge.team_team_name_reached_the_starter_plan_file_limit_of_3_files", {
          teamName: w.name
        })
      })
    }), jsxs("div", {
      className: "move_drafts_nudge_rcs_steps--ctaContainer--VD-a6",
      children: [jsx(ButtonSecondaryTracked, {
        className: "move_drafts_nudge_rcs_steps--secondaryCtaButton--yOPJx",
        onClick: t,
        children: getI18nString("rcs.move_drafts_nudge.cancel")
      }), jsx(ButtonBasePrimaryTracked, {
        onClick: () => {
          d(_$$z2({
            files: [z],
            team: w,
            folder: w.projects[0],
            fromFileModal: !0,
            onFinishCallback: Y
          }));
          t();
        },
        disabled: $(w),
        children: getI18nString("rcs.move_drafts_nudge.move_file")
      })]
    })]
  });
}
let et = getFeatureFlags().move_drafts_nudge_v2_recent_files_slim ? function () {
  let [e] = setupResourceAtomHandler(MoveDraftsNudgeV2OverlayRecentFilesView({}));
  return useMemo(() => e.transform(e => {
    let t = [];
    for (let r of e.currentUser.recentFiles2 ?? []) r.file && t.push(r.file);
    return t;
  }), [e]);
} : function () {
  let [e] = setupResourceAtomHandler(MoveDraftsNudgeV2OverlayRecentFilesLegacyView({}));
  let t = useMemo(() => e.transform(e => mapRecentFilesAndRepos(e.currentUser.recentFiles2)), [e]);
  useEffect(() => {
    "loaded" === t.status && Wn(t.data);
  }, [t]);
  return useMemo(() => t.transform(e => e.recent_files.map(e => ({
    teamId: e.team_id
  }))), [t]);
};
let er = registerModal(function () {
  let e = useDispatch<AppDispatch>();
  return jsx(OA, {
    targetKey: v4,
    title: "",
    dismissModal: () => {
      e(hideModalHandler());
    },
    ctaText: getI18nString("rcs.move_drafts_nudge.got_it"),
    onClickPrimaryCta: () => {
      e(hideModalHandler());
    },
    width: 268,
    children: jsx("p", {
      className: $,
      children: renderI18nText("rcs.move_drafts_nudge.now_that_you_ve_moved_this_file_to_projects_your_teammates_can_edit_and_collaborate_with_you")
    })
  });
}, "MoveDraftsFeedbackModal");
export const Iy = $$Q0;
export const yP = $$Z1;
export const hA = $$ee2;
