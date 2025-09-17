import { sha1Hex } from "../905/125019";
import { ServiceCategories as _$$e } from "../905/165054";
import { PluginModalType, documentStateTsApi, ImageCppBindings, ImageExportType, Fullscreen, SceneGraphTsApi, StateSourceType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import o from "../vendor/656470";
import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { isSupportShareEmail, isFigmaEmail } from "../figma_app/416935";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { logInfo } from "../905/714362";
import { XHR } from "../905/910117";
import { v as _$$v } from "../905/479136";
import { n as _$$n } from "../figma_app/339971";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { createOptimistThunk } from "../905/350402";
import { VQ, Dc as _$$Dc, hf, Mt } from "../905/445022";
import { Jr } from "../figma_app/624361";
import { xK } from "../905/125218";
import { VI } from "../figma_app/623300";
import { h as _$$h } from "../905/44234";
import { fileApiHandler } from "../figma_app/787550";
import { fullscreenValue } from "../figma_app/455680";
import { handleLoadAllPagesWithVersionCheck } from "../905/807667";
var l = o;
export let $$O1 = {
  downloadFile(e, t = null) {
    let r = document.createElement("a");
    r.setAttribute("href", e);
    t && (r.download = t);
    document.body.appendChild(r);
    r.click();
    document.body.removeChild(r);
  },
  async addAssetsToZip(e, t, r, n, i) {
    let a = [];
    let s = [];
    let o = {};
    let l = {};
    if (0 === t.length && 0 === r.size) return;
    async function d(t) {
      let r = 2e3;
      for (;;) try {
        return await t();
      } catch (t) {
        if (e()) return;
        await new Promise(e => setTimeout(e, r));
        r < 32e3 && (r *= 2);
      }
    }
    for (let r = 0; r < t.length && !e(); r += 100) await d(async () => {
      let e = await XHR.post(`/file/${n}/image/batch`, {
        sha1s: t.slice(r, r + 100)
      });
      a = a.concat(Object.keys(e.data.meta.s3_urls));
      o = {
        ...o,
        ...e.data.meta.s3_urls
      };
    });
    r.size > 0 && (await d(async () => {
      let e = (await fileApiHandler.getVideos({
        fileKey: n
      })).data.meta.videos;
      for (let t in e) r.has(t) && (l[t] = e[t]);
      s = Object.keys(l);
    }));
    let c = a.length + s.length;
    let u = c;
    R(c, c);
    let p = [];
    async function _(t) {
      for (; t.nextIdx < t.queue.length && !e();) {
        let r = t.queue[t.nextIdx];
        t.nextIdx++;
        await d(async () => {
          let n = (await XHR.crossOriginGetAny(t.urls[r], null, {
            responseType: "blob"
          })).response;
          if (R(--c, u), e()) return;
          let a = await _$$v();
          i.zipPromise = i.zipPromise.then(() => i.zipWriter.add(`${t.prefix}/${r}`, new a.BlobReader(n), {
            level: 0
          }));
        });
      }
    }
    let h = {
      prefix: "images",
      queue: a,
      nextIdx: 0,
      urls: o
    };
    for (let e = 0; e < 5; e++) p.push(_(h));
    p.push(_({
      prefix: "videos",
      queue: s,
      nextIdx: 0,
      urls: l
    }));
    await Promise.all(p);
  }
};
function R(e, t) {
  debugState.dispatch(VQ({
    pendingImageDownload: e,
    totalImages: t
  }));
}
function L(e, t, r) {
  let n = debugState.dispatch;
  let i = debugState.getState();
  let a = i.mirror.appModel;
  let s = i.saveAsState.waitTime;
  let o = VI(a.pagesList);
  let l = 2e4 - s;
  let d = !navigator.onLine || l <= 0;
  n(M({
    mode: e,
    pagesAllLoaded: o,
    showSkipButton: d,
    completeSaveAction: t,
    cancelCallback: r
  }));
  d || setTimeout(() => {
    n(F({
      mode: e,
      pagesAllLoaded: o,
      showSkipAfterWaitingMs: 2e4,
      completeSaveAction: t,
      cancelCallback: r
    }));
  }, l);
}
async function P(e, t, r) {
  let o;
  let c = _$$v();
  let h = debugState.dispatch;
  let m = debugState.getState();
  let f = !1;
  let T = () => {};
  let I = !1;
  let S = () => {};
  let A = new Promise(e => {
    S = e;
  });
  let N = new Promise(e => {
    T = e;
  });
  let C = () => {
    T();
    f = !0;
  };
  let R = 0;
  let P = 0;
  function D() {
    return {
      downloadSkipped: f,
      attemptId: t,
      canceled: I,
      reason: "save-as",
      exportV2: !0,
      imageCount: R,
      videoCount: P,
      loadId: xK.loadID()
    };
  }
  let k = () => {
    S();
    I = !0;
    trackEventAnalytics("File Export V2 Canceled", D());
  };
  L(_$$h.SaveLocalFile, C, k);
  let M = handleLoadAllPagesWithVersionCheck(PluginModalType.SAVE_LOCAL_COPY);
  M.catch(() => {
    reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("saveAs: waitForAllPagesPromise rejected"));
    h(VisualBellActions.dequeue({
      matchType: "save-as-progress"
    }));
    h(VisualBellActions.enqueue({
      error: !0,
      message: getI18nString("visual_bell.save_as_error")
    }));
  });
  await Promise.race([M, A, N]);
  h(VisualBellActions.dequeue({
    matchType: "save-as-progress"
  }));
  let F = documentStateTsApi.getMutableActiveDocument();
  let j = ImageCppBindings.findImagesUnder(F, ["0:0"], ImageExportType.ALL);
  let U = {};
  let B = [];
  for (let e of j) {
    let t = ImageCppBindings.getCompressedImage(e);
    t ? U[e] = t : B.push(e);
  }
  let G = new Set(ImageCppBindings.findAllVideos());
  if (R = j.length, P = G.size, I) return;
  h(VisualBellActions.enqueue({
    type: "save-as-actual",
    message: getI18nString("visual_bell.saving"),
    icon: VisualBellIcon.SPINNER
  }));
  await new Promise(e => setTimeout(e, 0));
  let V = Fullscreen.attemptActiveDocumentSave(t);
  if (!V) return;
  let H = await c;
  let z = new H.ZipWriter(new H.BlobWriter("application/zip"));
  async function W() {
    if (!V) return;
    let t = l()(Array.from(Fullscreen.getDeveloperRelatedLinks().values()));
    for (let r in await z.add("canvas.fig", new H.Uint8ArrayReader(V.canvas), {
      level: 0
    }), await z.add("thumbnail.png", new H.Uint8ArrayReader(V.thumbnail), {
      level: 0
    }), await z.add("meta.json", new H.TextReader(JSON.stringify({
      client_meta: JSON.parse(V.clientMeta),
      file_name: e.name,
      developer_related_links: t
    }))), await z.add("images", null, {
      directory: !0
    }), U) {
      let e = U[r];
      await z.add(`images/${r}`, new H.Uint8ArrayReader(e), {
        level: 0
      });
    }
  }
  h(VisualBellActions.dequeue({
    matchType: "save-as-actual"
  }));
  f || L(_$$h.SaveLocalFile, C, k);
  let K = {
    zipWriter: z,
    zipPromise: W()
  };
  if (getFeatureFlags().export_image_download_logging && trackEventAnalytics("Image Download For Export", {
    stage: "start",
    ...D()
  }), await Promise.race([$$O1.addAssetsToZip(() => f || I, B, G, e.key, K), N, A]), getFeatureFlags().export_image_download_logging && trackEventAnalytics("Image Download For Export", {
    stage: "finished",
    ...D(),
    userId: m.user?.id,
    fileKey: e.key,
    fileId: e.id,
    orgId: e.parentOrgId
  }), h(VisualBellActions.dequeue({
    matchType: "save-as-progress"
  })), I) return;
  h(VisualBellActions.enqueue({
    type: "save-as-actual",
    message: getI18nString("visual_bell.saving"),
    icon: VisualBellIcon.SPINNER
  }));
  await K.zipPromise;
  let Y = await z.close();
  if (isSupportShareEmail(m.user?.email)) {
    let e = "";
    let t = m.authedUsers?.byId;
    if (t) {
      Object.values(t).forEach(t => {
        let r = t.email;
        isFigmaEmail(r) && !isSupportShareEmail(r) && (e = r);
      });
      let r = new FileReader();
      r.onloadend = () => {
        let t = r.result;
        let i = sha1Hex(new Uint8Array(t));
        trackEventAnalytics("Support Share Download", {
          sha1Hash: i,
          internalEmail: e
        });
      };
      r.readAsArrayBuffer(Y);
    }
  }
  let $ = URL.createObjectURL(Y);
  let X = Fullscreen.fileExtension();
  let q = `${e.name}${X}`;
  let J = getI18nString("save_as_actions.save_partial_file_name_suffix", {
    date: new Date().toLocaleDateString().replace(/_|\//g, "-")
  });
  let Z = `${e.name} - ${J}${X}`;
  $$O1.downloadFile($, f ? Z : q);
  URL.revokeObjectURL($);
  o = r === _$$h.Export ? "export" : r === _$$h.SaveLocalFile ? "save" : r === _$$h.CopyAsPNG || r === _$$h.CopyAsSVG ? "copy" : "non-export-related";
  trackEventAnalytics("File Export V2 Completed", {
    ...D(),
    exportEvent: o,
    fileName: q,
    fileKey: e.key,
    orgId: e.parentOrgId,
    userId: m.user?.id
  });
  h(VisualBellActions.dequeue({
    matchType: "save-as-actual"
  }));
}
export function $$D3(e, t, r) {
  $$k0(_$$h.Export, e, t, r, [SceneGraphTsApi?.getCurrentPage(StateSourceType.REDUX, documentStateTsApi.getActiveDocument()) || ""], "export-all-frames-to-pdf");
}
export async function $$k0(e, t, r, n, o, l, u) {
  logInfo("initiateSaveAs", "begin", {
    completeSaveAction: n,
    nodesToLoad: o,
    mode: e
  });
  r(_$$Dc());
  let g = debugState.getState();
  let f = g.saveAsState.attemptId;
  if (getFeatureFlags().antiabuse_file_download_check) try {
    let e = g.openFile?.key || "";
    let t = await XHR.post(`/api/file_download_log/${e}`, {
      is_desktop: !!desktopAPIInstance
    });
    t.data?.meta?.download_err && (await fileApiHandler.getWAFValidator());
  } catch (e) {
    if (429 === e.status) throw e;
    trackEventAnalytics("File Download Log Error", {
      attemptId: f,
      error: e
    });
  }
  if (e === _$$h.SaveLocalFile && (trackEventAnalytics("File Export Initiated", {
    attemptId: f,
    reason: l,
    exportV2: !0,
    loadId: xK.loadID()
  }), g.openFile)) {
    P(g.openFile, f, e);
    return;
  }
  L(e, n);
  let E = e === _$$h.SaveLocalFile ? ImageExportType.ALL : ImageExportType.NON_ANIMATED_ONLY;
  getFeatureFlags().export_image_download_logging && trackEventAnalytics("Image Download For Export", {
    stage: "start",
    attemptId: f,
    reason: l
  });
  await Jr().loadAllImagesUnder(o, E, l, R);
  getFeatureFlags().export_image_download_logging && trackEventAnalytics("Image Download For Export", {
    stage: "finished",
    attemptId: f,
    reason: l,
    userId: g.user?.id,
    fileKey: g.openFile?.key,
    fileId: g.openFile?.id,
    orgId: g.openFile?.parentOrgId
  });
  try {
    debugState.getState().saveAsState.startTime ? (r(j({
      mode: e,
      completeSaveAction: n,
      settings: u
    })), r(hf({
      skipped: !1
    }))) : trackEventAnalytics("File Export V1 Canceled", {
      attemptId: f
    });
  } catch (e) {
    reportError(_$$e.SCENEGRAPH_AND_SYNC, e);
  }
}
let M = createOptimistThunk((e, t) => {
  let r = {
    text: getI18nString("save_as_actions.cancel"),
    action: t.cancelCallback || (() => {
      e.dispatch(Mt());
    })
  };
  let n = function (e, t, r) {
    switch (e) {
      case _$$h.SaveLocalFile:
        if (t) return getI18nString("save_as_actions.save_partial_file");
        return r ? getI18nString("save_as_actions.save_without_images") : getI18nString("save_as_actions.save_partial_file");
      case _$$h.Export:
        if (t) return null;
        return r ? getI18nString("save_as_actions.export_without_images") : getI18nString("save_as_actions.export_without_content");
      default:
        return null;
    }
  }(t.mode, navigator.onLine, t.pagesAllLoaded);
  let i = null;
  n && (i = {
    text: n,
    action: () => {
      trackEventAnalytics("image_loading_canceled", {
        mode: t.mode
      });
      e.dispatch(j({
        mode: t.mode,
        completeSaveAction: t.completeSaveAction
      }));
      e.dispatch(hf({
        skipped: !0
      }));
    }
  });
  let a = {
    type: "save-as-progress",
    progressKey: "save-as",
    message: function (e, t) {
      return e ? t ? getI18nString("save_as_actions.downloading_images") : getI18nString("save_as_actions.downloading_content") : t ? getI18nString("save_as_actions.cannot_download_images") : getI18nString("save_as_actions.cannot_download_content");
    }(navigator.onLine, t.pagesAllLoaded),
    icon: VisualBellIcon.PROGRESS,
    button: r
  };
  e.dispatch(VisualBellActions.enqueue({
    ...a,
    button: i ? {
      primary: r,
      secondary: i
    } : r
  }));
});
let F = createOptimistThunk((e, t) => {
  let r = e.getState();
  if (!r.visualBell.find(e => "save-as-progress" === e.type) || !r.saveAsState?.startTime) return;
  let n = (r.saveAsState.waitTime || 0) + Date.now() - r.saveAsState.startTime;
  (!navigator.onLine || n > t.showSkipAfterWaitingMs) && (e.dispatch(VisualBellActions.clearAllExcept(["plugins-status"])), e.dispatch(M({
    mode: t.mode,
    pagesAllLoaded: t.pagesAllLoaded,
    showSkipButton: !0,
    completeSaveAction: t.completeSaveAction,
    cancelCallback: t.cancelCallback
  })));
});
let j = createOptimistThunk((e, t) => {
  e.dispatch(VisualBellActions.clearAllExcept(["plugins-status"]));
  let r = e.getState().saveAsState;
  e.dispatch(_$$n.set({
    message: function (e) {
      switch (e) {
        case _$$h.SaveLocalFile:
          return getI18nString("visual_bell.saving");
        case _$$h.Export:
          return getI18nString("visual_bell.exporting");
        case _$$h.CopyAsPNG:
          return getI18nString("save_as_actions.copy_as_png_progress");
        case _$$h.CopyAsSVG:
          return getI18nString("save_as_actions.copy_as_svg_progress");
        case _$$h.RasterizeSelection:
          return getI18nString("save_as_actions.rasterize_selection_progress");
      }
    }(t.mode),
    showLoadingSpinner: !1,
    callback: () => {
      "string" == typeof t.completeSaveAction ? fullscreenValue.triggerAction(t.completeSaveAction, {
        source: "menu",
        attemptId: r.attemptId,
        settings: t.settings
      }) : t.completeSaveAction();
    }
  }));
});
export const Dc = $$k0;
export const hI = $$O1;
export const hV = _$$h;
export const mU = $$D3;