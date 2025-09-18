import { jsx, jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { Button } from "../905/521428";
import { generateRecordingKey } from "../figma_app/878298";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { isLoading } from "../905/18797";
import { _A } from "../figma_app/65182";
import { warningOfflineContainer, warning, offlineIcon, trying } from "../figma_app/527659";
import { A } from "../6828/699531";
export function $$_0({
  onRetry: e,
  recordingKey: t
}) {
  let r = useSelector(e => isLoading(e.loadingState, _A(e.openFile?.key)));
  return jsx("div", {
    className: warningOfflineContainer,
    children: jsxs("div", {
      className: warning,
      children: [jsx(SvgComponent, {
        className: offlineIcon,
        svg: A
      }), jsx("span", {
        children: getI18nString("design_systems.component_properties.cant_show_values")
      }), r ? jsx("span", {
        className: trying,
        children: getI18nString("design_systems.component_properties.trying")
      }) : jsx(Button, {
        onClick: e,
        variant: "link",
        recordingKey: generateRecordingKey(t, "preferredValues", "tryAgain"),
        children: getI18nString("design_systems.component_properties.try_again")
      })]
    })
  });
}
export const u = $$_0;