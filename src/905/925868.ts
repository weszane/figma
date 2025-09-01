import { jsx } from "react/jsx-runtime";
import { PureComponent, createRef } from "react";
export class $$$$a0 extends PureComponent {
  constructor() {
    super(...arguments);
    this.scrollSentinel = createRef();
    this.intersectionObserver = null;
    this._isIntersecting = !1;
    this.initialIntersectionState = null;
  }
  get isIntersecting() {
    return this._isIntersecting;
  }
  componentDidMount() {
    if (window.IntersectionObserver) {
      this.intersectionObserver = new IntersectionObserver(e => {
        let t = e[0];
        t && (this.props.onInitialLoad && null === this.initialIntersectionState && (this.initialIntersectionState = t.isIntersecting, this.props.onInitialLoad(this.initialIntersectionState)), t.isIntersecting !== this._isIntersecting && (this._isIntersecting = t.isIntersecting, this.props.onIntersectionChange?.(t)));
      }, {
        rootMargin: this.props.rootMargin
      });
      let e = this.scrollSentinel.current;
      e && this.intersectionObserver.observe(e);
    }
  }
  componentWillUnmount() {
    this.intersectionObserver && this.intersectionObserver.disconnect();
  }
  render() {
    return jsx("div", {
      ref: this.scrollSentinel,
      className: this.props.className,
      style: this.props.style
    });
  }
}
export const a = $$$$a0;