import { n as _$$n } from "src/905/347702";
import { localStorageRef } from "src/905/657224";
import { isDevEnvironment } from "src/figma_app/169182";
export let $$a0 = _$$n(() => !!isDevEnvironment() && localStorageRef?.getItem("force-vscode") === "true" || !!window?.location.ancestorOrigins && [...window.location.ancestorOrigins].some(e => e.startsWith("vscode-webview://")));
export const T = $$a0;
