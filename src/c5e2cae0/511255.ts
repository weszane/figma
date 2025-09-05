import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, Suspense } from "react";
import { useDispatch, connect } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { s as _$$s } from "../905/403855";
import { buildUploadUrl } from "../figma_app/169182";
import { mI } from "../figma_app/566371";
import { G as _$$G } from "../figma_app/361869";
import { Jn } from "../905/17223";
import { tH } from "../905/751457";
import { Us, vd } from "../figma_app/637027";
import { P as _$$P } from "../905/347284";
import { B as _$$B } from "../905/714743";
import { s as _$$s2 } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { sx } from "../905/941192";
import { sx as _$$sx } from "../figma_app/307841";
import { sf } from "../905/929976";
import { to, Ce } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { kp } from "../figma_app/831799";
import { jv, SK, Fq } from "../905/84777";
import { ud } from "../905/513035";
import { N_, Oq } from "../905/332483";
import { K as _$$K } from "../905/3140";
import { vr, wU } from "../figma_app/514043";
import { _L } from "../figma_app/598018";
import { Ju, IX } from "../905/712921";
import { Ro } from "../figma_app/805373";
import { N as _$$N } from "../905/809096";
import { ey } from "../figma_app/918700";
import { throwTypeError } from "../figma_app/465776";
import { isNullish } from "../figma_app/95419";
import { A as _$$A } from "../905/251970";
import { g as _$$g } from "../905/125190";
import { e6, Ih } from "../figma_app/617427";
import { lk } from "../figma_app/109538";
import { B as _$$B2 } from "../905/380801";
import { B as _$$B3 } from "../905/261906";
import { b as _$$b } from "../905/723768";
import { AG } from "../figma_app/217457";
import { FPlanNameType } from "../figma_app/191312";
import { b as _$$b2 } from "../905/165519";
import { G8, y3, Q$, gt } from "../c5e2cae0/859355";
import { A as _$$A2 } from "../6828/7452";
function X({
  currency: e,
  hideModal: t,
  choosePlan: a,
  TeamIllustration: r,
  upsellSource: l
}) {
  let n = useDispatch();
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.gap8.$,
    style: sx.add({
      padding: "48px 56px",
      maxWidth: "650px"
    }).$,
    children: [jsx("p", {
      className: _$$s2.textHeadingLarge.$,
      children: tx("org_upgrade.multi_team.bring_your_teams_together")
    }), jsx("p", {
      className: _$$s2.textHeadingMedium.$,
      style: sx.add({
        fontWeight: 400
      }).$,
      children: tx("plan_comparison.campfire.org.description")
    }), jsx(e6, {
      className: "campfire_org_upgrade_multi_team_modal--closeButton--THg83",
      onClick: t,
      children: jsx(_$$A, {})
    }), jsxs("div", {
      className: _$$s2.flex.gap16.$,
      children: [jsxs("div", {
        className: _$$s2.flex.flexColumn.gap16.flex1.mt16.$,
        children: [jsx(W, {
          currency: e
        }), jsxs("div", {
          children: [jsx(Ih, {
            onClick: a,
            children: tx("plan_comparison.campfire.choose_plan")
          }), jsx("div", {
            className: _$$s2.font11.lh16.alignCenter.mt4.$,
            children: tx("plan_comparison.campfire.or_contact_sales", {
              contactSalesLink: jsx("button", {
                className: _$$s2.colorTextBrand.cursorPointer.$,
                onClick: () => n(to({
                  type: lk,
                  data: {
                    source: _$$B2.ORG_SELF_SERVE_UPGRADE_MODAL
                  }
                })),
                children: tx("plan_comparison.campfire.contact_sales")
              })
            })
          })]
        }), jsx("div", {
          className: _$$s2.bt1.bSolid.colorBorder.$
        }), jsx(J, {
          upsellSource: l
        })]
      }), jsx("div", {
        className: _$$s2.flex.flex1.itemsCenter.justifyCenter.$,
        children: r
      })]
    })]
  });
}
function W({
  currency: e
}) {
  let t = {
    currency: e,
    tier: Ju.ORG,
    renewalTerm: IX.YEAR,
    unit: IX.MONTH
  };
  let a = jv({
    billableProductKeys: N_,
    baseQuery: t
  });
  let [r] = mI(a);
  if (null === r.data) throw Error("Price data is null");
  let i = new vr(e);
  return jsx("div", {
    className: _$$s2.flex.flexColumn.$,
    children: N_.sort(AG).map(e => isNullish(r.data[e]) ? null : jsxs("div", {
      className: _$$s2.flex.justifyBetween.$,
      children: [jsxs("div", {
        className: _$$s2.flex.gap4.itemsCenter.$,
        children: [_$$B3({
          type: e,
          size: "24",
          removeBackgroundColor: !0
        }), jsx("p", {
          className: _$$s2.textBodyLarge.$,
          children: function (e) {
            switch (e) {
              case ud.EXPERT:
                return _$$t("nux.campfire.full_seat");
              case ud.DEVELOPER:
                return _$$t("nux.campfire.dev_seat");
              case ud.COLLABORATOR:
                return _$$t("nux.campfire.collab_seat");
              case ud.CONTENT:
                return _$$t("nux.campfire.content_seat");
              default:
                throwTypeError(e);
            }
          }(e)
        })]
      }), jsx("p", {
        className: _$$s2.textBodyMedium.$,
        children: tx("nux.price_per_month", {
          price: jsx("span", {
            className: _$$s2.textBodyLargeStrong.$,
            children: i.formatMoney(r.data[e].amount)
          })
        })
      })]
    }, e))
  });
}
function J(e) {
  let t = e.upsellSource === _$$b2.CONNECTED_PROJECTS_MAXIMUM_CONNECTIONS;
  let a = [t ? tx("plan_comparison.campfire.org.feature.org_connected_projects", {
    orgConnectionsLimit: _$$b[FPlanNameType.ORG]
  }) : null, tx("plan_comparison.campfire.org.feature.unlimited_teams"), tx("plan_comparison.campfire.org.feature.branching"), tx("plan_comparison.campfire.org.feature.security"), tx("plan_comparison.campfire.org.feature.scim"), tx("plan_comparison.campfire.org.feature.customizations")].filter(Boolean);
  return jsx("div", {
    children: a.map((e, a) => {
      let r = t && 0 === a ? jsx("span", {
        className: _$$s2.textBodyLargeStrong.$,
        children: e
      }) : jsx("span", {
        children: e
      });
      return jsxs("div", {
        className: _$$s2.flex.$,
        children: [jsx(_$$g, {
          className: _$$s2.minW24.$,
          style: {
            "--color-icon": "var(--color-icon-secondary)"
          }
        }), jsx("p", {
          className: _$$s2.textBodyLarge.$,
          children: r
        })]
      }, a);
    })
  });
}
let Y = "org_upgrade_multi_team_modal--planModalDivider--Rnmy0";
let q = buildUploadUrl("50ae1752a504eea59f2a3efac6b0f2d1ed74435a");
let Q = buildUploadUrl("e2148969d5a469e76c053a23b6647d487e6d64ee");
let ee = buildUploadUrl("fc0fcfadcfe50c96f4dcf859aabe1952c822ae2a");
function et(e) {
  return jsxs("div", {
    className: "org_upgrade_multi_team_modal--planItem--P4LRr",
    children: [jsx(_$$B, {
      svg: _$$A2,
      className: "org_upgrade_multi_team_modal--checkIcon--KnZJe"
    }), jsx("p", {
      children: e.text
    })]
  });
}
function ea(e) {
  let t = useDispatch();
  let a = () => {
    t(Ce());
  };
  let l = _$$sx();
  let d = useMemo(() => [_$$t("org_upgrade.multi_team.plan_items.shared_design_libraries"), _$$t("org_upgrade.multi_team.plan_items.shared_fonts_and_styles"), _$$t("org_upgrade.multi_team.plan_items.centralized_billing_and_admin_controls"), _$$t("org_upgrade.multi_team.plan_items.single_sign_on_sso_integrations")], []);
  let _ = () => {
    a();
    t(sf({
      view: "orgSelfServe",
      upsellSource: e.upsellSource
    }));
  };
  let T = e => jsxs("div", {
    className: "org_upgrade_multi_team_modal--teamListEntry---bU9i",
    children: [jsx(Ro, {
      size: 10,
      hideFallbackInitial: !0,
      entity: e,
      shape: "SQUARE"
    }), jsx("div", {
      className: "org_upgrade_multi_team_modal--teamListEntryName--aJZdJ ellipsis--ellipsis--Tjyfa",
      children: e.name
    })]
  }, e.id);
  let w = useMemo(() => {
    switch (Object.keys(e.teams).length) {
      case 2:
        return 184;
      case 3:
        return 192;
      default:
        return 221;
    }
  }, [e.teams]);
  let A = G8;
  let P = wU();
  let R = Oq.dict(e => ({
    currency: P.currency,
    billableProductKey: e,
    billableProductVariantKey: null,
    tier: Ju.ORG,
    renewalTerm: IX.YEAR,
    unit: IX.MONTH
  }));
  let O = SK(R, Fq.UPSELL_MODALS);
  let [D] = mI(O);
  if (null === D.data) throw Error("Price data is null");
  let B = D.data;
  let L = jsx("div", {
    className: "org_upgrade_multi_team_modal--teamIllustrationLeftSection--MLN4f",
    style: sx.$$if(l, sx.add({
      width: "200px"
    })).$,
    children: jsxs("div", {
      className: "org_upgrade_multi_team_modal--dynamicTeamListSection--KE5ZD",
      children: [jsxs("div", {
        className: "org_upgrade_multi_team_modal--teamListHeader--Eyf-F",
        children: [jsx("img", {
          className: "org_upgrade_multi_team_modal--placeholderOrgLogo--vYLRQ",
          src: ee,
          draggable: !1,
          alt: ""
        }), jsx("div", {
          className: "org_upgrade_multi_team_modal--teamListOrgName--EKk6-",
          children: tx("org_upgrade.multi_team.acme_inc")
        }), jsx(_$$B, {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#000" fill-opacity="1" fill-rule="evenodd" stroke="none" d="M12 16.05V9h1v7.05c1.141.232 2 1.24 2 2.45 0 1.21-.859 2.218-2 2.45V23h-1v-2.05c-1.141-.232-2-1.24-2-2.45 0-1.21.859-2.218 2-2.45m2 2.45c0 .828-.672 1.5-1.5 1.5-.828 0-1.5-.672-1.5-1.5 0-.828.672-1.5 1.5-1.5.828 0 1.5.672 1.5 1.5m5 4.5h1v-7.05c1.141-.232 2-1.24 2-2.45 0-1.21-.859-2.218-2-2.45V9h-1v2.05c-1.141.232-2 1.24-2 2.45 0 1.21.859 2.218 2 2.45zm2-9.5c0-.828-.672-1.5-1.5-1.5-.828 0-1.5.672-1.5 1.5 0 .828.672 1.5 1.5 1.5.828 0 1.5-.672 1.5-1.5"/></svg>',
          className: "org_upgrade_multi_team_modal--multiTeamOrgUpgradeAdjustSvg--V4dem"
        })]
      }), jsx("div", {
        className: "org_upgrade_multi_team_modal--teamListDivider--A9NYP"
      }), (() => {
        let t = e.unsortedTeamIds;
        let a = [];
        for (var r = 0; r < Math.min(4, t.length); r++) {
          let s = e.teams[t[r]];
          a.push(T(s));
        }
        return jsx("div", {
          className: "org_upgrade_multi_team_modal--teamList--rzATA",
          children: a
        });
      })(), jsxs("div", {
        className: l ? "org_upgrade_multi_team_modal--campfireTeamIllustrationRightSection--fHW0n" : "org_upgrade_multi_team_modal--teamIllustrationRightSection--irt0w",
        children: [jsx("img", {
          className: "org_upgrade_multi_team_modal--filesIllustration--teK60",
          src: Q,
          draggable: !1,
          alt: ""
        }), jsx("img", {
          src: q,
          draggable: !1,
          alt: ""
        })]
      }), l && jsxs("div", {
        className: _$$s2.flex.b1.bRadius3.itemsCenter.absolute.pr4.py4.ml36.$,
        style: sx.add({
          top: "100%",
          marginTop: "15px",
          maxWidth: "100px"
        }).$,
        children: [jsx(_$$s, {
          className: _$$s2.minW16.$
        }), jsx("p", {
          className: _$$s2.textBodySmallStrong.$,
          children: tx("org_upgrade.illustration.sign_in_with_sso")
        }), jsx("div", {
          className: _$$s2.absolute.mt32.$,
          style: sx.add({
            right: "-8px"
          }).$,
          children: jsx(es, {})
        })]
      })]
    })
  });
  return jsx(ey, {
    className: "org_upgrade_multi_team_modal--modal--fVO2l",
    hide: a,
    size: "fitContent",
    useModalViewScroll: !1,
    children: l ? jsx(X, {
      currency: P.currency,
      hideModal: a,
      choosePlan: _,
      TeamIllustration: L,
      upsellSource: e.upsellSource
    }) : jsxs(_$$P, {
      className: "org_upgrade_multi_team_modal--scrollContainer--ZL-IQ",
      children: [jsxs("div", {
        className: "org_upgrade_multi_team_modal--planModalHeader--drD3M",
        style: {
          height: 64,
          marginBottom: 32
        },
        children: [jsx("div", {
          className: "org_upgrade_multi_team_modal--planModalTitle--YP3RJ text--fontPos24--YppUD text--_fontBase--QdLsd",
          style: {
            fontWeight: 600
          },
          children: tx("org_upgrade.multi_team.bring_your_teams_together_with_the_figma_organization_plan")
        }), jsx(Jn, {
          className: "org_upgrade_multi_team_modal--closeButton--x3l-2",
          onClick: a,
          innerText: "close"
        })]
      }), jsx("div", {
        className: Y
      }), jsxs("div", {
        className: "org_upgrade_multi_team_modal--planDetails--Fu8GW",
        children: [jsxs("div", {
          className: "org_upgrade_multi_team_modal--planDetailsLeft--mBwlh",
          children: [jsx("div", {
            className: "org_upgrade_multi_team_modal--billingCadence--WBrj-",
            children: tx("org_upgrade.multi_team.annual_billing_only")
          }), jsxs("div", {
            className: y3,
            children: [jsxs("p", {
              className: Q$,
              children: [tx("org_upgrade.multi_team.figma"), jsx("div", {
                className: gt,
                children: jsx(_$$G, {})
              })]
            }), jsx("div", {
              children: tx("org_upgrade.multi_team.billing_cost_per_month.seat_rename", {
                monthlyCostInDollars: jsx("span", {
                  className: G8,
                  children: P.formatMoney(B[ud.DESIGN].amount)
                })
              })
            })]
          }), jsxs("div", {
            className: y3,
            children: [tx("org_upgrade.multi_team.dev_mode"), jsx("div", {
              children: tx("org_upgrade.multi_team.billing_cost_per_month.seat_rename", {
                monthlyCostInDollars: jsx("span", {
                  className: G8,
                  children: P.formatMoney(B[ud.DEV_MODE].amount)
                })
              })
            })]
          }), jsxs("div", {
            className: y3,
            children: [tx("org_upgrade.multi_team.fig_jam"), jsx("div", {
              children: tx("org_upgrade.multi_team.billing_cost_per_month.seat_rename", {
                monthlyCostInDollars: jsx("span", {
                  className: A,
                  children: P.formatMoney(B[ud.FIGJAM].amount)
                })
              })
            })]
          }), jsx("div", {
            className: "org_upgrade_multi_team_modal--planText--MQX-G",
            children: jsxs("div", {
              className: "org_upgrade_multi_team_modal--itemList--SC-iA",
              children: [d.map((e, t) => jsx("div", {
                children: jsx(et, {
                  text: e
                })
              }, t)), jsx("div", {
                className: "org_upgrade_multi_team_modal--seeAll--8WNIM",
                children: jsx(Us, {
                  href: "https://www.figma.com/pricing/#cid-57mfNh6t0Xo7z8Q95Ww9ZV",
                  target: "_blank",
                  trusted: !0,
                  children: tx("org_upgrade.multi_team.see_all_features")
                })
              })]
            })
          })]
        }), jsx("div", {
          className: "org_upgrade_multi_team_modal--teamIllustrationSection--xl3pT",
          style: {
            height: w
          },
          children: L
        })]
      }), jsx("div", {
        className: Y
      }), jsx(vd, {
        onClick: _,
        className: "org_upgrade_multi_team_modal--continueButton--Zo9V7",
        trackingProperties: {
          trackingDescriptor: _$$c.UPGRADE_TO_ORGANIZATION,
          upsellSource: e.upsellSource
        },
        children: tx("org_upgrade.multi_team.continue")
      }), jsx("div", {
        className: "org_upgrade_multi_team_modal--spaceFiller--f9bwU"
      })]
    })
  });
}
function es() {
  return jsxs("svg", {
    width: "15",
    height: "17",
    viewBox: "0 0 15 17",
    fill: "none",
    children: [jsxs("mask", {
      id: "path-1-outside-1_15_11117",
      maskUnits: "userSpaceOnUse",
      x: "-0.5",
      y: "0.5",
      width: "16",
      height: "16",
      fill: "black",
      children: [jsx("rect", {
        fill: "white",
        x: "-0.5",
        y: "0.5",
        width: "16",
        height: "16"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.7753 2.25C4.7753 1.83579 5.11109 1.5 5.5253 1.5C5.93951 1.5 6.2753 1.83579 6.2753 2.25V7C6.2753 7.27614 6.49916 7.5 6.7753 7.5C7.05144 7.5 7.2753 7.27614 7.2753 7V6.25C7.2753 5.83579 7.61109 5.5 8.0253 5.5C8.43951 5.5 8.7753 5.83579 8.7753 6.25V7C8.7753 7.27614 8.99916 7.5 9.2753 7.5C9.55144 7.5 9.7753 7.27614 9.7753 7V6.75C9.7753 6.33579 10.1111 6 10.5253 6C10.9395 6 11.2753 6.33579 11.2753 6.75V6.99997C11.2753 7.27613 11.4992 7.5 11.7753 7.5H12.0254C12.1634 7.5 12.2754 7.38807 12.2754 7.25C12.2754 6.83579 12.6111 6.5 13.0254 6.5C13.4396 6.5 13.7754 6.83579 13.7754 7.25V9.75C13.7754 9.75099 13.7754 9.75197 13.7754 9.75296V11C13.7754 13.4853 11.7606 15.5 9.27535 15.5C7.72857 15.5 6.36406 14.7196 5.55409 13.531C4.83873 12.7173 3.72389 11.8364 2.76078 11.0754L2.76074 11.0754L2.76055 11.0753C2.45467 10.8336 2.16409 10.604 1.90649 10.3925C1.42761 9.99926 1.3593 9.26798 1.7686 8.80273C2.47277 8.00228 3.67449 9.08737 4.40263 9.86608C4.41077 9.87478 4.41894 9.88354 4.42715 9.89237C4.54973 10.0242 4.77535 9.93924 4.77535 9.75922L4.7753 9.75V2.25Z"
      })]
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.7753 2.25C4.7753 1.83579 5.11109 1.5 5.5253 1.5C5.93951 1.5 6.2753 1.83579 6.2753 2.25V7C6.2753 7.27614 6.49916 7.5 6.7753 7.5C7.05144 7.5 7.2753 7.27614 7.2753 7V6.25C7.2753 5.83579 7.61109 5.5 8.0253 5.5C8.43951 5.5 8.7753 5.83579 8.7753 6.25V7C8.7753 7.27614 8.99916 7.5 9.2753 7.5C9.55144 7.5 9.7753 7.27614 9.7753 7V6.75C9.7753 6.33579 10.1111 6 10.5253 6C10.9395 6 11.2753 6.33579 11.2753 6.75V6.99997C11.2753 7.27613 11.4992 7.5 11.7753 7.5H12.0254C12.1634 7.5 12.2754 7.38807 12.2754 7.25C12.2754 6.83579 12.6111 6.5 13.0254 6.5C13.4396 6.5 13.7754 6.83579 13.7754 7.25V9.75C13.7754 9.75099 13.7754 9.75197 13.7754 9.75296V11C13.7754 13.4853 11.7606 15.5 9.27535 15.5C7.72857 15.5 6.36406 14.7196 5.55409 13.531C4.83873 12.7173 3.72389 11.8364 2.76078 11.0754L2.76074 11.0754L2.76055 11.0753C2.45467 10.8336 2.16409 10.604 1.90649 10.3925C1.42761 9.99926 1.3593 9.26798 1.7686 8.80273C2.47277 8.00228 3.67449 9.08737 4.40263 9.86608C4.41077 9.87478 4.41894 9.88354 4.42715 9.89237C4.54973 10.0242 4.77535 9.93924 4.77535 9.75922L4.7753 9.75V2.25Z",
      fill: "white"
    }), jsx("path", {
      d: "M13.7754 9.75296L12.7754 9.7491V9.75296H13.7754ZM5.55409 13.531L6.38045 12.9679L6.34578 12.917L6.30513 12.8708L5.55409 13.531ZM2.76078 11.0754L3.38075 10.2908L3.37466 10.286L3.36849 10.2813L2.76078 11.0754ZM2.76074 11.0754L2.13996 11.8594L2.14646 11.8645L2.15303 11.8696L2.76074 11.0754ZM2.76055 11.0753L3.38133 10.2913L3.38052 10.2906L2.76055 11.0753ZM1.90649 10.3925L1.27191 11.1653L1.27191 11.1653L1.90649 10.3925ZM1.7686 8.80273L1.01778 8.14221H1.01778L1.7686 8.80273ZM4.40263 9.86608L5.13306 9.18309L5.13306 9.18309L4.40263 9.86608ZM4.7753 9.75H3.77528L3.77532 9.75602L4.7753 9.75ZM4.42715 9.89237L3.69482 10.5733L4.42715 9.89237ZM5.5253 0.5C4.5588 0.5 3.7753 1.2835 3.7753 2.25H5.7753C5.7753 2.38807 5.66337 2.5 5.5253 2.5V0.5ZM7.2753 2.25C7.2753 1.2835 6.4918 0.5 5.5253 0.5V2.5C5.38723 2.5 5.2753 2.38807 5.2753 2.25H7.2753ZM7.2753 7V2.25H5.2753V7H7.2753ZM6.2753 6.25V7H8.2753V6.25H6.2753ZM8.0253 4.5C7.0588 4.5 6.2753 5.2835 6.2753 6.25H8.2753C8.2753 6.38807 8.16337 6.5 8.0253 6.5V4.5ZM9.7753 6.25C9.7753 5.2835 8.9918 4.5 8.0253 4.5V6.5C7.88723 6.5 7.7753 6.38807 7.7753 6.25H9.7753ZM9.7753 7V6.25H7.7753V7H9.7753ZM8.7753 6.75V7H10.7753V6.75H8.7753ZM10.5253 5C9.5588 5 8.7753 5.7835 8.7753 6.75H10.7753C10.7753 6.88807 10.6634 7 10.5253 7V5ZM12.2753 6.75C12.2753 5.7835 11.4918 5 10.5253 5V7C10.3872 7 10.2753 6.88807 10.2753 6.75H12.2753ZM12.2753 6.99997V6.75H10.2753V6.99997H12.2753ZM12.0254 6.5H11.7753V8.5H12.0254V6.5ZM13.2754 7.25C13.2754 7.38807 13.1634 7.5 13.0254 7.5V5.5C12.0589 5.5 11.2754 6.2835 11.2754 7.25H13.2754ZM13.0254 7.5C12.8873 7.5 12.7754 7.38807 12.7754 7.25H14.7754C14.7754 6.2835 13.9919 5.5 13.0254 5.5V7.5ZM12.7754 7.25V9.75H14.7754V7.25H12.7754ZM12.7754 9.75L12.7754 9.7491L14.7753 9.75683C14.7754 9.75455 14.7754 9.75228 14.7754 9.75H12.7754ZM14.7754 11V9.75296H12.7754V11H14.7754ZM9.27535 16.5C12.3129 16.5 14.7754 14.0376 14.7754 11H12.7754C12.7754 12.933 11.2084 14.5 9.27535 14.5V16.5ZM4.72773 14.0942C5.716 15.5444 7.38393 16.5 9.27535 16.5V14.5C8.07321 14.5 7.01213 13.8948 6.38045 12.9679L4.72773 14.0942ZM2.14081 11.8601C3.12768 12.6398 4.1605 13.4604 4.80305 14.1913L6.30513 12.8708C5.51696 11.9742 4.32011 11.033 3.38075 10.2908L2.14081 11.8601ZM2.15303 11.8696L2.15308 11.8696L3.36849 10.2813L3.36845 10.2812L2.15303 11.8696ZM2.13977 11.8592L2.13996 11.8594L3.38152 10.2914L3.38133 10.2913L2.13977 11.8592ZM1.27191 11.1653C1.53818 11.3839 1.83659 11.6197 2.14058 11.8599L3.38052 10.2906C3.07274 10.0474 2.79 9.82399 2.54106 9.61959L1.27191 11.1653ZM1.01778 8.14221C0.225175 9.04318 0.36732 10.4226 1.27191 11.1653L2.54106 9.61959C2.52173 9.60372 2.50406 9.57558 2.50055 9.53613C2.49713 9.49765 2.50911 9.47495 2.51941 9.46324L1.01778 8.14221ZM5.13306 9.18309C4.76 8.78412 4.18894 8.21906 3.5653 7.86975C3.25213 7.69434 2.84133 7.52445 2.38081 7.5217C1.87057 7.51865 1.38659 7.72299 1.01778 8.14221L2.51941 9.46324C2.52177 9.46056 2.50353 9.48113 2.46192 9.49972C2.42048 9.51823 2.385 9.52176 2.36888 9.52166C2.35449 9.52158 2.42166 9.52154 2.58795 9.61468C2.92326 9.80249 3.31712 10.1693 3.6722 10.5491L5.13306 9.18309ZM5.15947 9.21142C5.15063 9.20191 5.14183 9.19247 5.13306 9.18309L3.6722 10.5491C3.6797 10.5571 3.68724 10.5652 3.69482 10.5733L5.15947 9.21142ZM3.77532 9.75602L3.77537 9.76525L5.77534 9.7532L5.77528 9.74398L3.77532 9.75602ZM3.7753 2.25V9.75H5.7753V2.25H3.7753ZM3.69482 10.5733C4.40798 11.3403 5.77535 10.8889 5.77535 9.75922H3.77535C3.77535 8.98963 4.69149 8.70813 5.15947 9.21142L3.69482 10.5733ZM9.2753 8.5C10.1037 8.5 10.7753 7.82843 10.7753 7H8.7753C8.7753 6.72386 8.99916 6.5 9.2753 6.5V8.5ZM6.7753 8.5C7.60373 8.5 8.2753 7.82843 8.2753 7H6.2753C6.2753 6.72386 6.49916 6.5 6.7753 6.5V8.5ZM10.2753 6.99997C10.2753 7.82841 10.9469 8.5 11.7753 8.5V6.5C12.0515 6.5 12.2753 6.72384 12.2753 6.99997H10.2753ZM7.7753 7C7.7753 7.82843 8.44687 8.5 9.2753 8.5V6.5C9.55144 6.5 9.7753 6.72386 9.7753 7H7.7753ZM12.0254 8.5C12.7157 8.5 13.2754 7.94036 13.2754 7.25H11.2754C11.2754 6.83579 11.6111 6.5 12.0254 6.5V8.5ZM5.2753 7C5.2753 7.82843 5.94687 8.5 6.7753 8.5V6.5C7.05144 6.5 7.2753 6.72386 7.2753 7H5.2753Z",
      fill: "black",
      fillOpacity: "0.8",
      mask: "url(#path-1-outside-1_15_11117)"
    })]
  });
}
export let $$er0 = connect(e => {
  let {
    teams
  } = e;
  return {
    teams,
    unsortedTeamIds: _L(e.user, e.roles, e.teams)
  };
})(kp(function (e) {
  return jsx(tH, {
    boundaryKey: "OrgUpgradeMultiTeamModal",
    team: _$$e.BILLING_EXPERIENCE,
    fallback: jsx(_$$K, {}),
    children: jsx(Suspense, {
      fallback: jsx(_$$N, {
        hiddenTitle: tx("org_upgrade.multi_team.bring_your_teams_together_with_the_figma_organization_plan"),
        estimatedWidth: 500,
        estimatedHeight: 500
      }),
      children: jsx(ea, {
        ...e
      })
    })
  });
}, "Multi-Team Org Upgrade Modal"));
export const OrgUpgradeMultiTeamModal = $$er0;