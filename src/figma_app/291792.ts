import { useMemo, useCallback, createElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { b as _$$b } from "../figma_app/124186";
import { n as _$$n } from "../5132/715664";
import { D as _$$D } from "../5132/780644";
import { J } from "../5132/948584";
import { l as _$$l } from "../905/241412";
import { W as _$$W } from "../5132/887999";
import { t as _$$t } from "../5132/435788";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { trackFullScreenAnalytics } from "../905/449184";
import { isChromebookTabbed } from "../figma_app/347146";
import { desktopAPIInstance } from "../figma_app/876459";
import { useProjectFileCreationPermissions } from "../figma_app/687776";
import { h as _$$h } from "../figma_app/334471";
import { getI18nString } from "../905/303541";
import { createNewFileWithRestrictions } from "../905/738636";
import { n6 } from "../905/234821";
import { generateFullscreenMenuItems } from "../905/36308";
import { useSendToMakeExperiment } from "../figma_app/297957";
import { $n, gW } from "../905/930279";
import { fullscreenValue } from "../figma_app/455680";
import { f as _$$f } from "../figma_app/990299";
import { isIntegrationContext } from "../905/87821";
import { isZoomIntegration } from "../figma_app/469876";
import { isFigmaNativeApp } from "../905/575846";
import { TY } from "../figma_app/701001";
import { Zr } from "../figma_app/678782";
import { buildAnalyticsContext } from "../905/210851";
import { resolveTeamId } from "../905/515860";
import { eE } from "../figma_app/952446";
import { selectCurrentFile, useCurrentFileKey, selectOpenFile } from "../figma_app/516028";
import { selectPermissionsState } from "../figma_app/212807";
import { B as _$$B } from "../905/524020";
import { d as _$$d } from "../905/647058";
import { FFileType } from "../figma_app/191312";
import { getPermissionsState } from "../figma_app/642025";
import { canEditAndHasChangesAtom } from "../figma_app/803787";
import { getCurrentTeamId } from "../figma_app/598018";
import { FileBrowserLocation, TabOpenBehavior } from "../figma_app/915202";
import { Yh } from "../figma_app/357047";
import { C as _$$C } from "../figma_app/444297";
import { getSelectedEditorType, getCurrentFileType } from "../figma_app/976749";
import { checkFileCmsCollections } from "../905/47975";
import { c4, fS, TJ } from "../figma_app/805925";
export function $$J1({
  debugMenuItems: e
}) {
  let t = $n();
  let r = Q({
    newFileFrom: FileBrowserLocation.EDITOR_MENU,
    branchingActionsStatus: t,
    shouldShowSlideConversionEntrypoint: !1
  });
  let a = useSelector(e => e.userStateLoaded);
  let s = useMemo(() => ({
    shouldShowBackToFiles: (!isIntegrationContext() || isZoomIntegration() && !!getFeatureFlags().integ_zoom_allow_file_switching) && !desktopAPIInstance && !isChromebookTabbed(),
    isDisabled: !a
  }), [a]);
  let o = c4();
  let l = useSelector(e => e.theme.themePreference);
  let d = ee();
  let c = et();
  let u = er();
  let p = fS();
  let h = TJ();
  return useMemo(() => generateFullscreenMenuItems({
    fileMenuArgs: r,
    pluginAndWidgetMenuArgs: o,
    additionalDebugItems: e,
    theme: l,
    backToFileArgs: s,
    zoomArgs: d,
    publishingModalArgs: c,
    spotlightArgs: u,
    drawArgs: p,
    mcpArgs: h
  }), [r, o, e, l, s, d, c, u, p, h]);
}
export function $$Z2() {
  let e = function () {
    let e = useAtomWithSubscription(eE);
    let t = TY();
    let r = _$$d();
    let a = selectCurrentFile();
    let s = selectPermissionsState();
    let o = getSelectedEditorType();
    let l = useSelector(e => e.mirror.appModel.topLevelMode);
    let d = useSelector(e => e.mirror.appModel.multiplayerSessionState);
    let c = getCurrentTeamId() || null;
    let u = useMemo(() => gW(a, s, o, e, l, d, t, c, r, null), [a, s, o, e, l, d, t, c, r]);
    let p = $n();
    return getFeatureFlags().branching_update_status_lg ? p : u;
  }();
  let t = _$$C();
  let r = Q({
    newFileFrom: FileBrowserLocation.EDITOR_QUICK_ACTIONS,
    branchingActionsStatus: e,
    shouldShowSlideConversionEntrypoint: t
  });
  let a = useMemo(() => ({
    shouldShowBackToFiles: !1
  }), []);
  let s = c4();
  let o = useSelector(e => e.theme.themePreference);
  let l = ee();
  let d = et();
  let c = er();
  let u = fS();
  let p = TJ();
  return useMemo(() => generateFullscreenMenuItems({
    fileMenuArgs: r,
    pluginAndWidgetMenuArgs: s,
    theme: o,
    backToFileArgs: a,
    zoomArgs: l,
    publishingModalArgs: d,
    spotlightArgs: c,
    drawArgs: u,
    mcpArgs: p
  }), [r, s, o, a, l, d, c, u, p]);
}
function Q({
  newFileFrom: e,
  branchingActionsStatus: t,
  shouldShowSlideConversionEntrypoint: r
}) {
  let h = function ({
    from: e
  }) {
    let t = getCurrentFileType();
    let r = useDispatch();
    let h = selectCurrentFile();
    let g = h?.currentPlanUser?.draftsFolderId ?? void 0;
    let f = h?.team;
    let I = _$$B();
    let {
      data
    } = useProjectFileCreationPermissions(g);
    let A = _$$h(data);
    let w = Zr("send-to-make-from-design");
    let R = useSendToMakeExperiment();
    let D = void 0 !== A.find(e => e.editorType === FFileType.FIGMAKE);
    let k = e === FileBrowserLocation.EDITOR_QUICK_ACTIONS && D && w && R();
    let F = useMemo(() => {
      let e = [...A];
      k && (e = e.filter(e => e.editorType !== FFileType.FIGMAKE));
      return e.sort((e, r) => e.editorType === t ? -1 : r.editorType === t ? 1 : 0);
    }, [t, A, k]);
    let U = useCallback(t => {
      trackFullScreenAnalytics(t, buildAnalyticsContext({
        source: e === FileBrowserLocation.EDITOR_MENU ? "menu" : "quick-actions"
      }));
    }, [e]);
    let G = useCallback(({
      editorType: t,
      trackingEventName: n
    }) => () => {
      let i = isFigmaNativeApp ? TabOpenBehavior.SAME_TAB : TabOpenBehavior.NEW_TAB;
      let a = createNewFileWithRestrictions({
        isDraftsFolder: !0,
        state: I,
        editorType: t,
        openNewFileIn: i,
        from: e,
        folderId: g,
        team: f ? {
          id: f.id,
          name: f.name,
          subscription: f.subscription,
          student_team: !!f.studentTeamAt,
          restrictions_list: f.restrictionsList,
          grace_period_end: f.gracePeriodEnd?.toISOString() ?? null
        } : void 0
      });
      U(n);
      return i === TabOpenBehavior.SAME_TAB ? fullscreenValue.dispatchIfSaved(a) : r(a);
    }, [r, I, g, f, e, U]);
    let V = useMemo(() => {
      if (t !== FFileType.DESIGN) return null;
      let e = F.find(({
        editorType: e
      }) => e === FFileType.DESIGN);
      return e ? {
        name: "new-from-sketch",
        displayText: getI18nString("fullscreen_actions.new-from-sketch"),
        callback: () => {
          U("action_new_from_sketch");
          fullscreenValue.dispatchIfSaved(_$$f());
        },
        iconType: createElement(_$$b),
        featureFlags: [],
        disabled: !e.canCreate
      } : null;
    }, [t, F, U]);
    let H = getFeatureFlags().ui3_design_file_creation_menu_nested;
    return useMemo(() => {
      if (isIntegrationContext()) return [];
      let e = F.map(({
        editorType: e,
        canCreate: r
      }) => {
        let i = !r;
        switch (e) {
          case FFileType.DESIGN:
            return {
              name: "new-design",
              displayText: H && t !== FFileType.DESIGN ? getI18nString("fullscreen_actions.creation_submenu.new-design") : getI18nString("fullscreen_actions.new-design"),
              callback: G({
                editorType: FFileType.DESIGN,
                trackingEventName: "action_new_design"
              }),
              iconType: createElement(_$$n),
              featureFlags: [],
              disabled: i
            };
          case FFileType.WHITEBOARD:
            return {
              name: "new-whiteboard",
              displayText: H && t !== FFileType.WHITEBOARD ? getI18nString("fullscreen_actions.creation_submenu.new-whiteboard") : getI18nString("fullscreen_actions.new-whiteboard"),
              searchSynonyms: ["figjam"],
              callback: G({
                editorType: FFileType.WHITEBOARD,
                trackingEventName: "action_new_whiteboard"
              }),
              iconType: createElement(_$$D),
              featureFlags: [],
              disabled: i
            };
          case FFileType.SITES:
            return {
              name: "new-site",
              displayText: H && t !== FFileType.SITES ? getI18nString("fullscreen_actions.creation_submenu.new-site") : getI18nString("fullscreen_actions.new-site"),
              searchSynonyms: ["sites", "website"],
              callback: G({
                editorType: FFileType.SITES,
                trackingEventName: "action_new_site"
              }),
              iconType: createElement(J),
              featureFlags: ["sites"],
              disabled: i
            };
          case FFileType.SLIDES:
            return {
              name: "new-slides",
              displayText: H && t !== FFileType.SLIDES ? getI18nString("fullscreen_actions.creation_submenu.new-slides") : getI18nString("fullscreen_actions.new-slides"),
              searchSynonyms: ["slides"],
              callback: G({
                editorType: FFileType.SLIDES,
                trackingEventName: "action_new_slides"
              }),
              iconType: createElement(_$$l),
              featureFlags: [],
              disabled: i
            };
          case FFileType.COOPER:
            return {
              name: "new-buzz",
              displayText: H && t !== FFileType.COOPER ? getI18nString("fullscreen_actions.creation_submenu.new-buzz") : getI18nString("fullscreen_actions.new-buzz"),
              callback: G({
                editorType: FFileType.COOPER,
                trackingEventName: "action_new_buzz"
              }),
              iconType: createElement(_$$W),
              featureFlags: ["cooper"],
              disabled: i
            };
          case FFileType.FIGMAKE:
            return {
              name: "new-rev",
              displayText: H && t !== FFileType.FIGMAKE ? getI18nString("fullscreen_actions.creation_submenu.new-rev") : getI18nString("fullscreen_actions.new-rev"),
              callback: G({
                editorType: FFileType.FIGMAKE,
                trackingEventName: "action_new_rev"
              }),
              iconType: createElement(_$$t),
              featureFlags: ["bake"],
              disabled: i
            };
          default:
            throwTypeError(e);
        }
      });
      let [r, ...i] = e;
      return r && H ? (V && i.push({
        separator: !0
      }, V), [r, {
        name: "file-new-menu",
        featureFlags: ["ui3_design_file_creation_menu_nested"],
        children: i
      }]) : (V && e.push(V), e);
    }, [t, H, F, G, V]);
  }({
    from: e
  });
  let g = useSelector(e => e.saveAsState);
  let f = useSelector(e => e.mirror.appModel.topLevelMode);
  let S = n6();
  let A = selectCurrentFile();
  let w = function () {
    let e = useCurrentFileKey();
    let {
      hasCollection,
      status
    } = checkFileCmsCollections({
      fileKey: e ?? ""
    });
    return "loaded" === status && hasCollection;
  }();
  return useMemo(() => ({
    fileCreationMenuItems: h,
    branchingActionsStatus: t,
    saveAsState: g,
    topLevelMode: f,
    unreadCommentCount: S,
    shouldShowSlideConversionEntrypoint: r,
    openFile: A,
    hasCollections: w
  }), [h, t, g, f, S, r, A, w]);
}
function ee() {
  let e = Zr("zoom-in");
  let t = Zr("zoom-out");
  return useMemo(() => ({
    canZoomOut: t,
    canZoomIn: e
  }), [e, t]);
}
function et() {
  let e = useAtomWithSubscription(canEditAndHasChangesAtom);
  return useMemo(() => ({
    isPublishingModalDisabled: !e
  }), [e]);
}
function er() {
  let e = Zr("spotlight-me");
  return useMemo(() => ({
    spotlightDisabledForSelf: !e
  }), [e]);
}
export function $$en0(e, {
  fullscreenMemoryWarningLevel: t,
  unreadCommentCount: r,
  pluginAndWidgetMenuArgs: n,
  isRecovery: i,
  isUserInLimitedSpace: a,
  isPublishingModalDisabled: s
}) {
  let o = resolveTeamId(e) || null;
  let l = getFeatureFlags().branching_update_status_lg ? {
    createBranch: {
      status: "hidden"
    },
    openBranchSource: {
      status: "hidden"
    },
    viewBranches: {
      status: "hidden"
    },
    viewBranchDiff: {
      status: "hidden"
    },
    mergeBranch: {
      status: "hidden"
    },
    viewSourceDiff: {
      status: "hidden"
    },
    updateBranch: {
      status: "hidden"
    }
  } : gW(selectOpenFile(e), getPermissionsState(e), e.selectedView.editorType, t, e.mirror.appModel.topLevelMode, e.mirror.appModel.multiplayerSessionState, i, o, a, null);
  return generateFullscreenMenuItems({
    fileMenuArgs: {
      fileCreationMenuItems: [],
      branchingActionsStatus: l,
      saveAsState: e.saveAsState,
      topLevelMode: e.mirror.appModel.topLevelMode,
      unreadCommentCount: r,
      shouldShowSlideConversionEntrypoint: !1,
      openFile: selectOpenFile(e),
      hasCollections: !1
    },
    pluginAndWidgetMenuArgs: n,
    theme: e.theme.themePreference,
    backToFileArgs: {
      shouldShowBackToFiles: !1
    },
    zoomArgs: {
      canZoomIn: Yh(e.mirror.appModel, "zoom-in"),
      canZoomOut: Yh(e.mirror.appModel, "zoom-out")
    },
    publishingModalArgs: {
      isPublishingModalDisabled: s
    },
    spotlightArgs: {
      spotlightDisabledForSelf: !Yh(e.mirror.appModel, "spotlight-me")
    }
  });
}
export const of = $$en0;
export const d$ = $$J1;
export const FX = $$Z2;