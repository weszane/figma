import { jsxs, jsx } from "react/jsx-runtime";
import { isNotNullish } from "../figma_app/95419";
import { Y } from "../905/185567";
import { xk } from "@stylexjs/stylex";
import o from "classnames";
import { t as _$$t } from "../905/303541";
import { cz, i8 } from "../905/14017";
import { Lz } from "../905/497882";
import { mk } from "../figma_app/777551";
import { j4 } from "../figma_app/599979";
import { FPublicationStatusType } from "../figma_app/191312";
var l = o;
export function $$g0({
  size: e = "small",
  publishedResourceContent: t,
  iconField: i,
  nameField: o,
  authorField: g,
  thumbnailStyle: _,
  hideLikeAndUsage: A = !1
}) {
  let y = i && Lz(i, void 0)?.url;
  let b = o && Lz(o, void 0);
  let v = g && Lz(g, void 0);
  let I = (() => {
    if (v) return j4(v)?.name;
  })();
  let E = jsxs("div", {
    className: l()("preview_row--container--it0ul", {
      "preview_row--large--cJ-2P": "large" === e
    }),
    children: [jsx("div", {
      className: "preview_row--thumbnailContainer--IVn4Y",
      children: y ? jsx("img", {
        ...xk(f.thumbnailImage, _),
        src: y,
        loading: "lazy",
        alt: _$$t("community.publishing.thumbnail_image"),
        draggable: !1
      }) : jsx("div", {
        className: "preview_row--thumbnailPlaceholder--jx9c-",
        "aria-hidden": !0,
        children: jsx(Y, {
          className: "preview_row--communityIcon--T-Xcl"
        })
      })
    }), jsx("div", {
      className: "preview_row--footer--O1bzy",
      children: jsxs("div", {
        className: "preview_row--nameAndAuthor--AZ3Uv",
        children: [jsx("div", {
          className: "preview_row--nameContainer--Txyt6 preview_row--baseNameContainer--8zjr8",
          children: b ? jsx("span", {
            children: b
          }) : jsx("div", {
            className: "preview_row--nameShimmer--rsDGF file_load--shimmer--0w-rr",
            "aria-hidden": !0
          })
        }), "large" === e && !A && isNotNullish(t) && "publishing_status" in t && t.publishing_status === FPublicationStatusType.APPROVED_PUBLIC && jsxs("div", {
          className: "preview_row--likeAndUsage--UgdTt",
          children: [jsx(cz, {
            inPluginRow: !0,
            likeCount: t && "like_count" in t ? t.like_count : 0
          }), jsx(i8, {
            inPluginRow: !0,
            usageCount: t && "like_count" in t ? mk(t) : 0
          })]
        }), jsx("div", {
          className: "preview_row--authorNameContainer--rD8Y7 preview_row--baseNameContainer--8zjr8",
          children: I ? jsx("span", {
            children: _$$t("community.publishing.by_author", {
              authorName: I
            })
          }) : jsx("div", {
            className: "preview_row--authorNameShimmer--Jut16 file_load--shimmer--0w-rr",
            "aria-hidden": !0
          })
        })]
      })
    })]
  });
  return "large" === e ? jsxs("div", {
    className: "preview_row--trailingSkeletonContainer--rF74v",
    children: [jsx("div", {
      className: "preview_row--trailingSkeletonBackmost--pGvtJ"
    }), jsx("div", {
      className: "preview_row--trailingSkeleton--MFexN"
    }), E]
  }) : E;
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
export const T = $$g0;