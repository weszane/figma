import { Fullscreen } from "../figma_app/763686";
import { DS } from "../figma_app/387100";
import { debugState } from "../905/407919";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { createOptimistThunk } from "../905/350402";
import { ds } from "../figma_app/314264";
let u = "return_to_instance";
let p = null;
let $$m = !1;
let h = null;
let $$g0 = createOptimistThunk((e, t) => {
  let i = e.getState();
  let n = i.openFile?.libraryKey;
  if (!t) return;
  let r = i.mirror.sceneGraph.get(t);
  let a = !!(n && r?.sourceLibraryKey === n);
  (!r || !a || (t = r.publishID ?? "")) && (p = {
    mainComponentGUID: t,
    instanceGUIDs: Object.keys(i.mirror.sceneGraphSelection)
  }, $$m = !1);
});
let $$f1 = createOptimistThunk(e => {
  let t = e.getState();
  let i = Object.keys(t.mirror.sceneGraphSelection);
  let n = p && 1 === i.length && (i[0] === p.mainComponentGUID || DS(t.mirror.sceneGraph, i[0]).some(e => e.guid === p?.mainComponentGUID));
  n && !$$m ? (document.addEventListener("keydown", _), e.dispatch(F.enqueue({
    type: u,
    message: "",
    icon: zX.RETURN_TO_INSTANCE,
    button: {
      text: getI18nString("design_systems.actions.return_to_instance"),
      action: () => {
        A({
          additionalTrackingProperties: {
            source: "visual_bell"
          }
        });
      }
    },
    onDismiss: () => {
      p = null;
      $$m = !1;
      document.removeEventListener("keydown", _);
    }
  })), $$m = !0, clearTimeout(h)) : !n && $$m && (document.removeEventListener("keydown", _), e.dispatch(F.dequeue({
    matchType: u
  })), $$m = !1, h = setTimeout(() => {
    p = null;
  }, 12e4));
});
function _(e) {
  let t = e.ctrlKey && e.altKey && e.metaKey;
  let i = e.ctrlKey && e.altKey && e.shiftKey;
  (t || i) && "KeyK" === e.code && (A({
    additionalTrackingProperties: {
      source: "keyboard",
      keyboardShortcut: "K",
      keyboardShortcutFull: t ? "meta+control+alt+k" : "control+alt+shift+k"
    }
  }), debugState.dispatch(F.dequeue({
    matchType: u
  })));
}
function A({
  additionalTrackingProperties: e
} = {}) {
  p && (Fullscreen.selectInstances(p.instanceGUIDs.join(","), !0), p = null, $$m = !1, function ({
    additionalTrackingProperties: e
  } = {}) {
    let t = debugState.getState();
    ds("Return to instance", t.openFile?.key, t, {
      ...e
    });
  }({
    additionalTrackingProperties: e
  }));
  document.removeEventListener("keydown", _);
}
export const l = $$g0;
export const m = $$f1;