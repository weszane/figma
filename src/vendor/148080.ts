import { createElement, Component } from "react";
import i from "../vendor/312623";
var o = function (t) {
  function e() {
    return t.apply(this, arguments) || this;
  }
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  e.__proto__ = t;
  var r = e.prototype;
  r.shouldComponentUpdate = function (t) {
    return this.props.text !== t.text || this.props.editorState.getSelection().getHasFocus() !== t.editorState.getSelection().getHasFocus();
  };
  r.render = function () {
    var t = i({
      "public/DraftEditorPlaceholder/root": !0,
      "public/DraftEditorPlaceholder/hasFocus": this.props.editorState.getSelection().getHasFocus()
    });
    return createElement("div", {
      className: t
    }, createElement("div", {
      className: i("public/DraftEditorPlaceholder/inner"),
      id: this.props.accessibilityID,
      style: {
        whiteSpace: "pre-wrap"
      }
    }, this.props.text));
  };
  return e;
}(Component);
module.exports = o;