import { useRef, useCallback, useEffect, useState } from "react";
import { wA } from "../vendor/514228";
import { debug } from "../figma_app/465776";
import { glU, Ez5 } from "../figma_app/763686";
import { eU, md, fp, Xr, Ut } from "../figma_app/27355";
import { az } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { R as _$$R } from "../905/165069";
import { Zt, B1 } from "../figma_app/925651";
import { x1 } from "../905/714362";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { DM, $K } from "../figma_app/223206";
import { tS } from "../figma_app/516028";
import { TA } from "../905/372672";
import { R as _$$R2 } from "../figma_app/53049";
import { EI } from "../figma_app/21029";
let T = eU({
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
eU(e => "idle" === e(T).status);
let S = eU(e => "creating" === e(T).status);
let v = eU(e => "waiting-for-attachments" === e(T).status);
let $$A3 = eU(e => "completed" === e(T).status);
eU(e => "error" === e(T).status);
let $$x1 = eU(e => e(S) || e(v));
let N = eU(null);
export function $$C2() {
  let e = md($$A3);
  let [t, r] = fp(N);
  let i = useRef(!1);
  let a = useCallback((e, r) => {
    t && az.trackDefinedEvent("activation.send_to_make_from_design.prompt_with_attachments", {
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
  glU?.applyNodesFromBuffer(n, e, r, !0);
}
export function $$O0({
  totalAttachmentBytes: e,
  attachmentsReady: t,
  chatError: r
}) {
  let a = wA();
  let s = Xr(T);
  let c = md(v);
  let [u, p] = fp(N);
  let g = useRef(!1);
  let f = useCallback((e, t) => {
    u && az.trackDefinedEvent("activation.send_to_make_from_design.frame_pasted_as_attachment", {
      ...u,
      status: e,
      ...(t && {
        error: t
      })
    });
  }, [u]);
  let E = useCallback(() => {
    a(F.dequeue({
      matchType: "send-to-make-from-design-load"
    }));
    a(F.enqueue({
      message: _$$t("figmake.send_to_make_from_design.visual_bell.complete"),
      type: "send-to-make-from-design-complete",
      icon: zX.CHECK,
      timeoutOverride: 3e3
    }));
  }, [a]);
  let y = useCallback(() => {
    a(F.dequeue({
      matchType: "send-to-make-from-design-load"
    }));
    a(F.enqueue({
      message: _$$t("figmake.send_to_make_from_design.error.something-went-wrong"),
      type: "send-to-make-from-design-failed",
      icon: zX.EXCLAMATION,
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
  let e = wA();
  let t = EI();
  let r = tS();
  let y = md(DM);
  let S = Xr($K);
  let v = Ez5?.figmakeState();
  let A = Xr(T);
  let x = Xr(N);
  let C = TA();
  let [O, R] = useState(() => "visible" === Zt());
  _$$h(() => B1(e => {
    R("visible" === e);
  }));
  return _$$R(() => {
    debug(!!y, "makeCreationData is undefined. This should never happen");
    e(F.enqueue({
      message: y.exceedsMakePasteThreshold ? _$$t("figmake.send_to_make_from_design.visual_bell.copying_complex_frames") : _$$t("figmake.send_to_make_from_design.visual_bell.copying_frames"),
      type: "send-to-make-from-design-load",
      icon: zX.SPINNER,
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
      az.trackDefinedEvent("activation.send_to_make_from_design.file_bootstrapped_from_design", {
        ...t,
        status: "success"
      });
      S(Ut);
      A(I.waitForAttachments());
    }).catch(r => {
      x1("sendToMakeFromDesign", "copyNodeToMakeFromDesign failed with some error", {
        ...t,
        error: r?.message ?? JSON.stringify(r)
      }, {
        reportAsSentryError: !0
      });
      az.trackDefinedEvent("activation.send_to_make_from_design.file_bootstrapped_from_design", {
        ...t,
        status: "error",
        error: r?.message ?? JSON.stringify(r)
      });
      A(I.error(r));
      x(null);
      e(F.dequeue({
        matchType: "send-to-make-from-design-load"
      }));
      e(F.enqueue({
        message: _$$t("figmake.send_to_make_from_design.error.something-went-wrong"),
        type: "send-to-make-from-design-failed",
        icon: zX.EXCLAMATION,
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