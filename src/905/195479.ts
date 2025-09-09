import { isDevEnvironment, getInitialOptions, isLocalCluster, isStagingCluster } from "../figma_app/169182";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { WJ } from "../figma_app/671547";
import { j } from "../905/813868";
import { U } from "../905/424668";
import { M } from "../905/994901";
import { KJ, LU } from "../figma_app/916560";
import { isInteractionPathCheck } from "../figma_app/897289";
async function m(e, t) {
  let {
    widgetNodeID,
    widgetRunPromise
  } = j({
    pluginID: e.pluginID,
    widgetName: e.widgetName,
    pluginVersionID: null,
    basicOverrides: {
      pasteUrl: t
    },
    triggeredFrom: "paste_from_url"
  });
  if (!widgetRunPromise || !widgetNodeID) return {
    status: "error",
    error: "Not allowed to run widget in current state",
    nodeID: null
  };
  try {
    await widgetRunPromise;
    return {
      status: "success",
      nodeID: widgetNodeID
    };
  } catch (e) {
    Fullscreen.deleteNode(widgetNodeID);
    return {
      status: "error",
      error: e,
      nodeID: null
    };
  }
}
async function h(e, t) {
  let i;
  try {
    i = await U.getVersions({
      widgetId: e.pluginID
    });
  } catch (e) {
    return {
      status: "error",
      error: e,
      nodeID: null
    };
  }
  if (200 !== i.status) return {
    status: "error",
    error: `response failed with error code ${i.status}`,
    nodeID: null
  };
  let n = i.data.meta?.plugin?.current_plugin_version_id;
  if (!n) return {
    status: "error",
    error: "version does not exist for widget",
    nodeID: null
  };
  let {
    widgetNodeID,
    widgetRunPromise
  } = permissionScopeHandler.user("paste-widget", () => j({
    pluginID: e.pluginID,
    widgetName: e.widgetName,
    pluginVersionID: n,
    basicOverrides: {
      pasteUrl: t
    },
    triggeredFrom: "paste_from_url"
  }));
  if (!widgetRunPromise || !widgetNodeID) return {
    status: "error",
    error: "Not allowed to run widget in current state",
    nodeID: null
  };
  try {
    await widgetRunPromise;
    return {
      status: "success",
      nodeID: widgetNodeID
    };
  } catch (e) {
    return {
      status: "error",
      error: e,
      nodeID: widgetNodeID
    };
  }
}
let g = createOptimistThunk(async (e, {
  widgetInfo: t,
  fallbackInfo: i,
  url: a,
  clipboardText: l
}) => {
  let c = await h(t, a);
  if ("error" === c.status) {
    let t = M({
      clipboardText: l,
      url: a,
      isTextIframe: !1,
      entrypoint: WJ.PASTE
    });
    if (c.nodeID && (Fullscreen.deleteNode(c.nodeID), e.dispatch(VisualBellActions.dequeue({
      matchType: "plugins-status"
    }))), getFeatureFlags().widgets_paste_local_on_fail && isDevEnvironment() && i) {
      "error" === (await m(i, a)).status && e.dispatch(t);
      return;
    }
    e.dispatch(t);
  }
});
let A = "1094384373580076374";
let y = {
  pluginID: "1098405969270214551",
  widgetName: "Asana"
};
let b = {
  pluginID: "1094001923188252679",
  widgetName: "Jira"
};
let v = {
  pluginID: "1420720697481932939",
  widgetName: "Confluence"
};
let I = {
  pluginID: "1411297073589775977",
  widgetName: "Confluence (Staging)"
};
let E = {
  local: {
    pluginID: A,
    widgetName: "Asana (Local Dev)"
  },
  staging: {
    pluginID: A,
    widgetName: "Asana"
  },
  prod: y,
  gov: y
};
let x = {
  local: {
    pluginID: "1131307276886895456",
    widgetName: "Jira (Local Dev)"
  },
  staging: {
    pluginID: "1098069144593389942",
    widgetName: "Jira"
  },
  prod: b,
  gov: b
};
let S = e => e.includes("jira") || e.includes("atlassian");
export function $$w0(e, t, i) {
  let r = t.trim().split("\n");
  let a = r.map(e => KJ(e.trim()));
  if (!a.every(e => !!e)) {
    let e = LU(i, t);
    if (!e) return [{
      valid: !1,
      reason: "At least one line of text was not a valid URL or IFrame"
    }];
    a = e;
  }
  let s = a.map(e => function (e) {
    if (isInteractionPathCheck() && e.includes("figmainteractiontest")) {
      let e = {
        pluginID: "TEST_PASTE_URL_TO_WIDGET",
        widgetName: "TestWidget"
      };
      return {
        currentWidget: e,
        fallbackWidget: e
      };
    }
    let t = getInitialOptions().cluster_name || "unknown";
    return "local" !== t && "staging" !== t && "prod" !== t && "gov" !== t ? null : !function (e) {
      try {
        let t = new URL(e);
        if ("https://app.asana.com" !== t.origin) return !1;
        let i = t.pathname.match(/\/0\/(\d+)(?:\/(\d+))?/);
        let n = t.pathname.startsWith("/1/") && t.pathname.match(/\/project\/(\d+)(?:\/task\/(\d+))?/);
        let r = t.pathname.match(/\/0\/portfolio\/(\d+)/);
        return !!(i || r || n);
      } catch (e) {
        return !1;
      }
    }(e) ? /^https:\/\/([^\.]+)\.atlassian\.net\/wiki\/spaces\/([A-Za-z0-9_-]+)\/pages\/(.*)$/.test(e) || /^https:\/\/([^\.]+)\.atlassian\.net\/wiki\/l\/c\/(.*)$/.test(e) || /^https:\/\/([^\.]+)\.atlassian\.net\/wiki\/l\/cp\/(.*)$/.test(e) || /^https:\/\/([^\.]+)\.atlassian\.net\/wiki\/l\/cw\/(.*)$/.test(e) || /^https:\/\/([^\.]+)\.atlassian\.net\/wiki\/x\/(.*)$/.test(e) || /^https:\/\/([^\.]+)\.atlassian\.net\/wiki\/spaces\/~([A-Za-z0-9]+)\/pages\/(.*)$/.test(e) ? isLocalCluster() || isStagingCluster() ? null : {
      currentWidget: v,
      fallbackWidget: null
    } : /^https:\/\/([^\.]+)\.jira-dev\.com\/wiki\/spaces\/([A-Za-z0-9_-]+)\/pages\/(.*)$/.test(e) || /^https:\/\/([^\.]+)\.jira-dev\.com\/wiki\/l\/cp\/(.*)$/.test(e) || /^https:\/\/([^\.]+)\.jira-dev\.com\/wiki\/x\/(.*)$/.test(e) || /^https:\/\/([^\.]+)\.jira-dev\.com\/wiki\/spaces\/~([A-Za-z0-9]+)\/pages\/(.*)$/.test(e) ? isLocalCluster() || isStagingCluster() ? null : {
      currentWidget: I,
      fallbackWidget: null
    } : S(e) ? {
      currentWidget: x[t],
      fallbackWidget: x.local
    } : null : {
      currentWidget: E[t],
      fallbackWidget: E.local
    };
  }(e.url));
  if (!s.every(e => !!e)) return [{
    valid: !1,
    reason: "At least one link did not have associated widget information"
  }];
  let o = new Map();
  s.forEach((e, t) => {
    if (!e) return;
    let {
      currentWidget,
      fallbackWidget
    } = e;
    let s = o.get(currentWidget.pluginID);
    let l = r[t];
    let d = a[t].url;
    s ? (s.texts.push(l), s.urls.push(d)) : s = {
      currentWidget,
      fallbackWidget,
      texts: [l],
      urls: [d]
    };
    o.set(currentWidget.pluginID, s);
  });
  let l = [];
  o.forEach(({
    currentWidget: t,
    fallbackWidget: i,
    texts: r,
    urls: a
  }) => {
    let s = function (e, t, i, r, a) {
      let s = isLocalCluster() && !isInteractionPathCheck();
      let o = isInteractionPathCheck() && !i.includes("paste_with_version_check");
      if (s || o) {
        let {
          widgetNodeID
        } = j({
          pluginID: r.pluginID,
          widgetName: r.widgetName,
          pluginVersionID: null,
          basicOverrides: {
            pasteUrl: i
          }
        });
        return widgetNodeID ? {
          valid: !0
        } : {
          valid: !1,
          reason: "Could not create widget"
        };
      }
      e(g({
        widgetInfo: r,
        fallbackInfo: a,
        url: i,
        clipboardText: t
      }));
      return {
        valid: !0
      };
    }(e, r.join("\n"), a.join("\n"), t, i);
    l.push(s);
  });
  return l;
}
export const Cg = $$w0;