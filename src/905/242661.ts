import { bundleCode } from "../figma_app/346422";
import { isFigmakeSitesEnabled } from "../figma_app/552876";
export async function $$a0(e) {
  if (e.sourceCodeHash ??= "", e.compiledCode ??= "", e.codeFilesystem ??= {}, e.codeIdentifierToEntrypoint ??= {}, 0 !== Object.keys(e.codeIdentifierToEntrypoint).length) try {
    let t = await bundleCode({
      entrypointsOrIdentifierToFileName: e.codeIdentifierToEntrypoint,
      filesystem: e.codeFilesystem,
      tailwind: !0,
      minify: !1,
      shadcn: isFigmakeSitesEnabled(),
      noWrapper: isFigmakeSitesEnabled()
    });
    delete e.codeFilesystem;
    delete e.codeIdentifierToEntrypoint;
    e.compiledCode = t.esm;
    e.globalStyles = t.css;
  } catch (e) {
    console.error("[bundleLocalCodeLibrary] Error bundling code:", e);
  }
}
export const _ = $$a0;