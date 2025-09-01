import { jsx } from "react/jsx-runtime";
import { memo, useCallback, useRef } from "react";
import { d4 } from "../vendor/514228";
import { NLJ, glU } from "../figma_app/763686";
import { CB } from "../figma_app/442259";
import { UM, zW } from "../figma_app/391056";
let $$d3 = "dlt-banner-chat-shortcut";
let $$c0 = "dlt-banner-emote-shortcut";
let $$u4 = memo(function (e) {
  let t = d4(e => e.mirror.appModel.currentTool === NLJ.COMMENTS);
  let r = useCallback(() => {
    t ? glU?.triggerActionInUserEditScope("set-tool-default", {
      source: UM
    }) : glU?.triggerActionInUserEditScope("set-tool-comments", {
      source: UM
    });
  }, [t]);
  return jsx(zW, {
    shortcut: "C",
    onClick: r,
    isActive: t,
    recordingKey: "comment",
    isPressed: e.isPressed
  });
});
let $$p2 = memo(function (e) {
  let t = d4(e => "REACTING_OR_CHATTING" === e.multiplayerEmoji.type && e.multiplayerEmoji.isChatting);
  let r = useCallback(e => {
    if (t) {
      CB.closeWheel();
      return;
    }
    CB.startChat(e.clientX, e.clientY, UM);
  }, [t]);
  return jsx(zW, {
    shortcut: "/",
    onClick: r,
    isActive: t,
    recordingKey: "cursorChat",
    dataElementTarget: $$d3,
    isPressed: e.isPressed
  });
});
let $$_1 = memo(function (e) {
  let t = useRef(null);
  let r = d4(e => {
    let t = "WHEEL" === e.multiplayerEmoji.type;
    let r = "REACTING_OR_CHATTING" === e.multiplayerEmoji.type && !!e.multiplayerEmoji.imageUrl;
    return t || r;
  });
  let s = useCallback(() => {
    if (r) {
      CB.closeWheel();
      return;
    }
    let e = t.current?.getBoundingClientRect() ?? {
      x: 0,
      y: 0
    };
    let n = e.x + 100;
    let i = e.y - 200;
    CB.handleShortcutPressWithType({
      viewportX: n,
      viewportY: i,
      source: UM,
      wheelType: "REACTION"
    });
    CB.handleShortcutRelease(n, i);
  }, [r]);
  return jsx(zW, {
    ref: t,
    shortcut: "E",
    onClick: s,
    isActive: r,
    recordingKey: "emote",
    dataElementTarget: $$c0,
    isPressed: e.isPressed
  });
});
export const Qn = $$c0;
export const VQ = $$_1;
export const fn = $$p2;
export const oP = $$d3;
export const uk = $$u4;