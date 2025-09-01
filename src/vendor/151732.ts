import { replaceText } from "../vendor/662606";
import { push, redo } from "../vendor/724102";
import { isOptionKeyCommand } from "../vendor/317994";
import { RETURN, ESC, TAB, UP, RIGHT, DOWN, LEFT, SPACE } from "../vendor/685920";
import { cut, paste } from "../vendor/515998";
import { isBrowser } from "../vendor/42266";
import c from "../vendor/585172";
import l from "../vendor/250279";
import f from "../vendor/463211";
import p from "../vendor/771641";
import h from "../vendor/57771";
import d from "../vendor/714373";
import g from "../vendor/480082";
import y from "../vendor/43057";
import v from "../vendor/51147";
import m from "../vendor/952875";
import _ from "../vendor/967172";
var b = isOptionKeyCommand;
var S = isBrowser("Chrome");
module.exports = function (t, e) {
  var r = e.which;
  var o = t._latestEditorState;
  function u(r) {
    var n = t.props[r];
    return !!n && (n(e), !0);
  }
  switch (r) {
    case RETURN:
      if (e.preventDefault(), t.props.handleReturn && c(t.props.handleReturn(e, o))) return;
      break;
    case ESC:
      if (e.preventDefault(), u("onEscape")) return;
      break;
    case TAB:
      if (u("onTab")) return;
      break;
    case UP:
      if (u("onUpArrow")) return;
      break;
    case RIGHT:
      if (u("onRightArrow")) return;
      break;
    case DOWN:
      if (u("onDownArrow")) return;
      break;
    case LEFT:
      if (u("onLeftArrow")) return;
      break;
    case SPACE:
      S && b(e) && e.preventDefault();
  }
  var w = t.props.keyBindingFn(e);
  if (null == w || "" === w) {
    if (r === SPACE && S && b(e)) {
      var x = replaceText(o.getCurrentContent(), o.getSelection(), "\xa0");
      t.update(push(o, x, "insert-characters"));
    }
    return;
  }
  if ("undo" === w) {
    _(e, o, t.update);
    return;
  }
  if (e.preventDefault(), !(t.props.handleKeyCommand && c(t.props.handleKeyCommand(w, o, e.timeStamp)))) {
    var k = function (t, e, r) {
      switch (t) {
        case "redo":
          return redo(e);
        case "delete":
          return v(e);
        case "delete-word":
          return p(e);
        case "backspace":
          return y(e);
        case "backspace-word":
          return f(e);
        case "backspace-to-start-of-line":
          return l(e, r);
        case "split-block":
          return h(e);
        case "transpose-characters":
          return m(e);
        case "move-selection-to-start-of-block":
          return g(e);
        case "move-selection-to-end-of-block":
          return d(e);
        case "secondary-cut":
          return cut(e);
        case "secondary-paste":
          return paste(e);
        default:
          return e;
      }
    }(w, o, e);
    k !== o && t.update(k);
  }
};