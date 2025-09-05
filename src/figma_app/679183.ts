import { jsx } from "react/jsx-runtime";
import { useRef, Component } from "react";
import { connect } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import o from "classnames";
import { F2 } from "../905/826900";
var l = o;
export let $$c1 = Symbol("NotVisibleRunAnyway");
export class $$u0 {
  constructor(e) {
    this._callback = e;
    this._previousValue = null;
  }
  render({
    isVisible: e,
    className: t,
    displayAs: r,
    valueArgs: i = []
  }) {
    let a = !0 === e || e === $$c1 ? this._previousValue = this._callback(...i) : this._previousValue;
    let s = !0 === e;
    return a instanceof Array ? a.map((e, i) => e && jsx(_, {
      isVisible: s,
      className: t,
      displayAs: r,
      children: e
    }, e.key ?? i)) : a && jsx(_, {
      isVisible: s,
      className: t,
      displayAs: r,
      children: a
    }, a.key ?? void 0);
  }
}
export function $$p2(e) {
  let {
    isVisible,
    children
  } = e;
  let a = useRef(null);
  let s = !0 === isVisible ? a.current = children() : a.current;
  return s && jsx(_, {
    isVisible: !0 === isVisible,
    children: s
  });
}
class _ extends Component {
  constructor() {
    super(...arguments);
    this.ref = e => {
      this.el = e;
    };
  }
  componentDidUpdate(e) {
    this.el && (!e.isVisible && this.props.isVisible && F2.focusSubtreeIfNecessary(this.el), e.isVisible && !this.props.isVisible && F2.blurSubtreeIfNecessary(this.el));
  }
  getClassNameForDisplayAs() {
    let {
      displayAs
    } = this.props;
    switch (displayAs) {
      case "block":
        return "";
      case "contents":
        return "displayContents";
      default:
        throwTypeError(displayAs);
    }
  }
  render() {
    let {
      isVisible
    } = this.props;
    let t = l()(this.props.className ? this.props.className : "cachedSubtree", this.getClassNameForDisplayAs());
    return jsx("div", {
      ref: this.ref,
      className: t,
      style: {
        display: isVisible ? "" : "none"
      },
      children: this.props.children
    });
  }
}
_.defaultProps = {
  displayAs: "contents"
};
_.displayName = "CachedSubtreeComponent";
connect(void 0, e => ({
  dispatch: e
}));
export const H4 = $$u0;
export const Ud = $$c1;
export const VF = $$p2;