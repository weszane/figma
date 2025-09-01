import { ServiceCategories as _$$e } from '../905/165054';
import { s as _$$s } from '../905/256712';
import { L } from '../905/270963';
import { n as _$$n } from '../905/347702';
import { b } from '../905/690073';
import { Br } from '../3973/348894';
import { getInitialOptions } from '../figma_app/169182';
import { Bq } from '../figma_app/493477';
import { NUh } from '../figma_app/763686';
import { S8 } from '../vendor/231181';
import { Cp as _$$Cp, o as _$$o, gV, J0, J5, NA, wd, Wt } from '../vendor/288996';
import { v4 } from '../vendor/325489';
let $$g20 = [/a\[b\]\.target\.className\.indexOf is not a function/, /\(event\.target\.className \|\| ""\)\.indexOf is not a function/, /XHR for ".*" failed with status/, /Endpoint requires authenticated user/];
let $$f18 = [/\bintercomcdn\.com\b/, /\bkaspersky-labs\.com\b/, /\bchrome-extension:\/\//, /\bmoz-extension:\/\//, /\bsafari-extension:\/\//];
let $$_8 = new b('sentry');
export function $$A2(e) {
  _$$Cp(e);
}
export function $$y19(e) {
  for (let t of e.exception?.values || []) {
    for (let e of t.stacktrace?.frames || []) e.filename && (e.filename = Br(e.filename));
  }
  e.request?.url && (e.request.url = Br(e.request.url));
  typeof e.tags?.url == 'string' && (e.tags.url = Br(e.tags.url));
}
export function $$b10(e) {
  let {
    category,
    data
  } = e;
  if (category === 'xhr' || category === 'fetch') {
    let e = data?.url;
    if (e && (e.match(/segment.io/) || e.startsWith('/api/figment-proxy') || e.startsWith(`${location.origin}/api/figment-proxy`))) return null;
    data && e && e.startsWith('data:') && (data.url = `${e.substring(0, 36)}... (truncated from ${e.length} characters)`);
  }
  e.category === 'navigation' && (data?.from && (data.from = Br(data.from)), data?.to && (data.to = Br(data.to)));
  $$_8.trigger('breadcrumb', e);
  return e;
}
export var $$v3 = (e => (e.Critical = 'critical', e.Major = 'major', e.Minor = 'minor', e.Trivial = 'trivial', e))($$v3 || {});
let I = _$$s();
export function $$E11(e, t) {
  I.enabled && (NA(e, t), L?.setGlobalContextProperty(e, t));
}
export function $$x1(e) {
  I.enabled && (Wt(e), L && L.setGlobalContext({
    ...e,
    ...L.getGlobalContext()
  }));
}
export function $$S7(e, t) {
  I.enabled && _$$o(e, t);
}
export function $$w17(e) {
  $$E11('file.key', e.key);
  e.fileRepoId === null ? $$E11('branching', 'not enabled') : ($$E11('branching_repo', e.fileRepoId), e.sourceFileKey === null ? $$E11('branching', 'main branch') : $$E11('branching', 'user branch'));
}
export function $$C5(e) {
  e && gV({
    id: e
  });
}
export function $$T12(e) {
  e && NA('org.id', e);
}
export function $$k14(e) {
  e && NA('server_release', e);
}
export function $$R6(e, {
  depth: t = 3,
  maxProperties: i = 1 / 0,
  exclude: n = []
} = {}) {
  let a = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber', 'toJSON'];
  let s = {};
  for (let t of Object.keys(e)) (!a.includes(t) || !n.includes(t)) && (s[t] = e[t]);
  return Bq(S8(s, t, i));
}
let N = new Set();
export function $$P9() {
  N.clear();
}
export let $$O0 = _$$n((e, t, i, n) => {
  let r;
  if (!(t.reportedToSentry || t.cause?.reportedToSentry) && !I.ignoreErrors) {
    if (n) {
      let e = function (e) {
        let t = e.stack?.split('\n').slice(1, 3).join('|') || '';
        return `${e.name}:${e.message}:${t}`;
      }(t);
      if (N.has(e)) return;
      N.add(e);
    }
    t.reportedToSentry = !0;
    I.slogToConsole && console.error(t, i);
    I.enabled && (v4(n => {
      if (e !== _$$e.UNOWNED && n.setTag('area', e), t.sentryTags) {
        for (let e in t.sentryTags) n.setTag(e, t.sentryTags[e]);
      }
      r = _$$Cp(t, i);
    }), L && L.addError(t, {
      captureContext: i,
      ...(e !== _$$e.UNOWNED && {
        area: e
      }),
      ...t.sentryTags
    }));
    return r;
  }
}, 'reportErrorToSentry');
export function $$D13(e) {
  I.slogToConsole && console.error(e);
  I.enabled && wd(e);
}
export function $$L16(e, t) {
  t == null && $$O0(e, new Error(`value is ${void 0 === t ? 'undefined' : 'null'}`));
}
export function $$F15() {
  let e = getInitialOptions().release_manifest_git_commit;
  I.enabled && e && (J0(), J5(), window.drainErrors && window.drainErrors());
}
export const $D = $$O0;
export const Bc = $$x1;
export const Cp = $$A2;
export const DZ = $$v3;
export const NU = NUh;
export const Tm = $$C5;
export const V5 = $$R6;
export const XM = $$S7;
export const Zx = $$_8;
export const du = $$P9;
export const it = $$b10;
export const kF = $$E11;
export const mR = $$T12;
export const us = $$D13;
export const uy = $$k14;
export const wp = $$F15;
export const xO = $$L16;
export const xZ = $$w17;
export const xg = $$f18;
export const xn = $$y19;
export const yO = $$g20;