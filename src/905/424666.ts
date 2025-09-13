import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { z5, a6, jM, J, P_ } from "../905/124270";
import { jN, nX, Aj, S2 } from "../905/171315";
import { cr, CO } from "../905/703676";
import { n as _$$n } from "../905/624711";
import { k } from "../905/252342";
import { isCooperFeatureEnabled } from "../figma_app/828186";
import { jD, uR, $L } from "../figma_app/162807";
import { isFigmakeSitesEnabled } from "../figma_app/552876";
import { isSitesFeatureEnabled } from "../905/561485";
import { zH, Kk } from "../905/954985";
import { A as _$$A } from "../3850/824007";
export function $$y0({
  id: e,
  path: t,
  setFacetValue: i
}) {
  let y = Xr(z5);
  let b = useAtomWithSubscription(a6);
  let v = useAtomWithSubscription(jM);
  let I = useAtomWithSubscription(J);
  let E = useAtomWithSubscription(P_);
  let x = _$$n();
  let S = k();
  let w = useCallback((e, t) => {
    let n = jN(t);
    let r = nX(n, I, E);
    i(e, n, r);
    y(null);
    t ? x({
      resourceType: t
    }) : S({}, jD.ALL_TYPES, uR.DROPDOWN);
  }, [I, E, y, i, x, S]);
  return jsxs("div", {
    className: zH,
    children: [jsx(cr, {
      href: "",
      id: `${e}-all-resources`,
      onClickCallback: e => w(e, null),
      path: [...t, 0],
      rowHeight: CO.SHORT,
      sideElement: v && v.value !== $L.ALL_FILES ? void 0 : jsx(SvgComponent, {
        svg: _$$A,
        className: Kk
      }),
      sideElementAlwaysVisible: !0,
      text: Aj(b) ? getI18nString("search.preview_section.all_files") : getI18nString("search.preview_section.all_resources")
    }), b.map((i, r) => {
      if (i === $L.SITES && !isSitesFeatureEnabled() || i === $L.BUZZ && !isCooperFeatureEnabled() || i === $L.MAKE && !isFigmakeSitesEnabled() || i === $L.ALL_FILES || i === $L.PLUGINS || i === $L.WIDGETS) return null;
      let a = `${e}-resource-option-${r}`;
      let o = v?.value === i;
      return jsx(cr, {
        href: "",
        id: a,
        onClickCallback: e => w(e, i),
        path: [...t, 1, r],
        rowHeight: CO.SHORT,
        sideElement: o ? jsx(SvgComponent, {
          svg: _$$A,
          className: Kk
        }) : void 0,
        sideElementAlwaysVisible: !0,
        text: S2(i)
      }, a);
    })]
  });
}
export const m = $$y0;