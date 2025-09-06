import { jsx } from "react/jsx-runtime";
import i from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { getI18nString } from "../905/303541";
import { A5 } from "../figma_app/209680";
import { Jm } from "../figma_app/387599";
import { C } from "../905/237873";
import { n as _$$n } from "../5430/859486";
import { km, u9 } from "../5430/184698";
var n = i;
function _() {
  return [{
    key: C.ALL,
    label: getI18nString("community.landing_page.sort.paid_and_free")
  }, {
    key: C.PAID,
    label: getI18nString("community.landing_page.sort.paid")
  }, {
    key: C.FREE,
    label: getI18nString("community.landing_page.sort.free")
  }];
}
export function $$p1({
  onUpdate: e,
  value: t,
  size: r
}) {
  return jsx(A5, {
    name: getI18nString("community.landing_page.dropdown_filter__paid"),
    onUpdate: ([t]) => {
      e(t);
    },
    adtlClassName: n()(km, "sm" === r && u9),
    initialValues: [t],
    options: [_()]
  });
}
export function $$h0({
  context: e,
  price: t,
  onUpdate: r
}) {
  let i = _();
  let n = Jm();
  return jsx(_$$n, {
    context: e,
    defaultOption: getI18nString("community.landing_page.sort.paid_and_free"),
    selectedOption: t,
    options: i,
    searchParamUpdate: e => ({
      price: e
    }),
    onOptionSelect: (e, t) => {
      trackEventAnalytics("price_filter_changed", {
        price: e,
        from: t,
        search_session_id: n
      });
    },
    onUpdate: r ? e => {
      r(e);
    } : void 0
  });
}
export const OQ = $$h0;
export const g5 = $$p1;