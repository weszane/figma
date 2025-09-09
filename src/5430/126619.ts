import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { bL, mc, q7, YJ, b as _$$b } from "../figma_app/860955";
import { A as _$$A } from "../905/351112";
import { Jm, BY } from "../figma_app/387599";
import { mk, K2 } from "../figma_app/777551";
import { o_, Qd, ws, bc, $3, tv, Tv, B2, Gk } from "../figma_app/427318";
import { Om } from "../figma_app/979714";
import { useCurrentPrivilegedPlan, useCurrentPlanUser } from "../figma_app/465071";
import { XU } from "../figma_app/756995";
import { w4, y1 } from "../905/445814";
import { V } from "../figma_app/385855";
import { q } from "../905/600041";
import { renderI18nText, getI18nString } from "../905/303541";
import { i as _$$i } from "../905/977961";
import { a as _$$a } from "../905/329735";
import { cz, i8 } from "../905/14017";
import { EU } from "../figma_app/835219";
import { Q } from "../905/978641";
import { vt } from "../figma_app/306946";
import { l as _$$l } from "../905/716947";
import { on } from "../905/420347";
import { throwTypeError } from "../figma_app/465776";
import { F } from "../905/171275";
import { J } from "../905/341359";
import { hasDesktopAPI } from "../figma_app/876459";
import { VisualBellActions } from "../905/302958";
import { DV, lW } from "../figma_app/471982";
import { FM, RL, Gq, xb as _$$xb } from "../5430/773914";
import { LP, L_ } from "../7222/418961";
import { Qp, JR, Wi } from "../figma_app/162641";
function E({
  resource: e,
  onChildFocusChange: t,
  isHovered: r,
  onIntersectionChange: i,
  onContextMenu: n
}) {
  let o;
  let a;
  let l;
  let c;
  let m = o_(e);
  m ? (c = Qd(e), o = e.signedThumbnailUrl, a = e.libraryKey, l = e.publishedByUserNullable?.handle) : (c = ws(e) ? e.resource_type : bc(e), o = $3(e) && "icon_url" in e ? e.icon_url : e.thumbnail_url, a = tv(e) && Tv(e) ? B2(e)?.library_key : void 0, l = e.publisher.name);
  let {
    numComponents,
    librariesIsLoading
  } = function (e) {
    let t = on(e ? _$$l(e) : null);
    let r = t.data;
    return {
      numComponents: r && "num_components" in r ? r.num_components : 0,
      librariesIsLoading: "loading" === t.status
    };
  }(a);
  let E = renderI18nText("community.resource_tiles.by_author", {
    author: l
  });
  let S = E;
  m || Gk(e) ? c === vt.COOPER_TEMPLATE_FILE && !librariesIsLoading && numComponents > 0 && (S = jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4",
    children: [jsx("span", {
      className: "xb3r6kr xlyipyv",
      children: E
    }), "\xa0\xb7\xa0", renderI18nText("community.resource_tiles.templates_count", {
      count: numComponents
    })]
  })) : S = jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4",
    children: [jsx("span", {
      className: "xb3r6kr xlyipyv",
      children: EU(e)
    }), "\xa0\xa0\xb7\xa0\xa0", jsxs("div", {
      className: "x78zum5 x1q0g3np x6s0dn4 x17d4w8g",
      children: [jsx(cz, {
        currentUserLiked: !1,
        likeCount: e.like_count,
        disableFontStyling: !0
      }), jsx(i8, {
        usageCount: mk(e),
        disableFontStyling: !0
      })]
    })]
  });
  let R = c === vt.COOPER_TEMPLATE_FILE ? jsx(q, {
    noBorder: !0,
    children: jsx(Q, {
      src: o ?? void 0,
      draggable: !1,
      loading: "lazy",
      crossOrigin: "use-credentials"
    })
  }) : jsx(V, {
    thumbnailUrl: o,
    thumbnailType: function (e) {
      switch (e) {
        case vt.FIGJAM_TEMPLATE:
          return F.WHITEBOARD;
        case vt.SLIDE_TEMPLATE:
          return F.SLIDES;
        case vt.SITE_TEMPLATE:
          return F.SITES;
        case vt.PROTOTYPE:
        case vt.DESIGN_TEMPLATE:
        case vt.UI_KIT:
        case vt.PLUGIN:
        case vt.WIDGET:
        case vt.FIGMAKE_TEMPLATE:
          return F.DESIGN;
        case vt.COOPER_TEMPLATE_FILE:
        case vt.COOPER_TEMPLATE_ASSET:
          return F.COOPER;
        default:
          throwTypeError(e);
      }
    }(c),
    noBorder: !0,
    addtlStyles: {
      objectFit: c === vt.WIDGET ? "contain" : "cover",
      padding: c === vt.WIDGET ? "16px" : void 0
    },
    disableSmartBackground: !0
  });
  return jsxs("div", {
    onContextMenu: n,
    children: [jsx(_$$a, {
      callback: t => {
        t[0] && i(e, t[0].isIntersecting);
      }
    }), jsx(_$$i, {
      thumbnail: R,
      bottomLeftIcon: jsx(w4, {
        size: 16,
        type: function (e) {
          switch (e) {
            case vt.PLUGIN:
              return y1.PLUGIN;
            case vt.WIDGET:
              return y1.WIDGET;
            case vt.FIGJAM_TEMPLATE:
              return y1.WHITEBOARD;
            case vt.SLIDE_TEMPLATE:
              return y1.SLIDES;
            case vt.SITE_TEMPLATE:
              return y1.SITES;
            case vt.PROTOTYPE:
            case vt.DESIGN_TEMPLATE:
            case vt.UI_KIT:
              return y1.DESIGN;
            case vt.COOPER_TEMPLATE_FILE:
            case vt.COOPER_TEMPLATE_ASSET:
              return y1.COOPER;
            case vt.FIGMAKE_TEMPLATE:
              return y1.FIGMAKE;
            default:
              throwTypeError(e);
          }
        }(c)
      }),
      title: function (e) {
        let t = o_(e);
        let r = t ? e.name : K2(e);
        return t || Gk(e) ? r : jsx("div", {
          className: "x78zum5 x1q0g3np x6s0dn4 x1jnr06f",
          children: r
        });
      }(e),
      subtitle: S,
      onFocus: () => {
        t?.();
      },
      onBlur: () => {
        t?.();
      },
      isHovered: r
    })]
  });
}
function M({
  manager: e,
  menuData: t
}) {
  let r = useDispatch();
  let {
    resource,
    sharedRouteParams
  } = t;
  let c = ws(resource) ? resource.rdp_url : DV(resource);
  let d = useCallback(() => {
    FM(r, resource, {
      openInNewTab: !1,
      shouldUpdateUrl: !0
    });
  }, [resource, r]);
  let m = useCallback(() => {
    RL(resource, sharedRouteParams);
  }, [resource, sharedRouteParams]);
  let _ = useCallback(() => {
    lW(c);
    r(VisualBellActions.enqueue({
      message: getI18nString("copy_to_clipboard.link_copied_to_clipboard"),
      type: "success"
    }));
  }, [c, r]);
  return jsx(J, {
    children: jsx(bL, {
      manager: e,
      children: jsx(mc, {
        children: hasDesktopAPI() ? jsxs(Fragment, {
          children: [jsx(q7, {
            onClick: d,
            children: jsx("div", {
              style: {
                minWidth: 118
              },
              children: getI18nString("tile.dropdown.open")
            })
          }), jsx(q7, {
            onClick: _,
            children: getI18nString("file_browser.copy_link")
          })]
        }) : jsxs(Fragment, {
          children: [jsxs(YJ, {
            children: [jsx(q7, {
              onClick: d,
              children: jsx("div", {
                style: {
                  minWidth: 118
                },
                children: getI18nString("tile.dropdown.open")
              })
            }), jsx(q7, {
              onClick: m,
              children: getI18nString("file_browser.open_in_new_tab")
            })]
          }), jsx(q7, {
            onClick: _,
            children: getI18nString("file_browser.copy_link")
          })]
        })
      })
    })
  });
}
function D() {
  return jsx(_$$i, {
    thumbnail: jsx(Qp, {
      className: "x186iv6y x1v8gsql",
      animationType: JR.NO_SHIMMER
    }),
    bottomLeftIcon: jsx(Qp, {
      className: "x1kky2od xlup9mm x1v8gsql x18zih8k",
      animationType: JR.NO_SHIMMER
    }),
    title: jsx(Wi, {
      className: "xygnafs xlup9mm x1v8gsql x18zih8k",
      animationType: JR.NO_SHIMMER
    }),
    subtitle: jsx(Wi, {
      className: "x29ncy0 xlup9mm x1v8gsql x18zih8k",
      animationType: JR.NO_SHIMMER
    })
  });
}
export function $$F0({
  resources: e,
  isLoading: t = !1,
  loadingTileCount: r = 10,
  resourceImpressionTracking: h = lQ
}) {
  let x = useDispatch();
  let f = Om();
  let y = useCurrentPrivilegedPlan("ResourceHubItemsView").unwrapOr(null);
  let g = useCurrentPlanUser("ResourceHubItemsView").unwrapOr(null);
  let v = Jm();
  let b = BY();
  let [j, w] = useState(null);
  let {
    getContextMenuTriggerProps,
    manager
  } = _$$b();
  let T = (t, r) => {
    let s = !!f && (r.ctrlKey || r.metaKey);
    FM(x, t, s ? {
      openInNewTab: !0,
      sharedRouteParams: f
    } : {
      openInNewTab: !1,
      shouldUpdateUrl: !0
    });
    let i = e.findIndex(e => e.id === t.id);
    LP(t.id, t.resource_type, "community", i, v, b);
  };
  let I = t => {
    let r = e.findIndex(e => e.id === t.id);
    Gq(x, t, g, y);
    LP(t.id, t.resource_type, "internal", r, v, b);
  };
  let N = e => {
    _$$xb(x, e);
    L_(e.id, e.editorType);
  };
  let S = (e, t) => {
    o_(e) ? N(e) : Gk(e) ? Tv(e) && I(e) : T(e, t);
  };
  let R = e => {
    w({
      resource: e,
      sharedRouteParams: f ?? void 0
    });
  };
  let k = e => o_(e) ? e.name : K2(e);
  let A = Array(r).fill(1);
  return jsxs(Fragment, {
    children: [jsx(_$$A, {
      getAriaLabel: t ? () => "" : e => k(e) ?? "",
      handleOpenItem: t ? () => {} : (e, t) => S(e, t),
      items: t ? A : e,
      multiselectDisabled: !0,
      viewType: XU.GRID,
      gridViewProps: {
        tileBorderRadius: "large",
        nestedFocus: !0,
        showHoverBorder: !0,
        forceSingleClick: !0,
        disableScrollTo: !0,
        renderTile: (e, r, {
          isHovered: i
        }) => t ? jsx(D, {}) : jsx(E, {
          resource: e,
          onChildFocusChange: r,
          isHovered: i,
          onIntersectionChange: h,
          onContextMenu: t => {
            o_(e) || Gk(e) || Tv(e) || (getContextMenuTriggerProps().onContextMenu(t), R(e));
          }
        })
      }
    }), j && jsx(M, {
      manager,
      menuData: j
    })]
  });
}
export const T = $$F0;