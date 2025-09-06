import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { lQ } from "../905/934246";
import { T as _$$T } from "../905/256551";
import { x as _$$x } from "../905/587214";
import { f as _$$f } from "../905/54715";
import c from "classnames";
import { _ as _$$_ } from "../vendor/853977";
import { trackEventAnalytics } from "../905/449184";
import { kt } from "../figma_app/858013";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { I as _$$I } from "../905/343721";
import { DM, en } from "../905/759470";
import { WX } from "../figma_app/350203";
import { N8, Gp, CW, nK } from "../figma_app/599979";
import { VY } from "../905/966582";
import { EL } from "../905/748636";
import { NJ } from "../figma_app/419216";
import { A as _$$A } from "../5724/882384";
var u = c;
let w = "publish_resource_card_preview--mediaThumbnail--GxvJ2 publish_resource_card_preview--mediaUploadThumbnail--phQaN";
let C = "publish_resource_card_preview--mediaThumbnailSelected--FgdUF";
let T = "publish_resource_card_preview--thumbnailBadgeContainer--YmEjk";
let k = "publish_resource_card_preview--mediaHeroImageUI3--Pq0Mp publish_resource_card_preview--mediaHeroImage---NkEq";
function N(e, t) {
  let i = {};
  let n = e.filter(e => !i[e.sha1] && (i[e.sha1] = !0, !0));
  n.length !== e.length && t(_$$F.enqueue({
    message: getI18nString("community.publishing.some_media_was_deduplicated"),
    error: !1
  }));
  return n;
}
function P(e, t, i) {
  if (i) {
    let i = 0;
    let n = !1;
    for (let t = 0; t < e.length; t++) "video" === e[t].type && ++i > DM && (n = !0, e.splice(t, 1), t--, i--);
    n && t(_$$F.enqueue({
      message: getI18nString("community.publishing.you_can_only_upload_three_videos"),
      error: !0
    }));
  }
  e.length > en && (t(_$$F.enqueue({
    message: i ? getI18nString("community.publishing.you_can_only_upload_ten_images_and_videos") : getI18nString("community.publishing.you_can_only_upload_ten_images"),
    error: !1
  })), e = e.slice(0, 10));
  return e;
}
async function O(e, t, i, n, r, a, s, o, l, d) {
  let c = e.current;
  if (!c) return;
  a(!0);
  let u = [];
  try {
    u = await N8(c, r);
  } catch (e) {
    n(_$$F.enqueue({
      message: e.message,
      error: !0
    }));
  }
  let p = [...t, ...u];
  p = P(p = N(p, n), n, r);
  trackEventAnalytics("community_publish_modal", {
    userId: s,
    orgId: d,
    step: WX.ADD_CAROUSEL_MEDIA,
    name: WX.ADD_CAROUSEL_MEDIA,
    resourceType: o,
    resourceId: l
  });
  a(!1);
  i({
    carouselMedia: p
  });
}
function D({
  allowVideoUpload: e,
  canvasSetThumbnailSha1: t,
  coverImageCarouselMediaId: i,
  disableUploading: l,
  error: d,
  existingCarouselMedia: c,
  hasCustomCanvasThumbnail: p,
  isWidget: h,
  name: g,
  onCustomThumbnailChange: y,
  onRestore: b,
  selectedCarouselMedium: x,
  thumbnail: S,
  updateCarouselMedia: w,
  isLoadingCarouselMediaFromFiles: C,
  setIsLoadingCarouselMediaFromFiles: R,
  userId: D,
  orgId: L,
  resourceType: U,
  resourceId: B
}) {
  let V = useDispatch();
  let G = useRef(null);
  let z = useRef(null);
  let H = async t => {
    if (t.preventDefault(), t.stopPropagation(), G.current && (G.current.style.opacity = "1.0", G.current.style.border = "2px solid var(--color-bg)"), C) return;
    R(!0);
    let i = [];
    try {
      i = await Gp(t.dataTransfer?.files, e);
    } catch (e) {
      V(_$$F.enqueue({
        message: e.message,
        error: !0
      }));
    }
    let n = [...c, ...i];
    n = P(n = N(n, V), V, e);
    trackEventAnalytics("community_publish_modal", {
      userId: D,
      orgId: L,
      step: WX.ADD_CAROUSEL_MEDIA,
      name: WX.ADD_CAROUSEL_MEDIA,
      resourceType: U,
      resourceId: B
    });
    R(!1);
    w({
      carouselMedia: n
    });
  };
  let W = async t => {
    if (C) return;
    R(!0);
    let i = [];
    try {
      i = await Gp(t.clipboardData?.files, e);
    } catch (e) {
      V(_$$F.enqueue({
        message: e.message,
        error: !0
      }));
    }
    let n = [...c, ...i];
    n = P(n = N(n, V), V, e);
    trackEventAnalytics("community_publish_modal", {
      userId: D,
      orgId: L,
      step: WX.ADD_CAROUSEL_MEDIA,
      name: WX.ADD_CAROUSEL_MEDIA,
      resourceType: U,
      resourceId: B
    });
    R(!1);
    w({
      carouselMedia: n
    });
  };
  let [K, Y] = useState(!1);
  let q = x || c[0];
  let $ = q && t === q.sha1;
  let Z = (() => {
    let t;
    let i = () => {
      z.current?.click();
    };
    let r = e ? renderI18nText("community.publishing.upload_at_least_one_image_or_video") : renderI18nText("community.publishing.upload_at_least_one_image");
    t = e ? h ? renderI18nText("community.publishing.upload_images_and_videos_to_show_off_your_widget") : renderI18nText("community.publishing.upload_images_and_videos_to_show_off_your_plugin") : renderI18nText("community.publishing.select_up_to_10_images_of_your_file");
    return jsxs(Fragment, {
      children: [jsx("div", {
        className: "publish_resource_card_preview--placeholderHeroIconUI3--hAEcp",
        children: jsx(_$$T, {})
      }), jsx("div", {
        className: u()({
          "publish_resource_card_preview--placeholderHeroErrorHeaderText--181ui publish_resource_card_preview--placeholderHeroText--cJgeG text--fontPos11--2LvXf text--_fontBase--QdLsd": !!d,
          "publish_resource_card_preview--placeholderHeroHeaderTextUI3--MO1-I publish_resource_card_preview--placeholderHeroHeaderText--WUoKp publish_resource_card_preview--placeholderHeroText--cJgeG text--fontPos11--2LvXf text--_fontBase--QdLsd": !d
        }),
        children: d ? r : t
      }), jsxs("button", {
        className: "publish_resource_card_preview--placeholderHeroFileInputText--6opB8 publish_resource_card_preview--placeholderHeroText--cJgeG text--fontPos11--2LvXf text--_fontBase--QdLsd",
        onClick: i,
        children: [jsx("input", {
          className: _$$s.absolute.w1.h1.$,
          style: {
            display: "none"
          },
          type: "file",
          accept: [...CW, ...(e ? VY : [])].join(","),
          ref: z,
          onChange: l ? lQ : () => O(z, c, w, V, e, R, D, U, B, L),
          multiple: !0
        }), renderI18nText("community.publishing.upload_instructions", {
          chooseFileLink: jsx("label", {
            className: _$$s.cursorPointer.colorTextBrand.inlineBlock.$,
            htmlFor: "cover-upload-input",
            role: "link",
            onClick: e => {
              e.stopPropagation();
              i();
            },
            children: renderI18nText("community.publishing.upload_from_your_computer")
          })
        })]
      }), jsx("div", {
        className: "publish_resource_card_preview--placeholderHeroText--cJgeG text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: renderI18nText("community.publishing.upload_instructions_recommended_size")
      })]
    });
  })();
  let X = q ? jsx("div", {
    className: "publish_resource_card_preview--mediaHero--G2-Wu",
    children: "image" === q.type ? jsxs(Fragment, {
      children: [S && j(S, q, i) ? jsx("div", {
        className: T,
        onMouseEnter: () => {
          Y(!0);
        },
        onMouseLeave: () => {
          Y(!1);
        },
        children: jsx(F, {
          isHovered: K,
          onRestore: b,
          showOptions: p && !$ && !l
        })
      }) : y && !l ? jsx("button", {
        className: T,
        onClick: () => {
          y(q);
        },
        children: jsx(M, {})
      }) : null, jsx("img", {
        className: k,
        src: q.url,
        loading: "lazy",
        alt: g + " preview",
        draggable: !1
      }), jsx("div", {
        className: "publish_resource_card_preview--heroImageShadowUI3--LIN2O publish_resource_card_preview--heroImageShadow--YOpNC"
      })]
    }) : jsx(Fragment, {
      children: jsx("video", {
        className: k,
        style: {
          backgroundColor: "#000000"
        },
        controls: !0,
        controlsList: "nofullscreen nodownload noplaybackrate",
        disablePictureInPicture: !0,
        src: q.url
      })
    })
  }) : null;
  return jsx("div", {
    className: u()({
      "publish_resource_card_preview--placeholderHeroUI3--RrvNB publish_resource_card_preview--placeholderHero--A4Bz1": !0,
      "publish_resource_card_preview--placeholderHeroError--FAdZk publish_resource_card_preview--placeholderHero--A4Bz1": !!d
    }),
    ref: G,
    role: "button",
    onDrop: l ? lQ : H,
    onDragOver: l ? lQ : e => {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = "copy";
      G.current && (G.current.style.opacity = "0.5", G.current.style.border = "2px solid var(--color-border-selected-strong)");
    },
    onDragLeave: l ? lQ : e => {
      e.preventDefault();
      e.stopPropagation();
      G.current && (G.current.style.opacity = "1.0", G.current.style.border = "2px solid var(--color-bg)");
    },
    onPaste: l ? lQ : W,
    tabIndex: 0,
    children: c.length > 0 ? X : Z
  });
}
function L() {
  return jsx("div", {
    className: "publish_resource_card_preview--currentThumbnailIcon--SaiqZ text--fontPos9--naThA text--_fontBase--QdLsd",
    children: jsx(_$$I, {
      icon: "frame-blue-16-colored"
    })
  });
}
function F({
  isHovered: e,
  onRestore: t,
  showOptions: i
}) {
  let a = "PublishModalActiveThumbnailBadge";
  let [s, o] = useState(!1);
  return jsxs("div", {
    className: "publish_resource_card_preview--currentThumbnailBadge--TgbcP publish_resource_card_preview--currentThumbnailIcon--SaiqZ text--fontPos9--naThA text--_fontBase--QdLsd",
    "data-onboarding-key": a,
    onClick: () => o(!s),
    role: "button",
    tabIndex: 0,
    children: [renderI18nText("community.publishing.thumbnail"), e && i ? jsx(_$$B, {
      svg: _$$A,
      className: "publish_resource_card_preview--ellipses--ZhnQN"
    }) : jsx(_$$I, {
      icon: "frame-blue-16-colored"
    }), i && s && jsx(NJ, {
      backgroundColor: "var(--color-bg-tooltip)",
      className: "publish_resource_card_preview--pointerModal--cMOsB pointer_modal--pointerModalBlue--9Jjg8 pointer_modal--pointerModal--wrpFz",
      targetKey: a,
      width: 135,
      shouldCenterArrow: EL.FALLBACK,
      children: jsx("button", {
        onClick: t,
        className: "publish_resource_card_preview--tooltipText---3xSN",
        children: renderI18nText("community.publishing.restore_default_thumbnail")
      })
    })]
  });
}
function M() {
  return jsxs("div", {
    className: "publish_resource_card_preview--nonCurrentThumbnailBadge--1CaIR publish_resource_card_preview--currentThumbnailBadge--TgbcP publish_resource_card_preview--currentThumbnailIcon--SaiqZ text--fontPos9--naThA text--_fontBase--QdLsd",
    children: [renderI18nText("community.publishing.set_as_thumbnail"), jsx(_$$I, {
      icon: "frame-grey-16-colored",
      fill: "menu"
    })]
  });
}
function j(e, t, i) {
  return e.sha1 === t.sha1 || e.url === t.url || !!i && "id" in t && i === t.id;
}
function U({
  onClick: e
}) {
  return jsx("button", {
    className: "publish_resource_card_preview--mediaUploadThumbnailUI3--iGqyR publish_resource_card_preview--mediaUploadThumbnail--phQaN",
    onClick: e,
    children: jsx(_$$x, {})
  });
}
function B({
  coverImageCarouselMediaId: e,
  disableUploading: t,
  existingCarouselMedia: i,
  name: o,
  selectedCarouselMedium: l,
  onSelectCarouselMedium: c,
  thumbnail: h,
  updateCarouselMedia: g,
  allowVideoUpload: f,
  setIsLoadingCarouselMediaFromFiles: _,
  userId: A,
  orgId: x,
  resourceType: S,
  resourceId: T
}) {
  let k = useDispatch();
  let R = useRef(null);
  let N = useRef(null);
  let [P, D] = useState(!1);
  let [F, M] = useState(!0);
  let B = i.length > 4;
  let V = e => {
    let t = N.current;
    t && ("left" === e ? t.scrollBy({
      left: -200,
      behavior: "smooth"
    }) : "right" === e && t.scrollBy({
      left: 200,
      behavior: "smooth"
    }));
  };
  let G = useCallback(t => !!h && !!t && j(h, t, e), [h, e]);
  return jsxs("div", {
    className: "publish_resource_card_preview--mediaCarouselContainer--5ZBCf",
    children: [jsxs("div", {
      className: B ? "publish_resource_card_preview--mediaUploadCarousel--ec9Jx publish_resource_card_preview--centeredMediaUploadCarousel--l35AC" : "publish_resource_card_preview--centeredMediaUploadCarousel--l35AC",
      ref: N,
      onScroll: () => {
        let e = N.current;
        e && (D(e.scrollLeft > 0), M(e.scrollLeft + e.clientWidth + 5 < e.scrollWidth));
      },
      children: [i && jsx(_$$_.Group, {
        as: "ol",
        axis: "x",
        values: i,
        onReorder: t ? lQ : e => {
          g({
            carouselMedia: e
          });
        },
        className: "publish_resource_card_preview--centeredReorderContainer---6uGS",
        children: i.map((e, r) => jsx(_$$_.Item, {
          value: e,
          drag: !t,
          children: jsxs("div", {
            className: "publish_resource_card_preview--mediaThumbnailContainer--4aUkv",
            children: [!t && jsx("button", {
              className: "publish_resource_card_preview--deleteMediaIcon--z5Rn1",
              onClick: () => function (e, t, n, r, a) {
                let s = [...i];
                let o = s.splice(e, 1)[0];
                nK(o);
                trackEventAnalytics("community_publish_modal", {
                  userId: t,
                  orgId: n,
                  step: WX.DELETE_CAROUSEL_MEDIA,
                  name: WX.DELETE_CAROUSEL_MEDIA,
                  resourceType: r,
                  resourceId: a
                });
                g({
                  carouselMedia: s
                }, !0, G(o));
              }(r, A, x, S, T),
              children: jsx(_$$f, {})
            }), G(e) && jsx(L, {}), jsx("button", {
              onClick: () => {
                c(e);
              },
              children: jsx("div", {
                className: u()(w, {
                  [C]: l === e
                }),
                children: jsx("img", {
                  className: u()(w, {
                    [C]: l === e
                  }),
                  src: "image" === e.type ? e.url : e.thumbnail_url,
                  loading: "lazy",
                  alt: o + " preview",
                  draggable: !1
                })
              })
            })]
          })
        }, e.url))
      }), i.length < en && !t && jsxs("div", {
        children: [jsx(U, {
          onClick: () => {
            R.current?.click();
          }
        }), jsx("input", {
          type: "file",
          accept: [...CW, ...(f ? VY : [])].join(","),
          ref: R,
          style: {
            display: "none"
          },
          onChange: () => O(R, i, g, k, f, _, A, S, T, x),
          multiple: !0
        })]
      })]
    }), B && P && jsxs(Fragment, {
      children: [jsx("div", {
        className: "publish_resource_card_preview--fadeOutMaskLeft--FrnTH publish_resource_card_preview--fadeOutMask--QrEcN"
      }), jsx("button", {
        className: "publish_resource_card_preview--carouselArrowLeft--eOWuO resource_page_media_carousel--arrow--5g-tR",
        onClick: () => V("left"),
        children: jsx(_$$I, {
          icon: "chevron-left-32"
        })
      })]
    }), B && F && jsxs(Fragment, {
      children: [jsx("div", {
        className: "publish_resource_card_preview--fadeOutMaskRight--U8Qyj publish_resource_card_preview--fadeOutMask--QrEcN"
      }), jsx("button", {
        className: "publish_resource_card_preview--carouselArrowRight--TY9yu resource_page_media_carousel--arrow--5g-tR",
        onClick: () => V("right"),
        children: jsx(_$$I, {
          icon: "chevron-right-32"
        })
      })]
    })]
  });
}
export function $$V0({
  canvasSetThumbnailSha1: e,
  carouselMedia: t,
  coverImageCarouselMediaId: i,
  disableUploading: a,
  error: s,
  hasCustomCanvasThumbnail: o = !1,
  isWidget: l,
  name: d,
  onCustomThumbnailChange: c,
  onRestore: u,
  thumbnail: p,
  updateCarouselMedia: m,
  allowVideoUpload: g,
  userId: f,
  orgId: _,
  resourceType: A,
  resourceId: y
}) {
  let [b, v] = useState(null);
  let [I, E] = useState(!1);
  let x = (e, i = !1, n = !1) => {
    let r = (!t || 0 === t.length) && !!e.carouselMedia;
    (r || i) && e.carouselMedia && v(e.carouselMedia[0]);
    (r || n) && c && e.carouselMedia && c(e.carouselMedia[0]);
    m(e);
  };
  return jsxs("div", {
    className: "publish_resource_card_preview--cardPreviewContainer--3suM7",
    children: [jsx(D, {
      allowVideoUpload: g,
      canvasSetThumbnailSha1: e,
      coverImageCarouselMediaId: i,
      disableUploading: a,
      error: s,
      existingCarouselMedia: t || [],
      hasCustomCanvasThumbnail: o,
      isLoadingCarouselMediaFromFiles: I,
      isWidget: l,
      name: d,
      onCustomThumbnailChange: c,
      onRestore: u,
      orgId: _,
      resourceId: y,
      resourceType: A,
      selectedCarouselMedium: b,
      setIsLoadingCarouselMediaFromFiles: E,
      thumbnail: p,
      updateCarouselMedia: x,
      userId: f
    }), jsx(B, {
      allowVideoUpload: g,
      coverImageCarouselMediaId: i,
      disableUploading: a,
      existingCarouselMedia: t || [],
      name: d,
      onSelectCarouselMedium: v,
      orgId: _,
      resourceId: y,
      resourceType: A,
      selectedCarouselMedium: b,
      setIsLoadingCarouselMediaFromFiles: E,
      thumbnail: p,
      updateCarouselMedia: x,
      userId: f
    }), I && jsx("div", {
      className: "publish_resource_card_preview--loadingSpinnerContainer--rKGPJ",
      children: jsx(kt, {
        className: "publish_resource_card_preview--loadingSpinner--p4-1E"
      })
    })]
  });
}
export const A = $$V0;