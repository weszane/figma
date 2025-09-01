import { UN } from "../905/700578";
import { x1 } from "../905/714362";
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
    let e = UN();
    let r = $v(e, folderPath, fileName);
    if (!r) return;
    t(r);
    i({
      codeFileGuid: r.guid,
      fromCharIndex: componentStartIndex,
      toCharIndex: componentEndIndex
    });
  } catch (e) {
    x1("Failed to go to source:", e);
  }
}
export const D = $$s0;