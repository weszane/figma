import { jsxs, jsx } from "react/jsx-runtime";
import { Y } from "../905/185567";
import { props } from "@stylexjs/stylex";
import s from "classnames";
import { getI18nString } from "../905/303541";
import { LikeCountDisplay, UsageCountDisplay } from "../905/14017";
import { Q } from "../905/978641";
import { getFieldValueOrDefault } from "../905/497882";
import { getResourceUserCount } from "../figma_app/777551";
import { getDebugWorkspaceInfo } from "../figma_app/599979";
var o = s;
let h = "preview_tile--nonOverflowingText---rDD1";
export function $$g0({
  size: e = "small",
  hideLikeAndUsage: t = !1,
  publishedResourceContent: i,
  carouselMediaField: s,
  nameField: g,
  authorField: _,
  showThumbnailWithLetterbox: A,
  thumbnailStyle: y
}) {
  let b = getFieldValueOrDefault(s, void 0)?.thumbnailMedium;
  let v = g && getFieldValueOrDefault(g, void 0);
  let I = _ && getFieldValueOrDefault(_, void 0);
  let E = I ? getDebugWorkspaceInfo(I)?.name : i && "publishedByUser" in i ? i.publishedByUser?.name : void 0;
  return jsxs("div", {
    className: o()("preview_tile--container--ecHQW", {
      "preview_tile--large--mdpJz": "large" === e
    }),
    children: [jsx("div", {
      className: "preview_tile--thumbnailContainer--s2Ctk",
      children: b ? A ? jsx(Q, {
        containerStyle: y,
        src: b.url,
        loading: "lazy",
        alt: getI18nString("community.publishing.thumbnail_image"),
        draggable: !1,
        crossOrigin: "use-credentials"
      }) : jsx("img", {
        ...props(f.thumbnailImage, y),
        src: b.url,
        loading: "lazy",
        alt: getI18nString("community.publishing.thumbnail_image"),
        draggable: !1
      }) : jsx("div", {
        className: "preview_tile--thumbnailPlaceholder--QJ2Qs",
        "aria-hidden": !0,
        children: jsx(Y, {
          className: "preview_tile--communityIcon--dG47Y"
        })
      })
    }), jsxs("div", {
      className: "preview_tile--footer--28CdT",
      children: [jsxs("div", {
        className: "preview_tile--nameAndAuthor--qVCX1",
        children: [jsx("div", {
          className: "preview_tile--nameContainer--bQ8Re preview_tile--baseNameContainer--QY6ZW",
          children: v ? jsx("span", {
            className: h,
            children: v
          }) : jsx("div", {
            className: "preview_tile--nameShimmer--42h1C file_load--shimmer--0w-rr",
            "aria-hidden": !0
          })
        }), jsx("div", {
          className: "preview_tile--authorNameContainer--zbAxS preview_tile--baseNameContainer--QY6ZW",
          children: E ? jsx("span", {
            className: h,
            children: getI18nString("community.publishing.by_author", {
              authorName: E
            })
          }) : jsx("div", {
            className: "preview_tile--authorNameShimmer--Pk32E file_load--shimmer--0w-rr",
            "aria-hidden": !0
          })
        })]
      }), "large" === e && !t && jsxs("div", {
        className: "preview_tile--likeAndUsage--T-Yc4",
        children: [jsx(LikeCountDisplay, {
          likeCount: i && "like_count" in i ? i.like_count : 0
        }), jsx(UsageCountDisplay, {
          usageCount: i && "like_count" in i ? getResourceUserCount(i) : 0
        })]
      })]
    })]
  });
}
let f = {
  thumbnailImage: {
    display: "x1lliihq",
    width: "xh8yej3",
    height: "x5yr21d",
    objectFit: "xl1xv1r",
    $$css: !0
  }
};
export const x = $$g0;