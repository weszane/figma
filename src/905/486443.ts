import { d4 } from "../vendor/514228";
import { W8Y } from "../figma_app/763686";
export function $$a2(e) {
  return e.mirror.appModel.votingSessionInfo.votingStage === W8Y.JOINED;
}
export function $$s0() {
  return d4($$a2);
}
function o(e) {
  return e.mirror.appModel.votingSessionInfo.votingStage === W8Y.NOT_JOINED && !e.voting.hasDismissedJoinConfirmation;
}
export function $$l1() {
  return d4(o);
}
export const XM = $$s0;
export const e2 = $$l1;
export const gR = $$a2;