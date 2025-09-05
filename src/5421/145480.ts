import { useRef, useCallback, useState, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { MO, hq, UQ } from "../2824/40443";
import { glU } from "../figma_app/763686";
import { l7, zk } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { md } from "../figma_app/27355";
import { Xt } from "../figma_app/623293";
import { XHRError } from "../905/910117";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { Ze } from "../figma_app/540726";
import { UD, Jr } from "../figma_app/624361";
import { wr, Dh } from "../figma_app/741237";
import { tS } from "../figma_app/516028";
import { vh } from "../figma_app/181241";
import { f3 } from "../figma_app/690664";
import { k, d as _$$d } from "../5421/548912";
let b = new class {
  constructor() {
    this.HtmlToDesignValidator = vh();
  }
  convertHtmlToDesign(e) {
    let {
      fileKey,
      html,
      width,
      height
    } = e;
    return this.HtmlToDesignValidator.validate(async ({
      xr: e
    }) => await e.post(`/api/${fileKey}/html-to-design`, {
      html,
      width,
      height
    }));
  }
}();
var $$C0 = (e => (e[e.API = 0] = "API", e[e.ABSOLUTE = 1] = "ABSOLUTE", e[e.RESPONSIVE = 2] = "RESPONSIVE", e[e.MIXED = 3] = "MIXED", e))($$C0 || {});
let E = {
  0: b.convertHtmlToDesign,
  1: MO,
  2: hq,
  3: UQ
};
let j = "html-to-design-processing";
let N = () => {
  let e = useDispatch();
  let t = useRef(null);
  let n = useCallback(n => {
    t.current = window.setTimeout(() => {
      e(F.enqueue({
        type: j,
        message: _$$t("figmake.m2d.converting_make_to_design"),
        icon: zX.SPINNER,
        timeoutOverride: 1 / 0,
        button: {
          text: _$$t("general.cancel"),
          action: n
        }
      }));
    }, 300);
  }, [e]);
  let r = useCallback(t => {
    e(F.enqueue({
      type: "copied-to-clipboard",
      message: "clipboard" === t ? _$$t("figmake.m2d.copied_to_clipboard") : _$$t("figmake.m2d.pasted_to_canvas"),
      icon: zX.CHECK
    }));
  }, [e]);
  return {
    showProcessing: n,
    showSuccess: r,
    showError: useCallback(() => {
      e(F.enqueue({
        type: "error",
        message: _$$t("figmake.m2d.failed_to_copy"),
        icon: zX.EXCLAMATION
      }));
    }, [e]),
    showHtmlSizeError: useCallback(() => {
      e(F.enqueue({
        type: "html-too-large",
        message: _$$t("figmake.m2d.html_too_large"),
        icon: zX.EXCLAMATION
      }));
    }, [e]),
    cleanup: useCallback(() => {
      t.current && (clearTimeout(t.current), t.current = null);
      e(F.dequeue({
        matchType: j
      }));
    }, [e])
  };
};
let T = () => {
  let e = new AbortController();
  return {
    abort: () => e.abort(),
    isAborted: () => e.signal.aborted
  };
};
export function $$S1() {
  let e = tS();
  let [t, n] = useState(!1);
  let {
    showProcessing,
    showSuccess,
    showError,
    showHtmlSizeError,
    cleanup
  } = N();
  let {
    componentPreviewState
  } = k();
  let C = md(f3);
  useEffect(() => () => {
    cleanup();
  }, [cleanup]);
  let j = componentPreviewState === _$$d.LOADED && !!C?.snapshotHTML;
  return {
    handleHtmlToDesign: useCallback(async o => {
      let {
        mode,
        selectedElementId,
        target
      } = o;
      if (t || !e || !j) return;
      if (!C?.snapshotHTML) throw Error("Snapshot HTML is not available for preview");
      n(!0);
      let v = T();
      showProcessing(() => {
        v.abort();
        cleanup();
        n(!1);
      });
      try {
        if (0 === mode) {
          let {
            html,
            rect
          } = await C.snapshotHTML({
            selectedElementId
          });
          if (v.isAborted()) return;
          let i = await b.convertHtmlToDesign({
            fileKey: e,
            html,
            width: Math.ceil(rect.width),
            height: Math.ceil(rect.height)
          });
          if (v.isAborted()) return;
          let r = i.data.meta.buffer;
          "canvas" === target ? function (e, t, n) {
            let o = Ze(e);
            o && l7.user("paste-buffer-to-canvas", () => {
              let e = getSingletonSceneGraph().createNode("FRAME");
              e.stackMode = "VERTICAL";
              e.stackPrimarySizing = "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE";
              e.stackCounterSizing = "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE";
              let i = getSingletonSceneGraph();
              let r = i.getInternalCanvas();
              if (r) r.appendChild(e);else throw Error("Internal canvas not found");
              if (!glU?.directlyPasteSuggestion(o, e.parentGuid ?? "", null, e.guid)) {
                e.removeSelfAndChildren();
                return Error("Failed to paste buffer to canvas");
              }
              let l = e.childrenNodes[0];
              if (!l) {
                e.removeSelfAndChildren();
                return Error("Failed to paste buffer to canvas");
              }
              i.get(t)?.appendChild(l);
              l.x = n.x;
              l.y = n.y;
              e.removeSelfAndChildren();
            });
          }(r, o.parentGuid, o.insertionLocation) : await Xt(r);
        } else {
          if (v.isAborted()) return;
          let e = await C.sendMessage("getDOMNodes", {});
          if (v.isAborted()) return;
          if (!e?.root) throw Error("No DOM data received from preview iframe");
          let t = E[mode];
          let n = await t(e, getSingletonSceneGraph(), {
            decodeImage: UD
          });
          await new Promise(e => requestAnimationFrame(() => requestAnimationFrame(e)));
          await Jr().imageUploadPromise();
          l7(zk.SYSTEM, "copy-frame-to-clipboard", () => {
            wr();
            Dh([n.guid]);
            glU?.copyActiveCanvasSelectionToClipboard();
            wr();
            glU?.deleteNode(n.guid);
          });
        }
        cleanup();
        showSuccess(target);
      } catch (e) {
        if (cleanup(), !v.isAborted()) {
          if (e instanceof XHRError && (413 === e.status || 408 === e.status)) {
            showHtmlSizeError();
            return;
          }
          console.error("Error converting Make to design layers:", e);
          showError();
        }
      } finally {
        n(!1);
        v.abort();
      }
    }, [C, e, t, j, showProcessing, showSuccess, showError, showHtmlSizeError, cleanup]),
    isProcessing: t,
    isEnabled: j
  };
}
export const y = $$C0;
export const q = $$S1;