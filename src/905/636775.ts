import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { B } from "../905/714743";
import { tx } from "../905/303541";
import { r as _$$r } from "../905/534055";
import { s as _$$s } from "../905/328136";
import { Mr } from "../figma_app/795938";
import { tf } from "../figma_app/831799";
import { uF } from "../figma_app/300692";
import { WM, Wh, dY, sU } from "../905/838765";
import { YW } from "../figma_app/870683";
import { dn } from "../figma_app/994403";
import { Ay } from "../figma_app/778880";
import { cx } from "../figma_app/558929";
import { to } from "../905/156213";
import { k as _$$k } from "../905/882646";
import { iZ } from "../905/372672";
import { xQ } from "../figma_app/45218";
import { FW } from "../figma_app/155287";
import { WW } from "../figma_app/764679";
import { x as _$$x } from "../905/423181";
import { x8, vE } from "../905/988303";
import { Qe, _y, MJ } from "../905/5637";
import { A as _$$A } from "../5724/322086";
import { Q7 } from "../figma_app/878651";
import { z } from "../905/255946";
import { m_, hz } from "../905/540198";
import { A as _$$A2 } from "../1617/579393";
function T(e) {
  let t = useDispatch();
  let i = iZ();
  let {
    dropdownIsShown,
    toggleSwitchEditorDropdown,
    PluginTrySwitchEditorDropdown
  } = WW(e.resource, "left", e.viewContext);
  let d = useRef(null);
  let c = xQ(e.resource);
  let u = uF(e.resource);
  let m = u.manifest.editorType?.[0] ?? FW.FIGMA;
  return e.isDisabled ? jsx(x8, {
    icon: _$$A,
    metric: e.resource.unique_run_count
  }) : jsxs("div", {
    onMouseLeave: () => toggleSwitchEditorDropdown(d, !1),
    children: [jsx("div", {
      ref: d,
      onMouseEnter: () => toggleSwitchEditorDropdown(d, !0),
      children: jsx(vE, {
        icon: _$$A,
        hoverIcon: _$$A,
        activeIcon: _$$A,
        metric: e.resource.unique_run_count,
        classNameOverride: dropdownIsShown ? m === FW.FIGMA ? Qe : _y : void 0,
        onClick: n => {
          if (n.preventDefault(), n.stopPropagation(), i) {
            if (Ay.mobile) {
              t(to({
                type: _$$x,
                data: {
                  dispatch: t
                }
              }));
              return;
            }
            toggleSwitchEditorDropdown(d);
          } else {
            let i = _$$k(e.resource);
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
    version: uF(t)
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
      href: YW(t.id),
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
  let c = "search" === useSelector(({
    selectedView: e
  }) => e).view;
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
          children: [jsx(B, {
            className: hz,
            svg: _$$A2
          }), tx("community.cards.private"), "OrgWidgetsView" === i && jsx(_$$r, {
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
export let $$F0 = tf(function (e) {
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
tf(function (e) {
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
        href: YW(e.widget.id),
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