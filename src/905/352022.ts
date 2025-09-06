import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { r as _$$r } from "../905/520829";
import { nF } from "../905/350402";
import { uo } from "../905/395917";
import { uo as _$$uo } from "../905/93909";
import { uo as _$$uo2 } from "../figma_app/240735";
import { xN } from "../905/672897";
import { k as _$$k } from "../905/93362";
import { g as _$$g } from "../905/347448";
let $$m0 = nF(async (e, {
  loadedPlans: t
}) => {
  if (!t || !(t.length > 0)) try {
    let t = await _$$k.getPlans();
    e.dispatch(_$$uo({
      plans: t.data.meta.plans
    }));
    e.dispatch(_$$uo2({
      teams: t.data.meta.teams
    }));
    e.dispatch(uo({
      orgs: t.data.meta.orgs
    }));
    let i = t.data.meta.teams;
    getFeatureFlags().close_starter_team_loophole_v2 && (await Promise.all(i.map(t => xN(t.id, e))));
  } catch (e) {}
});
let $$h1 = (e = !1) => async t => {
  try {
    return await g(t, e);
  } catch (e) {
    return Promise.reject(e);
  }
};
async function g(e, t = !1) {
  let i = atomStoreManager.get(_$$g);
  if (!t && i !== _$$r.INIT && i !== _$$r.LOADING) return i;
  try {
    i === _$$r.INIT && atomStoreManager.set(_$$g, _$$r.LOADING);
    let t = await _$$k.getPlansForAuthedUsers();
    atomStoreManager.set(_$$g, t);
    e(_$$uo2({
      teams: t.teams
    }));
    e(uo({
      orgs: t.orgs
    }));
    return t;
  } catch (e) {
    i === _$$r.LOADING && atomStoreManager.set(_$$g, _$$r.INIT);
    return Promise.reject(e);
  }
}
export const hr = $$m0;
export const nm = $$h1;