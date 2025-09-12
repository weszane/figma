import _require from "../469e6e40/127004";
import { getFeatureFlags } from "../905/601108";
import { createActionCreator } from "../905/73481";
import { trackEventAnalytics } from "../905/449184";
import { createFontMetadata, removeFontOwnerPrefix } from "../905/165290";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { A as _$$A } from "../905/662580";
import { registerModal, createModalConfig } from "../905/102752";
import { showModalHandler } from "../905/156213";
import { SHARED_FONTS_MODAL } from "../figma_app/633080";
import { C as _$$C } from "../905/496700";
import { createOptimistThunk } from "../905/350402";
import { o as _$$o } from "../905/524481";
let n;
let y = 0;
export function $$b0() {
  return y++;
}
let v = createActionCreator("START_UPLOAD_FONTS");
let I = createOptimistThunk((e, t) => {
  for (let i in e.dispatch(VisualBellActions.enqueue({
    type: "shared-fonts",
    message: getI18nString("shared_fonts.importing_font_files"),
    icon: VisualBellIcon.SPINNER
  })), t.overwrite ? trackEventAnalytics("shared_fonts_overwrite_collision") : trackEventAnalytics("shared_fonts_upload", {
    count: Object.values(t.fonts).length
  }), e.dispatch(v(t)), t.fonts) {
    let n = t.fonts[i];
    let a = {
      resourceType: t.resourceType,
      resourceId: t.resourceId
    };
    t.overwrite && (a.overwrite = "true");
    getFeatureFlags().ce_accept_large_font_files && (a.acceptLargeFontFiles = "true");
    XHR.post("/api/upnode/font", n, {
      params: a,
      headers: {
        ...XHR.requiredHeaders,
        "content-type": function (e) {
          let t = e.name.toLowerCase();
          let i = e.type.toLowerCase();
          return t.endsWith(".otf") ? "font/opentype" : t.endsWith(".ttf") ? "font/ttf" : "font/opentype" === i || "font/ttf" === i ? i : (console.warn(`Encountered unexpected MIME type ${e.type} with file name ${e.name}`), "");
        }(n)
      },
      raw: !0,
      uploadEvents: {
        [XHR.Events.PROGRESS]: (t, n) => {
          let r = n.loaded / n.total;
          e.dispatch(C({
            uploadId: i,
            progress: r
          }));
        }
      }
    }).then(r => {
      let a = JSON.parse(r.data).meta;
      let l = createFontMetadata(a);
      if ("org" === t.resourceType) {
        let i = {};
        let n = e.getState();
        let {
          fontsByResourceId
        } = n.sharedFonts;
        for (let a in Object.keys(fontsByResourceId).map(e => removeFontOwnerPrefix(e)).filter(e => n.teams[e] && n.teams[e].org_id === t.resourceId).forEach(e => {
          let t = fontsByResourceId[`team-${e}`]?.[l.family];
          let n = new Set(Object.keys(t ?? {}));
          let a = new Set(l.variationInstances?.map(e => e.name) ?? [l.style]);
          let s = new Set([...n].filter(e => a.has(e)));
          s.size > 0 && (i[l.id] = i[l.id] || {
            font: l,
            collisions: []
          }, s.forEach(e => {
            i[l.id].collisions.push(t[e]);
          }));
        }), i) e.dispatch(w(i[a]));
      }
      e.dispatch(F({
        font: l
      }));
      trackEventAnalytics("shared_fonts_upload_success");
      e.dispatch(x({
        resourceId: t.resourceId,
        font: l,
        filename: n.name,
        uploadId: i
      }));
      E(e.getState(), e.dispatch);
    }).catch(t => {
      let r;
      if (t.data) try {
        let e = JSON.parse(t.data).meta;
        r = e ? {
          existing: e.collision.existing ? createFontMetadata(e.collision.existing) : void 0,
          uploaded: e.collision.uploaded,
          overwritten_fonts: e.collision.overwritten_fonts
        } : void 0;
      } catch (e) {}
      (function (e, t) {
        switch (e) {
          case 403:
            trackEventAnalytics("shared_fonts_upload_invalid_permissions");
            break;
          case 409:
            trackEventAnalytics("shared_fonts_upload_collision", {
              canOverwrite: t
            });
            break;
          case 422:
            trackEventAnalytics("shared_fonts_upload_invalid_font");
            break;
          default:
            trackEventAnalytics("shared_fonts_upload_failure", {
              status: e
            });
        }
      })(t.status, !!r);
      e.dispatch(S({
        filename: n.name,
        uploadId: i,
        collision: r,
        status: t.status
      }));
      E(e.getState(), e.dispatch);
    });
  }
});
function E(e, t) {
  let {
    uploadsRemaining,
    successfulUploads,
    uploadsLaunched,
    unsuccessfulUploads,
    collisions,
    warnings
  } = e.sharedFonts;
  if (Object.keys(uploadsRemaining).length > 0) {
    t(VisualBellActions.enqueue({
      type: "shared-fonts",
      message: getI18nString("shared_fonts.uploads_remaining", {
        totalFileCount: uploadsLaunched,
        processedFileCount: successfulUploads.length + unsuccessfulUploads.length
      }),
      icon: VisualBellIcon.SPINNER
    }));
    return;
  }
  if (0 === unsuccessfulUploads.length && 0 === collisions.length && 0 === warnings.length && t(_$$o()), 0 === unsuccessfulUploads.length) {
    t(VisualBellActions.enqueue({
      type: "shared-fonts",
      message: getI18nString("shared_fonts.import_complete_with_no_errors"),
      icon: VisualBellIcon.CHECK
    }));
    return;
  }
  let y = e.modalShown;
  y && (y.type === SHARED_FONTS_MODAL || y.type === _$$C) ? t(VisualBellActions.enqueue({
    type: "shared-fonts",
    message: getI18nString("shared_fonts.import_complete_with_errors", {
      unsuccessfulUploadCount: unsuccessfulUploads.length
    }),
    icon: VisualBellIcon.EXCLAMATION,
    error: !0
  })) : t(VisualBellActions.enqueue({
    type: "shared-fonts",
    message: getI18nString("shared_fonts.import_complete_with_errors", {
      unsuccessfulUploadCount: unsuccessfulUploads.length
    }),
    icon: VisualBellIcon.EXCLAMATION,
    error: !0,
    button: {
      text: getI18nString("shared_fonts.review_font_upload_errors"),
      action: () => {
        t(showModalHandler({
          type: n ??= registerModal(_$$A.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.FontUploadReviewErrorsModal), createModalConfig("FontUploadReviewErrorsModal")))
        }));
      }
    },
    onDismiss: () => {
      t(_$$o());
    }
  }));
}
let x = createActionCreator("UPLOAD_FONT_SUCCESS");
let S = createActionCreator("UPLOAD_FONT_FAILURE");
let w = createActionCreator("UPLOAD_FONT_WARNING");
let C = createActionCreator("UPLOAD_FONT_PROGRESS");
let T = createActionCreator("TOGGLE_FONT_TO_DELETE");
let k = createActionCreator("CLEAR_FONTS_TO_DELETE");
let R = createActionCreator("CLEAR_DELETE_RESULT");
let N = createOptimistThunk(e => {
  e.dispatch(R());
  let {
    fontsToDelete
  } = e.getState().sharedFonts;
  trackEventAnalytics("shared_fonts_delete_font", {
    count: Object.keys(fontsToDelete).length
  });
  XHR.del("/api/fonts", {
    font_ids: Object.keys(fontsToDelete)
  }).then(n => {
    let r = n.data.meta;
    for (let i in fontsToDelete) r.errors[i] || e.dispatch(M({
      font: fontsToDelete[i]
    }));
    i(r);
  }).catch(t => {
    let n = {};
    Object.keys(e.getState().sharedFonts.fontsToDelete).forEach(e => {
      n[e] = {
        status: t.status
      };
    });
    i({
      errors: n
    });
  });
  let i = t => {
    e.dispatch(P(t));
    let {
      unsuccessfulDeletes,
      successfulDeletes
    } = e.getState().sharedFonts;
    let r = unsuccessfulDeletes.length;
    let a = unsuccessfulDeletes.length + successfulDeletes.length;
    r > 0 ? e.dispatch(VisualBellActions.enqueue({
      type: "font_deleted",
      message: getI18nString("shared_fonts.unsuccessful_deletes", {
        numUnsuccessfulDeletes: r,
        totalDeletes: a
      }),
      icon: VisualBellIcon.EXCLAMATION,
      error: !0
    })) : e.dispatch(VisualBellActions.enqueue({
      type: "font_deleted",
      message: getI18nString("shared_fonts.successful_deletes", {
        totalDeletes: a
      }),
      icon: VisualBellIcon.CHECK
    }));
  };
});
let P = createActionCreator("DELETE_FONT_COMPLETE");
let O = createActionCreator("DISMISS_FONT_COLLISION");
let D = createActionCreator("DISMISS_FONT_WARNING");
let L = createActionCreator("UPDATE_SHARED_FONT_LIST");
let F = createActionCreator("PUT_SHARED_FONT");
let M = createActionCreator("DEL_SHARED_FONT");
let $$j1 = {
  startUploadFonts: v,
  uploadFonts: I,
  uploadFontProgress: C,
  clearFontUploadResults: _$$o,
  deleteFonts: N,
  toggleFontsToDelete: T,
  clearFontsToDelete: k,
  clearDeleteResult: R,
  deleteFontComplete: P,
  dismissFontCollision: O,
  dismissFontWarning: D,
  uploadFontSuccess: x,
  uploadFontFailure: S,
  uploadFontWarning: w,
  updateSharedFontList: L,
  put: F,
  del: M
};
export const i = $$b0;
export const X = $$j1;