import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { Yx } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { H8 } from "../905/590952";
import { C, e as _$$e } from "../905/937623";
import { MP, i8 } from "../905/149906";
export function $$c0(e) {
  let t = useCallback(() => {
    e.replyContainerRef?.current && e.replyContainerRef.current.scrollIntoView({
      block: "end",
      behavior: "smooth"
    });
  }, [e.replyContainerRef]);
  let i = jsx(C, {
    allowAttachments: e.allowAttachments,
    ariaLabel: e.authorNames ? getI18nString("fullscreen.accessibility.reply_to_comment_with_authors", {
      username: Yx(e.authorNames)
    }) : getI18nString("fullscreen.accessibility.reply_to_comment"),
    attachments: e.attachments,
    authorChanged: e.authorChanged,
    className: e.className,
    createdAt: e.createdAt,
    deleteAttachment: e.deleteAttachment,
    dispatch: e.dispatch,
    editingExistingComment: e.editingExistingComment,
    editorOnClear: e.editorOnClear,
    editorOnInsert: e.editorOnInsert,
    editorRef: e.editorRef,
    editorType: e.editorType,
    errorFallback: jsx(_$$e, {
      type: "thread"
    }),
    fallback: null,
    fileKey: e.fileKey,
    hideEmojiPicker: e.hideEmojiPicker,
    hyperlinkLocation: e.hyperlinkLocation,
    isDisabled: e.isDisabled,
    isEmojiPickerDisabled: e.isEmojiPickerDisabled,
    maintainSelectionOnFocus: e.maintainSelectionOnFocus,
    mentionables: e.mentionables,
    messageMeta: e.messageMeta,
    mountInputFocused: e.mountInputFocused,
    onCancel: e.onCancel,
    onComposeFocus: e.onComposeFocus,
    onEditStart: e.onEditStart,
    onSubmit: e.onSubmit,
    placeholderText: e.placeholderText,
    recordingKey: e.recordingKey,
    scrollToBottom: e.replyContainerRef && t,
    setHyperlinkEditorRef: e.setHyperlinkEditorRef,
    setHyperlinkLocation: e.setHyperlinkLocation,
    setIsEditorFocused: e.setIsEditorFocused,
    submitText: e.submitText,
    threadId: e.threadId,
    threadPosition: e.threadPosition,
    typeahead: e.typeahead,
    updateAttachment: e.updateAttachment,
    updateMessage: e.updateMessage,
    user: e.user,
    viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
  });
  return jsxs("div", {
    className: MP,
    ref: e.replyContainerRef,
    children: [jsx("div", {
      className: i8,
      children: jsx(H8, {
        user: e.user || {}
      })
    }), i]
  });
}
export const K = $$c0;