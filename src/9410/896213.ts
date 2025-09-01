import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect, forwardRef, useLayoutEffect, Fragment as _$$Fragment, memo, useMemo } from "react";
import { Pj, d4, wA } from "../vendor/514228";
import { mc, fP } from "../905/691059";
import { i as _$$i } from "../905/718764";
import { D as _$$D } from "../905/555681";
import { O as _$$O } from "../905/969533";
import { J as _$$J } from "../905/614223";
import { h3O, rcl } from "../figma_app/763686";
import { Ay } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { fp } from "../figma_app/27355";
import f from "classnames";
import { A as _$$A } from "../vendor/90566";
import { parsePxInt, parsePxNumber } from "../figma_app/783094";
import { eD as _$$eD } from "../figma_app/876459";
import { Ay as _$$Ay } from "../905/612521";
import { am } from "../figma_app/901889";
import { Gc } from "../905/63728";
import { Vi, B4, tu, oJ } from "../figma_app/385215";
import { ah, Dv } from "../905/763714";
import { Av } from "../905/149328";
import { WN } from "../figma_app/638601";
import { pz } from "../figma_app/60079";
import { $$ } from "../figma_app/637027";
import { P as _$$P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { W as _$$W } from "../3276/514864";
import { gR } from "../figma_app/976345";
import { ZO } from "../figma_app/88239";
import { oB } from "../905/929976";
import { J4 } from "../figma_app/91703";
import { b as _$$b } from "../905/985254";
import { dG } from "../figma_app/753501";
import { k as _$$k2 } from "../figma_app/564183";
import { hx } from "../figma_app/290668";
import { ck } from "../figma_app/469876";
import { Zr } from "../figma_app/678782";
import { AD, wF, Wq, uC, A8 } from "../figma_app/578768";
import { q5 } from "../figma_app/516028";
import { dR } from "../figma_app/440875";
import { Z as _$$Z } from "../905/116724";
import { _P } from "../figma_app/2590";
import { q as _$$q } from "../905/495564";
import { YL, gW } from "../figma_app/122682";
import { Ib } from "../905/129884";
import { x as _$$x } from "../905/106997";
import { Q as _$$Q } from "../3276/336897";
import { Cf } from "../905/504727";
import { rJv } from "../figma_app/27776";
import { XN } from "../figma_app/778880";
import { to } from "../905/156213";
import { ds } from "../figma_app/314264";
import { F as _$$F } from "../905/224";
import { FFileType } from "../figma_app/191312";
import { _2 } from "../9410/635666";
import { Bi } from "../905/652992";
import { nT } from "../figma_app/53721";
import { pE } from "../figma_app/630077";
import { DV } from "../905/739964";
import { A as _$$A2 } from "../3276/51271";
import { K as _$$K } from "../3276/330497";
import { WF, tL, sl, Te, iw, iG, zc } from "../9410/132424";
import { a as _$$a, G as _$$G } from "../905/298663";
import { Oc } from "../figma_app/552876";
import { cJ } from "../905/561485";
import { s as _$$s2 } from "../3276/362217";
import { n as _$$n } from "../3276/384190";
import { MT, BK, zW, me, mg, Vr, rT, Tw, aK, qN, QD, Km, zK, hg, XE, yx, Ge, wH, yo, r9, rR, zk, ai, EI } from "../9410/574786";
var g = f;
parsePxInt(rJv);
var et = (e => (e.VOICE = "voice", e))(et || {});
var ef = (e => (e[e.NO_CALL_STATE = 0] = "NO_CALL_STATE", e[e.JOIN_CALL_STATE = 1] = "JOIN_CALL_STATE", e[e.IN_CALL_WIDGET_OPEN = 2] = "IN_CALL_WIDGET_OPEN", e[e.IN_CALL_WIDGET_CLOSED = 3] = "IN_CALL_WIDGET_CLOSED", e))(ef || {});
function eg(e) {
  let t = Pj();
  let i = q5();
  let n = d4(e => e.orgById);
  let s = d4(e => e.teams);
  let o = d4(e => e.selectedView?.editorType);
  let l = d4(e => "prototype" === e.selectedView.view);
  let d = o === nT.Design || o === nT.Whiteboard || o === nT.DevHandoff || o === nT.Slides || o === nT.Illustration;
  let c = wA();
  if (XN || !i || l || !d) return null;
  let u = YL({
    openFile: i,
    teams: s,
    orgById: n
  });
  if (u === gW.FEATURE_DISABLED) return null;
  if (u === gW.ELIGIBLE_WITH_UPGRADE) return jsx(Fragment, {
    children: jsx("span", {
      className: WF,
      "data-onboarding-key": _2,
      onClick: () => {
        let e = i.teamId && s[i.teamId];
        if (!e) return;
        ds("CTA Clicked", i.key, t.getState(), {
          name: "Disabled Voice Call Button"
        });
        let r = o === nT.Whiteboard ? FFileType.WHITEBOARD : FFileType.DESIGN;
        c(to({
          type: DV,
          data: {
            team: e,
            resource: Bi.AUDIO,
            action: pE.USE_AUDIO,
            editorType: r,
            currentPlan: _$$F.Plan.STARTER,
            upsellPlan: _$$F.Plan.PRO
          }
        }));
      },
      children: jsx(_$$A2.HeadphonesIcon, {
        className: tL,
        size: 32
      })
    })
  });
  if (u !== gW.ELIGIBLE) {
    let e = u === gW.DISABLED_BY_ORG ? _$$t("collaboration.voice.audio_has_been_disabled_by_your_organization") : _$$t("collaboration.voice.to_use_audio_in_this_file_move_it_to_a_team_on_one_of_our_paid_plans");
    return jsx("span", {
      className: WF,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-show-immediately": !0,
      "data-tooltip": e,
      children: jsx(_$$A2.HeadphonesIcon, {
        className: sl,
        size: 32
      })
    });
  }
  return jsx("div", {
    className: Te,
    children: jsx(_$$K, {
      fileKey: i.key,
      className: iw,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": _$$t("collaboration.voice.start_conversation"),
      hidePopover: e.hidePopover,
      children: jsx("span", {
        className: iG,
        children: jsx("span", {
          "data-onboarding-key": "audio-nux-key",
          className: zc,
          children: jsx(_$$A2.HeadphonesIcon, {
            className: tL,
            size: 32
          })
        })
      })
    })
  });
}
let eE = "multiplayer-nickname-dropdown";
ck();
let eT = parsePxNumber(rJv);
export function $$ew1(e, t, i, r, n, a, s) {
  if (!n) return;
  let o = e.sessionID;
  let l = o === t;
  let d = a && a.sessionID === t;
  if (l && d) s();else if (r) {
    let t = n.observingSessionID === o || n.sessionID === o ? -1 : e.sessionID;
    let r = -1 !== n.observingSessionID;
    let a = n.observingSessionID !== o && n.sessionID !== o;
    r && i(_P({
      name: "Prototype Observation Ended",
      params: {
        multiplayerObservingSessionID: n.observingSessionID,
        multiplayerSessionID: n.sessionID
      }
    }));
    a && (i(_P({
      name: "Prototype Observation Started",
      params: {
        multiplayerObservingSessionID: o,
        multiplayerSessionID: n.sessionID
      }
    })), i(_$$b({
      aware_of_observation_mode: !0
    })));
    i(J4({
      ...n,
      observingSessionID: t
    }));
  } else {
    h3O.observeUser(o);
    n.observingSessionID !== o && n.sessionID !== o && i(_$$b({
      aware_of_observation_mode: !0
    }));
  }
}
function eS(e) {
  let {
    query,
    usersToSearch
  } = e;
  let [r, a] = useState(usersToSearch);
  let s = useRef(!1);
  let o = am();
  let l = useRef(!1);
  let d = l.current;
  let c = useCallback(async e => {
    if ("" === e) a(usersToSearch);else {
      s.current = !1;
      let t = await _$$n(e, usersToSearch);
      s.current || (a(t.map(e => e.item)), d || (o("Multiplayer Tools User Search", {
        otherUserSessionsCount: usersToSearch.length
      }), l.current = !0));
    }
  }, [d, o, usersToSearch]);
  let u = _$$A(c, 200);
  useEffect(() => (u(query), () => {
    u.cancel();
    s.current = !0;
  }), [u, query, usersToSearch]);
  return {
    searchResults: r
  };
}
let ej = forwardRef(function (e, t) {
  let {
    query,
    setQuery
  } = e;
  let s = useRef(null);
  return jsx("div", {
    ref: t,
    className: MT,
    children: jsx(_$$D, {
      ref: s,
      "aria-label": _$$t("search.search_file_users"),
      autoFocus: !0,
      onChange: setQuery,
      onClick: dG,
      placeholder: _$$t("collaboration.spotlight.menu.search.placeholder"),
      spellCheck: !1,
      value: query
    })
  });
});
function eI({
  targetRect: e,
  arrowOffsetFromRectLeft: t,
  currentUser: i,
  peopleList: s,
  previousViewerList: o,
  previousViewerListRenderer: l,
  userListRenderer: d,
  onUserClick: u,
  onKeyDown: p,
  shouldDisableSpotlight: h,
  spotlightDisabledReason: f,
  dropdownRef: _
}) {
  let x = useRef(null);
  let y = useRef(null);
  let [b, C] = fp(ah);
  let [v, S] = fp(Dv);
  let [L, R] = useState(310);
  let M = useRef(null);
  let [P, F] = useState(0);
  let B = wA();
  let U = Av();
  let G = Math.min(window.innerHeight - U - 22, 465);
  useLayoutEffect(() => {
    x.current && y.current && R(G - x.current.offsetHeight - y.current.offsetHeight - 16 * P);
  }, [G, P]);
  let K = useCallback(() => {
    h || C(!0);
  }, [C, h]);
  let {
    start,
    cancel
  } = _$$Z(K);
  let Y = useCallback(() => {
    cancel();
    C(!1);
  }, [cancel, C]);
  let J = Vi();
  let q = useCallback(() => {
    h || (J(), Y(), S(!0), B(oB()));
  }, [Y, B, S, J, h]);
  let Z = B4();
  let ee = useCallback(() => {
    Z();
    B(oB());
  }, [B, Z]);
  let et = dR();
  let ei = et && i.sessionID === et.sessionID ? jsx(pz, {
    onClick: ee,
    className: BK,
    children: tx("collaboration.spotlight.button.stop")
  }) : jsx($$, {
    onClick: q,
    className: BK,
    onMouseOver: () => {
      start(300);
    },
    onMouseLeave: Y,
    disabled: h,
    "data-dropdown-tooltip": h && f ? f : void 0,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip-show-below": !0,
    children: tx("collaboration.spotlight.tooltip.spotlight_me")
  });
  let er = s.length + (o?.length ?? 0) > 8;
  let [en, ea] = useState("");
  let {
    searchResults
  } = eS({
    query: en,
    usersToSearch: s
  });
  let {
    searchResults: _searchResults
  } = eS({
    query: en,
    usersToSearch: o ?? []
  });
  let el = searchResults.length > 0 && _searchResults.length > 0;
  let ed = searchResults.length > 0 || _searchResults.length > 0;
  let ec = 0 === searchResults.length && 0 === _searchResults.length;
  let eu = jsx("div", {
    className: zW,
    children: jsx("div", {
      className: me
    })
  });
  useEffect(() => {
    F((er ? 1 : 0) + ("" !== en && ec ? 1 : 0) + (ed ? 1 : 0));
  }, [er, en, ec, ed]);
  let ep = jsxs(_$$J, {
    mode: "dark",
    children: [jsxs("div", {
      ref: x,
      className: mg,
      children: [jsx(_$$Q, {
        user: i,
        isOverflow: !0,
        isCurrentUserHeaderRow: !0
      }), jsxs("div", {
        className: Vr,
        children: [ei, jsx(eg, {})]
      })]
    }), er && jsxs(Fragment, {
      children: [eu, jsx("div", {
        className: rT,
        ref: y,
        children: jsx(ej, {
          query: en,
          setQuery: ea
        })
      })]
    }), "" !== en && ec && jsxs(Fragment, {
      children: [eu, jsx("div", {
        className: `${Tw} ${_$$s.mb8.$}`,
        children: tx("fullscreen.toolbar.multiplayer.no_user_found")
      })]
    }), ed && jsxs(Fragment, {
      children: [eu, jsxs(_$$P, {
        width: eT - 16,
        maxHeight: L,
        scrollBarAlways: !0,
        disableScrollbarBorder: !0,
        ref: M,
        children: [el && jsx("div", {
          className: Tw,
          children: tx("fullscreen.toolbar.multiplayer.currently_viewing")
        }), searchResults.length > 0 && jsx(Fragment, {
          children: jsx(_$$W, {
            label: _$$t("fullscreen.toolbar.multiplayer.currently_viewing_users"),
            renderer: d,
            onSelect: e => {
              e.length && (u(e[0]), B(oB()));
            },
            initiallyNotSelected: !0,
            customClassName: aK,
            children: searchResults
          })
        }), _searchResults.length > 0 && jsxs(Fragment, {
          children: [jsx("div", {
            className: Tw,
            children: tx("fullscreen.toolbar.multiplayer.previously_viewed")
          }), jsx(_$$W, {
            label: _$$t("fullscreen.toolbar.multiplayer.previously_viewed_users"),
            renderer: l,
            initiallyNotSelected: !0,
            customClassName: aK,
            children: _searchResults
          })]
        }), jsx("div", {
          className: _$$s.pt12.$
        })]
      })]
    })]
  });
  return jsx(Cf, {
    arrowOffsetFromRectLeft: t,
    className: g()(qN, QD),
    contentRef: _,
    disableDropdownScrollContainer: !0,
    lean: "center",
    maxHeight: G,
    maxWidth: eT,
    onKeyDown: p,
    propagateCloseClick: !0,
    removeUI3BorderPadding: !0,
    showPoint: !1,
    targetRect: e,
    children: ep
  });
}
function ek({
  currentUser: e,
  peopleList: t,
  previousViewerList: i,
  onUserClick: l,
  shouldDisableSpotlight: d,
  spotlightDisabledReason: u,
  containerProps: h,
  multiplayer: f,
  orgPathPart: g,
  isSites: _,
  nominatePresenter: x,
  cancelPresenterNomination: C,
  hidePopover: S
}) {
  let O = useRef(null);
  let L = useRef(null);
  let [R, M] = fp(ah);
  let [P, F] = fp(Dv);
  let [B, U] = useState(310);
  let G = useRef(null);
  let [K, z] = useState(0);
  let Y = wA();
  let J = Av();
  let q = Math.min(window.innerHeight - J - 22, 465);
  useLayoutEffect(() => {
    O.current && L.current && U(Math.min(q - O.current.offsetHeight - L.current.offsetHeight - 16 * K, 310));
  }, [q, K]);
  let Z = useCallback(() => {
    d || M(!0);
  }, [M, d]);
  let {
    start,
    cancel
  } = _$$Z(Z);
  let et = useCallback(() => {
    cancel();
    M(!1);
  }, [cancel, M]);
  let ei = Vi();
  let er = useCallback(() => {
    d || (ei(), et(), F(!0), Y(oB()), S());
  }, [et, Y, F, ei, d, S]);
  let en = B4();
  let ea = useCallback(() => {
    en();
    Y(oB());
    S();
  }, [Y, en, S]);
  let es = dR();
  let eo = es && e.sessionID === es.sessionID ? jsx(pz, {
    onClick: ea,
    className: BK,
    children: tx("collaboration.spotlight.button.stop")
  }) : jsx($$, {
    onClick: er,
    className: BK,
    onMouseOver: () => {
      start(300);
    },
    onMouseLeave: et,
    disabled: d,
    "data-dropdown-tooltip": d && u ? u : void 0,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip-show-below": !0,
    children: tx("collaboration.spotlight.tooltip.spotlight_me")
  });
  let el = t.length + (i?.length ?? 0) > 8;
  let [ed, ec] = useState("");
  let {
    searchResults
  } = eS({
    query: ed,
    usersToSearch: t
  });
  let {
    searchResults: _searchResults2
  } = eS({
    query: ed,
    usersToSearch: i ?? []
  });
  let eh = searchResults.length > 0 && _searchResults2.length > 0;
  let em = searchResults.length > 0 || _searchResults2.length > 0;
  let ef = 0 === searchResults.length && 0 === _searchResults2.length;
  let ex = jsx("div", {
    className: zW,
    children: jsx("div", {
      className: me
    })
  });
  useEffect(() => {
    z((el ? 1 : 0) + ("" !== ed && ef ? 1 : 0) + (em ? 1 : 0));
  }, [el, ed, ef, em]);
  let ey = (e, t) => {
    let i = Gc(() => {
      let t = `/files${g}/user/${e.userID}`;
      _$$Ay.redirect(t, _$$eD ? void 0 : "_blank");
    });
    let n = [];
    let a = f.sessionNominatedByCurrentUser === e.sessionID;
    let s = f.presenterSessionID === e.sessionID;
    let o = _ && !!e.sitesViewState && _$$a(e.sitesViewState);
    !t || s || d || (a ? n.push({
      text: tx("collaboration.spotlight.tooltip.menu.cancel_ask_to_spotlight"),
      onClick: () => {
        AD(e) && C(e.sessionID, f);
      },
      key: "cancel-ask-to-spotlight"
    }) : n.push({
      text: tx("collaboration.spotlight.tooltip.ask_to_spotlight"),
      onClick: () => {
        AD(e) && x(e.sessionID, f);
      },
      disabled: o,
      key: "ask-to-spotlight"
    }));
    n.push({
      text: tx("avatar.tooltip.view_profile"),
      onClick: e => {
        i(e);
      },
      key: "view-profile"
    });
    return jsx(_$$Q, {
      user: e,
      isOverflow: !0,
      onUserClick: t ? l : void 0,
      secondaryActions: n,
      hidePopover: S
    }, e.sessionID);
  };
  let eb = jsxs(_$$J, {
    mode: "dark",
    children: [jsxs("div", {
      ref: O,
      className: Km,
      children: [jsx(_$$Q, {
        user: e,
        isOverflow: !0,
        isCurrentUserHeaderRow: !0
      }), jsxs("div", {
        className: Vr,
        children: [eo, jsx(eg, {
          hidePopover: S
        })]
      })]
    }), el && jsxs(Fragment, {
      children: [ex, jsx("div", {
        className: zK,
        ref: L,
        children: jsx(ej, {
          query: ed,
          setQuery: ec
        })
      })]
    }), "" !== ed && ef && jsxs(Fragment, {
      children: [ex, jsx("div", {
        className: `${hg} ${_$$s.mb8.$}`,
        children: tx("fullscreen.toolbar.multiplayer.no_user_found")
      })]
    }), em && jsxs(Fragment, {
      children: [ex, jsxs(_$$P, {
        width: eT - 16,
        maxHeight: B,
        scrollBarAlways: !0,
        disableScrollbarBorder: !0,
        ref: G,
        children: [eh && jsx("h2", {
          className: hg,
          children: tx("fullscreen.toolbar.multiplayer.currently_viewing")
        }), searchResults.length > 0 && searchResults.map(e => jsx(_$$Fragment, {
          children: ey(e, !d)
        }, `currentViewer-${e.userID}`)), _searchResults2.length > 0 && jsxs(Fragment, {
          children: [jsx("h2", {
            className: hg,
            children: tx("fullscreen.toolbar.multiplayer.previously_viewed")
          }), _searchResults2.map(e => jsx(_$$Fragment, {
            children: ey(e, !1)
          }, `previousViewer-${e.userID}`))]
        }), jsx("div", {
          className: _$$s.pt12.$
        })]
      })]
    })]
  });
  return jsx(mc, {
    ...h(Ay.props(eN.popoverContainer(q, eT))),
    children: jsx(_$$i, {
      children: eb
    })
  });
}
let eN = {
  popoverContainer: (e, t) => [{
    backgroundColor: "xon4yw5",
    borderRadius: "x1mxnbhz",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    padding: "xf7z5ut",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    boxSizing: "x9f619",
    maxHeight: "x1kb659o",
    width: "x1bl4301",
    $$css: !0
  }, {
    "--maxHeight": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(`${e}px`),
    "--width": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(`${t}px`)
  }]
};
let eA = "multiplayer-tools-dropdown";
let $$eO0 = memo(function (e) {
  let t;
  let {
    multiplayer,
    dropdownShown,
    currentUser,
    onUserClick,
    thresholdUsesContainerWidth
  } = e;
  let f = useRef(null);
  let _ = useRef(null);
  let x = useRef(null);
  let w = useRef(null);
  let j = useRef(null);
  let I = wF();
  let k = ZO();
  let N = _$$k2();
  let O = WN();
  let M = wA();
  let [P, G] = useState(!1);
  let z = Oc();
  let W = dropdownShown?.type;
  let Y = !z && W === eA;
  let q = useMemo(() => multiplayer.allUsers.filter(e => e.sessionID !== currentUser?.sessionID), [multiplayer.allUsers, currentUser]);
  let $ = d4(e => "prototype" === e.selectedView.view || "presentation" === e.selectedView.view);
  let ee = Zr("spotlight-me");
  let et = _$$G();
  let ei = !$ && (e.disableFollowing || k || !ee);
  ei && et && (t = _$$t("left_rail.only_available_on_canvas"));
  let [er, en] = fp(ah);
  er && !Y && en(!1);
  let ea = f.current && _.current ? f.current.clientWidth - _.current.clientWidth : void 0;
  let es = Wq(ea, thresholdUsesContainerWidth);
  let {
    users,
    overflowUsers
  } = uC(q, null, !1, es);
  let ed = useMemo(() => [...users, ...overflowUsers].filter(e => e && e.userID !== currentUser.userID), [overflowUsers, users, currentUser]);
  let ec = useMemo(() => I?.filter(e => !ed.some(t => e.userID === t.userID) && e.userID !== currentUser.userID), [ed, I, currentUser]);
  let eu = am();
  let ep = useCallback(e => {
    if (dG(e), !_.current) return;
    x.current = _.current.getBoundingClientRect();
    let t = dropdownShown?.type === eA;
    M(gR({
      type: eA
    }));
    t || eu("Multiplayer Tools Opened", {
      currentUserSessionID: currentUser.sessionID,
      otherUserSessionsCount: ed.length
    });
  }, [currentUser.sessionID, M, dropdownShown?.type, ed.length, eu]);
  let eh = dR();
  let em = eh && eh.sessionID !== currentUser.sessionID ? eh : null;
  let ef = _$$q();
  let eg = tu();
  let eC = oJ();
  let eE = cJ();
  let eT = useMemo(() => ({
    label: e => e.name,
    id: e => String(e.sessionID),
    renderDisplay(e, {
      hasCursor: t
    }) {
      let n = Gc(() => {
        let t = `/files${ef}/user/${e.userID}`;
        _$$Ay.redirect(t, _$$eD ? void 0 : "_blank");
      });
      let a = [];
      let s = multiplayer.sessionNominatedByCurrentUser === e.sessionID;
      let o = multiplayer.presenterSessionID === e.sessionID;
      let l = eE && !!e.sitesViewState && _$$a(e.sitesViewState);
      o || ei || (s ? a.push({
        text: tx("collaboration.spotlight.tooltip.menu.cancel_ask_to_spotlight"),
        onClick: () => {
          AD(e) && eC(e.sessionID, multiplayer);
        },
        key: "cancel-ask-to-spotlight"
      }) : a.push({
        text: tx("collaboration.spotlight.tooltip.ask_to_spotlight"),
        onClick: () => {
          AD(e) && eg(e.sessionID, multiplayer);
        },
        disabled: l,
        key: "ask-to-spotlight"
      }));
      a.push({
        text: tx("avatar.tooltip.view_profile"),
        onClick: e => {
          n(e);
        },
        key: "view-profile"
      });
      return jsx(_$$Q, {
        user: e,
        isOverflow: !0,
        isInListbox: !0,
        containsCursor: t,
        secondaryActions: a
      }, e.sessionID);
    }
  }), [eE, multiplayer, ef, eg, eC, ei]);
  let ew = ed.length + 1;
  let eS = jsx(_$$s2, {
    featured: em,
    quickAccess: users,
    maxVisibleUsers: A8 - 1,
    onUserClick,
    totalUserCount: ew
  });
  let [ej, eN] = useState(!1);
  let {
    getTriggerProps,
    getContainerProps
  } = fP({
    isOpen: ej,
    onOpenChange: eN,
    type: "dialog",
    softDismiss: !0
  });
  let eR = getFeatureFlags().a11y_multiplayer_dropdown ? getTriggerProps() : {};
  let eD = jsx(_$$x, {
    children: jsxs("button", {
      ref: _,
      "aria-expanded": null != x.current && dropdownShown?.type === eA,
      "aria-label": _$$t("fullscreen.toolbar.multiplayer.multiplayer_tools"),
      className: g()({
        [XE]: !0,
        [yx]: overflowUsers.length > 0,
        [Ge]: 0 === overflowUsers.length,
        [wH]: Y,
        [yo]: !Y && P && !z
      }),
      "data-tooltip": _$$t("fullscreen.toolbar.multiplayer.multiplayer_tools"),
      "data-tooltip-offset-x": _.current && j.current ? _.current.offsetWidth / 2 - j.current.offsetWidth / 2 - 1.5 : 0,
      "data-tooltip-offset-y": _.current && f.current ? f.current.clientHeight / 2 - _.current.clientHeight / 2 : 0,
      "data-tooltip-type": Ib.TEXT,
      id: "multiplayer-toolbar-container",
      onClick: dG,
      onKeyDown: e => {
        hx({
          e,
          onClickHandler: e => {
            N ? O(rcl.FOLLOW_PRESENTER) : ep(e);
          },
          onEscapeHandler: () => {
            _?.current?.blur();
          }
        });
      },
      onMouseDownCapture: e => {
        N ? O(rcl.FOLLOW_PRESENTER) : ep(e);
      },
      onMouseLeave: () => {
        G(!1);
      },
      onMouseOverCapture: e => {
        G(!0);
        dG(e);
      },
      ...eR,
      children: [jsx("span", {
        ref: w,
        className: r9,
        children: jsx(_$$Q, {
          user: currentUser,
          isOverflow: !1
        }, currentUser.sessionID)
      }, currentUser.sessionID), jsxs("span", {
        "data-onboarding-key": "multiplayer-spotlight-nux-key",
        className: rR,
        children: [overflowUsers.length > 0 && jsx("span", {
          className: g()({
            [zk]: !0,
            [r9]: !0,
            [wH]: Y,
            [yo]: !Y && P && !z
          }),
          style: {
            minWidth: ew < 10 ? 8 : ew < 100 ? 15 : 22
          },
          children: `${ew}`
        }), !z && jsx("span", {
          ref: j,
          children: jsx(_$$O, {
            className: g()({
              [ai]: !0,
              [wH]: Y
            })
          })
        })]
      })]
    })
  });
  let eM = useCallback(() => {
    M(oB());
    f.current?.focus();
  }, [M]);
  let [eP, eF] = useState(null);
  useEffect(() => {
    eP && eP.focus();
  }, [eP]);
  return jsxs("span", {
    className: EI,
    ref: f,
    "data-onboarding-key": "multiplayer-users-container",
    children: [jsxs(Fragment, {
      children: [eD, eS]
    }), !getFeatureFlags().a11y_multiplayer_dropdown && dropdownShown?.type === eA && j.current && jsx(eI, {
      arrowOffsetFromRectLeft: j.current ? j.current.offsetWidth / 2 + 1 : 0,
      currentUser,
      dropdownRef: eF,
      onKeyDown: e => {
        "Escape" === e.key && eM();
      },
      onUserClick,
      peopleList: ed,
      previousViewerList: ec,
      previousViewerListRenderer: {
        label: e => e.name,
        id: e => String(e.userID),
        renderDisplay(e, {
          hasCursor: t
        }) {
          let i = Gc(() => {
            let t = `/files${ef}/user/${e.userID}`;
            _$$Ay.redirect(t, _$$eD ? void 0 : "_blank");
          });
          let n = [{
            text: tx("avatar.tooltip.view_profile"),
            onClick: e => {
              i(e);
            },
            key: "view-profile"
          }];
          return jsx(_$$Q, {
            user: e,
            isOverflow: !0,
            isInListbox: !0,
            containsCursor: t,
            secondaryActions: n
          }, e.userID);
        }
      },
      shouldDisableSpotlight: ei,
      spotlightDisabledReason: t,
      targetRect: j.current.getBoundingClientRect(),
      userListRenderer: eT
    }), getFeatureFlags().a11y_multiplayer_dropdown && j.current && jsx(ek, {
      cancelPresenterNomination: eC,
      containerProps: getContainerProps,
      currentUser,
      hidePopover: () => {
        eN(!1);
      },
      isSites: eE,
      multiplayer,
      nominatePresenter: eg,
      onUserClick,
      orgPathPart: ef,
      peopleList: ed,
      previousViewerList: ec,
      shouldDisableSpotlight: ei,
      spotlightDisabledReason: t
    })]
  });
});
let eL = "multiplayer-users-dropdown";
export const v7 = $$eO0;
export const Lx = $$ew1;