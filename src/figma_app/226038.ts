export function $$n0(e, t) {
  if ("edit_tool" === e.toolName) {
    let {
      toolCallId,
      partialArgs
    } = e;
    let {
      old_str,
      new_str,
      path
    } = n;
    if (t.isCompleteToolCall) return {
      id: toolCallId,
      type: "codeDiffVisualizationDone"
    };
    if (path) return {
      id: toolCallId,
      type: "codeDiffVisualizationDelta",
      old_str: old_str ?? "",
      new_str: new_str ?? "",
      path
    };
  }
  return null;
}
export const m = $$n0;