import { isNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { resourceUtils } from "../905/989992";
import s from "lodash-es/mapValues";
import { reportError } from "../905/11";
import { y as _$$y } from "../figma_app/681090";
import { liveStoreInstance, IT } from "../905/713695";
import { createMetaValidator } from "../figma_app/181241";
import { F6 } from "../905/712921";
var o = s;
let m = new class {
  constructor() {
    this.RatesSchemaValidator = createMetaValidator("RatesSchemaValidator", F6, null);
  }
  getRates(e) {
    return this.RatesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/pricing/rates", e ? {
      plan_parent_id: e.parentId,
      plan_type: e.type
    } : {}));
  }
  getContractRates({
    planType: e,
    planParentId: t
  }) {
    return this.RatesSchemaValidator.validate(async ({
      xr: i
    }) => await i.get("/api/pricing/contract_rates", {
      plan_parent_id: t,
      plan_type: e
    }));
  }
  getAdminContractRates({
    planType: e,
    planParentId: t
  }) {
    return this.RatesSchemaValidator.validate(async ({
      xr: i
    }) => await i.get("/api/admin/pricing/contract_rates", {
      plan_parent_id: t,
      plan_type: e
    }));
  }
  getPricesAtContractRenewal({
    planType: e,
    planParentId: t
  }) {
    return this.RatesSchemaValidator.validate(async ({
      xr: i
    }) => await i.get("/api/pricing/prices_at_contract_renewal", {
      plan_parent_id: t,
      plan_type: e
    }));
  }
  getAdminPricesAtContractRenewal({
    planType: e,
    planParentId: t
  }) {
    return this.RatesSchemaValidator.validate(async ({
      xr: i
    }) => await i.get("/api/admin/pricing/prices_at_contract_renewal", {
      plan_parent_id: t,
      plan_type: e
    }));
  }
  getAdminTeamPricesAtNextInvoice({
    planType: e,
    planParentId: t,
    renewalTerm: i,
    nextInvoiceInterval: n
  }) {
    return this.RatesSchemaValidator.validate(async ({
      xr: r
    }) => await r.get("/api/admin/pricing/team_prices_at_next_invoice", {
      plan_parent_id: t,
      plan_type: e,
      renewal_term: i,
      next_invoice_interval: n
    }));
  }
}();
var $$h0 = (e => (e.CURRENT = "current", e.AT_NEXT_RENEWAL = "atNextRenewal", e))($$h0 || {});
var $$g1 = (e => (e.ADMIN_SETTINGS = "admin-settings", e.ORG_CART = "org-cart", e.PRO_CART = "pro-cart", e.UPSELL_MODALS = "upsell-modals", e.UPSELL_MODALS_CONTRACT = "upsell-modals-contract", e))($$g1 || {});
function f(e) {
  reportError(_$$e.BILLING, e, t => (t.setExtras({
    error: e
  }), t));
}
let $$_2 = liveStoreInstance.Query({
  fetch: e => m.getRates(e).then(e => e.data.meta).catch(e => {
    f(e);
    return e;
  }),
  key: "billing_prices_active_rates"
});
let $$A3 = liveStoreInstance.Query({
  fetch: e => m.getContractRates(e).then(e => e.data.meta).catch(e => {
    f(e);
    return e;
  }),
  key: "billing_prices_contract_rates"
});
let y = liveStoreInstance.Query({
  fetch: async ({
    planKey: e
  }) => {
    try {
      return (await m.getContractRates({
        planType: e.type,
        planParentId: e.parentId || ""
      })).data.meta;
    } catch (e) {
      f(e);
      return e;
    }
  },
  enabled: ({
    planKey: e
  }) => null !== e.parentId && "" !== e.parentId,
  key: "billing_prices_current_contract_rates"
});
let b = liveStoreInstance.Query({
  fetch: async ({
    planKey: e
  }) => {
    try {
      return (await m.getPricesAtContractRenewal({
        planType: e.type,
        planParentId: e.parentId || ""
      })).data.meta;
    } catch (e) {
      f(e);
      return e;
    }
  },
  enabled: ({
    planKey: e
  }) => null !== e.parentId,
  key: "billing_prices_at_contract_renewal"
});
function v(e, t) {
  try {
    return e.transform(e => o()(t, t => _$$y(e, t)));
  } catch (e) {
    reportError(_$$e.BILLING, e);
    return resourceUtils.errorSuspendable(e, {
      release: () => {}
    });
  }
}
export function $$I11(e, t, i, n = {}) {
  let [r] = IT(i, n);
  return v(r, t);
}
export function $$E5(e, t, i = {}) {
  let n = $$_2(null);
  let [r] = IT(n, i);
  return v(r, e);
}
export function $$x8(e, t = {}) {
  !function (e) {
    let {
      planParentId,
      planType
    } = e;
    return "" !== planParentId && !isNullish(planType);
  }(e) && (t.enabled = !1);
  let [i] = IT($$A3(e), t);
  return i.transform(({
    product_prices: e
  }) => e[0]?.currency ?? null);
}
export function $$S6(e, t, i, n = {}) {
  return $$I11(i, e, y({
    planKey: {
      type: t.planType,
      parentId: t.planParentId
    }
  }), n);
}
liveStoreInstance.Query({
  fetch: async ({
    planKey: e
  }) => {
    try {
      return (await m.getAdminContractRates({
        planType: e.type,
        planParentId: e.parentId || ""
      })).data.meta;
    } catch (e) {
      f(e);
      return e;
    }
  },
  enabled: ({
    planKey: e
  }) => null !== e.parentId,
  key: "billing_prices_admin_current_contract_rates"
});
liveStoreInstance.Query({
  fetch: async ({
    planKey: e
  }) => {
    try {
      return (await m.getAdminPricesAtContractRenewal({
        planType: e.type,
        planParentId: e.parentId || ""
      })).data.meta;
    } catch (e) {
      f(e);
      return e;
    }
  },
  enabled: ({
    planKey: e
  }) => null !== e.parentId,
  key: "billing_prices_admin_at_contract_renewal"
});
liveStoreInstance.Query({
  fetch: async ({
    planKey: e,
    renewalTerm: t,
    nextInvoiceInterval: i
  }) => {
    try {
      return (await m.getAdminTeamPricesAtNextInvoice({
        planType: e.type,
        planParentId: e.parentId || "",
        renewalTerm: t,
        nextInvoiceInterval: i
      })).data.meta;
    } catch (e) {
      f(e);
      return e;
    }
  },
  enabled: ({
    planKey: e
  }) => null !== e.parentId,
  key: "billing_prices_admin_team_at_next_invoice"
});
class w extends Error {}
function C(e, t) {
  let i = e[0]?.[t];
  if (i && e.every(e => e[t] === i)) return i;
  throw new w(`Could not infer value for ${t} from price data`);
}
export function $$T4(e) {
  return C(Object.values(e), "currency");
}
function k(e, t, i, s) {
  try {
    return e.transform(e => {
      if (s && 0 === e.product_prices.length) return null;
      let a = "currency" in i ? i.currency : C(e.product_prices, "currency");
      let o = "tier" in i ? i.tier : C(e.product_prices, "tier");
      let c = t.dict(t => {
        let n = {
          billableProductKey: t,
          billableProductVariantKey: null,
          ...i,
          currency: a,
          tier: o
        };
        try {
          return _$$y(e, n);
        } catch (e) {
          reportError(_$$e.BILLING, e);
          return;
        }
      });
      if (Object.keys(c).forEach(e => {
        isNullish(c[e]) && delete c[e];
      }), 0 === Object.keys(c).length) throw Error("No prices found");
      return c;
    });
  } catch (e) {
    reportError(_$$e.BILLING, e);
    return resourceUtils.errorSuspendable(e, {
      release: () => {}
    });
  }
}
export function $$R12({
  billableProductKeys: e,
  baseQuery: t,
  planKey: i,
  options: n = {}
}) {
  let r = $$_2(i ?? null);
  let [a] = IT(r, n);
  return k(a, e, t);
}
export function $$N9(e, t, i, n = {}) {
  let r = y({
    planKey: e
  });
  let [a] = IT(r, n);
  return k(a, t, i, !0);
}
export function $$P7(e, t, i, n = {}) {
  let r = b({
    planKey: e
  });
  let [a] = IT(r, n);
  return k(a, t, i, !0);
}
export function $$O10(e) {
  if ("loaded" === e.status) return e;
  if ("errors" === e.status) {
    let t = [e.errors].flat()[0];
    if (t) throw t;
  }
  throw Error(`Unexpected result status: ${JSON.stringify(e)}`);
}
export const Y$ = $$h0;
export const Fq = $$g1;
export const I8 = $$_2;
export const cw = $$A3;
export const Tc = $$T4;
export const SK = $$E5;
export const ic = $$S6;
export const SG = $$P7;
export const vK = $$x8;
export const Ln = $$N9;
export const vu = $$O10;
export const yF = $$I11;
export const jv = $$R12;