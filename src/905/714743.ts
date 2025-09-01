import { jsx } from "react/jsx-runtime";
import { createRef } from "react";
import a from "classnames";
import { o6, cZ, Am } from "../figma_app/806412";
var s = a;
export function $$l1(e) {
  return e;
}
export class $$d0 extends o6 {
  constructor() {
    super(...arguments);
    this.spanRef = createRef();
    this.onClick = cZ(this, "click", e => {
      this.props.onClick(e);
    });
    this.onMouseDown = cZ(this, "mousedown", e => {
      this.props.onMouseDown(e);
    });
    this.onPointerUp = Am(this, "pointerup", e => {
      this.props.onPointerUp(e);
    });
  }
  render() {
    let e = this.props.svg;
    if (null == e) return null;
    e.$$default && (e = e.$$default);
    let t = e;
    let i = {
      ...this.props
    };
    delete i.svg;
    delete i.useOriginalSrcFills_DEPRECATED;
    delete i.recordingKey;
    delete i.title;
    delete i.ariaLabel;
    delete i.ariaHidden;
    delete i.role;
    delete i.dataTestId;
    delete i.svgClassName;
    delete i.innerSpanRef;
    delete i.svgWidth;
    delete i.svgHeight;
    this.props.onClick && this.props.recordingKey && (i.onClick = this.onClick);
    this.props.onMouseDown && this.props.recordingKey && (i.onMouseDown = this.onMouseDown);
    this.props.onPointerUp && this.props.recordingKey && (i.onPointerUp = this.onPointerUp);
    let r = this.props.useOriginalSrcFills_DEPRECATED ? "" : "svg-container";
    this.props.className && (r += ` ${this.props.className}`);
    let a = s()("svg", this.props.svgClassName);
    let o = `<svg class="${a}" `;
    let l = "";
    this.props.svgWidth && (l += `width: ${this.props.svgWidth}; `);
    this.props.svgHeight && (l += `height: ${this.props.svgHeight}; `);
    l && (o += `style="${l}" `);
    this.props.title && (o += `title="${this.props.title}" `);
    let d = "button" === this.props.role;
    !d && this.props.ariaLabel && (o += `aria-label="${this.props.ariaLabel}" `);
    this.props.ariaHidden && (o += 'aria-hidden="true" ');
    t = t.replace("<svg ", o);
    let {
      autosize,
      ...u
    } = i;
    if (!0 === autosize) {
      r += " svg--autoscale---9awM";
      let e = u.style ? {
        ...u.style
      } : {};
      e.height = i.height;
      e.width = i.width;
      u.style = e;
    }
    return jsx("span", {
      ref: e => {
        this.spanRef.current = e;
        this.props.innerSpanRef && (this.props.innerSpanRef.current = e);
      },
      role: this.props.role,
      dangerouslySetInnerHTML: {
        __html: t
      },
      "aria-label": d && this.props.ariaLabel ? this.props.ariaLabel : void 0,
      ...u,
      className: r,
      "data-testid": this.props.dataTestId,
      "aria-hidden": this.props.ariaHidden
    });
  }
}
$$d0.displayName = "Svg";
export const B = $$d0;
export const V = $$l1;