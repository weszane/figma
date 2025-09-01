import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { QA } from "../figma_app/703138";
import { CommentComposer } from "../draftjs_composer/577988";
export function $$l0(e) {
  let {
    commentId,
    message,
    messageMeta,
    commentType,
    onComplete
  } = e;
  let d = wA();
  let u = useCallback(e => {
    let {
      message: _message,
      messageMeta: _messageMeta,
      onSuccess
    } = e;
    d(QA({
      message: _message,
      messageMeta: _messageMeta,
      commentId,
      commentType,
      callback: () => {
        onSuccess();
        onComplete();
      }
    }));
  }, [commentId, onComplete, commentType, d]);
  return jsx(CommentComposer, {
    onSubmit: u,
    message,
    messageMeta,
    editMode: !0,
    focusOnMount: !0,
    onCancel: onComplete
  });
}
export const EditCommentComposer = $$l0;