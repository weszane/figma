import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useRef, useEffect, useCallback, forwardRef, useState } from "react";
import { throwTypeError } from "../figma_app/465776";
import { E as _$$E } from "../905/632989";
import { fp } from "../figma_app/27355";
import { sx } from "../905/449184";
import { wY } from "../figma_app/708845";
import { Lg } from "../figma_app/257275";
import { tx, t as _$$t } from "../905/303541";
import { In } from "../905/672640";
import { Jm } from "../figma_app/387599";
import { a as _$$a } from "../5430/14230";
import { qD, N6, z$ } from "../figma_app/471982";
import { Q as _$$Q } from "../905/978641";
import { XW, cX, eO, tv, ZA, Vm, qY } from "../figma_app/427318";
import { U } from "../figma_app/45218";
import { Z4 } from "../figma_app/809727";
import { A as _$$A } from "../5430/202447";
import { O7 } from "../figma_app/578832";
import { Q as _$$Q2 } from "../5430/117345";
import w from "classnames";
import { sx as _$$sx } from "../905/941192";
import { fq } from "../7222/396421";
import { mH, lp, v$, xW, UY, Ec, sp, T9, jp, aT, Wf } from "../5430/770886";
import { V as _$$V } from "../1577/311426";
import { K } from "../905/851274";
import { F5, P as _$$P, ru, Mf } from "../5430/367577";
import { p as _$$p, A as _$$A2 } from "../figma_app/882803";
var C = w;
function N({
  thumbnailUrls: e,
  altText: t,
  size: r,
  tileAspectRatio: o = "16 / 9"
}) {
  let a = 0;
  e.length > 12 && (a = e.length - 12, e = e.slice(0, 12));
  let l = useMemo(() => {
    let [t, r] = e.length > 8 ? [4, 3] : e.length > 4 ? [4, 2] : [2, 2];
    return _$$sx.add({
      gridTemplateColumns: `repeat(${t}, 1fr)`,
      gridTemplateRows: `repeat(${r}, 1fr)`
    }).$;
  }, [e.length]);
  let c = useMemo(() => {
    switch (r) {
      case "thumbnail":
        return "grid_view--carouselGridViewThumbnail--VQ4Aa grid_view--carouselGridView--kG9U6";
      case "hero":
        return "grid_view--carouselGridViewHero--fJM2n grid_view--carouselGridView--kG9U6 text--fontNeg20--h0WuY text--_fontBase--QdLsd text--_negText--j9g-L";
      case "fullscreen_hero":
        return "grid_view--carouselGridViewFullscreenHero--wJryP grid_view--carouselGridView--kG9U6 text--fontNeg40--v1X92 text--_fontBase--QdLsd text--_negText--j9g-L";
      default:
        throwTypeError(r);
    }
  }, [r]);
  let d = useMemo(() => _$$sx.$$if(!!o, {
    aspectRatio: o
  }).$, [o]);
  return jsx("div", {
    className: C()("grid_view--carouselGridViewContainer--LoaLV", {
      [mH]: "fullscreen_hero" === r
    }),
    children: jsx("div", {
      "aria-label": t,
      style: l,
      className: c,
      children: e.map((e, t, i) => jsxs("div", {
        style: d,
        "aria-hidden": !0,
        className: "grid_view--carouselGridImageContainer--e2OUP",
        children: [jsx("img", {
          src: e,
          draggable: !1
        }), "thumbnail" !== r && t === i.length - 1 && a > 0 && jsx("div", {
          className: "grid_view--overflowThumbnailCount--2YPuu",
          children: jsx("span", {
            children: `+${a}`
          })
        })]
      }, e))
    })
  });
}
let R = "hero--heroImagePreviewButton--x5dcp";
let k = "hero--lightboxButton--5mIOs";
function A({
  children: e,
  showLetterbox: t = !1,
  showPreviewButton: r = !1,
  previewInBrowserUrl: n
}) {
  let o = useRef(null);
  let [l, c] = fp(_$$Q2);
  useEffect(() => {
    let e = o.current;
    if (e) {
      let t = e => {
        "Escape" === e.key && c(!1);
      };
      e.addEventListener("keydown", t);
      return () => {
        e.removeEventListener("keydown", t);
      };
    }
  }, [c]);
  let d = r && n ? jsx("a", {
    href: n,
    target: "_blank",
    children: jsxs("div", {
      className: R,
      children: [jsx(_$$V, {}), tx("community.embed.preview_title")]
    })
  }) : r ? jsxs("div", {
    className: R,
    children: [jsx(K, {}), tx("community.embed.preview_title")]
  }) : jsx("div", {
    className: "hero--heroImageFullScreenIcon--Mn7mU",
    children: jsx(In, {
      icon: "full-screen-enter-32",
      fill: "menu"
    })
  });
  return jsxs("div", {
    ref: o,
    className: t ? "hero--heroImageWrapperWithLetterbox--68M0e hero--heroImageWrapper--Tr0mE" : "hero--heroImageWrapper--Tr0mE",
    onClick: () => {
      n || c(!0);
    },
    role: "button",
    tabIndex: -1,
    children: [jsx("div", {
      className: "hero--heroImage--fwiPW",
      "data-testid": "rdp-carousel-hero",
      children: e
    }), d]
  });
}
function P({
  children: e,
  is16to9AspectRatio: t
}) {
  let [r, i] = fp(_$$Q2);
  let n = e => {
    e.stopPropagation();
    i(!1);
  };
  return r ? jsx("div", {
    className: "hero--modalBackground--zjoAE",
    onClick: n,
    role: "button",
    tabIndex: -1,
    children: jsxs("div", {
      className: t ? "hero--rdpImageCloseupModal--7mxym" : "hero--rdpImageCloseupModal2to1AspectRatio---JVP8 hero--rdpImageCloseupModal--7mxym",
      onClick: n,
      role: "button",
      tabIndex: -1,
      children: [e, jsx("div", {
        className: "hero--heroImageExitFullScreenIcon--OjJSh hero--heroImageFullScreenIcon--Mn7mU",
        children: jsx(In, {
          icon: "full-screen-exit-32",
          fill: "menu"
        })
      })]
    })
  }) : null;
}
function M({
  children: e,
  currentIndex: t,
  totalItems: r,
  onPrev: n,
  onNext: o,
  onRestart: l,
  imageAspectRatio: c = "16 / 9",
  showLetterbox: d = !1
}) {
  let _ = useRef(null);
  let p = useRef(null);
  let h = useMemo(() => 0 === t, [t]);
  let x = useMemo(() => t === r - 1, [t, r]);
  let [f, y] = fp(_$$Q2);
  let g = useCallback(() => {
    p.current?.focus({
      preventScroll: !0
    });
  }, []);
  useEffect(() => {
    let e = _.current;
    if (f && e) {
      g();
      let t = e => {
        "ArrowLeft" === e.key ? n() : "ArrowRight" === e.key ? o() : "Escape" === e.key && y(!1);
      };
      e.addEventListener("keydown", t);
      return () => {
        e.removeEventListener("keydown", t);
      };
    }
  }, [g, o, n, y, f]);
  let v = useCallback(e => {
    e.stopPropagation();
    y(!1);
  }, [y]);
  let b = useMemo(() => _$$sx.$$if(!!c, {
    aspectRatio: c
  }).$, [c]);
  return f ? jsxs("div", {
    ref: _,
    className: "hero--lightboxContainer--c8JpB hero--modalBackground--zjoAE",
    children: [jsx("div", {
      className: "hero--lightboxTopRow---zayD",
      children: jsx("button", {
        onClick: v,
        className: k,
        children: jsx(In, {
          icon: "x-32",
          fill: "menu"
        })
      })
    }), jsxs("div", {
      className: "hero--lightboxMediumRow---Gopf",
      onBlur: g,
      children: [jsx("button", {
        className: k,
        disabled: h,
        onClick: n,
        children: jsx(In, {
          icon: "chevron-left-32",
          fill: h ? "menu-disabled" : "menu"
        })
      }), jsx("div", {
        ref: p,
        style: b,
        className: d ? "hero--lightboxHeroImageWithLetterbox--0kTBx hero--lightboxHeroImage--3orhF" : "hero--lightboxHeroImage--3orhF",
        role: "button",
        tabIndex: 0,
        onClick: x ? l : o,
        children: d ? jsx("div", {
          className: "hero--lightboxHeroImageWithLetterboxInnerContainer--buJug",
          children: e
        }) : e
      }), jsx("button", {
        className: k,
        disabled: x,
        onClick: o,
        children: jsx(In, {
          icon: "chevron-right-32",
          fill: x ? "menu-disabled" : "menu"
        })
      })]
    }), jsx("div", {
      className: "hero--lightboxBottomRow--wnrYI",
      children: jsxs("div", {
        className: "hero--lightboxControlsContainer--9MZdh",
        children: [jsxs("button", {
          className: "hero--lightboxControlsRestartButton--mVitF hero--lightboxControlsButton--Ve597 text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L",
          disabled: h,
          onClick: l,
          children: [jsx(In, {
            icon: "return-32",
            fill: h ? "menu-disabled" : "menu"
          }), tx("community.resource_page.media_carousel.restart")]
        }), jsx("button", {
          className: "hero--lightboxControlsButton--Ve597",
          disabled: h,
          onClick: n,
          children: jsx(In, {
            icon: "navigate-back-32",
            fill: h ? "menu-disabled" : "menu"
          })
        }), jsx("span", {
          className: "hero--lightboxProgressIndicator--w-JVT text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L",
          children: `${t + 1} / ${r}`
        }), jsx("button", {
          className: "hero--lightboxControlsButtonMirrored--8Ljmt hero--lightboxControlsButton--Ve597",
          disabled: x,
          onClick: o,
          children: jsx(In, {
            icon: "navigate-back-32",
            fill: x ? "menu-disabled" : "menu"
          })
        })]
      })
    })]
  }) : null;
}
let D = forwardRef(({
  index: e,
  selectedIndex: t,
  onClick: r,
  children: i
}, n) => jsx("div", {
  ref: n,
  role: "button",
  tabIndex: e,
  onClick: r,
  className: e === t ? "thumbnail--carouselThumbnailSelected--htIXX thumbnail--carouselThumbnailBase--WdkqA" : "thumbnail--carouselThumbnail--Gr5mS thumbnail--carouselThumbnailBase--WdkqA",
  children: i
}));
function F({
  thumbnailUrl: e,
  resizedThumbnailUrls: t,
  resourceId: r,
  altText: i,
  isVideo: n
}) {
  return jsxs(Fragment, {
    children: [jsx(F5, {
      thumbnailUrl: e,
      resourceId: r,
      altText: i,
      thumbnailContext: O7.DETAIL,
      resizedThumbnailUrls: t
    }), n && jsx("div", {
      className: "thumbnail--carouselThumbnailOverlayForVideo--pfKHV",
      children: jsx(_$$p, {})
    })]
  });
}
function H(e) {
  let t = XW(e) ? e.name : qD(e).name;
  return `${t} preview`;
}
export function $$U0({
  resource: e,
  resourceContent: t,
  is16to9AspectRatio: r
}) {
  let y = useRef(null);
  let v = useRef(null);
  let [w, C] = useState(!1);
  let [L, E] = useState(0);
  let [S, R] = useState(!1);
  let [k, U] = useState(!0);
  let W = useMemo(() => N6(e), [e]);
  let G = function (e, t, r = !1) {
    let s = fq(cX(e) ? eO(e)?.library_key : void 0);
    return useMemo(() => {
      let e = void 0 === s;
      let i = e ? t : s.length;
      if (i <= 1) return [];
      let n = r ? function (e) {
        let t = e;
        let r = [];
        for (; t > 16;) {
          r.push(12);
          t -= 12;
        }
        t > 12 && (r.push(8), t -= 8);
        t > 0 && r.push(t);
        return r;
      }(i) : [i];
      let o = [];
      n.reduce((t, r) => {
        let i = e ? [] : s.slice(t, t + r);
        o.push({
          type: "grid",
          thumbnailUrls: i
        });
        return t + r;
      }, 0);
      return o;
    }, [r, t, s]);
  }(e, W.length);
  let $ = useMemo(() => [...G, ...W], [W, G]);
  let z = useRef([]);
  useEffect(() => {
    E(G.length);
  }, [G.length, e]);
  let Q = useCallback(() => {
    y.current && C(y.current.scrollWidth > y.current.clientWidth);
  }, []);
  useEffect(Q, [Q, $.length]);
  wY(y, Q);
  let Z = useCallback(() => {
    let e = y.current;
    let t = z.current[$.length - 1];
    if (e && t) {
      let r = e.getBoundingClientRect();
      let s = t.getBoundingClientRect();
      R(e.scrollLeft > 0);
      U(Math.abs(s.right - r.right) > 1);
    }
  }, [$.length]);
  useEffect(() => {
    let e = y.current;
    let t = z.current[L];
    if (e && t) {
      let r = e.getBoundingClientRect();
      let s = t.getBoundingClientRect();
      let i = (() => {
        let e = parseInt(lp) / 2 + parseInt(v$);
        let t = 0 === L;
        let i = r.left + (t ? 0 : e);
        if (s.left < i) return s.left - i;
        let n = L === $.length - 1;
        let o = r.right - (n ? 0 : e);
        return s.right > o ? s.right - o : 0;
      })();
      Lg() || 0 === i || e.scrollBy({
        left: i,
        behavior: "smooth"
      });
    }
  }, [$.length, L]);
  let q = useCallback(() => {
    E(e => Math.max(0, e - 1));
  }, []);
  let Y = useCallback(() => {
    E(e => Math.min($.length - 1, e + 1));
  }, [$.length]);
  let X = useCallback(() => {
    E(0);
  }, []);
  let [J, K] = fp(_$$Q2);
  useEffect(() => {
    let e = v.current;
    if (!J && e) {
      z.current[L]?.focus({
        preventScroll: !0
      });
      let t = e => {
        let t = !0;
        "ArrowLeft" === e.key ? q() : "ArrowRight" === e.key ? Y() : "Enter" === e.key ? K(!0) : t = !1;
        t && e.preventDefault();
      };
      e.addEventListener("keydown", t);
      return () => {
        e.removeEventListener("keydown", t);
      };
    }
  }, [Y, q, L, K, J]);
  let ee = Jm();
  let et = z$(e);
  let er = cX(e);
  let es = tv(e);
  let ei = ZA(e);
  let en = _$$a({
    isSitesTemplate: ei,
    resourceContentId: t.id,
    publishedSiteUrl: eO(t)?.published_site_url
  });
  if (et === Z4.EMBED || 0 === $.length) return jsx(V, {
    resource: e,
    heroType: et,
    is16to9AspectRatio: r
  });
  let eo = L < $.length ? $[L] : $[0];
  let ea = Object.keys($).length > 1;
  return jsxs(Fragment, {
    children: [function (i) {
      let o = H(e);
      switch (i.type) {
        case "image":
          let [a, c] = _$$P(i);
          return jsxs(Fragment, {
            children: [jsx(A, {
              showLetterbox: er,
              showPreviewButton: er || ei || !!en,
              previewInBrowserUrl: en,
              children: es ? jsx(_$$Q, {
                src: a,
                loading: "lazy",
                alt: o,
                draggable: !1,
                crossOrigin: "use-credentials"
              }) : jsx(F5, {
                thumbnailUrl: a,
                resourceId: e.id,
                altText: o,
                thumbnailContext: O7.DETAIL,
                resizedThumbnailUrls: c
              })
            }), er ? jsx(M, {
              currentIndex: L,
              totalItems: $.length,
              onPrev: q,
              onNext: Y,
              onRestart: X,
              showLetterbox: er,
              children: jsx(ru, {
                thumbnailUrl: a,
                altText: o,
                resourceId: e.id
              })
            }) : jsx(P, {
              is16to9AspectRatio: r,
              children: es ? jsx(_$$Q, {
                src: a,
                loading: "lazy",
                alt: o,
                draggable: !1,
                crossOrigin: "use-credentials"
              }) : jsx(ru, {
                thumbnailUrl: a,
                altText: o,
                resourceId: e.id
              })
            })]
          });
        case "video":
          return jsx("div", {
            className: "hero--heroVideo--XAdfp hero--heroImage--fwiPW",
            children: jsx(_$$A2, {
              src: Mf(i, t),
              fallbackSrc: i.url,
              useHLS: !0,
              autoPlay: !0,
              muted: !0,
              onEnded: () => {
                sx("rdp_video_ended", {
                  community_resource_id: e.id,
                  resouce_type: Vm(t),
                  searchSessionId: ee
                });
              }
            })
          });
        case "grid":
          return jsxs(Fragment, {
            children: [jsx(A, {
              showPreviewButton: er || ei || !!en,
              previewInBrowserUrl: en,
              children: jsx(N, {
                thumbnailUrls: i.thumbnailUrls,
                altText: o,
                size: "hero"
              })
            }), er ? jsx(M, {
              currentIndex: L,
              totalItems: $.length,
              onPrev: q,
              onNext: Y,
              onRestart: X,
              children: jsx(N, {
                thumbnailUrls: i.thumbnailUrls,
                altText: o,
                size: "fullscreen_hero"
              })
            }) : jsx(P, {
              is16to9AspectRatio: r,
              children: jsx(N, {
                thumbnailUrls: i.thumbnailUrls,
                altText: o,
                size: "fullscreen_hero"
              })
            })]
          });
        default:
          throwTypeError(i);
      }
    }(eo), ea && jsxs("div", {
      ref: v,
      className: xW,
      "data-testid": "rdp-carousel-thumbnails",
      children: [jsx("div", {
        ref: y,
        className: w ? UY : Ec,
        onScroll: Z,
        children: Object.values($).map(function (r, i) {
          let o = null;
          let a = H(e);
          if ("image" === r.type || "video" === r.type) {
            let [t, i] = _$$P(r);
            o = jsx(F, {
              thumbnailUrl: t,
              resizedThumbnailUrls: i,
              resourceId: e.id,
              altText: a,
              isVideo: "video" === r.type
            });
          } else "grid" === r.type ? o = jsx(N, {
            thumbnailUrls: r.thumbnailUrls,
            altText: a,
            size: "thumbnail"
          }) : throwTypeError(r);
          return jsx(D, {
            ref: e => {
              z.current[i] = e;
            },
            index: i,
            selectedIndex: L,
            onClick: () => {
              E(i);
              sx("CTA Clicked", {
                name: "Resource Carousel Thumbnail Clicked",
                community_resource_id: e.id,
                index: i,
                media_type: r.type,
                resouce_type: Vm(t),
                searchSessionId: ee
              });
            },
            children: o
          }, i);
        })
      }), w && S && jsxs(Fragment, {
        children: [jsx("div", {
          className: sp
        }), jsx(_$$E, {
          "aria-label": _$$t("community.detail_view.previous_item"),
          className: T9,
          htmlAttributes: {
            tabIndex: -1
          },
          onClick: q,
          children: jsx(In, {
            icon: "chevron-left-32"
          })
        })]
      }), w && k && jsxs(Fragment, {
        children: [jsx("div", {
          className: jp
        }), jsx(_$$E, {
          "aria-label": _$$t("community.detail_view.next_item"),
          className: aT,
          htmlAttributes: {
            tabIndex: -1
          },
          onClick: Y,
          children: jsx(In, {
            icon: "chevron-right-32"
          })
        })]
      })]
    })]
  });
}
function V({
  resource: e,
  heroType: t,
  is16to9AspectRatio: r
}) {
  let i = XW(e) ? qY(e) : e;
  let n = ZA(e);
  let o = _$$a({
    isSitesTemplate: n,
    resourceContentId: i?.id,
    publishedSiteUrl: eO(i)?.published_site_url
  });
  if (t !== Z4.EMBED) {
    let t = e.thumbnail_url ?? void 0;
    let i = XW(e) ? e.thumbnail_src_set : U(e) && e.resized_thumbnail_urls;
    let a = cX(e);
    return jsxs(Fragment, {
      children: [jsx(A, {
        showPreviewButton: a || n || !!o,
        previewInBrowserUrl: o,
        children: jsx(F5, {
          thumbnailUrl: t,
          resourceId: e.id,
          altText: H(e),
          thumbnailContext: O7.DETAIL,
          resizedThumbnailUrls: i || void 0
        })
      }), jsx(P, {
        is16to9AspectRatio: r,
        children: jsx(ru, {
          thumbnailUrl: t,
          altText: H(e),
          resourceId: e.id
        })
      })]
    });
  }
  return i ? jsx("div", {
    className: Wf,
    "data-testid": "rdp-embed",
    children: jsx(_$$A, {
      enableEmbedOnSmallScreens: !0,
      resource: i
    })
  }) : null;
}
export const X = $$U0;