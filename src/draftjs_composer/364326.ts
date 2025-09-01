import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useCallback, useMemo } from "react";
import { wA, d4 } from "../vendor/514228";
import { lQ } from "../905/934246";
import { I as _$$I, _Z } from "../figma_app/819288";
import { t as _$$t } from "../905/303541";
import { Dw, hm } from "../905/380385";
import { Uu } from "../figma_app/585209";
import { _B } from "../905/852370";
import { C as _$$C } from "../905/937623";
import { ri } from "../905/337179";
export function $$g0(e) {
  let t;
  let n = wA();
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
    _$$I(e.messageContent) ? h.current && h.current.hasFocus() && f.current?.focus() : (updateMessage([]), g.onClear());
    C.current?.visible && C.current.clearDecorators();
  }, [C, e.messageContent, onCancel, updateMessage, g]);
  let I = useMemo(() => _Z(e.messageContent, {
    includeTrailingWhitespace: !0
  }).length, [e.messageContent]);
  let v = useCallback(() => {
    _$$I(e.messageContent) || e.maxCommentLength && I > e.maxCommentLength || (onSubmit && onSubmit(), h.current && h.current.hasFocus() && f.current?.focus(), g.onClear());
  }, [onSubmit, e.messageContent, g, I, e.maxCommentLength]);
  let E = d4(e => e.comments.typeahead);
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
        placeholderText: e.placeholderText ? e.placeholderText : _$$t("fig_feed.add_a_comment"),
        recordingKey: Dw.feed,
        scrollToBottom: e.scrollToBottom ? e.scrollToBottom : lQ,
        setIsEditorFocused: g.setIsEditorFocused,
        submitOnEnter: e.submitOnEnter,
        submitText: _$$t("comments.post"),
        threadId: hm,
        threadPosition: null,
        typeahead: E,
        updateAttachment: e.updateAttachment,
        updateMessage: e.updateMessage,
        user: e.user,
        viewportPositionFromClientPosition: M
      })
    }), !_$$I(e.messageContent) && t && jsx(Uu, {
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