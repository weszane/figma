import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Component } from "react";
import { clampOptional } from "../figma_app/492908";
import { cZ } from "../figma_app/272902";
import { parsePxNumber } from "../figma_app/783094";
import { KeyCodes } from "../905/63728";
import { LazyInputForwardRef } from "../905/408237";
import { dG } from "../figma_app/753501";
import { p as _$$p } from "../905/427409";
import { P } from "../figma_app/120873";
import { pc, PQ } from "../figma_app/973219";
export class $$h0 extends Component {
  constructor() {
    super(...arguments);
    this.currentHeight = 0;
    this.ref = e => {
      cZ(this.props.innerRef, e);
      e && !this.textarea && (this.textarea = e, this.resizeTextareaToFitValue(this.textarea.value), this.props.enforceStuckToTop && (this.textarea.scrollTop = 0), this.props.selectOnMount && (this.textarea.select(), this.textarea.setSelectionRange(this.textarea.value.length, this.textarea.value.length)));
    };
    this.resizeTextareaToFitValue = e => {
      let t;
      if (this.singleLineHeight || (this.singleLineHeight = this.cloneTextareaAndGetHeight("M")), this.props.calculateAdjustedHeightOnResize) {
        let i = this.cloneTextareaAndGetNode(e);
        t = this.props.calculateAdjustedHeightOnResize({
          clonedTextArea: i,
          singleLineHeight: this.singleLineHeight,
          value: e,
          getCalculatedScrollHeight: () => this.calculateClampedTextareaHeightWithBorder(i)
        });
        i.remove();
      } else t = this.cloneTextareaAndGetHeight(e);
      t !== this.currentHeight && (this.currentHeight = t, this.textarea.style.height = `${t}px`);
    };
    this.onKeyDown = e => {
      this.props.submit && e.keyCode === KeyCodes.ENTER && (this.props.bypassModifiers && !e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) && (e.stopPropagation(), e.preventDefault(), this.props.preventSubmitOnBlur && this.props.submit(this.textarea.value), this.textarea.blur());
      this.props.onKeyDown?.(e);
      e.keyCode === KeyCodes.ESCAPE && (this.props.onEscape ? this.props.onEscape() : this.textarea.blur());
      this.context && "=" === e.key && (e.preventDefault(), this.context?.showBindingUI(this.textarea));
    };
    this.onFocus = e => {
      this.props.onFocus?.(e);
      this.props.focusToEnd && e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length);
    };
    this.onBlur = e => {
      this.props.submit && !this.props.preventSubmitOnBlur && this.props.submit(this.textarea.value);
      this.props.onBlur?.(e);
    };
  }
  componentDidMount() {
    if (this.props.focusOnMount) {
      let e = new IntersectionObserver(t => {
        t[0].isIntersecting && (this.focus(), e.disconnect());
      });
      e.observe(this.textarea);
    }
    this.props.calculateAdjustedHeightOnResize && (this.singleLineHeight = this.cloneTextareaAndGetHeight("M"));
  }
  componentDidUpdate(e) {
    e.value !== this.props.value && this.resizeTextareaToFitValue(this.props.value);
  }
  calculateClampedTextareaHeightWithBorder(e) {
    let t = e.scrollHeight;
    if (document.defaultView?.getComputedStyle(e, null).getPropertyValue("box-sizing") === "border-box") {
      let i = document.defaultView.getComputedStyle(e, null).getPropertyValue("border-top-width");
      i && (t += parsePxNumber(i));
      let n = document.defaultView.getComputedStyle(e, null).getPropertyValue("border-bottom-width");
      n && (t += parsePxNumber(n));
    }
    return clampOptional(t, this.props.minHeight, this.props.maxHeight);
  }
  cloneTextareaAndGetHeight(e) {
    let t = this.cloneTextareaAndGetNode(e);
    let i = this.calculateClampedTextareaHeightWithBorder(t);
    t.remove();
    return i;
  }
  cloneTextareaAndGetNode(e) {
    let t = this.textarea.cloneNode(!0);
    this.textarea.parentElement.appendChild(t);
    t.style.position = "absolute";
    t.style.height = "0px";
    t.style.width = `${this.textarea.offsetWidth}px`;
    this.textarea.scrollTop > 0 ? t.style.overflowY = "scroll" : t.style.overflowY = "hidden";
    t.style.resize = "none";
    t.value = e;
    return t;
  }
  focus() {
    this.textarea?.focus({
      preventScroll: this.props.preventScrollOnFocus
    });
  }
  renderVariablePill() {
    let e = this.props.value;
    return this.context?.boundVariableId && e ? jsx(P, {
      value: e,
      isDeleted: this.context.isBoundVariableDeleted,
      offsetLeft: 9,
      offsetTop: -11,
      zeroSizeLayout: !0
    }) : null;
  }
  render() {
    let e = `expanding_textarea--expandingTextarea--sWlgy ${pc} ${this.props.disableBorderStyles ? "" : PQ} ${this.props.className || ""}`;
    return jsxs(Fragment, {
      children: [this.renderVariablePill(), jsx(LazyInputForwardRef, {
        ref: this.ref,
        "aria-description": this.props.ariaDescription,
        className: e,
        dataTestId: this.props.dataTestId,
        delay: this.props.delay,
        disabled: !!this.props.disableInput,
        id: this.props.id,
        maxLength: this.props.maxLength,
        onBlur: this.onBlur,
        onChange: this.props.onChange,
        onFocus: this.onFocus,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.props.onKeyUp,
        onMouseDown: dG,
        onMouseLeave: this.props.onMouseLeave,
        onMouseUp: this.props.onMouseUp,
        onPaste: this.props.onPaste,
        placeholder: this.props.placeholder,
        recordingKey: this.props.recordingKey,
        type: "textarea",
        value: this.props.value
      })]
    });
  }
}
$$h0.displayName = "ExpandingTextarea";
$$h0.contextType = _$$p;
export const v = $$h0;