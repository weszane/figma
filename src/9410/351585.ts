import { atom } from "../figma_app/27355";
let $$n1 = atom({
  seen_fj_upsell_draft_modal_1: {
    fileKey: void 0,
    sessionId: 0
  },
  seen_fj_upsell_draft_modal_2: {
    fileKey: void 0,
    sessionId: 0
  },
  seen_fj_upsell_draft_modal_3: {
    fileKey: void 0,
    sessionId: 0
  },
  seen_fj_upsell_team_modal_1: {
    fileKey: void 0,
    sessionId: 0
  },
  seen_fj_upsell_team_modal_2: {
    fileKey: void 0,
    sessionId: 0
  },
  seen_fj_upsell_team_modal_3: {
    fileKey: void 0,
    sessionId: 0
  }
});
let a = atom({
  showing: !1,
  userFlag: null
});
let s = atom(e => e(a), (e, t, i) => {
  t(a, i);
});
let $$o0 = atom(e => e(s));
let $$l2 = atom(null, (e, t, {
  showing: i,
  userFlag: r = null
}) => {
  t(s, {
    showing: i,
    userFlag: r
  });
});
export const QY = $$o0;
export const Zk = $$n1;
export const xw = $$l2;