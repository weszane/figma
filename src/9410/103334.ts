import { jsx } from "react/jsx-runtime";
import n from "classnames";
import { useCurrentViewState } from "../figma_app/623300";
var a = n;
export function $$o0({
  isFullHeight: e,
  children: t
}) {
  let i = useCurrentViewState().isLoading;
  return jsx("div", {
    "data-testid": "left-panel-body",
    className: a()("left_panel_body--container--GuUjF sf_pro--uiFontWithSFProFallback--m-p9V", {
      leftPanelBody: !i,
      "left_panel_body--flexGrow--HFJjd": e
    }),
    children: t
  });
}
export const A = $$o0;