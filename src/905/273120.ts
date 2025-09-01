import { jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
export class $$a0 extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      requestNumber: null
    };
    this.timerHandle = null;
    this.onError = e => {
      this.props.onError?.(e);
      this.reload();
    };
    this.reload = () => {
      this.clearTimer();
      this.timerHandle = this.scheduleNextReload();
    };
    this.updateRequestTime = () => {
      let e = null === this.state.requestNumber ? 1 : this.state.requestNumber + 1;
      this.setState({
        requestNumber: e
      });
    };
  }
  clearTimer() {
    null !== this.timerHandle && (clearTimeout(this.timerHandle), this.timerHandle = null);
  }
  scheduleNextReload() {
    let {
      delayMultiplier = 10
    } = this.props;
    let t = Math.min(300, delayMultiplier * ((this.state.requestNumber || 0) + Math.random()));
    return setTimeout(this.updateRequestTime, 1e3 * t);
  }
  getSrc() {
    return this.props.src ? null === this.state.requestNumber ? this.props.src : `${this.props.src}${-1 === this.props.src.indexOf("?") ? "?" : "&"}requestNumber=${this.state.requestNumber}` : this.props.src;
  }
  imgProps() {
    let e = {
      ...this.props
    };
    delete e.delayMultiplier;
    return e;
  }
  UNSAFE_componentWillReceiveProps(e) {
    e.src !== this.props.src && (this.clearTimer(), this.setState({
      requestNumber: null
    }));
  }
  componentWillUnmount() {
    this.clearTimer();
  }
  render() {
    return jsx("img", {
      ...this.imgProps(),
      alt: this.props.alt,
      src: this.getSrc(),
      onError: this.onError
    });
  }
}
$$a0.displayName = "ReloadingImage";
export const J = $$a0;