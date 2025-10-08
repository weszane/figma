import { permissionScopeHandler } from "../905/189185";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { widgetAPIClient } from "../905/424668";
import { getFeatureFlags } from "../905/601108";
import { createWidget } from "../905/813868";
import { pasteEmbedThunk } from "../905/994901";
import { getInitialOptions, isDevEnvironment, isLocalCluster, isStagingCluster } from "../figma_app/169182";
import { PluginModalTypeEnum } from "../figma_app/671547";
import { Fullscreen } from "../figma_app/763686";
import { isInteractionPathCheck } from "../figma_app/897289";
import { parseAsanaEmbed, parseEmbedInput } from "../figma_app/916560";
/**
 * Runs a widget without version check (for local dev fallback).
 * Original: m
 */
async function runWidgetWithoutVersionCheck(widgetInfo: {
  pluginID: string;
  widgetName: string;
}, pasteUrl: string) {
  const {
    widgetNodeID,
    widgetRunPromise
  } = createWidget({
    pluginID: widgetInfo.pluginID,
    widgetName: widgetInfo.widgetName,
    pluginVersionID: null,
    basicOverrides: {
      pasteUrl
    },
    triggeredFrom: "paste_from_url"
  });
  if (!widgetRunPromise || !widgetNodeID) {
    return {
      status: "error",
      error: "Not allowed to run widget in current state",
      nodeID: null
    };
  }
  try {
    await widgetRunPromise;
    return {
      status: "success",
      nodeID: widgetNodeID
    };
  } catch (error) {
    Fullscreen.deleteNode(widgetNodeID);
    return {
      status: "error",
      error,
      nodeID: null
    };
  }
}

/**
 * Runs a widget with version check.
 * Original: h
 */
async function runWidgetWithVersionCheck(widgetInfo: {
  pluginID: string;
  widgetName: string;
}, pasteUrl: string) {
  let response;
  try {
    response = await widgetAPIClient.getVersions({
      widgetId: widgetInfo.pluginID
    });
  } catch (error) {
    return {
      status: "error",
      error,
      nodeID: null
    };
  }
  if (response.status !== 200) {
    return {
      status: "error",
      error: `response failed with error code ${response.status}`,
      nodeID: null
    };
  }
  const versionId = response.data.meta?.plugin?.current_plugin_version_id;
  if (!versionId) {
    return {
      status: "error",
      error: "version does not exist for widget",
      nodeID: null
    };
  }
  const {
    widgetNodeID,
    widgetRunPromise
  } = permissionScopeHandler.user("paste-widget", () => createWidget({
    pluginID: widgetInfo.pluginID,
    widgetName: widgetInfo.widgetName,
    pluginVersionID: versionId,
    basicOverrides: {
      pasteUrl
    },
    triggeredFrom: "paste_from_url"
  }));
  if (!widgetRunPromise || !widgetNodeID) {
    return {
      status: "error",
      error: "Not allowed to run widget in current state",
      nodeID: null
    };
  }
  try {
    await widgetRunPromise;
    return {
      status: "success",
      nodeID: widgetNodeID
    };
  } catch (error) {
    return {
      status: "error",
      error,
      nodeID: widgetNodeID
    };
  }
}

/**
 * Thunk for handling paste operations with fallback logic.
 * Original: g
 */
const pasteWidgetThunk = createOptimistThunk(async (dispatch, {
  widgetInfo,
  fallbackInfo,
  url,
  clipboardText
}) => {
  const result = await runWidgetWithVersionCheck(widgetInfo, url);
  if (result.status === "error") {
    const embedThunk = pasteEmbedThunk({
      clipboardText,
      url,
      isTextIframe: false,
      entrypoint: PluginModalTypeEnum.PASTE
    });
    if (result.nodeID) {
      Fullscreen.deleteNode(result.nodeID);
      dispatch(VisualBellActions.dequeue({
        matchType: "plugins-status"
      }));
    }
    if (getFeatureFlags().widgets_paste_local_on_fail && isDevEnvironment() && fallbackInfo) {
      const fallbackResult = await runWidgetWithoutVersionCheck(fallbackInfo, url);
      if (fallbackResult.status === "error") {
        dispatch(embedThunk);
      }
      return;
    }
    dispatch(embedThunk);
  }
});

