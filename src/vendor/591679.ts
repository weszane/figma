import n from "../vendor/724039";
import c from "../vendor/329327";
import l from "../vendor/129098";
import f from "../vendor/510804";
import p from "../vendor/444573";
import h from "../vendor/53878";
import d from "../vendor/908364";
import g from "../vendor/984708";
import y from "../vendor/148080";
import { initODS } from "../vendor/477853";
import { forceSelection } from "../vendor/724102";
import { Component, createElement } from "react";
import { setTop } from "../vendor/293805";
import { getScrollParent } from "../vendor/364627";
import { isBrowser } from "../vendor/42266";
import x from "../vendor/312623";
import k from "../vendor/64627";
import C from "../vendor/243447";
import E from "../vendor/91812";
import O from "../vendor/391990";
import D from "../vendor/153658";
import K from "../vendor/952823";
import T from "../vendor/808828";
function i() {
  return (i = n || function (t) {
    for (var e = 1; e < $$arguments.length; e++) {
      var r = $$arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
function o(t) {
  for (var e = 1; e < $$arguments.length; e++) {
    var r = null != $$arguments[e] ? $$arguments[e] : {};
    var n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable;
    })));
    n.forEach(function (e) {
      s(t, e, r[e]);
    });
  }
  return t;
}
function a(t) {
  if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function s(t, e, r) {
  e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r;
  return t;
}
function u(t, e) {
  t.prototype = Object.create(e.prototype);
  t.prototype.constructor = t;
  t.__proto__ = e;
}
var M = isBrowser("IE");
var A = !M;
var I = {
  edit: d,
  composite: f,
  drag: h,
  cut: null,
  render: null
};
var B = !1;
var L = function (t) {
  function e() {
    return t.apply(this, arguments) || this;
  }
  u(e, t);
  var r = e.prototype;
  r.render = function () {
    return null;
  };
  r.componentDidMount = function () {
    this._update();
  };
  r.componentDidUpdate = function () {
    this._update();
  };
  r._update = function () {
    var t = this.props.editor;
    t._latestEditorState = this.props.editorState;
    t._blockSelectEvents = !0;
  };
  return e;
}(Component);
var R = function (t) {
  function e(e) {
    var r;
    s(a(r = t.call(this, e) || this), "_blockSelectEvents", void 0);
    s(a(r), "_clipboard", void 0);
    s(a(r), "_handler", void 0);
    s(a(r), "_dragCount", void 0);
    s(a(r), "_internalDrag", void 0);
    s(a(r), "_editorKey", void 0);
    s(a(r), "_placeholderAccessibilityID", void 0);
    s(a(r), "_latestEditorState", void 0);
    s(a(r), "_latestCommittedEditorState", void 0);
    s(a(r), "_pendingStateFromBeforeInput", void 0);
    s(a(r), "_onBeforeInput", void 0);
    s(a(r), "_onBlur", void 0);
    s(a(r), "_onCharacterData", void 0);
    s(a(r), "_onCompositionEnd", void 0);
    s(a(r), "_onCompositionStart", void 0);
    s(a(r), "_onCopy", void 0);
    s(a(r), "_onCut", void 0);
    s(a(r), "_onDragEnd", void 0);
    s(a(r), "_onDragOver", void 0);
    s(a(r), "_onDragStart", void 0);
    s(a(r), "_onDrop", void 0);
    s(a(r), "_onInput", void 0);
    s(a(r), "_onFocus", void 0);
    s(a(r), "_onKeyDown", void 0);
    s(a(r), "_onKeyPress", void 0);
    s(a(r), "_onKeyUp", void 0);
    s(a(r), "_onMouseDown", void 0);
    s(a(r), "_onMouseUp", void 0);
    s(a(r), "_onPaste", void 0);
    s(a(r), "_onSelect", void 0);
    s(a(r), "editor", void 0);
    s(a(r), "editorContainer", void 0);
    s(a(r), "focus", void 0);
    s(a(r), "blur", void 0);
    s(a(r), "setMode", void 0);
    s(a(r), "exitCurrentMode", void 0);
    s(a(r), "restoreEditorDOM", void 0);
    s(a(r), "setClipboard", void 0);
    s(a(r), "getClipboard", void 0);
    s(a(r), "getEditorKey", void 0);
    s(a(r), "update", void 0);
    s(a(r), "onDragEnter", void 0);
    s(a(r), "onDragLeave", void 0);
    s(a(r), "_handleEditorContainerRef", function (t) {
      r.editorContainer = t;
      r.editor = null !== t ? t.firstChild : null;
    });
    s(a(r), "focus", function (t) {
      var e = r.props.editorState;
      var n = e.getSelection().getHasFocus();
      var i = r.editor;
      if (i) {
        var o = getScrollParent(i);
        var a = t || E(o);
        var s = a.x;
        var u = a.y;
        K(i) || D(!1);
        i.focus();
        o === window ? window.scrollTo(s, u) : setTop(o, u);
        n || r.update(forceSelection(e, e.getSelection()));
      }
    });
    s(a(r), "blur", function () {
      var t = r.editor;
      t && (K(t) || D(!1), t.blur());
    });
    s(a(r), "setMode", function (t) {
      var e = r.props;
      var n = e.onPaste;
      var i = e.onCut;
      var a = e.onCopy;
      var s = o({}, I.edit);
      n && (s.onPaste = n);
      i && (s.onCut = i);
      a && (s.onCopy = a);
      var u = o({}, I, {
        edit: s
      });
      r._handler = u[t];
    });
    s(a(r), "exitCurrentMode", function () {
      r.setMode("edit");
    });
    s(a(r), "restoreEditorDOM", function (t) {
      r.setState({
        contentsKey: r.state.contentsKey + 1
      }, function () {
        r.focus(t);
      });
    });
    s(a(r), "setClipboard", function (t) {
      r._clipboard = t;
    });
    s(a(r), "getClipboard", function () {
      return r._clipboard;
    });
    s(a(r), "update", function (t) {
      r._latestEditorState = t;
      r.props.onChange(t);
    });
    s(a(r), "onDragEnter", function () {
      r._dragCount++;
    });
    s(a(r), "onDragLeave", function () {
      r._dragCount--;
      0 === r._dragCount && r.exitCurrentMode();
    });
    r._blockSelectEvents = !1;
    r._clipboard = null;
    r._handler = null;
    r._dragCount = 0;
    r._editorKey = e.editorKey || k();
    r._placeholderAccessibilityID = "placeholder-" + r._editorKey;
    r._latestEditorState = e.editorState;
    r._latestCommittedEditorState = e.editorState;
    r._onBeforeInput = r._buildHandler("onBeforeInput");
    r._onBlur = r._buildHandler("onBlur");
    r._onCharacterData = r._buildHandler("onCharacterData");
    r._onCompositionEnd = r._buildHandler("onCompositionEnd");
    r._onCompositionStart = r._buildHandler("onCompositionStart");
    r._onCopy = r._buildHandler("onCopy");
    r._onCut = r._buildHandler("onCut");
    r._onDragEnd = r._buildHandler("onDragEnd");
    r._onDragOver = r._buildHandler("onDragOver");
    r._onDragStart = r._buildHandler("onDragStart");
    r._onDrop = r._buildHandler("onDrop");
    r._onInput = r._buildHandler("onInput");
    r._onFocus = r._buildHandler("onFocus");
    r._onKeyDown = r._buildHandler("onKeyDown");
    r._onKeyPress = r._buildHandler("onKeyPress");
    r._onKeyUp = r._buildHandler("onKeyUp");
    r._onMouseDown = r._buildHandler("onMouseDown");
    r._onMouseUp = r._buildHandler("onMouseUp");
    r._onPaste = r._buildHandler("onPaste");
    r._onSelect = r._buildHandler("onSelect");
    r.getEditorKey = function () {
      return r._editorKey;
    };
    r.state = {
      contentsKey: 0
    };
    return r;
  }
  u(e, t);
  var n = e.prototype;
  n._buildHandler = function (t) {
    var e = this;
    return function (r) {
      if (!e.props.readOnly) {
        var n = e._handler && e._handler[t];
        n && (g ? g(function () {
          return n(e, r);
        }) : n(e, r));
      }
    };
  };
  n._showPlaceholder = function () {
    return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText();
  };
  n._renderPlaceholder = function () {
    if (this._showPlaceholder()) {
      var t = {
        text: T(this.props.placeholder),
        editorState: this.props.editorState,
        textAlignment: this.props.textAlignment,
        accessibilityID: this._placeholderAccessibilityID
      };
      return createElement(y, t);
    }
    return null;
  };
  n._renderARIADescribedBy = function () {
    var t = this.props.ariaDescribedBy || "";
    var e = this._showPlaceholder() ? this._placeholderAccessibilityID : "";
    return t.replace("{{editor_id_placeholder}}", e) || void 0;
  };
  n.render = function () {
    var t = this.props;
    var e = t.blockRenderMap;
    var r = t.blockRendererFn;
    var n = t.blockStyleFn;
    var a = t.customStyleFn;
    var s = t.customStyleMap;
    var u = t.editorState;
    var c = t.preventScroll;
    var f = t.readOnly;
    var h = t.textAlignment;
    var d = t.textDirectionality;
    var g = x({
      "DraftEditor/root": !0,
      "DraftEditor/alignLeft": "left" === h,
      "DraftEditor/alignRight": "right" === h,
      "DraftEditor/alignCenter": "center" === h
    });
    var y = this.props.role || "textbox";
    var v = "combobox" === y ? !!this.props.ariaExpanded : null;
    var m = {
      blockRenderMap: e,
      blockRendererFn: r,
      blockStyleFn: n,
      customStyleMap: o({}, l, s),
      customStyleFn: a,
      editorKey: this._editorKey,
      editorState: u,
      preventScroll: c,
      textDirectionality: d
    };
    return createElement("div", {
      className: g
    }, this._renderPlaceholder(), createElement("div", {
      className: x("DraftEditor/editorContainer"),
      ref: this._handleEditorContainerRef
    }, createElement("div", {
      "aria-activedescendant": f ? null : this.props.ariaActiveDescendantID,
      "aria-autocomplete": f ? null : this.props.ariaAutoComplete,
      "aria-controls": f ? null : this.props.ariaControls,
      "aria-describedby": this._renderARIADescribedBy(),
      "aria-expanded": f ? null : v,
      "aria-label": this.props.ariaLabel,
      "aria-labelledby": this.props.ariaLabelledBy,
      "aria-multiline": this.props.ariaMultiline,
      "aria-owns": f ? null : this.props.ariaOwneeID,
      autoCapitalize: this.props.autoCapitalize,
      autoComplete: this.props.autoComplete,
      autoCorrect: this.props.autoCorrect,
      className: x({
        notranslate: !f,
        "public/DraftEditor/content": !0
      }),
      contentEditable: !f,
      "data-testid": this.props.webDriverTestID,
      onBeforeInput: this._onBeforeInput,
      onBlur: this._onBlur,
      onCompositionEnd: this._onCompositionEnd,
      onCompositionStart: this._onCompositionStart,
      onCopy: this._onCopy,
      onCut: this._onCut,
      onDragEnd: this._onDragEnd,
      onDragEnter: this.onDragEnter,
      onDragLeave: this.onDragLeave,
      onDragOver: this._onDragOver,
      onDragStart: this._onDragStart,
      onDrop: this._onDrop,
      onFocus: this._onFocus,
      onInput: this._onInput,
      onKeyDown: this._onKeyDown,
      onKeyPress: this._onKeyPress,
      onKeyUp: this._onKeyUp,
      onMouseUp: this._onMouseUp,
      onPaste: this._onPaste,
      onSelect: this._onSelect,
      ref: this.props.editorRef,
      role: f ? null : y,
      spellCheck: A && this.props.spellCheck,
      style: {
        outline: "none",
        userSelect: "text",
        WebkitUserSelect: "text",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      suppressContentEditableWarning: !0,
      tabIndex: this.props.tabIndex
    }, createElement(L, {
      editor: this,
      editorState: u
    }), createElement(p, i({}, m, {
      key: "contents" + this.state.contentsKey
    })))));
  };
  n.componentDidMount = function () {
    this._blockSelectEvents = !1;
    !B && O("draft_ods_enabled") && (B = !0, initODS());
    this.setMode("edit");
    M && (this.editor ? this.editor.ownerDocument.execCommand("AutoUrlDetect", !1, !1) : require.g.execCommand("AutoUrlDetect", !1, !1));
  };
  n.componentDidUpdate = function () {
    this._blockSelectEvents = !1;
    this._latestEditorState = this.props.editorState;
    this._latestCommittedEditorState = this.props.editorState;
  };
  return e;
}(Component);
s(R, "defaultProps", {
  ariaDescribedBy: "{{editor_id_placeholder}}",
  blockRenderMap: c,
  blockRendererFn: function () {
    return null;
  },
  blockStyleFn: function () {
    return "";
  },
  keyBindingFn: C,
  readOnly: !1,
  spellCheck: !1,
  stripPastedStyles: !1
});
module.exports = R;