import { debug } from "../figma_app/465776";
import { ServiceCategories } from "../905/165054";
import { reportError } from "../905/11";
import { MixedAccessSchema } from "../905/557142";
import { createDataMapper, processAdditionalConfig } from "../905/508958";
import { W } from "../4452/143028";
let d = createDataMapper(MixedAccessSchema, e => ({
  id: e.camel(),
  pending: e.camel(),
  user_id: e.camel(),
  level: e.camel(),
  resource_id_or_key: e.rename("resourceId"),
  resource_type: e.camel(),
  created_at: e.camel().custom({
    toLiveGraph: e => new Date(e),
    toSinatra: e => e.toISOString()
  }),
  updated_at: e.camel().stringToDate(),
  realtime_token: e.drop(),
  org_user: e.drop(),
  team_user: e.drop(),
  user: e.drop()
}));
export function $$c1(e, n) {
  (e.pending || null === e.userId) && (reportError(ServiceCategories.FRONTEND_PLATFORM, Error("toSinatraConfirmedRole received a pending or null user_id"), {
    extra: {
      pending: e.pending,
      userId: e.userId
    }
  }), debug(!1, "toSinatraConfirmedRole received a pending or null user_id"));
  let t = d.toSinatra(e);
  let s = W.toSinatra(n);
  return {
    ...t,
    pending: !1,
    user_id: t.user_id || "",
    resource_type: t.resource_type,
    user: s
  };
}
export function $$p0(e, n) {
  e.pending && null === e.userId || (reportError(ServiceCategories.FRONTEND_PLATFORM, Error("toSinatraPendingRole received a non-pending or non-null user_id"), {
    extra: {
      pending: e.pending,
      userId: e.userId
    }
  }), debug(!1, "toSinatraPendingRole received a non-pending or non-null user_id"));
  let t = d.toSinatra(e);
  return {
    ...t,
    pending: !0,
    user_id: null,
    resource_type: t.resource_type,
    user: n
  };
}
processAdditionalConfig((e, n, t) => [e()(d), n(d)(), t(d)()]);
processAdditionalConfig((e, n, t) => [e()(d), n(d)(), t(d)()]);
processAdditionalConfig((e, n, t) => [e()(d), n(d)(), t(d)()]);
processAdditionalConfig((e, n, t) => [e()(d), n(d)(), t(d)()]);
export const Bk = $$p0;
export const Pe = $$c1;
