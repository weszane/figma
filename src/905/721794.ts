import { jsx, jsxs } from "react/jsx-runtime";
import { Component } from "react";
import { $$ } from "../figma_app/637027";
import { tx } from "../905/303541";
import { Ce } from "../905/156213";
import { qK } from "../905/102752";
import { d_ } from "../figma_app/918700";
import { yl, _Z, v0, pL } from "../figma_app/639088";
export let $$u0 = "tile-copy-link-modal";
qK($$u0, e => jsx(p, {
  ...e
}));
class p extends Component {
  constructor() {
    super(...arguments);
    this.inputRef = e => {
      e && (e.focus(), e.select());
    };
    this.hideModal = () => {
      this.props.dispatch(Ce());
    };
  }
  render() {
    let e = this.props.modalShown;
    return jsxs(d_, {
      size: "small",
      className: yl,
      ...this.props,
      children: [jsx("div", {
        children: tx("tile.copy_link.action_description")
      }), jsx("input", {
        className: _Z,
        value: e.data.link,
        readOnly: !0,
        ref: this.inputRef,
        "data-testid": "tile.copy_link.input"
      }), jsx("div", {
        className: v0,
        children: jsx($$, {
          className: pL,
          onClick: this.hideModal,
          children: tx("tile.copy_link.done")
        })
      })]
    });
  }
}
p.displayName = "TileCopyLinkModal";
export const o = $$u0;