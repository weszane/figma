import classNames from "classnames"
import { sumBy } from "lodash-es"
import { memo, PureComponent, useEffect, useMemo, useRef, useState } from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { LibraryStatsTable } from "../905/27250"
import { selectWithShallowEqual } from "../905/103090"
import { KindEnum } from "../905/129884"
import { TrackedLink } from "../905/160095"
import { OverviewStatsView } from "../905/167005"
import { LoadingRenderer } from "../905/211326"
import { useLibraryFileLink } from "../905/217163"
import { getI18nString, renderI18nText } from "../905/303541"
import { RecordingScrollContainer } from "../905/347284"
import { LibraryTypeString } from "../905/402643"
import { TrackingWrapper } from "../905/414363"
import { Link } from "../905/438674"
import { i as _$$i } from "../905/565139"
import { getFeatureFlags } from "../905/601108"
import { getStorage } from "../905/657224"
import { DSAApiServiceInstance } from "../905/669853"
import { LoadingRow, SortableHeaderCell, TableRow } from "../905/682977"
import { TrackingKeyEnum } from "../905/696396"
import { StatValueType } from "../905/697254"
import { Lp, yu } from "../905/712714"
import { SvgComponent } from "../905/714743"
import { w as _$$w } from "../905/835474"
import { o as _$$o } from "../905/918279"
import { formatRelativeTimeStatic, RelativeTimeDisplay } from "../905/986103"
import { A as _$$A2 } from "../5724/600086"
import { cssBuilderInstance } from "../cssbuilder/589278"
import { nZ } from "../figma_app/277330"
import { setupResourceAtomHandler } from "../figma_app/566371"
import { getDraftsSidebarString, LibraryAgeEnum, PrimaryWorkflowEnum } from "../figma_app/633080"
import { sortByDateProperty, sortByProperty, sortByPropertyWithOptions } from "../figma_app/656233"
import { G5 } from "../figma_app/795674"

// Renamed variables, added types, simplified logic, and improved readability
// Origin: Refactored from minified/compiled code in 928543.ts


// Type definitions for improved type safety
interface ComponentStat {
  file_name: string
  file_key: string
  team_name: string | null
  num_instances: number
  last_modified: string
}

interface FileStats {
  fileStats: ComponentStat[]
  loaded: boolean
  sortBy: string
  prevCol: string | null
  isDescending: boolean
}

interface StateGroupData {
  components: any[]
  stateGroups: any[]
}

interface StatsData {
  total_instances: number
  total_team_usage: number
  total_file_usage: number
}

interface LibraryItemProps {
  item: any
  fileVersion?: number
}

interface ComponentViewFooterProps {
  fileStats: ComponentStat[] | null
}

interface ListFilesByLibraryItemViewProps {
  component: any
  orgId?: string
  fileVersion?: number
  setFileStats: (stats: ComponentStat[]) => void
}

interface ComponentStatRowProps {
  fileName?: string
  fileKey: string
  teamName: string | null
  numInstances: number
  lastModified: string
}

interface StateGroupViewProps {
  stateGroup: any
  onBackClick: () => void
  width: number
  onItemClick: (item: any) => void
  hideOpenInFileButton?: boolean
}

interface ComponentDrilldownProps {
  component: any
  onBackClick: () => void
  width: number
  orgId?: string
  fileVersion?: number
  hideOpenInFileButton?: boolean
}

interface OpenInFileButtonProps {
  item: any
}

