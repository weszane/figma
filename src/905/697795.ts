import { useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { ce } from "../figma_app/347146";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory, hasViewProperty } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { getI18nString } from "../905/303541";
import { UN, V3 } from "../figma_app/976345";
import { wr } from "../figma_app/387599";
import { OE } from "../figma_app/930386";
import { createOptimistThunk } from "../905/350402";
import { selectViewAction } from "../905/929976";
import { VB } from "../figma_app/91703";
import { hideModal } from "../905/156213";
import { setLastVisitedPlan, setLastVisitedId } from "../905/93909";
import { NR } from "../905/977218";
import { getEditorTypeFromView } from "../figma_app/976749";
import { isBranch } from "../905/760074";
import { fullscreenValue } from "../figma_app/455680";
import { FEditorType, mapFileTypeToEditorType } from "../figma_app/53721";
import { OrganizationType } from "../905/833838";
import { P as _$$P } from "../905/200237";
import { f as _$$f } from "../figma_app/252485";
import { getFullscreenFile } from "../905/766303";
import { GT } from "../figma_app/840917";
import { AE, Nn } from "../905/225144";
import { getUserId } from "../905/372672";
import { getSelectedViewName, mapPathToSelectedView } from "../figma_app/193867";
let n;
export function $$D3() {
  return getInitialOptions().release_manifest_git_commit;
}
function L(e, t, i = "") {
  if (ce()) {
    document.title = t ? `${i}${t}` : e;
    return;
  }
  if (e !== (n ? n + document.title : document.title)) {
    if ("safari" !== BrowserInfo.browserType) {
      let t;
      let i = AE(e);
      t = document.getElementById("custom-emoji-favicon");
      i ? (n = i, t || ((t = document.createElement("link")).id = "custom-emoji-favicon", t.rel = "icon", document.head.appendChild(t)), t.href = "data:image/svg+xml," + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">{text}</text></svg>'.replace("{text}", i)) : (t && t.remove(), n = void 0);
      i && (e = Nn(e, i));
    }
    document.title = e;
    desktopAPIInstance && t && desktopAPIInstance.setTitle(t, i);
  }
}
export function $$F6(e, t = null, i = "") {
  let n = function (e) {
    switch (e) {
      case FEditorType.Whiteboard:
        return " \u2013 FigJam";
      case FEditorType.Slides:
        return " \u2013 Figma Slides";
      case FEditorType.Sites:
        return " \u2013 Figma Sites";
      case FEditorType.Cooper:
        return " \u2013 Figma Buzz";
      case FEditorType.Figmake:
        return " \u2013 Figma Make";
      default:
        return " \u2013 Figma";
    }
  }(t);
  L(`${i}${e}${n}`, e, i);
}
export function $$M2(e, t) {
  let i = getSelectedViewName(e, t);
  if (!i) {
    L("Figma", null);
    return;
  }
  if ("fullscreen" === t.view && t.tryPluginName) {
    e.openFile ? L(e.openFile.name, i) : L(getI18nString("community.try.plugin_name_with_community", {
      pluginName: t.tryPluginName
    }), i);
    return;
  }
  if ("prototype" === t.view) {
    let n;
    let r = "";
    if (_$$f(t.file.editor_type)) n = r = `${t.isPresenterView ? getI18nString("slides.general.presenter") : getI18nString("slides.general.slide_deck")} \xb7 ${i} - ${getI18nString("slides.general.slides")}`;else {
      let t = function (e) {
        let t = e.prototype;
        for (let e of t.pages) if (e.nodeId === t.currentPageId) return e.name;
        return "";
      }(e);
      t && e.prototype.pages.length > 1 ? (r = `\u25B6 ${i} - ${t}`, n = `${i} - ${t}`) : (r = `\u25B6 ${i}`, n = i);
    }
    L(r, n);
    return;
  }
  if ("fullscreen" === t.view && !e.openFile) {
    let e = GT();
    e?.name ? i = e.name : t?.localFileName && (i = t.localFileName);
  }
  let n = getFullscreenFile(e);
  if (n && isBranch(n)) {
    L(`\u2325 ${i}`, `${i}`);
    return;
  }
  $$F6(i, getEditorTypeFromView(t));
}
export let $$j1 = createOptimistThunk(e => customHistory.listen(t => {
  "POP" === t && function (t) {
    if (t) {
      let i = e.getState();
      let n = i.selectedView;
      if (!hasViewProperty(t)) return;
      let {
        jsCommitHash,
        searchSessionId,
        ...s
      } = t;
      if (void 0 !== jsCommitHash && jsCommitHash !== $$D3()) {
        customHistory.reload("Navigating to a state that was pushed by an older version of this application");
        return;
      }
      if ("fullscreen" === n.view && !fullscreenValue.isReady()) {
        customHistory.reload("User navigated before fullscreen fully initialized");
        return;
      }
      if ("fullscreen" === s.view && !s.fileKey) {
        window.history.back();
        return;
      }
      if ("fullscreen" === n.view && ("fullscreen" !== s.view || n.fileKey !== s.fileKey)) e.dispatch(VB({
        oldSelectedView: n,
        newSelectedView: s
      }));else {
        if (e.dispatch(hideModal()), "communityHub" === s.view && "searchAndBrowse" === s.subView && OE(s.data)) {
          let t = wr(i);
          t && e.dispatch(NR({
            sessionId: t
          }));
        }
        e.dispatch(selectViewAction({
          ...s,
          fromPopstate: !0
        }));
        $$M2(i, s);
      }
    }
  }(customHistory.location.state);
  hasViewProperty(customHistory.location.state) || function () {
    let t = e.getState();
    let i = mapPathToSelectedView(t, customHistory.location.pathname, customHistory.location.search, customHistory.location.hash, null);
    null !== i && e.dispatch(selectViewAction({
      ...i,
      fromPopstate: !0
    }));
  }();
}));
export function $$U4(e, t, i, n) {
  e(UN({
    fileKey: t.key
  }));
  let r = i || n;
  let a = i ? OrganizationType.ORG : OrganizationType.TEAM;
  e(r ? setLastVisitedPlan({
    planId: r,
    planType: a
  }) : setLastVisitedId({
    planId: i || _$$P
  }));
  e(selectViewAction({
    view: "fullscreen",
    fileKey: t.key,
    editorType: t.editorType ? mapFileTypeToEditorType(t.editorType) : FEditorType.Design
  }));
}
export function $$B8(e, t, i, n) {
  trackEventAnalytics("Open File in New Tab Click", {
    fileKey: t,
    uiSelectedView: JSON.stringify(i)
  });
  n(UN({
    fileKey: t
  }));
  customHistory.redirect(e, "_blank");
}
export function $$V0(e, t, i, n) {
  trackEventAnalytics("Open Prototype in New Tab Click", {
    fileKey: t,
    pageId: i,
    uiSelectedView: JSON.stringify(n)
  });
  customHistory.redirect(e, "_blank");
}
export function $$G5(e, t) {
  t(V3({
    url: e
  }));
}
export function $$z7(e, t) {
  let i = getUserId();
  let n = e || t;
  let s = useSelector(e => getFeatureFlags().limited_plan_spaces ? e.plans : i ? e.authedUsers.byId[i]?.plans : null);
  return !!s?.find(e => e.plan_id === n);
}
export const D4 = $$V0;
export const De = $$j1;
export const OR = $$M2;
export const Qr = $$D3;
export const Tq = $$U4;
export const Wq = $$G5;
export const hL = $$F6;
export const jm = $$z7;
export const nz = $$B8;