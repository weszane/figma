import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Gw, FB } from "../vendor/149334";
import { buildUploadUrl } from "../figma_app/169182";
import { Kf, Jk } from "../figma_app/99826";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { IT, M4 } from "../905/713695";
import { $ } from "../905/479092";
import { A } from "../5724/75936";
let p = "link_favicon--favicon--jk134";
let h = buildUploadUrl("aae0db2814117595e45cc509d52e79e7cc31333c");
let m = buildUploadUrl("ae3807b6d650b52da20879078b85a0df23ee056a");
export function $$g1({
  url: e
}) {
  let [t] = IT($$f(e));
  let [r, s] = useState(null);
  if (useEffect(() => {
    "loaded" === t.status && t.data && s(URL.createObjectURL(new Blob([new Uint8Array(t.data)], {
      type: "image/png"
    })));
  }, [t.data, t.status]), e && "github" === Gw(e)) return jsx($$E0, {
    width: 16,
    height: 16
  });
  let u = e && FB(e);
  return u?.toLowerCase() === "jira.com" || u?.toLowerCase() === "atlassian.net" ? jsx("img", {
    alt: getI18nString("design_systems.component_panel.favicon_alt", {
      hostName: Kf(e)
    }),
    className: p,
    src: h
  }) : u?.toLowerCase() === "chromatic.com" ? jsx("img", {
    alt: getI18nString("design_systems.component_panel.favicon_alt", {
      hostName: Kf(e)
    }),
    className: p,
    src: m
  }) : "loading" === t.status ? jsx("div", {
    className: "link_favicon--faviconLoadingPlaceholder--uJ-Kf"
  }) : r ? jsx("img", {
    alt: getI18nString("design_systems.component_panel.favicon_alt", {
      hostName: Kf(e)
    }),
    className: p,
    src: r
  }) : jsx(SvgComponent, {
    svg: A,
    className: "link_favicon--faviconPlaceholder--CFVEV"
  });
}
let $$f = M4.Query({
  fetch: async e => e ? (await $.getFaviconForUrlProxy({
    url: Jk(e)
  })).data.meta ?? null : null
});
export function $$E0({
  width: e = 16,
  height: t = 16
}) {
  return jsx("svg", {
    width: e,
    height: t,
    viewBox: "0 0 16 16",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.97616 0.163086C3.56555 0.163086 0 3.75492 0 8.19851C0 11.7505 2.28457 14.7572 5.45388 15.8214C5.85012 15.9014 5.99527 15.6485 5.99527 15.4357C5.99527 15.2495 5.9822 14.6109 5.9822 13.9456C3.76343 14.4246 3.30139 12.9877 3.30139 12.9877C2.94482 12.0565 2.41649 11.8171 2.41649 11.8171C1.69029 11.3249 2.46939 11.3249 2.46939 11.3249C3.27494 11.3781 3.69763 12.1497 3.69763 12.1497C4.41061 13.3735 5.55951 13.0277 6.02171 12.8148C6.08767 12.296 6.2991 11.9368 6.52359 11.7373C4.75396 11.551 2.89208 10.8592 2.89208 7.77272C2.89208 6.89468 3.20882 6.17631 3.71069 5.61762C3.63151 5.41811 3.35412 4.59313 3.79004 3.48896C3.79004 3.48896 4.46351 3.27607 5.98204 4.31378C6.63218 4.13789 7.30265 4.04841 7.97616 4.04766C8.64963 4.04766 9.33616 4.14088 9.97012 4.31378C11.4888 3.27607 12.1623 3.48896 12.1623 3.48896C12.5982 4.59313 12.3207 5.41811 12.2415 5.61762C12.7566 6.17631 13.0602 6.89468 13.0602 7.77272C13.0602 10.8592 11.1984 11.5376 9.41551 11.7373C9.70612 11.99 9.9569 12.4689 9.9569 13.2272C9.9569 14.3048 9.94384 15.1696 9.94384 15.4356C9.94384 15.6485 10.0891 15.9014 10.4852 15.8215C13.6545 14.757 15.9391 11.7505 15.9391 8.19851C15.9522 3.75492 12.3736 0.163086 7.97616 0.163086Z",
      fill: "#24292f",
      style: {
        fill: "var(--color-icon)"
      }
    })
  });
}
export const f = $$E0;
export const v = $$g1;