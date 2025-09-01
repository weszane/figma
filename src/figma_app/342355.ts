import { getFeatureFlags } from "../905/601108";
import { E3, zl, yu, eU } from "../figma_app/27355";
import { eD } from "../figma_app/876459";
let $$s11 = E3("dev-mode-mcp-get-code-connect-tools-enabled", !0, {
  subscribeToChanges: !0
});
let $$o5 = E3("dev-mode-mcp-codebase-suggestions-enabled", !1, {
  subscribeToChanges: !0
});
let $$l2 = () => zl.get($$o5) && getFeatureFlags().dt_my_cool_plugin_codebase_suggestions;
let $$d1 = E3("dev-mode-mcp-get-code-options", "design_to_react", {
  subscribeToChanges: !0
});
let c = E3("dev-mode-mcp-image-options", eD?.hasFeature("addMcpImageSupport") ? "local" : "placeholder-svg", {
  subscribeToChanges: !0
});
let $$u9 = yu(c, ({
  onSet: e
}) => {
  e(() => {
    eD?.sendMCPUpdate("tool_list", {});
  });
});
let $$p4 = E3("dev-mode-mcp-deny-overwriting-files", !0, {
  subscribeToChanges: !0
});
let $$_6 = E3("dev-mode-mcp-mock-dir-for-image-writes-to-disk", void 0, {
  subscribeToChanges: !0
});
let $$h8 = E3("dev-mode-mcp-use-tailwind", !0, {
  subscribeToChanges: !0
});
export function $$m3() {
  return {
    codeConnectToolsEnabled: zl.get($$s11),
    codebaseSuggestionsEnabled: $$l2(),
    codeOption: zl.get($$d1),
    markupImageOptions: zl.get($$u9),
    useTailwind: zl.get($$h8),
    denyOverwritingFiles: zl.get($$p4)
  };
}
export function $$g7() {
  return {
    codeConnectToolsEnabled: zl.get($$s11),
    codebaseSuggestionsEnabled: $$l2() ?? !1,
    codeOption: zl.get($$d1),
    markupImageOption: zl.get($$u9),
    useTailwind: zl.get($$h8),
    denyOverwritingFiles: zl.get($$p4)
  };
}
let $$$$f10 = eU(null);
let $$E0 = eU(null);
export const DR = $$E0;
export const Kx = $$d1;
export const Lw = $$l2;
export const Nt = $$m3;
export const Pq = $$p4;
export const SV = $$o5;
export const f = $$_6;
export const iy = $$g7;
export const lk = $$h8;
export const pe = $$u9;
export const rx = $$$$f10;
export const tz = $$s11;