import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { nj } from "../905/125019";
import { K } from "../905/443068";
import { A as _$$A } from "../905/920165";
import { p as _$$p } from "../905/951634";
import { K as _$$K } from "../905/851274";
import u from "classnames";
import { Pt } from "../figma_app/806412";
import { getI18nString } from "../905/303541";
import { f0 } from "../figma_app/975811";
import { RU } from "../figma_app/740163";
import { _P } from "../figma_app/2590";
import { Ib } from "../905/129884";
import { qd } from "../figma_app/178475";
import { X7 } from "../905/713167";
import { fI } from "../figma_app/626177";
import { wz, vn, cK, Ym, dE, Zd, aU, JH, EC, CN } from "../905/119782";
var p = u;
export function $$E0(e) {
  let {
    paint,
    currentTime,
    duration,
    onVideoTimeChange,
    isVideoLoaded,
    disabled,
    playing,
    setPlaying,
    setUserClickedControls
  } = e;
  let k = RU();
  let R = useDispatch();
  let N = useMemo(() => new f0(duration), [duration]);
  let P = X7();
  let O = paint.video?.hash ? nj(paint.video?.hash).toLowerCase() : null;
  let [D, L] = useState(!1);
  let F = useCallback(e => {
    R(_P({
      name: "Video previewed",
      params: {
        type: "video",
        interaction: e,
        hash: O
      }
    }));
  }, [O, R]);
  let M = () => {
    if (!playing && isVideoLoaded) return jsx(qd, {
      className: p()({
        [wz]: !P,
        [vn]: P
      }),
      "data-tooltip": getI18nString("fullscreen.properties_panel.video_time"),
      "data-tooltip-type": Ib.TEXT,
      dataTestId: "editorVideoPreview-input",
      disabled,
      dispatch: R,
      inputClassName: p()({
        [cK]: P
      }),
      max: duration,
      onValueChange: e => {
        setPlaying(!1);
        onVideoTimeChange(e);
        F("input_time");
      },
      recordingKey: Pt(e, "videoTimestampInput"),
      scrubMultiplier: k / 1e3,
      tooltipForScreenReadersOnly: !0,
      value: currentTime,
      wheelMultiplier: k / 1e3
    });
    {
      let e = N.format(currentTime);
      return jsx("div", {
        className: p()({
          [Ym]: !P,
          [dE]: P
        }),
        children: e
      });
    }
  };
  let j = (t, i) => i ? jsx(K, {
    disabled,
    onClick: () => {
      setPlaying(!1);
      F("pause");
    },
    "aria-label": getI18nString("fullscreen.properties_panel.pause"),
    recordingKey: Pt(e, "pauseVideo"),
    children: jsx(_$$p, {})
  }) : jsx(K, {
    disabled,
    onClick: () => {
      t && (setPlaying(!0), F("play"));
    },
    "aria-label": getI18nString("fullscreen.properties_panel.play"),
    recordingKey: Pt(e, "playVideo"),
    children: jsx(_$$K, {})
  });
  let U = jsx(_$$A, {
    "aria-label": getI18nString("fullscreen.properties_panel.video_time"),
    bigStep: .1,
    defaultValue: 0,
    disabled: disabled || !isVideoLoaded || playing,
    max: duration,
    min: 0,
    onChange: (e, {
      commit: t
    }) => {
      onVideoTimeChange(e);
      t && !D && (L(!0), F("scrub"));
    },
    recordingKey: Pt(e, "videoFramePicker"),
    step: .01,
    value: currentTime
  });
  return P ? jsxs("div", {
    className: Zd,
    children: [jsxs("div", {
      className: aU,
      children: [j(isVideoLoaded, playing), jsx("span", {
        className: JH,
        children: U
      })]
    }), jsx("div", {
      className: EC,
      children: M()
    })]
  }) : jsxs(fI, {
    onClick: () => setUserClickedControls(!0),
    children: [j(isVideoLoaded, playing), jsx("span", {
      className: CN,
      children: U
    }), M()]
  });
}
export const P = $$E0;