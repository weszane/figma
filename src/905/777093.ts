import { createFontMetadata, hasNonDefaultOpticalSize } from '../905/165290'
import { kiwiParserCodec } from '../905/294864'
import { getI18nString } from '../905/303541'
import { debugState } from '../905/407919'
import { trackEventAnalytics } from '../905/449184'
import { getFontFiles } from '../905/535224'
import { getFeatureFlags } from '../905/601108'
import { logger } from '../905/651849'
import { localStorageRef } from '../905/657224'
import { logError, logWarning } from '../905/714362'
import { isFullscreenDevHandoffView } from '../905/782918'
import { getRequest, sendWithRetry } from '../905/910117'
import { FONT_SF_COMPACT, FONT_SF_COMPACT_ROUNDED, FONT_SF_PRO, FONT_SF_PRO_DISPLAY, FONT_SF_PRO_ROUNDED, getFontFileUrl, getFontIndexUrl } from '../905/946258'
import { isFullscreenOverview } from '../figma_app/88239'
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'
import { Fonts, FontSourceType } from '../figma_app/763686'
import { BrowserInfo } from '../figma_app/778880'
import { desktopAPIInstance } from '../figma_app/876459'
// Required headers for API requests
let requiredHeaders = sendWithRetry.requiredHeaders
// Font API class to handle font-related requests
let FontAPI = new class {
  FontsSchemaValidator: any
  FileSchemaValidator: any

  constructor() {
    this.FontsSchemaValidator = createNoOpValidator()
    this.FileSchemaValidator = createNoOpValidator()
  }

  getFonts(params: any) {
    return this.FontsSchemaValidator.validate(async ({
      xr: api,
    }) => await api.get('/api/fonts', APIParameterUtils.toAPIParameters(params || {})))
  }

  getFile(params: any) {
    let {
      fileKey,
      fileHasParentOrg,
      ...restParams
    } = params
    return fileHasParentOrg
      ? this.FileSchemaValidator.validate(async ({
        xr: api,
      }) => {
        let response = await api.get(`/api/fonts/file/${params.fileKey}`, APIParameterUtils.toAPIParameters(restParams), {
          headers: {
            ...requiredHeaders,
            Accept: 'text/plain',
          },
        })
        response.status >= 200 && response.status < 500 && response.status === 400 === fileHasParentOrg && logWarning('api_font', 'client-side and server-side parent org check mismatch', {
          fileKey,
          fileHasParentOrg,
          status: response.status,
        }, {
          reportAsSentryError: true,
        })
        return response
      })
      : Promise.reject()
  }
}()
// Flag to track if local fonts have been fetched
let isLocalFontsFetched = false

// Flag to track if fonts are initialized (this is the S variable from original code)
let areFontsInitialized = false

// Function to validate font index data
let isValidFontIndex = (data: any) => data && data.schemaVersion === 4 && void 0 !== data.renames && void 0 !== data.emojis