const DEFAULT_DURATION = LibraryAgeEnum.THIRTY_DAYS
const MISSING_FILES_TABLE_CLASS = "stats_for_missing_files_view--_baseColumn--b7nv9 library_item_view--oneComponentViewFileNameCol--d9Nqk text--fontPos11--2LvXf text--_fontBase--QdLsd"
const MISSING_TEAMS_COLUMN_CLASS = "stats_for_missing_files_view--teamsColumn--mCRJ7 stats_for_missing_files_view--_baseColumn--b7nv9 library_item_view--oneComponentViewTeamCol--2iMZ2 text--fontPos11--2LvXf text--_fontBase--QdLsd"
const MISSING_INSTANCES_COLUMN_CLASS = "stats_for_missing_files_view--instancesColumn--pqnCO stats_for_missing_files_view--_baseColumn--b7nv9 library_item_view--componentNumCol--3rX5Q library_modal_stats--numCol---FbhI text--fontPos11--2LvXf text--_fontBase--QdLsd"
const FOOTER_CLASS = "library_item_view--componentViewFooter--QIMIV file_view_styles--componentViewFooter--JQ0-4 file_view_styles--fileViewFooter--y5O8t"
const FOOTER_TEXT_CLASS = "library_item_view--componentViewFooterText--YLOdY"
const FILE_NAME_COLUMN_CLASS = "library_item_view--oneComponentViewFileNameCol--d9Nqk text--fontPos11--2LvXf text--_fontBase--QdLsd"
const TEAM_COLUMN_CLASS = "library_item_view--oneComponentViewTeamCol--2iMZ2 text--fontPos11--2LvXf text--_fontBase--QdLsd"
const INSTANCE_COLUMN_CLASS = "library_item_view--componentNumCol--3rX5Q library_modal_stats--numCol---FbhI text--fontPos11--2LvXf text--_fontBase--QdLsd"
const INSTANCE_VALUE_CLASS = "library_item_view--componentNumColVal--44bAM library_item_view--componentNumCol--3rX5Q library_modal_stats--numCol---FbhI text--fontPos11--2LvXf text--_fontBase--QdLsd"

// Missing files statistics component
function MissingFilesStatsView({
  fileVersion,
  componentKey,
  orgId,
}: {
  fileVersion?: number
  componentKey: string
  orgId?: string
}) {
  const [componentUsage] = setupResourceAtomHandler(
    yu({
      fileVersion: fileVersion?.toString(),
      componentKey,
    }),
  )

  const [teamUsage] = setupResourceAtomHandler(
    Lp({
      orgId: orgId ?? undefined,
      fileVersion: fileVersion?.toString(),
      componentKey,
    }),
  )

  const isDataLoaded
    = componentUsage.status === "loaded"
      && teamUsage.status === "loaded"
      && !!componentUsage.data
      && !!teamUsage.data

  const missingStats = useMemo(() => {
    if (!isDataLoaded)
      return undefined

    const totalFiles = componentUsage.data.total_file_usage
    const totalInstances = componentUsage.data.total_instances
    const totalTeams = componentUsage.data.total_team_usage

    // Calculate missing values
    const uniqueTeams = teamUsage.data.reduce(
      (acc: Set<string>, item: any) => acc.add(item.team_name),
      new Set(),
    ).size

    return {
      files: totalFiles - teamUsage.data.length,
      instances: totalInstances - sumBy(teamUsage.data, "num_instances"),
      teams: totalTeams - uniqueTeams,
    }
  }, [componentUsage.data, teamUsage.data, isDataLoaded])

  const statsColumns = useMemo(() =>
    missingStats
      ? [
          {
            header: getI18nString("design_systems.dsa.files"),
            count: missingStats.files,
            className: MISSING_FILES_TABLE_CLASS,
          },
          {
            header: getI18nString("design_systems.dsa.teams"),
            count: missingStats.teams,
            className: MISSING_TEAMS_COLUMN_CLASS,
          },
          {
            header: getI18nString("design_systems.dsa.instances_all_time"),
            count: missingStats.instances,
            className: MISSING_INSTANCES_COLUMN_CLASS,
          },
        ]
      : [], [missingStats])

  if (!isDataLoaded)
    return null

  return jsxs(Fragment, {
    children: [
      jsxs("div", {
        className: "stats_for_missing_files_view--heading--giOj- text--fontPos14--OL9Hp text--_fontBase--QdLsd",
        children: [
          jsx(SvgComponent, {
            "svg": _$$A2,
            "className": "stats_for_missing_files_view--infoIcon--4-RnW",
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("design_systems.dsa.not_visible_help"),
          }),
          renderI18nText("design_systems.dsa.not_visible"),
          jsx(TrackedLink, {
            newTab: true,
            href: "https://help.figma.com/hc/articles/360039238353-View-and-explore-library-analytics",
            trusted: true,
            children: renderI18nText("design_systems.dsa.learn_more"),
          }),
        ],
      }),
      jsx(TableRow, {
        className: "stats_for_missing_files_view--headerRow--7en-p library_modal_stats--headerRow--MTZxi text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: statsColumns.map(column =>
          jsx("div", {
            className: column.className,
            children: column.header,
          }, column.header),
        ),
      }),
      jsx(TableRow, {
        className: "stats_for_missing_files_view--statsRow--W5gDv library_item_view--componentRow--KcAgz text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: statsColumns.map(column =>
          jsx("div", {
            className: column.className,
            children: column.count,
          }, column.header),
        ),
      }),
    ],
  })
}

