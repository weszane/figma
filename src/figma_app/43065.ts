import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogCustomContents } from "../figma_app/272243";
import { g as _$$g } from "../905/125190";
import { setupThemeContext } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { buildUploadUrl } from "../figma_app/169182";
import { e6 } from "../figma_app/617427";
import { Ph, o as _$$o } from "../905/160095";
import { renderI18nText } from "../905/303541";
import { B } from "../905/261906";
import { WX } from "../figma_app/482142";
import { TrackingProvider } from "../figma_app/831799";
import { ProductAccessTypeEnum } from "../905/513035";
import { UpsellSourceType } from "../figma_app/831101";
import { registerModal } from "../905/102752";
import { J as _$$J } from "../905/273120";
let $$I1 = registerModal($$A0);
let S = buildUploadUrl("a2151b55cc069625817d2ed13b404e0dd2417f1c");
let v = "https://help.figma.com/hc/articles/31722591905559-Figma-Make-FAQs";
export function $$A0(e) {
  let t = useDispatch();
  let r = useModalManager(e);
  let {
    hideCTA,
    team,
    onClose
  } = e;
  let A = !!getFeatureFlags().bake_starter_rollout;
  let x = A ? renderI18nText("figmake.paywall.title_rollout") : renderI18nText("figmake.paywall.title");
  let N = A ? renderI18nText("figmake.paywall.subtitle_rollout") : renderI18nText("figmake.paywall.feature.available_on_full_seats");
  let C = A ? renderI18nText("figmake.paywall.footer_credits_rollout_learn_more", {
    learnMoreLink: jsx(Ph, {
      href: v,
      newTab: !0,
      children: renderI18nText("figmake.paywall.learn_more")
    })
  }) : renderI18nText("figmake.paywall.footer_credits");
  let w = [renderI18nText("figmake.paywall.feature.prototypes"), renderI18nText("figmake.paywall.feature.prompt_design"), renderI18nText("figmake.paywall.feature.ai_outputs")];
  return jsx(ModalRootComponent, {
    manager: r,
    width: 408,
    children: jsx(DialogCustomContents, {
      className: "x15fnm84 xwxc41k x78zum5 xdt5ytf x1665zp3 x87ps6o",
      children: jsx(TrackingProvider, {
        name: "figmake_paywall_modal",
        properties: {
          teamId: team.id
        },
        children: jsxs(setupThemeContext, {
          brand: "bake-filebrowser",
          children: [jsx("div", {
            className: "xh8yej3 x1n2onr6 xamitd3",
            children: jsx(_$$J, {
              className: "x5yr21d xh8yej3 xl1xv1r x8ozjh4 x47corl x9f619 x1ci220x x7xtdkp",
              src: S
            })
          }), jsxs("div", {
            className: "x78zum5 xdt5ytf x17d4w8g",
            children: [jsx("p", {
              className: "x122x9cr xwsyq91 xk50ysn xcgk4ki",
              children: x
            }), jsxs("div", {
              className: "x4z9k3i xo1l8bm x1o2sk6j x78zum5",
              children: [!A && jsx(B, {
                type: ProductAccessTypeEnum.EXPERT,
                size: "24.small",
                removeBackgroundColor: !0
              }), jsx("div", {
                children: N
              })]
            }), w.map((e, t) => jsxs("div", {
              className: "x4z9k3i xo1l8bm x1o2sk6j x78zum5",
              children: [jsx(_$$g, {
                style: {
                  "--color-icon": "var(--color-icon-brand)",
                  minWidth: "24px"
                }
              }), jsx("div", {
                children: e
              })]
            }, t))]
          }), hideCTA || A ? null : jsxs("div", {
            className: "x78zum5 xdt5ytf x167g77z",
            children: [jsx(e6, {
              onClick: () => {
                t(WX({
                  teamId: team.id,
                  openInNewTab: !0,
                  entryPoint: UpsellSourceType.FIGMAKE_MODAL
                }));
                onClose();
              },
              className: "x78zum5 xl56j7k x6s0dn4 x1vqgdyp x19y5rnk x4z9k3i x1o2sk6j xu5wzci x1tk3asg xk50ysn",
              children: renderI18nText("figmake.paywall.upgrade_button")
            }), jsx(_$$o, {
              href: v,
              newTab: !0,
              className: "x78zum5 xl56j7k x6s0dn4 x1vqgdyp x19y5rnk x4z9k3i x1o2sk6j xv2f06h xt0e3qv x1akne3o x1oo3vh0",
              children: renderI18nText("figmake.paywall.learn_more")
            })]
          }), jsx("div", {
            className: "x1j6dyjg x1d3mw78 x1n0bwc9 xamitd3 x2b8uid x1yuz8eb xt0e3qv",
            children: jsx("p", {
              children: C
            })
          })]
        })
      })
    })
  });
}
export const c = $$A0;
export const i = $$I1;