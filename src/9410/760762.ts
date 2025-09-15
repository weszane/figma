import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { BadgeLabels } from "../figma_app/919079";
import { getI18nString, renderI18nText } from "../905/303541";
import { V as _$$V } from "../905/223767";
import { popModalStack, showModalHandler } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { mapFileToProductType } from "../figma_app/314264";
import { zN } from "../figma_app/579169";
import { isStarterUserAtom } from "../figma_app/864723";
import { useCurrentFileKey, selectCurrentFile, useFullscreenViewFile } from "../figma_app/516028";
import { UpsellModalType } from "../905/165519";
import { QY, xw, Zk } from "../9410/351585";
import y from "classnames";
import { TrackingProvider, TrackedButton } from "../figma_app/831799";
import { l as _$$l, I as _$$I } from "../9410/990893";
import { useDebouncedCallback } from "use-debounce";
import { y as _$$y } from "../1250/295724";
import { isReduxDeprecationCutover, ConfigGroups } from "../figma_app/121751";
import { adminPermissionConfig } from "../905/654645";
import { useShadowRead } from "../figma_app/391338";
import { isTeamFolderV2 } from "../figma_app/528509";
import { FC } from "../figma_app/212807";
import { TN } from "../figma_app/211146";
import { FPlanLimitationType, FPlanNameType, FFileType } from "../figma_app/191312";
import { STANDARD_LIMIT, hasTeamStatePaidAccess } from "../figma_app/345997";
import { canEditTeam } from "../figma_app/642025";
import { ng } from "../figma_app/205827";
import { jn } from "../figma_app/522082";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { ButtonBasePrimaryTracked } from "../figma_app/637027";
import { s as _$$s } from "../cssbuilder/589278";
import { AutoLayout } from "../905/470281";
import { E9 } from "../figma_app/297957";
import { c as _$$c } from "../905/370443";
import { h as _$$h } from "../905/864281";
import { TeamFileCountsByTeamId } from "../figma_app/43951";
import { EL } from "../905/748636";
import { CR, uv } from "../figma_app/419216";
import { TextWithTruncation } from "../905/984674";
import { iG } from "../figma_app/231614";
import { t as _$$t2 } from "../figma_app/32680";
var b = y;
function E({
  name: e,
  onBadgeClick: t,
  text: i,
  trackingProperties: n,
  isLocked: a,
  children: s
}) {
  let o = a ? "paid_status_badge_base--locked--z8YBo" : e === BadgeLabels.DEV_MODE_TRIAL ? "paid_status_badge_base--devmode--u3XTd" : "paid_status_badge_base--brand--7khqG";
  return jsx(TrackingProvider, {
    name: e,
    properties: {
      ...n,
      text: e
    },
    children: jsxs("div", {
      className: "paid_status_badge_base--container--e3rGO",
      children: [jsx(TrackedButton, {
        type: "button",
        className: "paid_status_badge_base--button--KgNx9",
        "data-onboarding-key": _$$l,
        onClick: t,
        children: jsx("span", {
          className: b()("paid_status_badge_base--badge---04yF text--fontPos11--2LvXf text--_fontBase--QdLsd", o),
          children: i
        })
      }), s]
    })
  });
}
function T({
  openFile: e
}) {
  let t = _$$I(e.editorType);
  let i = function (e) {
    let t = useAtomWithSubscription(isStarterUserAtom);
    let i = useAtomWithSubscription(zN);
    let {
      getConfig
    } = selectExperimentConfigHook("exp_free_badge_in_drafts_plan_comparison");
    return useMemo(() => "design" === e && t && "loaded" === i.status && !1 === i.data && !!getConfig().getValue("free_badge_visible", !1), [e, t, i.status, i.data, getConfig]);
  }(e.editorType);
  let a = {
    fileKey: e.key,
    productType: mapFileToProductType(e)
  };
  return t ? jsx(w, {
    trackingProperties: a
  }) : i ? jsx(S, {
    trackingProperties: a
  }) : null;
}
function w({
  trackingProperties: e
}) {
  let t = useDispatch();
  let i = useAtomWithSubscription(QY);
  let n = Xr(xw);
  let o = useAtomWithSubscription(Zk);
  let h = useSelector(e => e.multiplayer.sessionID);
  let m = useCurrentFileKey();
  return jsx(E, {
    name: BadgeLabels.FREE,
    onBadgeClick: () => {
      i.showing && i.userFlag && (n({
        showing: !1
      }), t(popModalStack()), t(postUserFlag({
        [i.userFlag]: !0
      })), o[i.userFlag] = {
        fileKey: m || void 0,
        sessionId: h
      });
      t(showModalHandler({
        type: _$$V,
        data: {
          upsellSource: UpsellModalType.DRAFT_FILE_BADGE,
          openCheckoutInNewTab: !0
        }
      }));
    },
    text: getI18nString("fullscreen.filename_view.free"),
    trackingProperties: e
  });
}
function S({
  trackingProperties: e
}) {
  let t = useDispatch();
  return jsx(E, {
    name: BadgeLabels.FREE,
    onBadgeClick: () => {
      t(showModalHandler({
        type: _$$V,
        data: {
          upsellSource: UpsellModalType.DESIGN_DRAFT_FILE_BADGE,
          openCheckoutInNewTab: !0
        }
      }));
    },
    text: getI18nString("fullscreen.filename_view.free"),
    trackingProperties: e
  });
}
let Z = "file_tracker_upsell_modal--progressDefault--rdBIR";
let Q = "file_tracker_upsell_modal--progressActive--OS7iA file_tracker_upsell_modal--progressDefault--rdBIR";
let $ = "file_tracker_upsell_modal--progressWarning--pJlRr file_tracker_upsell_modal--progressDefault--rdBIR";
function ee(e) {
  let t;
  let {
    teamId,
    dismissModal,
    topPadding,
    pointerPaddingOffset
  } = e;
  let o = useSubscription(TeamFileCountsByTeamId, {
    teamId
  });
  let l = selectCurrentFile();
  let c = _$$y(teamId, UpsellModalType.FILE_TRACKER_MODAL);
  let u = E9();
  let p = _$$h.useTrackingContext({
    trigger: UpsellModalType.FILE_TRACKER_MODAL
  });
  if (!l || "loaded" !== o.status) return null;
  if (u) t = getResourceDataOrFallback(o.data.team?.teamFileCounts?.totalFileCount) ?? 0;else switch (l.editorType) {
    case "design":
      t = o.data.team?.teamFileCounts?.designFileCount ?? 0;
      break;
    case "whiteboard":
      t = o.data.team?.teamFileCounts?.whiteboardFileCount ?? 0;
      break;
    case "slides":
      t = parseInt(o.data.team?.teamFileCounts?.slideFileCount ?? "0");
  }
  if (void 0 === t || 0 === t) return null;
  let m = t < STANDARD_LIMIT ? renderI18nText("fullscreen.file_tracker_modal.num_files_of_max_free_files_created", {
    numFiles: t,
    maxFreeFiles: STANDARD_LIMIT
  }) : renderI18nText("fullscreen.file_tracker_modal.this_is_your_last_free_file");
  let f = t < STANDARD_LIMIT ? renderI18nText("fullscreen.file_tracker_modal.starter_plans_are_free_but_they_limit_you_to_just_max_free_files", {
    maxFreeFiles: STANDARD_LIMIT
  }) : renderI18nText("fullscreen.file_tracker_modal.max_free_files_already_you_are_becoming_a_pro", {
    maxFreeFiles: STANDARD_LIMIT
  });
  let x = [getI18nString("fullscreen.file_tracker_modal.unlimited_files_pages"), getI18nString("fullscreen.file_tracker_modal.audio_conversations_in_files"), getI18nString("fullscreen.file_tracker_modal.unlimited_version_history_and_more")];
  let y = {
    fileTeamId: teamId,
    numFiles: t,
    productType: mapFileToProductType(l),
    ...p
  };
  return jsx(TrackingProvider, {
    name: "File Tracker Modal",
    properties: y,
    children: jsx(CR, {
      animateQuickly: !0,
      className: "file_tracker_upsell_modal--walkThroughModal--NYXku pointer_modal--walkThroughModalAnimateFast--Xm453 pointer_modal--walkThroughModal--6eTVS pointer_modal--pointerModal--wrpFz",
      disableClickOutsideToHide: !0,
      dismissModal,
      pointerPaddingOffset,
      shouldCenterArrow: EL.FALLBACK,
      shouldDismissWhenLostDOMTarget: !0,
      targetKey: _$$l,
      topPadding,
      width: 330 - 2 * uv,
      children: jsxs("div", {
        className: "file_tracker_upsell_modal--modalContent--Jn4Rd",
        "data-testid": "fileTrackerUpsellModalContent",
        children: [jsxs("div", {
          className: "file_tracker_upsell_modal--progressBar--IPGgx",
          children: [jsx("div", {
            className: b()(Q, {
              [$]: t >= STANDARD_LIMIT
            })
          }), jsx("div", {
            className: b()(Z, {
              [Q]: t > 1,
              [$]: t >= STANDARD_LIMIT
            })
          }), jsx("div", {
            className: b()(Z, {
              [$]: t >= STANDARD_LIMIT
            })
          })]
        }), jsx("h1", {
          className: "file_tracker_upsell_modal--modalTitle--UVfa7",
          children: m
        }), jsx("p", {
          className: "file_tracker_upsell_modal--modalBody--x728y",
          children: f
        }), jsx("div", {
          className: _$$s.font11.colorText.lh16.fontMedium.mb24.pr24.$,
          children: jsx(AutoLayout, {
            direction: "vertical",
            spacing: 16,
            children: x.map((e, t) => jsxs(AutoLayout, {
              direction: "horizontal",
              verticalAlignItems: "start",
              spacing: 8,
              children: [jsx("span", {
                children: "\u2713"
              }), jsx("span", {
                children: e
              })]
            }, t))
          })
        }), jsx(ButtonBasePrimaryTracked, {
          className: "file_tracker_upsell_modal--comparePlansButton--2oBV9",
          onClick: () => {
            dismissModal();
            c();
          },
          dataTestId: "fileTrackerUpsellModalCta",
          trackingProperties: {
            trackingDescriptor: _$$c.COMPARE_PLANS
          },
          children: renderI18nText("fullscreen.file_tracker_modal.compare_plans")
        })]
      })
    })
  });
}
function ei({
  dismissModal: e,
  teamId: t
}) {
  let i = useDispatch();
  let n = TN(t);
  return jsx(TrackingProvider, {
    name: "Pro trial upsell modal",
    properties: ng.getTrackingProperties(),
    children: jsx(CR, {
      width: 300,
      targetKey: _$$l,
      dismissModal: e,
      shouldCenterArrow: EL.FALLBACK,
      hideCloseButton: !0,
      children: jsxs("div", {
        className: "pro_trial_upsell_modal--container--vCFd5",
        children: [jsx("div", {
          children: jsx(TextWithTruncation, {
            fontSize: 13,
            fontWeight: "semi-bold",
            children: renderI18nText("fullscreen.pro_trial_upsell_modal.title", {
              numOfDaysLeft: n?.daysLeft
            })
          })
        }), jsx("p", {
          className: "pro_trial_upsell_modal--textContainer--kGoDm",
          children: jsx(TextWithTruncation, {
            fontSize: 11,
            children: renderI18nText("fullscreen.pro_trial_upsell_modal.description")
          })
        }), jsx("div", {
          className: "pro_trial_upsell_modal--btnContainer--wZVCK",
          children: jsx(ButtonBasePrimaryTracked, {
            trackingProperties: {
              trackingDescriptor: _$$c.UPGRADE_FROM_FILENAME_PRO_BADGE,
              ...ng.getTrackingProperties("Upgrade now")
            },
            onClick: () => {
              e();
              i(showModalHandler({
                type: _$$V,
                data: {
                  teamId: t,
                  upsellSource: UpsellModalType.PRO_TRIAL_UPSELL_MODAL,
                  openCheckoutInNewTab: !0
                }
              }));
            },
            children: getI18nString("fullscreen.pro_trial_upsell_modal.cta_text")
          })
        })]
      })
    })
  });
}
function ea({
  openFile: e,
  team: t
}) {
  let i = FC();
  let n = TN(t.id);
  let s = t.restrictionsList?.includes(FPlanLimitationType.LOCKED);
  let o = useSelector(e => e.isOpenFileLoadedFromLiveGraph);
  let l = useFullscreenViewFile().errors;
  let d = !hasTeamStatePaidAccess(t) && canEditTeam(t.id, i);
  let c = t.canEdit && e.plan?.tier === FPlanNameType.STARTER;
  let u = useShadowRead({
    oldValue: d,
    newValue: c,
    newValueReady: o,
    label: adminPermissionConfig.TeamPaidStatusBadge.canEditStarterTeam,
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    contextArgs: {
      canEdit: t.canEdit,
      planTier: e.plan?.tier,
      isOpenFileLoadedFromLiveGraph: o,
      numOpenFileErrors: Array.isArray(l) ? l.length : -1
    }
  });
  let p = iG(t);
  let m = {
    fileKey: e.key,
    fileTeamId: t.id,
    productType: mapFileToProductType(e)
  };
  return ng.canSeeProTrialUxInFile(n, e) ? jsx(eo, {
    trackingProperties: m,
    teamId: t.id
  }) : s ? jsx(el, {
    trackingProperties: m,
    teamId: t.id,
    proTrial: n,
    canEditTeam: u,
    isProOrOnceEdu: p
  }) : u ? jsx(ed, {
    openFile: e,
    permissionsState: i,
    trackingProperties: m,
    teamId: t.id
  }) : null;
}
function es() {
  let [e, t] = useState(!1);
  return [e, useDebouncedCallback(e => {
    t(e);
  }, 200, {
    leading: !0,
    trailing: !1
  })];
}
function eo({
  teamId: e,
  trackingProperties: t
}) {
  let [i, n] = es();
  return jsx(E, {
    name: BadgeLabels.PRO_TRIAL,
    onBadgeClick: () => n(!0),
    text: getI18nString("fullscreen.filename_view.pro_trial"),
    trackingProperties: {
      ...t,
      ...ng.getTrackingProperties()
    },
    children: i && jsx(ei, {
      teamId: e,
      dismissModal: () => n(!1)
    })
  });
}
function el({
  teamId: e,
  proTrial: t,
  trackingProperties: i,
  canEditTeam: n,
  isProOrOnceEdu: s
}) {
  let o = useDispatch();
  let p = jn();
  let h = ng.canSeeProTrialExpiryUx(t);
  let m = h ? BadgeLabels.PRO_TRIAL_EXPIRED : BadgeLabels.LOCKED;
  let f = h ? UpsellModalType.PRO_TRIAL_UPSELL_MODAL : UpsellModalType.LOCKED_TEAM_FILE_BADGE;
  return jsx(E, {
    name: m,
    onBadgeClick: () => {
      if (p) return null;
      e && !s ? o(showModalHandler({
        type: _$$t2,
        data: {
          teamId: e,
          canEditTeam: n
        }
      })) : n && o(showModalHandler({
        type: _$$V,
        data: {
          teamId: e,
          upsellSource: f
        }
      }));
    },
    text: h ? getI18nString("fullscreen.filename_view.trial_expired") : getI18nString("fullscreen.filename_view.locked"),
    trackingProperties: {
      ...i,
      ...(h ? ng.getTrackingProperties() : {})
    },
    isLocked: !0
  });
}
function ed({
  openFile: e,
  permissionsState: t,
  trackingProperties: i,
  teamId: n
}) {
  let a = _$$I(e.editorType);
  let s = isTeamFolderV2(t.openFile?.project);
  return a ? jsx(eh, {
    trackingProperties: i,
    teamId: n
  }) : s ? jsx(ec, {
    trackingProperties: i,
    teamId: n
  }) : jsx(ep, {
    openFile: e,
    trackingProperties: i,
    teamId: n
  });
}
function ec({
  trackingProperties: e,
  teamId: t
}) {
  let i = _$$y(t, UpsellModalType.STARTER_TEAM_FILE_BADGE);
  return jsx(E, {
    name: BadgeLabels.FREE,
    onBadgeClick: () => i(),
    text: getI18nString("fullscreen.filename_view.free"),
    trackingProperties: e
  });
}
let eu = [FFileType.DESIGN, FFileType.WHITEBOARD, FFileType.SLIDES];
function ep({
  openFile: e,
  trackingProperties: t,
  teamId: i
}) {
  let [n, a] = es();
  let s = _$$y(i, UpsellModalType.STARTER_TEAM_FILE_BADGE);
  return jsxs(Fragment, {
    children: [jsx(E, {
      name: BadgeLabels.FREE,
      onBadgeClick: () => {
        e.editorType && eu.includes(e.editorType) ? a(!0) : s();
      },
      text: getI18nString("fullscreen.filename_view.free"),
      trackingProperties: t
    }), n && jsx(ee, {
      teamId: i,
      dismissModal: () => a(!1),
      topPadding: 4,
      pointerPaddingOffset: -32
    })]
  });
}
function eh({
  trackingProperties: e,
  teamId: t
}) {
  let i = _$$y(t, UpsellModalType.STARTER_TEAM_FILE_BADGE);
  let n = useDispatch();
  let o = useAtomWithSubscription(QY);
  let c = Xr(xw);
  return jsx(E, {
    name: BadgeLabels.FREE,
    onBadgeClick: () => {
      o.showing && o.userFlag && (c({
        showing: !1
      }), n(popModalStack()), n(postUserFlag({
        [o.userFlag]: !0
      })));
      i();
    },
    text: getI18nString("fullscreen.filename_view.free"),
    trackingProperties: e
  });
}
export function $$em0({
  openFile: e
}) {
  return e.team ? jsx(ea, {
    openFile: e,
    team: e.team
  }) : jsx(T, {
    openFile: e
  });
}
export const s = $$em0;