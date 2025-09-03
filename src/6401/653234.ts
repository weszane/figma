import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, useContext, useCallback, useMemo, useRef, useState, useEffect, createRef } from "react";
import { getSingletonSceneGraph } from "../905/700578";
import { Pt } from "../figma_app/806412";
import { Fk, x3 } from "../figma_app/167249";
import { E as _$$E } from "../905/632989";
import { l as _$$l } from "../905/103989";
import { f as _$$f } from "../905/640587";
import { J as _$$J } from "../905/614223";
import { nc, l7 } from "../905/189185";
import j from "classnames";
import { L as _$$L } from "../905/408237";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { Qx, Uu } from "../figma_app/8833";
import { p as _$$p } from "../905/167135";
import { iZ } from "../905/372672";
import { Ib } from "../905/129884";
import { c as _$$c } from "../905/784033";
import { aF } from "../441/443466";
import { A as _$$A } from "../b2835def/807151";
import { gD, wL, lu, DR, E$ } from "../441/430710";
import { Ay } from "../905/612521";
import { uG } from "../figma_app/778880";
import { hk } from "../figma_app/632319";
import { Y as _$$Y } from "../905/246212";
import { oW } from "../905/675859";
import { A as _$$A2 } from "../b2835def/363895";
import { WW } from "../905/521428";
import { _ as _$$_ } from "../905/410717";
import { j as _$$j } from "../905/519202";
import { wA } from "../vendor/514228";
import { g as _$$g } from "../905/125190";
import { e as _$$e } from "../905/149844";
import { s as _$$s2 } from "../905/573154";
import { ServiceCategories as _$$e2 } from "../905/165054";
import { KJ } from "../figma_app/916560";
import { x1 } from "../905/714362";
import { kt } from "../figma_app/858013";
import { r as _$$r } from "../905/955316";
import { UD } from "../figma_app/624361";
import { E as _$$E2 } from "../905/695476";
let o = createContext(null);
function p() {
  let e = useContext(o);
  if (!e) throw Error("useFlappConfigContext must be used within a FlappConfigProvider");
  return e;
}
let c = createContext(null);
function d() {
  let e = useContext(c);
  if (!e) throw Error("useFlappParticipantData must be used within a FlappParticipantDataProvider");
  return e;
}
function u(e) {
  return function ({
    nodeId: t,
    isReadOnly: l,
    invalidateThumbnail: i
  }) {
    let p = useCallback((e, l) => {
      let a = getSingletonSceneGraph().get(t);
      a && a.setInteractiveSlideConfigData(e, l);
    }, [t]);
    let d = useCallback(e => {
      let l = getSingletonSceneGraph().get(t);
      l && l.deleteInteractiveSlideConfigData(e);
    }, [t]);
    let u = useCallback((e, l) => {
      let a = getSingletonSceneGraph().get(t);
      a && a.setInteractiveSlideParticipantData(e, l);
    }, [t]);
    let m = useCallback(() => {
      let e = getSingletonSceneGraph().get(t);
      e && e.resetInteractiveSlideParticipantData();
    }, [t]);
    let f = Fk((e, t) => {
      let l = e.get(t);
      return l ? l.interactiveSlideConfigData : null;
    }, t);
    let h = Fk((e, t) => {
      let l = e.get(t);
      return l ? l.interactiveSlideParticipantData : null;
    }, t);
    return f && h ? jsx(o.Provider, {
      value: {
        configData: f,
        isViewer: !1,
        isPresenter: !1,
        nodeId: t,
        isReadOnly: l,
        invalidateThumbnail: i,
        setConfigData: p,
        deleteConfigData: d
      },
      children: jsx(c.Provider, {
        value: {
          participantData: h,
          setParticipantData: u,
          resetParticipantData: m
        },
        children: jsx(e, {
          configData: f,
          deleteConfigData: d,
          invalidateThumbnail: i,
          isPresenter: !1,
          isReadOnly: l,
          isViewer: !1,
          nodeId: t,
          participantData: h,
          recordingKey: `flapp.${t}`,
          resetParticipantData: m,
          setConfigData: p,
          setParticipantData: u
        })
      })
    }) : null;
  };
}
function m(e) {
  return function ({
    viewer: t,
    nodeId: l
  }) {
    let n = x3((e, t) => {
      let l = e.getPrototypeNode(t);
      return l ? e.nodeInteractiveSlideConfigData(l) : null;
    }, l);
    let i = x3((e, t) => {
      let l = e.getPrototypeNode(t);
      return l ? e.nodeInteractiveSlideParticipantData(l) : null;
    }, l);
    let p = useCallback((e, a) => {
      t.setInteractiveSlideConfigData(l, e, a);
    }, [t, l]);
    let d = useCallback((e, a) => {
      t.setInteractiveSlideParticipantData(l, e, a);
    }, [t, l]);
    if (!n || !i) return null;
    let u = t.isPresenterSession();
    return jsx(o.Provider, {
      value: {
        configData: n,
        isViewer: !0,
        isPresenter: u,
        nodeId: l,
        isReadOnly: !1,
        invalidateThumbnail: void 0,
        setConfigData: p,
        deleteConfigData: void 0
      },
      children: jsx(c.Provider, {
        value: {
          participantData: i,
          setParticipantData: d,
          resetParticipantData: void 0
        },
        children: jsx(e, {
          configData: n,
          participantData: i,
          setConfigData: p,
          setParticipantData: d,
          recordingKey: `flapp.${l}`,
          isViewer: !0,
          isPresenter: u,
          nodeId: l,
          viewer: t
        })
      })
    });
  };
}
function f(e, t) {
  return (t ? Pt("flapp", e, t) : Pt("flapp", e)) || `flapp.${e}`;
}
var b = j;
let E = "alignment_scale--prompt--D-cNA";
function T({
  recordingKey: e,
  prompt: t,
  setPrompt: l
}) {
  return jsx(_$$L, {
    className: b()(E, Qx, Uu),
    type: "text",
    placeholder: _$$t("slides.flapp.alignment.prompt_placeholder"),
    value: t,
    onChange: e => {
      l(e.target.value);
    },
    onPaste: e => {
      l(e.clipboardData.getData("text"));
    },
    recordingKey: e
  });
}
function L({
  prompt: e
}) {
  return jsx("p", {
    className: E,
    children: e || _$$t("slides.flapp.alignment.prompt_placeholder")
  });
}
function B({
  promptElement: e,
  onVoteRequest: t
}) {
  var l;
  let {
    configData,
    setConfigData,
    nodeId
  } = p();
  let {
    participantData
  } = d();
  let c = iZ();
  let u = t && c ? (e, l) => {
    t({
      name: c.name,
      userId: c.id,
      thumbnailUrl: c.img_url,
      alignmentXOffsetPercentage: e,
      alignmentYOffsetPercentage: l,
      timestamp: Date.now()
    });
  } : void 0;
  l = c?.id;
  let [m, h] = useMemo(() => {
    let e;
    return participantData ? [Object.values(participantData).reduce((t, a) => {
      try {
        let s = JSON.parse(a);
        s.userId === l && (e = s);
        t.push(s);
      } catch (e) {}
      return t;
    }, []).sort((e, t) => e.timestamp - t.timestamp), e] : [[], void 0];
  }, [participantData, l]);
  let g = "true" === configData.resultsShown;
  let x = nc.user("slides-toggle-alignment-scale-results-shown", () => {
    setConfigData("resultsShown", (!g).toString());
  });
  let j = aF(configData);
  return jsx(_$$J, {
    mode: j.preferredTokenTheme,
    children: jsxs("div", {
      className: b()(_$$s.wFull.flex.flexColumn.justifyCenter.itemsCenter.$, "alignment_scale--alignmentScaleThemeWrapper--1VvHW"),
      "data-transparency-mode": j.transparentMode,
      children: [jsxs("div", {
        className: "alignment_scale--mainContainer--aIN2p",
        children: [jsx(O, {
          prompt: e,
          allVoteData: m,
          currentUserVoteData: h
        }), jsx(V, {
          resultsShown: g,
          alignmentVoteData: m,
          onScaleClick: u
        }), jsx(M, {})]
      }), jsx(Q, {
        recordingKey: f(nodeId, "slides-alignment-scale-reveal-results"),
        resultsShown: g,
        onToggle: x
      })]
    })
  });
}
function O({
  prompt: e,
  allVoteData: t,
  currentUserVoteData: l
}) {
  return jsxs("div", {
    className: "alignment_scale--headerContainer--l688h",
    children: [jsx("div", {
      className: "alignment_scale--promptContainer--hRH11 text--fontPos20--Bcz97 text--_fontBase--QdLsd",
      children: e
    }), jsx(A, {
      allVoteData: t,
      currentUserVoteData: l
    })]
  });
}
function V({
  resultsShown: e,
  alignmentVoteData: t,
  onScaleClick: l
}) {
  let n = useRef(null);
  let i = l ? e => {
    let t = e.currentTarget.getBoundingClientRect();
    let a = e.clientX - t.left;
    let s = e.clientY - t.top;
    l(a / t.width, s / t.height);
  } : void 0;
  return jsxs("div", {
    className: "alignment_scale--scaleContainerPseudoBorder--Jj6DE",
    children: [jsx("div", {
      className: "alignment_scale--scaleContainerSolidBackground--s4pRF"
    }), jsxs(_$$E, {
      className: b()("alignment_scale--scaleContainer--gmwd3", l ? _$$s.cursorPointer.$ : ""),
      ref: n,
      onClick: i,
      children: [jsx("div", {
        className: "alignment_scale--scaleLine--uHC-I"
      }), jsxs("div", {
        className: "alignment_scale--scaleMarkerContainer--X5x-j",
        children: [jsx("div", {
          className: "alignment_scale--scaleMarker0--QIykm alignment_scale--_scaleMarker---mTsV"
        }), jsx("div", {
          className: "alignment_scale--scaleMarker25--3Xe8a alignment_scale--_scaleMarker---mTsV"
        }), jsx("div", {
          className: "alignment_scale--scaleMarker50--L4exg alignment_scale--_scaleMarker---mTsV"
        }), jsx("div", {
          className: "alignment_scale--scaleMarker75--Urto8 alignment_scale--_scaleMarker---mTsV"
        }), jsx("div", {
          className: "alignment_scale--scaleMarker100--AHcJW alignment_scale--_scaleMarker---mTsV"
        })]
      }), e && n.current ? t.map(e => jsx("img", {
        src: _$$p(e.thumbnailUrl),
        alt: e.name,
        className: "alignment_scale--alignmentScaleVote--zkhC9",
        style: {
          left: `${Math.floor(100 * e.alignmentXOffsetPercentage)}%`,
          top: `${Math.floor(100 * e.alignmentYOffsetPercentage)}%`,
          transform: "translate(-15px, -15px)"
        }
      }, e.userId)) : null]
    })]
  });
}
function M() {
  return jsxs("div", {
    className: "alignment_scale--scaleLabelContainer--HF5-I",
    children: [jsx("div", {
      className: "alignment_scale--stronglyDisagreeLabel--1Yzc0 alignment_scale--_labelBase--enfVZ text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: tx("slides.flapp.alignment.strongly_disagree_label")
    }), jsx("div", {
      className: "alignment_scale--neutralLabel--qqm5f alignment_scale--_labelBase--enfVZ text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: tx("slides.flapp.alignment.neutral_label")
    }), jsx("div", {
      className: "alignment_scale--stronglyAgreeLabel--Dhs7h alignment_scale--_labelBase--enfVZ text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: tx("slides.flapp.alignment.strongly_agree_label")
    })]
  });
}
function A({
  allVoteData: e,
  currentUserVoteData: t
}) {
  let l;
  let s = e;
  t && (s = [t, ...e.filter(e => e.userId !== t.userId)]);
  l = 0 === s.length ? _$$t("slides.flapp.results.no_votes_yet") : 1 === s.length ? t ? _$$t("slides.flapp.results.single_self_vote") : _$$t("slides.flapp.results.single_other_vote", {
    person: s[0].name
  }) : t ? _$$t("slides.flapp.results.multiple_votes_including_user", {
    totalVotes: s.length - 1
  }) : _$$t("slides.flapp.results.multiple_other_votes", {
    totalVotes: s.length
  });
  return jsxs("div", {
    className: "alignment_scale--voteDisplayContainer--upm2F text--fontPos13--xW8hS text--_fontBase--QdLsd",
    children: [jsx("p", {
      className: "alignment_scale--description--kxZH3",
      children: l
    }), jsx($, {
      allVoteData: s,
      maxToShow: 2
    })]
  });
}
function $({
  allVoteData: e,
  maxToShow: t
}) {
  let l = e.length;
  e.length > t + 1 && (l = t);
  let s = e.slice(0, l);
  let n = e.slice(l);
  let i = n.map(e => ({
    id: e.userId,
    handle: e.name,
    img_url: e.thumbnailUrl
  }));
  return jsxs("div", {
    className: "alignment_scale--voteProfilesContainer--wbH0G",
    children: [s.map(e => jsx("img", {
      className: "alignment_scale--voteProfile--Um0e6",
      alt: e.name,
      src: _$$p(e.thumbnailUrl),
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": e.name
    }, e.userId)), n.length > 0 ? jsx("div", {
      className: "alignment_scale--overflowVote--KIoww text--fontPos11--2LvXf text--_fontBase--QdLsd",
      "data-tooltip-type": Ib.SPECIAL,
      "data-tooltip": _$$c,
      "data-tooltip-overflow-user-data": JSON.stringify(i),
      children: `+${n.length}`
    }) : null]
  });
}
function Q({
  recordingKey: e,
  resultsShown: t,
  onToggle: l
}) {
  return jsxs("div", {
    className: "alignment_scale--resultToggleContainer--euX1O",
    children: [jsx(_$$B, {
      className: "alignment_scale--resultToggleContainerSvg--PFGWI",
      svg: _$$A
    }), jsxs(_$$E, {
      className: "alignment_scale--resultToggle--alry6 text--fontPos13--xW8hS text--_fontBase--QdLsd",
      onClick: l,
      recordingKey: e,
      children: [t ? jsx(_$$l, {}) : jsx(_$$f, {}), jsx("p", {
        children: t ? _$$t("slides.flapp.results.results_shown") : _$$t("slides.flapp.results.results_hidden")
      })]
    })]
  });
}
let z = {
  EditorFlapp: u(function () {
    let {
      configData,
      setConfigData,
      nodeId
    } = p();
    let s = jsx(T, {
      recordingKey: f(nodeId, "slides-alignment-scale-prompt-input"),
      prompt: configData.prompt,
      setPrompt: e => {
        l7.user("slides-update-alignment-scale-prompt", () => {
          setConfigData("prompt", e);
        });
      }
    });
    return jsx(B, {
      promptElement: s
    });
  }),
  ViewerFlapp: m(function () {
    let {
      configData
    } = p();
    let {
      setParticipantData
    } = d();
    return jsx(B, {
      promptElement: jsx(L, {
        prompt: configData.prompt
      }),
      onVoteRequest: e => {
        l7.user("slides-update-alignment-scale-vote", () => {
          setParticipantData(e.userId, JSON.stringify(e));
        });
      }
    });
  })
};
function H({
  configData: e,
  nodeId: t
}) {
  let l = hk();
  let s = gD(e);
  return jsx(wL, {
    deviceFrame: s,
    children: jsx(lu, {
      isViewer: !0,
      nodeId: t,
      onClick: () => {
        e.url && l && Ay.redirect(e.url, uG ? void 0 : "_blank");
      }
    })
  });
}
let Y = {
  EditorFlapp: u(DR),
  ViewerFlapp: m(E$)
};
let J = {
  EditorFlapp: u(H),
  ViewerFlapp: m(H)
};
let G = "facepile--facepileStamp---gzFz facepile--_fixedStampBase--icx6v facepile--_stampBase--eCNDB";
function et({
  prompt: e,
  setPrompt: t
}) {
  let {
    nodeId
  } = p();
  return jsx(_$$Y, {
    id: f(nodeId, "facepile-prompt-input"),
    "aria-label": _$$t("slides.flapp.facepile.input_label"),
    className: b()(Qx, Uu),
    type: "text",
    placeholder: _$$t("slides.flapp.facepile.prompt_placeholder"),
    value: e,
    onChange: e => {
      t(e);
    },
    htmlAttributes: {
      onPaste: e => {
        t(e.clipboardData.getData("text"));
      }
    },
    recordingKey: f(nodeId, "facepile-prompt-input")
  });
}
function el({
  prompt: e
}) {
  return jsx("h1", {
    children: e || _$$t("slides.flapp.facepile.prompt_placeholder")
  });
}
function ea({
  promptElement: e,
  onToggleStampRequest: t
}) {
  let {
    configData,
    isViewer
  } = p();
  let {
    participantData
  } = d();
  let i = iZ();
  let r = function (e, t) {
    if (!e || 0 === Object.keys(e).length) return {
      stamps: [],
      currentUserStamped: !1
    };
    let l = !1;
    return {
      stamps: Object.values(e).reduce((e, a) => {
        try {
          let s = JSON.parse(a);
          s.userId === t && (l = !0);
          e.push(s);
        } catch (e) {}
        return e;
      }, []).sort((e, l) => e.userId === t ? -1 : l.userId === t ? 1 : e.timestamp - l.timestamp),
      currentUserStamped: l
    };
  }(participantData, i?.id);
  let o = function (e, t) {
    let {
      stamps,
      currentUserStamped
    } = e;
    return 0 === stamps.length ? t ? _$$t("slides.flapp.facepile.description_click_to_stamp") : _$$t("slides.flapp.results.no_stamps_yet") : 1 === stamps.length ? currentUserStamped ? _$$t("slides.flapp.results.single_self_stamp") : _$$t("slides.flapp.results.single_other_stamp", {
      person: stamps[0].name
    }) : currentUserStamped ? _$$t("slides.flapp.results.multiple_stamps_including_user", {
      totalStamps: stamps.length - 1
    }) : _$$t("slides.flapp.results.multiple_other_stamps", {
      totalStamps: stamps.length
    });
  }(r, isViewer);
  let c = aF(configData);
  return jsx(_$$J, {
    mode: c.preferredTokenTheme,
    children: jsxs("div", {
      className: b()("facepile--container--k1p6f", "facepile--facepileThemeWrapper--dG-S8"),
      "data-transparent-mode": c.transparentMode,
      children: [jsx("div", {
        className: "facepile--prompt--6Xfxz text--fontPos24--YppUD text--_fontBase--QdLsd",
        children: e
      }), jsx(es, {
        isStampingEnabled: isViewer,
        stampsWithMetadata: r,
        maxStampsToShow: 3,
        currentUser: i,
        onToggleStampRequest: t
      }), jsx("p", {
        className: "facepile--description--SesIh text--fontPos20--Bcz97 text--_fontBase--QdLsd",
        children: o
      })]
    })
  });
}
function es({
  isStampingEnabled: e,
  stampsWithMetadata: t,
  maxStampsToShow: l,
  currentUser: s,
  onToggleStampRequest: n
}) {
  let {
    stamps,
    currentUserStamped
  } = t;
  let o = stamps.length;
  stamps.length > l + 1 && (o = l);
  let p = stamps.slice(0, o);
  let c = stamps.slice(o);
  let d = e && s && !currentUserStamped;
  return jsxs("div", {
    className: _$$s.flex.gap12.pt36.pb24.itemsCenter.alignCenter.$,
    children: [p.map(e => {
      let t = n && s && e.userId === s.id;
      let l = {
        text: e.name,
        subtext: t ? _$$t("slides.flapp.facepile.tooltip.click_to_remove") : void 0
      };
      return jsx(en, {
        stamp: e,
        tooltipToShow: l,
        onClick: () => {
          t && n(s.id, void 0);
        }
      }, `${e.userId}-stamp`);
    }), c.length > 0 ? jsx(ei, {
      overflowStamps: c
    }) : null, jsx(er, {
      previewStamp: d ? eo(s) : void 0,
      onClick: () => {
        d && n && n(s.id, eo(s));
      },
      disabled: !d
    })]
  });
}
function en({
  stamp: e,
  tooltipToShow: t,
  onClick: l
}) {
  return jsx(_$$E, {
    onClick: l,
    "aria-label": t?.subtext ? _$$t("slides.flapp.facepile.stamp_with_action", {
      name: e.name,
      action: t.subtext
    }) : _$$t("slides.flapp.facepile.stamp_by_user", {
      name: e.name
    }),
    htmlAttributes: {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": t?.text,
      "data-tooltip-subtext": t?.subtext,
      "data-tooltip-offset-y": 8
    },
    children: jsx(oW, {
      className: G,
      src: _$$p(e.thumbnailUrl),
      alt: e.name,
      draggable: !1
    })
  });
}
function ei({
  overflowStamps: e
}) {
  let t = e.map(e => ({
    id: e.userId,
    handle: e.name,
    img_url: e.thumbnailUrl
  }));
  return jsx("div", {
    className: "facepile--overflowStamp--j3fn3 text--fontPos22--4H4Fc text--_fontBase--QdLsd facepile--_stampBase--eCNDB",
    "data-tooltip-type": Ib.SPECIAL,
    "data-tooltip": _$$c,
    "data-tooltip-overflow-user-data": JSON.stringify(t),
    "data-tooltip-offset-y": 8,
    children: jsx("p", {
      children: `+${e.length}`
    })
  });
}
function er({
  previewStamp: e,
  onClick: t,
  disabled: l
}) {
  return jsxs(_$$E, {
    className: b()("facepile--emptyStampContainer--dAbYv facepile--_fixedStampBase--icx6v facepile--_stampBase--eCNDB", e ? "facepile--displayPreviewOnHover--qPtfX" : ""),
    onClick: t,
    "aria-label": _$$t("slides.flapp.facepile.add_stamp_button"),
    disabled: l,
    children: [jsx(_$$B, {
      className: "facepile--emptyStamp--KiqZH",
      svg: _$$A2
    }), e ? jsx("div", {
      className: "facepile--previewStamp--TbFAQ",
      children: jsx(oW, {
        className: G,
        src: _$$p(e.thumbnailUrl),
        alt: e.name,
        draggable: !1
      })
    }) : null]
  });
}
function eo(e) {
  return {
    name: e.name,
    userId: e.id,
    thumbnailUrl: e.img_url,
    timestamp: Date.now()
  };
}
let ep = {
  EditorFlapp: u(function () {
    let {
      configData,
      setConfigData
    } = p();
    let l = jsx(et, {
      prompt: configData.prompt,
      setPrompt: e => {
        l7.user("slides-update-facepile-question", () => {
          setConfigData("prompt", e);
        });
      }
    });
    return jsx(ea, {
      promptElement: l
    });
  }),
  ViewerFlapp: m(function () {
    let {
      configData
    } = p();
    let {
      setParticipantData
    } = d();
    return jsx(ea, {
      promptElement: jsx(el, {
        prompt: configData.prompt
      }),
      onToggleStampRequest: (e, l) => {
        l7.user("slides-add-user-facepile-stamp", () => {
          setParticipantData(e, JSON.stringify(l));
        });
      }
    });
  })
};
let ex = "slides-update-poll-question";
let ev = "slides-update-poll-option";
let e_ = "slides-update-poll-options";
let ej = "poll--question--F1M7f text--fontPos30--N-YT7 text--_fontBase--QdLsd";
let eb = "poll--optionContainer--ds9OS";
let eN = "poll--newOption--H35l3";
let ey = "poll--optionInner--WmnWP";
let ew = "poll--optionFill--birzf";
let eC = "poll--winning--ZgYy7";
let eI = "poll--optionContent--XecHh text--fontPos20--Bcz97 text--_fontBase--QdLsd";
let eP = "poll--optionContentText---N25s";
let eS = "poll--optionMetadata--IbCVD";
function ek({
  option: e,
  votes: t,
  isWinningVote: l,
  isUserVote: s,
  percentage: n,
  resultsShown: i,
  recordingKey: r,
  optionIndex: o
}) {
  let {
    setParticipantData
  } = d();
  let c = wA();
  let u = iZ();
  let m = nc.system("slides-update-poll-votes", e => {
    if (!u) {
      c(_$$s2.error(_$$t("slides.flapp.poll.vote_failure")));
      return;
    }
    let t = {
      userId: u.id,
      name: u.name,
      thumbnailUrl: u.img_url,
      timestamp: Date.now(),
      selectedOption: e
    };
    setParticipantData(t.userId, JSON.stringify(t));
  });
  let f = t.map(e => ({
    id: e.userId,
    handle: e.name,
    img_url: e.thumbnailUrl
  }));
  return jsx("div", {
    className: eb,
    children: jsxs(_$$E, {
      className: b()(ey, "poll--hoverable--uHwKu"),
      recordingKey: r,
      onClick: () => {
        m(o);
      },
      "aria-label": _$$t("slides.flapp.poll.vote_for_option", {
        option: e
      }),
      htmlAttributes: {
        "data-tooltip-type": Ib.SPECIAL,
        "data-tooltip": i && f.length > 0 ? _$$c : void 0,
        "data-tooltip-overflow-user-data": JSON.stringify(f),
        "data-tooltip-offset-y": 8
      },
      children: [i && jsx("div", {
        className: b()(ew, l ? eC : ""),
        style: {
          width: `${n}%`
        }
      }), jsxs("div", {
        className: eI,
        children: [jsx("div", {
          className: eP,
          children: e
        }), jsxs("div", {
          className: eS,
          children: [s && jsx(_$$g, {}), i && jsx("span", {
            children: `${n}%`
          })]
        })]
      })]
    })
  });
}
function eF({
  option: e,
  votes: t,
  isWinningVote: l,
  isUserVote: s,
  percentage: n,
  resultsShown: i,
  recordingKey: r,
  optionIndex: o,
  inputRef: c,
  setPollUpdated: d
}) {
  let {
    configData,
    setConfigData,
    deleteConfigData
  } = p();
  let h = eE(configData);
  let g = e => `option${e}`;
  let x = nc.user(ev, e => {
    setConfigData(g(o), e);
  });
  let v = nc.user(ev, e => {
    setConfigData(g(o), e.clipboardData.getData("text"));
  });
  let j = nc.user(e_, e => {
    o === h.length - 1 && ("Enter" === e.key && h.length < 6 ? (setConfigData(g(o + 1), ""), d(!0)) : h.length > 2 && 0 === h[o].length && ("Backspace" === e.key || "Delete" === e.key) && (deleteConfigData && (deleteConfigData(g(o)), e.preventDefault()), d(!0)));
  });
  let N = t.map(e => ({
    id: e.userId,
    handle: e.name,
    img_url: e.thumbnailUrl
  }));
  return jsx("div", {
    className: eb,
    children: jsxs("div", {
      className: ey,
      "data-tooltip-type": Ib.SPECIAL,
      "data-tooltip": i && N.length > 0 ? _$$c : void 0,
      "data-tooltip-overflow-user-data": JSON.stringify(N),
      "data-tooltip-offset-y": 8,
      children: [i && jsx("div", {
        className: b()(ew, l ? eC : ""),
        style: {
          width: `${n}%`
        }
      }), jsxs("div", {
        className: eI,
        children: [jsx(_$$Y, {
          id: r,
          className: b()(eP, Qx, Uu),
          value: e,
          placeholder: _$$t("slides.flapp.poll.option_placeholder"),
          onChange: x,
          htmlAttributes: {
            onPaste: v,
            onKeyDownCapture: j
          },
          ref: c,
          recordingKey: r
        }), jsxs("div", {
          className: eS,
          children: [s && jsx(_$$g, {}), i && jsx("span", {
            children: `${n}%`
          })]
        })]
      })]
    })
  });
}
function eU({
  recordingKey: e,
  onClick: t
}) {
  let {
    isViewer
  } = p();
  return isViewer || !t ? jsx("div", {
    "aria-hidden": "true",
    className: b()(eb, eN, "poll--newOptionInvisible--XwjKd")
  }) : jsx("div", {
    className: eb,
    children: jsx(_$$E, {
      className: eN,
      onClick: t,
      recordingKey: Pt(e, "addOption"),
      "aria-label": _$$t("slides.flapp.poll.add_option"),
      children: jsx(_$$e, {})
    })
  });
}
function eE(e) {
  let t = [];
  for (let l = 0; l < 6; l++) {
    let a = e[`option${l}`];
    void 0 !== a && t.push(a);
  }
  return t;
}
function eD({
  resultsShown: e,
  setResultsShown: t
}) {
  let l = e ? _$$t("slides.flapp.results.results_shown") : _$$t("slides.flapp.results.results_hidden");
  return jsx(WW, {
    "aria-label": l,
    htmlAttributes: {
      "data-tooltip": l,
      "data-tooltip-type": Ib.TEXT
    },
    onClick: () => t(!e),
    recordingKey: "resultsButton",
    variant: "secondary",
    iconPrefix: e ? jsx(_$$_, {}) : jsx(_$$j, {}),
    children: l
  });
}
function eT({
  totalVotes: e,
  hasUserVote: t,
  firstVoteByTimestamp: l
}) {
  let s;
  s = 0 === e ? _$$t("slides.flapp.results.no_votes_yet") : 1 === e ? t ? _$$t("slides.flapp.results.single_self_vote") : l ? _$$t("slides.flapp.results.single_other_vote", {
    person: l.name
  }) : _$$t("slides.flapp.results.multiple_other_votes", {
    totalVotes: e
  }) : t ? _$$t("slides.flapp.results.multiple_votes_including_user", {
    totalVotes: e - 1
  }) : _$$t("slides.flapp.results.multiple_other_votes", {
    totalVotes: e
  });
  return jsx("p", {
    children: s
  });
}
function eL({
  preferredTheme: e,
  transparencyMode: t
}) {
  let {
    configData,
    isViewer,
    nodeId,
    setConfigData
  } = p();
  let {
    participantData
  } = d();
  let u = iZ();
  let m = eE(configData);
  let h = "true" === configData.resultsShown;
  let [g, x] = useState(!1);
  let j = useMemo(() => [], []);
  useEffect(() => {
    if (g && j.length > 0) {
      let e = j.slice(-1)[0];
      e && e.current && e.current.focus();
    }
  }, [m.length, j, g]);
  let N = useRef(null);
  useEffect(() => {
    if (isViewer) return;
    let e = N.current;
    let t = new ResizeObserver(e => {
      let t = getSingletonSceneGraph().get(nodeId);
      if (t) for (let l of e) l7.system("slides-poll-auto-resize", () => {
        let e = getComputedStyle(l.target);
        let a = parseFloat(e.paddingTop);
        let s = a + parseFloat(e.paddingBottom) + parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth);
        let n = l.contentRect.height + s;
        t && n > t.size.y && (t.size = {
          x: t.size.x,
          y: n
        });
      });
    });
    e && t.observe(e);
    return () => {
      e && t.unobserve(e);
    };
  }, [nodeId, isViewer]);
  let y = e => `option${e}`;
  let w = nc.user("slides-update-poll-results-visibility", e => {
    setConfigData("resultsShown", e ? "true" : "false");
  });
  let {
    groupedVotes,
    totalVotes,
    votePercentages,
    winningVoteIndices,
    userVoteIndex,
    firstVoteByTimestamp
  } = function (e, t, l) {
    let a;
    let s = eE(t);
    let n = -1;
    let i = Object.values(l).reduce((t, l) => {
      try {
        let s = JSON.parse(l);
        s.userId === e && (n = s.selectedOption);
        a = a && a.timestamp > s.timestamp || !a ? s : a;
        t.push(s);
      } catch (e) {}
      return t;
    }, []).sort((e, t) => e.timestamp - t.timestamp);
    let r = 0;
    let o = s.map((e, t) => {
      let l = i.filter(e => e.selectedOption === t);
      r = l.length > r ? l.length : r;
      return l;
    });
    let p = i.length;
    let c = s.map((e, t) => Math.round(100 * (o[t].length / p || 0)));
    let d = o.reduce((e, t, l) => t.length === r && 0 !== t.length ? [...e, l] : e, []);
    return {
      groupedVotes: o,
      votePercentages: c,
      totalVotes: p,
      winningVoteIndices: d,
      userVoteIndex: n,
      firstVoteByTimestamp: a
    };
  }(u?.id, configData, participantData);
  return jsx(_$$J, {
    mode: e,
    children: jsxs("div", {
      className: b()("poll--pollThemeWrapper--z0UVm", "poll--container--UKRlY"),
      "data-transparency-mode": t,
      ref: N,
      children: [jsx(eB, {}), m.map((e, t) => {
        let l = createRef();
        j.push(l);
        let n = -1 !== winningVoteIndices.indexOf(t);
        return isViewer ? jsx(ek, {
          option: e,
          votes: groupedVotes[t] ?? [],
          isWinningVote: n,
          isUserVote: t === userVoteIndex,
          percentage: votePercentages[t] ?? 0,
          resultsShown: h,
          recordingKey: f(nodeId, `option${t}`),
          optionIndex: t
        }, t) : jsx(eF, {
          inputRef: l,
          isUserVote: t === userVoteIndex,
          isWinningVote: n,
          option: e,
          optionIndex: t,
          percentage: votePercentages[t] ?? 0,
          recordingKey: f(nodeId, `optionInput${t}`),
          resultsShown: h,
          setPollUpdated: x,
          votes: groupedVotes[t] ?? []
        }, t);
      }), jsx(eU, {
        onClick: m.length >= 6 ? void 0 : nc.user(e_, () => {
          setConfigData(y(m.length), "");
          x(!0);
        }),
        recordingKey: f(nodeId)
      }), jsxs("div", {
        className: "poll--resultContainer--cQQVk text--fontPos20--Bcz97 text--_fontBase--QdLsd",
        children: [jsx(eT, {
          totalVotes,
          hasUserVote: userVoteIndex >= 0,
          firstVoteByTimestamp
        }), jsx(eD, {
          resultsShown: h,
          setResultsShown: e => w(e)
        })]
      })]
    })
  });
}
function eB() {
  let {
    configData,
    isViewer,
    setConfigData,
    nodeId
  } = p();
  let n = configData.question || "";
  let i = nc.user(ex, e => {
    setConfigData("question", e);
  });
  let r = nc.user(ex, e => {
    setConfigData("question", e.clipboardData.getData("text"));
  });
  return isViewer ? jsx("h1", {
    className: ej,
    children: n
  }) : jsx(_$$Y, {
    id: f(nodeId, "questionInput"),
    className: b()(ej, Qx, Uu),
    value: n,
    placeholder: _$$t("slides.flapp.poll.question_placeholder"),
    onChange: i,
    htmlAttributes: {
      onPaste: e => r(e)
    },
    recordingKey: f(nodeId, "questionInput")
  });
}
function eO() {
  let {
    configData
  } = p();
  let t = aF(configData);
  return jsx(eL, {
    preferredTheme: t.preferredTokenTheme,
    transparencyMode: t.transparentMode
  });
}
let eV = {
  EditorFlapp: u(eO),
  ViewerFlapp: m(eO)
};
async function eR(e) {
  if (!e) return;
  let t = KJ(e.trim());
  if (t) try {
    let l = (await _$$E2.getLinkMetadata({
      text: t.isFromIFrame ? e : t.url,
      useEmbedsAllowList: "true",
      useLinkPreviewsV2: "true"
    })).data.meta;
    if (!l || "embed" !== l.type) return;
    return {
      srcUrl: l.srcUrl.replace("&autoplay=1", "").replace("&auto_play=1", "") + "&enablejsapi=1",
      url: decodeURIComponent(l.url || ""),
      height: 800 * (l.height || 450) / (l.width || 800),
      width: 800,
      title: decodeURIComponent(l.title || "YouTube"),
      thumbnailImage: l.thumbnailImage,
      thumbnailUrl: l.thumbnailUrl
    };
  } catch (e) {
    x1(_$$e2.SLIDES, "Failed to get youtube embed", e);
  }
}
function eq({
  disablePointerEvents: e,
  onIframeLoad: t
}) {
  let {
    configData
  } = p();
  return jsxs("div", {
    className: _$$s.wFull.hFull.$,
    children: [configData.srcUrl && configData.title ? jsx("iframe", {
      src: configData.srcUrl,
      className: _$$s.wFull.hFull.$,
      onLoad: e => t?.(e.target),
      title: configData.title,
      allowFullScreen: !1,
      allow: "autoplay"
    }) : null, e ? jsx("div", {
      className: _$$s.wFull.hFull.absolute.top0.left0.$
    }) : null]
  });
}
function eH() {
  let {
    configData
  } = p();
  return configData.url && configData.title ? jsx("a", {
    className: _$$s.wFull.hFull.cursorPointer.relative.$,
    style: {
      pointerEvents: "auto"
    },
    href: configData.url,
    target: "_blank",
    rel: "noopener noreferrer",
    title: configData.title,
    children: configData.thumbnailUrl ? jsx("img", {
      src: configData.thumbnailUrl,
      alt: configData.title,
      className: _$$s.wFull.hFull.$,
      style: {
        objectFit: "cover"
      }
    }) : null
  }) : null;
}
let eY = {
  EditorFlapp: u(function () {
    let {
      configData,
      nodeId,
      setConfigData,
      isReadOnly
    } = p();
    return (useEffect(() => {
      isReadOnly || configData.srcUrl || eR(configData.url).then(async e => {
        if (!e) return;
        let a = getSingletonSceneGraph().get(nodeId);
        if (a && (l7.system("initializing-youtube", () => {
          _$$r(() => {
            a.resizeWithConstraints(e.width, e.height);
            a.proportionsConstrained = !0;
            let t = a.relativeTransform;
            t.m02 = a.relativeTransform.m02 - e.width / 2;
            t.m12 = a.relativeTransform.m12 - e.height / 2;
            a.relativeTransform = t;
            setConfigData("srcUrl", e.srcUrl);
            setConfigData("title", e.title);
            e.url && setConfigData("url", e.url);
            e.thumbnailUrl && setConfigData("thumbnailUrl", e.thumbnailUrl);
          });
        }), e.thumbnailImage)) try {
          let t = new Uint8Array(e.thumbnailImage.data);
          let l = await UD(t, "image/png", e.title);
          l7.system("initializing-youtube-thumbnail", () => {
            _$$r(() => {
              a.insertImageInFillPaint(l);
            });
          });
        } catch (e) {}
      });
    }, [configData.url, configData.srcUrl, nodeId, setConfigData, isReadOnly]), configData.url && !configData.srcUrl) ? jsx("div", {
      className: _$$s.absolute.w48.h48.$,
      children: jsx(kt, {
        size: "custom",
        className: _$$s.w48.h48.$
      })
    }) : jsx(eq, {
      disablePointerEvents: !0
    });
  }),
  ViewerFlapp: m(function () {
    let {
      nodeId,
      viewer
    } = p();
    let l = useCallback(l => {
      viewer && viewer.associateYoutubeWithNode(nodeId, l);
    }, [viewer, nodeId]);
    useEffect(() => () => {
      viewer && viewer.disassociateYoutubeWithNode(nodeId);
    }, [viewer, nodeId]);
    return jsx(eq, {
      onIframeLoad: l
    });
  })
};
let eJ = {
  EditorFlapp: u(eH),
  ViewerFlapp: m(eH)
};
let eX = {
  EMBED: Y,
  POLL: eV,
  FACEPILE: ep,
  ALIGNMENT: z,
  YOUTUBE: eY
};
let eZ = {
  EMBED: J,
  POLL: eV,
  FACEPILE: ep,
  ALIGNMENT: z,
  YOUTUBE: eJ
};
let eG = {
  EditorFlapp: () => null,
  ViewerFlapp: () => null
};
export function $$e00(e) {
  return null === e ? eG : eX[e] || eG;
}
export function $$e11(e) {
  return null === e ? eG : eZ[e] || eG;
}
export const Z = $$e00;
export const v = $$e11;