import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useId, useRef, useState, useEffect, Fragment as _$$Fragment, useCallback, forwardRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { ServiceCategories as _$$e } from "../905/165054";
import { usePopoverPrimitive, PopoverPrimitiveContainer, PopoverPrimitiveArrow } from "../905/691059";
import { ButtonPrimitive } from "../905/632989";
import { Button } from "../905/521428";
import { t as _$$t } from "../905/150656";
import { s as _$$s } from "../905/403855";
import { B as _$$B } from "../905/950875";
import { setupThemeContext } from "../905/614223";
import { g as _$$g } from "../905/687265";
import { xk } from "@stylexjs/stylex";
import b from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { A as _$$A } from "../905/920142";
import { getJobRoleDisplay } from "../3973/538504";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { reportError } from "../905/11";
import { Badge, BadgeColor } from "../figma_app/919079";
import { P as _$$P } from "../905/347284";
import { a as _$$a } from "../905/925868";
import { s as _$$s2 } from "../cssbuilder/589278";
import { FlashActions } from "../905/573154";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { JT, Qi, mb } from "../figma_app/599327";
import { R as _$$R } from "../905/304671";
import { BC, E1 } from "../figma_app/149367";
import { rq, $X, Bn } from "../469e6e40/825613";
import { qj, ep as _$$ep, VS, QV } from "../469e6e40/512236";
import { f as _$$f } from "../469e6e40/924996";
import { W4 } from "../469e6e40/336481";
import { o as _$$o } from "../469e6e40/557114";
import { I as _$$I } from "../4452/82228";
import { m as _$$m } from "../4452/688074";
import { S as _$$S } from "../4452/304860";
import { d as _$$d } from "../469e6e40/490120";
import { getEmailDomain } from "../figma_app/416935";
import { toTitleCase } from "../figma_app/930338";
import { FSeatAssignmentReasonType, FOrganizationLevelType, FApprovalMethodType, FResourceCategoryType, FUserRoleType } from "../figma_app/191312";
import { KindEnum } from "../905/129884";
import { rq as _$$rq } from "../905/351260";
import { AccessLevelEnum } from "../905/557142";
import { v as _$$v } from "../figma_app/899624";
import { tb } from "../905/848667";
import { II } from "../figma_app/11182";
import { selectViewAction } from "../905/929976";
import { hideModal } from "../905/156213";
import { C3, UV } from "../figma_app/297957";
import { useTracking } from "../figma_app/831799";
import { logAndTrackCTA } from "../figma_app/314264";
import { ViewAccessTypeEnum } from "../905/513035";
import { x as _$$x } from "../469e6e40/446220";
import { mm, a3 } from "../figma_app/684446";
import { MemberFlyoutInfoView } from "../figma_app/43951";
import { k_, XO, PR, w6 } from "../figma_app/609194";
import { hasScimMetadata, hasScimSeatType, findMainWorkspaceUser } from "../figma_app/951233";
import { hasValidSubscription } from "../figma_app/345997";
import { getOrgLevelData } from "../figma_app/428858";
import { k_ as _$$k_ } from "../1881/866163";
import { L7 } from "../figma_app/329496";
import { DashboardSection } from "../figma_app/650409";
import { BillingCycle } from "../figma_app/831101";
import { J as _$$J2 } from "../905/298764";
import { H as _$$H, az } from "../figma_app/805373";
import { r as _$$r } from "../469e6e40/505264";
import { l6, c$, sK } from "../905/794875";
import { Wi } from "../figma_app/162641";
import { sx as _$$sx } from "../905/941192";
import { A as _$$A2 } from "../svg/977613";
var v = b;
function ev(e, t) {
  switch (e.reason) {
    case FSeatAssignmentReasonType.ROLE_UPGRADE:
      if (e.actor_name) return getI18nString("team_user.upgrade_reasons.role_upgrade.seat_rename", {
        actorName: e.actor_name,
        memberNameOrEmail: t,
        resourceType: e.resource_type || "",
        resourceName: e.resource_name || ""
      });
      return getI18nString("team_user.upgrade_reasons.role_upgrade_without_actor_name.seat_rename", {
        memberNameOrEmail: t,
        resourceType: e.resource_type || "",
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.INVITE_REDEEM:
      return getI18nString("team_user.upgrade_reasons.invite_redeem.seat_rename", {
        actorName: e.actor_name || "",
        memberNameOrEmail: t,
        resourceType: e.resource_type || "",
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.INVITE_AUTOUPGRADE:
      return getI18nString("team_user.upgrade_reasons.invite_autoupgrade.seat_rename", {
        actorName: e.actor_name || "",
        memberNameOrEmail: t,
        resourceType: e.resource_type || "",
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.RESOURCE_MOVED_FROM_PLAN_DRAFTS:
    case FSeatAssignmentReasonType.RESOURCE_MOVE:
      return getI18nString("team_user.upgrade_reasons.resource_moved", {
        memberNameOrEmail: t,
        resourceType: e.resource_type || "",
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.CREATE_TEAM:
      return getI18nString("team_user.upgrade_reasons.create_team", {
        memberNameOrEmail: t
      });
    case FSeatAssignmentReasonType.RESOURCE_RESTORED_FROM_TRASH:
      return getI18nString("team_user.upgrade_reasons.restored_from_trash", {
        memberNameOrEmail: t,
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.FIGMA_ADMIN:
      return getI18nString("team_user.upgrade_reasons.figma_admin", {
        memberNameOrEmail: t,
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.DEPART_TEAM:
      return getI18nString("team_user.upgrade_reasons.depart_team", {
        memberNameOrEmail: t
      });
    case FSeatAssignmentReasonType.JOIN_LINK_REDEEM:
      return getI18nString("team_user.upgrade_reasons.join_link_redeem", {
        memberNameOrEmail: t
      });
    case FSeatAssignmentReasonType.CREATE_FILE:
      return getI18nString("team_user.upgrade_reasons.create_file", {
        memberNameOrEmail: t,
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.ADMIN_UPGRADE:
    case FSeatAssignmentReasonType.CHECKOUT:
      return getI18nString("team_user.upgrade_reasons.checkout.seat_rename", {
        actorName: e.actor_name || "",
        memberNameOrEmail: t
      });
    case FSeatAssignmentReasonType.EDIT_REQUEST_AUTO_APPROVAL:
    case FSeatAssignmentReasonType.EDIT_REQUEST_APPROVAL:
      return getI18nString("team_user.upgrade_reasons.edit_request_approval", {
        memberNameOrEmail: t,
        resourceType: e.resource_type || "",
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.EDIT_ACTION:
      return getI18nString("team_user.upgrade_reasons.edit_action", {
        memberNameOrEmail: t,
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.EDIT_BUTTON:
      return getI18nString("team_user.upgrade_reasons.edit_button", {
        memberNameOrEmail: t,
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.FJ_GA_UPGRADE:
      return getI18nString("team_user.upgrade_reasons.figjam_ga_reupgrade", {
        memberNameOrEmail: t,
        resourceName: e.resource_name || ""
      });
    case FSeatAssignmentReasonType.RUN_PLUGIN:
      return getI18nString("team_user.upgrade_reasons.run_plugin", {
        memberNameOrEmail: t
      });
    default:
      return getI18nString("team_user.upgrade_reasons.default", {
        memberNameOrEmail: t
      });
  }
}
function eC() {
  return jsxs("div", {
    className: _$$s2.p24.flex.itemsCenter.gap16.$,
    children: [jsx(Wi, {
      style: _$$sx.w48.h48.bRadiusFull.$
    }), jsxs("div", {
      className: _$$s2.flex.flexColumn.gap4.flexGrow1.$,
      children: [jsx(Wi, {
        style: _$$sx.add({
          height: "25px",
          width: "45%"
        }).flexGrow1.$
      }), jsx(Wi, {
        style: _$$sx.add({
          height: "13px",
          width: "40%"
        }).flexGrow1.$
      })]
    })]
  });
}
function eS() {
  return jsxs("div", {
    children: [jsx(Wi, {
      style: _$$sx.h16.mb8.add({
        width: "25%"
      }).$
    }), jsx(Wi, {
      style: _$$sx.h32.$
    })]
  });
}
function eN() {
  return jsx("div", {
    className: _$$s2.flex.flexColumn.mx24.py24.$,
    "data-testid": "member-flyout-skeleton",
    children: jsx(AutoLayout, {
      direction: "vertical",
      horizontalAlignItems: "stretch",
      spacing: 24,
      children: Array.from({
        length: 5
      }, (e, t) => jsx(eS, {}, t))
    })
  });
}
let eI = "member_flyout--shortTextWrapper--7Ll01";
let eT = "member_flyout--middleColumn--jallv";
let eA = "member_flyout--sideColumn--1AIc2";
function eO(e) {
  let t = !!(e.avatarEntity.handle ?? e.avatarEntity.name);
  let a = useDispatch();
  return jsx("div", {
    className: _$$s2.py24.pl24.pr4.overflowHidden.$,
    "data-testid": "member-flyout-header",
    children: t && !e.isPending ? jsx(_$$r, {
      dispatch: a,
      entity: e.avatarEntity,
      labelSize: _$$H.HEADING_MEDIUM,
      showIsMe: e.isMe,
      isScimUser: e.planType === FOrganizationLevelType.ORG && hasScimMetadata(e.orgUser),
      badge: e.badge,
      size: 48
    }) : jsx(az, {
      entity: e.avatarEntity,
      size: 48,
      defaultFallbackAvatarSvg: _$$A2,
      labelSize: _$$H.HEADING_MEDIUM,
      fallbackSvg: _$$A2,
      onClick: t => {
        e.avatarEntity.email && (t.stopPropagation(), a(II({
          emailList: [e.avatarEntity.email]
        })));
      },
      overrideHandle: e.avatarEntity.email,
      defaultText: "-",
      badge: e.badge
    })
  });
}
function eL(e) {
  let t;
  let a = `member-flyout-${e.id}`;
  let l = useDispatch();
  let o = useSelector(e => e.dropdownShown);
  let d = useId();
  let c = useId();
  let _ = useRef(null);
  let u = useTracking();
  let g = {};
  e.options.forEach(e => {
    "option" === e.type && (g[e.key] = e.text);
  });
  let h = e.disabled && e.disabledTooltipText;
  let x = h ? {
    id: d,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": e.disabledTooltipText,
    "data-tooltip-show-below": !0,
    "data-tooltip-max-width": 220,
    "data-tooltip-timeout-delay": 50
  } : void 0;
  switch (e.disabled) {
    case "lock":
      t = jsx(_$$s, {
        "data-testid": "svg-lock",
        ...x
      });
      break;
    case "info":
      t = jsx(_$$B, {
        "data-testid": "svg-info",
        ...x
      });
      break;
    default:
      e.disabled;
      t = null;
  }
  return jsxs("div", {
    children: [jsx("div", {
      id: c,
      className: _$$s2.textBodyMediumStrong.pb8.$,
      children: e.label
    }), jsx("div", {
      className: _$$s2.flex.$,
      ...(h ? t ? {
        "data-tooltip-proxy-element-id": d
      } : x : void 0),
      "data-testid": `${a}-tooltip`,
      children: jsx(l6, {
        ariaLabelledBy: c,
        chevronClassName: e.disabled ? "member_flyout--chevronHidden--h-js0" : void 0,
        className: "member_flyout--dropdownSelector--qxxyH select--selectInputExpanded--Lz6m4",
        disabled: !!e.disabled,
        dispatch: l,
        dropdownShown: o,
        formatter: {
          format: e => g[e]
        },
        id: a,
        inputClassName: v()("member_flyout--dropdownSelectorTitle--F1pRt", {
          "member_flyout--dropdownSelectorDisabled--BbsEU": !!e.disabled
        }),
        inputDataTestId: a,
        inputRef: _,
        onChange: t => {
          e.disabled || t === e.selectedOption || (logAndTrackCTA({
            ...u.properties,
            trackingContext: u.name,
            name: `dropdown-${e.id}`,
            value: t,
            prevValue: e.selectedOption
          }), e.onChange(t));
          _.current?.focus();
        },
        property: e.selectedOption,
        rightIcon: t,
        children: e.options.map((t, a) => {
          switch (t.type) {
            case "option":
              return jsx(c$, {
                value: t.key,
                height: 28,
                rightCheck: !0,
                dataTestId: `member-flyout-${e.id}-${t.key}`,
                children: t.text
              }, `option-${t.key}`);
            case "separator":
              return jsx(sK, {}, `separator-${a}`);
            default:
              throwTypeError(t);
          }
        })
      })
    }), e.extraCopy && jsx("div", {
      className: _$$s2.pt8.textBodyMedium.colorTextSecondary.overflowBreakWord.$,
      "data-testid": `member-flyout-${e.id}-extra`,
      children: e.extraCopy
    })]
  });
}
let eD = {
  type: "option",
  key: "",
  text: "\u2013"
};
function eM(e) {
  return e ? getI18nString("member_flyout_modal.update_date", {
    date: new Date(e)
  }) : void 0;
}
function eP(e, t) {
  if (e) return t ? `${e} \xb7 ${t}` : e;
}
function eU(e) {
  var t;
  let a = e.avatarEntity.imgUrl || e.avatarEntity.img_url || e.avatarEntity.imageUrl || e.avatarEntity.imageURL;
  let n = e.avatarEntity.handle ?? "";
  let s = e.avatarEntity.name ?? "";
  return e.planType === FOrganizationLevelType.ORG ? {
    handle: n,
    imgUrl: a,
    name: s,
    currentSeatType: e.orgUser.active_seat_type?.key ?? ViewAccessTypeEnum.VIEW,
    id: e.orgUser.id,
    userId: e.orgUser.user_id,
    eccUpgradingLocked: !!e.orgUser.ecc_upgrading_locked,
    eccDomain: W4(e.orgUser),
    scimLocked: hasScimSeatType(e.orgUser),
    lastActiveAt: e.orgUser.last_seen ? e.orgUser.last_seen : void 0,
    upgradeReason: e.orgUser.active_seat_upgrade_method?.reason,
    upgradeMethod: e.orgUser.active_seat_upgrade_method?.upgrade_method ?? void 0,
    assignedAt: e.orgUser.active_seat_upgrade_date ? new Date(e.orgUser.active_seat_upgrade_date) : void 0,
    upgradeActorName: e.orgUser.active_seat_upgrade_method?.actor_name ?? void 0,
    jobTitle: e.jobTitle ?? void 0
  } : {
    handle: n,
    imgUrl: a,
    name: s,
    currentSeatType: e.member.team_user?.active_seat_type?.key ?? ViewAccessTypeEnum.VIEW,
    currentSeatBillingInterval: e.billingInterval,
    id: e.member.team_user?.id ?? "",
    userId: e.member.team_user?.user_id ?? "",
    eccUpgradingLocked: !!e.member.ecc_upgrading_locked,
    eccDomain: (t = e.member, toTitleCase(getEmailDomain(t.email ?? "") ?? "")),
    scimLocked: !1,
    lastActiveAt: e.member.last_active ? new Date(1e3 * e.member.last_active) : void 0,
    upgradeReason: e.member.upgrade_reason,
    upgradeMethod: e.member.upgrade_method ?? void 0,
    assignedAt: e.member.assigned_at ? new Date(e.member.assigned_at) : void 0,
    upgradeActorName: e.member.upgrade_actor_name ?? void 0,
    jobTitle: e.jobTitle ?? void 0
  };
}
function eF(e) {
  let [t, a] = useState(!1);
  let i = useRef(null);
  let {
    getTriggerProps,
    getContainerProps,
    getArrowProps
  } = usePopoverPrimitive({
    isOpen: t,
    onOpenChange: a,
    type: "listbox",
    openOnHover: !0,
    placement: "bottom"
  });
  let u = null;
  let m = e.planType === FOrganizationLevelType.ORG ? e.org.name : e.team.name;
  u = e.planUserMembershipRecord ? new Date(e.planUserMembershipRecord.createdAt) : e.planType === FOrganizationLevelType.ORG ? new Date(e.orgUser.created_at) : e.member.team_user ? new Date(e.member.team_user.created_at) : null;
  let {
    longText,
    shortText,
    unsupported
  } = _$$d(e.userLabel, m, e.planUserMembershipRecord);
  useEffect(() => {
    unsupported && e.planUserMembershipRecord?.source && null === i.current && (reportError(_$$e.SCALE, Error(`Unsupported plan join source ${e.planUserMembershipRecord.source}`)), i.current = !0);
  }, [unsupported, e.planUserMembershipRecord?.source]);
  let v = u?.toLocaleDateString(void 0, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  let f = tb(v);
  return jsxs("div", {
    className: "xuzqwsy xpezlj7 xnajj62 xvqcqsr xv42yna",
    children: [jsx("h3", {
      ...xk(eB.sectionHeader),
      children: renderI18nText("member_flyout_modal.joined_header")
    }), jsxs("div", {
      className: "x78zum5 x1q0g3np x6s0dn4",
      children: [jsx(ButtonPrimitive, {
        className: eI,
        ...getTriggerProps(),
        children: shortText
      }), jsxs(PopoverPrimitiveContainer, {
        ...getContainerProps({
          style: {
            boxShadow: "var(--elevation-300-tooltip)",
            borderRadius: "5px",
            width: "200px",
            background: "var(--color-bg-tooltip)",
            padding: "4px 8px"
          }
        }),
        children: [jsx(PopoverPrimitiveArrow, {
          ...getArrowProps()
        }), jsx(setupThemeContext, {
          mode: "dark",
          children: jsx("div", {
            ...xk(eB.longText),
            children: longText
          })
        })]
      }), f && jsxs(Fragment, {
        children: [jsx("div", {
          "aria-hidden": !0,
          className: "x2lah0s xuxw1ft",
          children: "\xb7"
        }), jsx("div", {
          ...xk(eB.date),
          children: renderI18nText("members_table.user_upgrade_date", {
            upgradeDate: f
          })
        })]
      })]
    })]
  });
}
function eq(e) {
  let t = eU(e);
  let a = e.planType === FOrganizationLevelType.TEAM ? !e.member.upgrade_method : !e.orgUser.active_seat_upgrade_method?.upgrade_method;
  let s = useDispatch();
  let r = t.eccUpgradingLocked || t.scimLocked;
  let l = r ? {
    "data-tooltip": t.eccUpgradingLocked ? getI18nString("external_collaboration_restricted.members.tooltip.v2", {
      eccDomain: t.eccDomain
    }) : getI18nString("members_table.role_idp_tooltip.seat_rename"),
    "data-tooltip-type": KindEnum.TEXT
  } : null;
  return jsxs(AutoLayout, {
    spacing: 8,
    direction: "vertical",
    children: [jsxs(AutoLayout, {
      spacing: 8,
      direction: "horizontal",
      children: [jsx("div", {
        className: _$$s2.textBodyMediumStrong.$,
        children: renderI18nText("members_table.menu_bar_filter.role.seat_rename")
      }), !e.showBillingIntervalDropdown && jsx(e$, {
        ...e
      })]
    }), jsx("div", {
      ...l,
      className: _$$s2.b1.colorBorder.bRadius2.px4.py4.wFull.borderBox.$,
      children: jsxs("div", {
        className: _$$s2.flex.flexRow.wFull.gap4.itemsCenter.$,
        children: [jsx(BC, {
          type: t.currentSeatType,
          size: "24"
        }), jsx(TextWithTruncation, {
          color: r ? "disabled" : "default",
          children: JT(t.currentSeatType)
        }), jsx("div", {
          className: "member_flyout--changeSeatButtonContainer--UNf6y",
          children: jsx(Button, {
            disabled: r,
            variant: "secondary",
            onClick: () => {
              E1({
                dispatch: s,
                planUser: t,
                currency: e.currency
              });
            },
            children: renderI18nText("members_table.batch_actions_menu.role_change.seat_rename")
          })
        })]
      })
    }), a ? jsx(eV, {
      ...e
    }) : jsx(eG, {
      ...e
    })]
  });
}
function e$(e) {
  if (eU(e).currentSeatType === ViewAccessTypeEnum.VIEW || e.planType !== FOrganizationLevelType.TEAM || !e.billingInterval) return null;
  let t = null;
  switch (e.billingInterval) {
    case BillingCycle.MONTH:
      t = renderI18nText("member_flyout_modal.billing_interval.month");
      break;
    case BillingCycle.YEAR:
      t = renderI18nText("member_flyout_modal.billing_interval.year");
      break;
    default:
      e.billingInterval;
  }
  return t ? jsx(Badge, {
    color: BadgeColor.DEFAULT,
    text: t,
    dataTestId: "billing-interval-badge"
  }) : null;
}
let eB = {
  date: {
    ..._$$g.textBodyMedium,
    marginLeft: "x1iog12x",
    marginInlineStart: null,
    marginInlineEnd: null,
    color: "x1n0bwc9",
    flexShrink: "x2lah0s",
    whiteSpace: "xuxw1ft",
    $$css: !0
  },
  sectionHeader: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  longText: {
    ..._$$g.textBodyMedium,
    color: "x1akne3o",
    $$css: !0
  }
};
function eG(e) {
  let t = useDispatch();
  if (eU(e).currentSeatType === ViewAccessTypeEnum.VIEW) return null;
  let a = [];
  let r = null;
  let l = null;
  let o = null;
  let d = null;
  e.planType === FOrganizationLevelType.TEAM ? (e.member.upgrade_method && (d = e.member.upgrade_method, r = Qi(e.member.team_user && e.member.team_user.user?.handle || e.member.name, d, e.member.upgrade_reason, e.member.upgrade_actor_name, null, e.member.team_user ? e.member.team_user.active_seat_type?.key : void 0), l = mb(d)), e.member.assigned_at && (o = new Date(e.member.assigned_at).toLocaleDateString(void 0, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }))) : e.planType === FOrganizationLevelType.ORG && e.orgUser.active_seat_upgrade_method && (d = e.orgUser.active_seat_upgrade_method.upgrade_method, r = Qi(e.orgUser.user.handle, d, e.orgUser.active_seat_upgrade_method.reason, e.orgUser.active_seat_upgrade_method.actor_name, e.orgUser.active_seat_upgrade_method.resource_name, e.orgUser.active_seat_type?.key), l = mb(d), e.orgUser.active_seat_upgrade_date && (o = new Date(e.orgUser.active_seat_upgrade_date).toLocaleDateString(void 0, {
    year: "numeric",
    month: "long",
    day: "numeric"
  })));
  let _ = null;
  switch (d) {
    case FApprovalMethodType.AUTO_APPROVED:
    case FApprovalMethodType.AUTO_APPROVED_AVAILABLE_SEAT:
    case FApprovalMethodType.MANUAL_APPROVED:
    case FApprovalMethodType.MANUAL_APPROVED_NO_AVAILABLE_SEAT:
      _ = jsx(ButtonPrimitive, {
        htmlAttributes: {
          "data-testid": "member-flyout-approval-settings-modal-button"
        },
        "aria-label": getI18nString("member_flyout_modal.upgrade_method_button_aria_label"),
        className: eI,
        onClick: _$$S({
          dispatch: t,
          currency: e.currency,
          renewalTerm: e.renewalTerm
        }),
        children: jsx(TextWithTruncation, {
          color: "brand",
          children: l
        })
      });
      break;
    case FApprovalMethodType.SCIM:
    case FApprovalMethodType.ADMIN_INITIATED:
    case FApprovalMethodType.FIGMA_ADMIN:
    case FApprovalMethodType.ADMIN_SELF_UPGRADE:
      _ = jsx("div", {
        className: eI,
        children: jsx(TextWithTruncation, {
          color: "secondary",
          children: l
        })
      });
      break;
    default:
      _ = jsx(TextWithTruncation, {
        color: "secondary",
        children: l
      });
  }
  l && a.push(jsx("div", {
    "data-testid": "member-flyout-upgrade-info-method",
    ...(r && {
      "data-tooltip": r,
      "data-tooltip-type": "text",
      "data-tooltip-show-immediately": !0,
      "data-tooltip-hide-immediately": !0
    }),
    children: _
  }));
  let u = tb(o);
  if (u) {
    let e = renderI18nText("members_table.user_upgrade_date", {
      upgradeDate: u
    });
    a.push(jsxs(Fragment, {
      children: [jsx(TextWithTruncation, {
        color: "secondary",
        "aria-hidden": "true",
        children: a.length > 0 && "\xb7"
      }), jsx("div", {
        ...xk(eB.date),
        children: jsx(TextWithTruncation, {
          color: "secondary",
          children: e
        })
      })]
    }));
  }
  return 0 === a.length ? null : jsx("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 x1o7y6m2",
    "data-testid": "member-flyout-upgrade-info",
    children: a.map((e, t) => jsx(_$$Fragment, {
      children: e
    }, t))
  });
}
function ez(e) {
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4",
    children: [jsx("div", {
      "data-tooltip": getI18nString("members_table.user_upgrade_reason_and_date.tooltip", {
        upgradeReason: e.shortReason,
        upgradeDate: e.upgradeDate
      }),
      "data-tooltip-type": KindEnum.TEXT,
      "data-testid": e.testId,
      "data-tooltip-show-immediately": !0,
      "data-tooltip-hide-immediately": !0,
      children: jsx(TextWithTruncation, {
        color: "secondary",
        children: e.paidStatusString
      })
    }), jsx(TextWithTruncation, {
      color: "secondary",
      "aria-hidden": !0,
      children: "\xb7"
    }), jsx(TextWithTruncation, {
      color: "secondary",
      children: renderI18nText("members_table.user_upgrade_date", {
        upgradeDate: e.upgradeDate
      })
    })]
  });
}
function eV(e) {
  if (eU(e).currentSeatType === ViewAccessTypeEnum.VIEW) return null;
  let t = [];
  if (e.planType === FOrganizationLevelType.TEAM) {
    if (e.member.upgrade_method) return null;
    if (e.member.design_editor_upgrade) {
      let a = e.member.design_editor_upgrade;
      let s = ev(a, e.member.name || e.member.email);
      let i = tb(a.created_at);
      s && i && t.push([0, jsx(ez, {
        shortReason: s,
        upgradeDate: i,
        paidStatusString: getI18nString("admin_settings.people_tab.upgrade_method.migrated.design"),
        testId: "migrated-upgrade-reason-design"
      }, "migrated-upgrade-reason-design")]);
    }
    if (e.member.whiteboard_editor_upgrade) {
      let a = e.member.whiteboard_editor_upgrade;
      let s = ev(a, e.member.name || e.member.email);
      let i = tb(a.created_at);
      s && i && t.push([1, jsx(ez, {
        shortReason: s,
        upgradeDate: i,
        paidStatusString: getI18nString("admin_settings.people_tab.upgrade_method.migrated.figjam"),
        testId: "migrated-upgrade-reason-figjam"
      }, "migrated-upgrade-reason-figjam")]);
    }
  } else {
    if (e.orgUser.active_seat_upgrade_method && e.orgUser.active_seat_upgrade_method.upgrade_method) return null;
    let a = e.orgUser.user.handle || e.orgUser.user.name || "";
    if (e.orgUser.design_upgrade_reason) {
      let s = rq(a, e.orgUser.design_upgrade_reason);
      let i = tb(e.orgUser.design_upgrade_reason.created_at);
      s && i && t.push([2, jsx(ez, {
        shortReason: s,
        upgradeDate: i,
        paidStatusString: getI18nString("admin_settings.people_tab.upgrade_method.migrated.design"),
        testId: "migrated-upgrade-reason-design"
      }, "migrated-upgrade-reason-design")]);
    }
    if (e.orgUser.whiteboard_upgrade_reason) {
      let s = rq(a, e.orgUser.whiteboard_upgrade_reason);
      let i = tb(e.orgUser.whiteboard_upgrade_reason.created_at);
      s && i && t.push([3, jsx(ez, {
        shortReason: s,
        upgradeDate: i,
        paidStatusString: getI18nString("admin_settings.people_tab.upgrade_method.migrated.figjam"),
        testId: "migrated-upgrade-reason-figjam"
      }, "migrated-upgrade-reason-figjam")]);
    }
    if (e.orgUser.dev_mode_upgrade_reason) {
      let s = rq(a, e.orgUser.dev_mode_upgrade_reason);
      let i = tb(e.orgUser.dev_mode_upgrade_reason.created_at);
      s && i && t.push([5, jsx(ez, {
        shortReason: s,
        upgradeDate: i,
        paidStatusString: getI18nString("admin_settings.people_tab.upgrade_method.migrated.dev_mode"),
        testId: "migrated-upgrade-reason-dev-mode"
      }, "migrated-upgrade-reason-dev-mode")]);
    }
  }
  return jsx("div", {
    "data-testid": "migrated-user-upgrade-info",
    className: "x1o7y6m2",
    children: jsx(AutoLayout, {
      direction: "vertical",
      spacing: 8,
      children: t.map(e => jsx(_$$Fragment, {
        children: e[1]
      }, e[0]))
    })
  });
}
function eW(e) {
  let t = useDispatch();
  let {
    allAdminableLicenseGroups
  } = _$$x();
  let s = _$$f(e.orgUser, allAdminableLicenseGroups);
  let {
    updateReason,
    updateTimestamp
  } = mm(e.orgUser.license_group_member, e.orgUsersByUserId);
  let o = eP(updateReason, eM(updateTimestamp));
  return jsx(eL, {
    id: "license-group",
    label: getI18nString("member_flyout_modal.license_group_select_label"),
    options: s,
    selectedOption: e.orgUser.license_group_member?.license_group_id ?? "",
    extraCopy: o,
    onChange: a => {
      qj([e.orgUser.id], a, e.licenseGroupsById, e.isCurrentUserOrgAdmin, e.org, t, e.queueFilterCountsRefetch, null, !0);
    },
    disabled: !!e.orgUser.license_group_member?.idp_group && "lock",
    disabledTooltipText: getI18nString("members_table.idp_user.user_provisioned")
  });
}
function eH(e) {
  let t = getJobRoleDisplay(e.jobTitle ?? void 0);
  let a = e.jobTitle && t ? {
    type: "option",
    key: e.jobTitle,
    text: t
  } : eD;
  let i = e.planType === FOrganizationLevelType.TEAM && !e.member.team_role?.pending && !e.member.team_user;
  return (useEffect(() => {
    i && trackEventAnalytics("member_flyout_hide_job_title", {
      teamId: e.team.id,
      roleId: e.member.team_role?.id,
      userId: e.member.team_role?.user_id ?? e.member.team_role?.user?.id
    });
  }, [i]), i) ? null : jsx(eL, {
    id: "job-title",
    label: getI18nString("member_flyout_modal.job_title_select_label"),
    options: [a],
    selectedOption: a.key,
    onChange: lQ,
    disabled: !0
  });
}
function eY(e) {
  return e.billingInterval ? jsx(eL, {
    id: "billing-interval",
    label: getI18nString("member_flyout_modal.billing_interval_select_label"),
    options: [{
      type: "option",
      key: BillingCycle.MONTH,
      text: getI18nString("member_flyout_modal.billing_interval.monthly")
    }, {
      type: "option",
      key: BillingCycle.YEAR,
      text: getI18nString("member_flyout_modal.billing_interval.annually")
    }],
    selectedOption: e.billingInterval,
    onChange: lQ,
    disabled: !0
  }) : null;
}
function eJ(e) {
  let t = useDispatch();
  let a = _$$o(e.orgUser, e.workspacesCanMoveTo);
  let s = findMainWorkspaceUser(e.orgUser);
  let {
    updateReason,
    updateTimestamp
  } = L7(s, e.orgUsersByUserId);
  let o = eP(updateReason, eM(updateTimestamp));
  return jsx(eL, {
    id: "workspace",
    label: getI18nString("member_flyout_modal.workspace_select_label"),
    options: a,
    selectedOption: s?.workspace_id ?? "",
    extraCopy: o,
    onChange: a => {
      _$$ep([e.orgUser.id], a, e.org, t, e.queueFilterCountsRefetch, null);
    },
    disabled: !!s?.idp_group && "lock",
    disabledTooltipText: getI18nString("members_table.idp_user.user_provisioned")
  });
}
function eK(e) {
  let t;
  let a;
  let o;
  let d = useDispatch();
  let c = function (e) {
    let t = useDispatch();
    let a = !!e;
    return useCallback(n => {
      if (!a) return lQ;
      t(_$$rq({
        emails: [n],
        resourceType: FResourceCategoryType.TEAM,
        resourceIdOrKey: e.teamId,
        level: AccessLevelEnum.ADMIN,
        source: e.source,
        teamId: e.teamId
      }));
    }, [a, e?.source, e?.teamId, t]);
  }(e.planType === FOrganizationLevelType.TEAM ? {
    teamId: e.team.id,
    source: "members_table_flyout"
  } : null);
  if ("grant" === e.adminAccessAction) switch (a = getI18nString("member_flyout_modal.grant_admin_access_label"), o = "grant-admin", e.planType) {
    case FOrganizationLevelType.ORG:
      t = () => {
        VS({
          id: e.orgUser.id,
          org_id: e.org.id,
          permission: FUserRoleType.ADMIN
        }, d, e.queueFilterCountsRefetch);
      };
      break;
    case FOrganizationLevelType.TEAM:
      t = () => e.onRemoveMemberOrChangeMemberPermission(AccessLevelEnum.ADMIN);
      break;
    default:
      throwTypeError(e);
  } else if ("revoke" === e.adminAccessAction) switch (a = getI18nString("member_flyout_modal.revoke_admin_access_label"), o = "revoke-admin", e.planType) {
    case FOrganizationLevelType.ORG:
      t = () => {
        VS({
          id: e.orgUser.id,
          org_id: e.org.id,
          permission: FUserRoleType.MEMBER
        }, d, e.queueFilterCountsRefetch);
      };
      break;
    case FOrganizationLevelType.TEAM:
      t = () => e.onRemoveMemberOrChangeMemberPermission(AccessLevelEnum.EDITOR);
      break;
    default:
      throwTypeError(e);
  } else "invite" === e.adminAccessAction ? (a = getI18nString("member_flyout_modal.invite_admin_access_label"), o = "invite-admin", t = () => c(e.member.email)) : throwTypeError(e.adminAccessAction);
  return jsx($z, {
    variant: "secondary",
    onClick: t,
    trackingProperties: {
      name: o
    },
    children: a
  });
}
function eX(e) {
  let t;
  let a;
  let s = useDispatch();
  switch (e.planType) {
    case FOrganizationLevelType.ORG:
      t = e.org.name;
      a = () => {
        QV([e.orgUser.id], e.org, s);
      };
      break;
    case FOrganizationLevelType.TEAM:
      t = e.team.name;
      a = e.onRemoveUserFromTeam;
      break;
    default:
      throwTypeError(e);
  }
  return jsx($z, {
    variant: "destructiveSecondary",
    onClick: a,
    trackingProperties: {
      name: "remove-from-plan"
    },
    children: jsx("span", {
      children: renderI18nText("member_flyout_modal.remove_from_plan", {
        planName: t
      })
    })
  });
}
function eQ(e) {
  let t;
  let a = useSelector(e => e.selectedView.view);
  let l = !e.isMe;
  if (e.planType === FOrganizationLevelType.ORG) {
    l = !e.isMe && (e.isCurrentUserOrgAdmin || e.orgUser.permission !== FUserRoleType.ADMIN);
    let n = k_(e.orgUser, e.isMe, a);
    t = n ? {
      ...e,
      adminAccessAction: n
    } : null;
  } else if (e.planType === FOrganizationLevelType.TEAM) {
    l = !e.isMe && e.member.canRemoveUser;
    let a = _$$k_(e.member, e.isMe, e.team);
    t = a ? {
      ...e,
      adminAccessAction: a
    } : null;
  } else throwTypeError(e);
  let o = [{
    key: "admin-access",
    content: t && jsx(eK, {
      ...t
    })
  }, {
    key: "remove",
    content: l && jsx("div", {
      className: _$$s2.flexGrow1.flexBasis0.minW200.$,
      children: jsx(eX, {
        ...e
      })
    })
  }].filter(({
    content: e
  }) => e);
  return 0 === o.length ? null : jsx("div", {
    className: _$$s2.flex.flexWrap.mx24.py24.gap8.bt1.colorBorder.bSolid.$,
    children: o.map(({
      key: e,
      content: t
    }) => jsx(_$$Fragment, {
      children: t
    }, e))
  });
}
function eZ(e) {
  let t = useSelector(e => e.selectedView.view);
  let a = useSelector(e => e.teamBilling);
  let r = C3();
  let l = !1;
  useEffect(() => {
    e.planType === FOrganizationLevelType.TEAM && l && trackEventAnalytics("member_flyout_hide_job_title", {
      teamId: e.team.id,
      roleId: e.member.team_role?.id,
      userId: e.member.team_role?.user_id ?? e.member.team_role?.user?.id
    });
  }, [l]);
  l = e.planType === FOrganizationLevelType.TEAM && !e.member.team_role?.pending && !e.member.team_user;
  let o = e.planType === FOrganizationLevelType.TEAM && hasValidSubscription(e.team) || XO(t);
  let d = _$$v(a?.summary);
  let c = e.planType === FOrganizationLevelType.TEAM && r(d);
  let _ = !l;
  let u = e.planType === FOrganizationLevelType.ORG && a3(e.org, e.licenseGroupsById) && PR(t);
  let m = e.planType === FOrganizationLevelType.ORG && e.workspacesCanMoveTo.length > 0 && w6(t);
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.$,
    children: [jsxs(AutoLayout, {
      direction: "vertical",
      horizontalAlignItems: "stretch",
      spacing: 24,
      padding: 24,
      children: [o && jsx(eq, {
        ...e,
        showBillingIntervalDropdown: c
      }), c && jsx(eY, {
        ...e
      }), _ && jsx(eH, {
        ...e
      }), u && jsx(eW, {
        ...e
      }), m && jsx(eJ, {
        ...e
      })]
    }), e.displayPlanUserMembershipRecord && jsx(eF, {
      ...e
    }), jsx(eQ, {
      ...e
    })]
  });
}
function e0(e) {
  let t = useDispatch();
  let a = useSelector(e => e.selectedView.view);
  let [r, l] = useState(!0);
  let [o, d] = useState(null);
  let [c, u] = useState(!1);
  return (useEffect(() => {
    _$$J2.getRecent({
      orgUserId: e.orgUser.id,
      pageSize: 50
    }).then(e => {
      d(e.data.meta.activity_logs);
      l(!1);
    }).catch(e => {
      t(FlashActions.error(e.data?.message || "An error occurred while fetching recent activity."));
      console.error("Unable to load recent activity", e);
    });
  }, [t, e.orgUser.id]), r) ? jsx(eN, {}) : o && 0 !== o.length ? jsxs("div", {
    className: _$$s2.flex.flexColumn.hFull.$,
    "data-testid": "activity-log-table",
    children: [jsxs("div", {
      className: _$$s2.flex.justifyBetween.fontMedium.h48.py16.px24.$$if(c, _$$s2.bb1.bSolid.colorBorder, _$$s2.b0).$,
      "data-testid": "activity-log-table-header",
      children: [jsx("div", {
        className: `${eA} ${_$$s2.colorTextSecondary.flex.justifyStart.itemsCenter.flexRow.borderBox.$}`,
        children: renderI18nText("column_header.date")
      }), jsx("div", {
        className: `${eT} ${_$$s2.colorTextSecondary.borderBox.flex.itemsCenter.$}`,
        children: renderI18nText("column_header.event")
      }), jsx("div", {
        className: `${eA} ${_$$s2.colorTextSecondary.borderBox.flex.itemsCenter.justifyEnd.$}`,
        children: renderI18nText("column_header.product")
      })]
    }), jsxs(_$$P, {
      dataTestId: "activity-log-table-body",
      children: [jsx(_$$a, {
        onIntersectionChange: e => {
          u(!e.isIntersecting);
        }
      }), o.map(t => function (e, t) {
        let a = $X(e, t.org.name, t.orgUser.user.email || "", t.displayPlanUserMembershipRecord);
        return null === a ? jsx(Fragment, {}) : jsxs("div", {
          className: `member_flyout--tableRow--T8j4q ${_$$s2.flex.itemsCenter.justifyBetween.minH48.my4.mx24.bt1.bSolid.$}`,
          "data-testid": "activity-log-table-row",
          children: [jsxs("div", {
            className: `${eA} ${_$$s2.flex.flexColumn.itemsStart.borderBox.$}`,
            children: [jsx(TextWithTruncation, {
              color: "default",
              children: renderI18nText("recent_activity_modal.activity_log_created_at", {
                creationDate: _$$A(e.created_at).toDate()
              })
            }), jsx(TextWithTruncation, {
              color: "secondary",
              children: renderI18nText("recent_activity_modal.activity_log_created_at_time", {
                creationDate: _$$A(e.created_at).toDate()
              })
            })]
          }), jsx("div", {
            className: `${eT} ${_$$s2.borderBox.flex.itemsCenter.$}`,
            children: a
          }), jsx("div", {
            className: `${eA} ${_$$s2.borderBox.flex.itemsCenter.justifyEnd.$}`,
            children: Bn(e)
          })]
        }, e.id);
      }(t, e))]
    }), "orgAdminSettings" === a && jsx("div", {
      className: _$$s2.flex.justifyEnd.p8.bt1.bSolid.colorBorder.$,
      "data-testid": "activity-log-table-footer",
      children: jsx(Button, {
        variant: "secondary",
        disabled: 0 === o.length,
        onClick: () => {
          t(hideModal());
          t(selectViewAction({
            view: "orgAdminSettings",
            orgAdminSettingsViewTab: DashboardSection.ACTIVITY,
            activityTabInitialEmail: e.orgUser.user.email
          }));
        },
        children: renderI18nText("recent_activity_modal.view_all_activity_button")
      })
    })]
  }) : jsx("div", {
    className: _$$s2.flex.flexColumn.hFull.justifyCenter.itemsCenter.$,
    children: jsx(TextWithTruncation, {
      color: "secondary",
      children: renderI18nText("recent_activity_modal.no_activity_found")
    })
  });
}
function e1(e) {
  let t = UV()(e.planType);
  let a = ["manage"];
  e.planType === FOrganizationLevelType.ORG && a.push("activity");
  let [s, i, r] = _$$t.useTabs(a.reduce((e, t) => ({
    ...e,
    [t]: !0
  }), {}), {
    orientation: "horizontal",
    defaultActive: "manage"
  });
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.hFull.$,
    children: [jsx("div", {
      className: _$$s2.pt6.pb6.pl16.pr16.h32.flexGrow0.bb1.bSolid.colorBorder.flex.flexRow.itemsCenter.$,
      "data-testid": "tab-strip",
      children: jsxs(_$$t.TabStrip, {
        manager: r,
        children: [jsx(_$$t.Tab, {
          ...s.manage,
          children: getI18nString("member_flyout_modal.tabs.manage_tab_title")
        }), e.planType === FOrganizationLevelType.ORG && jsx(_$$t.Tab, {
          ...s.activity,
          children: getI18nString("member_flyout_modal.tabs.activity_tab_title")
        })]
      })
    }), jsxs("div", {
      className: _$$s2.flexGrow1.hFull.overflowAuto.$,
      children: [jsx(_$$t.TabPanel, {
        ...i.manage,
        children: jsx(eZ, {
          ...e,
          displayPlanUserMembershipRecord: t
        })
      }), e.planType === FOrganizationLevelType.ORG && jsx(_$$t.TabPanel, {
        ...i.activity,
        height: "fill",
        children: jsx(e0, {
          ...e,
          displayPlanUserMembershipRecord: t
        })
      })]
    })]
  });
}
function e2(e) {
  return !!(e.planType === FOrganizationLevelType.TEAM && e.member.team_role?.pending);
}
function e4(e) {
  return e.avatarEntity.handle ?? e.avatarEntity.name ?? e.avatarEntity.email ?? "";
}
export let $$e50 = {
  Root: forwardRef((e, t) => jsx(_$$I, {
    open: e.open,
    trackingName: e.trackingName,
    trackingProperties: e.trackingProperties,
    children: jsx(_$$m.Root, {
      ref: t,
      open: e.open,
      onClose: e.onClose,
      children: e.children
    })
  })),
  Contents: function (e) {
    let t;
    let a;
    let l = useSelector(e => !!e.modalShown);
    let o = function (e) {
      let t;
      let a = _$$m.useClose();
      switch (e.planType) {
        case FOrganizationLevelType.ORG:
          t = {
            planId: e.org.id,
            targetUserId: e.orgUser.user_id
          };
          break;
        case FOrganizationLevelType.TEAM:
          t = {
            planId: e.team.id,
            targetUserId: e.member.team_user?.user_id ?? null
          };
          break;
        default:
          throwTypeError(e);
      }
      let n = useSubscription(MemberFlyoutInfoView, {
        ...t,
        planType: e.planType
      }).transform(t => {
        let a = getResourceDataOrFallback(t.memberFlyoutInfo);
        return {
          teamUserId: a?.teamUserId,
          teamUser: a?.teamUser,
          billingInterval: a?.teamUser?.currentSeat?.billingInterval,
          orgUserId: a?.orgUserId,
          orgUser: a?.orgUser,
          planUserMembershipRecord: a?.orgUser?.planUserMembershipRecord,
          jobTitle: getOrgLevelData(e.planType, {
            team: a?.teamUser?.user.profile?.jobTitle,
            org: a?.orgUser?.user.profile?.jobTitle
          }) ?? null
        };
      });
      useLayoutEffect(() => {
        "loaded" === n.status && "loaded" === n.status && getOrgLevelData(e.planType, {
          team: n.data.teamUserId && !n.data.teamUser,
          org: n.data.orgUserId && !n.data.orgUser
        }) && a();
      }, [a, e.planType, n.status, n.data]);
      return n;
    }(e);
    let d = _$$R();
    if ("loaded" === o.status) {
      let s = {
        ...e,
        jobTitle: o.data.jobTitle,
        isPending: e2(e),
        userLabel: e4(e),
        billingInterval: e.planType === FOrganizationLevelType.TEAM ? o.data.billingInterval : void 0,
        planUserMembershipRecord: o.data.planUserMembershipRecord
      };
      t = jsx(eO, {
        ...s
      });
      a = d ? jsx(e1, {
        ...s
      }) : jsx(eZ, {
        ...s
      });
    } else {
      t = jsx(eC, {});
      a = jsx(eN, {});
    }
    return jsxs(_$$m.Contents, {
      ...(l ? {
        inert: "true"
      } : void 0),
      children: [jsxs(_$$m.Header, {
        children: [t, jsx(_$$m.HiddenTitle, {
          children: e2(e) ? e.avatarEntity.email ?? "" : e4(e)
        })]
      }), jsx(_$$m.Body, {
        height: "fill",
        children: a
      })]
    });
  }
};
export const E = $$e50;