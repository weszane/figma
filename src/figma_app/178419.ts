import { ChatMessageType } from "../figma_app/763686";
import { gB, rU, z7 } from "../figma_app/383733";
import { debug } from "../figma_app/465776";
export function $$s14(e) {
  switch (e.type) {
    case ChatMessageType.ASSISTANT_MESSAGE:
      {
        let t = {
          role: "assistant",
          content: {
            type: "content",
            ...$$f13(e.textContent)
          }
        };
        e.toolCalls.length > 0 && (t.toolCalls = e.toolCalls.map(e => ({
          type: "toolCall",
          toolCallId: e.toolCallId,
          toolName: e.toolName,
          partialArgs: d(e.argsJson)
        })));
        return t;
      }
    case ChatMessageType.USER_MESSAGE:
      return {
        role: "user",
        content: {
          type: "content",
          ...$$g4(e.textContent)
        }
      };
    case ChatMessageType.TOOL_MESSAGE:
      return {
        role: "toolResults",
        content: e.toolResults.map(e => ({
          toolCallId: e.toolCallId,
          toolName: e.toolName,
          result: d(e.resultJson)
        }))
      };
    case ChatMessageType.SYSTEM_MESSAGE:
      return {
        role: "system",
        content: $$E6(e.textContent) ?? void 0
      };
    default:
      throw Error("Unknown NodeChatMessageType");
  }
}
export function $$o11(e) {
  return {
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    argsJson: JSON.stringify(e.partialArgs)
  };
}
export function $$l12(e) {
  return {
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    resultJson: JSON.stringify(e.result)
  };
}
function d(e) {
  try {
    return JSON.parse(e);
  } catch (e) {
    return {};
  }
}
function c(e, t) {
  let r = {
    type: "toolCall",
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    partialArgs: d(e.argsJson)
  };
  let n = t.safeParse(r);
  return n.success ? n.data : null;
}
export function $$u8(e) {
  return c(e, gB);
}
export function $$p15(e) {
  return c(e, rU);
}
export function $$_9(e) {
  let t = {
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    result: d(e.resultJson)
  };
  let r = z7.safeParse(t);
  return r.success ? r.data : null;
}
export function $$h2(e) {
  return JSON.stringify(e);
}
export function $$m1(e) {
  try {
    return JSON.parse(e);
  } catch (e) {
    return {
      plainText: ""
    };
  }
}
export function $$g4(e) {
  try {
    return JSON.parse(e);
  } catch (e) {
    return {
      plainText: ""
    };
  }
}
export function $$f13(e) {
  try {
    return JSON.parse(e);
  } catch (e) {
    return {
      plainText: ""
    };
  }
}
export function $$E6(e) {
  try {
    return JSON.parse(e);
  } catch (e) {
    return null;
  }
}
export function $$y3(e) {
  return e.map(e => e.type === ChatMessageType.USER_MESSAGE ? {
    ...e,
    textContent: function (e) {
      let t = $$g4(e);
      t.imports && t.imports.forEach(e => {
        "image" === e.type ? e.image = void 0 : "node" === e.type && (e.code = void 0, e.image = void 0, e.codeFiles = void 0);
      });
      return $$h2(t);
    }(e.textContent)
  } : e);
}
class b {
  clearCodeSnapshotsFromMessages(e) {
    return e.map(e => {
      if (e.type === ChatMessageType.ASSISTANT_MESSAGE) {
        let t = $$f13(e.textContent);
        t.codeSnapshot = void 0;
        return {
          ...e,
          textContent: $$h2(t)
        };
      }
      return e;
    });
  }
}
let $$T16 = new b();
let $$I5 = () => {
  $$T16 = new b();
};
export function $$S7(e) {
  return function e(t, r) {
    if (!t) return [];
    let n = [];
    if (t.isCodeInstance && t.name === r && n.push(t), t.childrenNodes) for (let i of t.childrenNodes) n.push(...e(i, r));
    return n;
  }(function (e, t) {
    try {
      return e();
    } catch (e) {
      return null;
    }
  }(() => e.getCurrentPage(), 0), "App").sort((e, t) => (t.editInfo?.lastEditedAt ?? 0) - (e.editInfo?.lastEditedAt ?? 0))[0] ?? null;
}
export function $$v0(e) {
  if (!e) return null;
  debug(e.isCodeInstance, "Node is not a code instance");
  let t = e.backingCodeComponent;
  if (!t) return null;
  let r = t.exportedFromCodeFile;
  return r && r.belongsToCodeLibrary || null;
}
export function $$A10(e) {
  let t;
  for (let r = e.length - 1; r >= 0; r--) {
    let i = e[r];
    if (i.type === ChatMessageType.ASSISTANT_MESSAGE) {
      let e = $$f13(i.textContent || "");
      if (e.title && e.title.trim()) {
        t = e.title.trim();
        break;
      }
    }
  }
  return t;
}
export const Ac = $$v0;
export const H5 = $$m1;
export const J6 = $$h2;
export const Li = $$y3;
export const MK = $$g4;
export const OX = $$I5;
export const U1 = $$E6;
export const VH = $$S7;
export const Vm = $$u8;
export const Xy = $$_9;
export const eB = $$A10;
export const gi = $$o11;
export const k4 = $$l12;
export const lr = $$f13;
export const oh = $$s14;
export const s7 = $$p15;
export const sv = $$T16;