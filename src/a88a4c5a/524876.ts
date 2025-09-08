import g from 'classnames';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { N as _$$N } from '../905/7587';
import { i as _$$i } from '../905/50151';
import { q as _$$q2 } from '../905/70772';
import { Ib } from '../905/129884';
import { fP, mr, o1, OX, q9, Sg, U0, xu } from '../905/149906';
import { showModalHandler } from '../905/156213';
import { h as _$$h } from '../905/207101';
import { F as _$$F } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { l } from '../905/348437';
import { iZ } from '../905/372672';
import { K as _$$K } from '../905/443068';
import { trackEventAnalytics } from '../905/449184';
import { MZ } from '../905/470594';
import { Y as _$$Y } from '../905/506207';
import { E as _$$E } from '../905/508367';
import { $n } from '../905/521428';
import { s as _$$s } from '../905/551945';
import { getFeatureFlags } from '../905/601108';
import { tI } from '../905/603628';
import { qW } from '../905/623179';
import { K as _$$K2 } from '../905/659729';
import { H as _$$H } from '../905/674803';
import { Point } from '../905/736624';
import { A as _$$A } from '../905/744692';
import { fG } from '../905/772425';
import { JZ, xS } from '../905/901964';
import { f as _$$f } from '../905/940356';
import { kG } from '../905/958668';
import { Wn, xp } from '../905/966582';
import { v as _$$v } from '../905/981847';
import { b as _$$b } from '../905/985254';
import { iX } from '../6443/426443';
import { n as _$$n } from '../draftjs_composer/589474';
import { eR as _$$eR } from '../figma_app/12220';
import { useAtomWithSubscription, Xr } from '../figma_app/27355';
import { FFileType } from '../figma_app/191312';
import { y as _$$y } from '../figma_app/297957';
import { uE } from '../figma_app/314264';
import { $W, KD } from '../figma_app/317394';
import { Y as _$$Y2 } from '../figma_app/433187';
import { throwTypeError } from '../figma_app/465776';
import { q5 } from '../figma_app/516028';
import { k as _$$k2 } from '../figma_app/564183';
import { i4, RI, uz, We } from '../figma_app/770088';
import { BrowserInfo } from '../figma_app/778880';
import { Pt, qP } from '../figma_app/806412';
import { I as _$$I, q as _$$q } from '../figma_app/819288';
import { HW, lg } from '../figma_app/976749';
import { dN } from '../vendor/291472';
let c = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M12 6a6 6 0 1 0 0 12 .5.5 0 0 1 0 1 7 7 0 1 1 7-7v.5a2.5 2.5 0 0 1-4.62 1.326A3 3 0 1 1 14 9.764V9.5a.5.5 0 0 1 1 0v3a1.5 1.5 0 0 0 3 0V12a6 6 0 0 0-6-6m2 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0',
      clipRule: 'evenodd'
    })
  });
});
let m = g;
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
  let s = (t, n) => {
    let i = attachments[n];
    return e.fileKey ? l.put(e.fileKey, i.id, t).then(l => (l.status === 200 && e.onUpdate({
      ...i,
      altText: t
    }), l)) : Promise.resolve(void 0);
  };
  return jsx('div', {
    className: kG,
    onClick: e.focusComposer,
    children: attachments.map(t => jsx(_$$v, {
      thumbnailUrl: t.thumbnailUrl,
      altText: getI18nString('comments.attachment_thumbnail_alt_text_default'),
      onClick: i,
      isUploading: t.isUploading,
      onDelete: () => e.onDelete(t)
    }, t.id))
  });
}
let es = [];
export function $$eo0(e) {
  let t = getI18nString('comments.submit');
  return jsx(_$$K, {
    'recordingKey': Pt(e, 'submit'),
    'disabled': e.disabled,
    'onClick': e.onClick,
    'data-tooltip-type': Ib.TEXT,
    'data-tooltip': t,
    'aria-label': t,
    'htmlAttributes': {
      'data-testid': 'comments-submit-button'
    },
    'variant': 'primaryCircle',
    'children': jsx(_$$N, {})
  });
}
let ea = e => {
  switch (e.type) {
    case Wn.MAX_UPLOADS_EXCEEDED:
      return getI18nString('comments.upload_error.media_file_maximum', e.params);
    case Wn.MAX_IMAGE_SIZE_EXCEEDED:
    case Wn.MAX_VIDEO_SIZE_EXCEEDED:
      return getI18nString('comments.upload_error.media_file_size_limit_MB', e.params);
    case Wn.INVALID_FILE_TYPE:
      return getI18nString('comments.upload_error.media_file_types');
    case Wn.DUPLICATE_FILE_UPLOAD:
      return getI18nString('comments.upload_error.already_uploaded_items', e.params);
    case Wn.FAILED_TO_UPLOAD:
      return getI18nString('comments.upload_error.failed_to_upload', e.params);
    default:
      throwTypeError(e);
  }
};
export function $$ed1(e) {
  let [t, l] = useState(e.mountInputFocused || e.mountWithButtons || !1);
  let [s, d] = useState(!1);
  let g = useRef(null);
  let K = useRef(null);
  let X = iZ();
  let Z = _$$f('has_opened_comments_modal');
  let {
    threadPosition,
    dispatch,
    viewportPositionFromClientPosition,
    setHyperlinkLocation,
    setHyperlinkEditorRef,
    editorRef,
    scrollToBottom
  } = e;
  let eh = q5();
  let eg = eh?.key || null;
  let em = useSelector(e => e.currentUserOrgId);
  let ef = eh?.teamId;
  let ey = useSelector(e => e.orgUsersByOrgId);
  let e_ = _$$i();
  let eb = useSelector(e => e.comments.editingComment);
  let ej = !!_$$f('has_mentioned_pending_user_invite');
  let ev = !!_$$f('has_mentioned_pending_user_invite_twice');
  let eC = Xr(_$$H);
  let [ek, eE] = useState(!1);
  let eS = lg();
  let ew = HW();
  let eR = useSelector(e => e.comments.activeDragTarget);
  let eL = _$$y();
  let eT = useAtomWithSubscription(_$$H);
  let eI = _$$eR(e.threadId) && eL({
    isDraftFile: !ef,
    isMobile: BrowserInfo.isMobileBrowser,
    showExpAtMentionInvite: !!getFeatureFlags().show_at_mention_invited_users,
    isFigmaDesign: eS === FFileType.DESIGN,
    inOrg: !!em
  }) && eT || [];
  let eN = useCallback(e => {
    if (setHyperlinkLocation && setHyperlinkEditorRef) {
      if (e?.top === 0 && e?.bottom === 0 && e?.left === 0 && e?.right === 0 && e?.height === 0 && e?.width === 0 && K.current) {
        let e = _$$E(K.current.getBoundingClientRect());
        setHyperlinkLocation({
          ...e,
          width: 32,
          top: e.top + 12
        });
      } else {
        setHyperlinkLocation(e);
      }
      setHyperlinkEditorRef(editorRef);
    }
  }, [setHyperlinkLocation, setHyperlinkEditorRef, editorRef]);
  let eA = useStore();
  useEffect(() => {
    let t = !_$$eR(e.threadId);
    uE('Comment composer opened', eA.getState(), {
      isThread: t
    });
    Z || eA.dispatch(_$$b({
      has_opened_comments_modal: !0
    }));
  }, [eA, e.threadId, Z]);
  let eM = useSelector(e => e.comments.emojiPicker);
  let eO = useCallback(() => eM?.visible ? (eM.onCancel?.(), dispatch(RI({
    visible: !1
  })), !0) : (e.editorRef.current && e.editorRef.current.handleEscape(), !1), [e.editorRef, eM, dispatch]);
  let ez = useCallback(() => {
    e.editorRef.current && e.editorRef.current.onFocus();
  }, [e.editorRef]);
  let eB = () => {
    e4() || e.onSubmit();
  };
  let eF = e => {
    e.preventDefault();
    eB();
  };
  let e$ = () => {
    !1 !== e.onCancel() && l(!1);
  };
  let eP = useCallback(e => {
    scrollToBottom && (e ? setTimeout(scrollToBottom, e) : scrollToBottom());
  }, [scrollToBottom]);
  _$$h(() => {
    e.scrollToBottom && K.current && new MutationObserver(e.scrollToBottom).observe(K.current, {
      childList: !0,
      subtree: !0
    });
  });
  useEffect(() => {
    getFeatureFlags().autofocus_edit_comment && e.editingExistingComment && ez();
  }, [ez, e.editingExistingComment]);
  let eV = qP(e.recordingKey, 'update', ([t, l]) => {
    if (!l) {
      e.updateMessage(t);
      return;
    }
    let n = l.getCurrentContent().getLastBlock().getKey();
    let i = l.getSelection().getEndKey();
    i !== n && i !== l.getCurrentContent().getKeyBefore(n) || e7(e.messageMeta) || eP(100);
    e.updateMessage(t);
  });
  let eD = qP(e.recordingKey, 'emojiPick', t => {
    if (e.editorRef && e.editorRef.current) {
      let l = dN.get(t.id);
      l && e.editorRef.current.insertEmoji(l);
      e.dispatch(RI({
        visible: !1
      }));
    }
  });
  let eH = async () => {
    e.dispatch(We(await fG('', e.mentionables, eS === FFileType.DESIGN)));
    trackEventAnalytics('Comment Composer At Mention Clicked', {
      userId: e.user.id,
      fileKey: e.fileKey,
      parentCommentId: e.threadId
    });
    d(!0);
    setTimeout(() => {
      d(!1);
    }, 250);
    e.editorRef.current?.focus(!1);
  };
  let eG = e.allowAttachments;
  let {
    updateAttachment,
    deleteAttachment
  } = e;
  let eW = e.attachments?.sort((e, t) => e.uploadedAt.getTime() - t.uploadedAt.getTime()) ?? es;
  let [eK, eX] = useState(eW.length);
  let [eZ, eY] = useState({});
  let eQ = eW.some(e => e.isUploading);
  let eJ = useRef(null);
  let e0 = useCallback(e => {
    eX(e => e - 1);
    eZ.hasOwnProperty(e.id) ? deleteAttachment && deleteAttachment(e.id, eZ[e.id]) : deleteAttachment && deleteAttachment(e.id);
  }, [deleteAttachment, eZ]);
  let e1 = useCallback((e, t) => {
    if (e instanceof qW) {
      MZ(dispatch, getI18nString('check_network_compatibility.error_bell.comment_attachments.message'));
      return;
    }
    dispatch(_$$F.enqueue({
      message: ea(e)
    }));
    t && e0(t);
  }, [dispatch, e0]);
  let e2 = useCallback(t => {
    if (!eG || !updateAttachment || t.length === 0) return;
    let l = _$$K2(t, eK, xS, xp, e1);
    eX(e => e + l.length);
    l.forEach((t, l) => {
      if (xp.includes(t.type)) {
        let n = URL.createObjectURL(t);
        let i = new Date();
        i.setMilliseconds(i.getMilliseconds() + l);
        JZ(e.recordingKey, updateAttachment, eY, e1, n, t.type, eg, i, t.name || null);
      } else {
        throw new Error('unexpected file type');
      }
    });
  }, [eG, updateAttachment, eK, e1, e.recordingKey, eg]);
  let e5 = useCallback(e => () => {
    let t = e.current?.files || null;
    if (t === null || t.length === 0) return;
    let l = Array.from(t);
    trackEventAnalytics('Comment Attachments Selected', {
      count: l.length,
      fileTypes: Array.from(l.reduce((e, t) => (e.add(t.type), e), new Set()))
    });
    e2(l);
    e.current && (e.current.value = '');
  }, [e2]);
  let e3 = _$$k2();
  let e4 = () => e.isDisabled || eQ || e7(e.messageMeta) || _$$q(e.messageMeta) || e3;
  let e7 = e => _$$I(e);
  let e8 = e4();
  let e6 = e7(e.messageMeta) && (!eG || eW.length === 0);
  let e9 = eG && eR === e.recordingKey && !_$$eR(e.threadId);
  return jsxs(_$$Y, {
    'className': m()(e.containerClassName || {
      [fP]: !0,
      [U0]: _$$eR(e.threadId),
      [mr]: e9
    }, e6 && Sg),
    'isDragTarget': () => eG,
    'onTargetDrop': e => {
      if (e.files.length > 0) {
        let t = Array.from(e.files);
        trackEventAnalytics('Comment Attachments Dropped', {
          count: t.length,
          fileTypes: Array.from(t.reduce((e, t) => (e.add(t.type), e), new Set()))
        });
        e2(t);
      }
      dispatch(uz(null));
    },
    'onTargetDragEnter': t => {
      dispatch(uz(e.recordingKey));
    },
    'onTargetDragLeave': e => {
      dispatch(uz(null));
    },
    'forwardedRef': K,
    'data-testid': e.editingExistingComment ? 'edit-comment-composer-container' : 'new-comment-composer-container',
    'children': [jsx($W, {
      handleEscape: eO,
      priority: KD.EDITING_TEXT_FIELD,
      children: jsx(iX, {
        ref: e.editorRef,
        ariaLabel: e.ariaLabel,
        className: e.editableTypeaheadClassName || OX,
        currentOrgId: em,
        currentOrgUsers: ey,
        delegateEscapeHandling: !0,
        dispatch: e.dispatch,
        editingComment: eb ?? void 0,
        editorOnClear: e.editorOnClear,
        editorOnInsert: e.editorOnInsert,
        editorRef: e.editorRef,
        editorType: e.editorType,
        figmaEditorType: eS,
        hasMentionedPendingUserInvite: ej,
        hasMentionedPendingUserInviteTwice: ev,
        hyperlinkLocation: e.hyperlinkLocation,
        initMention: s,
        isProtoView: ew,
        isThreadCommentOverflowMenuOpen: e_,
        maintainSelectionOnFocus: e.maintainSelectionOnFocus,
        maxCommentLength: e.maxCommentLength,
        mentionables: e.mentionables,
        messageMeta: e.messageMeta,
        mountInputFocused: e.mountInputFocused,
        onCancel: e$,
        onFilePaste: e => {
          if (e.length > 0) {
            let t = e.map(e => new File([e], '', {
              type: e.type
            }));
            trackEventAnalytics('Comment Attachments Pasted', {
              count: t.length,
              fileTypes: Array.from(t.reduce((e, t) => (e.add(t.type), e), new Set()))
            });
            e2(t);
          }
        },
        onFocus: () => {
          e.onComposeFocus && e.onComposeFocus();
          !t && (l(!0), e.onEditStart && e.onEditStart());
        },
        onSubmit: eB,
        onUpdateTextArea: e => {
          if (!threadPosition || !K.current) return;
          let t = K.current.getBoundingClientRect();
          let l = viewportPositionFromClientPosition(new Point(t.right, t.top));
          let n = viewportPositionFromClientPosition(new Point(t.left, t.bottom));
          dispatch(i4({
            top: l.y - threadPosition.y,
            right: l.x - threadPosition.x,
            bottom: n.y - threadPosition.y,
            left: n.x - threadPosition.x,
            height: t.height,
            width: t.width
          }));
          ej && ev || !eI || !(eI.length > 0) || ek || e.getCurrentContent().getPlainText() !== `${eI[0].user?.email} ` || (dispatch(We(tI({
            index: -1,
            userId: X?.id
          }))), eE(!0));
        },
        openFileKey: eg,
        openFileTeamId: ef,
        pendingUserInvites: eI,
        placeholderText: e.placeholderText,
        readOnly: e.readOnly,
        setHyperlinkEditorRef,
        setHyperlinkLocation: eN,
        setIsEditorFocused: e.setIsEditorFocused,
        setPendingUserInvitesAtom: eC,
        submitOnEnter: e.submitOnEnter ?? !0,
        typeahead: e.typeahead,
        updateMessage: eV,
        user: X
      })
    }), eG && updateAttachment && eW.length > 0 && jsx(J, {
      attachments: eW,
      fileKey: eg,
      onDelete: e0,
      onUpdate: updateAttachment,
      focusComposer: ez
    }), jsxs('div', {
      className: o1,
      children: [!e6 && jsxs('div', {
        className: xu,
        children: [_$$Y2 && jsx(_$$K, {
          'onClick': t => {
            trackEventAnalytics('Emoji Picker Opened');
            let l = g.current?.getBoundingClientRect();
            l && e.dispatch(RI({
              visible: !0,
              targetRect: l,
              onPick: t => {
                eD(t);
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
          'ref': g,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': getI18nString('comments.add_emoji'),
          'aria-label': getI18nString('comments.add_emoji'),
          'htmlAttributes': {
            'data-testid': 'emoji-picker-button'
          },
          'recordingKey': 'emojiPicker',
          'disabled': e6,
          'children': jsx(_$$A, {})
        }), jsx(_$$K, {
          'onClick': eH,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': getI18nString('comments.add_mention'),
          'aria-label': getI18nString('comments.add_mention'),
          'disabled': e6,
          'recordingKey': 'mentionButton',
          'children': jsx(c, {})
        }), eG && jsx(_$$n, {
          'svgAltText': getI18nString('comments.upload_images'),
          'isDisabled': eW.length >= xS,
          'acceptedFileTypes': xp.join(','),
          'inputRef': eJ,
          'inputId': `fileUploadIconInput-${e.recordingKey}`,
          'onFileInputChange': e5,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': getI18nString('comments.upload_images'),
          'children': jsx('span', {
            'aria-hidden': !0,
            'children': jsx(_$$s, {})
          })
        })]
      }), !e.hideSubmitButton && (e.editingExistingComment ? jsxs('div', {
        className: q9,
        children: [jsx($n, {
          variant: 'secondary',
          onClick: e$,
          children: renderI18nText('comments.cancel')
        }), jsx($n, {
          variant: 'primary',
          onClick: eF,
          disabled: e8,
          recordingKey: Pt(e, 'editSave'),
          children: e.submitText
        })]
      }) : jsx($$eo0, {
        recordingKey: e.recordingKey,
        onClick: eF,
        disabled: e8
      }))]
    })]
  });
}
export const CommentsSubmitButton = $$eo0;
export const ThreadCommentComposer = $$ed1;