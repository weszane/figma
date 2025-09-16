import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useRef } from "react";
import { useDispatch } from "react-redux";
import { sha1HexFromBytes } from "../905/125019";
import { A as _$$A } from "../905/920165";
import { IconButton } from "../905/443068";
import { K as _$$K } from "../905/851274";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { _P } from "../figma_app/2590";
import { X7 } from "../905/713167";
import { fI } from "../figma_app/626177";
import { Io, yv } from "../905/119782";
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
      d: "M18 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",
      clipRule: "evenodd"
    })
  });
});
export function $$_0(e) {
  let t = useDispatch();
  let i = useRef(!1);
  let l = X7();
  function d(i) {
    let n = e.paint.animatedImage?.hash ? sha1HexFromBytes(e.paint.animatedImage?.hash).toLowerCase() : null;
    t(_P({
      name: "Video previewed",
      params: {
        type: "gif",
        interaction: i,
        hash: n
      }
    }));
  }
  let c = jsx(A, {
    disabled: e.disabled,
    playing: e.playing,
    onChange: t => {
      e.setPlaying(t);
      d(t ? "play" : "pause");
    },
    recordingKey: e.recordingKey
  });
  let _ = jsx(_$$A, {
    "aria-label": getI18nString("fullscreen.properties_panel.gif_frame"),
    bigStep: 10,
    defaultValue: 0,
    disabled: e.disabled || e.playing,
    max: e.numFrames ? e.numFrames - 1 : 1,
    min: 0,
    onChange: (t, {
      commit: n
    }) => {
      n ? (e.setGIFCoverFrame(t), i.current || (i.current = !0, d("scrub"))) : e.onGIFFrameChange(t);
    },
    recordingKey: generateRecordingKey(e, "gifFramePicker"),
    step: 1,
    value: e.animationFrame || 0
  });
  return l ? jsxs("div", {
    className: Io,
    children: [c, _]
  }) : jsxs(fI, {
    children: [c, jsx("div", {
      className: yv,
      children: _
    })]
  });
}
function A({
  playing: e,
  onChange: t,
  disabled: i,
  recordingKey: r
}) {
  return e ? jsx(IconButton, {
    disabled: i,
    onClick: () => {
      t(!1);
    },
    "aria-label": getI18nString("fullscreen.properties_panel.stop"),
    recordingKey: generateRecordingKey(r, "stopGIF"),
    children: jsx(d, {})
  }) : jsx(IconButton, {
    disabled: i,
    onClick: () => {
      t(!0);
    },
    "aria-label": getI18nString("fullscreen.properties_panel.play"),
    recordingKey: generateRecordingKey(r, "playGIF"),
    children: jsx(_$$K, {})
  });
}
export const F = $$_0;