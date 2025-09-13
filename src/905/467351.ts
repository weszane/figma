import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { ButtonPrimitive } from "../905/632989";
import { useSubscription } from "../figma_app/288654";
import { vj } from "../figma_app/919079";
import { getI18nString } from "../905/303541";
import { BranchOpenMergeRequest } from "../figma_app/43951";
let d = "branching_status_helpers--badgeIndicatorBase--MfU-L";
let c = "branching_status_helpers--badgeIndicatorInReview--l8PLk branching_status_helpers--badgeIndicatorBase--MfU-L";
let u = "branching_status_helpers--badgeIndicatorApproved--4E-Aq branching_status_helpers--badgeIndicatorBase--MfU-L";
let p = "branching_status_helpers--badgeIndicatorChangesRequested--nSuXT branching_status_helpers--badgeIndicatorBase--MfU-L";
let m = "branching_status_helpers--smallIndicator---RmO4";
let h = "branching_status_helpers--largeIndicator--VFKme";
let g = "branching_status_helpers--reviewStatesLabelBase--r6PQJ";
let f = "branching_status_helpers--reviewStatusLabelInReview--ur-AW branching_status_helpers--reviewStatesLabelBase--r6PQJ";
let _ = "branching_status_helpers--reviewStatusLabelApproved--rQiO4 branching_status_helpers--reviewStatesLabelBase--r6PQJ";
let A = "branching_status_helpers--reviewStatusLabelChangesRequested--uOMr7 branching_status_helpers--reviewStatesLabelBase--r6PQJ";
let y = "branching_status_helpers--smallLabel--mgOLv text--fontPos9--naThA text--_fontBase--QdLsd";
let b = "branching_status_helpers--largeLabel--JQyAa text--fontPos11--2LvXf text--_fontBase--QdLsd";
let v = "branching_status_helpers--reviewStatusIndicator--sCE9S";
let I = "branching_status_helpers--greenDot--kjmVB branching_status_helpers--branchStatusDot--U0L5n red_dot--inlineRedDot--SrY0e";
let E = "branching_status_helpers--grayDot--jng2- branching_status_helpers--branchStatusDot--U0L5n red_dot--inlineRedDot--SrY0e";
let x = "branching_status_helpers--grayDotToolbar--U-Zhb branching_status_helpers--grayDot--jng2- branching_status_helpers--branchStatusDot--U0L5n red_dot--inlineRedDot--SrY0e";
var $$S2 = (e => (e[e.APPROVED = 0] = "APPROVED", e[e.IN_REVIEW = 1] = "IN_REVIEW", e[e.MERGED = 2] = "MERGED", e[e.SHARED_DRAFT = 3] = "SHARED_DRAFT", e[e.CHANGES_REQUESTED = 4] = "CHANGES_REQUESTED", e))($$S2 || {});
var $$w0 = (e => (e[e.ACTIVE = 0] = "ACTIVE", e[e.MERGED = 1] = "MERGED", e[e.ARCHIVED = 2] = "ARCHIVED", e[e.IN_REVIEW = 3] = "IN_REVIEW", e[e.APPROVED = 4] = "APPROVED", e[e.CHANGES_REQUESTED = 5] = "CHANGES_REQUESTED", e))($$w0 || {});
export function $$C5(e) {
  let {
    mergeRequest
  } = e;
  let {
    reviewers,
    closedAt
  } = t;
  let r = mergeRequest.requestedAt || mergeRequest.createdAt;
  return closedAt ? 3 : reviewers.some(e => e.changesRequestedAt && e.changesRequestedAt > r) ? 4 : reviewers.some(e => e.approvedAt && e.approvedAt > r) ? 0 : 1;
}
export function $$T4(e) {
  let {
    openMergeRequest,
    fileMerges,
    trashedAt
  } = e;
  return openMergeRequest ? function (e) {
    switch (e) {
      case 0:
        return 4;
      case 1:
        return 3;
      case 2:
        return 1;
      case 3:
      default:
        return 0;
      case 4:
        return 5;
    }
  }($$C5(openMergeRequest)) : trashedAt ? fileMerges.some(e => !!e.mergeResultCheckpointId && 0 === e.direction) ? 1 : 2 : 0;
}
export function $$k6(e) {
  return e.approved_at ? 0 : e.changes_requested_at ? 4 : void 0;
}
export function $$R3(e) {
  let {
    mergeRequestStatus,
    size,
    outdated
  } = e;
  let a = d;
  let l = g;
  let I = "";
  switch (mergeRequestStatus) {
    case 0:
      a = u;
      l = _;
      I = getI18nString("collaboration.branching.approved");
      break;
    case 1:
      a = c;
      l = f;
      I = getI18nString("collaboration.branching.in_review");
      break;
    case 4:
      a = p;
      l = A;
      I = getI18nString("collaboration.branching.changes_suggested");
      break;
    default:
      return jsx(Fragment, {});
  }
  outdated && (a = "branching_status_helpers--badgeIndicatorOutdated--LORl7 branching_status_helpers--badgeIndicatorBase--MfU-L", l = "branching_status_helpers--reviewStatusLabelOutdated--IfApl branching_status_helpers--reviewStatesLabelBase--r6PQJ");
  return jsx("div", {
    className: v,
    children: jsxs("div", {
      className: `${l} ${size === vj.LARGE ? b : y}`,
      children: [jsx("span", {
        className: `${a} ${size === vj.LARGE ? h : m}`
      }), I]
    })
  });
}
let N = (e, t) => {
  let i = d;
  let n = g;
  let r = "";
  let a = "branching_status_helpers--branchStatusDot--U0L5n red_dot--inlineRedDot--SrY0e";
  switch (e) {
    case 4:
      i = u;
      n = _;
      r = getI18nString("collaboration.branching.approved");
      a = I;
      break;
    case 3:
      i = t ? "branching_status_helpers--badgeIndicatorInReviewToolbar--n55T5 branching_status_helpers--badgeIndicatorInReview--l8PLk branching_status_helpers--badgeIndicatorBase--MfU-L" : c;
      n = t ? "branching_status_helpers--reviewStatusLabelInReviewToolbar--bc9VP branching_status_helpers--reviewStatusLabelInReview--ur-AW branching_status_helpers--reviewStatesLabelBase--r6PQJ" : f;
      r = getI18nString("collaboration.branching.in_review");
      a = t ? x : E;
      break;
    case 5:
      i = p;
      n = A;
      r = getI18nString("collaboration.branching.changes_suggested");
      a = "branching_status_helpers--yellowDot--qVtFs branching_status_helpers--branchStatusDot--U0L5n red_dot--inlineRedDot--SrY0e";
      break;
    case 1:
      i = "branching_status_helpers--badgeIndicatorMerged--s7zP9 branching_status_helpers--badgeIndicatorApproved--4E-Aq branching_status_helpers--badgeIndicatorBase--MfU-L";
      n = "branching_status_helpers--reviewStatusLabelMerged--uGCWA branching_status_helpers--reviewStatusLabelApproved--rQiO4 branching_status_helpers--reviewStatesLabelBase--r6PQJ";
      r = getI18nString("collaboration.branching.merged");
      a = I;
      break;
    case 2:
      i = t ? "branching_status_helpers--badgeIndicatorArchivedToolbar--gYOR5 branching_status_helpers--badgeIndicatorInReviewToolbar--n55T5 branching_status_helpers--badgeIndicatorInReview--l8PLk branching_status_helpers--badgeIndicatorBase--MfU-L" : "branching_status_helpers--badgeIndicatorArchived--DiCp6 branching_status_helpers--badgeIndicatorOutdated--LORl7 branching_status_helpers--badgeIndicatorBase--MfU-L";
      n = t ? "branching_status_helpers--reviewStatusLabelArchivedToolbar--7sejI branching_status_helpers--reviewStatusLabelArchived--GmltE branching_status_helpers--reviewStatusLabelOutdated--IfApl branching_status_helpers--reviewStatesLabelBase--r6PQJ" : "branching_status_helpers--reviewStatusLabelArchived--GmltE branching_status_helpers--reviewStatusLabelOutdated--IfApl branching_status_helpers--reviewStatesLabelBase--r6PQJ";
      r = getI18nString("collaboration.branching.archived");
      a = t ? x : E;
      break;
    default:
      return null;
  }
  return [i, n, a, r];
};
export function $$P1({
  branchFileKey: e,
  size: t,
  onClick: i,
  convertsToDotWithSmallScreen: o,
  isToolbar: d
}) {
  let c = useSubscription(BranchOpenMergeRequest, {
    branchFileKey: e
  });
  let u = "loaded" === c.status && c.data.file ? $$T4(c.data.file) : null;
  if (!u) return null;
  let p = N(u, !!d);
  if (!p) return null;
  let [g, f, _, A] = p;
  let I = jsx("div", {
    className: `${v} ${o ? "branching_status_helpers--branchStatusBadge--mmj-O" : void 0}`,
    children: jsxs("div", {
      className: `${f} ${t === vj.LARGE ? b : y}`,
      children: [jsx("span", {
        className: `${g} ${t === vj.LARGE ? h : m}`
      }), A]
    })
  });
  return i ? jsx(ButtonPrimitive, {
    className: "branching_status_helpers--buttonReset--WCK1W",
    onClick: () => i?.(u),
    children: I
  }) : jsx("div", {
    children: I
  });
}
export const pT = $$w0;
export const a$ = $$P1;
export const _V = $$S2;
export const $T = $$R3;
export const AM = $$T4;
export const z2 = $$C5;
export const ED = $$k6;