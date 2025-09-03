import { jsx } from "react/jsx-runtime";
import { debug } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { j7 } from "../905/929976";
import { jv } from "../figma_app/357047";
import { Sn } from "../905/946805";
import { r as _$$r } from "../905/924231";
import { gn, $I } from "../figma_app/322845";
export function $$u1(e) {
  if ("run-installed-plugin" !== e.type && "run-local-plugin" !== e.type || !e.parameterEntry || 0 === e.parameterEntry.parameters.length) return null;
  let t = e.parameterEntry.parameters.map(({
    valueType: e,
    ...t
  }) => ({
    ...t,
    type: e
  }));
  let i = "run-installed-plugin" === e.type ? e.pluginId : void 0;
  let n = "run-local-plugin" === e.type ? e.localFileId : void 0;
  return {
    parameters: t,
    command: e.command,
    displayName: e.parameterEntry.commandName,
    pluginId: i,
    pluginLocalFileId: n,
    parameterOnly: !!e.parameterOnly
  };
}
export function $$p0(e, t, i) {
  let p = function (e, t) {
    let i = $$u1(e);
    return i ? {
      ...i,
      triggeredFrom: t
    } : null;
  }(e, t);
  if (debug(null !== p, "Can only run parameter entry for plugins that have parameters"), gn()) {
    $I({
      moduleToOpen: {
        type: "custom",
        module: jsx(_$$r, {
          onExitParameterEntry: lQ,
          triggeredFrom: t,
          parameters: p.parameters,
          displayName: p.displayName,
          parameterOnly: p.parameterOnly,
          pluginId: p.pluginId,
          pluginLocalFileId: p.pluginLocalFileId,
          command: p.command
        }),
        name: Sn.PLUGIN_PARAMETER_ENTRY
      },
      trackingData: {
        source: `extension-parameter-entry-${t}`
      }
    });
    return;
  }
  i(j7({
    type: jv,
    data: {
      parameterEntryArgs: p
    }
  }));
}
export const nO = $$p0;
export const o0 = $$u1;