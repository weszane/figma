import { xk } from '@stylexjs/stylex';
import { memo, useCallback, useEffect, useMemo, useReducer } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { H } from '../905/203408';
import { getI18nString } from '../905/303541';
import { IconButton } from '../905/443068';
import { k as _$$k } from '../905/443820';
import { textDisplayConfig } from '../905/687265';
import { K as _$$K2 } from '../905/851274';
import { createDeferredPromise } from '../905/874553';
import { p as _$$p } from '../905/951634';
import { Az } from '../9410/635978';
import { Uu } from '../figma_app/8833';
import { useAtomValueAndSetter } from '../figma_app/27355';
import { K as _$$K } from '../figma_app/291291';
import { oe } from '../figma_app/376315';
import { M } from '../figma_app/749682';
import * as E from '../vendor/635';
let N = {
  container: {
    position: 'x10l6tqk',
    top: 'x8ow593',
    right: 'xibut22',
    insetInlineStart: null,
    insetInlineEnd: null,
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    flexDirection: 'x1q0g3np',
    gap: 'xg2d0mh',
    rowGap: null,
    columnGap: null,
    background: 'x1nd36k',
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    $$css: !0
  },
  extendedContainer: {
    height: 'x10w6t97',
    $$css: !0
  },
  containerWithTimeDisplay: {
    paddingLeft: 'x8rdmch',
    paddingRight: 'x1cmmqis',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  timeDisplay: {
    color: 'x1tk3asg',
    fontVariantNumeric: 'xss6m8b',
    ...textDisplayConfig.textBodyMedium,
    textAlign: 'x2b8uid',
    $$css: !0
  }
};
let y = (e, t) => {
  switch (t.type) {
    case 'UPDATE_VIDEO_STATE':
      return {
        ...e,
        videoState: t.payload.state,
        ...(void 0 !== t.payload.currentTime && {
          currentTime: t.payload.currentTime
        }),
        ...(void 0 !== t.payload.totalTime && {
          totalTime: t.payload.totalTime
        })
      };
    case 'UPDATE_TIME':
      return {
        ...e,
        currentTime: t.payload.currentTime,
        totalTime: t.payload.totalTime
      };
    default:
      return e;
  }
};
export class $$b0 {
  constructor() {
    this._videos = [];
    this._playState = 'dormant';
    this._initialize = () => Promise.resolve();
    this._listeners = {
      playing: new Set(),
      canplay: new Set(),
      ended: new Set(),
      timeupdate: new Set(),
      reset: new Set()
    };
    this._loadedDeferred = null;
    this._cachedTotalTime = void 0;
    this._hasEnded = !1;
    this._isWatched = !1;
    this._cachedEndedState = null;
  }
  updateUnderlyingVideoState(e, t, n) {
    if (this._loadedDeferred && t === 'loaded' && (this._loadedDeferred.resolve(), this._loadedDeferred = null), e.length > 0) {
      let t = Math.max(...e.map(e => e.duration || 0));
      t > 0 && (this._cachedTotalTime = t);
      this._cachedEndedState = null;
      this._isWatched = !1;
    }
    Object.entries(this._listeners).forEach(([e, t]) => {
      t.forEach(t => {
        this._videos.forEach(n => n.removeEventListener(e, t));
      });
    });
    Object.entries(this._listeners).forEach(([t, n]) => {
      let a = E()(e, e => e.duration);
      n.forEach(e => {
        a?.addEventListener(t, e);
      });
    });
    this._videos = e;
    this._playState = t;
    this._initialize = n;
  }
  async waitForLoaded() {
    this._loadedDeferred && (await this._loadedDeferred.promise);
  }
  isPlaying() {
    return this.getVideoState() === 'playing';
  }
  isPaused() {
    return this.getVideoState() === 'paused';
  }
  getVideoState() {
    return this._hasEnded ? 'ended' : this._videos.length === 0 ? 'dormant' : this._videos.some(e => !e.paused && !e.ended) ? 'playing' : this._videos.every(e => e.paused && !e.ended) ? 'paused' : 'dormant';
  }
  isWatched() {
    return this._isWatched;
  }
  markAsWatched() {
    this._isWatched = !0;
  }
  resetWatched() {
    this._isWatched = !1;
  }
  preserveStateForCleanup() {
    this._videos.length > 0 && (this._cachedEndedState = this.hasEnded());
  }
  hasEnded() {
    return this._cachedEndedState !== null ? this._cachedEndedState : this._videos.length !== 0 && this._videos.every(e => e.ended);
  }
  currentTime() {
    return this._videos.length === 0 ? 0 : Math.max(...this._videos.map(e => e.currentTime || 0));
  }
  totalTime() {
    return this._videos.length === 0 ? this._cachedTotalTime : Math.max(...this._videos.map(e => e.duration || this._cachedTotalTime || 0));
  }
  async togglePlay() {
    this._videos.length === 0 && this._playState === 'dormant' && (this._loadedDeferred = createDeferredPromise(), await this._initialize(), await this.waitForLoaded());
    let e = this.getVideoState();
    e === 'playing' ? this._videos.forEach(e => {
      e.paused || e?.pause();
    }) : (e === 'ended' && (this._hasEnded = !1, this._isWatched = !1), this._videos.forEach(e => {
      e.paused && !e.ended && e?.play();
    }));
  }
  loop() {
    return this._videos.length !== 0 && this._videos.every(e => e.loop);
  }
  addEventListener(e, t) {
    if (this._listeners[e].add(t), e === 'reset') return;
    let n = E()(this._videos, e => e.duration);
    n?.addEventListener(e, t);
  }
  removeEventListener(e, t) {
    this._listeners[e].$$delete(t);
    e !== 'reset' && this._videos.forEach(n => n.removeEventListener(e, t));
  }
  setVolume(e) {
    let t = Math.max(0, Math.min(1, e));
    this._videos.forEach(e => {
      e.volume = t;
      e.muted = t === 0;
    });
  }
  triggerReset() {
    this._listeners.reset.forEach(e => {
      e(new Event('reset'));
    });
  }
  setEnded(e) {
    this._hasEnded = e;
  }
}
let $$C2 = memo(({
  videoPlayerAdapter: e,
  isLoading: t,
  shouldHidePlaybackButton: n,
  onEnded: i,
  onReset: s,
  isVideoNodeHovered: o,
  isAssetSelected: d = !0,
  nodeId: c,
  inExportView: u = !1,
  hideControls: h = !1
}) => {
  let [_] = useAtomValueAndSetter(oe);
  let [E, x] = useReducer(y, {
    videoState: e.getVideoState(),
    currentTime: e.currentTime() ?? 0,
    totalTime: e.totalTime() ?? 0
  });
  let {
    videoState,
    currentTime,
    totalTime
  } = E;
  let b = e.isWatched?.() ?? !1;
  let C = b && videoState !== 'playing' ? 'ended' : videoState;
  let L = b && videoState !== 'playing' ? 0 : currentTime;
  let R = C === 'playing';
  let D = C === 'paused';
  let O = C === 'ended';
  let j = useMemo(() => !h && (R || D || O && d), [R, D, O, d, h]);
  let k = useMemo(() => !!O || (!h || !R && !D) && (o || !R), [h, R, D, O, o]);
  let A = useMemo(() => _[c]?.currentVolume ?? 1, [_, c]);
  useEffect(() => {
    e.setVolume(A);
  }, [e, A]);
  let w = useCallback(() => {
    x({
      type: 'UPDATE_VIDEO_STATE',
      payload: {
        state: e.getVideoState(),
        currentTime: e.currentTime() ?? 0,
        totalTime: e.totalTime() ?? 0
      }
    });
  }, [e]);
  let P = useCallback(t => {
    'setEnded' in e && typeof e.setEnded == 'function' && e.setEnded(t);
  }, [e]);
  let F = useCallback(() => {
    P(!1);
    w();
  }, [P, w]);
  let M = useCallback(() => {
    e?.loop() || (P(!0), i?.());
    w();
  }, [e, P, i, w]);
  let B = useCallback(() => {
    s?.();
    w();
  }, [s, w]);
  useEffect(() => (e.addEventListener('playing', F), e.addEventListener('canplay', w), e.addEventListener('ended', M), e.addEventListener('timeupdate', w), e.addEventListener('reset', B), () => {
    e.removeEventListener('playing', F);
    e.removeEventListener('canplay', w);
    e.removeEventListener('ended', M);
    e.removeEventListener('timeupdate', w);
    e.removeEventListener('reset', B);
  }), [e, F, M, w, B]);
  let z = useCallback(async () => {
    await e?.togglePlay();
    w();
  }, [e, w]);
  return t ? jsx('div', {
    className: 'x10l6tqk x13vifvy x3m8u43 x1ey2m1c xu96u03 x78zum5 x6s0dn4 xl56j7k x68m4m9',
    children: jsx(_$$k, {
      size: 'lg'
    })
  }) : n ? null : k ? jsxs('div', {
    ...xk(N.container, !u && N.extendedContainer, j && N.containerWithTimeDisplay),
    children: [j && jsx(S, {
      currentTime: L ?? 0,
      totalTime: totalTime ?? 0
    }), jsx($$T1, {
      videoState: C,
      togglePlay: z,
      buttonSize: j ? 'md' : 'lg',
      inExportView: u
    })]
  }) : null;
});
let S = memo(({
  currentTime: e,
  totalTime: t
}) => {
  let n = useMemo(() => `${Az(e)} / ${Az(t)}`, [e, t]);
  return jsx('div', {
    ...xk(N.timeDisplay),
    children: jsx('div', {
      children: n
    })
  });
});
let $$T1 = memo(({
  videoState: e,
  togglePlay: t,
  buttonSize: n,
  inExportView: r
}) => {
  let [u, p] = M();
  let h = e === 'ended';
  let m = e === 'playing';
  let _ = useCallback(() => {
    document.activeElement instanceof HTMLElement && document.activeElement.blur();
    t();
  }, [t]);
  let E = useMemo(() => h ? getI18nString('buzz.video.replay') : m ? getI18nString('buzz.video.pause') : getI18nString('buzz.video.play'), [h, m]);
  let g = useMemo(() => h ? _$$K : m ? _$$p : r ? H : _$$K2, [h, m, r]);
  return jsx('div', {
    className: 'x67bb7w x78zum5 x6s0dn4 xl56j7k',
    className: Uu,
    children: jsx(IconButton, {
      'size': r ? 'md' : n,
      'ref': u,
      'onClick': _,
      'data-testid': 'buzz-video-controls-button',
      'aria-label': E,
      'data-tooltip': void 0,
      'children': jsx(g, {
        className: 'xwa2v1s'
      })
    })
  });
});
export const XW = $$b0;
export const c5 = $$T1;
export const pw = $$C2;