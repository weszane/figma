import { createScopedStateWithDefault } from "../905/457575";
export let $$r1 = createScopedStateWithDefault(null);
export function $$i0(e) {
  var t;
  return e ? "code" === e.type ? e.fullFilePath : "editedFiles" === e.type ? e.files.join(", ") : ("view_tool" === e.toolName || "write_tool" === e.toolName || "fast_apply_tool" === e.toolName || "str_replace_editor" === e.toolName || "edit_tool" === e.toolName) && (t = e.partialArgs.path) && t.includes(".") ? e.partialArgs.path : null : null;
}
export const N = $$i0;
export const l = $$r1;