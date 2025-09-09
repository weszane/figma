import { useState, useEffect, useMemo, useCallback } from "react";
import { AD, lV } from "../figma_app/617606";
import { ChatMessageType } from "../figma_app/763686";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { ly } from "../905/138461";
import { useCurrentFileKey } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { Xu } from "../figma_app/588582";
import { $W } from "../figma_app/325537";
import { o0, Nm } from "../figma_app/202307";
import { Xl, p7, Ut } from "../figma_app/72338";
import { EY } from "../figma_app/97696";
import { P as _$$P } from "../1156/852405";
import { Oz } from "../1156/354790";
import { E as _$$E } from "../figma_app/626557";
export function $$f0({
  chatMessagesNode: e,
  disabled: t = !1,
  featureType: n
}) {
  let [f, _] = useState(!1);
  let {
    exchange
  } = $W(e?.guid || "");
  useEffect(() => {
    exchange && !f && _(!0);
  }, [exchange, f]);
  let [v, I] = useAtomValueAndSetter(o0(e?.guid || ""));
  let C = useAtomWithSubscription(Nm(e?.guid || ""));
  let E = _$$E(e);
  let j = useAtomWithSubscription(Xl);
  let N = useAtomWithSubscription(p7);
  let T = selectCurrentUser();
  let S = useCurrentFileKey();
  let A = useMemo(() => E ? EY(E) : null, [E]);
  let [w, k] = useState(new Map());
  let P = useMemo(() => {
    if (E && E.length > 0) {
      let e = E[E.length - 1];
      if (e?.type === ChatMessageType.TOOL_MESSAGE && e?.toolCalls.some(e => AD.includes(e.toolName))) return !0;
    }
    if (exchange?.messages && exchange?.messages.length > 0) {
      let e = exchange.messages[exchange.messages.length - 1];
      if (e?.type === ChatMessageType.TOOL_MESSAGE && e?.toolCalls.some(e => AD.includes(e.toolName))) return !0;
    }
    return !1;
  }, [E, exchange]);
  let O = n === lV.FIGMAKE ? _$$P() : void 0;
  let L = Xu();
  return {
    triggerSelfHeal: useCallback(async (e, o, i) => {
      let r = await ly("auto-error-fix");
      if (r) try {
        if (v || t || !f || !i || L && (j || N === Ut.DEPLOYING || P) || 0 === o.length || !A || !C || "user" === C || Date.now() - i > 2e3 || (w.get(A) || 0) >= 2) return;
        let r = Array.from(new Set(o));
        I(!0);
        k(e => (e.set(A, (e.get(A) || 0) + 1), e));
        Oz({
          userMessageContent: {
            plainText: "",
            hidden: !0,
            errors: r
          },
          user: T,
          chatMessagesNode: e,
          rawUserChatDetails: void 0,
          featureType: n,
          setInput: () => {},
          fileKey: S,
          autoFixingUserMessageId: A,
          onFinish: () => {
            I(!1);
          },
          canUseSupabase: L,
          changedFiles: [],
          model: O
        });
      } finally {
        await r.release();
      }
    }, [v, t, f, A, C, w, I, T, n, S, O, j, N, P, L])
  };
}
export const u = $$f0;