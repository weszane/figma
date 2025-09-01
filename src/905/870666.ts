import { lQ } from "../905/934246";
import { SceneGraphUnavailableError } from "../figma_app/518682";
import { lyf, hMR } from "../figma_app/763686";
import { fn, sH } from "../905/871411";
import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { O } from "../905/561581";
import { eD } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { Ay } from "../905/612521";
import { Ay as _$$Ay } from "../figma_app/778880";
import { parseAndNormalizeQuery, parseQuery, serializeQuery } from "../905/634134";
import { sy } from "../figma_app/930338";
import { QJ } from "../figma_app/257275";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { c5 } from "../905/93909";
import { h as _$$h } from "../905/662353";
import { L8, gN, At } from "../905/760074";
import { cF } from "../figma_app/527873";
import { EO } from "../905/691205";
import { Zt } from "../figma_app/617727";
import { b as _$$b, d as _$$d } from "../905/91820";
import { zO, Ex } from "../905/327571";
import { Vv } from "../905/32091";
import { nT, wN } from "../figma_app/53721";
import { O as _$$O } from "../905/833838";
import { f0 } from "../figma_app/707808";
import { eE, Hz } from "../905/366346";
export function $$O0(e) {
  return "fullscreen" === e.view && e.editorType === nT.Whiteboard;
}
export class $$D1 {
  pathToSelectedView(e, t, i, r) {
    let s = i ? parseAndNormalizeQuery(i) : {};
    r = r ? r.slice(1) : "";
    let o = t[1];
    if ("file" === o || "design" === o || "board" === o || "slides" === o || "site" === o || "buzz" === o || "rev" === o || "make" === o) {
      let i = "design";
      if ("file" === o && s.type) i = s.type;else if ("file" !== o) switch (o) {
        case "design":
          i = "design";
          break;
        case "board":
          i = "whiteboard";
          break;
        case "slides":
          i = "slides";
          break;
        case "site":
          i = "sites";
          break;
        case "buzz":
          i = "cooper";
          break;
        case "make":
        case "rev":
          i = "figmake";
      }
      let d = {
        view: "fullscreen",
        editorType: wN(i)
      };
      if ("branch" === t[3] && t[4] ? d.fileKey = t[4] : "new" !== t[2] && (d.fileKey = t[2]), r && ("commentPreferences" === r ? d.showCommentPreferencesPicker = !0 : d.commentThreadId = r), "code" === s["properties-panel-tab"] && (d.showInspectPanel = !0), s["node-id"] && (d.nodeId = s["node-id"]), s["code-node-id"] && (getFeatureFlags().sts_code_authoring || getFeatureFlags().sts_code_authoring_by_plan) && (d.codeNodeId = s["code-node-id"].replace("-", ":")), s.view && (d.sitesView = eE(s.view)), s["state-group-id"] && (d.fallbackStateGroupId = s["state-group-id"]), s["version-id"] && (d.versionId = s["version-id"]), s["compare-version-id"] && !s["version-id"] && (d.compareVersionId = s["compare-version-id"]), s["compare-latest"] && (d.compareLatest = !0), s["frame-preset-name"] && (d.framePresetName = s["frame-preset-name"]), s["merge-branch-key"] && s["merge-source-key"] && s["merge-direction"] && (d.mergeParams = {
        branchKey: s["merge-branch-key"],
        sourceKey: s["merge-source-key"],
        direction: s["merge-direction"]
      }, s["merge-back-key"] && (d.mergeParams.backFileKey = s["merge-back-key"]), s["checkpoint-diff-url"] && (d.mergeParams.mergeOnFileOpen = !0, d.mergeParams.checkpointDiffURL = s["checkpoint-diff-url"]), s["merge-to-checkpoint-key"] && (d.mergeParams.toCheckpointKey = s["merge-to-checkpoint-key"]), s["merge-from-checkpoint-key"] && (d.mergeParams.fromCheckpointKey = s["merge-from-checkpoint-key"])), s["review-number"]) {
        let e = parseInt(s["review-number"]);
        isNaN(e) || (d.reviewNumber = e);
      }
      if (s["open-review"] && (d.openReview = !0), getFeatureFlags().dakota && s["cms-item-id"] && (d.cmsItemId = s["cms-item-id"]), s.$$new && (d.preloaded = !0), s.viewport) {
        let e = s.viewport.split(",");
        3 !== e.length || isNaN(+e[0]) || isNaN(+e[1]) || isNaN(+e[2]) || (d.viewport = s.viewport);
      }
      if (("duplicate" === t[4] || s.duplicate) && (d.landingState = "DUPLICATE"), s["try-plugin-id"] && (d.tryPluginId = s["try-plugin-id"]), s["try-plugin-version-id"] && (d.tryPluginVersionId = s["try-plugin-version-id"]), s["try-plugin-name"] && (d.tryPluginName = s["try-plugin-name"]), s["try-plugin-editor-type"] && (d.tryPluginEditorType = zO(s["try-plugin-editor-type"])), s["try-plugin-params"] && (d.tryPluginParams = Ex(s)), "1" === s["is-widget"] && (d.isWidget = !0), "1" === s["is-playground-file"] && (d.isPlaygroundFile = !0), s["try-plugin-file-key"] && (d.tryPluginFileKey = s["try-plugin-file-key"]), s["library-hub-file-id"] && (d.libraryHubFileId = s["library-hub-file-id"]), "1" === s["comments-enabled"] && (d.commentsEnabled = !0), s.source && (d.trackingInfo = {
        source: s.source
      }), "1" === s["main-component"] && (d.mainComponentLink = !0), s.teamToMoveFileToOnNavigate && (d.teamToMoveFileToOnNavigate = s.teamToMoveFileToOnNavigate), "1" === s["is-freemium-preview"] && (d.isFreemiumPreview = !0), s["google-classroom-open-share-settings"] && (d.showPermissionsModalFromGoogleClassroomIntegration = !0), ("design" === o || "design" === s.mode || "view" === s.mode) && (d.mode = "design"), "auto" === s.m && (d.mode = void 0), s.recovery && "design" === i && _$$Ay.isWasm4gbSupported && e.mirror.appModel.topLevelMode === lyf.LAYOUT && ((hMR?.getTotalUsedHeapMemory() ?? 0) > 2 * cF || "true" === s.recovery ? (d.isRecoveryMode = !0, console.log("Entering Recovery Mode")) : d.isRecoveryMode = !1), s["prev-plan-id"] && s["prev-plan-type"]) {
        let e = "org" === s["prev-plan-type"] ? _$$O.ORG : _$$O.TEAM;
        debugState.dispatch(c5({
          planId: s["prev-plan-id"],
          planType: e
        }));
      }
      if (s["prev-selected-view"]) {
        if ("recentsAndSharing" === s["prev-selected-view"]) {
          let e = s["prev-tab"];
          d.prevSelectedView = {
            view: "recentsAndSharing",
            tab: e
          };
        } else "folder" === s["prev-selected-view"] && s["prev-folder-id"] && (d.prevSelectedView = {
          view: "folder",
          folderId: s["prev-folder-id"]
        });
      }
      if (s.workshop_id && s.workshop_username && s.workshop_username.trim().length > 0) {
        let e = s.workshop_id;
        let t = s.workshop_username;
        d.workshopUserNames = {};
        d.workshopUserNames[e] = t;
        Vv(e, t);
      }
      s.claim && (d.claim = s.claim);
      s["google-classroom"] && debugState.dispatch(F.enqueue({
        message: _$$t("whiteboard.google_classroom.addon.submission_reminder"),
        timeoutOverride: 1 / 0,
        onDismiss: lQ
      }));
      s.fullscreen && (d.figmakeView = f0.FULLSCREEN_PREVIEW);
      return d;
    }
    if ("jam" === t[1]) {
      let e = {
        view: "fullscreen",
        editorType: nT.Whiteboard
      };
      s["try-plugin-id"] && (e.tryPluginId = s["try-plugin-id"]);
      s["try-plugin-version-id"] && (e.tryPluginVersionId = s["try-plugin-version-id"]);
      s["try-plugin-name"] && (e.tryPluginName = s["try-plugin-name"]);
      "1" === s["is-widget"] && (e.isWidget = !0);
      "1" === s["is-playground-file"] && (e.isPlaygroundFile = !0);
      return e;
    }
    if ("test" === t[1] && ("interactions" === t[2] || "eval" === t[2])) {
      let e = i ? parseQuery(i) : {};
      let t = {
        view: "fullscreen",
        fileKey: Zt,
        editorType: nT.Design
      };
      e["node-id"] && (t.nodeId = e["node-id"]);
      return t;
    }
    return null;
  }
  requireHistoryChange(e, t) {
    return "fullscreen" === e.view != ("fullscreen" === t.view) || "fullscreen" === e.view && "fullscreen" === t.view && e.fileKey !== t.fileKey;
  }
  DEPRECATED_getDefaultResources(e) {
    let {
      fileByKey,
      repos
    } = debugState.getState();
    let n = e.fileKey && fileByKey ? fileByKey[e.fileKey] : void 0;
    return {
      file: n,
      repo: n ? L8(n, repos) : void 0
    };
  }
  selectedViewToPath(e, t) {
    if ("fullscreen" === e.view) {
      let i;
      if (e.fileKey === Zt) return QJ() ? `/test/eval/view${Ay.location.search}` : `/test/interactions${Ay.location.search}`;
      let n = this.selectedViewName(e, t);
      let a = n ? sy(n) : "";
      let p = {};
      let h = e.fileKey || "new";
      let A = "design";
      switch (e.editorType) {
        case nT.Whiteboard:
          A = "board";
          break;
        case nT.Slides:
          A = "slides";
          break;
        case nT.Sites:
          A = "site";
          break;
        case nT.Cooper:
          A = "buzz";
          break;
        case nT.Figmake:
          A = "make";
          break;
        default:
          A = "design";
      }
      let {
        file,
        repo
      } = t.resources || this.DEPRECATED_getDefaultResources(e);
      if (file ? i = gN(file, repo || null, A) : (i = `/${A}/${h}`, null == e.fileKey || (a ? i += `/${a}` : i += "/Untitled")), e.landingState && "DUPLICATE" === e.landingState && (i += "/duplicate"), "design" === A && "auto" === e.mode && (p.m = "auto"), e.versionId && (p["version-id"] = e.versionId), e.compareVersionId && (p["compare-version-id"] = e.compareVersionId), e.compareLatest && (p["compare-latest"] = "1"), e.newFile && (p.$$new = "1"), e.nodeId && fn(sH(e.nodeId)) && (p["node-id"] = EO(e.nodeId)), e.codeNodeId && fn(sH(e.codeNodeId)) && (p["code-node-id"] = EO(e.codeNodeId)), e.editorType === nT.Sites && e.sitesView && (p.view = Hz(e.sitesView)), e.nodeId && fn(sH(e.nodeId))) try {
        let t = UN().get(e.nodeId)?.type;
        t && ["CANVAS", "DOCUMENT"].includes(t || "") && (p.p = "f");
      } catch (e) {
        if (!(e instanceof SceneGraphUnavailableError)) throw e;
      }
      e.isRecoveryMode && (p.recovery = e.isRecoveryMode);
      e.viewport && (p.viewport = e.viewport);
      e.framePresetName && (p["frame-preset-name"] = e.framePresetName);
      e.reviewNumber && (p["review-number"] = e.reviewNumber);
      e.mergeParams && (p["merge-branch-key"] = e.mergeParams.branchKey, p["merge-source-key"] = e.mergeParams.sourceKey, p["merge-direction"] = e.mergeParams.direction, e.mergeParams.toCheckpointKey && (p["merge-to-checkpoint-key"] = e.mergeParams.toCheckpointKey), e.mergeParams.fromCheckpointKey && (p["merge-from-checkpoint-key"] = e.mergeParams.fromCheckpointKey), e.mergeParams.backFileKey && (p["merge-back-key"] = e.mergeParams.backFileKey), e.mergeParams.mergeOnFileOpen && (p["merge-on-file-open"] = e.mergeParams.mergeOnFileOpen), e.mergeParams.checkpointDiffURL && (p["checkpoint-diff-url"] = e.mergeParams.checkpointDiffURL));
      e.teamToMoveFileToOnNavigate && (p.teamToMoveFileToOnNavigate = e.teamToMoveFileToOnNavigate);
      getFeatureFlags().dakota && e.cmsItemId && (p["cms-item-id"] = e.cmsItemId);
      let E = _$$b(t.sharingAttributionContextKey, _$$d.BROWSER_ADDRESS_BAR);
      if (E && (p.t = E), e.figmakeView === f0.FULLSCREEN_PREVIEW && (p.fullscreen = "1"), eD) {
        let e = zl.get(_$$h);
        null != e && (p.localFileKey = e);
      }
      O() && (p._app_shell = "1");
      Object.keys(p).length > 0 && (i += `?${serializeQuery(p)}`);
      e.commentThreadId && (i += `#${e.commentThreadId}`);
      window.EARLY_ARGS?.multiplayer_preconnect_options?.forceIncrementalForEditors !== void 0 && (i += `&force-incremental=${window.EARLY_ARGS?.multiplayer_preconnect_options?.forceIncrementalForEditors}`);
      return i;
    }
    return null;
  }
  selectedViewNameHelper(e, t) {
    return `${t ? At(e, t) : e.name}`;
  }
  selectedViewName(e, t) {
    if ("fullscreen" === e.view) {
      let i = null;
      if (e.fileKey) {
        let {
          file,
          repo
        } = t.resources || this.DEPRECATED_getDefaultResources(e);
        file && (i = this.selectedViewNameHelper(file, repo || null));
      }
      e.tryPluginName && !e.tryPluginFileKey && (i = e.tryPluginName);
      return i ?? _$$t("fullscreen.fullscreen_view_selector.untitled");
    }
    return null;
  }
  selectedViewHasMissingResources(e, t) {
    return "fullscreen" === t.view && !!t.fileKey && !(t.fileKey in e.fileByKey);
  }
}
export const C = $$O0;
export const a = $$D1;