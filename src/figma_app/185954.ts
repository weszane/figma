import { dayjs } from "../905/920142";
import { initializeUserPublishedResourcesThunk, getOrgPublishedPluginsThunk, getOrgPublishedWidgetsThunk } from "../figma_app/559491";
import { isNullOrFailure } from "../905/18797";
export let $$s1 = new class {
  loadPluginsPublishedByUser(e) {
    let t = e.getState().loadingState;
    let r = initializeUserPublishedResourcesThunk.loadingKeyForPayload();
    isNullOrFailure(t, r) && e.dispatch(initializeUserPublishedResourcesThunk());
  }
  async loadPluginsAuthoredByCurrentOrg(e) {
    let {
      loadingState,
      currentUserOrgId
    } = e.getState();
    if (!currentUserOrgId) return;
    let n = getOrgPublishedPluginsThunk.loadingKeyForPayload(currentUserOrgId);
    isNullOrFailure(loadingState, n) && (await e.dispatch(getOrgPublishedPluginsThunk(currentUserOrgId)));
  }
  loadWidgetsAuthoredByCurrentOrg(e) {
    let {
      loadingState,
      currentUserOrgId
    } = e.getState();
    if (!currentUserOrgId) return;
    let n = getOrgPublishedWidgetsThunk.loadingKeyForPayload(currentUserOrgId);
    isNullOrFailure(loadingState, n) && e.dispatch(getOrgPublishedWidgetsThunk(currentUserOrgId));
  }
}();
export class $$o0 {
  constructor(e) {
    this.expireDuration = e;
    this.lastRefreshed = {};
  }
  clear() {
    this.lastRefreshed = {};
  }
  debounceRefresh(e, t, r) {
    if (e in this.lastRefreshed) {
      if (dayjs(this.lastRefreshed[e]).add(this.expireDuration).valueOf() > Date.now()) return;
    } else if (!r) {
      this.lastRefreshed[e] = dayjs(Date.now());
      return;
    }
    try {
      t(e);
    } catch (e) {
      throw e;
    } finally {
      this.lastRefreshed[e] = dayjs(Date.now());
    }
  }
}
export const O = $$o0;
export const R = $$s1;