// Widget configurations
const ASANA_LOCAL_PLUGIN_ID = "1094384373580076374";
const ASANA_PROD_WIDGET = {
  pluginID: "1098405969270214551",
  widgetName: "Asana"
};
const JIRA_PROD_WIDGET = {
  pluginID: "1094001923188252679",
  widgetName: "Jira"
};
const CONFLUENCE_PROD_WIDGET = {
  pluginID: "1420720697481932939",
  widgetName: "Confluence"
};
const CONFLUENCE_STAGING_WIDGET = {
  pluginID: "1411297073589775977",
  widgetName: "Confluence (Staging)"
};
const ASANA_WIDGETS = {
  local: {
    pluginID: ASANA_LOCAL_PLUGIN_ID,
    widgetName: "Asana (Local Dev)"
  },
  staging: {
    pluginID: ASANA_LOCAL_PLUGIN_ID,
    widgetName: "Asana"
  },
  prod: ASANA_PROD_WIDGET,
  gov: ASANA_PROD_WIDGET
};
const JIRA_WIDGETS = {
  local: {
    pluginID: "1131307276886895456",
    widgetName: "Jira (Local Dev)"
  },
  staging: {
    pluginID: "1098069144593389942",
    widgetName: "Jira"
  },
  prod: JIRA_PROD_WIDGET,
  gov: JIRA_PROD_WIDGET
};

/**
 * Checks if URL is Jira or Atlassian related.
 * Original: S
 */
const isJiraOrAtlassianUrl = (url: string) => url.includes("jira") || url.includes("atlassian");

/**
 * Determines widget info for a given URL.
 * Original: inner function in $$w0
 */
function getWidgetInfoForUrl(url: string) {
  if (isInteractionPathCheck() && url.includes("figmainteractiontest")) {
    const testWidget = {
      pluginID: "TEST_PASTE_URL_TO_WIDGET",
      widgetName: "TestWidget"
    };
    return {
      currentWidget: testWidget,
      fallbackWidget: testWidget
    };
  }
  const cluster = getInitialOptions().cluster_name || "unknown";
  if (!["local", "staging", "prod", "gov"].includes(cluster)) return null;
  if (isAsanaUrl(url)) {
    return {
      currentWidget: ASANA_WIDGETS[cluster],
      fallbackWidget: ASANA_WIDGETS.local
    };
  }
  if (isConfluenceProdUrl(url)) {
    if (isLocalCluster() || isStagingCluster()) return null;
    return {
      currentWidget: CONFLUENCE_PROD_WIDGET,
      fallbackWidget: null
    };
  }
  if (isConfluenceStagingUrl(url)) {
    if (isLocalCluster() || isStagingCluster()) return null;
    return {
      currentWidget: CONFLUENCE_STAGING_WIDGET,
      fallbackWidget: null
    };
  }
  if (isJiraOrAtlassianUrl(url)) {
    return {
      currentWidget: JIRA_WIDGETS[cluster],
      fallbackWidget: JIRA_WIDGETS.local
    };
  }
  return null;
}

/**
 * Checks if URL is an Asana URL.
 */
function isAsanaUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.origin !== "https://app.asana.com") return false;
    const pathMatch = parsedUrl.pathname.match(/\/0\/(\d+)(?:\/(\d+))?/);
    const projectMatch = parsedUrl.pathname.startsWith("/1/") && parsedUrl.pathname.match(/\/project\/(\d+)(?:\/task\/(\d+))?/);
    const portfolioMatch = parsedUrl.pathname.match(/\/0\/portfolio\/(\d+)/);
    return !!(pathMatch || portfolioMatch || projectMatch);
  } catch {
    return false;
  }
}

/**
 * Checks if URL is a Confluence production URL.
 */
