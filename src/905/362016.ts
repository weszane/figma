import { useMemo } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { KindEnum } from "../905/129884"
import { OverviewStatsView } from "../905/167005"
import { fetchLibraryStylesByFileKeyQuery, useLibraryAssetsFromStats } from "../905/297574"
import { getI18nString, renderI18nText } from "../905/303541"
import { RecordingScrollContainer } from "../905/347284"
import { A as _$$A } from "../905/408320"
import { LoadingSpinner } from "../905/443820"
import { E as _$$E } from "../905/500201"
import { c as _$$c } from "../905/511370"
import { getFeatureFlags } from "../905/601108"
import { RenderListByChunks } from "../905/605383"
import { DSAApiServiceInstance } from "../905/669853"
import { StatValueType } from "../905/697254"
import { Xk } from "../905/712714"
import { liveStoreInstance } from "../905/713695"
import { q } from "../905/820062"
import { getParentOrgId } from "../905/872904"
import { getLibraryKeyWithReport } from "../905/997221"
import { LibraryVariableCollectionDataWithVariables } from "../figma_app/43951"
import { useSubscription } from "../figma_app/288654"
import { setupResourceAtomHandler } from "../figma_app/566371"
import { lX } from "../figma_app/588397"
import { PrimaryWorkflowEnum } from "../figma_app/633080"
import { compareStyles, getAssetUniqueId } from "../figma_app/646357"
import { sortByPropertyWithOptions } from "../figma_app/656233"
import { sortWithCollator } from "../figma_app/930338"

let w = "dsa_file_view_assets--stickySection---ITu-"
let C = "dsa_file_view_assets--headerIcon--fdLRQ"
interface AssetGroupProps {
  items: any[]
  onItemClick: (item: any) => void
}

interface SectionHeaderProps {
  children: React.ReactNode
  headerText: string
  showTitle: boolean
}

interface FrameGroupProps {
  items: any[]
  onItemClick: (item: any) => void
}

interface FrameSectionProps {
  title: string
  children: React.ReactNode
}

interface AssetTileListProps {
  items: any[]
  onItemClick: (item: any) => void
}

interface LibraryStatsProps {
  libraryFileKey: string
}

interface LibraryOverviewViewProps {
  duration: number
  entrypoint: string
  file: any
  width: number
  onItemClick: (item: any) => void
}

interface VariableCollectionsSectionProps {
  libraryFileKey: string
}

function AssetGroup({ items, onItemClick }: AssetGroupProps) {
  const pageMap = new Map<string, any[]>()
  const pageNameMap = new Map<string, string>()

  items.forEach((item) => {
    const containingFrame = item.containing_frame || {}
    const pageId = containingFrame.pageId || "NO_PAGE"
    const pageName = containingFrame.pageName || ""

    pageNameMap.set(pageId, pageName)

    const pageItems = pageMap.get(pageId)
    if (pageItems) {
      pageItems.push(item)
    }
    else {
      pageMap.set(pageId, [item])
    }
  })

  const sortedPageIds = sortWithCollator(Array.from(pageMap.keys()), id => pageNameMap.get(id) ?? "")
  const hasMultiplePages = sortedPageIds.length > 1

  return jsx("div", {
    children: sortedPageIds.map((pageId) => {
      const pageItems = pageMap.get(pageId) || []
      const pageName = pageNameMap.get(pageId) || ""

      return jsx(SectionWithStickyHeader, {
        showTitle: hasMultiplePages && !!pageName,
        headerText: pageName,
        children: jsx(FrameGroup, {
          items: pageItems,
          onItemClick,
        }),
      }, pageId)
    }),
  })
}

function SectionWithStickyHeader({ children, headerText, showTitle }: SectionHeaderProps) {
  const sectionClassName = showTitle
    ? "dsa_file_view_assets--stickySectionPage--tkNT6 dsa_file_view_assets--stickySection---ITu-"
    : w

  return jsxs("div", {
    className: `${sectionClassName || w}`,
    children: [
      showTitle && jsxs("div", {
        className: "dsa_file_view_assets--stickySectionHeader--3Ho7o dsa_file_view_assets--sectionHeader--B1dd7 ellipsis--ellipsis--Tjyfa",
        children: [
          jsx("div", {
            className: C,
            children: jsx(_$$A, {}),
          }),
          jsx("div", {
            children: headerText,
          }),
        ],
      }),
      children,
    ],
  })
}

