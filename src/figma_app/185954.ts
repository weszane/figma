import { A } from "../905/920142";
import { uF, LP, a8 } from "../figma_app/559491";
import { isNullOrFailure } from "../905/18797";
export let $$s1 = new class {
  loadPluginsPublishedByUser(e) {
    let t = e.getState().loadingState;
    let r = uF.loadingKeyForPayload();
    isNullOrFailure(t, r) && e.dispatch(uF());
  }
  async loadPluginsAuthoredByCurrentOrg(e) {
    let {
      loadingState,
      currentUserOrgId
    } = e.getState();
    if (!currentUserOrgId) return;
    let n = LP.loadingKeyForPayload(currentUserOrgId);
    isNullOrFailure(loadingState, n) && (await e.dispatch(LP(currentUserOrgId)));
  }
  loadWidgetsAuthoredByCurrentOrg(e) {
    let {
      loadingState,
      currentUserOrgId
    } = e.getState();
    if (!currentUserOrgId) return;
    let n = a8.loadingKeyForPayload(currentUserOrgId);
    isNullOrFailure(loadingState, n) && e.dispatch(a8(currentUserOrgId));
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
      if (A(this.lastRefreshed[e]).add(this.expireDuration).valueOf() > Date.now()) return;
    } else if (!r) {
      this.lastRefreshed[e] = A(Date.now());
      return;
    }
    try {
      t(e);
    } catch (e) {
      throw e;
    } finally {
      this.lastRefreshed[e] = A(Date.now());
    }
  }
}
export const O = $$o0;
export const R = $$s1;