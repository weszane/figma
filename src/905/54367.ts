import { jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { o as _$$o } from "../905/451156";
import { zP, NQ, xW, Y1 } from "../905/118234";
var o = (e => (e.DEFAULT = "default", e.ADMIN_SETTINGS = "adminSettings", e))(o || {});
class l extends _$$o {
  constructor() {
    super(...arguments);
    this.styleOverrides = () => ({
      base: zP
    });
  }
}
class d extends _$$o {
  constructor() {
    super(...arguments);
    this.styleOverrides = () => ({
      base: NQ,
      selected: xW
    });
  }
}
class c extends PureComponent {
  constructor(e) {
    super(e);
    this.getTabClassWithStyling = () => "adminSettings" === this.props.variant ? d : l;
  }
  render() {
    let e = this.getTabClassWithStyling();
    return jsx(e, {
      tab: this.props.tab,
      selectedTab: this.props.selectedTab,
      onClick: this.props.onClick,
      disabled: this.props.disabled,
      tooltipText: this.props.tooltipText,
      showTooltipWhenDisabled: this.props.showTooltipWhenDisabled,
      dataText: this.props.dataText,
      children: jsx("span", {
        className: Y1,
        "data-onboarding-key": this.props["data-onboarding-key"],
        children: this.props.children
      })
    });
  }
}
export let $$u0 = c.name;
export function $$p1() {
  return c;
}
export const pG = $$u0;
export const rw = $$p1;