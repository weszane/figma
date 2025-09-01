import { insertText, removeRange, setBlockType, removeInlineStyle, applyInlineStyle, applyEntity } from "../vendor/662606";
import { push, forceSelection, setInlineStyleOverride } from "../vendor/724102";
import o from "../vendor/854002";
import a from "../vendor/808828";
var s = {
  currentBlockContainsLink: function (t) {
    var e = t.getSelection();
    var r = t.getCurrentContent();
    var n = r.getEntityMap();
    return r.getBlockForKey(e.getAnchorKey()).getCharacterList().slice(e.getStartOffset(), e.getEndOffset()).some(function (t) {
      var e = t.getEntity();
      return !!e && "LINK" === n.__get(e).getType();
    });
  },
  getCurrentBlockType: function (t) {
    var e = t.getSelection();
    return t.getCurrentContent().getBlockForKey(e.getStartKey()).getType();
  },
  getDataObjectForLinkURL: function (t) {
    return {
      url: t.toString()
    };
  },
  handleKeyCommand: function (t, e, r) {
    switch (e) {
      case "bold":
        return s.toggleInlineStyle(t, "BOLD");
      case "italic":
        return s.toggleInlineStyle(t, "ITALIC");
      case "underline":
        return s.toggleInlineStyle(t, "UNDERLINE");
      case "code":
        return s.toggleCode(t);
      case "backspace":
      case "backspace-word":
      case "backspace-to-start-of-line":
        return s.onBackspace(t);
      case "delete":
      case "delete-word":
      case "delete-to-end-of-block":
        return s.onDelete(t);
      default:
        return null;
    }
  },
  insertSoftNewline: function (t) {
    var e = insertText(t.getCurrentContent(), t.getSelection(), "\n", t.getCurrentInlineStyle(), null);
    var r = push(t, e, "insert-characters");
    return forceSelection(r, e.getSelectionAfter());
  },
  onBackspace: function (t) {
    var e = t.getSelection();
    if (!e.isCollapsed() || e.getAnchorOffset() || e.getFocusOffset()) return null;
    var r = t.getCurrentContent();
    var n = e.getStartKey();
    var o = r.getBlockBefore(n);
    if (o && "atomic" === o.getType()) {
      var a = r.getBlockMap().$$delete(o.getKey());
      var u = r.merge({
        blockMap: a,
        selectionAfter: e
      });
      if (u !== r) return push(t, u, "remove-range");
    }
    var c = s.tryToRemoveBlockStyle(t);
    return c ? push(t, c, "change-block-type") : null;
  },
  onDelete: function (t) {
    var e = t.getSelection();
    if (!e.isCollapsed()) return null;
    var r = t.getCurrentContent();
    var o = e.getStartKey();
    var a = r.getBlockForKey(o).getLength();
    if (e.getStartOffset() < a) return null;
    var s = r.getBlockAfter(o);
    if (!s || "atomic" !== s.getType()) return null;
    var u = e.merge({
      focusKey: s.getKey(),
      focusOffset: s.getLength()
    });
    var c = removeRange(r, u, "forward");
    return c !== r ? push(t, c, "remove-range") : null;
  },
  onTab: function (t, e, r) {
    var n = e.getSelection();
    var a = n.getAnchorKey();
    if (a !== n.getFocusKey()) return e;
    var s = e.getCurrentContent();
    var u = s.getBlockForKey(a);
    var c = u.getType();
    if ("unordered-list-item" !== c && "ordered-list-item" !== c) return e;
    t.preventDefault();
    var l = u.getDepth();
    if (!t.shiftKey && l === r) return e;
    var f = o(s, n, t.shiftKey ? -1 : 1, r);
    return push(e, f, "adjust-depth");
  },
  toggleBlockType: function (t, e) {
    var r = t.getSelection();
    var o = r.getStartKey();
    var s = r.getEndKey();
    var u = t.getCurrentContent();
    var c = r;
    if (o !== s && 0 === r.getEndOffset()) {
      var l = a(u.getBlockBefore(s));
      s = l.getKey();
      c = c.merge({
        anchorKey: o,
        anchorOffset: r.getStartOffset(),
        focusKey: s,
        focusOffset: l.getLength(),
        isBackward: !1
      });
    }
    if (u.getBlockMap().skipWhile(function (t, e) {
      return e !== o;
    }).reverse().skipWhile(function (t, e) {
      return e !== s;
    }).some(function (t) {
      return "atomic" === t.getType();
    })) return t;
    var f = u.getBlockForKey(o).getType() === e ? "unstyled" : e;
    return push(t, setBlockType(u, c, f), "change-block-type");
  },
  toggleCode: function (t) {
    var e = t.getSelection();
    var r = e.getAnchorKey();
    var n = e.getFocusKey();
    return e.isCollapsed() || r !== n ? s.toggleBlockType(t, "code-block") : s.toggleInlineStyle(t, "CODE");
  },
  toggleInlineStyle: function (t, e) {
    var r;
    var o = t.getSelection();
    var a = t.getCurrentInlineStyle();
    if (o.isCollapsed()) return setInlineStyleOverride(t, a.has(e) ? a.remove(e) : a.add(e));
    var s = t.getCurrentContent();
    r = a.has(e) ? removeInlineStyle(s, o, e) : applyInlineStyle(s, o, e);
    return push(t, r, "change-inline-style");
  },
  toggleLink: function (t, e, r) {
    var o = applyEntity(t.getCurrentContent(), e, r);
    return push(t, o, "apply-entity");
  },
  tryToRemoveBlockStyle: function (t) {
    var e = t.getSelection();
    var r = e.getAnchorOffset();
    if (e.isCollapsed() && 0 === r) {
      var i = e.getAnchorKey();
      var o = t.getCurrentContent();
      var a = o.getBlockForKey(i).getType();
      var s = o.getBlockBefore(i);
      if ("code-block" === a && s && "code-block" === s.getType() && 0 !== s.getLength()) return null;
      if ("unstyled" !== a) return setBlockType(o, e, "unstyled");
    }
    return null;
  }
};
module.exports = s;