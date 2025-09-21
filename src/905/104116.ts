import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useCallback, useMemo, useId, useImperativeHandle, useEffect } from "react";
import { y4I } from "../figma_app/822011";
import { Button } from "../905/521428";
import { ButtonPrimitive } from "../905/632989";
import { f as _$$f } from "../905/54715";
import { _ as _$$_ } from "../vendor/853977";
import c from "../vendor/116389";
import { O as _$$O } from "../905/164014";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { p as _$$p } from "../figma_app/882803";
import { U as _$$U } from "../905/331038";
import { w as _$$w } from "../905/113805";
import { Lz } from "../905/497882";
import { en } from "../905/759470";
import { $$in, PublishModalState, FileInputDropType } from "../figma_app/350203";
import { useTracking } from "../figma_app/831799";
import { CW } from "../figma_app/599979";
import { VIDEO_TYPE_VALUES } from "../905/966582";
import { L as _$$L } from "../905/597048";
import { A as _$$A } from "../905/567946";
var u = c;
function w(e) {
  if (e && "exception" !== e.type) switch (e.key) {
    case "CAROUSEL_MEDIA_EMPTY":
      {
        let {
          allowVideos
        } = e.data;
        return allowVideos ? getI18nString("community.publishing.upload_at_least_one_image_or_video") : getI18nString("community.publishing.upload_at_least_one_image");
      }
    case "HAS_TOO_MANY_CAROUSEL_MEDIA":
      {
        let {
          allowVideos,
          maxNumOfCarouselMedia
        } = e.data;
        return allowVideos ? getI18nString("community.publishing.you_can_only_upload_up_to_n_images_and_videos", {
          maxMedia: maxNumOfCarouselMedia - 1
        }) : getI18nString("community.publishing.you_can_only_upload_up_to_n_images", {
          maxMedia: maxNumOfCarouselMedia - 1
        });
      }
    case "HAS_TOO_MANY_VIDEOS":
      {
        let {
          maxNumOfVideos
        } = e.data;
        return getI18nString("community.publishing.you_can_only_upload_up_to_n_videos", {
          maxVideos: maxNumOfVideos
        });
      }
  }
}
export let $$C0 = forwardRef(function ({
  carouselMediaFieldManager: e,
  touched: t,
  onTouched: i
}, c) {
  let {
    trackEvent
  } = useTracking();
  let {
    deps,
    addMediaFromFiles,
    addMediaFromInput,
    deleteMedia
  } = e;
  let P = _$$w(e, !t);
  let O = _$$U(P, w);
  let D = Lz(e, void 0);
  let L = D?.allMedia ?? [];
  let F = D?.thumbnailMedium;
  let M = useRef(null);
  let [j, U] = useState(!1);
  let B = useCallback(() => {
    M.current?.click();
  }, []);
  let V = useMemo(() => [...CW, ...(deps.allowVideos ? VIDEO_TYPE_VALUES : [])], [deps.allowVideos]);
  let G = useRef(null);
  let z = useRef(null);
  let H = useId();
  let W = `${H}-input`;
  let K = `${H}-error`;
  useImperativeHandle(c, () => ({
    focus: e => {
      G.current ? G.current.focus(e) : (z.current?.focus({
        ...e,
        preventScroll: !0
      }), z.current?.scrollIntoView({
        behavior: "smooth"
      }));
    }
  }), []);
  let Y = L.length < en;
  let q = L.filter(e => e !== F);
  let $ = Math.max(3 - q.length, Y ? 1 : 0);
  let Z = useRef(q.length);
  useEffect(() => {
    Z.current < q.length && z.current?.scrollIntoView({
      behavior: "smooth"
    });
    Z.current = q.length;
  }, [q.length]);
  let {
    scrollerRef,
    onScroll,
    dragControls,
    onDrag,
    onDragStart,
    onDragEnd
  } = _$$O();
  return deps.viewerModeField?.currentValue === y4I.PROTOTYPE ? null : jsxs(_$$A, {
    label: deps.allowVideos ? getI18nString("community.publishing.add_up_to_n_images_and_videos_to_your_carousel", {
      maxMedia: en - 1
    }) : getI18nString("community.publishing.add_up_to_n_images_to_your_carousel", {
      maxMedia: en - 1
    }),
    labelHtmlFor: W,
    error: O,
    errorId: K,
    afterLabelContent: Y && jsx(Button, {
      ref: G,
      variant: "link",
      onClick: B,
      disabled: j || !addMediaFromInput,
      children: deps.allowVideos ? getI18nString("community.publishing.upload") : getI18nString("community.publishing.upload_images")
    }),
    children: [jsx("input", {
      ref: M,
      accept: V.join(", "),
      "aria-errormessage": O ? K : void 0,
      "aria-invalid": !!O,
      className: cssBuilderInstance.hidden.$,
      disabled: j || !addMediaFromInput,
      id: W,
      multiple: !0,
      onChange: async e => {
        !j && addMediaFromInput && (i?.(), U(!0), await addMediaFromInput(e.target), trackEvent($$in, {
          step: PublishModalState.ADD_CAROUSEL_MEDIA,
          src: FileInputDropType.FILE_INPUT
        }), U(!1));
      },
      type: "file"
    }), jsx("div", {
      ref: scrollerRef,
      className: "carousel_media_uploader--container--AUkeJ",
      onDragOver: e => {
        let t = Array.from(e.dataTransfer.items).filter(e => V.includes(e.type));
        !j && addMediaFromFiles && t.length > 0 ? (e.dataTransfer.dropEffect = "copy", e.currentTarget.setAttribute("data-droppable", "true")) : (e.dataTransfer.dropEffect = "none", e.currentTarget.setAttribute("data-droppable", "false"));
        e.preventDefault();
      },
      onDragLeave: e => {
        e.currentTarget.removeAttribute("data-droppable");
        e.preventDefault();
      },
      onDrop: async e => {
        if (e.currentTarget.removeAttribute("data-droppable"), j || !addMediaFromFiles) return;
        let t = u()(Array.from(e.dataTransfer.items).filter(e => V.includes(e.type)).map(e => e.getAsFile()));
        0 !== t.length && (e.preventDefault(), i?.(), U(!0), await addMediaFromFiles(t), trackEvent($$in, {
          step: PublishModalState.ADD_CAROUSEL_MEDIA,
          src: FileInputDropType.DROP
        }), U(!1));
      },
      onScroll,
      children: jsxs(_$$_.Group, {
        as: "ol",
        axis: "x",
        className: "carousel_media_uploader--mediaList--3mzGY",
        values: Array.from(q),
        onReorder: t => {
          e.setValue?.({
            ...(D ?? {
              thumbnailMedium: void 0
            }),
            allMedia: u()([F, ...t])
          });
        },
        layoutScroll: !0,
        children: [q.map((e, t) => jsxs(_$$_.Item, {
          value: e,
          className: "carousel_media_uploader--medium--Dg8HP carousel_media_uploader--mediaListItem--JyMAo",
          dragControls,
          onDrag,
          onDragStart,
          onDragEnd,
          children: [jsx("img", {
            src: "video" === e.type ? e.thumbnail_url : e.url,
            loading: "lazy",
            alt: getI18nString("community.publishing.carousel_media_image"),
            draggable: !1
          }), "video" === e.type && jsx("div", {
            className: "carousel_media_uploader--videoThumbnailOverlay--JFyTq",
            children: jsx(_$$p, {})
          }), deleteMedia && jsx(ButtonPrimitive, {
            ref: t === q.length - 1 ? z : void 0,
            className: "carousel_media_uploader--deleteMediumButton--1lrRj",
            "aria-label": getI18nString("community.publishing.remove_carousel_media"),
            onClick: () => {
              i?.();
              deleteMedia?.(e);
            },
            children: jsx(_$$f, {})
          })]
        }, e.url)), Array.from({
          length: $
        }, (e, t) => jsx(_$$_.Item, {
          value: null,
          drag: !1,
          role: "presentation",
          children: jsx(ButtonPrimitive, {
            htmlAttributes: {
              tabIndex: -1
            },
            className: "carousel_media_uploader--placeholder--zjtEW carousel_media_uploader--mediaListItem--JyMAo",
            onClick: B,
            disabled: j || !addMediaFromInput,
            "aria-hidden": !0,
            children: jsx(_$$L, {
              size: "small"
            })
          })
        }, `placeholder-${$ - t}`))]
      })
    })]
  });
});
export const t = $$C0;