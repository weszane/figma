import { jsx } from "react/jsx-runtime";
import { Component } from "react";
import { ServiceCategories } from "../905/165054";
import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { buildStaticUrl } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { reportError } from "../905/11";
import { isInteractionPathCheck } from "../figma_app/897289";
import { F } from "../905/302958";
import { fullscreenValue } from "../figma_app/455680";
import { T as _$$T } from "../905/858738";
import { p as _$$p, H } from "../905/216429";
import { INTERNAL_RERUN_PLUGIN_IDENTIFIER, PARENT_WINDOW_REFERENCE, PLUGIN_TIMEOUT_MS, PLUGIN_RETRY_DELAY_MS } from "../905/968269";
import { of } from "../905/544659";
import { Y } from "../905/696438";
let y = !!desktopAPIInstance || _$$T();
let b = `
 document.close();
 document.addEventListener('keydown', (e) => {
   if (e.keyCode === 80 /* P */ && !e.shiftKey && e.altKey && ${BrowserInfo.mac ? "!e.ctrlKey && e.metaKey" : "e.ctrlKey && !e.metaKey"}) {
     // Handle the plugin re-run shortcut
     window.parent.postMessage('${INTERNAL_RERUN_PLUGIN_IDENTIFIER}', '*')
     e.stopPropagation()
     e.stopImmediatePropagation()
   } else if (${JSON.stringify(y)}) {
     // Handle Select All, Undo and Redo in the desktop app
     const ctrlDown = ${BrowserInfo.mac ? "e.metaKey" : "e.ctrlKey"}
     if (ctrlDown) {
       if (e.keyCode === 65 /* A */) {
         document.execCommand('selectAll')
       } else if (e.keyCode === 90 /* Z */) {
         if (e.shiftKey) {
           document.execCommand('redo')
         } else {
           document.execCommand('undo')
         }
       } else if ((e.key === 'x' || e.key === 'X') && ${JSON.stringify(_$$T())}) {
         document.execCommand('cut')
       } else if ((e.key === 'c' || e.key === 'C') && ${JSON.stringify(_$$T())}) {
         document.execCommand('copy')
       } else if ((e.key === 'v' || e.key === 'V') && ${JSON.stringify(_$$T())}) {
         document.execCommand('paste')
       }
     }
   }
 }, true)

 function renderCssVariables(vars) {
   return Object.entries(vars)
     .map((entry) => entry.join(': '))
     .join('; ') + ';'
 }

 window.addEventListener('message', function(event) {
   if (
     event.source === ${PARENT_WINDOW_REFERENCE} &&
     event.data &&
     typeof event.data === 'object' &&
     'figmaMessage' in event.data
   ) {
     event.stopImmediatePropagation()

     const figmaMessage = event.data.figmaMessage

     if (figmaMessage.type === 'THEME') {
       const figmaStyle = document.getElementById('figma-style')
       figmaStyle.textContent = ':root { ' + renderCssVariables(figmaMessage.payload.variables) + ' }'

       const classesToRemove = []

       document.documentElement.classList.forEach((value) => {
         if (value.startsWith('figma-')) {
           classesToRemove.push(value)
         }
       })

       for (const className of classesToRemove) {
         document.documentElement.classList.remove(className)
       }

       if (figmaMessage.payload.name && figmaMessage.payload.name !== 'legacy') {
         document.documentElement.classList.add('figma-' + figmaMessage.payload.name)
       }
     }
   }
 }, true)
 `;
