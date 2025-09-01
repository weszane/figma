import { jsx } from "react/jsx-runtime";
import { wA, d4 } from "../vendor/514228";
import { e as _$$e } from "../5132/291975";
import { Ay } from "../905/612521";
import { tx } from "../905/303541";
import { E } from "../905/984674";
import { Oe } from "../905/34809";
import { SidebarRow } from "../451de8f0/94979";
import { Om, tv, au } from "../figma_app/979714";
import { b as _$$b } from "../905/985254";
import { N$ } from "../figma_app/350203";
import { z3 } from "../figma_app/386952";
import { w3 } from "../figma_app/692865";
import { P } from "../1250/15189";
if (443 == require.j) {}
if (443 == require.j) {}
export let $$h0 = "resource_hub_link";
export function $$b1() {
  let e = wA();
  let t = z3();
  let n = d4(e => e.userFlags);
  let b = Om();
  let x = tv();
  let y = P();
  return jsx(SidebarRow, {
    onClick: () => {
      Ay.push(new au({
        ...b,
        tab: y
      }, x).href);
      e(Oe({
        clickedResourceType: "resourceHub"
      }));
      y !== N$.COMMUNITY || n[w3] || e(_$$b({
        [w3]: !0
      }));
    },
    "data-onboarding-key": $$h0,
    isSelected: "resourceHub" === t,
    icon: jsx(_$$e, {}),
    text: jsx(E, {
      truncate: !0,
      children: tx("sidebar.templates_and_tools")
    }),
    wrapInListItem: !0
  });
}
export const U = $$h0;
export const w = $$b1;