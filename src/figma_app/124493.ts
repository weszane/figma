import { ofk, W8Y } from "../figma_app/763686";
import { zl } from "../figma_app/27355";
import { f as _$$f } from "../905/842794";
import { oA } from "../905/663269";
import { NC } from "../905/17179";
import { sx } from "../905/449184";
import { WB } from "../905/761735";
import { XHR } from "../905/910117";
import { Q } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { nF } from "../905/350402";
import { wr } from "../figma_app/741237";
import { Qs, iN, sx as _$$sx } from "../905/992395";
import { of, Cx, x2 } from "../figma_app/714946";
let $$E11 = NC("UNSET_HOVERED_IN_MODAL_VOTE_PIN");
let $$y8 = NC("SET_HOVERED_IN_MODAL_VOTE_PIN");
let $$b13 = NC("DESELECT_VOTE_PIN");
let $$T15 = NC("SELECT_VOTE_PIN");
let $$I10 = NC("INITIATED_VOTING_SESSION");
let $$S6 = nF(async (e, {
  uiSurface: t
}) => {
  let r = e.getState();
  let {
    fileKey
  } = r.selectedView;
  let a = r.mirror.appModel.votingSessionInfo.sessionId;
  if (!fileKey || !a) return;
  let s = $$v16(fileKey);
  let o = "end-voting-session-failed";
  let l = () => {
    e.dispatch(of({
      key: s
    }));
    e.dispatch(F.enqueue({
      type: o,
      message: _$$t("voting.visual_bell.end_voting_session_failed")
    }));
  };
  e.dispatch(Cx({
    key: s
  }));
  e.dispatch(F.dequeue({
    matchType: o
  }));
  await XHR.put(`/api/file/${fileKey}/voting_sessions/${a}`, {
    in_progress: !1
  }).then(({
    status: r
  }) => {
    200 === r ? (e.dispatch(x2({
      key: s
    })), "MeetingsPanel" === t && zl.set(Qs, {
      type: "SET_VIEW",
      payload: iN.PAST_VOTES
    })) : l();
  }).catch(e => {
    l();
    return e;
  });
});
let $$v16 = e => `end_voting_session_${e}`;
let $$A14 = nF((e, {
  source: t,
  usedCustomTitle: r,
  requestBody: n,
  uiSurface: a
}) => {
  let {
    fileKey
  } = e.getState().selectedView;
  if (!fileKey) return;
  let o = $$x0(fileKey);
  let d = () => {
    e.dispatch(of({
      key: o
    }));
    e.dispatch(F.enqueue({
      type: "start-voting-session-failed",
      message: _$$t("voting.visual_bell.start_voting_session_failed")
    }));
  };
  e.dispatch(Cx({
    key: o
  }));
  e.dispatch(F.dequeue({
    matchType: "start-voting-session-failed"
  }));
  XHR.post(`/api/file/${fileKey}/voting_sessions`, n).then(n => {
    200 === n.status ? (e.dispatch($$I10({
      votingSessionId: n.data.meta.id
    })), "MeetingsPanel" === a && zl.get(Qs).activeToolModal === _$$sx.VOTING && zl.set(Qs, {
      type: "SET_TOOL",
      payload: null
    }), e.dispatch(x2({
      key: o
    })), sx("start_voting_session", {
      source: t,
      usedCustomTitle: r,
      votingSessionId: n.data.meta.id,
      fileKey
    })) : d();
  }).catch(e => {
    d();
    return e;
  });
});
let $$x0 = e => `create_voting_session_${e}`;
let $$N1 = nF((e, {
  votingSessionId: t
}) => {
  let r = e.getState().selectedView;
  if (!r.fileKey) return null;
  let n = XHR.del(`/api/file/${r.fileKey}/voting_sessions/${t}`);
  e.dispatch(Q({
    promise: n,
    fallbackError: _$$t("voting.modal.delete_voting_session_error")
  }));
  e.dispatch(F.enqueue({
    message: _$$t("voting.modal.delete_voting_session_visual_bell")
  }));
  _$$f(n, e.dispatch, L({
    votingSessionId: t
  }));
  WB().optimisticallyDelete({
    VotingSession: {
      [t]: null
    }
  }, n);
});
export function $$C3(e, t) {
  let r = e?.openFile?.votingSessions?.find(e => e.id === t);
  if (!r) return;
  let i = function(e) {
    let t = e.createdAt.toISOString().split("T")[0];
    return e.title ? _$$t("voting.csv_export.filename_with_session_title", {
      date: t,
      votingSessionTitle: e.title
    }) : _$$t("voting.csv_export.filename_no_session_title", {
      date: t
    });
  }(r);
  ofk.exportVotingSessionAsCsv(t, i);
}
let $$w4 = nF((e, t) => {
  let r;
  let i = t.votingStage;
  let a = e.getState();
  let o = a?.mirror?.appModel?.currentPage;
  if (i === W8Y.NO_SESSION) {
    ofk.setVotingSessionInfo("", W8Y.NO_SESSION, 0, o);
    return;
  }
  let l = a?.openFile?.votingSessions;
  if (i === W8Y.ENDED) {
    let e = t.sessionId;
    r = l?.find(t => t.id === e && !t.inProgress);
  } else r = l?.find(e => e.inProgress);
  if (!r) return;
  let d = oA(r.pageNodeId);
  d && (ofk.setVotingSessionInfo(r.id, i, r.userVoteLimit, d), i === W8Y.JOINED && (e.dispatch($$O7()), a.mirror.selectionProperties.whiteboardNumSelectedByType?.STAMP && wr()));
});
let $$O7 = NC("DISMISS_JOIN_CONFIRMATION");
let $$R9 = NC("HIDE_JOIN_VOTING_SESSION_MODAL");
let L = NC("DELETE_VOTING_SESSION");
let $$P12 = NC("SET_VOTES_PER_USER_LIMIT");
let $$D2 = NC("SET_TITLE");
let $$k5 = NC("CLEAR_STATE");
export const $c = $$x0;
export const $l = $$N1;
export const D6 = $$D2;
export const Ev = $$C3;
export const H1 = $$w4;
export const Ho = $$k5;
export const PK = $$S6;
export const U6 = $$O7;
export const Vw = $$y8;
export const au = $$R9;
export const cx = $$I10;
export const gA = $$E11;
export const hL = $$P12;
export const rT = $$b13;
export const vt = $$A14;
export const w9 = $$T15;
export const wQ = $$v16; 
