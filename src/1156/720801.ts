import { J6, k4, lV } from "../figma_app/617606";
import { Fullscreen, ChatMessageType } from "../figma_app/763686";
import { useCurrentFileKey } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { Xu } from "../figma_app/588582";
import { P } from "../1156/852405";
import { yc } from "../1156/354790";
import { qE, Pd } from "../1156/418246";
import { oA } from "../figma_app/812915";
export function $$x0() {
  let e = useCurrentFileKey();
  let {
    codeLibraryInstance
  } = oA();
  let n = selectCurrentUser();
  let x = qE(e, codeLibraryInstance?.guid || "");
  let m = Xu();
  let h = P();
  return ({
    toolCallId: s,
    toolName: a,
    toolResult: l
  }) => {
    if (!Fullscreen || !n || !codeLibraryInstance) return;
    let o = {
      id: Fullscreen.generateUniqueID(),
      type: ChatMessageType.TOOL_MESSAGE,
      userId: n.id,
      textContent: J6({
        plainText: ""
      }),
      sentAt: Date.now(),
      toolCalls: [],
      toolResults: [k4({
        toolCallId: s,
        toolName: a,
        result: l
      })],
      sentAt64: Date.now().toString()
    };
    let u = Pd(e, codeLibraryInstance.guid || "", o.id);
    yc({
      featureType: lV.FIGMAKE,
      chatMessagesNode: codeLibraryInstance,
      newMessage: o,
      rawUserChatDetails: void 0,
      user: n,
      persistentEntityId: x,
      clientLifecycleId: u,
      setInput: () => {},
      fileKey: e,
      canUseSupabase: m,
      model: h
    });
  };
}
export const S = $$x0;