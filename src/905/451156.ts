import { jsx } from "react/jsx-runtime"
import { KindEnum } from "../905/129884"
import { handleMouseEvent, RecordingComponent } from "../figma_app/878298"

interface TabProps {
  "tab": string
  "selectedTab"?: string
  "disabled"?: boolean
  "tooltipText"?: string
  "showTooltipWhenDisabled"?: boolean
  "onlyShowTooltipsWhenTruncated"?: boolean
  "onClick"?: (tab: string) => void
  "data-onboarding-key"?: string
  "dataTestId"?: string
  "dataText"?: string
  "children"?: React.ReactNode
}

interface TabState {
  showTooltip: boolean
}

/**
 * Tab component that represents a selectable tab in the UI
 * Original class name: $$s0
 */
export class TabWithRecording<T extends Record<string, any> = any> extends RecordingComponent<TabProps & T, TabState> {
  constructor(props: TabProps & T) {
    super(props)

    this.state = {
      showTooltip: true,
    }
  }

  /**
   * Returns style overrides for different tab states
   */
 styleOverrides = (): Record<string, string> => ({})

  /**
   * Determines if default styles should be applied
   */
 applyDefaultStyles = (): boolean => true

  /**
   * Handles click events on the tab
   */
 onClick = handleMouseEvent(this, "click", () => {
    if (this.props.onClick && this.props.tab) {
      this.props.onClick(this.props.tab)
    }
  })

  /**
   * Handles mouse enter events to show tooltips when content is truncated
   */
   onMouseEnter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (!this.props.onlyShowTooltipsWhenTruncated) {
      return
    }

    const target = event.target as HTMLButtonElement

    // Check if content is truncated (overflowing)
    if (target.offsetWidth < target.scrollWidth) {
      // Show tooltip if not already shown
      if (!this.state.showTooltip) {
        this.setState({ showTooltip: true })
      }
    }
    else {
      // Hide tooltip if currently shown
      if (this.state.showTooltip) {
        this.setState({ showTooltip: false })
      }
    }
  }

  /**
   * Gets CSS class names based on tab state and props
   */
  getClassNames(): string {
    const baseClasses = this.applyDefaultStyles()
      ? "tab--base--26PPx text--fontPos13--xW8hS text--_fontBase--QdLsd"
      : ""

    const baseOverride = this.styleOverrides().base || ""

    let stateClasses = this.applyDefaultStyles()
      ? "tab--unselected--u-2SW"
      : ""

    let stateOverride = this.styleOverrides().unselected || ""

    // Determine state-specific classes
    if (this.props.disabled) {
      if (this.props.tooltipText && this.props.showTooltipWhenDisabled) {
        stateClasses = this.applyDefaultStyles()
          ? "tab--disabledWithTooltip--2QX3R"
          : ""
        stateOverride = this.styleOverrides().disabledWithTooltip || ""
      }
      else {
        stateClasses = this.applyDefaultStyles()
          ? "tab--disabled--eOpvQ tab--disabledWithTooltip--2QX3R"
          : ""
        stateOverride = this.styleOverrides().disabled || ""
      }
    }
    else if (this.props.selectedTab === this.props.tab) {
      stateClasses = this.applyDefaultStyles()
        ? "tab--selected--u0OBe"
        : ""
      stateOverride = this.styleOverrides().selected || ""
    }

    return `${baseClasses} ${baseOverride} ${stateClasses} ${stateOverride}`.trim()
  }

  render() {
    return jsx("button", {
      "data-onboarding-key": this.props["data-onboarding-key"],
      "className": this.getClassNames(),
      "onClick": this.onClick,
      "onMouseEnter": this.props.onlyShowTooltipsWhenTruncated ? this.onMouseEnter : undefined,
      "data-testid": this.props.dataTestId,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": this.state.showTooltip ? this.props.tooltipText : undefined,
      "data-text": this.props.dataText,
      "children": this.props.children,
    })
  }
  static displayName = "Tab"
}

export const o = TabWithRecording
