import { ServiceCategories as _$$e } from "../905/165054";
import { Ez5, Egt, Zdr } from "../figma_app/763686";
import { l7, nc } from "../905/189185";
import { UN } from "../905/700578";
import { x1 } from "../905/714362";
import { Point } from "../905/736624";
import { f as _$$f } from "../905/412913";
import { k8 } from "../figma_app/49598";
import { Bs } from "../figma_app/933328";
import { Hx } from "../figma_app/147952";
import { Y5 } from "../figma_app/455680";
import { $A, vt } from "../905/862883";
import { Y } from "../figma_app/526287";
import { q } from "../figma_app/446378";
import { Xi } from "../figma_app/634146";
var $$E2 = (e => (e.OVERLAY_MODAL = "OVERLAY_MODAL", e.PICKER = "PICKER", e.BOARD_TO_DECK = "BOARD_TO_DECK", e.OUTLINE_TO_DECK = "OUTLINE_TO_DECK", e))($$E2 || {});
function y(e, t) {
  return "OVERLAY_MODAL" === e ? t ? "insert_template_slide_overlay_modal_hub" : "insert_template_slide_overlay_modal_org" : t ? "insert_template_slide_picker_hub" : "insert_template_slide_picker_org";
}
let b = _$$f();
export function $$T7(e) {
  l7.system("setup-document-slide-theme", () => {
    Ez5 && Ez5.slideThemeLibBindings().setDocumentTemplateLibraryKey(e);
  });
}
export function $$I1({
  libraryKey: e,
  subscribeToLibrary: t,
  slideId: r
}) {
  t();
  l7.system("setup-slide-theme", () => {
    if (!Ez5) return;
    let t = Ez5.slideThemeLibBindings().remapSlideToLocalTheme(r);
    Xi(t) && Ez5.slideThemeLibBindings().setActiveTheme(t);
    Ez5?.slideThemeLibBindings().setDocumentTemplateLibraryKey(e);
  });
}
export function $$S0({
  module: e,
  viewType: t,
  getGridCoord: r,
  dispatch: a,
  subscribeToLibrary: l
}) {
  return (d, u, p) => {
    if (1 !== d.length) {
      x1(_$$e.SLIDES, "Expected to insert a single slide", {
        insertedItems: d,
        viewType: t,
        isClick: p
      });
      return;
    }
    let {
      row,
      col
    } = r(!p && u ? u : {
      x: -1 / 0,
      y: -1 / 0
    });
    let g = d[0];
    if (!g || !Egt || !Ez5) return;
    Ez5.canvasGrid()?.insertChildAtCoord(g, row, col, y(t, e.isHubFile));
    let f = UN().get(g);
    f && (Egt.replaceSelection([f.guid], !0), f.isExpanded = !0);
    $$I1({
      libraryKey: e.library_key,
      subscribeToLibrary: l,
      slideId: g
    });
    e.isHubFile && a(k8({
      hubFileId: b(e)
    }));
    $$A8(a, e);
    Ez5.singleSlideView().isFocusedNodeViewEnabled() || ["OVERLAY_MODAL", "BOARD_TO_DECK"].includes(t) ? Ez5.singleSlideView().focusNodeInFocusedNodeView(g, !0) : (setTimeout(() => {
      Ez5?.singleSlideView().isFocusedNodeViewEnabled() || Ez5?.singleSlideView().panToNodeIfOutsideViewport(g, .6);
    }, 0), Y5.triggerAction("commit"));
  };
}
export function $$v6({
  module: e,
  insertedItems: t,
  viewType: r,
  getGridCoord: a,
  subscribeToLibrary: s
}) {
  if (1 !== t.length) {
    x1(_$$e.SLIDES, "Expected to insert a single slide", {
      insertedItems: t,
      viewType: r
    });
    return;
  }
  let {
    row,
    col
  } = a();
  let c = t[0];
  c && Ez5 && (Ez5.canvasGrid().insertChildAtCoord(c, row, col, y(r, e.isHubFile)), $$I1({
    libraryKey: e.library_key,
    subscribeToLibrary: s,
    slideId: c
  }));
}
export function $$A8(e, t) {
  t.isHubFile || e(Y({
    fileKey: b(t)
  }));
  e(Hx({
    storeInRecentsKey: $A.Slides,
    ...(t.isHubFile ? {
      id: b(t),
      type: vt.CommunityResource
    } : {
      file_key: b(t),
      type: vt.TeamTemplate
    })
  }));
}
export function $$x5({
  callback: e,
  dispatch: t,
  editScopeLabel: r,
  editScopeType: n,
  module: s
}) {
  let o = nc(n, r, t => {
    if (!t.length) return;
    let r = t[0];
    if (!r) return;
    Zdr?.transferPresetToHiddenFrame(r);
    let n = Ez5?.slideThemeLibBindings();
    let a = n?.remapSlideToLocalTheme(r);
    a && Xi(a) && n?.setActiveTheme(a);
    n?.setDocumentTemplateLibraryKey(s.library_key);
    e?.(r);
    Y5.triggerAction("commit");
  });
  t(Bs({
    item: s,
    canvasPosition: new Point(),
    percentageOffset: new Point(),
    insertAsChildOfCanvas: !1,
    selectAfterInsert: !1,
    shouldShowVisualBell: !1,
    insertionCallback: o
  }));
}
export async function $$N4(e) {
  return !!e && !e.parentOrgId && !!e.teamId && !!e.editorType && (await q.getTeamTemplateLimitReached({
    teamId: e.teamId,
    editorType: e.editorType
  })).data.meta.template_limit_reached;
}
export async function $$C3(e) {
  return !!e && !e.parent_org_id && !!e.team_id && !!e.editor_type && (await q.getTeamTemplateLimitReached({
    teamId: e.team_id,
    editorType: e.editor_type
  })).data.meta.template_limit_reached;
}
export const CH = $$S0;
export const Ci = $$I1;
export const Ji = $$E2;
export const Jv = $$C3;
export const YW = $$N4;
export const Zx = $$x5;
export const h0 = $$v6;
export const nv = $$T7;
export const qm = $$A8;