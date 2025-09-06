import { kf } from "../905/992467";
import _require from "../5430/337035";
import { jsx, jsxs } from "react/jsx-runtime";
import { Component, PureComponent, createElement } from "react";
import { connect } from "../vendor/514228";
import { _ as _$$_ } from "../figma_app/496441";
import { Gc } from "../905/63728";
import { BrowserInfo } from "../figma_app/778880";
import { $J } from "../905/491152";
import { h1 } from "../905/986103";
import { f as _$$f } from "../905/671470";
import { C as _$$C } from "../905/196436";
import { renderI18nText } from "../905/303541";
import { sf } from "../905/929976";
import { r } from "../905/620668";
import { FFileType } from "../figma_app/191312";
import { XG } from "../figma_app/350203";
import { uF } from "../figma_app/300692";
import { aL } from "../figma_app/45218";
import { dt } from "../figma_app/162807";
import { XU } from "../figma_app/756995";
import { V } from "../905/480825";
import { y2 } from "../905/776312";
import { Qi } from "../figma_app/599917";
import { ho } from "../figma_app/870683";
import { li, dn } from "../figma_app/994403";
import { AB } from "../figma_app/878651";
import { h as _$$h } from "../905/971482";
import { p_, qp, JC, PI, HE, JV, KG, Np, BZ, CK, lG, kw, PY, GA, jN, qV, zB, vQ, Qj, kU, lk } from "../905/573610";
var n;
var $$r0;
let f = kf("lazy_cmty_plugin_try_button", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await _require).PluginTryButton
  })
});
function _(e) {
  return jsx(f, {
    fallback: null,
    errorFallback: null,
    ...e
  });
}
let $$D3 = {
  viewId: "search-private_plugins",
  sortKeys: [dt.NAME, dt.AUTHOR_NAME, dt.UPDATED_AT, dt.INSTALL_COUNT, dt.RELEVANCY],
  listSortKeys: [dt.NAME, dt.AUTHOR_NAME, dt.UPDATED_AT, dt.INSTALL_COUNT],
  tabletListSortKeys: [dt.NAME, dt.INSTALL_COUNT],
  mobileListSortKeys: [dt.NAME, dt.INSTALL_COUNT],
  sortKeyDescriptions: {
    [XU.GRID]: {
      [dt.NAME]: renderI18nText("search.sort_option.name"),
      [dt.AUTHOR_NAME]: renderI18nText("search.sort_option.creator"),
      [dt.UPDATED_AT]: renderI18nText("search.sort_option.last_updated"),
      [dt.INSTALL_COUNT]: renderI18nText("search.sort_option.saves"),
      [dt.RELEVANCY]: renderI18nText("search.sort_option.relevance")
    },
    [XU.LIST]: {
      [dt.NAME]: renderI18nText("search.sort_option.name"),
      [dt.AUTHOR_NAME]: renderI18nText("search.sort_option.creator"),
      [dt.UPDATED_AT]: renderI18nText("search.sort_option.last_updated"),
      [dt.INSTALL_COUNT]: renderI18nText("search.sort_option.saves"),
      [dt.RELEVANCY]: renderI18nText("search.sort_option.relevance")
    }
  },
  defaultOptions: {
    viewMode: XU.GRID,
    sortMode: {
      sortKey: dt.RELEVANCY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => -1 === [dt.RELEVANCY].indexOf(e),
  settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile
};
let $$L2 = p_;
export function $$F1(e, t) {
  return {
    sortMode: e.sortState.private_plugins,
    viewMode: y2($$D3.viewId, t, $$D3.defaultOptions.viewMode)
  };
}
(e => {
  class t extends Component {
    constructor() {
      super(...arguments);
      this.onPluginListRowClick = Gc(e => {
        e.preventDefault();
        this.props.onPluginListRowClick();
      });
    }
    render() {
      let e = this.props.plugin;
      if (!e || !e.current_plugin_version_id) return null;
      let t = uF(e);
      return t ? jsxs("div", {
        className: this.props.usesTabletOptimizedSidebar ? qp : JC,
        children: [jsxs(_$$_, {
          onClick: this.onPluginListRowClick,
          href: ho(e.id),
          className: PI,
          children: [jsxs(li.IconAndBadgeContainer, {
            children: [jsx(V, {
              plugin: t,
              className: HE,
              alt: ""
            }), jsx(li.BadgeContainer, {
              children: jsx(dn, {
                editorType: t.manifest.editorType
              })
            })]
          }), jsxs("div", {
            className: JV,
            children: [jsxs("div", {
              className: KG,
              children: [jsx("div", {
                className: Np,
                children: t.name
              }), jsx(_$$C, {
                className: BZ,
                ...this.props
              })]
            }), jsx("div", {
              className: CK,
              children: $J(t.description)
            })]
          })]
        }), e.community_publishers?.accepted && e.community_publishers.accepted.length > 0 ? jsx("div", {
          className: this.props.usesTabletOptimizedSidebar ? lG : kw,
          children: jsx("span", {
            className: PY,
            children: e.community_publishers.accepted.map(e => jsx(Qi, {
              publisher: e,
              className: GA,
              childrenClassName: jN
            }, e.id))
          })
        }) : jsx(Qi, {
          publisher: e.publisher,
          className: this.props.usesTabletOptimizedSidebar ? lG : kw
        }), jsx("div", {
          className: this.props.usesTabletOptimizedSidebar ? qV : zB,
          children: jsx(h1, {
            date: t.created_at
          })
        }), jsx("div", {
          className: this.props.usesTabletOptimizedSidebar ? vQ : Qj,
          children: jsx(_$$f, {
            count: e.unique_run_count
          })
        }), jsx("div", {
          className: this.props.usesTabletOptimizedSidebar ? kU : lk,
          children: jsx(_, {
            resource: this.props.plugin,
            universalEditorTypeFallback: this.props.tab ? function (e) {
              switch (e) {
                case XG.FIGJAM_PLUGINS:
                case XG.FIGJAM_WIDGETS:
                  return FFileType.WHITEBOARD;
                case XG.FIGMA_DESIGN_PLUGINS:
                case XG.FIGMA_DESIGN_WIDGETS:
                  return FFileType.DESIGN;
                case XG.PLUGINS:
                case XG.WIDGETS:
                default:
                  return r() || FFileType.DESIGN;
              }
            }(this.props.tab) : void 0,
            context: aL.SEARCH
          })
        })]
      }) : null;
    }
  }
  t.displayName = "PluginListRow";
  e.ConnectedPluginListRow = connect(null, (e, t) => ({
    onPluginListRowClick: () => {
      e(sf({
        view: "communityHub",
        subView: "plugin",
        publishedPluginId: t.plugin.id
      }));
    }
  }))(t);
})(n || (n = {}));
let M = n.ConnectedPluginListRow;
class j extends PureComponent {
  render() {
    return jsx(AB, {
      ...this.props,
      isPublicOverride: !1,
      plugin: this.props.plugin,
      pluginId: this.props.plugin.id,
      showInstallCount: !0,
      innerText: "Plugin Tile",
      trackingProperties: {
        pluginId: this.props.plugin.id
      }
    });
  }
}
(e => {
  let t = e => class extends Component {
    render() {
      let {
        publishedPlugin,
        searchResult
      } = this.props;
      let n = publishedPlugin || searchResult.model;
      return createElement(e, {
        ...this.props,
        plugin: n,
        key: n.id
      });
    }
  };
  let i = t(M);
  let n = t(j);
  let r = (e, t) => ({
    publishedPlugin: e.publishedPlugins[t.searchResult.model.id] || null
  });
  e.SearchResult = _$$h({
    [XU.GRID]: connect(r)(n),
    [XU.LIST]: connect(r)(i)
  });
})($$r0 || ($$r0 = {}));
export const g8 = $$r0;
export const zQ = $$F1;
export const Of = $$L2;
export const xH = $$D3;