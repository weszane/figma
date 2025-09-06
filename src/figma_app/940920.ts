import { jsx, jsxs } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { $n } from "../905/521428";
import { Pt } from "../figma_app/806412";
import { B } from "../905/714743";
import { getI18nString } from "../905/303541";
import { VP } from "../905/18797";
import { _A } from "../figma_app/65182";
import { warningOfflineContainer, warning, offlineIcon, trying } from "../figma_app/527659";
import { A } from "../6828/699531";
export function $$_0({
  onRetry: e,
  recordingKey: t
}) {
  let r = useSelector(e => VP(e.loadingState, _A(e.openFile?.key)));
  return jsx("div", {
    className: warningOfflineContainer,
    children: jsxs("div", {
      className: warning,
      children: [jsx(B, {
        className: offlineIcon,
        svg: A
      }), jsx("span", {
        children: getI18nString("design_systems.component_properties.cant_show_values")
      }), r ? jsx("span", {
        className: trying,
        children: getI18nString("design_systems.component_properties.trying")
      }) : jsx($n, {
        onClick: e,
        variant: "link",
        recordingKey: Pt(t, "preferredValues", "tryAgain"),
        children: getI18nString("design_systems.component_properties.try_again")
      })]
    })
  });
}
export const u = $$_0;