import { bo } from "../figma_app/903114";
import { showModalHandler } from "../905/156213";
export function $$a0({
  dispatch: e,
  planUser: t,
  currency: i,
  queueFilterCountsRefetch: a,
  nextSeatType: s,
  hideFooter: o
}) {
  e(showModalHandler({
    type: bo,
    data: {
      planUser: t,
      currency: i,
      queueFilterCountsRefetch: a,
      nextSeatType: s,
      hideFooter: o
    }
  }));
}
export const E = $$a0;