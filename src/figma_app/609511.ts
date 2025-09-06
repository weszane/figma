import { Tl, tb, lY } from "../figma_app/703447";
import { t8O, jXp } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, atom } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { H9 } from "../figma_app/930338";
import { M1 } from "../905/777093";
import { UD } from "../figma_app/624361";
import { Wh } from "../figma_app/615482";
import { Ct } from "../figma_app/205280";
import { LE } from "../figma_app/427737";
import { FF } from "../905/556648";
import { a as _$$a } from "../905/38236";
import { fj, jD } from "../figma_app/263905";
let f = [];
let E = [];
let y = [];
let b = [];
let T = [];
export function $$I2() {
  let e = 2 - (f?.length ?? 0) - (E?.length ?? 0);
  if (e <= 0) return;
  let t = Array.from({
    length: e
  }, () => new v({
    compactDOM: !1
  }));
  f.push(...t);
}
export function $$S1({
  compactDOM: e = !1,
  isMcpGeneration: t = !1,
  shouldOutputVariables: r = !1,
  codeSyntaxLanguage: n = null,
  assets: i,
  activeBreakpoint: a
} = {}) {
  if (e) {
    let e = function () {
      let e = new v({
        assets: i,
        compactDOM: !0,
        isMcpGeneration: t,
        shouldOutputVariables: r,
        codeSyntaxLanguage: n
      });
      e.configure(void 0, a);
      b.push(e);
      return e;
    };
    return b.length < 4 ? Promise.resolve(e()) : new Promise(t => {
      T.push(() => {
        t(e());
      });
    });
  }
  {
    let e = function () {
      let e = f.pop();
      E.push(e);
      $$I2();
      e.configure(i, a);
      return e;
    };
    return ($$I2(), f.length > 0) ? Promise.resolve(e()) : new Promise(t => {
      y.push(() => {
        t(e());
      });
    });
  }
}
class v {
  constructor({
    isMcpGeneration: e,
    shouldOutputVariables: t,
    codeSyntaxLanguage: r,
    compactDOM: n,
    assets: i
  } = {}) {
    this.isConsumed = !1;
    this.isDestroyed = !1;
    this.sitePreviewIframeManager = new fj();
    this.compactDOM = n ?? !1;
    this.assets = i ?? new Map();
    this.history = new _$$a({
      url: "/_snapshot"
    });
    n ? this.sitesPreview = this.sitePreviewIframeManager.createSitesPreview({
      history: this.history,
      options: {
        compactDOM: !0,
        isMcpGeneration: e,
        shouldOutputVariables: t,
        codeSyntaxLanguage: r,
        independentRootNode: !0,
        useGuidUrls: !0,
        skipPreviewUpdateListener: !0,
        ignorePreviewClosedWhenGeneratingAssets: !0,
        neverCombineSVGAndPNG: !0,
        onlyFlattenSVGIfVectorLike: !0,
        generateFullAssets: !0,
        labs: {
          runtimeDebugTools: !1
        }
      },
      imageAssetsHolder: this.assets,
      skipSetPreviewedNode: !0
    }) : this.sitesPreview = this.sitePreviewIframeManager.createSitesPreview({
      history: this.history,
      options: {
        skipPreviewUpdateListener: !0,
        generateFullAssets: !0,
        labs: {
          runtimeDebugTools: !1
        }
      },
      imageAssetsHolder: this.assets,
      skipSetPreviewedNode: !0
    });
    this.iframe = document.createElement("iframe");
    this.iframe.style.position = "absolute";
    this.iframe.style.pointerEvents = "none";
    this.iframe.style.opacity = "0";
    this.iframe.style.top = "0px";
    this.iframe.style.left = "0px";
    this.iframe.src = atomStoreManager.get(jD);
    this.sitePreviewIframeManager.mountIframe(this.iframe, {
      compactDOM: n,
      useReactDev: !0
    });
    document.body.appendChild(this.iframe);
  }
  configure(e, t) {
    for (let [r, n] of (this.activeBreakpoint = t, this.iframe.style.width = `${this.activeBreakpoint?.width ?? 1200}px`, this.iframe.style.height = `${this.activeBreakpoint?.height ?? 1080}px`, e ?? [])) this.assets.set(r, n);
  }
  async snapshot({
    guid: e,
    code: t,
    codeBuildId: r,
    exportName: n,
    width: i,
    height: a,
    minWidth: s,
    maxWidth: o,
    minHeight: l,
    maxHeight: d,
    props: u,
    styles: _,
    instanceSwapProps: h,
    isDirectManipulationOnCanvasEnabled: m
  }) {
    try {
      this.consume();
      let g = await A(e, h ?? {});
      let f = g.bundle;
      let E = g.assetInstructions;
      let y = await Ct(E);
      f.files = y;
      let b = await $$N0();
      let T = [_ ?? "", b].join("\n");
      let I = new Blob([t], {
        type: "text/javascript"
      });
      let S = new Blob([T], {
        type: "text/css"
      });
      let v = await this.sitesPreview.snapshotDOMToPNG({
        code: I,
        codeBuildId: r,
        codeInstanceGuid: e,
        exportName: n,
        width: i,
        height: a,
        minWidth: s,
        maxWidth: o,
        minHeight: l,
        maxHeight: d,
        props: u,
        activeBreakpoint: this.activeBreakpoint,
        styles: S,
        instanceSwapProps: h,
        referencedWebsiteBundle: f,
        isDirectManipulationOnCanvasEnabled: m
      });
      return {
        imageSet: await UD(new Uint8Array(await v.png.arrayBuffer()), "image/png", "Code Component Preview " + Date.now()),
        totalWidth: v.totalWidth,
        totalHeight: v.totalHeight,
        layoutWidth: v.layoutWidth,
        layoutHeight: v.layoutHeight,
        offsetX: v.offsetX,
        offsetY: v.offsetY,
        directManipulationSnapshot: v.directManipulationSnapshot
      };
    } finally {
      this.destroy();
    }
  }
  async analyzeCodeFile({
    code: e,
    codeBuildId: t
  }) {
    try {
      this.consume();
      return await this.sitesPreview.analyzeCodeFile({
        code: e,
        codeBuildId: t
      });
    } finally {
      this.destroy();
    }
  }
  async serializeHTML(e) {
    if (!this.compactDOM) throw Error("Attempting to serialize HTML from a non-compact DOM sandbox");
    try {
      this.history.restartAt({
        url: e
      });
      return await new Promise((e, t) => {
        this.sitesPreview.onReceiveHTML = t => {
          t.styles = t.styles.filter(e => e.id !== Tl);
          e(t);
        };
        this.consume();
      });
    } finally {
      this.destroy();
    }
  }
  consume() {
    if (this.isConsumed) throw Error("Attempting to reuse an offscreen sandbox");
    this.isConsumed = !0;
  }
  destroy() {
    this.isConsumed && (this.isDestroyed = !0, this.sitesPreview?.unmount(), document.body.removeChild(this.iframe), function (e) {
      if (e.compactDOM) {
        let t = b.indexOf(e);
        -1 !== t && b.splice(t, 1);
        T.length > 0 && T.shift()();
      } else {
        let t = E.indexOf(e);
        -1 !== t && E.splice(t, 1);
        $$I2();
        y.length > 0 && y.shift()();
      }
    }(this));
  }
}
async function A(e, t) {
  return await LE(Object.entries(t ?? {}).filter(([e, t]) => "-1:-1" !== t).map(([e, t]) => t).concat([e]), !1, !1, !0);
}
let x = Wh(() => atom({}));
export async function $$N0() {
  let e = t8O?.getLocalTextStyleFontInfo();
  if (!e) return "";
  let t = new Set();
  let r = getFeatureFlags().bake_ds_import_plan_enabled;
  return (await Promise.all(e.filter(e => {
    if (e.source !== jXp.GOOGLE && !r) return !1;
    let n = `${e.id}|${e.family}|${e.style}`;
    return !t.has(n) && (t.add(n), !0);
  }).map(async e => {
    if (e.source === jXp.GOOGLE) {
      let t = `${FF}/${e.id}`;
      return [tb({
        family: `${e.family}:${e.style}`,
        style: e.italic ? "italic" : "normal",
        url: t
      }), tb({
        family: e.family,
        style: e.style,
        url: t
      })];
    }
    {
      let t = `${e.id}|${e.family}|${e.style}`;
      let r = atomStoreManager.get(x);
      let i = r[t];
      if (!i) {
        let n = debugState.getState();
        let a = await M1({
          source: e.source,
          id: e.id,
          postscriptName: e.postscript,
          fileKey: n.openFile?.key,
          teamId: n.currentTeamId,
          orgId: n.currentUserOrgId
        });
        i = H9(a);
        atomStoreManager.set(x, {
          ...r,
          [t]: i
        });
      }
      return i ? [lY({
        family: e.family,
        style: e.italic ? "italic" : "normal",
        fontBase64: i
      })] : [];
    }
  }))).flat().filter(Boolean).join("\n");
}
export const bB = $$N0;
export const hB = $$S1;
export const wn = $$I2;