import { useSelector } from "../vendor/514228";
import { sortByCreatedAt } from "../figma_app/656233";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { k as _$$k2 } from "../905/651849";
import { xf } from "../figma_app/416935";
import { debugState } from "../905/407919";
import { BrowserInfo } from "../figma_app/778880";
import { ZB as _$$ZB } from "../905/491152";
import { reportError } from "../905/11";
import { logInfo } from "../905/714362";
import { YH, gU } from "../figma_app/930338";
import { isInteractionPathCheck, Lg } from "../figma_app/897289";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { N6 } from "../figma_app/471982";
import { vf, Yp, mZ, F8, Mj, WD } from "../figma_app/808294";
import { AC } from "../figma_app/777551";
import { J as _$$J } from "../905/896954";
import { XE } from "../figma_app/976749";
import { Dd, Wl, l8, En, Ii, xw, vC } from "../figma_app/599979";
import { Y5 } from "../figma_app/455680";
import { C8 } from "../905/216495";
import { Ni } from "../figma_app/188152";
import { FFileType } from "../figma_app/191312";
import { Eh } from "../figma_app/12796";
import { eZ, xp, HB } from "../figma_app/455620";
import { d as _$$d } from "../905/44199";
import { FEditorType } from "../figma_app/53721";
import { o1, aP } from "../figma_app/10554";
import { PN } from "../905/54385";
import { am, FW, Ye, UX, Kd, XS, pR, ho, Av, xg, Dk, Pe, MP, Wt, ZV, Lu, k0, ZQ, bH, f5, Q7, u8 } from "../figma_app/155287";
import { $A } from "../905/862883";
import { ib, hb, Vf, _O } from "../905/488349";
import { pI } from "../905/544659";
import { MG } from "../905/816730";
import { pN } from "../905/571565";
import { Rs } from "../figma_app/761870";
import { $A as _$$$A } from "../905/782918";
import { Hc, yO, n as _$$n, Yp as _$$Yp, Lg as _$$Lg } from "../figma_app/740025";
import { jY, Ro } from "../figma_app/564095";
import { DK } from "../figma_app/291892";
import { T as _$$T } from "../905/858738";
import { ZY, Qx as _$$Qx } from "../905/764747";
import { M as _$$M } from "../figma_app/170366";
export async function $$q53(e, {
  ignoreMissingEditorType: t,
  resourceType: r,
  isPublishing: n
}) {
  let i = await $$eg71(e, {
    resourceType: r
  });
  if (t && i.error?.text === $$el27()) return i.manifest;
  if (i.error) throw Error(am(i.error));
  return i.manifest;
}
function J({
  parameters: e,
  parameterOnly: t
}, r) {
  if (e && function (e, t) {
    if (!e.length) throw Error(`Expected "${t}.parameters" to have non-empty parameter list.`);
    let r = new Set();
    e.forEach(e => {
      if (r.has(e.key)) throw Error(`Expected "${t}.parameters" to have unique keys, but got more than one parameter with key: "${e.key}"`);
      r.add(e.key);
    });
    let n = !1;
    for (let {
      key,
      optional
    } of e) {
      if (n && !optional) throw Error(`Optional parameters must be listed last in the parameter list. ${key} not marked as optional.`);
      optional && (n = !0);
    }
  }(e, r), t && !e) throw Error(`Expected parameters to be defined for "${r}" marked as parameterOnly.`);
}
let Z = {
  [FEditorType.Design]: FW.FIGMA,
  [FEditorType.DevHandoff]: FW.DEV,
  [FEditorType.Whiteboard]: FW.FIGJAM,
  [FEditorType.Slides]: FW.SLIDES,
  [FEditorType.Sites]: FW.SITES,
  [FEditorType.Figmake]: FW.SITES,
  [FEditorType.Cooper]: FW.BUZZ,
  [FEditorType.Illustration]: FW.FIGMA
};
export function $$Q12(e) {
  return Z[e];
}
let ee = {
  [FW.FIGMA]: FEditorType.Design,
  [FW.DEV]: FEditorType.DevHandoff,
  [FW.INSPECT]: FEditorType.DevHandoff,
  [FW.FIGJAM]: FEditorType.Whiteboard,
  [FW.SLIDES]: FEditorType.Slides,
  [FW.SITES]: FEditorType.Sites,
  [FW.BUZZ]: FEditorType.Cooper
};
export function $$et8(e) {
  return ee[e];
}
export function $$er28(e) {
  switch (e) {
    case FW.FIGMA:
    case FW.DEV:
    case FW.INSPECT:
      return FFileType.DESIGN;
    case FW.FIGJAM:
      return FFileType.WHITEBOARD;
    case FW.SLIDES:
      return FFileType.SLIDES;
    case FW.SITES:
      return FFileType.SITES;
    case FW.BUZZ:
      return FFileType.COOPER;
    default:
      throwTypeError(e);
  }
}
export function $$en36(e) {
  switch (e) {
    case FW.FIGMA:
      return $A.Design;
    case FW.FIGJAM:
      return $A.FigJam;
    case FW.DEV:
    case FW.INSPECT:
      return $A.Handoff;
    case FW.SLIDES:
      return $A.Slides;
    case FW.SITES:
      return $A.Design;
    case FW.BUZZ:
      return $A.Cooper;
    default:
      throwTypeError(e);
  }
}
export function $$ei15() {
  return useSelector(e => "fullscreen" === e.selectedView.view ? Z[e.selectedView.editorType] : void 0);
}
export function $$ea37() {
  let e = debugState.getState().selectedView;
  if ("fullscreen" === e.view) return Z[e.editorType];
}
export function $$es9(e, t) {
  return Array.isArray(t) ? t.includes(e) : e === FW.FIGMA;
}
class eo extends Error {
  constructor(e, t) {
    super(e);
    this.message = e;
    this.manifest = t;
  }
}
export function $$el27() {
  return `Missing editorType in manifest.  ${ed()}`;
}
function ed() {
  let e = Ye.filter(e => e !== FW.INSPECT);
  getFeatureFlags().buzz_plugins_publishing || (e = e.filter(e => e !== FW.BUZZ));
  return `Specify a combination of [${e.map(e => `"${e}"`).join(", ")}]`;
}
function ec(e, t) {
  let r = new Set(UX);
  return e.filter(e => !r.has(e) || t?.has(e));
}
export function $$eu5(e) {
  return Kd.some(t => e.includes(t));
}
export class $$ep70 {
  constructor(e, t) {
    this.permissions = e;
    this.trustedPluginOrigin = t;
  }
  static none() {
    return new $$ep70([], void 0);
  }
  static forTest(e) {
    return new $$ep70(e || XS, void 0);
  }
  static forConsoleGlobal() {
    let e = [...pR];
    getFeatureFlags().first_draft_debug && e.push("firstdraft");
    return new $$ep70(e, void 0);
  }
  static forFirstPartyPlugin() {
    return new $$ep70(XS, void 0);
  }
  static forLocalPlugin(e) {
    let t = e.manifest.permissions || [];
    if (logInfo("ValidatedPluginPermissions", "Validating permissions for local plugin", {
      pluginID: e.manifest.id,
      requestedPermissions: t
    }), getFeatureFlags().plugins_internal_apis) return new $$ep70(t, "*");
    let r = ec(t);
    r.length < t.length && reportError(_$$e.EXTENSIBILITY, Error("Untrusted local plugin denied internal api permissions"));
    return new $$ep70(r, void 0);
  }
  static forInstalledPlugin(e) {
    let t = e.manifest.permissions || [];
    if (logInfo("ValidatedPluginPermissions", "Validating permissions for installed plugin", {
      pluginID: e.plugin_id,
      requestedPermissions: t
    }), eZ(e.plugin_id)) return new $$ep70(ec(t, xp(e.plugin_id)), HB(e.plugin_id));
    let r = ec(t);
    r.length < t.length && reportError(_$$e.UNOWNED, Error("Untrusted installed plugin denied internal api permissions"));
    return new $$ep70(r, void 0);
  }
}
export function $$e_73(e) {
  try {
    return new URLPattern(e);
  } catch (e) {
    return null;
  }
}
export function $$eh24(e, t) {
  let r = [];
  let n = 0;
  for (let [i, a] of t) {
    r.push(e.substring(n, i));
    n = a;
  }
  r.push(e.substring(n, e.length));
  return r.join("");
}
export function $$em60(e, t, r) {
  var n;
  var i;
  var a;
  let s;
  let o;
  let l;
  let d;
  let c;
  let u = "widget" === r.resourceType || !!t.cachedContainsWidget;
  if ("error" in t) o = {
    type: ho.LOAD,
    text: t.error
  };else try {
    l = JSON.parse(t.manifest);
  } catch (e) {
    o = {
      type: ho.PARSE,
      text: e.message
    };
  }
  if ("unknown" === r.resourceType) {
    if (l) u = l.containsWidget;else if ("manifest" in t) try {
      u = !!/containsWidget/.test(t.manifest);
    } catch {}
  }
  if (l) {
    try {
      MG(l.editorType, ib, "manifest.editorType");
      d = l.editorType;
    } catch {}
    try {
      MG(l.capabilities, hb, "manifest.capabilities");
      c = l.capabilities;
    } catch {}
  }
  let p = _$$M();
  if ("manifest" in t && p?.updateCachedContainsWidget({
    id: e,
    cachedContainsWidget: u
  }), !o) try {
    s = function (e, t) {
      try {
        MG(e, "widget" === t.resourceType ? Vf : _O, "manifest");
      } catch (e) {
        if (e instanceof Error) throw Error(function (e) {
          let t = "but got additional property";
          let r = e.lastIndexOf(t);
          if (-1 !== r) {
            let n = e.substring(r + t.length).replace(/"/g, "").trim();
            return `Manifest has unexpected extra property: ${n}`;
          }
          return e;
        }(e.message));
        throw e;
      }
      if ("plugin" === t.resourceType) {
        if (e.relaunchButtons) {
          let t = new Set();
          e.relaunchButtons.forEach(r => {
            if (t.has(r.command)) throw new eo(`Expected "manifest.relaunchButtons" to have unique commands, but got more than one button with command: "${r.command}"`, e);
            t.add(r.command);
          });
        }
        !function (e) {
          if (J(e, "manifest"), e.menu) {
            if (e.parameters) throw Error("manifest.parameters should not be specified when menu items are defined");
            !function e(t) {
              for (let r of t) Av(r) ? J(r, r.name) : xg(r) && e(r.menu);
            }(e.menu);
          }
        }(e);
      }
      if (!function (e) {
        if (!("editorType" in e)) throw new eo($$el27(), e);
        if (e.editorType.some(e => !Ye.includes(e)) || e.editorType.length < 1 || e.editorType.length > Ye.length) throw Error(`Invalid editorType in manifest.  ${ed()}`);
      }(e), !function (e) {
        if (e.permissions) {
          let t = e.permissions.find(e => !XS.includes(e));
          if (void 0 !== t) throw new eo(`Invalid permission specified: ${t}`, e);
        }
      }(e), !function (e) {
        if (e.capabilities) for (let t of e.capabilities) {
          if (Dk.includes(t) || function (e, t) {
            throw new eo(`Invalid capability specified: ${t}`, e);
          }(e, t), "panel" === t || "inspect" === t || "codegen" === t || "linkpreview" === t || "vscode" === t) {
            if (!Pe(e.editorType)) throw new eo(`Capability "${t}" requires "editorType" to include "dev"`, e);
            if (e.containsWidget) throw new eo(`Capability "${t}" is not supported for widgets`, e);
          }
          if (_$$T() && !e.capabilities.includes("vscode")) throw new eo('Manifest must include "vscode" capability to run in Figma for VS Code Extension', e);
        }
      }(e), !function (e) {
        if (!e.capabilities?.includes("codegen")) {
          if (e.codegenLanguages) throw new eo("codegenLanguages only supported for codegen plugins", e);
          if (e.codegenPreferences) throw new eo("codegenPreferences only supported for codegen plugins", e);
          return;
        }
        if (!e.codegenLanguages || 0 === e.codegenLanguages.length) throw new eo("codegen plugins must define at least one language in codegenLanguages", e);
        if (!e.codegenPreferences) return;
        let t = e.codegenLanguages?.map(e => e.value) ?? [];
        let r = [];
        let n = new Set();
        for (let i = 0; i < e.codegenPreferences.length; i++) {
          let a = e.codegenPreferences[i];
          for (let r of a.includedLanguages ?? []) if (!t.includes(r)) throw new eo(`Unknown language "${r}" in codegenPreferences[${i}].includedLanguages`, e);
          if (MP(a) && r.push(a), Wt(a)) {
            if (n.has(a.propertyName)) throw new eo('codegenPreferences "action" itemType settings must have unique propertyName values', e);
            n.add(a.propertyName);
          }
          if (ZV(a)) {
            let t = 0;
            if (a.options) for (let e of a.options) e.isDefault && (t += 1);
            if (1 !== t) throw new eo('codegenPreferences itemType: "select" should have exactly one default option', e);
          }
        }
        if (r.length > 1) throw new eo('codegenPreferences should have at most one itemType: "unit"', e);
      }(e), "widget" === t.resourceType && e.containsWidget && (function (e) {
        if (e.widgetApi && e.editorType?.includes(FW.SLIDES)) throw new eo("Widgets are not supported in Figma Slides", e);
      }(e), "1.0.0" !== e.widgetApi)) throw new eo("Widgets must specify the 'widgetApi' manifest field. The latest version is '1.0.0'", e);
      if (e.networkAccess) {
        let t = pI(e.networkAccess);
        if (!t.isValid) throw new eo(t.validationErr, e);
      }
      if (e.relatedLinkDomains) {
        if (!Pe(e.editorType)) throw new eo("'relatedLinkDomains' is only supported for plugins with 'editorType' containing 'dev'", e);
        for (let t of e.relatedLinkDomains) {
          if (!t.startsWith("https://") || t.startsWith("http://")) throw new eo(`Invalid domain '${t}' in 'relatedLinkDomains'. Domains must start with 'https:// or 'http://'`, e);
          if (!$$e_73(t)) throw new eo(`Invalid domain '${t}' in 'relatedLinkDomains'.`, e);
        }
      }
      if (e.devResourceDomains) {
        if (!Pe(e.editorType)) throw new eo("'devResourceDomains' is only supported for plugins with 'editorType' containing 'dev'", e);
        for (let t of e.devResourceDomains) {
          if (!t.startsWith("https://") || t.startsWith("http://")) throw new eo(`Invalid domain '${t}' in 'devResourceDomains'. Domains must start with 'https:// or 'http://'`, e);
          if (!$$e_73(t)) throw new eo(`Invalid domain '${t}' in 'devResourceDomains'.`, e);
        }
      }
      return e;
    }(l, {
      resourceType: u ? "widget" : "plugin"
    });
  } catch (e) {
    o = {
      type: ho.VALIDATE,
      text: e.message
    };
    e.manifest && (s = e.manifest);
  }
  let _ = u ? (n = d, {
    ...eT,
    editorType: n || void 0
  }) : (i = d, a = c, {
    ...eb,
    editorType: i || void 0,
    capabilities: a || void 0
  });
  return {
    plugin_id: s && s.id || "",
    name: function (e, t) {
      if (e) return e.name;
      if (t.lastKnownName) return t.lastKnownName;
      if (!t.path) return "Error";
      {
        let e = t.path.split(/\/|\\/);
        return e.length >= 2 ? e[e.length - 2] : t.path;
      }
    }(s, t),
    manifest: s ?? _,
    localFileId: e,
    localFilePath: t.path,
    error: o
  };
}
export async function $$eg71(e, t) {
  let r = _$$M();
  try {
    if (!r) throw Error("desktopApp not available");
    let n = await r.getLocalFileExtensionManifest(e);
    return $$em60(e, n, t);
  } catch (r) {
    return {
      plugin_id: "",
      name: "Error",
      manifest: "widget" === t.resourceType ? eT : eb,
      localFileId: e,
      localFilePath: "",
      error: {
        type: ho.LOAD,
        text: r.message
      }
    };
  }
}
export function $$ef65(e, t) {
  let r = e => JSON.stringify(e).split(/(<!--|-->|\bimport)/g).map((e, t) => 1 & t ? e.slice(0, 2) + '"+"' + e.slice(2) : e).join("");
  if ("string" == typeof t) return `const __html__ = ${r(t)};${e}`;
  let n = Object.entries(t).map(([e, t]) => `[${r(e)}]:${r(t)}`).join(",");
  return `const __uiFiles__ = {${n}};${e}`;
}
export async function $$eE21(e) {
  let t;
  let r = _$$M();
  try {
    if (!r) throw Error("desktopApp not available");
    t = await r.getLocalFileExtensionSource(e);
  } catch (e) {
    throw Error(`Unable to load code: ${e}`);
  }
  if (t.buildErrCode) throw Error("Build error: " + t.stderr + "\nPath was: " + t.path);
  let n = t.source;
  t.html && (n = $$ef65(n, t.html));
  return n;
}
export function $$ey26(e) {
  return e.error?.text === $$el27() ? e.name : `${e.error ? `\u26A0  ` : ""}${e.name}`;
}
let eb = {
  id: "",
  name: "",
  api: "",
  main: ""
};
let eT = {
  id: "",
  name: "",
  api: "",
  main: "",
  containsWidget: !0,
  widgetApi: ""
};
let $$eI57 = {
  id: "",
  plugin_id: "",
  manifest: {
    ...eb
  },
  name: "",
  version: "",
  release_notes: "",
  installed_by: "user",
  description: "",
  tagline: "",
  creator_policy: "",
  created_at: "",
  redirect_icon_url: "",
  redirect_cover_image_url: "",
  redirect_code_url: "",
  is_private: !1
};
let eS = {
  id: "",
  publisher: {
    is_restricted_by_current_user: !1,
    id: "",
    name: "",
    img_url: "",
    img_urls: {},
    profile_handle: "",
    primary_user_id: null,
    current_user_is_following: !1,
    current_user_is_followed: !1,
    location: null,
    follower_count: 0,
    following_count: 0,
    entity_type: o1.USER,
    badges: [],
    description: ""
  },
  creator: {
    id: "",
    handle: "",
    img_url: ""
  },
  category_id: null,
  versions: {},
  install_count: 0,
  unique_run_count: 0,
  view_count: 0,
  like_count: 0,
  comment_count: 0,
  unpublished_at: null,
  current_plugin_version_id: "",
  roles: {},
  realtime_token: "",
  support_contact: "",
  created_at: "",
  org_id: null,
  redirect_thumbnail_url: null,
  thumbnail_url: null,
  community_publishers: {
    accepted: [],
    pending: []
  },
  comments_setting: Ni.ENABLED,
  is_widget: !1,
  editor_type: "design_and_whiteboard",
  publishing_status: null,
  badges: []
};
let ev = {
  ...eS,
  is_widget: !0
};
let eA = {
  name: "",
  currentVersionReleaseNotes: "",
  newVersionReleaseNotes: "",
  description: "",
  tagline: "",
  creatorPolicy: "",
  categoryId: "",
  iconSrc: "",
  coverImageSrc: "",
  widgetSnapshotImageSrc: "",
  widgetSnapshotImageError: null,
  supportContact: "",
  iconImageError: null,
  coverImageError: null,
  author: {
    user_id: ""
  },
  twoFactorAuthDisabledError: null,
  emailNotVerifiedError: null,
  accountDetailsChangedError: null,
  freemiumRequiredForMigrating: null,
  commentsSetting: Ni.ENABLED,
  creators: [],
  publishers: {
    inputValue: "",
    tokens: [],
    errorMessage: ""
  },
  blockPublishingOnToS: !1,
  playgroundFigFile: null,
  playgroundFilePublishType: _$$J.Actions.NOOP
};
export function $$ex3(e) {
  if (!e || !e.versions) return null;
  let t = e.current_plugin_version_id;
  return t && e.versions[t] || null;
}
export function $$eN75(e) {
  let t = $$ex3(e);
  return t;
}
export function $$eC31(e, t) {
  if (ZY(t)) return _$$Qx(t);
  let r = e[t] ?? {};
  for (let e in r) return r[e].current_plugin_version_id;
}
let ew = e => e?.containsWidget ? ev : eS;
export function $$eO6(e, t, r, n) {
  if (r?.manifest?.id) {
    if (e && e[r?.manifest?.id]) return e[r?.manifest?.id];
    if (t && t[r?.manifest?.id]) return t[r?.manifest?.id];
  }
  if (n) {
    if (e && e[n]) return e[n];
    if (t && t[n]) return t[n];
  }
  return ew(r?.manifest);
}
export function $$eR40(e, t, r) {
  if (r?.manifest?.id) {
    if (e && e[r?.manifest?.id]) return e[r?.manifest?.id];
    if (t && t[r?.manifest?.id]) return t[r?.manifest?.id];
  }
  return null;
}
export function $$eL62(e, t) {
  return Hc(e, t, eS);
}
export function $$eP32(e, t) {
  return Hc(e, t, ev);
}
export function $$eD18(e, t) {
  let r = {};
  Object.keys(e).forEach(n => {
    (function (e, t) {
      let r = e.roles.org && e.roles.org.id === t.id;
      let n = e.roles.is_public && e.publisher.id === t.community_profile_id;
      return !!(r || n);
    })(e[n], t) && (r[n] = e[n]);
  });
  return r;
}
export function $$ek30(e, t) {
  let r = {};
  Object.keys(e).forEach(n => {
    let i = e[n];
    i.roles.org && i.roles.org.id === t && (r[i.id] = i);
  });
  return r;
}
export function $$eM52(e, t) {
  let r = {};
  Object.keys(e).forEach(n => {
    let i = e[n];
    $$es9(t, $$eN75(i).manifest.editorType) && (r[i.id] = i);
  });
  return r;
}
export function $$eF33(e) {
  return !!e?.roles?.org;
}
export function $$ej56(e, t, r = !0) {
  let n = {};
  Object.keys(e).forEach(i => {
    let a = e[i];
    let s = r ? jY : Ro;
    (Dd(a, t) || s(a, t)) && (n[i] = e[i]);
  });
  return n;
}
export function $$eU29(e) {
  return sortByCreatedAt(Object.keys(e).map(t => $$eN75(e[t]))).map(t => e[t.plugin_id]);
}
export function $$eB10(e, t) {
  let r = e.roles;
  let n = !t.is_public && AC(e);
  return !!r.is_public != !!t.is_public || r.org?.id !== t.org?.id || n;
}
export function $$eG49(e) {
  if (!e) throw Error("Code string cannot be empty");
  let t = YH(e).length;
  if (t > yO) throw Error(`plugin code exceeds max size of ${Math.floor(yO / 1e6)}MB`);
  return t;
}
export function $$eV78(e) {
  return Wl(e, getI18nString("community.publishing.extension_icon_image"));
}
export async function $$eH77(e, t, r) {
  $$eV78(e);
  return await eK(e, {
    width: DK,
    height: DK
  }, t, getI18nString("community.publishing.error_icon_image_dimensions"), r);
}
export function $$ez66(e) {
  return Wl(e, "Artwork image");
}
export function $$eW63(e) {
  let t = e?.[0];
  if (!t) throw Error(getI18nString("community.publishing.error_file_not_found"));
  return t;
}
async function eK(e, t, r, n, i) {
  let {
    width,
    height
  } = t;
  let o = URL.createObjectURL(e);
  let l = await l8(o);
  try {
    if (!i && !function (e, t, r) {
      let {
        width,
        height
      } = t;
      return e.width === width && e.height === height || r && e.width % width == 0 && e.height % height == 0 && e.width / width == e.height / height;
    }(l, t, r)) throw Error(n);
    if (l.width === width && l.height === height) return e;
    let o = await new Promise((e, t) => {
      let r = document.createElement("canvas");
      try {
        r.width = width;
        r.height = height;
        r.getContext("2d").drawImage(l, 0, 0, width, height);
        r.toBlob(r => r ? e(r) : t(Error("Failed to resize image")));
      } catch (e) {
        t(e);
      } finally {
        r.remove();
      }
    });
    return new File([o], e.name, {
      type: o.type
    });
  } finally {
    URL.revokeObjectURL(o);
    l.remove();
  }
}
export async function $$eY68(e) {
  let t = (await XHR.post(`/api/${_$$n(e)}`)).data.meta;
  if (!t.id) throw Error("cannot generate plugin ID");
  return t;
}
export function $$e$74(e, t, r) {
  return e?.roles.org ?? (t && r ? {
    id: t.id,
    name: t.name,
    img_url: t.img_url
  } : null);
}
export function $$eX72(e, t) {
  return t === Lu.ORG ? e ? {
    org: e
  } : (_$$k2.error("publishing a private plugin without a valid org entity."), null) : {
    is_public: !0
  };
}
export function $$eq16(e) {
  return e.name === eA.name && e.newVersionReleaseNotes === eA.newVersionReleaseNotes && e.supportContact === eA.supportContact && e.description === eA.description && e.iconSrc === eA.iconSrc && e.coverImageSrc === eA.coverImageSrc && null == e.iconBlob && null == e.coverImageBlob;
}
export function $$eJ59(e, t, r, n, i) {
  let a;
  let s = void 0 !== t ? e.localPlugins[t] : void 0;
  let o = s && s.manifest;
  let l = $$eO6(e.publishedPlugins, e.publishedWidgets, s, r);
  let d = $$eN75(l);
  let c = o?.permissions?.includes("payments");
  try {
    a = En(l, e);
  } catch (e) {
    throw Error("Unable to get Plugin Data. You might be trying to act on a personal plugin in an Org space.");
  }
  let {
    accepted,
    pending
  } = l.community_publishers;
  let _ = {
    ...Rs(),
    tokens: (l.community_publishers ? [...accepted.map(e => ({
      ...e,
      isPending: !1
    })), ...(pending?.map(e => ({
      ...e,
      isPending: !0
    })) || [])] : []).reduce((t, r) => Ii(e.authedProfilesById[r.id], a) ? t : t.concat([{
      state: _$$d.OK,
      content: r
    }]), [])
  };
  return {
    name: d.name || o && o.name || eA.name,
    currentVersionReleaseNotes: d.release_notes || eA.newVersionReleaseNotes,
    newVersionReleaseNotes: eA.newVersionReleaseNotes,
    tags: l.tags,
    tagsV2: l.tags_v2 && Object.keys(l.tags_v2),
    supportContact: l.support_contact || e.user?.email || eA.supportContact,
    description: d.description || eA.description,
    tagline: d.tagline || eA.tagline,
    creatorPolicy: d.creator_policy ?? eA.creatorPolicy,
    iconSrc: d.redirect_icon_url || eA.iconSrc,
    widgetSnapshotImageSrc: n || d.redirect_snapshot_url || eA.widgetSnapshotImageSrc,
    widgetSnapshotImageBlob: i || eA.widgetSnapshotImageBlob,
    coverImageSrc: d.redirect_cover_image_url || eA.coverImageSrc,
    iconImageError: eA.iconImageError,
    coverImageError: eA.coverImageError,
    widgetSnapshotImageError: eA.widgetSnapshotImageError,
    twoFactorAuthDisabledError: eA.twoFactorAuthDisabledError,
    emailNotVerifiedError: eA.emailNotVerifiedError,
    accountDetailsChangedError: eA.accountDetailsChangedError,
    freemiumRequiredForMigrating: eA.freemiumRequiredForMigrating,
    author: a,
    publishers: _,
    creators: accepted.map(e => ({
      ...e,
      isPending: !1
    })).concat((pending ?? []).map(e => ({
      ...e,
      isPending: !0
    }))).filter(t => !Ii(e.authedProfilesById[t.id], a) && t.entity_type === o1.USER),
    commentsSetting: l.comments_setting || eA.commentsSetting,
    categoryId: l.category_id || eA.categoryId,
    blockPublishingOnToS: xw(e),
    playgroundFigFile: d.playground_fig_file,
    playgroundFilePublishType: _$$J.Actions.NOOP,
    isPaid: !!l.monetized_resource_metadata || c,
    price: vf(l.monetized_resource_metadata),
    isSubscription: l.monetized_resource_metadata?.is_subscription,
    hasPaymentsApi: c,
    annualDiscount: l.monetized_resource_metadata?.annual_discount_percentage,
    isAnnualDiscountActive: !!l.monetized_resource_metadata?.annual_discount_active_at,
    carouselMedia: N6(l)
  };
}
export function $$eZ64(e) {
  return !!$$eN75(e).id && !e.unpublished_at;
}
export function $$eQ55(e) {
  if (!e) return {};
  let t = {};
  e.forEach(e => {
    $$eZ64(e) && (t[e.id] = e);
  });
  return t;
}
export function $$e035(e, t, r, n) {
  let i = {};
  (e.email_validated_at || (i.emailNotVerifiedError = getI18nString("community.publishing.please_verify_your_email_address_to_publish")), n || (e.saml_sso_only || e.google_sso_only || e.two_factor_app_enabled || e.phone_number) && (t.code !== aP.FAILURE || t.error !== getI18nString("community.publishing.you_must_enable_two_factor_authentication_to_publish"))) ? !n && (e.plugin_publishing_blocked_at || e.community_blocked_at || t.code === aP.FAILURE && t.error === getI18nString("community.publishing.you_must_verify_your_account_details_to_publish")) ? i.accountDetailsChangedError = getI18nString("community.publishing.we_detected_a_change_to_your_account_details_please_contact_support_figma_com_to_publish_this_plugin") : t.code === aP.FAILURE && t.error && (i.other = t.error) : i.twoFactorAuthDisabledError = r ? getI18nString("community.publishing.please_enable_two_factor_authentication_to_publish_this_widget") : getI18nString("community.publishing.please_enable_two_factor_authentication_to_publish_this_plugin");
  return i;
}
export function $$e147(e, t, r, n) {
  if (!e) return {};
  let i = {};
  0 === _$$Yp(e.name).length && (i.name = getI18nString("community.publishing.name_must_not_be_empty"));
  0 === _$$Yp(e.tagline).length && (i.tagline = getI18nString("community.publishing.add_a_tagline"));
  _$$ZB(e.description) && (i.description = getI18nString("community.publishing.add_a_description"));
  let a = _$$Yp(e.supportContact);
  if (0 === a.length ? i.supportContact = getI18nString("community.publishing.support_contact_must_not_be_empty") : xf(a) || gU(a) || (i.supportContact = getI18nString("community.publishing.support_contact_must_be_a_valid_email_or_url")), 0 === _$$Yp(e.iconSrc).length && (i.iconImageError = getI18nString("community.publishing.icon_cant_be_empty")), i.carouselMedia = vC(e.carouselMedia), e.categoryId || (i.categoryId = getI18nString("community.publishing.category_cant_be_empty")), void 0 === e.price || t.permissions?.includes("payments") || n?.third_party_m10n_status !== PN.FLAGGED || (i.freemiumRequiredForMigrating = getI18nString("community.seller.freemium_required_for_migration")), e.playgroundFigFile && t.editorType?.length === 1) {
    let n = t.editorType[0];
    let a = e.playgroundFigFile.editor_type;
    if (n === FW.FIGMA && "design" !== a || n === FW.FIGJAM && "whiteboard" !== a) {
      let e = n === FW.FIGMA ? getI18nString("community.publishing.playground_file.figma") : getI18nString("community.publishing.playground_file.figjam");
      i.playgroundFigFile = r ? getI18nString("community.publishing.widget_playground_file_editor_type_error", {
        editorType: e
      }) : getI18nString("community.publishing.plugin_playground_file_editor_type_error", {
        editorType: e
      });
    }
  }
  r && 0 === _$$Yp(e.widgetSnapshotImageSrc).length && (i.widgetSnapshotImageError = getI18nString("community.publishing.snapshot_must_not_be_empty"));
  let s = function (e, t) {
    if (!e.isPaid || e.hasPaymentsApi) return null;
    if (!e.price) return getI18nString("community.publishing.price_is_required_for_paid_resources");
    if (Yp(e.price)) return e.price < mZ ? getI18nString("community.seller.paid_resource_minimum_err") : getI18nString("community.seller.paid_resource_maximum_err");
    if (F8(e.price)) return getI18nString("community.seller.prices_must_follow_format");
    if (!t || AC(t)) return null;
    let r = t?.monetized_resource_metadata?.price;
    return e.isSubscription && r && Mj(r / 100, e.price) ? getI18nString("community.seller.price_increase_limit") : !t?.monetized_resource_metadata?.can_increase_price && r && WD(r / 100, e.price) ? getI18nString("community.seller.price_can_only_be_increased_once_every_thirty_days") : null;
  }(e, n);
  s && (i.price = s);
  let o = e.isPaid && e.annualDiscount && e.isAnnualDiscountActive ? Number.isInteger(e.annualDiscount) ? null : getI18nString("community.seller.discount_must_follow_format") : null;
  o && (i.annualDiscount = o);
  return i;
}
export function $$e20(e) {
  if (!e) return {};
  let t = {};
  let r = _$$Yp(e.name).length;
  r < 4 ? t.name = getI18nString("community.publishing.name_must_be_4_characters_long") : r > 100 && (t.name = getI18nString("community.publishing.name_must_be_at_most_100_characters_long"));
  _$$Yp(e.description).length > 1e4 && (t.description = getI18nString("community.publishing.description_must_be_at_most_10000_characters_long"));
  _$$Yp(e.newVersionReleaseNotes).length > 1e4 && (t.newVersionReleaseNotes = getI18nString("community.publishing.release_notes_must_be_at_most_10000_characters_long"));
  _$$Yp(e.creatorPolicy).length > 1e4 && (t.creatorPolicy = getI18nString("community.publishing.creator_policy_must_be_at_most_10000_characters_long"));
  let n = _$$Lg(e.tagline);
  n && (t.tagline = n);
  _$$Yp(e.supportContact).length > 100 && (t.supportContact = getI18nString("community.publishing.support_contact_must_be_at_most_100_characters_long"));
  e.iconImageError && (t.iconImageError = e.iconImageError);
  e.coverImageError && (t.coverImageError = e.coverImageError);
  return t;
}
export function $$e522(e) {
  return k0(e.plugin);
}
export function $$e313(e) {
  let t;
  let {
    localPlugins,
    publishedCanvasWidgetVersions,
    publishedWidgets
  } = debugState.getState();
  let a = !e.widgetVersionId;
  let o = e.widgetId;
  if (o) {
    if (a) {
      let e = Object.values(localPlugins).filter(e => e.plugin_id === o);
      e.length > 1 && $$ti54(getI18nString("community.publishing.found_multiple_local_widgets_with_the_same_manifest_id"));
      1 === e.length && (t = e[0]);
    } else {
      if (!(t = publishedCanvasWidgetVersions[o]?.[e.widgetVersionId] || publishedWidgets[o] && $$eN75(publishedWidgets[o]))) return;
      t.id === e.widgetVersionId || isInteractionPathCheck() || Lg() || reportError(_$$e.UNOWNED, Error(`plugin versionId=${t?.id} doesn't match node.widgetVersionId=${e.widgetVersionId}`));
    }
    return t;
  }
}
export function $$e414(e) {
  let t = e.canRunPluginState ? e.canRunPluginState : debugState.getState();
  if (!Eh(t)) return {
    canRun: !1,
    message: "Cannot run plugin because canViewPlugins returned false"
  };
  if (!$$e84(t, e.plugin)) return {
    canRun: !1,
    message: "Cannot run plugin within org"
  };
  let {
    plugin,
    editorType
  } = e;
  if (ZQ(plugin)) return k0(plugin) ? {
    canRun: !1,
    message: "Cannot run local widget"
  } : {
    canRun: !0
  };
  if (editorType) {
    if (!$$es9(Z[editorType], plugin.manifest.editorType)) return {
      canRun: !1,
      message: "Cannot run plugin with invalid editor type"
    };
    if (editorType === FEditorType.DevHandoff && !$$to20(plugin)) return {
      canRun: !1,
      message: "Cannot run non-devmode plugin in dev mode"
    };
    if (editorType === FEditorType.Slides && !tm(plugin)) return {
      canRun: !1,
      message: "Cannot run non-slides plugin in slides mode"
    };
  }
  return {
    canRun: !0
  };
}
export function $$e84(e, t) {
  if (!e.currentUserOrgId) return !0;
  let r = e.orgById[e.currentUserOrgId];
  if (!r || ZQ(t) || bH(t)) return !0;
  if (!r.public_plugins_allowed) return !1;
  let n = k0(t);
  return (n ? !r.widgets_whitelist_enforced : !r.plugins_whitelist_enforced) || !!(n ? e.whitelistedWidgets : e.whitelistedPlugins)[t.plugin_id];
}
export function $$e667({
  canAssociatedUserPurchaseThisResource: e,
  resource: t
}) {
  return f5(t) && t.current_user_has_run && !t.community_resource_payment && e;
}
export function $$e717(e) {
  return e.roles.is_public ? {
    role: "public"
  } : e.roles.org ? {
    role: "org",
    roleOrgId: e.roles.org.id
  } : {
    role: "private"
  };
}
export function $$e980(e) {
  let t = e.match(/\/community\/widget\/(\d+)(\/.*)?$/);
  return t && t[1] ? t[1] : null;
}
export function $$te48(e) {
  let t = e.match(/\/community\/plugin\/(\d+)(\/.*)?$/);
  return t && t[1] ? t[1] : null;
}
function tt(e, t, r) {
  if (!e.manifest.relaunchButtons) return [];
  let n = [];
  for (let i of e.manifest.relaunchButtons) {
    if (r > 1 && !i.multipleSelection) continue;
    let a = function (e, t, r) {
      let n = null;
      for (let i of r) {
        let r = !1;
        for (let {
          pluginID,
          command,
          message
        } of i) if (pluginID === e && command === t.command) {
          r = !0;
          n ? message !== n.description && (n.description = Q7) : n = {
            pluginID: e,
            command: t.command,
            name: t.name,
            description: message || ""
          };
          break;
        }
        if (!r) return null;
      }
      return n;
    }(e.plugin_id, i, t);
    a && n.push(a);
  }
  return n;
}
export function $$tr23(e, t) {
  return t?.localFileId || e?.id || "";
}
export function $$tn76(e, t, r, n, i, a, s) {
  let o = [];
  let l = C8(e);
  for (let e of function (e) {
    if (0 === e.length) return [];
    let t = new Set();
    for (let {
      pluginID
    } of e[0]) t.add(pluginID || "");
    return Array.from(t).reverse();
  }(l)) if (function (e, t) {
    let r = [];
    for (let n in e) e[n].plugin_id === t && r.push(e[n]);
    return r;
  }(r, e).filter(e => $$es9(s, e.manifest.editorType)).forEach((t, r) => {
    for (let n of tt(t, l, i)) o.push({
      type: "local",
      pluginTypeAndID: `local-${e}-${r + 1}`,
      plugin: t,
      relaunchButton: n
    });
  }), e in t) {
    let r = t[e];
    let d = $$eN75(r);
    if (!$$es9(s, d.manifest.editorType)) continue;
    let c = tt(d, l, i);
    if (!n || r.roles.org && r.roles.org.id === n.id || r.install_status !== u8.PUBLIC_PLUGINS_DISALLOWED && r.install_status !== u8.PLUGIN_NOT_ORG_APPROVED) for (let t of c) o.push({
      type: "published",
      pluginTypeAndID: `installed-${e}`,
      plugin: d,
      publishedPlugin: r,
      relaunchButton: t
    });
    a(e, !1);
  } else a(e, !0);
  return o;
}
export function $$ti54(e) {
  pN({
    shouldShowVisualBell: !0
  });
  let t = _$$M();
  Y5.dispatch(_$$F.enqueue({
    type: "plugins-runtime-error",
    message: e,
    button: t ? {
      text: "Show/Hide console",
      action: () => {
        t.toggleDevTools("bottom");
      }
    } : void 0,
    error: !0
  }));
}
export function $$ta44() {
  Y5.dispatch(_$$F.dequeue({
    matchType: "plugins-runtime-error"
  }));
}
export function $$ts50(e, t) {
  return e.plugin_id === t?.plugin_id && e?.id === t?.id;
}
export function $$to20(e, t) {
  return !!(!_$$T() || e.manifest.capabilities?.includes("vscode") || t?.allowNonVsCodePluginsInVsCode) && Pe(e.manifest.editorType) && !k0(e);
}
export function $$tl41(e) {
  return $$to20(e) && $$tC1(e.manifest.capabilities);
}
export function $$td69(e) {
  return $$to20(e) && e.manifest?.capabilities?.includes("codegen");
}
export function $$tc34(e) {
  return e.manifest?.capabilities?.includes("textreview");
}
export function $$tu25(e, t, r) {
  return Object.fromEntries(Object.entries(t).filter(([t, n]) => th(e, n, r)));
}
export function $$tp2(e, t) {
  return t.filter(t => th(e, t));
}
export function $$t_79(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([t, r]) => th(e, $$eN75(r))));
}
function th(e, t, r) {
  if (!e) return !0;
  switch (e) {
    case FEditorType.Whiteboard:
    case FEditorType.Design:
    case FEditorType.Illustration:
      return $$es9(Z[e], t.manifest.editorType);
    case FEditorType.DevHandoff:
      return $$to20(t, r);
    case FEditorType.Slides:
      return tm(t);
    case FEditorType.Cooper:
      return $$tg58(t);
    case FEditorType.Figmake:
    case FEditorType.Sites:
      return !1;
    default:
      throwTypeError(e);
  }
}
function tm(e) {
  return $$es9(FW.SLIDES, e.manifest.editorType) && !k0(e);
}
export function $$tg58(e) {
  return $$es9(FW.BUZZ, e.manifest.editorType);
}
export function $$tf43(e) {
  if (!tN(e)) return !1;
  let t = debugState.getState().selectedView;
  return _$$$A(t);
}
export function $$tE11(e) {
  return !!tN(e) && $$ty38(debugState.getState().selectedView);
}
export function $$ty38(e) {
  return XE(e) === FEditorType.Cooper;
}
export function $$tb45(e) {
  return e?.manifest.editorType?.length === 1 && Pe(e.manifest.editorType);
}
function tT(e) {
  let t = function (e) {
    let t = ["vscode"];
    return e.filter(e => !t.includes(e));
  }(e.manifest.capabilities ?? []);
  return 1 === t.length && "codegen" === t[0];
}
export function $$tI51(e) {
  return $$tb45(e) && tT(e);
}
export function $$tS19(e) {
  return Pe(e.manifest.editorType) && tT(e);
}
export function $$tv61(e) {
  let t = debugState.getState().selectedView;
  return _$$$A(t) && $$tS19(e);
}
export function $$tA39(e, t, r) {
  let n = debugState.getState().selectedView;
  let i = t?.plugins_whitelist_enforced;
  let a = i && r && !!r[e.plugin_id] || !i;
  return _$$$A(n) && !$$tI51(e) && a;
}
export function $$tx7({
  idToSearch: e,
  localExtensionsByFileId: t,
  publishedExtensions: r
}) {
  let n = t && t[e];
  if (n) return n;
  let i = r?.[e];
  return i ? $$ex3(i) : null;
}
function tN(e) {
  return "related-link-preview" !== e && "codegen" !== e;
}
export function $$tC1(e) {
  return !!(e?.includes("inspect") || e?.includes("panel"));
}
export function $$tw42(e) {
  let t = $$ea37();
  let r = e && e?.plugin && $$tI51(e?.plugin);
  return e && t && $$es9(t, e.plugin.manifest.editorType) && ("dev" !== t || $$to20(e.plugin)) && ("slides" !== t || tm(e.plugin)) && !r;
}
export function $$tO46() {
  return _$$T() ? "plugins-menu-open-directory-vscode" : BrowserInfo.mac ? "plugins-menu-open-directory-mac" : "plugins-menu-open-directory-win";
}
export const $H = $$e20;
export const $u = $$tC1;
export const AG = $$tp2;
export const Ar = $$ex3;
export const Bw = $$e84;
export const CA = $$eu5;
export const CB = $$eO6;
export const DM = $$tx7;
export const Df = $$et8;
export const EK = $$es9;
export const EY = $$eB10;
export const FB = $$tE11;
export const GX = $$Q12;
export const Gc = $$e313;
export const JT = $$e414;
export const K$ = $$ei15;
export const L1 = $$eq16;
export const L8 = $$e717;
export const LH = $$eD18;
export const LW = $$tS19;
export const M5 = $$to20;
export const MB = $$eE21;
export const MH = $$e522;
export const Mi = $$tr23;
export const Ms = $$eh24;
export const NW = $$tu25;
export const Oe = $$ey26;
export const Pl = $$el27;
export const Pz = $$er28;
export const Q4 = $$eU29;
export const Qt = $$ek30;
export const Qx = $$eC31;
export const Rd = $$eP32;
export const Rt = $$eF33;
export const Ru = $$tc34;
export const SW = $$e035;
export const Sb = $$en36;
export const T = $$ea37;
export const TZ = $$ty38;
export const Th = $$tA39;
export const Tk = $$eR40;
export const UH = $$tl41;
export const VQ = $$tw42;
export const W4 = $$tf43;
export const WC = $$ta44;
export const YG = $$tb45;
export const YQ = $$tO46;
export const ZB = $$e147;
export const ZI = $$te48;
export const ZT = $$eG49;
export const _H = $$ts50;
export const _V = $$tI51;
export const _w = $$eM52;
export const c2 = $$q53;
export const fR = $$ti54;
export const i8 = $$eQ55;
export const ky = $$ej56;
export const lT = $$eI57;
export const ld = $$tg58;
export const mI = $$eJ59;
export const mm = $$em60;
export const mx = $$tv61;
export const my = $$eL62;
export const nW = $$eW63;
export const nf = $$eZ64;
export const nx = $$ef65;
export const oD = $$ez66;
export const og = $$e667;
export const ou = $$eY68;
export const pk = $$td69;
export const qH = $$ep70;
export const t3 = $$eg71;
export const tH = $$eX72;
export const tk = $$e_73;
export const u0 = $$e$74;
export const uF = $$eN75;
export const vA = $$tn76;
export const vj = $$eH77;
export const wf = $$eV78;
export const xC = $$t_79;
export const yx = $$e980;