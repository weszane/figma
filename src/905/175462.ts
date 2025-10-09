import { trimOrEmpty } from "../figma_app/740025";
import { getHubFileVersionOrDefault } from "../figma_app/198840";
import { getCurrentPluginVersion } from "../figma_app/300692";
import { isWidgetOrPlugin } from "../figma_app/45218";
let $$o0 = 100;
let $$l1 = {
  displayName: "NameField",
  fetchInitialValue: ({
    figFile: e,
    existingResourceContent: t,
    localExtension: i,
    defaultName: n
  }) => t && function (e) {
    return "name" in e ? e.name : isWidgetOrPlugin(e) ? getCurrentPluginVersion(e)?.name || "" : getHubFileVersionOrDefault(e).name;
  }(t) || n || i?.manifest.name || e?.name || "",
  validate: ({}, e) => {
    let t = trimOrEmpty(e);
    return 0 === t.length ? [{
      key: "NAME_EMPTY",
      data: {
        sanitizedName: t
      }
    }] : t.length < 4 ? [{
      key: "NAME_TOO_SHORT",
      data: {
        sanitizedName: t,
        minLength: 4
      }
    }] : t.length > $$o0 ? [{
      key: "NAME_TOO_LONG",
      data: {
        sanitizedName: t,
        maxLength: $$o0
      }
    }] : void 0;
  },
  canSet: () => !0
};
export const EM = $$o0;
export const om = $$l1;