import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { range } from "../figma_app/492908";
import n from "classnames";
import { N } from "../figma_app/469468";
import { s as _$$s } from "../cssbuilder/589278";
import { ws } from "../figma_app/427318";
import { fz } from "../figma_app/795938";
import { Qp, JR, Wi } from "../figma_app/162641";
import { f as _$$f } from "../5430/372951";
import { ikM } from "../figma_app/27776";
var o = n;
function m() {
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap12.$,
    "data-testid": "resource-loading-tile",
    children: [jsx("div", {
      className: "resource_loading_tile--loadingImageWrapper--J9BDB",
      children: jsx(Qp, {
        className: "resource_loading_tile--loadingImage--yFmKa",
        animationType: JR.NO_SHIMMER
      })
    }), jsxs("div", {
      className: _$$s.flex.flexColumn.gap4.$,
      children: [jsx(Wi, {
        className: "resource_loading_tile--loadingTitleText--osfVq",
        animationType: JR.NO_SHIMMER
      }), jsx(Wi, {
        className: "resource_loading_tile--loadingSubTitleText--B4vzW",
        animationType: JR.NO_SHIMMER
      })]
    })]
  });
}
let h = "resource_tile_group--resourceTileGroup--gpDUh";
let x = "resource_tile_group--resourceTileGroupCarousel--Cy8Oc";
let f = "resource_tile_group--carouselCardWrapper--xwpG5";
function y({
  showCarousel: e,
  loadingTileCount: t
}) {
  return jsx(Fragment, {
    children: range(t).map(t => jsx("div", {
      className: o()({
        [f]: e
      }, _$$s.p1.$),
      children: jsx(m, {}, t)
    }, t))
  });
}
function g({
  resources: e,
  showCarousel: t,
  onIntersectionChange: r,
  onClickTracking: i
}) {
  return jsx(Fragment, {
    children: e.map((e, n) => jsx("div", {
      className: o()({
        [f]: t
      }, _$$s.p1.$),
      children: ws(e) ? jsx(_$$f, {
        resource: e,
        index: n,
        onIntersectionChange: t => r(e, t.isIntersecting),
        subView: "communityHomepage",
        onClickTracking: i
      }) : jsx(fz, {
        resource: e,
        index: n,
        onIntersectionChange: t => r(e, t.isIntersecting),
        subView: "communityHomepage"
      })
    }, e.id))
  });
}
export function $$v0({
  resources: e,
  maxGridDim: t,
  mobileMaxGridDim: r = {
    rows: 1
  },
  onIntersectionChange: i,
  mobileBreakpoint: n = ikM,
  xScrollLocked: l = !0,
  isLoading: c,
  loadingTileCount: d = 6,
  skipResourceLimit: u = !1,
  onClickTracking: m
}) {
  let _ = N(`(max-width: ${n})`);
  let {
    rows,
    cols
  } = _ && r ? r : t;
  let b = c ? d : e.length;
  if (!b) return null;
  cols && !rows ? f = Math.floor(b / cols) : rows && !cols && (v = Math.floor(b / rows));
  let j = (v = cols || 1) * (f = rows || 1);
  b < j && (f = Math.ceil(b / cols), j = cols * rows);
  let w = u ? e : e.slice(0, j);
  let C = !!(_ && cols && cols > 1);
  if (l) return jsx("div", {
    className: o()(h, {
      [x]: C
    }),
    style: {
      gridTemplateColumns: C ? `repeat(${cols}, 1fr)` : `repeat(${cols}, minmax(0, 1fr))`
    },
    "data-testid": "resource-tile-group",
    children: c ? jsx(y, {
      showCarousel: C,
      loadingTileCount: j
    }) : jsx(g, {
      resources: w,
      showCarousel: C,
      onIntersectionChange: i,
      onClickTracking: m
    })
  });
  let L = w.reduce((e, t, r) => {
    Math.floor(r / cols) > e.length - 1 && e.push([]);
    let s = e[e.length - 1];
    s && s.push(t);
    return e;
  }, []);
  return jsx("div", {
    className: "resource_tile_group--nestedResourceTileGroup--PFO-3",
    children: L.slice(0, rows).map((e, t) => jsx("div", {
      className: o()(h, {
        [x]: C
      }),
      style: {
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: "1"
      },
      "data-testid": "resource-tile-group",
      children: c ? jsx(y, {
        showCarousel: C,
        loadingTileCount: cols
      }) : jsx(g, {
        resources: e,
        showCarousel: C,
        onIntersectionChange: i,
        onClickTracking: m
      })
    }, t))
  });
}
export const A = $$v0;