import { memo, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { jsx } from "react/jsx-runtime";
import { DLT_BANNER_SHORTCUT_BUTTON_ID, ShortcutButton } from "../figma_app/391056";
import { emojiWheelManagerInstance } from "../figma_app/442259";
import { DesignGraphElements, Fullscreen } from "../figma_app/763686";
// Constants for data element targets
export const CHAT_SHORTCUT_ELEMENT_ID = "dlt-banner-chat-shortcut"; // $$d3
export const EMOTE_SHORTCUT_ELEMENT_ID = "dlt-banner-emote-shortcut"; // $$c0

/**
 * Comments Tool Shortcut Button Component
 * Toggles between comments tool and default tool
 * Original component: $$u4
 */
export const CommentsToolShortcutButton = memo((props: { isPressed: boolean }) => {
  const isCommentsToolActive = useSelector((state: any) => 
    state.mirror.appModel.currentTool === DesignGraphElements.COMMENTS
  );
  
  const handleToggleCommentsTool = useCallback(() => {
    const action = isCommentsToolActive ? "set-tool-default" : "set-tool-comments";
    Fullscreen?.triggerActionInUserEditScope(action, {
      source: DLT_BANNER_SHORTCUT_BUTTON_ID
    });
  }, [isCommentsToolActive]);

  return jsx(ShortcutButton, {
    shortcut: "C",
    onClick: handleToggleCommentsTool,
    isActive: isCommentsToolActive,
    recordingKey: "comment",
    isPressed: props.isPressed
  });
});

/**
 * Chat Shortcut Button Component
 * Toggles cursor chat functionality
 * Original component: $$p2
 */
export const ChatShortcutButton = memo((props: { isPressed: boolean }) => {
  const isChatting = useSelector((state: any) => 
    state.multiplayerEmoji.type === "REACTING_OR_CHATTING" && state.multiplayerEmoji.isChatting
  );
  
  const handleToggleChat = useCallback((event: MouseEvent) => {
    if (isChatting) {
      emojiWheelManagerInstance.closeWheel();
      return;
    }
    emojiWheelManagerInstance.startChat(event.clientX, event.clientY, DLT_BANNER_SHORTCUT_BUTTON_ID);
  }, [isChatting]);

  return jsx(ShortcutButton, {
    shortcut: "/",
    onClick: handleToggleChat,
    isActive: isChatting,
    recordingKey: "cursorChat",
    dataElementTarget: CHAT_SHORTCUT_ELEMENT_ID,
    isPressed: props.isPressed
  });
});

/**
 * Emoji/Emote Shortcut Button Component
 * Toggles emoji reaction wheel
 * Original component: $$_1
 */
export const EmojiShortcutButton = memo((props: { isPressed: boolean }) => {
  const buttonRef = useRef<HTMLElement>(null);
  
  const isEmojiWheelActive = useSelector((state: any) => {
    const isWheelOpen = state.multiplayerEmoji.type === "WHEEL";
    const isReacting = state.multiplayerEmoji.type === "REACTING_OR_CHATTING" && 
                      !!state.multiplayerEmoji.imageUrl;
    return isWheelOpen || isReacting;
  });
  
  const handleToggleEmojiWheel = useCallback(() => {
    if (isEmojiWheelActive) {
      emojiWheelManagerInstance.closeWheel();
      return;
    }
    
    // Calculate position for emoji wheel based on button position
    const buttonRect = buttonRef.current?.getBoundingClientRect() ?? { x: 0, y: 0 };
    const wheelX = buttonRect.x + 100;
    const wheelY = buttonRect.y - 200;
    
    emojiWheelManagerInstance.handleShortcutPressWithType({
      viewportX: wheelX,
      viewportY: wheelY,
      source: DLT_BANNER_SHORTCUT_BUTTON_ID,
      wheelType: "REACTION"
    });
    emojiWheelManagerInstance.handleShortcutRelease(wheelX, wheelY);
  }, [isEmojiWheelActive]);

  return jsx(ShortcutButton, {
    ref: buttonRef,
    shortcut: "E",
    onClick: handleToggleEmojiWheel,
    isActive: isEmojiWheelActive,
    recordingKey: "emote",
    dataElementTarget: EMOTE_SHORTCUT_ELEMENT_ID,
    isPressed: props.isPressed
  });
});

// Export constants and components with descriptive names
export const  Qn = EMOTE_SHORTCUT_ELEMENT_ID;
export const VQ = EmojiShortcutButton;
export const fn = ChatShortcutButton;
export const oP = CHAT_SHORTCUT_ELEMENT_ID;
export const uk = CommentsToolShortcutButton;