// Footer showing number of states/variants
function StateGroupFooter({ numStates }: { numStates: number }) {
  return jsx("div", {
    className: FOOTER_CLASS,
    children: jsx("div", {
      className: FOOTER_TEXT_CLASS,
      children: renderI18nText("design_systems.libraries_modal.showing_x_variant", {
        variantCount: numStates,
      }),
    }),
  })
}

// Component view footer with file stats
class ComponentViewFooter extends PureComponent<ComponentViewFooterProps> {
  static displayName = "ComponentViewFooter"

  renderFooterText = () => {
    const { fileStats } = this.props
    if (!fileStats)
      return null

    sortByDateProperty(fileStats, "last_modified")

    return jsxs("div", {
      className: FOOTER_CLASS,
      children: [
        jsxs("div", {
          className: FOOTER_TEXT_CLASS,
          children: [
            renderI18nText("design_systems.libraries_modal.x_files_shown_open_teams_and_teams_you_re_on", {
              fileCount: fileStats.length,
            }),
            " ",
            jsx("div", {
              className: "library_item_view--componentViewFooterInlineLink--ngFvo",
              children: jsx(Link, {
                href: "https://help.figma.com/hc/articles/360039238353",
                newTab: true,
                trusted: true,
                children: renderI18nText("design_systems.libraries_modal.learn_more"),
              }),
            }),
          ],
        }),
        jsx("div", {
          className: "library_item_view--componentViewFooterLastUpdated--K9SEB",
          children: fileStats.length > 0 && getI18nString("design_systems.libraries_modal.last_updated_time", {
            timeFromNow: formatRelativeTimeStatic(fileStats[0]?.last_modified),
          }),
        }),
      ],
    })
  }

  render() {
    return jsx(LoadingRenderer, {
      isLoading: this.props.fileStats == null,
      children: this.renderFooterText,
    })
  }
}

// File listing component with sorting capabilities
class ListFilesByLibraryItemView extends PureComponent<ListFilesByLibraryItemViewProps, FileStats> {
  static displayName = "ListFilesByLibraryItemView"

  private readonly storageKey = "listFilesByComponentView:state"
  private readonly storage = getStorage()

  constructor(props: ListFilesByLibraryItemViewProps) {
    super(props)

    const storedState = this.storage.get(this.storageKey)

    this.state = {
      loaded: false,
      fileStats: [],
      sortBy: storedState ? storedState.sortBy : "alpha",
      prevCol: storedState ? storedState.prevCol : null,
      isDescending: !storedState || storedState.isDescending,
    }
  }

  componentDidMount() {
    DSAApiServiceInstance.getComponentFileUsage({
      orgId: this.props.orgId || "",
      fv: `${this.props.fileVersion || 0}`,
      componentKey: this.props.component.component_key,
    }).then((response) => {
      const data = response?.data?.meta || []
      this.setState({
        fileStats: data,
        loaded: true,
      })
      this.props.setFileStats(data)
    }).catch(() => {
      // Error handling intentionally left blank as in original
    })
  }

