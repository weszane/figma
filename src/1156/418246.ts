import { lV } from "../figma_app/617606";
import { az } from "../905/449184";
import { F } from "../905/422355";
import { s8 } from "../figma_app/72338";
import { hJ } from "../1156/201513";
export function $$o6(e, t, n, r) {
  return !![s8.AUTH, s8.CONNECT_TO_EXISTING_PROJECTS, s8.CREATE_PROJECT, hJ.AUTH, hJ.CONNECT_TO_EXISTING_PROJECTS, hJ.CREATE_PROJECT, hJ.AUTH_EXPIRED].includes(n) && (az.trackDefinedEvent("ai_for_production.ai_chat_connect_to_backend_prompt_shown", {
    persistentEntityId: e.persistentEntityId,
    clientLifecycleId: e.clientLifecycleId,
    source: t,
    view: n,
    fileKey: r
  }), !0);
}
export function $$c7(e, t, n) {
  az.trackDefinedEvent("ai_for_production.ai_chat_connect_to_backend_connect_button_clicked", {
    persistentEntityId: e.persistentEntityId,
    clientLifecycleId: e.clientLifecycleId,
    source: t,
    fileKey: n
  });
}
export function $$d1(e, t, n) {
  az.trackDefinedEvent("ai_for_production.ai_chat_connect_to_backend_cancel_button_clicked", {
    persistentEntityId: e.persistentEntityId,
    clientLifecycleId: e.clientLifecycleId,
    toolName: t,
    fileKey: n
  });
}
export function $$u3(e, t) {
  az.trackDefinedEvent("ai_for_production.ai_chat_supabase_secret_stored", {
    persistentEntityId: e.persistentEntityId,
    clientLifecycleId: e.clientLifecycleId,
    fileKey: t
  });
}
export function $$x10(e, t, n, r) {
  az.trackDefinedEvent("ai_for_production.ai_chat_supabase_project_connected", {
    persistentEntityId: e.persistentEntityId,
    clientLifecycleId: e.clientLifecycleId,
    source: t,
    fileKey: n,
    projectType: r
  });
}
export function $$m0(e, t, n) {
  az.trackDefinedEvent("ai_for_production.ai_chat_history_deleted", {
    fileKey: e,
    messageHistoryLength: t,
    numDeletions: n
  });
}
export function $$h9(e, t, n, s, a) {
  az.trackDefinedEvent("ai_for_production.chat_message_sent", {
    messageHistoryLength: t,
    featureType: e,
    productType: e === lV.FIGMAKE ? "figmake" : "sites",
    persistentEntityId: n,
    clientLifecycleId: s,
    fileKey: a
  });
}
export function $$g5(e, t, n, s, a, l, o, c) {
  az.trackDefinedEvent("ai_for_production.chat_response_received", {
    featureType: e,
    productType: e === lV.FIGMAKE ? "figmake" : "sites",
    timeToFirstCharacterMs: n ? n - t : void 0,
    totalResponseTimeMs: s - t,
    persistentEntityId: l,
    clientLifecycleId: o,
    toolCalls: JSON.stringify(a.map(e => `${e.toolName}${"command" in e.partialArgs ? " " + e.partialArgs.command : ""}`)),
    toolCallsMessageLength: a.reduce((e, t) => e + JSON.stringify(t.partialArgs).length, 0),
    abortReason: c
  });
}
export function $$p2(e, t, n) {
  return F(e + "-" + t + "-" + n);
}
export function $$f8(e, t) {
  return F(e + "-" + t);
}
export function $$y4({
  featureType: e,
  persistentEntityId: t,
  clientLifecycleId: n,
  fileUpdates: s
}) {
  for (let a of Object.values(s)) {
    let s = a.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+(?:\?[a-zA-Z0-9_=&-]*)?/g) || [];
    s && s.forEach(s => az.trackDefinedEvent("ai_for_production.llm_generated_image_url", {
      featureType: e,
      productType: e === lV.FIGMAKE ? "figmake" : "sites",
      persistentEntityId: t,
      clientLifecycleId: n,
      imageUrl: s
    }));
  }
}
export const Hu = $$m0;
export const IB = $$d1;
export const Pd = $$p2;
export const XJ = $$u3;
export const eM = $$y4;
export const oL = $$g5;
export const oR = $$o6;
export const oU = $$c7;
export const qE = $$f8;
export const rH = $$h9;
export const uF = $$x10;