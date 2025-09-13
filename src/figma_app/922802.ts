import { jsxs, jsx } from "react/jsx-runtime";
import { Component } from "react";
import { ButtonPrimitive } from "../905/632989";
import { desktopAPIInstance } from "../figma_app/876459";
import { k } from "../figma_app/620913";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { A } from "../svg/254926";
export class $$u0 extends Component {
  render() {
    return jsxs("div", {
      className: "interstitial_page--page--jxBjZ interstitial_page--background--7zPzx",
      children: [jsx("div", {
        className: "interstitial_page--navbar--4DoBt",
        children: jsxs("div", {
          "aria-hidden": this.props.staticLogo,
          className: `interstitial_page--logo--s9Fkg ${!this.props.staticLogo && "interstitial_page--logoLink--IwtO9"}`,
          children: [this.props.staticLogo && jsx(SvgComponent, {
            svg: A,
            autosize: !0
          }), !this.props.staticLogo && (desktopAPIInstance ? jsx(ButtonPrimitive, {
            className: "interstitial_page--figmaButton--ZLWpF",
            onClick: () => {
              k();
            },
            children: jsx(SvgComponent, {
              "aria-label": getI18nString("auth.figma_logo.label"),
              svg: A
            })
          }) : jsx("a", {
            href: "/",
            children: jsx(SvgComponent, {
              "aria-label": getI18nString("auth.figma_logo.label"),
              svg: A,
              autosize: !0
            })
          }))]
        })
      }), this.props.children]
    });
  }
}
$$u0.defaultProps = {
  title: "Figma"
};
export const w = $$u0;