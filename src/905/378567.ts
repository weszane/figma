import { Component, createElement, PureComponent } from "react"
import { connect } from "react-redux"
import { jsx, jsxs } from "react/jsx-runtime"
import { ignoreCommandOrShift } from "../905/63728"
import { C as _$$C } from "../905/196436"
import { renderI18nText } from "../905/303541"
import { PluginImage } from "../905/480825"
import { stripHtmlTags } from "../905/491152"
import { BZ, CK, GA, HE, JC, jN, JV, KG, kU, kw, lG, lk, Np, p_, PI, PY, Qj, qp, qV, vQ, zB } from "../905/573610"
import { getLastUsedEditorType } from "../905/620668"
import { f as _$$f } from "../905/671470"
import { getValueWithFallback } from "../905/776312"
import { selectViewAction } from "../905/929976"
import { createViewModeRenderer } from "../905/971482"
import { RelativeTimeDisplay } from "../905/986103"
import { setupLazyComponentFactory } from "../905/992467"
import { PluginTryButton } from "../5430/337035"
import { ShelfViewType } from "../figma_app/45218"
import { WidgetSortField } from "../figma_app/162807"
import { FFileType } from "../figma_app/191312"
import { getPluginVersion } from "../figma_app/300692"
import { HubResourceCategory } from "../figma_app/350203"
import { LinkPrimitive } from "../figma_app/496441"
import { Qi } from "../figma_app/599917"
import { ViewMode } from "../figma_app/756995"
import { BrowserInfo } from "../figma_app/778880"
import { generateCommunityPluginUrl } from "../figma_app/870683"
import { AB } from "../figma_app/878651"
import { dn, li } from "../figma_app/994403"

// Lazy load the PluginTryButton component
const LazyPluginTryButton = setupLazyComponentFactory("lazy_cmty_plugin_try_button", {
  isCodesplit: true,
  ComponentFactory: async () => ({
    default: PluginTryButton,
  }),
})

/**
 * Wrapper component for the lazy-loaded PluginTryButton
 * @param props - Component props
 */
const PluginTryButtonWrapper: React.FC<any> = (props) => {
  return jsx(LazyPluginTryButton, {
    fallback: null,
    errorFallback: null,
    ...props,
  })
}

/**
 * Configuration object for private plugins search view
 */
export const PRIVATE_PLUGINS_SEARCH_CONFIG = {
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
      [WidgetSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
    },
    [ViewMode.LIST]: {
      [WidgetSortField.NAME]: renderI18nText("search.sort_option.name"),
      [WidgetSortField.AUTHOR_NAME]: renderI18nText("search.sort_option.creator"),
      [WidgetSortField.UPDATED_AT]: renderI18nText("search.sort_option.last_updated"),
      [WidgetSortField.INSTALL_COUNT]: renderI18nText("search.sort_option.saves"),
      [WidgetSortField.RELEVANCY]: renderI18nText("search.sort_option.relevance"),
    },
  },
  defaultOptions: {
    viewMode: ViewMode.GRID,
    sortMode: {
      sortKey: WidgetSortField.RELEVANCY,
      sortDesc: false,
    },
  },
  /**
   * Determines whether sort direction should be included for a given sort key
   * @param sortKey - The sort key to check
   */
  includeSortDirection: (sortKey: WidgetSortField) => ![WidgetSortField.RELEVANCY].includes(sortKey),
  settingsSpacer: BrowserInfo.tablet || BrowserInfo.mobile,
}

/**
 * Gets the current sort and view mode for private plugins
 * @param state - Application state
 * @param viewOptions - View options
 */
export function getPrivatePluginsViewMode(state: any, viewOptions: any) {
  return {
    sortMode: state.sortState.private_plugins,
    viewMode: getValueWithFallback(PRIVATE_PLUGINS_SEARCH_CONFIG.viewId, viewOptions, PRIVATE_PLUGINS_SEARCH_CONFIG.defaultOptions.viewMode),
  }
}
interface PluginListRowProps {
  plugin: any
  usesTabletOptimizedSidebar: boolean
  tab?: HubResourceCategory
  onPluginListRowClick: () => void
}

/**
 * Component representing a row in the plugin list
 */
class PluginListRow extends Component<PluginListRowProps> {
  constructor(props: PluginListRowProps) {
    super(props)
    this.onPluginListRowClick = ignoreCommandOrShift((e: React.MouseEvent) => {
      e.preventDefault()
      this.props.onPluginListRowClick()
    })
  }

