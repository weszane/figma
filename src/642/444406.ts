import { useMemo, useCallback } from "react";
import { $H } from "../048e062c/416936";
let i = () => Math.random().toString(36).substring(2, 15);
function l(e) {
  return useMemo(() => {
    let t = new Map();
    let s = new Map();
    Object.entries(e).forEach(([e, r]) => {
      if (e.startsWith("row-")) {
        let s = e.substring(4);
        t.set(s, parseFloat(r));
      } else if (e.startsWith("column-")) {
        let t = e.substring(7);
        s.set(t, parseFloat(r));
      }
    });
    return {
      sortedRowGuids: Array.from(t.entries()).sort((e, t) => e[1] - t[1]).map(e => e[0]),
      sortedColumnGuids: Array.from(s.entries()).sort((e, t) => e[1] - t[1]).map(e => e[0])
    };
  }, [e]);
}
export function $$a1(e, t = i) {
  let s = {};
  let r = e.split("\n").map(e => e.split(",").map(e => e.trim()));
  let n = new Map();
  let l = new Map();
  for (let e = 0; e < r.length; e++) {
    let r = t();
    n.set(e, r);
    s[`row-${r}`] = ((e + 1) * .1).toString();
  }
  let o = Math.max(0, ...r.map(e => e.length));
  for (let e = 0; e < o; e++) {
    let r = t();
    l.set(e, r);
    s[`column-${r}`] = ((e + 1) * .1).toString();
  }
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if (!t) continue;
    let i = n.get(e);
    for (let e = 0; e < t.length; e++) {
      let r = t[e];
      let n = l.get(e);
      r && (s[`${i}:${n}`] = r);
    }
  }
  return s;
}
export function $$o0(e) {
  let {
    sortedRowGuids,
    sortedColumnGuids
  } = l(e);
  return useMemo(() => {
    if (0 === sortedRowGuids.length) return {
      columnDefs: [],
      rowData: []
    };
    let r = sortedRowGuids[0];
    let n = sortedColumnGuids.map(t => e[`${r}:${t}`] || "");
    let i = sortedRowGuids.slice(1);
    let l = sortedColumnGuids.length > 0 && i.some(t => {
      let r = sortedColumnGuids[sortedColumnGuids.length - 1];
      let n = e[`${t}:${r}`];
      return n && "" !== n.trim();
    });
    let a = [...n];
    l && (a = [...n, ""]);
    let o = a.map(e => ({
      headerName: e,
      field: e,
      editable: !0
    }));
    let d = i.map(t => {
      let r = {};
      a.forEach((i, l) => {
        if (l < n.length) {
          let n = sortedColumnGuids[l];
          i && n && (r[i] = e[`${t}:${n}`] || "");
        } else r[i] = "";
      });
      return r;
    });
    let c = d[d.length - 1];
    d.length > 0 && c && Object.values(c).some(e => "" !== e) && d.push(a.reduce((e, t) => ({
      ...e,
      [t]: ""
    }), {}));
    return {
      columnDefs: o,
      rowData: d
    };
  }, [e, sortedRowGuids, sortedColumnGuids]);
}
export function $$d2(e) {
  let {
    sortedRowGuids,
    sortedColumnGuids
  } = l(e);
  return useMemo(() => {
    if (0 === Object.keys(e).length || sortedRowGuids.length < 2) return {
      data: [],
      keys: []
    };
    let r = sortedRowGuids[0];
    let n = sortedRowGuids.slice(1);
    let i = sortedColumnGuids[0];
    let l = sortedColumnGuids.slice(1);
    let a = n.map(t => e[`${t}:${i}`]).filter(e => !!e);
    return {
      data: l.map(t => {
        let s = e[`${r}:${t}`];
        if (!s) return null;
        let l = {
          date: s
        };
        n.forEach(s => {
          let r = e[`${s}:${i}`];
          if (!r) return;
          let n = e[`${s}:${t}`];
          let a = n ? parseFloat(n) : 0;
          l[r] = isNaN(a) ? 0 : a;
        });
        return l;
      }).filter(e => null !== e),
      keys: a
    };
  }, [e, sortedRowGuids, sortedColumnGuids]);
}
export function $$c3(e) {
  let t = function (e) {
    let {
      sortedRowGuids,
      sortedColumnGuids
    } = l(e);
    return sortedRowGuids.slice(1).map(t => e[`${t}:${sortedColumnGuids[0]}`]);
  }(e);
  let {
    color1,
    color2,
    color3,
    color4,
    color5
  } = e;
  return useMemo(() => {
    let e = [color1, color2, color3, color4, color5];
    let r = ["color1", "color2", "color3", "color4", "color5"];
    return e.map((s, n) => ({
      color: s,
      key: r[n] || "",
      drillDownKeys: t.filter((t, s) => s % e.length === n).map(e => `bar-${e}`)
    }));
  }, [color1, color2, color3, color4, color5, t]);
}
export function $$u4(e, t = i) {
  let {
    sortedRowGuids,
    sortedColumnGuids
  } = l(e);
  return useCallback((r, i, l, o) => {
    let d = {
      ...e
    };
    let c = sortedRowGuids[l];
    let u = sortedColumnGuids[i];
    let p = !c && l === sortedRowGuids.length;
    let h = !u && i === sortedColumnGuids.length;
    if (p) {
      c = t();
      let r = sortedRowGuids[sortedRowGuids.length - 1];
      let n = r ? parseFloat(e[`row-${r}`]) : 0;
      let i = `row-${c}`;
      let l = (n + .1).toPrecision(15);
      d[i] = l;
    }
    if (h) {
      u = t();
      let r = sortedColumnGuids[sortedColumnGuids.length - 1];
      let n = r ? parseFloat(e[`column-${r}`]) : 0;
      let l = `column-${u}`;
      let o = (n + .1).toPrecision(15);
      if (d[l] = o, sortedRowGuids.length > 0) {
        let e = sortedRowGuids[0];
        d[`${e}:${u}`] = `Column ${i + 1}`;
      }
    }
    c && u && (d[`${c}:${u}`] = o, $H(r, d));
  }, [e, sortedRowGuids, sortedColumnGuids, t]);
}
export const YD = $$o0;
export const ZN = $$a1;
export const ZP = $$d2;
export const fM = $$c3;
export const tk = $$u4;