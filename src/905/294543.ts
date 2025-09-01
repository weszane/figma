import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { U } from "../figma_app/901889";
import { nF } from "../905/350402";
import { gU } from "../figma_app/147952";
import { cW } from "../figma_app/844435";
import { ds } from "../figma_app/314264";
import { bw } from "../figma_app/741237";
import { TA } from "../905/372672";
import { s as _$$s } from "../905/506024";
import { DM } from "../figma_app/300692";
import { ZQ } from "../figma_app/155287";
import { $A } from "../905/862883";
import { XP } from "../figma_app/655139";
function _(e) {
  let t = XP(e);
  bw(t);
  return t;
}
export let $$A0 = nF((e, t) => {
  let i = e.getState();
  let {
    plugin,
    codeLanguage
  } = t;
  let a = _$$s(i);
  let s = _(codeLanguage);
  "published-plugin" === s.type && plugin && !ZQ(plugin) && e.dispatch(gU({
    storeInRecentsKey: $A.Handoff,
    id: plugin.plugin_id,
    version: plugin.version,
    currentUserId: a
  }));
  ds("Dev Mode Language Changed", i.openFile?.key, i, {
    languageType: s.type,
    languageId: s.id
  });
});
export function $$y1() {
  let e = U();
  let t = cW();
  let i = wA();
  let s = TA() ?? void 0;
  return useCallback(n => {
    let r = _(n);
    if ("published-plugin" === r.type) {
      let e = DM({
        idToSearch: r.id,
        localExtensionsByFileId: void 0,
        publishedExtensions: t
      });
      e && !ZQ(e) && i(gU({
        storeInRecentsKey: $A.Handoff,
        id: e.plugin_id,
        version: e.version,
        currentUserId: s
      }));
    }
    e("Dev Mode Language Changed", {
      languageType: r.type,
      languageId: r.id
    });
  }, [s, i, t, e]);
}
export function $$b2() {
  let e = U();
  return useCallback(t => {
    let i = _(t);
    e("Dev Mode Language Changed", {
      languageType: i.type,
      languageId: i.id,
      defaulting: !0
    });
    return i;
  }, [e]);
}
export const dX = $$A0;
export const gB = $$y1;
export const zL = $$b2;