import { notEmptyKey } from "../vendor/223155";
import { replaceText } from "../vendor/662606";
import { decode } from "../vendor/999625";
import { push } from "../vendor/724102";
import { isEngine } from "../vendor/42266";
import u from "../vendor/255000";
import c from "../vendor/43057";
import l from "../vendor/808828";
var s = notEmptyKey;
var f = isEngine("Gecko");
module.exports = function (t, e) {
  void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
  var r;
  var a;
  var p;
  var h;
  var d = t.editor.ownerDocument.defaultView.getSelection();
  var g = d.anchorNode;
  var y = d.isCollapsed;
  var v = g?.nodeType !== Node.TEXT_NODE && g?.nodeType !== Node.ELEMENT_NODE;
  if (null != g && !v) {
    if (g.nodeType === Node.TEXT_NODE && (null !== g.previousSibling || null !== g.nextSibling)) {
      var m = g.parentNode;
      if (null == m) return;
      g.nodeValue = m.textContent;
      for (var _ = m.firstChild; null != _; _ = _.nextSibling) _ !== g && m.removeChild(_);
    }
    var b = g.textContent;
    var S = t._latestEditorState;
    var w = l(u(g));
    var x = decode(w);
    var k = x.blockKey;
    var C = x.decoratorKey;
    var E = x.leafKey;
    var O = S.getBlockTree(k).getIn([C, "leaves", E]);
    var D = O.start;
    var K = O.end;
    var T = S.getCurrentContent();
    var M = T.getBlockForKey(k);
    var A = M.getText().slice(D, K);
    if (b.endsWith("\n\n") && (b = b.slice(0, -1)), b === A) {
      var I = e.nativeEvent.inputType;
      if (I) {
        var B = "deleteContentBackward" === I ? c(S) : S;
        B !== S && (t.restoreEditorDOM(), t.update(B));
      }
      return;
    }
    var L = S.getSelection();
    var R = L.merge({
      anchorOffset: D,
      focusOffset: K,
      isBackward: !1
    });
    var F = M.getEntityAt(D);
    var N = s(F) ? T.getEntity(F) : null;
    var P = "MUTABLE" === (null != N ? N.getMutability() : null);
    var z = replaceText(T, R, b, M.getInlineStyleAt(D), P ? M.getEntityAt(D) : null);
    if (f) {
      h = (p = D + Math.min(r = d.anchorOffset, a = d.focusOffset)) + Math.abs(r - a);
      r = p;
      a = h;
    } else {
      var j = b.length - A.length;
      p = L.getStartOffset();
      h = L.getEndOffset();
      r = y ? h + j : p;
      a = h + j;
    }
    var U = z.merge({
      selectionBefore: T.getSelectionAfter(),
      selectionAfter: L.merge({
        anchorOffset: r,
        focusOffset: a
      })
    });
    t.update(push(S, U, P ? "spellcheck-change" : "apply-entity"));
  }
};