function FrameGroup({ items, onItemClick }: FrameGroupProps) {
  const frameGroups: Record<string, any[]> = {}
  const ungroupedItems: any[] = []

  for (const item of items) {
    const containingFrame = item.containing_frame
    if (containingFrame && containingFrame.nodeId && containingFrame.nodeId !== item.node_id) {
      if (!frameGroups[containingFrame.nodeId]) {
        frameGroups[containingFrame.nodeId] = []
      }
      frameGroups[containingFrame.nodeId].push(item)
    }
    else {
      ungroupedItems.push(item)
    }
  }

  sortByPropertyWithOptions(ungroupedItems, "name")

  const frameIds = Object.keys(frameGroups)
  frameIds.sort((id1, id2) => {
    const name1 = frameGroups[id1][0].containing_frame?.name || ""
    const name2 = frameGroups[id2][0].containing_frame?.name || ""
    return name1.toLowerCase() < name2.toLowerCase() ? -1 : 1
  })

  const frameListKey = frameIds.join(",")

  return jsxs("div", {
    children: [
      ungroupedItems.length > 0 && jsx(AssetTileList, {
        items: ungroupedItems,
        onItemClick,
      }),
      jsx(RenderListByChunks, {
        chunkSize: 5,
        listKey: frameListKey,
        children: frameIds.map((frameId) => {
          const frameItems = frameGroups[frameId]
          sortByPropertyWithOptions(frameItems, "name")
          const firstItem = frameItems[0]

          return firstItem
            ? jsx(FrameSection, {
              title: firstItem.containing_frame?.name || "",
              children: jsx(AssetTileList, {
                items: frameItems,
                onItemClick,
              }),
            }, frameId)
            : null
        }),
      }),
    ],
  })
}

function FrameSection({ title, children }: FrameSectionProps) {
  return jsxs("div", {
    children: [
      jsxs("div", {
        className: "dsa_file_view_assets--sectionHeader--B1dd7 ellipsis--ellipsis--Tjyfa",
        children: [
          jsx("div", {
            className: C,
            children: jsx(q, {}),
          }),
          jsx("div", {
            children: title,
          }),
        ],
      }),
      children,
    ],
  })
}

function AssetTileList({ items, onItemClick }: AssetTileListProps) {
  const assetTiles = items.map(item => jsx(lX, {
    buttonProps: {
      onItemClick,
    },
    draggable: {
      sourceForTracking: "",
    },
    height: 62,
    isFigJam: false,
    item,
    recordingNodePath: item.node_id,
    shouldHideTooltip: false,
    showName: true,
    width: 62,
  }, getAssetUniqueId(item)))

  const listKey = items.map(item =>
    item.type === PrimaryWorkflowEnum.COMPONENT ? item.component_key : item.key,
  ).join(",")

  return jsx("div", {
    children: jsx("div", {
      className: "dsa_file_view_assets--componentContainer--PGt6T",
      children: jsx(RenderListByChunks, {
        chunkSize: 50,
        listKey,
        className: "dsa_file_view_assets--componentTiles--CXYEl",
        children: assetTiles,
      }),
    }),
  })
}

function LibraryStats({ libraryFileKey }: LibraryStatsProps) {
  const [libraryOverview] = setupResourceAtomHandler(fetchLibraryOverviewQuery(libraryFileKey)) as [
   { data: any; status: string }
  ]

  const stats = useMemo(() => [{
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.used_by"),
    count: libraryOverview?.data?.num_teams ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.team", {
      teamCount: libraryOverview?.data?.num_teams ?? 0,
    }),
  }, {
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.total_components"),
    count: libraryOverview?.data?.num_components ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.component", {
      componentCount: libraryOverview?.data?.num_components ?? 0,
    }),
  }, {
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.total_styles"),
    count: libraryOverview?.data?.num_styles ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.style", {
      styleCount: libraryOverview?.data?.num_styles ?? 0,
    }),
  }, {
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.activity_this_week"),
    count: libraryOverview?.data?.num_weekly_insertions ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.insert", {
      insertCount: libraryOverview?.data?.num_weekly_insertions ?? 0,
    }),
  }], [libraryOverview])

  return jsx(OverviewStatsView, {
    isLoading: libraryOverview.status === "loading",
    stats,
  })
}

function LibraryStatsWithVariables({ libraryFileKey }: LibraryStatsProps) {
  const [libraryOverview] = setupResourceAtomHandler(fetchLibraryOverviewQuery(libraryFileKey)) as [
   { data: any; status: string }
  ]
  const overviewData = libraryOverview.data

  const stats = useMemo(() => [{
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.used_by"),
    count: overviewData?.num_teams ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.team", {
      teamCount: overviewData?.num_teams ?? 0,
    }),
  }, {
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.total_components"),
    count: overviewData?.num_components ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.component", {
      componentCount: overviewData?.num_components ?? 0,
    }),
  }, {
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.total_styles"),
    count: overviewData?.num_styles ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.style", {
      styleCount: overviewData?.num_styles ?? 0,
    }),
  }, {
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.total_variables"),
    count: overviewData?.num_variables ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.variable", {
      variableCount: overviewData?.num_variables ?? 0,
    }),
  }, {
    type: StatValueType.STAT,
    header: getI18nString("design_systems.libraries_modal.activity_this_week"),
    count: overviewData?.num_weekly_insertions ?? null,
    word: getI18nString("design_systems.libraries_modal.plural.insert", {
      insertCount: overviewData?.num_weekly_insertions ?? 0,
    }),
  }], [overviewData])

  return jsx(OverviewStatsView, {
    isLoading: libraryOverview.status === "loading",
    stats,
  })
}

