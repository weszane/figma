import { X3B, bOM } from "../figma_app/763686";
import { nF } from "../905/350402";
import { AS, to } from "../905/156213";
import { ow } from "../figma_app/198840";
import { FTemplateCategoryType } from "../figma_app/191312";
import { F0 } from "../905/820492";
import { VS } from "../figma_app/49598";
export let $$c0 = nF(async (e, {
  fileKey: t,
  entryPoint: i,
  isEditHubFilePageMode: r = !1,
  isFullscreenOpen: c = !0,
  canvasThumbnailPromise: u,
  source: p
}, {
  liveStore: m
}) => {
  let h = e.getState();
  h.modalShown?.type === F0.type && e.dispatch(AS());
  let g = h.publishingHubFiles[t];
  if (null == t || g) {
    let i = {
      ...g?.metadata
    };
    let a = await m.fetchFile(t);
    a?.editor_type === "whiteboard" ? i.viewerMode = FTemplateCategoryType.WHITEBOARD : r || g?.metadata?.viewerMode !== FTemplateCategoryType.PROTOTYPE || X3B.firstPagePrototypeStatus() === bOM.VALID || (i.viewerMode = FTemplateCategoryType.CANVAS);
    e.dispatch(VS({
      id: t,
      metadata: i
    }));
  } else e.dispatch(VS({
    id: t,
    metadata: ow(h, t, r, c)
  }));
  e.dispatch(to({
    type: F0,
    data: {
      fileKey: t,
      isEditHubFilePageMode: r,
      isFullscreenOpen: c,
      canvasThumbnailPromise: u,
      entryPoint: i,
      source: p
    }
  }));
});
export const t = $$c0;