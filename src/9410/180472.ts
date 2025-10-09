import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useCallback, memo, useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "../905/443068";
import { A } from "../905/251970";
import { WhiteboardVotingCppBindings, SessionStatus } from "../figma_app/763686";
import { x as _$$x } from "../vendor/194682";
import { P as _$$P } from "../vendor/348225";
import { AnimatePresence } from "../vendor/930821";
import { fU } from "../905/492004";
import { useHandleMouseEvent } from "../figma_app/878298";
import { RecordingScrollContainer } from "../905/347284";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { selectVotePin, deselectVotePin } from "../figma_app/124493";
import { isNodeContainedIn } from "../905/797478";
import { wW } from "../figma_app/656450";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { k6 } from "../figma_app/565197";
import { WJ, tR } from "../figma_app/407856";
import { v as _$$v, m as _$$m } from "../3276/99493";
import { Ys, xL } from "../9410/995608";
import { oC, zi, yn } from "../9410/960980";
import { EE, lB } from "../figma_app/731583";
import { getViewportInfo, scaleRect, isRectInside } from "../figma_app/62612";
import { $tX } from "../figma_app/27776";
import { UD, yM, wx, cG, W0, sI, hQ, TK, C0, D9, QE, WK, _v, SD, nT, fK, Qf, EA, iG, O8 } from "../3276/10897";
function I({
  nodePosition: e,
  isExpanded: t,
  children: i
}) {
  let a = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let s = useMemo(() => scaleRect(a, e.absoluteBounds), [e.absoluteBounds, a]);
  let o = useMemo(() => isRectInside(s, a), [s, a]);
  let l = useMemo(() => {
    if (!s) return {};
    let e = s.x + a.x;
    let i = s.y + a.y;
    return {
      width: s.width,
      height: s.height,
      position: "fixed",
      transform: `translate(${e}px, ${i}px)`,
      pointerEvents: "none",
      zIndex: t ? 1 : 0
    };
  }, [a.x, a.y, s, t]);
  return o ? jsx("div", {
    style: l,
    children: jsx("div", {
      style: {
        pointerEvents: "all"
      },
      children: i({
        viewportZoom: a.zoomScale
      })
    })
  }) : null;
}
let $$A2 = 32;
let $$O0 = 7.5;
let $$L3 = 256;
var R = (e => (e.DEFAULT = "default", e.HOVERED = "hovered", e.SELECTED = "selected", e.DIMMED = "dimmed", e))(R || {});
var D = (e => (e.LARGE = "large", e.MEDIUM = "medium", e.SMALL = "small", e.X_SMALL = "xSmall", e))(D || {});
function M({
  clientHeight: e,
  scrollHeight: t,
  scrollTop: i
}) {
  return 1 > Math.abs(t - e - i);
}
function P({
  nodeVoteInfo: e,
  isMostVoted: t,
  isSelected: i,
  isHoveredInModal: a,
  isOtherPinSelected: s,
  selectPin: o,
  deselectPin: d,
  nodePosition: c,
  currentUserId: u
}) {
  let [p, h] = useState(!1);
  let [m, f] = useState(p);
  let [g, _] = useState(!1);
  useEffect(() => {
    if (!p) {
      f(!1);
      return;
    }
    let e = setTimeout(() => f(!0), 100);
    return () => clearTimeout(e);
  }, [p]);
  let x = useCallback(() => o(e.guid), [o, e.guid]);
  let y = useCallback(() => d(e.guid), [d, e.guid]);
  let b = i ? "selected" : m || a ? "hovered" : s ? "dimmed" : "default";
  let C = "selected" === b || "hovered" === b;
  useEffect(() => {
    C && !g ? (WhiteboardVotingCppBindings.setVoteStampsHiddenOnVotedNode(e.guid, !0), _(!0)) : !C && g && (WhiteboardVotingCppBindings.setVoteStampsHiddenOnVotedNode(e.guid, !1), _(!1));
  }, [C, g, e.guid]);
  return jsx(I, {
    nodePosition: c,
    isExpanded: ["selected", "hovered"].includes(b),
    children: ({
      viewportZoom: i
    }) => jsx(F, {
      recordingKey: `votePin-nodeId${e.guid}`,
      nodeVoteInfo: e,
      isMostVoted: t,
      pinState: b,
      setIsHovered: h,
      selectPin: x,
      deselectPin: y,
      viewportSize: i > .75 ? "large" : i > .5 ? "medium" : i > .25 ? "small" : "xSmall",
      currentUserId: u
    })
  });
}
let F = memo(function ({
  nodeVoteInfo: e,
  isMostVoted: t,
  pinState: i,
  setIsHovered: a,
  selectPin: l,
  deselectPin: p,
  viewportSize: _,
  currentUserId: y,
  recordingKey: b
}) {
  let C = useRef(null);
  let v = useRef(null);
  let [E, T] = useState(0);
  let [S, j] = useState(!1);
  let [I, L] = useState(!0);
  let [R, D] = useState(0);
  let [P, F] = useState(!1);
  let K = oC(e);
  let z = {
    large: {
      paddingTop: "2px",
      paddingBottom: "2px",
      paddingLeft: "10px",
      paddingRight: "10px"
    },
    medium: {
      paddingTop: "1px",
      paddingBottom: "1px",
      paddingLeft: "8px",
      paddingRight: "8px"
    },
    small: {
      paddingTop: "0px",
      paddingBottom: "0px",
      paddingLeft: "7px",
      paddingRight: "7px"
    },
    xSmall: {
      paddingTop: "0px",
      paddingBottom: "0px",
      paddingLeft: "6px",
      paddingRight: "6px"
    }
  }[_];
  let V = {
    large: 1,
    medium: .9,
    small: .8,
    xSmall: .7
  }[_];
  useEffect(() => {
    if ("selected" !== i) return;
    let e = e => {
      isNodeContainedIn(e.target, C.current) || p();
    };
    window.addEventListener("click", e);
    return () => window.removeEventListener("click", e);
  }, [i, p, e.guid]);
  let W = t ? styleBuilderInstance.colorBgvotingtertiary.$.backgroundColor : styleBuilderInstance.colorBg.$.backgroundColor;
  let Y = {
    default: {
      transform: `scale(${V})`,
      backgroundColor: W,
      borderColor: W,
      opacity: 1,
      ...z
    },
    dimmed: {
      transform: `scale(${V})`,
      backgroundColor: W,
      borderColor: W,
      opacity: .5,
      ...z
    },
    hovered: {
      transform: "scale(1)",
      backgroundColor: W,
      borderColor: W,
      opacity: 1,
      paddingTop: "8px",
      paddingBottom: "12px",
      paddingLeft: "16px",
      paddingRight: "0px"
    },
    selected: {
      transform: "scale(1)",
      backgroundColor: W,
      ...styleBuilderInstance.colorBorderSelectedStrong.$,
      opacity: 1,
      paddingTop: "8px",
      paddingBottom: "12px",
      paddingLeft: "16px",
      paddingRight: "0px"
    }
  };
  let J = {
    default: {
      width: "0px",
      height: "0px",
      marginLeft: "0px",
      marginRight: "0px",
      opacity: 0
    },
    dimmed: {
      width: "0px",
      height: "0px",
      marginLeft: "0px",
      marginRight: "0px",
      opacity: 0
    },
    hovered: {
      width: $tX,
      height: $tX,
      marginLeft: "8px",
      marginRight: "12px",
      opacity: 0
    },
    selected: {
      width: $tX,
      height: $tX,
      marginLeft: "8px",
      marginRight: "12px",
      opacity: 1
    }
  };
  let q = useMemo(() => {
    let t = zi(y);
    return Object.entries(e.userIdToNodeVotes).sort((e, i) => t(e[0], i[0]));
  }, [e.userIdToNodeVotes, y]);
  let X = q.length > 3;
  let Z = X ? q.slice(0, 2) : q;
  let Q = X ? q.slice(2) : [];
  let $ = {
    hovered: {
      height: `${$$A2}px`
    },
    selected: {
      height: "auto"
    }
  };
  let ee = useCallback(e => {
    let t = 0 !== e;
    t !== S && j(t);
    let i = v.current?.getScrollHeight();
    let r = v.current?.getTrackHeight();
    let n = void 0 === i || void 0 === r || M({
      clientHeight: r,
      scrollHeight: i,
      scrollTop: e
    });
    n !== I && L(n);
  }, [S, I]);
  let et = useCallback(e => {
    if (!e || !v.current) {
      j(!1);
      L(!0);
      return;
    }
    let t = v.current.getScrollTop();
    let i = v.current.getScrollHeight();
    let r = v.current.getTrackHeight();
    j(0 !== t);
    L(M({
      clientHeight: r,
      scrollHeight: i,
      scrollTop: t
    }));
  }, []);
  return jsxs(_$$x, {
    transition: {
      duration: .1,
      ease: "easeInOut"
    },
    children: [jsx("div", {
      role: "button",
      tabIndex: 0,
      className: UD,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      onClick: useHandleMouseEvent(b, "click", l),
      ref: C,
      style: {
        transform: `translateX(${10 - E}px)`
      },
      id: e.guid,
      children: jsxs(_$$P.div, {
        className: yM,
        initial: !1,
        animate: i,
        variants: Y,
        children: [jsxs("p", {
          className: wx,
          children: [jsx(B, {
            numTotalVotes: K,
            isMostVoted: t
          }), jsx(_$$P.span, {
            className: cG,
            initial: !1,
            animate: i,
            variants: J,
            children: "selected" === i && jsx(IconButton, {
              onClick: e => {
                e.stopPropagation();
                p();
                a(!1);
              },
              "aria-label": getI18nString("general.close"),
              children: jsx(A, {})
            })
          })]
        }), jsx(AnimatePresence, {
          children: ["selected", "hovered"].includes(i) && jsxs(Fragment, {
            children: [jsx(_$$P.div, {
              className: W0,
              animate: "selected" === i && S && !P ? "scrolled" : "notScrolled",
              initial: {
                marginTop: "0px",
                opacity: 0
              },
              variants: {
                notScrolled: {
                  marginTop: "4px",
                  opacity: 0
                },
                scrolled: {
                  marginTop: "4px",
                  opacity: 1
                }
              },
              exit: {
                marginTop: "0px",
                opacity: 0
              }
            }), jsx(_$$P.div, {
              className: sI,
              initial: {
                width: "0px",
                height: "0px",
                opacity: 0,
                transform: `scale(${1 / V})`
              },
              animate: {
                width: "240px",
                height: "auto",
                opacity: 1,
                transform: "scale(1)"
              },
              exit: {
                width: "0px",
                height: "0px",
                opacity: 0,
                transform: `scale(${1 / V})`
              },
              children: jsx(RecordingScrollContainer, {
                ref: v,
                maxHeight: $$A2 * $$O0,
                width: 240,
                allowScrollAndZoomOver: !0,
                onScroll: ee,
                onCanScrollChange: et,
                forceRerenderCount: R,
                children: jsxs("ul", {
                  className: hQ,
                  children: [Z.map(([e, t]) => jsx(G, {
                    userId: e,
                    nodeVotes: t
                  }, e)), X && jsxs(_$$P.div, {
                    initial: !1,
                    animate: i,
                    variants: $,
                    onAnimationStart: () => F(!0),
                    onAnimationComplete: () => {
                      F(!1);
                      D(e => e + 1);
                    },
                    children: ["hovered" === i && jsx(H, {
                      overflowCount: q.length - Z.length
                    }), "selected" === i && Q.map(([e, t]) => jsx(G, {
                      userId: e,
                      nodeVotes: t
                    }, e))]
                  })]
                })
              })
            }), jsx(_$$P.div, {
              className: W0,
              animate: "selected" !== i || I || P ? "hide" : "show",
              initial: {
                opacity: 0
              },
              variants: {
                show: {
                  opacity: 1
                },
                hide: {
                  opacity: 0
                }
              },
              exit: {
                opacity: 0
              }
            })]
          })
        })]
      })
    }), jsx(U, {
      reportWidth: T,
      numTotalVotes: K,
      isMostVoted: t,
      scale: V,
      padding: z
    })]
  });
});
function B({
  numTotalVotes: e,
  isMostVoted: t
}) {
  return jsxs("span", {
    className: TK,
    children: [jsx("span", {
      children: renderI18nText("voting.pin.votes", {
        numVotes: e
      })
    }), t && jsx("img", {
      src: Ys,
      className: C0,
      alt: getI18nString("voting.pin.medal_img_alt")
    })]
  });
}
function U({
  reportWidth: e,
  numTotalVotes: t,
  isMostVoted: i,
  scale: a,
  padding: s
}) {
  let o = useRef(null);
  useLayoutEffect(() => {
    let t = o.current;
    if (t) {
      let {
        width
      } = t.getBoundingClientRect();
      window.myEl = t;
      e(width);
    }
  }, [o, t, i, a, s.paddingLeft, s.paddingRight, s.paddingTop, s.paddingBottom, e]);
  return jsx("div", {
    className: D9,
    style: {
      transform: `scale(${a})`
    },
    "aria-hidden": !0,
    children: jsx("span", {
      style: s,
      ref: o,
      children: jsx(B, {
        numTotalVotes: t,
        isMostVoted: i
      })
    })
  });
}
function G({
  userId: e,
  nodeVotes: t
}) {
  let i = t.length > 3;
  let n = i ? t.slice(0, 2) : t;
  let a = t.length - 2;
  return jsxs("li", {
    className: QE,
    children: [jsx(K, {
      userId: e
    }), jsxs("div", {
      className: WK,
      children: [n.map(e => jsx(z, {
        stampId: e
      }, e)), i && jsx("span", {
        className: _v,
        children: a
      })]
    })]
  }, e);
}
function K({
  userId: e
}) {
  let {
    user,
    loading
  } = wW(e);
  return jsxs(Fragment, {
    children: [jsx(_$$v, {
      userId: e,
      user,
      loading,
      size: 24,
      loadingClassName: SD
    }), jsx(_$$m, {
      userId: e,
      user,
      loading,
      defaultClassName: nT,
      loadingClassName: fK
    })]
  });
}
function H({
  overflowCount: e
}) {
  return jsxs("li", {
    className: Qf,
    children: [jsx("div", {
      className: EA,
      children: jsx(xL, {})
    }), jsx("span", {
      className: iG,
      children: renderI18nText("voting.pin.voter_list_overflow", {
        numOverflowingVoters: e
      })
    })]
  });
}
function z({
  stampId: e
}) {
  let t = fU();
  let i = useDeepEqualSceneValue((e, t) => {
    let i = e.get(t);
    return i ? i.name : null;
  }, e);
  let n = (() => {
    let e = WJ.find(e => e.label === i);
    return e && k6(e, t) || tR;
  })();
  let a = i ? getI18nString("voting.pin.stamp_preview_alt_with_type", {
    stampType: i
  }) : getI18nString("voting.pin.stamp_preview_alt_without_type");
  return jsx("img", {
    className: O8,
    src: n,
    alt: a
  });
}
export function $$V1({
  votedNodes: e,
  votingStage: t,
  selectedNodeId: i,
  currentUserId: s
}) {
  let o = useDispatch<AppDispatch>();
  let d = useSelector(e => e.voting.hoveredInModalVotePinId);
  let c = useMemo(() => yn(e), [e]);
  let u = useCallback(e => o(selectVotePin({
    votePinId: e
  })), [o]);
  let p = useCallback(e => o(deselectVotePin({
    votePinId: e
  })), [o]);
  let h = function ({
    votedNodes: e
  }) {
    let [t, i] = useState({});
    let r = useMemo(() => e.map(e => e.guid), [e]);
    useEffect(() => {
      if (!r.length) {
        i({});
        return;
      }
      let e = "vote-pins";
      let t = EE(e, r, e => {
        i(t => ({
          ...t,
          [e.nodeId]: e.position
        }));
      });
      i(Object.entries(t.currentNodePosition).reduce((e, [t, i]) => (i && (e[t] = i.position), e), {}));
      return () => {
        lB(e);
      };
    }, [r]);
    return t;
  }({
    votedNodes: e
  });
  return jsx(Fragment, {
    children: e.map(e => {
      let n = h[e.guid];
      if (!n) return null;
      let a = 1 === c.size && c.has(e.guid) && t === SessionStatus.ENDED;
      return jsx(P, {
        currentUserId: s,
        deselectPin: p,
        isHoveredInModal: d === e.guid,
        isMostVoted: a,
        isOtherPinSelected: !!i && i !== e.guid,
        isSelected: i === e.guid,
        nodePosition: n,
        nodeVoteInfo: e,
        selectPin: u
      }, e.guid);
    })
  });
}
export const V3 = $$O0;
export const ML = $$V1;
export const w = $$A2;
export const HG = $$L3;
