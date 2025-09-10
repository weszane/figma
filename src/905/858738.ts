import { n as _$$n } from "../905/347702";
import { localStorageRef } from "../905/657224";
import { isDevEnvironment } from "../figma_app/169182";
export let $$a0 = _$$n(() => !!isDevEnvironment() && localStorageRef?.getItem("force-vscode") === "true" || !!window?.location.ancestorOrigins && [...window.location.ancestorOrigins].some(e => e.startsWith("vscode-webview://")));
export const T = $$a0;
