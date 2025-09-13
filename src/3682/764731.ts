import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useState, useRef, useMemo, Component, memo, useCallback, useId } from "react";
import { useSelector, useDispatch, connect, useStore } from "react-redux";
import { yF, oI, rO, cb, Pp, Zq, a6 } from "../905/989765";
import { selectCurrentFile, useCurrentFileKey } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { AM, eo as _$$eo, qr } from "../figma_app/637336";
import { W5, bF } from "../figma_app/120294";
import { $E, w as _$$w, bU, GA } from "../figma_app/120529";
import u from "classnames";
import { isIpadDevice, BrowserInfo } from "../figma_app/778880";
import { getI18nString, renderI18nText } from "../905/303541";
import { aV } from "../figma_app/722362";
import { w$ } from "../9410/635666";
import { N as _$$N } from "../3682/343085";
import { KindEnum } from "../905/129884";
import { m as _$$m } from "../905/99004";
import { Id, kg, fI } from "../figma_app/626177";
import { A as _$$A } from "../3276/51271";
import { K as _$$K } from "../3276/330497";
import { QH } from "../9410/132424";
import { U1 } from "../figma_app/343967";
import { d as _$$d } from "../905/976845";
import { ButtonPrimitive } from "../905/632989";
import { I as _$$I } from "../905/932503";
import { buildUploadUrl } from "../figma_app/169182";
import { JL, We } from "../figma_app/165623";
import { XHR } from "../905/910117";
import { oB, j7 } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { trackFileEvent } from "../figma_app/314264";
import { W as _$$W } from "../905/236903";
import { WO, X0, Mw, HJ, nN } from "../figma_app/122682";
import { mt, Wl } from "../figma_app/318520";
import { Ro } from "../figma_app/805373";
import { L as _$$L } from "../905/671373";
import { Badge, BadgeColor } from "../figma_app/919079";
import { SvgComponent } from "../905/714743";
import { gR } from "../figma_app/976345";
import { Um } from "../905/848862";
import { j as _$$j } from "../905/834956";
import { K0 } from "../figma_app/778125";
import { A as _$$A2 } from "../svg/789982";
import { A as _$$A3 } from "../svg/918452";
import { Y as _$$Y } from "../9410/440393";
import { g as _$$g } from "../905/757007";
import { desktopAPIInstance } from "../figma_app/876459";
import { isEmptyObject } from "../figma_app/493477";
import { e as _$$e } from "../905/483726";
import { formatCount } from "../figma_app/930338";
import { P as _$$P } from "../905/347284";
import { Q as _$$Q } from "../3276/336897";
import { vQ, sK } from "../9410/124657";
import { h as _$$h } from "../figma_app/275739";
import { i as _$$i, S as _$$S } from "../3276/270077";
import { A as _$$A4 } from "../6828/364616";
import { A as _$$A5 } from "../6828/844411";
import { ev as _$$ev, YM } from "../9410/232922";
import { Label } from "../905/270045";
import { v as _$$v } from "../905/442517";
import { P as _$$P2 } from "../3276/355202";
import { L as _$$L2 } from "../905/473569";
import { useMemoShallow } from "../905/19536";
import { trackEventAnalytics } from "../905/449184";
import { parsePxNumber } from "../figma_app/783094";
import { Jn } from "../905/17223";
import { LoadingSpinner } from "../figma_app/858013";
import { VisualBellActions } from "../905/302958";
import { TrackedAnchor } from "../figma_app/831799";
import { Cf } from "../905/504727";
import { l6, c$ } from "../905/794875";
import { aHA } from "../figma_app/27776";
var p = u;
let b = "voice_widget--modal--xsQ2A";
let T = "voice_widget--show--O6ORx voice_widget--modal--xsQ2A";
let D = "voice_widget--topRow--O1wj-";
let R = "voice_widget--voiceModalPanel--KD-J1";
function j(e) {
  let {
    fileKey
  } = e;
  var {
    userIdsInCall
  } = W5(fileKey);
  let i = userIdsInCall.size;
  let n = aV();
  let l = selectCurrentUser();
  useEffect(() => {
    !isIpadDevice && l?.id && !userIdsInCall.has(l.id) && w$(i);
  }, [i, l?.id, userIdsInCall]);
  let c = !n && !isIpadDevice;
  return (_$$N({
    isVisible: c
  }), c) ? jsx("div", {
    className: p()(b, T),
    children: jsx(_$$m, {
      role: "region",
      children: jsx(Id, {
        className: R,
        children: jsxs("div", {
          className: D,
          children: [jsxs("div", {
            className: "voice_widget--joinModalCountGroup--zxI6Q",
            children: [jsx(_$$A.HeadphonesIcon, {
              className: QH,
              size: 24
            }), userIdsInCall.size]
          }), jsx(_$$K, {
            fileKey: e.fileKey,
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("collaboration.voice.join_conversation"),
            isJoinWidget: !0,
            "data-onboarding-key": "audio-nux-key",
            children: renderI18nText("collaboration.voice.join")
          })]
        })
      })
    })
  }) : jsx(Fragment, {});
}
let q = "captions_dialog--showGradient--ZAHRk";
let ee = "DROPDOWN_TYPE_CAPTIONS_DIALOG_TYPE_SIZE";
function et({
  caption: e,
  user: t
}) {
  let a = e.userId + "_" + e.timestamp;
  return jsxs("div", {
    className: "captions_dialog--captionRow--pgS-N",
    children: [jsxs("div", {
      children: [jsx(Ro, {
        className: "captions_dialog--avatar--ISexR",
        entity: {
          ...t,
          id: e.userId
        },
        size: 24
      }), jsx("div", {
        className: "captions_dialog--name--SmWv6",
        children: t ? t.name : e.userId
      })]
    }), e.text.map((e, t) => jsx("div", {
      className: "captions_dialog--paragraph--SjDQd",
      children: e.map((e, s) => jsx("div", {
        className: "captions_dialog--sentence--SJkHn",
        children: `${e} `
      }, a + "_" + t + "_" + s))
    }, a + "_" + t))]
  }, a);
}
let ea = () => ({
  small: {
    style: "captions_dialog--smallText--aUeBx",
    label: getI18nString("collaboration.voice.small")
  },
  medium: {
    style: "captions_dialog--mediumText--ODxEN",
    label: getI18nString("collaboration.voice.medium")
  },
  large: {
    style: "captions_dialog--largeText---t1d2",
    label: getI18nString("collaboration.voice.large")
  },
  x_large: {
    style: "captions_dialog--xlargeText--C60DA",
    label: getI18nString("collaboration.voice.x_large")
  }
});
let eo = Date.now();
function es({
  call: e
}) {
  let t = ea();
  let [a, n] = useState([]);
  let [r, c] = useState(t.small.style);
  let [_, u] = useState(!1);
  let [p, v] = useState(!1);
  let [m, h] = useState(!1);
  let N = selectCurrentFile();
  if (!N) throw Error("Open file required");
  let g = useSelector(e => e.voice.activeCall[N.key]);
  let f = useDispatch();
  let [O, w] = useState(null);
  let x = Um();
  let b = useRef(null);
  let T = !!(x && x.type === ee);
  let D = a.reduce((e, t) => e.add(t.userId), new Set());
  let R = bF(D, N.key).reduce((e, t) => (e[t.userID] = t, e), {});
  useEffect(() => {
    let t = e => {
      e && n(e);
    };
    e.audioCaptionStream.subscribe(t);
    return () => e.audioCaptionStream.unsubscribe(t);
  });
  useEffect(() => {
    O && O.scrollHeight - O.scrollTop - O.clientHeight < 150 && eo < Date.now() - 150 && O.scrollTo({
      top: O.scrollHeight - O.clientHeight,
      behavior: "smooth"
    });
  });
  useEffect(() => {
    O && !m && (O.scrollTop = O.scrollHeight - O.clientHeight);
  }, [O, m]);
  let j = !m && g;
  return jsxs("div", {
    className: ["captions_dialog--captionsDialog--gOIvh", r].join(" "),
    children: [jsx("div", {
      className: ["captions_dialog--topDivider--BlM0x captions_dialog--_divider--m8Skg", _ ? q : ""].join(" ")
    }), j && jsx("div", {
      className: "captions_dialog--scrollContainer--WuVOJ",
      ref: e => w(e),
      onScroll: e => {
        O && (v(0 != O.scrollHeight - O.scrollTop - O.clientHeight), u(0 !== O.scrollTop));
      },
      onWheel: e => {
        e.deltaY < 0 && (eo = Date.now());
      },
      children: jsx("div", {
        className: "captions_dialog--scrollContainerInner--db2cV",
        children: a.map(e => jsx(et, {
          caption: e,
          user: R[e.userId]
        }, e.timestamp))
      })
    }), j && jsx("div", {
      className: ["captions_dialog--bottomDivider--WBbo5 captions_dialog--_divider--m8Skg", p ? q : ""].join(" ")
    }), j && jsx(ButtonPrimitive, {
      onClick: () => O.scrollTo({
        top: O.scrollHeight - O.clientHeight,
        behavior: "smooth"
      }),
      className: `captions_dialog--scrollToBottomButton--SeU-4 ${p ? "captions_dialog--showScrollToBottomButton--Lc7Iy" : ""}`,
      children: renderI18nText("collaboration.voice.new_transcripts")
    }), jsxs("div", {
      className: "captions_dialog--header--SA3Wv",
      onClick: () => h(!m),
      children: [jsx(SvgComponent, {
        className: j ? "captions_dialog--closedCaptionsIconMaximized--N-lwT" : "captions_dialog--closedCaptionsIconMinimized--Ou0WE",
        svg: _$$A2
      }), jsx("span", {
        className: "captions_dialog--label---1DXk",
        children: renderI18nText("collaboration.voice.closed_captions")
      }), jsx(Badge, {
        text: getI18nString("collaboration.voice.beta"),
        className: "captions_dialog--betaTag--qFyxq",
        color: BadgeColor.BRAND
      }), jsx(K0, {
        svg: _$$A3,
        ref: b,
        className: "captions_dialog--typeSizeIcon--Xhxj-",
        onClick: e => {
          e.stopPropagation();
          f(gR({
            type: ee
          }));
        },
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("collaboration.voice.text_size")
      }), b.current && T && jsx(_$$j, {
        dispatch: f,
        items: Object.keys(t).map(e => ({
          name: e,
          displayText: t[e].label,
          className: [t[e].style, "captions_dialog--dropdownTextOptions--ma0Ue"].join(" "),
          isChecked: t[e].style === r
        })),
        showPoint: !0,
        parentRect: b.current?.getBoundingClientRect(),
        onSelectItem: e => {
          e.name && c(t[e.name].style);
        },
        minWidth: 96
      }), jsx("div", {
        style: {
          clear: "both"
        }
      })]
    })]
  });
}
let ed = [$E.WARNING_RECV_AUDIO_DECODE_FAILED, $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW, $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW, $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW];
function e_(e) {
  let t;
  if (isEmptyObject(e.activeWarnings)) return null;
  for (let a of ed) if (e.activeWarnings[a]) {
    t = e.activeWarnings[a];
    break;
  }
  return t ? jsx("div", {
    className: e.className,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": t,
    "data-tooltip-show-below": !0,
    "data-tooltip-timeout-delay": 50,
    children: jsx(_$$e, {
      className: "voice_warning_icon--icon--NvhIw",
      "aria-label": t
    })
  }) : null;
}
function eu(e) {
  switch (e) {
    case $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW:
      return getI18nString("collaboration.voice.audio_input_too_low_warning");
    case $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW:
      return getI18nString("collaboration.voice.speaker_volume_too_low_warning");
    case $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW:
    case $E.WARNING_RECV_AUDIO_DECODE_FAILED:
      return getI18nString("collaboration.voice.poor_connection_warning");
    default:
      return null;
  }
}
function ep(e) {
  let {
    callEvent,
    onClick,
    notificationUserId
  } = e.notification;
  let [l, r] = useState(null);
  let [d, u] = useState(!1);
  let p = useRef();
  let v = useRef(callEvent);
  let [m, h] = useState();
  let N = useSelector(e => e.multiplayer.allUsers);
  let I = useSelector(e => e.voice.voiceUsersById);
  let g = useMemo(() => {
    if (notificationUserId) {
      if (notificationUserId in I) return I[notificationUserId].name;
      let e = N.find(e => e.userID === notificationUserId);
      if (e) return e.name;
    }
    return "User";
  }, [notificationUserId, I, N]);
  let O = m?.href;
  let w = useMemo(() => O ? "a" : "div", [O]);
  if (useEffect(() => () => {
    p?.current && clearTimeout(p.current);
  }, []), useEffect(() => {
    let e = () => {
      u(!1);
      r(null);
    };
    m ? (u(!0), r(null), m.persist || r(setTimeout(() => {
      e();
    }, 2e3))) : e();
  }, [m]), useEffect(() => () => {
    l && clearTimeout(l);
  }, [l]), useEffect(() => {
    switch (v.current = callEvent, callEvent) {
      case $E.CONNECTED:
        h({
          msg: getI18nString("collaboration.voice.connected"),
          type: _$$w.SUCCESS,
          icon: jsx(_$$g, {})
        });
        break;
      case $E.CONNECTED_WITH_MIC_DISABLED:
        h({
          msg: getI18nString("collaboration.voice.connected_check_your_microphone_permissions_to_start_chatting"),
          allowMultiLine: !0,
          type: _$$w.SUCCESS
        });
        break;
      case $E.CONNECTING:
        h({
          msg: getI18nString("collaboration.voice.connecting"),
          type: _$$w.PENDING,
          persist: !0
        });
        break;
      case $E.ERROR:
        h({
          msg: getI18nString("collaboration.voice.something_went_wrong_try_again"),
          type: _$$w.ERROR,
          persist: !0
        });
        break;
      case $E.CALL_INACTIVE:
        h({
          msg: getI18nString("collaboration.voice.things_got_quiet_for_awhile_so_we_ended_the_conversation"),
          type: _$$w.PENDING,
          persist: !1,
          allowMultiLine: !0
        });
        break;
      case $E.TOKEN_WILL_EXPIRE:
        h({
          msg: getI18nString("collaboration.voice.it_s_been_quiet_for_a_while_so_we_ll_end_the_conversation_in_20_seconds_n_click_to_stay_on"),
          type: _$$w.MESSAGE,
          persist: !0,
          onClick,
          allowMultiLine: !0
        });
        break;
      case $E.TOKEN_EXPIRED:
        h({
          msg: getI18nString("collaboration.voice.audio_has_timed_out_click_to_rejoin"),
          type: _$$w.ERROR,
          persist: !0,
          onClick
        });
        break;
      case $E.USER_JOINED:
        h({
          truncatedPrefix: g,
          msg: getI18nString("collaboration.voice.joined"),
          type: _$$w.MESSAGE
        });
        break;
      case $E.USER_LEFT:
        h({
          truncatedPrefix: g,
          msg: getI18nString("collaboration.voice.left"),
          type: _$$w.MESSAGE
        });
        break;
      case $E.ERROR_MICROPHONE_PERMISSIONS_DENIED:
        let e = getI18nString("collaboration.voice.enable_mic_access_in_your_browser_to_join");
        desktopAPIInstance && (e = getI18nString("collaboration.voice.enable_mic_access_for_the_figma_app_to_join"));
        h({
          msg: e,
          type: _$$w.ERROR,
          href: AM.TROUBLESHOOT
        });
        break;
      case $E.WARNING_MICROPHONE_LEVELS_HIGH_AND_MUTED:
        h({
          msg: getI18nString("collaboration.voice.want_to_unmute_click_the_mic"),
          type: _$$w.PENDING
        });
        break;
      case $E.ERROR_ON_LEAVE:
        h({
          msg: getI18nString("collaboration.voice.couldn_t_leave_please_try_again"),
          type: _$$w.ERROR
        });
        break;
      case $E.SYSTEM_INCOMPATIBLE:
        h({
          msg: getI18nString("collaboration.voice.figma_audio_won_t_work_on_your_device_learn_why"),
          type: _$$w.ERROR,
          persist: !0,
          allowMultiLine: !0,
          href: AM.TROUBLESHOOT
        });
        break;
      case $E.DISCONNECTING:
      case $E.RECONNECTING:
        p.current = setTimeout(() => {
          v.current === $E.RECONNECTING && (h({
            msg: getI18nString("collaboration.voice.attempting_to_reconnect"),
            type: _$$w.PENDING,
            persist: !0
          }), p.current = void 0);
        }, 1500);
        break;
      case $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW:
      case $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW:
      case $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW:
      case $E.WARNING_RECV_AUDIO_DECODE_FAILED:
        let s = eu(callEvent);
        if (!s) break;
        h({
          msg: s,
          type: _$$w.WARNING,
          allowMultiLine: !0
        });
    }
  }, [callEvent]), void 0 === callEvent) return jsx(Fragment, {});
  let x = ["expanded" === e.widgetState ? "voice_flash_notifications--flashExpandedList--NkNnw voice_flash_notifications--flash--8i3SH" : "voice_flash_notifications--flash--8i3SH", d ? function () {
    switch (m?.type) {
      case _$$w.ERROR:
        return "voice_flash_notifications--flashError--6fLPW";
      case _$$w.WARNING:
        return "voice_flash_notifications--flashWarning--tdCit";
      case _$$w.MESSAGE:
        return "voice_flash_notifications--flashMessage--lt-k-";
      case _$$w.SUCCESS:
        return "voice_flash_notifications--flashSuccess--hmpUM";
      case _$$w.PENDING:
      default:
        return "voice_flash_notifications--flashPending--Hzt7W";
    }
  }() : "voice_flash_notifications--flashHidden--uYI96"];
  return jsx(kg, {
    onClick: m?.onClick,
    className: x.join(" "),
    children: jsxs(w, {
      className: "voice_flash_notifications--flashNotificationMessageWrap--eXghM voice_flash_notifications--flashNotificationMessageBase--wxFPN",
      target: "_blank",
      rel: "noopener",
      href: m?.href,
      children: [m?.truncatedPrefix && jsx("span", {
        className: "voice_flash_notifications--truncatedPrefix---gMQI ellipsis--ellipsis--Tjyfa",
        children: m?.truncatedPrefix
      }), m?.icon, m?.msg]
    })
  });
}
let eg = "active_speakers_row--name--LtwVz ellipsis--ellipsis--Tjyfa";
let ef = "active_speakers_row--pos1--88uza active_speakers_row--pos--D59NJ";
let eO = "active_speakers_row--fadeOut--2tZhG";
let ew = "active_speakers_row--willFadeIn--fFCX6";
let ex = "active_speakers_row--activeSpeakerRowAvatar--zKOXb";
let eb = (e, t) => e.userID === t.userID;
let eT = (e, t) => {
  let a = e.sort((e, t) => e.userID > t.userID ? -1 : 1).map(e => e.userID);
  let o = t.sort((e, t) => e.userID > t.userID ? -1 : 1).map(e => e.userID);
  if (a.length !== o.length) return !0;
  for (let e = 0; e < a.length; e++) if (a[e] !== o[e]) return !0;
  return !1;
};
let eD = (e, t) => {
  let a = t.filter(t => !e.find(e => eb(e, t)));
  let o = e.filter(e => !t.find(t => eb(e, t)));
  let s = e.map(e => o.indexOf(e) > -1 ? e : void 0);
  let i = e.map(e => -1 === o.indexOf(e) ? e : a.shift()).filter(e => !!e);
  a.length > 0 && i.push(...a);
  t.length > 1 && 1 === e.length && (s[1] = e[0]);
  return {
    fadeOut: s,
    active: i
  };
};
let eR = connect((e, t) => ({
  ...t,
  observingSessionID: e.multiplayer.observingSessionID,
  presenterSessionID: e.multiplayer.presenterSessionID ?? null
}))(function ({
  user: e,
  classNames: t,
  observingSessionID: a,
  presenterSessionID: s,
  call: i
}) {
  let n;
  let l = (Array.isArray(t) ? [...t, ex] : [t, ex]).join(" ");
  let r = _$$eo();
  let d = jsx(Ro, {
    entity: {
      ...e,
      id: e.userID
    },
    className: "active_speakers_row--activeSpeakerRowAvatarWithoutMultiplayer--W-S0A",
    size: 24
  }, e.userID);
  let u = e => {
    e.stopPropagation();
  };
  "sessionID" in e && (n = `active-speaker-row-voice-avatar-session-${e.sessionID}`, d = jsx(vQ, {
    sessionID: e?.sessionID,
    observingSessionID: a,
    presenterSessionID: s ?? null,
    nominatedSessionID: null,
    user: e,
    showColorIndicators: !0,
    tooltipProxyId: n
  }), u = t => {
    t.stopPropagation();
    t.preventDefault();
    r(e);
  });
  return jsxs("div", {
    className: l,
    children: [jsx("div", {
      className: "active_speakers_row--avatarObserveClickTarget--T1JH- voice_toolbar--avatarObserveClickTarget--QALFw",
      onClick: u,
      "data-tooltip-proxy-element-id": n
    }), d, jsx(_$$i, {
      userId: e.userID,
      userName: e.name,
      microphoneStyle: bU.FULL,
      call: i,
      volumeIconMutedState: _$$S.MINI,
      className: "active_speakers_row--voiceIndicatorPositioning--YqGFz"
    })]
  });
});
function ej({
  user: e,
  classNames: t
}) {
  return jsx("div", {
    className: eg + " " + (Array.isArray(t) ? t.join(" ") : t),
    children: e.name
  });
}
let eA = ["active_speakers_row--pos0--Dc1bB active_speakers_row--pos--D59NJ", ef, "active_speakers_row--pos2--b5pkb active_speakers_row--pos--D59NJ", "active_speakers_row--pos3--EAAkN active_speakers_row--pos--D59NJ", "active_speakers_row--pos4--R5-5y active_speakers_row--pos--D59NJ", "active_speakers_row--pos5--FYPvT active_speakers_row--pos--D59NJ", "active_speakers_row--pos6--PTsn8 active_speakers_row--pos--D59NJ", "active_speakers_row--pos7--DjtPj active_speakers_row--pos--D59NJ"];
class eC extends Component {
  constructor(e) {
    super(e);
    this.displayString = "ActiveSpeakersRow";
    this.node = null;
    this.state = {
      active: [],
      fadeOut: []
    };
  }
  componentWillMount() {
    this.setState(eD(this.state.active, this.props.users));
  }
  shouldComponentUpdate(e, t) {
    return e === this.props || (eT(this.props.users, e.users) && this.setState(eD(this.state.active, e.users)), !1);
  }
  render() {
    let e = (e, t) => `${e.name}-${t}`;
    let t = [];
    let a = _$$h.getInstance();
    if (!a) return null;
    if (1 === this.state.fadeOut.length && this.state.fadeOut[0]) {
      let s = this.state.fadeOut[0];
      t.push(jsx(eR, {
        call: a,
        user: s,
        classNames: [eA[0], eO]
      }, e(s, "avatar")), jsx(ej, {
        user: s,
        classNames: [ef, eO, eg]
      }, e(s, "name")));
    } else if (2 === this.state.fadeOut.length && !this.state.fadeOut[0] && this.state.fadeOut[1]) {
      let a = this.state.fadeOut[1];
      t.push(jsx(ej, {
        user: a,
        classNames: [ef, eO, eg]
      }, e(a, "name")));
    } else t.push.apply(t, this.state.fadeOut.map((t, s) => t && jsx(eR, {
      call: a,
      user: t,
      classNames: [eA[s], eO]
    }, e(t, "avatar"))));
    if (1 === this.state.active.length) {
      let s = this.state.active[0];
      t.push(jsx(eR, {
        call: a,
        user: s,
        classNames: [eA[0], ew]
      }, e(s, "avatar")), jsx(ej, {
        user: s,
        classNames: [ef, ew, eg]
      }, e(s, "name")));
    } else t.push.apply(t, this.state.active.map((t, s) => jsx(eR, {
      call: a,
      user: t,
      classNames: [eA[s], ew]
    }, e(t, "avatar"))));
    t.sort((e, t) => null === e.key || null === t.key ? 0 : e.key > t.key ? -1 : 1);
    setTimeout(() => {
      this.node?.querySelectorAll("." + ew).forEach(e => e.classList.remove(ew));
    }, 10);
    return jsx("div", {
      ref: e => this.node = e,
      className: "active_speakers_row--activeSpeakerRow--l5ylB",
      children: t
    });
  }
}
function eS(e) {
  let {
    call,
    usersInCall
  } = e;
  let i = selectCurrentUser();
  let n = mt(call);
  let l = useMemo(() => n?.filter(e => e !== i?.id)?.slice(0, 6).reduce((e, t) => {
    let o = usersInCall.find(({
      userID: e
    }) => e === t);
    return o ? e.concat([o]) : e;
  }, []) || [], [n, usersInCall, i]);
  return jsx(eC, {
    users: l
  });
}
function eL(e) {
  let {
    children,
    headerText,
    collapsedContent,
    onToggle,
    collapseStateOverride
  } = e;
  let [r, c] = useState(!1);
  let d = collapseStateOverride || r;
  return jsxs("span", {
    children: [jsx(fI, {
      className: d ? "voice_collapsible_dropdown--isCollapsed--SwBvz" : "",
      children: jsxs("span", {
        className: "voice_collapsible_dropdown--dropdownSectionTitle--lpt22",
        onClick: t => {
          t.preventDefault();
          t.stopPropagation();
          onToggle && !0 !== e.hideToggleOption && onToggle(!d);
          c(!d);
        },
        children: [d ? collapsedContent : headerText, !e.hideToggleOption && jsx(SvgComponent, {
          svg: d ? _$$A4 : _$$A5,
          className: "voice_collapsible_dropdown--voiceDropdownChevronIcon--JgQxE"
        })]
      })
    }), !d && children && jsx(Fragment, {
      children
    })]
  });
}
let eP = connect(e => ({
  showWidgetParticipantList: e.voice.showWidgetParticipantList
}))(function (e) {
  let {
    showWidgetParticipantList
  } = e;
  let a = selectCurrentUser();
  let l = useDispatch();
  let {
    userIdsInCall
  } = W5(e.fileKey);
  let p = bF(userIdsInCall, e.fileKey);
  let v = _$$eo();
  let {
    usersInCall,
    callMetadata
  } = useMemo(() => ({
    usersInCall: p.filter(e => e.userID !== a?.id),
    callMetadata: {
      microphoneStyle: bU.FULL,
      call: e.call
    }
  }), [p, a, e.call]);
  return jsxs(Fragment, {
    children: [jsx(sK, {}), usersInCall.length > 0 && jsx("div", {
      className: _$$ev,
      children: jsx(eL, {
        headerText: `${e.currentUserInCall ? "You and " : ""}` + formatCount(usersInCall.length, "person", "people") + " in conversation",
        collapseStateOverride: !showWidgetParticipantList,
        collapsedContent: jsx(eS, {
          usersInCall,
          call: e.call
        }),
        hideToggleOption: usersInCall.length < 2,
        onToggle: e => l(yF(!e)),
        children: jsx(_$$P, {
          className: YM,
          children: usersInCall.map(e => jsx(_$$Q, {
            callMetadata,
            user: e,
            isOverflow: !0,
            onUserClick: v
          }, "sessionID" in e ? e.sessionID : e.userID))
        })
      })
    })]
  });
});
let eB = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M7 7h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm4.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4.5-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-3.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm2.5 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M7.5 13a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z",
      clipRule: "evenodd"
    })
  });
});
let eZ = "device_controls--deviceControlRow--kSC19";
let e0 = "device_controls--controlLabel--Yp1lV";
let e1 = "device_controls--dropdownContainer--DfMXW";
let e5 = "device_controls--dropdownInput--w72f-";
let e2 = "device_controls--dropdownChevron--UBe58";
let e4 = "MICROPHONE_CONTROL_DROPDOWN";
let e3 = "PLAYBACK_DEVICE_CONTROL_DROPDOWN";
let e7 = parsePxNumber(aHA);
function e9(e, t, a, o, n, l, r) {
  let c = useDispatch();
  let [d, _] = useState(null);
  let [u, p] = useState([]);
  let m = useSelector(e => e.dropdownShown?.type === o);
  let h = useMemoShallow(() => u.map(e => e.deviceId), [u]);
  let N = useCallback(async () => {
    try {
      let e = await t();
      let a = new Set(h);
      (h.length !== e.length || e.some(e => !(e.deviceId in a))) && p(e);
    } catch {
      r || c(VisualBellActions.enqueue({
        message: getI18nString("collaboration.voice.error_fetching_devices"),
        error: !0,
        type: "voice-device-error"
      }));
    }
  }, [h, c, t, r]);
  let I = useCallback(async () => {
    try {
      if (l && !BrowserInfo.chrome) return;
      let t = await e();
      t.deviceId !== d?.deviceId && _(t);
    } catch {}
  }, [l, e, d]);
  let g = useCallback(async e => {
    e.deviceId !== d?.deviceId && _(e);
    try {
      await a(e);
    } catch {
      c(VisualBellActions.enqueue({
        message: getI18nString("collaboration.voice.error_selecting_device"),
        error: !0,
        type: "voice-device-error"
      }));
      await I();
    }
  }, [I, a, c, d]);
  useEffect(() => {
    (n || m) && N();
  }, [n, m, N]);
  useEffect(() => {
    I();
    N();
  }, []);
  return [d, u, g];
}
function e8(e) {
  let [t, a, s] = e9(e.call.currentMicrophone, e.call.getMicrophones, e.call.setMicrophone, e4, e.isOpen, !1, e.microphonePermissionDenied);
  let [i, n, l] = e9(e.call.currentPlaybackDevice, e.call.getPlaybackDevices, e.call.setPlaybackDevice, e4, e.isOpen, !0, e.microphonePermissionDenied);
  let r = e.targetRef.current?.getBoundingClientRect();
  return e.isOpen ? jsx(e6, {
    targetRect: r,
    currentMicrophone: t,
    microphoneDevices: a,
    setMicrophone: s,
    currentPlaybackDevice: i,
    playbackDevices: n,
    setPlaybackDevice: l
  }) : null;
}
function e6(e) {
  let {
    targetRect,
    currentMicrophone,
    microphoneDevices,
    setMicrophone,
    currentPlaybackDevice,
    playbackDevices,
    setPlaybackDevice
  } = e;
  let _ = useDispatch();
  let u = useId();
  let p = useId();
  let [m, h] = useState({
    type: ""
  });
  let N = () => {
    h({
      type: ""
    });
  };
  let I = {
    format: e => e?.label || "",
    isEqual: (e, t) => e.deviceId === t.deviceId
  };
  let g = jsx(_$$P2, {});
  let O = jsx(_$$L2, {});
  let w = jsx(l6, {
    ariaLabelledBy: u,
    chevronClassName: e2,
    className: e1,
    dispatch: _,
    dropdownShown: m,
    formatter: I,
    icon: g,
    id: e4,
    inputClassName: e5,
    neverConstrain: !0,
    onChange: e => {
      setMicrophone(e);
    },
    onHideDropdownOverride: N,
    onShowDropdownOverride: () => h({
      type: e4
    }),
    property: currentMicrophone || {
      deviceId: "not_found",
      label: getI18nString("collaboration.voice.microphone_not_found"),
      groupId: "not_found",
      kind: "audioinput",
      toJSON: () => null
    },
    children: microphoneDevices.map(e => jsx(c$, {
      value: e,
      children: e.label
    }, e.deviceId))
  });
  let x = jsx(l6, {
    ariaLabelledBy: p,
    chevronClassName: e2,
    className: e1,
    dispatch: _,
    dropdownShown: m,
    formatter: I,
    icon: O,
    id: e3,
    inputClassName: e5,
    neverConstrain: !0,
    onChange: e => {
      setPlaybackDevice(e);
    },
    onHideDropdownOverride: N,
    onShowDropdownOverride: () => h({
      type: e3
    }),
    property: currentPlaybackDevice || {
      deviceId: "not_found",
      label: getI18nString("collaboration.voice.playback_device_not_found"),
      groupId: "not_found",
      kind: "audiooutput",
      toJSON: () => null
    },
    children: playbackDevices.map(e => jsx(c$, {
      value: e,
      children: e.label
    }, e.deviceId))
  });
  let b = jsxs(Fragment, {
    children: [jsx("div", {
      className: "device_controls--divider--Z8rM-"
    }), !WO() && jsx(tt, {}), WO() && jsx(te, {})]
  });
  return jsxs(Cf, {
    className: "device_controls--pointingDropdown--hSJ1h",
    targetRect,
    minWidth: e7,
    propagateCloseClick: !0,
    lean: "left",
    leanPadding: 52,
    children: [jsxs("div", {
      onClick: e => e.stopPropagation(),
      children: [jsxs("div", {
        className: "device_controls--header---h3P-",
        children: [getI18nString("collaboration.voice.audio_settings"), jsx(Jn, {
          onClick: () => _(oB())
        })]
      }), jsxs("div", {
        className: "device_controls--container--VR8KK",
        children: [jsxs(fI, {
          className: eZ,
          children: [jsx("span", {
            className: e0,
            id: u,
            children: renderI18nText("collaboration.voice.microphone")
          }), w]
        }), BrowserInfo.chrome && jsxs(fI, {
          className: eZ,
          children: [jsx("span", {
            className: e0,
            id: p,
            children: renderI18nText("collaboration.voice.speakers")
          }), x]
        })]
      })]
    }), X0() && b]
  });
}
function te() {
  let e = useSelector(e => e.voice.captionsInstallProgress);
  let t = useSelector(e => e.voice.showCaptions);
  let a = useDispatch();
  let n = useId();
  let l = jsx(eB, {});
  let r = renderI18nText("collaboration.voice.closed_captioning");
  let c = jsx(Badge, {
    text: getI18nString("collaboration.voice.beta"),
    className: "device_controls--betaTag---VTFI",
    color: BadgeColor.BRAND
  });
  t && Mw(e) && (r = renderI18nText("collaboration.voice.setting_up_closed_captions_install_progress", {
    installProgress: e
  }), l = jsx(LoadingSpinner, {
    className: "device_controls--captionsLoadingSpinner--ivdGQ"
  }), c = jsx(Fragment, {}));
  return jsxs(Label, {
    className: "device_controls--closedCaptionRow--OdIHt raw_components--singleRow--W5dYN raw_components--_singleRow--yTGIY raw_components--singleRowHeight--dKM4t raw_components--_row--rHucX raw_components--row--NThzm device_controls--deviceControlRowWithHover--KUbHL device_controls--deviceControlRow--kSC19",
    htmlFor: n,
    children: [l, jsxs("span", {
      className: "device_controls--captionToggleLabel--MjCYn device_controls--controlLabelFullOpacity--1nEqI device_controls--controlLabel--Yp1lV",
      children: [r, c]
    }), jsx(_$$v, {
      id: n,
      checked: t,
      onChange: (e, {
        event: t
      }) => {
        t.stopPropagation();
        trackEventAnalytics("voice_captions_toggle", {
          value: e,
          source: "voice_widget"
        });
        HJ(a, e);
      }
    })]
  });
}
function tt() {
  let e = AM.ACCESSIBILITY;
  return jsx(TrackedAnchor, {
    target: "_blank",
    rel: "noopener",
    href: e,
    trackingEventName: "Learn more about captioning",
    children: jsxs(fI, {
      className: "device_controls--deviceControlRowWithHover--KUbHL device_controls--deviceControlRow--kSC19",
      children: [jsx(SvgComponent, {
        className: "device_controls--iconContainer--TuXUt",
        svg: _$$A2
      }), jsx("span", {
        className: "device_controls--controlLabelFullOpacity--1nEqI device_controls--controlLabel--Yp1lV",
        children: renderI18nText("collaboration.voice.learn_how_to_turn_on_closed_captioning")
      })]
    })
  });
}
let ta = buildUploadUrl("94721b53827c353075273e54a45ea41850ee0284");
let to = buildUploadUrl("d917bf9964749c47b46d367572a5dd28a559bd2f");
let ts = "DEVICE_CONTROL_DROPDOWN";
let ti = null;
let tn = null;
let tl = null;
function tr(e) {
  let {
    call,
    fileKey,
    user,
    callEvent,
    notificationUserId,
    callEventCallback
  } = e;
  let v = useStore();
  let [m, h] = useState(null);
  let [O, w] = useState();
  let [x, j] = useState(!1);
  let [k, B] = useState(!1);
  let [V, F] = useState(!1);
  let [z, X] = useState(!1);
  let J = useSelector(e => e.voice.snapWidget);
  let [K, Y] = useState(!1);
  let [q, Q] = useState(!1);
  let [Z, ee] = useState({});
  let {
    userIdsInCall
  } = W5(fileKey);
  _$$W();
  let ea = useSelector(e => e.voice.showCaptions);
  let eo = useSelector(e => e.voice.captionsInstallProgress);
  let en = useSelector(e => e.dropdownShown?.type === ts);
  let el = useSelector(e => e.voice.activeCall[fileKey] || !1);
  let er = useSelector(e => e.voice.showWidgetParticipantList);
  let ec = useRef(null);
  let ed = useDispatch();
  let ev = {
    in: () => {
      F(!0);
    },
    out: () => (F(!1), new Promise(e => setTimeout(e, 300)))
  };
  useEffect(() => {
    let e = call.getSystemCompatibility();
    if (h(e), !e) {
      callEventCallback($E.SYSTEM_INCOMPATIBLE);
      return;
    }
    ti || tn || (tn = new Audio(ta), (ti = new Audio(to)).load(), tn.load(), [tn, ti].forEach(e => e.volume = .5));
  }, []);
  useEffect(() => {
    !el && m && eh();
    window.requestAnimationFrame(() => ev.$$in());
  }, [m]);
  useEffect(() => {
    let e;
    switch (callEvent) {
      case $E.DISCONNECTED:
        q && (tn?.play(), Q(!1));
        ed(oI({
          fileKey
        }));
        break;
      case $E.TOKEN_WILL_EXPIRE_DETECT_MIC_INPUT:
        (function e(a) {
          if (Date.now() >= a) {
            callEventCallback($E.TOKEN_WILL_EXPIRE);
            return;
          }
          if (call.isLocalUserSpeaking()) {
            eI(!1);
            return;
          }
          setTimeout(() => {
            e(a);
          }, 500);
        })(Date.now() + 1e4);
        break;
      case $E.CONNECTED:
      case $E.CONNECTED_WITH_MIC_DISABLED:
        K && (setTimeout(() => ti?.play(), 400), Y(!1));
        ed(rO({
          fileKey
        }));
        break;
      case $E.CALL_INACTIVE:
        call.leave();
        break;
      case $E.TOKEN_WILL_EXPIRE:
        e = () => eI(!0);
        break;
      case $E.TOKEN_EXPIRED:
        e = eh;
        break;
      case $E.USER_JOINED:
      case $E.USER_LEFT:
        if (tl) return;
        break;
      case $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW:
      case $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW:
      case $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW:
      case $E.WARNING_RECV_AUDIO_DECODE_FAILED:
        let o = eu(callEvent);
        if (!o) break;
        ee({
          ...Z,
          [callEvent]: o
        });
        break;
      case $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW_RECOVER:
      case $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW_RECOVER:
      case $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW_RECOVER:
      case $E.WARNING_RECV_AUDIO_DECODE_FAILED_RECOVER:
        let s = function (e) {
          switch (e) {
            case $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW_RECOVER:
              return $E.WARNING_AUDIO_INPUT_LEVEL_TOO_LOW;
            case $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW_RECOVER:
              return $E.WARNING_AUDIO_OUTPUT_LEVEL_TOO_LOW;
            case $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW_RECOVER:
              return $E.WARNING_SEND_AUDIO_BITRATE_TOO_LOW;
            case $E.WARNING_RECV_AUDIO_DECODE_FAILED_RECOVER:
              return $E.WARNING_RECV_AUDIO_DECODE_FAILED;
            default:
              return null;
          }
        }(callEvent);
        if (!s) break;
        delete Z[s];
        ee(Z);
    }
    void 0 !== callEvent && w({
      callEvent,
      onClick: e,
      notificationUserId
    });
  }, [callEvent]);
  useEffect(() => {
    X(!0);
  }, [J]);
  useEffect(() => {
    z && X(!1);
  }, [z]);
  let [eE, em] = useState(!0);
  let eh = async () => {
    if (em(!0), !call.getSystemCompatibility()) {
      em(!1);
      callEventCallback($E.SYSTEM_INCOMPATIBLE);
      return;
    }
    j(!0);
    Y(!0);
    tl = setTimeout(() => {
      tl = null;
    }, 5e3);
    try {
      let {
        data
      } = await XHR.post(`/api/voice/${fileKey}/auth`);
      let o = await JL(data.meta.user_encryption_key);
      let s = await We(o, data.meta.call_user_id);
      if (s != s) throw Error(`User ID does not match local user ID.
local: ${s}
remote: ${s}`);
      await call.join({
        appId: data.meta.app_id,
        callId: data.meta.call_id,
        token: data.meta.auth_token,
        callUserId: data.meta.call_user_id,
        userId: s,
        encryptionKey: data.meta.call_encryption_key,
        userEncryptionKey: o,
        setParticipantIdsCallback: eN,
        callEventCallback,
        store: v,
        fileKey
      });
    } catch (e) {
      em(!1);
      callEventCallback($E.ERROR);
    }
    j(!1);
    em(!1);
  };
  function eN(e) {
    ed(cb(e));
  }
  _$$N({
    isVisible: V
  });
  let eI = async e => {
    let {
      data
    } = await XHR.post(`/api/voice/${fileKey}/auth`, {
      call_user_id: call.uid
    });
    await call.renewToken(data.meta.auth_token);
    e ? callEventCallback($E.CONNECTED) : callEventCallback($E.TOKEN_SILENTLY_RENEWED);
  };
  let eg = async () => {
    j(!0);
    Q(!0);
    try {
      await Promise.all([ev.out(), call.leave()]);
      ed(oI({
        fileKey
      }));
      tn?.play();
      en && ed(oB());
      ed(Pp(!1));
    } catch {
      ev.$$in();
      callEventCallback($E.ERROR_ON_LEAVE);
    }
    j(!1);
  };
  let ef = async e => {
    trackFileEvent("voice_user_mute_toggle", fileKey, v.getState(), {
      source: "voice_widget",
      muted: !e
    });
    e ? await call.unmute() : await call.mute();
  };
  let eO = () => {
    en ? ed(oB()) : (trackFileEvent("voice_widget_open_settings", fileKey, v.getState()), ed(j7({
      type: ts
    })));
  };
  let ew = O ? O && userIdsInCall.size > 1 && er ? "expanded" : "collapsed" : null;
  ea && nN(eo) && (trackFileEvent("voice_caption_download_error", fileKey, v.getState(), {
    error_code: eo,
    source: "voice_widget"
  }), HJ(ed, !1), ed(showModalHandler({
    type: _$$L,
    data: {
      dispatch: ed,
      installProgress: eo
    }
  })));
  let ex = U1();
  return jsx(_$$m, {
    role: "region",
    children: jsxs("div", {
      className: "voice_widget--hybridModalWrapper--x9-GE",
      ref: ex,
      children: [jsx("div", {
        className: p()(b, {
          [T]: V
        }),
        children: jsxs(Id, {
          className: R,
          children: [jsxs("div", {
            className: D,
            children: [jsx("span", {
              className: el || k ? "voice_widget--currentUser--L7Z6l" : "voice_widget--inactiveCurrentUser--yVaZY voice_widget--currentUser--L7Z6l",
              children: jsx(tc, {
                user,
                call: e.call
              })
            }), jsx(e_, {
              className: "voice_widget--warningIcon--WJPdH",
              activeWarnings: Z
            }), jsx(_$$Y, {
              userId: user.id,
              onMuteButtonClickCallback: ef,
              disabled: call.microphonePermissionDenied
            }), jsx(_$$d, {
              "aria-expanded": en,
              "aria-label": getI18nString("collaboration.voice.settings"),
              ref: ec,
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("collaboration.voice.settings"),
              onClick: () => {
                eO();
              },
              htmlAttributes: {
                onMouseDown: e => {
                  e.stopPropagation();
                }
              },
              children: jsx(_$$I, {})
            }), jsx(ButtonPrimitive, {
              className: el || eE ? "voice_widget--leaveButton--UUdxH basic_form--btn--FSrmp ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd" : "voice_widget--joinButton--WvZPr basic_form--btn--FSrmp ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd",
              onClick: el || eE ? eg : eh,
              disabled: !m || x,
              htmlAttributes: {
                onMouseEnter: () => B(!0),
                onMouseLeave: () => B(!1)
              },
              children: el || eE ? renderI18nText("collaboration.voice.leave") : renderI18nText("collaboration.voice.join")
            })]
          }), el && jsx(eP, {
            fileKey,
            currentUserInCall: el,
            call
          }), WO() && ea && jsx(es, {
            call
          })]
        })
      }), O && jsx(ep, {
        notification: O,
        widgetState: ew
      }), jsx(e8, {
        isOpen: en,
        call,
        targetRef: ec,
        microphonePermissionDenied: call.microphonePermissionDenied
      })]
    })
  });
}
function tc({
  user: e,
  call: t
}) {
  return jsxs(Fragment, {
    children: [jsx(td, {
      user: e,
      call: t
    }), jsx(Ro, {
      entity: e,
      size: 24,
      className: "voice_widget--undraggableImage--muN9g",
      label: e.name
    })]
  });
}
function td({
  user: e,
  call: t
}) {
  let a = Wl(e.id, t);
  return !a || a.isMuted ? null : jsx(_$$i, {
    userId: e.id,
    userName: e.name,
    microphoneStyle: bU.FULL,
    className: "voice_widget--avatarVoiceIndicator--zfWwx",
    volumeIconMutedState: _$$S.NONE,
    call: t
  });
}
export function $$t_0() {
  let e = useSelector(e => e.mirror.appModel.showUi);
  let t = useCurrentFileKey();
  let a = selectCurrentUser();
  let u = useSelector(e => e.voice.showWidget);
  let p = useSelector(e => t && t in e.voice.activeCall);
  let v = useSelector(e => t && !!e.voice.activeCall[t]);
  let {
    userIdsInCall
  } = W5(t, !0);
  let m = bF(userIdsInCall, t).length;
  let h = qr();
  let N = useDispatch();
  let [I, g] = useState();
  let [f, O] = useState();
  let w = useCallback((e, t) => {
    GA.has(e) && N(Pp(!0));
    t && O(t);
    g(e);
  }, [N]);
  let x = useSelector(e => e.voice.captionsInstallProgress);
  let b = useSelector(e => e.voice.showCaptions);
  return (useEffect(() => {
    h && (h.captionsToggleEnabled = b, h.streamAudioForCaptions(b && 100 === x));
  }, [b, x, h]), useEffect(() => {
    u || (O(void 0), g(void 0));
  }, [u]), useEffect(() => {
    t && !p && m > 0 ? N(Zq({
      fileKey: t
    })) : t && p && !v && 0 === m && N(a6({
      fileKey: t
    }));
  }, [m, t, p, v, N]), e && t && a) ? p && !u ? jsx(j, {
    fileKey: t
  }) : h && u ? jsx(tr, {
    fileKey: t,
    user: a,
    call: h,
    notificationUserId: f,
    callEvent: I,
    callEventCallback: w
  }) : jsx(Fragment, {}) : jsx(Fragment, {});
}
export const s = $$t_0;