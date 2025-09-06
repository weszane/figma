import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { isNotNullish } from "../figma_app/95419";
import { j0r } from "../figma_app/763686";
import { selectWithShallowEqual } from "../905/103090";
import { b as _$$b } from "../figma_app/517135";
import { getI18nString } from "../905/303541";
import { v4 } from "../figma_app/655139";
import { Q } from "../905/217916";
import { m0 } from "../figma_app/976749";
import { gl, hS } from "../905/216495";
import { kl } from "../905/275640";
import { Gp } from "../figma_app/646357";
import { Fk } from "../figma_app/167249";
import { e_ } from "../figma_app/803787";
import { Ig, dc, rP } from "../figma_app/155647";
import { Cq } from "../figma_app/161708";
import { QT } from "../figma_app/152690";
import { bm, nu, Af } from "../figma_app/803932";
import { uQ, pF, T4 } from "../figma_app/151869";
import { X } from "../905/839893";
import { VZ, x0 } from "../figma_app/727192";
import { nd, _p } from "../figma_app/826998";
export function $$$$N1() {
  let e = useSelector(e => e.mirror.selectionProperties.strokePaints);
  let t = !e || gl(e) ? [] : e.filter(e => e.visible);
  let r = uQ();
  let n = Q();
  let c = v4();
  let b = m0();
  let v = pF(e => _$$b(e.mirror.selectionProperties, "inheritFillStyleKeyForStroke"));
  let A = useSelector(e => e.mirror.selectionProperties.styleIdForStrokeFill);
  let x = Fk((e, t) => t ? e.getStyleNodeByRef(t)?.guid : void 0, A?.assetRef);
  let N = useSelector(e_);
  let w = kl("inheritFillStyleKeyForStroke");
  let L = w && hS(w) ? Gp(w, x ? [x] : [], N) : void 0;
  let P = useSelector(e => e.mirror.selectionProperties.borderSharedWeight || e.mirror.selectionProperties.strokeWeight) || 1;
  let D = selectWithShallowEqual(e => ({
    borderTopWeight: e.mirror.selectionProperties.borderTopWeight,
    borderRightWeight: e.mirror.selectionProperties.borderRightWeight,
    borderBottomWeight: e.mirror.selectionProperties.borderBottomWeight,
    borderLeftWeight: e.mirror.selectionProperties.borderLeftWeight
  }));
  let k = useSelector(e => e.mirror.selectionProperties.strokeAlign) || "OUTSIDE";
  let M = uQ();
  let F = Ig();
  let j = t.filter(bm).map(e => dc(e, F, j0r.STROKE));
  let U = useMemo(() => {
    let e = L && v ? [rP(v, L, j)] : j;
    return QT(e, r, n.inspectionMode, c, b);
  }, [L, v, j, r, n.inspectionMode, c, b]);
  let B = useSelector(C);
  return useMemo(() => {
    if (!M || U.length < 1 || !P) return [];
    let e = O(P, [D.borderTopWeight, D.borderRightWeight, D.borderBottomWeight, D.borderLeftWeight].filter(isNotNullish));
    return e ? [{
      id: M,
      strokeWeight: e,
      strokeColors: U,
      strokeAlign: R(k),
      borderCSSKey: B
    }] : [];
  }, [M, k, P, U, B, D]);
}
let C = e => {
  let t = e.mirror.selectionProperties;
  if (!gl(t.borderSharedWeight)) {
    if (!t.borderStrokeWeightsIndependent) return "border";
    if (t.borderTopVisible) return "border-top";
    if (t.borderBottomVisible) return "border-bottom";
    if (t.borderLeftVisible) return "border-left";
    if (t.borderRightVisible) return "border-right";
  }
};
let w = e => {
  switch (e) {
    case "border":
      return getI18nString("inspect_panel.strokes.all_sides");
    case "border-top":
      return getI18nString("inspect_panel.strokes.top_side");
    case "border-bottom":
      return getI18nString("inspect_panel.strokes.bottom_side");
    case "border-left":
      return getI18nString("inspect_panel.strokes.left_side");
    case "border-right":
      return getI18nString("inspect_panel.strokes.right_side");
    default:
      return;
  }
};
let O = (e, t) => gl(e) ? t.some(e => gl(e)) ? getI18nString("fullscreen.mixed") : t.map(e => nd(e, "px")).join(", ") : `${nd(e, "px")}`;
let R = e => {
  switch (e) {
    case "OUTSIDE":
      return getI18nString("inspect_panel.strokes.outer_border");
    case "INSIDE":
      return getI18nString("inspect_panel.strokes.inner_border");
    case "CENTER":
      return getI18nString("inspect_panel.strokes.center_border");
    default:
      return;
  }
};
function L(e, t) {
  let r = X(e.strokeAlign);
  let i = e.strokeWeight.split(",").join("");
  let a = T4.useStrokeCopyValue(i, e.strokeColors, e.borderCSSKey);
  return jsxs("div", {
    children: [!t.onlyShowStrokeColor && jsxs(_p, {
      copyValue: a,
      className: "strokes_panel--strokeLabelRow--UVeiF inspection_property--basePropertyRow--nwW7c inspection_property--_basePropertyRow--nfWzH text--fontPos11--2LvXf text--_fontBase--QdLsd inspection_property--tallRow--NgJHn",
      children: [jsx("div", {
        className: "strokes_panel--strokeWeightIcon--gyv-r",
        children: jsx(Cq, {
          iconState: "ACTIVE"
        })
      }), jsx("span", {
        children: e.strokeWeight
      }), e.borderCSSKey && jsx("span", {
        className: "strokes_panel--strokeSide--JjXb2 text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
        ...r,
        children: w(e.borderCSSKey)
      })]
    }), jsx(nu, {
      formattableColors: e.strokeColors
    }), e.strokeAlign && !t.onlyShowStrokeColor && jsx(_p, {
      className: "strokes_panel--strokeAlignmentRow--5q8cB inspection_property--tallPropertyRow--QiGbS inspection_property--_basePropertyRow--nfWzH inspection_property--tallRow--NgJHn",
      children: jsx("span", {
        className: "strokes_panel--strokeAlignment--mT7M- text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
        ...r,
        children: e.strokeAlign
      })
    })]
  });
}
export function $$P0({
  hideBorder: e,
  noPadding: t,
  isSubsection: r
}) {
  let i = m0();
  let s = useSelector(e => e.mirror.selectionProperties.numSelected) || 0;
  let o = $$$$N1();
  let l = T4.useCopyAllStrokes(o);
  return 1 !== s || o.length < 1 ? null : jsx(VZ, {
    title: i ? getI18nString("inspect_panel.strokes.colors.title") : getI18nString("inspect_panel.strokes.title"),
    recordingKey: "borders",
    additionalHeaders: i ? void 0 : jsx(Af, {}),
    copyAllValue: i ? void 0 : l,
    noBorder: e,
    snugTitle: i,
    fadedTitle: i,
    noPadding: t,
    isSubsection: r,
    children: jsx(x0, {
      limit: 2,
      data: o,
      renderElement: L,
      extras: {
        onlyShowStrokeColor: i
      }
    })
  });
}
export const o = $$P0;
export const N = $$$$N1;