import { H } from "../905/457575";
import { useCallback } from "react";
import { lV } from "../figma_app/617606";
import { fp } from "../figma_app/27355";
import { az } from "../905/449184";
import { ow } from "../figma_app/976749";
let o = H({});
export function $$c0(e, t, n, c, d) {
  let [u, x] = fp(o(d));
  let m = `${d || "unknown"}-${c}`;
  let h = u[m] || {
    selectedFeedback: null,
    shouldShowAdditionalFeedback: !1
  };
  let g = useCallback(e => {
    x({
      ...u,
      [m]: e
    });
  }, [x, u, m]);
  let {
    persistentEntityId,
    clientLifecycleId
  } = e;
  let y = ow();
  let _ = n === lV.FIGMAKE ? "figmake" : n === lV.CODE_IN_SITES ? "sites" : y ? "figjam" : "design";
  let b = useCallback((e, r, i) => {
    clientLifecycleId && az.trackDefinedEvent("ai_for_production.chat_feedback", {
      feedbackType: e,
      productType: _,
      feedback: r,
      messageId: i,
      fileKey: t || void 0,
      featureType: n,
      persistentEntityId,
      clientLifecycleId
    });
  }, [t, n, clientLifecycleId, persistentEntityId, _]);
  return {
    feedbackState: h,
    setFeedbackState: g,
    sentimentFeedbackCallback: useCallback((e, t) => {
      b(e.toString(), t, c);
    }, [b, c]),
    additionalFeedbackCallback: useCallback((e, t) => {
      b(e.toString(), t, c);
    }, [b, c]),
    productType: _
  };
}
export const q = $$c0;