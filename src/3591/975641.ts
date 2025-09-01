import { jsx } from "react/jsx-runtime";
import { PureComponent, createRef } from "react";
import { Ib } from "../905/129884";
export class $$o0 extends PureComponent {
  constructor() {
    super(...arguments);
    this.textContainerRef = createRef();
    this.getFittingText = () => {
      if (!this.textContainerRef.current) return null;
      let e = this.textContainerRef.current;
      let i = e.getBoundingClientRect().width;
      let {
        text
      } = this.props;
      let n = document.createElement("p");
      if (n.className = this.props.className || "", n.style.cssText = "display: inline; white-space: nowrap;", e.appendChild(n), n.innerText = text, n.getBoundingClientRect().width <= i) {
        e.removeChild(n);
        return text;
      }
      let s = "";
      for (let e = 0; e < text.length; e += 1) {
        let l = `...${text.slice(text.length - e)}`;
        n.innerText = l;
        let {
          width
        } = n.getBoundingClientRect();
        if (width > i) break;
        s = l;
      }
      e.removeChild(n);
      return s;
    };
  }
  componentDidMount() {
    this.forceUpdate();
  }
  render() {
    let e = this.getFittingText();
    return jsx("div", {
      ref: this.textContainerRef,
      style: {
        width: this.props.maxWidth ? `${this.props.maxWidth}px` : "100%"
      },
      "data-tooltip-type": this.props.text !== e ? Ib.TEXT : void 0,
      "data-tooltip": this.props.text !== e ? this.props.text : void 0,
      "aria-label": this.props.text,
      children: jsx("p", {
        className: this.props.className,
        children: e
      })
    });
  }
}
$$o0.displayName = "FrontTruncatedText";
export const R = $$o0;