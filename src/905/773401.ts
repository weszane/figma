import { jsx } from "react/jsx-runtime";
import { Component } from "react";
import { k } from "../905/443820";
import s from "classnames";
import { L } from "../905/408237";
import { tf } from "../figma_app/831799";
var o = s;
export class $$c0 extends Component {
  render() {
    let e = o()("auth_view--brandButton--Le4wb auth_view--brandButtonBase--RAO-j auth_brand--figmaSans--aXdNw", {
      "auth_view--fullWidth--ffDfw": this.props.fullWidth,
      "landing_form--hollowButton--fo853 auth_view--brandButton--Le4wb auth_view--brandButtonBase--RAO-j auth_brand--figmaSans--aXdNw": "hollow" === this.props.use,
      "landing_form--autoHeight--uHR-p": this.props.autoHeight
    }, this.props.className);
    let t = {
      ...this.props,
      className: e
    };
    delete t.loading;
    delete t.fullWidth;
    delete t.autoHeight;
    return jsx("button", {
      ...t,
      disabled: this.props.disabled || this.props.loading,
      children: this.props.loading ? jsx("div", {
        className: "landing_form--loadingIconCentered--qUt4Q",
        children: jsx(k, {})
      }) : this.props.children
    });
  }
}
$$c0.displayName = "Button";
$$c0.defaultProps = {
  fullWidth: !0
};
export let $$u1 = tf($$c0);
export class $$p2 extends Component {
  render() {
    let e = `landing_form--textInput--QhVAu landing_form--input--yxoaP ${this.props.className || ""}`;
    let t = {
      ...this.props,
      className: e
    };
    return jsx(L, {
      ...t
    });
  }
}
$$p2.displayName = "TextInput";
export const Ak = $$c0;
export const Q9 = $$u1;
export const ks = $$p2;