  setSortByAndOrder = (field: string) => {
    const { sortBy } = this.state
    const isDescending = sortBy !== field || !this.state.isDescending

    const newState = {
      sortBy: field,
      prevCol: sortBy,
      isDescending,
    }

    this.setState(newState)
    this.storage.set(this.storageKey, newState)
  }

  render() {
    let { fileStats } = this.state

    // Apply sorting based on current state
    switch (this.state.sortBy) {
      case "alpha":
        sortByPropertyWithOptions(fileStats, "file_name", {
          isDescending: !this.state.isDescending,
        })
        break
      case "teamNames":
        sortByPropertyWithOptions(fileStats, "team_name", {
          isDescending: !this.state.isDescending,
        })
        break
      case "instances":
        sortByProperty(fileStats, "num_instances", this.state.isDescending)
        break
      case "lastModified":
        sortByDateProperty(fileStats, "last_modified", this.state.isDescending)
    }

    const tableHeaders = [
      {
        header: getI18nString("design_systems.libraries_modal.file_name"),
        sortBy: "alpha",
        className: FILE_NAME_COLUMN_CLASS,
      },
      {
        header: getI18nString("design_systems.libraries_modal.team"),
        sortBy: "teamNames",
        className: TEAM_COLUMN_CLASS,
      },
      {
        header: getI18nString("design_systems.libraries_modal.instances_all_time"),
        sortBy: "instances",
        className: INSTANCE_COLUMN_CLASS,
      },
      {
        header: getI18nString("design_systems.libraries_modal.last_modified"),
        sortBy: "lastModified",
        className: INSTANCE_COLUMN_CLASS,
      },
    ]

    return jsxs("div", {
      children: [
        !this.state.loaded && jsx(LoadingRow, {}),
        this.state.loaded && jsxs(Fragment, {
          children: [
            jsx(TableRow, {
              className: "library_item_view--headerRow--bkJ-a library_modal_stats--headerRow--MTZxi text--fontPos11--2LvXf text--_fontBase--QdLsd",
              children: tableHeaders.map(header =>
                jsx(SortableHeaderCell, {
                  className: classNames(header.className, "library_item_view--sortableCol--5Kur-", {
                    "library_item_view--selectedCol--IZP4x library_modal_stats--selectedCol--pwGl4": this.state.sortBy === header.sortBy,
                  }),
                  isDescending: this.state.isDescending,
                  hasArrow: this.state.sortBy === header.sortBy,
                  field: header.sortBy,
                  sortBy: this.setSortByAndOrder,
                  children: header.header,
                }, header.sortBy),
              ),
            }),
            fileStats.map(stat =>
              jsx(Fragment, {
                children: jsx(ComponentStatRow, {
                  fileName: stat.file_name,
                  fileKey: stat.file_key,
                  teamName: stat.team_name,
                  numInstances: stat.num_instances,
                  lastModified: stat.last_modified,
                }),
              }, stat.file_key),
            ),
            getFeatureFlags().dsa_missing_section && jsx(MissingFilesStatsView, {
              fileVersion: this.props.fileVersion,
              componentKey: this.props.component.component_key,
              orgId: this.props.orgId,
            }),
          ],
        }),
      ],
    })
  }
}

// Individual row in the component stats table
class ComponentStatRow extends PureComponent<ComponentStatRowProps> {
  static displayName = "ComponentStatRow"

  renderTeamNameField = (teamName: string | null) =>
    teamName === null
      ? jsx("div", {
          className: "library_item_view--oneComponentViewTeamColDrafts--0qRH1 library_item_view--oneComponentViewTeamCol--2iMZ2 text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: getDraftsSidebarString(),
        })
      : jsx("div", {
          className: TEAM_COLUMN_CLASS,
          children: teamName,
        })

