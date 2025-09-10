import { jsx } from "react/jsx-runtime";
import { Component } from "react";
import { e as _$$e } from "../905/280005";
import { nf } from "../905/190597";
export class $$o0 extends Component {
  render() {
    let e = `${nf} ${this.props.className || ""}`;
    let {
      canFocus,
      trusted,
      ...r
    } = this.props;
    let o = {
      ...r,
      className: e,
      rel: trusted ? "noopener" : "noopener nofollow noreferrer ugc",
      onClick: e => {
        this.props.onClick && this.props.onClick(e);
        this.props.href && _$$e(this.props.href, e);
      }
    };
    canFocus && (o = {
      href: "#",
      tabIndex: 0,
      ...o
    });
    return jsx("a", {
      ...o,
      children: this.props.children
    });
  }
}
$$o0.displayName = "Link";
export const N = $$o0;