  private onPluginListRowClick: (e: React.MouseEvent) => void
  render() {
    const {
      plugin,
      usesTabletOptimizedSidebar,
    } = this.props

    // Early return if plugin data is missing
    if (!plugin || !plugin.current_plugin_version_id) {
      return null
    }
    const pluginVersion = getPluginVersion(plugin)

    // Early return if plugin version is not available
    if (!pluginVersion) {
      return null
    }

    // Determine editor type based on tab category
    const getEditorTypeFromTab = (tab: HubResourceCategory): FFileType => {
      switch (tab) {
        case HubResourceCategory.FIGJAM_PLUGINS:
        case HubResourceCategory.FIGJAM_WIDGETS:
          return FFileType.WHITEBOARD
        case HubResourceCategory.FIGMA_DESIGN_PLUGINS:
        case HubResourceCategory.FIGMA_DESIGN_WIDGETS:
          return FFileType.DESIGN
        case HubResourceCategory.PLUGINS:
        case HubResourceCategory.WIDGETS:
        default:
          return getLastUsedEditorType() || FFileType.DESIGN
      }
    }
    const editorTypeFallback = this.props.tab ? getEditorTypeFromTab(this.props.tab) : undefined
    return jsxs("div", {
      className: usesTabletOptimizedSidebar ? qp : JC,
      children: [
      // Plugin link container
        jsxs(LinkPrimitive, {
          onClick: this.onPluginListRowClick,
          href: generateCommunityPluginUrl(plugin.id),
          className: PI,
          children: [
            // Icon and badge section
            jsxs(li.IconAndBadgeContainer, {
              children: [jsx(PluginImage, {
                plugin: pluginVersion,
                className: HE,
                alt: "",
              }), jsx(li.BadgeContainer, {
                children: jsx(dn, {
                  editorType: pluginVersion.manifest.editorType,
                }),
              })],
            }),
            // Text content section
            jsxs("div", {
              className: JV,
              children: [
                // Plugin name and additional info
                jsxs("div", {
                  className: KG,
                  children: [jsx("div", {
                    className: Np,
                    children: pluginVersion.name,
                  }), jsx(_$$C, {
                    className: BZ,
                    ...this.props,
                  })],
                }),
                // Plugin description
                jsx("div", {
                  className: CK,
                  children: stripHtmlTags(pluginVersion.description),
                }),
              ],
            }),
          ],
        }),
        // Publisher information
        plugin.community_publishers?.accepted && plugin.community_publishers.accepted.length > 0
          ? jsx("div", {
              className: usesTabletOptimizedSidebar ? lG : kw,
              children: jsx("span", {
                className: PY,
                children: plugin.community_publishers.accepted.map(publisher => jsx(Qi, {
                  publisher,
                  className: GA,
                  childrenClassName: jN,
                }, publisher.id)),
              }),
            })
          : jsx(Qi, {
              publisher: plugin.publisher,
              className: usesTabletOptimizedSidebar ? lG : kw,
            }),
        // Creation date
        jsx("div", {
          className: usesTabletOptimizedSidebar ? qV : zB,
          children: jsx(RelativeTimeDisplay, {
            date: pluginVersion.created_at,
          }),
        }),
        // Run count
        jsx("div", {
          className: usesTabletOptimizedSidebar ? vQ : Qj,
          children: jsx(_$$f, {
            count: plugin.unique_run_count,
          }),
        }),
        // Plugin try button
        jsx("div", {
          className: usesTabletOptimizedSidebar ? kU : lk,
          children: jsx(PluginTryButtonWrapper, {
            resource: this.props.plugin,
            universalEditorTypeFallback: editorTypeFallback,
            context: ShelfViewType.SEARCH,
          }),
        }),
      ],
    })
  }

  static displayName = "PluginListRow"
}

// Connect the PluginListRow component to Redux
const ConnectedPluginListRow = connect(null, (dispatch, ownProps: PluginListRowProps) => ({
  onPluginListRowClick: () => {
    dispatch(selectViewAction({
      view: "communityHub",
      subView: "plugin",
      publishedPluginId: ownProps.plugin.id,
    }))
  },
}))(PluginListRow)

/**
 * Component for rendering plugin tiles in grid view
 */
class PluginTile extends PureComponent<any> {
  render() {
    return jsx(AB, {
      ...this.props,
      isPublicOverride: false,
      plugin: this.props.plugin,
      pluginId: this.props.plugin.id,
      showInstallCount: true,
      innerText: "Plugin Tile",
      trackingProperties: {
        pluginId: this.props.plugin.id,
      },
    })
  }
}
interface SearchResultRendererProps {
  publishedPlugin?: any
  searchResult: any
}

/**
 * Higher-order component for rendering search results
 */
function withSearchResult(WrappedComponent: React.ComponentType<any>) {
  return class extends Component<SearchResultRendererProps> {
    render() {
      const {
        publishedPlugin,
        searchResult,
      } = this.props
      const plugin = publishedPlugin || searchResult.model
      return createElement(WrappedComponent, {
        ...this.props,
        plugin,
        key: plugin.id,
      })
    }
  }
}

// Create wrapped components
const PluginListRowWithSearchResult = withSearchResult(ConnectedPluginListRow)
const PluginTileWithSearchResult = withSearchResult(PluginTile)

// Map state to props for search results
function mapSearchResultToProps(state: any, ownProps: any) {
  return {
    publishedPlugin: state.publishedPlugins[ownProps.searchResult.model.id] || null,
  }
}

/**
 * Search result renderer that handles different view modes
 */
export const SearchResult = createViewModeRenderer({
  [ViewMode.GRID]: connect(mapSearchResultToProps)(PluginTileWithSearchResult),
  [ViewMode.LIST]: connect(mapSearchResultToProps)(PluginListRowWithSearchResult),
})
export const PrivatePluginsSortConfig = p_
// Export public API
export const g8 = SearchResult
export const zQ = getPrivatePluginsViewMode
export const Of = PrivatePluginsSortConfig
export const xH = PRIVATE_PLUGINS_SEARCH_CONFIG
