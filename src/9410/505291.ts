import { jsx, jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { A } from "../905/251970";
import s from "classnames";
import { h8 } from "../figma_app/478006";
import { WithTrackedIconButton } from "../figma_app/617427";
import { getI18nString } from "../905/303541";
import { TrackingProvider } from "../figma_app/831799";
var o = s;
let $$$$p0 = memo(function (e) {
  let {
    leftContent,
    content,
    rightContent,
    trackingContext = "DLT Banner",
    onClose,
    isFloatingBanner,
    shouldHide
  } = e;
  h8({
    isFigjamDLTBanner: !0,
    bannerType: e.bannerType
  });
  return jsx(TrackingProvider, {
    name: trackingContext,
    children: jsxs("div", {
      className: o()(isFloatingBanner ? "dlt_banner--floatingBanner--Gv-Xd" : "dlt_banner--banner--nGI-J", {
        "dlt_banner--hide--MO-Ze": shouldHide
      }),
      children: [jsx(h, {
        leftContent
      }), jsx(m, {
        content
      }), rightContent, rightContent && onClose && jsx("div", {
        className: "x1xc55vz"
      }), onClose ? jsx(WithTrackedIconButton, {
        "aria-label": getI18nString("common.close"),
        onClick: onClose,
        recordingKey: "dltBannerCloseButton",
        htmlAttributes: {
          "data-testid": "dltBannerCloseButton"
        },
        trackingEventName: "dlt_banner_closed",
        children: jsx(A, {})
      }) : null]
    })
  });
});
let h = memo(function (e) {
  let {
    icon,
    text
  } = e.leftContent ?? {};
  let n = icon && jsx("div", {
    className: "dlt_banner--icon--gtxyL",
    children: icon
  });
  let a = text && jsx("b", {
    children: text
  });
  return jsxs("div", {
    className: o()("dlt_banner--leftContent--5Yk4A text--fontPos12--YsUAh text--_fontBase--QdLsd", text && icon ? "dlt_banner--leftContentIconAndText--QjRmB" : text ? "dlt_banner--leftContentOnlyText--4VC-I" : icon ? "dlt_banner--leftContentOnlyIcon--Nb45Y" : "dlt_banner--leftContentEmpty--dXeoN"),
    children: [n, a]
  });
});
let m = memo(function (e) {
  let {
    content
  } = e;
  return jsx("div", {
    className: "dlt_banner--mainContent--eTkSu text--fontPos12--YsUAh text--_fontBase--QdLsd",
    children: content
  });
});
export const p = $$$$p0;