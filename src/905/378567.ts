import { setupLazyComponentFactory } from "../905/992467";
import _require from "../5430/337035";
import { jsx, jsxs } from "react/jsx-runtime";
import { Component, PureComponent, createElement } from "react";
import { connect } from "react-redux";
import { LinkPrimitive } from "../figma_app/496441";
import { ignoreCommandOrShift } from "../905/63728";
import { BrowserInfo } from "../figma_app/778880";
import { stripHtmlTags } from "../905/491152";
import { RelativeTimeDisplay } from "../905/986103";
import { f as _$$f } from "../905/671470";
import { C as _$$C } from "../905/196436";
import { renderI18nText } from "../905/303541";
import { selectViewAction } from "../905/929976";
import { getLastUsedEditorType } from "../905/620668";
import { FFileType } from "../figma_app/191312";
import { HubResourceCategory } from "../figma_app/350203";
import { getPluginVersion } from "../figma_app/300692";
import { ShelfViewType } from "../figma_app/45218";
import { WidgetSortField } from "../figma_app/162807";
import { ViewMode } from "../figma_app/756995";
import { PluginImage } from "../905/480825";
import { y2 } from "../905/776312";
import { Qi } from "../figma_app/599917";
import { ho } from "../figma_app/870683";
import { li, dn } from "../figma_app/994403";
import { AB } from "../figma_app/878651";
import { h as _$$h } from "../905/971482";
import { p_, qp, JC, PI, HE, JV, KG, Np, BZ, CK, lG, kw, PY, GA, jN, qV, zB, vQ, Qj, kU, lk } from "../905/573610";
var n;
var $$r0;
let f = setupLazyComponentFactory("lazy_cmty_plugin_try_button", {
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
  sortKeys: [WidgetSortField.NAME, WidgetSortField.AUTHOR_NAME, WidgetSortField.UPDATED_AT, WidgetSortField.INSTALL_COUNT, WidgetSortField.RELEVANCY],
  listSortKeys: [WidgetSortField.NAME, WidgetSortField.AUTHOR_NAME, WidgetSortField.UPDATED_AT, WidgetSortField.INSTALL_COUNT],
  tabletListSortKeys: [WidgetSortField.NAME, WidgetSortField.INSTALL_COUNT],
  mobileListSortKeys: [WidgetSortField.NAME, WidgetSortField.INSTALL_COUNT],
  sortKeyDescriptions: {
    [ViewMode.GRID]: {
      [WidgetSortField.NAME]: renderI18nText("search.sort_option.name"),
      [WidgetSortField.AUTHOR_NAME]: renderI18nText("search.sort_option.creator"),
      [WidgetSortField.UPDATED_AT]: renderI18nText("search.sort_option.last_updated"),
      [WidgetSortField.INSTALL_COUNT]: renderI18nText("search.sort_option.saves"),
      [WidgetSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance")
    },
    [ViewMode.LIST]: {
      [WidgetSortField.NAME]: renderI18nText("search.sort_option.name"),
      [WidgetSortField.AUTHOR_NAME]: renderI18nText("search.sort_option.creator"),
      [WidgetSortField.UPDATED_AT]: renderI18nText("search.sort_option.last_updated"),
      [WidgetSortField.INSTALL_COUNT]: renderI18nText("search.sort_option.saves"),
      [WidgetSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance")
    }
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: WidgetSortField.RELEVANCY,
      sortDesc: !1
    }
  },
  includeSortDirection: e => -1 === [WidgetSortField.RELEVANCY].indexOf(e),
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
      this.onPluginListRowClick = ignoreCommandOrShift(e => {
        e.preventDefault();
        this.props.onPluginListRowClick();
      });
    }
    render() {
      let e = this.props.plugin;
      if (!e || !e.current_plugin_version_id) return null;
      let t = getPluginVersion(e);
      return t ? jsxs("div", {
        className: this.props.usesTabletOptimizedSidebar ? qp : JC,
        children: [jsxs(LinkPrimitive, {
          onClick: this.onPluginListRowClick,
          href: ho(e.id),
          className: PI,
          children: [jsxs(li.IconAndBadgeContainer, {
            children: [jsx(PluginImage, {
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
              children: stripHtmlTags(t.description)
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
          children: jsx(RelativeTimeDisplay, {
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
                case HubResourceCategory.FIGJAM_PLUGINS:
                case HubResourceCategory.FIGJAM_WIDGETS:
                  return FFileType.WHITEBOARD;
                case HubResourceCategory.FIGMA_DESIGN_PLUGINS:
                case HubResourceCategory.FIGMA_DESIGN_WIDGETS:
                  return FFileType.DESIGN;
                case HubResourceCategory.PLUGINS:
                case HubResourceCategory.WIDGETS:
                default:
                  return getLastUsedEditorType() || FFileType.DESIGN;
              }
            }(this.props.tab) : void 0,
            context: ShelfViewType.SEARCH
          })
        })]
      }) : null;
    }
  }
  t.displayName = "PluginListRow";
  e.ConnectedPluginListRow = connect(null, (e, t) => ({
    onPluginListRowClick: () => {
      e(selectViewAction({
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
    [ViewMode.GRID]: connect(r)(n),
    [ViewMode.LIST]: connect(r)(i)
  });
})($$r0 || ($$r0 = {}));
export const g8 = $$r0;
export const zQ = $$F1;
export const Of = $$L2;
export const xH = $$D3;