import { lr, J6, gi, MK, oh, k4, s7 } from "../figma_app/178419";
import { K$p, glU } from "../figma_app/763686";
import { A } from "../905/284190";
import { FJ, Ym, kQ, OT, b5 } from "../figma_app/383733";
import { V } from "../figma_app/365013";
import { m as _$$m } from "../figma_app/226038";
import { l7 } from "../905/189185";
import { z } from "../figma_app/602681";
import { r } from "../figma_app/208194";
import { F$ } from "../figma_app/304955";
import { o as _$$o, j } from "../figma_app/171378";
import { AD } from "../figma_app/419232";
import { L } from "../figma_app/381700";
import { l as _$$l } from "../905/150503";
function d(e, t, r) {
  t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r;
  return e;
}
export class $$c3 {
  getExchange() {
    for (let e of this.exchange) {
      let t = new Set();
      let r = new Set();
      for (let r of e.toolCalls) {
        t.has(r.toolCallId) && this.reportToSentry?.(Error("Duplicate toolCallId v2"), {
          modelConfigVersion: this.modelConfigVersion,
          toolCallId: r.toolCallId,
          toolName: r.toolName
        });
        t.add(r.toolCallId);
      }
      for (let t of e.toolResults) {
        r.has(t.toolCallId) && this.reportToSentry?.(Error("Duplicate toolCallId v2"), {
          modelConfigVersion: this.modelConfigVersion,
          toolCallId: t.toolCallId,
          toolName: t.toolName
        });
        r.add(t.toolCallId);
      }
    }
    return A(this.exchange);
  }
  getToolCalls() {
    return this.toolCalls;
  }
  getCurrentToolCall() {
    return this.currentToolCall;
  }
  setNewActiveMessage(e) {
    this.activeMessage = $$u6(e, this.userId, this.nodeIdGenerator, this.modelConfigVersion);
    this.exchange.push(this.activeMessage);
  }
  handleTextResponse(e) {
    var t;
    var r;
    var a;
    var s;
    var o;
    if (!this.activeMessage) throw Error("NodeChatExchangeBuilder: No active message");
    this.activeMessage.type !== K$p.ASSISTANT_MESSAGE && this.setNewActiveMessage(K$p.ASSISTANT_MESSAGE);
    let l = lr(this.activeMessage.textContent);
    let d = e.type;
    if (l.mode && d !== l.mode && (this.setNewActiveMessage(K$p.ASSISTANT_MESSAGE), l = lr(this.activeMessage.textContent)), "code" === e.type) {
      l && l.codeFilePath && l.codeFilePath !== e.file && (this.setNewActiveMessage(K$p.ASSISTANT_MESSAGE), l = lr(this.activeMessage.textContent));
      this.activeMessage.textContent = (t = l, this.excludeRedundantCodeFromMessageHistory && e.excludeFromMessageHistory || ((void 0 === t.code || e.reset) && (t.code = ""), t.code += e.code, t.codeFilePath = e.file, t.mode = "code"), J6(t));
    } else {
      let t = e.message;
      let i = l.plainText.split("\n");
      i[i.length - 1]?.startsWith(">") && (t = "\n" + t);
      this.activeMessage.textContent = (r = l, a = t, r.mode = d, r.plainText += a, J6(r));
      "plan" === e.type && e.title && (this.activeMessage.textContent = (s = l, o = e.title, s.title = o, J6(s)));
    }
  }
  handleReasoningResponse(e) {
    if (!this.activeMessage) throw Error("NodeChatExchangeBuilder: No active message");
    this.activeMessage.type !== K$p.ASSISTANT_MESSAGE && this.setNewActiveMessage(K$p.ASSISTANT_MESSAGE);
    let t = lr(this.activeMessage.textContent);
    "reasoning" === e.type ? (t.signedReasoning || (t.signedReasoning = {
      text: ""
    }), t.signedReasoning.text += e.reasoning) : "reasoning-signature" === e.type ? (t.signedReasoning ? t.signedReasoning.signature || (t.signedReasoning.signature = "") : t.signedReasoning = {
      text: "",
      signature: ""
    }, t.signedReasoning.signature += e.signature) : "redacted-reasoning" === e.type && (t.redactedReasoning || (t.redactedReasoning = ""), t.redactedReasoning += e.data);
    this.activeMessage.textContent = J6(t);
  }
  handleCodeDiffVisualization(e, t) {
    if (!this.activeMessage) throw Error("NodeChatExchangeBuilder: No active message");
    this.activeMessage.type !== K$p.ASSISTANT_MESSAGE && this.setNewActiveMessage(K$p.ASSISTANT_MESSAGE);
    let r = lr(this.activeMessage.textContent);
    if (r.edits || (r.edits = {}), r.edits[e.id] || (r.edits[e.id] = {
      id: e.id,
      oldString: "",
      newString: ""
    }), "codeDiffVisualizationDelta" === e.type) switch (t.deltaUpdateType) {
      case "overwrite":
        r.edits[e.id].oldString = e.old_str;
        r.edits[e.id].newString = e.new_str;
        break;
      case "append":
        r.edits[e.id].oldString += e.old_str;
        r.edits[e.id].newString += e.new_str;
        break;
      default:
        t.deltaUpdateType;
    } else "codeDiffVisualizationDone" === e.type && (r.edits[e.id].done = !0);
    this.activeMessage.textContent = J6(r);
  }
  setModelConfigVersion(e) {
    this.modelConfigVersion = e;
    this.exchange.forEach(t => {
      let r = lr(t.textContent);
      r.modelConfigVersion = e;
      t.textContent = J6(r);
    });
  }
  updateToolArray(e, t, r) {
    let n = e.findIndex(e => e.toolCallId === r);
    n >= 0 ? e[n] = t : e.push(t);
  }
  handleToolCall(e, t) {
    if (!this.activeMessage) throw Error("NodeChatExchangeBuilder: No active message");
    this.currentToolCall = e;
    this.activeMessage.type !== K$p.ASSISTANT_MESSAGE && this.setNewActiveMessage(K$p.ASSISTANT_MESSAGE);
    let r = gi(e);
    this.updateToolArray(this.activeMessage.toolCalls, r, e.toolCallId);
    this.updateToolArray(this.toolCalls, e, e.toolCallId);
    t.isCompleteToolCall && (this.currentToolCall = void 0);
    let a = _$$m(e, t);
    a && this.handleCodeDiffVisualization(a, {
      deltaUpdateType: "overwrite"
    });
  }
  handleToolResult(e) {
    if (!this.activeMessage) throw Error("NodeChatExchangeBuilder: No active message");
    this.activeMessage.type !== K$p.TOOL_MESSAGE && this.setNewActiveMessage(K$p.TOOL_MESSAGE);
    let t = {
      toolCallId: e.toolCallId,
      toolName: e.toolName,
      resultJson: JSON.stringify(e.result)
    };
    this.updateToolArray(this.activeMessage.toolResults, t, e.toolCallId);
  }
  handleProviderMetadata(e) {
    if (!this.activeMessage) throw Error("NodeChatExchangeBuilder: No active message");
    let t = function (e, t) {
      for (let r = e.length - 1; r >= 0; r--) {
        let n = e[r];
        if (t(n, r, e)) return n;
      }
    }(this.exchange, e => e.type === K$p.ASSISTANT_MESSAGE);
    if (!t) return;
    let r = lr(t.textContent);
    r.providerMetadata = e.providerMetadata;
    t.textContent = J6(r);
  }
  processResponseDelta(e) {
    if (this.hasProcessedFirstResponse || (this.setNewActiveMessage(K$p.ASSISTANT_MESSAGE), this.hasProcessedFirstResponse = !0), !this.activeMessage) throw Error("NodeChatExchangeBuilder: No active message");
    switch (e.type) {
      case "modelConfigVersion":
        this.setModelConfigVersion(e.version);
        break;
      case "code":
      case "plan":
      case "work":
      case "summary":
      case "message":
        this.handleTextResponse(e);
        break;
      case "toolCall":
        this.handleToolCall(e, {
          isCompleteToolCall: !0
        });
        break;
      case "toolResult":
        this.handleToolResult(e);
        break;
      case "reasoning":
      case "reasoning-signature":
      case "redacted-reasoning":
        this.handleReasoningResponse(e);
        break;
      case "chat-compression":
      case "heartbeat":
      case "editedFiles":
        break;
      case "codeDiffVisualizationDelta":
      case "codeDiffVisualizationDone":
        this.handleCodeDiffVisualization(e, {
          deltaUpdateType: "append"
        });
        break;
      case "requestUuid":
        {
          let t = this.exchange[0];
          if (t && t.type === K$p.USER_MESSAGE) {
            let r = MK(t.textContent);
            r.requestUuid = e.requestId;
            t.textContent = J6(r);
          }
          break;
        }
      case "toolCallStart":
        {
          this.jsonStreamParser.reset();
          let t = FJ.safeParse(e);
          if (!t.success) break;
          this.currentToolCall = {
            toolCallId: t.data.toolCallId,
            toolName: t.data.toolName,
            partialArgs: {},
            type: "toolCall"
          };
          break;
        }
      case "toolCallDelta":
        {
          let t = this.jsonStreamParser.addChunk(e.argsTextDelta);
          if (t && this.currentToolCall) {
            let e = {
              ...this.currentToolCall,
              partialArgs: t
            };
            this.handleToolCall(e, {
              isCompleteToolCall: !1
            });
          }
          break;
        }
      case "providerMetadata":
        this.handleProviderMetadata(e);
    }
  }
  processResponseDeltaArray(e) {
    for (let t of e) this.processResponseDelta(t);
  }
  getExchangeAsCodeChatHistory({
    withHiddenMessages: e
  }) {
    return this.exchange.map(t => {
      let r = oh(t);
      r && e && "user" === r.role && (r.content.hidden = !0);
      return r;
    }).filter(e => null !== e);
  }
  addUserCodeChatMessage(e) {
    let t = $$u6(K$p.USER_MESSAGE, this.userId, this.nodeIdGenerator);
    t.textContent = J6(e.content);
    this.exchange.push(t);
  }
  constructor({
    initialMessages: e,
    userId: t,
    nodeIdGenerator: r,
    initializeWithAssistantMessage: n = !1,
    excludeRedundantCodeFromMessageHistory: a = !1,
    reportToSentry: s
  }) {
    d(this, "exchange", []);
    d(this, "toolCalls", []);
    d(this, "userId", void 0);
    d(this, "nodeIdGenerator", void 0);
    d(this, "hasProcessedFirstResponse", !1);
    d(this, "activeMessage", void 0);
    d(this, "modelConfigVersion", void 0);
    d(this, "excludeRedundantCodeFromMessageHistory", void 0);
    d(this, "jsonStreamParser", new V());
    d(this, "currentToolCall", void 0);
    d(this, "reportToSentry", void 0);
    this.exchange = e;
    this.userId = t;
    this.nodeIdGenerator = r;
    n && (this.setNewActiveMessage(K$p.ASSISTANT_MESSAGE), this.hasProcessedFirstResponse = !0);
    this.excludeRedundantCodeFromMessageHistory = a;
    this.reportToSentry = s;
  }
}
export function $$u6(e, t, r, n) {
  return {
    id: r(),
    type: e,
    userId: t,
    textContent: JSON.stringify({
      modelConfigVersion: n,
      plainText: ""
    }),
    sentAt: Date.now(),
    toolCalls: [],
    toolResults: [],
    sentAt64: Date.now().toString()
  };
}
export function $$_21(e, t) {
  let {
    summary,
    totalSummarized
  } = t;
  l7.ai("set-chat-compression-state", () => {
    e.chatCompressionState = {
      summary,
      startIndex: totalSummarized
    };
  });
}
export async function $$E5({
  chatMessagesNode: e,
  newMessage: t,
  rawUserChatDetails: r,
  userId: a,
  featureType: o,
  canUseSupabase: l,
  model: d,
  featureFlagConfig: c,
  handlers: u
}) {
  u.handleClearImportData();
  let _ = e.chatCompressionState ? e.chatMessages.slice(e.chatCompressionState.startIndex) : e.chatMessages;
  let h = [t];
  let m = function ({
    newMessage: e,
    prevMessage: t,
    userId: r
  }) {
    if (!glU || e.type === K$p.TOOL_MESSAGE || !t || t.type !== K$p.ASSISTANT_MESSAGE) return;
    let a = t.toolCalls;
    if (0 === a.length) return;
    let s = a[0];
    if (!s) return;
    let o = s.toolName;
    let l = s.toolCallId;
    if (AD.includes(o)) return {
      id: glU.generateUniqueID(),
      type: K$p.TOOL_MESSAGE,
      userId: r,
      textContent: J6({
        plainText: ""
      }),
      sentAt: Date.now(),
      toolCalls: [],
      toolResults: [k4({
        toolCallId: l,
        toolName: o,
        result: {
          success: !1,
          message: "Was not successful."
        }
      })],
      sentAt64: Date.now().toString()
    };
  }({
    newMessage: t,
    prevMessage: _[_.length - 1],
    userId: a
  });
  m && (_.push(m), h = [m, ...h]);
  let E = function (e, t) {
    let r = e.map(oh);
    if (r.length > 100 && (!t.chatCompressionState || 0 === t.chatCompressionState.startIndex)) {
      let e = function (e, t) {
        let r = t ? 1 : 3;
        let n = [];
        for (let t = e.length - 1; t >= 0; t--) {
          let i = e[t];
          if (i && "user" === i.role && !i.content.errors && (n.push(t), n.length === r)) break;
        }
        let i = n.pop();
        if (0 === i) {
          let e = n.pop();
          e && (i = e);
        }
        return void 0 === i ? 0 : i;
      }(r, !1);
      let n = {
        startIndex: e,
        summary: ""
      };
      l7.ai("manual-set-chat-compression-state", () => {
        t.chatCompressionState = n;
      });
      return r.slice(e);
    }
    return r;
  }(_, e);
  let y = oh(t);
  E.push(y);
  let T = function (e) {
    if (e) return {
      totalSummarized: e.startIndex,
      summary: e.summary
    };
  }(e.chatCompressionState);
  let S = await u.initSupabase();
  let v = o === _$$l.FIGMAKE;
  let A = (c.multi_file_code_layers || c.bake_canvas) && !!e.codeFilePath;
  let x = v || A ? u.getSources() : {
    [e.codeFileFullPathWithoutScheme]: e.sourceCode
  };
  let N = e.isEntrypointCodeFile ? F$(u.getRootPath(), e.codeFileFullPathWithoutScheme) : void 0;
  o === _$$l.FIGMAKE_IN_DESIGN && N && x[N] === _$$o && (x[N] = j);
  return {
    exchangeInit: h,
    codeChatRequest: {
      rawUserChatDetails: r,
      chats: E,
      chatCompression: T,
      files: x,
      supabase: S,
      supabaseEnabled: l,
      model: d,
      multiFileCodeLayersEnabled: A,
      entrypointFilePath: N,
      productType: o === _$$l.FIGMAKE || o === _$$l.FIGMAKE_IN_DESIGN ? Ym.MAKE_STANDALONE : Ym.CODE_LAYERS,
      codeLibraryComponents: v ? u.getCodeLibraryComponents() : void 0
    }
  };
}
export function $$y22(e) {
  let t = s7(e);
  if (!t) return;
  let {
    toolName,
    partialArgs
  } = t;
  return toolName === kQ.name && "create" === partialArgs.command ? partialArgs.file_text : toolName === OT.name ? partialArgs.change_str : toolName === b5.name ? partialArgs.file_text : void 0;
}
export async function $$S15({
  messages: e,
  codeFiles: t,
  fileKey: r,
  clientDependencies: a
}) {
  let s = await a.createCodeSnapshot({
    fileKey: r,
    codeFiles: t
  });
  return s ? e.map(e => {
    if (e.type === K$p.ASSISTANT_MESSAGE) {
      let t = lr(e.textContent);
      t.codeSnapshot = s;
      e.textContent = J6(t);
    }
    return e;
  }) : e;
}
export { AD } from "../figma_app/419232";
export { k4, Li, lr, H5, U1, MK, J6, VH, OX, sv, Vm, Xy } from "../figma_app/178419";
export const lV = _$$l;
export const zM = z;
export const P5 = $$c3;
export const L6 = L;
export const jv = $$E5;
export const ic = $$u6;
export const r9 = r;
export const Us = $$S15;
export const yZ = $$_21;
export const m4 = $$y22;