import { filterNotNullish } from "../figma_app/656233";
import { throwTypeError } from "../figma_app/465776";
import { ViewType, AppStateTsApi } from "../figma_app/763686";
import { oz, o5, hx, dZ } from "../905/292918";
import { j, l as _$$l } from "../905/618243";
import { Kn } from "../905/535806";
export function $$d1(e, t, i) {
  return filterNotNullish(["hidden" !== e.createBranch.status ? {
    name: "create-branch",
    flags: ["design", "!integration"],
    disabled: "disabled" === e.createBranch.status,
    callback: (i, n, a) => {
      let s;
      switch (e.createBranch.status) {
        case "upsell-org":
          s = j({
            trackingContextName: t
          });
          break;
        case "hidden":
        case "disabled":
        case "enabled":
          s = _$$l({
            trackingContextName: t,
            dispatchedFromEditor: !0
          });
          break;
        default:
          throwTypeError(e.createBranch.status);
      }
      a(s);
    }
  } : null, "hidden" !== e.openBranchSource.status ? {
    name: "open-branch-source",
    flags: ["design"],
    disabled: "disabled" === e.openBranchSource.status,
    callback: (e, i, n) => {
      n(oz({
        trackingContextName: t
      }));
    }
  } : null, "hidden" !== e.viewBranches.status && i !== ViewType.BRANCHING ? {
    name: "view-branches",
    flags: ["design"],
    disabled: "disabled" === e.viewBranches.status,
    callback: (e, i, n) => {
      n(o5({
        trackingContextName: t
      }));
    }
  } : null]);
}
export function $$c0(e, t, i, r) {
  return i === ViewType.BRANCHING || AppStateTsApi.uiState().isRecovery.getCopy() ? [] : filterNotNullish(["hidden" !== e.viewBranchDiff.status && "hidden" === e.mergeBranch.status ? {
    name: "view-branch-diff",
    flags: ["design"],
    disabled: "disabled" === e.viewBranchDiff.status,
    callback: (e, i, n) => {
      n(hx({
        direction: Kn.TO_SOURCE,
        trackingContextName: t
      }));
    }
  } : null, "hidden" !== e.mergeBranch.status ? {
    name: "merge-branch",
    flags: ["design", "!integration"],
    disabled: "disabled" === e.mergeBranch.status,
    callback: (e, i, n) => {
      n(hx({
        direction: Kn.TO_SOURCE,
        trackingContextName: t,
        unreadCommentCount: r
      }));
    }
  } : null, "hidden" !== e.mergeBranch.status ? {
    name: "merge-branch-force",
    searchOnly: !0,
    flags: ["design", "!integration"],
    featureFlags: ["branching_and_merging_force"],
    callback: (e, i, n) => {
      n(hx({
        direction: Kn.TO_SOURCE,
        trackingContextName: t,
        force: !0
      }));
    }
  } : null, "hidden" !== e.viewSourceDiff.status && "hidden" === e.updateBranch.status ? {
    name: "view-source-diff",
    flags: ["design"],
    disabled: "disabled" === e.viewSourceDiff.status,
    callback: (e, i, n) => {
      n(hx({
        direction: Kn.FROM_SOURCE,
        trackingContextName: t
      }));
    }
  } : null, "hidden" !== e.updateBranch.status ? {
    name: "update-branch",
    flags: ["design", "!integration"],
    disabled: "disabled" === e.updateBranch.status,
    callback: (e, i, n) => {
      n(hx({
        direction: Kn.FROM_SOURCE,
        trackingContextName: t
      }));
    }
  } : null, "hidden" !== e.updateBranch.status ? {
    name: "update-branch-force",
    searchOnly: !0,
    flags: ["design", "!integration"],
    featureFlags: ["branching_and_merging_force"],
    callback: (e, i, n) => {
      n(hx({
        direction: Kn.FROM_SOURCE,
        trackingContextName: t,
        force: !0
      }));
    }
  } : null, "hidden" !== e.updateBranch.status ? {
    name: "update-branch-from-version",
    searchOnly: !0,
    flags: ["design", "!integration"],
    featureFlags: ["branching_incremental_updates"],
    disabled: "disabled" === e.updateBranch.status,
    callback: (e, t, i) => {
      i(dZ({}));
    }
  } : null]);
}
export const m = $$c0;
export const t = $$d1;