import { kiwiParserCodec } from "../905/294864";
import { FontSourceType, Fonts } from "../figma_app/763686";
import { getFontIndexUrl, FONT_SF_PRO_DISPLAY, FONT_SF_PRO_ROUNDED, FONT_SF_COMPACT, FONT_SF_COMPACT_ROUNDED, FONT_SF_PRO, getFontFileUrl } from "../905/946258";
import { getFeatureFlags } from "../905/601108";
import { localStorageRef } from "../905/657224";
import { trackEventAnalytics } from "../905/449184";
import { logger } from "../905/651849";
import { xQ } from "../905/535224";
import { desktopAPIInstance } from "../figma_app/876459";
import { hasNonDefaultOpticalSize, createFontMetadata } from "../905/165290";
import { debugState } from "../905/407919";
import { BrowserInfo } from "../figma_app/778880";
import { logWarning, logError } from "../905/714362";
import { XHR, getRequest } from "../905/910117";
import { getI18nString } from "../905/303541";
import { isFullscreenOverview } from "../figma_app/88239";
import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { isFullscreenDevHandoffView } from "../905/782918";
import { D as _$$D } from "../905/347702";
let n;
let v = XHR.requiredHeaders;
let I = new class {
  constructor() {
    this.FontsSchemaValidator = createNoOpValidator();
    this.FileSchemaValidator = createNoOpValidator();
  }
  getFonts(e) {
    return this.FontsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/fonts", APIParameterUtils.toAPIParameters(e || {})));
  }
  getFile(e) {
    let {
      fileKey,
      fileHasParentOrg,
      ...n
    } = e;
    return fileHasParentOrg ? this.FileSchemaValidator.validate(async ({
      xr: r
    }) => {
      let a = await r.get(`/api/fonts/file/${e.fileKey}`, APIParameterUtils.toAPIParameters(n), {
        headers: {
          ...v,
          Accept: "text/plain"
        }
      });
      a.status >= 200 && a.status < 500 && 400 === a.status === fileHasParentOrg && logWarning("api_font", "client-side and server-side parent org check mismatch", {
        fileKey,
        fileHasParentOrg,
        status: a.status
      }, {
        reportAsSentryError: !0
      });
      return a;
    }) : Promise.reject();
  }
}();
let S = !1;
let w = !1;
let C = null;
let T = e => e && 4 === e.schemaVersion && void 0 !== e.renames && void 0 !== e.emojis;
let k = "agent-detected";
export function $$R10() {
  return localStorageRef?.getItem(k) === "true";
}
let N = _$$D(() => {
  let e = performance.now();
  let t = getFontIndexUrl({
    format: "kiwi",
    shouldUseLocalFontIndex: !!getFeatureFlags().font_index_use_local,
    shouldUse250317Index: !!getFeatureFlags().font_index_250317
  });
  return XHR.crossOriginGetAny(t, null, {
    headers: {
      "Content-Type": "application/octet-stream"
    },
    responseType: "arraybuffer"
  }).then(({
    response: t
  }) => {
    let i = performance.now();
    let n = new Uint8Array(t);
    let l = kiwiParserCodec.decodeFontIndex(n);
    let d = performance.now();
    return T(l) ? (l.files = function (e) {
      if (!e || getFeatureFlags().dse_sf_pro_font || !getFeatureFlags().font_index_250317) return e;
      let t = new Set([FONT_SF_PRO_DISPLAY, FONT_SF_PRO_ROUNDED, FONT_SF_COMPACT, FONT_SF_COMPACT_ROUNDED]);
      return e.filter(e => !e.family || !t.has(e.family));
    }(l.files), {
      list: (l.files || []).map(e => {
        let t = e.variationAxes ? e.styles.map(e => ({
          name: e.name,
          postscriptName: e.postscript,
          axes: Object.fromEntries(e.variationAxisValues.map(({
            tag: e,
            value: t
          }) => [e, t]))
        })) : void 0;
        return (e.styles || []).map(i => {
          let n = i.variationAxisValues && Object.fromEntries(i.variationAxisValues.map(e => [e.tag, e.value]));
          return {
            source: FontSourceType.GOOGLE,
            id: `${e.filename}_${e.version}`,
            family: e.family,
            style: i.name,
            postscript: i.postscript,
            weight: i.weight,
            italic: i.italic,
            stretch: i.stretch,
            variationAxes: e.variationAxes?.map(e => ({
              tag: e.tag,
              name: e.name,
              min: e.min,
              max: e.max,
              default: e.defaultValue,
              value: n?.[e.tag]
            })),
            variationInstances: t,
            useFontOpticalSize: e.useFontOpticalSize
          };
        });
      }).reduce((e, t) => e.concat(t), []),
      renames: {
        family: Object.fromEntries((l?.renames?.family || []).map(e => [e.oldFamily, e.newFamily])),
        style: Object.fromEntries((l?.renames?.style || []).map(e => [e.familyName, Object.fromEntries(e.styleRenames.map(e => [e.oldStyle, e.newStyle]))]))
      },
      emojis: {
        revision: l?.emojis?.revision || 0,
        sizes: l?.emojis?.sizes || [],
        sequences: (l?.emojis?.sequences || []).map(e => e.codepoints)
      },
      binary: n,
      timing: {
        indexFonts: {
          xhr: i - e,
          kiwiDecode: d - i,
          preprocess: performance.now() - d
        }
      }
    }) : null;
  }).catch(e => (logError("fetchGoogleFonts", "failed to get kiwi index", {
    err: e
  }), null));
});
async function P() {
  let e;
  let t;
  if (!desktopAPIInstance) throw Error();
  let i = await desktopAPIInstance.getFonts(!getFeatureFlags().desktop_fonts_via_utility_process);
  if (getFeatureFlags().desktop_font_reload_on_focus) try {
    e = await desktopAPIInstance.getModifiedFonts();
    t = await desktopAPIInstance.getFontsModifiedAt();
  } catch (e) {}
  return {
    fontFiles: i,
    source: "desktop",
    version: desktopAPIInstance.getInformationalVersion(),
    modified_at: t,
    modified_fonts: e
  };
}
export function $$O11(e) {
  for (let t of e) if ("Artifakt Element" === t.family && "Thin" === t.style ? t.weight = 100 : "Artifakt Element" === t.family && "Extra Light" === t.style && (t.weight = 200), "Avenir" === t.family && t.source === FontSourceType.LOCAL) switch (t.style) {
    case "Book":
    case "Book Oblique":
      t.weight = 350;
      break;
    case "Heavy":
    case "Heavy Oblique":
      t.weight = 800;
      break;
    case "Black":
    case "Black Oblique":
      t.weight = 900;
  }
  for (let t of e) !t.italic && function (e) {
    let t = e.toLowerCase();
    for (let e of ["italic", "oblique"]) if (t.includes(e)) return !0;
    return !1;
  }(t.style) && (t.italic = !0);
  return e;
}
export async function $$D5(e = [FontSourceType.LOCAL, FontSourceType.GOOGLE]) {
  let t = {
    localizedToUnlocalized: [],
    sources: [],
    renames: {
      family: {},
      style: {}
    },
    timing: {}
  };
  let i = e.map(e => {
    switch (e) {
      case FontSourceType.LOCAL:
        return function () {
          let e;
          let t = e => (C = `${e.origin}/figma`, console.log("[Local fonts] using agent"), {
            source: "daemon",
            ...e.data
          });
          e = desktopAPIInstance ? getFeatureFlags().desktop_use_agent ? xQ(20).then(t).catch(() => (trackEventAnalytics("Desktop Use Agent Failed"), P())) : P() : xQ(20).then(t);
          let i = Date.now();
          return e.then(e => {
            if (!e) return null;
            if (!w) {
              w = !0;
              let t = e.source;
              let n = `${e.version || "unknown"}`;
              let r = BrowserInfo.osname;
              trackEventAnalytics("Local Fonts Fetched", {
                source: t,
                version: n,
                os: r,
                freetype: !0,
                durationMs: Date.now() - i,
                numFonts: Object.keys(e.fontFiles).length
              });
            }
            let t = [];
            let n = [];
            let r = e.version && !isNaN(parseInt(e.version)) ? parseInt(e.version) : null;
            null !== r && localStorageRef?.setItem(k, "true");
            let s = e.modified_at && "number" == typeof e.modified_at ? e.modified_at : void 0;
            let c = e?.modified_fonts;
            let u = (r || 0) >= 20;
            Object.keys(e.fontFiles).forEach(i => {
              if (getFeatureFlags().ce_skip_pingfangui_font && i.toLowerCase().includes("pingfangui.ttc") || /\.suit$/.test(i)) return;
              let r = e.fontFiles[i];
              let s = !1;
              for (let e of r) if (e.variationAxes && hasNonDefaultOpticalSize(e.variationAxes)) {
                s = !0;
                break;
              }
              for (let e = 0; e < r.length; ++e) {
                let l = r[e];
                if (getFeatureFlags().font_skip_inter && "Inter" === l.family || "GB18030 Bitmap" === l.family || "Apple Color Emoji" === l.family || "Roboto" === l.family) continue;
                if (BrowserInfo.mac && "localized" in l && l.localized && e + 1 < r.length) {
                  let i = r[e + 1];
                  l.postscript === i.postscript && (t.push({
                    unlocalized: {
                      family: i.family,
                      style: i.style
                    },
                    localized: {
                      family: l.family,
                      style: l.style
                    }
                  }), l = i, ++e);
                } else l.localizedFamily && l.localizedStyle && t.push({
                  unlocalized: {
                    family: l.family,
                    style: l.style
                  },
                  localized: {
                    family: l.localizedFamily,
                    style: l.localizedStyle
                  }
                });
                let d = {
                  family: l.family,
                  style: l.style,
                  weight: l.weight,
                  stretch: l.stretch,
                  italic: l.italic,
                  postscript: l.postscript,
                  id: i,
                  source: FontSourceType.LOCAL,
                  useFontOpticalSize: !1,
                  modifiedAt: l.modified_at,
                  userInstalled: l.user_installed
                };
                u && l.variationAxes && (d.variationAxes = l.variationAxes, d.useFontOpticalSize = s);
                n.push(d);
              }
            });
            return {
              list: n,
              localizedToUnlocalized: t,
              sources: [FontSourceType.LOCAL],
              localFontAgentVersion: r,
              localFontsModifiedAt: s,
              localModifiedFonts: c
            };
          }).catch(e => null);
        }().then(e => {
          null !== e && (t.localizedToUnlocalized = e.localizedToUnlocalized, e.localFontAgentVersion && (t.localFontAgentVersion = e.localFontAgentVersion), e.list && (t.localFontsList = $$O11(e.list)), t.sources.push(FontSourceType.LOCAL), t.localModifiedFonts = e.localModifiedFonts, t.localFontsModifiedAt = e.localFontsModifiedAt, t.timing = {
            ...t.timing,
            ...e.timing
          });
        }).catch(e => {
          console.error("Error fetching local fonts", e);
        }).then(() => {});
      case FontSourceType.GOOGLE:
        return N().then(e => {
          if (null === e) {
            if (!n) return [];
            e = n;
          } else n = e;
          if (t.renames = e.renames, t.emojis = e.emojis, t.indexFontsBinary = e.binary, t.indexFontsList = e.list, getFeatureFlags().dse_sf_pro_font && !getFeatureFlags().font_index_250317) {
            let i = (e.list || []).filter(e => "Inter" === e.family).map(e => {
              let t = "Semi Bold" === e.style ? "Semibold" : e.style;
              return {
                source: FontSourceType.GOOGLE,
                id: FONT_SF_PRO,
                postscript: e.postscript,
                family: FONT_SF_PRO_DISPLAY,
                italic: e.italic,
                stretch: e.stretch,
                style: t,
                useFontOpticalSize: e.useFontOpticalSize,
                weight: e.weight,
                variationAxes: e.variationAxes,
                variationInstances: e.variationInstances
              };
            });
            t.indexFakeFontsList = i;
          }
          t.sources.push(FontSourceType.GOOGLE);
          t.timing = {
            ...t.timing,
            ...e.timing
          };
        }).catch(e => {
          console.error("Error fetching index fonts", e);
        }).then(() => {});
      case FontSourceType.SHARED:
        return $$L6().then(e => {
          null !== e && (t.sharedFontsList = $$O11(e), t.sources.push(FontSourceType.SHARED));
        }).catch(e => {
          console.error("Error fetching shared fonts", e);
        });
      default:
        return $$L6(e.fileKey).then(e => {
          null !== e && (t.sharedFontsList = $$O11(e), t.sources.push(FontSourceType.SHARED));
        }).catch(t => {
          console.error("Error fetching shared fonts for filekey", t, e.fileKey);
        });
    }
  });
  if (await Promise.all(i), e.includes(FontSourceType.GOOGLE) && !t.indexFontsList) throw Error("fetchFontList(): no results");
  return t;
}
export function $$L6(e = null) {
  return I.getFonts({
    fileKey: e || void 0
  }).then(({
    data: e
  }) => e && e.meta ? e.meta.fonts.map(e => createFontMetadata(e)) : null).catch(() => null);
}
let F = new Map();
export async function $$$$M0() {
  let e = [{
    family: "Inter",
    style: "Regular"
  }, {
    family: "Inter",
    style: "Medium"
  }, {
    family: "Merriweather",
    style: "Regular"
  }, {
    family: "Figma Hand",
    style: "Regular"
  }, {
    family: "Roboto Mono",
    style: "Regular"
  }];
  let t = ((await $$D5([FontSourceType.GOOGLE])).indexFontsList || []).filter(t => {
    for (let i of e) if (t.family === i.family && t.style === i.style) return !0;
    return !1;
  }).map(async e => {
    let {
      id,
      source,
      postscript
    } = e;
    if (F.has(id)) return;
    let r = await $$j3({
      id,
      postscriptName: postscript,
      source,
      fileKey: null,
      teamId: null,
      orgId: null
    });
    F.set(id, r);
  });
  await Promise.all(t);
}
export async function $$j3(e) {
  if (!e.id) throw Error("Invalid font id");
  if (e.source === FontSourceType.LOCAL && desktopAPIInstance && !getFeatureFlags().desktop_use_agent) return desktopAPIInstance.getFontFile(e.id, e.postscriptName);
  let t = null;
  let i = !1;
  switch (e.source) {
    case FontSourceType.LOCAL:
      C && (i = !0, t = `${C}/font-file?file=${encodeURIComponent(e.id)}&freetype_minimum_api_version=20`);
      break;
    case FontSourceType.GOOGLE:
      i = !0;
      t = getFontFileUrl(e.id, {
        shouldUseLocalFontIndex: !!getFeatureFlags().font_index_use_local
      });
      break;
    case FontSourceType.SHARED:
      e.fileKey ? t = `/api/fonts/${e.id}/file/${e.fileKey}` : e.teamId ? t = `/api/fonts/${e.id}/team/${e.teamId}` : e.orgId && (t = `/api/fonts/${e.id}/org/${e.orgId}`);
  }
  if (!t) {
    if (desktopAPIInstance && getFeatureFlags().desktop_use_agent) {
      trackEventAnalytics("Desktop Use Agent Failed", {
        font: !0
      });
      return desktopAPIInstance.getFontFile(e.id, e.postscriptName);
    }
    throw Error("Invalid font source");
  }
  if (i) {
    if (F.has(e.id)) return F.get(e.id);
    let {
      data
    } = await XHR.crossOriginGet(t, null, {
      responseType: "arraybuffer",
      headers: {
        Accept: "text/plain"
      }
    });
    return data;
  }
  {
    let {
      data
    } = await getRequest(t, null, {
      responseType: "arraybuffer",
      headers: {
        ...XHR.requiredHeaders,
        Accept: "text/plain"
      }
    });
    return data;
  }
}
export function $$U4(e, t, i, n, r) {
  return I.getFile({
    fileKey: n,
    fileHasParentOrg: r,
    family: e,
    style: t,
    version: i
  }).then(({
    data: e
  }) => {
    if (!e || !e.meta) return Promise.reject();
    let {
      meta
    } = e;
    if (!meta.url || !meta.font_info) return Promise.reject();
    let i = meta.font_info && meta.font_info.variation_instances;
    let n = $$O11(i && i.length > 0 ? i.map(e => createFontMetadata(meta.font_info, e)) ?? [] : [createFontMetadata(meta.font_info)]);
    return 0 === n.length ? Promise.reject() : XHR.crossOriginGet(meta.url, null, {
      responseType: "arraybuffer",
      headers: {
        ...XHR.requiredHeaders,
        Accept: "text/plain"
      }
    }).then(({
      data: e
    }) => (Fonts.hasInFontList({
      list: n,
      localizedToUnlocalized: [],
      renames: {
        family: {},
        style: {}
      }
    }) || Fonts.addToFontList({
      list: n,
      localizedToUnlocalized: [],
      renames: {
        family: {},
        style: {}
      }
    }), e));
  });
}
export function $$B9() {
  return S;
}
export function $$V13() {
  S = !0;
}
export function $$G7(e) {
  return (e?.sources || []).includes(FontSourceType.LOCAL) && (e?.localFontsList?.length || 0) > 0;
}
let $$z2 = {
  list: [],
  localizedToUnlocalized: [],
  renames: {
    family: {},
    style: {}
  },
  emojis: {
    revision: 5,
    sizes: [0],
    sequences: []
  }
};
let H = "desktop_local_fonts_modified_timestamp";
let $$W8 = _$$D(() => {
  let e = localStorageRef?.getItem(H);
  return "string" != typeof e || isNaN(parseInt(e)) ? null : parseInt(e);
});
export function $$K14(e) {
  localStorageRef?.setItem(H, String(e));
}
export function $$Y1(e, t, i) {
  e().then(e => {
    let n = getFeatureFlags().ce_mfm_ingest_on_focus && !S && $$G7(e);
    let r = !1;
    n && (logger.info("Updated fullscreen with local fonts"), t(e), r = !0);
    let a = "number" == typeof e.localFontsModifiedAt && e.localFontsModifiedAt > Date.now() / 1e3 - 604800;
    let s = $$W8();
    let l = "number" == typeof e.localFontsModifiedAt && "number" == typeof s && e.localFontsModifiedAt > s;
    if (a && l) {
      let n = e.localModifiedFonts || {};
      if (0 === Object.keys(n = Object.keys(n).reduce((e, t) => {
        let i = n[t];
        t.startsWith("/System/Library/Fonts/") && getFeatureFlags().ce_ignore_modified_apple_fonts || (e[t] = i);
        return e;
      }, {})).length) {
        logger.info("No non-system modified fonts found");
        return;
      }
      logger.info("showing visual bell for new local fonts", {
        getLocalFontsLastModified: $$W8(),
        desktopLocalFontsModifiedAt: e.localFontsModifiedAt
      });
      "number" == typeof s && "number" == typeof e.localFontsModifiedAt && e.localFontsModifiedAt < s && logError("checkForNewInstalledFonts", "localFontsModifiedAt is less than localFontsLastModifiedAt", {
        localFontsLastModifiedAt: s,
        desktopLocalFontsModifiedAt: e.localFontsModifiedAt
      });
      $$K14(e.localFontsModifiedAt);
      let a = Array.from(Object.values(n ?? {}).reduce((e, t) => (t.map(t => e.add(t?.family)), e), new Set()));
      if (a.length > 0) {
        let n = a.length;
        let s = a[0];
        let l = getI18nString("bindings.new_local_font_visual_bell_single", {
          firstFont: s
        });
        if (2 === n) {
          let e = a[1];
          l = getI18nString("bindings.new_local_font_visual_bell_two", {
            firstFont: s,
            secondFont: e
          });
        } else n > 2 && (l = getI18nString("bindings.new_local_font_visual_bell", {
          numAdditionalFonts: n - 1,
          firstFont: s
        }));
        r || t(e);
        let d = debugState?.getState()?.selectedView;
        isFullscreenDevHandoffView(d) || isFullscreenOverview(d) || !getFeatureFlags().desktop_font_reload_on_focus_ux || i({
          type: "new_local_font",
          message: l
        });
      }
    }
  });
}
export function $$q12(e) {
  let t = {
    ...e.timing
  };
  let i = (e.localFontsList || []).concat(e.sharedFontsList || []);
  if (e.indexFontsBinary) {
    let n = performance.now();
    Fonts.updateFontListBuffer(e.indexFontsBinary);
    let r = performance.now();
    Fonts.updateFontList({
      list: i,
      localizedToUnlocalized: e.localizedToUnlocalized
    });
    t.fullscreen = {
      kiwiBinding: r - n,
      jsonBinding: performance.now() - r
    };
  } else {
    i = i.concat(e.indexFontsList || []);
    let n = performance.now();
    Fonts.updateFontList({
      list: i,
      localizedToUnlocalized: e.localizedToUnlocalized,
      renames: e.renames,
      ...(e.emojis ? {
        emojis: e.emojis
      } : {})
    });
    t.fullscreen = {
      jsonBinding: performance.now() - n
    };
  }
  e.indexFakeFontsList && e.indexFakeFontsList.length > 0 && Fonts.addToFontList({
    list: e.indexFakeFontsList,
    localizedToUnlocalized: []
  });
  return t;
}
export const M = $$$$M0;
export const M9 = $$Y1;
export const eM = $$z2;
export const M1 = $$j3;
export const co = $$U4;
export const yF = $$D5;
export const oN = $$L6;
export const Nz = $$G7;
export const b = $$W8;
export const Kk = $$B9;
export const Rt = $$R10;
export const F8 = $$O11;
export const LQ = $$q12;
export const gg = $$V13;
export const PE = $$K14;