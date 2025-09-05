import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { eT } from "../figma_app/703138";
import { CommentComposer } from "../draftjs_composer/577988";
export function $$l0(e) {
  let {
    commentType,
    resourceId,
    resourceType,
    onSuccessCallback,
    onComplete,
    parentId
  } = e;
  let u = useDispatch();
  let p = useCallback(e => {
    let {
      message,
      messageMeta,
      onSuccess,
      onError
    } = e;
    u(eT({
      message,
      messageMeta,
      resourceType,
      resourceId,
      commentType,
      parentId,
      isReply: !0,
      onSuccess: e => {
        onSuccess?.();
        onSuccessCallback?.(e);
      },
      onError
    }));
  }, [commentType, u, resourceType, resourceId, onSuccessCallback, parentId]);
  return jsx(CommentComposer, {
    onSubmit: p,
    replyMode: !0,
    onCancel: onComplete
  });
}
export const ReplyCommentComposer = $$l0;