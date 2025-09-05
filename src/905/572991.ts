import { jsx, Fragment } from "react/jsx-runtime";
import { Component, createElement } from "react";
import { connect } from "../vendor/514228";
import { Ay } from "../figma_app/778880";
import { tx } from "../905/303541";
import { _M, W_ } from "../figma_app/162807";
import { XU } from "../figma_app/756995";
import { F9 } from "../905/636775";
import { h as _$$h } from "../905/971482";
var $$n2;
var $$r1;
var $$a0;
let g = "widgets--list--mS7Fg search_results_view--list--ptCB2";
(e => {
  e.viewBarConfig = {
    viewId: "search-public_widgets",
    sortKeys: [_M.RELEVANCY],
    listSortKeys: [_M.RELEVANCY],
    mobileListSortKeys: [_M.RELEVANCY],
    tabletListSortKeys: [_M.RELEVANCY],
    sortKeyDescriptions: {
      [XU.GRID]: {
        [_M.RELEVANCY]: tx("search.sort_option.relevancy")
      },
      [XU.LIST]: {
        [_M.RELEVANCY]: tx("search.sort_option.relevancy")
      }
    },
    defaultOptions: {
      viewMode: XU.GRID,
      sortMode: {
        sortKey: _M.RELEVANCY,
        sortDesc: !0
      },
      shouldShowPlanFilter: !1
    },
    includeSortDirection: e => !1,
    settingsSpacer: Ay.tablet || Ay.mobile
  };
  e.listStyle = g;
  e.getValidOptions = function () {
    return e.viewBarConfig.defaultOptions;
  };
})($$n2 || ($$n2 = {}));
(e => {
  e.viewBarConfig = {
    viewId: "search-private_widgets",
    sortKeys: [W_.RELEVANCY],
    listSortKeys: [W_.RELEVANCY],
    mobileListSortKeys: [W_.RELEVANCY],
    tabletListSortKeys: [W_.RELEVANCY],
    sortKeyDescriptions: {
      [XU.GRID]: {
        [W_.RELEVANCY]: tx("search.sort_option.relevancy")
      },
      [XU.LIST]: {
        [W_.RELEVANCY]: tx("search.sort_option.relevancy")
      }
    },
    defaultOptions: {
      viewMode: XU.GRID,
      sortMode: {
        sortKey: W_.RELEVANCY,
        sortDesc: !0
      }
    },
    includeSortDirection: e => !1,
    settingsSpacer: Ay.tablet || Ay.mobile
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
    [XU.GRID]: connect((e, t) => ({
      publishedWidget: e.publishedWidgets[t.searchResult.model.id] || null
    }))(i),
    [XU.LIST]: () => jsx(Fragment, {})
  });
})($$a0 || ($$a0 = {}));
export const Ru = $$a0;
export const uB = $$r1;
export const nD = $$n2;