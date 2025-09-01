import n from "../vendor/750550";
import { replaceText } from "../vendor/662606";
import { decode } from "../vendor/999625";
import { set, forceSelection, acceptSelection, push } from "../vendor/724102";
import { RIGHT, LEFT, RETURN } from "../vendor/685920";
import { isBrowser } from "../vendor/42266";
import c from "../vendor/603531";
import l from "../vendor/436672";
import f from "../vendor/47428";
import p from "../vendor/654571";
import h from "../vendor/808828";
var d = isBrowser("IE");
var g = !1;
var y = !1;
var v = null;
var m = {
  onCompositionStart: function (t) {
    y = !0;
    v || (v = new n(l(t))).start();
  },
  onCompositionEnd: function (t) {
    g = !1;
    y = !1;
    setTimeout(function () {
      g || m.resolveComposition(t);
    }, 20);
  },
  onSelect: c,
  onKeyDown: function (t, e) {
    if (!y) {
      m.resolveComposition(t);
      t._onKeyDown(e);
      return;
    }
    (e.which === RIGHT || e.which === LEFT) && e.preventDefault();
  },
  onKeyPress: function (t, e) {
    e.which === RETURN && e.preventDefault();
  },
  resolveComposition: function (t) {
    if (!y) {
      var e = h(v).stopAndFlushMutations();
      v = null;
      g = !0;
      var r = set(t._latestEditorState, {
        inCompositionMode: !1
      });
      if (t.exitCurrentMode(), !e.size) {
        t.update(r);
        return;
      }
      var n = r.getCurrentContent();
      e.forEach(function (t, e) {
        var s = decode(e);
        var u = s.blockKey;
        var c = s.decoratorKey;
        var l = s.leafKey;
        var f = r.getBlockTree(u).getIn([c, "leaves", l]);
        var h = f.start;
        var d = f.end;
        var g = r.getSelection().merge({
          anchorKey: u,
          focusKey: u,
          anchorOffset: h,
          focusOffset: d,
          isBackward: !1
        });
        var y = p(n, g);
        var v = n.getBlockForKey(u).getInlineStyleAt(h);
        n = replaceText(n, g, t, v, y);
        r = set(r, {
          currentContent: n
        });
      });
      var s = f(r, l(t)).selectionState;
      t.restoreEditorDOM();
      var u = d ? forceSelection(r, s) : acceptSelection(r, s);
      t.update(push(u, n, "insert-characters"));
    }
  }
};
module.exports = m;