  render() {
    const fileName = this.props.fileName ? this.props.fileName : "Untitled"
    const fileKey = this.props.fileKey

    return jsx(TableRow, {
      className: "library_item_view--componentRow--KcAgz text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: jsxs(Fragment, {
        children: [
          jsx("div", {
            className: FILE_NAME_COLUMN_CLASS,
            children: jsx(TrackedLink, {
              href: `/file/${fileKey}/${encodeURIComponent(fileName)}`,
              innerText: "DSAnalytics File Open",
              trackingProperties: {
                libraryFileKey: fileKey,
              },
              newTab: true,
              trusted: true,
              children: fileName,
            }),
          }),
          this.renderTeamNameField(this.props.teamName),
          jsx("div", {
            className: INSTANCE_VALUE_CLASS,
            children: this.props.numInstances.toLocaleString(),
          }),
          jsx("div", {
            className: INSTANCE_VALUE_CLASS,
            children: jsx(RelativeTimeDisplay, {
              date: this.props.lastModified,
            }),
          }),
        ],
      }),
    })
  }
}

// Overview stats view for library items
class OneLibraryItemStatsView extends PureComponent<LibraryItemProps> {
  static displayName = "OneLibraryItemStatsView"

  state = {
    statsData: null as StatsData | null,
  }

  componentDidMount() {
    if (this.props.item.type === PrimaryWorkflowEnum.COMPONENT) {
      DSAApiServiceInstance.getComponent({
        fv: `${this.props.fileVersion || 0}`,
        componentKey: this.props.item.component_key,
      }).then((response) => {
        const data = response?.data?.meta || null
        this.setState({ statsData: data })
      }).catch(() => {
        // Error handling intentionally left blank as in original
      })
    }
    else {
      DSAApiServiceInstance.getStateGroup({
        fv: `${this.props.fileVersion || 0}`,
        stateGroupKey: this.props.item.key,
      }).then((response) => {
        const data = response?.data?.meta || null
        this.setState({ statsData: data })
      }).catch(() => {
        // Error handling intentionally left blank as in original
      })
    }
  }

  render() {
    const stats = [
      {
        type: StatValueType.DESCRIPTION_AND_IMAGE,
        imageData: {
          type: "image",
          url: this.props.item.thumbnail_url,
        },
        description: this.props.item.description || getI18nString("design_systems.libraries_modal.n_a"),
      },
      {
        type: StatValueType.STAT,
        header: getI18nString("design_systems.libraries_modal.total"),
        count: this.state.statsData?.total_instances ?? null,
        word: getI18nString("design_systems.libraries_modal.plural.instance", {
          instanceCount: this.state.statsData?.total_instances ?? 0,
        }),
      },
      {
        type: StatValueType.STAT,
        header: getI18nString("design_systems.libraries_modal.used_by"),
        count: this.state.statsData?.total_team_usage ?? null,
        word: getI18nString("design_systems.libraries_modal.plural.team", {
          teamCount: this.state.statsData?.total_team_usage ?? 0,
        }),
      },
      {
        type: StatValueType.STAT,
        header: getI18nString("design_systems.libraries_modal.used_in"),
        count: this.state.statsData?.total_file_usage ?? null,
        word: getI18nString("design_systems.libraries_modal.plural.file", {
          fileCount: this.state.statsData?.total_file_usage ?? 0,
        }),
      },
    ]

    return jsx(OverviewStatsView, {
      isLoading: this.state.statsData == null,
      stats,
    })
  }
}

// Button to open item in file
function OpenInFileButton({ item }: OpenInFileButtonProps) {
  const linkData = useLibraryFileLink({
    libraryKey: item.library_key,
    nodeId: item.node_id,
    mainComponent: true,
  })

  if (linkData.data?.link == null || linkData.data?.type === "community") {
    return null
  }

  return jsx(Link, {
    href: linkData.data.link,
    newTab: true,
    trusted: true,
    children: renderI18nText("design_systems.libraries_modal.open_in_file"),
  })
}

