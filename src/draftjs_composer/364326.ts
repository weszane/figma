import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noop } from 'lodash-es';
import { isMessageMetaEmpty, flattenMessageMeta } from "../figma_app/819288";
import { getI18nString } from "../905/303541";
import { ComposerType, NEW_COMMENT_ID } from "../905/380385";
import { Uu } from "../figma_app/585209";
import { _B } from "../905/852370";
import { C as _$$C } from "../905/937623";
import { ri } from "../905/337179";
export function $$g0(e) {
  let t;
  let n = useDispatch();
  let g = _B();
  let h = useRef(null);
  let f = useRef(null);
  let C = useRef(null);
  let {
    onSubmit,
    onCancel,
    updateMessage
  } = e;
  let x = useCallback(() => {
    if (onCancel) {
      h.current && h.current.hasFocus() && f.current?.focus();
      onCancel();
      g.onClear();
      return;
    }
    isMessageMetaEmpty(e.messageContent) ? h.current && h.current.hasFocus() && f.current?.focus() : (updateMessage([]), g.onClear());
    C.current?.visible && C.current.clearDecorators();
  }, [C, e.messageContent, onCancel, updateMessage, g]);
  let I = useMemo(() => flattenMessageMeta(e.messageContent, {
    includeTrailingWhitespace: !0
  }).length, [e.messageContent]);
  let v = useCallback(() => {
    isMessageMetaEmpty(e.messageContent) || e.maxCommentLength && I > e.maxCommentLength || (onSubmit && onSubmit(), h.current && h.current.hasFocus() && f.current?.focus(), g.onClear());
  }, [onSubmit, e.messageContent, g, I, e.maxCommentLength]);
  let E = useSelector(e => e.comments.typeahead);
  let M = useCallback(e => e, []);
  f.current && (t = f.current.getBoundingClientRect());
  return jsxs(Fragment, {
    children: [jsx("div", {
      ref: f,
      tabIndex: 0,
      className: "feed_composer--commentDescriptionComposer--x8T69 feed_composer--descriptionComposerBase--3m1hj",
      children: jsx(_$$C, {
        allowAttachments: !0,
        attachments: e.attachments,
        containerClassName: e.composerContainerClass,
        deleteAttachment: e.deleteAttachment,
        dispatch: n,
        editableTypeaheadClassName: e.editableTypeaheadClass,
        editingExistingComment: e.editingExistingComment,
        editorOnClear: g.editorOnClear,
        editorOnInsert: g.editorOnInsert,
        editorRef: h,
        editorType: "comment-editor-feed",
        errorFallback: null,
        fallback: null,
        fileKey: null,
        hideEmojiPicker: !1,
        hideSubmitButton: e.hideSubmitButton,
        maintainSelectionOnFocus: !0,
        mentionables: e.mentionables,
        messageMeta: e.messageContent,
        mountInputFocused: e.autofocus,
        onCancel: x,
        onSubmit: v,
        placeholderText: e.placeholderText ? e.placeholderText : getI18nString("fig_feed.add_a_comment"),
        recordingKey: ComposerType.feed,
        scrollToBottom: e.scrollToBottom ? e.scrollToBottom : noop,
        setIsEditorFocused: g.setIsEditorFocused,
        submitOnEnter: e.submitOnEnter,
        submitText: getI18nString("comments.post"),
        threadId: NEW_COMMENT_ID,
        threadPosition: null,
        typeahead: E,
        updateAttachment: e.updateAttachment,
        updateMessage: e.updateMessage,
        user: e.user,
        viewportPositionFromClientPosition: M
      })
    }), !isMessageMetaEmpty(e.messageContent) && t && jsx(Uu, {
      decoratorsRef: C,
      onClear: g.onClear,
      onInsert: g.onInsert,
      width: t.width,
      direction: e.displayDecoratorsDownwards ? ri.DOWNWARDS : ri.UPWARDS,
      targetRect: t,
      useFixedPosition: !0
    })]
  });
}
export const FeedPostCommentComposer = $$g0;
