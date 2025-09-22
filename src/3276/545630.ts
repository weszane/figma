import K from 'classnames';
import { Fragment as _$$Fragment, createRef, forwardRef, memo, PureComponent, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useDebouncedCallback } from 'use-debounce';
import { CloseButton } from '../905/17223';
import { iZ as _$$iZ } from '../905/29425';
import { i as _$$i3, Dp } from '../905/50151';
import { ay } from '../905/56623';
import { KeyCodes } from '../905/63728';
import { Z as _$$Z2 } from '../905/104740';
import { KindEnum } from '../905/129884';
import { showModalHandler } from '../905/156213';
import { Qt, zW } from '../905/162414';
import { ServiceCategories as _$$e } from '../905/165054';
import { b as _$$b } from '../905/168657';
import { t as _$$t4 } from '../905/192333';
import { c as _$$c2 } from '../905/196462';
import { h as _$$h } from '../905/207101';
import { gk } from '../905/222884';
import { nt as _$$nt, o3 } from '../905/226610';
import { resolveMessage } from '../905/231762';
import { GH, I_, Le, wq } from '../905/234821';
import { Q as _$$Q } from '../905/249555';
import { R as _$$R2 } from '../905/266815';
import { eW as _$$eW, fG, gu, pC, Rf, sj, UR, Y6 } from '../905/301347';
import { VisualBellActions } from '../905/302958';
import { getI18nString, getI18nStringAlias, renderI18nText } from '../905/303541';
import { P as _$$P } from '../905/347284';
import { fileCommentAttachmentAPI } from '../905/348437';
import { getUserId, selectCurrentUser, selectUser } from '../905/372672';
import { feedCommentAttachmentAPI } from '../905/375499';
import { BusyReadyState, ComposerType, isCommentStateActive, NAVIGATION_BUTTONS, NEW_COMMENT_ID, ThreadType } from '../905/380385';
import { iX } from '../905/415545';
import { A3, Di, gy, IS, my, Nz, rX, u_, v2 } from '../905/428481';
import { x as _$$x } from '../905/437800';
import { IconButton } from '../905/443068';
import { k as _$$k3 } from '../905/443820';
import { trackEventAnalytics } from '../905/449184';
import { handleAtomEvent } from '../905/502364';
import { gX } from '../905/504768';
import { createRect } from '../905/508367';
import { RecordableDiv } from '../905/511649';
import { s as _$$s } from '../905/518538';
import { c as _$$c } from '../905/534105';
import { $N, e7 as _$$e2, el as _$$el, gy as _$$gy, H as _$$H, my as _$$my, Nz as _$$Nz, rX as _$$rX, S as _$$S, tu as _$$tu, u_ as _$$u_, C_, dQ, Fm, ij, K_, kW, OF, q_, se, sz, T7, Ud, V_, wH, Ws, Zr } from '../905/540111';
import { globalPerfTimer } from '../905/542194';
import { W as _$$W } from '../905/569454';
import { Pf } from '../905/590952';
import { getFeatureFlags } from '../905/601108';
import { H as _$$H2 } from '../905/620380';
import { eX as _$$eX, UR as _$$UR, aW, F7, MJ, OM, VM, wb, wC, wG, xe, xS } from '../905/649567';
import { t as _$$t } from '../905/656351';
import { K as _$$K } from '../905/663612';
import { I as _$$I2 } from '../905/707866';
import { SvgComponent } from '../905/714743';
import { TabLoop } from '../905/718764';
import { kJ } from '../905/723870';
import c, { expandRect, Point } from '../905/736624';
import { od, rk } from '../905/748636';
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from '../905/751457';
import { g as _$$g3 } from '../905/757007';
import { R as _$$R } from '../905/780757';
import { G as _$$G } from '../905/799129';
import { ym } from '../905/807385';
import { KeyboardReceiver } from '../905/826900';
import { useCurrentUserOrg } from '../905/845253';
import { nq as _$$nq, _B, H6, hC, uB, WM, zf } from '../905/852370';
import { generateUUIDv4 } from '../905/871474';
import { V as _$$V } from '../905/890500';
import { showDropdownThunk } from '../905/929976';
import { lQ } from '../905/934246';
import { C as _$$C2, e as _$$e3 } from '../905/937623';
import { postUserFlag } from '../905/985254';
import { JD } from '../905/986103';
import { Q$, Us, zY } from '../1250/486464';
import { A as _$$A3 } from '../1617/505000';
import { T as _$$T, w as _$$w } from '../3276/279527';
import { IN, xw } from '../3276/297268';
import { g as _$$g } from '../3276/441754';
import { n as _$$n } from '../3276/582222';
import { BK, x5 } from '../3276/677176';
import { D as _$$D } from '../3276/853301';
import { _ as _$$_, Z as _$$Z3 } from '../3276/890696';
import { A as _$$A6 } from '../6828/249455';
import { K as _$$K2 } from '../7037/201222';
import { i as _$$i } from '../7037/201545';
import { B as _$$B2 } from '../7037/575850';
import { ue } from '../af221b13/476940';
import { j as _$$j } from '../draftjs_composer/390258';
import { Dm, Uu, Z7 } from '../figma_app/8833';
import { eR as _$$eR, hx as _$$hx, t$ as _$$t$, F$, rN, vl, wB } from '../figma_app/12220';
import { sO } from '../figma_app/21029';
import { useAtomWithSubscription, Xr } from '../figma_app/27355';
import { IuL, M$q, qoo, u24 } from '../figma_app/27776';
import { hh } from '../figma_app/42945';
import { FileCanEdit } from '../figma_app/43951';
import { FEditorType } from '../figma_app/53721';
import { addRectOffset, applyOffsetToViewport, getBasicViewportRect, getViewportInfo, getViewportZoom, getVisibleArea, memoizedRect, roundedDivision, useViewportWithDelta, viewportToScreen } from '../figma_app/62612';
import { Ao, c4, LX, xN } from '../figma_app/70421';
import { getObservableValue } from '../figma_app/84367';
import { clearSelectedViewCommentId } from '../figma_app/91703';
import { wg as _$$wg } from '../figma_app/101956';
import { $L, us, Xx } from '../figma_app/136698';
import { buildStaticUrl, getInitialOptions } from '../figma_app/169182';
import { t0 as _$$t3 } from '../figma_app/198840';
import { AU, on } from '../figma_app/242565';
import { useSubscription } from '../figma_app/288654';
import { C_ as _$$C_ } from '../figma_app/290668';
import { viewportNavigatorContext } from '../figma_app/298911';
import { KD, O1 } from '../figma_app/317394';
import { p as _$$p } from '../figma_app/353099';
import { p as _$$p2 } from '../figma_app/372802';
import { getSelectedView, getSelectedViewType } from '../figma_app/386952';
import { fullscreenValue } from '../figma_app/455680';
import { throwTypeError } from '../figma_app/465776';
import { $P, d0 } from '../figma_app/478866';
import { clamp } from '../figma_app/492908';
import { openFileAtom, selectCurrentFile, useCurrentFileKey } from '../figma_app/516028';
import p, { isDevModeFocusViewActive } from '../figma_app/544649';
import { BI, sc, Yi } from '../figma_app/546509';
import { isUserNotLoggedInAndEditorSupported } from '../figma_app/564183';
import { Z5 as _$$Z } from '../figma_app/582377';
import { wV } from '../figma_app/585209';
import { k3, U6, yo } from '../figma_app/591738';
import { useCurrentViewState } from '../figma_app/623300';
import { W as _$$W2 } from '../figma_app/642364';
import { y as _$$y } from '../figma_app/705249';
import { useIsProgressBarHiddenOrLocked } from '../figma_app/722362';
import { Dr, QQ, R3, Vm } from '../figma_app/728075';
import { useAuthedActiveCommunityProfile } from '../figma_app/740025';
import { getSidebarSplitPosition } from '../figma_app/740163';
import { AppStateTsApi, DesignGraphElements, LayoutTabType, UserActionState } from '../figma_app/763686';
import { C as _$$C, nb as _$$nb, _v, a$, CX, dB, hx, hY, k7, lV, pD, q4, QD, RI, RP, UU, vV, wg, Z5 } from '../figma_app/770088';
import { K0 } from '../figma_app/778125';
import { parsePxInt, parsePxNumber } from '../figma_app/783094';
import { Sw } from '../figma_app/805373';
import { clampPointToBounds, isMessageMetaEmpty, isMessageMetaTooShort, sP } from '../figma_app/819288';
import { TrackingProvider } from '../figma_app/831799';
import { HH } from '../figma_app/841415';
import { LoadingSpinner } from '../figma_app/858013';
import { userAtom } from '../figma_app/864723';
import { desktopAPIInstance } from '../figma_app/876459';
import { useHandleKeyboardEvent, useHandleMouseEvent, useHandlePointerEvent } from '../figma_app/878298';
import { trackFileEventWithUser } from '../figma_app/901889';
import { useLatestRef } from '../figma_app/922077';
import { Kq } from '../figma_app/936061';
import { Vi } from '../figma_app/955650';
import { A as _$$A2 } from '../svg/452';
import { A as _$$A5 } from '../svg/404778';
import { A as _$$A4 } from '../svg/796914';
import X from '../vendor/73823';
import e_ from '../vendor/197638';
let W = K;
let Y = X;
class J {
  constructor(e, t, n, o) {
    if (e.pins.length > 1 && (this.showClusterCount = !0), !n) return;
    let a = eo(e, n);
    if (!a) {
      o || e.pins.length !== 1 || e.pins[0].isOurs || (this.expandPin = !0);
      return;
    }
    let i = a.pins.length > 1 && e.pins.length > 1 ? en(a, t) : et(a, t);
    this.initialPosition = i;
  }
}
class ee {
  constructor(e, t, n) {
    let o = n.pins.length > 1 && e.pins.length > 1 ? en(n, t) : et(n, t);
    this.finalPosition = o;
  }
}
let et = (e, t) => ({
  x: e.x + e.x * (t - 1),
  y: e.y + e.y * (t - 1)
});
let en = (e, t) => ({
  x: e.x + e.x * (t - 1) - 32,
  y: e.y + e.y * (t - 1) - 32
});
let eo = (e, t) => {
  if (e.pins.length === 1) return t.getParentOf(e.id);
  let n = t.getParentOf(e.pins[0].id) || null;
  let o = n ? new Set(n.pins.map(e => e.id)) : new Set();
  e.pins.every(e => o.has(e.id)) || (n = null);
  return n;
};
let em = ay - 1;
let eu = memo(({
  avatar: e,
  isInCluster: t,
  isGhost: n,
  initiallyHidden: i
}) => {
  let {
    src,
    fallbackStyle
  } = useMemo(() => {
    let t = Sw(e.avatar_url);
    if (t) {
      return {
        src: t
      };
    }
    let n = $L(e.avatar_user_id, us);
    let o = Xx(n);
    return {
      src: t,
      fallbackStyle: {
        backgroundColor: n,
        color: o
      }
    };
  }, [e.avatar_url, e.avatar_user_id]);
  let l = e.avatar_user_handle[0];
  return jsx('div', {
    className: W()(_$$H, {
      [my]: t,
      [v2]: n,
      [K_]: t
    }),
    children: src ? jsx('img', {
      src,
      className: W()(_$$my, !1 === i ? _$$el : null),
      draggable: !1,
      alt: l
    }) : jsx('span', {
      className: W()(_$$e2, !1 === i ? _$$el : null),
      style: fallbackStyle,
      children: l
    })
  });
});
let ep = memo(({
  avatars: e,
  initiallyHidden: t
}) => {
  let n = e.slice(0, em);
  let a = e.slice(em + 1);
  let i = e[em];
  return jsx('div', {
    className: dQ,
    children: jsxs('div', {
      className: _$$u_,
      children: [a.length ? jsx('div', {
        className: Ws,
        children: a.reverse().map(e => jsx(eu, {
          avatar: e,
          initiallyHidden: t
        }, e.avatar_user_id))
      }) : null, i ? jsx('div', {
        className: OF,
        children: jsx(eu, {
          avatar: i,
          initiallyHidden: t
        })
      }) : null, n.length ? jsx('div', {
        className: q_,
        children: n.reverse().map(e => jsx(eu, {
          avatar: e,
          initiallyHidden: t
        }, e.avatar_user_id))
      }) : null]
    })
  });
});
function eh(e, t, n, o = !1) {
  if (!t || !_$$x()) return Promise.resolve();
  let a = `translate3d(${t.x}px, ${t.y}px, 0px) scale(0.2)`;
  return new Promise((t, i) => {
    let s = e.animate([{
      offset: n,
      transform: a
    }], {
      duration: 200
    });
    s.onfinish = () => {
      o && (e.style.opacity = '0');
      t();
    };
    s.oncancel = () => {
      i();
    };
  });
}
let ef = memo(({
  cluster: e,
  selectedState: t,
  zoomScale: n,
  animationInfo: i
}) => {
  let s = useMemo(() => [...e.avatarMap.values()].sort((e, t) => e.num_unread_comments > 0 && t.num_unread_comments > 0 ? e.num_comments > t.num_comments ? -1 : 1 : e.num_unread_comments > 0 ? -1 : t.num_unread_comments > 0 ? 1 : e.num_comments > t.num_comments ? -1 : 1).slice(0, 5), [e.avatarMap]);
  let r = s.length === 1 ? s[0] : void 0;
  let l = function (e, t) {
    let n = (t - 1) * e.x - 32;
    let o = (t - 1) * e.y - 32;
    return {
      x: e.x + n,
      y: e.y + o
    };
  }(e, n);
  let d = useRef(null);
  let c = useRef(null);
  useEffect(() => {
    if (d.current) {
      if (i instanceof J) {
        let {
          initialPosition,
          showClusterCount
        } = i;
        if (d.current.style.opacity = '1.0', showClusterCount && c.current) {
          let e;
          (e = c.current) ? (e.style.transition = 'none', e.style.opacity = '1', _$$G(e, [], {
            duration: 1e3
          }).then(() => {
            e.style.removeProperty('opacity');
            e.style.removeProperty('transition');
          })) : Promise.resolve();
        }
        initialPosition && eh(d.current, initialPosition, 0, !1);
      } else if (i instanceof ee) {
        let {
          finalPosition
        } = i;
        eh(d.current, finalPosition, 1, !0);
      }
    }
  }, [i]);
  return jsx('div', {
    'ref': d,
    'data-testid': 'figma-comment-cluster',
    'role': 'button',
    'tabIndex': 0,
    'className': W()(Di, {
      [gy]: e.isUnread,
      [rX]: t === LX.DIMMED
    }),
    'style': {
      willChange: 'transform',
      transform: `translate3d(${l.x}px, ${l.y}px, 0px) scale(var(--scale))`,
      opacity: i instanceof J ? 0 : 1,
      zIndex: i instanceof ee ? -1 : 0
    },
    'onClick': e.onClick,
    'children': jsxs('div', {
      'className': IS,
      'data-testid': 'avatar-cluster',
      'children': [jsxs('div', {
        className: u_,
        children: [r ? jsx(eu, {
          avatar: r,
          isInCluster: !0,
          isGhost: !0
        }) : null, s.map(e => jsx(eu, {
          avatar: e,
          isInCluster: !0
        }, e.avatar_user_id))]
      }), jsx('div', {
        'ref': c,
        'className': A3,
        'display-thread-count': e.pins.length
      })]
    })
  });
});
let eg = e_;
let ej = memo(({
  absoluteBounds: e
}) => {
  let {
    width,
    height,
    x,
    y
  } = e;
  return jsx('div', {
    'className': 'selection_box--selectionBox--FNRhk',
    'data-testid': 'figma-comment-selection-box',
    'style': {
      width,
      height,
      left: x,
      top: y
    }
  });
});
let ek = e => e.ctrlKey || e.altKey || e.shiftKey || e.metaKey;
function eP(e, t) {
  let n = (t - 1) * e.x;
  let o = (t - 1) * e.y;
  return {
    x: e.x + n,
    y: e.y + o
  };
}
function eI(e, t, n, o = !1) {
  if (!t || !_$$x()) return Promise.resolve();
  let a = `translate3d(${t.x}px, ${t.y}px, 0px) scale(0.2)`;
  return new Promise((t, i) => {
    let s = e.animate([{
      offset: n,
      transform: a
    }], {
      duration: 200
    });
    s.onfinish = () => {
      o && (e.style.opacity = '0');
      t();
    };
    s.oncancel = () => {
      i();
    };
  });
}
let eT = memo(({
  pin: e
}) => {
  let t = useMemo(() => eg().sanitize(sP(e.previewMessageMeta), {
    ALLOWED_TAGS: ['img', 'span'],
    ALLOWED_ATTR: ['src', 'class'],
    ALLOWED_URI_REGEXP: new RegExp(buildStaticUrl('emoji/*'))
  }), [e.previewMessageMeta]);
  let n = useMemo(() => {
    let t = e.avatars.reduce((e, t) => e + t.num_comments, 0) - 1;
    let n = e.numAttachments;
    let o = !!e.numUnreadReplies && e.numUnreadReplies !== t;
    let a = t ? getI18nString('comments.preview_reply_count', {
      replyCount: o ? e.numUnreadReplies : t,
      new: o ? 'true' : 'false'
    }) : '';
    let i = n ? getI18nString('comments.attachment_count', {
      attachmentCount: n
    }) : '';
    let s = '';
    a !== '' ? s = i !== '' ? `${a} \xB7 ${i}` : a : i !== '' && (s = i);
    return s;
  }, [e.avatars, e.numUnreadReplies, e.numAttachments]);
  let i = useMemo(() => JD(e.createdAt, 'short'), [e.createdAt]);
  return jsxs('div', {
    className: $N,
    children: [jsxs('div', {
      className: Ud,
      children: [jsx('div', {
        className: T7,
        dir: 'auto',
        children: e.avatars[0].avatar_user_handle
      }), jsx('div', {
        className: Zr,
        children: i
      })]
    }), jsx('div', {
      className: se,
      dir: 'auto',
      children: t
    }), jsx('span', {
      className: V_,
      children: n
    })]
  });
});
function eM() {
  return jsx('div', {
    className: _$$S
  });
}
let eE = memo(({
  pin: e
}) => {
  let {
    selectionBoxAnchor
  } = e;
  let n = getViewportZoom({
    subscribeToUpdates_expensive: !!selectionBoxAnchor
  });
  if (!selectionBoxAnchor) return null;
  let a = eP(e, n);
  let i = function (e, t, n) {
    let o = eP(n, t);
    let a = Math.min(e.x, o.x);
    let i = Math.min(e.y, o.y);
    return {
      width: Math.max(e.x - a, o.x - a),
      height: Math.max(e.y - i, o.y - i),
      x: a,
      y: i
    };
  }(a, n, selectionBoxAnchor);
  if (!i) return null;
  let s = {
    x: i.x - a.x,
    y: i.y - a.y,
    width: i.width,
    height: i.height
  };
  return jsx(ej, {
    absoluteBounds: s
  });
});
let eN = memo(({
  pin: e,
  selectedState: t,
  onPinClicked: n,
  onDragEnd: i,
  onDragUpdate: s,
  onDragStart: r,
  onContextMenu: l,
  animationInfo: d,
  recordingKey: m,
  avatarInitiallyHidden: u
}) => {
  let p = useRef(null);
  let [h, f] = useState(!1);
  let [_, g] = useState(!1);
  let v = useHandleMouseEvent(m, 'click', useCallback(() => {
    globalPerfTimer.start('view_comment_thread');
    n(e.id);
  }, [n, e.id]));
  let {
    onPointerDown,
    dragOffset
  } = function ({
    ref: e,
    canDrag: t,
    onDragStart: n,
    onDragEnd: o,
    onDragUpdate: i,
    onClick: s
  }) {
    let [r, l] = useState('idle');
    let [d, m] = useState(!1);
    let [u, p] = useState(null);
    let [h, f] = useState({
      x: 0,
      y: 0
    });
    let _ = useCallback(t => {
      t.button !== 0 || ek(t) || r !== 'idle' || (e.current?.setPointerCapture(t.pointerId), t.stopPropagation(), p({
        x: t.clientX,
        y: t.clientY
      }), l('ready'), m(!1));
    }, [r, e]);
    let g = useCallback(e => {
      if (m(!0), r === 'idle' || !u || !t) return;
      let o = {
        x: e.clientX,
        y: e.clientY
      };
      let a = Point.subtract(u, o);
      f(a);
      r === 'ready' ? (l('dragging'), n(a)) : i(a);
    }, [r, n, i, u, t]);
    let v = useCallback(t => {
      r === 'dragging' ? (e.current?.releasePointerCapture(t.pointerId), t.stopPropagation(), o(h), f({
        x: 0,
        y: 0
      })) : d || s();
      l('idle');
    }, [e, r, h, o, s, d]);
    useEffect(() => (r !== 'idle' && (document.addEventListener('pointermove', g), document.addEventListener('pointerup', v)), () => {
      document.removeEventListener('pointermove', g);
      document.removeEventListener('pointerup', v);
    }), [g, v, r]);
    return useMemo(() => ({
      onPointerDown: _,
      dragOffset: h
    }), [_, h]);
  }(useMemo(() => ({
    ref: p,
    canDrag: e.isDraggable,
    onDragStart: t => r({
      id: e.id,
      offset: t
    }),
    onDragEnd: t => i({
      id: e.id,
      offset: t
    }),
    onDragUpdate: t => s({
      id: e.id,
      offset: t
    }),
    onClick: v
  }), [e, r, i, s, v]));
  useEffect(() => {
    let t;
    e.pending ? t = setTimeout(() => {
      g(!0);
    }, 500) : g(!1);
    return () => {
      t && clearTimeout(t);
    };
  }, [e.pending]);
  useEffect(() => {
    if (p.current) {
      if (d instanceof J) {
        let {
          initialPosition,
          expandPin
        } = d;
        if (initialPosition) {
          p.current.style.opacity = '1.0';
          eI(p.current, initialPosition, 0, !1);
        } else if (expandPin) {
          let e;
          f(!0);
          ((e = p.current) ? (requestAnimationFrame(() => {
            e.style.setProperty('--expandAnimationTime', '0.4s');
            e.classList.add(sz);
          }), _$$G(e, [], {
            duration: 400,
            endDelay: 3500
          }).then(() => {
            e.classList.remove(sz);
            e.style.removeProperty('--expandAnimationTime');
          })) : Promise.resolve()).then(() => {
            f(!1);
          });
        }
      } else if (d instanceof ee) {
        let {
          finalPosition
        } = d;
        eI(p.current, finalPosition, 1, !0);
      }
    }
  }, [d]);
  let y = useHandlePointerEvent(m, 'pointerover', () => {
    f(!0);
  });
  return jsxs(Fragment, {
    children: [jsx('div', {
      'data-testid': `figma-comment-pin-${e.id}`,
      'role': 'button',
      'tabIndex': 0,
      'className': W()(ij, C_, {
        [wH]: t === LX.ACTIVE,
        [_$$rX]: t === LX.DIMMED,
        [Fm]: e.pending || t === LX.ACTIVE,
        [_$$gy]: e.isUnread
      }),
      'style': {
        opacity: d instanceof J && d.initialPosition ? 0 : 1,
        zIndex: d instanceof ee ? -1 : void 0,
        transform: dragOffset.x !== 0 || dragOffset.y !== 0 ? `translate3d(${-dragOffset.x}px, ${-dragOffset.y}px, 0px)` : void 0
      },
      onPointerDown,
      'onContextMenu': t => l(e.id, {
        x: e.x,
        y: e.y,
        width: 23 * Math.min(e.avatars.length, 2) + 32,
        height: -32
      }, t.nativeEvent),
      'onPointerOver': y,
      'onPointerOut': () => {
        f(!1);
      },
      'children': jsxs('div', {
        className: W()(kW, {
          [_$$tu]: e.avatars.length > 1
        }),
        children: [_ ? jsx(eM, {}) : jsx(ep, {
          avatars: e.avatars,
          initiallyHidden: u
        }), h && jsx(eT, {
          pin: e
        })]
      })
    }), e.selectionBoxAnchor && h && jsx(eE, {
      pin: e
    })]
  });
});
let eS = memo(({
  x: e,
  y: t,
  children: n
}) => {
  let i = useRef(null);
  let s = useContext(viewportNavigatorContext);
  let r = useCallback(n => {
    let o = i.current;
    if (o) {
      let a = eP({
        x: e,
        y: t
      }, n.zoomScale);
      o.style.transform = `translate3d(${a.x}px, ${a.y}px, 0px)`;
    }
  }, [e, t]);
  useLayoutEffect(() => (r(s.getViewportInfo()), fullscreenValue && fullscreenValue.viewport.on('onSetViewport', r), () => {
    fullscreenValue && fullscreenValue.viewport.removeListener('onSetViewport', r);
  }), [r, s]);
  return jsx('div', {
    style: {
      willChange: 'transform'
    },
    ref: i,
    children: n
  });
});
let eD = memo(({
  pin: e,
  selectedState: t,
  onPinClicked: n,
  onDragEnd: a,
  onDragUpdate: i,
  onDragStart: s,
  onContextMenu: r,
  animationInfo: l,
  recordingKey: d,
  avatarInitiallyHidden: c
}) => {
  return jsx(eS, {
    x: e.x,
    y: e.y,
    children: jsx(eN, {
      animationInfo: l,
      avatarInitiallyHidden: c,
      onContextMenu: r,
      onDragEnd: a,
      onDragStart: s,
      onDragUpdate: i,
      onPinClicked: n,
      pin: e,
      recordingKey: d,
      selectedState: t
    })
  });
});
function eA(e) {
  let {
    children
  } = e;
  let n = useRef(null);
  let [i, s] = useState(null);
  useEffect(() => {
    if (n.current) {
      let e = n.current.attachShadow({
        mode: 'open'
      });
      let t = document.createElement('style');
      t.nonce = getInitialOptions().csp_nonce;
      t.textContent = ['/** @postcss-export-raw */\n.selection_box--selectionBox--FNRhk {\n  position: absolute;\n  box-sizing: border-box;\n  border: dashed 2px var(--color-border-selected);\n  pointer-events: none;\n}\n', '/** @postcss-export-raw */\n', Nz, _$$Nz].join('\n');
      e.append(t);
      s(e);
    }
  }, []);
  return jsx('div', {
    'ref': n,
    'data-testid': 'pin-renderer-shadow-dom-container',
    'children': i && createPortal(children, i)
  });
}
function eL({
  selectedPinId: e,
  dimUnselectedPins: t,
  emphasizedPinIds: n,
  clusteredThreads: i,
  clientConfig: s,
  shouldDisablePointerEvents: r,
  haveCommentsToShow: l,
  onPinClicked: d,
  onDragEnd: m,
  onDragUpdate: u,
  onDragStart: p,
  onContextMenu: h,
  disableFilteringPinsOnViewportChanges: f
}) {
  let _ = useContext(viewportNavigatorContext);
  let g = getViewportInfo({
    subscribeToUpdates_expensive: l
  });
  let v = useMemo(() => _.getCommentsWrapperOffset(g), [_, g]);
  let [x, b] = useState(g);
  g === x || f || b(g);
  let y = useLatestRef(i);
  let C = useMemo(() => function (e, t) {
    let n = e.all();
    if (!t || t.all().length === 0) {
      return n.map(n => n.pins.length > 1 ? {
        cluster: n,
        animationInfo: new J(n, e.zoomScale, t, e.applyInstant)
      } : {
        cluster: n,
        animationInfo: {}
      });
    }
    let o = n.reduce((e, t) => (e.set(t.id, t), e), new Map());
    let a = t.all();
    let i = a.reduce((e, t) => (e.set(t.id, t), e), new Map());
    let s = n.map(n => {
      let o = i.get(n.id);
      return o ? (xN(n, o), {
        cluster: n,
        animationInfo: {}
      }) : {
        cluster: n,
        animationInfo: new J(n, e.zoomScale, t, e.applyInstant)
      };
    });
    let r = a.filter(e => !o.has(e.id));
    let l = Y()(r, t => {
      let n = eo(t, e);
      return n ? [{
        cluster: t,
        animationInfo: new ee(t, e.zoomScale, n)
      }] : [];
    });
    return l.length > 100 ? s : l.concat(s);
  }(i, y), [i, y]);
  let w = useMemo(() => {
    let e = function (e, t) {
      let n = getVisibleArea(t);
      let o = roundedDivision(78, t.zoomScale);
      let a = expandRect(n, o);
      return e.filter(({
        cluster: e
      }) => !(e.x < a.x) && !(e.x > a.x + a.width) && !(e.y < a.y) && !(e.y > a.y + a.height));
    }(C, x);
    e.sort((e, t) => e.cluster.id < t.cluster.id ? -1 : 1);
    return e;
  }, [C, x]);
  let j = (0 - g.offsetX) * g.zoomScale + v.x;
  let k = (0 - g.offsetY) * g.zoomScale + v.y;
  let I = {
    top: `${g.y + g.height / 2}px`,
    left: `${g.x + g.width / 2}px`,
    transform: `translate(${j}px, ${k}px)`
  };
  return jsx('div', {
    'className': W()({
      'pin_renderer--overlay--oZ6wJ': !0,
      'pin_renderer--overlayPassthrough--IK1LV': g.isPanning || g.isZooming || r
    }),
    'style': I,
    'data-testid': 'clustered-comments-wrapper',
    'aria-hidden': 'true',
    'children': jsx(eA, {
      children: jsx(Fragment, {
        children: w.map(({
          cluster: n,
          animationInfo: i
        }) => {
          let s;
          s = e ? n.pins.find(t => t.id === e) ? LX.ACTIVE : LX.DIMMED : n.pins.every(e => e.isResolved) ? LX.DIMMED : t ? LX.DIMMED : LX.NORMAL;
          return jsx(_$$Fragment, {
            children: n.pins.length === 1 ? jsx(eD, {
              pin: n.pins[0],
              recordingKey: `commentPin.${n.pins[0].id}`,
              selectedState: s,
              onPinClicked: d,
              onDragEnd: m,
              onDragUpdate: u,
              onDragStart: p,
              onContextMenu: h,
              animationInfo: i
            }) : jsx(ef, {
              cluster: n,
              selectedState: s,
              zoomScale: g.zoomScale,
              animationInfo: i
            })
          }, n.id);
        })
      })
    })
  });
}
var eR = (e => (e[e.Gradual = 0] = 'Gradual', e[e.Jump = 1] = 'Jump', e))(eR || {});
let eO = [DesignGraphElements.COMMENTS, DesignGraphElements.SELECT, DesignGraphElements.SCALE, DesignGraphElements.HAND, DesignGraphElements.TYPE];
let eF = (e, t, n, o) => {
  let {
    threads
  } = e;
  let i = threads.map(e => n(e));
  let s = threads.map(e => {
    let t = e.comments[0].client_meta;
    return t?.in_frame ? t.node_id : void 0;
  });
  let r = new Map();
  for (let e of i) {
    for (let t of e.avatars) r.has(t.avatar_user_id) ? (r.get(t.avatar_user_id).num_unread_comments += t.num_unread_comments, r.get(t.avatar_user_id).num_comments += t.num_comments) : r.set(t.avatar_user_id, t);
  }
  return {
    id: threads.length === 1 ? threads[0].id : Ao(e, threads.length),
    x: e.x,
    y: e.y,
    pins: i,
    isUnread: i.some(e => e.isUnread),
    avatarMap: r,
    onClick: o(e, i),
    anchoredNode: s.every(e => e === s[0]) ? s[0] : void 0,
    isPinnedToFile: i.some(e => e.isPinnedToFile),
    isSinglePin: threads.length === 1,
    cluster: e,
    onKeyDown: () => {}
  };
};
function eB(e) {
  return {
    width: 23 * Math.min(e - 1, 2) + 32,
    height: 32
  };
}
let eU = memo(e => {
  let t = !!e.activeThread || e.threads.length > 0;
  let n = selectCurrentUser();
  let s = _$$s();
  let r = _$$Z();
  let m = useDispatch();
  let u = useContext(viewportNavigatorContext);
  let p = useSelector(e => e.mirror.appModel.currentTool);
  let f = getObservableValue(AppStateTsApi?.editorState().handToolTemporarilyEnabled, !1);
  let _ = useAtomWithSubscription(_$$R);
  let g = BI();
  let v = useSelector(e => ![LayoutTabType.DESIGN_LAYOUT, LayoutTabType.WHITEBOARD_LAYOUT, LayoutTabType.HISTORY, LayoutTabType.PREVIEW, LayoutTabType.COMMENTS, LayoutTabType.DEV_HANDOFF, LayoutTabType.SITES_LAYOUT].includes(e.mirror.appModel.activeCanvasEditModeType) || e.mirror.appModel.activeUserAction !== UserActionState.DEFAULT) && (!g || g?.shouldOptimizeForIpadApp && g?.shouldFadeCommentsDuringEdit);
  let x = e.activeThread?.id === NEW_COMMENT_ID;
  let y = x ? null : e.activeThread?.id || null;
  let C = useSelector(e => e.comments.emphasizedPinIds);
  let {
    zoomScale,
    deltaOffsetX,
    deltaOffsetY,
    deltaZoomScale
  } = useViewportWithDelta({
    subscribeToUpdates_expensive: t
  });
  let {
    requestToDeselectCommentPin
  } = e;
  let [K, W] = useState({
    viewport: u.getViewportInfo(),
    hasJumped: !1
  });
  let G = zoomScale < K.viewport.zoomScale;
  let Q = useRef(e.threads);
  useEffect(() => {
    Q.current = e.threads;
  }, [e.threads]);
  let X = useCallback(e => Q.current?.find(t => t.id === e) || null, [Q]);
  let Y = useSelector(e => e.mirror.appModel.activeUserAction);
  let J = e.dragDisabledOverride || !eO.includes(p);
  let ee = BK(X, e.pageId, e.setClientMeta, J, e.requestToSelectCommentPin, _);
  let et = x5(J);
  let en = useMemo(() => new Set(e.threads.filter(e => et(e)).map(e => e.id)), [et, e.threads]);
  let eo = useCallback(e => {
    m(wg({
      threadId: e
    }));
    let t = X(e);
    t && u.setHovering(t.canvasPosition);
  }, [u, m, X]);
  let ea = useCallback(e => {
    m(RP({
      threadId: e
    }));
    u.setHovering(null);
  }, [u, m]);
  let ei = trackFileEventWithUser();
  let es = useCallback((e, t) => () => {
    ei('Comment Cluster Clicked', {
      clusterSize: t.length,
      commentThreadIds: t.map(e => e.id)
    });
    let n = xw({
      config: r,
      clusterLocation: e,
      pins: t,
      currentViewport: u.getViewportInfo()
    });
    u.navigateTo(e, n);
    requestToDeselectCommentPin && requestToDeselectCommentPin();
  }, [r, u, ei, requestToDeselectCommentPin]);
  let er = useCallback((e, t, n) => {
    n.preventDefault();
    n.stopPropagation();
    let o = X(e);
    if (!o) return;
    let a = u.getViewportInfo();
    let i = viewportToScreen(a, t);
    let s = {
      x: i.x + t.height / 2,
      y: i.y - t.width / 2,
      height: 0,
      width: 0
    };
    let r = addRectOffset(s, a);
    m(showDropdownThunk({
      type: Z7,
      data: {
        thread: o,
        pinClientRect: r
      }
    }));
  }, [m, u, X]);
  let el = useCallback(e => {
    let t = c4(e.comments);
    let o = e.comments.slice(1).reduce((e, t) => t.isUnread ? e + 1 : e, 0);
    let a = e.comments[0].client_meta?.selection_box_anchor;
    if (a && e.comments[0].client_meta?.in_frame) {
      let t = e.comments[0].client_meta;
      let n = Point.subtract(a, t);
      a = Point.add(e.canvasPosition, n);
    }
    let i = !!e.isPendingFromSinatra;
    return {
      id: e.id,
      x: e.canvasPosition.x,
      y: e.canvasPosition.y,
      isOurs: e.comments[0].user_id === n?.id,
      pending: i,
      avatars: t,
      createdAt: new Date(Date.parse(e.comments[0].created_at)),
      onMouseEnter: () => eo(e.id),
      onMouseLeave: () => ea(e.id),
      previewMessageMeta: e.comments[0].message_meta,
      isUnread: e.comments[0].isUnread || o > 0,
      numUnreadReplies: o,
      isDraggable: en.has(e.id) && !i,
      isResolved: !!e.comments[0].resolved_at,
      label: e.comments[0].order_id || '',
      updatedAt: e.comments[e.comments.length - 1].created_at,
      selectionBoxAnchor: a,
      type: ThreadType.COMMENT_THREAD,
      numAttachments: e.comments.map(e => e.attachments?.length || 0).reduce((e, t) => e + t, 0),
      isPinnedToFile: !!e.commentPin
    };
  }, [n, en, eo, ea]);
  let ed = useMemo(() => e.threads.reduce((e, t) => {
    let {
      canvasPosition
    } = t;
    canvasPosition && e.push({
      ...t,
      canvasPosition
    });
    return e;
  }, []), [e.threads]);
  let ec = useCallback(e => {
    W({
      viewport: u.getViewportInfo(),
      hasJumped: e === 1
    });
  }, [u]);
  let em = useDebouncedCallback(ec, r.rebuildClustersZoomDelay);
  let eu = useMemo(() => {
    let e = new Set(ed.map(e => e.id));
    let t = K.viewport;
    let n = _$$g(ed, t, r).map(e => eF(e, t, el, es));
    let o = new _$$n(n, e, t.zoomScale);
    o.applyInstant = K.hasJumped;
    return o;
  }, [ed, K.viewport, K.hasJumped, r, el, es]);
  useEffect(() => {
    if (zoomScale === K.viewport.zoomScale) return;
    let {
      width,
      height
    } = u.getViewportInfo();
    Math.abs(deltaZoomScale) / zoomScale > 0.45 || Math.abs(deltaOffsetX) / width > 0.95 || Math.abs(deltaOffsetY) / height > 0.95 ? ec(1) : em(0);
  }, [u, deltaZoomScale, deltaOffsetX, deltaOffsetY, r.rebuildClustersZoomDelay, K.viewport, zoomScale, em, ec]);
  let ep = !!e.activeThread;
  let eh = e.activeThread ? c4(e.activeThread.comments).length : 1;
  let {
    setActivePinSize
  } = e;
  useEffect(() => {
    if (!ep) {
      setActivePinSize(null);
      return;
    }
    if (x) {
      let e = eB(1);
      setActivePinSize({
        height: e.height,
        width: e.width
      });
      return;
    }
    setActivePinSize({
      width: eB(eh).width,
      height: 0
    });
  }, [setActivePinSize, ep, x, eh]);
  let e_ = isUserNotLoggedInAndEditorSupported();
  return jsx(_$$p2, {
    children: jsx(eL, {
      clientConfig: s,
      clusteredThreads: eu,
      dimUnselectedPins: !!v,
      disableFilteringPinsOnViewportChanges: G,
      emphasizedPinIds: C,
      haveCommentsToShow: t,
      onContextMenu: er,
      onDragEnd: ee.onDragEnd,
      onDragStart: ee.onDragStart,
      onDragUpdate: ee.onDragUpdate,
      onPinClicked: ee.onPinClicked,
      selectedPinId: y,
      shouldDisablePointerEvents: !e_ && s?.disableCommentsWhenHandToolEnabled && p === DesignGraphElements.HAND || f || void 0 !== Y && Y !== UserActionState.DEFAULT
    })
  });
});
let eH = memo(e => {
  return jsx(eU, {
    activeThread: e.activeThread,
    dragDisabledOverride: e.dragDisabledOverride,
    isCommunity: e.isCommunity,
    pageId: e.pageId,
    requestToDeselectCommentPin: e.requestToDeselectCommentPin,
    requestToSelectCommentPin: e.requestToSelectCommentPin,
    setActivePinSize: e.setActivePinSize,
    setClientMeta: e.setClientMeta,
    threads: e.threads,
    viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
  }, e.pageId);
});
function th(e) {
  let {
    editorRef,
    container,
    initialLocation,
    closeEditor
  } = e;
  let [r, l] = useState(null);
  let d = useCallback(e => {
    l(e.target.value.trim());
  }, []);
  let m = useCallback(() => (closeEditor(), !0), [closeEditor]);
  O1(m, KD.LINK_TOOLTIP);
  let u = useCallback(e => {
    e.key === 'Enter' && (e.preventDefault(), r ? editorRef.current?.onSubmitHyperlink(r) : editorRef.current?.onRemoveHyperlink(), editorRef.current?.focus(), closeEditor());
  }, [closeEditor, editorRef, r]);
  let p = useCallback(e => {
    editorRef.current?.onRemoveHyperlink();
    editorRef.current?.focus();
    closeEditor();
    e.stopPropagation();
  }, [closeEditor, editorRef]);
  useEffect(() => {
    editorRef.current && l(editorRef.current.getActiveHyperlinkForCurrentSelection());
  }, [editorRef]);
  let h = useMemo(() => {
    if (container.current) {
      let e = createRect(container.current.getBoundingClientRect());
      let t = initialLocation.left - e.left;
      let o = initialLocation.top - e.top;
      return new Point(t + initialLocation.width / 2, o);
    }
    return null;
  }, [container, initialLocation.left, initialLocation.top, initialLocation.width]);
  return h && r !== null ? jsx(_$$c2, {
    url: r,
    location: h,
    onInputChange: d,
    onInputKeyDown: u,
    onBlur: () => {
      closeEditor();
    },
    onClickTrash: p
  }) : null;
}
let tR = 'feed_post_popover_modal--overlayIcon--SjGSf';
let tB = parsePxNumber(qoo);
let tU = parsePxNumber(u24);
let tH = parsePxNumber(IuL);
function tV(e) {
  let t = useSelector(e => e.comments.activeThread?.source);
  let n = useSelector(e => e.comments.activeThread?.id);
  let s = useSelector(e => e.comments.threads);
  let r = n && s[n] || null;
  let l = r?.reply.messageMeta || [];
  let d = useSelector(e => e.comments.editingComment);
  let c = useCurrentUserOrg();
  let {
    dispatch
  } = e;
  let {
    threadPosition,
    comments
  } = e.feedPost;
  let f = GH();
  let v = useMemo(() => f && f.status === 'loaded' && f.data && f?.feedApi?.reactionsApi ? f.feedApi.reactionsApi.getReactionsForPost(e.feedPost.feedPostPublicUuid) : {
    postReactions: [],
    commentReactions: {}
  }, [f, e.feedPost.feedPostPublicUuid]);
  let [x, ...b] = p;
  let y = useSelector(e => e.selectedView.view === 'fullscreen' && e.selectedView.editorType === FEditorType.Whiteboard);
  let [C, w] = _$$R2();
  let {
    feedPost
  } = e;
  let k = feedPost.id;
  let P = useCallback(e => {
    dispatch(k7({
      threadId: k,
      messageMeta: e
    }));
  }, [dispatch, k]);
  let T = useCallback(e => {
    dispatch(QD({
      threadId: k,
      attachmentId: e.id,
      attachment: e
    }));
  }, [dispatch, k]);
  let M = useCallback((e, t) => {
    dispatch(QD({
      threadId: k,
      attachmentId: e,
      attachment: null
    }));
    t ? t.then(() => feedCommentAttachmentAPI.delete(e)) : feedCommentAttachmentAPI.delete(e);
  }, [dispatch, k]);
  let E = useCallback(() => {
    r && (dispatch(gX({
      postUuid: gk(k),
      messageMeta: r.reply.messageMeta,
      attachmentIds: r.reply.attachments ? Object.keys(r.reply.attachments) : []
    })), w(), P([]), dispatch(q4({
      threadId: k,
      resetStatusOnly: !1
    })));
  }, [dispatch, k, r, w, P]);
  let N = useRef(null);
  let S = useCallback(() => {
    N.current?.scrollToBottom();
    P([]);
  }, [N, P]);
  useEffect(() => {
    k && N.current?.scrollToBottom();
  }, [k, N]);
  let [D, A] = useState(!1);
  let L = _$$t$();
  let R = useCallback(() => {
    dispatch(showModalHandler({
      type: _$$K2,
      data: {
        postUuid: feedPost.feedPostPublicUuid,
        inFileView: !0
      }
    }));
    dispatch(UU({
      force: !0
    }));
  }, [dispatch, feedPost.feedPostPublicUuid]);
  let O = useRef(null);
  let F = useRef(null);
  let B = e.viewportInfo.height - 2 * tU;
  y && (B -= tH);
  let U = B - tB;
  let H = !t && !e.mountUnfocused;
  let V = [...new Set(feedPost.comments.map(e => e.user.handle))];
  return c ? jsxs(_$$P, {
    'ref': N,
    'maxHeight': U,
    'onMouseDown': e => e.stopPropagation(),
    'onPointerDown': e => e.stopPropagation(),
    'width': L,
    'scrollingDisabled': !!e.hyperlinkLocation,
    'allowScrollAndZoomOver': !0,
    'data-not-draggable': !0,
    'children': [jsx('div', {
      'className': _$$Q,
      'role': 'status',
      'aria-live': 'polite',
      'aria-atomic': 'true',
      'children': C
    }), jsxs('div', {
      className: 'feed_post_popover_modal--postColumn--2MySW',
      children: [jsx(_$$B2, {
        date: x.created_at,
        user: x.user,
        size: Pf.MEDIUM,
        shortDate: !1
      }), jsxs('div', {
        className: 'feed_post_popover_modal--postThumbnailContainer--69nje',
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        onClick: R,
        role: 'button',
        tabIndex: 0,
        children: [jsx('img', {
          src: feedPost.feedPostThumbnail,
          alt: 'placeholder',
          className: 'feed_post_popover_modal--postThumbnail--jac1E',
          style: {
            backgroundColor: feedPost.feedPostThumbnailBackground,
            padding: feedPost.padFeedPostThumbnail ? '8px' : '0'
          }
        }), feedPost.feedPostNumContent > 1 && jsx('div', {
          className: 'feed_post_popover_modal--numContent--S8q68 feed_post_popover_modal--postThumbnailOverlay--vDoKP',
          children: jsx(SvgComponent, {
            svg: _$$A2,
            className: tR
          })
        }), D && jsx('div', {
          className: 'feed_post_popover_modal--expand--cHMgw feed_post_popover_modal--postThumbnailOverlay--vDoKP',
          children: jsx(SvgComponent, {
            svg: _$$A3,
            className: tR
          })
        })]
      }), jsxs('div', {
        className: 'feed_post_popover_modal--subtitleRow--kW-8f',
        children: [jsx('div', {
          className: 'feed_post_popover_modal--postedToFeed--mHMFC',
          children: getI18nString('fig_feed.posted_to_feed')
        }), ' ']
      }), jsxs('div', {
        children: [jsx('div', {
          className: 'feed_post_popover_modal--postTitle--4GzeH',
          children: feedPost.feedPostTitle
        }), jsx(HH, {
          messageMeta: x.message_meta,
          commentId: e.feedPost.id,
          className: 'feed_post_popover_modal--postDescription--j6YqM'
        })]
      }), jsx('div', {
        className: 'feed_post_popover_modal--reactionSection--cxj-W',
        children: jsx(Q$, {
          type: Us.FULL,
          source: zY.FILE_POPOVER,
          feedReactions: v.postReactions,
          postId: x.feed_id,
          postUuid: e.feedPost.feedPostPublicUuid
        })
      })]
    }), jsx('div', {
      className: 'feed_post_popover_modal--postCommentlist--NUSo7',
      children: b.map(t => jsx(_$$i, {
        attachments: t.attachments,
        commentId: t.feed_id,
        commentUser: t.user,
        commentUuid: t.uuid || '',
        createdAt: t.created_at,
        currentOrgId: c.id,
        mentionables: e.mentionables,
        messageMeta: t.message_meta,
        reactions: t.uuid && v.commentReactions[t.feed_id] || [],
        user: e.user
      }, t.id))
    }), e.isLoading && jsx('div', {
      className: wG,
      children: jsx(LoadingSpinner, {
        size: 'small'
      })
    }), jsx(_$$K, {
      allowAttachments: !0,
      attachments: r?.reply.attachments ? Object.values(r.reply.attachments) : [],
      authorNames: V,
      className: MJ,
      deleteAttachment: M,
      dispatch,
      editingExistingComment: !1,
      editorOnClear: e.editorOnClear,
      editorOnInsert: e.editorOnInsert,
      editorRef: O,
      editorType: 'comment-editor-reply',
      fileKey: e.feedPost.key,
      hideEmojiPicker: e.hideEmojiPicker,
      hyperlinkLocation: e.hyperlinkLocation,
      isDisabled: !!d,
      isEmojiPickerDisabled: !!e.comments.editingComment,
      mentionables: e.mentionables,
      messageMeta: l,
      mountInputFocused: H,
      onCancel: e.onCloseEsc,
      onComposeFocus: e.onComposeFocus,
      onEditStart: S,
      onSubmit: E,
      placeholderText: getI18nString('comments.reply'),
      recordingKey: ComposerType.feedPopover,
      replyContainerRef: F,
      setHyperlinkEditorRef: e.setHyperlinkEditorRef,
      setHyperlinkLocation: e.setHyperlinkLocation,
      setIsEditorFocused: e.setIsEditorFocused,
      submitText: getI18nString('comments.reply'),
      threadId: k,
      threadPosition,
      typeahead: e.comments.typeahead,
      updateAttachment: T,
      updateMessage: P,
      user: e.user,
      viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
    })]
  }) : null;
}
function t3(e) {
  let t = useAtomWithSubscription(userAtom);
  let n = useAtomWithSubscription(openFileAtom);
  let a = kJ();
  return yo({
    user: t,
    file: n,
    numPinnedCommentThreads: a
  }) ? a > 0 ? jsx(t6, {
    id: e.id,
    commentPin: e.commentPin,
    numPinnedCommentThreads: a
  }) : jsx(t4, {
    children: jsx(t6, {
      id: e.id,
      commentPin: e.commentPin,
      numPinnedCommentThreads: a
    })
  }) : null;
}
function t4(e) {
  return k3() ? e.children : null;
}
function t6(e) {
  let t = !useAtomWithSubscription(_$$wg);
  let {
    pinApi
  } = I_();
  let a = useDispatch();
  let s = !!e.commentPin;
  let r = e.numPinnedCommentThreads >= 10;
  async function d() {
    try {
      a(postUserFlag({
        has_toggled_comment_pin: !0
      }));
      s ? await pinApi?.removePin(e.id, e.commentPin.id) : await pinApi?.setPin(e.id);
    } catch (e) {
      if (!e || e?.data?.status === 422) return;
      e?.data?.i18n ? a(VisualBellActions.enqueue({
        message: resolveMessage(e, e.data.message),
        error: !0
      })) : a(VisualBellActions.enqueue({
        message: getI18nStringAlias('comments.pinning.err.fallback'),
        error: !0
      }));
    }
  }
  return jsx(TrackingProvider, {
    name: 'Pin comment icon',
    properties: {
      isPinned: s
    },
    children: jsx(IconButton, {
      'disabled': !s && r || t,
      'htmlAttributes': {
        'data-onboarding-key': s ? 'unpin-comment-icon' : 'pin-comment-icon',
        'data-testId': 'pin-comment-button-thread-header',
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': s ? getI18nString('comments.pinning.unpin_comment') : getI18nString('comments.pinning.pin_comment')
      },
      'aria-label': getI18nString('comments.pinning.pin_comment'),
      'onClick': d,
      'recordingKey': 'threadHeader.pinCommentButton',
      'children': jsx(SvgComponent, {
        svg: s ? _$$A5 : _$$A4
      })
    })
  });
}
function t8(e) {
  let t = useRef(null);
  let n = useRef(null);
  let s = useSelector(e => e.comments.activeThread?.source);
  useEffect(() => {
    if (s && !e.mountUnfocused) {
      switch (s) {
        case NAVIGATION_BUTTONS.prevButton:
          t.current?.focus();
          break;
        case NAVIGATION_BUTTONS.nextButton:
          n.current?.focus();
          break;
        case NAVIGATION_BUTTONS.accessibilityCommentPin:
          break;
        default:
          throwTypeError(s);
      }
    }
  }, [e.mountUnfocused, s]);
  I_();
  _$$s();
  _$$Z2('comments_navigate');
  let r = U6() && !!e.thread.commentPin;
  return jsxs('div', {
    'className': F7,
    'data-testid': 'thread-header-container',
    'children': [jsx('div', {
      'className': xS,
      'data-onboarding-key': 'thread-header-left-section',
      'data-fullscreen-intercept': !0,
      'children': jsx('h2', {
        children: renderI18nText('comments.comment_n')
      })
    }), jsxs('div', {
      className: _$$eX,
      children: [e.thread.comments[0] && jsx(_$$V, {
        comment: e.thread.comments[0],
        isUnread: e.thread.comments.some(e => e.isUnread),
        label: getI18nString('comments.thread_actions'),
        recordingKey: 'threadHeader.moreActionsButton',
        thread: e.thread,
        possibleActions: e.overflowMenuActions,
        onDelete: e.onDelete,
        onCopyLink: e.onCopyLink
      }), jsx(t3, {
        id: e.thread.id,
        commentPin: e.thread.commentPin
      }), !e.hideResolve && jsx(K0, {
        'disabled': r,
        'data-fullscreen-intercept': !0,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': e.resolved ? r ? getI18nString('comments.pinning.cannot_unresolve') : getI18nString('comments.mark_as_unresolved') : r ? getI18nString('comments.pinning.cannot_resolve') : getI18nString('comments.mark_as_resolved'),
        'onClick': () => {
          e.setResolved({
            thread: e.thread,
            resolved: !e.resolved
          });
        },
        'recordingKey': 'threadHeader.resolveButton',
        'onMouseDown': e => e.stopPropagation(),
        'className': W()(e.resolved && aW, r && VM),
        'children': e.resolved ? jsx(_$$g3, {}) : jsx(_$$W, {})
      }), e.customIcon, jsx(CloseButton, {
        'className': _$$UR,
        'recordingKey': 'threadHeader',
        'onClick': e.onClose,
        'innerText': getI18nString('comments.close'),
        'aria-label': getI18nString('comments.close'),
        'data-fullscreen-intercept': !0
      })]
    })]
  });
}
let ne = parsePxInt(qoo);
let nt = parsePxInt(u24);
let nn = parsePxNumber(M$q);
let no = e => {
  e.stopPropagation();
};
let na = [];
let ni = [];
let ns = memo(e => {
  let t = useContext(viewportNavigatorContext);
  let n = useSelector(e => e.comments.threads)[e.threadId];
  let s = n?.discardAttempts || 0;
  let [r, l] = useState(0);
  let {
    positionRef,
    disableCentering
  } = e;
  useEffect(() => {
    s <= 0 || (async () => {
      let e = positionRef.current;
      let n = t.getViewportInfo();
      e && !disableCentering && (await t.navigateTo(e, n.zoomScale, {
        duration: 600,
        ignoreVisibleTargets: !0
      }));
      l(s);
    })();
  }, [l, positionRef, disableCentering, s, t]);
  let {
    editorRef,
    editingCommentEditorRef
  } = e;
  let p = useCallback(() => {
    if (editingCommentEditorRef.current) {
      editingCommentEditorRef.current.selectAll();
      return;
    }
    editorRef.current?.selectAll();
  }, [editorRef, editingCommentEditorRef]);
  return jsx(_$$c, {
    wiggleCount: r,
    onWiggle: p,
    children: e.children
  });
});
function nr(e) {
  let t = getSelectedViewType();
  let n = useSelector(e => e.comments.activeThread?.source);
  let s = useSelector(e => e.comments.activeThread?.id);
  let r = useSelector(e => e.comments.threads);
  let d = Kq(e.thread);
  let m = s && r[s] || null;
  let u = m?.discardAttempts || 0;
  let p = m?.reply.messageMeta || na;
  let f = m?.reply.attachments ? Object.values(m?.reply.attachments) : ni;
  let _ = useSelector(e => e.comments.editingComment);
  let [v, x] = useState(!1);
  let b = useAtomWithSubscription(_$$R);
  let [y, C] = useState(_$$t$());
  let [w, j] = useState(ne);
  let k = function (e) {
    let t = useRef(e);
    useEffect(() => {
      t.current = e;
    }, [t, e]);
    return t;
  }(e.thread.canvasPosition);
  let P = useRef(null);
  let {
    legalLeft,
    legalRight,
    legalBottom,
    useLegalBounds
  } = function () {
    let e = sO();
    let t = getObservableValue(AppStateTsApi?.singleSlideView().isInFocusedNodeView, !1);
    let n = getSidebarSplitPosition();
    let o = getObservableValue(AppStateTsApi?.editorPreferences().speakerNotesHeight, 0);
    let a = AppStateTsApi?.singleSlideView().bottomToolbeltHeightInViewport() ?? 0;
    return e && t ? {
      legalLeft: n + nn,
      legalRight: nn,
      legalBottom: o + a,
      useLegalBounds: !0
    } : {
      legalLeft: 0,
      legalRight: 0,
      legalBottom: 0,
      useLegalBounds: !1
    };
  }();
  let D = useRef(!1);
  let A = useCallback(n => {
    let {
      x,
      y,
      width,
      height
    } = e.viewportInfo;
    if (t === 'fullscreen' && !n.page) return new Point(x, y);
    if (!n.threadPosition) return;
    if (e.useAbsolutePositioning) return new Point(n.threadPosition.x, n.threadPosition.y);
    let r = n.threadPosition.x + x;
    let l = n.threadPosition.y + y;
    if (useLegalBounds) {
      let t = legalLeft + nn;
      let n = x + width - legalRight - y - nn;
      r = clamp(r, t, n);
      let d = P.current ? P.current.getBoundingClientRect().height : w;
      let c = e.viewportInfo.y + nn;
      let m = y + height - legalBottom - d - nn;
      !D.current && P.current && (D.current = !0, B(null));
      l = c > m ? c : clamp(l, c, m);
    }
    return new Point(r, l);
  }, [t, e.viewportInfo, e.useAbsolutePositioning, useLegalBounds, legalLeft, legalRight, legalBottom, y, w, nn]);
  let L = Rf();
  let R = useMemo(() => {
    let t = e.viewportInfo.x + nn + L.xDelta;
    let n = e.viewportInfo.y + nn + L.yDelta;
    return new Point(t, n);
  }, [e.viewportInfo.x, e.viewportInfo.y, L.xDelta, L.yDelta, nn]);
  let [O, B] = useState(null);
  let U = useMemo(() => b ? R : d ? R : A(e.thread) || new Point(0, 0), [b, e.thread, d, R, A]);
  let H = useLatestRef(U);
  useLayoutEffect(() => {
    if (O && !b) {
      let e = H ? U.subtract(H) : new Point(0, 0);
      e.equals(new Point(0, 0)) || B(O.add(e));
    }
  }, [U, O, H, b]);
  let V = useMemo(() => O ?? U, [U, O]);
  let {
    dispatch,
    setIsPinned
  } = e;
  let {
    threadPosition,
    comments
  } = e.thread;
  _$$h(() => {
    let e = globalPerfTimer.tryStop('view_comment_thread');
    e && trackEventAnalytics('view_comment_thread', {
      elapsedMs: e
    }, {
      forwardToDatadog: !0
    });
  });
  let W = useAuthedActiveCommunityProfile();
  let [Q, X] = useState(e.thread.comments.length);
  let [Y, J] = useState(!1);
  let ee = t === 'communityHub' ? W : e.user;
  let [et, en] = _$$R2();
  let {
    submitReply,
    thread
  } = e;
  let ei = thread.id;
  let es = thread.uuid;
  let er = useCallback(() => {
    let e = generateUUIDv4();
    globalPerfTimer.start(`comment_reply_creation_${e}`);
    submitReply({
      threadId: ei,
      threadUuid: es ?? void 0,
      uuid: e
    });
    en();
  }, [submitReply, ei, es, en]);
  _$$h(() => () => {
    comments.map(e => {
      e.uuid && e.isPendingFromSinatra && globalPerfTimer.tryStop(`comment_reply_creation_${e.uuid}`);
    });
  });
  let el = useCallback(e => {
    dispatch(k7({
      threadId: ei,
      messageMeta: e
    }));
  }, [dispatch, ei]);
  let ed = useRef(null);
  let ec = useRef(null);
  let em = useCallback(e => {
    dispatch(QD({
      threadId: ei,
      attachmentId: e.id,
      attachment: e
    }));
  }, [dispatch, ei]);
  let eu = useCallback((t, n) => {
    dispatch(QD({
      threadId: ei,
      attachmentId: t,
      attachment: null
    }));
    f.length === 1 && ed.current?.focus();
    n ? n.then(() => fileCommentAttachmentAPI.$$delete(e.thread.key, t)) : fileCommentAttachmentAPI.$$delete(e.thread.key, t);
  }, [e.thread.key, dispatch, ei, f.length]);
  let ep = useRef(null);
  let eh = useCallback(() => {
    ep.current?.scrollToBottom();
    el([]);
  }, [ep, el]);
  let {
    updateCommentContent
  } = e;
  let e_ = useCallback((e, t, n) => {
    updateCommentContent({
      comment: e,
      messageMeta: t,
      attachmentUpdates: n
    });
  }, [updateCommentContent]);
  let eg = o3(_$$nt.commentsA11y);
  let eb = useSelector(e => e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.COMMENTS);
  let ey = eg && eb;
  let ew = useCallback(() => {
    ey ? _$$iZ?.focusPinById(ei) : document.getElementById(`accessibility-comment-pin-${ei}`)?.focus();
  }, [ey, ei]);
  let ej = useCallback(() => {
    if (setIsPinned(!1), ew(), !isMessageMetaEmpty(p)) {
      if (u && ed.current?.isAllSelected() || isMessageMetaTooShort(p) && f.length === 0) {
        el([]);
        dispatch(pD());
        return;
      }
      return !1;
    }
  }, [ew, setIsPinned, p, u, f.length, el, dispatch]);
  let ek = useCallback(() => {
    setIsPinned(!1);
    dispatch(UU({
      force: !0
    }));
    ew();
  }, [dispatch, setIsPinned, ew]);
  let eP = useSelector(e => e.universalInsertModal?.pinned === _$$t4.PINNED_AND_DOCKED_LEFT);
  let eI = useLatestRef(R);
  let eT = eI && eI !== R;
  let eM = eI && V.equals(eI);
  useEffect(() => {
    eT && eM && (setIsPinned(!0), B(R));
  }, [R, eT, eM, setIsPinned]);
  let eE = V.equals(R);
  let eN = sj();
  useEffect(() => {
    eN && eE && eN();
  }, [eE, eN, dispatch]);
  useEffect(() => {
    ei && ep.current?.scrollToBottom();
  }, [ei, ep]);
  let [eS, eD] = useState(null);
  let [eA, eL] = useState(useRef(null));
  let eR = useMemo(() => function (e) {
    return jsx(ns, {
      editorRef: ed,
      editingCommentEditorRef: ec,
      positionRef: k,
      threadId: ei,
      disableCentering: t === 'communityHub' || t === 'prototype',
      children: e.children
    });
  }, [ei, k, ed, t]);
  let [eO, eF] = useState(!1);
  let [eB, eU] = useState(!1);
  let eH = useCallback(e => {
    e?.stopPropagation();
    setIsPinned(!0);
    B(R);
    x(!0);
  }, [setIsPinned, R]);
  let {
    modalRef
  } = e;
  useEffect(() => {
    modalRef && (modalRef.current = {
      popout: () => eH()
    });
  }, [modalRef, eH]);
  _$$C_(P);
  useEffect(() => {
    if (n && !e.mountUnfocused) {
      switch (n) {
        case NAVIGATION_BUTTONS.accessibilityCommentPin:
          P.current?.focus();
          break;
        case NAVIGATION_BUTTONS.prevButton:
        case NAVIGATION_BUTTONS.nextButton:
          break;
        default:
          throwTypeError(n);
      }
    }
  }, [P, e.mountUnfocused, n]);
  let eq = useRef(null);
  UR(_$$b.DOCK_STYLE);
  let ez = Y6();
  let eZ = _$$eW();
  return (() => {
    if (!V || e.thread.isCanvasMention) return null;
    let t = vl(e.viewportInfo, e.thread, !0, eZ.paddingRight);
    let a = {
      x: R.x - y,
      y: 0,
      width: 2 * y + nn,
      height: window.innerHeight
    };
    eP && (a.x -= y, a.width += y);
    let i = jsx(K0, {
      'svg': _$$A6,
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('comments.dock_to_side'),
      'recordingKey': 'activeThread.dockToSideButton',
      'onClick': eH,
      'onMouseDown': e => e.stopPropagation(),
      'data-fullscreen-intercept': !0
    });
    let s = e.viewportInfo.height - 2 * nt;
    let r = window.innerHeight - e.viewportInfo.y - e.viewportInfo.height + nt;
    let l = e.viewportInfo.x + nt;
    let d = window.innerWidth - e.viewportInfo.x - e.viewportInfo.width + nt;
    s += ez.maxHeightDelta;
    r += ez.minBottomMarginDelta;
    l += ez.minLeftMarginDelta;
    d += ez.minRightMarginDelta;
    let c = s - ne;
    let m = e.useAbsolutePositioning ? wC : v ? xe : wb;
    let u = !n && !e.mountUnfocused;
    let h = [...new Set(thread.comments.map(e => e.user.handle))];
    return jsxs(Fragment, {
      children: [Y && jsx(ue, {
        registrationOrigin: iX.COMMENT_REPLY
      }), jsxs(od, {
        allowWheelPassthrough: !0,
        alwaysEnsureModalOnScreen: !0,
        autoflowHeight: !0,
        bounds: a,
        container: eR,
        containerClassName: m,
        dataOnboardingKey: ym,
        dataTestId: 'comment-thread-draggable-modal',
        disableDragging: e.disableDragging,
        frameStyle: {
          boxShadow: 'var(--elevation-400-menu-panel, 0px 2px 14px rgba(0, 0, 0, .15), 0 0 0 0.5px rgba(0, 0, 0, .2))',
          pointerEvents: 'auto'
        },
        height: w,
        maxHeight: s,
        minBottomMargin: r,
        minLeftMargin: l,
        minRightMargin: d,
        minTopMargin: e.viewportInfo.y + nt,
        onClose: ek,
        onDragEnd: e => {
          eU(!1);
          setIsPinned(!0);
          let t = rk.CALL_ENSURE_MODAL_ON_SCREEN;
          B(e);
          return t;
        },
        onDragStart: () => {
          eU(!0);
          x(!1);
        },
        onEnterBound: () => eF(!0),
        onLeaveBound: () => eF(!1),
        position: V,
        recordingKey: 'activeThreadDraggableModal',
        setHeight: j,
        setPosition: B,
        setWidth: C,
        shouldScrollToBottom: () => {
          let t = Q < e.thread.comments.length;
          let n = e.thread.comments[e.thread.comments.length - 1].user_id === e.user?.id;
          let o = t && n;
          t && X(e.thread.comments.length);
          o && J(!0);
          return o;
        },
        width: y,
        children: [eS && eA && jsx(th, {
          editorRef: eA,
          container: P,
          initialLocation: eS,
          closeEditor: () => {
            eD(null);
          }
        }), jsxs('div', {
          'ref': P,
          'className': OM,
          'tabIndex': -1,
          'aria-label': getI18nString('fullscreen.accessibility.comment_thread_label'),
          'role': 'region',
          'data-fullscreen-intercept': !0,
          'children': [jsx(t8, {
            customIcon: !eE && e.showDockToSideButton ? i : void 0,
            hideResolve: e.hideResolve,
            mountUnfocused: e.mountUnfocused,
            nextThread: e.nextThread,
            onClose: ek,
            prevThread: e.prevThread,
            resolved: !!comments[0].resolved_at,
            setResolved: e.setResolved,
            thread: t
          }), thread.sidebarItemType === ThreadType.COMMENT_THREAD ? jsxs(_$$P, {
            'ref': ep,
            'maxHeight': c,
            'onMouseDown': no,
            'onPointerDown': no,
            'width': y,
            'scrollingDisabled': !!eS,
            'allowScrollAndZoomOver': !0,
            'data-not-draggable': !0,
            'children': [jsx('div', {
              'className': _$$Q,
              'role': 'status',
              'aria-live': 'polite',
              'aria-atomic': 'true',
              'children': et
            }), comments.map((n, a) => jsx(_$$I2, {
              allowAttachments: !0,
              comment: n,
              dispatch,
              editingComment: e.comments.editingComment,
              editorOnClear: e.editorOnClear,
              editorOnInsert: e.editorOnInsert,
              editorRef: ec,
              editorType: 'comment-editor-thread',
              hideEmojiPicker: e.hideEmojiPicker,
              hideReactions: e.hideReactions,
              hideResolve: e.hideResolve,
              hyperlinkLocation: eS,
              index: a,
              mentionables: e.mentionables,
              mountInputFocused: !0,
              prevAuthor: a === 0 ? null : comments[a - 1].user_id,
              setHyperlinkEditorRef: eL,
              setHyperlinkLocation: eD,
              setIsEditorFocused: e.setIsEditorFocused,
              setResolved: e.setResolved,
              showEditedIndicator: !!(e.showEditedIndicators && n.edited_at),
              submitEdit: e_,
              thread: t,
              threadPosition: t.threadPosition,
              typeahead: e.comments.typeahead,
              user: e.user,
              viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
            }, `thread-comment-${n.id}`)), e.isLoading && jsx('div', {
              className: wG,
              children: jsx(_$$k3, {
                size: 'sm'
              })
            }), !e.commentCreationDisabled && jsx(_$$K, {
              allowAttachments: !0,
              attachments: f,
              authorNames: h,
              className: MJ,
              deleteAttachment: eu,
              dispatch,
              editingExistingComment: !1,
              editorOnClear: e.editorOnClear,
              editorOnInsert: e.editorOnInsert,
              editorRef: ed,
              editorType: 'comment-editor-reply',
              fileKey: e.thread.key,
              hideEmojiPicker: e.hideEmojiPicker,
              hyperlinkLocation: eS,
              isDisabled: !!_,
              isEmojiPickerDisabled: !!e.comments.editingComment,
              mentionables: e.mentionables,
              messageMeta: p,
              mountInputFocused: u,
              onCancel: ej,
              onComposeFocus: e.onComposeFocus,
              onEditStart: eh,
              onSubmit: er,
              placeholderText: getI18nString('comments.reply'),
              recordingKey: ComposerType.reply,
              replyContainerRef: eq,
              setHyperlinkEditorRef: eL,
              setHyperlinkLocation: eD,
              setIsEditorFocused: e.setIsEditorFocused,
              submitText: getI18nString('comments.reply'),
              threadId: ei,
              threadPosition,
              typeahead: e.comments.typeahead,
              updateAttachment: em,
              updateMessage: el,
              user: ee,
              viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
            })]
          }) : thread.sidebarItemType === ThreadType.FEED_POST ? jsx(tV, {
            comments: e.comments,
            dispatch,
            editorOnClear: e.editorOnClear,
            editorOnInsert: e.editorOnInsert,
            feedPost: thread,
            hideEmojiPicker: e.hideEmojiPicker,
            hyperlinkLocation: eS,
            isLoading: e.isLoading,
            mentionables: e.mentionables,
            mountUnfocused: e.mountUnfocused,
            onCloseEsc: ej,
            onComposeFocus: e.onComposeFocus,
            setHyperlinkEditorRef: eL,
            setHyperlinkLocation: eD,
            setIsEditorFocused: e.setIsEditorFocused,
            showEditedIndicators: e.showEditedIndicators,
            user: e.user,
            viewportInfo: e.viewportInfo,
            viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
          }) : thread.sidebarItemType === ThreadType.LITMUS_COMMENT_THREAD ? null : void throwTypeError(thread)]
        })]
      })]
    });
  })();
}
function nc(e) {
  return jsxs('svg', {
    'className': 'anchor--anchorIcon--e1LTz',
    'viewBox': '0 0 34 41',
    'fill': 'none',
    'data-testid': 'svg-comment-pin',
    'children': [jsx('path', {
      fill: e.bodyColor,
      d: 'M17 1C25.8366 1 33 8.16344 33 17C33 23.6257 27.6611 28.9662 17 39.6274C6.33887 28.9663 1.00001 23.6257 1 17C1 8.16344 8.16344 1 17 1Z'
    }), jsx('path', {
      fill: e.outlineColor,
      opacity: '0.4',
      d: 'M17 40.3345L16.6261 39.9606C11.3156 34.6501 7.29362 30.6281 4.60457 27.1037C1.90336 23.5633 0.500006 20.4662 0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 20.4662 32.0967 23.5633 29.3954 27.1037C26.7064 30.6281 22.6845 34.65 17.374 39.9605L17 40.3345ZM33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17C1.00001 23.552 6.22083 28.8474 16.6464 39.2738C16.7174 39.3447 16.7885 39.4159 16.8599 39.4873C16.9065 39.5339 16.9532 39.5806 17 39.6274C17.1185 39.5089 17.2364 39.391 17.3536 39.2738C27.7792 28.8474 33 23.552 33 17Z'
    }), e.isNew && jsx('circle', {
      cx: '16.5',
      cy: '16.5',
      r: '2.25',
      fill: e.labelColor
    })]
  });
}
let nm = {
  x: 0,
  y: 0
};
function nu(e) {
  let t = useSelector(e => e.selectedView);
  let n = selectCurrentUser();
  let s = useContext(viewportNavigatorContext);
  let r = t.view !== 'communityHub' || e.thread.comments[0]?.user_id === n?.id;
  let l = useDispatch();
  let [d, m] = useState(null);
  let [u, p] = function () {
    let e = useRef(null);
    let t = useCallback(t => {
      if (t === null) {
        e.current = null;
        return;
      }
      let n = e.current || {};
      e.current = {
        ...n,
        ...t
      };
    }, [e]);
    return [e, t];
  }();
  let f = useRef(e);
  f.current = e;
  let {
    viewportPositionFromClientPosition,
    offset
  } = e;
  let x = useCallback(e => {
    let t = u.current;
    if (!t) return;
    let n = f.current;
    let o = viewportPositionFromClientPosition(new Point(e.clientX, e.clientY));
    let a = Math.max(t.maxDist, Point.distance(o, t.startPosition));
    if (p({
      ...t,
      maxDist: a
    }), a < wB) {
      return;
    }
    let i = n.computeDropLocation(o, t.mouseOffset);
    if (!n.isInViewport(i)) return;
    let s = Point.add(o, t.mouseOffset);
    if (n.thread.id === NEW_COMMENT_ID) {
      let e = n.viewport.current;
      if (!e) return;
      l(vV({
        anchorPosition: applyOffsetToViewport(e, s)
      }));
    } else {
      r && (l(UU()), m(s));
    }
  }, [u, viewportPositionFromClientPosition, p, l, r]);
  let b = useCallback(e => {
    let t = u.current;
    if (!t) return;
    let n = f.current;
    m(null);
    let o = viewportPositionFromClientPosition(new Point(e.clientX, e.clientY));
    let a = n.viewport.current;
    if (!a) return;
    if (!(t.maxDist > wB) || !r) return p(null);
    let i = n.computeDropLocation(o, t.mouseOffset);
    if (!n.isInViewport(i)) return p(null);
    let l = s.getCommentDestinationForCanvasPosition(i, n.pageId);
    n.thread.id === NEW_COMMENT_ID || n.setClientMeta({
      thread: n.thread,
      clientMeta: {
        x: i.x,
        y: i.y,
        node_id: l?.nodeId,
        node_offset: l?.nodeOffset || void 0,
        viewport: a,
        page_id: n.pageId,
        in_frame: l?.inFrame,
        stable_path: l?.stablePath
      }
    });
    return p(null);
  }, [u, viewportPositionFromClientPosition, r, s, p]);
  let y = useCallback(e => {
    if (e.button !== 0) return;
    e.stopPropagation();
    let t = viewportPositionFromClientPosition(new Point(e.clientX, e.clientY));
    p({
      startPosition: t,
      mouseOffset: Point.subtract(offset || nm, t),
      maxDist: 0
    });
  }, [viewportPositionFromClientPosition, p, offset]);
  useEffect(() => (document.addEventListener('pointermove', x), document.addEventListener('pointerup', b), () => {
    document.removeEventListener('pointermove', x);
    document.removeEventListener('pointerup', b);
  }), [x, b]);
  let {
    type,
    resolved,
    active
  } = e;
  let T = useCallback(() => {
    if (type === 'face') {
      return {
        anchorOutlineColor: '',
        anchorBodyColor: '',
        anchorLabelColor: '',
        anchorClass: 'anchor--facePinAnchor--JxEdi'
      };
    }
    let e = 'anchor--anchor--P9sAD';
    resolved && (e = 'anchor--resolvedAnchor--iU0Ct anchor--anchor--P9sAD');
    let t = R3;
    let n = Dr;
    active && (n = '#0d99ff');
    let o = QQ;
    active && (o = Vm, e += ' anchor--activeAnchor--464Qe anchor--anchor--P9sAD');
    return {
      anchorOutlineColor: t,
      anchorBodyColor: n,
      anchorLabelColor: o,
      anchorClass: e
    };
  }, [type, resolved, active]);
  let {
    x: _x,
    y: _y
  } = d || e.offset || nm;
  let N = `translate(${_x}px, ${_y}px)`;
  let S = T();
  return jsx('div', {
    'aria-hidden': !0,
    'style': {
      transform: N,
      WebkitTransform: N
    },
    'className': `${S.anchorClass} ${Dm}`,
    'onPointerDown': y,
    'children': e.type === 'face' ? jsx('div', {
      className: 'anchor--commentPinIcon--6I08n'
    }) : jsxs(Fragment, {
      children: [jsx(nc, {
        isNew: e.isNew,
        bodyColor: S.anchorBodyColor,
        outlineColor: S.anchorOutlineColor,
        labelColor: S.anchorLabelColor
      }), jsx('span', {
        className: 'anchor--anchorLabel--SUXKt',
        style: {
          color: S.anchorLabelColor
        },
        children: e.label
      })]
    })
  });
}
function np(e) {
  let t = _$$H2(e.viewportInfo);
  let n = e.thread;
  let s = useContext(viewportNavigatorContext);
  let r = useCallback((e, n) => {
    let o = Point.add(e, n);
    return applyOffsetToViewport(t.current, o);
  }, [t]);
  let l = useCallback(e => {
    let n = s.getValidCommentsRect();
    let o = viewportToScreen(t.current, e);
    return rN(o, n);
  }, [s, t]);
  let d = selectCurrentUser();
  let m = useAuthedActiveCommunityProfile();
  let u = useSelector(e => e.selectedView).view === 'communityHub' ? m : d;
  return jsx(nu, {
    active: !0,
    computeDropLocation: r,
    entity: u,
    isInViewport: l,
    isNew: !0,
    offset: e.thread.anchorPosition || void 0,
    pageId: e.pageId,
    resolved: !1,
    setClientMeta: e.setClientMeta,
    thread: n,
    type: 'face',
    viewport: t,
    viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
  });
}
class nx extends PureComponent {
  constructor(e) {
    super(e);
    this.onMouseUpPos = e => {
      AU('mouseup', this.onMouseUpPos);
      AU('mousemove', this.onMouseMovePos);
      let {
        onDragEnd
      } = this.props;
      let {
        drag
      } = this.state;
      if (!drag) {
        this.setState({
          drag: null
        });
        return;
      }
      let o = performance.now() - drag.startedAt;
      onDragEnd && onDragEnd({
        start: drag.start,
        duration: o,
        position: e
      });
      this.setState({
        drag: null
      });
    };
    this.onMouseDownPos = e => {
      on('mouseup', this.onMouseUpPos);
      on('mousemove', this.onMouseMovePos);
      this.setState({
        drag: {
          start: e,
          startedAt: performance.now()
        }
      });
      let {
        onDragStart
      } = this.props;
      onDragStart && onDragStart({
        start: e,
        position: e,
        duration: 0
      });
    };
    this.onMouseMovePos = e => {
      let {
        onDragUpdate
      } = this.props;
      let {
        drag
      } = this.state;
      if (drag && onDragUpdate) {
        let o = performance.now() - drag.startedAt;
        onDragUpdate({
          start: drag.start,
          duration: o,
          position: e
        });
      }
    };
    this.state = {
      drag: null
    };
  }
  componentWillUnmount() {
    AU('mouseup', this.onMouseUpPos);
    AU('mousemove', this.onMouseMovePos);
  }
  render() {
    let e = this.state.drag ? {
      pointerEvents: 'none'
    } : void 0;
    return jsx('div', {
      'role': 'button',
      'tabIndex': -1,
      'style': {
        ...e,
        ...this.props.bounds,
        ...(this.props.useAbsolute && {
          position: 'absolute'
        })
      },
      'className': 'viewport_draggable--container---XH8-',
      'data-forward-events-to-fullscreen': 'true',
      'onMouseUp': this.props.onMouseUp,
      'onMouseDown': this.props.onMouseDown,
      'onMouseMove': this.props.onMouseMove,
      'onContextMenu': e => {
        desktopAPIInstance || (e.stopPropagation(), e.preventDefault());
      },
      'children': this.props.children
    });
  }
}
let nb = {
  onMouseDownPos: () => {},
  onMouseMovePos: () => {},
  onMouseUpPos: () => {}
};
function ny(e) {
  let t = useRef(null);
  let n = function (e) {
    let [t, n] = useState(nb);
    useEffect(() => {
      e.current && n({
        onMouseDownPos: e.current.onMouseDownPos,
        onMouseMovePos: e.current.onMouseMovePos,
        onMouseUpPos: e.current.onMouseUpPos
      });
    }, [e, n]);
    return function (e) {
      let {
        onMouseDownPos,
        onMouseMovePos,
        onMouseUpPos
      } = e;
      let i = useContext(viewportNavigatorContext);
      let s = useCallback((e, t) => {
        let n = i.getViewportInfo();
        return Point.subtract({
          x: e,
          y: t
        }, new Point(n.x, n.y));
      }, [i]);
      let r = useCallback(e => s(e.clientX, e.clientY), [s]);
      let l = useCallback((e, t) => {
        let n = r(e);
        onMouseUpPos && onMouseUpPos(n, t);
      }, [onMouseUpPos, r]);
      let d = useCallback((e, n) => {
        if (e.button && e.button !== 0) return;
        let o = r(e);
        onMouseDownPos && onMouseDownPos(o, n);
      }, [onMouseDownPos, r]);
      let m = useCallback((e, t) => {
        let o = r(e);
        onMouseMovePos && onMouseMovePos(o, t);
      }, [onMouseMovePos, r]);
      return useMemo(() => ({
        onMouseUp: l,
        onMouseDown: d,
        onMouseMove: m
      }), [l, d, m]);
    }(t);
  }(t);
  let s = useSelector(e => e.selectedView);
  return jsx(nx, {
    children: e.children,
    ref: t,
    bounds: e.bounds,
    onDragEnd: e.onDragEnd,
    onDragStart: e.onDragStart,
    onDragUpdate: e.onDragUpdate,
    onMouseDown: n.onMouseDown,
    onMouseMove: n.onMouseMove,
    onMouseUp: n.onMouseUp,
    useAbsolute: s.view === 'communityHub'
  });
}
let nj = parsePxInt(u24);
let nk = new _$$Z3(nj);
function nP(e) {
  let {
    thread,
    viewportBounds,
    onSubmit,
    discardAttempts,
    allowAttachments = !0
  } = e;
  let d = useDispatch();
  let m = useRef(null);
  let u = useCallback(() => {
    m.current && m.current.scrollIntoView({
      block: 'end'
    });
  }, [m]);
  let {
    anchorPosition
  } = t;
  let [f, _] = useState(null);
  let [v, x] = useState({
    x: 0,
    y: 0
  });
  let b = Point.add(anchorPosition, v, f);
  let y = useSelector(e => e.comments.activeDragTarget);
  let w = _$$_(m, b, viewportBounds, nk, _$$hx, e.pinOffset);
  useEffect(() => {
    u();
  }, [u]);
  let j = thread.id;
  let k = e.thread.comments.length;
  useEffect(() => {
    j !== NEW_COMMENT_ID && u();
  }, [u, j, k]);
  let [P, T] = useState(null);
  let M = useCallback(e => {
    d(Z5({
      messageMeta: e
    }));
  }, [d]);
  let E = useCallback(e => {
    d(_$$nb({
      attachmentId: e.id,
      attachment: e
    }));
  }, [d]);
  let N = useCurrentFileKey();
  let S = useStore();
  let D = useCallback((t, n) => {
    N && (d(_$$nb({
      attachmentId: t,
      attachment: null
    })), Object.keys(S.getState().comments.newComment.attachments || {}).length === 0 && e.editorRef.current?.focus(), n ? n.then(() => fileCommentAttachmentAPI.$$delete(N, t)) : fileCommentAttachmentAPI.$$delete(N, t));
  }, [d, N, S, e.editorRef]);
  let A = useCallback(() => {
    onSubmit(e.thread);
  }, [onSubmit, e.thread]);
  let R = _$$D();
  let O = useCallback(() => {
    let t = S.getState().comments.newComment;
    if (isMessageMetaEmpty(t.messageMeta)) {
      R();
      return;
    }
    (discardAttempts && e.editorRef.current?.isAllSelected() || isMessageMetaTooShort(t.messageMeta) && Object.keys(t.attachments || {}).length === 0) && (d(Z5({
      messageMeta: []
    })), R());
  }, [S, discardAttempts, e.editorRef, d, R]);
  let F = useSelector(e => e.comments.threads);
  let B = F[e.thread.id]?.state === BusyReadyState.BUSY;
  if (!w) return null;
  let {
    x: _x2,
    y: _y2
  } = w;
  let V = `translate(${_x2}px, ${_y2}px)`;
  let q = `calc(${e.viewportBounds.height}px - (2 * ${nj}px))`;
  let z = !0 === e.disablePointerEvents ? 'new_comment_container--translatedThreadContainerNoPointerEvents--9z1L5 new_comment_container--translatedThreadContainer--2xkOH' : `new_comment_container--translatedThreadContainer--2xkOH ${Dm}`;
  let Z = e.thread.id === NEW_COMMENT_ID ? 'new_comment_container--newCommentContainerNext--bCfo7 new_comment_container--threadContainer--XIsVX text--fontPos11--2LvXf text--_fontBase--QdLsd overflow--overflowYAuto--nfK38 overflow--momentumScroll--qtsu7' : 'new_comment_container--threadContainer--XIsVX text--fontPos11--2LvXf text--_fontBase--QdLsd overflow--overflowYAuto--nfK38 overflow--momentumScroll--qtsu7';
  let $ = getI18nString('comments.add_a_comment');
  return jsx(ny, {
    onDragUpdate: e => {
      _(Point.subtract(e.position, e.start));
    },
    onDragEnd: e => {
      f && (x(Point.add(f, v)), _(null));
    },
    bounds: viewportBounds,
    children: jsx('div', {
      style: {
        transform: V,
        WebkitTransform: V
      },
      className: z,
      children: jsxs(_$$c, {
        wiggleCount: e.discardAttempts || 0,
        onWiggle: e.onDiscardAttempt,
        children: [P && jsx(th, {
          editorRef: e.editorRef,
          container: m,
          initialLocation: P,
          closeEditor: () => {
            T(null);
          }
        }), jsx('div', {
          ref: m,
          className: `${Z} ${y ? 'new_comment_container--highlighted--wsvS9' : ''}`,
          style: {
            maxHeight: q
          },
          children: jsx(TabLoop, {
            children: jsx(_$$C2, {
              allowAttachments,
              attachments: e.thread.attachments,
              deleteAttachment: D,
              dispatch: d,
              editingExistingComment: !1,
              editorOnClear: e.editorOnClear,
              editorOnInsert: e.editorOnInsert,
              editorRef: e.editorRef,
              editorType: 'comment-editor-new',
              errorFallback: jsx(_$$e3, {
                type: 'new'
              }),
              fallback: null,
              fileKey: N,
              hideEmojiPicker: e.hideEmojiPicker,
              hyperlinkLocation: P,
              isDisabled: B,
              maxCommentLength: e.maxCommentLength,
              mentionables: e.mentionables,
              messageMeta: e.thread.messageMeta,
              mountInputFocused: !e.mountUnfocused,
              mountWithButtons: !0,
              onCancel: O,
              onComposeFocus: e.onComposeFocus,
              onSubmit: A,
              placeholderText: $,
              recordingKey: ComposerType.$$new,
              scrollToBottom: u,
              setHyperlinkEditorRef: lQ,
              setHyperlinkLocation: T,
              setIsEditorFocused: e.setIsEditorFocused,
              submitText: getI18nString('comments.post'),
              threadId: NEW_COMMENT_ID,
              threadPosition: e.thread.threadPosition,
              typeahead: e.typeahead,
              updateAttachment: E,
              updateMessage: M,
              user: e.user,
              viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
            })
          })
        })]
      })
    })
  });
}
function nI(e) {
  let t = useSelector(e => e.comments.newComment.discardAttempt);
  let n = useRef(null);
  let s = useCallback(() => {
    n.current?.selectAll();
  }, [n]);
  let r = memoizedRect(e.viewportInfo);
  return jsxs('div', {
    children: [jsx(np, {
      thread: e.thread,
      pageId: e.pageId,
      viewportInfo: e.viewportInfo,
      viewportPositionFromClientPosition: e.viewportPositionFromClientPosition,
      setClientMeta: e.setClientMeta
    }), !e.hideComposer && jsx(nP, {
      allowAttachments: e.allowAttachments,
      discardAttempts: t,
      editorOnClear: e.editorOnClear,
      editorOnInsert: e.editorOnInsert,
      editorRef: n,
      hideEmojiPicker: e.hideEmojiPicker,
      maxCommentLength: e.maxCommentLength,
      mentionables: e.mentionables,
      mountUnfocused: e.mountUnfocused,
      onComposeFocus: e.onComposeFocus,
      onDiscardAttempt: s,
      onSubmit: e.onSubmit,
      pageId: e.pageId,
      pinOffset: e.pinOffset,
      setClientMeta: e.setClientMeta,
      setIsEditorFocused: e.setIsEditorFocused,
      thread: e.thread,
      typeahead: e.typeahead,
      user: e.user,
      viewportBounds: r,
      viewportInfo: e.viewportInfo,
      viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
    })]
  });
}
let nN = 'comment_selection_box--selectionBox--bg--z';
function nS(e) {
  let t = viewportToScreen(e.viewportInfo, e.pinCanvasPosition);
  let n = viewportToScreen(e.viewportInfo, e.selectionBoxAnchorCanvasPosition);
  let [i, s] = useState(void 0);
  let [r, l] = useState(void 0);
  let [d, c] = useState(n.x - 10);
  let [m, u] = useState(n.y - 10);
  let [p, h] = useState(0);
  let [f, _] = useState(0);
  let [g, v] = useState('');
  let x = fG();
  let b = useCallback(() => {
    s({
      mousePosition: e.selectionBoxAnchorCanvasPosition,
      startZoomScale: e.viewportInfo.zoomScale
    });
    c(n.x - 10 - 2500);
    u(n.y - 10 - 2500);
    h(5e3);
    _(5e3);
    v('translate(2500px, 2500px');
    l(x(e.pinCanvasPosition, e.nodeId) || void 0);
  }, [e.nodeId, e.pinCanvasPosition, e.selectionBoxAnchorCanvasPosition, e.viewportInfo, n, s, l, c, u, h, _, v, x]);
  let {
    onSetNewSelectionBoxAnchor,
    viewportPositionFromClientPosition
  } = e;
  let w = useCallback(t => {
    if (!i) return;
    let o = nD(t.clientX, t.clientY, viewportPositionFromClientPosition, e.viewportInfo, r);
    s({
      mousePosition: o,
      startZoomScale: i.startZoomScale
    });
    let a = viewportToScreen(e.viewportInfo, o);
    let l = a.x - n.x + 2500;
    let d = a.y - n.y + 2500;
    v(`translate(${l}px, ${d}px)`);
  }, [i, s, v, r, n.x, n.y, viewportPositionFromClientPosition, e.viewportInfo]);
  let j = useCallback((e, t) => {
    let n = viewportToScreen(e, t);
    s(void 0);
    l(void 0);
    c(n.x - 10);
    u(n.y - 10);
    h(0);
    _(0);
    v('');
  }, [s, l, c, u, h, _, v]);
  let k = useCallback(t => {
    if (!i) return;
    let n = nD(t.clientX, t.clientY, viewportPositionFromClientPosition, e.viewportInfo, r);
    onSetNewSelectionBoxAnchor(n);
    j(e.viewportInfo, n);
  }, [i, r, onSetNewSelectionBoxAnchor, viewportPositionFromClientPosition, j, e.viewportInfo]);
  useEffect(() => {
    i || (c(n.x - 10), u(n.y - 10));
  }, [n, i]);
  useEffect(() => {
    i && i.startZoomScale !== e.viewportInfo.zoomScale && j(e.viewportInfo, e.selectionBoxAnchorCanvasPosition);
  }, [i, e.viewportInfo, e.selectionBoxAnchorCanvasPosition, j]);
  let P = i ? viewportToScreen(e.viewportInfo, i.mousePosition) : n;
  let I = Math.min(t.x, P.x);
  let T = Math.min(t.y, P.y);
  let M = Math.max(t.x - I, P.x - I);
  let E = Math.max(t.y - T, P.y - T);
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: nN,
      style: {
        left: I,
        top: T,
        width: M,
        height: E
      }
    }), e.canUpdateSelectionBoxAnchor && jsx(RecordableDiv, {
      role: 'button',
      tabIndex: -1,
      className: 'comment_selection_box--selectionBoxAnchor--6twQJ',
      style: {
        left: d,
        top: m,
        width: p,
        height: f
      },
      onMouseDown: b,
      onMouseMove: w,
      onMouseUp: k,
      dataTestId: 'comment-selection-box-anchor',
      recordingKey: 'commentSelectionBox.anchor',
      children: jsx('div', {
        className: 'comment_selection_box--selectionBoxAnchorIcon--iMwhF',
        style: {
          transform: g
        }
      })
    })]
  });
}
function nD(e, t, n, o, a) {
  let i = n(new Point(e, t));
  let s = applyOffsetToViewport(o, i);
  if (!a) return new Point(s.x, s.y);
  let r = clampPointToBounds(s, a);
  return new Point(r.x, r.y);
}
function nL(e) {
  let t = selectUser();
  let n = useDispatch();
  let a = useSelector(e => e.comments.typeahead);
  return jsx(nI, {
    dispatch: n,
    editorOnClear: e.editorOnClear,
    editorOnInsert: e.editorOnInsert,
    hideComposer: e.hideComposer,
    hideEmojiPicker: e.hideEmojiPicker,
    maxCommentLength: e.maxCommentLength,
    mentionables: e.mentionables,
    mountUnfocused: e.mountNewCommentUnfocused,
    onComposeFocus: e.onComposeFocus,
    onSubmit: e.submitNewComment,
    pageId: e.pageId,
    pinOffset: e.pinOffset,
    setClientMeta: e.setClientMeta,
    setIsEditorFocused: e.setIsEditorFocused,
    thread: e.thread,
    typeahead: a,
    user: t,
    viewportInfo: e.viewportInfo,
    viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
  });
}
function nR({
  viewportBounds: e,
  isCommunityMentions: t = !1,
  children: n,
  activeDragTarget: a
}) {
  return jsx('div', {
    'data-forward-events-to-fullscreen': !0,
    'className': `${a ? 'comments_modal--detailsContainerToFront--mQO8y comments_modal--detailsContainer--zHNy9' : 'comments_modal--detailsContainer--zHNy9'} ${Uu}`,
    'style': {
      ...(t && {
        position: 'absolute'
      }),
      top: e.y,
      left: e.x,
      height: e.height,
      width: e.width
    },
    'children': n
  });
}
function nO(e) {
  let t = useDispatch();
  let n = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let s = _B();
  let r = _$$eW();
  let l = useMemo(() => vl(n, e.thread, !0, r.paddingRight), [e.thread, n, r.paddingRight]);
  let d = getSelectedView();
  let m = d.view === 'communityHub';
  let u = _$$eR(e.thread.id);
  let p = useRef(null);
  let f = useRef(null);
  let {
    onClear
  } = s;
  let {
    submitReply,
    submitNewComment
  } = e;
  let b = useCallback(e => {
    submitReply(e);
    onClear();
  }, [submitReply, onClear]);
  let y = useCallback(() => {
    submitNewComment();
    onClear();
  }, [submitNewComment, onClear]);
  let C = useSelector(e => e.comments.editingComment);
  let w = useSelector(e => e.comments.activeDragTarget);
  let P = _$$i3();
  let T = useCallback(() => p.current?.visible ? (p.current.clearDecorators(), !0) : P ? (Dp(), !0) : !!C || (t(UU()), !0), [t, C, P]);
  O1(T, KD.MODAL);
  let {
    pinOffset
  } = e;
  let E = useMemo(() => {
    if (!pinOffset) return _$$hx;
    let {
      width,
      height
    } = pinOffset;
    return {
      x: width + _$$hx.x,
      y: _$$hx.y - height
    };
  }, [pinOffset]);
  let N = _$$y() && l.sidebarItemType === ThreadType.FEED_POST;
  let S = m ? _$$j : zW({
    feedPostUuid: N ? l.feedPostPublicUuid : void 0
  });
  let D = useCallback(e => {
    let t = e.comments[0].client_meta;
    let n = e.comments[0].client_meta.selection_box_anchor;
    let o = Point.subtract(n, t);
    return Point.add(e.canvasPosition, o);
  }, []);
  let A = useSelector(e => e.comments.newComment);
  let L = useCallback(e => {
    if (u) {
      t(a$({
        selectionBoxAnchor: e
      }));
    } else {
      if (!l.comments[0].client_meta?.selection_box_anchor) return;
      let n = {
        ...l.comments[0].client_meta
      };
      if (l.comments[0].client_meta.in_frame) {
        let t = D(l);
        let o = Point.subtract(e, t);
        n.selection_box_anchor = Point.add(n.selection_box_anchor, o);
      } else {
        n.selection_box_anchor = e;
      }
      t(hY({
        thread: l,
        clientMeta: n
      }));
    }
  }, [t, l, u, D]);
  let R = d.view === 'communityHub';
  let F = getUserId();
  let B = selectUser();
  let U = useSelector(e => e.comments);
  let H = d.view === 'communityHub';
  let V = useMemo(() => d.view === 'communityHub' && d.subView === 'hubFile' && _$$t3(d.fullscreenState), [d]);
  let q = null;
  u ? q = A.selectionBoxAnchor : l.comments[0].client_meta?.selection_box_anchor && (l.comments[0].client_meta?.in_frame, q = l.selectionAnchorCanvasPosition ?? l.boundingBoxAnchorCanvasPosition ?? null);
  let z = !!useSubscription(FileCanEdit(u ? null : {
    key: e.thread.key
  })).unwrapOr(!1);
  let Z = F === l.comments[0]?.user_id;
  return n === null ? null : jsxs(Fragment, {
    children: [jsx('div', {
      className: `comments_modal--overlay--1hWXV ${w ? 'comments_modal--dimBackground--Vyo3f' : ''}`
    }), jsxs(nR, {
      viewportBounds: n,
      isCommunityMentions: m,
      activeDragTarget: w,
      children: [l.canvasPosition && q && jsx(nS, {
        nodeId: l.comments[0]?.client_meta?.node_id,
        selectionBoxAnchorCanvasPosition: q,
        pinCanvasPosition: l.canvasPosition,
        viewportInfo: n,
        onSetNewSelectionBoxAnchor: L,
        viewportPositionFromClientPosition: e.viewportPositionFromClientPosition,
        canUpdateSelectionBoxAnchor: !l.boundingBoxAnchorCanvasPosition && (u || Z || z)
      }), u ? jsx(nL, {
        editorOnClear: s.editorOnClear,
        editorOnInsert: s.editorOnInsert,
        hideComposer: e.hideComposer,
        hideEmojiPicker: R,
        maxCommentLength: e.maxCommentLength,
        mentionables: S,
        mountNewCommentUnfocused: e.mountNewCommentUnfocused,
        onComposeFocus: e.onComposeFocus,
        pageId: e.pageId,
        pinOffset: E,
        setClientMeta: e.setClientMeta,
        setIsEditorFocused: s.setIsEditorFocused,
        submitNewComment: y,
        thread: l,
        viewportInfo: n,
        viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
      }) : l.sidebarItemType === ThreadType.COMMENT_THREAD || l.sidebarItemType === ThreadType.FEED_POST && _$$y() ? jsx(nr, {
        commentCreationDisabled: e.commentCreationDisabled,
        comments: U,
        disableDragging: H && !V,
        dispatch: t,
        editorOnClear: s.editorOnClear,
        editorOnInsert: s.editorOnInsert,
        hideEmojiPicker: R,
        hideReactions: H,
        hideResolve: e.hideResolve || !isCommentStateActive(l.sidebarItemType),
        ignoreThreadContainerScrollOnLoad: H,
        isLoading: e.isLoading,
        mentionables: S,
        modalRef: f,
        mountUnfocused: e.mountNewCommentUnfocused,
        nextThread: e.nextThread,
        onComposeFocus: e.onComposeFocus,
        prevThread: e.prevThread,
        setIsEditorFocused: s.setIsEditorFocused,
        setIsPinned: e.setIsPinned,
        setResolved: e.setResolved,
        showDockToSideButton: !1,
        showEditedIndicators: H,
        submitReply: b,
        thread: l,
        updateCommentContent: e.updateCommentContent,
        useAbsolutePositioning: H && !V,
        user: B,
        viewportInfo: n,
        viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
      }) : void 0, jsx(wV, {
        decoratorsRef: p,
        onClear: s.onClear,
        onInsert: s.onInsert,
        position: l.threadPosition || void 0,
        isCommunityMentions: m
      })]
    })]
  });
}
function nF({
  renderDetailContainerInPortal: e,
  detailContainerPortal: t,
  ...n
}) {
  let a = jsx(nO, {
    ...n
  });
  return e ? t ? createPortal(a, t) : null : a;
}
class nV {
  constructor(e, t = 15) {
    this.eventProvider = e;
    this.dragMin = t;
    this.dragInfo = null;
    this._dragCallbacks = {};
    this._onMouseDownOverride = null;
    this.canvasPositionClick = (e, t) => this._onCanvasPositionClick?.(e, {
      replace: t
    });
    this.viewportPositionClick = (e, t) => this._onViewportPositionClick?.(e, {
      replace: t
    });
    this.onDown = e => {
      if (this.dragInfo = {
        id: `drag-at-${performance.now()}`,
        start: e,
        position: e
      }, this._onMouseDownOverride) {
        this._onMouseDownOverride(e);
        this.dragInfo.interrupted = !0;
        return;
      }
      this._dragCallbacks.onDragStart?.(this.dragInfo);
    };
    this.onUp = (e, t) => {
      if (!this.dragInfo) {
        this._onViewportPositionClick?.(e, t);
        return;
      }
      if (this.dragInfo.interrupted) return;
      let n = this.dragInfo;
      if (this.dragInfo = null, !(Point.distance(e, n.start) > this.dragMin) || this._dragCallbacks.canDrag && !this._dragCallbacks.canDrag()) {
        this._dragCallbacks.onDragCancel?.(n.id);
        this._onViewportPositionClick?.(e, t);
        return;
      }
      this._dragCallbacks.onDragEnd?.(n);
    };
    this.onMove = e => {
      this.dragInfo && !this.dragInfo.interrupted && (this.dragInfo = {
        ...this.dragInfo,
        position: e
      }, this._dragCallbacks.onDragUpdate?.(this.dragInfo));
    };
  }
  set onCanvasPositionClick(e) {
    this._onCanvasPositionClick = e;
  }
  set onViewportPositionClick(e) {
    this._onViewportPositionClick = e;
  }
  set onMouseDown(e) {
    this._onMouseDownOverride = e;
  }
  set dragCallbacks(e) {
    this._dragCallbacks = e;
  }
  subscribe() {
    this.eventProvider.on('down', this.onDown);
    this.eventProvider.on('up', this.onUp);
    this.eventProvider.on('move', this.onMove);
    return () => {
      this.eventProvider.off('down', this.onDown);
      this.eventProvider.off('up', this.onUp);
      this.eventProvider.off('move', this.onMove);
    };
  }
  cancel() {
    this.dragInfo && (this.dragInfo.interrupted = !0, this._dragCallbacks.onDragCancel?.(this.dragInfo.id));
  }
}
function nq(e) {
  return {
    on: (t, n) => {
      let o = e[t];
      o && on(o, n);
    },
    off: (t, n) => {
      let o = e[t];
      o && AU(o, n);
    }
  };
}
let nz = nq({
  down: 'mousedown',
  up: 'mouseup',
  move: 'mousemove'
});
let nZ = nq({});
let n$ = {
  subscribe: !0,
  touchEvents: !1
};
function nK(e) {
  let t = useContext(viewportNavigatorContext);
  let n = pC();
  let s = gu();
  let r = fG();
  let l = useDispatch();
  let d = useSelector(e => e.selectedView.view);
  let {
    dragEventHandler
  } = e;
  let {
    canvasPositionClick
  } = c;
  let [u, p] = useState(null);
  let [f, _] = useState(null);
  let [g, v] = useState(null);
  let x = useMemo(() => d === 'communityHub' ? {} : {
    canDrag: () => l(UU()),
    onDragStart: e => {
      let n = applyOffsetToViewport(t.getRawViewportInfo(), e.start);
      v(n);
      p(applyOffsetToViewport(t.getRawViewportInfo(), e.position));
      _(r(n));
    },
    onDragCancel: () => {
      v(null);
      p(null);
      _(null);
    },
    onDragUpdate: e => {
      if (!g || !u) return;
      let n = applyOffsetToViewport(t.getRawViewportInfo(), e.position);
      if (f) {
        let e = clampPointToBounds(n, f);
        (e.x !== u.x || e.y !== u.y) && p(e);
        return;
      }
      p(n);
    },
    onDragEnd: e => {
      if (g && u) {
        if (n(applyOffsetToViewport(t.getRawViewportInfo(), e.start))) {
          s();
          v(null);
          p(null);
          _(null);
          return;
        }
        canvasPositionClick(u, !0) && l(a$({
          selectionBoxAnchor: applyOffsetToViewport(t.getRawViewportInfo(), e.start)
        }));
        v(null);
        p(null);
        _(null);
      }
    }
  }, [t, n, r, s, l, canvasPositionClick, d, u, p, f, _, g, v]);
  useEffect(() => {
    dragEventHandler.dragCallbacks = x;
  }, [x, dragEventHandler]);
  let b = u ? viewportToScreen(t.getRawViewportInfo(), u) : null;
  let y = g ? viewportToScreen(t.getRawViewportInfo(), g) : null;
  if (!b || !y) return null;
  let C = Math.min(y.x, b.x);
  let w = Math.min(y.y, b.y);
  let j = Math.max(y.x - C, b.x - C);
  let k = Math.max(y.y - w, b.y - w);
  return jsx('div', {
    className: nN,
    style: {
      left: C,
      top: w,
      width: j,
      height: k
    }
  });
}
let nW = {
  replace: !1
};
function nG(e) {
  let {
    requestToDeselectCommentPin,
    requestToAddDraftCommentPin
  } = e;
  let s = getBasicViewportRect();
  let r = useSelector(e => e.selectedView.view);
  let d = useAtomWithSubscription(_$$R);
  let c = void 0 !== e.isActiveCommentPinned ? e.isActiveCommentPinned : d;
  let m = useSelector(e => e.comments.editingComment);
  let u = useSelector(e => e.comments.emojiPicker);
  let p = useDispatch();
  let {
    activeId,
    commentCreationDisabled
  } = e;
  let v = useSelector(e => e.mirror.appModel.currentTool) === DesignGraphElements.COMMENTS && r !== 'fullscreen';
  let x = function (e, t, n, o, s) {
    let {
      requestToDeselectCommentPin: _requestToDeselectCommentPin,
      eventPreferences,
      allowCompose,
      requestToAddDraftCommentPin: _requestToAddDraftCommentPin
    } = o || {};
    let m = useContext(viewportNavigatorContext);
    let u = pC();
    let p = gu();
    let f = useDispatch();
    let _ = getObservableValue(AppStateTsApi?.singleSlideView().focusedNodeId, null);
    let v = useRef(_);
    useEffect(() => {
      _ !== v.current && (v.current = _, f(UU()));
    }, [_, f]);
    let x = useCallback((o, a) => {
      if (e && (allowCompose || !t)) return _requestToDeselectCommentPin ? !0 !== a && (_requestToDeselectCommentPin(), !0) : (n && n(!1), !f(UU()) || !0 !== a);
    }, [e, allowCompose, t, _requestToDeselectCommentPin, n, f]);
    let {
      touchEvents
    } = eventPreferences || {};
    let y = useCallback((e, t) => {
      let n = viewportToScreen(m.getViewportInfo(), e);
      let {
        replace
      } = t || nW;
      if (!x(n, replace) && (!touchEvents || replace) && rN(n, m.getValidCommentsRect())) {
        if (u(e)) {
          p();
          return;
        }
        _requestToAddDraftCommentPin ? _requestToAddDraftCommentPin?.({
          x: n.x,
          y: n.y,
          width: 32 * 1.15,
          height: 32 * 1.15
        }) : (f(vV({
          anchorPosition: e
        })), f(CX()));
        return e;
      }
    }, [x, _requestToAddDraftCommentPin, touchEvents, m, u, p, f]);
    let C = useCallback((e, t) => y(applyOffsetToViewport(m.getRawViewportInfo(), e), t), [m, y]);
    return function (e, t, n, o, i, s) {
      let {
        touchEvents,
        subscribe
      } = {
        ...n$,
        ...(o || {})
      };
      let d = useCallback(() => new nV(touchEvents ? nZ : nz), [touchEvents]);
      let [c, m] = useState(() => d());
      useEffect(() => {
        m(d());
      }, [d]);
      useEffect(() => subscribe ? c.subscribe() : () => {}, [c, subscribe]);
      useEffect(() => {
        touchEvents && i && s?.current ? (i.updateTapGestureRecognizer(s.current, e => {
          t(e);
        }), i.updateMultiTouchLongPressGestureRecognizer(s.current, e => {
          t(e, {
            replace: !0
          });
        }, 1)) : (c.onCanvasPositionClick = e, c.onViewportPositionClick = t);
      }, [e, t, c, touchEvents, i, s]);
      useEffect(() => {
        c.onMouseDown = n;
      }, [n, c]);
      return c;
    }(y, C, allowCompose ? null : x, eventPreferences, useContext(_$$W2), s);
  }(activeId, c, e.setIsPinned, {
    requestToAddDraftCommentPin,
    eventPreferences: {
      touchEvents: e.preferTouchOverMouseForComments
    },
    allowCompose: !0 !== commentCreationDisabled || v,
    requestToDeselectCommentPin
  }, e.gestureCanvasRef);
  let b = createRef();
  let y = useCallback(t => {
    if (t.keyCode === KeyCodes.ESCAPE && (x.cancel(), !m && e.activeId)) {
      u && u.visible && p(RI({
        visible: !1
      }));
    }
  }, [p, m, e.activeId, u, x]);
  let C = useHandleKeyboardEvent(e.recordingKey, 'keydown', y);
  let w = useCallback(e => {
    C(e.event);
  }, [C]);
  let j = useRef();
  if (useEffect(() => {
    if (j.current && e.mode === 'details' && !e.activeId) {
      j.current();
    }
  }, [e.mode, j, e.activeId]), !s) {
    return null;
  }
  let {
    x: _x3,
    y: _y3,
    width,
    height
  } = s;
  let E = {
    left: e.positionRelativeToCanvas ? 0 : _x3,
    top: e.positionRelativeToCanvas ? 0 : _y3,
    width,
    height
  };
  return jsx(KeyboardReceiver, {
    name: 'comments-view-canvas',
    focusOnMount: !1,
    propagateKeyboardFocus: !0,
    handleKeyDown: w,
    ref: b,
    focusFunctionRef: j,
    style: {
      position: 'absolute'
    },
    children: jsx('div', {
      'data-forward-events-to-fullscreen': !0,
      'className': 'comments_view--viewContainer--gpOsy comments_view--_container--bDxcy',
      'children': jsxs('div', {
        'data-allow-component-drop': !0,
        'data-forward-events-to-fullscreen': !0,
        'className': 'comments_view--outerAnchorContainer--ppSFh comments_view--_container--bDxcy',
        'ref': e.forwardedRef,
        'style': E,
        'children': [jsx(nK, {
          dragEventHandler: x
        }), e.children]
      })
    })
  });
}
let nQ = forwardRef((e, t) => jsx(nG, {
  ...e,
  forwardedRef: t
}));
export function $$nX2(e) {
  let t = useRef(e);
  useEffect(() => {
    t.current = e;
  }, [e]);
  return useCallback(e => {
    let n = t.current;
    let o = n.find(t => t.id === e);
    if (o) {
      return function (e, t) {
        let n;
        if (!e.canvasPosition) return;
        let o = 1 / 0;
        t.forEach(t => {
          t.id !== e.id && t.canvasPosition && t.page === e.page && Point.distance(e.canvasPosition, t.canvasPosition) < o && (n = t, o = Point.distance(e.canvasPosition, t.canvasPosition));
        });
        return n;
      }(o, n);
    }
  }, [t]);
}
export function $$nY1(e, t, n) {
  if (e.comments.length === 0) return !1;
  let o = e.comments[0]?.user_id === n;
  let a = e.comments.some(e => e.user_id === n || F$(e).includes(n));
  return t.canEdit || o || a;
}
let nJ = e => {
  let t = Xr(_$$R);
  let n = trackFileEventWithUser();
  return useCallback(o => {
    t(o);
    o && n('Comment Pinned', {
      parentCommentId: e
    });
  }, [e, n, t]);
};
function n0(e) {
  let t;
  let {
    activeId
  } = e;
  let s = useContext(viewportNavigatorContext);
  let l = useSelector(e => e.selectedView.view === 'communityHub');
  let d = selectCurrentUser();
  let m = selectCurrentFile();
  let u = useSelector(e => e.selectedView.commentThreadId);
  let p = useDispatch();
  let h = useContext(hh);
  let g = h.filteredThreads;
  let v = WM(g, e.pageId, activeId, e.showOnlyParticipatingComments, e.hideInactiveComments);
  t = g.status;
  _$$t(e => {
    t === 'loaded' && e('comments_rendered');
  }, [t]);
  let x = hC(h.threads, []);
  let b = h.threads.status === 'loaded';
  let y = Le();
  let k = u && b && x.some(e => e.id === u);
  let T = !!u && b && !k && y;
  let E = _$$nq(u, b, activeId, x, s, e.requestToSelectCommentPin);
  useEffect(() => {
    (E || T) && p(clearSelectedViewCommentId());
  }, [E, T, p]);
  let S = uB(activeId, e.pageId);
  let D = zf(v, s.getViewportInfo());
  let [A, L] = useMemo(() => {
    let e = D.findIndex(e => e.id === activeId);
    return e === -1 ? [void 0, void 0] : [D[e - 1], D[e + 1]];
  }, [D, activeId]);
  let R = d?.id && S && m ? $$nY1(S, m, d.id) : null;
  let O = e.hideResolve || !R;
  let F = useRef(null);
  let B = useCallback(e => {
    if (F.current) {
      let t = F.current.getBoundingClientRect();
      return e.subtract(new Point(t.left, t.top));
    }
    return new Point(0, 0);
  }, []);
  let [U, H] = useState(null);
  let V = !(e.requestToSelectCommentPin && S?.id !== NEW_COMMENT_ID);
  let q = nJ(S?.id);
  return jsxs(Fragment, {
    children: [getFeatureFlags().comments_react ? jsx(eH, {
      activeThread: S,
      dragDisabledOverride: e.dragDisabledOverride,
      isCommunity: l,
      pageId: e.pageId,
      requestToDeselectCommentPin: e.requestToDeselectCommentPin,
      requestToSelectCommentPin: e.requestToSelectCommentPin,
      setActivePinSize: H,
      setClientMeta: e.setClientMeta,
      threads: v,
      viewportPositionFromClientPosition: B
    }) : jsx(IN, {
      activeThread: S,
      dragDisabledOverride: e.dragDisabledOverride,
      isCommunity: l,
      pageId: e.pageId,
      requestToDeselectCommentPin: e.requestToDeselectCommentPin,
      requestToSelectCommentPin: e.requestToSelectCommentPin,
      setActivePinSize: H,
      setClientMeta: e.setClientMeta,
      threads: v,
      viewportPositionFromClientPosition: B
    }), jsx(nQ, {
      ref: F,
      activeId,
      commentCreationDisabled: e.mode === 'pins' || e.commentCreationDisabled,
      gestureCanvasRef: e.gestureCanvasRef,
      mode: e.mode,
      positionRelativeToCanvas: e.positionRelativeToCanvas,
      preferTouchOverMouseForComments: e.preferTouchOverMouseForComments,
      recordingKey: 'commentsViewCanvas',
      requestToAddDraftCommentPin: e.requestToAddDraftCommentPin,
      requestToDeselectCommentPin: e.requestToDeselectCommentPin,
      setIsPinned: q,
      children: jsx(Fragment, {
        children: S && V && jsx(nF, {
          commentCreationDisabled: e.commentCreationDisabled,
          detailContainerPortal: e.detailContainerPortal,
          hideComposer: !!e.requestToAddDraftCommentPin,
          hideResolve: O,
          isLoading: e.isLoadingActiveThread,
          maxCommentLength: e.maxCommentLength,
          mountNewCommentUnfocused: e.mountNewCommentUnfocused,
          nextThread: L,
          onComposeFocus: e.onComposeFocus,
          pageId: e.pageId,
          pinOffset: U,
          prevThread: A,
          renderDetailContainerInPortal: e.renderDetailContainerInPortal,
          setClientMeta: e.setClientMeta,
          setIsPinned: q,
          setResolved: e.setResolved,
          submitNewComment: e.submitNewComment,
          submitReply: e.submitReply,
          thread: S,
          updateCommentContent: e.updateCommentContent,
          viewportPositionFromClientPosition: B
        })
      })
    })]
  });
}
export function $$n10(e) {
  let t = Qt(e.activeId);
  return jsxs(ErrorBoundaryCrash, {
    boundaryKey: 'FileCommentsOverlay',
    team: _$$e.WAYFINDING,
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    children: [jsx(_$$p, {
      featureFlag: 'mobile_reply_upsell',
      children: jsx(_$$T, {})
    }), jsx(n2, {
      ...e,
      usersOnFile: t
    })]
  });
}
function n2(e) {
  let t = wq();
  let n = _$$s();
  let s = useDispatch();
  let r = function () {
    let e = Vi();
    let t = useSelector(e => e.mirror.appModel.showComments);
    return e ? 'details' : !1 === t ? null : 'pins';
  }();
  let {
    pageId,
    modeOverride
  } = e;
  let c = useContext(viewportNavigatorContext);
  let m = H6(c, pageId);
  let f = I_().writeAPI;
  let g = useCallback(e => {
    if (!f) {
      console.error('Calling submitReply with no write API');
      return;
    }
    t.status === 'loaded' && t.data.find(t => t.id === e.threadId) && (e.onCommentValidationFailure = (t, o, a, i) => dB(f, s, t, o, a, i, e.uuid, n), s(lV({
      ...e,
      commentsWriteApi: f,
      commentsConfiguration: n
    })), handleAtomEvent({
      id: _$$w
    }));
  }, [s, t, f, n]);
  let C = useCallback(e => {
    if (!f) {
      console.error('Calling submitNewComment with no write API');
      return;
    }
    e.onCommentValidationFailure = (e, t, n, o) => _$$C(s, e, t, n, o);
    s(_v(e));
  }, [s, f]);
  let w = useSelector(e => e.selectedView);
  let j = Yi(w);
  let k = useSelector(e => e.selectedView.view === 'fullscreen');
  let I = useIsProgressBarHiddenOrLocked();
  let {
    isLoading
  } = useCurrentViewState();
  let M = modeOverride || r;
  let N = hC(t, []);
  d0(e.activeId, N, c, k, m);
  $P(e.activeId, N, c, modeOverride, M);
  let S = sc();
  let D = useCallback(e => {
    s(hY(e));
  }, [s]);
  let A = useCallback(e => {
    s(hx(e));
  }, [s]);
  if (isDevModeFocusViewActive() || k && (I || isLoading) || M === null || j) return null;
  let L = !k && !!S?.requestToSelectCommentPin && !!S?.requestToDeselectCommentPin && !!S?.requestToAddDraftCommentPin;
  return jsx(n0, {
    activeId: e.activeId,
    detailContainerPortal: e.detailContainerPortal,
    dragDisabledOverride: S?.shouldDisableCommentDrag,
    gestureCanvasRef: e.gestureCanvasRef,
    hideInactiveComments: !1,
    mode: M,
    pageId: e.pageId,
    positionRelativeToCanvas: !1,
    preferTouchOverMouseForComments: L,
    renderDetailContainerInPortal: e.renderDetailContainerInPortal,
    requestToAddDraftCommentPin: S?.requestToAddDraftCommentPin,
    requestToDeselectCommentPin: S?.requestToDeselectCommentPin,
    requestToSelectCommentPin: S?.requestToSelectCommentPin,
    setClientMeta: D,
    setResolved: A,
    showOnlyParticipatingComments: e.showOnlyParticipatingComments,
    showResolvedComments: e.showResolvedComments,
    submitNewComment: () => {
      m();
      handleAtomEvent({
        id: _$$w
      });
    },
    submitReply: g,
    updateCommentContent: C
  });
}
n0.displayName = 'CommentsOverlay';
export const $2 = $$n10;
export const To = $$nY1;
export const $I = $$nX2;