// Local storage key for agent detection
let AGENT_DETECTED_KEY = 'agent-detected'
export function isAgentDetected() {
  return localStorageRef?.getItem(AGENT_DETECTED_KEY) === 'true'
}
let N = () => {
  let e = performance.now()
  let t = getFontIndexUrl({
    format: 'kiwi',
    shouldUseLocalFontIndex: !!getFeatureFlags().font_index_use_local,
    shouldUse250317Index: !!getFeatureFlags().font_index_250317,
  })
  return sendWithRetry.crossOriginGetAny(t, null, {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    responseType: 'arraybuffer',
  }).then(({
    response: t,
  }) => {
    let i = performance.now()
    let n = new Uint8Array(t)
    let l = kiwiParserCodec.decodeFontIndex(n)
    let d = performance.now()
    return isValidFontIndex(l)
      ? (l.files = (function (e) {
        if (!e || getFeatureFlags().dse_sf_pro_font || !getFeatureFlags().font_index_250317)
          return e
        let t = new Set([FONT_SF_PRO_DISPLAY, FONT_SF_PRO_ROUNDED, FONT_SF_COMPACT, FONT_SF_COMPACT_ROUNDED])
        return e.filter(e => !e.family || !t.has(e.family))
      }(l.files)), {
        list: (l.files || []).map((e) => {
          let t = e.variationAxes
            ? e.styles.map(e => ({
              name: e.name,
              postscriptName: e.postscript,
              axes: Object.fromEntries(e.variationAxisValues.map(({
                tag: e,
                value: t,
              }) => [e, t])),
            }))
            : void 0
          return (e.styles || []).map((i) => {
            let n = i.variationAxisValues && Object.fromEntries(i.variationAxisValues.map(e => [e.tag, e.value]))
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
                value: n?.[e.tag],
              })),
              variationInstances: t,
              useFontOpticalSize: e.useFontOpticalSize,
            }
          })
        }).reduce((e, t) => e.concat(t), []),
        renames: {
          family: Object.fromEntries((l?.renames?.family || []).map(e => [e.oldFamily, e.newFamily])),
          style: Object.fromEntries((l?.renames?.style || []).map(e => [e.familyName, Object.fromEntries(e.styleRenames.map(e => [e.oldStyle, e.newStyle]))])),
        },
        emojis: {
          revision: l?.emojis?.revision || 0,
          sizes: l?.emojis?.sizes || [],
          sequences: (l?.emojis?.sequences || []).map(e => e.codepoints),
        },
        binary: n,
        timing: {
          indexFonts: {
            xhr: i - e,
            kiwiDecode: d - i,
            preprocess: performance.now() - d,
          },
        },
      })
      : null
  }).catch((e) => {
    logError('fetchGoogleFonts', 'failed to get kiwi index', {
      err: e,
    })
    return null
  })
}
async function P() {
  let e
  let t
  if (!desktopAPIInstance)
    throw new Error('desktopAPIInstance is not available')
  let i = await desktopAPIInstance.getFonts(!getFeatureFlags().desktop_fonts_via_utility_process)
  if (getFeatureFlags().desktop_font_reload_on_focus) {
    try {
      e = await desktopAPIInstance.getModifiedFonts()
      t = await desktopAPIInstance.getFontsModifiedAt()
    }
    catch { }
  }
  return {
    fontFiles: i,
    source: 'desktop',
    version: desktopAPIInstance.getInformationalVersion(),
    modified_at: t,
    modified_fonts: e,
  }
}
/**
 * Normalizes font metadata by fixing weight values and detecting italic styles
 * @param fontMetadataList - Array of font metadata objects
 * @returns Normalized font metadata array
 */
export function normalizeFontMetadata(fontMetadataList) {
  for (let font of fontMetadataList) {
    if (font.family === 'Artifakt Element' && font.style === 'Thin') {
      font.weight = 100
    }
    else if (font.family === 'Artifakt Element' && font.style === 'Extra Light') {
      font.weight = 200
    }
    if (font.family === 'Avenir' && font.source === FontSourceType.LOCAL) {
      switch (font.style) {
        case 'Book':
        case 'Book Oblique':
          font.weight = 350
          break
        case 'Heavy':
        case 'Heavy Oblique':
          font.weight = 800
          break
        case 'Black':
        case 'Black Oblique':
          font.weight = 900
      }
    }
  }

  // Detect italic styles in font names
  for (let font of fontMetadataList) {
    const isItalicStyle = (styleName) => {
      const lowerCaseStyle = styleName.toLowerCase()
      return ['italic', 'oblique'].some(italicTerm => lowerCaseStyle.includes(italicTerm))
    }

    if (!font.italic && isItalicStyle(font.style)) {
      font.italic = true
    }
  }
  return fontMetadataList
}
// Define the structure for font list data
interface FontListData {
  localizedToUnlocalized: any[]
  sources: FontSourceType[]
  renames: {
    family: Record<string, string>
    style: Record<string, Record<string, string>>
  }
  timing: Record<string, any>
  list?: any[]
  localFontAgentVersion?: number | null
  localFontsModifiedAt?: number
  localModifiedFonts?: Record<string, any>
  sharedFontsList?: any[]
  indexFontsBinary?: Uint8Array
  indexFontsList?: any[]
  emojis?: {
    revision: number
    sizes: number[]
    sequences: any[]
  }
  indexFakeFontsList?: any[]
  localFontsList?: any[]
}

