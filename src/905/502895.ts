import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sha1HexFromBytes } from "../905/125019";
import { VideoCppBindings } from "../figma_app/763686";
import { logger } from "../905/651849";
import { useLatestRef } from "../figma_app/922077";
import { Point } from "../905/736624";
import { aB, uz } from "../905/284552";
import { LargeLoadingSpinner } from "../figma_app/858013";
import { jS, Pv } from "../905/619652";
import { _P } from "../figma_app/2590";
import { S } from "../figma_app/787550";
let f = window.performance.now();
let _ = (e, t, i) => {
  let n = jS(e, new Point(t, i), {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  });
  return n && n.pixels && n.pixelSize ? Pv(n.pixels, n.pixelSize) : null;
};
export function $$$$A0(e) {
  let {
    width,
    height,
    imagePaint,
    openFileKey,
    className,
    playing,
    currentTime,
    onUpdateCurrentTime,
    setDuration,
    setPlaying,
    videoJsLib,
    isVideoLoaded,
    setIsVideoLoaded,
    userClickedControls,
    setUserClickedControls
  } = e;
  let [k, R] = useState(null);
  let N = !isVideoLoaded && userClickedControls;
  let P = useCallback(e => {
    if (!e || !openFileKey) return {
      srcWithHLS: null,
      downloadHash: null
    };
    let t = sha1HexFromBytes(e);
    return {
      srcWithHLS: `/api/files/${openFileKey}/videos/${t}/manifest`,
      downloadHash: t
    };
  }, [openFileKey]);
  let O = useMemo(() => imagePaint.video?.hash, [imagePaint]);
  let D = useLatestRef(O);
  let L = useDispatch();
  let F = useCallback((e, t, i, n) => {
    L(_P({
      name: "video_load",
      params: {
        status: "failure",
        hash: t,
        fileType: i ? "hls" : "mp4",
        reason: e,
        location: "editor_preview",
        loadTime: n
      }
    }));
  }, [L]);
  let M = useCallback((e, n, r) => {
    L(_P({
      name: "video_load",
      params: {
        status: "success",
        hash: e,
        fileType: n ? "hls" : "mp4",
        width,
        height,
        loadTime: r,
        location: "editor_preview"
      }
    }));
  }, [L, width, height]);
  let j = useCallback(async e => {
    if (!openFileKey || !e) throw new aB("Missing fallback meta hash");
    try {
      let t = await S.getVideosDownload({
        fileKey: openFileKey,
        hexHash: e
      });
      if (200 !== t.status || t.data.error) throw new aB(`Request for fallback URL failed (${t.status})`);
      return t.data.meta.signed_url;
    } catch (e) {
      throw new aB(`Failed to download fallback video: ${e.message ?? e}`);
    }
  }, [openFileKey]);
  let U = useCallback(async (e, t, i) => {
    let n = performance.now();
    try {
      await uz(e, t, z.current);
      let r = (performance.now() - n) / 1e3;
      M(i, t, r);
    } catch (r) {
      if (!(r instanceof aB)) throw r;
      let e = (performance.now() - n) / 1e3;
      F(`Failed to load ${t ? "HLS" : "fallback"} video: ${r.message ?? r}`, i, t, e);
      return r;
    }
  }, [M, F]);
  let B = async e => {
    if (e) {
      let t = e => new Promise(t => setTimeout(t, e));
      let i = 0;
      let n = 1e3;
      let r = VideoCppBindings.isVideoBeingUploaded(e);
      for (; r && i++ < 7;) {
        await t(n);
        n *= 2;
        r = VideoCppBindings.isVideoBeingUploaded(e);
      }
    }
  };
  let V = useCallback(async e => {
    let {
      srcWithHLS,
      downloadHash
    } = P(e);
    let n = e ? sha1HexFromBytes(e) : null;
    try {
      await U(srcWithHLS, !0, n);
    } catch (t) {
      if (!(t instanceof aB)) throw t;
      logger.warn("Reverting to fallback media source");
      await B(n);
      let e = await j(downloadHash);
      try {
        await U(e, !1, n);
      } catch (e) {
        if (!(e instanceof aB)) throw e;
      }
    }
  }, [P, j, U]);
  let G = useRef(null);
  let z = useRef(null);
  useEffect(() => {
    R(_(imagePaint, width, height));
  }, [imagePaint, width, height]);
  let H = useCallback(() => {
    let e = z.current;
    e && (setIsVideoLoaded(!0), e.on("timeupdate", () => {
      onUpdateCurrentTime(e.currentTime() || 0);
    }), e.on("ended", () => {
      setPlaying(!1);
    }));
  }, [setIsVideoLoaded, onUpdateCurrentTime, setPlaying]);
  useEffect(() => {
    let e = z.current;
    let t = O !== D;
    e && t && (setIsVideoLoaded(!1), setUserClickedControls(!1), V(O).then(H));
  }, [O, D, V, setIsVideoLoaded, onUpdateCurrentTime, setPlaying, setUserClickedControls, H]);
  useEffect(() => {
    window.VIDEOJS_NO_DYNAMIC_STYLE = !0;
    let e = G.current;
    videoJsLib && e && !z.current && (z.current = videoJsLib.videoJs(e, {
      width,
      height,
      muted: !0,
      controls: !1,
      controlBar: !1,
      bigPlayButton: !1,
      loadingSpinner: !1,
      errorDisplay: !1,
      textTrackSettings: !1
    }, () => {
      V(O).then(H);
    }));
  }, [O, width, height, V, setPlaying, F, onUpdateCurrentTime, setIsVideoLoaded, H, videoJsLib]);
  useEffect(() => {
    let e = z.current;
    e && (playing ? e.play() : (e.pause(), f = window.performance.now()));
  }, [z, playing]);
  useEffect(() => {
    let e = z.current;
    if (!e || playing) return;
    let t = window.performance.now();
    t - f < 100 || (f = t, e.currentTime(currentTime));
  }, [z, playing, currentTime]);
  useEffect(() => () => {
    let e = z.current;
    e && (e.dispose(), z.current = null);
  }, [z]);
  return jsx(Fragment, {
    children: jsxs("div", {
      className: "video_paint_thumbnail--videoContainer--SfEzj",
      children: [jsx("div", {
        className: N ? "video_paint_thumbnail--videoLoadingOverlay--1NACz" : "video_paint_thumbnail--videoLoadedOverlay--zhBcJ",
        style: {
          width,
          height,
          backgroundImage: `url('${k}')`
        },
        children: imagePaint.video && jsx("video", {
          className,
          ref: G,
          width,
          height,
          onDurationChange: () => {
            let e = z.current;
            setDuration(e?.liveTracker.seekableEnd() || e?.duration() || 0);
          },
          hidden: !isVideoLoaded,
          children: jsx("track", {
            kind: "captions"
          })
        })
      }), jsx("div", {
        className: "video_paint_thumbnail--loadingSpinner--Y3IqF",
        hidden: !N,
        children: jsx(LargeLoadingSpinner, {})
      })]
    })
  });
}
export const A = $$$$A0;