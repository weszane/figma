import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { b, q7, bL, mc } from "../figma_app/860955";
import { d as _$$d } from "../905/976845";
import { J } from "../905/125993";
import { getI18nString, renderI18nText } from "../905/303541";
import { Df, Mv, AY, QY } from "../figma_app/770088";
import { to } from "../905/156213";
import { I_ } from "../905/234821";
import { iZ } from "../905/372672";
import { kT } from "../905/380385";
import { v } from "../905/266815";
import { E as _$$E } from "../905/565019";
import { VX } from "../905/50151";
var A = (e => (e.EDIT = "edit", e.DELETE = "delete", e.COPY_LINK = "copy_link", e.TOGGLE_UNREAD = "toggle_unread", e))(A || {});
export function $$y0(e) {
  let t = I_();
  let i = useDispatch();
  let A = iZ();
  let y = v();
  let {
    manager,
    getTriggerProps
  } = b();
  VX(manager);
  let I = t => () => {
    switch (t) {
      case "edit":
        E();
        break;
      case "delete":
        e.onDelete ? e.onDelete(e.comment.id) : x();
        break;
      case "copy_link":
        e.onCopyLink ? e.onCopyLink(e.comment) : y(e.comment);
        break;
      case "toggle_unread":
        S();
        break;
      default:
        throwTypeError(t);
    }
  };
  let E = () => {
    let {
      id,
      key,
      message_meta,
      attachments
    } = e.comment;
    let s = (attachments || []).reduce((e, t) => (e[t.id] = t, e), {});
    i(Df({
      id,
      key,
      messageMeta: message_meta,
      attachmentUpdates: {
        attachments: s,
        deleted: []
      }
    }));
  };
  let x = () => {
    i(to({
      type: _$$E,
      data: {
        comment: e.comment,
        onConfirm: () => i(Mv({
          comment: e.comment
        }))
      }
    }));
  };
  let S = () => {
    let n = t.commentReceipts;
    if (n) {
      if (e.isUnread && e.thread) {
        i(AY({
          receiptsAPI: n,
          thread: e.thread
        }));
        return;
      }
      i(QY({
        receiptsAPI: n,
        comment: e.comment
      }));
    }
  };
  let w = e.comment.parent_id ? getI18nString("comments.delete_comment") : getI18nString("comments.delete_thread");
  let C = e.isUnread ? getI18nString("comments.mark_as_read") : getI18nString("comments.mark_as_unread");
  let T = (!e.possibleActions || e.possibleActions.includes("toggle_unread")) && jsx(q7, {
    onClick: I("toggle_unread"),
    children: C
  }, "toggle_unread");
  let k = (!e.possibleActions || e.possibleActions.includes("copy_link")) && jsx(q7, {
    onClick: I("copy_link"),
    children: renderI18nText("comments.copy_link")
  }, "copy_link");
  let R = (!e.possibleActions || e.possibleActions.includes("edit")) && jsx(q7, {
    onClick: I("edit"),
    recordingKey: "commentOverflowMenu.editComment",
    children: renderI18nText("comments.edit")
  }, "edit");
  let N = (!e.possibleActions || e.possibleActions.includes("delete")) && jsx(q7, {
    onClick: I("delete"),
    recordingKey: "commentOverflowMenu.deleteComment",
    children: w
  }, "delete");
  let P = e.comment.parent_id ? [R, N] : [R];
  let O = [];
  if (e.thread && e.thread.id === e.comment.id) switch (e.thread.sidebarItemType) {
    case kT.FEED_POST:
      O = [k];
      break;
    case kT.COMMENT_THREAD:
    case kT.LITMUS_COMMENT_THREAD:
      O = e.comment.user_id === A?.id ? [T, k, N] : [T, k];
      break;
    default:
      throwTypeError(e.thread);
  } else e.comment.user_id === A?.id && (O = O.concat(P));
  if (0 === O.filter(Boolean).length) return null;
  let {
    onMouseDown,
    onPointerDown,
    ...F
  } = getTriggerProps();
  return jsxs(bL, {
    manager,
    children: [jsx(_$$d, {
      "aria-label": e.label,
      recordingKey: e.recordingKey,
      ...F,
      children: jsx(J, {})
    }), jsx(mc, {
      children: O
    })]
  });
}
export const V = $$y0;