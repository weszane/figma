import { f6 } from "../figma_app/516324";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { NC } from "../905/17179";
import { trackEventAnalytics } from "../905/449184";
import { subscribeAndAwaitData } from "../905/553831";
import { reportError } from "../905/11";
import { logWarning } from "../905/714362";
import { g as _$$g } from "../905/880308";
import { d6, bJ } from "../figma_app/687776";
import { getI18nString } from "../905/303541";
import { gN } from "../figma_app/976345";
import { nF } from "../905/350402";
import { Ce } from "../905/156213";
import { F as _$$F } from "../905/642505";
import { jd } from "../figma_app/528509";
import { W } from "../905/39853";
import { cu, zX, pl, MS } from "../905/615657";
import { Ij } from "../905/902099";
import { FFileType } from "../figma_app/191312";
import { cQi } from "../figma_app/43951";
import { aW, sK } from "../figma_app/598018";
import { kI, Y5, mO, dv, NU } from "../905/163189";
zip.workerScriptsPath = "/js/zip/";
let $$C6 = nF(async e => {
  if (!_$$F) return;
  let t = e.getState();
  if (t.fileImport.isProcessingFile) return;
  e.dispatch($$M5());
  let i = t.fileImport.queue[0];
  if (void 0 === i) return;
  let o = t.fileImport.files[i];
  if (!o || kI(o.name) && t.fileImport.step !== Y5.FILE_IMPORT_WITH_CONFIRMED_PDF || _$$F.hasCanceled()) return;
  if (o.status === mO.FAILURE) {
    e.dispatch(U());
    return;
  }
  e.dispatch($$O10({
    id: i,
    status: mO.BUSY
  }));
  let f = Date.now();
  let _ = o.name.replace(/\.[^\.]+$/, "");
  let I = dv(o.name).toLowerCase();
  let C = t.user?.drafts_folder_id;
  let T = o.folderId ?? ("folder" === t.selectedView.view ? t.selectedView.folderId : C);
  let k = T && (await subscribeAndAwaitData(cQi, {
    projectId: T
  }, {
    retainMs: 3e4
  })).project;
  if (!k) {
    e.dispatch($$O10({
      id: i,
      status: mO.FAILURE,
      message: getI18nString("fullscreen.file_import.unable_to_import")
    }));
    e.dispatch(U());
    return;
  }
  let R = NU(o);
  let N = k.team;
  let D = N?.id;
  if (N && !aW(N, {
    type: sK.ADD_FILE,
    editorType: R,
    isDestinationTeamDrafts: jd(k)
  })) {
    let t = (() => {
      let e = N.name;
      switch (R) {
        case FFileType.WHITEBOARD:
          return getI18nString("fullscreen.file_import.team_name_is_at_the_fig_jam_file_limit", {
            teamName: e
          });
        case FFileType.SLIDES:
          return getI18nString("fullscreen.file_import.team_name_is_at_the_figma_slides_file_limit", {
            teamName: N.name
          });
        case FFileType.DESIGN:
          return getI18nString("fullscreen.file_import.team_name_is_at_the_figma_file_limit", {
            teamName: e
          });
        case FFileType.SITES:
          return getI18nString("fullscreen.file_import.your_team_doesnt_have_permissions_to_import_sites_files");
        case FFileType.COOPER:
          return getI18nString("fullscreen.file_import.team_name_is_at_the_figma_buzz_file_limit", {
            teamName: e
          });
        case FFileType.FIGMAKE:
          return getI18nString("fullscreen.file_import.team_name_is_at_the_figma_make_file_limit", {
            teamName: e
          });
        default:
          throwTypeError(R);
      }
    })();
    e.dispatch($$O10({
      id: i,
      status: mO.FAILURE,
      message: t
    }));
    e.dispatch($$P14());
    e.dispatch(U());
    return;
  }
  if (!d6(k, R)) {
    let t = cu(k.name);
    let n = !!C && T !== C && (await bJ(C, R));
    e.dispatch($$O10({
      id: i,
      status: mO.FAILURE,
      message: t,
      cta: n ? {
        text: getI18nString("fullscreen.file_import.go_to_drafts"),
        action: () => {
          e.dispatch(gN(C));
        }
      } : void 0
    }));
    e.dispatch(U());
    return;
  }
  let L = "unknown";
  if (".pdf" === I || ".svg" === I || ".sketch" === I || ".zip" === I || ".jamboard" === I) L = I.substring(1);else if (".gif" === I || ".png" === I || ".jpg" === I || ".jpeg" === I) L = "img";else if (".fig" === I || ".jam" === I || ".deck" === I || ".site" === I || ".buzz" === I || ".make" === I) {
    let e = new Uint8Array(await o.blob.slice(0, 20).arrayBuffer());
    L = f6(e) ? "fig-zip" : "fig-kiwi";
  }
  let F = _$$g();
  trackEventAnalytics("File Import Begin", {
    importId: F
  });
  o.timer.start();
  try {
    let n = await W(e, {
      basename: _,
      extension: I
    }, getFeatureFlags(), _$$F, o, L, t.fileImport.selectedPdfType, T);
    let r = {
      id: i,
      ...(n.file ? {
        fileKey: n.file?.fileKey
      } : {})
    };
    if (n.warnings.length) e.dispatch($$O10({
      ...r,
      status: mO.WARNING,
      message: n.warnings
    }));else {
      let t = {
        ...r,
        status: mO.SUCCESS
      };
      e.dispatch($$O10(t));
    }
    let a = Date.now();
    if (console.log(`conversion took ${(a - f) / 1e3} seconds`), e.dispatch(U()), n.file) {
      let e = n.file.fileKey;
      o.timer.stop();
      let t = {
        ...n.file.sketchMeta,
        importId: F,
        extension: I,
        format: L,
        worked: !0,
        teamId: D,
        fileKey: e,
        elapsedSeconds: o.timer.getElapsedTime() / 1e3
      };
      trackEventAnalytics("File Imported", t, {
        forwardToDatadog: !0
      });
    }
  } catch (t) {
    try {
      "string" == typeof t && (t = Error(t));
      e.dispatch($$O10({
        id: i,
        status: _$$F.hasCanceled() ? mO.CANCELED : mO.FAILURE,
        message: t && t.message ? t.message + "" : getI18nString("fullscreen.file_import.internal_error_please_try_again_later")
      }));
      let n = t.inferredFormat;
      n && (L = n);
      let r = t;
      if (trackEventAnalytics("File Imported", {
        importId: F,
        extension: I,
        format: L,
        worked: !1,
        canceled: _$$F.hasCanceled(),
        uploadFailed: r.imageUploadError || !1,
        teamId: D
      }, {
        forwardToDatadog: !0
      }), r.imageUploadError && trackEventAnalytics("File Import Image Upload Error", {
        extension: I,
        format: L,
        teamId: D
      }), !(t instanceof zX)) {
        if (_$$F.hasCanceled()) return;
        if (!t.hasOwnProperty("reportError") || t.reportError) {
          let e = t.warnings;
          if (e?.length > 0) for (let t of e) logWarning("import", t);
          reportError(_$$e.SCENEGRAPH_AND_SYNC, t.cause ? t.cause : t);
        }
      }
    } catch (e) {
      reportError(_$$e.SCENEGRAPH_AND_SYNC, e);
    } finally {
      e.dispatch(U());
    }
  }
});
let $$T13 = NC("FILE_IMPORT_SET_FROM_FILE_IMPORT_NUX_STEP");
let $$k4 = NC("FILE_IMPORT_SHOW_IMPORT_PDF_CONFIRMATION");
let $$R3 = NC("FILE_IMPORT_SHOW_IMPORT_FIGMA_DESIGN_REPO");
let $$N9 = NC("FILE_IMPORT_CLEAR_IMPORTS");
let $$P14 = NC("FILE_IMPORT_FAIL_ON_LIMIT");
let $$O10 = NC("FILE_IMPORT_UPDATE_ITEM");
let $$D7 = NC("FILE_IMPORT_ADD_TO_QUEUE");
let $$L11 = NC("FILE_IMPORT_CLEAR_QUEUE");
let $$F15 = nF(e => {
  if (!_$$F) return;
  let {
    fileImport
  } = e.getState();
  fileImport.queue.length > 0 && (function (e) {
    let t = new Set();
    e.queue.forEach(i => {
      let n = e.files[i]?.name ?? "";
      let r = dv(n);
      t.add(r.slice(1));
    });
    let i = 1 === t.size ? Array.from(t)[0] : t.size > 1 ? "multiple" : "";
    trackEventAnalytics("File Import Cancelled", {
      numFilesCancelled: e.queue.length,
      fileType: i
    }, {
      forwardToDatadog: !0
    });
  }(fileImport), function (e) {
    e.queue.forEach(t => {
      let i = e.files[t];
      let n = i.name;
      kI(n) && Ij({
        type: "canceled"
      }, "file_browser", i.blob?.size ?? 0, e.selectedPdfType);
    });
  }(fileImport));
  pl.forEach(e => {
    e.onload = () => {};
    e.abort();
  });
  _$$F.cancelConversion();
  e.dispatch($$L11());
  e.dispatch(U());
  (function (e) {
    let t = e.getState().fileImport.files;
    for (let i of Object.keys(t).filter(e => {
      let i = t[Number(e)];
      return !!i && (i.status === mO.WAITING || i.status === mO.BUSY);
    })) e.dispatch($$O10({
      id: Number(i),
      status: mO.CANCELED
    }));
  })(e);
  MS();
});
let $$M5 = NC("FILE_IMPORT_START_PROCESSING_FILE");
let $$j12 = NC("FILE_IMPORT_DONE_PROCESSING_FILE");
let U = nF(e => {
  e.dispatch($$j12());
  e.getState().fileImport.queue.length > 0 && e.dispatch($$C6());
});
let $$B1 = NC("FILE_IMPORT_CONFIRM_IMPORT_PDF");
let $$V8 = nF((e, t) => {
  e.dispatch($$B1(t));
  e.getState().fileImport.queue.length > 0 && e.dispatch($$C6());
});
let $$G2 = NC("FILE_IMPORT_CANCEL_IMPORT_PDF");
let $$z0 = nF(e => {
  e.dispatch($$G2());
  let t = e.getState();
  t.fileImport.queue.length > 0 ? e.dispatch($$C6()) : Object.values(t.fileImport.files).every(e => kI(e.name)) && (e.dispatch(Ce()), e.dispatch($$N9()));
});
export const AU = $$z0;
export const Fd = $$B1;
export const Fj = $$G2;
export const GR = $$R3;
export const JK = $$k4;
export const JR = $$M5;
export const Jb = $$C6;
export const Ud = $$D7;
export const _9 = $$V8;
export const cY = $$N9;
export const fk = $$O10;
export const lg = $$L11;
export const n$ = $$j12;
export const rf = $$T13;
export const rj = $$P14;
export const yD = $$F15;