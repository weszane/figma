import { BrowserInfo } from "src/figma_app/778880";
import { y } from "src/905/409121";
export function $$a1(e) {
  if (!e.keyShortcutKey) return "";
  let t = y.isApple();
  var i = t ? "\u2318" : "Ctrl+";
  e.keyShortcutShift && (i += t ? "\u21E7" : "Shift+");
  e.keyShortcutOption && (i += t ? "\u2325" : BrowserInfo.chromeos ? "Search+" : "Alt+");
  return `   ${i}${e.keyShortcutKey}`;
}
export function $$s0(e) {
  if (!e) return "";
  if (e.length < 1 || "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1)) return e;
  var t = e.replace(/(<\/[ph]\d?>)/g, "\n");
  return (t = (t = t.replace(/(<([^>]+)>)/gi, "")).replace(/&nbsp;/g, "\xa0")).replace(/&amp;/g, "&");
}
let o = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g;
let l = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$/;
export function $$d4(e) {
  return new RegExp(l).test(e.trim());
}
export function $$c3(e) {
  if (!e) return "";
  if (e.length > 2 && "<" === e.charAt(0) && ">" === e.charAt(e.length - 1)) return e;
  var t = e.replace(/^.*/gm, "<p>$&</p>");
  return (t = (t = t.replace(o, e => `<a href="${e}">${e}</a>`)).replace(/<p><\/p>/g, "<p><br></p>")).replace(/(\r\n|\n|\r)/gm, "");
}
export function $$u2(e) {
  return "" === $$s0(e)?.trim();
}
export const $J = $$s0;
export const OZ = $$a1;
export const ZB = $$u2;
export const mm = $$c3;
export const mv = $$d4;
