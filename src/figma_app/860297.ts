import { liveStoreInstance } from "../905/713695";
import { z } from "../905/931953";
let $$a0 = liveStoreInstance.Query({
  fetch: async e => (await z.getDomainDNSRecords({
    fileKey: e
  })).data.meta
});
let $$s1 = liveStoreInstance.Query({
  fetch: async e => (await z.customDomainLimitReached({
    fileKey: e
  })).data.meta,
  output: ({
    data: {
      limit_reached: e,
      num_domains_allowed: t,
      num_domains: r
    }
  }) => ({
    limitReached: e,
    numDomainsAllowed: t,
    numDomains: r
  })
});
export const V = $$a0;
export const q = $$s1;