let T = () => {
  let e = new Map([[100, "Inter-Thin-BETA"], [200, "Inter-ExtraLight-BETA"], [300, "Inter-Light-BETA"], [400, "Inter-Regular"], [500, "Inter-Medium"], [600, "Inter-SemiBold"], [700, "Inter-Bold"], [800, "Inter-ExtraBold"], [900, "Inter-Black"]]);
  let t = new Map([[100, "Inter-ThinItalic-BETA"], [200, "Inter-ExtraLightItalic-BETA"], [300, "Inter-LightItalic-BETA"], [400, "Inter-Italic"], [500, "Inter-MediumItalic"], [600, "Inter-SemiBoldItalic"], [700, "Inter-BoldItalic"], [800, "Inter-ExtraBoldItalic"], [900, "Inter-BlackItalic"]]);
  let r = [];
  let n = "3.10a";
  for (let i of e.keys()) {
    let a = e.get(i);
    let s = t.get(i);
    let o = `@font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: ${i};
      font-display: swap;
      src: url('${buildStaticUrl(`webfont/1/${a}.woff2?v=${n}`)}') format('woff2'),
      url('${buildStaticUrl(`webfont/1/${a}.woff?v=${n}`)}') format('woff');
    }`;
    let d = `@font-face {
      font-family: 'Inter';
      font-style: italic;
      font-weight: ${i};
      font-display: swap;
      src: url('${buildStaticUrl(`webfont/1/${s}.woff2?v=${n}`)}') format('woff2'),
      url('${buildStaticUrl(`webfont/1/${s}.woff?v=${n}`)}') format('woff');
    }`;
    r.push(o);
    r.push(d);
  }
  return `<style>${r.join("\n")}</style>`;
};
class I {
  constructor(e, t, r, n) {
    let i;
    this.outerIframeElement = e;
    this.setIframeStyle = (e, t) => {
      e.style.display = "block";
      e.style.margin = "0";
      e.style.border = "none";
      e.style.padding = "0";
      e.style.width = "100%";
      e.style.height = "100%";
      t || (e.style.backgroundColor = "white");
    };
    this.iframeMessageEventListener = e => {
      if (!e.source || e.source !== this.innerIframeElement?.contentWindow) return;
      let t = {
        data: e.data,
        origin: e.origin
      };
      this.toplevelWindowMessageChannel?.port1.postMessage(t);
    };
    let {
      includeThemeColors,
      allowedDomains
    } = n;
    this.innerIframeElement = document.createElement("iframe");
    this.loaded = new Promise(e => {
      i = e;
    });
    this.innerIframeElement.onload = () => {
      if (!this.innerIframeElement) return;
      let e = T();
      this.innerIframeElement.contentWindow.postMessage(e + t, "*");
      this.innerIframeElement.onload = () => {
        i();
      };
    };
    this.innerIframeElement.name = "Inner Plugin Iframe";
    this.innerIframeElement.id = "plugin-iframe";
    let o = this.getPermissions(n);
    this.innerIframeElement.allow = o;
    this.innerIframeElement.src = this.getLoaderShimSrc(!!includeThemeColors, n.isLocal);
    this.setIframeStyle(this.innerIframeElement, includeThemeColors);
    this.toplevelWindowMessageChannel = new MessageChannel();
    this.toplevelWindowMessageChannel.port2.onmessage = e => {
      r(e.data);
    };
    e.contentWindow.addEventListener("message", this.iframeMessageEventListener);
    this.networkIframeElement = null;
    this.networkIframeElement = document.createElement("iframe");
    this.networkIframeElement.name = "Network Plugin Iframe";
    this.setIframeStyle(this.networkIframeElement, includeThemeColors);
    this.networkIframeElement.onload = () => {
      if (!this.networkIframeElement) return;
      let e = this.networkIframeElement.contentDocument.body;
      e.style.margin = "0";
      e.style.padding = "0";
      of(this.networkIframeElement, allowedDomains);
      e.appendChild(this.innerIframeElement);
      this.networkIframeElement.contentWindow.addEventListener("message", this.iframeMessageEventListener);
    };
    e.contentDocument.body.appendChild(this.networkIframeElement);
    this.pluginId = n.pluginId;
  }
  getPermissions(e) {
    let {
      name,
      isWidget,
      cameraAccess,
      microphoneAccess,
      displayCaptureAccess,
      clipboardWriteAccess
    } = e;
    if (cameraAccess || microphoneAccess) try {
      desktopAPIInstance?.requestCameraAndOrMicrophonePermissions({
        requester: isWidget ? `${name} widget` : `${name} plugin`,
        requestCamera: cameraAccess,
        requestMicrophone: microphoneAccess
      });
    } catch (e) {
      desktopAPIInstance && fullscreenValue.dispatch(F.enqueue({
        type: "desktop-unsupported",
        error: !0,
        message: "Camera access is only available in the latest version of Figma Desktop"
      }));
      return e;
    }
    return [cameraAccess ? "camera *" : "camera 'none'", microphoneAccess ? "microphone *" : "microphone 'none'", displayCaptureAccess ? "display-capture *" : "display-capture 'none'", clipboardWriteAccess ? "clipboard-write *" : "clipboard-write 'none'"].join("; ");
  }
  getSecurityPolicyViolationDevLogging(e) {
    return e ? `
        window.addEventListener('securitypolicyviolation', (event) => {
          try {
            const url = new URL(event.blockedURI)
            console.warn('Failed to load resource from', event.blockedURI, 'since it is not in the list of allowed domains. Please add', '"' + url.origin + '"', 'to the networkAccess > allowedDomains field in your manifest.json.')
          } catch {
            // This is to make sure we don't crash if the blockedURI is not a valid URL.
            // This should never happen since we're getting the url from the Web API, but better safe than sorry.
          }
        })` : "";
  }
  getLoaderShimSrc(e, t) {
    let r = "";
    if (e) {
      let e = "whiteboard" === document.body.getAttribute("data-editor-theme") ? "light" : document.body.getAttribute("data-preferred-theme");
      e && "legacy" !== e && (r = `
          window.addEventListener('load', (event) => {
            document.documentElement.classList.add('figma-${e}')
          });
        `);
    }
    return "data:text/html;base64," + btoa(`<script>
      onmessage = (event) => {
        if (event.source === ${PARENT_WINDOW_REFERENCE} && event.origin === "${window.location.origin}") {
          document.write("<script>" + ${JSON.stringify(b)} + ${JSON.stringify(r)} + ${JSON.stringify(this.getSecurityPolicyViolationDevLogging(t))} + "</" + "script>${_$$p(e)}" + event.data)
        }
      }

  </script>`);
  }
  async handleThemeUpdate() {
    await this.loaded;
    this.innerIframeElement?.contentWindow ? this.innerIframeElement.contentWindow.postMessage({
      figmaMessage: {
        type: "THEME",
        payload: {
          name: document.body.getAttribute("data-preferred-theme"),
          variables: H(!0)
        }
      }
    }, "*") : reportError(ServiceCategories.EXTENSIBILITY, Error(`innerIframeElement.contentWindow is null for pluginId=${this.pluginId}`));
  }
  destroy() {
    this.outerIframeElement?.contentWindow?.removeEventListener("message", this.iframeMessageEventListener);
    this.toplevelWindowMessageChannel && (this.toplevelWindowMessageChannel.port2.onmessage = null, this.toplevelWindowMessageChannel.port1.close(), this.toplevelWindowMessageChannel.port2.close());
    this.toplevelWindowMessageChannel = null;
    this.networkIframeElement && (this.outerIframeElement.contentDocument?.body.removeChild(this.networkIframeElement), this.networkIframeElement = null, this.innerIframeElement = null);
    this.pluginId = null;
  }
  async postMessage(e, t) {
    t.skipQueue || (await this.loaded);
    this.innerIframeElement && this.innerIframeElement.contentWindow?.postMessage(e, t.origin);
  }
}
export class $$S0 extends Component {
  constructor() {
    super(...arguments);
    this.outerIframeLoaded = !1;
    this.state = {
      visible: !1,
      width: PLUGIN_TIMEOUT_MS,
      height: PLUGIN_RETRY_DELAY_MS,
      stopPointerEvents: !1
    };
    this.setOuterIframeRef = e => {
      e && (this.outerIframeElement = e, this.outerIframeElement.onload = () => {
        let e = !1;
        try {
          e = this.outerIframeElement.contentWindow?.__FIGMA_PLUGIN_SANDBOX_PAGE_LOADED;
        } catch (e) {
          trackEventAnalytics("Plugin Iframe Property Read Error", {
            src: this.outerIframeElement.src,
            errorMessage: e.toString()
          });
        }
        e ? this.instanceLoadingResolve() : e || isInteractionPathCheck() || this.instanceLoadingReject(Error("Error loading Figma plugin iframe sandbox. Try refreshing the page."));
        this.outerIframeLoaded = !0;
      });
    };
  }
  componentDidMount() {
    let {
      iframeId
    } = this.props;
    Y.instance[iframeId] = this;
    let t = Y.instanceLoading[iframeId];
    if (t) {
      this.instanceLoadingResolve = t.resolve;
      this.instanceLoadingReject = t.reject;
    } else {
      let t = new Promise((e, t) => {
        this.instanceLoadingResolve = e;
        this.instanceLoadingReject = t;
      });
      Y.instanceLoading[iframeId] = {
        resolve: this.instanceLoadingResolve,
        reject: this.instanceLoadingReject,
        promise: t
      };
    }
  }
  componentWillUnmount() {
    let {
      iframeId
    } = this.props;
    delete Y.instance[iframeId];
    delete Y.instanceLoading[iframeId];
  }
  updateState(e) {
    this.setState(e);
  }
  createInnerIframe(e, t, r) {
    if (!this.outerIframeLoaded) throw Error("The Figma plugin sandbox shim iframe is not loaded, so we cannot create an iframe for the plugin UI.");
    return new I(this.outerIframeElement, e, t, r);
  }
  removeAllChildren() {
    let e = this.outerIframeElement.contentDocument?.body;
    for (; e?.firstChild;) e.removeChild(e.firstChild);
  }
  render() {
    return jsx("iframe", {
      id: this.props.iframeId,
      name: "Shim Plugin Iframe",
      title: "Shim Plugin Iframe",
      ref: this.setOuterIframeRef,
      style: {
        width: this.props.fillParent ? "100%" : this.props.width ?? this.state.width,
        height: this.props.fillParent ? "100%" : this.state.height,
        display: this.state.visible ? "block" : "none",
        pointerEvents: this.props.dragging || this.state.stopPointerEvents ? "none" : "auto",
        colorScheme: "initial"
      },
      allow: "",
      src: "/plugin-sandbox"
    });
  }
}
export const j = $$S0;