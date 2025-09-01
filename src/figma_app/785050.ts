import { jsx } from "react/jsx-runtime";
import { c2 } from "../905/382883";
import { VZ } from "../figma_app/727192";
import { _p } from "../figma_app/826998";
import { kN } from "../figma_app/152690";
export function $$l0({
  isSubsection: e
}) {
  let t = kN();
  return Object.values(t).filter(e => !!e.explicitMode).length ? jsx(VZ, {
    title: "Modes",
    recordingKey: "modes",
    noPadding: e,
    noBorder: e,
    isSubsection: e,
    children: Object.entries(t).map(([e, t]) => {
      let r = t.modeOptions.find(e => c2(e.modeId, t.explicitMode))?.name;
      return jsx(_p, {
        name: t.collectionName,
        value: r
      }, e);
    })
  }) : null;
}
export const J = $$l0;