interface FontMetadataExtended {
  family: any
  style: any
  weight: any
  stretch: any
  italic: any
  postscript: any
  id: string
  source: FontSourceType
  useFontOpticalSize: boolean
  modifiedAt: any
  userInstalled: any
  variationAxes?: any[]
}

// Define the structure for font source types with fileKey
interface FontSourceTypeWithFileKey {
  type: FontSourceType
  fileKey: string
}

/**
 * Fetches font list from various sources (local, Google, shared)
 * @param e - Array of font source types to fetch from
 * @returns Promise resolving to font list data
 */
export async function fetchFontList(e: (FontSourceType | FontSourceTypeWithFileKey)[] = [FontSourceType.LOCAL, FontSourceType.GOOGLE]) {
  let t: FontListData = {
    localizedToUnlocalized: [],
    sources: [],
    renames: {
      family: {},
      style: {},
    },
    timing: {},
  }
  let i = e.map((e) => {
    switch (typeof e === 'object' && e !== null && 'type' in e ? e.type : e) {
      case FontSourceType.LOCAL:
        return (function () {
          let e
          let t = (e) => {
            C = `${e.origin}/figma`
            console.log('[Local fonts] using agent')
            return {
              source: 'daemon',
              ...e.data,
            }
          }
          if (desktopAPIInstance) {
            if (getFeatureFlags().desktop_use_agent) {
              e = getFontFiles(20).then(t).catch(() => {
                trackEventAnalytics('Desktop Use Agent Failed')
                return P()
              })
            }
            else {
              e = P()
            }
          }
          else {
            e = getFontFiles(20).then(t)
          }
          let i = Date.now()
          return e.then((e) => {
            if (!e)
              return null
            if (!isLocalFontsFetched) {
              isLocalFontsFetched = true
              let t = e.source
              let n = `${e.version || 'unknown'}`
              let r = BrowserInfo.osname
              trackEventAnalytics('Local Fonts Fetched', {
                source: t,
                version: n,
                os: r,
                freetype: !0,
                durationMs: Date.now() - i,
                numFonts: Object.keys(e.fontFiles).length,
              })
            }
            let t = []
            let n = []
            let r = e.version && !isNaN(parseInt(e.version)) ? parseInt(e.version) : null
            r !== null && localStorageRef?.setItem(AGENT_DETECTED_KEY, 'true')
            let s = e.modified_at && typeof e.modified_at == 'number' ? e.modified_at : void 0
            let c = e?.modified_fonts
            let u = (r || 0) >= 20
            Object.keys(e.fontFiles).forEach((i) => {
              if (getFeatureFlags().ce_skip_pingfangui_font && i.toLowerCase().includes('pingfangui.ttc') || /\.suit$/.test(i))
                return
              let r = e.fontFiles[i]
              let s = !1
              for (let e of r) {
                if (e.variationAxes && hasNonDefaultOpticalSize(e.variationAxes)) {
                  s = !0
                  break
                }
              }
              for (let e = 0; e < r.length; ++e) {
                let l = r[e]
                if (getFeatureFlags().font_skip_inter && l.family === 'Inter' || l.family === 'GB18030 Bitmap' || l.family === 'Apple Color Emoji' || l.family === 'Roboto')
                  continue
                if (BrowserInfo.mac && 'localized' in l && l.localized && e + 1 < r.length) {
                  let i = r[e + 1]
                  if (l.postscript === i.postscript) {
                    t.push({
                      unlocalized: {
                        family: i.family,
                        style: i.style,
                      },
                      localized: {
                        family: l.family,
                        style: l.style,
                      },
                    })
                    l = i
                    ++e
                  }
                }
                else {
                  l.localizedFamily && l.localizedStyle && t.push({
                    unlocalized: {
                      family: l.family,
                      style: l.style,
                    },
                    localized: {
                      family: l.localizedFamily,
                      style: l.localizedStyle,
                    },
                  })
                }
                let d: FontMetadataExtended = {
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
                  userInstalled: l.user_installed,
                }
                if (u && l.variationAxes) {
                  d.variationAxes = l.variationAxes
                  d.useFontOpticalSize = s
                }
                n.push(d)
              }
            })
            return {
              list: n,
              localizedToUnlocalized: t,
              sources: [FontSourceType.LOCAL],
              localFontAgentVersion: r,
              localFontsModifiedAt: s,
              localModifiedFonts: c,
            }
          }).catch(_e => null)
        }()).then((e) => {
          if (e !== null) {
            t.localizedToUnlocalized = e.localizedToUnnormalized
            if (e.localFontAgentVersion) {
              t.localFontAgentVersion = e.localFontAgentVersion
            }
            if (e.list) {
              t.localFontsList = normalizeFontMetadata(e.list)
            }
            t.sources.push(FontSourceType.LOCAL)
            t.localModifiedFonts = e.localModifiedFonts
            t.localFontsModifiedAt = e.localFontsModifiedAt
            t.timing = {
              ...t.timing,
              ...e.timing,
            }
          }
        }).catch((e) => {
          console.error('Error fetching local fonts', e)
        }).then(() => { })
      case FontSourceType.GOOGLE:
        return N().then((e) => {
          if (e === null) {
            if (!n)
              return []
            e = n
          }
          else {
            n = e
          }
          t.renames = e.renames
          t.emojis = e.emojis
          t.indexFontsBinary = e.binary
          t.indexFontsList = e.list
          if (getFeatureFlags().dse_sf_pro_font && !getFeatureFlags().font_index_250317) {
            let i = (e.list || []).filter(e => e.family === 'Inter').map((e) => {
              let t = e.style === 'Semi Bold' ? 'Semibold' : e.style
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
                variationInstances: e.variationInstances,
              }
            })
            t.indexFakeFontsList = i
          }
          t.sources.push(FontSourceType.GOOGLE)
          t.timing = {
            ...t.timing,
            ...e.timing,
          }
        }).catch((e) => {
          console.error('Error fetching index fonts', e)
        }).then(() => { })
      case FontSourceType.SHARED:
        return fetchSharedFonts().then((e) => {
          if (e !== null) {
            t.sharedFontsList = normalizeFontMetadata(e)
            t.sources.push(FontSourceType.SHARED)
          }
        }).catch((e) => {
          console.error('Error fetching shared fonts', e)
        })
      default:
        // Handle FontSourceTypeWithFileKey
        if (typeof e === 'object' && e !== null && 'fileKey' in e) {
          return fetchSharedFonts(e.fileKey).then((e) => {
            if (e !== null) {
              t.sharedFontsList = normalizeFontMetadata(e)
              t.sources.push(FontSourceType.SHARED)
            }
          }).catch((t) => {
            console.error('Error fetching shared fonts for filekey', t, e.fileKey)
          })
        }
        // Fallback for unknown font source types
        return Promise.resolve()
    }
  })
  await Promise.all(i)
  if (e.includes(FontSourceType.GOOGLE) && !t.indexFontsList)
    throw new Error('fetchFontList(): no results')
  return t
}
export function fetchSharedFonts(e = null) {
  return FontAPI.getFonts({
    fileKey: e || void 0,
  }).then(({
    data: e,
  }) => e && e.meta ? e.meta.fonts.map(e => createFontMetadata(e)) : null).catch(() => null)
}
let F = new Map()
export async function preloadCommonFonts() {
  let e = [{
    family: 'Inter',
    style: 'Regular',
  }, {
    family: 'Inter',
    style: 'Medium',
  }, {
    family: 'Merriweather',
    style: 'Regular',
  }, {
    family: 'Figma Hand',
    style: 'Regular',
  }, {
    family: 'Roboto Mono',
    style: 'Regular',
  }]
  let t = ((await fetchFontList([FontSourceType.GOOGLE])).indexFontsList || []).filter((t) => {
    for (let i of e) {
      if (t.family === i.family && t.style === i.style)
        return !0
    }
    return !1
  }).map(async (e) => {
    let {
      id,
      source,
      postscript,
    } = e
    if (F.has(id))
      return
    let r = await fetchFontFile({
      id,
      postscriptName: postscript,
      source,
      fileKey: null,
      teamId: null,
      orgId: null,
    })
    F.set(id, r)
  })
  await Promise.all(t)
}
/**
 * Fetches a specific font file by ID and source
 * @param fontRequest - Font file request parameters
 * @returns Promise resolving to font file data as ArrayBuffer
 */
