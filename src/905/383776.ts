import { useSelector } from "react-redux";
export function $$r0() {
  return useSelector(e => "fullscreen" === e.selectedView.view && !!e.selectedView.showDevModeVariablesTable);
}
export const e = $$r0;
