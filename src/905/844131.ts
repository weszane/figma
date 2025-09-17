import { getStorage } from "../905/657224";
import { globalPerfTimer } from "../905/542194";
import { selectViewAction } from "../905/929976";
import { filePutAction, postFileAction, filePermissionsPutAction } from "../figma_app/78808";
import { OB, M3, ST } from "../figma_app/91703";
import { clearTryPlugin, setWorkshopModeUntil, SEEN_TRY_ONBOARDING_KEY, setWorkshopUserName, setStarterKitHasBeenHidden, setFigmaEditorOnboardingStarted, setFigmaEditorOnboardingFinishedOrDismissed } from "../figma_app/107215";
import { mapFileSummary } from "../figma_app/349248";
import { generateAnonymouseName } from "../905/301652";
import { mapEditorTypeToFileType } from "../figma_app/53721";
export let $$p1 = {
  view: "recentsAndSharing"
};
export function $$m0(e = $$p1, t) {
  if (selectViewAction.matches(t)) {
    globalPerfTimer.start("page_selected_view");
    let {
      fromPopstate,
      forceReplaceState,
      ...n
    } = t.payload;
    return n;
  }
  if (OB.matches(t)) {
    let i = {
      ...e,
      fileKey: t.payload.file.key
    };
    mapEditorTypeToFileType(e.editorType) !== mapEditorTypeToFileType(t.payload.fullscreenEditorType) && (i.editorType = t.payload.fullscreenEditorType);
    return i;
  }
  if (clearTryPlugin.matches(t)) return {
    ...e,
    tryPluginId: void 0,
    tryPluginName: void 0,
    tryPluginVersionId: void 0
  };
  if (M3.matches(t)) return {
    ...e,
    filePermissionsModalTab: t.payload.view
  };
  if ((filePutAction.matches(t) || postFileAction.matches(t) || filePermissionsPutAction.matches(t)) && "prototype" === e.view) {
    if (t.payload.file.key === e.file.key) return {
      ...e,
      file: mapFileSummary({
        ...e.file,
        ...t.payload.file
      })
    };
  } else if (ST.matches(t) && ("fullscreen" === e.view || "prototype" === e.view)) return {
    ...e,
    commentThreadId: void 0
  };else if (setWorkshopModeUntil.matches(t) && "fullscreen" === e.view) {
    let i = e.workshopUserNames || {};
    let r = !!t.payload && t.payload.id;
    let a = !!r && localStorage.getItem(generateAnonymouseName(r));
    r && a && (i[r] = a);
    let s = !!getStorage().get(SEEN_TRY_ONBOARDING_KEY);
    return {
      ...e,
      workshopModeInfo: r ? {
        id: r,
        until: t.payload.until
      } : void 0,
      workshopModeInfoLoaded: t.payload.loaded,
      workshopUserNames: i,
      starterKitHasBeenHidden: !1,
      figjamEditorOnboardingStarted: s,
      figjamEditorOnboardingFinishedOrDismissed: s
    };
  } else if (setWorkshopUserName.matches(t) && "fullscreen" === e.view) {
    let i = e.workshopModeInfo?.id;
    let n = e.workshopUserNames || {};
    i && (n[i] = t.payload.name);
    return {
      ...e,
      workshopUserNames: n
    };
  } else if (setStarterKitHasBeenHidden.matches(t)) return {
    ...e,
    starterKitHasBeenHidden: !0
  };else if (setFigmaEditorOnboardingStarted.matches(t)) return {
    ...e,
    figjamEditorOnboardingStarted: !0
  };else if (setFigmaEditorOnboardingFinishedOrDismissed.matches(t)) return {
    ...e,
    figjamEditorOnboardingFinishedOrDismissed: !0
  };
  return e;
}
export const NG = $$m0;
export const o0 = $$p1;