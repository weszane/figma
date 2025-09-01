import { isBrowser } from "../vendor/42266";
import i from "../vendor/617286";
import o from "../vendor/352902";
import a from "../vendor/115553";
import s from "../vendor/466370";
import u from "../vendor/379315";
import c from "../vendor/400739";
import l from "../vendor/36225";
import f from "../vendor/443467";
import p from "../vendor/784863";
import h from "../vendor/151732";
import d from "../vendor/222356";
import g from "../vendor/603531";
var y = isBrowser("Chrome");
var v = isBrowser("Firefox");
var m = y || v ? g : function (t) {};
module.exports = {
  onBeforeInput: i,
  onBlur: o,
  onCompositionStart: a,
  onCopy: s,
  onCut: u,
  onDragOver: c,
  onDragStart: l,
  onFocus: f,
  onInput: p,
  onKeyDown: h,
  onPaste: d,
  onSelect: g,
  onMouseUp: m,
  onKeyUp: m
};