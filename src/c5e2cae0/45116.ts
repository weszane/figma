import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { sortByWithOptions } from "../figma_app/656233";
import { K as _$$K } from "../905/443068";
import { d as _$$d } from "../c5e2cae0/368426";
import { Q } from "../905/553231";
import { az } from "../905/449184";
import { P as _$$P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { UL, iB, O$ } from "../figma_app/361035";
import { Tj, gS, gu } from "../figma_app/441925";
import { u as _$$u } from "../905/16237";
import { Dj } from "../figma_app/297957";
import { fu } from "../figma_app/831799";
import { Ju } from "../905/712921";
import { e0 } from "../905/696396";
import { wA } from "../vendor/514228";
import { isNullish } from "../figma_app/95419";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n, IK } from "../905/521428";
import { A as _$$A } from "../905/891805";
import { s as _$$s2, K as _$$K2 } from "../c5e2cae0/341232";
import { $z } from "../figma_app/617427";
import { Y as _$$Y } from "../905/830372";
import { to } from "../905/156213";
import { AG } from "../figma_app/217457";
import { Ju as _$$Ju } from "../905/102752";
import { $$ } from "../c5e2cae0/705272";
import { E as _$$E } from "../905/632989";
import { O as _$$O } from "../905/969533";
import { k as _$$k } from "../905/44647";
import { B as _$$B } from "../905/261906";
import { TA } from "../905/372672";
import { az as _$$az } from "../figma_app/805373";
import { m as _$$m } from "../905/602189";
import { j as _$$j } from "../905/584270";
import { Gu } from "../905/513035";
let R = _$$Ju(function (e) {
  let {
    seatTypes,
    additionalSeatCounts,
    setAdditionalSeats,
    open,
    onClose
  } = e;
  let d = hS({
    open,
    onClose
  });
  let [c, u] = useState(additionalSeatCounts);
  let p = e => t => {
    u($$(c, t, e));
  };
  let h = p(1);
  let g = p(-1);
  let x = useCallback(e => t => u($$(c, e, t - (c[e] || 0))), [c]);
  return jsx(bL, {
    manager: d,
    width: 264,
    htmlAttributes: {
      "data-testid": "additional-seats--modal"
    },
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: tx("checkout.additional_seats.add_or_remove_unassigned_seats")
        })
      }), jsxs(nB, {
        children: [jsx("div", {
          className: _$$s.pt8.pb24.colorTextSecondary.$,
          children: jsx("p", {
            children: tx("checkout.additional_seats.pre_purchase_seats_for_your_team_to_help_you_budget_and_save_time_later_on")
          })
        }), jsx(_$$Y, {
          direction: "vertical",
          spacing: 16,
          padding: {
            bottom: 16
          },
          children: Object.keys(c).sort(AG).map(e => isNullish(seatTypes[e]) || isNullish(c[e]) ? null : jsx("div", {
            "data-testid": `additional-seats--${e}`,
            children: jsx(_$$s2, {
              billableProductKey: e,
              numSeats: c[e],
              minSeatsCount: 0,
              headerText: _$$t("checkout.additional_seats.seat_label", {
                seatType: seatTypes[e].displayName
              }),
              headerSubText: _$$t("checkout.price_per_month", {
                price: seatTypes[e].displayPrice
              }),
              incrementSeats: () => h(e),
              decrementSeats: () => g(e),
              updateAdditionalSeatsText: _$$K2(x(e))
            })
          }, e))
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: onClose,
            htmlAttributes: {
              "data-testid": "additional-seats--cancel"
            },
            children: tx("checkout.additional_seats.cancel")
          }), jsx($n, {
            variant: "primary",
            onClick: () => {
              az.trackDefinedEvent("monetization_upgrades.cart_additional_seats_changed_in_checkout", {
                additionalSeatCountsBefore: JSON.stringify(additionalSeatCounts),
                additionalSeatCountsAfter: JSON.stringify(c),
                tier: e.tier
              });
              setAdditionalSeats(c);
              onClose();
            },
            htmlAttributes: {
              "data-testid": "additional-seats--confirm"
            },
            children: tx("checkout.additional_seats.confirm")
          })]
        })
      })]
    })
  });
}, "AdditionalSeatsModal");
function O({
  seatTypes: e,
  additionalSeatCounts: t,
  setAdditionalSeats: a,
  tier: r
}) {
  let i = wA();
  let l = _$$u();
  return jsx($z, {
    "aria-label": _$$t("checkout.additional_seats.add_seats_to_assign_later"),
    htmlAttributes: {
      "data-testid": "additional-seats--button"
    },
    trackingOptions: l,
    onClick: () => {
      i(to({
        type: R,
        data: {
          seatTypes: e,
          additionalSeatCounts: t,
          setAdditionalSeats: a,
          tier: r
        }
      }));
    },
    iconPrefix: jsx(_$$A, {}),
    children: tx("checkout.additional_seats.add_seats_to_assign_later")
  });
}
let H = _$$Ju(function (e) {
  let t = _$$u();
  let {
    user,
    seatTypes,
    selectedSeatType,
    setSelectedSeatType,
    open,
    onClose,
    tier,
    teamId
  } = e;
  let u = hS({
    open,
    onClose
  });
  return jsx(fu, {
    name: "Select User Seat Type Modal",
    properties: {
      teamId
    },
    trackingOptions: t,
    children: jsx(bL, {
      manager: u,
      width: 480,
      htmlAttributes: {
        "data-testid": "select-user-seat-type--modal"
      },
      children: jsx(vo, {
        children: jsx(nB, {
          children: jsxs(_$$Y, {
            direction: "vertical",
            spacing: 0,
            padding: {
              horizontal: 8,
              vertical: 16
            },
            children: [jsx("div", {
              className: _$$s.mb24.$,
              children: jsx(_$$j, {
                user,
                text: _$$t("modify_plan_user_seat_modal.choose_seat", {
                  name: user.handle
                })
              })
            }), jsx(_$$m, {
              currentSeatType: selectedSeatType,
              setNextSeatType: e => {
                setSelectedSeatType(e);
                onClose();
              },
              availableSeatCounts: null,
              pricing: Object.fromEntries(Object.entries(seatTypes).filter(([e, t]) => e !== Gu.VIEW && !!t).map(([e, t]) => [e, t.displayPrice])),
              learnMoreLinkHref: "/pricing",
              displayPricing: !0,
              canSetCurrentSeatType: !0,
              tier
            })]
          })
        })
      })
    })
  });
}, "SelectUserSeatTypeModal");
let X = "select_seats_table--sidePadding--rdwOD";
let W = "select_seats_table--userColumn--0bg1B";
let J = "select_seats_table--seatColumn--dUkDj";
let Y = "select_seats_table--teamColumn--kxWk-";
let K = "select_seats_table--descriptionColumn--nvbAl";
function Z({
  user: e,
  seatTypes: t,
  selectedSeatType: a,
  changeSeatType: r,
  tier: i,
  teamId: l
}) {
  let n = wA();
  let d = TA();
  let o = e.id === d;
  let c = Dj();
  let u = i === Ju.PRO && c();
  let p = () => {
    n(to({
      type: H,
      data: {
        user: e,
        seatTypes: t,
        selectedSeatType: a,
        setSelectedSeatType: r,
        tier: i,
        teamId: l
      }
    }));
  };
  if (isNullish(t[a])) return null;
  let h = jsxs(_$$E, {
    className: "xh8yej3 x1whlmpv x133fa97 x19y5rnk x1bamp8i xkezfkh",
    "aria-label": _$$t("checkout.edit_user_seat_name", {
      name: e.handle
    }),
    onClick: p,
    children: [jsx("span", {
      className: "x1db2dqx",
      children: jsx(_$$B, {
        type: a,
        size: "24"
      })
    }), jsx("span", {
      children: t[a].displayName
    }), jsx(_$$O, {
      className: "x8x9d4c"
    })]
  });
  return jsxs("tr", {
    "data-testid": `select_seat_row--${e.id}`,
    children: [jsx("td", {
      "aria-hidden": !0,
      className: X
    }), jsx("td", {
      className: W,
      "data-testid": "select_seats_table_user_cell",
      children: jsx(_$$az, {
        entity: e,
        includeUserEmailAddress: !0,
        size: 24,
        showIsMe: o
      })
    }), jsx("td", {
      className: J,
      children: u ? h : jsx(IK, {
        variant: "ghost",
        "aria-label": _$$t("checkout.edit_user_seat_name", {
          name: e.handle
        }),
        onClick: p,
        iconPrefix: jsx(_$$B, {
          type: a,
          size: "24"
        }),
        children: jsxs("span", {
          className: _$$s.flex.justifyBetween.ml2.$,
          children: [t[a].displayName, jsx(_$$k, {})]
        })
      })
    }), i === Ju.ORG && jsx("td", {
      className: Y,
      children: e.teams
    }), jsx("td", {
      className: K,
      children: t[a].description
    }), jsx("td", {
      "aria-hidden": !0,
      className: X
    })]
  });
}
export function $$q0({
  users: e,
  seatTypes: t,
  selectSeatsState: a,
  changeUserSeatType: y,
  setAdditionalSeats: j,
  tier: S
}) {
  let T = useRef(null);
  let N = _$$u();
  let b = function ({
    tableContainerRef: e
  }) {
    let [t, a] = useState(window.innerHeight);
    let s = () => {
      a(window.innerHeight);
    };
    useEffect(() => (window.addEventListener("resize", s), () => {
      window.removeEventListener("resize", s);
    }), []);
    let i = e.current?.getBoundingClientRect();
    return Math.max(t - (i?.top || 0) - 49 - 8 - 56, 150);
  }({
    tableContainerRef: T
  });
  let [C, w] = useState(a);
  let [E, A] = useState(!1);
  let I = useMemo(() => {
    let t = [...e];
    sortByWithOptions(t, e => e.handle, {
      isDescending: E
    });
    return t;
  }, [e, E]);
  let k = UL(iB(a.selectedUserSeatTypes));
  let P = UL(a.additionalSeatCounts);
  let M = Dj();
  let R = S === Ju.PRO && M();
  return jsx(fu, {
    name: e0.SELECT_SEATS_TABLE,
    properties: {
      selectedUserSeatTypes: Tj(C.selectedUserSeatTypes),
      countBySeatType: gS(O$(C.selectedUserSeatTypes, C.additionalSeatCounts)),
      selectedTeamIds: gu(C.selectedTeamIds),
      userIds: gu(e.map(e => e.id))
    },
    trackingOptions: N,
    children: jsx("div", {
      children: jsxs("div", {
        className: "select_seats_table--tableContainer--ft8tm",
        ref: T,
        "data-testid": "select-seats-table",
        children: [jsx(_$$P, {
          maxHeight: b,
          className: "select_seats_table--scrollContainer--HMiGx",
          hideScrollbar: !0,
          horizontalScrollingDisabled: !0,
          children: jsxs("table", {
            className: "select_seats_table--table--hBe3G",
            children: [jsx("thead", {
              children: jsxs("tr", {
                children: [jsx("th", {
                  "aria-hidden": !0,
                  className: X
                }), jsxs("th", {
                  className: W,
                  children: [tx("checkout.select_seats_table.user_column"), " ", jsx("div", {
                    className: _$$s.inlineBlock.$,
                    "data-testid": "select-seats-table-sort-users-button",
                    children: jsx(_$$K, {
                      onClick: () => A(e => !e),
                      "aria-label": _$$t("checkout.select_seats_table.sort"),
                      children: E ? jsx(_$$d, {
                        "data-testid": "select-seats-table-icon-arrow-up"
                      }) : jsx(Q, {
                        "data-testid": "select-seats-table-icon-arrow-down"
                      })
                    })
                  })]
                }), jsx("th", {
                  className: J,
                  children: R ? tx("checkout.select_seats_table.seat_column_exp") : tx("checkout.select_seats_table.seat_column")
                }), S === Ju.ORG && jsx("th", {
                  className: Y,
                  children: tx("checkout.select_seats_table.team_column")
                }), jsx("th", {
                  className: K,
                  children: tx("checkout.select_seats_table.description_column")
                }), jsx("th", {
                  "aria-hidden": !0,
                  className: X
                })]
              })
            }), jsx("tbody", {
              children: I.map(e => jsx(Z, {
                user: e,
                seatTypes: t,
                selectedSeatType: a.selectedUserSeatTypes[e.id],
                changeSeatType: t => {
                  az.trackDefinedEvent("monetization_upgrades.user_seat_selection_changed_in_checkout", {
                    targetUserId: e.id,
                    previousSeatType: a.selectedUserSeatTypes[e.id],
                    newSeatType: t,
                    tier: S,
                    teamId: S === Ju.PRO ? C.selectedTeamIds[0] : void 0
                  });
                  y(e.id, t);
                },
                tier: S,
                teamId: S === Ju.PRO ? C.selectedTeamIds[0] : void 0
              }, e.id))
            })]
          })
        }), jsxs("div", {
          className: _$$s.py12.px24.bt1.bSolid.colorBorder.flex.itemsCenter.justifyBetween.$,
          children: [jsx(O, {
            tier: S,
            seatTypes: t,
            additionalSeatCounts: a.additionalSeatCounts,
            setAdditionalSeats: j
          }), jsx("p", {
            children: tx("checkout.select_seats_table.team_members_count", {
              assignedSeatsText: tx("checkout.select_seats_table.assigned_seats", {
                count: k
              }),
              unassignedSeatsText: tx("checkout.select_seats_table.unassigned_seats", {
                count: P
              })
            })
          })]
        })]
      })
    })
  });
}
export const T = $$q0;