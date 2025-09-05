import { useSelector } from "../vendor/514228";
export function $$r0() {
  return useSelector(e => "fullscreen" === e.selectedView.view && !!e.selectedView.showDevModeVariablesTable);
}
export const e = $$r0;