export async function fetchFontFile(fontRequest) {
  if (!fontRequest.id)
    throw new Error('Invalid font id')
  if (fontRequest.source === FontSourceType.LOCAL && desktopAPIInstance && !getFeatureFlags().desktop_use_agent)
    return desktopAPIInstance.getFontFile(fontRequest.id, fontRequest.postscriptName)
  let url = null
  let isCrossOrigin = !1
  switch (fontRequest.source) {
    case FontSourceType.LOCAL:
      if (C) {
        isCrossOrigin = !0
        url = `${C}/font-file?file=${encodeURIComponent(fontRequest.id)}&freetype_minimum_api_version=20`
      }
      break
    case FontSourceType.GOOGLE:
      isCrossOrigin = !0
      url = getFontFileUrl(fontRequest.id, {
        shouldUseLocalFontIndex: !!getFeatureFlags().font_index_use_local,
      })
      break
    case FontSourceType.SHARED:
      fontRequest.fileKey ? url = `/api/fonts/${fontRequest.id}/file/${fontRequest.fileKey}` : fontRequest.teamId ? url = `/api/fonts/${fontRequest.id}/team/${fontRequest.teamId}` : fontRequest.orgId && (url = `/api/fonts/${fontRequest.id}/org/${fontRequest.orgId}`)
  }
  if (!url) {
    if (desktopAPIInstance && getFeatureFlags().desktop_use_agent) {
      trackEventAnalytics('Desktop Use Agent Failed', {
        font: !0,
      })
      return desktopAPIInstance.getFontFile(fontRequest.id, fontRequest.postscriptName)
    }
    throw new Error('Invalid font source')
  }
  if (isCrossOrigin) {
    if (F.has(fontRequest.id))
      return F.get(fontRequest.id)
    let {
      data,
    } = await sendWithRetry.crossOriginGet(url, null, {
      responseType: 'arraybuffer',
      headers: {
        Accept: 'text/plain',
      },
    })
    return data
  }
  {
    let {
      data,
    } = await getRequest(url, null, {
      responseType: 'arraybuffer',
      headers: {
        ...sendWithRetry.requiredHeaders,
        Accept: 'text/plain',
      },
    })
    return data
  }
}
/**
 * Fetches a font file with specific family, style, and version
 * @param fontFamily - Font family name
 * @param fontStyle - Font style name
 * @param fontVersion - Font version
 * @param fileKey - File key
 * @param hasParentOrg - Whether file has parent organization
 * @returns Promise resolving to font file data
 */
