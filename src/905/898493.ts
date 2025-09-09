import { NC } from "../905/17179";
import { logger } from "../905/651849";
import { createOptimistThunk } from "../905/350402";
import { Q } from "../905/618914";
import { FMemberRoleType } from "../figma_app/191312";
import { gq } from "../905/276025";
import { A8 } from "../figma_app/465071";
import { Eh } from "../figma_app/617654";
let $$u1 = createOptimistThunk(async (e, t) => {
  let i = e.getState();
  let n = i.orgDomains;
  let a = !1;
  try {
    let e = await Q(gq(!0));
    a = A8(e, FMemberRoleType.GUEST);
  } catch (e) {
    logger.error("Error fetching plan user:", e);
    return;
  }
  if (!i.currentUserOrgId || !a || n.isFetching) return;
  let u = Date.now();
  let h = !n.fetchedAt || n.fetchedAt + 72e5 < u;
  (t.force || h) && (e.dispatch($$p2({
    fetching: !0
  })), Eh.getDomains({
    currentOrgId: i.currentUserOrgId
  }).then(t => {
    e.dispatch($$m0({
      domains: t.data.meta,
      fetched_at: u
    }));
    e.dispatch($$p2({
      fetching: !1
    }));
  }).catch(t => {
    e.dispatch($$p2({
      fetching: !1
    }));
    logger.error("An error occurred while fetching domains");
    logger.error(t);
  }));
});
let $$p2 = NC("ORG_DOMAINS_IS_FETCHING");
let $$m0 = NC("ORG_DOMAIN_SET_ALL");
export const Au = $$m0;
export const UK = $$u1;
export const h8 = $$p2;