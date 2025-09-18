import { createActionCreator } from "../905/73481";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { Q } from "../905/618914";
import { EO } from "../figma_app/684446";
import { FMemberRoleType } from "../figma_app/191312";
import { isNullOrFailure, isLoading } from "../905/18797";
import { getPlanUserAtomFamily } from "../905/276025";
import { checkOrgUserPermission } from "../figma_app/465071";
import { Eh } from "../figma_app/617654";
import { createOptimistThunk } from "../905/350402";
import { loadingStatePutLoading, loadingStatePutSuccess, loadingStatePutFailure } from "../figma_app/714946";
let $$m2 = createActionCreator("LICENSE_GROUP_DELETE");
let $$g3 = createActionCreator("LICENSE_GROUP_UPDATE");
let $$f1 = createActionCreator("LICENSE_GROUP_SET");
createOptimistThunk(async (e, t) => {
  let r = t.orgId;
  r && (await y(e, t, r));
});
let $$E0 = createOptimistThunk(async (e, t) => {
  let {
    currentUserOrgId
  } = e.getState();
  currentUserOrgId && (await y(e, t, currentUserOrgId));
});
let y = async (e, t, r) => {
  let {
    orgById,
    loadingState
  } = e.getState();
  let m = await Q(getPlanUserAtomFamily(!0));
  let g = checkOrgUserPermission(m, FMemberRoleType.MEMBER);
  if (!r) return;
  let E = orgById[r];
  let y = EO(E.id);
  if (E && E.bigma_enabled && g && (t.forceRefetch || isNullOrFailure(loadingState, y)) && !isLoading(loadingState, y)) {
    e.dispatch(loadingStatePutLoading({
      key: EO(r)
    }));
    try {
      let t = (await Eh.getLicenseGroups({
        currentOrgId: r
      })).data.meta;
      e.dispatch($$f1(t));
      e.dispatch(loadingStatePutSuccess({
        key: EO(r)
      }));
    } catch (t) {
      e.dispatch(VisualBellActions.enqueue({
        type: "get-license-groups",
        message: t.data?.message || getI18nString("license_group.an_error_occurred_while_fetching_workspaces"),
        error: !0
      }));
      e.dispatch(loadingStatePutFailure({
        key: EO(r)
      }));
    }
  }
};
export const Jt = $$E0;
export const hZ = $$f1;
export const w4 = $$m2;
export const yo = $$g3;