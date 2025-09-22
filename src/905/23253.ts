import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { bytesToHex } from "../905/125019";
import { NodePropertyCategory, Fullscreen, TextModificationAction } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getResourceDataOrFallback } from "../905/663269";
import { debugState } from "../905/407919";
import { WB } from "../905/761735";
import { uint8ArrayToBase64, base64ToUint8Array } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { showPickerThunk } from "../figma_app/91703";
import { trackFileEvent } from "../figma_app/314264";
import { B } from "../905/969273";
import { sZ } from "../figma_app/948389";
import { JB } from "../905/843553";
import { fullscreenValue } from "../figma_app/455680";
import { getImageManager, processImageWithThumbnail } from "../figma_app/624361";
import { Mo } from "../905/913055";
import { paintManager } from "../figma_app/385874";
import { AiMeterUsageView } from "../figma_app/43951";
import { qy } from "../figma_app/862289";
import { A as _$$A } from "../905/929620";
import { Vm, ks } from "../figma_app/838407";
export function $$C6(e) {
  let [t, i] = useState("");
  useEffect(() => {
    if (e === qy.RUNNING) {
      let e = setTimeout(() => i(getI18nString("image_ai.processing.long_loading_time")), 1e4);
      let t = setTimeout(() => i(getI18nString("image_ai.processing.extra_long_loading_time")), 2e4);
      return () => {
        clearTimeout(e);
        clearTimeout(t);
      };
    }
    i("");
  }, [e]);
  return t;
}
export class $$T5 extends JB {
  constructor(e, t) {
    super(t?.reportToSentry);
    this.name = this.constructor.name;
    this.message = e;
  }
}
export class $$k1 extends JB {
  constructor(e, t) {
    super(!1);
    this.name = this.constructor.name;
    this.message = e;
    this.remaining = t;
  }
}
export class $$R7 extends JB {
  constructor(e) {
    super(!1);
    this.name = this.constructor.name;
    this.message = e;
  }
}
export class $$N9 extends JB {
  constructor(e) {
    super(!1);
    this.name = this.constructor.name;
    this.message = e;
  }
}
export class $$P2 extends JB {
  constructor(e) {
    super(!1);
    this.name = this.constructor.name;
    this.message = e;
  }
}
export function $$O4({
  node: e,
  hash: t
}) {
  let i = e.fills.find(e => e.image && e.image.hash && uint8ArrayToBase64(e.image.hash) === t);
  if (!i) throw new $$T5("No image paint matching target", {
    reportToSentry: !0
  });
  return i;
}
export async function $$D3(e) {
  if (!e || !e.image || !e.image.hash) throw new $$T5("No image paint available", {
    reportToSentry: !0
  });
  let t = bytesToHex(e.image.hash);
  await getImageManager().imageUploadPromise();
  let i = getImageManager().getSignedUrls([t]);
  let n = i.get(t);
  if (!n && (await new Promise(e => setTimeout(e, 1e3)), !(n = (i = getImageManager().getSignedUrls([t])).get(t)))) throw new $$T5("No image URL available", {
    reportToSentry: !0
  });
  return n;
}
let L = {
  upscale_image: "upscale_image",
  bg_removal: "remove_background"
};
let F = async ({
  name: e,
  needed: t
}) => {
  let i = WB();
  let n = debugState.getState();
  let r = n.openFile?.key;
  i && r && (await new Promise((n, a) => {
    let s = i.subscribe(AiMeterUsageView, {
      fileKey: r
    }, i => {
      if ("loaded" === i.status) {
        s?.();
        let r = getResourceDataOrFallback(i.data.aiMeterUsage);
        let o = L[e];
        for (let e of r?.filter(e => e.name === o) ?? []) {
          let i = Number(e.remaining);
          if (i < t) {
            a(new $$k1("Not enough usages remaining", i));
            return;
          }
        }
        n();
      } else "loading" !== i.status && (s?.(), n());
    });
  }));
};
export async function $$M0({
  source: e,
  targets: t,
  name: i,
  suffix: n,
  action: r,
  modifyPaint: a
}) {
  let d = debugState.getState();
  let u = new Map();
  for (let e of t) {
    let t = getSingletonSceneGraph().get(e.guid);
    t && u.set(e.hash, [...(u.get(e.hash) || []), t]);
  }
  let m = {
    source: e,
    node_count: t.length,
    image_count: u.size
  };
  let A = {
    too_large_error_count: 0,
    too_small_error_count: 0,
    already_max_upscaled_error_count: 0,
    total_error_count: 0
  };
  trackFileEvent(`${i}_started`, d.openFile?.key, d, m);
  let E = performance.now();
  let x = {};
  let S = [];
  try {
    if (u.size > 1 && (await F({
      name: i,
      needed: u.size
    })), await Promise.allSettled(Array.from(u.entries()).map(async ([e, l]) => {
      try {
        l.forEach(e => {
          x[e.guid] = $$j8(e);
        });
        let d = await r({
          hash: e,
          nodes: l,
          isBatch: t.length > 1
        });
        let u = base64ToUint8Array(d);
        let m = await processImageWithThumbnail(u, "image/png", `${i} ${n}`);
        l.forEach(t => {
          (function ({
            node: e,
            image: t,
            previousHash: i,
            modifyPaint: n
          }) {
            e.isAlive && (permissionScopeHandler.ai("image-modification", () => {
              let r = e.fills.findIndex(e => "IMAGE" === e.type && e.image?.hash && uint8ArrayToBase64(e.image.hash) === i);
              Mo(e, "fill-paint-data").forEach(e => {
                if (-1 !== r) {
                  let i = {
                    ...e.fills[r]
                  };
                  let a = [...e.fills];
                  n && n(i);
                  a.splice(r + 1, 0, i);
                  e.fills = a;
                  fullscreenValue.updateAppModel({
                    currentSelectedProperty: {
                      type: NodePropertyCategory.FILL,
                      indices: [r + 1]
                    }
                  });
                  e.setFillPaintEnabled(r, !1);
                  e.setImageInFillPaint(t, r + 1);
                  (function (e) {
                    if (debugState.getState().mirror.appModel.currentSelectedProperty.type !== NodePropertyCategory.FILL) return;
                    let t = debugState.getState().pickerShown;
                    if (!t) return;
                    let {
                      initialX,
                      initialY
                    } = t;
                    void 0 !== initialX && void 0 !== initialY && debugState.dispatch(showPickerThunk({
                      id: e,
                      initialX,
                      initialY,
                      data: {
                        isInStyleModal: !1
                      }
                    }));
                  })(paintManager.getId(r + 1, NodePropertyCategory.FILL, "paint"));
                } else e.insertImageInFillPaint(t);
              });
            }), Fullscreen && (Fullscreen.requestNextCommitMergeWithPrevious(TextModificationAction.AI_IMAGE_MODIFICATION), Fullscreen.triggerAction("commit", {})));
          })({
            node: t,
            image: m,
            previousHash: e,
            modifyPaint: a
          });
          S.push({
            guid: t.guid
          });
        });
      } catch (e) {
        e instanceof $$R7 ? A.too_large_error_count++ : e instanceof $$N9 ? A.too_small_error_count++ : e instanceof $$P2 && A.already_max_upscaled_error_count++;
        A.total_error_count++;
        l.forEach(t => {
          S.push({
            guid: t.guid,
            error: e
          });
        });
      } finally {
        l.forEach(e => {
          x[e.guid]?.();
        });
      }
    })), S.every(e => e.error)) {
      let e = S[0]?.error;
      if (S.every(t => t.error?.message === e?.message)) throw e;
      throw new $$T5("All images failed to modify", {
        reportToSentry: !0
      });
    }
    trackFileEvent(`${i}_completed`, d.openFile?.key, d, {
      total_time_ms: performance.now() - E,
      ...m,
      ...A
    });
    return {
      modifiedNodes: S
    };
  } catch (t) {
    let e = sZ(t);
    t instanceof $$k1 && (e = B.METER_EXCEEDED);
    trackFileEvent(`${i}_failed`, d.openFile?.key, d, {
      total_time_ms: performance.now() - E,
      reason: e,
      ...m,
      ...A
    });
    return t;
  } finally {
    Object.values(x).forEach(e => e());
  }
}
export function $$j8(e) {
  let t = Mo(e, "fill-paint-data");
  t.forEach(e => {
    Vm(e.guid, jsx(_$$A, {}));
  });
  return () => {
    t.forEach(e => {
      ks(e.guid);
    });
  };
}
export const Cj = $$M0;
export const ME = $$k1;
export const PE = $$P2;
export const VG = $$D3;
export const XJ = $$O4;
export const fk = $$T5;
export const gg = $$C6;
export const jM = $$R7;
export const qY = $$j8;
export const zs = $$N9;