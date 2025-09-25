import { dayjs } from "../905/920142";
import { Zy, vn, Ph } from "../figma_app/109538";
import { showModalHandler } from "../905/156213";
import { getFutureDateOrNull } from "../figma_app/345997";
if (443 == require.j) {}
var $$$$l1 = (e => (e.ADD_ANNUAL_PLAN = "add_annual_plan", e.ADJUST_COTERM_SEATS = "adjust_coterm_seats", e.ADJUST_RENEWAL_SEATS = "adjust_renewal_seats", e.TRIAL_READ_ONLY = "trial_read_only", e))($$$$l1 || {});
export function $$o0(e) {
  if (e.hasOpenInvoice || !e.teamBillingSummary.monthly_subscription) return null;
  let t = e.teamBillingSummary.annual_subscription;
  if (!t) return {
    id: "add_annual_plan",
    perform: ({
      dispatch: e
    }) => {
      e(showModalHandler({
        type: Zy
      }));
    }
  };
  let a = t?.trial_end ? getFutureDateOrNull(t.trial_end, e.currentDate) : null;
  return a ? {
    id: "trial_read_only",
    trialEnd: a
  } : dayjs(e.currentDate).isAfter(dayjs(t.current_period_end).subtract(30, "days")) ? {
    id: "adjust_renewal_seats",
    perform: ({
      dispatch: e
    }) => {
      e(showModalHandler({
        type: vn,
        data: {
          renewalDate: dayjs(t.current_period_end).toDate()
        }
      }));
    }
  } : {
    id: "adjust_coterm_seats",
    perform: ({
      dispatch: e
    }) => {
      e(showModalHandler({
        type: Ph
      }));
    }
  };
}
export const l = $$o0;
export const m = $$$$l1;