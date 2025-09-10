import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { d as _$$d } from "src/905/884707";
import { RecordingPureComponent } from "src/figma_app/878298";
import { mv, u2 } from "src/905/511649";
let l = "lazy_input--lazyInput--1mJeW";
class d extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.procrastinating = !1;
    this.procrastinationTimer = null;
    this.onLazyUpdate = () => {
      this.procrastinating = !1;
      this.updateIfNotLazy(this.state.requestedValue);
    };
    this.onChange = e => {
      this.procrastinate();
      let t = e.target.value;
      this.props.maxInputLength && t.length > this.props.maxInputLength && (t = t.slice(0, this.props.maxInputLength));
      this.setState({
        value: t
      });
      this.props.onChange(e);
    };
    this.state = {
      value: this.props.value
    };
  }
  UNSAFE_componentWillReceiveProps(e) {
    this.updateIfNotLazy(e.value);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.procrastinationTimer && (clearTimeout(this.procrastinationTimer), this.procrastinating = !1);
  }
  updateIfNotLazy(e) {
    this.procrastinating ? this.setState({
      requestedValue: e
    }) : this.state.value !== e && this.setState({
      value: e,
      requestedValue: void 0
    });
  }
  procrastinate() {
    this.procrastinating = !0;
    this.procrastinationTimer && clearTimeout(this.procrastinationTimer);
    this.procrastinationTimer = setTimeout(this.onLazyUpdate, this.props.delay);
  }
  getProps() {
    let e = {
      ...this.props
    };
    delete e.delay;
    delete e.innerRef;
    delete e.maxInputLength;
    e.value = this.state.value;
    e.onChange && (e.onChange = this.onChange);
    null == e.value && (e.value = void 0);
    e.className ? e.className = `${e.className} ${l}` : e.className = l;
    return e;
  }
  render() {
    return "textarea" === this.props.type ? jsx(mv, {
      ...this.getProps(),
      forwardedRef: this.props.innerRef
    }) : jsx(u2, {
      ..._$$d(this.getProps()),
      forwardedRef: this.props.innerRef
    });
  }
}
d.displayName = "LazyInput";
d.defaultProps = {
  type: "text",
  delay: 1e3
};
export let $$c0 = forwardRef((e, t) => jsx(d, {
  ..._$$d(e),
  innerRef: t
}));
export const L = $$c0;
