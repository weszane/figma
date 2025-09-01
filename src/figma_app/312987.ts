import { jsxs, jsx } from "react/jsx-runtime";
import { PureComponent, createRef } from "react";
import { B } from "../905/714743";
import { oB, j7 } from "../905/929976";
import { Ib } from "../905/129884";
import { eh, Gb, ai } from "../905/749493";
import { A } from "../6828/364616";
export class $$c0 extends PureComponent {
  constructor() {
    super(...arguments);
    this.ref = createRef();
    this.toggleDropdown = e => {
      if (e.preventDefault(), e.stopPropagation(), this.props.showingDropdown) this.props.dispatch(oB());else {
        let e;
        let t = this.ref.current.getBoundingClientRect();
        let r = t.top >= window.innerHeight - 200;
        e = this.props.isMultilevelDropdown ? {
          targetRect: t
        } : {
          position: {
            top: r ? "auto" : t.top,
            bottom: r ? 36 : "auto",
            left: this.props.isRightAligned ? "auto" : Math.min(t.left, window.innerWidth - 180),
            right: this.props.isRightAligned ? window.innerWidth - Math.max(t.right, 180) : "auto"
          }
        };
        this.props.dispatch(j7({
          type: this.props.type,
          data: e
        }));
      }
    };
  }
  render() {
    return jsxs("div", {
      ref: this.ref,
      className: `${this.props.isDisabled ? eh : Gb} ${this.props.className ? this.props.className : ""}`,
      onClick: this.props.isDisabled ? void 0 : this.toggleDropdown,
      "data-tooltip-type": this.props.tooltip ? Ib.TEXT : void 0,
      "data-tooltip": this.props.tooltip ? this.props.tooltip : void 0,
      "data-tooltip-show-above": !!this.props.tooltip || void 0,
      "data-testid": "dropdown-selector",
      children: [this.props.children, !this.props.isDisabled && !this.props.hideChevron && jsx(B, {
        className: `${ai} ${this.props.chevronClassName ? this.props.chevronClassName : ""}`,
        svg: A
      })]
    });
  }
}
export const V = $$c0;