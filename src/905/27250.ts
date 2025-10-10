import type { MouseEvent } from "react"
import classNames from "classnames"
import { createRef, PureComponent } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { getI18nString } from "../905/303541"
import { RenderListByChunks } from "../905/605383"
import { getStorage } from "../905/657224"
import { SortableHeaderCell, TableRow } from "../905/682977"
import { w } from "../905/835474"
import { e as _$$e, e as CaretIcon } from "../905/916195"
import { PrimaryWorkflowEnum } from "../figma_app/633080"
import { getLibraryAgeLabel } from "../figma_app/646357"
import { sortBy, sortByProperty, sortByPropertyWithOptions } from "../figma_app/656233"

// CSS class variables renamed for clarity
const avatarColumnClass = "library_item_stats--avatarColumn--do7-S text--fontPos11--2LvXf text--_fontBase--QdLsd"
const caretColumnClass = "library_item_stats--caretColumn--rxdCY"
const statsColumnClass = "library_item_stats--statsColumn--w1WRv text--fontPos11--2LvXf text--_fontBase--QdLsd"
const statsColumnValueClass = "library_item_stats--statsColVal--iaJsV library_item_stats--statsColumn--w1WRv text--fontPos11--2LvXf text--_fontBase--QdLsd"

// Interfaces inferred from code logic
interface ItemStat {
  name: string
  type: PrimaryWorkflowEnum
  component_key?: string
  key: string
  thumbnail_url: string
  num_states?: number
  num_existing_instances: number
  num_insertions: number
  num_detachments: number
}

interface LibraryStatsTableProps {
  showingStateStats: boolean
  duration: any // Assumed string based on usage
  itemStats: ItemStat[]
  scrollTo: (offset: number) => void
  viewItem: (event: MouseEvent, stat: ItemStat) => void
}

interface LibraryStatsTableState {
  sortBy: string
  prevCol: string | null
  isDescending: boolean
}

interface HeaderColumn {
  header: string
  sortBy: string
  className: string
}

interface ComponentRowProps {
  stat: ItemStat
  viewItem: (event: MouseEvent, stat: ItemStat) => void
  showingStateStats: boolean
}

export class LibraryStatsTable extends PureComponent<LibraryStatsTableProps, LibraryStatsTableState> {
   storageKey = "subscriptionFileViewComponentStats:state"
   storage = getStorage()
   onSortScrollTargetRef = createRef<HTMLDivElement>()
   CHUNK_SIZE = 50

  constructor(props: LibraryStatsTableProps) {
    super(props)
    this.setSortByAndOrder = this.setSortByAndOrder.bind(this)
    const storedState = this.storage.get(this.storageKey)
    this.state = storedState || {
      sortBy: "alpha",
      prevCol: null,
      isDescending: true,
    }
  }

   setSortByAndOrder(sortField: string): void {
    const { sortBy, isDescending } = this.state
    const newIsDescending = sortBy !== sortField || !isDescending
    const newState = {
      sortBy: sortField,
      prevCol: sortBy,
      isDescending: newIsDescending,
    }
    this.setState(newState)
    this.storage.set(this.storageKey, newState)
    if (this.onSortScrollTargetRef.current?.offsetTop) {
      this.props.scrollTo(this.onSortScrollTargetRef.current.offsetTop)
    }
  }

