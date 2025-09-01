import { jsx } from "react/jsx-runtime";
import { j } from "../905/35621";
import { B } from "../905/714743";
import { W0 } from "../figma_app/603826";
import { A } from "../6828/493300";
import { A as _$$A } from "../1617/662588";
function d(e) {
  return e.showSettingsIcon ? jsx(B, {
    svg: e.useVerticalIcon ? _$$A : A,
    className: `${W0} ${e.className || ""}`,
    onClick: e.onFileSettingsClick || j,
    onMouseDown: e.onFileSettingsMouseDown,
    onDoubleClick: e.onFileSettingsDoubleClick
  }) : null;
}
d.displayName = "SettingsButton";
export let $$c0 = d;
export const C = $$c0;