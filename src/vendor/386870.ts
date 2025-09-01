import i from "../vendor/436701";
function s() {}
function o() {}
o.resetWarningCache = s;
module.exports = function () {
  function e(e, r, n, s, o, a) {
    if (a !== i) {
      var h = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      h.name = "Invariant Violation";
      return h;
    }
  }
  function r() {
    return e;
  }
  e.isRequired = e;
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: r,
    element: e,
    elementType: e,
    instanceOf: r,
    node: e,
    objectOf: r,
    oneOf: r,
    oneOfType: r,
    shape: r,
    exact: r,
    checkPropTypes: o,
    resetWarningCache: s
  };
  n.PropTypes = n;
  return n;
};