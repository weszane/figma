import { jsx } from "react/jsx-runtime";
import { Component, createElement } from "react";
export class $$a0 extends Component {
  constructor(e) {
    super(e);
    this.mediaChanged = () => {
      let e = this.props.defaultClass || "";
      for (let [t, i] of this.mediaQueriesAndClasses) t.matches && (e = i);
      let t = this.props.defaultStyle || {};
      for (let [e, i] of this.mediaQueriesAndStyles) e.matches && (t = i);
      this.setState({
        shown: !this.props.query || !this.visibilityMediaQuery || this.visibilityMediaQuery.matches,
        className: e,
        style: t
      });
    };
    this.mediaQueriesAndClasses = [];
    this.mediaQueriesAndStyles = [];
    this.state = {
      shown: !0,
      className: "",
      style: {}
    };
  }
  removeVisibilityMediaListener() {
    this.visibilityMediaQuery && (this.visibilityMediaQuery.removeListener(this.mediaChanged), this.visibilityMediaQuery = null);
  }
  removeMediaListeners(e) {
    for (let [t,, i] of e) t.removeListener(i);
  }
  initVisibilityMediaQuery() {
    this.removeVisibilityMediaListener();
    this.props.query && (this.visibilityMediaQuery = window.matchMedia(this.props.query), this.visibilityMediaQuery.addListener(this.mediaChanged));
  }
  initQueriesFromProps(e, t) {
    this.removeMediaListeners(e);
    e = [];
    t && t.map(([t, i]) => {
      let n = window.matchMedia(t);
      n.addListener(this.mediaChanged);
      e.push([n, i, this.mediaChanged]);
    });
    return e;
  }
  initClassMediaQueries() {
    this.mediaQueriesAndClasses = this.initQueriesFromProps(this.mediaQueriesAndClasses, this.props.mediaClassList);
  }
  initStyleMediaQueries() {
    this.mediaQueriesAndStyles = this.initQueriesFromProps(this.mediaQueriesAndStyles, this.props.mediaStyleList);
  }
  componentDidMount() {
    this.initVisibilityMediaQuery();
    this.initClassMediaQueries();
    this.initStyleMediaQueries();
    this.mediaChanged();
  }
  componentDidUpdate(e) {
    let t = !1;
    this.props.query !== e.query && (this.initVisibilityMediaQuery(), t = !0);
    (JSON.stringify(this.props.defaultClass) !== JSON.stringify(e.defaultClass) || JSON.stringify(this.props.mediaClassList) !== JSON.stringify(e.mediaClassList)) && (this.initClassMediaQueries(), t = !0);
    (JSON.stringify(this.props.defaultStyle) !== JSON.stringify(e.defaultStyle) || JSON.stringify(this.props.mediaStyleList) !== JSON.stringify(e.mediaStyleList)) && (this.initStyleMediaQueries(), t = !0);
    t && this.mediaChanged();
  }
  componentWillUnmount() {
    this.removeVisibilityMediaListener();
    this.removeMediaListeners(this.mediaQueriesAndClasses);
    this.removeMediaListeners(this.mediaQueriesAndStyles);
  }
  render() {
    if (!this.state.shown) return jsx("div", {
      style: {
        display: "none"
      }
    });
    {
      let e = {
        ...this.props,
        className: this.state.className,
        style: this.state.style,
        ref: this.props.containerRef
      };
      delete e.component;
      delete e.defaultClass;
      delete e.defaultStyle;
      delete e.mediaClassList;
      delete e.mediaStyleList;
      delete e.query;
      delete e.containerRef;
      return createElement(this.props.component || "div", e, this.props.children);
    }
  }
}
$$a0.displayName = "MediaQuery";
export const z = $$a0;