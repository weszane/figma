import { jsx } from "react/jsx-runtime";
import { LoadingSpinner } from "../905/443820";
import { cssBuilderInstance } from "../cssbuilder/589278";
export function $$s0() {
  return jsx("div", {
    className: cssBuilderInstance.flex.justifyCenter.alignCenter.pt24.pb24.$,
    "data-testid": "browse-resources-loading-spinner",
    children: jsx(LoadingSpinner, {})
  });
}
export const L = $$s0;