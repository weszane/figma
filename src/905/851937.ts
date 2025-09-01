import { ServiceCategories as _$$e } from "../905/165054";
import { _gJ } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { fm } from "../905/236856";
import { sx } from "../905/449184";
import { k as _$$k2 } from "../905/651849";
import { eD } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { isE2ETraffic, isDevEnvironment } from "../figma_app/169182";
import { $D } from "../905/11";
import { nl } from "../figma_app/257275";
import { t as _$$t } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { Lk, x as _$$x } from "../figma_app/639711";
import { RH, gU } from "../figma_app/147952";
import { B as _$$B } from "../905/808775";
import { Y5 } from "../figma_app/455680";
import { ax } from "../figma_app/741237";
import { T as _$$T } from "../905/858738";
import { Eh, cb } from "../figma_app/12796";
import { F as _$$F2 } from "../905/827944";
import { fR, Ms, qH, T as _$$T2, W4, UH, FB, ld, MB, c2, VQ, WC, CA } from "../figma_app/300692";
import { C3, SH } from "../figma_app/790714";
import { m3 } from "../figma_app/45218";
import { G3 } from "../905/272080";
import { Bu } from "../figma_app/53721";
import { ZQ } from "../figma_app/155287";
import { d4 } from "../figma_app/474636";
import { I as _$$I, o8, r_ } from "../905/622391";
import { $$aE2, $$ap1 } from "../905/472793";
import { NoOpVm } from "../905/700654";
import { gH, Yx, Ew } from "../figma_app/985200";
import { j as _$$j } from "../905/535481";
import { pN } from "../905/571565";
import { P as _$$P } from "../905/545265";
import { JX } from "../905/104019";
import { n as _$$n } from "../905/347702";
import { yA } from "../905/642684";
import { hM, p1, Tj, Yd, Nq } from "../905/266529";
import { z as _$$z } from "../905/751771";
import { ls, a7 } from "../905/917898";
import { R as _$$R } from "../figma_app/612938";
import { y as _$$y } from "../905/916933";
import { et as _$$et, wY, yp, XY, iu, mv, lM, qR, Kd, XF, Mt, nT } from "../905/753206";
import { x4 } from "../905/657224";
import { pS } from "../905/588985";
let n;
let r;
let a;
let $ = `const __html__ = (() => {
  let realString = null;
  const getRealString = () => {
    if (realString == null) {
      realString = figma.getHTMLString();
    }
    return realString;
  };
  return new Proxy(
    { __html__: true },
    {
      get(_, prop) {
        if (prop === '__html__') {
          return true;
        }
        if (typeof String.prototype[prop] === 'function') {
          return (...args) => String.prototype[prop].apply(getRealString(), args);
        }
        return getRealString()[prop];
      },
    },
  );
})();`.replace(/\n/g, " ");
async function Z(e) {
  let t;
  let i;
  let {
    apiVersion,
    checkSyntax,
    code,
    command,
    deferRunEvent,
    disableSilenceConsole,
    enablePrivatePluginApi,
    enableProposedApi,
    errorHandler,
    isLocal,
    isWidget,
    name,
    noConsoleError,
    openFileKey,
    parameterValues,
    permissions,
    pluginCounter,
    queryMode,
    securityCheckReporter,
    showRuntimeErrors,
    stats,
    testMessageHandler = n,
    triggeredFrom,
    userID,
    vmType,
    widgetAction,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls,
    enableNativeJsx,
    enableResponsiveSetHierarchyMutations
  } = e;
  let F = isWidget ? "widget" : "plugin";
  if (stats.markTime("timeToRunPluginCodeInternalMs"), "0.6.0" === apiVersion || "1.0.0" === apiVersion); else throw Error(`Unknown ${F} api version "${apiVersion}"`);
  if (showRuntimeErrors) {
    let e;
    e = 0;
    let i = t => {
      let i = t.startsWith("Error") ? t.replace("Error", "error") : t;
      let n = "";
      ++e > 1 && (n = ` (${e} errors total)`);
      isWidget ? fR(`Widget ${i}${n}`) : fR(`Plugin ${i}${n}`);
    };
    t = errorHandler ? e => {
      i(e);
      errorHandler(e);
    } : i;
  } else t = errorHandler || (() => { });
  let M = code;
  if (!getFeatureFlags().plugins_remove_syntax_checking && !1 !== checkSyntax) {
    let e;
    try {
      e = await _$$z(code);
    } catch (e) { }
    if (e && !1 === e.success) {
      let {
        lineNumber,
        column,
        description
      } = e.error;
      let r = `Syntax error on line ${lineNumber}: ${description}`;
      let a = code.split("\n");
      let o = "";
      if (lineNumber >= 1 && lineNumber <= a.length && column >= 1 && column < 100) {
        let e = a[lineNumber - 1].replace(/\t/g, " ").slice(0, column + 100);
        o += `
${e}
${" ".repeat(column - 1)}^`;
      }
      noConsoleError || yA(r + o);
      return Error(r);
    }
    "realms" === vmType && e && e.success && (M = Ms(code, e.rangesToRemove));
  }
  let j = null;
  ({
    html: j,
    code: M
  } = (i = null, {
    code: M.replace(/^const __html__ = ("(.*?)([^\\]|^)");/, (e, t) => (i = JSON.parse(t.split('"+"').join("")), $)),
    html: i
  }));
  return ls({
    allowedDomains: e.allowedDomains,
    apiVersion,
    capabilities: e.capabilities,
    checkSyntax: !1,
    code: M,
    command,
    deferRunEvent,
    disableSilenceConsole,
    enablePrivatePluginApi,
    enableProposedApi,
    errorHandler: t,
    isLocal,
    isWidget,
    name,
    openFileKey,
    parameterValues,
    permissions,
    pluginCounter,
    pluginID: e.pluginID,
    pluginRunID: "",
    pluginVersionID: e.pluginVersionID,
    queryMode,
    securityCheckReporter,
    showLaunchErrors: !1,
    showRuntimeErrors: !1,
    stats,
    testMessageHandler,
    titleIconURL: e.titleIconURL,
    triggeredFrom,
    userID,
    vmType,
    widgetAction,
    editorType: e.editorType,
    html: j,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls: !!allowIncrementalUnsafeApiCalls,
    enableNativeJsx,
    enableResponsiveSetHierarchyMutations
  });
}
async function ei(e) {
  let t;
  let i = `<script>
  function doIframeSecurityChecks() {
    // Edge seems to change the URL and origin of the page when you document.write()
    // a whole new page. The new URL looks something like http://{abc123.abcd-1234-5678-0123}/
    // with the {} escaped using percent encoding.
    if (document.location.origin !== "null" &&
        !/^https?\\:\\/\\/\\%7b[a-f0-9.-]+\\%7d$/.test(document.location.origin)) {
      return "Failed origin check: " + document.location.origin
    }
    // This doesn't ensure that we're sandboxed. But we want this to be true
    if (!document.location.href.startsWith('data:text/html,') &&
        !document.location.href.startsWith('data:text/html;base64,') &&
        !/^https?\\:\\/\\/\\%7b[a-f0-9.-]+\\%7d\\/$/.test(document.location.href)) {
      return "Failed location.href check: " + document.location.href
    }
    try {
      if (localStorage && localStorage["figma-extension-guard"] !== undefined) {
        return "Failed localStorage check"
      }
    } catch(ex) {}
    try {
      window.parent.document.body
      return "Failed DOM access check"
    } catch(ex) {}
    try {
      window.parent.someRandomProperty
      return "Failed JS heap access check"
    } catch(ex) {}
    return "ok"
  }
  let result
  try {
    result = doIframeSecurityChecks()
  } catch(ex) {
    result = ex + ''
  }
  window.parent.postMessage({ pluginMessage: result }, '*')
  </script>`;
  let n = `
    function doMainThreadSecurityChecks() {
      // Modify a grab bag of prototype objects to try to modify prototypes outside
      // of the sandbox.
      // Grab prototype objects both through global property accesses, like
      // Array.prototype, through syntax access, like [].__proto__, and through
      // Object helpers, like Object.getPrototypeOf({}), in case
      // the realm API accidentally protects one but not the other.
      // Also grab prototypes for things that don't have named constructors, like
      // GeneratorFunction
      for (let obj of [Array.prototype,
                       String.prototype,
                       Function.prototype,
                       Object.prototype,
                       Date.prototype,
                       [].__proto__,
                       "".__proto__,
                       Math.__proto__,
                       (new Date()).__proto__,
                       ({}).__proto__,
                       (() => {}).__proto__,
                       (function*(){}).__proto__,
                       "(async () => {}).__proto__",
                       "(async function*(){}).__proto__",
                       Object.getPrototypeOf([]),
                       Object.getPrototypeOf(""),
                       Object.getPrototypeOf(Math),
                       Object.getPrototypeOf(new Date()),
                       Object.getPrototypeOf({}),
                       Object.getPrototypeOf(() => {}),
                       Object.getPrototypeOf(function*(){}),
                       "Object.getPrototypeOf(async () => {})",
                       "Object.getPrototypeOf(async function*(){})",
                       ]) {
        // Some syntaxes might not work in all browser versions. But we still want to protect the
        // ones where it does work.
        if (typeof obj === 'string') {
          try {
            obj = eval(obj)
          } catch(ex) {
            continue
          }
        }
        // Don't make it enumerable since adding enumerable properties on Object.prototype
        // will completely break Figma. And we want a breach here to prevent plugins from
        // running, not to prevent Figma from continuing to work
        Object.defineProperty(obj, 'hackedSandbox', {
          value: true,
          configurable: true,
          enumerable: false,
        })
      }
      function swallowErrors(cb) {
        try { return cb() }
        catch (e) { return false }
      }
      if (swallowErrors(() => window) ||
          swallowErrors(() => document) ||
          swallowErrors(() => localStorage)) {
        return "Browser globals accessible"
      }
      // Check if you can use eval or Function to break out of the sandbox
      if (swallowErrors(() => eval('window')) ||
          swallowErrors(() => eval('document')) ||
          swallowErrors(() => eval('localStorage')) ||
          swallowErrors(() => new Function('return window')()) ||
          swallowErrors(() => new Function('return document')()) ||
          swallowErrors(() => new Function('return localStorage')())) {
        return "Browser globals accessible"
      }
      if (figma.showUI.__proto__ !== Function.prototype) {
        return "APIs use unexpected prototype"
      }
      if ([].__proto__ !== Array.prototype) {
        return "Array use unexpected prototype"
      }
      return "ok"
    }
    let result
    try {
      result = doMainThreadSecurityChecks()
    } catch(ex) {
      result = ex + ''
    }
    if (result !== "ok") {
      reportSecurityResults(result)
      figma.closePlugin()
    }
    figma.showUI(${JSON.stringify(i)}, { visible: false })
    figma.ui.onmessage = result => {
      reportSecurityResults(result)
      figma.closePlugin()
    }
  `;
  x4 && (x4["figma-extension-guard"] = "guard");
  let r = "";
  let {
    runResult
  } = await Z({
    allowedDomains: gH,
    apiVersion: pS,
    capabilities: [],
    checkSyntax: !1,
    code: n,
    command: "",
    disableSilenceConsole: !0,
    enablePrivatePluginApi: !1,
    enableProposedApi: !1,
    errorHandler: e => {
      t = t || e || "unknown error";
    },
    isLocal: !0,
    isWidget: !1,
    name: "Security Checker",
    openFileKey: "",
    permissions: qH.none(),
    pluginCounter: -1,
    pluginID: "",
    pluginRunID: "",
    pluginVersionID: "",
    queryMode: !1,
    securityCheckReporter: e => {
      r = e;
    },
    showLaunchErrors: !1,
    showRuntimeErrors: !1,
    stats: new _$$P(),
    titleIconURL: "",
    triggeredFrom: void 0,
    userID: "",
    vmType: e,
    editorType: [],
    html: null,
    incrementalSafeApi: !1,
    enableNativeJsx: !1,
    enableResponsiveSetHierarchyMutations: !1
  });
  await runResult;
  let s = !1;
  for (let e of [Array.prototype, Function.prototype, Object.prototype, Date.prototype, Object.getPrototypeOf(function*() {
    yield 0;
  }), "Object.getPrototypeOf(async () => {})", "Object.getPrototypeOf(async function*(){ yield 0 })"]) {
    if ("string" == typeof e) try {
      e = (0, eval)(e);
    } catch (e) {
      continue;
    }
    e.hackedSandbox && (s = !0, delete e.hackedSandbox);
  }
  if (s) throw Error("Prototypes not isolated");
  if (void 0 !== t) throw Error("Security checks triggered error");
  if ("ok" !== r) throw Error(r);
}
async function en(e, t) {
  await a7(e);
  await Promise.all([Yx.getInstanceLoading(Ew({
    triggeredFrom: void 0
  })), Yx.getInstanceLoading(Ew({
    triggeredFrom: t
  }))]);
  "realms" === e && (r || (r = ei("realms").catch(e => {
    sx("Plugin Sandbox Failure", {
      error: e + "",
      vm: "realms"
    });
    return e;
  })), await r);
  "cppvm" === e && (a || (a = ei("cppvm").catch(e => {
    sx("Plugin Sandbox Failure", {
      error: e + "",
      vm: "cppvm"
    });
    return e;
  })), await a);
}
class er extends Error {
  constructor(e) {
    super(e);
  }
}
export function $$ea2(e) {
  let t = debugState.getState();
  let i = Eh(t) && cb(t);
  let n = isE2ETraffic() || i;
  if (!n) {
    if (_$$et()) {
      wY().then(JX);
      return;
    }
    JX();
    return;
  }
  yp($$ea2);
  try {
    if (_$$et()) return;
    n && function(e) {
      let t = new NoOpVm();
      let i = [() => t.destroy(), () => JX, () => Y5.triggerAction("commit")];
      let n = () => {
        let e;
        for (let t of i) try {
          t();
        } catch (t) {
          e || (e = t);
        }
        if (i = [], e) throw e;
      };
      let r = () => (n(), Promise.resolve());
      JX();
      let a = $$aE2();
      $$ap1(t, {
        ...a,
        openFileKey: e.openFileKey,
        userID: e.userID,
        closePlugin: r,
        addShutdownAction: e => {
          -1 === i.indexOf(e) && i.push(e);
        },
        incrementalSafeApi: !0,
        allowIncrementalUnsafeApiCalls: !0,
        enableResponsiveSetHierarchyMutations: !0
      });
      XY(r);
    }(e);
  } catch (e) {
    isDevEnvironment() && "fullscreen" === t.selectedView.view && console.error(e);
  }
}
export function $$es1({
  pluginID: e,
  widgetNodeID: t
}) {
  return hM() && void 0 !== iu.currentWidget && iu.currentWidget.pluginID === e && iu.currentWidget.widgetNodeID === t;
}
export let $$eo4 = _$$n(async e => {
  let t = mv();
  iu.currentPluginRunID = t;
  let i = new _$$P();
  iu.stats = i;
  let n = e.plugin;
  sx("Plugin Start Initiated", {
    pluginID: n.plugin_id,
    trigger: e.triggeredFrom,
    runMode: e.runMode,
    isWidget: e.isWidget,
    command: e.command,
    fileKey: e.openFileKey,
    orgId: _$$I() ?? null,
    pluginRunID: t,
    editorType: _$$T2(),
    ...(ZQ(n) ? {
      pluginVersionID: "",
      source: "development",
      name: "<local plugin>"
    } : {
      pluginVersionID: n.id,
      source: "imported",
      name: n.name
    })
  });
  let {
    isCancelled
  } = await i.markDuration("waitForAllPagesMs", async () => await _$$y(e));
  if (!isCancelled) {
    if (W4(e.triggeredFrom)) {
      if (!UH(e.plugin)) throw Error('Plugin not compatible to run in dev handoff panel. Make sure you have "dev" as an editorType and "inspect" as a capability in your manifest.json.');
      zl.set(d4, "LOADING");
      ax(_gJ.PLUGIN);
    }
    if (FB(e.triggeredFrom)) {
      if (!ld(e.plugin)) throw Error('Plugin not compatible to run in buzz panel. Make sure you have "buzz" as an editorType in your manifest.json.');
      zl.set(d4, "LOADING");
      zl.set(Lk, _$$x.PLUGINS);
    }
    e.isWidget || e.ignoreForRunLastPlugin || C3(e);
    lM(e.plugin);
    qR(e.triggeredFrom);
    "default" === e.runMode && W4(e.triggeredFrom) && (e.runMode = "inspect");
    Kd(e.runMode);
    try {
      if (ZQ(e.plugin)) try {
        let n = await ed(e, i, e.plugin);
        await ec({
          localPlugin: e.plugin,
          runPluginArgs: e,
          stats: i,
          pluginRunID: t,
          code: n
        });
      } catch (t) {
        yA(t);
        el(t, e.isWidget);
      } else try {
        let n = await ed(e, i, e.plugin);
        await function({
          pluginVersion: e,
          runPluginArgs: t,
          stats: i,
          pluginRunID: n,
          code: r
        }) {
          let {
            command,
            queryMode,
            triggeredFrom,
            openFileKey,
            deferRunEvent,
            parameterValues,
            isWidget,
            widgetAction,
            forcePluginVersionId
          } = t;
          let f = o8();
          if (!f) throw new er(t.isWidget ? _$$t("plugins.cannot_run_widget_logged_out") : _$$t("plugins.cannot_run_plugin_logged_out"));
          if (e = {
            ...e,
            id: forcePluginVersionId || e.id
          }, iu.currentPluginRunID !== n) return;
          let _ = debugState.getState().selectedView.editorType;
          let y = {
            storeInRecentsKey: _$$B(_),
            id: e.plugin_id,
            version: e.version,
            currentUserId: o8()
          };
          isWidget ? debugState.dispatch(RH(y)) : debugState.dispatch(gU(y));
          let b = debugState.getState().publishedPlugins[e.plugin_id];
          let v = m3(b);
          let x = {
            pluginID: e.plugin_id,
            pluginVersionID: e.id,
            trigger: triggeredFrom,
            source: "imported",
            command,
            name: e.name,
            fileKey: openFileKey,
            pluginRunID: n,
            queryMode,
            deferRunEvent: !!deferRunEvent,
            runWithParameters: !!parameterValues,
            manifest: JSON.stringify(e.manifest),
            productType: Bu(_),
            isWidget,
            isMonetized: v,
            paidStatus: function(e) {
              let t = m3(e);
              let i = e?.community_resource_payment;
              return t && i ? i.status === G3.TRIALING ? "trial" : "paid" : "none";
            }(b),
            widgetAction: widgetAction ?? null,
            isReadOnly: debugState.getState().mirror.appModel.isReadOnly,
            editorType: _$$T2(),
            incrementalMode: "dynamic-page" === e.manifest.documentAccess,
            isVsCode: _$$T(),
            orgId: _$$I() ?? null
          };
          sx("Plugin Start", x, isWidget ? {
            forwardToDatadog: !0
          } : {});
          return $$ep5(em({
            runPluginArgs: t,
            manifest: e.manifest,
            stats: i,
            isLocal: !1,
            customOverrides: {
              code: r,
              name: e.name,
              openFileKey,
              permissions: qH.forInstalledPlugin(e),
              pluginID: e.plugin_id,
              pluginRunID: n,
              pluginVersionID: e.id,
              titleIconURL: e.redirect_icon_url,
              userID: f,
              enablePrivatePluginApi: !!(e.manifest.enablePrivatePluginApi && e.is_private)
            }
          }));
        }({
          pluginVersion: e.plugin,
          runPluginArgs: e,
          stats: i,
          pluginRunID: t,
          code: n
        });
      } catch (t) {
        t instanceof er || $D(_$$e.EXTENSIBILITY, t);
        el(t, e.isWidget);
      }
    } finally {
      lM(null);
      qR(null);
      Kd(null);
    }
  }
});
function el(e, t) {
  let i = (e instanceof er ? e?.message : void 0) ?? (t ? _$$t("plugins.error_loading_environment_widget") : _$$t("plugins.error_loading_environment_plugin"));
  fR(i);
}
async function ed(e, t, i) {
  let n = ZQ(i);
  try {
    Y5.dispatch(_$$F.enqueue({
      message: _$$t("plugins.loading_plugin", {
        pluginName: i.name
      }),
      icon: zX.SPINNER,
      type: "loading-plugin",
      delay: 200,
      timeoutOverride: 1 / 0
    }));
    let r = n ? r_() : "cppvm";
    let [a, s] = await Promise.all([(async () => await (n ? i.testCode ? i.testCode : MB(i.localFileId) : t.markDuration("pluginCodeDownloadedMs", async () => await _$$F2.getAndCache(i, _$$I()))))(), (async () => {
      await t.markDuration("loadSandboxAndRunSecurityChecksMs", async () => {
        try {
          await en(r, e.triggeredFrom);
        } catch (i) {
          let t = e.isWidget ? _$$t("plugins.error_loading_environment_widget") : _$$t("plugins.error_loading_environment_plugin");
          throw new er(t);
        }
      });
    })()]);
    if (!a) {
      let t = e.isWidget ? _$$t("plugins.no_code_found_for_widget") : _$$t("plugins.no_code_found_for_plugin");
      throw new er(t);
    }
    return a;
  } finally {
    Y5.dispatch(_$$F.dequeue({
      matchType: "loading-plugin"
    }));
  }
}
async function ec({
  localPlugin: e,
  runPluginArgs: t,
  pluginRunID: i,
  stats: n,
  code: r
}) {
  let {
    command,
    isWidget,
    widgetAction,
    queryMode,
    triggeredFrom,
    openFileKey,
    deferRunEvent,
    parameterValues
  } = t;
  let g = o8();
  if (!g) throw new er(isWidget ? _$$t("plugins.cannot_run_widget_logged_out") : _$$t("plugins.cannot_run_plugin_logged_out"));
  let f = debugState.getState().selectedView.editorType;
  if (e.manifest) {
    let t = {
      pluginID: e.manifest.id || "",
      pluginVersionID: "",
      trigger: triggeredFrom,
      source: "development",
      command,
      name: "<local plugin>",
      fileKey: openFileKey,
      pluginRunID: i,
      queryMode,
      deferRunEvent: !!deferRunEvent,
      runWithParameters: !!parameterValues,
      manifest: JSON.stringify(e.manifest),
      productType: Bu(f),
      isWidget,
      widgetAction: widgetAction ?? null,
      isReadOnly: debugState.getState().mirror.appModel.isReadOnly,
      editorType: _$$T2(),
      incrementalMode: "dynamic-page" === e.manifest.documentAccess,
      isVsCode: _$$T(),
      orgId: _$$I() ?? null
    };
    sx("Plugin Start", t, isWidget ? {
      forwardToDatadog: !0
    } : {});
  }
  let _ = {
    storeInRecentsKey: _$$B(f),
    id: String(e.localFileId),
    isDevelopment: !0,
    version: "",
    currentUserId: o8()
  };
  isWidget ? debugState.dispatch(RH(_)) : debugState.dispatch(gU(_));
  try {
    let a = e.testCode ? e.manifest : await c2(e.localFileId, {
      resourceType: isWidget ? "widget" : "plugin",
      ignoreMissingEditorType: !0,
      isPublishing: !1
    });
    let o = em({
      runPluginArgs: t,
      manifest: a,
      stats: n,
      isLocal: !0,
      customOverrides: {
        code: r,
        openFileKey,
        permissions: qH.forLocalPlugin(e),
        enablePrivatePluginApi: !!a.enablePrivatePluginApi,
        pluginID: a.id || "",
        pluginRunID: i,
        pluginVersionID: "",
        titleIconURL: "",
        userID: g
      }
    });
    await $$ep5(o);
  } catch (t) {
    yA(t);
    pN({
      shouldShowVisualBell: !0
    });
    let e = (t instanceof er ? t?.message : void 0) ?? (isWidget ? _$$t("plugins.error_occured_while_running_widget") : _$$t("plugins.error_occured_while_running_plugin"));
    fR(e);
  }
}
export let $$eu3 = _$$n(({
  newTriggeredFrom: e
} = {
    newTriggeredFrom: "runlast"
  }) => {
  let t = SH();
  t && VQ(t) && (e && (t.triggeredFrom = e), _$$R.instance.enqueue({
    mode: "run-forever",
    runPluginArgs: t
  }));
});
export function $$ep5(e) {
  if (iu.currentPluginRunID !== e.pluginRunID) return Promise.resolve();
  _$$j() && _$$k2.debug("[Plugin API]", `Plugin run ${e.pluginRunID} started`, e);
  let t = e.stats;
  t.markTime("timeToRunPluginCodeStartMs");
  let i = e.isWidget ? "widget" : "plugin";
  WC();
  let n = p1();
  Tj(n);
  Yd();
  let r = new Promise(async (t, i) => {
    if (await XF({
      overriddenBy: e.triggeredFrom
    }), Nq() !== n) {
      t();
      return;
    }
    let r = () => (t(), Promise.resolve());
    Mt(r);
    try {
      if (e.isWidget) {
        let {
          widgetNodeID
        } = JSON.parse(e.command);
        iu.currentWidget = {
          widgetNodeID,
          pluginID: e.pluginID
        };
      } else iu.currentWidget = void 0;
    } catch {
      iu.currentWidget = void 0;
    }
    try {
      if (nl() && (await en("cppvm", e?.triggeredFrom)), eD && CA(e.permissions.permissions) && (iu.setMediaEnabled = !0, e.permissions.trustedPluginOrigin && eD && (iu.allowedPluginOrigin = e.permissions.trustedPluginOrigin, await eD.addAllowedPluginOrigin(e.permissions.trustedPluginOrigin))), await fm(0), Nq() !== n) {
        t();
        return;
      }
      let {
        runResult,
        closePlugin
      } = await Z({
        ...e,
        pluginCounter: n,
        html: null
      });
      if (Nq() === n) {
        Mt(closePlugin, {
          ignorePreviousCloseFunc: r
        });
        r = closePlugin;
        let e = await runResult;
        e && Y5.dispatch(_$$F.enqueue({
          type: "plugins-supplied-message",
          message: e
        }));
      }
      t();
    } catch (e) {
      i(e);
    } finally {
      n === Nq() && (Mt(null, {
        ignorePreviousCloseFunc: r
      }), nT());
    }
  }).catch(t => {
    if (e.noConsoleError || yA(t), e.showLaunchErrors) {
      let i = (t instanceof er ? t?.message : void 0) ?? (e.isWidget ? _$$t("plugins.error_occured_while_running_widget") : _$$t("plugins.error_occured_while_running_plugin"));
      fR(i);
    } else throw t;
  });
  let a = () => {
    let n = {
      pluginID: e.pluginID,
      pluginVersionID: e.pluginVersionID,
      pluginRunID: e.pluginRunID,
      apiUsage: t.callCountsToJSON(),
      perfMetrics: t.perfMetricsToJSON(),
      ranWithParameters: t.ranWithParameters(),
      parameterCount: t.parameterCount(),
      isWidget: e.isWidget,
      trigger: e.triggeredFrom,
      stackInvariants: t.stackInvariantFieldsToJSON(),
      incrementalMode: e.incrementalSafeApi,
      numPagesLoaded: t.getNumPagesLoaded(),
      ...t.getTimingMarks(),
      totalValidationDuration: t.totalValidationDuration(),
      validationCount: t.validationCount(),
      clientStorageUsageDelta: t.clientStorageUsageDelta(),
      totalClientStorageUsage: t.totalClientStorageUsage(),
      jsvmCppFromManifest: !!getFeatureFlags().ext_jsvm_cpp_upgrade
    };
    let r = {
      pluginDataHistogram: t.pluginDataHistogramToJSON(),
      pluginDataTotalSetSize: t.pluginDataTotalSetSize(),
      sharedPluginDataTotalSetSize: t.sharedPluginDataTotalSetSize(),
      pluginDataMaximumKeyCountExceeded: t.pluginDataMaximumKeyCountExceeded()
    };
    _$$j() && _$$k2.debug("[Plugin API]", `Plugin run ${e.pluginRunID} finished`, {
      pluginEndEventData: n,
      setPluginDataStats: r
    });
    sx("Plugin End", {
      ...n,
      ...r
    }, {
      forwardToDatadog: !0
    });
    e.pluginID && t.hasResizedNodeWithMissingFont() && (sx("Plugin resized node with missing font", {
      pluginID: e.pluginID
    }), console.warn(`This ${i} resized a node with missing fonts. Text layout for node will not be applied.`));
  };
  r.then(a, a);
  return r;
}
function em({
  manifest: e,
  isLocal: t,
  stats: i,
  runPluginArgs: n,
  customOverrides: r
}) {
  return {
    name: e.name,
    allowedDomains: function(e, t) {
      let {
        networkAccess
      } = e;
      return networkAccess ? t && networkAccess.devAllowedDomains ? networkAccess.devAllowedDomains.includes("*") || networkAccess.allowedDomains.includes("none") ? networkAccess.devAllowedDomains : Array.from(new Set([...networkAccess.devAllowedDomains, ...networkAccess.allowedDomains])) : networkAccess.allowedDomains : gH;
    }(e, t),
    apiVersion: e.api,
    capabilities: e.capabilities ?? [],
    stats: i,
    checkSyntax: t,
    isLocal: t,
    disableSilenceConsole: t,
    enableProposedApi: t && !!e.enableProposedApi,
    showLaunchErrors: !t,
    showRuntimeErrors: t,
    vmType: t ? r_() : "cppvm",
    ...r,
    command: n.command,
    queryMode: n.queryMode,
    triggeredFrom: n.triggeredFrom,
    openFileKey: n.openFileKey,
    deferRunEvent: n.deferRunEvent,
    parameterValues: n.parameterValues,
    isWidget: n.isWidget,
    editorType: n.plugin.manifest.editorType ?? [],
    incrementalSafeApi: "dynamic-page" === e.documentAccess,
    enableNativeJsx: !!getFeatureFlags().ext_full_jsx,
    enableResponsiveSetHierarchyMutations: !0
  };
}
export { hM } from "../905/266529";
export const mK = $$es1;
export const s2 = $$ea2;
export const A9 = $$eu3;
export const bT = $$eo4;
export const E9 = $$ep5; 
