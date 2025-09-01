import n from "../vendor/759742";
module.exports = function (t) {
  var e = t.getSelection();
  return e.isCollapsed() ? null : n(t.getCurrentContent(), e);
};