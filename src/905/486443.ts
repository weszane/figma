import { useSelector } from "react-redux";
import { SessionStatus } from "../figma_app/763686";
export function $$a2(e) {
  return e.mirror.appModel.votingSessionInfo.votingStage === SessionStatus.JOINED;
}
export function $$s0() {
  return useSelector($$a2);
}
function o(e) {
  return e.mirror.appModel.votingSessionInfo.votingStage === SessionStatus.NOT_JOINED && !e.voting.hasDismissedJoinConfirmation;
}
export function $$l1() {
  return useSelector(o);
}
export const XM = $$s0;
export const e2 = $$l1;
export const gR = $$a2;
