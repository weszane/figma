import { SessionStatus } from "../figma_app/763686";
import { atomWithReducer, createCustomAtom } from "../figma_app/27355";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
var $$s2 = (e => (e.VOTING = "VOTING", e.TIMER = "TIMER", e.MUSIC = "MUSIC", e))($$s2 || {});
var $$o1 = (e => (e.DEFAULT = "DEFAULT", e.PAST_VOTES = "PAST_VOTES", e))($$o1 || {});
let l = atomWithReducer({
  isOpen: !1,
  activeToolModal: null,
  view: "DEFAULT"
}, (e, t) => {
  switch (t.type) {
    case "OPEN":
      return {
        ...e,
        isOpen: !0
      };
    case "CLOSE":
      return {
        ...e,
        isOpen: !1,
        view: "DEFAULT"
      };
    case "SET_VIEW":
      return {
        ...e,
        view: t.payload
      };
    case "SET_TOOL":
      return {
        ...e,
        activeToolModal: t.payload
      };
    case "VOTING_ENDED":
      return {
        ...e,
        isOpen: !0,
        view: "PAST_VOTES"
      };
  }
});
let d = createReduxSubscriptionAtomWithState(e => e.mirror.appModel.votingSessionInfo.votingStage);
let $$c0 = createCustomAtom(l, e => {
  let t = e(l);
  let i = e(d);
  return "PAST_VOTES" === t.view && (i === SessionStatus.JOINED || i === SessionStatus.NOT_JOINED) ? {
    ...t,
    view: "DEFAULT"
  } : t;
});
export const Qs = $$c0;
export const iN = $$o1;
export const sx = $$s2;