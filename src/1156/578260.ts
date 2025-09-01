import { useState } from "react";
import { lV } from "../figma_app/617606";
import { E } from "../1156/735202";
import { b as _$$b } from "../905/690073";
import { ServiceCategories as _$$e } from "../905/165054";
import { Fullscreen } from "../figma_app/13528";
import { ChatMessageType } from "../figma_app/175377";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { getInitialOptions } from "../figma_app/169182";
import { $D } from "../905/11";
import { v as _$$v } from "../905/479136";
import { em } from "../figma_app/297957";
import { q5 } from "../figma_app/516028";
import { Nm } from "../figma_app/202307";
import { E as _$$E } from "../figma_app/626557";
import { nc } from "../figma_app/570630";
import { O } from "../1156/531541";
import { z9 } from "../1156/354790";
import { ry } from "../figma_app/408883";
import { O as _$$O } from "../905/273186";
export let $$C2 = new _$$b("EmptyStateChatMessageEmitter");
export async function $$E1(e, t, n, r) {
  if (!n || !r || !Fullscreen) return;
  let a = await _$$v();
  let g = await fetch(e);
  let p = new a.ZipReader(new a.BlobReader(await g.blob()));
  let y = await p.getEntries();
  let v = await Promise.all(y.map(async e => {
    let t = e.filename.startsWith("/") ? e.filename : `/${e.filename}`;
    if (function (e) {
      if (!e.startsWith("/src/")) return !1;
      let t = e.split("/").pop();
      return !(!t || 1 > t.indexOf("."));
    }(t)) {
      let n = await e.getData?.(new a.TextWriter());
      return [t.replace("/src/", "/"), n];
    }
  })).then(e => Object.fromEntries(e.filter(e => void 0 !== e)));
  E([{
    id: Fullscreen.generateUniqueID(),
    type: ChatMessageType.ASSISTANT_MESSAGE,
    userId: getInitialOptions().user_data?.id || "",
    textContent: JSON.stringify({
      modelConfigVersion: "",
      mode: "summary",
      plainText: t
    }),
    sentAt: Date.now(),
    toolCalls: [],
    toolResults: [],
    sentAt64: Date.now().toString()
  }], r, v, n, lV.FIGMAKE, {
    multi_file_code_layers: getFeatureFlags().multi_file_code_layers,
    bake_canvas: getFeatureFlags().bake_canvas
  }, {
    swapCacheWithFiles: nc,
    trackSystemEditedSession: e => {
      let t = _$$O.get(e.guid);
      t && (t.hasSystemEdited = !0);
    },
    setCodeLastEditedBy: e => {
      zl.set(Nm(e), "assistant");
    },
    createCodeSnapshot: O,
    reportErrorToSentry: e => $D(_$$e.AI_FOR_PRODUCTION, e),
    regenerateAttributions: z9
  });
}
export function $$S0(e, t) {
  let [n, i] = useState(!1);
  let s = em({
    logExposure: !0
  });
  let a = q5();
  let l = ry();
  let o = _$$E(t);
  return {
    showFullWidthEmptyState: a?.canEdit && e && !n && !l && !o?.length && s(),
    requestClose: () => i(!0)
  };
}
export const Lh = $$S0;
export const UP = $$E1;
export const Uy = $$C2;