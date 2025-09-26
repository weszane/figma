import { WhiteboardVotingCppBindings, SessionStatus } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import { handleOptimistTransaction } from "../905/842794";
import { getResourceDataOrFallback } from "../905/663269";
import { createActionCreator } from "../905/73481";
import { trackEventAnalytics } from "../905/449184";
import { WB } from "../905/761735";
import { sendWithRetry } from "../905/910117";
import { handlePromiseError } from "../905/573154";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { clearSelection } from "../figma_app/741237";
import { Qs, iN, sx as _$$sx } from "../905/992395";
import { loadingStatePutFailure, loadingStatePutLoading, loadingStatePutSuccess } from "../figma_app/714946";
let $$E11 = createActionCreator("UNSET_HOVERED_IN_MODAL_VOTE_PIN");
let $$y8 = createActionCreator("SET_HOVERED_IN_MODAL_VOTE_PIN");
let $$b13 = createActionCreator("DESELECT_VOTE_PIN");
let $$T15 = createActionCreator("SELECT_VOTE_PIN");
let $$I10 = createActionCreator("INITIATED_VOTING_SESSION");
let $$S6 = createOptimistThunk(async (e, {
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
    e.dispatch(loadingStatePutFailure({
      key: s
    }));
    e.dispatch(VisualBellActions.enqueue({
      type: o,
      message: getI18nString("voting.visual_bell.end_voting_session_failed")
    }));
  };
  e.dispatch(loadingStatePutLoading({
    key: s
  }));
  e.dispatch(VisualBellActions.dequeue({
    matchType: o
  }));
  await sendWithRetry.put(`/api/file/${fileKey}/voting_sessions/${a}`, {
    in_progress: !1
  }).then(({
    status: r
  }) => {
    200 === r ? (e.dispatch(loadingStatePutSuccess({
      key: s
    })), "MeetingsPanel" === t && atomStoreManager.set(Qs, {
      type: "SET_VIEW",
      payload: iN.PAST_VOTES
    })) : l();
  }).catch(e => {
    l();
    return e;
  });
});
let $$v16 = e => `end_voting_session_${e}`;
let $$A14 = createOptimistThunk((e, {
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
    e.dispatch(loadingStatePutFailure({
      key: o
    }));
    e.dispatch(VisualBellActions.enqueue({
      type: "start-voting-session-failed",
      message: getI18nString("voting.visual_bell.start_voting_session_failed")
    }));
  };
  e.dispatch(loadingStatePutLoading({
    key: o
  }));
  e.dispatch(VisualBellActions.dequeue({
    matchType: "start-voting-session-failed"
  }));
  sendWithRetry.post(`/api/file/${fileKey}/voting_sessions`, n).then(n => {
    200 === n.status ? (e.dispatch($$I10({
      votingSessionId: n.data.meta.id
    })), "MeetingsPanel" === a && atomStoreManager.get(Qs).activeToolModal === _$$sx.VOTING && atomStoreManager.set(Qs, {
      type: "SET_TOOL",
      payload: null
    }), e.dispatch(loadingStatePutSuccess({
      key: o
    })), trackEventAnalytics("start_voting_session", {
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
let $$N1 = createOptimistThunk((e, {
  votingSessionId: t
}) => {
  let r = e.getState().selectedView;
  if (!r.fileKey) return null;
  let n = sendWithRetry.del(`/api/file/${r.fileKey}/voting_sessions/${t}`);
  e.dispatch(handlePromiseError({
    promise: n,
    fallbackError: getI18nString("voting.modal.delete_voting_session_error")
  }));
  e.dispatch(VisualBellActions.enqueue({
    message: getI18nString("voting.modal.delete_voting_session_visual_bell")
  }));
  handleOptimistTransaction(n, e.dispatch, L({
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
  let i = function (e) {
    let t = e.createdAt.toISOString().split("T")[0];
    return e.title ? getI18nString("voting.csv_export.filename_with_session_title", {
      date: t,
      votingSessionTitle: e.title
    }) : getI18nString("voting.csv_export.filename_no_session_title", {
      date: t
    });
  }(r);
  WhiteboardVotingCppBindings.exportVotingSessionAsCsv(t, i);
}
let $$w4 = createOptimistThunk((e, t) => {
  let r;
  let i = t.votingStage;
  let a = e.getState();
  let o = a?.mirror?.appModel?.currentPage;
  if (i === SessionStatus.NO_SESSION) {
    WhiteboardVotingCppBindings.setVotingSessionInfo("", SessionStatus.NO_SESSION, 0, o);
    return;
  }
  let l = a?.openFile?.votingSessions;
  if (i === SessionStatus.ENDED) {
    let e = t.sessionId;
    r = l?.find(t => t.id === e && !t.inProgress);
  } else r = l?.find(e => e.inProgress);
  if (!r) return;
  let d = getResourceDataOrFallback(r.pageNodeId);
  d && (WhiteboardVotingCppBindings.setVotingSessionInfo(r.id, i, r.userVoteLimit, d), i === SessionStatus.JOINED && (e.dispatch($$O7()), a.mirror.selectionProperties.whiteboardNumSelectedByType?.STAMP && clearSelection()));
});
let $$O7 = createActionCreator("DISMISS_JOIN_CONFIRMATION");
let $$R9 = createActionCreator("HIDE_JOIN_VOTING_SESSION_MODAL");
let L = createActionCreator("DELETE_VOTING_SESSION");
let $$P12 = createActionCreator("SET_VOTES_PER_USER_LIMIT");
let $$D2 = createActionCreator("SET_TITLE");
let $$k5 = createActionCreator("CLEAR_STATE");
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
