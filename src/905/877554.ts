import { createHeadlessEditor } from "../vendor/24766";
import { $convertFromMarkdownString } from "../vendor/693164";
import { TextNode } from "lexical";
export function $$s0(e) {
  if (!e) return null;
  let t = createHeadlessEditor({
    nodes: [TextNode],
    onError: () => { }
  });
  t.update(() => {
    $convertFromMarkdownString(e, []);
  }, {
    discrete: !0
  });
  return JSON.stringify(t.getEditorState().toJSON());
}
export const F = $$s0;
