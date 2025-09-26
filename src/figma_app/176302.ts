import { useRef, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { debug } from "../figma_app/465776";
import { Fullscreen, AppStateTsApi } from "../figma_app/763686";
import { atom, useAtomWithSubscription, useAtomValueAndSetter, Xr, Ut } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { h as _$$h } from "../905/791079";
import { R as _$$R } from "../905/165069";
import { getAppVisibilityState, subscribeToAppVisibility } from "../figma_app/925651";
import { logError } from "../905/714362";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { DM, $K } from "../figma_app/223206";
import { useCurrentFileKey } from "../figma_app/516028";
import { getUserId } from "../905/372672";
import { R as _$$R2 } from "../figma_app/53049";
import { EI } from "../figma_app/21029";
let T = atom({
  status: "idle"
});
let I = {
  start: () => ({
    status: "creating"
  }),
  waitForAttachments: () => ({
    status: "waiting-for-attachments"
  }),
  complete: () => ({
    status: "completed"
  }),
  error: e => ({
    status: "error",
    error: e
  }),
  reset: () => ({
    status: "idle"
  })
};
atom(e => "idle" === e(T).status);
let S = atom(e => "creating" === e(T).status);
let v = atom(e => "waiting-for-attachments" === e(T).status);
let $$A3 = atom(e => "completed" === e(T).status);
atom(e => "error" === e(T).status);
let $$x1 = atom(e => e(S) || e(v));
let N = atom(null);
export function $$C2() {
  let e = useAtomWithSubscription($$A3);
  let [t, r] = useAtomValueAndSetter(N);
  let i = useRef(!1);
  let a = useCallback((e, r) => {
    t && analyticsEventManager.trackDefinedEvent("activation.send_to_make_from_design.prompt_with_attachments", {
      ...t,
      status: e,
      ...(r && {
        error: r
      })
    });
  }, [t]);
  return useCallback((n, s) => {
    e && null !== t && !i.current && (i.current = !0, "success" === n ? a("success") : s && a("error", s), r(null));
  }, [e, r, t, a]);
}
async function w({
  fileKey: e,
  selectedNodeId: t
}) {
  let r = [t];
  let n = await _$$R2({
    fileKey: e,
    selectedGuids: r
  });
  Fullscreen?.applyNodesFromBuffer(n, e, r, !0);
}
export function $$O0({
  totalAttachmentBytes: e,
  attachmentsReady: t,
  chatError: r
}) {
  let a = useDispatch();
  let s = Xr(T);
  let c = useAtomWithSubscription(v);
  let [u, p] = useAtomValueAndSetter(N);
  let g = useRef(!1);
  let f = useCallback((e, t) => {
    u && analyticsEventManager.trackDefinedEvent("activation.send_to_make_from_design.frame_pasted_as_attachment", {
      ...u,
      status: e,
      ...(t && {
        error: t
      })
    });
  }, [u]);
  let E = useCallback(() => {
    a(VisualBellActions.dequeue({
      matchType: "send-to-make-from-design-load"
    }));
    a(VisualBellActions.enqueue({
      message: getI18nString("figmake.send_to_make_from_design.visual_bell.complete"),
      type: "send-to-make-from-design-complete",
      icon: VisualBellIcon.CHECK,
      timeoutOverride: 3e3
    }));
  }, [a]);
  let y = useCallback(() => {
    a(VisualBellActions.dequeue({
      matchType: "send-to-make-from-design-load"
    }));
    a(VisualBellActions.enqueue({
      message: getI18nString("figmake.send_to_make_from_design.error.something-went-wrong"),
      type: "send-to-make-from-design-failed",
      icon: VisualBellIcon.EXCLAMATION,
      error: !0,
      timeoutOverride: 3e3
    }));
  }, [a]);
  let b = useCallback(() => {
    g.current || (g.current = !0, f("success"), s(I.complete()), E());
  }, [f, s, E]);
  let S = useCallback(e => {
    g.current || (g.current = !0, f("error", e), s(I.error(Error(e))), p(null), y());
  }, [f, s, p, y]);
  useEffect(() => {
    c && (g.current = !1);
  }, [c]);
  useEffect(() => {
    if (c && !g.current) {
      if (e > 0 && t) {
        b();
        return;
      }
      if (r) {
        S(r.error.message);
        return;
      }
    }
  }, [c, e, t, r, b, S]);
  useEffect(() => {
    if (!c) return;
    let e = setTimeout(() => {
      S("send_to_make_paste_timeout");
    }, 3e5);
    return () => clearTimeout(e);
  }, [c, S]);
  _$$h(() => () => {
    s(I.reset());
  });
}
export function $$R4() {
  let e = useDispatch();
  let t = EI();
  let r = useCurrentFileKey();
  let y = useAtomWithSubscription(DM);
  let S = Xr($K);
  let v = AppStateTsApi?.figmakeState();
  let A = Xr(T);
  let x = Xr(N);
  let C = getUserId();
  let [O, R] = useState(() => "visible" === getAppVisibilityState());
  _$$h(() => subscribeToAppVisibility(e => {
    R("visible" === e);
  }));
  return _$$R(() => {
    debug(!!y, "makeCreationData is undefined. This should never happen");
    e(VisualBellActions.enqueue({
      message: y.exceedsMakePasteThreshold ? getI18nString("figmake.send_to_make_from_design.visual_bell.copying_complex_frames") : getI18nString("figmake.send_to_make_from_design.visual_bell.copying_frames"),
      type: "send-to-make-from-design-load",
      icon: VisualBellIcon.SPINNER,
      preventDismissal: !0,
      timeoutOverride: 3e5
    }));
    A(I.start());
    let t = {
      userId: C ?? "",
      makeFileKey: r ?? "",
      fileKey: y.fileKey,
      fileVersion: y.fileVersion,
      pageGuid: y.pageGuid,
      selectedNodeId: y.selectedNodeId,
      exceedsMakePasteThreshold: y.exceedsMakePasteThreshold
    };
    x({
      ...t
    });
    w({
      fileKey: y.fileKey,
      selectedNodeId: y.selectedNodeId
    }).then(() => {
      analyticsEventManager.trackDefinedEvent("activation.send_to_make_from_design.file_bootstrapped_from_design", {
        ...t,
        status: "success"
      });
      S(Ut);
      A(I.waitForAttachments());
    }).catch(r => {
      logError("sendToMakeFromDesign", "copyNodeToMakeFromDesign failed with some error", {
        ...t,
        error: r?.message ?? JSON.stringify(r)
      }, {
        reportAsSentryError: !0
      });
      analyticsEventManager.trackDefinedEvent("activation.send_to_make_from_design.file_bootstrapped_from_design", {
        ...t,
        status: "error",
        error: r?.message ?? JSON.stringify(r)
      });
      A(I.error(r));
      x(null);
      e(VisualBellActions.dequeue({
        matchType: "send-to-make-from-design-load"
      }));
      e(VisualBellActions.enqueue({
        message: getI18nString("figmake.send_to_make_from_design.error.something-went-wrong"),
        type: "send-to-make-from-design-failed",
        icon: VisualBellIcon.EXCLAMATION,
        error: !0,
        timeoutOverride: 3e3
      }));
    });
  }, [C, r, t, y, S, v, A, x], () => !!(C && r && t && y && v && O));
}
export const MD = $$O0;
export const Ng = $$x1;
export const YT = $$C2;
export const aQ = $$A3;
export const vG = $$R4;
