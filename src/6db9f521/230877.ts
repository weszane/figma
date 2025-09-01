import { jsx } from "react/jsx-runtime";
import { md } from "../figma_app/27355";
import l from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { lz } from "../figma_app/212767";
import { Dm } from "../figma_app/8833";
import { E3 } from "../figma_app/976749";
import { iT } from "../figma_app/74165";
import { qw, UK } from "../figma_app/740163";
import { J2 } from "../figma_app/84367";
import { nT } from "../figma_app/53721";
import { Ds } from "../1528/88743";
import { M$q, y9S } from "../figma_app/27776";
var s = l;
export function $$g0(e) {
  let t;
  let i = lz();
  let l = qw();
  let g = E3();
  let {
    isPropertiesPanelCollapsed
  } = iT();
  let f = md(Ds);
  let j = J2(UK().renderRulers);
  t = {
    right: `calc(${g === nT.DevHandoff ? i : l}px + ${parsePxNumber(M$q)}px)`,
    top: `${parsePxNumber(M$q)}px`
  };
  isPropertiesPanelCollapsed && (t = {
    ...t,
    right: `calc(${f}px + ${parsePxNumber(M$q)}px)`
  });
  j && (t = {
    ...t,
    top: `calc(${parsePxNumber(M$q)}px + ${parsePxNumber(y9S)}px)`
  });
  return jsx("div", {
    style: t,
    className: s()("nav_container--flexContainer--3Us-2 nav_container--baseContainer--QideS overflow--overflowYAuto--nfK38 overflow--momentumScroll--qtsu7", Dm, e.className),
    children: e.children
  });
}
export const K = $$g0;