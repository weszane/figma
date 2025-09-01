import { fromJS, generate } from "../vendor/397585";
import { createFromText, fromJS as _$$fromJS } from "../vendor/881972";
import { getDirectionMap } from "../vendor/964742";
import u, { createEmpty } from "../vendor/33809";
import { OrderedSet, Record, Stack, OrderedMap, List } from "../vendor/116740";
function n(t) {
  for (var e = 1; e < $$arguments.length; e++) {
    var r = null != $$arguments[e] ? $$arguments[e] : {};
    var n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable;
    })));
    n.forEach(function (e) {
      i(t, e, r[e]);
    });
  }
  return t;
}
function i(t, e, r) {
  e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r;
  return t;
}
var l = OrderedSet;
var f = Record;
var p = Stack;
var h = OrderedMap;
var d = List;
var g = f({
  allowUndo: !0,
  currentContent: null,
  decorator: null,
  directionMap: null,
  forceSelection: !1,
  inCompositionMode: !1,
  inlineStyleOverride: null,
  lastChangeType: null,
  nativelyRenderedContent: null,
  redoStack: p(),
  selection: null,
  treeMap: null,
  undoStack: p()
});
var y = function () {
  e.createEmpty = function (t) {
    return this.createWithText("", t);
  };
  e.createWithText = function (t, r) {
    return e.createWithContent(createFromText(t), r);
  };
  e.createWithContent = function (t, r) {
    if (0 === t.getBlockMap().count()) return e.createEmpty(r);
    var n = t.getBlockMap().first().getKey();
    return e.create({
      currentContent: t,
      undoStack: p(),
      redoStack: p(),
      decorator: r || null,
      selection: createEmpty(n)
    });
  };
  e.create = function (t) {
    var r = t.currentContent;
    var i = t.decorator;
    return new e(new g(n({}, t, {
      treeMap: m(r, i),
      directionMap: getDirectionMap(r)
    })));
  };
  e.fromJS = function (t) {
    return new e(new g(n({}, t, {
      directionMap: null != t.directionMap ? h(t.directionMap) : t.directionMap,
      inlineStyleOverride: null != t.inlineStyleOverride ? l(t.inlineStyleOverride) : t.inlineStyleOverride,
      nativelyRenderedContent: null != t.nativelyRenderedContent ? _$$fromJS(t.nativelyRenderedContent) : t.nativelyRenderedContent,
      redoStack: null != t.redoStack ? p(t.redoStack.map(function (t) {
        return _$$fromJS(t);
      })) : t.redoStack,
      selection: null != t.selection ? new u(t.selection) : t.selection,
      treeMap: null != t.treeMap ? h(t.treeMap).map(function (t) {
        return d(t).map(function (t) {
          return fromJS(t);
        });
      }) : t.treeMap,
      undoStack: null != t.undoStack ? p(t.undoStack.map(function (t) {
        return _$$fromJS(t);
      })) : t.undoStack,
      currentContent: _$$fromJS(t.currentContent)
    })));
  };
  e.set = function (t, r) {
    return new e(t.getImmutable().withMutations(function (e) {
      var n;
      var i;
      var a;
      var s;
      var u;
      var c = e.get("decorator");
      var l = c;
      null === r.decorator ? l = null : r.decorator && (l = r.decorator);
      var f = r.currentContent || t.getCurrentContent();
      if (l !== c) {
        var p;
        var h;
        var d;
        var g = e.get("treeMap");
        d = l && c ? (p = f.getBlockMap(), h = l, g.merge(p.toSeq().filter(function (t) {
          return h.getDecorations(t, f) !== c.getDecorations(t, f);
        }).map(function (t) {
          return generate(f, t, h);
        }))) : m(f, l);
        e.merge({
          decorator: l,
          treeMap: d,
          nativelyRenderedContent: null
        });
        return;
      }
      f !== t.getCurrentContent() && e.set("treeMap", (n = f.getBlockMap(), i = f.getEntityMap(), a = l, u = (s = t.getCurrentContent().set("entityMap", i)).getBlockMap(), t.getImmutable().get("treeMap").merge(n.toSeq().filter(function (t, e) {
        return t !== u.get(e);
      }).map(function (t) {
        return generate(s, t, a);
      }))));
      e.merge(r);
    }));
  };
  var t = e.prototype;
  function e(t) {
    i(this, "_immutable", void 0);
    this._immutable = t;
  }
  t.toJS = function () {
    return this.getImmutable().toJS();
  };
  t.getAllowUndo = function () {
    return this.getImmutable().get("allowUndo");
  };
  t.getCurrentContent = function () {
    return this.getImmutable().get("currentContent");
  };
  t.getUndoStack = function () {
    return this.getImmutable().get("undoStack");
  };
  t.getRedoStack = function () {
    return this.getImmutable().get("redoStack");
  };
  t.getSelection = function () {
    return this.getImmutable().get("selection");
  };
  t.getDecorator = function () {
    return this.getImmutable().get("decorator");
  };
  t.isInCompositionMode = function () {
    return this.getImmutable().get("inCompositionMode");
  };
  t.mustForceSelection = function () {
    return this.getImmutable().get("forceSelection");
  };
  t.getNativelyRenderedContent = function () {
    return this.getImmutable().get("nativelyRenderedContent");
  };
  t.getLastChangeType = function () {
    return this.getImmutable().get("lastChangeType");
  };
  t.getInlineStyleOverride = function () {
    return this.getImmutable().get("inlineStyleOverride");
  };
  e.setInlineStyleOverride = function (t, r) {
    return e.set(t, {
      inlineStyleOverride: r
    });
  };
  t.getCurrentInlineStyle = function () {
    var t;
    var e;
    var r;
    var n;
    var i;
    var o;
    var a = this.getInlineStyleOverride();
    if (null != a) return a;
    var s = this.getCurrentContent();
    var u = this.getSelection();
    return u.isCollapsed() ? (t = u.getStartKey(), e = u.getStartOffset(), r = s.getBlockForKey(t), e > 0 ? r.getInlineStyleAt(e - 1) : r.getLength() ? r.getInlineStyleAt(0) : _(s, t)) : (n = u.getStartKey(), (i = u.getStartOffset()) < (o = s.getBlockForKey(n)).getLength() ? o.getInlineStyleAt(i) : i > 0 ? o.getInlineStyleAt(i - 1) : _(s, n));
  };
  t.getBlockTree = function (t) {
    return this.getImmutable().getIn(["treeMap", t]);
  };
  t.isSelectionAtStartOfContent = function () {
    var t = this.getCurrentContent().getBlockMap().first().getKey();
    return this.getSelection().hasEdgeWithin(t, 0, 0);
  };
  t.isSelectionAtEndOfContent = function () {
    var t = this.getCurrentContent().getBlockMap().last();
    var e = t.getLength();
    return this.getSelection().hasEdgeWithin(t.getKey(), e, e);
  };
  t.getDirectionMap = function () {
    return this.getImmutable().get("directionMap");
  };
  e.acceptSelection = function (t, e) {
    return v(t, e, !1);
  };
  e.forceSelection = function (t, e) {
    e.getHasFocus() || (e = e.set("hasFocus", !0));
    return v(t, e, !0);
  };
  e.moveSelectionToEnd = function (t) {
    var r = t.getCurrentContent().getLastBlock();
    var n = r.getKey();
    var i = r.getLength();
    return e.acceptSelection(t, new u({
      anchorKey: n,
      anchorOffset: i,
      focusKey: n,
      focusOffset: i,
      isBackward: !1
    }));
  };
  e.moveFocusToEnd = function (t) {
    var r = e.moveSelectionToEnd(t);
    return e.forceSelection(r, r.getSelection());
  };
  e.push = function (t, r, n) {
    var i = !($$arguments.length > 3) || void 0 === $$arguments[3] || $$arguments[3];
    if (t.getCurrentContent() === r) return t;
    var o = getDirectionMap(r, t.getDirectionMap());
    if (!t.getAllowUndo()) return e.set(t, {
      currentContent: r,
      directionMap: o,
      lastChangeType: n,
      selection: r.getSelectionAfter(),
      forceSelection: i,
      inlineStyleOverride: null
    });
    var a = t.getSelection();
    var u = t.getCurrentContent();
    var c = t.getUndoStack();
    var l = r;
    a !== u.getSelectionAfter() || n !== t.getLastChangeType() || "insert-characters" !== n && "backspace-character" !== n && "delete-character" !== n ? (c = c.push(u), l = l.set("selectionBefore", a)) : ("insert-characters" === n || "backspace-character" === n || "delete-character" === n) && (l = l.set("selectionBefore", u.getSelectionBefore()));
    var f = t.getInlineStyleOverride();
    -1 === ["adjust-depth", "change-block-type", "split-block"].indexOf(n) && (f = null);
    var h = {
      currentContent: l,
      directionMap: o,
      undoStack: c,
      redoStack: p(),
      lastChangeType: n,
      selection: r.getSelectionAfter(),
      forceSelection: i,
      inlineStyleOverride: f
    };
    return e.set(t, h);
  };
  e.undo = function (t) {
    if (!t.getAllowUndo()) return t;
    var r = t.getUndoStack();
    var n = r.peek();
    if (!n) return t;
    var i = t.getCurrentContent();
    var o = getDirectionMap(n, t.getDirectionMap());
    return e.set(t, {
      currentContent: n,
      directionMap: o,
      undoStack: r.shift(),
      redoStack: t.getRedoStack().push(i),
      forceSelection: !0,
      inlineStyleOverride: null,
      lastChangeType: "undo",
      nativelyRenderedContent: null,
      selection: i.getSelectionBefore()
    });
  };
  e.redo = function (t) {
    if (!t.getAllowUndo()) return t;
    var r = t.getRedoStack();
    var n = r.peek();
    if (!n) return t;
    var i = t.getCurrentContent();
    var o = getDirectionMap(n, t.getDirectionMap());
    return e.set(t, {
      currentContent: n,
      directionMap: o,
      undoStack: t.getUndoStack().push(i),
      redoStack: r.shift(),
      forceSelection: !0,
      inlineStyleOverride: null,
      lastChangeType: "redo",
      nativelyRenderedContent: null,
      selection: n.getSelectionAfter()
    });
  };
  t.getImmutable = function () {
    return this._immutable;
  };
  return e;
}();
function v(t, e, r) {
  return y.set(t, {
    selection: e,
    forceSelection: r,
    nativelyRenderedContent: null,
    inlineStyleOverride: null
  });
}
function m(t, e) {
  return t.getBlockMap().map(function (r) {
    return generate(t, r, e);
  }).toOrderedMap();
}
function _(t, e) {
  var r = t.getBlockMap().reverse().skipUntil(function (t, r) {
    return r === e;
  }).skip(1).skipUntil(function (t, e) {
    return t.getLength();
  }).first();
  return r ? r.getInlineStyleAt(r.getLength() - 1) : l();
}
module.exports = y;