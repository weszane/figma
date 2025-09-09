import { jsxs } from "react/jsx-runtime";
import { PureComponent } from "react";
import { formatNumber } from "../figma_app/930338";
export class $$s0 extends PureComponent {
  render() {
    return jsxs("div", {
      "data-search-click-action": this.props["data-search-click-action"],
      className: `rounded_count--container--FBqxN ${this.props.className || ""}`,
      onClick: this.props.onClick || void 0,
      children: [this.props.prefix, formatNumber(Math.max(0, this.props.count))]
    });
  }
}
export const f = $$s0;