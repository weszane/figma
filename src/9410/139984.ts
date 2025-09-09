import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, memo, useCallback, useRef, useMemo, useState } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { DesignGraphElements, Fullscreen, SchemaJoinStatus } from "../figma_app/763686";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { uM } from "../905/738636";
import { b as _$$b } from "../905/985254";
import { e } from "../905/621515";
import { xA } from "../905/766303";
import { Cq, q5 } from "../figma_app/516028";
import { f as _$$f } from "../905/940356";
import { FFileType } from "../figma_app/191312";
import { WO, Ai, jm, Y3 } from "../figma_app/242339";
import { ai, f6 } from "../figma_app/915202";
import { N as _$$N } from "../figma_app/268271";
import { hH, Qe } from "../9410/728210";
import { J as _$$J } from "../figma_app/553179";
import { iF } from "../figma_app/511910";
import { en as _$$en } from "../figma_app/202626";
import { SyB } from "../figma_app/6204";
import { a8, jE, mH, Dh } from "../figma_app/467440";
import { wn, HQ, bn, Le, $2, mf, h0 } from "../figma_app/61403";
import { W as _$$W, Y as _$$Y } from "../figma_app/467880";
import { s as _$$s } from "../905/573154";
import { E as _$$E } from "../905/453826";
import { selectCurrentUser } from "../905/372672";
import { Of, XC } from "../figma_app/631279";
import { b as _$$b2 } from "../9410/881782";
import { Mz } from "../vendor/925040";
import { getInitialOptions, buildUploadUrl } from "../figma_app/169182";
import { getI18nString, renderI18nText } from "../905/303541";
import { W as _$$W2 } from "../9410/216737";
import { C7, e7, HX, b7, mg, Ur, xK, g1, $5, ok, qw, A8, $j, N1 } from "../9410/837048";
import { e as _$$e } from "../figma_app/278289";
import { cy } from "../figma_app/387100";
import { s as _$$s2 } from "../cssbuilder/589278";
import { c as _$$c } from "../905/370443";
import { $z } from "../figma_app/831799";
import { b as _$$b3 } from "../figma_app/5657";
import { p as _$$p } from "../9410/889115";
import { Z as _$$Z } from "../9410/452531";
import X from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { Kz } from "../figma_app/637027";
import { ni, _X, Yb } from "../figma_app/62612";
import { Ib } from "../905/129884";
import { e as _$$e2 } from "../905/107855";
import { CL, KB, gd } from "../figma_app/234505";
let N = [wn.CREATE_FRAME, wn.FORMAT_FRAME, wn.CREATE_TEXT, wn.FORMAT_TEXT];
function F(e, t) {
  let i = wn.CREATE_FRAME;
  let {
    tutorialPlayedUserFlag,
    stepCompletedUserFlag
  } = Of(i, t);
  return {
    name: i,
    tutorialPlayedUserFlag,
    stepCompletedUserFlag,
    duration: t ? 8900 : 5200,
    startingState: t ? {
      centerNodeMatcher: C7,
      resetStartingState: {
        hubFileId: getInitialOptions()?.cursor_bot?.product_page_hub_file_id,
        nodeWidth: e7,
        nodeHeight: HX
      }
    } : void 0,
    steps: function (e, t) {
      let i = [{
        type: HQ.SET_CHAT,
        message: "Just click and drag, like this.",
        additionalDelay: 600
      }, {
        type: HQ.CHANGE_TOOL,
        toolType: DesignGraphElements.FRAME
      }];
      t ? i.push({
        type: HQ.INSERT_NODE,
        payload: {
          nodeType: "FRAME",
          width: b7,
          height: mg
        },
        nodeName: Ur,
        locationType: bn.INSIDE_SCENE_NODE,
        location: {
          parentMatcher: C7,
          offsetX: 523,
          offsetY: 285
        },
        nodeNameForLogging: Le.PRODUCT_FRAME_CHERRIES_FRAME,
        additionalDelay: 1200,
        cursorMovementAnimationDuration: 600,
        nodeDrawingAnimationDuration: 1500
      }, {
        type: HQ.SET_CHAT,
        message: "Then add elements into frames, like images.",
        additionalDelay: 700
      }, {
        type: HQ.INSERT_NODE,
        locationType: bn.INSIDE_SCENE_NODE,
        location: {
          parentMatcher: e => xK(e, 0)
        },
        payload: {
          nodeType: "RECTANGLE",
          fillType: "image",
          imgSrc: buildUploadUrl("eccc694a7069c9cafd11d1b91b27e0a5c5e7a394"),
          width: b7,
          height: g1
        },
        nodeName: "Image",
        nodeNameForLogging: Le.CHERRIES_FRAME_CHERRIES_IMAGE,
        additionalDelay: 1e3,
        cursorMovementAnimationDuration: 600,
        cursorPosition: $2.BOTTOM_RIGHT
      }, {
        type: HQ.SELECT_SCENE_NODE,
        meetsConditions: e => xK(e, 1),
        nodeNameForLogging: Le.PRODUCT_FRAME_CHERRIES_FRAME
      }) : i.push({
        type: HQ.INSERT_NODE,
        payload: {
          nodeType: "FRAME",
          width: 117,
          height: 48
        },
        locationType: bn.DEFAULT,
        nodeName: "Frame 1",
        nodeNameForLogging: Le.NO_BASICS_FILE_FRAME,
        additionalDelay: 1500,
        cursorMovementAnimationDuration: 500,
        nodeDrawingAnimationDuration: 1500
      });
      i.push({
        type: HQ.CLEAR_CHAT
      });
      return i;
    }(0, t),
    TooltipElement: t => {
      let {
        primaryCtaProps,
        secondaryCtaProps,
        onPrimaryCtaClick,
        onSecondaryCtaClick
      } = _$$W2({
        isReplay: e,
        props: t
      });
      return jsx(_$$e, {
        onPrimaryCtaClick,
        onSecondaryCtaClick,
        primaryCtaProps,
        secondaryCtaProps,
        onClose: t.onClickClose,
        bodyText: getI18nString("cursor_bot.a_frame_will_hold_the_rest_of_your_design"),
        fromCursorBot: !0
      });
    }
  };
}
function z(e) {
  let t = useSelector(e => e.isFullscreenDocumentLoaded);
  useEffect(() => {
    t && Fullscreen.triggerAction("set-tool-type", null);
  }, [t]);
  return jsx(_$$b3, {
    disableHighlight: !0,
    dismissModal: e.onClose,
    lowerLeftText: jsx($z, {
      onClick: e.onBackCtaClick,
      className: _$$s2.textInherit.bgTransparent.$,
      trackingProperties: {
        ctaTrackingDescriptor: _$$c.BACK
      },
      children: renderI18nText("general.back")
    }),
    onPrimaryCtaClick: e.onPrimaryCtaClick,
    onSecondaryCtaClick: e.onSecondaryCtaClick,
    pointsTo: "toolbar",
    primaryCtaProps: e.primaryCtaProps,
    secondaryCtaProps: e.secondaryCtaProps,
    targetKey: "tool-type-onboarding",
    title: renderI18nText("cursor_bot.add_words_where_needed"),
    trackingContextName: "Cursor Bot Create Text Step",
    children: renderI18nText("cursor_bot.all_designs_need_words_so_create_a_text_layer_anywhere_and_start_typing_simple_as_that")
  });
}
function V(e, t, i) {
  let n = wn.CREATE_TEXT;
  let {
    tutorialPlayedUserFlag,
    stepCompletedUserFlag
  } = Of(n, t);
  return {
    name: n,
    tutorialPlayedUserFlag,
    stepCompletedUserFlag,
    duration: t ? 11400 : 6600,
    startingState: t ? {
      centerNodeMatcher: e => xK(e, $5),
      resetStartingState: {
        hubFileId: getInitialOptions()?.cursor_bot?.ginger_no_text_hub_file_id,
        nodeWidth: e7,
        nodeHeight: HX
      }
    } : {
      centerNodeMatcher: ok
    },
    steps: function ({
      shouldSkipYup: e,
      isInBasicsFile: t
    }) {
      let i = [];
      t ? i.push({
        type: HQ.SET_CHAT,
        message: (e ? "" : "Yup: ") + "Just click into your frame and type.",
        additionalDelay: 500
      }) : i.push({
        type: HQ.SET_CHAT,
        message: (e ? "" : "Yup: ") + "Just click into your frame and type.",
        additionalDelay: 500,
        hasBackupMessage: !0,
        shouldShowBackupMessage: e => void 0 === cy(ok, e),
        backupMessage: (e ? "" : "Yup: ") + "Just click to add a text node and type."
      });
      i.push({
        type: HQ.CHANGE_TOOL,
        toolType: DesignGraphElements.TYPE,
        additionalDelay: 1200
      });
      t ? i.push({
        type: HQ.INSERT_NODE,
        nodeName: qw,
        payload: {
          nodeType: "TEXT",
          text: qw,
          height: 16
        },
        locationType: bn.INSIDE_SCENE_NODE,
        location: {
          parentMatcher: e => xK(e, 1),
          offsetX: 24,
          offsetY: 334
        },
        cursorPosition: $2.BOTTOM_LEFT,
        nodeNameForLogging: Le.CHERRIES_FRAME_CHERRIES_TEXT,
        cursorMovementAnimationDuration: 600,
        additionalDelay: 400
      }, {
        type: HQ.CHANGE_TOOL,
        toolType: DesignGraphElements.TYPE,
        additionalDelay: 300
      }, {
        type: HQ.INSERT_NODE,
        nodeName: A8,
        payload: {
          nodeType: "TEXT",
          text: A8,
          height: 16
        },
        locationType: bn.INSIDE_SCENE_NODE,
        location: {
          parentMatcher: e => xK(e, 2),
          offsetX: 316,
          offsetY: 334
        },
        cursorPosition: $2.BOTTOM_LEFT,
        nodeNameForLogging: Le.CHERRIES_FRAME_PRICE_TEXT,
        additionalDelay: 400
      }, {
        type: HQ.CHANGE_TOOL,
        toolType: DesignGraphElements.TYPE,
        additionalDelay: 300
      }, {
        type: HQ.INSERT_NODE,
        nodeName: $j,
        payload: {
          nodeType: "TEXT",
          text: $j,
          height: 16
        },
        locationType: bn.INSIDE_SCENE_NODE,
        location: {
          parentMatcher: e => xK(e, 3),
          offsetX: 24,
          offsetY: 368
        },
        cursorPosition: $2.BOTTOM_LEFT,
        nodeNameForLogging: Le.CHERRIES_FRAME_GROWN_TEXT,
        additionalDelay: 1e3
      }) : i.push({
        type: HQ.INSERT_NODE,
        nodeName: N1,
        payload: {
          nodeType: "TEXT",
          text: N1,
          width: 29,
          height: 16,
          shouldCenterAlign: !0,
          typingDurationPerCharMs: 200
        },
        cursorPosition: $2.BOTTOM_LEFT,
        locationType: bn.INSIDE_SCENE_NODE,
        location: {
          parentMatcher: ok,
          offsetX: -14.5,
          offsetY: -7.5,
          shouldPositionRelativeToCenterOfParent: !0,
          useDefaultLocationIfParentNotFound: !0
        },
        nodeNameForLogging: Le.NO_BASICS_FILE_TEXT,
        cursorMovementAnimationDuration: 600,
        additionalDelay: 1500
      });
      return i;
    }({
      shouldSkipYup: e || !i,
      isInBasicsFile: t
    }),
    TooltipElement: t => {
      let {
        primaryCtaProps,
        secondaryCtaProps,
        onPrimaryCtaClick,
        onSecondaryCtaClick
      } = _$$W2({
        isReplay: e,
        props: t
      });
      return jsx(z, {
        onPrimaryCtaClick,
        onSecondaryCtaClick,
        primaryCtaProps,
        secondaryCtaProps,
        onClose: t.onClickClose,
        onBackCtaClick: t.onClickBack
      });
    }
  };
}
let J = Mz([e => e.userFlags, (e, t) => t], (e, t) => t.reduce((t, i) => ({
  ...t,
  [i.name]: !!e[i.stepCompletedUserFlag]
}), {}));
var q = (e => (e.PanAndZoom = "pan_and_zoom", e.YoureAllSet = "youre_all_set", e))(q || {});
var Z = X;
let en = memo(({
  currentTutorial: e,
  stateManager: t
}) => {
  let i;
  let a = useAtomWithSubscription(a8);
  let s = useAtomWithSubscription(jE);
  let l = useCallback(() => {
    let e = u.current;
    return e ? Math.min(Math.round(e / s * 100), 100) : 0;
  }, [s]);
  useEffect(() => {
    let i = i => {
      i && 27 === i.keyCode && XC(a) && (trackEventAnalytics("Cursor Bot Tutorial Canceled via Escape", {
        tutorialName: e.name
      }), t.stopCurrentTutorial({
        timeElapsed: u.current,
        tutorialPercentageComplete: l(),
        tutorialName: e.name,
        stopTrigger: mf.ESC_KEY
      }));
    };
    window.addEventListener("keydown", i);
    return () => window.removeEventListener("keydown", i);
  }, [a, t, l, e.name]);
  let [d, c] = useAtomValueAndSetter(mH);
  let u = useRef(0);
  let p = useRef();
  if (useEffect(() => {
    if (!XC(a)) {
      u.current = 0;
      clearInterval(p.current);
      p.current = void 0;
      return;
    }
    let e = setInterval(() => u.current += 17, 17);
    p.current = e;
    return () => clearInterval(e);
  }, [a]), XC(a)) {
    let e = s - u.current;
    i = {
      animation: `50% center ${e}ms linear`
    };
  }
  let h = ni();
  let m = useMemo(() => ({
    top: h.y + hH + 4
  }), [h.y]);
  return jsx("div", {
    className: CL,
    style: m,
    children: jsx("div", {
      className: Z()({
        [_$$e2]: d
      }),
      onAnimationEnd: () => {
        c(!1);
      },
      children: jsxs("div", {
        className: KB,
        style: i,
        children: [jsx(Kz, {
          multiple: 1,
          direction: "x"
        }), jsx("div", {
          children: e.name
        }), jsx(Kz, {
          multiple: 1,
          direction: "x"
        }), jsx($z, {
          className: gd,
          onClick: () => {
            t.stopCurrentTutorial({
              timeElapsed: u.current,
              tutorialPercentageComplete: l(),
              tutorialName: e.name,
              stopTrigger: mf.STOP_BTN
            });
          },
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": getI18nString("cursor_bot.stop_tutorial"),
          trackingProperties: {
            trackingDescriptor: _$$c.STOP_TUTORIAL,
            tutorialName: e.name
          },
          "aria-label": getI18nString("cursor_bot.stop_tutorial"),
          children: renderI18nText("collaboration.spotlight.bell.presenter.stop")
        })]
      })
    })
  });
});
let ea = "create_frame_animation--frameCornerSquare--TEcO4";
function es() {
  let e = _X({
    subscribeToUpdates_expensive: !1
  });
  let t = useAtomWithSubscription(Dh);
  if (null == t) return null;
  let {
    x,
    y,
    width,
    height,
    duration
  } = t;
  let d = Yb(e, {
    x,
    y,
    width,
    height
  });
  let c = e.x + d.x;
  let u = e.y + d.y;
  return jsx("div", {
    style: {
      top: u,
      left: c,
      width: `${d.width}px`,
      height: `${d.height}px`,
      position: "absolute"
    },
    children: jsxs("div", {
      style: {
        border: "1px solid #4497F7",
        animationDuration: `${duration}ms`
      },
      className: "create_frame_animation--animationFrame--4fuzR",
      children: [jsx("div", {
        style: {
          top: -3,
          left: -3,
          background: "#ffffff"
        },
        className: ea
      }), jsx("div", {
        style: {
          top: -3,
          left: "calc(100% - 3px)",
          background: "#ffffff"
        },
        className: ea
      }), jsx("div", {
        style: {
          top: "calc(100% - 3px)",
          left: "calc(100% - 3px)",
          background: "#ffffff"
        },
        className: ea
      }), jsx("div", {
        style: {
          top: "calc(100% - 3px)",
          left: -3,
          background: "#ffffff"
        },
        className: ea
      })]
    })
  });
}
export function $$eo1() {
  let {
    isShowing,
    show,
    complete,
    uniqueId
  } = e({
    overlay: SyB,
    priority: _$$N.OVERRIDING_MODAL
  });
  let O = useDispatch();
  let L = useStore();
  let R = useSelector(e => e.isFullscreenDocumentLoaded);
  let D = useSelector(e => e.mirror.appModel.multiplayerSessionState === SchemaJoinStatus.JOINED);
  let M = _$$b2();
  let P = useAtomWithSubscription(a8);
  let B = _$$f("has_cursor_bot_onboarding_v2");
  !function (e, t, i) {
    let r = selectCurrentUser();
    let n = useDispatch();
    let s = _$$f("has_cursor_bot_onboarding_v2");
    let o = Cq({
      useSinatraType: !0
    });
    let l = WO(r?.id, o, ["exp_cursor_bot_onboarding"]);
    let c = e => {
      let r = {
        ...function (e) {
          let t = {
            format_text_step_shown: !1,
            design_panel_step_shown: !1
          };
          for (let i of (e ? t.cursor_bot_v2__basics_onboarded = !1 : (t.has_zoomed_in_design_file = !1, t.has_panned_in_design_file = !1, t.cursor_bot_v2__basics_onboarded = !1, t.cursor_bot_v2__no_basics_onboarded = !1), N)) {
            let {
              tutorialPlayedUserFlag,
              stepCompletedUserFlag
            } = Of(i, e);
            t[tutorialPlayedUserFlag] = !1;
            t[stepCompletedUserFlag] = !1;
          }
          return t;
        }(l),
        cursor_bot_v2__basics_file__started_flow: !1,
        cursor_bot_v2_has_greeted_with_wave: !1
      };
      e && (r.has_cursor_bot_onboarding_v2 = !0);
      n(_$$b(r));
      t || i();
    };
    _$$E(e, _$$W, () => {
      o?.editor_type === FFileType.DESIGN ? c(!0) : n(_$$s.error("Cursor Bot can only be run in Figma design."));
    });
    _$$E(e, "Reset Onboarding", () => {
      s && o?.editor_type === FFileType.DESIGN && c();
    });
  }(uniqueId, isShowing, show);
  let [U, G] = useState(_$$en.FORWARD);
  let K = function () {
    let e = _$$f("has_cursor_bot_onboarding_v2");
    let t = _$$f("cursor_bot_v2__basics_file__started_flow");
    let i = Ai(["exp_cursor_bot_onboarding"]);
    let r = jm(i);
    let s = function (e) {
      let t = !!_$$f("cursor_bot_v2_has_greeted_with_wave");
      let i = !!_$$f(Of(wn.CREATE_FRAME, e).tutorialPlayedUserFlag);
      let r = !!_$$f(Of(wn.FORMAT_FRAME, e).tutorialPlayedUserFlag);
      let a = !!_$$f(Of(wn.CREATE_TEXT, e).tutorialPlayedUserFlag);
      let s = !!_$$f(Of(wn.FORMAT_TEXT, e).tutorialPlayedUserFlag);
      return useMemo(() => e ? [F(i, e), V(a, e, t), _$$Z(s, e), _$$p(r, e)] : [F(i, e), _$$p(r, e), V(a, e, t), _$$Z(s, e)], [e, t, i, a, s, r]);
    }(i);
    let o = useSelector(e => J(e, s));
    if (!e || r || !i && t) return null;
    let l = 0;
    if (s.forEach(e => {
      o[e.name] && (l += 1);
    }), l >= s.length) return i ? "youre_all_set" : "pan_and_zoom";
    let d = {
      ...s[l]
    };
    l > 0 && (d.previousTutorialCompleteUserFlag = s[l - 1].stepCompletedUserFlag);
    return d;
  }();
  let H = Ai(["exp_cursor_bot_onboarding"]);
  let z = Y3();
  let X = jm(H);
  let Z = z || X;
  let Q = q5()?.canEdit;
  useEffect(() => {
    !Z && !isShowing && B && K && R && D && Q && show();
  }, [Z, isShowing, show, B, K, R, D, Q]);
  useEffect(() => {
    isShowing && (X || !K) && complete();
  }, [isShowing, complete, X, K]);
  let $ = _$$f("cursor_bot_v2__basics_file__started_flow");
  if (useEffect(() => {
    isShowing && H && !$ && O(_$$b({
      cursor_bot_v2__basics_file__started_flow: !0
    }));
  }, [O, H, isShowing, $]), !isShowing || !K) return null;
  let ee = () => {
    H ? O(_$$b({
      cursor_bot_v2__basics_onboarded: !0
    })) : O(_$$b({
      cursor_bot_v2__no_basics_onboarded: !0
    }));
    complete();
  };
  if (K === q.YoureAllSet) return jsx(_$$J, {
    onPrimaryCtaClick: () => {
      let e = xA({
        state: L.getState(),
        openNewFileIn: ai.NEW_TAB,
        folderOverride: "drafts",
        trackingInfo: {
          from: f6.CURSOR_BOT_END_MODAL,
          selectedView: L.getState().selectedView
        },
        editorType: FFileType.DESIGN
      });
      O(uM(e));
      ee();
    },
    onSecondaryCtaClick: ee,
    onClose: ee
  });
  if (K === q.PanAndZoom) return jsx(iF, {
    markComplete: ee
  });
  if (P === h0.PLAYING) return jsx($$el0, {
    cursorBotStateManager: M,
    currentTutorial: K
  });
  let et = () => {
    K.previousTutorialCompleteUserFlag && (G(_$$en.BACKWARD), O(_$$b({
      [K.previousTutorialCompleteUserFlag]: !1
    })));
  };
  let ei = () => {
    G(_$$en.FORWARD);
    O(_$$b({
      [K.stepCompletedUserFlag]: !0
    }));
  };
  return jsx(K.TooltipElement, {
    onClickShowMe: () => M.runTutorial(K),
    onClickNext: ei,
    onClickClose: ee,
    onClickBack: et,
    skip: U === _$$en.BACKWARD ? et : ei
  });
}
export function $$el0({
  cursorBotStateManager: e,
  currentTutorial: t
}) {
  return jsxs(Fragment, {
    children: [jsx(_$$Y, {}), jsx(en, {
      currentTutorial: t,
      stateManager: e
    }), jsx(es, {}), jsx(Qe, {})]
  });
}
export const a = $$el0;
export const S = $$eo1;