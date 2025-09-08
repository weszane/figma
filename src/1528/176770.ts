import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { c2 } from "../905/382883";
import { Fullscreen } from "../figma_app/763686";
import { Pt } from "../figma_app/806412";
import { renderI18nText } from "../905/303541";
import { UK } from "../figma_app/740163";
import { getObservableOrFallback } from "../figma_app/84367";
import { yj } from "../1528/306300";
import { Mo, Yn, Ws, UE } from "../figma_app/152690";
export function $$p0({
  fill: e,
  modes: t,
  recordingKey: n,
  onChange: p
}) {
  let h = getObservableOrFallback(UK().showGuids);
  let m = Object.entries(t).map(([e, t]) => ({
    ...t,
    setKey: e
  })).filter(e => e.modeOptions.length > 1).sort((e, t) => e.collectionName.toLocaleLowerCase().localeCompare(t.collectionName.toLocaleLowerCase()));
  return 0 === m.length ? null : jsxs(Fragment, {
    children: [jsx("div", {
      className: "playground_modes_section--title--wPRzF text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: renderI18nText("design_systems.playground.variable_modes_title")
    }), m.map(t => jsx(yj, {
      explicitModeID: t.explicitMode,
      fill: e,
      hideRemoveButton: !0,
      inheritedModeID: t.inheritMode,
      isShowingGuids: h,
      modeOptions: t.modeOptions,
      onChange: e => {
        e !== Mo && e !== Yn && (c2(t.explicitMode, e) || (e === Ws || e === UE ? Fullscreen.setVariableModeForPlayground(t.setKey, e, null) : (Fullscreen.setVariableModeForPlayground(t.setKey, e.guid, null), p?.(t, e.guid))));
      },
      recordingKey: Pt(n, `mode-${t.setKey}`),
      showExplicitOnly: !1,
      showInheritedModeOption: !0,
      variableSetKey: t.setKey,
      variableSetName: t.collectionName
    }, t.setKey))]
  });
}
export const b = $$p0;