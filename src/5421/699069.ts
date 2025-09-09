import { jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect, useMemo } from "react";
import { lV, MK, U1, lr, AD, Vm, Xy } from "../figma_app/617606";
import { ChatMessageType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { useCurrentFileKey } from "../figma_app/516028";
import { zy } from "../figma_app/656450";
import { selectCurrentUser } from "../905/372672";
import { e as _$$e } from "../figma_app/259678";
import { r as _$$r } from "../1156/29942";
import { E as _$$E } from "../figma_app/626557";
import { E as _$$E2 } from "../1156/200958";
import x from "../vendor/128080";
import { $W } from "../figma_app/325537";
import { gG } from "../figma_app/97696";
import { d4 } from "../figma_app/588582";
import { ct } from "../1156/90859";
import { Pd } from "../1156/418246";
var g = x;
export function $$I0({
  setInput: e,
  chatMessagesNode: t,
  chatMessagesNodeGuid: n,
  codeInstanceGuid: x,
  layerDisplayName: I,
  sendMessage: C,
  emptyState: E,
  sendDisabled: j,
  enableAssetImport: N = !1,
  enableImageAttachment: T = !1,
  showChatHeader: S = !1,
  featureType: A,
  enableDragUpload: w = !1,
  enableDsImport: k = !1,
  isResizingPanel: P,
  showCodeStreaming: O,
  rootPath: L,
  onChatInputFocus: D
}) {
  let R = useCurrentFileKey();
  let M = selectCurrentUser();
  let V = _$$E(t);
  let B = function (e) {
    let [t, n] = useState([]);
    let {
      exchange
    } = $W(e?.guid);
    let r = useRef([]);
    useEffect(() => {
      let e = exchange?.messages || [];
      g()(e, r.current) || (r.current = e, n(e));
    }, [exchange?.messages]);
    return t;
  }(t);
  let H = _$$E2(t, A, {
    shouldIncludeFile: A === lV.FIGMAKE ? e => e !== _$$e : void 0
  });
  let U = useMemo(() => {
    if (!V) return null;
    for (let e = V.length - 1; e >= 0; e--) {
      let t = V[e];
      if (t?.type === ChatMessageType.USER_MESSAGE) return t;
    }
    return null;
  }, [V]);
  let F = useMemo(() => !!U && U.type === ChatMessageType.USER_MESSAGE && gG(MK(U.textContent)), [U]);
  let K = useMemo(() => V ?? [], [V]);
  let $ = useMemo(() => {
    let e = new Set();
    let t = [];
    let n = e => `${e.id}-${Number(e.sentAt64) > 0 ? e.sentAt64 : e.sentAt}`;
    for (let o of K) {
      t.push(o);
      e.add(n(o));
    }
    for (let o of B) {
      let i = n(o);
      e.has(i) || t.push(o);
    }
    return t;
  }, [K, B]);
  let z = function (e) {
    let t = zy(e);
    let n = useRef(null);
    return useMemo(() => {
      let e = JSON.stringify(t.usersById);
      n.current !== e && (n.current = e);
      return t;
    }, [t]);
  }(useMemo(() => $.map(e => e.userId) || [], [$]));
  let W = useMemo(() => {
    let e = [];
    let t = !1;
    for (let n = 0; n < $.length; n++) {
      let o = $[n];
      switch (o.type) {
        case ChatMessageType.USER_MESSAGE:
          let i = z.usersById?.[o.userId];
          if (i) {
            let n = MK(o.textContent || "");
            let a = gG(n);
            n.hidden || e.push({
              type: "user",
              user: i,
              id: o.id,
              plainText: n.plainText || "",
              imports: n.imports,
              inspectedElement: n.inspectedElement,
              selectedNodeIds: n.selectedNodeIds,
              libraryKey: n.libraryKey
            });
            t = a;
          }
          continue;
        case ChatMessageType.SYSTEM_MESSAGE:
          let l = U1(o.textContent || "");
          let s = l?.type === "manual_edit" || l?.type === "restore" ? l?.title : void 0;
          e.push({
            type: "system",
            message: o,
            title: s
          });
          t = !1;
          continue;
        case ChatMessageType.ASSISTANT_MESSAGE:
          let d = [o];
          let c = lr(o.textContent || "").title;
          let p = n;
          for (let e = n + 1; e < $.length; e++) {
            let t = $[e];
            if (!t) break;
            let n = lr(t.textContent || "");
            c ||= n.title;
            let o = !0 === n.hidden;
            let i = t.type === ChatMessageType.SYSTEM_MESSAGE;
            let l = t.type === ChatMessageType.ASSISTANT_MESSAGE;
            let s = t.type === ChatMessageType.TOOL_MESSAGE;
            if (l || o && i || s) p = e;else break;
            if (s) {
              let e = t.toolResults[0];
              if (!e) continue;
              let n = d[d.length - 1];
              if (!n || !n.toolCalls.find(t => t.toolCallId === e.toolCallId && t.toolName === e.toolName)) continue;
              if (n.toolResults.push(e), d4(e.toolName)) break;
            } else d.push(t);
          }
          let u = function (e) {
            let t = [];
            e.forEach(e => {
              if (e.type === ChatMessageType.ASSISTANT_MESSAGE) {
                let n = lr(e.textContent);
                let o = [];
                switch (n.signedReasoning && o.push({
                  id: e.id,
                  type: "reasoning",
                  reasoning: n.signedReasoning.text
                }), n.mode) {
                  case "code":
                    n.codeFilePath && o.push({
                      id: e.id,
                      type: "code",
                      code: n.code,
                      file: n.codeFilePath
                    });
                    break;
                  case "message":
                    o.push({
                      id: e.id,
                      type: "message",
                      message: n.plainText
                    });
                    break;
                  case "plan":
                    o.push({
                      id: e.id,
                      type: "plan",
                      plan: n.plainText,
                      title: n.title || ""
                    });
                    break;
                  case "summary":
                    o.push({
                      id: e.id,
                      type: "summary",
                      summary: n.plainText,
                      codeSnapshot: n.codeSnapshot
                    });
                    break;
                  case "work":
                    o.push({
                      id: e.id,
                      type: "work",
                      work: n.plainText
                    });
                    break;
                  default:
                    n.plainText.length > 0 && o.push({
                      id: e.id,
                      type: "message",
                      message: n.plainText
                    });
                }
                e.toolCalls && e.toolCalls.forEach(t => {
                  if (AD.includes(t.toolName)) {
                    let n = Vm(t);
                    if (!n) return;
                    let i = {
                      id: e.id,
                      type: "clientSideToolCall",
                      toolCall: n
                    };
                    let a = e.toolResults.find(e => e.toolCallId === t.toolCallId && e.toolName === t.toolName);
                    if (a) {
                      let e = Xy(a);
                      e && (i.toolResult = e);
                    }
                    o.push(i);
                  } else o.push({
                    id: e.id,
                    type: "toolCall",
                    name: t.toolName
                  });
                });
                t.push(...o);
              }
            });
            return t;
          }(d);
          e.push({
            type: "assistant",
            messages: u,
            isAutoErrorFix: t,
            title: c
          });
          t = !1;
          n = p;
          continue;
        case ChatMessageType.TOOL_MESSAGE:
          continue;
      }
    }
    return e;
  }, [$, z]);
  let Z = useMemo(() => {
    let {
      changedFiles,
      hasBaseline,
      error
    } = H;
    return changedFiles.length > 0 && hasBaseline && !error && getFeatureFlags().bake_manual_edits && 0 === B.length ? [...W, {
      type: "system",
      message: {
        id: ct,
        type: ChatMessageType.SYSTEM_MESSAGE,
        userId: M?.id || "",
        textContent: JSON.stringify({
          type: "manual_edit",
          changedFiles,
          plainText: ""
        }),
        sentAt: Date.now(),
        sentAt64: Date.now().toString(),
        toolCalls: [],
        toolResults: []
      },
      title: void 0
    }] : W;
  }, [W, H, M?.id, B.length]);
  let G = useMemo(() => {
    let e;
    let t;
    let o = new Map();
    $.forEach(i => {
      switch (i.type) {
        case ChatMessageType.ASSISTANT_MESSAGE:
        case ChatMessageType.SYSTEM_MESSAGE:
          t = i.id;
          break;
        case ChatMessageType.USER_MESSAGE:
          t && e && o.set(t, Pd(R, n, e));
          t = void 0;
          e = i.id;
      }
    });
    t && e && o.set(t, Pd(R, n, e));
    return o;
  }, [$, R, n]);
  let Y = useMemo(() => new Set(B.map(e => e.id)), [B]);
  return jsx(_$$r, {
    chatMessagesNodeGuid: n,
    clientLifecycleIdMap: G,
    codeFileChanges: H,
    codeInstanceGuid: x,
    emptyState: E,
    enableAssetImport: N,
    enableDragUpload: w,
    enableDsImport: k,
    enableImageAttachment: T,
    exchangeMessageIds: Y,
    featureType: A,
    isLastUserMessageAutoErrorFix: F,
    isResizingPanel: P,
    layerDisplayName: I,
    messagesForRendering: Z,
    onChatInputFocus: D,
    rootPath: L,
    sendDisabled: j,
    sendMessage: C,
    setInput: e,
    showChatHeader: S,
    showCodeStreaming: O
  });
}
export const U = $$I0;