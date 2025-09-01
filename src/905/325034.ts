import { z } from "../905/239603";
import { getInitialOptions } from "../figma_app/169182";
import { aH, sq } from "../figma_app/594947";
import { YV, td } from "../figma_app/181241";
let o = z.record(z.string(), z.boolean());
let l = z.record(z.string(), z.string());
let d = z.object({
  success: z.array(z.string()),
  errors: z.record(z.string(), z.string()).optional()
});
let $$c0 = new class {
  constructor() {
    this.StatsigInitializeResponseValidator = YV("StatsigInitializeResponseValidator", aH, null);
    this.StatsigInitializeResponseBatchedValidator = YV("StatsigInitializeResponseBatchedValidator", sq, null);
    this.StatsigFlagStatusForUserValidator = YV("StatsigFlagStatusForUserValidator", o, null);
    this.StatsigFlagDescriptionsValidator = YV("StatsigFlagDescriptionsValidator", l, null);
    this.StatsigUpdateOverridesValidator = YV("StatsigUpdateOverridesValidator", d, null);
  }
  getStatsigRelayProxyBootstrap({
    orgId: e,
    teamId: t
  } = {}, {
    prefetch: i
  } = {}) {
    let n = getInitialOptions().integration_host;
    let a = td.toAPIParameters({
      orgId: e,
      teamId: t,
      integrationHost: n
    });
    let o = i ? {
      retryCount: 0
    } : {
      retryCount: 2
    };
    return this.StatsigInitializeResponseValidator.validate(async ({
      xr: e
    }) => await e.get("/api/statsig/bootstrap", a, o));
  }
  getStatsigRelayProxyBootstrapV2({
    orgId: e,
    teamIds: t
  } = {}, {
    prefetch: i
  } = {}) {
    let n = getInitialOptions().integration_host;
    let a = null != t && t.length > 0 ? t.join(",") : void 0;
    let o = td.toAPIParameters({
      orgId: e,
      teamIds: a,
      integrationHost: n
    });
    let l = i ? {
      retryCount: 0
    } : {
      retryCount: 2
    };
    return this.StatsigInitializeResponseBatchedValidator.validate(async ({
      xr: e
    }) => await e.get("/api/v2/statsig/bootstrap", o, l));
  }
  getStatsigFlagStatusForUser() {
    return this.StatsigFlagStatusForUserValidator.validate(async ({
      xr: e
    }) => await e.get("/api/statsig/flag_status_for_user"));
  }
  getStatsigFlagDescriptions() {
    return this.StatsigFlagDescriptionsValidator.validate(async ({
      xr: e
    }) => await e.get("/api/statsig/flag_descriptions"));
  }
  postStatsigUpdateOverrides(e) {
    return this.StatsigUpdateOverridesValidator.validate(async ({
      xr: t
    }) => await t.post("/api/statsig/update_overrides", e));
  }
}();
export const m = $$c0; 
