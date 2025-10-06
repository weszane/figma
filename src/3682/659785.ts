import { jsxs, jsx } from "react/jsx-runtime";
import { useIsFullscreenWithDevVariables } from "../905/383776";
import { useIsFullscreenOverview, useIsFullscreenDevModeComponentBrowser } from "../figma_app/88239";
import { selectCurrentFile } from "../figma_app/516028";
import { cQ, EG } from "../figma_app/144692";
import { SZ, x$, Fp, l9, t7 } from "../9410/692397";
export function $$c0({
  shouldUseBottomBorder: e
}) {
  let t = selectCurrentFile();
  let a = useIsFullscreenOverview();
  let c = useIsFullscreenWithDevVariables();
  let d = useIsFullscreenDevModeComponentBrowser();
  return t && t.key && t.name ? jsxs(SZ, {
    shouldUseBottomBorder: !!e,
    children: [jsx(x$, {
      shouldShowFileMenu: !a && !c && !d,
      recordingKey: Fp
    }), jsx(l9, {}), jsx(t7, {
      openFile: t
    })]
  }) : jsxs(SZ, {
    shouldUseBottomBorder: !!e,
    children: [jsx(cQ, {}), jsx(EG, {})]
  });
}
export const d = $$c0;