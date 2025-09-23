import { ServiceCategories } from "../905/165054";
import { createActionCreator } from "../905/73481";
import { Q } from "../905/150006";
import { reportError } from "../905/11";
import { XHR } from "../905/910117";
import { createOptimistThunk } from "../905/350402";
let $$d5 = createActionCreator("RECENT_PROTOTYPE_UNMARK_VIEWED");
let $$c14 = createOptimistThunk((e, t) => {
  let i = XHR.del(`/api/files/${t.fileKey}/prototype/view`, {
    page_id: t.pageId
  });
  Q({
    requestPromise: i,
    fallbackError: "An error occurred while removing this prototype from Recently Viewed.",
    store: e,
    next: e.dispatch,
    action: m({
      fileKey: t.fileKey,
      pageId: t.pageId
    })
  });
  e.dispatch($$d5(t));
});
let $$u6 = createOptimistThunk((e, t) => {
  XHR.post(`/api/files/${t.fileKey}/prototype/view`, {
    page_id: t.pageId
  }).then(i => {
    if (!i.data.meta) {
      reportError(ServiceCategories.FRONTEND_PLATFORM, Error("prototype/view response missing data.meta"), {
        extra: {
          fileKey: t.fileKey,
          pageId: t.pageId,
          responseType: i.responseType,
          contentType: i.contentType
        }
      });
      return;
    }
    e.dispatch($$h2({
      prototype: i.data.meta
    }));
  }).catch(() => {});
});
let $$p12 = createActionCreator("PROTOTYPE_RESET_RECENTS");
let m = createActionCreator("RECENT_PROTOTYPE_DELETE");
let $$h2 = createActionCreator("RECENT_PROTOTYPE_POST");
let $$g17 = createActionCreator("PROTOTYPE_SET_IS_FOOTER_VISIBLE");
let $$f1 = createActionCreator("PROTOTYPE_SET_IS_RECONNECTING");
let $$_11 = createActionCreator("PROTOTYPE_SET_PROGRESS_BAR_MODE");
let $$A4 = createActionCreator("PROTOTYPE_SET_BACKGROUND_COLOR");
let $$y15 = createActionCreator("PROTOTYPE_SET_CURRENT_PAGE");
let $$b0 = createActionCreator("PROTOTYPE_SET_PAGES");
let $$v7 = createActionCreator("PROTOTYPE_SHOW_ONLY_MY_COMMENTS");
let $$I8 = createActionCreator("PROTOTYPE_SHOW_RESOLVED_COMMENTS");
let $$E3 = createActionCreator("PROTOTYPE_HIDE_COMMENTS");
let $$x9 = createActionCreator("PROTOTYPE_SHOW_COMMENTS");
createActionCreator("PROTOTYPE_SET_DISABLE_DEFAULT_KEYBOARD_NAV");
let $$S10 = createActionCreator("PROTOTYPE_RESET");
let $$w13 = createActionCreator("DELETE_RECENT_PROTOTYPE");
let $$C16 = createActionCreator("RESTORE_RECENT_PROTOTYPE");
export const $9 = $$b0;
export const AF = $$f1;
export const Am = $$h2;
export const BZ = $$E3;
export const Mo = $$A4;
export const Q4 = $$d5;
export const Q9 = $$u6;
export const RO = $$v7;
export const U3 = $$I8;
export const _b = $$x9;
export const cL = $$S10;
export const ku = $$_11;
export const q0 = $$p12;
export const sM = $$w13;
export const tl = $$c14;
export const uh = $$y15;
export const xY = $$C16;
export const y3 = $$g17;
