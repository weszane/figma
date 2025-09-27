import { SimpleFuseSearch } from "../905/81982";
var $$s2 = (e => (e[e.SEARCH = 0] = "SEARCH", e[e.FILTER = 1] = "FILTER", e))($$s2 || {});
export let $$i3 = new SimpleFuseSearch([], {
  threshold: .1,
  matchAllTokens: !0,
  tokenize: !1,
  distance: 300,
  keys: [{
    name: "name",
    weight: 1
  }, {
    name: "email",
    weight: 1
  }]
});
export var $$r1 = (e => (e.MORE_SEVEN_DAYS = "more_than_seven_days", e.MORE_THIRTY_DAYS = "more_than_thirty_days", e.MORE_THREE_MONTHS = "more_than_three_months", e))($$r1 || {});
export let $$l0 = {
  lastActiveFilter: null,
  designPaidStatusFilter: null,
  figjamPaidStatusFilter: null,
  seatTypeFilter: void 0,
  billingIntervalFilter: void 0
};
export const Ok = $$l0;
export const UW = $$r1;
export const Vc = $$s2;
export const d2 = $$i3;