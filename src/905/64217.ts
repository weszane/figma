import { jsxs, jsx } from "react/jsx-runtime";
import { Component, createRef } from "react";
import a from "classnames";
import { B } from "src/905/877503";
import { s as _$$s } from "src/cssbuilder/589278";
var s = a;
var $$d0 = (e => (e.Block = "block", e.DeprecatedFullHeightBlock = "fullHeightBlock", e.Contents = "contents", e))($$d0 || {});
export class $$c1 extends Component {
  constructor() {
    super(...arguments);
    this.containerRef = createRef();
    this.traverseChildren = () => {
      this.firstTabbableEl = void 0;
      this.lastTabbableEl = void 0;
      let e = t => {
        for (let i of (B(t) && ((!this.firstTabbableEl || t.tabIndex < this.firstTabbableEl.tabIndex) && (this.firstTabbableEl = t), (!this.lastTabbableEl || t.tabIndex >= this.lastTabbableEl.tabIndex) && (this.lastTabbableEl = t)), Array.from(t.children))) e(i);
        for (let i of Array.from(t.shadowRoot?.children || [])) e(i);
      };
      e(this.containerRef.current);
    };
    this.onFrontGuardFocus = e => {
      this.traverseChildren();
      let t = this.containerRef.current.contains(e.relatedTarget) ? this.lastTabbableEl : this.firstTabbableEl;
      this.focusElement(t);
    };
    this.onBackGuardFocus = () => {
      this.traverseChildren();
      this.focusElement(this.firstTabbableEl);
    };
  }
  focusElement(e) {
    e && setTimeout(() => {
      e.focus();
      e.select?.();
    }, 0);
  }
  render() {
    let e = s()(this.props.className, {
      [_$$s.hFull.$]: "fullHeightBlock" === this.props.displayAs,
      displayContents: "contents" === this.props.displayAs
    });
    return jsxs("div", {
      className: e,
      style: this.props.style,
      children: [jsx("div", {
        "aria-hidden": "true",
        tabIndex: 0,
        onFocus: this.onFrontGuardFocus
      }), jsx("div", {
        className: e,
        ref: this.containerRef,
        children: this.props.children
      }), jsx("div", {
        "aria-hidden": "true",
        tabIndex: 0,
        onFocus: this.onBackGuardFocus
      })]
    });
  }
}
$$c1.defaultProps = {
  displayAs: "contents"
};
$$c1.displayName = "TabLoop";
export const C = $$d0;
export const i = $$c1;
