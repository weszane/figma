import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { l7 } from "../905/189185";
import { $$default } from "../5609/597604";
import { YD, tk } from "../048e062c/444406";
export function $$d0({
  jsxProps: e,
  nodeId: a
}) {
  let {
    columnDefs,
    rowData
  } = YD(e);
  let [o, c] = useState(null);
  let [i, g] = useState("");
  let h = tk(e);
  let m = () => {
    null !== o && l7.user("chart-updateHeader", () => {
      h(a, o, 0, i);
    });
    c(null);
    g("");
  };
  let f = () => {
    c(null);
    g("");
  };
  function x({
    displayName: e,
    columnIndex: a
  }) {
    return o === a ? jsx("input", {
      value: i,
      onChange: e => g(e.target.value),
      onKeyDown: e => {
        "Enter" === e.key ? m() : "Escape" === e.key && f();
      },
      onBlur: m,
      autoFocus: !0,
      className: "x1gs6z28 x1md70p1 xh8yej3 x117nqv4 x1qlqyl8 x1heor9g x1a2a7pz"
    }) : jsx("div", {
      className: "x117nqv4",
      children: e
    });
  }
  let p = columnDefs.map((e, a) => ({
    ...e,
    headerComponent: x,
    headerComponentParams: {
      displayName: e.headerName,
      columnIndex: a
    }
  }));
  return jsx("div", {
    className: "x16nrsnc xdpfuu1",
    children: jsx($$default, {
      columnDefs: p,
      rowData,
      onCellValueChanged: e => {
        let {
          node,
          column,
          newValue
        } = e;
        let u = node.rowIndex;
        let s = column.getLeft();
        let o = column.getActualWidth();
        let c = s && o ? Math.round(s / o) : 0;
        let i = [...rowData];
        i[u] || (i[u] = {});
        l7.user("chart-updateCell", () => {
          h(a, c, u + 1, newValue);
        });
      },
      onColumnHeaderClicked: e => {
        let a = e.column;
        if (!("getColDef" in a)) return;
        let l = a.getLeft();
        let t = a.getActualWidth();
        let n = null !== l && t ? Math.round(l / t) : 0;
        let r = a.getColDef().headerName || "";
        c(n);
        g(r);
      },
      defaultColDef: {
        editable: !0
      }
    })
  });
}
export const DataTable = $$d0;