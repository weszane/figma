import { jsx } from "react/jsx-runtime";
import { E } from "../905/53857";
import { getI18nString } from "../905/303541";
import { isOverdue, InvoiceState, InvoiceReviewState } from "../figma_app/934005";
import { Dc } from "../469e6e40/616503";
if (443 == require.j) {}
export function $$o0(e, t) {
  if (isOverdue(e, t)) return {
    variant: "dangerOutline",
    children: getI18nString("plan_invoices.status_overdue")
  };
  switch (e.state) {
    case InvoiceState.PENDING:
      return {
        variant: "defaultOutline",
        children: Dc(e) === InvoiceReviewState.LOCKED ? getI18nString("plan_invoices.status_locked") : getI18nString("plan_invoices.status_pending")
      };
    case InvoiceState.PAID:
      return {
        variant: "successOutline",
        children: getI18nString("plan_invoices.status_paid")
      };
    case InvoiceState.OPEN:
      return {
        variant: "brandOutline",
        children: getI18nString("plan_invoices.status_open")
      };
    default:
      e.state;
      return null;
  }
}
export function $$d1(e) {
  let t = $$o0(e.invoice, e.currentDate);
  return t ? jsx(E, {
    ...t,
    "data-testid": e["data-testid"]
  }) : null;
}
export const V = $$o0;
export const Z = $$d1;