export function fetchFontByFamilyStyleVersion(fontFamily, fontStyle, fontVersion, fileKey, hasParentOrg) {
  return FontAPI.getFile({
    fileKey,
    fileHasParentOrg: hasParentOrg,
    family: fontFamily,
    style: fontStyle,
    version: fontVersion,
  }).then(({
    data: fontData,
  }) => {
    if (!fontData || !fontData.meta)
      return Promise.reject()
    let {
      meta,
    } = fontData
    if (!meta.url || !meta.font_info)
      return Promise.reject()
    let i = meta.font_info && meta.font_info.variation_instances
    let n = normalizeFontMetadata(i && i.length > 0 ? i.map(e => createFontMetadata(meta.font_info, e)) ?? [] : [createFontMetadata(meta.font_info)])
    return n.length === 0
      ? Promise.reject()
      : sendWithRetry.crossOriginGet(meta.url, null, {
        responseType: 'arraybuffer',
        headers: {
          ...sendWithRetry.requiredHeaders,
          Accept: 'text/plain',
        },
      }).then(({
        data: e,
      }) => {
        if (!Fonts.hasInFontList({
          list: n,
          localizedToUnlocalized: [],
          renames: {
            family: {},
            style: {},
          },
        })) {
          Fonts.addToFontList({
            list: n,
            localizedToUnlocalized: [],
            renames: {
              family: {},
              style: {},
            },
          })
        }
        return e
      })
  })
}
export function areFontsInitializedCheck() {
  return areFontsInitialized
}
export function setFontsInitialized() {
  areFontsInitialized = true
}
export function hasLocalFontsAvailable(fontData) {
  return (fontData?.sources || []).includes(FontSourceType.LOCAL) && (fontData?.localFontsList?.length || 0) > 0
}
export let defaultFontList = {
  list: [],
  localizedToUnlocalized: [],
  renames: {
    family: {},
    style: {},
  },
  emojis: {
    revision: 5,
    sizes: [0],
    sequences: [],
  },
}
let H = 'desktop_local_fonts_modified_timestamp'
let getDesktopLocalFontsTimestamp = () => {
  let e = localStorageRef?.getItem(H)
  return typeof e != 'string' || isNaN(parseInt(e)) ? null : parseInt(e)
}
export function setLocalFontsModifiedTimestamp(timestamp) {
  localStorageRef?.setItem(H, String(timestamp))
}
/**
 * Checks for newly installed local fonts and notifies the user
 * @param fontDataFetcher - Function that returns a promise resolving to font data
 * @param fontDataHandler - Callback function to handle font data
 * @param notificationHandler - Callback function to show notification
 */
