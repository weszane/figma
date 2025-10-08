import { Component, createElement } from "react"
import { connect } from "react-redux"
import { Fragment, jsx } from "react/jsx-runtime"
import { renderI18nText } from "../905/303541"
import { F9 } from "../905/636775"
import { createViewModeRenderer } from "../905/971482"
import { RelevancySortField, WidgetRelevancySortField } from "../figma_app/162807"
import { ViewMode } from "../figma_app/756995"
import { BrowserInfo } from "../figma_app/778880"

interface ViewBarConfig {
  viewId: string
  sortKeys: RelevancySortField[] | WidgetRelevancySortField[]
  listSortKeys: RelevancySortField[] | WidgetRelevancySortField[]
  mobileListSortKeys: RelevancySortField[] | WidgetRelevancySortField[]
  tabletListSortKeys: RelevancySortField[] | WidgetRelevancySortField[]
  sortKeyDescriptions: {
    [key in ViewMode]: {
      [RelevancySortField.RELEVANCY]: any
      [WidgetRelevancySortField.RELEVANCY]: any
    }
  }
  defaultOptions: {
    viewMode: ViewMode
    sortMode: {
      sortKey: RelevancySortField | WidgetRelevancySortField
      sortDesc: boolean
    }
    shouldShowPlanFilter?: boolean
  }
  includeSortDirection: (e: any) => boolean
  settingsSpacer: boolean
}

interface SearchViewModule {
  viewBarConfig: ViewBarConfig
  listStyle: string
  getValidOptions: () => ViewBarConfig['defaultOptions']
  SearchResult?: ReturnType<typeof createViewModeRenderer>
}

const LIST_STYLE_CLASS = "widgets--list--mS7Fg search_results_view--list--ptCB2"

// Public widgets search configuration module
export const publicWidgetsSearchModule: SearchViewModule = {
  viewBarConfig: {
    viewId: "search-public_widgets",
    sortKeys: [RelevancySortField.RELEVANCY],
    listSortKeys: [RelevancySortField.RELEVANCY],
    mobileListSortKeys: [RelevancySortField.RELEVANCY],
    tabletListSortKeys: [RelevancySortField.RELEVANCY],
    sortKeyDescriptions: {
      [ViewMode.GRID]: {
        [RelevancySortField.RELEVANCY]: renderI18nText("search.sort_option.relevancy"),
      },
      [ViewMode.LIST]: {
        [RelevancySortField.RELEVANCY]: renderI18nText("search.sort_option.relevancy"),
      },
    },
    defaultOptions: {
      viewMode: ViewMode.GRID,
      sortMode: {
        sortKey: RelevancySortField.RELEVANCY,
        sortDesc: true,
      },
      shouldShowPlanFilter: false,
    },
    includeSortDirection: () => false,
    settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile,
  },
  listStyle: LIST_STYLE_CLASS,
  getValidOptions(): ViewBarConfig['defaultOptions'] {
    return this.viewBarConfig.defaultOptions
  },
}

// Private widgets search configuration module
export const privateWidgetsSearchModule: SearchViewModule = {
  viewBarConfig: {
    viewId: "search-private_widgets",
    sortKeys: [WidgetRelevancySortField.RELEVANCY],
    listSortKeys: [WidgetRelevancySortField.RELEVANCY],
    mobileListSortKeys: [WidgetRelevancySortField.RELEVANCY],
    tabletListSortKeys: [WidgetRelevancySortField.RELEVANCY],
    sortKeyDescriptions: {
      [ViewMode.GRID]: {
        [WidgetRelevancySortField.RELEVANCY]: renderI18nText("search.sort_option.relevancy"),
      },
      [ViewMode.LIST]: {
        [WidgetRelevancySortField.RELEVANCY]: renderI18nText("search.sort_option.relevancy"),
      },
    },
    defaultOptions: {
      viewMode: ViewMode.GRID,
      sortMode: {
        sortKey: WidgetRelevancySortField.RELEVANCY,
        sortDesc: true,
      },
    },
    includeSortDirection: () => false,
    settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile,
  },
  listStyle: LIST_STYLE_CLASS,
  getValidOptions(): ViewBarConfig['defaultOptions'] {
    return this.viewBarConfig.defaultOptions
  },
}

// Search result component renderer
export const searchResultRendererModule: SearchViewModule = {
  // Dummy properties to satisfy interface - not used in this module
  viewBarConfig: undefined as any,
  listStyle: '',
  getValidOptions: undefined as any,

  SearchResult: createViewModeRenderer({
    [ViewMode.GRID]: connect((state: any, ownProps: any) => ({
      publishedWidget: state.publishedWidgets[ownProps.searchResult.model.id] || null,
    }))(class SearchResultGridItem extends Component<{
      publishedWidget?: any
      searchResult: any
      [key: string]: any
    }> {
      render() {
        const { publishedWidget, searchResult, ...restProps } = this.props
        const widgetModel = publishedWidget || searchResult.model

        return createElement(F9, {
          ...restProps,
          widget: widgetModel,
          key: widgetModel.id,
        })
      }
    }),
    [ViewMode.LIST]: () => jsx(Fragment, {}),
  }),
}

export const Ru = searchResultRendererModule
export const uB = privateWidgetsSearchModule
export const nD = publicWidgetsSearchModule
