import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { ds } from "../figma_app/314264";
import { d1 } from "../905/766303";
import { vO, yc } from "../figma_app/671547";
import { K } from "../905/694400";
import { E } from "../905/695476";
export async function $$h1(e, t, i, s, o) {
  let l;
  let h;
  function g(e, a) {
    return permissionScopeHandler.system("finalize-link-preview-failure", () => !i && a ? {
      status: "success",
      nodeID: Fullscreen.finalizeLinkPreview(a, {
        url: t
      }),
      type: "preview"
    } : (a && Fullscreen.removeLoadingEmbed(a), console.error(e), {
      status: "error",
      error: e
    }));
  }
  if (!navigator.onLine) return g("Could not paste an embed because the browser was offline");
  let f = d1(o)?.key ?? "";
  let _ = vO(t);
  try {
    h = Fullscreen.insertLoadingEmbedInCanvas(encodeURIComponent(t), encodeURIComponent(e));
    ds(yc.ATTEMPT, f, o, {
      entrypoint: s,
      domain: _,
      userId: o.user?.id
    });
    l = (await E.getLinkMetadata({
      text: i ? e : t,
      useEmbedsAllowList: (getFeatureFlags().figjam_embeds_allowlist || !1).toString(),
      useLinkPreviewsV2: (getFeatureFlags().link_previews_v2 || !1).toString()
    })).data.meta;
  } catch (e) {
    return g("Failed to get metadata for the provided text", h);
  }
  return l ? permissionScopeHandler.system("finalize-link-preview", () => {
    switch (l.thumbnailImage && l.thumbnailImageHash && K(l.thumbnailImageHash, new Uint8Array(l.thumbnailImage.data)), l.favicon && l.faviconImageHash && K(l.faviconImageHash, new Uint8Array(l.favicon.data)), ds(yc.SUCCESS, f, o, {
      entrypoint: s,
      domain: _,
      linkRenderType: l.type,
      userId: o.user?.id
    }), l.type) {
      case "preview":
        return {
          status: "success",
          nodeID: Fullscreen.finalizeLinkPreview(h, {
            url: l.url,
            title: l.title,
            description: l.description,
            thumbnailImageHash: l.thumbnailImageHash || void 0,
            thumbnailImageWidth: l.thumbnailImageWidth,
            thumbnailImageHeight: l.thumbnailImageHeight,
            faviconImageHash: l.faviconImageHash || void 0,
            provider: l.provider
          }),
          type: "preview"
        };
      case "embed":
        return {
          status: "success",
          nodeID: Fullscreen.finalizeEmbed(h, {
            url: l.url,
            srcUrl: l.srcUrl,
            originalText: l.originalText,
            embedType: l.embedType,
            title: l.title,
            description: l.description,
            thumbnailImageHash: l.thumbnailImageHash || void 0,
            faviconImageHash: l.faviconImageHash || void 0,
            provider: l.provider,
            width: l.width,
            height: l.height,
            embedVersionId: getFeatureFlags().figjam_embeds_v1 ? l.embedVersionId : "v0"
          }),
          type: "embed"
        };
    }
  }) : g("Failed to get metadata for the provided text", h);
}
export let $$g0 = createOptimistThunk(async (e, {
  clipboardText: t,
  url: i,
  isTextIframe: r,
  entrypoint: a
}) => {
  if ("error" === (await $$h1(t, i, r, a, e.getState())).status) {
    Fullscreen.tryPastingTextFromClipboardAsTextNode(t);
    let i = d1(e.getState())?.key ?? "";
    ds(yc.ERROR, i, e.getState(), {
      entrypoint: a,
      domain: vO(t),
      userId: e.getState().user?.id
    });
    e.dispatch(F.enqueue({
      type: "embed_failed",
      message: getI18nString("whiteboard.embed_actions.embed_failed"),
      timeoutOverride: 5e3,
      error: !0
    }));
  }
});
export const M = $$g0;
export const y = $$h1;