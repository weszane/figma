import { jsxs, jsx } from "react/jsx-runtime";
import { G } from "../905/750789";
import { P } from "../figma_app/582341";
import { C as _$$C } from "../905/160974";
export function $$o0({
  publishedLibrary: e
}) {
  return jsxs("div", {
    className: _$$C,
    children: [jsx(G, {
      text: e.library_name
    }), jsx(P, {
      libraryKey: e.library_key,
      compact: !0,
      showPresetTooltip: !0,
      colorPrimaryOnHover: !0
    })]
  });
}
export const C = $$o0;