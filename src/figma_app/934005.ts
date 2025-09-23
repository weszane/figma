import { ServiceCategories } from "../905/165054";
import { z } from "../905/239603";
import a from "../vendor/241899";
import { A as _$$A } from "../905/920142";
import { reportError } from "../905/11";
import { toTitleCase } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { FOrganizationLevelType, FLicenseType } from "../figma_app/191312";
import { CurrencySchema } from "../905/962956";
import { BillingCycle } from "../figma_app/831101";
import { createProductAccessSchema } from "../905/513035";
var s = a;
var m = (e => (e.ACH_DEBIT = "ach_debit", e.CARD = "card", e.SEPA_DEBIT = "sepa_debit", e.UNKNOWN = "unknown", e))(m || {});
var g = (e => (e.AMEX = "amex", e.DINERS = "diners", e.DISCOVER = "discover", e.EFTPOS_AU = "eftpos_au", e.JCB = "jcb", e.MASTERCARD = "mastercard", e.UNIONPAY = "unionpay", e.VISA = "visa", e.UNKNOWN = "unknown", e))(g || {});
let f = z.object({
  type: z.literal("ach_debit"),
  last4: z.string().nullable()
});
let E = z.object({
  type: z.literal("card"),
  brand: z.nativeEnum(g).nullable(),
  last4: z.string().nullable()
});
let y = z.object({
  type: z.literal("sepa_debit"),
  last4: z.string().nullable()
});
let b = z.object({
  type: z.literal("unknown"),
  stripe_type: z.string()
});
let T = z.union([f, E, y, b]);
var $$I2 = (e => (e.PENDING = "pending", e.OPEN = "open", e.PAID = "paid", e.UNCOLLECTIBLE = "uncollectible", e.VOID = "void", e))($$I2 || {});
var $$S3 = (e => (e.MANUAL = "manual", e.SUBSCRIPTION_CREATED = "subscription_created", e.SUBSCRIPTION_RENEWED = "subscription_renewed", e.CATCH_UP = "catch_up", e.TRUE_UP = "true_up", e))($$S3 || {});
var v = (e => (e.OPEN = "open", e.PAID = "paid", e.CANCELED = "canceled", e))(v || {});
let A = z.object({
  status: z.nativeEnum(v),
  payment_method: T.nullable()
});
export var $$x0 = (e => (e.LEGACY = "legacy", e.PRORATED = "prorated", e))($$x0 || {});
let N = createProductAccessSchema(z.object({
  net_quantity: z.number(),
  amount: z.number(),
  seats_quantity: z.number(),
  seats_amount: z.number(),
  adjustments_quantity: z.number(),
  adjustments_amount: z.number(),
  charges_quantity: z.number(),
  charges_amount: z.number(),
  credits_quantity: z.number(),
  credits_amount: z.number()
}));
let $$C1 = z.object({
  id: z.string(),
  issued_at: z.string(),
  paid_at: z.string().nullable(),
  period_starts_at: z.string(),
  period_ends_at: z.string(),
  past_due_at: z.string(),
  plan_parent_type: z.nativeEnum(FOrganizationLevelType),
  billing_interval: z.nativeEnum(BillingCycle),
  total: z.number(),
  state: z.nativeEnum($$I2),
  subtype: z.nativeEnum($$S3),
  currency: CurrencySchema,
  hosted_invoice_url: z.string().nullable(),
  invoice_pdf_url: z.string().nullable(),
  number: z.string().nullable(),
  total_tax_amount: z.number(),
  subtotal: z.number(),
  payments: A.array(),
  billing_mechanics: z.nativeEnum($$x0),
  billable_products_kind: z.nativeEnum(FLicenseType),
  org_invoice_details: z.object({
    is_locked: z.boolean().nullable(),
    is_skipped_trueup: z.boolean().nullable(),
    multiyear_contract_id: z.string().nullish(),
    billing_period_is_stub: z.boolean().nullish()
  }).nullish(),
  is_empty: z.boolean(),
  invalid_amounts_or_quantities: z.boolean().optional(),
  seats_breakdown: N
});
var w = (e => (e.PENDING = "pending", e.OPEN = "open", e.PAID = "paid", e.UNCOLLECTIBLE = "uncollectible", e.VOID = "void", e.OVERDUE = "overdue", e))(w || {});
let O = ["manual"];
let R = ["uncollectible", "void"];
let L = [...R, "pending"];
export var $$P4 = (e => (e.REVIEW = "review", e.LOCKED = "locked", e))($$P4 || {});
export function $$D21(e, t) {
  return "open" === e.state && _$$A(t).isAfter($$F13(e));
}
export function $$k10(e) {
  return _$$A(e.issued_at).toDate();
}
export function $$M14(e) {
  return e.paid_at ? _$$A(e.paid_at).toDate() : null;
}
export function $$F13(e) {
  return _$$A(e.past_due_at).toDate();
}
export function $$j8(e) {
  return getI18nString("plan_invoices.date_long", {
    date: $$F13(e)
  });
}
export function $$U7(e) {
  let t = () => toTitleCase(e.subtype);
  switch (e.plan_parent_type) {
    case FOrganizationLevelType.TEAM:
      switch (e.billing_interval) {
        case BillingCycle.YEAR:
          return getI18nString("plan_invoices.description.plan_subscription");
        case BillingCycle.MONTH:
          return getI18nString("plan_invoices.description.monthly_invoice");
        default:
          e.billing_interval;
          return t();
      }
    case FOrganizationLevelType.ORG:
      if (e.billing_interval === BillingCycle.YEAR) switch (e.subtype) {
        case "subscription_renewed":
        case "subscription_created":
          return getI18nString("plan_invoices.description.plan_subscription");
        case "true_up":
          return getI18nString("org_admin_settings.cost_breakdown.quarterly_true_up");
        case "catch_up":
          return getI18nString("plan_invoices.description.quarterly_invoice");
        default:
          reportError(ServiceCategories.BILLING_EXPERIENCE, Error("unexpected subtype for org year invoice"), {
            extra: {
              subtype: e.subtype
            }
          });
          return t();
      }
      reportError(ServiceCategories.BILLING_EXPERIENCE, Error("unexpected billing interval for org invoice"), {
        extra: {
          billing_interval: e.billing_interval
        }
      });
      return t();
    default:
      e.plan_parent_type;
      return t();
  }
}
export function $$B6(e) {
  return e.number || getI18nString("plan_invoices.empty_details");
}
export function $$G9(e) {
  let t = {};
  e.payments.forEach(e => {
    let r;
    if ("paid" === e.status && e.payment_method) {
      try {
        r = JSON.stringify(s()(e.payment_method, "type", "bank", "last4", "stripe_type", "brand"));
      } catch {
        reportError(ServiceCategories.BILLING_EXPERIENCE, Error("failed to stringify payment method"));
        r = "";
      }
      r && (t[r] = e.payment_method);
    }
  });
  let r = Object.values(t);
  if (r.length > 1) return getI18nString("plan_invoices.payment_method.multiple");
  let i = r[0];
  return i ? function (e, t = {}) {
    switch (e.type) {
      case "card":
        {
          let {
            last4,
            brand
          } = e;
          if (last4 && brand) return getI18nString(`plan_invoices.payment_method.card.${brand}`) + ` ${last4}`;
          if (last4 && !brand) {
            if (t.inline) return getI18nString("plan_invoices.payment_method.card.unknown.inline", {
              last4
            });
            return getI18nString("plan_invoices.payment_method.card.unknown", {
              last4
            });
          }
          if (!last4 && brand) return getI18nString(`plan_invoices.payment_method.card.${brand}`);
          if (t.inline) return getI18nString("plan_invoices.payment_method.card.unknown.no_last_4.inline");
          return getI18nString("plan_invoices.payment_method.card.unknown.no_last_4");
        }
      case "ach_debit":
      case "sepa_debit":
        {
          let {
            last4
          } = e;
          if (last4) return getI18nString(`plan_invoices.payment_method.${e.type}.unknown`) + ` ${last4}`;
          return getI18nString(`plan_invoices.payment_method.${e.type}.unknown`);
        }
      case "unknown":
        return toTitleCase(e.stripe_type);
      default:
        reportError(ServiceCategories.BILLING_EXPERIENCE, Error("unknown payment method"), {
          extra: {
            type: e?.type
          }
        });
        return getI18nString("plan_invoices.payment_method.unknown");
    }
  }(i) : null;
}
let V = new Set(["subscription_created", "subscription_renewed"]);
export function $$H18(e) {
  return e.plan_parent_type === FOrganizationLevelType.ORG && ["catch_up", "true_up"].includes(e.subtype);
}
export function $$z22(e) {
  return e.plan_parent_type === FOrganizationLevelType.TEAM && e.billing_interval === BillingCycle.MONTH && "catch_up" === e.subtype;
}
export function $$W20(e) {
  return e.billable_products_kind === FLicenseType.BUNDLE;
}
function K(e, t, r) {
  let n = $$k10(e);
  let i = $$k10(t);
  let a = (_$$A(n).isAfter(i) ? -1 : 0) + (_$$A(i).isAfter(n) ? 1 : 0);
  return r?.reverse ? -a : a;
}
function Y(e, t) {
  let r = e.billing_interval === BillingCycle.YEAR ? 1 : 0;
  let n = (t.billing_interval === BillingCycle.YEAR ? 1 : 0) - r;
  if (0 !== n) return n;
  let i = $$H18(e) ? 0 : 1;
  return ($$H18(t) ? 0 : 1) - i;
}
export function $$$5(e) {
  return e.filter(X);
}
function X(e) {
  return !(R.includes(e.state) || O.includes(e.subtype));
}
function q(e) {
  return !(L.includes(e.state) || O.includes(e.subtype));
}
function J(e) {
  let t = e[0];
  return t ? e.filter(e => 1 >= Math.abs(_$$A($$k10(t)).diff($$k10(e), "days"))) : [];
}
export function $$Z16(e, t) {
  return [...J([...e.filter(e => X(e)).filter(e => !("pending" !== e.state || $$et19(e) && !(e.plan_parent_type === FOrganizationLevelType.ORG && (t?.allowLegacyOrgAnnual && "legacy" === e.billing_mechanics || t?.allowProratedOrgAnnual && "prorated" === e.billing_mechanics))))].sort((e, t) => K(t, e)))].sort((e, t) => Y(t, e))[0] ?? null;
}
export function $$Q12(e) {
  return [...J([...e.filter(q)].sort(K))].sort(Y)[0] ?? null;
}
export function $$ee17(e) {
  return !e.billing_mechanics || "legacy" === e.billing_mechanics || "true_up" === e.subtype;
}
export function $$et19(e) {
  return e.billing_interval === BillingCycle.YEAR && V.has(e.subtype);
}
export function $$er11(e) {
  let t = null;
  for (let r of e) q(r) && $$et19(r) && (!t || _$$A(r.issued_at).isAfter(t.issued_at)) && (t = r);
  return t;
}
export function $$en15(e) {
  for (let t of e) if ("pending" === t.state && X(t) && $$et19(t)) return t;
  return null;
}
export const fA = $$x0;
export const ar = $$C1;
export const qH = $$I2;
export const ly = $$S3;
export const fx = $$P4;
export const TQ = $$$5;
export const $b = $$B6;
export const zz = $$U7;
export const nm = $$j8;
export const gL = $$G9;
export const tB = $$k10;
export const iv = $$er11;
export const YO = $$Q12;
export const Z4 = $$F13;
export const W8 = $$M14;
export const RK = $$en15;
export const gl = $$Z16;
export const zU = $$ee17;
export const _k = $$H18;
export const z7 = $$et19;
export const dp = $$W20;
export const Jv = $$D21;
export const _8 = $$z22;
