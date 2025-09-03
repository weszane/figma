import { throwTypeError } from "../figma_app/465776";
import { xg, Au, Av } from "../figma_app/155287";
import { c } from "../905/882587";
export const z = function e(t, i, s = []) {
  return t.map(t => {
    if (xg(t)) return {
      type: "submenu",
      subtype: "manifest",
      name: t.name,
      submenu: e(t.menu, i, [...s, t.name])
    };
    if (Au(t)) return {
      type: "separator"
    };
    if (Av(t)) {
      let e;
      let n = c(t.parameters, t.name);
      e = "localFileId" in i ? {
        type: "run-local-plugin",
        localFileId: i.localFileId,
        command: t.command,
        parameterOnly: t.parameters && !1 !== t.parameterOnly,
        parameterEntry: n
      } : {
        type: "run-installed-plugin",
        pluginId: i.plugin_id,
        command: t.command,
        parameterOnly: t.parameters && !1 !== t.parameterOnly,
        parameterEntry: n
      };
      return {
        type: "run-menu-action",
        name: {
          type: "plugin-name",
          plugin: t.name
        },
        menuAction: e,
        path: s
      };
    }
    throwTypeError(t);
  });
};