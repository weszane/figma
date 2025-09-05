import { ex } from "../905/524523";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { useDispatch } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { G } from "../figma_app/361869";
import { s as _$$s } from "../c5e2cae0/341232";
import { nR } from "../figma_app/60079";
import { s_ } from "../905/17223";
import { tB, $$ } from "../figma_app/637027";
import { P as _$$P } from "../905/347284";
import { B as _$$B } from "../905/714743";
import { s as _$$s2 } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { sx } from "../905/941192";
import { Y as _$$Y } from "../905/830372";
import { S as _$$S } from "../905/339549";
import { E as _$$E } from "../905/984674";
import { mx } from "../figma_app/681712";
import { Ce } from "../905/156213";
import { eB } from "../905/765855";
import { fu } from "../figma_app/831799";
import { Cu } from "../figma_app/314264";
import { ud } from "../905/513035";
import { Oq } from "../905/332483";
import { AG, Zx } from "../figma_app/217457";
import { vr } from "../figma_app/514043";
import { Ui, Zj, Ib } from "../905/129884";
import { Ju } from "../905/102752";
import { az } from "../figma_app/805373";
import { $L, us } from "../figma_app/136698";
import { OJ, Dd } from "../905/519092";
import { ey } from "../figma_app/918700";
import { A as _$$A } from "../svg/433566";
import { A as _$$A2 } from "../svg/927263";
let O = ex("org_upgrade_user_info_extended", function ({
  teamIds: e,
  teamNames: t
}) {
  return jsx("div", {
    children: e.map((e, a) => {
      let r = $L(e, us);
      return jsxs("div", {
        className: "org_self_serve_modal_tooltip_content--tooltipRow--CyDdQ",
        children: [jsx("div", {
          style: sx.add({
            backgroundColor: r,
            minWidth: "10px",
            height: "10px",
            margin: "8px",
            borderRadius: "2px"
          }).$
        }), jsx("div", {
          children: t[a]
        })]
      }, e);
    })
  });
}, e => {
  let t = e.getAttribute("data-tooltip-team-names");
  let a = e.getAttribute("data-tooltip-team-ids");
  return {
    teamNames: t.split(","),
    teamIds: a.split(",")
  };
});
let D = "org_self_serve_modals--modalContainer--dX-kq";
let B = "org_self_serve_modals--modalWrapperSmall--A6JUB org_self_serve_modals--modalWrapper--swqMp";
let L = "org_self_serve_modals--modalHeader--nTa0e";
let V = "org_self_serve_modals--modalText--VYdf5";
function z(e) {
  return jsx("div", {
    style: {
      height: e.height || 12
    }
  });
}
export function $$F1(e) {
  return jsx(OJ, {
    containerClassName: D,
    headerSize: "hidden",
    isCloseHidden: !0,
    title: "",
    minWidth: 349,
    maxWidth: 349,
    children: jsxs("div", {
      className: B,
      children: [jsx("div", {
        className: L,
        children: tx("org_self_serve.modals.invalid_email.figma_organization_only_allows_work_emails")
      }), jsx("div", {
        className: V,
        children: tx("org_self_serve.modals.invalid_email.change_email_address_to_proceed")
      }), jsx(z, {
        height: 12
      }), jsx("a", {
        onClick: e.onFileBrowserClick,
        children: tx("org_self_serve.modals.invalid_email.go_to_the_file_browser")
      })]
    })
  });
}
export function $$G0(e) {
  return jsx(OJ, {
    containerClassName: D,
    headerSize: "hidden",
    isCloseHidden: !0,
    title: "",
    minWidth: 349,
    maxWidth: 349,
    children: jsxs("div", {
      className: B,
      children: [jsx("div", {
        className: L,
        children: tx("org_self_serve.modals.existing_org_admin.figma_organization_already_purchased")
      }), jsx("div", {
        className: V,
        children: tx("org_self_serve.modals.existing_org_admin.if_you_need_another_organization", {
          contactSales: jsx("a", {
            onClick: e.onContactSales,
            children: tx("org_self_serve.modals.existing_org_admin.contact_sales")
          })
        })
      }), jsx(z, {
        height: 4
      }), jsx(z, {
        height: 12
      }), jsx("a", {
        onClick: e.onFileBrowserClick,
        children: tx("org_self_serve.modals.existing_org_admin.go_to_the_file_browser")
      })]
    })
  });
}
export function $$H2(e) {
  return jsx(OJ, {
    containerClassName: D,
    headerSize: "hidden",
    onClose: e.onClose,
    title: "",
    minWidth: 580,
    maxWidth: 580,
    dataTestId: "true-up-edu-modal",
    children: jsxs("div", {
      className: "org_self_serve_modals--modalWrapper--swqMp",
      children: [jsx(_$$B, {
        className: "org_self_serve_modals--modalClose--XbMl2",
        svg: _$$A2,
        onClick: e.onClose
      }), jsx("div", {
        className: L,
        children: tx("org_self_serve.modals.true_up_edu.figma_grows_with_your_team")
      }), jsx("div", {
        className: V,
        children: tx("org_self_serve.modals.true_up_edu.members_can_add_new_editors.seat_rename")
      }), jsx(z, {
        height: 8
      }), jsx("div", {
        className: "org_self_serve_modals--modalSubHeader--FtC-9",
        children: tx("org_self_serve.modals.true_up_edu.what_to_expect_at_true_up")
      }), jsx("div", {
        className: V,
        children: tx("org_self_serve.modals.true_up_edu.true_up_explanation.seat_rename", {
          seeFullDetails: jsx("a", {
            href: "https://help.figma.com/hc/articles/360040328293",
            target: "_blank",
            children: tx("org_self_serve.modals.true_up_edu.see_full_details")
          })
        })
      })]
    })
  });
}
Ju(function (e) {
  let t = e.isProTeam ? Oq.exclude([ud.DEV_MODE]) : Oq;
  let [a, i] = useState(t.dict(t => e.seatDataByLicenseType[t]?.currentSeats || 0));
  let [o, c] = useState(null);
  let m = e => {
    let t = a[e];
    void 0 !== t && t < 99 && i({
      ...a,
      [e]: t + 1
    });
  };
  let _ = t => {
    let s = e.seatDataByLicenseType[t];
    let r = a[t];
    null != s && null != r && r > s.minSeats && i({
      ...a,
      [t]: r - 1
    });
  };
  let p = (e, t) => {
    if ("" === e.target.value) {
      t(0);
      return;
    }
    let a = parseInt(e.target.value);
    isNaN(a) || t(a);
  };
  let g = new vr(e.currency);
  let x = a[ud.FIGJAM];
  let f = {
    [ud.DESIGN]: {
      headerString: _$$t("all_carts.figma_design_editors.seat_rename"),
      totalSeatCount: a[ud.DESIGN],
      shouldShowDevModeIncludedText: !0
    },
    [ud.FIGJAM]: {
      headerString: _$$t("all_carts.figjam_editors.seat_rename"),
      totalSeatCount: x,
      shouldShowDevModeIncludedText: !1
    },
    [ud.DEV_MODE]: {
      headerString: _$$t("all_carts.dev_mode_only_seats"),
      totalSeatCount: a[ud.DEV_MODE] ?? 0,
      shouldShowDevModeIncludedText: !1
    }
  };
  return jsxs(Dd, {
    onSubmit: () => {
      let s = !1;
      if (t.forEach(t => {
        let r = a[t];
        let i = e.seatDataByLicenseType[t]?.minSeats || 0;
        void 0 !== r && !1 === s && (r < i || r > 99) && (c(t), s = !0);
      }), s) return;
      let r = t.reduce((e, t) => e + (a[t] || 0), 0);
      e.minTotalSeats && r < e.minTotalSeats ? c("total") : (e.dispatch(Ce()), e.updateAdditionalSeats(a));
    },
    confirmText: _$$t("all_carts.save"),
    cancelText: _$$t("all_carts.cancel"),
    title: _$$t("all_carts.add_additional_editors.seat_rename"),
    children: [jsx("div", {
      className: "org_self_serve_modals--bannerContainer--ly-u-",
      children: o && jsxs("div", {
        className: "org_self_serve_modals--errorBanner--EeUdZ",
        children: [jsx(_$$B, {
          className: "org_self_serve_modals--errorSvg--h8gsO",
          svg: _$$A
        }), jsxs("div", {
          className: "org_self_serve_modals--errorBannerText--srvT- org_self_serve_modals--headerModalText--h0Go9",
          children: [o === ud.DESIGN && tx("all_carts.you_need_a_minimum_n_design_editors.seat_rename", {
            minSeatsCount: e.seatDataByLicenseType[ud.DESIGN].minSeats
          }), o === ud.FIGJAM && tx("all_carts.you_need_a_minimum_n_whiteboard_editors.seat_rename", {
            minSeatsCount: e.seatDataByLicenseType[ud.FIGJAM].minSeats
          }), o === ud.DEV_MODE && tx("all_carts.you_need_a_minimum_n_dev_mode_seats", {
            minSeatsCount: e.seatDataByLicenseType[ud.DEV_MODE]?.minSeats || 0
          }), "total" === o && !!e.minTotalSeats && (getFeatureFlags().org_checkout_min_seat_info_copy ? tx("all_carts.minimum_seats", {
            minTotalSeats: e.minTotalSeats,
            minDesignSeats: e.seatDataByLicenseType[ud.DESIGN].minSeats,
            seatsText: tx("checkout.seats_text", {
              numOfSeats: e.minTotalSeats
            }),
            designSeatsText: tx("checkout.seats_text", {
              numOfSeats: e.seatDataByLicenseType[ud.DESIGN].minSeats
            })
          }) : tx("all_carts.you_need_a_minimum_n_editors.seat_rename", {
            minSeatsCount: e.minTotalSeats
          }))]
        })]
      })
    }), t.sort(AG).map(t => {
      let r = f[t];
      let l = e.seatDataByLicenseType[t];
      let o = a[t];
      return void 0 === r || void 0 === l || void 0 === o ? jsx(Fragment, {}) : jsxs("div", {
        children: [jsx(z, {
          height: 16
        }), jsx("div", {
          className: "org_self_serve_modals--headerModalBoldText--uhAfp org_self_serve_modals--headerModalText--h0Go9",
          children: r.headerString
        }), r.shouldShowDevModeIncludedText && jsxs(Fragment, {
          children: [jsx(z, {
            height: 4
          }), jsx(G, {})]
        }), jsx(z, {
          height: 12
        }), jsx(_$$s, {
          "data-testid": t + "-seat_counter",
          billableProductKey: Zx(t),
          incrementSeats: () => m(t),
          decrementSeats: () => _(t),
          numSeats: o,
          minSeatsCount: l.minSeats,
          headerText: g.formatMoney(r.totalSeatCount * l.seatUnitCostInCents * (e.showAnnualPrice ? 12 : 1)),
          headerSubText: mx(e.showAnnualPrice, r.totalSeatCount, !0, l.seatUnitCostInCents, e.currency),
          updateAdditionalSeatsText: e => p(e, e => {
            i({
              ...a,
              [t]: e
            });
          })
        })]
      }, t);
    }), jsx(z, {
      height: 18
    }), jsx("div", {
      className: "org_self_serve_modals--divider--cY9-m"
    })]
  });
}, "AdditionalEditorsModal");
var X = (e => (e[e.NONE = 0] = "NONE", e[e.DESIGN = 1] = "DESIGN", e[e.WHITEBOARD = 2] = "WHITEBOARD", e[e.TOTAL = 3] = "TOTAL", e))(X || {});
function W({
  userData: e,
  checkboxHandler: t
}) {
  let [a, l] = useState(0);
  let n = useDispatch();
  let d = ({
    rect: e,
    designChecked: s,
    ...r
  }) => {
    if (t(r), r.newVal && a < 3) {
      l(e => e + 1);
      let t = s ? _$$t("checkout.switch_seat_from_design_to_devmode") : _$$t("checkout.enabled_devmode");
      n(eB({
        target: {
          kind: Ui.TEXT,
          text: t
        },
        targetRect: {
          top: e.top,
          right: e.right + 8,
          bottom: e.bottom,
          left: e.left + 8,
          width: e.width,
          height: e.height
        },
        textAlign: "left",
        position: Zj.RIGHT,
        hideAfterDelay: 1e3
      }));
    }
  };
  return jsx(Fragment, {
    children: e.map((a, r) => jsxs("div", {
      "data-testid": "user-data-row",
      children: [jsxs(J, {
        rowType: "data",
        children: [jsx(az, {
          entity: a.user,
          includeUserEmailAddress: !0,
          size: 24
        }), jsx(Z, {
          userInfo: a
        }), jsx(_$$S, {
          checked: a.designEditor,
          onChange: e => {
            t({
              userId: a.user.id,
              type: "designEditor",
              newVal: e.currentTarget.checked
            });
          }
        }), jsx(tB, {
          checked: a.devMode,
          className: "org_self_serve_modals--devModeCheckbox--M-CsB",
          onChange: e => {
            d({
              designChecked: a.designEditor,
              userId: a.user.id,
              type: "devMode",
              newVal: e.currentTarget.checked,
              rect: e.currentTarget.getBoundingClientRect()
            });
          }
        }), jsx(tB, {
          checked: a.figjamEditor,
          className: "org_self_serve_modals--figjamCheckbox---FJmg",
          onChange: e => {
            t({
              userId: a.user.id,
              type: "figjamEditor",
              newVal: e.currentTarget.checked
            });
          }
        })]
      }), r !== e.length - 1 && jsx(Y, {})]
    }, a.user.id))
  });
}
function J({
  rowType: e,
  children: t
}) {
  let a = "footer" === e ? ["55%", "15%", "15%", "15%"] : ["35%", "20%", "15%", "15%", "15%"];
  return jsx(_$$Y, {
    dataTestId: "seat-table-row",
    verticalAlignItems: "center",
    horizontalAlignItems: "start",
    padding: {
      top: "data" === e ? 14 : 16,
      right: 16,
      bottom: "data" === e ? 14 : 16,
      left: 16
    },
    backgroundColor: "header" === e ? "hover" : "default",
    spacing: 0,
    children: t.map((e, t) => jsx(_$$Y, {
      width: a[t],
      horizontalAlignItems: "start",
      verticalAlignItems: "center",
      padding: {
        right: 16
      },
      children: e
    }, t))
  });
}
function Y() {
  return jsx("div", {
    className: _$$s2.wFull.colorBgTertiary.h1.$
  });
}
function K({
  teamId: e
}) {
  return jsx("div", {
    className: _$$s2.w8.h8.bRadius2.minW8.$,
    style: sx.add({
      backgroundColor: $L(e, us)
    }).$
  });
}
function Z({
  userInfo: e
}) {
  return e.teams.length > 1 ? jsx("div", {
    "data-tooltip-show-immediately": !0,
    "data-tooltip-type": Ib.SPECIAL,
    "data-tooltip": O,
    "data-tooltip-team-names": e.teams.map(e => e.name).join(","),
    "data-tooltip-team-ids": e.teams.map(e => e.id).join(","),
    "data-tooltip-show-right": !0,
    "data-tooltip-light-mode": !0,
    children: jsx(_$$E, {
      color: "default",
      children: tx("all_carts.editor_table.multiple_teams")
    })
  }) : jsxs(_$$Y, {
    spacing: 8,
    verticalAlignItems: "center",
    horizontalAlignItems: "start",
    children: [jsx(K, {
      teamId: e.teamIds[0]
    }), jsx("div", {
      className: _$$s2.noWrap.ellipsis.overflowHidden.$,
      children: jsx(_$$E, {
        color: "default",
        children: e.teams[0]?.name
      })
    })]
  });
}
Ju(function ({
  users: e,
  updateSelectedEditors: t,
  updateAdditionalEmptySeats: a,
  currency: i,
  minTotalSeats: l,
  dispatch: n,
  seatInfo: u,
  monthlyPriceByProduct: p
}) {
  let [g, f] = useState(e);
  let [y, S] = useState({
    design: u.design.additionalSeatCount,
    figjam: u.figjam.additionalSeatCount,
    dev_mode: u.dev_mode.additionalSeatCount
  });
  let C = useMemo(() => {
    let e = 0;
    let t = 0;
    let a = 0;
    for (let s of Object.values(g)) {
      s.designEditor && e++;
      s.devMode && a++;
      s.figjamEditor && t++;
    }
    return (e += y.design, a += y.dev_mode, t += y.figjam, l && e + t + a < l) ? 3 : e < u.design.minCount || e > 99 ? 1 : t < u.figjam.minCount || t > 99 ? 2 : 0;
  }, [y, g, l, u]);
  let w = e => {
    y[e] >= 99 || S(t => ({
      ...t,
      [e]: t[e] + 1
    }));
  };
  let A = e => {
    y[e] <= 0 || S(t => ({
      ...t,
      [e]: t[e] - 1
    }));
  };
  let I = (e, t) => {
    let a = "" === e.target.value ? 0 : parseInt(e.target.value);
    isNaN(a) || S(e => ({
      ...e,
      [t]: a
    }));
  };
  let k = new vr(i);
  let P = () => {
    n(Ce());
  };
  return jsx(fu, {
    name: "Select Editors Modal",
    children: jsxs(ey, {
      size: 864,
      maxHeight: 672,
      hide: () => n(Ce()),
      className: "org_self_serve_modals--selectEditorsModal--D0yWS",
      children: [jsxs("div", {
        className: "org_self_serve_modals--selectEditorModalHeader--wPo15 org_self_serve_modals--headerModalText--h0Go9",
        children: [tx("checkout.add_or_remove_editors"), jsx(s_, {
          customStyle: {
            position: "initial"
          },
          dispatch: n,
          onClose: P
        })]
      }), jsx(Y, {}), jsxs(J, {
        rowType: "header",
        children: [jsx(_$$E, {
          color: "default",
          fontWeight: "medium",
          children: tx("all_carts.editor_table.Name")
        }), jsx(_$$E, {
          color: "default",
          fontWeight: "medium",
          children: tx("all_carts.editor_table.Teams")
        }), jsxs(_$$Y, {
          direction: "vertical",
          spacing: 0,
          horizontalAlignItems: "start",
          verticalAlignItems: "center",
          children: [jsx(_$$E, {
            color: "default",
            fontWeight: "medium",
            children: tx("general.figma_design")
          }), jsxs("div", {
            children: [jsx(_$$E, {
              color: "handoff",
              fontWeight: "medium",
              children: tx("general.dev_mode")
            }), "\xa0", jsx(_$$E, {
              color: "default",
              fontWeight: "medium",
              children: tx("checkout.dev_mode_included_text_formatted.included")
            })]
          })]
        }), jsx(_$$E, {
          color: "default",
          fontWeight: "medium",
          children: tx("general.dev_mode")
        }), jsx(_$$E, {
          color: "default",
          fontWeight: "medium",
          children: tx("general.figjam")
        })]
      }), jsx(Y, {}), jsx(_$$P, {
        maxHeight: 426,
        children: jsx(W, {
          userData: Object.values(g),
          checkboxHandler: ({
            userId: e,
            type: t,
            newVal: a
          }) => {
            let s = {
              ...g[e],
              [t]: a
            };
            "devMode" === t && a && (s.designEditor = !1);
            "designEditor" === t && a && (s.devMode = !1);
            f(t => ({
              ...t,
              [e]: s
            }));
            Cu({
              name: "org_checkout_select_editors_checkbox",
              licenseType: t,
              checked: a
            });
          }
        })
      }), jsx(Y, {}), jsxs(J, {
        rowType: "footer",
        children: [jsxs(_$$Y, {
          spacing: 0,
          direction: "vertical",
          horizontalAlignItems: "start",
          verticalAlignItems: "center",
          children: [jsx(_$$E, {
            color: "default",
            fontWeight: "medium",
            children: tx("all_carts.add_additional_editors.seat_rename")
          }), jsx(_$$E, {
            fontWeight: "regular",
            color: "secondary",
            children: tx("all_carts.add_additional_editors_description.seat_rename")
          })]
        }), jsx(_$$s, {
          billableProductKey: ud.DESIGN,
          incrementSeats: () => w(ud.DESIGN),
          decrementSeats: () => A(ud.DESIGN),
          numSeats: y.design,
          minSeatsCount: 0,
          headerText: "",
          headerSubText: "",
          updateAdditionalSeatsText: e => I(e, ud.DESIGN)
        }), jsx(_$$s, {
          billableProductKey: ud.DEV_MODE,
          incrementSeats: () => w(ud.DEV_MODE),
          decrementSeats: () => A(ud.DEV_MODE),
          numSeats: y.dev_mode,
          minSeatsCount: 0,
          headerText: "",
          headerSubText: "",
          updateAdditionalSeatsText: e => I(e, ud.DEV_MODE)
        }), jsx(_$$s, {
          billableProductKey: ud.FIGJAM,
          incrementSeats: () => w(ud.FIGJAM),
          decrementSeats: () => A(ud.FIGJAM),
          numSeats: y.figjam,
          minSeatsCount: 0,
          headerText: "",
          headerSubText: "",
          updateAdditionalSeatsText: e => I(e, ud.FIGJAM)
        })]
      }), jsxs("div", {
        className: "org_self_serve_modals--selectEditorModalActions--ng3b0 org_self_serve_modals--selectEditorModalFooter--8vKi7",
        children: [0 !== C ? (() => {
          switch (C) {
            case 0:
            default:
              return;
            case 1:
              return jsx(_$$E, {
                color: "danger",
                children: tx("all_carts.you_need_a_minimum_n_design_editors.seat_rename", {
                  minSeatsCount: u.design.minCount
                })
              });
            case 2:
              return jsx(_$$E, {
                color: "danger",
                children: tx("all_carts.you_need_a_minimum_n_whiteboard_editors.seat_rename", {
                  minSeatsCount: u.figjam.minCount
                })
              });
            case 3:
              return jsx(_$$E, {
                color: "danger",
                children: tx("org_self_serve.purchase_summary.the_organization_plan_requires_at_least_count_editor_seats.seat_rename", {
                  minCount: l
                })
              });
          }
        })() : jsx(_$$E, {
          fontWeight: "regular",
          color: "secondary",
          children: tx("all_carts.new_total", {
            total: k.formatMoney(function (e, t, a) {
              let s = t.design;
              let r = t.figjam;
              let i = t.dev_mode;
              for (let t in e) {
                e[t].designEditor ? s++ : e[t].devMode && i++;
                e[t].figjamEditor && r++;
              }
              return s * a[ud.DESIGN] * 12 + r * a[ud.FIGJAM] * 12 + i * a[ud.DEV_MODE] * 12;
            }(g, y, p), {
              showCents: !0
            })
          })
        }), jsxs("div", {
          className: "org_self_serve_modals--buttonGroup--U5iQn",
          children: [jsx(nR, {
            onClick: P,
            children: _$$t("general.cancel")
          }), jsx($$, {
            onClick: () => {
              0 === C && (a(y), t(g), n(Ce()));
            },
            disabled: 0 !== C,
            children: _$$t("checkout.update_seats")
          })]
        })]
      })]
    })
  });
}, "SelectEditorsModal");
export const wW = $$G0;
export const VE = $$F1;
export const LJ = $$H2;