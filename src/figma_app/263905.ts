import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useMemo, useLayoutEffect, useCallback, useRef, useEffect } from "react";
import { _p, q5 } from "../figma_app/11610";
import { assert } from "../figma_app/465776";
import { vNG } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { eU, fp, zl, md } from "../figma_app/27355";
import { Rz, az } from "../905/449184";
import { sn } from "../905/542194";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { nl, lZ } from "../figma_app/257275";
import { g as _$$g } from "../905/880308";
import { f as _$$f, v as _$$v } from "../905/257689";
import { g as _$$g2 } from "../figma_app/411986";
import { ze } from "../figma_app/516028";
import { Td } from "../figma_app/386952";
import { Wh } from "../figma_app/615482";
import { z as _$$z } from "../905/931953";
import { JL } from "../figma_app/690664";
import { Zr } from "../figma_app/114522";
import { f as _$$f2 } from "../figma_app/246112";
import { nC, sF } from "../figma_app/357655";
import { YE, Oc } from "../figma_app/552876";
import { MV } from "../figma_app/396372";
import { Ct, BG } from "../figma_app/205280";
import { c3, LE } from "../figma_app/427737";
import { U5 } from "../905/414242";
import { w as _$$w } from "../figma_app/331365";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { WW, $n } from "../905/521428";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { Z } from "../905/279476";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { D as _$$D2 } from "../905/425476";
import { a as _$$a } from "../905/38236";
import { HA, _b, q9, Dw, o7 } from "../figma_app/618665";
import { J as _$$J } from "../905/916681";
import { g as _$$g3 } from "../905/252386";
import { X as _$$X } from "../905/578754";
let H = eU([]);
function z() {
  let {
    errors
  } = function () {
    let [e, t] = fp(H);
    return {
      errors: e,
      setErrors: t
    };
  }();
  let t = useDispatch();
  let [r, a] = useState(!1);
  let s = hS({
    open: r,
    onClose: () => a(!1)
  });
  return getFeatureFlags().sts_error_display && 0 !== errors.length ? jsxs(Fragment, {
    children: [jsx("div", {
      style: {
        position: "absolute",
        bottom: "20px",
        right: "20px"
      },
      children: jsx(WW, {
        variant: "destructive",
        iconPrefix: jsx(Z, {}),
        onClick: () => a(!0),
        children: tx("sites.lint.errors.materialization_error", {
          errorCount: errors.length
        })
      })
    }), jsx(bL, {
      manager: s,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: tx("sites.lint.errors.materialization_error", {
              errorCount: errors.length
            })
          })
        }), jsx(nB, {
          children: jsx("div", {
            className: _$$s.flex.flexColumn.gap8.$,
            children: errors.map((e, t) => jsxs("div", {
              className: _$$s.p8.b1.radiusMedium.textBodyMedium.$,
              children: [e.nodeId && jsx("div", {
                className: _$$s.textHeadingMedium.mb4.$,
                children: e.nodeId
              }), jsx("div", {
                className: _$$s.preWrap.textBodySmall.$,
                children: e.errorMessage
              })]
            }, e.nodeId || t))
          })
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: "secondary",
              onClick: () => {
                let r = {
                  url: window.location.href,
                  timestamp: new Date().toISOString(),
                  errors: errors.map(e => ({
                    nodeId: e.nodeId,
                    message: e.errorMessage
                  }))
                };
                let n = `Debug Information:
URL: ${r.url}
Errors:
${r.errors.map(e => `
Node: ${e.nodeId}
Error: ${e.message}`).join("\n")}`;
                navigator.clipboard.writeText(n).then(() => {
                  t(_$$F.enqueue({
                    message: _$$t("sites.lint.errors.copied_visual_bell")
                  }));
                });
              },
              children: tx("sites.lint.errors.copy_to_clipboard")
            }), jsx($n, {
              onClick: () => a(!1),
              children: tx("common.close")
            })]
          })
        })]
      })
    })]
  }) : null;
}
let J = new EventTarget();
export function $$Z4() {
  J.dispatchEvent(new CustomEvent("showLayoutDebugStyles"));
}
export let $$Q3 = Wh(() => eU(function () {
  if (document.baseURI.startsWith("http://localhost:9000/")) return "http://localhost:8045/preview_page_v1.html";
  let e = `${_$$g()}-figmaiframepreview`;
  return `https://${e}.${nC()}/preview_page.html`;
}()));
export class $$ee0 {
  constructor() {
    this.messageChannel = new MessageChannel();
    this.sitesPreview = null;
    this._iframe = null;
  }
  regenerateMessageChannel() {
    this.messageChannel = new MessageChannel();
  }
  createSitesPreview({
    history: e,
    onError: t,
    onIframeReady: r,
    onCloseRequested: n,
    onInspectElementEvent: i,
    skipSetPreviewedNode: a,
    onConsoleLog: o,
    options: l,
    imageAssetsHolder: d,
    fileKey: c = null
  }) {
    assert(!this.sitesPreview, "SitesPreview already exists");
    this.sitesPreview = new ei({
      history: e,
      options: l,
      onError: t,
      onIframeReady: r,
      onCloseRequested: n,
      onInspectElementEvent: i,
      skipSetPreviewedNode: a,
      onConsoleLog: o,
      messageChannel: this.messageChannel,
      iframe: this._iframe,
      imageAssetsHolder: d,
      fileKey: c
    });
    return this.sitesPreview;
  }
  resetSitesPreview() {
    this.sitesPreview?.unmount();
    this.sitesPreview = null;
  }
  mountIframe(e, t = {}) {
    this._iframe = e;
    this.sitesPreview?.resetIframeInternal(e);
    let r = getFeatureFlags().sts_component_preview_frame && t.useReactDev ? new URL(Fig.codeComponentsPreviewIFrameURL || "/webpack/code_components_preview_iframe.js", document.baseURI).href : new URL(Fig.previewIframeURL || "/webpack/preview_iframe.js", document.baseURI).href;
    e.onload = () => {
      let n = () => {
        e.contentWindow.postMessage({
          type: "iframe-init",
          initScriptURL: r,
          previewIframeInitialOptions: function ({
            renderOptions: e
          }) {
            let t = getInitialOptions();
            let r = getFeatureFlags().internal_only_debug_tools ? {
              "X-Figma-Debug-Log-To-Datadog": "1",
              "X-Figma-Debug-User-ID": t.user_data?.id,
              "X-Figma-Debug-User-Email": t.user_data?.email
            } : void 0;
            let n = YE() ? "figmake" : "sites";
            return {
              cluster_name: t.cluster_name,
              release_manifest_git_commit: t.release_manifest_git_commit,
              user_id: t.user_data?.id,
              org_id: t.org_id,
              local_dev_on_cluster: t.local_dev_on_cluster,
              sites_preview_sentry_dsn: t.sites_preview_sentry_dsn || t.frontend_sentry_dsn,
              file_key: zl.get(ze),
              render_options: JSON.stringify(e),
              reporting_domain: Rz(),
              analyticsHeaders: r,
              feature_name: n
            };
          }({
            renderOptions: t
          })
        }, new URL(e.src).origin, [this.messageChannel.port2]);
      };
      try {
        n();
      } catch (e) {
        if ("DataCloneError" === e.name) {
          this.regenerateMessageChannel();
          this.sitesPreview?.setupMessageChannel(this.messageChannel);
          n();
          this.sitesPreview?.sendMessage("setLocation", {
            historyState: {
              url: this.sitesPreview.history.current.url
            }
          });
          return;
        }
        throw e;
      }
    };
  }
}
let et = 0;
export function $$er1({
  previewHistory: e,
  onFirstRender: t,
  onCloseRequested: r,
  onReceiveHTML: a,
  style: s,
  skipSetPreviewedNode: o,
  compactDOM: l,
  isMcpGeneration: d,
  shouldOutputVariables: p,
  codeSyntaxLanguage: _,
  independentRootNode: h,
  useGuidUrls: m,
  neverCombineSVGAndPNG: f,
  onlyFlattenSVGIfVectorLike: E,
  testFlags: y
}) {
  let b = getFeatureFlags().sts_runtime_debug_tools ?? !1;
  let I = md($$Q3);
  let S = Td();
  let v = Oc();
  let [A, x] = useState(() => ++et);
  let N = useMemo(() => new $$ee0(), []);
  let w = useMemo(() => ({
    compactDOM: l,
    isMcpGeneration: d,
    shouldOutputVariables: p,
    codeSyntaxLanguage: _,
    independentRootNode: h,
    withBaseStyles: !v,
    useGuidUrls: m,
    generateFullAssets: nl(),
    neverCombineSVGAndPNG: f,
    onlyFlattenSVGIfVectorLike: E,
    labs: {
      runtimeDebugTools: b
    },
    testFlags: y
  }), [l, h, v, b, m, f, E, d, p, _, y]);
  useLayoutEffect(() => {
    N.sitesPreview?.setOptions(w);
  }, [N, w]);
  useLayoutEffect(() => {
    N.sitesPreview && (N.sitesPreview.onReceiveHTML = a ?? null);
  }, [N, a]);
  let O = useCallback(() => {
    if (!N.sitesPreview) {
      let n = N.createSitesPreview({
        history: e,
        onCloseRequested: r,
        skipSetPreviewedNode: o,
        fileKey: S,
        options: w
      });
      t && n.oncePageRendered().then(() => {
        t();
      });
      zl.set(HA, n);
    }
  }, [N, r, t, e, o, w, S]);
  !function ({
    isVisible: e,
    onShow: t,
    onHide: r
  }) {
    let n = useRef(!0);
    let a = useRef(e);
    useEffect(() => {
      !e && a.current && r?.();
      e && (n.current || !a.current) && t?.();
      a.current = e;
      n.current = !1;
    }, [e, t, r]);
  }({
    isVisible: !!e,
    onShow: O,
    onHide: useCallback(() => {
      zl.set(HA, null);
      N.resetSitesPreview();
      x(() => ++et);
    }, [N])
  });
  let R = useCallback(e => {
    if (!e) {
      N.regenerateMessageChannel();
      return;
    }
    N.mountIframe(e);
  }, [N]);
  return jsxs(Fragment, {
    children: [jsx("iframe", {
      ref: R,
      allow: "autoplay",
      allowFullScreen: !0,
      "data-iframe-id": A,
      "data-testid": "site-preview-iframe",
      id: "rendered-site",
      src: I,
      style: {
        width: "100%",
        height: "100%",
        ...s
      },
      title: "Sites preview"
    }, A), jsx(z, {})]
  });
}
export class $$en2 {
  constructor(e = new _$$a(), t = {
    x: 1,
    y: 1
  }, r) {
    let n = new $$ee0();
    this.sitesPreview = n.createSitesPreview({
      history: e,
      options: {
        ...(r ?? {}),
        labs: {
          runtimeDebugTools: !1
        }
      },
      skipSetPreviewedNode: !getFeatureFlags().sts_live_preview
    });
    let i = this.iframe = document.createElement("iframe");
    i.style.position = "absolute";
    i.style.top = "0px";
    i.style.left = "0px";
    i.style.width = `${t.x}px`;
    i.style.height = `${t.y}px`;
    i.src = zl.get($$Q3);
    document.body.appendChild(i);
    n.mountIframe(i);
    this.ready = new Promise(async e => {
      for (; !(await this.sitesPreview.once("status")).isReady;);
      e(!0);
    });
  }
  async setWidth(e) {
    parseFloat(this.iframe.style.width) !== e && (this.iframe.style.width = `${e}px`, await this.sitesPreview.once("resize"));
  }
  unmount() {
    this.sitesPreview.unmount();
    document.body.removeChild(this.iframe);
  }
}
class ei {
  constructor({
    history: e,
    options: t,
    onIframeReady: r,
    onCloseRequested: n,
    onError: i,
    onConsoleLog: a,
    skipSetPreviewedNode: s,
    imageAssetsHolder: o = null,
    onInspectElementEvent: l,
    messageChannel: d,
    iframe: c,
    fileKey: p
  }) {
    this._iframe = null;
    this.fileKey = null;
    this.onIframeReady = null;
    this.onError = null;
    this.onConsoleLog = null;
    this.onReceiveHTML = null;
    this.onInspectElementEvent = null;
    this.fetchMaterializedNodePropsPromise = null;
    this.heartbeatInterval = null;
    this.perfTracker = new _$$g3(_b);
    this.website = null;
    this.clonedNodes = new Map();
    this.setupMessageChannel(d);
    this.history = e;
    this.onIframeReady = r ?? null;
    this.onCloseRequested = n || null;
    this.onConsoleLog = a || null;
    this.onError = i || null;
    this.onInspectElementEvent = l ?? null;
    this.imageAssetsHolder = o;
    this._iframe = c;
    this.directManipulationEditor = new _$$w(Zr, e => zl.set(JL, e));
    this.fileKey = p;
    this.eventTarget = new EventTarget();
    this.pageRenderedPromise = null;
    this.skipSetPreviewedNode = s;
    t.skipPreviewUpdateListener || _$$g2(async e => {
      let t = await c3(this.website, e);
      this.website = t;
      this.sendMessage("pushPageData", {
        website: {
          ...this.website,
          flatteningTypes: void 0
        }
      });
    });
    e.addPopStateListener(e => {
      this.sendMessage("setLocation", {
        historyState: e
      });
    });
    e.addRefreshListener(() => {
      this.sendMessage("refresh", {});
    });
    this.options = t;
    this.sendMessage("setOptions", {
      options: t
    });
    let _ = this.showLayoutDebugStyles.bind(this);
    J.addEventListener("showLayoutDebugStyles", _);
    this.removeListeners = () => {
      J.removeEventListener("showLayoutDebugStyles", _);
    };
  }
  set files(e) {
    for (let [t, r] of (this.website && (this.website.files = e), Object.entries(e))) this.imageAssetsHolder?.set(t, r);
  }
  setFileKey(e) {
    this.fileKey = e;
  }
  setupMessageChannel(e) {
    this.messagePort = e.port1;
    this.sitesMessagePort = new _$$J(this.messagePort, {
      status: e => {
        this.eventTarget.dispatchEvent(new CustomEvent("status", {
          detail: e
        }));
        e.isReady && (this.onIframeReady?.(), this.startHeartbeat());
        e.error && (console.error("[SitesPreview] ready: " + e.isReady + (e.error ? ", error: " + e.error : "")), _$$X({
          name: "status_error",
          message: e.error,
          origin: "status",
          reduxState: debugState?.getState()
        }));
      },
      getPage: e => this.getPage(e.url),
      pageRendered: e => {
        e.url && this.eventTarget.dispatchEvent(new CustomEvent("pageRendered", {
          detail: e
        }));
      },
      historyPush: e => {
        this.history.push(e.historyState);
      },
      historyBack: () => {
        this.history.back();
      },
      historyForward: () => {
        this.history.forward();
      },
      requestClose: () => {
        this.onCloseRequested?.();
      },
      nodeDebugInformation: e => {
        let t = zl.get(_$$f2);
        t && (t.nodeByGuidMap[e.materializedNode.id] = e.materializedNode, zl.set(_$$f2, {
          currentRoot: t.currentRoot,
          nodeByGuidMap: t.nodeByGuidMap
        }));
      },
      runtimeExpansionError: e => {
        e.missingKeys.forEach(t => {
          az.trackDefinedEvent("sites.runtime_expansion_error", {
            error: "missingKey",
            field: t
          });
          e.extraKeys.forEach(e => {
            az.trackDefinedEvent("sites.runtime_expansion_error", {
              error: "extraKey",
              field: e
            });
          });
          e.differentKeys.forEach(e => {
            az.trackDefinedEvent("sites.runtime_expansion_error", {
              error: "differingKey",
              field: e.key
            });
          });
        });
      },
      perfEvent: e => {
        this.perfTracker.record(e.eventName);
      },
      timerEvent: e => {
        "timer_start" === e.eventName ? sn.start(`sites.runtime.${e.timerName}`) : "timer_stop" === e.eventName && sn.stop(`sites.runtime.${e.timerName}`);
      },
      testingMaterializedNodeProps: e => {
        this.eventTarget.dispatchEvent(new CustomEvent("testingMaterializedNodeProps", {
          detail: e
        }));
      },
      testEventEmitted: e => {
        this.eventTarget.dispatchEvent(new CustomEvent("testEventEmitted", {
          detail: e
        }));
      },
      renderComponentError: e => {
        e.error && this.onError?.(e.error);
        _$$X({
          name: e.error.name,
          message: e.error.message,
          origin: "render-component-error",
          reduxState: debugState?.getState()
        });
      },
      handleConsoleLog: e => {
        this.onConsoleLog?.(e.type, e.message);
      },
      handleReactError: e => {
        if (nl()) {
          console.error("Caught error from sites preview", e.error.name, e.error.message);
          return e;
        }
        _$$X({
          name: e.error.name,
          message: e.error.message,
          origin: "handle-react-error",
          boundary: e.boundary,
          reduxState: debugState?.getState()
        });
      },
      focusEvent: async e => {
        let t = zl.get(_b);
        if (!t || "modal" !== t.mode) return;
        let {
          type
        } = e;
        await new Promise(e => requestAnimationFrame(e));
        "focus" === type ? zl.set(q9, Dw.Iframe) : "blur" === type && zl.set(q9, Dw.None);
      },
      resize: e => {
        this.eventTarget.dispatchEvent(new CustomEvent("resize", {
          detail: e
        }));
      },
      updateMaterializationErrors: e => {
        zl.set(H, e.errors);
      },
      inspectElementEvent: e => {
        this.onInspectElementEvent && this.onInspectElementEvent(e);
      }
    }, {
      onMessageTimeout: _$$D2()
    });
  }
  fetchMaterializedNodeProps() {
    return this.fetchMaterializedNodePropsPromise ? this.fetchMaterializedNodePropsPromise : new Promise(e => {
      this.eventTarget.addEventListener("testingMaterializedNodeProps", t => {
        e(t.detail);
        this.fetchMaterializedNodePropsPromise = null;
      }, {
        once: !0
      });
      this.sendMessage("testingRequestMaterializedNodePropsMessage", {
        method: "testingRequestMaterializedNodePropsMessage"
      });
    });
  }
  listenForTestEvent(e) {
    return new Promise(t => {
      this.eventTarget.addEventListener("testEventEmitted", e => {
        t(e.detail);
      }, {
        once: !0
      });
      this.sendMessage("listenForTestEvent", {
        eventName: e
      });
    });
  }
  oncePageRendered() {
    this.pageRenderedPromise || (this.pageRenderedPromise = new Promise(e => {
      this.eventTarget.addEventListener("pageRendered", t => {
        this.pageRenderedPromise = null;
        e(t.detail);
      }, {
        once: !0
      });
    }));
    return this.pageRenderedPromise;
  }
  once(e) {
    return new Promise(t => {
      this.eventTarget.addEventListener(e, e => {
        this.pageRenderedPromise = null;
        t(e.detail);
      }, {
        once: !0
      });
    });
  }
  debugGetMaterializedTree(e, t) {
    return this.sendMessage("materializationDebug", {
      website: e,
      url: t
    });
  }
  sendMessage(e, t, r) {
    return this.sitesMessagePort.sendMessage(e, t, r);
  }
  getPage(e) {
    return new Promise(async (t, r) => {
      if ("/_snapshot" === e || "/_sandbox" === e) return;
      let {
        id,
        cmsSlug
      } = sF(e, this.options.useGuidUrls);
      if (!id) return r(Error(`Could not load page. Id for url not found ${e}`));
      this.perfTracker.record("bundle_generation_start");
      let {
        bundle,
        assetInstructions
      } = await LE([id], this.options.neverCombineSVGAndPNG, this.options.onlyFlattenSVGIfVectorLike, void 0, this.options.isMcpGeneration);
      this.perfTracker.record("bundle_generation_stop");
      let u = null;
      getFeatureFlags().dakota_preview && (u = await _$$f(bundle), await _$$v(bundle, assetInstructions, u, id, cmsSlug), getFeatureFlags().internal_only_debug_tools && console.log("Generated CMS bundle:", u));
      let p = assetInstructions;
      if (getFeatureFlags().sts_video && p.find(e => "VIDEO_ASSET" === e.type)) {
        if (!this.fileKey) return r(Error("No fileKey set. Unable to retrieve video asset URLs."));
        let e = p.reduce((e, t) => ("VIDEO_ASSET" === t.type && e.push(t.hash), e), []);
        if (!MV.instance.hasURLsForHashes(e)) {
          let e = await _$$z.getFileVideos({
            fileKey: this.fileKey
          });
          MV.instance.setURLs(e.data.meta.videos);
        }
        for (let t of e) if (bundle.assets[t]) {
          let e = MV.instance.getURLForHash(t);
          if (!e) {
            console.error("Missing video URL for video asset", {
              hash: t
            });
            continue;
          }
          bundle.assets[t].url = e;
        }
        p = p.filter(e => "VIDEO_ASSET" !== e.type);
      }
      if (this.website = bundle, this.options.generateFullAssets && (this.files = await Ct(p)), getFeatureFlags().internal_only_debug_tools && console.log("Generated site result:", {
        bundle,
        assetInstructions
      }), this.skipSetPreviewedNode || new vNG(getSingletonSceneGraph().scene).sitesPreviewObserverReference().setPreviewedNodeID(id), t({
        website: bundle,
        cmsBundle: u
      }), this.perfTracker.record("asset_generation_start", {
        totalAssetInstructions: p.length
      }), !this.options.generateFullAssets) for (let e of BG(p, this.options.ignorePreviewClosedWhenGeneratingAssets ?? !1)) {
        let t = await e;
        if (t) {
          let {
            files,
            totals
          } = t;
          this.perfTracker.updateStats({
            totalAssetFiles: Object.keys(files).length,
            totalAssetCacheHits: totals.cacheHits,
            totalFillAssets: totals.fillAssets,
            totalFlattenedFillAssets: totals.flattenedFills,
            totalGeneratedAssetImages: totals.generatedImages,
            totalGeneratedAssetSvgs: totals.generatedSvgs
          });
          assert(!!this.website, "Website data not set. Unable to add asset files.");
          this.files = {
            ...this.website.files,
            ...files
          };
          setTimeout(() => {
            this.sendMessage("pushAssetData", {
              files
            });
          }, 0);
        }
      }
      this.perfTracker.record("asset_generation_stop");
      o7(this);
      this.onReceiveHTML && setTimeout(async () => {
        let e = await this.sendMessage("getHTML", {});
        this.onReceiveHTML && this.onReceiveHTML({
          html: e.html,
          styles: e.styles,
          assets: e.assets
        });
      }, 500);
    });
  }
  async debugCompareLayout(e, t, r) {
    let n = this.clonedNodes.get(e);
    n?.clone || (n = new ea(sF(e).id), assert(!!n.clone));
    let i = await _p({
      id: n.clone.guid
    }, t, r, {
      threshold: 1
    });
    this.sendMessage("setDebugStyles", {
      debugStyles: q5(i)
    });
    n.remove();
  }
  get iframe() {
    return this._iframe;
  }
  resetIframeInternal(e) {
    this._iframe = e;
  }
  unmount() {
    _$$g2(null);
    this.removeListeners();
    this.stopHeartbeat();
    this._iframe = null;
    this.directManipulationEditor.destroy();
    this.sitesMessagePort.cleanup();
  }
  setOptions(e) {
    this.options !== e && (this.options = e, this.sendMessage("setOptions", {
      options: e
    }));
  }
  async unsafeEval(e, ...t) {
    if (!lZ()) throw Error("unsafeEval is only available in interaction tests");
    "function" == typeof e && (e = `(${e.toString()}).apply(this, ${JSON.stringify(t)})`);
    try {
      return (await this.sendMessage("unsafeEval", {
        code: e
      })).data;
    } catch (e) {
      return String(e);
    }
  }
  startHeartbeat() {
    this.stopHeartbeat();
    this.heartbeatInterval = setInterval(() => {
      this.sendMessage("heartbeat", {}, 5e3);
    }, 5e3);
  }
  stopHeartbeat() {
    null !== this.heartbeatInterval && (clearInterval(this.heartbeatInterval), this.heartbeatInterval = null);
  }
  snapshotDOMToPNG({
    code: e,
    codeBuildId: t,
    codeInstanceGuid: r,
    exportName: n,
    width: i,
    height: a,
    minWidth: s,
    maxWidth: o,
    minHeight: l,
    maxHeight: d,
    props: c,
    styles: u,
    instanceSwapProps: p,
    referencedWebsiteBundle: _,
    withBaseStyles: h,
    activeBreakpoint: m,
    isDirectManipulationOnCanvasEnabled: g
  }) {
    return this.sendMessage("snapshotDOMToPNG", {
      code: e,
      codeBuildId: t,
      codeInstanceGuid: r,
      exportName: n,
      width: i,
      height: a,
      minWidth: s,
      maxWidth: o,
      minHeight: l,
      maxHeight: d,
      props: c,
      styles: u,
      instanceSwapProps: p,
      referencedWebsiteBundle: _,
      withBaseStyles: h,
      activeBreakpoint: m,
      isDirectManipulationOnCanvasEnabled: g
    });
  }
  snapshotPage({
    maxSnapshotWidth: e,
    maxSnapshotHeight: t
  }) {
    return this.sendMessage("snapshotPage", {
      maxSnapshotWidth: e,
      maxSnapshotHeight: t
    });
  }
  renderComponent({
    code: e,
    codeBuildId: t,
    props: r,
    nodeId: n,
    codeExportName: i,
    styles: a,
    withBaseStyles: s,
    instanceSwapPropertyGuids: o,
    referencedWebsiteBundle: l,
    activeBreakpoint: d,
    clipContents: c,
    allowScaling: u,
    scaleLinearly: p,
    width: _,
    height: h
  }) {
    return this.sendMessage("renderComponent", {
      nodeId: n,
      codeExportName: i,
      code: e,
      codeBuildId: t,
      styles: a,
      props: r,
      withBaseStyles: s,
      instanceSwapPropertyGuids: o,
      referencedWebsiteBundle: l,
      activeBreakpoint: d,
      clipContents: c,
      allowScaling: u,
      scaleLinearly: p,
      width: _,
      height: h
    }).$$finally(() => {
      o7(this);
      nl() && window.dispatchEvent(new CustomEvent(U5));
    });
  }
  analyzeCodeFile({
    code: e,
    codeBuildId: t
  }) {
    return this.sendMessage("analyzeCodeFile", {
      code: e,
      codeBuildId: t
    });
  }
  setDirectManipulationEnabled(e) {
    this.sendMessage("setDirectManipulationElementEnabled", e);
    this.directManipulationEditor.processEvent({
      type: "enabledChanged",
      enabled: e.enabled
    }, null);
  }
  async showLayoutDebugStyles() {
    let e = this.history.current.url;
    let {
      elementData,
      windowSize
    } = await this.sendMessage("getElementLayoutData", {});
    this.debugCompareLayout(e, elementData, windowSize);
  }
  async snapshotHTML({
    inlineBlobUrls: e = !0,
    selectedElementId: t
  } = {}) {
    let r = await this.sendMessage("getHTML", {
      inlineBlobUrls: e,
      selectedElementId: t
    });
    return {
      html: function (e) {
        let t = e.styles.map(e => `    <style>${e.content}</style>`).join("\n");
        return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
${t}
  </head>
  <body>
    <div id='container'>${e.html}</div>
  </body>
</html>`;
      }(r),
      rect: r.rect
    };
  }
}
class ea {
  constructor(e) {
    this.clone = l7.system("sites-debug-compare-layout", () => getSingletonSceneGraph().get(getSingletonSceneGraph().get(e).clone()));
    setTimeout(() => {
      this.remove();
    }, 1e3);
  }
  remove() {
    this.clone;
    l7.system("sites-debug-compare-layout", () => {
      this.clone?.removeSelfAndChildren();
    });
    this.clone = null;
  }
}
export const fj = $$ee0;
export const gs = $$er1;
export const Z0 = $$en2;
export const jD = $$Q3;
export const lt = $$Z4;