import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, Suspense, useMemo, useId, useState, useEffect } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { useModalManager } from "../905/437088";
import { bL } from "../905/38914";
import { Y9, hE, nB, wi, jk, r1, vo } from "../figma_app/272243";
import { handleSuspenseRetainRelease } from "../figma_app/566371";
import { reportError } from "../905/11";
import { tH, H4 } from "../905/751457";
import { j6, fu } from "../figma_app/831799";
import { FOrganizationLevelType, FPlanNameType, FResourceCategoryType } from "../figma_app/191312";
import { useTeamPlanFeatures } from "../figma_app/465071";
import { N as _$$N } from "../905/809096";
import { useDispatch, useSelector } from "react-redux";
import { g as _$$g } from "../905/687265";
import { xk } from "@stylexjs/stylex";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { ViewAccessTypeEnum } from "../905/513035";
import { F5, Z as _$$Z } from "../figma_app/761870";
import { e as _$$e2 } from "../905/393279";
import { _u, rG } from "../1881/125927";
import { Ay } from "../905/865071";
import { $y } from "../figma_app/59509";
import { Q as _$$Q } from "../905/363675";
import { N as _$$N2 } from "../905/572042";
import { trackEventAnalytics } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { k as _$$k } from "../figma_app/618031";
import { JT, tI } from "../figma_app/599327";
import { I as _$$I } from "../905/343211";
import { h as _$$h2, d as _$$d } from "../figma_app/603561";
import { vr } from "../figma_app/514043";
import { resourceUtils } from "../905/989992";
import { un } from "../figma_app/457899";
import { IX } from "../905/712921";
import { bL as _$$bL, DZ, mc, c$ } from "../905/493196";
import { E as _$$E } from "../905/53857";
import { AutoLayout, Spacer } from "../905/470281";
import { B as _$$B } from "../905/261906";
import { zz } from "../figma_app/80683";
import { Cu } from "../figma_app/314264";
import { Ye } from "../905/332483";
import { AG, _w } from "../figma_app/217457";
import { t as _$$t2 } from "../905/150656";
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
import { rq } from "../905/351260";
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
      children: jsx(Ay, {
        ...xk(_$$g.textBodyMediumStrong),
        htmlFor: e,
        children: t
      })
    }), n]
  });
}
function W(e) {
  let [n] = handleSuspenseRetainRelease(function (e) {
    let n = _$$k();
    let t = _$$h2({
      planType: e.type,
      planParentId: e.key.parentId
    });
    let i = _$$I(e);
    let a = "loaded" === i.status && !i.data || !!t.data;
    let r = un({
      planKey: e.key,
      currentSeatType: ViewAccessTypeEnum.VIEW,
      currentSeatBillingInterval: e.type === FOrganizationLevelType.ORG ? IX.YEAR : IX.MONTH,
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
  let t = j6();
  let r = useCallback(e => {
    onChange(e);
    Cu({
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
    reportErrorsToTeam: _$$e.SCALE
  });
  let a = W(e);
  return jsx(mc, {
    children: Ye.sort(AG).map(r => r === ViewAccessTypeEnum.VIEW ? jsx(U, {
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
  let s = useMemo(() => t ? new vr(t.currency).formatMoney(t.amount, {
    showCents: !1
  }) : null, [t]);
  let l = _w({
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
          ...xk(Z.optionSeatName),
          children: JT(e)
        }), !!r && jsx(_$$E, {
          variant: "defaultFilled",
          children: getI18nString("plan_invite_modal.available_seats", {
            count: r
          })
        }), jsx(Spacer, {}), t && jsx("div", {
          ...xk(Z.optionSeatSecondaryText),
          children: s && getI18nString("general.price_per_month", {
            priceString: s
          })
        })]
      }), jsx("div", {
        ...xk(Z.optionSeatSecondaryText),
        children: l(e)
      })]
    })
  });
}
let Z = {
  optionSeatName: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  optionSeatSecondaryText: {
    ..._$$g.textBodyMedium,
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
    }), r && jsx(fu, {
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
  let s = _$$k();
  let l = _$$I(e);
  let o = "loaded" === l.status && !l.data;
  let d = _$$d({
    reportErrorsToTeam: _$$e.SCALE
  });
  let c = W(e);
  let p = n !== ViewAccessTypeEnum.VIEW ? c?.[n] : null;
  let u = useMemo(() => p?.currency ? new vr(p?.currency) : null, [p?.currency]);
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
  return jsx(fu, {
    name: "Cost messaging banner",
    properties: n,
    children: jsx("div", {
      className: "x1y1aw1k",
      children: jsxs($y, {
        variant: "default",
        children: [jsx(_$$Q, {
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
  _$$h(() => {
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
      groupNameClassName: xk(_$$g.textBodyMediumStrong).className
    }
  });
  let S = useId();
  return jsxs(Fragment, {
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: jsx("div", {
          className: "xec8gl8",
          children: jsx("div", {
            className: "xb3r6kr xlyipyv xuxw1ft x1lliihq",
            children: title
          })
        })
      })
    }), jsx(nB, {
      children: jsxs("div", {
        ...xk(ea.container),
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
    }), jsx(wi, {
      children: jsxs(jk, {
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
  let [B, O, F] = _$$t2.useTabs({
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
      ...xk(_$$g.textBodyMediumStrong),
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
    l(rq({
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
    reportError(_$$e.SCALE, e);
    return e;
  }
  return jsxs(Fragment, {
    children: [jsxs(Y9, {
      children: [jsx(r1, {
        children: getI18nString("plan_invite_modal.team.hidden_title")
      }), jsxs(_$$t2.TabStrip, {
        manager: F,
        children: [jsx(_$$t2.Tab, {
          ...B.inviteByEmail,
          children: getI18nString("plan_invite_modal.invite_by_email")
        }), jsx(_$$t2.Tab, {
          ...B.inviteByLink,
          children: getI18nString("plan_invite_modal.invite_by_link")
        })]
      })]
    }), jsxs(nB, {
      children: [jsx(_$$t2.TabPanel, {
        ...O.inviteByEmail,
        children: _$$r(p) ? jsx(_$$X, {
          resourceType: "team"
        }) : jsxs("div", {
          ...xk(ea.container),
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
      }), jsx(_$$t2.TabPanel, {
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
    }), jsx(wi, {
      children: jsxs(jk, {
        children: [jsx($z, {
          variant: "secondary",
          onClick: s,
          children: getI18nString("general.cancel")
        }), jsx(_$$t2.TabPanel, {
          ...O.inviteByEmail,
          children: jsx($z, {
            onClick: K,
            disabled: !F5(u, validateToken),
            children: getI18nString("plan_invite_modal.send_invite")
          })
        }), jsx(_$$t2.TabPanel, {
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
    "loaded" === t.status && p?.type !== e.planType && reportError(_$$e.SCALE, Error("PlanInviteModal received planType incongruent with current plan context"), {
      extra: {
        planTypeProp: e.planType,
        planType: p?.type,
        planParentId: p?.key?.parentId
      }
    });
  }, [e.planType, p?.key?.parentId, p?.type, t.status]);
  return jsx(fu, {
    name: "PlanInviteModal",
    properties: {
      planType: p?.type,
      planParentId: p?.key?.parentId
    },
    children: jsx(bL, {
      manager: n,
      width: "lg",
      height: "dynamic",
      children: jsxs(vo, {
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
  return jsx(tH, {
    boundaryKey: "PlanInviteModal",
    fallback: H4.DEFAULT_FULL_PAGE,
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