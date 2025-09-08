import { parseSessionLocalID, isValidSessionLocalID, sessionLocalIDToString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { Ay } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { parseAndNormalizeQuery } from "../905/634134";
import { sy } from "../figma_app/930338";
import { isInteractionPathCheck } from "../figma_app/897289";
import { getI18nString } from "../905/303541";
import { c5 } from "../905/93909";
import { L8, gN, At } from "../905/760074";
import { Zt } from "../figma_app/617727";
import { ge } from "../figma_app/349248";
import { LT, ZK } from "../figma_app/831696";
import { O } from "../905/833838";
function A(e) {
  return "proto" === e || "deck" === e || "presenter" === e;
}
export class $$y0 {
  pathToSelectedView(e, t, i, s) {
    let d = "test" === t[1] && "interactions" === t[2] && A(t[3]) && isInteractionPathCheck();
    d && (t = t.slice()).splice(1, 2);
    let u = t[1];
    if (A(u)) {
      let c = i ? parseAndNormalizeQuery(i) : {};
      let m = "branch" === t[3] && t[4] ? t[4] : t[2];
      d && (m = Zt);
      let f = e?.fileByKey[m];
      if (null == f) {
        let {
          editing_file
        } = getInitialOptions();
        editing_file && editing_file.key === m && (f = editing_file);
      }
      if (!f) throw Error(`Missing file object, path=${t.join("/")}, editingFile=${JSON.stringify(getInitialOptions().editing_file)}`);
      let A = {
        view: "prototype",
        file: ge(f)
      };
      "presenter" === u && (A.isPresenterView = !0);
      s = s ? s.slice(1) : "";
      c.scaling && (void 0 === A.scalingInfo && (A.scalingInfo = {}), A.scalingInfo.viewportScalingMode = c.scaling);
      c["content-scaling"] && (void 0 === A.scalingInfo && (A.scalingInfo = {}), A.scalingInfo.contentScalingMode = c["content-scaling"]);
      c["show-debug-stats"] && (A.showDebugStats = !0);
      c["version-id"] && (A.versionId = c["version-id"]);
      c["bg-color"] && (A.backgroundColorHex = 0xffffff & parseInt(c["bg-color"], 16));
      "1" === c["hide-ui"] && (A.hideUI = !0);
      "1" === c["bare-ui"] && (A.bareUI = !0);
      A.showHotspots = !0;
      "0" === c["hotspot-hints"] && (A.showHotspots = !1);
      A.showDeviceFrame = !0;
      "0" === c["device-frame"] && (A.showDeviceFrame = !1);
      "true" === c["mobile-optimizations"] ? A.mobileOptimizations = !0 : A.mobileOptimizations = !1;
      "1" === c["inline-viewer"] && (A.inlinePreview = !0);
      s && (A.commentThreadId = s);
      let y = c["node-id"];
      if (y) {
        let e = parseSessionLocalID(y);
        isValidSessionLocalID(e) && (A.nodeId = sessionLocalIDToString(e));
      }
      let b = c["starting-point-node-id"];
      if (b) {
        let e = parseSessionLocalID(b);
        isValidSessionLocalID(e) && (A.startingPointNodeId = sessionLocalIDToString(e));
      }
      if ("1" === c["show-proto-sidebar"] && (A.showProtoSidebar = !0), "1" === c["disable-default-keyboard-nav"] && (A.disableDefaultKeyboardNav = !0), ("1" === c["comments-enabled"] || "1" === c["allow-comments"]) && (A.commentsEnabled = !0), c["prev-plan-id"] && c["prev-plan-type"] && debugState.dispatch(c5({
        planId: c["prev-plan-id"],
        planType: "org" === c["prev-plan-type"] ? O.ORG : O.TEAM
      })), c["prev-selected-view"]) {
        if ("recentsAndSharing" === c["prev-selected-view"]) {
          let e = c["prev-tab"];
          A.prevSelectedView = {
            view: "recentsAndSharing",
            tab: e
          };
        } else "folder" === c["prev-selected-view"] && c["prev-folder-id"] && (A.prevSelectedView = {
          view: "folder",
          folderId: c["prev-folder-id"]
        });
      }
      A.isPresenterView && c["open-popout"] && (A.openAudienceViewPopout = !0);
      c.popout && (!getFeatureFlags().slides_pv_av_refresh || window.opener) && (A.isAudienceViewPopout = !0);
      c.share && (A.share = !0);
      return A;
    }
    return null;
  }
  requireHistoryChange(e, t) {
    return "prototype" === e.view && "prototype" === t.view && !!e.nodeId && e.nodeId !== t.nodeId;
  }
  selectedViewToPath(e, t) {
    if ("prototype" === e.view) {
      let i;
      if (e.file.key === Zt) return "/test/interactions/proto" === Ay.location.pathname ? `/test/interactions/proto${Ay.location.search}` : "/test/interactions/deck" === Ay.location.pathname ? `/test/interactions/deck${Ay.location.search}` : "/test/interactions/presenter" === Ay.location.pathname ? `/test/interactions/presenter${Ay.location.search}` : `/test/interactions${Ay.location.search}`;
      let n = this.selectedViewName(e, t);
      let r = e.file;
      let a = n ? sy(n) : "";
      let o = "proto";
      if (e.isPresenterView) o = "presenter";else switch (e.file.editor_type) {
        case "design":
        default:
          o = "proto";
          break;
        case "slides":
          o = "deck";
      }
      if (r) {
        let e = L8(r, t.repos);
        i = gN(r, e, o);
      } else {
        i = `/${o}/${e.file.key}`;
        a && (i += `/${a}`);
      }
      let l = t.lastVisitedPlan?.planId || null;
      let c = t.lastVisitedPlan?.planType || null;
      i += LT(e, l, c);
      return i += ZK(e.commentThreadId);
    }
    return null;
  }
  selectedViewName(e, t) {
    if ("prototype" === e.view) {
      let i = e.file;
      let n = e.file.name;
      if (i) {
        let e = L8(i, t.repos);
        e && (n = At(i, e));
        n = n ?? i.name;
      }
      return n ?? getI18nString("proto.prototype_view_selector.untitled");
    }
    return null;
  }
  selectedViewHasMissingResources(e, t) {
    return !1;
  }
}
export const f = $$y0;