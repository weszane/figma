import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { parsePxNumber } from "../figma_app/783094";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
export function $$o0(e) {
  let {
    minColumnWidth,
    columnGaps = []
  } = e.styling || {};
  function o(t) {
    if (t === e.columns.length - 1) return 0;
    if (!Array.isArray(columnGaps)) return columnGaps;
    let n = columnGaps[t] ?? "default";
    return "default" === n ? 24 : n;
  }
  let d = e.columns.map((e, i) => {
    let n = e.gridColumnWidth ?? "max-content";
    let a = o(i);
    let s = function (e, t) {
      if (!e.endsWith("px")) return e;
      let i = parsePxNumber(e) + t;
      return `${i}px`;
    }(n, a);
    return minColumnWidth ? `minmax(${minColumnWidth + a}px, ${s})` : s;
  }).join(" ");
  let c = `repeat(${e.items.length + 2}, 55px)`;
  return jsxs("div", {
    className: cssBuilderInstance.wFull.grid.$,
    style: styleBuilderInstance.add({
      gridTemplateColumns: d,
      gridTemplateRows: c
    }).$,
    children: [jsx(l, {
      columns: e.columns,
      type: "header",
      getColumnGap: o
    }), e.items.map(t => jsx(l, {
      columns: e.columns,
      type: "content",
      item: t,
      getColumnGap: o
    }, `row-${t}`)), jsx(l, {
      type: "aggregate",
      columns: e.columns,
      items: e.items,
      getColumnGap: o
    })]
  });
}
function l(e) {
  let t = t => {
    switch (e.type) {
      case "header":
        return t.name;
      case "content":
        return t.cellComponent(e.item);
      case "aggregate":
        return t.getAggregate?.(e.items);
    }
  };
  let i = e => {
    switch (e.textAlign) {
      case "right":
        return cssBuilderInstance.alignRight;
      case "center":
        return cssBuilderInstance.alignCenter;
      default:
        return cssBuilderInstance.alignLeft;
    }
  };
  return jsx(Fragment, {
    children: e.columns.map((r, s) => {
      let o = "content" === e.type ? `${e.type}-${e.item}` : e.type;
      let l = "aggregate" === e.type;
      let d = l && r.aggregateColumnSpan ? `span ${r.aggregateColumnSpan}` : void 0;
      return l && 0 === r.aggregateColumnSpan ? null : jsx("div", {
        "data-testid": `aggregated-table-cell-${o}-${r.id}`,
        className: cssBuilderInstance.contentCenter.add(i(r)).$$if("aggregate" !== e.type, cssBuilderInstance.textBodyMedium.bb1.bSolid.colorBorder, cssBuilderInstance.textBodyMediumStrong).$,
        style: {
          paddingLeft: 0,
          paddingRight: e.getColumnGap(s),
          display: "inherit",
          gridColumn: d
        },
        children: t(r)
      }, `cell-${o}-${r.id}`);
    })
  });
}
export const C = $$o0;