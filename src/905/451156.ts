import { jsx } from "react/jsx-runtime";
import { RecordingComponent, handleMouseEvent } from "../figma_app/878298";
import { KindEnum } from "../905/129884";
export class $$s0 extends RecordingComponent {
  constructor(e) {
    super(e);
    this.styleOverrides = () => ({});
    this.applyDefaultStyles = () => !0;
    this.onClick = handleMouseEvent(this, "click", () => {
      this.props.onClick && this.props.onClick(this.props.tab);
    });
    this.onMouseEnter = e => {
      if (!this.props.onlyShowTooltipsWhenTruncated) return;
      let t = e.target;
      t.offsetWidth < t.scrollWidth ? this.state.showTooltip || this.setState({
        showTooltip: !0
      }) : this.state.showTooltip && this.setState({
        showTooltip: !1
      });
    };
    this.state = {
      showTooltip: !0
    };
  }
  render() {
    let e = this.applyDefaultStyles() ? "tab--base--26PPx text--fontPos13--xW8hS text--_fontBase--QdLsd" : "";
    let t = this.styleOverrides().base;
    let i = this.applyDefaultStyles() ? "tab--unselected--u-2SW" : "";
    let r = this.styleOverrides().unselected;
    this.props.disabled ? this.props.tooltipText && this.props.showTooltipWhenDisabled ? (i = this.applyDefaultStyles() ? "tab--disabledWithTooltip--2QX3R" : "", r = this.styleOverrides().disabledWithTooltip) : (i = this.applyDefaultStyles() ? "tab--disabled--eOpvQ tab--disabledWithTooltip--2QX3R" : "", r = this.styleOverrides().disabled) : this.props.selectedTab === this.props.tab && (i = this.applyDefaultStyles() ? "tab--selected--u0OBe" : "", r = this.styleOverrides().selected);
    return jsx("button", {
      "data-onboarding-key": this.props["data-onboarding-key"],
      className: `${e} ${t || ""} ${i} ${r || ""}`,
      onClick: this.onClick,
      onMouseEnter: this.props.onlyShowTooltipsWhenTruncated ? this.onMouseEnter : void 0,
      "data-testid": this.props.dataTestId,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": this.state.showTooltip ? this.props.tooltipText : void 0,
      "data-text": this.props.dataText,
      children: this.props.children
    });
  }
}
$$s0.displayName = "Tab";
export const o = $$s0;