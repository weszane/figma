import { jsx, Fragment } from "react/jsx-runtime";
import { Component, createElement } from "react";
import { connect } from "react-redux";
import { BrowserInfo } from "../figma_app/778880";
import { renderI18nText } from "../905/303541";
import { RelevancySortField, WidgetRelevancySortField } from "../figma_app/162807";
import { ViewMode } from "../figma_app/756995";
import { F9 } from "../905/636775";
import { h as _$$h } from "../905/971482";
var $$n2;
var $$r1;
var $$a0;
let g = "widgets--list--mS7Fg search_results_view--list--ptCB2";
(e => {
  e.viewBarConfig = {
    viewId: "search-public_widgets",
    sortKeys: [RelevancySortField.RELEVANCY],
    listSortKeys: [RelevancySortField.RELEVANCY],
    mobileListSortKeys: [RelevancySortField.RELEVANCY],
    tabletListSortKeys: [RelevancySortField.RELEVANCY],
    sortKeyDescriptions: {
      [ViewMode.GRID]: {
        [RelevancySortField.RELEVANCY]: renderI18nText("search.sort_option.relevancy")
      },
      [ViewMode.LIST]: {
        [RelevancySortField.RELEVANCY]: renderI18nText("search.sort_option.relevancy")
      }
    },
    defaultOptions: {
      viewMode: ViewMode.GRID,
      sortMode: {
        sortKey: RelevancySortField.RELEVANCY,
        sortDesc: !0
      },
      shouldShowPlanFilter: !1
    },
    includeSortDirection: e => !1,
    settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile
  };
  e.listStyle = g;
  e.getValidOptions = function () {
    return e.viewBarConfig.defaultOptions;
  };
})($$n2 || ($$n2 = {}));
(e => {
  e.viewBarConfig = {
    viewId: "search-private_widgets",
    sortKeys: [WidgetRelevancySortField.RELEVANCY],
    listSortKeys: [WidgetRelevancySortField.RELEVANCY],
    mobileListSortKeys: [WidgetRelevancySortField.RELEVANCY],
    tabletListSortKeys: [WidgetRelevancySortField.RELEVANCY],
    sortKeyDescriptions: {
      [ViewMode.GRID]: {
        [WidgetRelevancySortField.RELEVANCY]: renderI18nText("search.sort_option.relevancy")
      },
      [ViewMode.LIST]: {
        [WidgetRelevancySortField.RELEVANCY]: renderI18nText("search.sort_option.relevancy")
      }
    },
    defaultOptions: {
      viewMode: ViewMode.GRID,
      sortMode: {
        sortKey: WidgetRelevancySortField.RELEVANCY,
        sortDesc: !0
      }
    },
    includeSortDirection: e => !1,
    settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile
  };
  e.listStyle = g;
  e.getValidOptions = function () {
    return e.viewBarConfig.defaultOptions;
  };
})($$r1 || ($$r1 = {}));
(e => {
  let t;
  t = F9;
  let i = class extends Component {
    render() {
      let {
        publishedWidget,
        searchResult
      } = this.props;
      let n = publishedWidget || searchResult.model;
      return createElement(t, {
        ...this.props,
        widget: n,
        key: n.id
      });
    }
  };
  e.SearchResult = _$$h({
    [ViewMode.GRID]: connect((e, t) => ({
      publishedWidget: e.publishedWidgets[t.searchResult.model.id] || null
    }))(i),
    [ViewMode.LIST]: () => jsx(Fragment, {})
  });
})($$a0 || ($$a0 = {}));
export const Ru = $$a0;
export const uB = $$r1;
export const nD = $$n2;