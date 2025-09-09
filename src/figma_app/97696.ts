import { H5 } from "../figma_app/617606";
import { ChatMessageType } from "../figma_app/763686";
import a from "../vendor/260986";
import { selectCurrentUser } from "../905/372672";
var s = a;
export function $$l2(e) {
  let t = e?.filter(e => e.type !== ChatMessageType.TOOL_MESSAGE);
  return t ? t.reduce((e, t) => {
    let r = t.type === ChatMessageType.ASSISTANT_MESSAGE;
    let a = t.toolCalls.length > 0;
    let o = 0 === H5(t.textContent || "").plainText.length;
    if (r && a && o) {
      let r = e[e.length - 1];
      r?.type === ChatMessageType.ASSISTANT_MESSAGE && (r.toolCalls = s()([...r.toolCalls, ...t.toolCalls], "toolCallId"));
      return e;
    }
    return [...e, t];
  }, []) : [];
}
export function $$d3(e) {
  let {
    hidden,
    errors
  } = e;
  return !!hidden && !!errors && errors.length > 0;
}
export function $$c0(e) {
  let t = e.slice().reverse().find(e => e.type === ChatMessageType.USER_MESSAGE);
  return t ? t.id : null;
}
export function $$u1(e) {
  let t = selectCurrentUser();
  return t ? e.filter(e => "user" === e.type && e.user.id === t.id).length : 0;
}
export const EY = $$c0;
export const Go = $$u1;
export const Qf = $$l2;
export const gG = $$d3;