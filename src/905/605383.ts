import { jsx } from "react/jsx-runtime";
import { Component, Children } from "react";
export class $$a0 extends Component {
  constructor(e) {
    super(e);
    this.calledOnAllChunksRendered = !1;
    this.tick = () => {
      this.setState({
        maxIndex: this.state.maxIndex + this.props.chunkSize
      });
      this.frameRequest = null;
      this.tickIfNeeded();
    };
    this.tickIfNeeded = () => {
      if (!this.frameRequest) {
        if (Children.count(this.props.children) < this.state.maxIndex) {
          this.props.onAllChunksRendered && !this.calledOnAllChunksRendered && (this.props.onAllChunksRendered(), this.calledOnAllChunksRendered = !0);
          return;
        }
        this.frameRequest = requestAnimationFrame(this.tick);
      }
    };
    this.state = {
      maxIndex: 0
    };
    this.frameRequest = null;
  }
  componentDidMount() {
    this.tickIfNeeded();
  }
  UNSAFE_componentWillReceiveProps(e) {
    this.props.listKey !== e.listKey && (this.setState({
      maxIndex: this.props.chunkSize
    }), this.tickIfNeeded());
  }
  componentDidUpdate() {
    this.tickIfNeeded();
  }
  componentWillUnmount() {
    this.frameRequest && cancelAnimationFrame(this.frameRequest);
  }
  render() {
    let e = Children.toArray(this.props.children).slice(0, this.state.maxIndex);
    return jsx("div", {
      className: this.props.className,
      ref: this.props.forwardedRef,
      style: this.props.style,
      children: e
    });
  }
}
$$a0.displayName = "RenderListByChunks";
export const o = $$a0;