  render(): JSX.Element {
    const { showingStateStats, itemStats, duration } = this.props
    const { sortBy, isDescending } = this.state

    // Build header columns dynamically based on showingStateStats
    const headerColumns: HeaderColumn[] = [
      {
        header: showingStateStats
          ? getI18nString("design_systems.libraries_modal.variant_name")
          : getI18nString("design_systems.libraries_modal.component_name"),
        sortBy: "alpha",
        className: avatarColumnClass,
      },
    ]
    if (!showingStateStats) {
      headerColumns.push({
        header: getI18nString("design_systems.libraries_modal.total_variants"),
        sortBy: "num_states",
        className: statsColumnClass,
      })
    }
    headerColumns.push(
      {
        header: getI18nString("design_systems.libraries_modal.total_instances"),
        sortBy: "num_existing_instances",
        className: statsColumnClass,
      },
      {
        header: getI18nString("design_systems.libraries_modal.inserts_last_duration", {
          duration: getLibraryAgeLabel(duration),
        }),
        sortBy: "num_insertions",
        className: statsColumnClass,
      },
      {
        header: getI18nString("design_systems.libraries_modal.detaches_last_duration", {
          duration: getLibraryAgeLabel(duration),
        }),
        sortBy: "num_detachments",
        className: statsColumnClass,
      },
    )

    // Sort itemStats in-place based on current sortBy (potential bug: modifies original array)
    const sortedStats = [...itemStats] // Clone to avoid mutating props
    switch (sortBy) {
      case "alpha":
        sortByPropertyWithOptions(sortedStats, "name", { isDescending: !isDescending })
        break
      case "num_states":
        sortBy(sortedStats, item => (item.type === PrimaryWorkflowEnum.STATE_GROUP ? item.num_states || 0 : 0), isDescending)
        break
      case "num_existing_instances":
        sortByProperty(sortedStats, "num_existing_instances", isDescending)
        break
      case "num_insertions":
        sortByProperty(sortedStats, "num_insertions", isDescending)
        break
      case "num_detachments":
        sortByProperty(sortedStats, "num_detachments", isDescending)
        break
    }

    // Create a key for RenderListByChunks based on item keys
    const listKey = itemStats.map(stat => (stat.type === PrimaryWorkflowEnum.COMPONENT ? stat.component_key : stat.key)).join(",")

    return jsxs("div", {
      className: "library_item_stats--statsTable--ThkjJ",
      children: [
        jsx("div", {
          className: "library_item_stats--libraryAnalyticsHeader--eLsyV library_modal_stats--libraryAnalyticsHeader--9giDS text--fontPos14--OL9Hp text--_fontBase--QdLsd",
          children: showingStateStats
            ? getI18nString("design_systems.libraries_modal.all_variants")
            : getI18nString("design_systems.libraries_modal.component_statistics"),
        }),
        jsx("div", {
          ref: this.onSortScrollTargetRef,
        }),
        jsxs(TableRow, {
          className: "library_item_stats--statsTableHeaderRow--rCg6s library_modal_stats--headerRow--MTZxi text--fontPos11--2LvXf text--_fontBase--QdLsd",
          children: [
            headerColumns.map(col =>
              jsx(
                SortableHeaderCell,
                {
                  className: classNames(col.className, {
                    "library_item_stats--selectedCol--ZqfRg library_modal_stats--selectedCol--pwGl4": sortBy === col.sortBy,
                  }),
                  isDescending,
                  hasArrow: sortBy === col.sortBy,
                  field: col.sortBy,
                  sortBy: this.setSortByAndOrder,
                  children: col.header,
                },
                col.sortBy,
              ),
            ),
            jsx("div", {
              className: caretColumnClass,
            }),
          ],
        }),
        jsx("div", {
          children: jsx(RenderListByChunks, {
            chunkSize: this.CHUNK_SIZE,
            listKey,
            children: sortedStats.map(stat =>
              jsx(
                ComponentRow,
                {
                  stat,
                  viewItem: this.props.viewItem,
                  showingStateStats,
                },
                stat.type === PrimaryWorkflowEnum.COMPONENT ? stat.component_key : stat.key,
              ),
            ),
          }),
        }),
      ],
    })
  }
}

class ComponentRow extends PureComponent<ComponentRowProps> {
  constructor(props: ComponentRowProps) {
    super(props)
    this.viewComponent = this.viewComponent.bind(this)
  }

   viewComponent(event: MouseEvent): void {
    event.stopPropagation()
    event.preventDefault()
    this.props.viewItem(event, this.props.stat)
  }

   renderSplitName(name: string): JSX.Element {
    const parts = this.props.showingStateStats ? [w(name)] : name.split("/")
    if (parts.length <= 1) {
      return jsx("span", { children: parts[parts.length - 1] })
    }
    return jsxs("span", {
      children: [
        jsxs("span", {
          className: "library_item_stats--prefixText---b4V4",
          children: [parts.slice(0, parts.length - 1).join("/"), "/"],
        }),
        jsx("span", { children: parts[parts.length - 1] }),
      ],
    })
  }

  render(): JSX.Element {
    const { stat, showingStateStats } = this.props
    return jsxs(TableRow, {
      className: "library_item_stats--row--CVlCa text--fontPos11--2LvXf text--_fontBase--QdLsd",
      onMouseDown: this.viewComponent,
      children: [
        jsxs("div", {
          className: avatarColumnClass,
          children: [
            jsx("img", {
              src: stat.thumbnail_url,
              className: "library_item_stats--componentAvatar--i5fhp",
              alt: "",
            }),
            jsx("div", {
              className: "library_item_stats--avatarColumnComponentName--UJJYP ellipsis--ellipsis--Tjyfa",
              children: this.renderSplitName(stat.name),
            }),
          ],
        }),
        !showingStateStats
        && jsx("div", {
          className: statsColumnValueClass,
          children: stat.type === PrimaryWorkflowEnum.STATE_GROUP ? stat.num_states : getI18nString("design_systems.libraries_modal.n_a"),
        }),
        jsx("div", {
          className: statsColumnValueClass,
          children: stat.num_existing_instances.toLocaleString(),
        }),
        jsx("div", {
          className: statsColumnValueClass,
          children: stat.num_insertions.toLocaleString(),
        }),
        jsx("div", {
          className: statsColumnValueClass,
          children: stat.num_detachments.toLocaleString(),
        }),
        jsx("div", {
          className: caretColumnClass,
          children: jsx("div", {
            className: "library_item_stats--componentRowCaretRightWrapper--7-iSn",
            children: jsx(CaretIcon, {}),
          }),
        }),
      ],
    })
  }
static displayName = "ComponentRow"
}


export const A = LibraryStatsTable
