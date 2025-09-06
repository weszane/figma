import { getFeatureFlags } from "../905/601108";
import { createLocalStorageAtom, atomStoreManager, setupAtomWithMount, atom } from "../figma_app/27355";
import { desktopAPIInstance } from "../figma_app/876459";
let $$s11 = createLocalStorageAtom("dev-mode-mcp-get-code-connect-tools-enabled", !0, {
  subscribeToChanges: !0
});
let $$o5 = createLocalStorageAtom("dev-mode-mcp-codebase-suggestions-enabled", !1, {
  subscribeToChanges: !0
});
let $$l2 = () => atomStoreManager.get($$o5) && getFeatureFlags().dt_my_cool_plugin_codebase_suggestions;
let $$d1 = createLocalStorageAtom("dev-mode-mcp-get-code-options", "design_to_react", {
  subscribeToChanges: !0
});
let c = createLocalStorageAtom("dev-mode-mcp-image-options", desktopAPIInstance?.hasFeature("addMcpImageSupport") ? "local" : "placeholder-svg", {
  subscribeToChanges: !0
});
let $$u9 = setupAtomWithMount(c, ({
  onSet: e
}) => {
  e(() => {
    desktopAPIInstance?.sendMCPUpdate("tool_list", {});
  });
});
let $$p4 = createLocalStorageAtom("dev-mode-mcp-deny-overwriting-files", !0, {
  subscribeToChanges: !0
});
let $$_6 = createLocalStorageAtom("dev-mode-mcp-mock-dir-for-image-writes-to-disk", void 0, {
  subscribeToChanges: !0
});
let $$h8 = createLocalStorageAtom("dev-mode-mcp-use-tailwind", !0, {
  subscribeToChanges: !0
});
export function $$m3() {
  return {
    codeConnectToolsEnabled: atomStoreManager.get($$s11),
    codebaseSuggestionsEnabled: $$l2(),
    codeOption: atomStoreManager.get($$d1),
    markupImageOptions: atomStoreManager.get($$u9),
    useTailwind: atomStoreManager.get($$h8),
    denyOverwritingFiles: atomStoreManager.get($$p4)
  };
}
export function $$g7() {
  return {
    codeConnectToolsEnabled: atomStoreManager.get($$s11),
    codebaseSuggestionsEnabled: $$l2() ?? !1,
    codeOption: atomStoreManager.get($$d1),
    markupImageOption: atomStoreManager.get($$u9),
    useTailwind: atomStoreManager.get($$h8),
    denyOverwritingFiles: atomStoreManager.get($$p4)
  };
}
let $$$$f10 = atom(null);
let $$E0 = atom(null);
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