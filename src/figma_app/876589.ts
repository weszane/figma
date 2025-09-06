import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { A } from "../vendor/90566";
import { trackEventAnalytics } from "../905/449184";
import { IT } from "../figma_app/566371";
import { Oc } from "../figma_app/552876";
import { V } from "../figma_app/860297";
export let $$d0 = atom([]);
export function $$c2(e) {
  let t = useAtomWithSubscription($$d0);
  let [r] = IT(V(e), {
    enabled: 0 === t.length
  });
  return t.length > 0 ? {
    status: "loaded",
    dnsRecords: t
  } : "loading" === r.status ? {
    status: "loading"
  } : {
    status: "loaded",
    dnsRecords: r.data ?? []
  };
}
export function $$u1(e) {
  let t = Oc();
  return A(() => {
    trackEventAnalytics("sites_change_webpage_metadata", {
      fieldName: e,
      productType: t ? "figmake" : "sites"
    });
  }, 5e3, {
    leading: !0,
    trailing: !1
  });
}
export const AP = $$d0;
export const OG = $$u1;
export const wh = $$c2;