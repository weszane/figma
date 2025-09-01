import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Pw } from "../905/521428";
import n from "classnames";
import { sx } from "../905/449184";
import { UG } from "../905/414007";
import { buildUploadUrl } from "../figma_app/169182";
import { aR } from "../figma_app/778880";
import { pW } from "../905/160095";
import { t, tx } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
var o = n;
let g = "mobile_download_prompt--mobilePromptTitle--7Tgsn text--fontPos13--xW8hS text--_fontBase--QdLsd";
let h = "mobile_download_prompt--mobilePromptOptionTitle--mMUYW text--fontPos13--xW8hS text--_fontBase--QdLsd";
let x = "mobile_download_prompt--mobilePromptOptionImage--Cp9zK";
let b = "mobile_download_prompt_dismissed";
export function $$v0(e) {
  let {
    isCompact
  } = e;
  let r = aR ? "https://apps.apple.com/us/app/figma-mirror/id1152747299#" : "https://play.google.com/store/apps/details?id=com.figma.mirror";
  let n = UG();
  let g = !isCompact && !!e.renderBlockingPrompt;
  let [v, j] = useState(!g);
  let [T, E] = useState(!g);
  useEffect(() => {
    null === n.get(b) && (j(!1), E(!1));
  }, [n, g]);
  let I = () => {
    g || (j(!0), sx("mobile_web_mobile_app_download_prompt_dismissed", {
      userId: e.userIdForTracking
    }), setTimeout(() => {
      E(!0);
    }, 300), n.set(b, !0));
  };
  return null !== n.get(b) ? null : jsx(fu, {
    name: "Mobile Download Prompt",
    children: jsx("div", {
      className: o()({
        "mobile_download_prompt--overlay--OzW6J": !0,
        "mobile_download_prompt--overlayClosed--2FWpY": v,
        "mobile_download_prompt--overlayAnimateEnd--dBvI0": T
      }),
      style: {
        transitionDuration: "300ms"
      },
      onClick: I,
      children: jsxs("div", {
        className: o()("mobile_download_prompt--mobilePromptContainer--FKz5e", "mobile_download_prompt--mobileDownloadPromptContainer--FaI33", {
          "mobile_download_prompt--mobileDownloadPromptContainerClosed--DHusv": v,
          "mobile_download_prompt--mobileDownloadPromptContainerFullHeightBlocking--B100f": g
        }),
        onClick: e => {
          e.stopPropagation();
        },
        children: [jsx("div", {
          className: o()("mobile_download_prompt--mobilePromptDescriptionContainer--1PhoH", {
            "mobile_download_prompt--fullHeightPrompt--U6KWw": g
          }),
          children: isCompact ? jsx(w, {}) : jsx(y, {
            renderBlockingPrompt: g ?? !1
          })
        }), jsx("hr", {
          className: o()({
            "mobile_download_prompt--mobilePromptHR--UpOqS": !0,
            "mobile_download_prompt--fullWidthHR--B-2i1": g
          })
        }), jsxs("div", {
          className: "mobile_download_prompt--mobilePromptGrid--Mvqf-",
          children: [jsx("img", {
            className: x,
            src: buildUploadUrl("249f0f055b922ecef6bffc592a8420e7e6eddcea"),
            alt: t("file_browser.mobile_prompt.app_image_alt")
          }), jsxs("div", {
            children: [jsx("h3", {
              className: h,
              children: tx("file_browser.mobile_prompt.app_title")
            }), jsx("p", {
              className: "mobile_download_prompt--mobilePromptOptionDescription--APlZp text--fontPos11--2LvXf text--_fontBase--QdLsd",
              children: g ? tx("file_browser.mobile_prompt.app_description_new") : tx("file_browser.mobile_prompt.app_description")
            })]
          }), jsx(pW, {
            size: "lg",
            trackingProperties: {
              userId: e.userIdForTracking,
              appLink: r,
              trackingDescriptor: _$$c.MOBILE_WEB_MOBILE_APP_DOWNLOAD_PROMPT_CLICKED
            },
            width: "fill",
            href: r,
            children: tx("file_browser.mobile_prompt.app_action")
          }), !g && jsxs(Fragment, {
            children: [jsx("img", {
              className: x,
              src: buildUploadUrl("741698fed49afa5e8f3becdd906e66d32c8e7fae"),
              alt: t("file_browser.mobile_prompt.browser_image_alt")
            }), jsx("div", {
              children: jsx("h3", {
                className: h,
                children: tx("file_browser.mobile_prompt.browser_title")
              })
            }), jsx(Pw, {
              onClick: I,
              variant: "secondary",
              children: tx("file_browser.mobile_prompt.browser_action")
            })]
          })]
        })]
      })
    })
  });
}
function y(e) {
  return jsxs(Fragment, {
    children: [jsx("img", {
      className: "mobile_download_prompt--mobilePromptImage--U2Yqj",
      src: buildUploadUrl("5f1dc37f397dbddf711d3d950bee5dd46c07fc72"),
      alt: t("file_browser.mobile_prompt.image_alt")
    }), jsxs("div", {
      className: "mobile_download_prompt--mobilePromptTitleContainer--o8VIK",
      children: [jsx("h2", {
        className: g,
        children: e.renderBlockingPrompt ? tx("file_browser.mobile_prompt.modal_title_blocking") : tx("file_browser.mobile_prompt.modal_title")
      }), jsx("p", {
        className: "mobile_download_prompt--mobilePromptSubTitle--GFR67 text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: e.renderBlockingPrompt ? tx("file_browser.mobile_prompt.modal_body_blocking") : tx("file_browser.mobile_prompt.modal_body")
      })]
    })]
  });
}
function w() {
  return jsx(Fragment, {
    children: jsx("h2", {
      className: g,
      children: tx("file_browser.mobile_prompt.modal_title_compact")
    })
  });
}
export const R = $$v0;