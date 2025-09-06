import { useEffect, useRef } from 'react';
import { reportError } from '../905/11';
import { ServiceCategories as _$$e } from '../905/165054';
import { XHR } from '../905/910117';
import { getInitialOptions } from '../figma_app/169182';
import { BrowserInfo } from '../figma_app/778880';
import { desktopAPIInstance } from '../figma_app/876459';
function c() {
  let e = [];
  for (let t of ['mac', 'windows', 'linux', 'ios', 'chromeos']) {
    if (BrowserInfo[t]) {
      e.push(`os:${t}`);
      break;
    }
  }
  if (desktopAPIInstance) {
    e.push('browser:figma_desktop');
  } else {
    for (let t of ['chrome', 'firefox', 'safari', 'msedge', 'msie', 'ios', 'android']) {
      if (BrowserInfo[t]) {
        e.push(`browser:${t}`);
        break;
      }
    }
  }
  e.push(`client_version:${getInitialOptions().release_manifest_git_commit}`);
  return e;
}
function u(e) {
  let t = [];
  for (let i in e) t.push(`${i}:${e[i]}`);
  return t;
}
let p = getInitialOptions().figma_url ?? '';
export async function $$m2(e, t = {}) {
  await XHR.crossOriginPost(`${p}/api/web_logger/metrics/${e}`, {
    tags: [...c(), ...u(t)].join(',')
  }, {
    rawResponse: !0
  });
}
export function $$h3(e, t, i = {}) {
  XHR.crossOriginPost(`${p}/api/web_logger/histogram/${e}`, {
    value: t,
    tags: [...c(), ...u(i)].join(',')
  }, {
    rawResponse: !0
  }).catch(e => {
    e.status >= 400 && e.status < 500 && reportError(_$$e.DATA_INFRA, e);
  });
}
export async function $$g1(e) {
  e.length > 0 && (await XHR.crossOriginPost(`${p}/api/web_logger/metrics_batched`, e.map(e => ({
    metric: e.metric,
    tags: [...c(), ...u(e.tags)].join(',')
  })), {
    rawResponse: !0
  }));
}
export async function $$f4(e) {
  if (e.length > 0) {
    return await XHR.crossOriginPost(`${p}/api/web_logger/histogram_batched`, e.map(e => ({
      metric: e.metric,
      value: e.value,
      tags: [...c(), ...u(e.tags)].join(',')
    })), {
      rawResponse: !0
    });
  }
}
export let $$_5 = $$h3;
export class $$A0 {
  onVisibilityChange = () => {
    document.visibilityState === 'hidden' && (this.backgrounded = !0);
  };
  stop = (e, t) => {
    let i = t?.skipIfIdle === void 0 || !0 === t.skipIfIdle;
    if (this.finished) return;
    this._timerId && clearTimeout(this._timerId);
    this.finished = !0;
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    document.removeEventListener('offline', this.onOffline);
    let n = Math.round(performance.now() - this._startTime);
    if (!this.backgrounded && !this.offlined || !i) return e(n, this.backgrounded, this.offlined);
  };
  onOffline = () => {
    this.offlined = !0;
  };
  constructor(e = {}, t) {
    this._startTime = performance.now();
    this._timerId = null;
    this.metadata = null;
    this.finished = !1;
    this.backgrounded = !1;
    this.offlined = !1;
    this.backgrounded = document.visibilityState === 'hidden';
    this.offlined = !1 === navigator.onLine;
    if (document.addEventListener('visibilitychange', this.onVisibilityChange), document.addEventListener('offline', this.onOffline), t && (this.metadata = t), e.onTimeout) {
      if (!e.timeoutMs) throw new Error('onTimeout specified without timeoutMs');
      this._timerId = setTimeout(() => {
        this.finished || e.onTimeout(this.backgrounded, this.offlined);
      }, e.timeoutMs);
    }
  }
}
export function $$y6(e, t, i) {
  let r = i?.enabled ?? !0;
  let a = useRef(null);
  r && !a.current && (a.current = new $$A0(i));
  let s = useRef(!1);
  !s.current && e && a.current && (a.current.stop(t, {
    skipIfIdle: !1
  }), s.current = !0);
}
export function $$b7(e, t, i) {
  let r = useRef(void 0);
  r.current || (r.current = new $$A0());
  let a = useRef(!1);
  useEffect(() => {
    !a.current && e && (r.current.stop(e => t(e), i), a.current = !0);
  }, [e, t, i]);
}
export const rw = $$A0;
export const BO = $$g1;
export const Rh = $$m2;
export const S3 = $$h3;
export const rI = $$f4;
export const aD = $$_5;
export const I = $$y6;
export const oY = $$b7;