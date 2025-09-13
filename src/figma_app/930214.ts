import { useCallback } from "react";
import { throwTypeError } from "../figma_app/465776";
import { tB, ll, U6, cW, ZT, $1 } from "../figma_app/844435";
import { Ro } from "../figma_app/564095";
import { Dd } from "../figma_app/599979";
import { FP, Y8 } from "../figma_app/86989";
import { useCurrentUserOrg } from "../905/845253";
import { getUserId } from "../905/372672";
import { isPluginVersionPublished } from "../figma_app/300692";
import { hasLocalFileId, isPrivatePlugin, manifestContainsWidget } from "../figma_app/155287";
import { BY } from "../905/946805";
import { Ag } from "../905/235578";
export function $$m4() {
  let e = tB();
  let t = ll();
  let r = U6();
  let i = cW();
  let s = ZT();
  let o = FP();
  let c = $1();
  let _ = useCurrentUserOrg();
  return useCallback((n, a) => function ({
    extension: e,
    org: t,
    allowlistPlugins: r,
    allowlistWidgets: n,
    publishedPlugins: i,
    publishedWidgets: a,
    localExtensions: s,
    communityPaymentsState: o,
    lastUsedTimestampById: d,
    type: c
  }) {
    let _;
    let h = Y8({
      extension: e,
      publishedPlugins: i,
      publishedWidgets: a,
      communityPaymentsState: o
    });
    h && (_ = Object.values(s).find(e => e.plugin_id === h.id));
    let m = {
      types: new Set([c]),
      publishedExtension: h,
      key: function (e) {
        let t = e.plugin_id;
        return hasLocalFileId(e) ? `${t}-${e.localFileId}` : t;
      }(e),
      lastUsedTimestamp: d[hasLocalFileId(e) ? e.localFileId : e.plugin_id],
      localPublishedExtension: _
    };
    if (hasLocalFileId(e)) {
      h && !isPluginVersionPublished(h) && (m.publishedExtension = void 0);
      return {
        ...m,
        extension: e,
        canRun: !0,
        canRequest: !1
      };
    }
    if (isPrivatePlugin(e) || !t) return {
      ...m,
      extension: e,
      canRun: !0,
      canRequest: !1
    };
    let g = t.public_plugins_allowed;
    let f = t.plugins_whitelist_enforced;
    let E = t.widgets_whitelist_enforced;
    let y = t.plugin_requests_allowed;
    let b = t.widget_requests_allowed;
    let T = manifestContainsWidget(e);
    if (!g) return {
      ...m,
      extension: e,
      canRun: !1,
      canRequest: !1
    };
    if (!(T ? E : f)) return {
      ...m,
      extension: e,
      canRun: !0,
      canRequest: !1
    };
    let I = !!(T ? n : r)[e.plugin_id];
    return {
      ...m,
      extension: e,
      canRun: I,
      canRequest: !I && (T ? b : y)
    };
  }({
    extension: n,
    org: _,
    allowlistPlugins: t,
    allowlistWidgets: r,
    publishedPlugins: i,
    publishedWidgets: s,
    localExtensions: c,
    communityPaymentsState: o,
    lastUsedTimestampById: e,
    type: a
  }), [_, t, r, i, s, c, o, e]);
}
export function $$g5(e) {
  let t = {};
  for (let r of e) {
    let {
      extension,
      key
    } = r;
    if (!extension) continue;
    let i = t[key];
    if (i) {
      let e = new Set([...i.types, ...r.types]);
      t[key].types = e;
    } else t[key] = r;
  }
  return Object.values(t);
}
export function $$f9(e) {
  return e.types.has(Ag.RECENT) || e.types.has(Ag.USER_SAVED) || e.types.has(Ag.LOCAL);
}
export function $$E7(e) {
  return e.types.has(Ag.ORG_SAVED);
}
export function $$y0(e) {
  return $$E7(e) || e.types.has(Ag.ORG_PRIVATE);
}
export function $$b3(e) {
  return e.types.has(Ag.COMMUNITY);
}
export function $$T8(e) {
  let t = getUserId();
  switch (e) {
    case BY.ALL:
      return () => !0;
    case BY.PLUGINS:
      return e => !manifestContainsWidget(e.extension);
    case BY.WIDGETS:
      return e => manifestContainsWidget(e.extension);
    case BY.FROM_ORG:
      return e => e.types.has(Ag.ORG_PRIVATE);
    case BY.DEVELOPMENT:
      return e => e.types.has(Ag.LOCAL) || function (e, t) {
        let {
          publishedExtension,
          localPublishedExtension
        } = e;
        return !!publishedExtension && !!t && (Ro(publishedExtension, t) || Dd(publishedExtension, t)) && !localPublishedExtension;
      }(e, t);
    default:
      throwTypeError(e);
  }
}
export function $$I6(e, t) {
  return e.lastUsedTimestamp && t.lastUsedTimestamp ? t.lastUsedTimestamp - e.lastUsedTimestamp : 0;
}
export function $$S2(e) {
  let {
    extension
  } = e;
  return hasLocalFileId(extension);
}
export function $$v1(e) {
  return !!e && e.length > 50;
}
export const C5 = $$y0;
export const GX = $$v1;
export const JT = $$S2;
export const Nf = $$b3;
export const Oy = $$m4;
export const ZM = $$g5;
export const bL = $$I6;
export const jb = $$E7;
export const vA = $$T8;
export const wj = $$f9;