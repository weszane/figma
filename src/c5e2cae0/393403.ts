import { jsxs, jsx } from "react/jsx-runtime";
import { Component } from "react";
export class $$i0 extends Component {
  render() {
    return jsxs("div", {
      className: "persisted_error--container--ls5K4",
      style: {
        marginTop: this.props.marginTop ?? 32
      },
      children: [jsx("div", {
        className: "persisted_error--sideBar--C-abH"
      }), jsx("div", {
        className: "persisted_error--message--EiciR",
        children: this.props.message
      })]
    });
  }
}
export const I = $$i0;