import { s as _$$s } from "../905/256712";
import { v } from "../905/954389";
import { NUh } from "../figma_app/763686";
import { Z } from "../vendor/39153";
import { v4 } from "../vendor/325489";
import { Cp } from "../vendor/288996";
import { y as _$$y } from "../905/270963";
import { l as _$$l } from "../905/755472";
import { D } from "../905/347702";
let u = _$$s();
let $$p4 = D((e, t, i, n) => {
  y("error", e, t, i, n);
});
export function $$m5(e, t, i, n?: any) {
  y("warning", e, t, i, n);
}
export function $$h0(e, t, i, n?: any) {
  y("debug", e, t, i, n);
}
export let $$g1 = D((e, t, i, n?: any) => {
  y("info", e, t, i, n);
});
export function $$f2(e, t, i, r, a, s, o) {
  let l = v(e);
  if (!l) throw Error("unknown severity");
  o.filePath = i;
  o.lineNumber = r;
  y(l, t, a, s, o);
}
let _ = null;
export function $$A3(e) {
  _ = e;
}
function y(e, t, i, n, c) {
  if ((c = {
    logToConsole: NUh.DEFAULT,
    createSentryBreadcrumb: !0,
    modeEventName: "",
    forwardToDatadog: !1,
    figmentOnly: !1,
    reportAsSentryError: !1,
    includePayloadAsTags: !1,
    ...c
  }).logToConsole === NUh.ALWAYS || c.logToConsole === NUh.DEFAULT && u.slogToConsole) ({
    debug: console.debug,
    info: console.info,
    warning: console.warn,
    error: console.error
  })[e].call(console, t, i, n);else {
    let r = window.FigmaMobile;
    r?.logMessageToNative && r.logMessageToNative({
      severity: e,
      category: t,
      message: i,
      filePath: c.filePath,
      lineNumber: c.lineNumber,
      data: n
    });
  }
  if (c.createSentryBreadcrumb && u.enabled && null != e) {
    let r = {
      level: e
    };
    i && (r.message = i);
    n && (r.data = n);
    t && (r.category = t);
    Z(r);
  }
  if (c.reportAsSentryError) {
    let e = Error(t ? `[${t}] ${i}` : i);
    c.filePath && (e.filePath = c.filePath, e.lineNumber = c.lineNumber);
    c.includePayloadAsTags ? v4(t => {
      if (n) for (let [e, i] of Object.entries(n)) t.setTag(e, i);
      Cp(e);
    }) : Cp(e);
  }
  c.reportOnFigmaScopeGuid && _$$l(c.reportOnFigmaScopeGuid, {
    severity: e,
    message: i,
    data: n,
    filePath: c.filePath,
    lineNumber: c.lineNumber,
    timestamp: Date.now()
  });
  c.modeEventName && _?.(function (e) {
    let t = "";
    for (let i of e) "A" <= i && i <= "Z" ? t += i.toLowerCase() : "-" === i ? t += "_" : t += i;
    return t;
  }(c.modeEventName), n, c.forwardToDatadog);
  _$$y && _$$y.logger.log(i, n, function (e) {
    switch (e) {
      case "fatal":
      case "error":
        return "error";
      case "warning":
        return "warn";
      default:
        return "info";
    }
  }(e));
}
export const ED = $$h0;
export const Lo = $$g1;
export const fj = $$f2;
export const gb = $$A3;
export const x1 = $$p4;
export const xi = $$m5;
