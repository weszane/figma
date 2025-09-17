import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useState, useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { IconButton } from "../905/443068";
import { Button } from "../905/521428";
import { N as _$$N } from "../905/7587";
import { A as _$$A } from "../905/744692";
import { s as _$$s } from "../905/551945";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import h from "classnames";
import { dN } from "../vendor/291472";
import { trackEventAnalytics } from "../905/449184";
import { createRect } from "../905/508367";
import { q as _$$q, I as _$$I } from "../figma_app/819288";
import { h as _$$h } from "../905/207101";
import { BrowserInfo } from "../figma_app/778880";
import { qW } from "../905/623179";
import { generateRecordingKey, useSetupPlayback } from "../figma_app/878298";
import { Point } from "../905/736624";
import { Y as _$$Y } from "../905/506207";
import { n as _$$n } from "../draftjs_composer/589474";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { RI, We, uz, i4 } from "../figma_app/770088";
import { postUserFlag } from "../905/985254";
import { y as _$$y } from "../figma_app/297957";
import { getCurrentFileType, isPrototypeView } from "../figma_app/976749";
import { isUserNotLoggedInAndEditorSupported } from "../figma_app/564183";
import { trackUserEvent } from "../figma_app/314264";
import { xS, JZ } from "../905/901964";
import { eR as _$$eR } from "../figma_app/12220";
import { $W, KD } from "../figma_app/317394";
import { H as _$$H } from "../905/674803";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { f as _$$f } from "../905/940356";
import { FFileType } from "../figma_app/191312";
import { K as _$$K2 } from "../905/659729";
import { fG } from "../905/772425";
import { Wn, xp } from "../905/966582";
import { KindEnum } from "../905/129884";
import { showModalHandler } from "../905/156213";
import { l as _$$l } from "../905/348437";
import { q as _$$q2 } from "../905/70772";
import { v as _$$v } from "../905/981847";
import { kG } from "../905/958668";
import { Y as _$$Y2 } from "../figma_app/433187";
import { tI } from "../905/603628";
import { MZ } from "../905/470594";
import { iX } from "../6443/426443";
import { i as _$$i } from "../905/50151";
import { fP, U0, mr, Sg, OX, o1, xu, q9 } from "../905/149906";
let d = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M12 6a6 6 0 1 0 0 12 .5.5 0 0 1 0 1 7 7 0 1 1 7-7v.5a2.5 2.5 0 0 1-4.62 1.326A3 3 0 1 1 14 9.764V9.5a.5.5 0 0 1 1 0v3a1.5 1.5 0 0 0 3 0V12a6 6 0 0 0-6-6m2 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0",
      clipRule: "evenodd"
    })
  });
});
var f = h;
function J(e) {
  let t = useDispatch();
  let {
    attachments
  } = e;
  let i = e => {
    t(showModalHandler({
      type: _$$q2,
      data: {
        attachments,
        selectedIdx: attachments.map(e => e.thumbnailUrl).indexOf(e),
        onUpdateAltText: s,
        canEdit: !0
      }
    }));
  };
  let s = (t, o) => {
    let i = attachments[o];
    return e.fileKey ? _$$l.put(e.fileKey, i.id, t).then(n => (200 === n.status && e.onUpdate({
      ...i,
      altText: t
    }), n)) : Promise.resolve(void 0);
  };
  return jsx("div", {
    className: kG,
    onClick: e.focusComposer,
    children: attachments.map(t => jsx(_$$v, {
      thumbnailUrl: t.thumbnailUrl,
      altText: getI18nString("comments.attachment_thumbnail_alt_text_default"),
      onClick: i,
      isUploading: t.isUploading,
      onDelete: () => e.onDelete(t)
    }, t.id))
  });
}
let es = [];
export function $$er0(e) {
  let t = getI18nString("comments.submit");
  return jsx(IconButton, {
    recordingKey: generateRecordingKey(e, "submit"),
    disabled: e.disabled,
    onClick: e.onClick,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": t,
    "aria-label": t,
    htmlAttributes: {
      "data-testid": "comments-submit-button"
    },
    variant: "primaryCircle",
    children: jsx(_$$N, {})
  });
}
let el = e => {
  switch (e.type) {
    case Wn.MAX_UPLOADS_EXCEEDED:
      return getI18nString("comments.upload_error.media_file_maximum", e.params);
    case Wn.MAX_IMAGE_SIZE_EXCEEDED:
    case Wn.MAX_VIDEO_SIZE_EXCEEDED:
      return getI18nString("comments.upload_error.media_file_size_limit_MB", e.params);
    case Wn.INVALID_FILE_TYPE:
      return getI18nString("comments.upload_error.media_file_types");
    case Wn.DUPLICATE_FILE_UPLOAD:
      return getI18nString("comments.upload_error.already_uploaded_items", e.params);
    case Wn.FAILED_TO_UPLOAD:
      return getI18nString("comments.upload_error.failed_to_upload", e.params);
    default:
      throwTypeError(e);
  }
};
export function $$em1(e) {
  let [t, n] = useState(e.mountInputFocused || e.mountWithButtons || !1);
  let [s, m] = useState(!1);
  let h = useRef(null);
  let V = useRef(null);
  let Z = selectCurrentUser();
  let $ = _$$f("has_opened_comments_modal");
  let {
    threadPosition,
    dispatch,
    viewportPositionFromClientPosition,
    setHyperlinkLocation,
    setHyperlinkEditorRef,
    editorRef,
    scrollToBottom
  } = e;
  let eg = selectCurrentFile();
  let eh = eg?.key || null;
  let ef = useSelector(e => e.currentUserOrgId);
  let eC = eg?.teamId;
  let e_ = useSelector(e => e.orgUsersByOrgId);
  let eb = _$$i();
  let ey = useSelector(e => e.comments.editingComment);
  let ex = !!_$$f("has_mentioned_pending_user_invite");
  let eI = !!_$$f("has_mentioned_pending_user_invite_twice");
  let ev = Xr(_$$H);
  let [eE, eM] = useState(!1);
  let eT = getCurrentFileType();
  let ej = isPrototypeView();
  let ew = useSelector(e => e.comments.activeDragTarget);
  let eR = _$$y();
  let ek = useAtomWithSubscription(_$$H);
  let eO = _$$eR(e.threadId) && eR({
    isDraftFile: !eC,
    isMobile: BrowserInfo.isMobileBrowser,
    showExpAtMentionInvite: !!getFeatureFlags().show_at_mention_invited_users,
    isFigmaDesign: eT === FFileType.DESIGN,
    inOrg: !!ef
  }) && ek || [];
  let eA = useCallback(e => {
    if (setHyperlinkLocation && setHyperlinkEditorRef) {
      if (e?.top === 0 && e?.bottom === 0 && e?.left === 0 && e?.right === 0 && e?.height === 0 && e?.width === 0 && V.current) {
        let e = createRect(V.current.getBoundingClientRect());
        setHyperlinkLocation({
          ...e,
          width: 32,
          top: e.top + 12
        });
      } else setHyperlinkLocation(e);
      setHyperlinkEditorRef(editorRef);
    }
  }, [setHyperlinkLocation, setHyperlinkEditorRef, editorRef]);
  let eF = useStore();
  useEffect(() => {
    let t = !_$$eR(e.threadId);
    trackUserEvent("Comment composer opened", eF.getState(), {
      isThread: t
    });
    $ || eF.dispatch(postUserFlag({
      has_opened_comments_modal: !0
    }));
  }, [eF, e.threadId, $]);
  let eS = useSelector(e => e.comments.emojiPicker);
  let eD = useCallback(() => eS?.visible ? (eS.onCancel?.(), dispatch(RI({
    visible: !1
  })), !0) : (e.editorRef.current && e.editorRef.current.handleEscape(), !1), [e.editorRef, eS, dispatch]);
  let eB = useCallback(() => {
    e.editorRef.current && e.editorRef.current.onFocus();
  }, [e.editorRef]);
  let eL = () => {
    e3() || e.onSubmit();
  };
  let eN = e => {
    e.preventDefault();
    eL();
  };
  let eP = () => {
    !1 !== e.onCancel() && n(!1);
  };
  let ez = useCallback(e => {
    scrollToBottom && (e ? setTimeout(scrollToBottom, e) : scrollToBottom());
  }, [scrollToBottom]);
  _$$h(() => {
    e.scrollToBottom && V.current && new MutationObserver(e.scrollToBottom).observe(V.current, {
      childList: !0,
      subtree: !0
    });
  });
  useEffect(() => {
    getFeatureFlags().autofocus_edit_comment && e.editingExistingComment && eB();
  }, [eB, e.editingExistingComment]);
  let eK = useSetupPlayback(e.recordingKey, "update", ([t, n]) => {
    if (!n) {
      e.updateMessage(t);
      return;
    }
    let o = n.getCurrentContent().getLastBlock().getKey();
    let i = n.getSelection().getEndKey();
    i !== o && i !== n.getCurrentContent().getKeyBefore(o) || e8(e.messageMeta) || ez(100);
    e.updateMessage(t);
  });
  let eU = useSetupPlayback(e.recordingKey, "emojiPick", t => {
    if (e.editorRef && e.editorRef.current) {
      let n = dN.get(t.id);
      n && e.editorRef.current.insertEmoji(n);
      e.dispatch(RI({
        visible: !1
      }));
    }
  });
  let eq = async () => {
    e.dispatch(We(await fG("", e.mentionables, eT === FFileType.DESIGN)));
    trackEventAnalytics("Comment Composer At Mention Clicked", {
      userId: e.user.id,
      fileKey: e.fileKey,
      parentCommentId: e.threadId
    });
    m(!0);
    setTimeout(() => {
      m(!1);
    }, 250);
    e.editorRef.current?.focus(!1);
  };
  let eW = e.allowAttachments;
  let {
    updateAttachment,
    deleteAttachment
  } = e;
  let eG = e.attachments?.sort((e, t) => e.uploadedAt.getTime() - t.uploadedAt.getTime()) ?? es;
  let [eV, eZ] = useState(eG.length);
  let [e$, eY] = useState({});
  let eQ = eG.some(e => e.isUploading);
  let eJ = useRef(null);
  let e0 = useCallback(e => {
    eZ(e => e - 1);
    e$.hasOwnProperty(e.id) ? deleteAttachment && deleteAttachment(e.id, e$[e.id]) : deleteAttachment && deleteAttachment(e.id);
  }, [deleteAttachment, e$]);
  let e2 = useCallback((e, t) => {
    if (e instanceof qW) {
      MZ(dispatch, getI18nString("check_network_compatibility.error_bell.comment_attachments.message"));
      return;
    }
    dispatch(VisualBellActions.enqueue({
      message: el(e)
    }));
    t && e0(t);
  }, [dispatch, e0]);
  let e1 = useCallback(t => {
    if (!eW || !updateAttachment || 0 === t.length) return;
    let n = _$$K2(t, eV, xS, xp, e2);
    eZ(e => e + n.length);
    n.forEach((t, n) => {
      if (xp.includes(t.type)) {
        let o = URL.createObjectURL(t);
        let i = new Date();
        i.setMilliseconds(i.getMilliseconds() + n);
        JZ(e.recordingKey, updateAttachment, eY, e2, o, t.type, eh, i, t.name || null);
      } else throw Error("unexpected file type");
    });
  }, [eW, updateAttachment, eV, e2, e.recordingKey, eh]);
  let e5 = useCallback(e => () => {
    let t = e.current?.files || null;
    if (null === t || 0 === t.length) return;
    let n = Array.from(t);
    trackEventAnalytics("Comment Attachments Selected", {
      count: n.length,
      fileTypes: Array.from(n.reduce((e, t) => (e.add(t.type), e), new Set()))
    });
    e1(n);
    e.current && (e.current.value = "");
  }, [e1]);
  let e4 = isUserNotLoggedInAndEditorSupported();
  let e3 = () => e.isDisabled || eQ || e8(e.messageMeta) || _$$q(e.messageMeta) || e4;
  let e8 = e => _$$I(e);
  let e7 = e3();
  let e6 = e8(e.messageMeta) && (!eW || 0 === eG.length);
  let e9 = eW && ew === e.recordingKey && !_$$eR(e.threadId);
  return jsxs(_$$Y, {
    className: f()(e.containerClassName || {
      [fP]: !0,
      [U0]: _$$eR(e.threadId),
      [mr]: e9
    }, e6 && Sg),
    isDragTarget: () => eW,
    onTargetDrop: e => {
      if (e.files.length > 0) {
        let t = Array.from(e.files);
        trackEventAnalytics("Comment Attachments Dropped", {
          count: t.length,
          fileTypes: Array.from(t.reduce((e, t) => (e.add(t.type), e), new Set()))
        });
        e1(t);
      }
      dispatch(uz(null));
    },
    onTargetDragEnter: t => {
      dispatch(uz(e.recordingKey));
    },
    onTargetDragLeave: e => {
      dispatch(uz(null));
    },
    forwardedRef: V,
    "data-testid": e.editingExistingComment ? "edit-comment-composer-container" : "new-comment-composer-container",
    children: [jsx($W, {
      handleEscape: eD,
      priority: KD.EDITING_TEXT_FIELD,
      children: jsx(iX, {
        ref: e.editorRef,
        ariaLabel: e.ariaLabel,
        className: e.editableTypeaheadClassName || OX,
        currentOrgId: ef,
        currentOrgUsers: e_,
        delegateEscapeHandling: !0,
        dispatch: e.dispatch,
        editingComment: ey ?? void 0,
        editorOnClear: e.editorOnClear,
        editorOnInsert: e.editorOnInsert,
        editorRef: e.editorRef,
        editorType: e.editorType,
        figmaEditorType: eT,
        hasMentionedPendingUserInvite: ex,
        hasMentionedPendingUserInviteTwice: eI,
        hyperlinkLocation: e.hyperlinkLocation,
        initMention: s,
        isProtoView: ej,
        isThreadCommentOverflowMenuOpen: eb,
        maintainSelectionOnFocus: e.maintainSelectionOnFocus,
        maxCommentLength: e.maxCommentLength,
        mentionables: e.mentionables,
        messageMeta: e.messageMeta,
        mountInputFocused: e.mountInputFocused,
        onCancel: eP,
        onFilePaste: e => {
          if (e.length > 0) {
            let t = e.map(e => new File([e], "", {
              type: e.type
            }));
            trackEventAnalytics("Comment Attachments Pasted", {
              count: t.length,
              fileTypes: Array.from(t.reduce((e, t) => (e.add(t.type), e), new Set()))
            });
            e1(t);
          }
        },
        onFocus: () => {
          e.onComposeFocus && e.onComposeFocus();
          !t && (n(!0), e.onEditStart && e.onEditStart());
        },
        onSubmit: eL,
        onUpdateTextArea: e => {
          if (!threadPosition || !V.current) return;
          let t = V.current.getBoundingClientRect();
          let n = viewportPositionFromClientPosition(new Point(t.right, t.top));
          let o = viewportPositionFromClientPosition(new Point(t.left, t.bottom));
          dispatch(i4({
            top: n.y - threadPosition.y,
            right: n.x - threadPosition.x,
            bottom: o.y - threadPosition.y,
            left: o.x - threadPosition.x,
            height: t.height,
            width: t.width
          }));
          ex && eI || !eO || !(eO.length > 0) || eE || e.getCurrentContent().getPlainText() !== `${eO[0].user?.email} ` || (dispatch(We(tI({
            index: -1,
            userId: Z?.id
          }))), eM(!0));
        },
        openFileKey: eh,
        openFileTeamId: eC,
        pendingUserInvites: eO,
        placeholderText: e.placeholderText,
        readOnly: e.readOnly,
        setHyperlinkEditorRef,
        setHyperlinkLocation: eA,
        setIsEditorFocused: e.setIsEditorFocused,
        setPendingUserInvitesAtom: ev,
        submitOnEnter: e.submitOnEnter ?? !0,
        typeahead: e.typeahead,
        updateMessage: eK,
        user: Z
      })
    }), eW && updateAttachment && eG.length > 0 && jsx(J, {
      attachments: eG,
      fileKey: eh,
      onDelete: e0,
      onUpdate: updateAttachment,
      focusComposer: eB
    }), jsxs("div", {
      className: o1,
      children: [!e6 && jsxs("div", {
        className: xu,
        children: [_$$Y2 && jsx(IconButton, {
          onClick: t => {
            trackEventAnalytics("Emoji Picker Opened");
            let n = h.current?.getBoundingClientRect();
            n && e.dispatch(RI({
              visible: !0,
              targetRect: n,
              onPick: t => {
                eU(t);
                e.editorRef.current?.focus();
              },
              onCancel: () => {
                e.editorRef.current?.focus();
                e.dispatch(RI({
                  visible: !1
                }));
              }
            }));
          },
          ref: h,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("comments.add_emoji"),
          "aria-label": getI18nString("comments.add_emoji"),
          htmlAttributes: {
            "data-testid": "emoji-picker-button"
          },
          recordingKey: "emojiPicker",
          disabled: e6,
          children: jsx(_$$A, {})
        }), jsx(IconButton, {
          onClick: eq,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("comments.add_mention"),
          "aria-label": getI18nString("comments.add_mention"),
          disabled: e6,
          recordingKey: "mentionButton",
          children: jsx(d, {})
        }), eW && jsx(_$$n, {
          svgAltText: getI18nString("comments.upload_images"),
          isDisabled: eG.length >= xS,
          acceptedFileTypes: xp.join(","),
          inputRef: eJ,
          inputId: `fileUploadIconInput-${e.recordingKey}`,
          onFileInputChange: e5,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("comments.upload_images"),
          children: jsx("span", {
            "aria-hidden": !0,
            children: jsx(_$$s, {})
          })
        })]
      }), !e.hideSubmitButton && (e.editingExistingComment ? jsxs("div", {
        className: q9,
        children: [jsx(Button, {
          variant: "secondary",
          onClick: eP,
          children: renderI18nText("comments.cancel")
        }), jsx(Button, {
          variant: "primary",
          onClick: eN,
          disabled: e7,
          recordingKey: generateRecordingKey(e, "editSave"),
          children: e.submitText
        })]
      }) : jsx($$er0, {
        recordingKey: e.recordingKey,
        onClick: eN,
        disabled: e7
      }))]
    })]
  });
}
export const CommentsSubmitButton = $$er0;
export const ThreadCommentComposer = $$em1;