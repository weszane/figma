import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { noop } from 'lodash-es';
import { MenuRootComp, MenuContainerComp, MenuItemComp, MenuGroupComp, setupMenu } from "../figma_app/860955";
import { A as _$$A } from "../905/351112";
import { getSearchSessionIdFromSelector, getCurrentQueryId } from "../figma_app/387599";
import { getResourceUserCount, getResourceName } from "../figma_app/777551";
import { hasLibraryKey, mapEditorTypeToVt, hasResourceType, getTemplateType, isWidgetResource, isCooperTemplateFile, hasOrgPrivateContent, getTemplateContent, hasOrgPrivateResourceType } from "../figma_app/427318";
import { useResourceRouteParams } from "../figma_app/979714";
import { useCurrentPrivilegedPlan, useCurrentPlanUser } from "../figma_app/465071";
import { ViewMode } from "../figma_app/756995";
import { w4, y1 } from "../905/445814";
import { V } from "../figma_app/385855";
import { q } from "../905/600041";
import { renderI18nText, getI18nString } from "../905/303541";
import { i as _$$i } from "../905/977961";
import { a as _$$a } from "../905/329735";
import { LikeCountDisplay, UsageCountDisplay } from "../905/14017";
import { EU } from "../figma_app/835219";
import { Q } from "../905/978641";
import { ResourceTypeEnum } from "../figma_app/306946";
import { l as _$$l } from "../905/716947";
import { useLibrary } from "../905/420347";
import { throwTypeError } from "../figma_app/465776";
import { DesignsList } from "../905/171275";
import { UI3ConditionalWrapper } from "../905/341359";
import { hasDesktopAPI } from "../figma_app/876459";
import { VisualBellActions } from "../905/302958";
import { buildFullCommunityUrl, copyToClipboard } from "../figma_app/471982";
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
  let m = hasLibraryKey(e);
  m ? (c = mapEditorTypeToVt(e), o = e.signedThumbnailUrl, a = e.libraryKey, l = e.publishedByUserNullable?.handle) : (c = hasResourceType(e) ? e.resource_type : getTemplateType(e), o = isWidgetResource(e) && "icon_url" in e ? e.icon_url : e.thumbnail_url, a = isCooperTemplateFile(e) && hasOrgPrivateContent(e) ? getTemplateContent(e)?.library_key : void 0, l = e.publisher.name);
  let {
    numComponents,
    librariesIsLoading
  } = function (e) {
    let t = useLibrary(e ? _$$l(e) : null);
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
  m || hasOrgPrivateResourceType(e) ? c === ResourceTypeEnum.COOPER_TEMPLATE_FILE && !librariesIsLoading && numComponents > 0 && (S = jsxs("div", {
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
      children: [jsx(LikeCountDisplay, {
        currentUserLiked: !1,
        likeCount: e.like_count,
        disableFontStyling: !0
      }), jsx(UsageCountDisplay, {
        usageCount: getResourceUserCount(e),
        disableFontStyling: !0
      })]
    })]
  });
  let R = c === ResourceTypeEnum.COOPER_TEMPLATE_FILE ? jsx(q, {
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
        case ResourceTypeEnum.FIGJAM_TEMPLATE:
          return DesignsList.WHITEBOARD;
        case ResourceTypeEnum.SLIDE_TEMPLATE:
          return DesignsList.SLIDES;
        case ResourceTypeEnum.SITE_TEMPLATE:
          return DesignsList.SITES;
        case ResourceTypeEnum.PROTOTYPE:
        case ResourceTypeEnum.DESIGN_TEMPLATE:
        case ResourceTypeEnum.UI_KIT:
        case ResourceTypeEnum.PLUGIN:
        case ResourceTypeEnum.WIDGET:
        case ResourceTypeEnum.FIGMAKE_TEMPLATE:
          return DesignsList.DESIGN;
        case ResourceTypeEnum.COOPER_TEMPLATE_FILE:
        case ResourceTypeEnum.COOPER_TEMPLATE_ASSET:
          return DesignsList.COOPER;
        default:
          throwTypeError(e);
      }
    }(c),
    noBorder: !0,
    addtlStyles: {
      objectFit: c === ResourceTypeEnum.WIDGET ? "contain" : "cover",
      padding: c === ResourceTypeEnum.WIDGET ? "16px" : void 0
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
            case ResourceTypeEnum.PLUGIN:
              return y1.PLUGIN;
            case ResourceTypeEnum.WIDGET:
              return y1.WIDGET;
            case ResourceTypeEnum.FIGJAM_TEMPLATE:
              return y1.WHITEBOARD;
            case ResourceTypeEnum.SLIDE_TEMPLATE:
              return y1.SLIDES;
            case ResourceTypeEnum.SITE_TEMPLATE:
              return y1.SITES;
            case ResourceTypeEnum.PROTOTYPE:
            case ResourceTypeEnum.DESIGN_TEMPLATE:
            case ResourceTypeEnum.UI_KIT:
              return y1.DESIGN;
            case ResourceTypeEnum.COOPER_TEMPLATE_FILE:
            case ResourceTypeEnum.COOPER_TEMPLATE_ASSET:
              return y1.COOPER;
            case ResourceTypeEnum.FIGMAKE_TEMPLATE:
              return y1.FIGMAKE;
            default:
              throwTypeError(e);
          }
        }(c)
      }),
      title: function (e) {
        let t = hasLibraryKey(e);
        let r = t ? e.name : getResourceName(e);
        return t || hasOrgPrivateResourceType(e) ? r : jsx("div", {
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
  let c = hasResourceType(resource) ? resource.rdp_url : buildFullCommunityUrl(resource);
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
    copyToClipboard(c);
    r(VisualBellActions.enqueue({
      message: getI18nString("copy_to_clipboard.link_copied_to_clipboard"),
      type: "success"
    }));
  }, [c, r]);
  return jsx(UI3ConditionalWrapper, {
    children: jsx(MenuRootComp, {
      manager: e,
      children: jsx(MenuContainerComp, {
        children: hasDesktopAPI() ? jsxs(Fragment, {
          children: [jsx(MenuItemComp, {
            onClick: d,
            children: jsx("div", {
              style: {
                minWidth: 118
              },
              children: getI18nString("tile.dropdown.open")
            })
          }), jsx(MenuItemComp, {
            onClick: _,
            children: getI18nString("file_browser.copy_link")
          })]
        }) : jsxs(Fragment, {
          children: [jsxs(MenuGroupComp, {
            children: [jsx(MenuItemComp, {
              onClick: d,
              children: jsx("div", {
                style: {
                  minWidth: 118
                },
                children: getI18nString("tile.dropdown.open")
              })
            }), jsx(MenuItemComp, {
              onClick: m,
              children: getI18nString("file_browser.open_in_new_tab")
            })]
          }), jsx(MenuItemComp, {
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
  resourceImpressionTracking: h = noop
}) {
  let x = useDispatch();
  let f = useResourceRouteParams();
  let y = useCurrentPrivilegedPlan("ResourceHubItemsView").unwrapOr(null);
  let g = useCurrentPlanUser("ResourceHubItemsView").unwrapOr(null);
  let v = getSearchSessionIdFromSelector();
  let b = getCurrentQueryId();
  let [j, w] = useState(null);
  let {
    getContextMenuTriggerProps,
    manager
  } = setupMenu();
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
    hasLibraryKey(e) ? N(e) : hasOrgPrivateResourceType(e) ? hasOrgPrivateContent(e) && I(e) : T(e, t);
  };
  let R = e => {
    w({
      resource: e,
      sharedRouteParams: f ?? void 0
    });
  };
  let k = e => hasLibraryKey(e) ? e.name : getResourceName(e);
  let A = Array(r).fill(1);
  return jsxs(Fragment, {
    children: [jsx(_$$A, {
      getAriaLabel: t ? () => "" : e => k(e) ?? "",
      handleOpenItem: t ? () => {} : (e, t) => S(e, t),
      items: t ? A : e,
      multiselectDisabled: !0,
      viewType: ViewMode.GRID,
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
            hasLibraryKey(e) || hasOrgPrivateResourceType(e) || hasOrgPrivateContent(e) || (getContextMenuTriggerProps().onContextMenu(t), R(e));
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