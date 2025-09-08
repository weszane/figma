import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { Wk } from "../figma_app/272243";
import { g as _$$g } from "../905/125190";
import { J } from "../905/614223";
import { buildUploadUrl } from "../figma_app/169182";
import { e6 } from "../figma_app/617427";
import { o as _$$o } from "../905/160095";
import { renderI18nText } from "../905/303541";
import { WX } from "../figma_app/482142";
import { fu } from "../figma_app/831799";
import { UpsellSourceType } from "../figma_app/831101";
import { registerModal } from "../905/102752";
import { J as _$$J } from "../905/273120";
let $$y0 = registerModal($$T1);
let b = buildUploadUrl("6d9d43af72441d7be4344d8d679d852139ebfaf7");
export function $$T1(e) {
  let t = useDispatch();
  let r = hS(e);
  let {
    hideCTA,
    team,
    onClose
  } = e;
  let T = [renderI18nText("sites.starter_modal.feature.responsive_breakpoints"), renderI18nText("sites.starter_modal.feature.templates"), renderI18nText("sites.starter_modal.feature.preset_interactions", {
    moreLink: renderI18nText("sites.starter_modal.feature.custom.learn_more_link")
  })];
  return jsx(bL, {
    manager: r,
    width: 408,
    children: jsx(Wk, {
      className: "x15fnm84 xwxc41k x78zum5 xdt5ytf x1665zp3 x87ps6o",
      children: jsx(fu, {
        name: "sites_paywall_modal",
        children: jsxs(J, {
          brand: "seascape",
          children: [jsx("div", {
            className: "x1r1mewj xyajsyi x19y5rnk",
            children: jsx(_$$J, {
              className: "x5yr21d xh8yej3 xl1xv1r x8ozjh4 x19y5rnk x47corl",
              src: b
            })
          }), jsxs("div", {
            className: "x78zum5 xdt5ytf x17d4w8g",
            children: [jsx("p", {
              className: "x122x9cr xwsyq91 xk50ysn xcgk4ki",
              children: renderI18nText("sites.starter_modal.title")
            }), T.map((e, t) => jsxs("div", {
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
          }), hideCTA ? null : jsxs("div", {
            className: "x78zum5 xdt5ytf x167g77z",
            children: [jsx(e6, {
              onClick: () => {
                t(WX({
                  teamId: team.id,
                  openInNewTab: !0,
                  entryPoint: UpsellSourceType.SITES_MODAL
                }));
                onClose();
              },
              className: "x78zum5 xl56j7k x6s0dn4 x1vqgdyp x19y5rnk x4z9k3i x1o2sk6j xu5wzci x1tk3asg xk50ysn",
              children: renderI18nText("sites.starter_modal.upgrade")
            }), jsx(_$$o, {
              href: "https://help.figma.com/hc/articles/31230436657815",
              newTab: !0,
              className: "x78zum5 xl56j7k x6s0dn4 x1vqgdyp x19y5rnk x4z9k3i x1o2sk6j xv2f06h xt0e3qv x1akne3o",
              children: renderI18nText("sites.starter_modal.learn_more")
            })]
          }), jsx("div", {
            className: "x1j6dyjg x1d3mw78 x1n0bwc9 xamitd3 x2b8uid xafpxmx x1yuz8eb xwya9rg",
            children: jsx("p", {
              children: renderI18nText("sites.starter_modal.footer")
            })
          })]
        })
      })
    })
  });
}
export const M = $$y0;
export const W = $$T1;