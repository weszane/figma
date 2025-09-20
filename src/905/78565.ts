import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { IconButton } from "../905/443068";
import { A as _$$A } from "../905/251970";
import { useAtomWithSubscription } from "../figma_app/27355";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { setLibraryUpdatesBannerDismissed } from "../905/879323";
import { useSubscribedAssets, AssetFilterMode } from "../figma_app/646357";
import { cb, WE } from "../figma_app/745458";
import { KindEnum } from "../905/129884";
import { r6 } from "../905/542608";
import { se } from "../figma_app/435826";
import { A as _$$A2 } from "../5724/965092";
export function $$A0(e) {
  let t = useDispatch();
  let i = useAtomWithSubscription(cb);
  let A = useAtomWithSubscription(WE);
  let y = useSubscribedAssets(AssetFilterMode.ALL);
  let {
    updateAll
  } = se(y, void 0, r6.FIGJAM_BROWSE);
  return e.dismissable && A || 0 === i ? null : jsxs("div", {
    className: "library_updates_banner--libraryUpdatesBanner--XGCv6",
    children: [jsxs("div", {
      className: "library_updates_banner--numComponentUpdates--7UC7M",
      children: [jsx(SvgComponent, {
        className: "library_updates_banner--infoIcon--cOn3J",
        svg: _$$A2
      }), e.formatBannerText(i)]
    }), jsxs("div", {
      className: e.dismissable ? "library_updates_banner--libraryUpdatesBannerActionsDismissable--mphct library_updates_banner--libraryUpdatesBannerActions--hcwie" : "library_updates_banner--libraryUpdatesBannerActions--hcwie",
      children: [jsx(Button, {
        onClick: updateAll,
        variant: "secondary",
        children: e.buttonText
      }), e.dismissable && jsx("span", {
        className: "library_updates_banner--libraryUpdatesBannerActionsXIcon--TbBLj",
        children: jsx(IconButton, {
          onClick: () => {
            t(setLibraryUpdatesBannerDismissed({
              libraryUpdatesBannerDismissed: !0
            }));
          },
          "aria-label": getI18nString("whiteboard.inserts.dismiss_updates"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("whiteboard.inserts.dismiss_updates")
          },
          children: jsx(_$$A, {})
        })
      })]
    })]
  });
}
export const W = $$A0;