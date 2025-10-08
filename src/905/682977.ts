import classNames from "classnames"
import { PureComponent } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { KindEnum } from "../905/129884"
import { trackEventAnalytics } from "../905/449184"
import { e4, LI, nf, nM, tk, U1, XH, Yd, z5, zp } from "../905/832675"
import { cssBuilderInstance } from "../cssbuilder/589278"
import { withTrackedClick } from "../figma_app/831799"
import { LoadingSpinner } from "../figma_app/858013"

interface TableRowProps {
  "style"?: React.CSSProperties
  "tooltipText"?: string
  "useAdminTableStyles"?: boolean
  "header"?: boolean
  "selected"?: boolean
  "highlighted"?: boolean
  "leftPadding"?: boolean
  "aria-label"?: string
  "dataTestId"?: string
  "className"?: string
  "onClick"?: () => void
  "onEnterDown"?: () => void
  "onMouseDown"?: () => void
  "onMouseEnter"?: () => void
  "onMouseLeave"?: () => void
  "overrideTabIndex"?: number | null
  "children"?: React.ReactNode
}

interface TableCellProps {
  "style"?: React.CSSProperties
  "className"?: string
  "onClick"?: () => void
  "aria-label"?: string
  "children"?: React.ReactNode
}

interface SortableHeaderCellProps extends TableCellProps {
  isDescending?: boolean
  field?: string
  rightAligned?: boolean
  hasArrow?: boolean
  sortBy?: (field: string) => void
}

/**
 * TableRow - A table row component with optional tooltip and styling capabilities
 * Original name: $$m2
 */
export class TableRow extends PureComponent<TableRowProps> {
  render() {
    const style = {
      ...this.props.style,
    }

    const tooltipAttributes = this.props.tooltipText
      ? {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": this.props.tooltipText,
          "data-tooltip-show-below": true,
          "data-tooltip-timeout-delay": 50,
          "data-tooltip-max-width": 220,
        }
      : {}

    const rowClasses = {
      [Yd]: this.props.useAdminTableStyles,
      [XH]: this.props.useAdminTableStyles && this.props.header,
      [zp]: this.props.useAdminTableStyles && this.props.selected,
      [nf]: this.props.useAdminTableStyles && this.props.highlighted,
      [U1]: !this.props.useAdminTableStyles && this.props.header,
      [nM]: !this.props.useAdminTableStyles && !this.props.header,
      [z5]: this.props.leftPadding,
    }

    const handleEnterKeyDown = this.props.onEnterDown

    let tabIndex: number | undefined = 0
    if (typeof this.props.overrideTabIndex === "number") {
      tabIndex = this.props.overrideTabIndex
    }
    else if (this.props.overrideTabIndex === null) {
      tabIndex = undefined
    }

    return jsx("div", {
      ...tooltipAttributes,
      "aria-label": this.props["aria-label"],
      "className": classNames(rowClasses, this.props.className),
      "data-testid": this.props.dataTestId,
      "onClick": this.props.onClick,
      "onKeyDown": handleEnterKeyDown
        ? (event: React.KeyboardEvent) => {
            if (event.key === "Enter") {
              handleEnterKeyDown()
            }
          }
        : undefined,
      "onMouseDown": this.props.onMouseDown,
      "onMouseEnter": this.props.onMouseEnter,
      "onMouseLeave": this.props.onMouseLeave,
      "role": "row",
      "style": style,
      "tabIndex": tabIndex,
      "children": this.props.children,
    })
  }
  static displayName = "TableRow"
}

/**
 * TableRowWithTracking - A TableRow component with click tracking
 * Original name: $$h4
 */
export const TableRowWithTracking = withTrackedClick(TableRow)

/**
 * LoadingRow - A table row that displays a loading spinner
 * Original name: $$g1
 */
export class LoadingRow extends PureComponent<{ className?: string }> {
  render() {
    return jsx(TableRow, {
      className: `${tk} ${this.props.className || ""}`,
      children: jsx(LoadingSpinner, {}),
    })
  }
  static displayName = "LoadingRow"
}

/**
 * HeaderCell - A table header cell component
 * Original name: $$f0
 */
export class HeaderCell extends PureComponent<TableCellProps> {
  render() {
    return jsx("div", {
      "className": `${e4} ${this.props.className || ""}`,
      "style": this.props.style || {},
      "onClick": this.props.onClick ? this.props.onClick : undefined,
      "tabIndex": this.props.onClick ? 0 : undefined,
      "role": "columnheader",
      "aria-label": this.props["aria-label"],
      "children": this.props.children,
    })
  }
  static displayName = "HeaderCell"
}

/**
 * SortableHeaderCell - A header cell that supports sorting
 * Original name: $$_5
 */
export class SortableHeaderCell extends PureComponent<SortableHeaderCellProps> {
  constructor(props: SortableHeaderCellProps) {
    super(props)
    this.sortBy = this.sortBy.bind(this)
  }

  private sortBy() {
    trackEventAnalytics("Sort Changed - SortableField", {
      isDescending: this.props.isDescending,
      field: this.props.field,
    })
    if (this.props.sortBy && this.props.field) {
      this.props.sortBy(this.props.field)
    }
  }

  render() {
    const arrowSymbol = this.props.isDescending ? "↓" : "↑"

    return jsxs("div", {
      className: classNames(
        LI,
        cssBuilderInstance
          .if(!this.props.rightAligned, cssBuilderInstance.pr6, cssBuilderInstance.pl6)
          .$,
        this.props.className,
      ),
      style: this.props.style ? this.props.style : {},
      onClick: this.sortBy,
      children: [
        this.props.rightAligned && this.props.hasArrow && jsx("div", {
          style: {
            paddingRight: "3px",
          },
          children: arrowSymbol,
        }),
        this.props.children,
        !this.props.rightAligned && this.props.hasArrow && jsx("div", {
          style: {
            paddingLeft: "3px",
          },
          children: arrowSymbol,
        }),
      ],
    })
  }
  static displayName = "SortableHeaderCell"
}

/**
 * NonSortableHeaderCell - A header cell without sorting capabilities
 * Original name: $$A3
 */
export class NonSortableHeaderCell extends PureComponent<TableCellProps> {
  render() {
    return jsx("div", {
      className: classNames(LI, this.props.className),
      style: this.props.style ? this.props.style : {},
      children: this.props.children,
    })
  }
  static displayName = "NonSortableHeaderCell"
}

// Export aliases for backward compatibility
export const A3 = HeaderCell
export const FO = LoadingRow
export const Hj = TableRow
export const ZY = NonSortableHeaderCell
export const iA = TableRowWithTracking
export const tD = SortableHeaderCell
