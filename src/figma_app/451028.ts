import { dayjs } from "../905/920142";
import { EQ, Cz } from "../figma_app/684446";
import { vY, xu, C5, UO, D1, tl, go, ev } from "../figma_app/614170";
var $$s0 = (e => (e.ORG_PAST_DUE_INVOICE = "org_past_due_invoice", e.ORG_OPEN_INVOICE = "org_open_invoice", e.ORG_UPCOMING_TRUE_UP_LOCKED = "org_upcoming_true_up_locked", e.ORG_UPCOMING_TRUE_UP_REVIEW = "org_upcoming_true_up_review", e.ORG_UPCOMING_RENEWAL_NON_AUTOMATIC = "org_upcoming_renewal_non_automatic", e.ORG_UPCOMING_ADDITIVE_INVOICE = "org_upcoming_additive_invoice", e.ORG_UPCOMING_INVOICE = "org_upcoming_invoice", e.BILLING_GROUP_UPCOMING_TRUE_UP = "billing_group_upcoming_true_up", e.BILLING_GROUP_UPCOMING_RENEWAL = "billing_group_upcoming_renewal", e))($$s0 || {});
export function $$o1(e) {
  if (0 === e.invoices.length) return null;
  let t = vY(e.invoices);
  if (t) return {
    id: "org_past_due_invoice",
    notification: !0,
    data: {
      pastDueAt: dayjs(t.past_due_at).toDate(),
      planInvoiceId: xu(t)
    }
  };
  let r = C5(e.invoices, "open");
  if (r) return {
    id: "org_open_invoice",
    notification: !0,
    data: {
      pastDueAt: dayjs(r.past_due_at).toDate(),
      planInvoiceId: xu(r)
    }
  };
  let i = C5(e.invoices, "locked");
  if (i) return {
    id: "org_upcoming_true_up_locked",
    notification: !1,
    data: {
      issuedAt: dayjs(i.due_at).toDate()
    }
  };
  let s = C5(e.invoices, "upcoming");
  if (!s) return null;
  let o = UO(s, e.renewalAt);
  let l = !D1(s);
  let d = o && l && e.campfireRenewalEnabled;
  if (!tl(s.due_at) || s.is_skipped_trueup || d) return null;
  let c = go(s);
  let u = e.org.has_automatic_upcoming_invoice;
  return c && (u || !o) ? {
    id: "org_upcoming_true_up_review",
    notification: !0,
    data: {
      issuedAt: dayjs(s.due_at).toDate()
    }
  } : o && !u ? {
    id: "org_upcoming_renewal_non_automatic",
    notification: !0,
    data: {
      periodStartAt: dayjs(s.period_start_at).toDate()
    }
  } : !ev(s) && l ? {
    id: "org_upcoming_additive_invoice",
    notification: !0,
    data: {
      issuedAt: dayjs(s.due_at).toDate()
    }
  } : {
    id: "org_upcoming_invoice",
    notification: !0,
    data: {
      issuedAt: dayjs(s.due_at).toDate()
    }
  };
}
export function $$l2(e) {
  if (0 === e.invoices.length) return null;
  let t = C5(e.invoices, "upcoming");
  if (!t) return null;
  let r = go(t);
  let {
    groupsUserIsAdminOf
  } = e.userId ? EQ(e.licenseGroups, e.userId, !0) : {
    groupsUserIsAdminOf: []
  };
  let {
    groupsToReview
  } = Cz(groupsUserIsAdminOf, e.invoices);
  return r && groupsToReview.length > 0 ? {
    id: "billing_group_upcoming_true_up",
    notification: !0,
    data: {
      groupsToReview
    }
  } : tl(t.due_at) && !D1(t) && UO(t, e.renewalAt) && "loaded" === e.renewalConfirmed.status && !e.renewalConfirmed.data ? {
    id: "billing_group_upcoming_renewal",
    notification: !0,
    data: {
      periodStartAt: dayjs(t.period_start_at).toDate()
    }
  } : null;
}
export const fq = $$s0;
export const uE = $$o1;
export const ur = $$l2;