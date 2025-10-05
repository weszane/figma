import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, Suspense, useMemo, useId, useState, useEffect } from "react";
import { ServiceCategories } from "../905/165054";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip, DialogHiddenTitle, DialogContents } from "../figma_app/272243";
import { handleSuspenseRetainRelease } from "../figma_app/566371";
import { reportError } from "../905/11";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { useTracking, TrackingProvider } from "../figma_app/831799";
import { FOrganizationLevelType, FPlanNameType, FResourceCategoryType } from "../figma_app/191312";
import { useTeamPlanFeatures } from "../figma_app/465071";
import { N as _$$N } from "../905/809096";
import { useDispatch, useSelector } from "react-redux";
import { textDisplayConfig } from "../905/687265";
import { props } from "@stylexjs/stylex";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { ViewAccessTypeEnum } from "../905/513035";
import { F5, Z as _$$Z } from "../figma_app/761870";
import { e as _$$e2 } from "../905/393279";
import { _u, rG } from "../1881/125927";
import { LabelPrimitive } from "../905/865071";
import { BannerInsetModal } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { N as _$$N2 } from "../905/572042";
import { trackEventAnalytics } from "../905/449184";
import { useSingleEffect } from "../905/791079";
import { isProrationBillingEnabledForCurrentPlan } from "../figma_app/618031";
import { JT, tI } from "../figma_app/599327";
import { I as _$$I } from "../905/343211";
import { h as _$$h2, d as _$$d } from "../figma_app/603561";
import { CurrencyFormatter } from "../figma_app/514043";
import { resourceUtils } from "../905/989992";
import { un } from "../figma_app/457899";
import { RenewalTermEnum } from "../905/712921";
import { bL as _$$bL, DZ, mc, c$ } from "../905/493196";
import { E as _$$E } from "../905/53857";
import { AutoLayout, Spacer } from "../905/470281";
import { B as _$$B } from "../905/261906";
import { zz } from "../figma_app/80683";
import { logAndTrackCTA } from "../figma_app/314264";
import { viewCollaboratorSet } from "../905/332483";
import { compareProductAccessTypes, useFormatProductNamesForSeatType } from "../figma_app/217457";
import { Tabs } from "../905/150656";
import { useWebLoggerTimerEffect } from "../905/485103";
import { T as _$$T } from "../figma_app/257703";
import { VisualBellActions } from "../905/302958";
import { LN, Kq } from "../905/941249";
import { u as _$$u } from "../1e926454/858319";
import { S as _$$S } from "../1e926454/283343";
import { dr, eb as _$$eb, oU } from "../4452/405965";
import { selectUser } from "../905/372672";
import { getPermissionLevelName } from "../figma_app/12796";
import { isPaidPlan } from "../figma_app/428858";
import { sendRoleInvites } from "../905/351260";
import { bp, Wj } from "../905/913057";
import { TG } from "../1881/866163";
import { AccessLevelEnum } from "../905/557142";
import { o6, gy } from "../905/986349";
import { r as _$$r, X as _$$X } from "../905/308709";
import { i as _$$i } from "../1e926454/162932";
function T({
  id: e,
  children: n,
  label: t
}) {
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x167g77z",
    children: [jsx("div", {
      className: "x78zum5 x1qughib",
      children: jsx(LabelPrimitive, {
        ...props(textDisplayConfig.textBodyMediumStrong),
        htmlFor: e,
        children: t
      })
    }), n]
  });
}
function W(e) {
  let [n] = handleSuspenseRetainRelease(function (e) {
    let n = isProrationBillingEnabledForCurrentPlan();
    let t = _$$h2({
      planType: e.type,
      planParentId: e.key.parentId
    });
    let i = _$$I(e);
    let a = "loaded" === i.status && !i.data || !!t.data;
    let r = un({
      planKey: e.key,
      currentSeatType: ViewAccessTypeEnum.VIEW,
      currentSeatBillingInterval: e.type === FOrganizationLevelType.ORG ? RenewalTermEnum.YEAR : RenewalTermEnum.MONTH,
      enabled: n && !a
    });
    return "loading" === t.status ? resourceUtils.loadingSuspendable(t.suspense) : r;
  }(e));
  return n.data;
}
function H(e) {
  let {
    onChange
  } = e;
  let t = useTracking();
  let r = useCallback(e => {
    onChange(e);
    logAndTrackCTA({
      ...t.properties,
      trackingContext: t.name,
      newValue: e
    });
  }, [onChange, t]);
  return jsx(_$$bL, {
    value: e.value,
    onChange: r,
    children: jsxs(Suspense, {
      fallback: jsx(X, {
        disabled: !0,
        ...e
      }),
      children: [jsx(X, {
        ...e
      }), jsx(Q, {
        ...e
      })]
    })
  });
}
function X({
  id: e,
  value: n,
  disabled: t
}) {
  return jsx(DZ, {
    id: e,
    iconLead: jsx("div", {
      className: "xfawy5m",
      children: jsx(_$$B, {
        type: n,
        size: "24"
      })
    }),
    width: "fill",
    size: "lg",
    disabled: t,
    children: JT(n)
  });
}
function Q({
  plan: e
}) {
  let n = zz(e.key.parentId, e.key.type);
  let t = _$$d({
    reportErrorsToTeam: ServiceCategories.SCALE
  });
  let a = W(e);
  return jsx(mc, {
    children: viewCollaboratorSet.sort(compareProductAccessTypes).map(r => r === ViewAccessTypeEnum.VIEW ? jsx(U, {
      planTier: e.tier,
      seatType: r
    }, r) : jsx(U, {
      planTier: e.tier,
      seatType: r,
      price: t ? null : a?.[r],
      availableCount: t ? null : n?.[r]?.available
    }, r))
  });
}
function U({
  seatType: e,
  planTier: n,
  price: t,
  availableCount: r
}) {
  let s = useMemo(() => t ? new CurrencyFormatter(t.currency).formatMoney(t.amount, {
    showCents: !1
  }) : null, [t]);
  let l = useFormatProductNamesForSeatType({
    overridePlanTier: n
  });
  return jsx(c$, {
    value: e,
    "data-testid": `seat-type-option-${e}`,
    children: jsxs(AutoLayout, {
      direction: "vertical",
      spacing: 4,
      padding: {
        vertical: 4
      },
      children: [jsxs(AutoLayout, {
        direction: "horizontal",
        spacing: 8,
        children: [jsx("div", {
          ...props(Z.optionSeatName),
          children: JT(e)
        }), !!r && jsx(_$$E, {
          variant: "defaultFilled",
          children: getI18nString("plan_invite_modal.available_seats", {
            count: r
          })
        }), jsx(Spacer, {}), t && jsx("div", {
          ...props(Z.optionSeatSecondaryText),
          children: s && getI18nString("general.price_per_month", {
            priceString: s
          })
        })]
      }), jsx("div", {
        ...props(Z.optionSeatSecondaryText),
        children: l(e)
      })]
    })
  });
}
let Z = {
  optionSeatName: {
    ...textDisplayConfig.textBodyMediumStrong,
    $$css: !0
  },
  optionSeatSecondaryText: {
    ...textDisplayConfig.textBodyMedium,
    color: "xoq6bns",
    maxWidth: "x1j9u4d2",
    whiteSpace: "xeaf4i8",
    $$css: !0
  }
};
function ee({
  seatType: e,
  onChange: n,
  plan: t,
  helpText: r,
  hideCostMessaging: s
}) {
  let l = useId();
  return jsxs(T, {
    id: l,
    label: getI18nString("plan_invite_modal.seat_type"),
    children: [jsx(H, {
      id: l,
      value: e,
      onChange: n,
      plan: t
    }), r && jsx(TrackingProvider, {
      name: "plan_invite_modal.seat_type_help_text",
      properties: {
        seatType: e,
        helpText: r.toString()
      },
      children: jsx("div", {
        className: "xv1l7n4",
        "data-testid": "seat-type-input-group-help-text",
        children: r
      })
    }), jsx(en, {
      seatType: e,
      plan: t,
      hideCostMessaging: s
    })]
  });
}
function en({
  plan: e,
  seatType: n,
  hideCostMessaging: t
}) {
  let s = isProrationBillingEnabledForCurrentPlan();
  let l = _$$I(e);
  let o = "loaded" === l.status && !l.data;
  let d = _$$d({
    reportErrorsToTeam: ServiceCategories.SCALE
  });
  let c = W(e);
  let p = n !== ViewAccessTypeEnum.VIEW ? c?.[n] : null;
  let u = useMemo(() => p?.currency ? new CurrencyFormatter(p?.currency) : null, [p?.currency]);
  let m = useMemo(() => ({
    seatType: n,
    prorationEnabled: s,
    planDoesNotHaveBilling: o,
    priceAmount: p?.amount,
    priceCurrency: p?.currency
  }), [n, s, o, p]);
  if (t || n === ViewAccessTypeEnum.VIEW || d) return null;
  if (!s || o) return jsx(et, {
    trackingProperties: m,
    children: renderI18nText("plan_invite_modal.cost_messaging.description.without_prorated_costs", {
      seatType: tI(n)
    })
  });
  if (!p || !u) return jsx(ei, {});
  let h = u.formatMoney(p.amount, {
    showCents: !1
  });
  return jsx(et, {
    trackingProperties: m,
    children: e.tier === FPlanNameType.PRO ? renderI18nText("plan_invite_modal.cost_messaging.description.with_monthly_prorated_costs", {
      seatType: tI(n),
      monthlyPrice: h
    }) : renderI18nText("plan_invite_modal.cost_messaging.description.with_prorated_costs", {
      seatType: tI(n),
      monthlyPrice: h
    })
  });
}
function et({
  children: e,
  trackingProperties: n
}) {
  return jsx(TrackingProvider, {
    name: "Cost messaging banner",
    properties: n,
    children: jsx("div", {
      className: "x1y1aw1k",
      children: jsxs(BannerInsetModal, {
        variant: "default",
        children: [jsx(BannerMessage, {
          title: getI18nString("plan_invite_modal.cost_messaging.title"),
          children: e
        }), jsx(_$$N2, {
          href: "https://help.figma.com/hc/articles/360039960434-Manage-seats-in-Figma",
          newTab: !0,
          children: getI18nString("general.learn_more")
        })]
      })
    })
  });
}
function ei() {
  useSingleEffect(() => {
    trackEventAnalytics("seat_purchasing.non_blocking_fetch_error", {
      price_fetch_error: !0,
      view: "plan_invite_modal"
    });
  });
  return jsx("div", {
    className: "xnkfzng",
    children: getI18nString("plan_invite_modal.error.price_fetch_error")
  });
}
let ea = {
  container: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    gap: "xou54vl",
    rowGap: null,
    columnGap: null,
    paddingTop: "x1y1aw1k",
    paddingBottom: "xwib8y2",
    $$css: !0
  }
};
function er({
  plan: e,
  onClose: n,
  licenseGroupId: t,
  workspaceId: r
}) {
  let s = useDispatch();
  let l = useSelector(e => e.autocomplete);
  let [d, c] = useState(ViewAccessTypeEnum.VIEW);
  let {
    title,
    onValidateToken,
    infoText,
    submit,
    isSubmitting
  } = _u({
    licenseGroupId: t,
    workspaceId: r,
    seatType: d,
    configs: {
      groupNameClassName: props(textDisplayConfig.textBodyMediumStrong).className
    }
  });
  let S = useId();
  return jsxs(Fragment, {
    children: [jsx(DialogHeader, {
      children: jsx(DialogTitle, {
        children: jsx("div", {
          className: "xec8gl8",
          children: jsx("div", {
            className: "xb3r6kr xlyipyv xuxw1ft x1lliihq",
            children: title
          })
        })
      })
    }), jsx(DialogBody, {
      children: jsxs("div", {
        ...props(ea.container),
        children: [jsx("div", {
          children: infoText
        }), jsx(T, {
          id: S,
          label: getI18nString("plan_invite_modal.email"),
          children: jsx(_$$e2, {
            id: S,
            TokenComponent: rG,
            autocomplete: l,
            dispatch: s,
            dropdownShown: null,
            multiLineForm: !0,
            shouldAutoFocus: !0,
            validateToken: onValidateToken
          })
        }), jsx(ee, {
          seatType: d,
          onChange: c,
          plan: e
        })]
      })
    }), jsx(DialogFooter, {
      children: jsxs(DialogActionStrip, {
        children: [jsx($z, {
          variant: "secondary",
          onClick: n,
          children: getI18nString("general.cancel")
        }), jsx($z, {
          onClick: () => submit(l),
          disabled: isSubmitting || !F5(l, onValidateToken),
          children: getI18nString("plan_invite_modal.send_invite")
        })]
      })
    })]
  });
}
function eb({
  plan: e,
  initialInviteLevel: n,
  prepopulatedEmail: t,
  onClose: s
}) {
  let l = useDispatch();
  let p = selectUser();
  let u = useSelector(e => e.autocomplete);
  let m = useSelector(e => e.contacts);
  let h = useSelector(e => e.dropdownShown);
  let [b, S] = useState(ViewAccessTypeEnum.VIEW);
  let I = e.key.parentId;
  let L = dr(I);
  let E = _$$eb(I);
  useWebLoggerTimerEffect("loaded" === L.status && "loaded" === E.status, e => {
    let n = E.data?.length ?? 0;
    let t = "unknown";
    t = n <= 100 ? "small" : n <= 300 ? "medium" : "large";
    trackEventAnalytics("share_modal_latency", {
      latency_ms: e,
      modal_type: "team",
      is_outlier: e > 500,
      role_size: t
    }, {
      forwardToDatadog: !0
    });
  });
  let M = L.data;
  let N = E.data;
  let {
    default: _default,
    inviteLevel,
    setInviteLevel
  } = oU({
    initialValue: n,
    teamId: I,
    teamPermissions: M
  });
  let R = useMemo(() => {
    let e = [];
    M?.canRead && e.push(AccessLevelEnum.VIEWER);
    M?.canEdit && e.push(AccessLevelEnum.EDITOR);
    M?.canAdmin && e.push(AccessLevelEnum.ADMIN);
    return e;
  }, [M]);
  let [B, O, F] = Tabs.useTabs({
    inviteByEmail: !0,
    inviteByLink: !0
  }, {
    defaultActive: "inviteByEmail"
  });
  let {
    validateToken,
    searchResultToken
  } = _$$u({
    prepopulatedEmail: t,
    parentOrg: null
  });
  let $ = useMemo(() => _$$Z(u), [u]);
  let G = TG(I);
  let z = useMemo(() => "loaded" !== G.status ? [] : $.filter(e => !!G.data?.[e]?.team_user?.active_seat_type), [G, $]);
  let J = useMemo(() => {
    var e;
    if (0 === z.length) return null;
    let n = ((e = [...new Set(z)]).length <= 3 ? e : [...e.slice(0, 2), getI18nString("plan_invite_modal.team.seat_already_assigned.n_others", {
      n: e.length - 2
    })]).map(e => jsx("span", {
      ...props(textDisplayConfig.textBodyMediumStrong),
      children: e
    }, e));
    return renderI18nText("plan_invite_modal.team.seat_already_assigned", {
      count: n.length,
      emailString: jsx(_$$T, {
        children: n
      })
    });
  }, [z]);
  let K = useCallback(() => {
    l(sendRoleInvites({
      emails: $,
      resourceType: FResourceCategoryType.TEAM,
      resourceIdOrKey: I,
      level: inviteLevel,
      emailsToExclude: bp(m.usersByEmail, p, N ?? []),
      source: "team_share_modal",
      billableProductKey: b === ViewAccessTypeEnum.VIEW ? null : b,
      teamId: I,
      onSuccess: e => {
        s();
        let n = e.invites.length;
        n > 0 && l(VisualBellActions.enqueue({
          message: getI18nString("plan_invite_modal.invites_sent", {
            count: n
          })
        }));
      }
    }));
  }, [m.usersByEmail, l, $, inviteLevel, s, b, I, N, p]);
  let Y = _$$S(I);
  let q = Y.data;
  let H = useCallback(() => {
    q && l(LN({
      teamId: I,
      url: q,
      source: Kq.TEAM_PERMISSIONS_MODAL
    }));
  }, [l, q, I]);
  let X = useId();
  if (handleSuspenseRetainRelease(L), !M) {
    let e = Error("Team permissions not loaded");
    reportError(ServiceCategories.SCALE, e);
    return e;
  }
  return jsxs(Fragment, {
    children: [jsxs(DialogHeader, {
      children: [jsx(DialogHiddenTitle, {
        children: getI18nString("plan_invite_modal.team.hidden_title")
      }), jsxs(Tabs.TabStrip, {
        manager: F,
        children: [jsx(Tabs.Tab, {
          ...B.inviteByEmail,
          children: getI18nString("plan_invite_modal.invite_by_email")
        }), jsx(Tabs.Tab, {
          ...B.inviteByLink,
          children: getI18nString("plan_invite_modal.invite_by_link")
        })]
      })]
    }), jsxs(DialogBody, {
      children: [jsx(Tabs.TabPanel, {
        ...O.inviteByEmail,
        children: _$$r(p) ? jsx(_$$X, {
          resourceType: "team"
        }) : jsxs("div", {
          ...props(ea.container),
          children: [jsx(T, {
            id: X,
            label: getI18nString("plan_invite_modal.email"),
            children: jsx(_$$e2, {
              SearchResultComponent: o6,
              TokenComponent: gy,
              autocomplete: u,
              dispatch: l,
              dropdownKey: "permissions-invite-dropdown",
              dropdownShown: h,
              fixedAutocompleteResults: !0,
              getSearchResults: e => Wj(e, m.usersByEmail, p, N ?? [], null, I, null, {
                inviteLevel,
                source: "team-permissions-modal"
              }),
              getSelectText: getPermissionLevelName,
              getSelectTextDescription: eS,
              hideDropdownOnEmpty: !0,
              id: X,
              inviteLevel,
              joinLinkShown: !0,
              multiLineForm: !0,
              onInviteLevelChange: setInviteLevel,
              options: R,
              placeholderText: getI18nString("team_creation.add_a_name_or_email"),
              searchResultToken,
              showDropdownSeparators: !0,
              validateToken,
              validateTokensAsEmail: !0
            })
          }), isPaidPlan(e.tier) && M.canAdmin && jsx(ee, {
            seatType: b,
            onChange: S,
            plan: e,
            helpText: b === ViewAccessTypeEnum.VIEW ? null : J,
            hideCostMessaging: $.length > 0 && z.length === $.length
          })]
        })
      }), jsx(Tabs.TabPanel, {
        ...O.inviteByLink,
        children: jsx(_$$i, {
          teamId: I,
          dropdownShown: h,
          initialInviteLevel: _default,
          getPermissionDescriptionText: eS,
          showDropdownSeparators: !0,
          teamPermissions: M
        })
      })]
    }), jsx(DialogFooter, {
      children: jsxs(DialogActionStrip, {
        children: [jsx($z, {
          variant: "secondary",
          onClick: s,
          children: getI18nString("general.cancel")
        }), jsx(Tabs.TabPanel, {
          ...O.inviteByEmail,
          children: jsx($z, {
            onClick: K,
            disabled: !F5(u, validateToken),
            children: getI18nString("plan_invite_modal.send_invite")
          })
        }), jsx(Tabs.TabPanel, {
          ...O.inviteByLink,
          children: ("loaded" !== Y.status || !!q) && jsx($z, {
            onClick: H,
            disabled: "loaded" !== Y.status,
            children: getI18nString("plan_invite_modal.copy_link")
          })
        })]
      })
    })]
  });
}
function eS(e) {
  switch (e) {
    case AccessLevelEnum.ADMIN:
      return getI18nString("plan_invite_modal.team.permissions_description.admin");
    case AccessLevelEnum.EDITOR:
      return getI18nString("plan_invite_modal.team.permissions_description.can_edit");
    case AccessLevelEnum.VIEWER:
      return getI18nString("plan_invite_modal.team.permissions_description.can_view");
    default:
      return null;
  }
}
function eT(e) {
  let n = useModalManager(e);
  let t = useTeamPlanFeatures();
  let p = t.data;
  handleSuspenseRetainRelease(t);
  useEffect(() => {
    "loaded" === t.status && p?.type !== e.planType && reportError(ServiceCategories.SCALE, Error("PlanInviteModal received planType incongruent with current plan context"), {
      extra: {
        planTypeProp: e.planType,
        planType: p?.type,
        planParentId: p?.key?.parentId
      }
    });
  }, [e.planType, p?.key?.parentId, p?.type, t.status]);
  return jsx(TrackingProvider, {
    name: "PlanInviteModal",
    properties: {
      planType: p?.type,
      planParentId: p?.key?.parentId
    },
    children: jsx(ModalRootComponent, {
      manager: n,
      width: "lg",
      height: "dynamic",
      children: jsxs(DialogContents, {
        children: [p?.type === FOrganizationLevelType.TEAM && p && jsx(eb, {
          ...e,
          plan: p
        }), p?.type === FOrganizationLevelType.ORG && p && jsx(er, {
          ...e,
          plan: p
        })]
      })
    })
  });
}
export function $$eI0(e) {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "PlanInviteModal",
    fallback: errorBoundaryFallbackTypes.DEFAULT_FULL_PAGE,
    hasCustomWASMBuild: !1,
    children: jsx(Suspense, {
      fallback: jsx(_$$N, {
        hiddenTitle: "Plan invite modal",
        estimatedWidth: 480,
        estimatedHeight: 242,
        height: "dynamic"
      }),
      children: jsx(eT, {
        ...e
      })
    })
  });
}
export const PlanInviteModal = $$eI0;