function isConfluenceProdUrl(url: string): boolean {
  return /^https:\/\/([^.]+)\.atlassian\.net\/wiki\/spaces\/([\w-]+)\/pages\/(.*)$/.test(url) || /^https:\/\/([^.]+)\.atlassian\.net\/wiki\/l\/c\/(.*)$/.test(url) || /^https:\/\/([^.]+)\.atlassian\.net\/wiki\/l\/cp\/(.*)$/.test(url) || /^https:\/\/([^.]+)\.atlassian\.net\/wiki\/l\/cw\/(.*)$/.test(url) || /^https:\/\/([^.]+)\.atlassian\.net\/wiki\/x\/(.*)$/.test(url) || /^https:\/\/([^.]+)\.atlassian\.net\/wiki\/spaces\/~([A-Za-z0-9]+)\/pages\/(.*)$/.test(url);
}

/**
 * Checks if URL is a Confluence staging URL.
 */
function isConfluenceStagingUrl(url: string): boolean {
  return /^https:\/\/([^.]+)\.jira-dev\.com\/wiki\/spaces\/([\w-]+)\/pages\/(.*)$/.test(url) || /^https:\/\/([^.]+)\.jira-dev\.com\/wiki\/l\/cp\/(.*)$/.test(url) || /^https:\/\/([^.]+)\.jira-dev\.com\/wiki\/x\/(.*)$/.test(url) || /^https:\/\/([^.]+)\.jira-dev\.com\/wiki\/spaces\/~([A-Za-z0-9]+)\/pages\/(.*)$/.test(url);
}

/**
 * Processes paste URLs and attempts to create widgets.
 * Original: $$w0
 */
export function processPasteUrls(dispatch: any, clipboardText: string, fallbackText: string) {
  const lines = clipboardText.trim().split("\n");
  let parsedInputs = lines.map(line => parseEmbedInput(line.trim()));
  if (!parsedInputs.every(input => !!input)) {
    const asanaParsed = parseAsanaEmbed(fallbackText, clipboardText);
    if (!asanaParsed) {
      return [{
        valid: false,
        reason: "At least one line of text was not a valid URL or IFrame"
      }];
    }
    parsedInputs = asanaParsed;
  }
  const widgetInfos = parsedInputs.map(input => getWidgetInfoForUrl(input.url));
  if (!widgetInfos.every(info => !!info)) {
    return [{
      valid: false,
      reason: "At least one link did not have associated widget information"
    }];
  }
  const groupedByPlugin = new Map();
  widgetInfos.forEach((info, index) => {
    if (!info) return;
    const {
      currentWidget,
      fallbackWidget
    } = info;
    const text = lines[index];
    const url = parsedInputs[index].url;
    const existing = groupedByPlugin.get(currentWidget.pluginID);
    if (existing) {
      existing.texts.push(text);
      existing.urls.push(url);
    } else {
      groupedByPlugin.set(currentWidget.pluginID, {
        currentWidget,
        fallbackWidget,
        texts: [text],
        urls: [url]
      });
    }
  });
  const results = [];
  groupedByPlugin.forEach(({
    currentWidget,
    fallbackWidget,
    texts,
    urls
  }) => {
    const result = createWidgetForUrls(dispatch, texts.join("\n"), urls.join("\n"), currentWidget, fallbackWidget);
    results.push(result);
  });
  return results;
}

/**
 * Creates a widget for given URLs.
 * Original: inner function in $$w0
 */
function createWidgetForUrls(dispatch: any, joinedTexts: string, joinedUrls: string, widgetInfo: any, fallbackInfo: any) {
  const isLocalAndNotInteraction = isLocalCluster() && !isInteractionPathCheck();
  const isInteractionAndNotVersionCheck = isInteractionPathCheck() && !joinedUrls.includes("paste_with_version_check");
  if (isLocalAndNotInteraction || isInteractionAndNotVersionCheck) {
    const {
      widgetNodeID
    } = createWidget({
      pluginID: widgetInfo.pluginID,
      widgetName: widgetInfo.widgetName,
      pluginVersionID: null,
      basicOverrides: {
        pasteUrl: joinedUrls
      }
    });
    return widgetNodeID ? {
      valid: true
    } : {
      valid: false,
      reason: "Could not create widget"
    };
  }
  dispatch(pasteWidgetThunk({
    widgetInfo,
    fallbackInfo,
    url: joinedUrls,
    clipboardText: joinedTexts
  }));
  return {
    valid: true
  };
}
export const Cg = processPasteUrls;