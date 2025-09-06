import { getSingletonSceneGraph } from "../905/700578";
import { logError } from "../905/714362";
import { $v } from "../figma_app/259678";
export function $$s0(e, t, i) {
  let {
    fileName,
    folderPath,
    jsxSnippet
  } = e;
  let {
    componentStartIndex,
    componentEndIndex
  } = jsxSnippet ?? {};
  if (fileName && void 0 !== folderPath && void 0 !== componentStartIndex) try {
    let e = getSingletonSceneGraph();
    let r = $v(e, folderPath, fileName);
    if (!r) return;
    t(r);
    i({
      codeFileGuid: r.guid,
      fromCharIndex: componentStartIndex,
      toCharIndex: componentEndIndex
    });
  } catch (e) {
    logError("Failed to go to source:", e);
  }
}
export const D = $$s0;