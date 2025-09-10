import { lQ } from "../905/934246";
import { AppStateTsApi } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import s from "../vendor/781591";
import { Mz } from "../vendor/925040";
import { debugState } from "../905/407919";
import { BT } from "../905/686934";
import { ZS } from "../figma_app/519839";
import { Se } from "../905/889062";
import { Ol } from "../905/576221";
import { vQ, p6 } from "../figma_app/803787";
import { StagingStatusEnum } from "../figma_app/633080";
var o = s;
export let $$f3 = Mz([vQ, p6], (e, t) => ({
  publishableComponentNodeIds: e,
  localComponents: Object.values(t)
}));
export function $$_2({
  hasExistingResourceContent: e,
  publishableComponentNodeIds: t,
  localComponents: i
}) {
  let n = t.length > 0;
  let r = i.filter(e => e.status === StagingStatusEnum.CURRENT).length > 0;
  return e || n || r ? e && n && Ol(i) ? [{
    key: "UNPUBLISHING_ALL_COMPONENTS",
    data: {}
  }] : void 0 : [{
    key: "NO_COMPONENTS_TO_PUBLISH",
    data: {}
  }];
}
export async function $$A1({
  publishableComponentNodeIds: e = [],
  publishScope: t,
  hubFileId: i,
  savepointDescription: r
}) {
  if (e.length > 0) return await new Promise((s, l) => {
    debugState.dispatch(ZS({
      savepointDescription: r,
      itemsToPublish: new Set(e),
      publishScope: t,
      hubFileId: i,
      hideModalOnPublishRequestFinish: !1,
      ...atomStoreManager.set(BT, {
        onPublishSuccess: e => {
          atomStoreManager.set(BT, void 0);
          s(o()(e, "dispatch"));
        },
        onPublishProgress: lQ,
        onPublishError: e => {
          atomStoreManager.set(BT, void 0);
          l(e);
        }
      })
    }));
  });
}
export async function $$y0() {
  try {
    let e = await b({
      limit: 1
    });
    if (e && e.length > 0) return {
      allMedia: e,
      thumbnailMedium: e[0]
    };
  } catch (e) {}
}
async function b(e = {}) {
  if (!AppStateTsApi) return;
  let t = AppStateTsApi.canvasGrid().canvasGridArray.getCopy();
  let i = e.limit ?? 1 / 0;
  let n = [];
  for (let r of t) for (let t of r) {
    if (n.length >= i) return n;
    let r = await Se(t, {
      fixedWidth: e.fixedWidth,
      fixedHeight: e.fixedHeight,
      thumbnailScalingStrategy: "FIT_WITHIN"
    });
    r && n.push(r);
  }
  return n;
}
export const OA = $$y0;
export const PH = $$A1;
export const PP = $$_2;
export const Pn = $$f3;