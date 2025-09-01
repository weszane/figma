import { jsx, jsxs } from "react/jsx-runtime";
import { Component } from "react";
import { getFeatureFlags } from "../905/601108";
import s from "classnames";
import { getInitialOptions } from "../figma_app/169182";
import { B } from "../905/714743";
import { Dm } from "../figma_app/8833";
import { Rf } from "../figma_app/546509";
import { XY, Tc, b1, pj, DY, jT, Gv, OW, ZS, TK, Yg } from "../905/362959";
import { A } from "../6828/564422";
var o = s;
export class $$h0 extends Component {
  render() {
    return jsx("div", {
      className: o()(this.props.tintedModalBackground ? o()(XY, Dm) : Tc, this.props.unblockFileBrowserSidebar ? o()(b1, {
        [pj]: getFeatureFlags().file_browser_sidebar_row_ui
      }) : null),
      onClick: this.props.close,
      children: jsxs("div", {
        className: this.props.renderSimplifiedView ? DY : jT,
        onClick: e => {
          e.stopPropagation();
        },
        children: [this.props.onBackClick && jsx("button", {
          onClick: this.props.onBackClick,
          className: Gv,
          type: "button",
          "data-testid": "back-button",
          children: jsx(B, {
            svg: A,
            className: OW
          })
        }), this.props.headerImage, this.props.imageSrc && jsx("div", {
          className: this.props.imageClassName ? this.props.imageClassName : ZS,
          children: jsx(B, {
            useOriginalSrcFills_DEPRECATED: this.props.useOriginalSrcFills,
            svg: this.props.imageSrc,
            autosize: !0
          })
        }), this.props.headerText && jsx("div", {
          className: TK,
          children: this.props.headerText
        }), this.props.secondaryText && jsx("div", {
          className: Yg,
          children: this.props.secondaryText
        }), this.props.children]
      })
    });
  }
  componentDidMount() {
    let e = Rf();
    e?.updateTrackingSessionId && e.updateTrackingSessionId(getInitialOptions().tracking_session_id);
  }
}
export const u = $$h0;