import { isValidElement, createElement, Component } from "react";
import { jsx } from "react/jsx-runtime";
function $$A(e, t) {
  return ($$A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
    e.__proto__ = t;
    return e;
  })(e, t);
}
var o = {
  error: null
};
var s = function (e) {
  function t() {
    for (n = $$arguments.length, r = Array(n), i = 0, void 0; i < n; i++) {
      var t;
      var n;
      var r;
      var i;
      r[i] = $$arguments[i];
    }
    (t = e.call.apply(e, [this].concat(r)) || this).state = o;
    t.resetErrorBoundary = function () {
      for (n = $$arguments.length, r = Array(n), i = 0, void 0; i < n; i++) {
        var e;
        var n;
        var r;
        var i;
        r[i] = $$arguments[i];
      }
      null == t.props.onReset || (e = t.props).onReset.apply(e, r);
      t.reset();
    };
    return t;
  }
  t.prototype = Object.create(e.prototype);
  t.prototype.constructor = t;
  $$A(t, e);
  t.getDerivedStateFromError = function (e) {
    return {
      error: e
    };
  };
  var n = t.prototype;
  n.reset = function () {
    this.setState(o);
  };
  n.componentDidCatch = function (e, t) {
    var n;
    var r;
    null == (n = (r = this.props).onError) || n.call(r, e, t);
  };
  n.componentDidUpdate = function (e, t) {
    var n;
    var r;
    var i;
    var A;
    var o = this.state.error;
    var s = this.props.resetKeys;
    null !== o && null !== t.error && (void 0 === (i = e.resetKeys) && (i = []), void 0 === (A = s) && (A = []), i.length !== A.length || i.some(function (e, t) {
      return !Object.is(e, A[t]);
    })) && (null == (n = (r = this.props).onResetKeysChange) || n.call(r, e.resetKeys, s), this.reset());
  };
  n.render = function () {
    var e = this.state.error;
    var t = this.props;
    var n = t.fallbackRender;
    var i = t.FallbackComponent;
    var A = t.fallback;
    if (null !== e) {
      var o = {
        error: e,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (isValidElement(A)) return A;
      if ("function" == typeof n) return n(o);
      if (i) return createElement(i, o);
      throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  };
  return t;
}(Component);
export function $$a0({
  children: e,
  onError: t
}) {
  return jsx(s, {
    fallback: jsx("div", {
      style: {
        border: "1px solid #f00",
        color: "#f00",
        padding: "8px"
      },
      children: "An error was thrown."
    }),
    onError: t,
    children: e
  });
}
export const A = $$a0;