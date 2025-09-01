import { jsx, jsxs } from "react/jsx-runtime";
import { E as _$$E } from "../905/53857";
import { v4, AC } from "../figma_app/655139";
import { x1 } from "../469e6e40/936617";
import { sQ } from "../905/191741";
import { AF } from "../figma_app/212807";
import { w$ } from "../figma_app/646357";
import { AT } from "../figma_app/633080";
import { d as _$$d } from "../905/480825";
import { J } from "../905/225412";
import { rb } from "../figma_app/151869";
import { q } from "../905/296913";
import { zi } from "../905/824449";
function x({
  color: e
}) {
  if (w$(e.type === q.STYLE ? e.dsStyle : void 0), e.type === q.STYLE) {
    let t = e.dsStyle.value;
    e.dsStyle.kind === AT.SUBSCRIBED_WITHOUT_LIBRARY && (t.style_type = "FILL");
    return jsx(zi, {
      dsStyle: t,
      disableTooltip: !0
    });
  }
  return jsx(J, {
    className: "code_and_properties_panel_preview--colorChit--N58wX",
    paint: e.paint
  });
}
function m() {
  let {
    chits = [],
    total
  } = x1();
  return total ? jsxs("span", {
    className: "code_and_properties_panel_preview--colorChitRow--cMZM3",
    children: [chits.map(e => jsx(x, {
      color: e
    }, e.type === q.RAW ? e.encodedPaint : e.dsStyle?.value?.node_id)), total > 3 && jsxs("span", {
      children: ["+", total - 3]
    })]
  }) : null;
}
export function $$_1({
  plugin: e
}) {
  return jsx(_$$E, {
    variant: "defaultOutline",
    iconPrefix: jsx(_$$d, {
      plugin: e
    }),
    children: e.name
  });
}
export function $$v0() {
  let e = sQ();
  let t = AF();
  let n = v4();
  let i = AC(n);
  let l = "SECTION" === rb();
  return t && e && "first-party" !== n.type && i && !l ? jsx($$_1, {
    plugin: i
  }) : jsx(m, {});
}
export const E = $$v0;
export const c = $$_1;