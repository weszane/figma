import { jsx, jsxs } from "react/jsx-runtime";
import { PureComponent } from "react";
import a from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { LoadingSpinner } from "../figma_app/858013";
import { s as _$$s } from "../cssbuilder/589278";
import { tf } from "../figma_app/831799";
import { KindEnum } from "../905/129884";
import { Yd, XH, zp, nf, U1, nM, z5, tk, e4, LI } from "../905/832675";
var s = a;
export class $$m2 extends PureComponent {
  render() {
    let e = {
      ...this.props.style
    };
    let t = this.props.tooltipText ? {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": this.props.tooltipText,
      "data-tooltip-show-below": !0,
      "data-tooltip-timeout-delay": 50,
      "data-tooltip-max-width": 220
    } : {};
    let i = {
      [Yd]: this.props.useAdminTableStyles,
      [XH]: this.props.useAdminTableStyles && this.props.header,
      [zp]: this.props.useAdminTableStyles && this.props.selected,
      [nf]: this.props.useAdminTableStyles && this.props.highlighted,
      [U1]: !this.props.useAdminTableStyles && this.props.header,
      [nM]: !this.props.useAdminTableStyles && !this.props.header,
      [z5]: this.props.leftPadding
    };
    let r = this.props.onEnterDown;
    let a = 0;
    "number" == typeof this.props.overrideTabIndex ? a = this.props.overrideTabIndex : null === this.props.overrideTabIndex && (a = void 0);
    return jsx("div", {
      ...t,
      "aria-label": this.props["aria-label"],
      className: s()(i, this.props.className),
      "data-testid": this.props.dataTestId,
      onClick: this.props.onClick,
      onKeyDown: r ? e => {
        "Enter" === e.key && r();
      } : void 0,
      onMouseDown: this.props.onMouseDown,
      onMouseEnter: this.props.onMouseEnter,
      onMouseLeave: this.props.onMouseLeave,
      role: "row",
      style: e,
      tabIndex: a,
      children: this.props.children
    });
  }
}
$$m2.displayName = "TableRow";
export let $$h4 = tf($$m2);
export class $$g1 extends PureComponent {
  render() {
    return jsx($$m2, {
      className: `${tk} ${this.props.className || ""}`,
      children: jsx(LoadingSpinner, {})
    });
  }
}
$$g1.displayName = "LoadingRow";
export class $$f0 extends PureComponent {
  render() {
    return jsx("div", {
      className: `${e4} ${this.props.className || ""}`,
      style: this.props.style || {},
      onClick: this.props.onClick ? this.props.onClick : void 0,
      tabIndex: this.props.onClick ? 0 : void 0,
      role: "columnheader",
      "aria-label": this.props["aria-label"],
      children: this.props.children
    });
  }
}
$$f0.displayName = "HeaderCell";
export class $$_5 extends PureComponent {
  constructor() {
    super(...arguments);
    this.sortBy = () => {
      trackEventAnalytics("Sort Changed - SortableField", {
        isDescending: this.props.isDescending,
        field: this.props.field
      });
      this.props.sortBy(this.props.field);
    };
  }
  render() {
    let e = this.props.isDescending ? "\u2193" : "\u2191";
    return jsxs("div", {
      className: s()(LI, _$$s.$$if(!this.props.rightAligned, _$$s.pr6, _$$s.pl6).$, this.props.className),
      style: this.props.style ? this.props.style : {},
      onClick: this.sortBy,
      children: [this.props.rightAligned && this.props.hasArrow && jsx("div", {
        style: {
          paddingRight: "3px"
        },
        children: e
      }), this.props.children, !this.props.rightAligned && this.props.hasArrow && jsx("div", {
        style: {
          paddingLeft: "3px"
        },
        children: e
      })]
    });
  }
}
$$_5.displayName = "SortableHeaderCell";
export class $$A3 extends PureComponent {
  render() {
    return jsx("div", {
      className: s()(LI, this.props.className),
      style: this.props.style ? this.props.style : {},
      children: this.props.children
    });
  }
}
$$A3.displayName = "NonSortableHeaderCell";
export const A3 = $$f0;
export const FO = $$g1;
export const Hj = $$m2;
export const ZY = $$A3;
export const iA = $$h4;
export const tD = $$_5;