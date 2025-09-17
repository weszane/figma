import { jsxs, jsx } from "react/jsx-runtime";
import { useId, useState, useRef } from "react";
import { ButtonWide } from "../905/521428";
import { setupThemeContext } from "../905/614223";
import o from "classnames";
import { M as _$$M } from "../figma_app/749682";
import { getI18nString, renderI18nText } from "../905/303541";
import { H8 } from "../905/590952";
import { TextWithTruncation } from "../905/984674";
import { Mr } from "../figma_app/795938";
import { dY } from "../905/838765";
import { Ij, OV } from "../905/988303";
var l = o;
export function $$f0(e) {
  let t = e.name || getI18nString("fullscreen.fullscreen_view_selector.untitled");
  let {
    author,
    acceptedPublishers,
    isCustomThumbnailSet,
    thumbnail,
    enableUpload,
    onUpload,
    uploadError,
    enableRestore,
    onRestore,
    metricFooter,
    tileOverlayResource
  } = e;
  let S = useId();
  let [w, C] = useState(isCustomThumbnailSet);
  let {
    dark,
    update
  } = function (e = 32, t = .5) {
    let [i, n] = useState(!1);
    return {
      dark: i,
      update: i => n(function (e, t, i) {
        if (!e) return !1;
        let n = document.createElement("canvas");
        n.width = e.width;
        n.height = e.height;
        let r = n.getContext("2d");
        if (!r) return !1;
        r.fillStyle = "white";
        r.fillRect(0, 0, e.width, e.height);
        r.drawImage(e, 0, 0, e.width, e.height);
        let {
          data
        } = r.getImageData(0, 0, e.width, e.height);
        let s = 0;
        let o = 0;
        for (let e = 0; e < data.length; e += 4 * t) {
          s += function (e, t) {
            let i = Math.pow(e[t] / 255, 2.2);
            let n = Math.pow(e[t + 1] / 255, 2.2);
            let r = Math.pow(e[t + 2] / 255, 2.2);
            let a = e[t + 3] / 255;
            return (.2126 * i + .7152 * n + .0722 * r) * a + (1 - a);
          }(data, e);
          o++;
        }
        return s / o <= i;
      }(i, e, t))
    };
  }();
  let R = !enableRestore && enableUpload;
  let N = R && isCustomThumbnailSet;
  let P = useRef(null);
  let [O, D] = _$$M();
  let [L, F] = useState(!1);
  async function M() {
    let e = P.current;
    e && (await onUpload?.(e));
  }
  return jsxs("div", {
    className: "publish_file_resource_modal_card--publishFileResourceModalCardContainer--lUd-Z",
    children: [jsxs("div", {
      ref: O,
      className: l()("publish_file_resource_modal_card--publishFileResourceModalCardThumbnailContainer--zbspR", {
        "publish_file_resource_modal_card--publishFileResourceModalCardThumbnailContainerError--NEM0q publish_modal--previewImageContainerError--I-s2M": uploadError
      }),
      "aria-labelledby": S,
      children: [tileOverlayResource && jsx(Mr, {
        resource: tileOverlayResource
      }), jsx(setupThemeContext, {
        mode: dark ? "dark" : "light",
        children: jsx("img", {
          className: l()("publish_file_resource_modal_card--publishFileResourceModalCardThumbnail--6dVq9", {
            "publish_file_resource_modal_card--publishFileResourceModalCardThumbnailUnset--8CMjQ": !w
          }),
          src: thumbnail?.url || "",
          alt: t,
          onLoad: function (e) {
            C(isCustomThumbnailSet);
            update(e.currentTarget);
          },
          crossOrigin: "anonymous"
        })
      }), (enableRestore || R) && jsx(setupThemeContext, {
        mode: dark ? "dark" : "light",
        children: jsxs("div", {
          className: l()("publish_file_resource_modal_card--publishFileResourceModalCardThumbnailCTA--NJyB0", {
            "publish_file_resource_modal_card--ctaNotHovered--nXzOB": (enableRestore || N) && !(D || L)
          }),
          children: [jsxs(ButtonWide, {
            variant: "secondary",
            type: "button",
            onClick: function () {
              if (enableRestore) {
                onRestore?.();
                return;
              }
              P.current?.click();
            },
            htmlAttributes: {
              onFocus: function () {
                F(!0);
              },
              onBlur: function () {
                F(!1);
              }
            },
            children: [enableRestore && renderI18nText("templates.publishing.restore_default_thumbnail"), !enableRestore && renderI18nText("templates.publishing.upload_custom_thumbnail")]
          }), R && jsx("input", {
            type: "file",
            accept: "image/*",
            "data-testid": "template-thumbnail-upload-input",
            ref: P,
            onChange: M,
            style: {
              display: "none"
            }
          }), jsx(TextWithTruncation, {
            color: "secondary",
            fontSize: 11,
            fontWeight: "medium",
            children: renderI18nText("templates.publishing.thumbnail_size_dimension_spec")
          }), uploadError && jsx(TextWithTruncation, {
            color: "danger",
            fontSize: 11,
            fontWeight: "medium",
            children: uploadError
          })]
        })
      })]
    }), jsxs("div", {
      id: S,
      className: "publish_file_resource_modal_card--publishFileResourceModalCardFileInfo--5iE9R",
      role: "note",
      children: [jsx(H8, {
        user: {
          handle: author?.name,
          imgUrl: author?.imgUrl
        },
        size: 32
      }), jsxs("div", {
        children: [jsx("div", {
          className: "publish_file_resource_modal_card--publishFileResourceModalCardFileName--5E5Ro text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: t
        }), jsx("div", {
          className: "publish_file_resource_modal_card--publishFileResourceModalCardAuthorName--d2RX4",
          children: renderI18nText("community.publisher_with_suffix", {
            publisherName: author?.name,
            publishersSuffix: acceptedPublishers && acceptedPublishers.length > 1 ? getI18nString("community.cards.pluralize_num_other_publishers", {
              numOtherPublishers: acceptedPublishers.length - 1
            }) : ""
          })
        })]
      }), metricFooter && jsx(dY.ResourceActionContainer, {
        children: jsx("div", {
          className: "publish_file_resource_modal_card--publishFileResourceModalCardMetric--8WMVB",
          children: metricFooter.isPaid ? jsx(Ij, {
            metric: metricFooter.duplicateCount
          }) : jsx(OV, {
            metric: metricFooter.duplicateCount,
            isActive: !1
          })
        })
      })]
    })]
  });
}
export const N = $$f0;