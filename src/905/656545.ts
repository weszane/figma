import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { oA } from "../905/663269";
import { analyticsEventManager } from "../905/449184";
import { QO } from "../905/888985";
import { PerfTimer } from "../905/609396";
import { w0 } from "../figma_app/594947";
import { N } from "../905/972754";
import { nF } from "../905/350402";
import { to } from "../905/156213";
import { Eo } from "../figma_app/80990";
import { M } from "../figma_app/155411";
import { kd, Rh, oT } from "../905/291654";
import { FAuthProviderType } from "../figma_app/191312";
import { fy7 } from "../figma_app/43951";
import { T } from "../figma_app/856733";
import { D, n as _$$n } from "../905/347702";
var $$b1 = (e => (e.PLUGIN_INSERT_COMPONENT = "PLUGIN_INSERT_COMPONENT", e.PLUGIN_INSERT_STATE_GROUP = "PLUGIN_INSERT_STATE_GROUP", e.PLUGIN_INSERT_STYLE = "PLUGIN_INSERT_STYLE", e.LIBRARY_SWAP = "LIBRARY_SWAP", e.LOAD_COMPONENT = "LOAD_COMPONENT", e.SWAP_TO_COMPONENT = "SWAP_TO_COMPONENT", e.INSERT_SHARED_COMPONENT = "INSERT_SHARED_COMPONENT", e.INSERT_SHARED_STATE_GROUP = "INSERT_SHARED_STATE_GROUP", e.LOAD_STYLE = "LOAD_STYLE", e.LOAD_VARIABLE = "LOAD_VARIABLE", e.LOAD_VARIABLE_SET = "LOAD_VARIABLE_SET", e))($$b1 || {});
export let $$v2 = nF(async (e, {
  assetLibraryKey: t,
  onInsertAsset: i,
  source: n
}) => {
  let r = e.getState();
  (await w(e.dispatch, t, n, r.userFlags, r.fonts)) && (await i());
});
export async function $$I0(e, t, i, n, r, a) {
  if (await w(e, i, n, r, a)) return Eo.getCanvas(t);
  throw Error("Apple EULA not accepted");
}
let E = D(async e => {
  let t = fy7.Query({
    group: M()
  });
  let i = await QO(t, (e, i) => {
    let n = atomStoreManager.get(t);
    "loaded" === n.status ? e(n) : "errors" === n.status && i("Error loading presetLibraryAtom");
  });
  let n = i?.data?.libraryPresetSubscriptionsV2?.find(t => oA(t.libraryKey) === e);
  return n?.partner_type === FAuthProviderType.APPLE;
});
let x = _$$n(async () => await w0("ui_kits_apple_fonts"));
async function S(e, t, i, r) {
  if (!e || !getFeatureFlags().dse_sf_pro_font) return [];
  let a = (await x()).get("fontToLibraries", {});
  return Object.keys(a).filter(e => {
    if (!(a[e] || []).includes(t)) return !1;
    let n = kd[e];
    if (!n) return !1;
    let s = !!i[n.acceptedUserFlag];
    let o = !!i[n.declinedUserFlag];
    return n.fontFamilies.some(e => Rh(e, r)) && !s && !o;
  });
}
async function w(e, t, i, n, r) {
  let a = new PerfTimer("APPLE_EULA_TIMER", {
    key: N().toString()
  });
  a.start();
  let o = await E(t);
  let d = o && !n.apple_eula_accepted;
  let u = await S(o, t, n, r);
  analyticsEventManager.trackDefinedEvent("preset_libraries.apple_eula_check_performed", {
    duration: a.stop(),
    source: i
  });
  let m = (d ? 1 : 0) + u.length;
  let h = 0;
  if (d && !(await function (e, t = {}) {
    return new Promise(i => {
      e(to({
        type: T,
        showModalsBeneath: !0,
        data: {
          eulaShown: t.eulaShown,
          eulasToShow: t.eulasToShow,
          onAgree: () => {
            i({
              accepted: !0,
              type: "component"
            });
          },
          onDecline: () => {
            i({
              accepted: !1,
              type: "component"
            });
          }
        }
      }));
    });
  }(e, {
    eulasToShow: m,
    eulaShown: ++h
  })).accepted) return !1;
  for (let t of u) {
    var f;
    await (f = {
      eula: t,
      eulasToShow: m,
      eulaShown: ++h,
      trigger: "ui_kit"
    }, oT(e, f).then(e => ({
      accepted: e,
      type: "font"
    })));
  }
  return !0;
}
export const e9 = $$I0;
export const jE = $$b1;
export const vQ = $$v2;