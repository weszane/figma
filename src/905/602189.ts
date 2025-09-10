import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
import { lQ } from "../905/934246";
import { isNullish } from "../figma_app/95419";
import { O6, bL } from "../905/598775";
import { N as _$$N } from "../905/438674";
import { $y } from "../figma_app/59509";
import { Q } from "../905/363675";
import { D as _$$D } from "../905/198083";
import p from "classnames";
import { analyticsEventManager } from "../905/449184";
import { isGovCluster, getInitialOptions } from "../figma_app/169182";
import { b as _$$b } from "../figma_app/246400";
import { s as _$$s } from "../cssbuilder/589278";
import { Ph } from "../905/160095";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { E as _$$E } from "../905/984674";
import { B as _$$B } from "../905/261906";
import { JT, tI } from "../figma_app/847597";
import { U2 } from "../figma_app/297957";
import { c as _$$c } from "../905/370443";
import { tf } from "../figma_app/831799";
import { ViewAccessTypeEnum, ProductAccessTypeEnum } from "../905/513035";
import { i as _$$i } from "../figma_app/127401";
import { Ye } from "../905/332483";
import { AG, SS } from "../figma_app/217457";
import { O as _$$O } from "../figma_app/710329";
import { useTeamPlanFeatures } from "../figma_app/465071";
var $$m = p;
let O = "seat_options--seatChangeInformationContainer--XoAO5";
let D = "seat_options--seatChangeOptionContainer--yYwT5";
let L = tf(O6);
let F = "https://help.figma.com/hc/articles/360039960434-Manage-seats-in-Figma";
export function $$M1({
  currentSeatType: e,
  displayPricing: t,
  setNextSeatType: i,
  availableSeatCounts: r,
  pricing: a,
  learnMoreLinkHref: s,
  canSetCurrentSeatType: o,
  tier: l
}) {
  return jsxs(AutoLayout, {
    direction: "vertical",
    spacing: 16,
    children: [Ye.sort(AG).map(s => jsx(j, {
      seatType: s,
      setNextSeatType: i,
      availableSeats: r?.[s],
      displayPricing: t,
      disabled: !o && s === e,
      selected: s === e,
      pricing: a,
      tier: l
    }, s)), jsx(Ph, {
      newTab: !0,
      href: s,
      trackingProperties: {
        trackingDescriptor: _$$c.LEARN_MORE_ABOUT_SEATS
      },
      children: getI18nString("modify_plan_user_seat_modal.link_text.learn_more_about_seats")
    })]
  });
}
function j({
  disabled: e,
  selected: t,
  seatType: i,
  setNextSeatType: r,
  availableSeats: s,
  displayPricing: l,
  pricing: d,
  tier: c
}) {
  return jsxs(bL, {
    className: "xh8yej3",
    "data-testid": `seat-option-card--${i}`,
    children: [jsx(L, {
      disabled: e,
      className: $$m()("seat_options--seatOption--kaalu", {
        "seat_options--selected--bkEKZ": t
      }),
      onClick: e ? lQ : () => r(i),
      htmlAttributes: {
        "data-testid": `seat-option-button--${i}`
      }
    }), jsx(U, {
      seatType: i,
      availableSeats: s,
      displayPricing: l,
      pricing: d,
      isCurrentSeat: t,
      tier: c
    })]
  });
}
function U({
  seatType: e,
  availableSeats: t,
  displayPricing: i,
  pricing: r,
  isCurrentSeat: a,
  tier: s
}) {
  let o = SS(e, {
    overridePlanTier: s
  });
  let l = U2();
  if (e !== ViewAccessTypeEnum.VIEW && !r[e]) return null;
  let d = e !== ViewAccessTypeEnum.VIEW ? r[e] : void 0;
  let c = e === ViewAccessTypeEnum.VIEW ? renderI18nText("checkout.free") : renderI18nText("general.price_per_month", {
    priceString: G(d)
  });
  return jsxs(AutoLayout, {
    direction: "horizontal",
    verticalAlignItems: "start",
    padding: 16,
    spacing: a || i || t ? "auto" : 8,
    children: [jsx("div", {
      className: _$$s.minW24.selfCenter.$,
      children: jsx(_$$B, {
        type: e,
        size: "24"
      })
    }), jsx("div", {
      className: "x78zum5 xdt5ytf xfrkpjd xdpxx8g",
      children: l() ? jsx("div", {
        className: "x67bb7w",
        children: jsx(_$$b, {
          type: "menu",
          setToMaxWidth: !0,
          text: jsx("span", {
            className: "x6xwguf",
            children: JT(e)
          }),
          popoverContent: jsxs("div", {
            className: "x78zum5 xdt5ytf x1nfngrj x1n0bwc9",
            children: [jsxs("div", {
              className: "x78zum5 x1qughib x6s0dn4 x1excjyp x1ihwiht x1kax57l",
              children: [jsx("div", {
                children: _$$O(e)
              }), i && jsx("div", {
                children: c
              })]
            }), e === ViewAccessTypeEnum.VIEW ? getI18nString("modify_plan_user_seat_modal.view_and_comment_on_all_file_types_in_figma") : jsx(_$$i, {
              seatType: e,
              spacing: 8,
              colorStyle: "pastel",
              forceDarkThemeForFigmakeIcon: !0
            })]
          })
        })
      }) : jsxs(Fragment, {
        children: [jsx(_$$E, {
          fontWeight: "medium",
          children: JT(e)
        }), jsx("span", {
          className: "xdpxx8g x1fzhlzt",
          children: jsx(_$$E, {
            color: "secondary",
            children: o
          })
        })]
      })
    }), jsx(B, {
      seatType: e,
      price: i ? c : null,
      availableSeats: t,
      isCurrentSeat: !!a
    })]
  });
}
function B({
  price: e,
  availableSeats: t,
  seatType: i,
  isCurrentSeat: r
}) {
  let a = void 0 !== t && t > 0;
  let s = null;
  return (r ? s = jsx("div", {
    className: _$$s.colorBorder.b1.px4.bRadius5.noWrap.$,
    children: jsx(_$$E, {
      color: "default",
      children: getI18nString("modify_plan_user_seat_modal.current_seat_badge")
    })
  }) : a ? s = jsx("div", {
    className: _$$s.colorBorderBrand.b1.px4.bRadius5.noWrap.$,
    children: jsx(_$$E, {
      color: "brand",
      fontWeight: "medium",
      children: getI18nString("modify_plan_user_seat_modal.available_seat_count", {
        availableSeatCount: t
      })
    })
  }) : e && (s = jsx("span", {
    className: _$$s.noWrap.$,
    children: jsx(_$$E, {
      fontWeight: "medium",
      children: e
    })
  })), s) ? jsx("div", {
    "data-testid": `seat-data-${i}`,
    className: _$$s.mlAuto.$,
    children: s
  }) : null;
}
export function $$V0({
  availableSeats: e,
  fromSeatType: t,
  toSeatType: i,
  pricing: a,
  displayPricing: o,
  prorationEnabled: d,
  currentSeatPaidFor: c,
  isDiscouragedAnnualSeatSwap: p,
  plan: f,
  userName: A,
  userId: I
}) {
  let x = _$$s.bRadius4.b1.wFull.zIndex1.relative.colorBg.borderBox;
  let S = e > 0;
  let w = isGovCluster() && !S;
  let T = t !== ViewAccessTypeEnum.VIEW && (o || !d);
  let k = i !== ViewAccessTypeEnum.VIEW && (o || !d) && !w;
  let R = t !== ViewAccessTypeEnum.VIEW ? a[t] : void 0;
  let N = i !== ViewAccessTypeEnum.VIEW ? a[i] : void 0;
  let P = o && i !== ViewAccessTypeEnum.VIEW && t !== ViewAccessTypeEnum.VIEW && N && R && N.amount >= R.amount;
  let L = S || i === ViewAccessTypeEnum.VIEW || !P;
  return (useEffect(() => {
    p && analyticsEventManager.trackDefinedEvent("admin.discouraged_seat_swap_viewed", {
      planType: f.key.type,
      planId: f.key.parentId ?? void 0,
      planKey: f.id ?? void 0
    });
  }, [p, f]), t !== ViewAccessTypeEnum.VIEW && isNullish(R) || i !== ViewAccessTypeEnum.VIEW && isNullish(N)) ? null : jsxs(AutoLayout, {
    direction: "vertical",
    spacing: 8,
    children: [jsxs("div", {
      className: D,
      children: [jsx("div", {
        className: x.colorBorder.$,
        children: jsx(U, {
          seatType: t,
          availableSeats: 0,
          displayPricing: !!o,
          pricing: a,
          isCurrentSeat: !0
        })
      }), T && jsx("div", {
        "data-testid": "from-seat-type-message",
        className: $$m()(O, _$$s.flex.flexRow.itemsCenter.colorBgSecondary.$),
        children: jsx(_$$E, {
          fontSize: 11,
          color: "secondary",
          children: d ? L ? getI18nString("modify_plan_user_seat_modal.from_seat_helper_text.will_become_available_prorated") : getI18nString("modify_plan_user_seat_modal.from_seat_helper_text.will_become_prorated_v2", {
            toSeatType: tI(i)
          }) : c ? getI18nString("modify_plan_user_seat_modal.from_seat_helper_text.will_become_available") : getI18nString("modify_plan_user_seat_modal.from_seat_helper_text.will_go_away")
        })
      })]
    }), jsx(_$$D, {
      className: "xamitd3 x1iffjtl"
    }), jsxs("div", {
      className: D,
      children: [jsx("div", {
        className: x.colorBorderSelected.$$if(p, _$$s.colorBorder).$,
        children: jsx(U, {
          seatType: i,
          availableSeats: e,
          displayPricing: !!o,
          pricing: a
        })
      }), k && jsx("div", {
        "data-testid": "to-seat-type-message",
        className: $$m()(O, _$$s.colorBgSelected.$$if(p, _$$s.colorBgWarningTertiary).$),
        children: jsx(_$$E, {
          fontSize: 11,
          color: "default",
          children: i === ViewAccessTypeEnum.VIEW ? null : S ? renderI18nText("modify_plan_user_seat_modal.use_one_available_full_seat_learn_more_info_message", {
            seatType: tI(i),
            learnMore: jsx(_$$N, {
              newTab: !0,
              href: F,
              children: getI18nString("modify_plan_user_seat_modal.link_text.learn_more")
            })
          }) : d ? isNullish(N) ? null : renderI18nText("modify_plan_user_seat_modal.to_seat_helper_text.will_provision_new_seat_v2", {
            cost: renderI18nText("general.price_per_month", {
              priceString: G(N)
            }),
            learnMore: jsx(_$$N, {
              newTab: !0,
              href: F,
              children: getI18nString("modify_plan_user_seat_modal.link_text.learn_more")
            })
          }) : p ? renderI18nText("modify_plan_user_seat_modal.to_seat_helper_text.no_proration_special_case_with_learn_more", {
            fromSeatType: getI18nString("general.bundle.expert"),
            toSeatType: getI18nString("general.bundle.developer"),
            learnMore: jsx(_$$N, {
              newTab: !0,
              href: F,
              children: getI18nString("modify_plan_user_seat_modal.link_text.learn_more")
            })
          }) : getI18nString("modify_plan_user_seat_modal.to_seat_helper_text.will_be_charged_on_next_invoice")
        })
      })]
    }), jsx(z, {
      userName: A,
      userId: I,
      fromSeatType: t,
      toSeatType: i
    })]
  });
}
function G(e) {
  return "string" == typeof e ? e : e.display;
}
function z({
  userName: e,
  userId: t,
  fromSeatType: i,
  toSeatType: a
}) {
  let s = U2();
  let {
    numAccessedFiles,
    numEditedFiles
  } = function (e, t) {
    let i = useTeamPlanFeatures().unwrapOr(null);
    let n = i?.key?.parentId;
    return useMemo(() => {
      let i = getInitialOptions().user_analytics_data?.admin_user_metrics;
      let r = i?.find(e => e.plan_id === n);
      let a = r?.user_metrics?.find(t => t.user_id === e);
      if (!a) return {
        numAccessedFiles: 0,
        numEditedFiles: 0
      };
      let s = 0;
      let o = 0;
      switch (t) {
        case ProductAccessTypeEnum.EXPERT:
          s = a.num_accessed_files_expert;
          o = a.num_edited_files_expert;
          break;
        case ProductAccessTypeEnum.DEVELOPER:
          s = a.num_accessed_files_dev;
          o = a.num_edited_files_dev;
          break;
        case ProductAccessTypeEnum.COLLABORATOR:
          s = a.num_accessed_files_collab;
          o = a.num_edited_files_collab;
          break;
        default:
          s = 0;
          o = 0;
      }
      return {
        numAccessedFiles: s,
        numEditedFiles: o
      };
    }, [e, t, n]);
  }(t, i);
  if (!s() || a !== ViewAccessTypeEnum.VIEW || 0 === numAccessedFiles) return null;
  let u = null;
  u = 0 === numEditedFiles ? renderI18nText(i === ProductAccessTypeEnum.DEVELOPER ? "modify_plan_user_seat_modal.user_name_wont_be_able_to_use_dev_mode_in_num_accessed_files_they_ve_recently_worked_in" : "modify_plan_user_seat_modal.user_name_wont_be_able_to_edit_num_accessed_files_they_ve_recently_worked_in", {
    userName: e,
    numAccessedFiles: jsx("span", {
      className: "x6xwguf",
      children: getI18nString("modify_plan_user_seat_modal.num_files", {
        numFiles: numAccessedFiles
      })
    })
  }) : numAccessedFiles === numEditedFiles ? renderI18nText(i === ProductAccessTypeEnum.DEVELOPER ? "modify_plan_user_seat_modal.user_name_wont_be_able_to_use_dev_mode_in_num_accessed_files_they_ve_worked_in_over_the_last_month" : "modify_plan_user_seat_modal.user_name_wont_be_able_to_edit_num_accessed_files_they_ve_worked_in_over_the_last_month", {
    userName: e,
    numAccessedFiles: jsx("span", {
      className: "x6xwguf",
      children: getI18nString("modify_plan_user_seat_modal.num_files", {
        numFiles: numAccessedFiles
      })
    })
  }) : renderI18nText(i === ProductAccessTypeEnum.DEVELOPER ? "modify_plan_user_seat_modal.user_name_wont_be_able_to_use_dev_mode_in_num_accessed_files_including_num_edited_files_they_ve_worked_in_over_the_last_month" : "modify_plan_user_seat_modal.user_name_wont_be_able_to_edit_num_accessed_files_including_num_edited_files_they_ve_worked_in_over_the_last_month", {
    userName: e,
    numAccessedFiles: jsx("span", {
      className: "x6xwguf",
      children: getI18nString("modify_plan_user_seat_modal.num_files", {
        numFiles: numAccessedFiles
      })
    }),
    numEditedFiles: jsx("span", {
      className: "x6xwguf",
      children: getI18nString("modify_plan_user_seat_modal.num_files", {
        numFiles: numEditedFiles
      })
    })
  });
  return jsx("div", {
    className: "xpgiz1h xh8yej3",
    "data-testid": "downgrade-context-banner",
    children: jsx($y, {
      variant: "brand",
      children: jsx(Q, {
        children: u
      })
    })
  });
}
export const l = $$V0;
export const m = $$M1;