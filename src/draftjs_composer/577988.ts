import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { lQ } from "../905/934246";
import { $n } from "../905/521428";
import l from "classnames";
import { Point } from "../905/736624";
import { kt } from "../figma_app/858013";
import { tx, t as _$$t } from "../905/303541";
import { H8, Pf } from "../905/590952";
import { i4 } from "../figma_app/770088";
import { eT } from "../figma_app/703138";
import { mz } from "../figma_app/12220";
import { kc } from "../figma_app/740025";
import { j as _$$j } from "../draftjs_composer/390258";
import { wT } from "../figma_app/188152";
import { tS, q5 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { CM } from "../figma_app/45218";
import { wV } from "../figma_app/585209";
import { _B } from "../905/852370";
import { iX } from "../6443/426443";
import { sx } from "../905/449184";
import { Ts } from "../905/194276";
import { to } from "../905/156213";
import { LU } from "../figma_app/692865";
import { l as _$$l } from "../905/690005";
import { G$, FF } from "../figma_app/588092";
import { A as _$$A } from "../draftjs_composer/840527";
var m = l;
let F = ({
  userOnboardingState: e,
  userId: t,
  dispatch: n
}) => {
  if (e === CM.NO_USER) {
    n(Ts({
      origin: "comments_signed_out"
    }));
    n(to({
      type: _$$l,
      data: {
        headerText: "Join Figma to leave comments on files and plugins",
        icon: _$$A,
        dispatch: n
      }
    }));
    return;
  }
  if (e === CM.NO_PROFILE) {
    n(to({
      type: G$,
      data: {
        userId: t,
        variations: [FF.COMMENTS, FF.OPT_IN]
      }
    }));
    return;
  }
  sx("Context Viewed", {
    name: LU
  });
};
function S({
  onCancel: e,
  cancelable: t,
  buttonOnSubmitHandler: n,
  isLoading: i,
  disabled: a,
  buttonsContainerClassName: s,
  isReply: l
}) {
  return jsxs("div", {
    className: s ?? "comment_composer--buttonsContainer--VtZKz",
    children: [t && jsx($n, {
      variant: "secondary",
      onClick: e,
      children: tx("general.cancel")
    }), jsx($n, {
      variant: "primary",
      onClick: n,
      disabled: i || a,
      children: i ? jsx(kt, {
        className: "comment_composer--buttonLoading--4VkBz publish_modal--spinner--7DaqW"
      }) : t && !l ? _$$t("community.comments.save") : _$$t("community.comments.post")
    })]
  });
}
export function $$D1(e) {
  let t = iZ();
  let n = useDispatch();
  let r = _B();
  let l = mz();
  let [m, d] = useState(!0);
  let p = useSelector(e => e.comments.typeahead);
  let h = tS();
  let C = useSelector(e => e.currentUserOrgId);
  let T = q5()?.teamId;
  let j = useSelector(e => e.orgUsersByOrgId);
  let w = useRef(null);
  let {
    onCancel,
    onSubmit,
    updateMessage,
    messageMeta,
    isFocused,
    setIsFocused,
    commentComposerRef,
    editorRef,
    placeholder
  } = e;
  let P = t ? t.community_profile_id ? null : CM.NO_PROFILE : CM.NO_USER;
  let z = useCallback(() => {
    F({
      userOnboardingState: P,
      userId: t?.id,
      dispatch: n
    });
    setIsFocused(!0);
  }, [t, n, P, setIsFocused]);
  let K = useCallback(() => {
    if (!commentComposerRef.current || !editorRef.current) return;
    let {
      left,
      top,
      bottom
    } = commentComposerRef.current.getBoundingClientRect();
    let {
      left: _left,
      top: _top
    } = editorRef.current.getBoundingClientRect();
    let s = new DOMRect(0, 0, 0, 0);
    let r = new Point(0, 0);
    let u = document.getSelection();
    if (u && u.rangeCount && (s = u.getRangeAt(0).getBoundingClientRect()), window.innerWidth < 500) {
      let n = bottom - top;
      let i = commentComposerRef.current?.getBoundingClientRect();
      let a = ((i?.right || 0) - (i?.left || 0) - l) / 2;
      let s = Math.abs(left - (i?.left || 0));
      r = new Point(a - s, n + 20);
    } else r = 0 === s.left && 0 === s.top ? new Point(0, bottom - _top) : Point.subtract(new Point(s.left, bottom), new Point(_left, _top));
    m && !p ? (n(i4({
      left: r.x,
      right: r.x,
      top: r.y,
      bottom: r.y,
      height: 0,
      width: 0
    })), d(!1)) : p || d(!0);
  }, [n, m, p, commentComposerRef, editorRef, l]);
  return jsxs(Fragment, {
    children: [jsx(iX, {
      ariaLabel: _$$t("community.comments.add_a_comment"),
      className: "comment_composer--commentComposerEditableTypeahead--Eu8-0 comment_composer--composerInput--CiDBk",
      currentOrgId: C,
      currentOrgUsers: j,
      dispatch: n,
      editorOnClear: r.editorOnClear,
      editorOnInsert: r.editorOnInsert,
      maxCommentLength: wT,
      mentionables: _$$j,
      messageMeta,
      mountInputFocused: e.focusOnMount || !1,
      onCancel: onCancel || lQ,
      onFocus: z,
      onSubmit: onSubmit || lQ,
      onUpdateTextArea: K,
      openFileKey: h,
      openFileTeamId: T,
      placeholderText: placeholder ?? _$$t("community.comments.add_a_comment"),
      setIsEditorFocused: setIsFocused,
      submitOnEnter: !1,
      typeahead: p,
      updateMessage,
      user: t
    }), isFocused && jsx(wV, {
      decoratorsRef: w,
      onClear: r.onClear,
      onInsert: r.onInsert,
      isCommunityMentions: !0
    })]
  });
}
export function $$B0(e) {
  let t = iZ();
  let [n, a] = useState("");
  let [s, r] = useState([]);
  let [l, c] = useState(!!e.focusOnMount);
  let [d, g] = useState(!1);
  let h = useRef(null);
  let f = useRef(null);
  let _ = e.onCancel;
  let b = useCallback(() => {
    _ && _();
  }, [_]);
  let y = e.onSubmit;
  let I = useCallback(() => {
    (n || s) && y({
      message: n,
      messageMeta: s,
      onSuccess: () => {
        a("");
        r([]);
        g(!1);
      },
      onError: () => {
        g(!1);
      }
    });
  }, [n, s, y]);
  useEffect(() => {
    e.message && a(e.message);
    e.messageMeta && r(e.messageMeta);
  }, [e.message, e.messageMeta]);
  let v = useMemo(() => ({
    id: t?.community_profile_id || "0",
    name: t?.handle,
    img_url: t?.img_url
  }), [t]);
  let E = kc() || v;
  let M = 0 === s.length || s.every(e => e.t?.trim().length === 0);
  return jsx("div", {
    ref: h,
    "data-community-comment-composer": !0,
    className: m()({
      "comment_composer--commentComposer--rIwjd comment_tile--commentContainer--alB5v": !0,
      "comment_composer--editComposer--PjWRy": !!e.editMode,
      "comment_composer--replyComposer--BnRbD comment_composer--editComposer--PjWRy": !!e.replyMode,
      "comment_composer--commentComposerFocused--aCkcH": l
    }),
    children: jsxs(Fragment, {
      children: [jsx("div", {
        className: "comment_composer--commentAvatar--5DOL1 comment_tile--commentAvatarContainer--e8z35",
        children: jsx(H8, {
          user: E,
          size: Pf.LARGE
        })
      }), jsxs("div", {
        className: "comment_composer--composerForm--WR1RV",
        ref: f,
        children: [jsx($$D1, {
          commentComposerRef: h,
          editorRef: f,
          focusOnMount: e.focusOnMount || !1,
          isFocused: l,
          messageMeta: s,
          onCancel: b,
          onSubmit: I,
          placeholder: e.replyMode ? _$$t("community.comments.write_a_reply") : void 0,
          setIsFocused: c,
          updateMessage: ([e, t]) => {
            r(e);
          }
        }), jsx(S, {
          onCancel: b,
          cancelable: e.editMode || e.replyMode,
          isReply: e.replyMode,
          buttonOnSubmitHandler: e => {
            e.preventDefault();
            g(!0);
            I();
          },
          isLoading: d,
          disabled: M
        })]
      })]
    })
  });
}
export function $$L2(e) {
  let {
    commentType,
    resourceId,
    resourceType,
    onSuccessCallback
  } = e;
  let l = useDispatch();
  let m = useSelector(e => e.communityHub.comments.activeFeedType);
  let c = useSelector(e => e.communityHub.comments.feeds)[m];
  let d = useCallback(e => {
    let {
      message,
      messageMeta,
      onSuccess,
      onError
    } = e;
    c && l(eT({
      message,
      messageMeta,
      resourceType,
      resourceId,
      commentType,
      onSuccess: e => {
        onSuccess?.();
        onSuccessCallback?.(e);
      },
      onError
    }));
  }, [c, commentType, l, resourceType, resourceId, onSuccessCallback]);
  return jsx($$B0, {
    onSubmit: d
  });
}
export const CommentComposer = $$B0;
export const CommentEditableTypeahead = $$D1;
export const CreateCommentComposer = $$L2;