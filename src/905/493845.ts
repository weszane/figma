import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useCallback, useId, useImperativeHandle, useMemo } from "react";
import { ButtonPrimitive } from "../905/632989";
import { Button } from "../905/521428";
import { A as _$$A } from "../905/251970";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { noop } from "../905/419236";
import { oW } from "../905/675859";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { S as _$$S } from "../905/872825";
import { Q as _$$Q } from "../905/978641";
import { U as _$$U } from "../905/331038";
import { w as _$$w } from "../905/113805";
import { Zc, Lz } from "../905/497882";
import { Vb, wj } from "../905/759470";
import { WX } from "../figma_app/350203";
import { j6 } from "../figma_app/831799";
import { CW } from "../figma_app/599979";
import { VY, yj, Mr } from "../905/966582";
import { L } from "../905/597048";
import { A as _$$A2 } from "../905/567946";
var c = d;
function C(e) {
  if (e && "exception" !== e.type && "THUMBNAIL_MEDIUM_MISSING" === e.key) return getI18nString("community.publishing.you_must_set_a_thumbnail_for_your_resource");
}
export let $$T0 = forwardRef(function ({
  carouselMediaFieldManager: e,
  touched: t,
  onTouched: i,
  trackingEventName: d,
  showThumbnailWithLetterbox: T
}, k) {
  let {
    trackEvent
  } = j6();
  let {
    setThumbnailMediumFromFile,
    setThumbnailMediumFromInput,
    hasDefaultThumbnailMedium,
    defaultThumbnailMediumSource,
    restoreDefaultThumbnailMedium,
    deleteMedia
  } = e;
  let {
    allowVideos
  } = e.deps;
  let j = Zc(e);
  let U = _$$w(e, !t);
  let B = _$$U(U, C);
  let V = Lz(e, void 0);
  let G = V?.thumbnailMedium;
  let z = useRef(null);
  let [H, W] = useState(!1);
  let K = useCallback(e => {
    z.current?.click();
    e.stopPropagation();
  }, []);
  let Y = !G && !1 === hasDefaultThumbnailMedium && "file_thumbnail" === defaultThumbnailMediumSource;
  let q = useRef(null);
  let $ = useRef(null);
  let Z = useId();
  let X = `${Z}-input`;
  let Q = `${Z}-description`;
  let J = `${Z}-error`;
  useImperativeHandle(k, () => ({
    focus: e => {
      q.current ? q.current.focus(e) : $.current?.focus(e);
    }
  }), []);
  let ee = useMemo(() => [...CW, ...(allowVideos ? VY : [])], [allowVideos]);
  return jsx(_$$A2, {
    label: j ? getI18nString("community.publishing.set_a_thumbnail") : getI18nString("community.publishing.thumbnail_preview"),
    labelHtmlFor: X,
    subLabel: j ? getI18nString("community.publishing.recommended_size_in_pixels", {
      mediaWidth: Vb,
      mediaHeight: wj
    }) : void 0,
    subLabelId: Q,
    error: B,
    errorId: J,
    afterErrorContent: jsxs("div", {
      className: c()("thumbnail_uploader--setAsThumbnailEduBanner--zeKUD", {
        "thumbnail_uploader--hidden--pOG21": !Y
      }),
      "aria-hidden": !Y,
      children: [jsx("div", {
        className: "thumbnail_uploader--setAsThumbnailEduBannerText--svmyj",
        children: getFeatureFlags().dse_library_pg_thumbnails ? getI18nString("community.publishing.you_can_right_click_a_frame_and_select_set_as_file_thumbnail") : getI18nString("community.publishing.you_can_right_click_a_frame_and_select_set_as_thumbnail")
      }), jsxs("div", {
        className: "thumbnail_uploader--setAsThumbnailInfographicContainer--kldhs",
        "aria-hidden": !0,
        children: [jsx(oW, {
          srcSet: "data:image/png;base64,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 2x",
          alt: ""
        }), jsxs("div", {
          className: "thumbnail_uploader--setAsThumbnailInfographicText--9PLLH",
          children: [jsx("div", {
            children: getI18nString("fullscreen_actions.mask-selection")
          }), getFeatureFlags().dse_library_pg_thumbnails ? jsx("div", {
            children: jsx("div", {
              children: getI18nString("fullscreen_actions.set_as_file_thumbnail")
            })
          }) : jsx("div", {
            children: getI18nString("fullscreen_actions.set_as_thumbnail")
          })]
        })]
      })]
    }),
    required: j,
    children: jsxs("div", {
      className: "thumbnail_uploader--container--KPh0i",
      onClick: K,
      onDragOver: e => {
        let t = _$$S(e.dataTransfer.items[0]?.type, yj) || (allowVideos ? _$$S(e.dataTransfer.items[0]?.type, Mr) : void 0);
        setThumbnailMediumFromFile && 1 === e.dataTransfer.items.length && t && ee.includes(t) ? (e.dataTransfer.dropEffect = "copy", e.currentTarget.setAttribute("data-droppable", "true")) : (e.dataTransfer.dropEffect = "none", e.currentTarget.setAttribute("data-droppable", "false"));
        e.preventDefault();
      },
      onDragLeave: e => {
        e.currentTarget.removeAttribute("data-droppable");
        e.preventDefault();
      },
      onDrop: e => {
        if (e.currentTarget.removeAttribute("data-droppable"), !setThumbnailMediumFromFile) return;
        let t = e.dataTransfer.items[0]?.getAsFile();
        t && (i?.(), setThumbnailMediumFromFile(t), e.preventDefault());
      },
      children: [jsx("input", {
        ref: z,
        accept: ee.join(", "),
        "aria-describedby": Q,
        "aria-errormessage": B ? J : void 0,
        "aria-invalid": !!B,
        className: _$$s.hidden.$,
        "data-testid": "resource-publishing-thumbnail-uploader-input",
        disabled: H || !setThumbnailMediumFromInput,
        id: X,
        onChange: async e => {
          !H && setThumbnailMediumFromInput && (i?.(), W(!0), await setThumbnailMediumFromInput(e.target), trackEvent(d, {
            step: WX.ADD_CUSTOM_THUMBNAIL
          }), W(!1));
        },
        type: "file"
      }), G ? jsxs("div", {
        className: "thumbnail_uploader--thumbnailContainer---fTb4",
        children: [jsx("div", {
          className: "thumbnail_uploader--thumbnail--q6XzT",
          children: T && "image" === G.type ? jsx(_$$Q, {
            src: G.url,
            loading: "lazy",
            alt: getI18nString("community.publishing.thumbnail_image"),
            draggable: !1,
            crossOrigin: "use-credentials"
          }) : (e => {
            switch (e.type) {
              case "image":
                return jsx(oW, {
                  src: e.url,
                  loading: "lazy",
                  alt: getI18nString("community.publishing.thumbnail_image"),
                  draggable: !1
                });
              case "video":
                return jsx("video", {
                  className: "x186iv6y xl1xv1r x5yr21d x192jxwq x1f0ztbi",
                  controls: !0,
                  controlsList: "nofullscreen nodownload noplaybackrate",
                  disablePictureInPicture: !0,
                  src: e.url
                });
              default:
                noop(e);
            }
          })(G)
        }), jsx(ButtonPrimitive, {
          ref: q,
          className: "thumbnail_uploader--deleteThumbnailButton--4XZZf",
          "aria-label": getI18nString("community.publishing.clear_thumbnail_image"),
          onClick: e => {
            i?.();
            deleteMedia?.(G);
            e.stopPropagation();
          },
          disabled: !deleteMedia,
          children: jsx(_$$A, {})
        })]
      }) : jsxs("div", {
        className: "thumbnail_uploader--emptyStateContainer--agHad",
        children: [jsx(L, {}), jsxs("div", {
          className: "thumbnail_uploader--emptyStateControlsContainer--ABJwm",
          children: [restoreDefaultThumbnailMedium && jsx(Button, {
            disabled: H,
            onClick: e => {
              i?.();
              restoreDefaultThumbnailMedium();
              e.stopPropagation();
            },
            children: "file_thumbnail" === defaultThumbnailMediumSource ? getI18nString("community.publishing.use_file_thumbnail") : getI18nString("community.publishing.use_default_thumbnail")
          }), jsx(Button, {
            ref: $,
            variant: restoreDefaultThumbnailMedium ? "link" : void 0,
            onClick: K,
            disabled: H || !setThumbnailMediumFromInput,
            children: allowVideos ? getI18nString("community.publishing.upload_images_or_videos") : getI18nString("community.publishing.upload_image")
          })]
        })]
      })]
    })
  });
});
export const l = $$T0;