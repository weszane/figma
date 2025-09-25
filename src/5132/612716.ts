import { jsxs, jsx } from "react/jsx-runtime";
import { Suspense, useState } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories } from "../905/165054";
import c from "classnames";
import { P as _$$P } from "../vendor/348225";
import { handleSuspenseRetainRelease } from "../figma_app/566371";
import { ModalCloseButton } from "../905/17223";
import { ErrorBoundaryCrash } from "../905/751457";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { AutoLayout, Spacer } from "../905/470281";
import { V } from "../905/355181";
import { TextWithTruncation } from "../905/984674";
import { UpgradeAction } from "../905/370443";
import { TrackedAnchor, TrackedDiv, TrackingProvider } from "../figma_app/831799";
import { setupActiveRatesTransform, BillingPriceSource } from "../905/84777";
import { ProductAccessTypeEnum } from "../905/513035";
import { designSet } from "../905/332483";
import { renderRequestErrorInterstitial } from "../905/3140";
import { getUserCurrency, CurrencyFormatter } from "../figma_app/514043";
import { ProductTierEnum, RenewalTermEnum } from "../905/712921";
import { N as _$$N } from "../905/809096";
import { ModalView } from "../figma_app/918700";
var $$n = c;
var $$$$I1 = (e => (e[e.SMALL = 0] = "SMALL", e[e.LARGE = 1] = "LARGE", e))($$$$I1 || {});
function z({
  headerText: e,
  descriptionText: l,
  imgSrc: i,
  loadingColor: r
}) {
  return jsxs(AutoLayout, {
    direction: "vertical",
    verticalAlignItems: "start",
    strokeColor: "default",
    strokeWidth: 1,
    cornerRadius: 6,
    spacing: 0,
    height: "fill-parent",
    children: [jsx(Suspense, {
      fallback: jsx("div", {
        className: "fullscreen_help_upsells_modal_base--cardPlaceholder--j3U6P",
        style: {
          backgroundColor: r
        }
      }),
      children: jsx("img", {
        alt: e,
        className: "fullscreen_help_upsells_modal_base--cardImage--HNMiP",
        src: i,
        width: 189,
        height: 146
      })
    }), jsxs("div", {
      className: cssBuilderInstance.p12.pl10.pr10.flex.flexColumn.gap2.$,
      children: [jsx(TextWithTruncation, {
        fontSize: 13,
        fontWeight: "medium",
        color: "default",
        children: e
      }), jsx("div", {
        className: cssBuilderInstance.minH32.$,
        children: jsx(TextWithTruncation, {
          fontSize: 11,
          color: "secondary",
          children: l
        })
      })]
    })]
  });
}
function C({
  isClickable: e,
  url: l,
  ...i
}) {
  return e && void 0 !== l ? jsx(TrackedAnchor, {
    href: l,
    target: "_blank",
    className: "fullscreen_help_upsells_modal_base--clickableCard--056mH",
    trackingProperties: {
      card: i.headerText
    },
    children: jsx(z, {
      ...i
    })
  }) : jsx(z, {
    ...i
  });
}
function E() {
  let e = getUserCurrency();
  let l = designSet.exclude([ProductAccessTypeEnum.DEV_MODE]).dict(l => ({
    currency: e,
    billableProductKey: l,
    billableProductVariantKey: null,
    tier: ProductTierEnum.PRO,
    renewalTerm: RenewalTermEnum.YEAR,
    unit: RenewalTermEnum.MONTH
  }));
  let i = setupActiveRatesTransform(l, BillingPriceSource.UPSELL_MODALS);
  let [a] = handleSuspenseRetainRelease(i);
  if (null === a.data) throw Error("Price data is null");
  let r = new CurrencyFormatter(e);
  let s = a.data[ProductAccessTypeEnum.DESIGN].amount;
  let c = a.data[ProductAccessTypeEnum.FIGJAM].amount;
  return jsxs(AutoLayout, {
    padding: 14,
    direction: "vertical",
    verticalAlignItems: "end",
    children: [jsxs("div", {
      className: "fullscreen_help_upsells_modal_base--priceContainer--XWuz1",
      children: [jsxs("div", {
        className: cssBuilderInstance.wHalf.flex.flexColumn.gap8.$,
        "data-testid": "fullscreen_help_upsells_modal_pricing_text_design",
        children: [jsx(TextWithTruncation, {
          color: "design",
          fontSize: 11,
          fontWeight: "semi-bold",
          children: renderI18nText("help_widget.collective_upsells.fullscreen.price_title.figma_design")
        }), jsx(TextWithTruncation, {
          fontWeight: "semi-bold",
          fontSize: 18,
          children: r.formatMoney(s)
        })]
      }), jsx("div", {
        className: "fullscreen_help_upsells_modal_base--priceContainerDivider--zsPMB"
      }), jsxs("div", {
        className: cssBuilderInstance.wHalf.flex.flexColumn.gap8.$,
        "data-testid": "fullscreen_help_upsells_modal_pricing_text_figjam",
        children: [jsx(TextWithTruncation, {
          color: "figjam",
          fontSize: 11,
          fontWeight: "semi-bold",
          children: renderI18nText("help_widget.collective_upsells.fullscreen.price_title.figjam")
        }), jsx(TextWithTruncation, {
          fontWeight: "semi-bold",
          fontSize: 18,
          children: r.formatMoney(c)
        })]
      })]
    }), jsx("div", {
      className: cssBuilderInstance.p4.pt0.$,
      children: jsx(TextWithTruncation, {
        color: "secondary",
        fontSize: 11,
        children: renderI18nText("help_widget.collective_upsells.fullscreen.price.disclaimer.seat_rename")
      })
    })]
  });
}
export function $$N0({
  panelTabs: e,
  panelTitle: l,
  modalProps: i,
  contentTitle: c,
  contents: d,
  ctaPrimaryText: h,
  clickPrimaryBtn: x,
  secondaryBtn: y,
  dismissModal: w,
  showPricing: j = !0,
  panelTitleSize: T = 0,
  cardsClickable: I
}) {
  let [z, N] = useState(e[0].id);
  let M = useDispatch();
  let W = 1 === T ? jsx("div", {
    className: cssBuilderInstance.p16.pt14.pb36.$,
    children: jsx(TextWithTruncation, {
      fontSize: 18,
      fontWeight: "semi-bold",
      children: l
    })
  }) : jsx("div", {
    className: cssBuilderInstance.p16.pt14.pb4.$,
    children: jsx(TextWithTruncation, {
      fontSize: 13,
      color: "secondary",
      children: l
    })
  });
  let F = e.map(e => jsx(TrackedDiv, {
    role: "button",
    tabIndex: 0,
    className: $$n()("fullscreen_help_upsells_modal_base--panelTabs--WjAUp", z === e.id && "fullscreen_help_upsells_modal_base--panelTabsActive--cM4NL"),
    onClick: () => {
      N(e.id);
    },
    trackingProperties: {
      tab: e.id,
      prevTab: z
    },
    children: jsx(TextWithTruncation, {
      fontSize: 13,
      children: e.text
    })
  }, e.id));
  let P = d[z].map((e, l) => jsx(C, {
    isClickable: I,
    ...e
  }, z + e.headerText + l));
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "FullscreenHelpUpsellsModalBase",
    fallback: jsx(renderRequestErrorInterstitial, {}),
    team: ServiceCategories.MONETIZATION_UPGRADES,
    children: jsx(Suspense, {
      fallback: jsx(_$$N, {
        hiddenTitle: l || "",
        estimatedWidth: 900,
        estimatedHeight: 600
      }),
      children: jsx(TrackingProvider, {
        name: "FullscreenHelpUpsellsModalBase",
        children: jsx(ModalView, {
          size: 900,
          className: "fullscreen_help_upsells_modal_base--largeModal--8j2D0",
          ...i,
          hide: w,
          children: jsx(_$$P.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            transition: {
              duration: .5
            },
            children: jsxs(AutoLayout, {
              verticalAlignItems: "start",
              height: 604,
              spacing: 0,
              children: [jsxs(AutoLayout, {
                direction: "vertical",
                width: 230,
                strokeWidth: {
                  right: 1
                },
                padding: 0,
                spacing: 0,
                strokeColor: "default",
                height: "fill-parent",
                verticalAlignItems: "start",
                children: [jsx(Spacer, {
                  minSize: 16
                }), jsxs(AutoLayout, {
                  direction: "vertical",
                  height: "fill-parent",
                  spacing: 0,
                  children: [l && W, F]
                }), j && jsx(E, {})]
              }), jsxs(AutoLayout, {
                direction: "vertical",
                height: "fill-parent",
                spacing: 0,
                children: [jsxs("div", {
                  className: cssBuilderInstance.pl32.pt24.pb20.$,
                  children: [c && jsx(TextWithTruncation, {
                    fontSize: 20,
                    fontWeight: "semi-bold",
                    children: c
                  }), jsx(ModalCloseButton, {
                    customStyle: {
                      right: "8px",
                      top: "8px"
                    },
                    dispatch: M,
                    onClose: w,
                    trackingProperties: {
                      trackingDescriptor: UpgradeAction.CLOSE
                    }
                  })]
                }), jsx("div", {
                  className: cssBuilderInstance.wFull.hFull.overflowAuto.$,
                  children: jsx("div", {
                    className: cssBuilderInstance.pl32.pb24.$,
                    children: jsx(AutoLayout, {
                      spacing: 16,
                      verticalAlignItems: "start",
                      direction: "vertical",
                      children: jsx("div", {
                        className: "fullscreen_help_upsells_modal_base--cardGrid--Yss71",
                        children: P
                      })
                    })
                  })
                }), jsxs(AutoLayout, {
                  height: 64,
                  padding: 16,
                  horizontalAlignItems: "end",
                  strokeColor: "default",
                  strokeWidth: {
                    top: 1
                  },
                  children: [y, jsx(V, {
                    variant: "primary",
                    onClick: x,
                    children: h
                  })]
                })]
              })]
            })
          })
        })
      })
    })
  });
}
export const n = $$N0;
export const I = $$$$I1;