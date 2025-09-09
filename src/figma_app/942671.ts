import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, createRef } from "react";
import { o as _$$o } from "../905/821217";
import { O } from "../905/969533";
import { cZ } from "../figma_app/272902";
import l from "classnames";
import { RecordingComponent, handleMouseEvent } from "../figma_app/878298";
import { B } from "../905/714743";
import { t as _$$t } from "../905/331623";
import { wH, Sn, r9, Pf, Qq, q3, VI, FH, cN, Ot, sc } from "../905/99033";
import { A } from "../2854/769773";
var d = l;
let m = e => e.stopPropagation();
let $$g1 = forwardRef((e, t) => jsxs(_$$o, {
  eventListeners: ["onClick"],
  children: [jsx($$f0, {
    ...e,
    children: void 0,
    recordingKey: e.recordingKey,
    forwardedRef: t
  }), e.children]
}));
export class $$f0 extends RecordingComponent {
  constructor() {
    super(...arguments);
    this.wrapperRef = createRef();
    this.buttonRef = createRef();
    this.setButtonRef = e => {
      cZ(this.buttonRef, e);
      cZ(this.props.forwardedRef, e);
    };
    this.onClick = handleMouseEvent(this, "click", e => {
      this.props.onClick?.(e);
    });
    this.onKeyDown = e => {
      "Escape" === e.key && (e.preventDefault(), this.wrapperRef.current?.blur(), this.buttonRef.current?.blur());
      this.props.enabled && !this.props.hidden && ("Enter" === e.key || " " === e.key) && (e.preventDefault(), this.props.onClick(e));
    };
  }
  render() {
    let e;
    let t = "";
    t = this.props.selected ? wH : this.props.enabled ? Sn : r9;
    this.props.isUI3 && this.props.ui3Icon ? e = this.props.ui3Icon : this.props.useSvgNode ? e = this.props.svgNode ? jsx("span", {
      children: this.props.svgNode
    }) : null : this.props.svg && (e = jsx(_$$t, {
      svg: this.props.svg,
      fallbackSvg: this.props.fallbackSvg,
      useOriginalSrcFills_DEPRECATED: this.props.useOriginalSrcFills_DEPRECATED,
      className: this.props.svgStyle
    }));
    let r = jsxs(Fragment, {
      children: [!this.props.hidden && e, this.props.text && jsx("span", {
        className: this.props.textStyle || (this.props.svg ? Pf : Qq),
        children: this.props.text
      }), this.props.showIndicator && jsx("span", {
        className: this.props.indicatorStyle ? this.props.indicatorStyle : q3
      }), this.props.showChevron && (this.props.isUI3 ? jsx("div", {
        className: VI,
        children: jsx(O, {})
      }) : this.props.positionOnChevron ? jsx("div", {
        className: FH,
        ref: this.props.chevronRef,
        children: jsx(B, {
          svg: A,
          className: d()(cN, Ot)
        })
      }) : jsx(B, {
        svg: A,
        className: cN
      })), this.props.children]
    });
    return jsx("button", {
      ref: this.setButtonRef,
      "aria-controls": this.props["aria-controls"],
      "aria-expanded": this.props["aria-expanded"],
      "aria-haspopup": this.props["aria-haspopup"],
      "aria-label": this.props.ariaLabel,
      className: d()(t, this.props.narrow ? sc : null, this.props.className),
      "data-fullscreen-intercept": !0,
      "data-onboarding-key": this.props.onboardingKey,
      "data-testid": this.props.dataTestId,
      "data-tooltip": this.props["data-tooltip"],
      "data-tooltip-offset-x": this.props["data-tooltip-offset-x"] ? this.props["data-tooltip-offset-x"] : this.props.showChevron && !this.props.isUI3 && this.props.positionOnChevron ? 8 : 0,
      "data-tooltip-shortcut-key": this.props["data-tooltip-shortcut-key"],
      "data-tooltip-show-right": this.props["data-tooltip-show-right"],
      "data-tooltip-slides": this.props["data-tooltip-slides"],
      "data-tooltip-submenu-open": this.props["data-tooltip-submenu-open"],
      "data-tooltip-type": this.props["data-tooltip-type"],
      id: this.props.id,
      onClick: m,
      onKeyDown: this.onKeyDown,
      onMouseDown: this.props.enabled && !this.props.hidden ? this.onClick : void 0,
      children: r
    });
  }
}
$$f0.displayName = "TopBarAction";
$$f0.defaultProps = {
  enabled: !0,
  hidden: !1
};
export const L = $$f0;
export const i = $$g1;