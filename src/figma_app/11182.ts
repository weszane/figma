import { copyTextToClipboard } from "../figma_app/623293";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { showModalHandler } from "../905/156213";
import { Np } from "../figma_app/193867";
import { o as _$$o } from "../905/721794";
import { createOptimistThunk } from "../905/350402";
let $$c3 = createOptimistThunk((e, t) => {
  let r = t.stringToCopy;
  let s = {
    withLineBreaks: !(t.ignoreLineBreaks ?? !0),
    successText: t.successText
  };
  copyTextToClipboard(r, s).then(() => {
    e.dispatch(VisualBellActions.enqueue({
      type: "copied_to_clipboard",
      message: s.successText ?? getI18nString("fullscreen_actions.copied_to_clipboard")
    }));
  });
});
let $$u0 = createOptimistThunk((e, t) => {
  let r = t.emailList;
  let s = r.length;
  let o = r.join("; ");
  copyTextToClipboard(o).then(() => {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("copy_to_clipboard.emails_copied_to_clipboard", {
        numEmails: s,
        emailText: o
      }),
      type: "emails-copied"
    }));
  });
});
export function $$p2(e) {
  return createOptimistThunk((e, t) => {
    let r = t.selector.selectedViewToPath(t.selectedView, t.data);
    if (!r) return;
    let n = new URL(r, document.baseURI).href;
    e.dispatch($$h1({
      url: n
    }));
  })(e);
}
let $$_4 = createOptimistThunk((e, t) => {
  let r = new URL(Np(e.getState(), t), document.baseURI).href;
  let n = (() => {
    if ("folder" === t.view) return "project";
  })();
  e.dispatch($$h1({
    url: r,
    linkType: n
  }));
});
let $$h1 = createOptimistThunk(async (e, t) => {
  let r;
  let o = t.url;
  switch (t.linkType ?? "selection") {
    case "template":
      r = getI18nString("copy_to_clipboard.template_share_link_copied");
      break;
    case "project":
    case "team":
    case "link":
      r = getI18nString("copy_to_clipboard.link_copied_to_clipboard");
      break;
    case "plugin":
      r = getI18nString("copy_to_clipboard.link_to_plugin_copied_to_clipboard");
      break;
    case "widget":
      r = getI18nString("copy_to_clipboard.link_to_widget_copied_to_clipboard");
      break;
    default:
      r = getI18nString("copy_to_clipboard.link_to_selection_copied_to_clipboard");
  }
  try {
    await copyTextToClipboard(o);
    e.dispatch(VisualBellActions.enqueue({
      type: "link_copied_to_clipboard",
      message: r
    }));
  } catch {
    e.dispatch(showModalHandler({
      type: _$$o,
      data: {
        link: o
      }
    }));
  }
});
export const II = $$u0;
export const S = $$h1;
export const TH = $$p2;
export const lW = $$c3;
export const le = $$_4;