const fetchLibraryOverviewQuery = liveStoreInstance.Query({
  fetch: async (libraryFileKey: string) => (
    await DSAApiServiceInstance.getLibraryOverview({
      libraryFileKey,
    })
  ).data.meta,
})

const SECTION_HEADER_CLASS = "dsa_file_view_overview--fileAssetSectionHeader--ngbds library_section_header--fileAssetSectionHeader--FApn3 text--fontPos12--YsUAh text--_fontBase--QdLsd"
const SECTION_WRAPPER_CLASS = "dsa_file_view_overview--sectionWrapper--rn7kh"
const LOADING_SPINNER_CLASS = "dsa_file_view_overview--loadingSpinner--giOL4"

export function LibraryOverviewView({ duration, entrypoint, file, width, onItemClick }: LibraryOverviewViewProps) {
  const orgId = getParentOrgId()

  const [stylesQuery] = setupResourceAtomHandler(fetchLibraryStylesByFileKeyQuery(file.key)) as [
   { data: any; status: string }
  ]
  const isStylesLoading = stylesQuery.status === "loading"
  const sortedStyles = useMemo(() =>
    [...(stylesQuery.status === "loaded" ? stylesQuery.data : [])].sort(compareStyles), [stylesQuery])

  const [componentsQuery] = setupResourceAtomHandler(Xk({
    duration,
    orgId,
    libraryFileKey: file.key,
    entryPointForLogging: entrypoint,
  })) as [
   { data: any; status: string }
  ]

  const isComponentsLoading = componentsQuery.status === "loading"
  const componentAssets = useLibraryAssetsFromStats({
    productComponentStats: componentsQuery.data,
    libraryKey: getLibraryKeyWithReport(file),
  })

  const showVariablesUI = getFeatureFlags().dsa_styles_variables_ui

  return jsxs(RecordingScrollContainer, {
    width,
    className: "dsa_file_view_overview--fileViewDSA--pOwsl",
    children: [
      showVariablesUI
        ? jsx(LibraryStatsWithVariables, {
          libraryFileKey: file.key,
        })
        : jsx(LibraryStats, {
          libraryFileKey: file.key,
        }),

      isStylesLoading
        ? jsx("div", {
          className: LOADING_SPINNER_CLASS,
          children: jsx(LoadingSpinner, {}),
        })
        : sortedStyles.length > 0 && jsxs("div", {
          className: SECTION_WRAPPER_CLASS,
          children: [
            jsx("div", {
              className: SECTION_HEADER_CLASS,
              children: renderI18nText("design_systems.libraries_modal.header_styles"),
            }),
            jsx(_$$c, {
              styleList: sortedStyles,
            }),
          ],
        }),

      showVariablesUI && jsx(VariableCollectionsSection, {
        libraryFileKey: file.key,
      }),

      !showVariablesUI && sortedStyles.length > 0 && componentAssets.length > 0 && jsx("div", {
        className: "dsa_file_view_overview--divider--TIoHM",
      }),

      isComponentsLoading && !isStylesLoading
        ? jsx("div", {
          className: LOADING_SPINNER_CLASS,
          children: jsx(LoadingSpinner, {}),
        })
        : componentAssets.length > 0 && jsxs("div", {
          className: SECTION_WRAPPER_CLASS,
          children: [
            jsx("div", {
              className: SECTION_HEADER_CLASS,
              children: renderI18nText("design_systems.libraries_modal.header_components"),
            }),
            jsx(AssetGroup, {
              items: componentAssets,
              onItemClick,
            }),
          ],
        }),
    ],
  })
}

function VariableCollectionsSection({ libraryFileKey }: VariableCollectionsSectionProps) {
  const variableCollectionsSubscription = useSubscription(LibraryVariableCollectionDataWithVariables, {
    fileKey: libraryFileKey,
  })

  const variableCollections = variableCollectionsSubscription.data?.file?.variableCollections
  const publishedCollections = useMemo(() =>
    variableCollections?.filter(collection => !collection.unpublishedAt), [variableCollections])

  return variableCollectionsSubscription.status === "loading"
    ? jsx("div", {
      className: LOADING_SPINNER_CLASS,
      children: jsx(LoadingSpinner, {}),
    })
    : publishedCollections && publishedCollections.length !== 0
      ? jsxs("div", {
        className: SECTION_WRAPPER_CLASS,
        children: [
          jsx("div", {
            className: SECTION_HEADER_CLASS,
            children: getI18nString("design_systems.libraries_modal.header_variable_collections"),
          }),
          jsx("div", {
            className: "dsa_file_view_overview--variablesSection--4Nm9y",
            children: publishedCollections.map(collection => jsx("div", {
              "className": "dsa_file_view_overview--variableSetThumb--A92GL",
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": collection.name,
              "data-tooltip-subtext": getI18nString("design_systems.libraries_modal.plural.num_variables", {
                numVariables: collection.variables.length,
              }),
              "role": "img",
              "aria-label": collection.name,
              "children": jsx(_$$E, {}),
            }, collection.id)),
          }),
        ],
      })
      : null
}

export const l = LibraryOverviewView
