import { jsx } from "react/jsx-runtime";
import { Agb } from "../figma_app/822011";
import a from "classnames";
import { E as _$$E } from "../905/511388";
import { useOpenFileLibraryKey } from "../figma_app/516028";
import { useCurrentPublicPlan } from "../figma_app/465071";
import { H } from "../905/991973";
import { fV } from "../figma_app/236178";
import { KP } from "../figma_app/12491";
import { hasResourcePresetKey } from "../figma_app/255679";
import { iE, oE, FT } from "../905/678287";
var s = a;
export let $$m0 = 16;
export function $$g1({
  libraryKey: e,
  showPresetTooltip: t,
  tooltipDelay: r,
  tooltipLocation: a,
  compact: m,
  colorPrimaryOnHover: g
}) {
  let f = useCurrentPublicPlan("LibraryBadge").unwrapOr(null);
  let E = f?.tier === Agb.ENTERPRISE;
  let y = useOpenFileLibraryKey();
  let b = fV(e);
  let T = hasResourcePresetKey(e);
  let I = H(e);
  let S = s()(iE, {
    [oE]: m,
    [FT]: g
  });
  return E && e !== y && b ? jsx("div", {
    className: S,
    children: jsx(KP, {
      libraryKey: e,
      tooltipDelay: r,
      tooltipLocation: a
    })
  }) : e !== y && (T || I) ? jsx("div", {
    className: S,
    children: jsx(_$$E, {
      showTooltip: t,
      libraryKey: e,
      tooltipDelay: r,
      tooltipLocation: a
    })
  }) : null;
}
export const J = $$m0;
export const P = $$g1;