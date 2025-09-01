import { createFromArray } from "../vendor/172680";
import { create } from "../vendor/425694";
import o from "../vendor/240711";
import { replaceWithFragment } from "../vendor/662606";
import { processText, processHTML } from "../vendor/492938";
import { push } from "../vendor/724102";
import { getCurrentBlockType } from "../vendor/575806";
import l from "../vendor/654571";
import f from "../vendor/48239";
import p from "../vendor/585172";
import h from "../vendor/589712";
function d(t, e, r) {
  var n = replaceWithFragment(t.getCurrentContent(), t.getSelection(), e);
  return push(t, n.set("entityMap", r), "insert-fragment");
}
module.exports = function (t, e) {
  e.preventDefault();
  var r = new o(e.clipboardData);
  if (!r.isRichText()) {
    var g = r.getFiles();
    var y = r.getText();
    if (g.length > 0) {
      if (t.props.handlePastedFiles && p(t.props.handlePastedFiles(g))) return;
      f(g, function (e) {
        if (e = e || y) {
          var r = t._latestEditorState;
          var o = h(e);
          var f = create({
            style: r.getCurrentInlineStyle(),
            entity: l(r.getCurrentContent(), r.getSelection())
          });
          var p = getCurrentBlockType(r);
          var d = processText(o, f, p);
          var g = createFromArray(d);
          var v = replaceWithFragment(r.getCurrentContent(), r.getSelection(), g);
          t.update(push(r, v, "insert-fragment"));
        }
      });
      return;
    }
  }
  var v = [];
  var m = r.getText();
  var _ = r.getHTML();
  var b = t._latestEditorState;
  if (t.props.formatPastedText) {
    var S = t.props.formatPastedText(m, _);
    var w = S.text;
    var x = S.html;
    m = w;
    _ = x;
  }
  if (!(t.props.handlePastedText && p(t.props.handlePastedText(m, _, b)))) {
    if (m && (v = h(m)), !t.props.stripPastedStyles) {
      var k;
      var C;
      var E = t.getClipboard();
      if (!t.props.formatPastedText && r.isRichText() && E) {
        if (_?.indexOf(t.getEditorKey()) !== -1 || 1 === v.length && 1 === E.size && E.first().getText() === m) {
          t.update(d(t._latestEditorState, E));
          return;
        }
      } else if (E && r.types.includes("com.apple.webarchive") && !r.types.includes("text/html") && (k = v).length === E.size && E.valueSeq().every(function (t, e) {
        return t.getText() === k[e];
      })) {
        t.update(d(t._latestEditorState, E));
        return;
      }
      if (_) {
        var O = processHTML(_, t.props.blockRenderMap);
        if (O) {
          var D = O.contentBlocks;
          var K = O.entityMap;
          if (D) {
            var T = createFromArray(D);
            t.update(d(t._latestEditorState, T, K));
            return;
          }
        }
      }
      t.setClipboard(null);
    }
    if (v.length) {
      var M = create({
        style: b.getCurrentInlineStyle(),
        entity: l(b.getCurrentContent(), b.getSelection())
      });
      var A = getCurrentBlockType(b);
      var I = processText(v, M, A);
      var B = createFromArray(I);
      t.update(d(t._latestEditorState, B));
    }
  }
};