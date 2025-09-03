import { useCallback, useState, useEffect, useMemo, useRef } from "react";
import { throwTypeError } from "../figma_app/465776";
import { debounce } from "../905/915765";
import { FDn, glU, tvY } from "../figma_app/763686";
import { l7, Hq } from "../905/189185";
import { UN } from "../905/700578";
import { eU, zl, fp } from "../figma_app/27355";
import { az } from "../905/449184";
import { debugState } from "../905/407919";
import { Ay } from "../905/612521";
import { Rw } from "../figma_app/930338";
import { g as _$$g } from "../905/880308";
import { Point } from "../905/736624";
import { t as _$$t } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { _G, Pv } from "../905/619652";
import { yV, tS } from "../figma_app/516028";
import { Wh } from "../figma_app/615482";
import { tk, T_ } from "../figma_app/883638";
import { MD } from "../figma_app/176302";
let $$S0 = Wh(() => eU([]));
let v = Wh(() => eU([]));
let $$A11 = eU(e => e($$S0).filter(e => "error" !== e.status).length >= $$C12);
let x = eU(e => {
  let t = e(yV);
  return !!(t?.canEdit && t?.canEditCanvas);
});
let $$N2 = eU(null, (e, t) => {
  if (e(x)) {
    let r = e($$S0);
    t($$S0, [...r, {
      status: "pending",
      uniqueId: _$$g()
    }]);
  }
});
let $$C12 = 3;
export function $$w13(e) {
  switch (e.type) {
    case "image":
      return "IMAGE";
    case "node":
      return "FIGMA_NODE";
    default:
      throwTypeError(e);
  }
}
export function $$O9(e) {
  function t(e, r = !0) {
    debugState.dispatch(_$$F.enqueue({
      type: "figmake_attachment_failed_to_load",
      message: e,
      timeoutOverride: 5e3,
      error: r,
      button: {
        text: _$$t("figmake.attachments.learn_more_button"),
        action: () => {
          Ay.unsafeRedirect("https://help.figma.com/hc/articles/31722591905559", "_blank");
        }
      }
    }));
  }
  switch (e) {
    case FDn.MORE_THAN_ONE_HIGHLEVEL_NODE_FOUND:
      t(_$$t("figmake.attachments.attachment_not_in_frame_toast"));
      break;
    case FDn.INSERTED_NODES_TOO_LARGE:
      t(_$$t("figmake.attachments.attachment_too_large_toast"), !1);
      break;
    case FDn.MAXIMUM_ATTACHMENTS_EXCEEDED:
      t(_$$t("figmake.attachments.too_many_attachments_toast", {
        max_num: $$C12
      }));
      break;
    case FDn.USER_PASTED_FIGMA_LINK_IN_CHAT:
      t(_$$t("figmake.attachments.cant_read_figma_link_toast"), !1);
      break;
    case FDn.DESIGN_2_REACT_STATE_GROUP:
      t(_$$t("figmake.attachments.failure_state_group"));
      break;
    case FDn.DESIGN_2_REACT_OTHER:
    case FDn.OTHER:
      t(_$$t("figmake.attachments.generic_failed_to_load_attachment_toast"));
      break;
    default:
      throwTypeError(e);
  }
}
export function $$R5(e) {
  zl.set($$S0, e => {
    let t = e.find(e => "pending" === e.status);
    return t ? e.filter(e => e.uniqueId !== t.uniqueId) : e;
  });
  $$O9(e);
}
export function $$L3() {
  let e = zl.get(v);
  e.length > 0 && (zl.set($$S0, e), zl.set(v, []));
}
export function $$P7(e) {
  return "pending" !== e.status && "error" !== e.status;
}
export function $$D8(e, t) {
  return $$P7(e) && e.nodeGuid === t;
}
function k() {
  return _$$g();
}
export function $$M10() {
  let [e, t] = fp($$S0);
  return useCallback(r => {
    t(e.filter(e => e.uniqueId !== r.uniqueId));
    $$P7(r) && r.nodeGuid && l7.ai("clean-up-attachments", () => {
      let e = UN().get(r.nodeGuid);
      e && e.removeSelfAndChildren();
      "success" === r.status && "FIGMA_NODE" === r.type && r.codeFiles?.forEach(e => {
        glU?.deleteCodeFile(e.codeFileGuid);
      });
      glU?.commit();
    });
  }, [t, e]);
}
let F = [];
let j = debounce(function (e, t, r) {
  if (e !== t) switch (t) {
    case "loading":
      debugState.dispatch(_$$F.enqueue({
        message: _$$t("figmake.chat.a11y_attachment_loading"),
        role: "status"
      }));
      break;
    case "success":
      let n = "IMAGE" === r.type ? _$$t("figmake.chat.a11y_image_attached_successfully") : _$$t("figmake.chat.a11y_design_attached_successfully");
      debugState.dispatch(_$$F.enqueue({
        message: n,
        role: "status"
      }));
      break;
    case "error":
      debugState.dispatch(_$$F.enqueue({
        message: _$$t("figmake.chat.a11y_attachment_failed_to_load"),
        role: "status"
      }));
      break;
    case "removed":
      debugState.dispatch(_$$F.enqueue({
        message: _$$t("figmake.chat.a11y_attachment_removed"),
        role: "status"
      }));
  }
}, 1e3);
export function $$U6(e) {
  let [t, r] = fp($$S0);
  let [i, a] = fp(v);
  let {
    chatError,
    setChatError
  } = tk(e);
  let _ = tS();
  let h = useCallback(() => {
    zl.set($$S0, [...zl.get($$S0), {
      status: "pending",
      uniqueId: k()
    }]);
  }, []);
  let m = useCallback((e, n) => {
    r(t.map(t => t.uniqueId === e ? n : t));
  }, [t, r]);
  let g = useCallback(() => {
    let e = t.find(e => "pending" === e.status);
    return e?.uniqueId ?? null;
  }, [t]);
  let f = useCallback(e => {
    let n = g();
    if (n) {
      m(n, {
        status: "loading",
        nodeGuid: e,
        uniqueId: n
      });
      return n;
    }
    {
      let n = k();
      r([...t, {
        status: "loading",
        nodeGuid: e,
        uniqueId: n
      }]);
      return n;
    }
  }, [t, r, g, m]);
  let E = useCallback(e => {
    t.length >= $$C12 || (r(t => [...t, {
      status: "success",
      ...e,
      uniqueId: k()
    }]), az.trackDefinedEvent("ai_for_production.chat_attachment_added", {
      attachmentType: e.type,
      fileKey: _ ?? void 0
    }));
  }, [t, r, _]);
  let b = useCallback(e => {
    r(t.filter(t => !$$D8(t, e.nodeGuid)));
    Hq.system("clean-up-attachments", () => {
      let t = UN().get(e.nodeGuid);
      t && t.removeSelfAndChildren();
      "FIGMA_NODE" === e.type && e.codeFiles?.forEach(e => {
        glU?.deleteCodeFile(e.codeFileGuid);
      });
      glU?.commit();
    });
  }, [r, t]);
  let A = useCallback(() => {
    a(t);
    r([]);
  }, [t, r, a]);
  let [x, N] = useState([]);
  let w = useCallback(async () => {
    N(await Promise.all(t.map(B)));
  }, [t]);
  useEffect(() => {
    w();
  }, [t, w]);
  let O = useMemo(() => x.reduce((e, t) => "success" !== t.status ? e : "FIGMA_NODE" === t.type ? e + t.codeFiles.reduce((e, t) => e + new Blob([t.code]).size, 0) + H(t.image) : e + H(t.image), 0), [x]);
  let R = useRef(!1);
  let L = useMemo(() => x.every(e => "loading" !== e.status) && O < 5242880, [x, O]);
  useEffect(() => {
    let e = O > 5242880;
    e !== R.current && (R.current = e, e ? setChatError({
      error: Error(T_.ATTACHMENTS_TOO_LARGE)
    }) : chatError && chatError.error.message === T_.ATTACHMENTS_TOO_LARGE && setChatError(void 0));
  }, [O, setChatError, chatError]);
  useEffect(() => {
    t.forEach(e => {
      let t = F.find(t => t.uniqueId === e.uniqueId);
      t ? t.status !== e.status && j(t.status, e.status, e) : j("", e.status, e);
    });
    F.forEach(e => {
      t.find(t => t.uniqueId === e.uniqueId) || j(e.status, "removed", e);
    });
    F = t;
  }, [t]);
  MD({
    totalAttachmentBytes: O,
    attachmentsReady: L,
    chatError
  });
  return {
    attachments: x,
    setAttachments: r,
    createPendingAttachment: h,
    setAttachmentById: m,
    claimAPendingAttachmentOrMakeOne: f,
    createLoadedAttachment: E,
    clearAttachment: b,
    stashAllAttachments: A,
    totalAttachmentBytes: O,
    attachmentsReady: L
  };
}
function B(e) {
  return "success" !== e.status ? Promise.resolve(e) : new Promise(t => {
    if (!e.image) {
      t(e);
      return;
    }
    let r = new Image();
    r.onload = () => {
      let n = document.createElement("canvas");
      let i = n.getContext("2d");
      let a = r.width;
      let s = r.height;
      (r.width > 1e3 || r.height > 1e3) && (r.width > r.height ? (a = 1e3, s = Math.round(1e3 * r.height / r.width)) : (s = 1e3, a = Math.round(1e3 * r.width / r.height)));
      n.width = a;
      n.height = s;
      i.imageSmoothingEnabled = !0;
      i.imageSmoothingQuality = "high";
      i.drawImage(r, 0, 0, a, s);
      let o = n.toDataURL("image/png");
      t({
        ...e,
        image: o
      });
    };
    r.onerror = () => {
      t(e);
    };
    r.src = e.image;
  });
}
export function $$G1(e) {
  if (!e) return null;
  let t = _G(new Point(e.size.x, e.size.y), e.guid, !0, tvY.TRANSPARENT);
  return t ? Pv(t.pixels, t.pixelSize) : null;
}
export function $$V4(e) {
  if (!e) return null;
  let t = e.fills.find(e => e.image && e.visible);
  return t?.image?.hash ? Rw(t.image.hash) : null;
}
function H(e) {
  return e ? Math.floor(3 * e.length / 4) : 0;
}
export const Ah = $$S0;
export const NC = $$G1;
export const Q_ = $$N2;
export const WH = $$L3;
export const Zz = $$V4;
export const _5 = $$R5;
export const _9 = $$U6;
export const aZ = $$P7;
export const ak = $$D8;
export const hH = $$O9;
export const oz = $$M10;
export const qG = $$A11;
export const qQ = $$C12;
export const yM = $$w13;