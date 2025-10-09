import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { trackFileEventWithStore } from "../figma_app/901889";
import { createOptimistThunk } from "../905/350402";
import { addPluginToRecentsThunk } from "../figma_app/147952";
import { usePublishedPlugins } from "../figma_app/844435";
import { trackFileEvent } from "../figma_app/314264";
import { updateDevHandoffCodeLanguage } from "../figma_app/741237";
import { getUserId } from "../905/372672";
import { getUserOrAnonymousId } from "../905/506024";
import { getPluginByFileId } from "../figma_app/300692";
import { hasLocalFileId } from "../figma_app/155287";
import { FDocumentType } from "../905/862883";
import { normalizeCodegenLanguage } from "../figma_app/655139";
function _(e) {
  let t = normalizeCodegenLanguage(e);
  updateDevHandoffCodeLanguage(t);
  return t;
}
export let $$A0 = createOptimistThunk((e, t) => {
  let i = e.getState();
  let {
    plugin,
    codeLanguage
  } = t;
  let a = getUserOrAnonymousId(i);
  let s = _(codeLanguage);
  "published-plugin" === s.type && plugin && !hasLocalFileId(plugin) && e.dispatch(addPluginToRecentsThunk({
    storeInRecentsKey: FDocumentType.Handoff,
    id: plugin.plugin_id,
    version: plugin.version,
    currentUserId: a
  }));
  trackFileEvent("Dev Mode Language Changed", i.openFile?.key, i, {
    languageType: s.type,
    languageId: s.id
  });
});
export function $$y1() {
  let e = trackFileEventWithStore();
  let t = usePublishedPlugins();
  let i = useDispatch<AppDispatch>();
  let s = getUserId() ?? void 0;
  return useCallback(n => {
    let r = _(n);
    if ("published-plugin" === r.type) {
      let e = getPluginByFileId({
        idToSearch: r.id,
        localExtensionsByFileId: void 0,
        publishedExtensions: t
      });
      e && !hasLocalFileId(e) && i(addPluginToRecentsThunk({
        storeInRecentsKey: FDocumentType.Handoff,
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
  let e = trackFileEventWithStore();
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