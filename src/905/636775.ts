import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { _y, MJ, Qe } from "../905/5637";
import { showModalHandler } from "../905/156213";
import { z } from "../905/255946";
import { renderI18nText } from "../905/303541";
import { s as _$$s } from "../905/328136";
import { selectCurrentUser } from "../905/372672";
import { x as _$$x } from "../905/423181";
import { r as _$$r } from "../905/534055";
import { hz, m_ } from "../905/540198";
import { SvgComponent } from "../905/714743";
import { dY, sU, Wh, WM } from "../905/838765";
import { generateCommunityUrl } from "../905/882646";
import { IconMetricDisplay, IconMetricInteractive } from "../905/988303";
import { A as _$$A2 } from "../1617/579393";
import { A as _$$A } from "../5724/322086";
import { isWidget } from "../figma_app/45218";
import { ManifestEditorType } from "../figma_app/155287";
import { getPluginVersion } from "../figma_app/300692";
import { cx } from "../figma_app/558929";
import { WW } from "../figma_app/764679";
import { BrowserInfo } from "../figma_app/778880";
import { Mr } from "../figma_app/795938";
import { withTrackedClick } from "../figma_app/831799";
import { generateCommunityWidgetUrl } from "../figma_app/870683";
import { Q7 } from "../figma_app/878651";
import { dn } from "../figma_app/994403";
function T(e) {
  let t = useDispatch();
  let i = selectCurrentUser();
  let {
    dropdownIsShown,
    toggleSwitchEditorDropdown,
    PluginTrySwitchEditorDropdown
  } = WW(e.resource, "left", e.viewContext);
  let d = useRef(null);
  let c = isWidget(e.resource);
  let u = getPluginVersion(e.resource);
  let m = u.manifest.editorType?.[0] ?? ManifestEditorType.FIGMA;
  return e.isDisabled ? jsx(IconMetricDisplay, {
    icon: _$$A,
    metric: e.resource.unique_run_count
  }) : jsxs("div", {
    onMouseLeave: () => toggleSwitchEditorDropdown(d, !1),
    children: [jsx("div", {
      ref: d,
      onMouseEnter: () => toggleSwitchEditorDropdown(d, !0),
      children: jsx(IconMetricInteractive, {
        icon: _$$A,
        hoverIcon: _$$A,
        activeIcon: _$$A,
        metric: e.resource.unique_run_count,
        classNameOverride: dropdownIsShown ? m === ManifestEditorType.FIGMA ? Qe : _y : void 0,
        onClick: n => {
          if (n.preventDefault(), n.stopPropagation(), i) {
            if (BrowserInfo.mobile) {
              t(showModalHandler({
                type: _$$x,
                data: {
                  dispatch: t
                }
              }));
              return;
            }
            toggleSwitchEditorDropdown(d);
          } else {
            let i = generateCommunityUrl(e.resource);
            t(cx({
              isWidget: c,
              redirectPath: i
            }));
          }
        }
      })
    }), dropdownIsShown && jsxs(Fragment, {
      children: [jsx("div", {
        className: MJ
      }), jsx(PluginTrySwitchEditorDropdown, {})]
    })]
  });
}
function O({
  onClick: e,
  widget: t
}) {
  let i = _$$s();
  return {
    onTileClicked: useCallback(n => {
      e?.(t.id);
      i(t, n);
    }, [t, e, i]),
    version: getPluginVersion(t)
  };
}
export function $$D2({
  version: e,
  widget: t,
  lastViewedAtForNewBadge: i,
  isInItemsView: r
}) {
  let a = jsxs(Fragment, {
    children: [!!(i && Date.parse(t.created_at) > Date.parse(i)) && jsx(Q7, {}), jsx(z, {
      src: e.redirect_snapshot_url || e.redirect_icon_url,
      context: "community"
    })]
  });
  return jsxs(WM, {
    removeBorder: r,
    children: [jsx(Wh.BottomLeft, {
      children: jsx(dn, {
        editorType: e.manifest.editorType
      })
    }), r ? a : jsx("a", {
      href: generateCommunityWidgetUrl(t.id),
      children: a
    })]
  });
}
export function $$L1({
  version: e,
  widget: t,
  viewContext: i
}) {
  let r = !!t.org_id;
  let d = useSelector(e => e.orgById);
  let c = useSelector(({
    selectedView: e
  }) => e).view === "search";
  let u = t.org_id && d[t.org_id];
  return jsxs(Fragment, {
    children: [jsxs(dY.MetadataContainer, {
      children: [r ? jsx(dY.PublisherAvatar, {
        publishers: t.community_publishers?.accepted
      }) : jsx(dY.PublisherAvatarWithDropdown, {
        publishers: t.community_publishers?.accepted
      }), jsx(dY.TextMetadataLayout, {
        primaryText: e.name,
        secondaryText: r ? jsx(dY.MetadataAuthor, {
          publishers: t.community_publishers?.accepted
        }) : jsx(dY.MetadataAuthorWithDropdown, {
          publishers: t.community_publishers?.accepted
        }),
        planIconEntity: c ? u : null
      })]
    }), jsx(dY.ResourceActionContainer, {
      children: r ? jsx(dY.ButtonWrapper, {
        children: jsxs("div", {
          className: m_,
          children: [jsx(SvgComponent, {
            className: hz,
            svg: _$$A2
          }), renderI18nText("community.cards."), i === "OrgWidgetsView" && jsx(_$$r, {
            resource: t
          })]
        })
      }) : jsx(dY.ButtonWrapper, {
        children: jsx(T, {
          resource: t,
          viewContext: i
        })
      })
    })]
  });
}
export let $$F0 = withTrackedClick(e => {
  let {
    onTileClicked,
    version
  } = O(e);
  return jsx(sU, {
    onClick: onTileClicked,
    image: jsx($$D2, {
      version,
      widget: e.widget,
      lastViewedAtForNewBadge: e.lastViewedAtForNewBadge
    }),
    bottomRow: jsx($$L1, {
      widget: e.widget,
      version,
      viewContext: e.viewContext
    })
  });
});
withTrackedClick(e => {
  let {
    onTileClicked,
    version
  } = O(e);
  return jsx(sU, {
    onClick: onTileClicked,
    image: jsxs(WM, {
      children: [jsx(Wh.TopLeft, {
        children: jsx(Mr, {
          resource: e.widget
        })
      }), jsx(Wh.BottomLeft, {
        children: jsx(dn, {
          editorType: version.manifest.editorType
        })
      }), jsx("a", {
        href: generateCommunityWidgetUrl(e.widget.id),
        children: jsx(z, {
          src: version.redirect_snapshot_url || version.redirect_icon_url,
          context: "community"
        })
      })]
    }),
    bottomRow: jsxs(Fragment, {
      children: [jsx(dY.MetadataContainer, {
        children: jsx(dY.TextMetadataLayout, {
          primaryText: version.name
        })
      }), jsx(dY.ResourceActionContainer, {
        children: jsx(dY.ButtonWrapper, {
          children: jsx(T, {
            resource: e.widget
          })
        })
      })]
    })
  });
});
export const F9 = $$F0;
export const aA = $$L1;
export const Ke = $$D2;