export function checkForNewlyInstalledFonts(fontDataFetcher, fontDataHandler, notificationHandler) {
  return fontDataFetcher().then((fontData) => {
    let shouldIngestOnFocus = getFeatureFlags().ce_mfm_ingest_on_focus && !areFontsInitialized && hasLocalFontsAvailable(fontData)
    let hasUpdatedFullscreen = !1
    if (shouldIngestOnFocus) {
      logger.info('Updated fullscreen with local fonts')
      fontDataHandler(fontData)
      hasUpdatedFullscreen = !0
    }
    let isModifiedWithinWeek = typeof fontData.localFontsModifiedAt == 'number' && fontData.localFontsModifiedAt > Date.now() / 1e3 - 604800
    let lastModifiedTimestamp = getDesktopLocalFontsTimestamp()
    let isModifiedAfterLastCheck = typeof fontData.localFontsModifiedAt == 'number' && typeof lastModifiedTimestamp == 'number' && fontData.localFontsModifiedAt > lastModifiedTimestamp
    if (isModifiedWithinWeek && isModifiedAfterLastCheck) {
      let modifiedFonts = fontData.localModifiedFonts || {}
      modifiedFonts = Object.keys(modifiedFonts).reduce((filteredFonts, filePath) => {
        let fontList = modifiedFonts[filePath]
        filePath.startsWith('/System/Library/Fonts/') && getFeatureFlags().ce_ignore_modified_apple_fonts || (filteredFonts[filePath] = fontList)
        return filteredFonts
      }, {})
      if (Object.keys(modifiedFonts).length === 0) {
        logger.info('No non-system modified fonts found')
        return
      }
      logger.info('showing visual bell for new local fonts', {
        getLocalFontsLastModified: getDesktopLocalFontsTimestamp(),
        desktopLocalFontsModifiedAt: fontData.localFontsModifiedAt,
      })
      typeof lastModifiedTimestamp == 'number' && typeof fontData.localFontsModifiedAt == 'number' && fontData.localFontsModifiedAt < lastModifiedTimestamp && logError('checkForNewInstalledFonts', 'localFontsModifiedAt is less than localFontsLastModifiedAt', {
        localFontsLastModifiedAt: lastModifiedTimestamp,
        desktopLocalFontsModifiedAt: fontData.localFontsModifiedAt,
      })
      setLocalFontsModifiedTimestamp(fontData.localFontsModifiedAt)
      // Extract font families from modified fonts
      const fontFamilies = Object.values(modifiedFonts ?? {}).reduce((familySet: Set<string>, fontList: any[]) => {
        if (Array.isArray(fontList)) {
          fontList.forEach((font) => {
            if (font?.family) {
              familySet.add(font.family)
            }
          })
        }
        return familySet
      }, new Set<string>())
      let fontFamilyArray: string[] = Array.from(fontFamilies as Iterable<string>)
      if (fontFamilyArray.length > 0) {
        let fontFamilyCount = fontFamilyArray.length
        let firstFontFamily = fontFamilyArray[0]
        let notificationMessage = getI18nString('bindings.new_local_font_visual_bell_single', {
          firstFont: firstFontFamily,
        })
        if (fontFamilyCount === 2) {
          let secondFontFamily = fontFamilyArray[1]
          notificationMessage = getI18nString('bindings.new_local_font_visual_bell_two', {
            firstFont: firstFontFamily,
            secondFont: secondFontFamily,
          })
        }
        else {
          fontFamilyCount > 2 && (notificationMessage = getI18nString('bindings.new_local_font_visual_bell', {
            numAdditionalFonts: fontFamilyCount - 1,
            firstFont: firstFontFamily,
          }))
        }
        hasUpdatedFullscreen || fontDataHandler(fontData)
        let selectedView = debugState?.getState()?.selectedView
        isFullscreenDevHandoffView(selectedView) || isFullscreenOverview(selectedView) || !getFeatureFlags().desktop_font_reload_on_focus_ux || notificationHandler({
          type: 'new_local_font',
          message: notificationMessage,
        })
      }
    }
  })
}
export function updateFontList(fontData) {
  let timing = {
    ...fontData.timing,
  }
  let fontList = (fontData.localFontsList || []).concat(fontData.sharedFontsList || [])
  if (fontData.indexFontsBinary) {
    let n = performance.now()
    Fonts.updateFontListBuffer(fontData.indexFontsBinary)
    let r = performance.now()
    Fonts.updateFontList({
      list: fontList,
      localizedToUnlocalized: fontData.localizedToUnnormalized,
    })
    t.fullscreen = {
      kiwiBinding: r - n,
      jsonBinding: performance.now() - r,
    }
  }
  else {
    fontList = fontList.concat(fontData.indexFontsList || [])
    let n = performance.now()
    Fonts.updateFontList({
      list: fontList,
      localizedToUnlocalized: fontData.localizedToUnlocalized,
      renames: fontData.renames,
      ...(fontData.emojis
        ? {
          emojis: fontData.emojis,
        }
        : {}),
    })
    t.fullscreen = {
      jsonBinding: performance.now() - n,
    }
  }
  fontData.indexFakeFontsList && fontData.indexFakeFontsList.length > 0 && Fonts.addToFontList({
    list: fontData.indexFakeFontsList,
    localizedToUnlocalized: [],
  })
  return timing
}
export const M = preloadCommonFonts
export const M9 = checkForNewlyInstalledFonts
export const eM = defaultFontList
export const M1 = fetchFontFile
export const co = fetchFontByFamilyStyleVersion
export const yF = fetchFontList
export const oN = fetchSharedFonts
export const Nz = hasLocalFontsAvailable
export const b = getDesktopLocalFontsTimestamp
export const Kk = areFontsInitializedCheck
export const Rt = isAgentDetected
export const F8 = normalizeFontMetadata
export const LQ = updateFontList
export const gg = setFontsInitialized
export const PE = setLocalFontsModifiedTimestamp