// State group view component
export const StateGroupView = memo(({
  stateGroup,
  onBackClick,
  width,
  onItemClick,
  hideOpenInFileButton,
}: StateGroupViewProps) => {
  const { fileVersion } = selectWithShallowEqual((state: any) => ({
    fileVersion: state.fileVersion,
  }))

  const [stateGroupData, setStateGroupData] = useState<StateGroupData | null>(null)
  const containerRef = useRef(null)
  const scrollTo = nZ(containerRef)

  useEffect(() => {
    DSAApiServiceInstance.getStateGroupComponents({
      startTs: G5(_$$o[DEFAULT_DURATION]).toString(),
      endTs: G5(0).toString(),
      fv: `${fileVersion || 0}`,
      stateGroupKey: stateGroup.key,
    }).then((response) => {
      const data = response?.data?.meta || {
        state_groups: [],
        components: [],
      }
      setStateGroupData({
        components: data.components,
        stateGroups: data.state_groups,
      })
    }).catch(console.error)
  }, [fileVersion, stateGroup.key])

  const filteredComponents = useMemo(() =>
    stateGroupData?.components.filter(
      component => component.containing_frame?.containingStateGroup?.nodeId === stateGroup.node_id,
    ) || [], [stateGroupData, stateGroup])

  const trackingProperties = useMemo(() => ({
    stateGroupKey: stateGroup.key,
    assetType: LibraryTypeString.PRODUCT_COMPONENTS,
  }), [stateGroup.key])

  return jsx(TrackingWrapper, {
    page: TrackingKeyEnum.DSA_STATE_GROUP_VIEW,
    properties: trackingProperties,
    children: jsxs("div", {
      className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
      children: [
        jsx(_$$i, {
          assetOrFileName: stateGroup.name,
          onBack: onBackClick,
          children: !hideOpenInFileButton && jsx(OpenInFileButton, {
            item: stateGroup,
          }),
        }),
        jsxs(RecordingScrollContainer, {
          width,
          className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
          ref: containerRef,
          children: [
            jsx(OneLibraryItemStatsView, {
              item: stateGroup,
              fileVersion,
            }),
            jsx(LibraryStatsTable, {
              itemStats: filteredComponents,
              duration: DEFAULT_DURATION,
              viewItem: onItemClick,
              scrollTo,
              showingStateStats: true,
            }),
          ],
        }),
        jsx(StateGroupFooter, {
          numStates: filteredComponents.length,
        }),
      ],
    }),
  })
})

// Main component drilldown view
export function ComponentDrilldownView({
  component,
  onBackClick,
  width,
  orgId,
  fileVersion,
  hideOpenInFileButton,
}: ComponentDrilldownProps) {
  const [fileStats, setFileStats] = useState<ComponentStat[] | null>(null)

  const trackingProperties = useMemo(() => ({
    componentKey: component.component_key,
    assetType: LibraryTypeString.PRODUCT_COMPONENTS,
  }), [component.component_key])

  const displayName = component.containing_frame?.containingStateGroup
    ? _$$w(component.name)
    : component.name

  return jsx(TrackingWrapper, {
    page: TrackingKeyEnum.DSA_COMPONENT_VIEW,
    properties: trackingProperties,
    children: jsxs("div", {
      "className": cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
      "data-testid": "component-drilldown",
      "children": [
        jsx(_$$i, {
          assetOrFileName: displayName,
          onBack: onBackClick,
          children: !hideOpenInFileButton && jsx(OpenInFileButton, {
            item: component,
          }),
        }),
        jsxs(RecordingScrollContainer, {
          width,
          className: cssBuilderInstance.flexAuto.minH0.flex.flexColumn.$,
          children: [
            jsx(OneLibraryItemStatsView, {
              item: component,
              fileVersion,
            }),
            jsx(ListFilesByLibraryItemView, {
              component,
              orgId,
              setFileStats,
              fileVersion,
            }),
          ],
        }),
        jsx(ComponentViewFooter, {
          fileStats,
        }),
      ],
    }),
  })
}

export const E = ComponentDrilldownView
export const v = StateGroupView
