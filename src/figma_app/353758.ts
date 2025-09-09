import { useState, useRef, useEffect, createElement } from "react";
import { CodeFileIdHandler } from "../figma_app/243058";
import { UserInterfaceElements, SnapshotStatus, InsertErrorType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atom, atomStoreManager } from "../figma_app/27355";
import p from "lodash-es/camelCase";
import h from "../vendor/77708";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { Timer } from "../905/609396";
import { PN, isInteractionPathCheck } from "../figma_app/897289";
import { FP } from "../figma_app/91703";
import { me } from "../figma_app/223206";
import { fullscreenValue } from "../figma_app/455680";
import { r as _$$r } from "../905/955316";
import { ze } from "../figma_app/516028";
import { Ts } from "../905/994545";
import { A as _$$A } from "../905/929620";
import { ks, Vm } from "../figma_app/838407";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { H as _$$H } from "../figma_app/414056";
import { iD, kv } from "../figma_app/259678";
import { r as _$$r2 } from "../905/571838";
import { renderI18nText } from "../905/303541";
import { hi } from "../figma_app/114522";
import { f as _$$f } from "../figma_app/695131";
import { NC, Ah, _5 } from "../figma_app/119420";
import { gz } from "../figma_app/302802";
import { M5, qs, fM } from "../figma_app/346422";
import { hB, wn } from "../figma_app/609511";
import { GV, Xl } from "../figma_app/72338";
import { Mj } from "../figma_app/346269";
import { Jh, YE } from "../figma_app/552876";
import Y from "../vendor/805353";
import { oD } from "../figma_app/991782";
import { _b, W as _$$W } from "../figma_app/618665";
import { Vg } from "../figma_app/410518";
import { V as _$$V, S as _$$S } from "../figma_app/694362";
import { jT, K8 } from "../figma_app/108909";
import { M as _$$M } from "../figma_app/411986";
let i = `import { defineProperties } from "figma:react";

export default function Layer({ text }) {
  return (
    <div className="flex flex-wrap items-center justify-center size-full p-2 gap-1 bg-blue-600 text-white rounded-xl">
      <div className="text-md font-light truncate">{text}</div>
    </div>
  );
}

defineProperties(Layer, {
  text: {
    label: "Text",
    type: "string",
    defaultValue: "Code layer",
  },
});`;
var _ = p;
var m = h;
function O({
  borderRadiusStyle: e
}) {
  return jsx("div", {
    className: "x10l6tqk x13vifvy xu96u03 xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xkszdks x1c6el4k xz4fkyq x17t6hpn x1ewlznk x1c74tu6 x1esw782 xa4qsjk xfo81ep x47corl xb3r6kr",
    style: e,
    children: jsx(_$$H, {})
  });
}
let D = "devtools_error_overlay--title--lz3QU";
let k = "devtools_error_overlay--subtitle--5P0ak";
var M = (e => (e.STALE = "stale", e.ERROR = "error", e.SOFT_DELETED = "soft_deleted", e))(M || {});
function F({
  location: e,
  message: t,
  type: r
}) {
  let [i, a] = useState(!1);
  let s = useRef(null);
  useEffect(() => {
    if (!s.current) return;
    let e = new ResizeObserver(e => {
      for (let t of e) {
        let {
          width,
          height
        } = t.contentRect;
        a(width < 196 || height < 100);
      }
    });
    e.observe(s.current);
    return () => {
      e.disconnect();
    };
  }, []);
  return jsxs("div", {
    ref: s,
    className: `devtools_error_overlay--error--F5t0F ${i ? "devtools_error_overlay--smallSize--aMlgI" : ""}`,
    "data-testid": "devtools-error-overlay",
    children: [jsx(_$$r2, {}), "window" === e ? jsxs(Fragment, {
      children: [jsx("div", {
        className: D,
        children: t ?? renderI18nText("sites.code_component.error_overlay_title")
      }), jsx("div", {
        className: k,
        children: renderI18nText("sites.code_component.error_overlay_subtitle_window")
      })]
    }) : jsxs(Fragment, {
      children: [jsxs("div", {
        className: D,
        children: ["stale" === r && renderI18nText("sites.code_component.error_overlay_title_stale"), "error" === r && renderI18nText("sites.code_component.error_overlay_title"), "soft_deleted" === r && renderI18nText("sites.code_component.error_overlay_title_soft_deleted")]
      }), jsxs("div", {
        className: k,
        children: ["stale" === r && renderI18nText("sites.code_component.error_overlay_subtitle_canvas_stale"), "error" === r && renderI18nText("sites.code_component.error_overlay_subtitle_canvas")]
      })]
    })]
  });
}
var $ = Y;
let Q = (e, t) => {
  let r = e(ee);
  let n = e(_$$V);
  for (let e of r) {
    t(Vg(e));
    (n = n.filter(t => t !== e)).push(e);
  }
  t(ee, new Set());
  t(_$$S, n);
};
let ee = atom(new Set());
let et = $()(Q, 30);
let er = $()(Q, 3e3);
let en = atom(null, (e, t, r) => {
  let n = e(ee);
  for (let e of r) n.add(e);
  t(ee, new Set(n));
  e(_b)?.mode === "modal" && t(_$$W, !0);
  e(oD) ? (er.cancel(), et(e, t)) : (et.cancel(), er(e, t));
  PN() && (et.flush(), er.flush());
});
function es(e, t) {
  return "pending" !== e.status && "error" !== e.status && e.nodeGuid === t;
}
let eo = e => {
  let t = e.stackMode;
  return "HORIZONTAL" === t && "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackCounterSizing || "VERTICAL" === t && "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackPrimarySizing;
};
let el = e => {
  let t = e.stackMode;
  return "HORIZONTAL" === t && "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackPrimarySizing || "VERTICAL" === t && "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackCounterSizing;
};
function ed(e) {
  return e.endsWith(".ts") ? e.substring(0, e.length - 3) : e.endsWith(".tsx") ? e.substring(0, e.length - 4) : e;
}
function ec() {
  return !!Jh(debugState.getState().selectedView);
}
export let $$eu0 = new class {
  constructor() {
    this._isUpdating = !1;
    this._dirtyNodes = new Set();
    this._designToReactNodes = new Map();
    this._dirtyCodeInstanceSnapshots = new Set();
    this._codeNodeDebounceTimeouts = new Map();
    this._codeNodeSnapshotNumber = new Map();
    this._codeNodeGUIDsWithSourceCodeToSync = new Set();
    this._sourceCodeSyncTimeout = null;
    this._staleSnapshotTimers = new Map();
    this._codeSnapshotOverlays = new Set();
    this._directManipulationCanvasEditor = new Mj();
    this._derivedCodeFilesPendingRegeneration = new Map();
  }
  isDirectManipulationOnCanvasEnabled() {
    return getFeatureFlags().bake_direct_manipulation_on_canvas || !1;
  }
  updatePreview(e) {
    if (this._isUpdating) {
      for (let t of e) this._dirtyNodes.add(t);
      return;
    }
    _$$M && (this._isUpdating = !0, _$$M(e).$$finally(() => {
      if (this._isUpdating = !1, this._dirtyNodes.size > 0) {
        let e = this._dirtyNodes;
        this._dirtyNodes = new Set();
        this.updatePreview(e);
      }
    }));
  }
  updateDirtyResponsiveSets(e) {
    atomStoreManager.set(en, [...e]);
  }
  setLeftPanelTabToCode() {
    debugState.dispatch(FP({
      tab: UserInterfaceElements.CODE
    }));
  }
  setCodeWindowPanelToChat() {
    atomStoreManager.set(hi, "chat");
  }
  markNodeAsDesignToReact(e, t) {
    this._designToReactNodes.set(e, t);
  }
  markCodeNodesDirty(e) {
    if (!debugState.getState().openFile?.canEdit) return;
    let t = new Timer();
    t.start();
    let r = 0;
    let n = 0;
    for (let i of e) {
      let e = getSingletonSceneGraph().get(i);
      if (!e) continue;
      let a = e.isCodeInstance && e.parentGuid && e.parentGuid !== getSingletonSceneGraph().getInternalCanvas()?.guid;
      let s = this._dirtyCodeInstanceSnapshots.has(i);
      this._dirtyCodeInstanceSnapshots.add(i);
      let o = this._codeNodeDebounceTimeouts.get(i);
      o && clearTimeout(o);
      let l = (this._codeNodeSnapshotNumber.get(i) ?? 0) + 1;
      this._codeNodeSnapshotNumber.set(i, l);
      let c = e.isInitialCodeSnapshot && 1 === l ? 0 : 500;
      if (!s && a) {
        let t = this.getTimestampForCodeSnapshotInvalidatedAt();
        e.startCodeSnapshottingState(t);
      }
      this._staleSnapshotTimers.has(i) && (clearTimeout(this._staleSnapshotTimers.get(i)), this._staleSnapshotTimers.$$delete(i));
      r++;
      this._codeNodeDebounceTimeouts.set(i, setTimeout(() => {
        let s;
        this._codeNodeDebounceTimeouts.$$delete(i);
        let o = this._designToReactNodes.has(i);
        let d = i;
        let c = !0;
        if (o && (s = this._designToReactNodes.get(i), this._designToReactNodes.$$delete(i)), o && analyticsEventManager.trackDefinedEvent("design_to_react.design_to_react_code_generated", {
          selectedFileKey: atomStoreManager.get(ze) ?? void 0,
          selectedNodeId: s,
          codeInstanceGuid: d,
          isFigmake: ec()
        }), a) {
          let i;
          n++;
          let a = new Timer();
          a.start();
          this.performCodeNodeSnapshot(e, l).then(e => {
            i = e;
            fullscreenValue.clearVisualBellType("code-component-error");
          }).catch(t => {
            c = !1;
            let r = t.message || String(t);
            e.isAlive && (e.codeComponentError = r);
          }).$$finally(() => {
            r--;
            let e = a.getElapsedTime();
            if (a.stop(), 0 === r) {
              let e = t.getElapsedTime();
              t.stop();
              analyticsEventManager.trackDefinedEvent("sites.code_snapshot_time", {
                selectedFileKey: atomStoreManager.get(ze) ?? void 0,
                isFigmake: ec(),
                elapsedTimeMs: e,
                numSnapshotsAttempted: n
              });
            }
            analyticsEventManager.trackDefinedEvent("sites.individual_code_snapshot_time", {
              selectedFileKey: atomStoreManager.get(ze) ?? void 0,
              selectedNodeIdDesignToReact: s,
              codeInstanceGuid: d,
              isFigmake: ec(),
              elapsedTimeMs: e,
              snapshotResult: i
            });
            o && analyticsEventManager.trackDefinedEvent("design_to_react.design_to_react_code_validity", {
              selectedFileKey: atomStoreManager.get(ze) ?? void 0,
              selectedNodeId: s,
              codeInstanceGuid: d,
              isFigmake: ec(),
              isCodeValid: c
            });
          });
        } else r--;
        this.performSourceCodeAnalysis(e).catch(e => {
          console.error("Error performing code file analysis:", e);
        });
      }, c));
    }
  }
  setAutoDeploySupabase() {
    atomStoreManager.set(GV, !0);
  }
  showSupabaseDeployNudge() {
    atomStoreManager.set(Xl, !0);
  }
  async performCodeNodeSnapshot(e, t) {
    if (isInteractionPathCheck()) {
      console.log("Skipping performSnapshot during interaction tests");
      return "Skipping for interaction test";
    }
    if (e.codeCreatedFromDesign && "// Converting designs to code\u2026" === e.sourceCode) return "Skipping for in-progress D2R";
    let r = !!ec() || (!!getFeatureFlags().multi_file_code_layers || !!getFeatureFlags().bake_canvas) && !!e.isLayerLikeCodeNode && e.backingCodeComponent?.name === "App";
    let n = await gz({
      node: e,
      tailwind: !0,
      jsxDev: this.isDirectManipulationOnCanvasEnabled(),
      shadcn: r,
      noWrapper: r
    });
    if (!n || !e.isAlive) {
      console.warn("Node was removed before snapshot could be produced");
      return "Node was removed before snapshot could be produced";
    }
    let i = jT(e);
    let a = K8(e);
    let s = el(e) ? void 0 : e.size.x ?? 0;
    let o = eo(e) ? void 0 : e.size.y ?? 0;
    let d = e.containingBreakpointFrame;
    let u = d ? {
      name: d.name,
      width: d.size.x,
      height: d.size.y
    } : void 0;
    let p = await hB({
      activeBreakpoint: u
    });
    if (!e.isAlive) {
      console.warn("Node was removed before snapshot could be produced");
      return "Node was removed before snapshot could be produced";
    }
    let {
      imageSet,
      layoutWidth,
      layoutHeight,
      totalWidth,
      totalHeight,
      offsetX,
      offsetY,
      directManipulationSnapshot
    } = await p.snapshot({
      guid: e.guid,
      code: n.esm,
      codeBuildId: n.codeBuildId,
      exportName: e.backingCodeComponent?.codeExportName,
      width: s,
      height: o,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      props: i,
      instanceSwapProps: a,
      styles: n.css,
      isDirectManipulationOnCanvasEnabled: this.isDirectManipulationOnCanvasEnabled()
    });
    if (this._codeNodeSnapshotNumber.get(e.guid) !== t || this._codeNodeDebounceTimeouts.has(e.guid)) return "Snapshot is stale";
    let I = !YE();
    if (e.setCodeSnapshot(imageSet, {
      x: offsetX,
      y: offsetY
    }, {
      x: layoutWidth,
      y: layoutHeight
    }, {
      x: totalWidth,
      y: totalHeight
    }, I), this._dirtyCodeInstanceSnapshots.$$delete(e.guid), directManipulationSnapshot) {
      let t = new Set();
      for (let e of Object.values(directManipulationSnapshot.fiberNodes)) null === e.elementInfo && e.displayName && t.add(e.displayName);
      if (t.size > 0 && e.sourceCode) try {
        let r = await M5(e.sourceCode, Array.from(t));
        this._directManipulationCanvasEditor.setStaticComponentPropInfo(e.guid, r);
      } catch (e) {
        console.warn("Component analysis failed:", e);
      }
      this._directManipulationCanvasEditor.createSceneGraphNodesForDirectManipulation(directManipulationSnapshot, e.guid, {
        codeFilesystem: n.codeFilesystem,
        codeFilesystemMetadata: n.codeFilesystemMetadata,
        codeBuildId: n.codeBuildId
      });
    }
    return "Fresh snapshot completed";
  }
  getCodeLayersDefaultEntryPointFile() {
    return i;
  }
  async performSourceCodeAnalysis(e) {
    if (!e.isAlive || !this.isDirectManipulationOnCanvasEnabled() && !e?.isCodeFile || !/\.(ts|tsx)$/i.test(e.codeFileFullPath)) return;
    let t = e.sourceCode;
    if (!t || "// Converting designs to code\u2026" === t) return;
    let r = {
      exportedCodeComponents: []
    };
    if (!ec() || "App.tsx" === e.name) {
      let t = await gz({
        node: e,
        tailwind: !1,
        jsxDev: !1,
        shadcn: ec(),
        noWrapper: ec()
      });
      if (t) {
        let e = await hB();
        r = await e.analyzeCodeFile({
          code: t.esm,
          codeBuildId: t.codeBuildId
        });
      }
    }
    let n = await qs(t);
    let i = r.exportedCodeComponents;
    if (r.exportedCodeComponents.some(e => !e.props) && (i = i.map(e => {
      if (e.props) return e;
      let t = n.exportedCodeComponents.find(t => t.codeExportName === e.codeExportName);
      return t ? {
        ...e,
        props: t.props
      } : e;
    })), e.isAlive) {
      if (this.isDirectManipulationOnCanvasEnabled()) {
        let t = {};
        for (let e of i) {
          let r = {};
          let n = e.props;
          if (n) for (let [e, t] of Object.entries(n)) ("string" === t.type || "number" === t.type || "boolean" === t.type) && (r[e] = t.type);
          t[e.displayName ?? e.codeExportName] = r;
        }
        this._directManipulationCanvasEditor.setRuntimeComponentPropInfo(e.guid, t);
      }
      if (e.isCodeFile) {
        let t = [];
        let r = [];
        for (let i of n.importedCodeFiles ?? []) switch (i.type) {
          case "RELATIVE_CODE_FILE":
            {
              let t = function (e, t) {
                let r = function (e, t) {
                  let r = e.codeFilePath;
                  let n = ed(t);
                  return (t.startsWith("../") ? n = `${t.substring(3)}` : t.startsWith("./") && (n = `${t.substring(2)}`), r) ? `/${r}/${n}` : `/${n}`;
                }(e, t);
                if (!r) return null;
                let n = getSingletonSceneGraph().getInternalCanvas()?.childrenNodes.find(e => e.isCodeFile && !e.isSubscribedAsset && iD(ed(e.codeFileFullPathWithoutScheme), r));
                return n ? CodeFileIdHandler.fromLocalNodeIdStr(n.guid) : null;
              }(e, i.path);
              t && r.push(t);
              break;
            }
          case "IMAGE_IMPORT":
            t.push({
              name: i.name,
              hash: i.hash
            });
        }
        _$$r(() => {
          permissionScopeHandler.system("materialize-imported-code-files-references", () => {
            e.importedCodeFiles = r;
          });
          permissionScopeHandler.system("materialize-imported-images-references", () => {
            e.setImageImports(t);
          });
          e.materializeCodeComponents(i.map(e => e.codeExportName), i.map(e => e.displayName ?? e.codeExportName), i.map(e => e.props ?? {}), i.map(e => e.codeBehaviorData ?? {}));
        });
      }
    }
  }
  setSprigUserCreatedCodeLayerAtom() {
    atomStoreManager.set(_$$f, !0);
  }
  syncNodeSourceCode(e) {
    for (let t of e) this._codeNodeGUIDsWithSourceCodeToSync.add(t);
    this._sourceCodeSyncTimeout || (this._sourceCodeSyncTimeout = setTimeout(() => {
      this._sourceCodeSyncTimeout = null;
      let e = getSingletonSceneGraph();
      let t = [];
      this._codeNodeGUIDsWithSourceCodeToSync.forEach(r => {
        let n = e.get(r);
        kv(n) && n.isCodeFile && permissionScopeHandler.system("sync-code-file-source-code", () => {
          let e = n.collaborativeSourceCode;
          e && t.push({
            fullPath: n.codeFileFullPathWithoutScheme,
            sourceCode: e.computeCurrentText(),
            collaborativeSourceCodeVersion: e.getCurrentVersionAsString(),
            codeFileNodeGUID: n.guid
          });
        });
      });
      this._codeNodeGUIDsWithSourceCodeToSync.clear();
      fM(t);
    }, 0));
  }
  shouldHideDefaultSetOnCreation() {
    return !!atomStoreManager.get(me);
  }
  getAutomaticCodeFileNameForNodeName(e, t, r = !1) {
    let n = getSingletonSceneGraph();
    let i = m()(_()(e)) + ".tsx";
    let a = new Set(n.getInternalCanvas()?.findAllWithCriteriaGUIDs({
      types: ["CODE_FILE"]
    }).map(e => n.get(e)).filter(e => e && !e.isSoftDeleted).map(e => e?.name));
    if (!r && !a.has(i)) return i;
    let s = i.replace(".tsx", `-${t}.tsx`);
    if (!a.has(s)) return s;
    let o = 2;
    let l = s.replace(".tsx", `-${o}.tsx`);
    for (; a.has(l);) {
      o++;
      l = s.replace(".tsx", `-${o}.tsx`);
    }
    return l;
  }
  updateCodeSnapshotState(e, t, r, i, a) {
    this._codeSnapshotOverlays.$$delete(e);
    ks(e);
    let o = this.getTimestampForCodeSnapshotInvalidatedAt();
    if (this._staleSnapshotTimers.has(e) && (clearTimeout(this._staleSnapshotTimers.get(e)), this._staleSnapshotTimers.$$delete(e)), !r) return;
    let l = t => {
      this._directManipulationCanvasEditor.removeDirectManipulationSceneGraphNodes(e);
      this._codeSnapshotOverlays.add(e);
      Vm(e, createElement(F, {
        location: "canvas",
        type: t
      }));
    };
    if (a) l(M.SOFT_DELETED);else if (t === SnapshotStatus.SNAPSHOT_ERROR) l(M.ERROR);else if (t === SnapshotStatus.LLM_IN_PROGRESS) {
      Vm(e, createElement(O, {}));
      this._codeSnapshotOverlays.add(e);
    } else if (t === SnapshotStatus.SNAPSHOTTING || t === SnapshotStatus.INITIAL) {
      if (this.isCodeSnapshotStale(t, i)) l(M.STALE);else if (Vm(e, createElement(_$$A, {})), this._codeSnapshotOverlays.add(e), i) {
        let t = setTimeout(() => {
          this._staleSnapshotTimers.$$delete(e);
          ks(e);
          l(M.STALE);
        }, Math.max(0, (i + 20 - o) * 1e3));
        this._staleSnapshotTimers.set(e, t);
      }
    }
  }
  cleanupCodeSnapshotOverlays() {
    for (let e of this._codeSnapshotOverlays) {
      ks(e);
      this._codeSnapshotOverlays.$$delete(e);
    }
    for (let [e, t] of this._staleSnapshotTimers) {
      clearTimeout(t);
      this._staleSnapshotTimers.$$delete(e);
    }
  }
  getTimestampForCodeSnapshotInvalidatedAt() {
    return Math.floor(Date.now() / 1e3);
  }
  isCodeSnapshotStale(e, t) {
    if (e === SnapshotStatus.INITIAL && 0 === t) return !1;
    let r = this.getTimestampForCodeSnapshotInvalidatedAt();
    return !!(t && r - t > 20);
  }
  resnapshotIfStale(e, t, r) {
    this.isCodeSnapshotStale(t, r) && this.markCodeNodesDirty(new Set([e]));
  }
  pushAttachmentSourceCode(e, t) {
    let r = getSingletonSceneGraph();
    let n = t.map(e => {
      let t = r.get(e);
      return t ? {
        code: t.sourceCode,
        codeFileGuid: e.toString()
      } : null;
    }).filter(e => null !== e);
    if (0 === n.length) {
      this.pushAttachmentError(e, InsertErrorType.OTHER);
      return;
    }
    let i = {
      status: "success",
      nodeGuid: e,
      codeFiles: n,
      type: "FIGMA_NODE",
      image: getFeatureFlags().bake_d2r_image ? NC(r.get(e)) : null
    };
    atomStoreManager.set(Ah, t => t.map(t => es(t, e) ? {
      ...i,
      uniqueId: t.uniqueId
    } : t));
  }
  removeAttachment(e) {
    atomStoreManager.set(Ah, t => t.filter(t => !es(t, e)));
  }
  pushAttachmentError(e, t) {
    atomStoreManager.set(Ah, r => r.map(r => es(r, e) ? {
      ...r,
      designToCodeErrors: [...(r?.designToCodeErrors ?? []), t]
    } : r));
  }
  terminateOnePendingAttachment(e) {
    _5(e);
  }
  regenerateDerivedCodeFileDebounced(e) {
    let t;
    let r;
    let n = getSingletonSceneGraph().getCodeFileNode(e);
    if (!n) throw Error("CodeFile not found");
    let i = this._derivedCodeFilesPendingRegeneration.get(e);
    if (i) {
      clearTimeout(i.timeout);
      this._derivedCodeFilesPendingRegeneration.set(e, {
        timeout: setTimeout(i.callback, 500),
        callback: i.callback
      });
      return Promise.resolve(null);
    }
    let a = new Promise((e, n) => {
      t = e;
      r = n;
    });
    let s = () => {
      let i = n.codeFileCanvasNode;
      i && Ts(i).then(r => {
        this._derivedCodeFilesPendingRegeneration.$$delete(e);
        t(r);
      }).catch(r);
    };
    this._derivedCodeFilesPendingRegeneration.set(e, {
      callback: s,
      timeout: setTimeout(s, 500)
    });
    return a;
  }
  directManipulationCanvasEditor() {
    return this._directManipulationCanvasEditor;
  }
  prewarmSandboxPool() {
    wn();
  }
}();
export const u = $$eu0;