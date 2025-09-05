import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { Wk } from "../figma_app/272243";
import { g as _$$g } from "../905/125190";
import { J } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { buildUploadUrl } from "../figma_app/169182";
import { e6 } from "../figma_app/617427";
import { Ph, o as _$$o } from "../905/160095";
import { tx } from "../905/303541";
import { B } from "../905/261906";
import { WX } from "../figma_app/482142";
import { fu } from "../figma_app/831799";
import { ud } from "../905/513035";
import { TN } from "../figma_app/831101";
import { Ju } from "../905/102752";
import { J as _$$J } from "../905/273120";
let $$I1 = Ju($$A0);
let S = buildUploadUrl("a2151b55cc069625817d2ed13b404e0dd2417f1c");
let v = "https://help.figma.com/hc/articles/31722591905559-Figma-Make-FAQs";
export function $$A0(e) {
  let t = useDispatch();
  let r = hS(e);
  let {
    hideCTA,
    team,
    onClose
  } = e;
  let A = !!getFeatureFlags().bake_starter_rollout;
  let x = A ? tx("figmake.paywall.title_rollout") : tx("figmake.paywall.title");
  let N = A ? tx("figmake.paywall.subtitle_rollout") : tx("figmake.paywall.feature.available_on_full_seats");
  let C = A ? tx("figmake.paywall.footer_credits_rollout_learn_more", {
    learnMoreLink: jsx(Ph, {
      href: v,
      newTab: !0,
      children: tx("figmake.paywall.learn_more")
    })
  }) : tx("figmake.paywall.footer_credits");
  let w = [tx("figmake.paywall.feature.prototypes"), tx("figmake.paywall.feature.prompt_design"), tx("figmake.paywall.feature.ai_outputs")];
  return jsx(bL, {
    manager: r,
    width: 408,
    children: jsx(Wk, {
      className: "x15fnm84 xwxc41k x78zum5 xdt5ytf x1665zp3 x87ps6o",
      children: jsx(fu, {
        name: "figmake_paywall_modal",
        properties: {
          teamId: team.id
        },
        children: jsxs(J, {
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
                type: ud.EXPERT,
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
                  entryPoint: TN.FIGMAKE_MODAL
                }));
                onClose();
              },
              className: "x78zum5 xl56j7k x6s0dn4 x1vqgdyp x19y5rnk x4z9k3i x1o2sk6j xu5wzci x1tk3asg xk50ysn",
              children: tx("figmake.paywall.upgrade_button")
            }), jsx(_$$o, {
              href: v,
              newTab: !0,
              className: "x78zum5 xl56j7k x6s0dn4 x1vqgdyp x19y5rnk x4z9k3i x1o2sk6j xv2f06h xt0e3qv x1akne3o x1oo3vh0",
              children: tx("figmake.paywall.learn_more")
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