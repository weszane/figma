import { jsx } from "react/jsx-runtime";
import { useRef, useMemo, useState, useCallback, useEffect } from "react";
import { lV } from "../figma_app/617606";
import { throwTypeError } from "../figma_app/465776";
import { w as _$$w } from "../figma_app/970433";
import { Fullscreen, ChatMessageType } from "../figma_app/763686";
import { ClipboardContentType, ChatRole } from "../figma_app/175377";
import { permissionScopeHandler } from "../905/189185";
import { Ns } from "../figma_app/686647";
import { ServiceCategories as _$$e } from "../905/165054";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atom, atomStoreManager, Xr, useAtomWithSubscription } from "../figma_app/27355";
import { generateUUIDv4 } from "../905/871474";
import { logger } from "../905/651849";
import { trackDefinedFileEventWithStore } from "../figma_app/901889";
import { F as _$$F } from "../905/422355";
import { lQ } from "../905/934246";
import { reportError } from "../905/11";
import { logError } from "../905/714362";
import { uQ, NM } from "../figma_app/311375";
import { getCurrentFileType } from "../figma_app/976749";
import { Ay } from "../figma_app/432652";
import { sF } from "../figma_app/193952";
import { r as _$$r } from "../905/955316";
import { getFullscreenFileKey } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { useTeamPlanPublicInfo } from "../figma_app/465071";
import { JT } from "../figma_app/632248";
import { nR } from "../9410/40486";
import { mC } from "../figma_app/325537";
import { r as _$$r2 } from "../1156/29942";
import { J as _$$J } from "../573/772431";
var n;
function l(e, t, s) {
  t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s;
  return e;
}
class d {
  getExchange(e) {
    let t = structuredClone(this.exchange);
    if (e?.includePendingToolCalls) {
      let e = t[t.length - 1];
      if (e?.role === "assistant") for (let t of this.pendingToolCalls.values()) e.content.push({
        type: "tool-call",
        toolCallId: t.toolCallId,
        toolName: t.toolName,
        argsJSON: JSON.stringify(t.args || {})
      });
    }
    return t;
  }
  getThreadId() {
    return this.threadId;
  }
  getLastCommittedMessageIndex() {
    return this.lastCommittedMessageIndex;
  }
  getPendingToolCalls() {
    return Array.from(this.pendingToolCalls.values());
  }
  ensureActiveMessageWithRole(e) {
    if (this.activeMessage.role !== e) {
      let t = this.buildAIChatMessage(e);
      this.exchange.push(t);
      this.activeMessage = t;
    }
    return this.activeMessage;
  }
  buildAIChatMessage(e) {
    return {
      createdAtMs: Date.now(),
      role: e,
      content: []
    };
  }
  handleTextDelta(e) {
    let t = this.ensureActiveMessageWithRole("assistant");
    let s = t.content[this.activeMessage.content.length - 1];
    s && "text" === s.type || (s = {
      type: "text",
      text: ""
    }, t.content.push(s));
    s.text += e.textDelta;
  }
  handleReasoning(e) {
    if (!this.activeMessage) throw Error("AiChatExchangeBuilder: No active message");
    let t = this.ensureActiveMessageWithRole("assistant");
    if ("redacted-reasoning" === e.type) {
      let s = t.content.find(e => "redacted-reasoning" === e.type);
      s || (s = {
        type: "redacted-reasoning",
        data: ""
      }, t.content.push(s));
      s.data += e.data;
    } else {
      let s = t.content.find(e => "reasoning" === e.type);
      switch (s || (s = {
        type: "reasoning",
        text: "",
        signature: ""
      }, t.content.push(s)), e.type) {
        case "reasoning":
          "textDelta" in e && (s.text += e.textDelta);
          break;
        case "reasoning-signature":
          s.signature = e.signature;
      }
    }
  }
  handleToolCall(e) {
    this.pendingToolCalls.set(e.toolCallId, e);
  }
  appendToolCall(e) {
    this.ensureActiveMessageWithRole("assistant").content.push({
      type: "tool-call",
      toolCallId: e.toolCallId,
      toolName: e.toolName,
      argsJSON: JSON.stringify(e.args || {})
    });
  }
  appendToolResult(e, t, s) {
    this.ensureActiveMessageWithRole("tool").content.push({
      type: "tool-result",
      toolCallId: e,
      toolName: t,
      resultJSON: JSON.stringify(s)
    });
  }
  handleToolResult(e, t, s) {
    let n = this.pendingToolCalls.get(e);
    n && (this.appendToolCall(n), this.pendingToolCalls.$$delete(e), this.handleToolResult(e, t, s));
  }
  processResponseStreamPart(e) {
    switch (e.type) {
      case "text-delta":
        this.handleTextDelta(e);
        break;
      case "tool-call":
        this.handleToolCall(e);
        break;
      case "tool-result":
        this.handleToolResult(e.toolCallId, e.toolName, e.result);
        break;
      case "reasoning":
      case "reasoning-signature":
      case "redacted-reasoning":
        this.handleReasoning(e);
        break;
      case "threadId":
        this.threadId = e.threadId;
        break;
      case "messagesCommitted":
        this.lastCommittedMessageIndex = e.lastCommittedMessageIndex;
        break;
      default:
        throwTypeError(e);
    }
    this.onUpdate?.(this.exchange);
  }
  appendMessage(e) {
    this.exchange.push(e);
    this.activeMessage = e;
    this.onUpdate?.(this.exchange);
  }
  processToolCall(e) {
    let t = this.pendingToolCalls.get(e);
    if (!t) throw Error(`Tool call ${e} not found in pendingToolCalls`);
    this.appendToolCall(t);
    this.pendingToolCalls.$$delete(e);
    this.onUpdate?.(this.exchange);
  }
  processToolResult(e, t, s) {
    this.appendToolResult(e, t, s);
    this.onUpdate?.(this.exchange);
  }
  processResponseStreamParts(e) {
    for (let t of e) this.processResponseStreamPart(t);
  }
  constructor({
    initialMessages: e,
    onUpdate: t
  }) {
    l(this, "exchange", []);
    l(this, "activeMessage", void 0);
    l(this, "pendingToolCalls", new Map());
    l(this, "threadId", void 0);
    l(this, "lastCommittedMessageIndex", void 0);
    l(this, "onUpdate", void 0);
    let s = e[e.length - 1];
    if (s) {
      this.exchange = [...e];
      this.activeMessage = s;
    } else {
      let e = this.buildAIChatMessage("user");
      this.exchange.push(e);
      this.activeMessage = e;
    }
    this.onUpdate = t;
    this.onUpdate(this.exchange);
  }
}
!function (e) {
  e.MESSAGE_SENT = "message_sent";
  e.RESPONSE_RECEIVED = "response_received";
  e.TOOL_EXECUTION_STARTED = "tool_execution_started";
  e.TOOL_EXECUTION_RESULT = "tool_execution_result";
}(n || (n = {}));
class c {
  push({
    toolCallId: e,
    trackingName: t
  }) {
    this.toolCalls.push({
      name: t,
      id: e
    });
  }
  getEventFields() {
    if (0 === this.toolCalls.length) return {
      toolCallIds: void 0,
      toolCallNames: void 0
    };
    let e = [];
    let t = [];
    for (let s of this.toolCalls) {
      e.push(s.id);
      t.push(s.name);
    }
    return {
      toolCallIds: JSON.stringify(e),
      toolCallNames: JSON.stringify(t)
    };
  }
  constructor() {
    !function (e, t, s) {
      t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = s;
    }(this, "toolCalls", []);
  }
}
function u(e, t, s) {
  t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s;
  return e;
}
class h {
  reportError(e, t) {
    let s = e instanceof Error ? e.name : "UnknownError";
    let n = e instanceof Error ? e.message : JSON.stringify(e);
    let r = e instanceof Error ? e : Error(n);
    this.callbacks.sloge(t, {
      name: s,
      message: n
    });
    this.callbacks.reportToSentry(r);
    return {
      name: s,
      message: n
    };
  }
  logForServerSideChat(e, ...t) {
    this.callbacks.logForServerSideChat(e, ...t);
  }
  async streamResponse(e) {
    return this.clientDependencies.streamResponse(e, this.trackingContext);
  }
  async processAiChatResponseStream({
    exchangeBuilder: e,
    persistedMessages: t,
    serverSideChatParams: s
  }) {
    let n;
    let r = e.getExchange();
    s?.useServerSideChat ? (n = [r[r.length - 1]], this.logForServerSideChat("sending chat with thread id", s?.threadId)) : n = [...t, ...r];
    let a = (await this.streamResponse({
      messages: n,
      serverSideChatParams: s
    })).getReader();
    for (;;) {
      let {
        done,
        value
      } = await a.read();
      if (done) break;
      e.processResponseStreamPart(value);
    }
    return e.getPendingToolCalls();
  }
  async runAgentLoop({
    exchangeBuilder: e,
    persistedMessages: t,
    serverSideChatParams: s
  }) {
    for (;;) {
      let r = await this.processAiChatResponseStream({
        exchangeBuilder: e,
        persistedMessages: t,
        serverSideChatParams: s
      });
      if (s) {
        let t = e.getThreadId();
        t && s.threadId !== t && (this.logForServerSideChat("updating thread id", t), s.threadId = t, this.callbacks.setThreadId(t));
      }
      if (0 === r.length) break;
      for (let t of r) {
        let s = this.tools[t.toolName];
        let {
          toolCallId,
          toolName,
          args
        } = t;
        let o = {
          toolCallId,
          toolName: s.trackingName
        };
        this.toolCallTracker.push({
          toolCallId,
          trackingName: s.trackingName
        });
        let {
          executeWithTrackingContext
        } = s;
        if (!executeWithTrackingContext) throw Error(`Tool ${s.trackingName} has no client-side execution function`);
        this.callbacks.trackEvent({
          name: n.TOOL_EXECUTION_STARTED,
          fields: o
        });
        try {
          e.processToolCall(toolCallId);
          let t = await executeWithTrackingContext(args, {
            ...this.trackingContext,
            ...o
          });
          e.processToolResult(toolCallId, toolName, {
            ...t,
            success: !0
          });
          this.callbacks.trackEvent({
            name: n.TOOL_EXECUTION_RESULT,
            fields: {
              ...o,
              success: !0
            }
          });
        } catch (i) {
          let {
            name,
            message
          } = this.reportError(i, "Error in tool");
          this.callbacks.trackEvent({
            name: n.TOOL_EXECUTION_RESULT,
            fields: {
              ...o,
              success: !1,
              errorName: name,
              errorMessage: message
            }
          });
          e.processToolResult(toolCallId, toolName, {
            success: !1,
            error: `${name}: ${message}`
          });
        }
      }
    }
  }
  async sendMessage({
    newUserMessage: e,
    persistedMessages: t,
    serverSideChatParams: s
  }) {
    this.callbacks.trackEvent({
      name: n.MESSAGE_SENT,
      fields: {}
    });
    let r = new d({
      initialMessages: [e],
      onUpdate: e => this.callbacks.onUpdateThread(e, !1)
    });
    try {
      await this.runAgentLoop({
        exchangeBuilder: r,
        persistedMessages: t,
        serverSideChatParams: s
      });
      let {
        toolCallIds,
        toolCallNames
      } = this.toolCallTracker.getEventFields();
      this.callbacks.trackEvent({
        name: n.RESPONSE_RECEIVED,
        fields: {
          toolCallIds,
          toolCallNames,
          status: "completed"
        }
      });
      this.callbacks.onUpdateThread(r.getExchange(), !0);
    } catch (i) {
      let {
        name,
        message
      } = this.reportError(i, "Error in sendAiChatMessage");
      let {
        toolCallIds,
        toolCallNames
      } = this.toolCallTracker.getEventFields();
      this.callbacks.trackEvent({
        name: n.RESPONSE_RECEIVED,
        fields: {
          toolCallIds,
          toolCallNames,
          status: "failed",
          errorName: name,
          errorMessage: message
        }
      });
      this.callbacks.onUpdateThread([e, {
        role: "assistant",
        content: [{
          type: "text",
          text: "Sorry, I encountered an error while processing your request. Please try again."
        }],
        createdAtMs: Date.now()
      }], !0);
    }
  }
  constructor({
    trackingContext: e,
    tools: t,
    clientDependencies: s,
    callbacks: n
  }) {
    u(this, "tools", void 0);
    u(this, "trackingContext", void 0);
    u(this, "clientDependencies", void 0);
    u(this, "callbacks", void 0);
    u(this, "toolCallTracker", void 0);
    this.trackingContext = e;
    this.tools = t;
    this.clientDependencies = s;
    this.callbacks = n;
    this.toolCallTracker = new c();
  }
}
function m(e) {
  let t = e.value.textValue;
  if (t) {
    let s = JSON.parse(t);
    switch (s.type) {
      case "text":
      case "tool-call":
      case "tool-result":
      case "reasoning":
      case "redacted-reasoning":
        return s;
      default:
        throw Error(`Unknown IDLAIChatContentPart: ${JSON.stringify(e)}`);
    }
  }
  let s = e.value.selectedNodeIds;
  if (s) return {
    type: "selected-node-ids",
    selectedNodeIds: s
  };
  throw Error(`Unknown IDLAIChatContentPart: ${JSON.stringify(e)}`);
}
function f(e) {
  switch (e.type) {
    case "text":
    default:
      return {
        type: ClipboardContentType.TEXT,
        value: {
          textValue: JSON.stringify(e)
        }
      };
    case "selected-node-ids":
      return {
        type: ClipboardContentType.SELECTED_NODE_IDS,
        value: {
          selectedNodeIds: e.selectedNodeIds
        }
      };
  }
}
let b = {
  user: ChatRole.USER,
  assistant: ChatRole.ASSISTANT,
  tool: ChatRole.TOOL,
  system: ChatRole.SYSTEM
};
let x = {
  [ChatRole.USER]: "user",
  [ChatRole.ASSISTANT]: "assistant",
  [ChatRole.TOOL]: "tool",
  [ChatRole.SYSTEM]: "system"
};
function v(e) {
  let t = e.content;
  return {
    createdAtMs: e.createdAtMs,
    role: x[e.role],
    content: t.map(m)
  };
}
let T = e => "JSX" === e.type;
class k {
  appendMessage(e) {
    if (null == Fullscreen) throw Error("Fullscreen not loaded");
    return permissionScopeHandler.ai("append-ai-chat-message", () => {
      let t = this.node.aiChatThread;
      null == t && (t = {
        messages: []
      });
      t.messages.push({
        createdAtMs: e.createdAtMs,
        role: b[e.role],
        content: e.content.map(f)
      });
      this.node.aiChatThread = t;
      return {
        messages: t.messages.map(v)
      };
    });
  }
  get rawMessages() {
    return this.node.aiChatThread?.messages.map(v) ?? [];
  }
  constructor(e) {
    this.node = e;
    if (!function (e, t, s) {
      t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = s;
    }(this, "node", void 0), !T(e)) throw Error("Node is not a valid AI Chat node");
  }
}
let Y = atom(null);
export function $$J1(e) {
  atomStoreManager.set(Y, e);
}
export function $$X0() {
  let e = getFeatureFlags().ai_assistant_server_side_chat ?? !1;
  let t = Xr(mC("0:1"));
  let s = selectCurrentUser();
  let n = getFullscreenFileKey();
  let o = getCurrentFileType();
  let l = trackDefinedFileEventWithStore();
  let d = useTeamPlanPublicInfo().unwrapOr(null);
  let c = uQ();
  let u = NM();
  let y = useRef(null);
  let m = useMemo(() => {
    if (c) {
      y.current = [c];
      return [c];
    }
    if (u?.length) {
      y.current = u;
      return u;
    }
    {
      let e = getSingletonSceneGraph().getCurrentPage();
      return y.current ?? [e.guid];
    }
  }, [c, u]);
  let {
    chatController,
    persistedMessages,
    appendPersistedMessages
  } = function (e) {
    let [t, s] = useState([]);
    let n = selectCurrentUser();
    let r = _$$r(() => function (e, t) {
      if (null == Fullscreen) throw Error("Fullscreen not loaded");
      let s = e.getInternalCanvas();
      if (!s) return null;
      for (let e of s.childrenNodes) if (T(e) && e.name === t) return new k(e);
      return new k(permissionScopeHandler.ai("create-unique-ai-chat", () => {
        let n = function (e, t) {
          let s = e.createNode("JSX");
          t && (s.name = t);
          s.aiChatThread = {
            messages: []
          };
          return s;
        }(e, t);
        s.appendChild(n);
        return n;
      }));
    }(getSingletonSceneGraph(), n?.id ?? ""));
    let i = useMemo(() => r?.rawMessages ?? [], [r?.rawMessages]);
    let o = useCallback(t => {
      if (e) s(e => [...e, ...t]);else for (let e of t) r?.appendMessage(e);
    }, [e, r]);
    return {
      chatController: r,
      persistedMessages: e ? t : i,
      appendPersistedMessages: o
    };
  }(e);
  let [v, J] = useState(null);
  let [X, ee] = useState([]);
  let [et, es] = useState(null);
  let [en, er] = useState(new Map());
  let ea = useMemo(() => {
    let e = new Map(en);
    X.length > 0 && et && Z(X, persistedMessages.length, et, e);
    return e;
  }, [en, X, et, persistedMessages.length]);
  let ei = useMemo(() => _$$F(n + "-" + chatController?.node.guid || ""), [n, chatController?.node.guid]);
  let eo = useMemo(() => {
    if (d && n) return {
      useServerSideChat: e,
      threadId: v,
      fileKey: n,
      privacyMode: "user",
      planParentId: d.key.parentId,
      planParentType: d.key.type
    };
  }, [e, v, n, d]);
  let el = useCallback(async (e, s) => {
    let r = m;
    if ("canvas" === s && e.selectedNodeIds && e.selectedNodeIds.length && (r = e.selectedNodeIds), !r.length) {
      console.warn("No node selected for make edits");
      return;
    }
    if (!n) {
      console.warn("No file key found");
      return;
    }
    t("");
    ee([]);
    es(null);
    let a = persistedMessages.length;
    let d = new AbortController();
    let c = generateUUIDv4();
    atomStoreManager.set(_$$J, e.selectedNodeIds ?? r);
    let u = {
      role: "user",
      content: [{
        type: "text",
        text: e.plainText ?? ""
      }, {
        type: "selected-node-ids",
        selectedNodeIds: e.selectedNodeIds ?? []
      }],
      createdAtMs: Date.now()
    };
    let g = "ai_assistant";
    let y = {
      clientLifecycleId: c,
      persistentEntityId: ei,
      featureEntrypoint: s
    };
    let f = new h({
      trackingContext: y,
      tools: {
        [Ns.name]: _$$w({
          ...Ns,
          executeWithTrackingContext: (e, t) => nR({
            params: {
              userInput: {
                userPrompt: e.instructions ?? ""
              },
              inferredContext: {
                selectedNodeIds: r
              },
              contextPromise: void 0,
              setThinkingState: lQ,
              aiTrackingContext: {
                action: JT.MAKE_EDITS,
                source: lV.AI_ASSISTANT,
                quick_actions_session_id: "invalid",
                file_key: n,
                product_type: o,
                ...t
              },
              ...t
            },
            abortController: d
          })
        })
      },
      clientDependencies: {
        streamResponse: e => Ay.shared.aiAssistantChat(e, {
          ...sF({
            clientLifecycleId: c
          }),
          persistentEntityId: ei
        }, {
          abortSignal: d.signal
        })
      },
      callbacks: {
        trackEvent: e => l(`${g}.${e.name}`, {
          ...y,
          ...e.fields
        }),
        reportToSentry: e => reportError(_$$e.AI_ASSISTANT, e),
        sloge: (e, t) => logError(g, e, t),
        setThreadId: J,
        onUpdateThread: (e, t) => {
          ee([...e]);
          es(c);
          t && (er(t => {
            let s = new Map(t);
            Z(e, a, c, s);
            return s;
          }), appendPersistedMessages(e), ee([]), es(null));
        },
        logForServerSideChat: (e, ...t) => {
          getFeatureFlags().ai_assistant_server_side_chat && logger.log(`[server-side-chat] ${e}`, ...t);
        }
      }
    });
    await f.sendMessage({
      newUserMessage: u,
      persistedMessages,
      serverSideChatParams: structuredClone(eo)
    });
    atomStoreManager.set(_$$J, []);
  }, [m, t, persistedMessages, appendPersistedMessages, ei, eo, J, n, o, l]);
  let ed = useAtomWithSubscription(Y);
  useEffect(() => {
    ed && (el(ed, "canvas"), atomStoreManager.set(Y, null));
  }, [ed, el]);
  let ec = Q(s, persistedMessages);
  let eu = Q(s, X);
  let eh = [...ec, ...eu];
  let ep = e => {
    switch (e.type) {
      case "user":
        return e.id;
      case "assistant":
        return e.messages[e.messages.length - 1]?.id ?? "";
      case "system":
        return e.message.id;
    }
  };
  let eg = useMemo(() => new Set(eu.map(e => ep(e))), [eu]);
  return jsx(_$$r2, {
    chatMessagesNodeGuid: "0:1",
    clientLifecycleIdMap: ea,
    codeFileChanges: void 0,
    codeInstanceGuid: null,
    emptyState: jsx("div", {}),
    exchangeMessageIds: eg,
    featureType: lV.AI_ASSISTANT,
    messagesForRendering: eh,
    sendDisabled: !1,
    sendMessage: e => el(e, "left_panel"),
    setInput: t,
    showCodeStreaming: !1
  });
}
function Q(e, t) {
  return t.flatMap((t, s) => {
    let n = t.role;
    switch (n) {
      case "user":
        return [{
          type: "user",
          user: e,
          id: `converted-${s}`,
          plainText: t.content.filter(e => "text" === e.type).map(e => e.text).join(""),
          imports: void 0,
          inspectedElement: void 0,
          selectedNodeIds: t.content.filter(e => "selected-node-ids" === e.type).flatMap(e => e.selectedNodeIds),
          libraryKey: void 0
        }];
      case "assistant":
        {
          let e = [];
          let n = t.content.filter(e => "reasoning" === e.type).map(e => e.text).join("");
          n.length > 0 && e.push({
            type: "reasoning",
            reasoning: n,
            id: `reasoning-${s}`
          });
          let r = t.content.filter(e => "text" === e.type).map(e => e.text).join("");
          r && e.push({
            type: "plan",
            plan: r,
            title: "Plan",
            id: `plan-${s}`
          });
          t.content.filter(e => "tool-call" === e.type).forEach((t, n) => {
            e.push({
              type: "toolCall",
              name: t.toolName,
              id: `toolCall-${s}-${n}`
            });
          });
          return [{
            type: "assistant",
            messages: e
          }];
        }
      case "system":
        {
          let n = t.content.filter(e => "text" === e.type).map(e => e.text).join("");
          return [{
            type: "system",
            message: {
              id: `converted-${s}`,
              type: ChatMessageType.SYSTEM_MESSAGE,
              userId: e.id,
              textContent: JSON.stringify({
                plainText: n
              }),
              sentAt: t.createdAtMs,
              toolCalls: [],
              toolResults: [],
              sentAt64: t.createdAtMs.toString()
            }
          }];
        }
      case "tool":
        return [];
      default:
        throw Error(`Unknown message role: ${n}`);
    }
  });
}
function Z(e, t, s, n) {
  let r = function (e) {
    for (let t = e.length - 1; t >= 0; t--) if (e[t]?.role === "assistant") return t;
    return -1;
  }(e);
  if (-1 === r) return;
  let a = function (e, t) {
    let s = e.content.filter(e => "tool-call" === e.type);
    let n = e.content.filter(e => "text" === e.type);
    let r = e.content.filter(e => "reasoning" === e.type);
    return s.length > 0 ? `toolCall-${t}-${s.length - 1}` : n.length > 0 ? `plan-${t}` : r.length > 0 ? `reasoning-${t}` : `converted-${t}`;
  }(e[r], t + r);
  n.set(a, s);
}
export const A = $$X0;
export const w = $$J1;