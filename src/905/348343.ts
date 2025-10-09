import { trimOrEmpty } from "../figma_app/740025";
import { getHubFileVersionOrDefault } from "../figma_app/198840";
import { getCurrentPluginVersion } from "../figma_app/300692";
import { isWidgetOrPlugin } from "../figma_app/45218";
export let $$o0 = {
  displayName: "DescriptionField",
  fetchInitialValue: ({
    existingResourceContent: e
  }) => e ? function (e) {
    return "description" in e ? e.description || "" : isWidgetOrPlugin(e) ? getCurrentPluginVersion(e)?.description || "" : getHubFileVersionOrDefault(e).description;
  }(e) : "",
  validate: ({
    valueRequired: e
  }, t) => {
    if (e && 0 === trimOrEmpty(new DOMParser().parseFromString(t, "text/html").body.textContent || "").length) return [{
      key: "DESCRIPTION_EMPTY",
      data: {}
    }];
    let i = trimOrEmpty(t);
    if (i.length > 1e4) return [{
      key: "DESCRIPTION_TOO_LONG",
      data: {
        sanitizedDescription: i,
        maxLength: 1e4
      }
    }];
  },
  canSet: () => !0
};
export const z = $$o0;