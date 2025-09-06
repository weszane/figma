import { sortByPropertyWithOptions } from "../figma_app/656233";
import { Vzr, BXd, ZiZ, ZxO } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { Hc } from "../905/805904";
import { Hc as _$$Hc, sH, dI } from "../905/537777";
import { q as _$$q } from "../905/196201";
import { xx } from "../figma_app/815945";
import { trackEventAnalytics } from "../905/449184";
import { H0, X9 } from "../figma_app/191804";
import { w } from "../905/5147";
import { logWarning } from "../905/714362";
import { XHR, getRequest } from "../905/910117";
import { ke } from "../905/309735";
import { lQ, Kb, No } from "../905/405710";
import { E8, PW, Do } from "../figma_app/633080";
import { n as _$$n } from "../905/347702";
import { P as _$$P, n as _$$n2 } from "../905/815475";
let b = Object.create(null);
export function $$T21(e) {
  return $$O0(lQ(e));
}
let $$I22 = "FAILED_THUMBNAIL";
let $$S23 = "LOADING_THUMBNAIL";
export function $$v7(e) {
  return !(!e || e === $$I22 || e === $$S23 || e.startsWith("blob:") && !b[e]);
}
export function $$A14(e, t) {
  let [r, n] = Vzr.generateThumbnailFromStyleMaster(e, t, 18, 18, 2);
  return r && r.status === $$S23 ? $$S23 : $$O0(n) || (console.error(`failed to generate thumbnail for node ${e}`), $$I22);
}
export function $$x15(e, t) {
  let [r, n] = Vzr.generateThumbnailFromStyleConsumer(e, t, 18, 18);
  return $$O0(n) || (console.error(`failed to generate thumbnail for node ${e}`), $$I22);
}
export function $$N19(e, t, r) {
  if (!Kb(e)) return {
    type: "INVALID"
  };
  let n = Vzr.generateSerializableThumbnailForStyle(t || "", e, r || "");
  let a = n.length > 0 ? w.decodeMessage(n) : null;
  let s = a && a.nodeChanges && a.nodeChanges[0] || null;
  return s ? No(s, e) : (console.error(`failed to generate serializable thumbnail for node ${t}`), {
    type: "INVALID"
  });
}
export function $$C12(e) {
  return !!$$w5(e);
}
export function $$w5(e) {
  if ("FILL" !== e.type) return null;
  let t = e.fillPaints;
  if (!t || 1 !== t.length) return null;
  let r = t[0];
  return "SOLID" !== r.type || null == r.color || null == r.opacity ? null : {
    ...r.color,
    a: r.opacity
  };
}
export function $$O0(e) {
  if (e.length > 0) {
    let t = URL.createObjectURL(new Blob([e]));
    b[t] = e;
    return t;
  }
  return null;
}
export function $$R13(e) {
  let t = b[e];
  if (!t) throw Error(`No buffer in cache for thumbnail url ${e}`);
  return t;
}
export function $$L20(e) {
  b[e] && (URL.revokeObjectURL(e), delete b[e]);
}
let P = null;
(() => {
  if (!document) return;
  let e = document.createElement("canvas");
  e.width = 1;
  e.height = 1;
  e.toBlob && e.toBlob(e => {
    if (!e) return;
    let t = new FileReader();
    t.onload = () => {
      P = $$O0(new Uint8Array(t.result));
    };
    t.readAsArrayBuffer(e);
  }, "image/png");
})();
export let $$D18 = () => P;
export function $$k8(e) {
  let t = e => {
    let t = e.toFixed(1);
    return "0" === t.slice(-1) ? e.toFixed(0) : t;
  };
  if (!(e.metrics && e.metrics.fontSize && e.metrics.lineHeight)) return "";
  let r = " \xb7 " + t(e.metrics.fontSize);
  let n = e.metrics.lineHeight;
  return "PERCENT" === n.units && 100 === n.value ? r + "/Auto" : "RAW" === n.units ? r + "/" + t(100 * n.value) : r + "/" + t(n.value);
}
export function $$M25(e) {
  let t = Object.keys(e).map(t => e[t]).filter(e => !e.unpublished_at);
  sortByPropertyWithOptions(t, "name");
  return t;
}
let $$F11 = _$$n(e => e === E8.CURRENT || e === E8.CHANGED || e === E8.DELETED);
let $$j16 = xx(e => {
  let t = {};
  Object.keys(e).forEach(r => {
    t[r] = $$U4(e[r] ?? {});
  });
  return t;
});
export function $$U4(e) {
  let t = {};
  for (let r in e) {
    let n = e[r];
    n.containing_frame?.containingStateGroup == null && (t[r] = {
      ...n
    });
  }
  return t;
}
export let $$B9 = xx(e => {
  let t = $$U4(e.local.components);
  for (let r in e.local.stateGroups) t[r] = e.local.stateGroups[r];
  return t;
});
export function $$G3(e) {
  return ke(e).join("/");
}
export function $$V10(e, t) {
  let r = t.some(t => t.containing_frame?.pageId === e.containing_frame?.pageId && t.containing_frame?.nodeId !== e.containing_frame?.nodeId);
  let n = [];
  r && e.containing_frame?.name?.trim().length && n.push(e.containing_frame.name);
  let i = ke(e.name).map(e => e.trim()).filter(e => "" !== e);
  i.pop();
  n.push(...i);
  return n;
}
export function $$H6(e, t) {
  let r = $$V10(e, t);
  t.some(t => t.containing_frame?.pageName?.trim() !== e.containing_frame?.pageName?.trim()) && e.containing_frame?.pageName?.trim().length && r.unshift(e.containing_frame?.pageName?.trim());
  return r;
}
async function z(e, t) {
  return await $(e, t, PW.COMPONENT);
}
async function W(e, t) {
  return await $(e, t, PW.STATE_GROUP);
}
async function K(e, t) {
  return await $(e, t, PW.VARIABLE);
}
async function Y(e, t) {
  return await $(e, t, PW.VARIABLE_SET);
}
async function $(e, t, r) {
  let n = "";
  let i = "";
  switch (r) {
    case PW.VARIABLE:
      n = "/api/variable_log_data";
      i = "variables";
      break;
    case PW.VARIABLE_SET:
      n = "/api/variable_set_log_data";
      i = "variable_sets";
      break;
    case PW.STATE_GROUP:
      n = "/api/state_group_log_data";
      i = "state_groups";
      break;
    case PW.COMPONENT:
      n = "/api/component_log_data";
      i = "components";
  }
  let a = [];
  let s = (await XHR.post(n, {
    [i]: e,
    fv: t.toString()
  })).data.meta[i];
  if (s.length < e.length) for (let t of e) (r === PW.COMPONENT ? s.find(e => e.component_key === t.key && e.content_hash === t.version) : s.find(e => e.key === t.key && e.version === t.version)) || console.error(`Asset data for ${r} key ${t.key} version ${t.version} is missing. Does the user have proper access to the asset?`);
  for (let e of s) r !== PW.VARIABLE_OVERRIDE && r !== PW.CODE_LIBRARY && r !== PW.CODE_FILE && r !== PW.CODE_COMPONENT && r !== PW.MANAGED_STRING && (e.type = r, e.canvas_url && 0 !== e.canvas_url.length ? a.push(e) : e.type === PW.COMPONENT ? console.error(`Canvas URL missing from ${r} ${e.component_key} version ${e.content_hash}.`) : console.error(`Canvas URL missing from ${r} ${e.key} version ${e.version}.`));
  return a;
}
function X(e) {
  let t = e && e.status;
  return Number.isInteger(t) && t >= 0 ? t : -1;
}
function q(e) {
  let t = X(e);
  return t >= 400 && t < 500;
}
let J = e => {
  let t = function (e, t) {
    let r = e && e.data && e.data.message;
    return "string" == typeof r && r.length > 0 ? r : t;
  }(e, "please try again later");
  let r = X(e);
  r > 0 ? t += ` (status ${e.data.status})` : 0 === r && (t += " (must be online)");
  return t;
};
function Z(e) {
  switch (e.type) {
    case PW.COMPONENT:
      return `component/${e.component_key}/${e.content_hash}`;
    case PW.STATE_GROUP:
      return `state_groups/${e.key}/${e.version}`;
    case PW.VARIABLE:
    case PW.VARIABLE_SET:
      return `variable_set/${e.key}/${e.version}`;
  }
}
var Q = (e => (e.PERMANENT_ERROR = "permanent-error", e.TRANSIENT_ERROR = "transient-error", e.UPSERT_SHARED_SYMBOL_ERROR = "shared-symbol-error", e.UPSERT_SHARED_STATE_GROUP_ERROR = "shared-state-group-error", e.UPSERT_SHARED_VARIABLE_SET_ERROR = "shared-variable-set-error", e.UPSERT_SHARED_VARIABLE_ERROR = "shared-variable-error", e.UPSERT_SHARED_MODULE_ERROR = "shared-module-error", e.UNCAUGHT_ERROR = "uncaught-error", e.SUCCESS = "success", e))(Q || {});
async function ee(e, t, r) {
  try {
    let n;
    try {
      n = await $$ei1.getCanvas({
        canvas_url: function (e, t) {
          switch (e.type) {
            case PW.COMPONENT:
              return e.canvas_url + "&fv=" + t.toString();
            case PW.STATE_GROUP:
              return `/state_group/${e.key}/version/${e.version}/canvas?fv=${t}`;
            case PW.VARIABLE:
            case PW.VARIABLE_SET:
              return e.canvas_url;
          }
        }(e, t)
      });
    } catch (t) {
      if (q(t)) {
        console.warn("Permanent error", t, "status", X(t), "for entry", Z(e));
        return {
          resultType: "permanent-error"
        };
      }
      console.warn("Transient error", t, "status", X(t), "for entry", Z(e));
      return {
        resultType: "transient-error",
        transientError: t
      };
    }
    return {
      resultType: l7.system("upsert-asset-from-log", () => function (e, t, r) {
        let n;
        let a;
        switch (e.type) {
          case PW.COMPONENT:
            n = BXd.upsertSharedSymbol(e.component_key, e.content_hash, e.library_key, t, r, ZiZ.ACTIVE_SCENE);
            a = "shared-symbol-error";
            break;
          case PW.STATE_GROUP:
            n = BXd.upsertSharedStateGroup(e.key, e.version, e.library_key, t, r, ZiZ.ACTIVE_SCENE);
            a = "shared-state-group-error";
            break;
          case PW.VARIABLE:
            n = BXd.upsertSharedVariable(Hc(e.key, e.version), t, r);
            a = "shared-variable-error";
            break;
          case PW.VARIABLE_SET:
            n = BXd?.upsertSharedRootVariableSet(_$$Hc(e.key, e.version), e.library_key, t, ZxO.NO, r);
            a = "shared-variable-set-error";
        }
        if (!n || n.fileUpdateRequired) return a;
        if (!n.localGUID) {
          if (e.type === PW.COMPONENT) {
            console.error(`Couldn't upsert shared component in scene for key ${e.component_key} version ${e.content_hash}.`);
            return a;
          }
          if (e.type === PW.STATE_GROUP) {
            console.error(`Couldn't upsert shared state group in scene for key ${e.key} version ${e.version}.`);
            return a;
          }
        }
        return "success";
      }(e, r, n)),
      bytesAdded: n.byteLength
    };
  } catch (t) {
    console.error("Uncaught error", t, "during buffer processing of", Z(e));
    return {
      resultType: "uncaught-error"
    };
  }
}
export async function $$et2(e, t, r, n) {
  try {
    let i;
    let a = Date.now();
    let s = 0;
    let o = {
      "permanent-error": 0,
      "transient-error": 0,
      "shared-symbol-error": 0,
      "shared-state-group-error": 0,
      "uncaught-error": 0,
      success: 0,
      "shared-variable-error": 0,
      "shared-variable-set-error": 0,
      "shared-module-error": 0
    };
    let l = -1;
    let d = [];
    if (e.length > 0) try {
      d = await z(e, n);
    } catch (e) {
      q(e) ? o["permanent-error"]++ : (o["transient-error"]++, i = e);
      l = X(e);
      d = [];
    }
    for (let e of d) {
      let {
        resultType,
        bytesAdded,
        transientError
      } = await ee(e, n, r);
      o[resultType]++;
      s += bytesAdded ?? 0;
      transientError && (i = transientError);
    }
    let u = [];
    if (t.length > 0) try {
      u = await W(t, n);
    } catch (e) {
      q(e) ? o["permanent-error"]++ : (o["transient-error"]++, i = e);
      l = X(e);
      u = [];
    }
    for (let e of u) {
      let {
        resultType,
        bytesAdded,
        transientError
      } = await ee(e, n, r);
      o[resultType]++;
      s += bytesAdded ?? 0;
      transientError && (i = transientError);
    }
    if (trackEventAnalytics("publishing_buffer_fetch", {
      latency: Date.now() - a,
      num_versions_fetched: d.length + u.length,
      num_success: o.success,
      total_bytes: s,
      failed_to_upsert_in_scene: o["shared-symbol-error"] + o["shared-state-group-error"],
      permanent_errors: o["permanent-error"],
      transient_errors: o["transient-error"],
      uncaught_errors: o["uncaught-error"],
      log_data_error_status: l
    }), o["transient-error"] > 0) return Promise.reject(Error(J(i)));
    return Promise.resolve(!0);
  } catch (e) {
    return Promise.reject(Error(J(e)));
  }
}
export async function $$er17(e, t, r, n) {
  try {
    let i;
    let a = Date.now();
    let s = 0;
    let o = {
      "permanent-error": 0,
      "transient-error": 0,
      "shared-variable-error": 0,
      "shared-variable-set-error": 0,
      "uncaught-error": 0,
      success: 0,
      "shared-symbol-error": 0,
      "shared-state-group-error": 0,
      "shared-module-error": 0
    };
    let l = -1;
    let d = [];
    if (e.length > 0) try {
      d = await Y(e, n);
    } catch (e) {
      q(e) ? o["permanent-error"]++ : (o["transient-error"]++, i = e);
      l = X(e);
      d = [];
    }
    for (let e of d) {
      let {
        resultType,
        bytesAdded,
        transientError
      } = await ee(e, n, r);
      o[resultType]++;
      s += bytesAdded ?? 0;
      transientError && (i = transientError);
    }
    let u = [];
    if (t.length > 0) try {
      u = await K(t, n);
    } catch (e) {
      q(e) ? o["permanent-error"]++ : (o["transient-error"]++, i = e);
      l = X(e);
      u = [];
    }
    for (let e of u) {
      let {
        resultType,
        bytesAdded,
        transientError
      } = await ee(e, n, r);
      o[resultType]++;
      s += bytesAdded ?? 0;
      transientError && (i = transientError);
    }
    if (trackEventAnalytics("variable_publishing_buffer_fetch", {
      latency: Date.now() - a,
      num_versions_fetched: d.length + u.length,
      num_success: o.success,
      total_bytes: s,
      failed_to_upsert_in_scene: o["shared-variable-set-error"] + o["shared-variable-error"],
      permanent_errors: o["permanent-error"],
      transient_errors: o["transient-error"],
      uncaught_errors: o["uncaught-error"],
      log_data_error_status: l
    }), o["transient-error"] > 0) return Promise.reject(Error(J(i)));
    return Promise.resolve(!0);
  } catch (e) {
    return Promise.reject(Error(J(e)));
  }
}
let en = class e {
  constructor() {
    this.canvasCache = Object.create(null);
    this.canvasRequestsInFlight = Object.create(null);
    this.thumbnailCache = new _$$q(e.MAX_VARIABLE_SET_THUMBNAILS);
    this.thumbnailRequestsInFlight = Object.create(null);
    this.getCanvas = async ({
      canvas_url: e
    }) => {
      if (!e) throw Error("No canvas URL");
      let {
        url
      } = _$$P(e);
      let r = this.canvasCache[url];
      if (r) return r;
      let n = this.canvasRequestsInFlight[url];
      if (n) return n.then(([e]) => e);
      try {
        let e = _$$n2(url);
        this.canvasRequestsInFlight[url] = e;
        let [r, n] = await e;
        this.canvasCache[n] = r;
        return r;
      } catch (e) {
        console.warn("Team library cache error on get() with status", X(e), "with error", e);
        return e;
      } finally {
        delete this.canvasRequestsInFlight[url];
      }
    };
    this.getVariableSetThumbnails = e => {
      if (!e) return Promise.reject(Error("No canvas URL"));
      if (this.thumbnailCache.has(e)) return Promise.resolve(this.thumbnailCache.get(e));
      if (e in this.thumbnailRequestsInFlight) return this.thumbnailRequestsInFlight[e];
      {
        let t;
        let r;
        let n = getRequest(e, null, {
          responseType: "arraybuffer"
        }).then(({
          data: n,
          status: i
        }) => {
          t = new TextDecoder("utf-8").decode(n);
          r = i;
          let a = function (e) {
            let t = {};
            for (let r of Object.keys(e)) {
              let n = sH(r);
              n ? t[dI(n)] = e[r] : console.error(`Received invalid collection ID in thumbnails response: ${r}`);
            }
            return t;
          }(JSON.parse(t));
          this.thumbnailCache.set(e, a);
          return a;
        }).catch(n => {
          console.warn("Team library cache error on get() with status", X(n), "with error", n);
          logWarning("teamLibraryItemSeceneGraphCache", "unable to get variable set thumbnails", {
            decodedData: t,
            thumbnailUrl: e,
            requestStatus: r
          });
          return n;
        }).$$finally(() => {
          delete this.thumbnailRequestsInFlight[e];
        });
        this.thumbnailRequestsInFlight[e] = n;
        return n;
      }
    };
    this.putCanvas = (e, t) => {
      this.canvasCache[e] = t;
    };
    this.hasKeyInCache = e => e in this.canvasCache || this.thumbnailCache.has(e);
    this.clearCache = () => {
      this.canvasCache = Object.create(null);
      this.thumbnailCache.reset();
      this.canvasRequestsInFlight = Object.create(null);
      this.thumbnailRequestsInFlight = Object.create(null);
    };
    this.getCacheValueOrNull = e => this.thumbnailCache.get(e) ?? null;
    this.clearCache();
  }
};
en.MAX_VARIABLE_SET_THUMBNAILS = 20;
export let $$ei1 = new en();
export function $$ea26(e, t = null) {
  let r = (Do(e) ? e.containingFrame?.backgroundColor : e.type === PW.COMPONENT && e.containing_frame?.backgroundColor ? e.containing_frame.backgroundColor : e.type === PW.STATE_GROUP && e.fill_color ? e.fill_color : e.type === PW.STATE_GROUP && e.containing_frame?.backgroundColor ? e.containing_frame.backgroundColor : void 0) ?? t;
  if (!r) return null;
  let n = H0(r);
  return n && 0 !== n.a ? X9(n, 1) : null;
}
export function $$es24(e) {
  let t = null;
  e.every(e => {
    if (null === t) t = e.library_key;else if (t !== e.library_key) {
      t = null;
      return !1;
    }
    return !0;
  });
  return t;
}
export const $X = $$O0;
export const Eo = $$ei1;
export const F1 = $$et2;
export const J_ = $$G3;
export const Jl = $$U4;
export const MJ = $$w5;
export const O9 = $$H6;
export const OM = $$v7;
export const P$ = $$k8;
export const Qx = $$B9;
export const R8 = $$V10;
export const UB = $$F11;
export const UE = $$C12;
export const Vu = $$R13;
export const aV = $$A14;
export const ah = $$x15;
export const cO = $$j16;
export const g4 = $$er17;
export const jh = $$D18;
export const oU = $$N19;
export const qv = $$L20;
export const r2 = $$T21;
export const r8 = $$I22;
export const u0 = $$S23;
export const uj = $$es24;
export const y3 = $$M25;
export const zR = $$ea26;