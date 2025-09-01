import { jsx } from "react/jsx-runtime";
import { Component } from "react";
import a from "classnames";
import { xT } from "../figma_app/195407";
import { xl, Df } from "../905/884009";
var s = a;
export class $$d0 extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1e3);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let e = xT(this.props.target);
    if (!e || !e.offsetParent) return jsx("div", {});
    {
      let t = e.getBoundingClientRect();
      let r = t.left + t.width / 2;
      let i = t.top + t.height / 2;
      let a = s()(xl, {
        [Df]: this.props.isBrandColor
      });
      return jsx("div", {
        className: a,
        style: {
          top: i,
          left: r
        }
      });
    }
  }
}
$$d0.displayName = "RcsCallout";
export const x = $$d0;