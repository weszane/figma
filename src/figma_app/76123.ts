import { z } from "../905/207214";
import { isApproximatelyEqual } from "../905/259345";
import { VisualBellActions } from "../905/302958";
import { getI18nString } from "../905/303541";
import { debugState } from "../905/407919";
import { trackEventAnalytics } from "../905/449184";
import { logVerMessage } from "../905/449579";
import { handleAtomEvent } from "../905/502364";
import { getFeatureFlags } from "../905/601108";
import { createFigmaPluginScope } from "../905/629114";
import { cx, N7, sg, vk } from "../905/664512";
import { getSingletonSceneGraph } from "../905/700578";
import { logError } from "../905/714362";
import { atom, atomStoreManager } from "../figma_app/27355";
import { trackFileEvent } from "../figma_app/314264";
import { StackBindingsCpp } from "../figma_app/763686";
export let $$n5;
let $$b0 = atom(new Set());
let $$T1 = atom(new Set());
let $$I2 = atom("");
let $$S4 = "would-have-used-msal-onboarding-event";
function v(e) {
  let t = e => {
    let r = 0;
    for (let n of e) {
      n.type === "FRAME" && (r += 1);
      "children" in n && (r += t(n.children));
    }
    return r;
  };
  return t(e);
}
function A(e, t = 1) {
  let r = JSON.parse(JSON.stringify(e));
  return r.length < 1 ? r : t < 1 && "opacity" in r[0] ? r.map(e => ({
    ...e,
    opacity: e.opacity * t
  })) : r;
}
function x(e, t, r, n = !0, i = 1) {
  if (Array.isArray(e[r]) && Array.isArray(t[r])) {
    let a = n ? [...A(t[r]), ...A(e[r], i)] : [...A(e[r], i), ...A(t[r])];
    t[r] = a;
  }
}
class N {
  async autoSegmentNodesByRegion(e, t) {
    let r = createFigmaPluginScope();
    let n = [];
    let i = [];
    for (let r of e) {
      let {
        rootNode,
        newNodes
      } = await this.autoSegmentNodes(r, t);
      rootNode && i.push(rootNode);
      newNodes.forEach(e => n.push(e));
    }
    atomStoreManager.set($$b0, new Set(n.map(({
      id: e
    }) => e)));
    atomStoreManager.set($$T1, new Set(i.map(({
      id: e
    }) => e)));
    z(i, n);
    let a = r.currentPage;
    a.selection = a.selection.concat(i);
    return !0;
  }
  async autoSegmentNodes(e, t) {
    let r;
    let n = createFigmaPluginScope();
    try {
      let o;
      let c = performance.now();
      let u = (await Promise.all(e.map(e => n.getNodeByIdAsync(e)))).filter(e => e);
      let h = v(u);
      let m = function (e) {
        let t = [...e];
        let r = [];
        for (; t.length;) {
          let e = t.pop();
          if (!e) break;
          r.push(e.id);
          "children" in e && e.children.forEach(e => {
            t.push(e);
          });
        }
        return r;
      }(u);
      let y = (r = await N7(u, n, t)) ? v([r]) : 0;
      if (o = y - h, debugState.dispatch(VisualBellActions.enqueue({
        type: "msal-frames-created",
        message: getI18nString("fullscreen.properties_panel.stack_panel.msal_crated_frames_count", {
          count: o
        })
      })), getFeatureFlags().ce_al_track_msal_duration && trackEventAnalytics("autolayout_auto_segment_selection", {
        duration_ms: performance.now() - c,
        selectionSizeBeforeMSAL: h,
        selectionSizeAfterMSAL: y
      }, {
        forwardToDatadog: !0
      }), r) {
        !function e(t, r) {
          if (!t || t.type !== "FRAME") return;
          for (let n of t.children) e(n, r);
          let n = StackBindingsCpp.getBackgroundNodeCandidatesByGUID(t.id);
          if (n.backgroundNodes.length === 0) return;
          let a = r.getNodeById(n.backgroundNodes[0]);
          if (t.resize(a.width, a.height), a.absoluteBoundingBox && t.absoluteBoundingBox) {
            let e = a.absoluteBoundingBox.x - t.absoluteBoundingBox.x;
            let r = a.absoluteBoundingBox.y - t.absoluteBoundingBox.y;
            t.x += e;
            t.y += r;
          }
          for (let e of n.backgroundNodes) {
            let n = r.getNodeById(e);
            n && function (e, t, r = !0, n = "transferAndMaybeRemoveBackgroundNode", i = !0) {
              if (logVerMessage(`${n}`, `Merging background node (${e.id}) into: ${t}`, 3), e.removed) return;
              let a = 1;
              i && "opacity" in e && (a = e.opacity);
              x(e, t, "fills", r, a);
              x(e, t, "effects", r, a);
              x(e, t, "strokes", r, a);
              "strokes" in e && e.strokes.length > 0 && (t.strokeWeight = e.strokeWeight, t.strokeJoin = e.strokeJoin, t.dashPattern = e.dashPattern, t.strokeAlign = e.strokeAlign, "strokeCap" in e && !t.strokeCap && (t.strokeCap = e.strokeCap), "strokeMiterLimit" in e && (t.strokeMiterLimit = e.strokeMiterLimit), "strokeLeftWeight" in e && typeof e.strokeLeftWeight == "number" && t.strokeLeftWeight === 0 && (t.strokeLeftWeight = e.strokeLeftWeight), "strokeRightWeight" in e && typeof e.strokeRightWeight == "number" && t.strokeRightWeight === 0 && (t.strokeRightWeight = e.strokeRightWeight), "strokeTopWeight" in e && typeof e.strokeTopWeight == "number" && t.strokeTopWeight === 0 && (t.strokeTopWeight = e.strokeTopWeight), "strokeBottomWeight" in e && typeof e.strokeBottomWeight == "number" && t.strokeBottomWeight === 0 && (t.strokeBottomWeight = e.strokeBottomWeight));
              "cornerRadius" in e && typeof e.cornerRadius == "number" && t.cornerRadius === 0 && (t.cornerRadius = e.cornerRadius);
              "topLeftRadius" in e && typeof e.topLeftRadius == "number" && t.topLeftRadius === 0 && (t.topLeftRadius = e.topLeftRadius);
              "bottomLeftRadius" in e && typeof e.bottomLeftRadius == "number" && t.bottomLeftRadius === 0 && (t.bottomLeftRadius = e.bottomLeftRadius);
              "topRightRadius" in e && typeof e.topRightRadius == "number" && t.topRightRadius === 0 && (t.topRightRadius = e.topRightRadius);
              "bottomRightRadius" in e && typeof e.bottomRightRadius == "number" && t.bottomRightRadius === 0 && (t.bottomRightRadius = e.bottomRightRadius);
              e.type === "ELLIPSE" && isApproximatelyEqual(e.width, e.height) && (t.cornerRadius = t.width);
              (function (e, t) {
                if (!e || !e.boundVariables) return;
                let r = e.boundVariables;
                for (let e of ["width", "height", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "topLeftRadius", "topRightRadius", "bottomLeftRadius", "bottomRightRadius", "minWidth", "maxWidth", "minHeight", "maxHeight", "counterAxisSpacing", "strokeWeight", "strokeTopWeight", "strokeRightWeight", "strokeBottomWeight", "strokeLeftWeight"]) {
                  let n = r[e];
                  n && t.setBoundVariable(e, n.id);
                }
              })(e, t);
              i && e.remove();
            }(n, t, !0, "recursivelyMergeBackgroundFillToTLF");
          }
        }(r, n);
        let e = getSingletonSceneGraph().get(r.id);
        !e || e.isTopLevelFrame() || e.isState || (r.name = "Frame");
        return {
          rootNode: r,
          newNodes: function e(t, r) {
            let n = [];
            r.has(t.id) || n.push(t);
            "children" in t && t.children.forEach(t => {
              let i = e(t, r);
              n = n.concat(i);
            });
            return n;
          }(r, new Set(m))
        };
      }
    } catch (r) {
      logError("auto-layout", "Error running AAL segmentation", {
        e: r
      });
      let t = debugState.dispatch;
      r.name === "GraphResolutionError" ? (trackFileEvent("msal_error_try_again", debugState.getState().openFile?.key, debugState.getState(), {
        error: r,
        nodeIds: e
      }), t(VisualBellActions.enqueue({
        type: "msal-failure-graph-resolution",
        message: getI18nString("fullscreen.visual_bell.try_again_msal")
      }))) : (n.commitUndo(), n.triggerUndo(), trackFileEvent("msal_error_couldnt_suggest_auto_layout", debugState.getState().openFile?.key, debugState.getState(), {
        error: r,
        nodeIds: e
      }), t(VisualBellActions.enqueue({
        type: "msal-failure-other",
        message: getI18nString("fullscreen.visual_bell.could_not_suggest_auto_layout")
      })));
    }
    return {
      rootNode: null,
      newNodes: []
    };
  }
  async makeResponsive2(e) {
    let t = createFigmaPluginScope();
    for (let r of e) {
      for (let e of r) await cx(e, t);
    }
    t.commitUndo();
    return !0;
  }
  shouldRunSimpleStackDetection(e) {
    let t = createFigmaPluginScope();
    return sg(e, t);
  }
  runMakeResponsiveHeuristics(e) {
    let t = createFigmaPluginScope();
    cx(e, t);
  }
  trackShouldShowMSALOnboarding(e) {
    atomStoreManager.set($$I2, e);
    handleAtomEvent({
      id: $$S4
    });
  }
  async destroyAllAutoLayout(e) {
    let t = createFigmaPluginScope();
    let r = await vk(e, t);
    let n = debugState.dispatch;
    let i = r > 0 ? getI18nString("fullscreen_actions.destroy-all-auto-layout-result-visual-bell-toast", {
      numAutoLayoutsRemoved: r
    }) : getI18nString("fullscreen_actions.destroy-all-auto-layout-result-visual-bell-toast-zero");
    n(VisualBellActions.enqueue({
      message: i
    }));
    trackEventAnalytics("action_destroy_all_auto_layout", {
      numAutoLayoutsRemoved: r
    });
    t.commitUndo();
    return !0;
  }
}
export function $$C3() {
  $$n5 = new N();
}
export const Fj = $$b0;
export const GY = $$T1;
export const eC = $$I2;
export const gh = $$C3;
export const _$$in = $$S4;
export const mX = $$n5;