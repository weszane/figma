import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useCallback, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DesignGraphElements, SessionStatus } from "../figma_app/763686";
import o from "classnames";
import { buildUploadUrl } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { B } from "../905/714743";
import { L as _$$L } from "../figma_app/819472";
import { renderI18nText } from "../905/303541";
import { Ho } from "../figma_app/308685";
import { H1 } from "../figma_app/124493";
import { CB } from "../figma_app/442259";
import { LR } from "../figma_app/120210";
import { XM } from "../905/486443";
import { Ib } from "../905/129884";
import { hx } from "../figma_app/630194";
import { gd } from "../figma_app/837467";
import { I as _$$I } from "../figma_app/552397";
import { bu } from "../figma_app/955650";
import { hr } from "../9410/960980";
import { oV, mS, dF } from "../figma_app/801324";
import { H1 as _$$H, fK, NZ, E$ } from "../figma_app/300024";
import { iT, X, p3 } from "../figma_app/765161";
import { Zh, UJ, iE, rf, he, tS, _V, oE, $, uA, hA, wj, tq, FP } from "../figma_app/731560";
import { A as _$$A } from "../3850/824007";
var l = o;
let N = {
  padBottom: 30,
  height: 512
};
let A = 100 * N.padBottom / N.height;
let O = `calc(${A}% + ${-_$$H}px)`;
let k = `translateY(${O})`;
let $$R0 = memo(function () {
  let e = useDispatch();
  let t = iT();
  let i = useSelector(e => e?.mirror?.appModel?.currentTool === DesignGraphElements.STAMP) || t;
  let o = XM();
  let d = hr();
  let c = d > 0;
  let u = useSelector(e => e.universalInsertModal.showing);
  let h = bu();
  let L = useCallback(() => {
    o && e(H1({
      votingStage: SessionStatus.NOT_JOINED
    }));
    e(Ho());
  }, [e, o]);
  let N = LR();
  let A = _$$L();
  let O = useCallback(() => {
    N(!1);
    A();
    t ? CB.closeWheel() : X({
      source: fK
    });
  }, [t, N, A]);
  return jsxs("div", {
    "data-element-target": NZ,
    className: l()(Zh, UJ),
    children: [jsx(_$$I, {
      className: iE,
      "data-tooltip": "set-tool-stamp",
      "data-tooltip-bottom-flip-margin": o ? 0 : void 0,
      "data-tooltip-type": Ib.LOOKUP,
      hasOpenSubmenu: !1,
      isSelected: i,
      onClick: O,
      onboardingKey: E$,
      recordingKey: hx("stamp"),
      toolType: "stamp",
      tooltipLocation: o ? "below" : "above",
      tooltipOffset: o ? {
        offsetX: 0,
        offsetY: -14
      } : void 0,
      children: e => jsx(gd, {
        toolType: "stamp",
        inactiveIcon: jsx(oV, {}),
        hoveredIcon: jsx(mS, {}),
        activeIcon: jsx(dF, {}),
        isSelected: i,
        isHovered: e
      })
    }), o && !u && !h && jsxs(Fragment, {
      children: [jsx(M, {
        leaveVotingSessionAndCloseWheel: L,
        onClickToOpenWheel: O,
        numVotesRemaining: d,
        hasRemainingVotes: c
      }), jsx(P, {
        onClickToOpenWheel: O,
        isStampToolSelected: i,
        hasRemainingVotes: c
      })]
    })]
  });
});
function M({
  onClickToOpenWheel: e,
  leaveVotingSessionAndCloseWheel: t,
  numVotesRemaining: i,
  hasRemainingVotes: a
}) {
  let [s, o] = useState(!1);
  let d = a && !BrowserInfo.isIpad;
  D({
    shouldOpenWheelOnHover: d,
    isHovered: s
  });
  let p = a ? rf : he;
  return jsx("button", {
    className: l()(tS, p),
    onMouseEnter: () => !BrowserInfo.isIpad && o(!0),
    onMouseLeave: () => !BrowserInfo.isIpad && o(!1),
    onClick: () => {
      d || (a ? e() : t());
    },
    tabIndex: -1,
    children: a ? jsx("span", {
      className: _V,
      children: renderI18nText("voting.delightful_toolbar.votes_remaining", {
        numVotes: i
      })
    }) : jsxs(Fragment, {
      children: [jsx(B, {
        className: oE,
        svg: _$$A
      }), jsx("span", {
        className: _V,
        children: renderI18nText("voting.delightful_toolbar.no_votes_remaining")
      })]
    })
  });
}
function D({
  shouldOpenWheelOnHover: e,
  isHovered: t
}) {
  let i = e && t;
  useEffect(() => {
    if (!i) return;
    let e = setTimeout(() => X({
      source: "peeking_vote_wheel_hover",
      openedViaHover: !0
    }), 100);
    return () => clearTimeout(e);
  }, [i]);
}
function P({
  onClickToOpenWheel: e,
  isStampToolSelected: t,
  hasRemainingVotes: i
}) {
  let [a, s] = useState(!1);
  let o = useRef(null);
  let u = iT();
  let p = p3({
    isHidden: u,
    wheelRef: o
  });
  let h = i && !BrowserInfo.isIpad;
  D({
    shouldOpenWheelOnHover: h,
    isHovered: a
  });
  useEffect(() => {
    let e = o.current;
    if (!e) return;
    let t = {
      transform: `${k} scale(1.05)`
    };
    let i = {
      transform: `${k} scale(1)`
    };
    let n = new Animation(new KeyframeEffect(e, [{
      transform: "translateY(100%) scale(0.1)"
    }, t], {
      duration: 450,
      easing: "ease-out"
    }));
    let r = new Animation(new KeyframeEffect(e, [t, i], {
      duration: 200,
      easing: "ease-in-out"
    }));
    let a = new Animation(new KeyframeEffect(e, [i, i], {
      duration: 400
    }));
    let s = new Animation(new KeyframeEffect(e, [i, {}], {
      duration: 300,
      easing: "cubic-bezier(0.37, 0, 0.48, 1.33)"
    }));
    n.play();
    n.finished.then(() => r.play()).catch(() => { });
    r.finished.then(() => a.play()).catch(() => { });
    a.finished.then(() => s.play()).catch(() => { });
    return () => {
      n.cancel();
      a.cancel();
      s.cancel();
    };
  }, [o]);
  let m = !(t || i);
  return jsx("div", {
    className: $,
    children: jsx("button", {
      ref: o,
      tabIndex: -1,
      className: l()(uA, {
        [hA]: m,
        [wj]: u,
        [tq]: p,
        [FP]: !i
      }),
      onMouseEnter: () => !BrowserInfo.isIpad && s(!0),
      onMouseLeave: () => !BrowserInfo.isIpad && s(!1),
      onClick: () => !h && e(),
      style: {
        backgroundImage: `url(${buildUploadUrl("c497ee1c6afcaf44b866a46227b40c8ad62dd143")})`
      }
    })
  });
}
export const s = $$R0;
