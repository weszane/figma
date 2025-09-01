import { useMemo, useCallback } from "react";
import { $H } from "../048e062c/416936";
let o = () => Math.random().toString(36).substring(2, 15);
function i(e) {
  return useMemo(() => {
    let t = new Map();
    let r = new Map();
    Object.entries(e).forEach(([e, n]) => {
      if (e.startsWith("row-")) {
        let r = e.substring(4);
        t.set(r, parseFloat(n));
      } else if (e.startsWith("column-")) {
        let t = e.substring(7);
        r.set(t, parseFloat(n));
      }
    });
    return {
      sortedRowGuids: Array.from(t.entries()).sort((e, t) => e[1] - t[1]).map(e => e[0]),
      sortedColumnGuids: Array.from(r.entries()).sort((e, t) => e[1] - t[1]).map(e => e[0])
    };
  }, [e]);
}
export function $$a1(e, t = o) {
  let r = {};
  let n = e.split("\n").map(e => e.split(",").map(e => e.trim()));
  let l = new Map();
  let i = new Map();
  for (let e = 0; e < n.length; e++) {
    let n = t();
    l.set(e, n);
    r[`row-${n}`] = ((e + 1) * .1).toString();
  }
  let s = Math.max(0, ...n.map(e => e.length));
  for (let e = 0; e < s; e++) {
    let n = t();
    i.set(e, n);
    r[`column-${n}`] = ((e + 1) * .1).toString();
  }
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (!t) continue;
    let o = l.get(e);
    for (let e = 0; e < t.length; e++) {
      let n = t[e];
      let l = i.get(e);
      n && (r[`${o}:${l}`] = n);
    }
  }
  return r;
}
export function $$s0(e) {
  let {
    sortedRowGuids,
    sortedColumnGuids
  } = i(e);
  return useMemo(() => {
    if (0 === sortedRowGuids.length) return {
      columnDefs: [],
      rowData: []
    };
    let n = sortedRowGuids[0];
    let l = sortedColumnGuids.map(t => e[`${n}:${t}`] || "");
    let o = sortedRowGuids.slice(1);
    let i = sortedColumnGuids.length > 0 && o.some(t => {
      let n = sortedColumnGuids[sortedColumnGuids.length - 1];
      let l = e[`${t}:${n}`];
      return l && "" !== l.trim();
    });
    let a = [...l];
    i && (a = [...l, ""]);
    let s = a.map(e => ({
      headerName: e,
      field: e,
      editable: !0
    }));
    let c = o.map(t => {
      let n = {};
      a.forEach((o, i) => {
        if (i < l.length) {
          let l = sortedColumnGuids[i];
          o && l && (n[o] = e[`${t}:${l}`] || "");
        } else n[o] = "";
      });
      return n;
    });
    let u = c[c.length - 1];
    c.length > 0 && u && Object.values(u).some(e => "" !== e) && c.push(a.reduce((e, t) => ({
      ...e,
      [t]: ""
    }), {}));
    return {
      columnDefs: s,
      rowData: c
    };
  }, [e, sortedRowGuids, sortedColumnGuids]);
}
export function $$c2(e) {
  let {
    sortedRowGuids,
    sortedColumnGuids
  } = i(e);
  return useMemo(() => {
    if (0 === Object.keys(e).length || sortedRowGuids.length < 2) return {
      data: [],
      keys: []
    };
    let n = sortedRowGuids[0];
    let l = sortedRowGuids.slice(1);
    let o = sortedColumnGuids[0];
    let i = sortedColumnGuids.slice(1);
    let a = l.map(t => e[`${t}:${o}`]).filter(e => !!e);
    return {
      data: i.map(t => {
        let r = e[`${n}:${t}`];
        if (!r) return null;
        let i = {
          date: r
        };
        l.forEach(r => {
          let n = e[`${r}:${o}`];
          if (!n) return;
          let l = e[`${r}:${t}`];
          let a = l ? parseFloat(l) : 0;
          i[n] = isNaN(a) ? 0 : a;
        });
        return i;
      }).filter(e => null !== e),
      keys: a
    };
  }, [e, sortedRowGuids, sortedColumnGuids]);
}
export function $$u3(e) {
  let t = function (e) {
    let {
      sortedRowGuids,
      sortedColumnGuids
    } = i(e);
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
    let n = ["color1", "color2", "color3", "color4", "color5"];
    return e.map((r, l) => ({
      color: r,
      key: n[l] || "",
      drillDownKeys: t.filter((t, r) => r % e.length === l).map(e => `bar-${e}`)
    }));
  }, [color1, color2, color3, color4, color5, t]);
}
export function $$d4(e, t = o) {
  let {
    sortedRowGuids,
    sortedColumnGuids
  } = i(e);
  return useCallback((n, o, i, s) => {
    let c = {
      ...e
    };
    let u = sortedRowGuids[i];
    let d = sortedColumnGuids[o];
    let p = !u && i === sortedRowGuids.length;
    let f = !d && o === sortedColumnGuids.length;
    if (p) {
      u = t();
      let n = sortedRowGuids[sortedRowGuids.length - 1];
      let l = n ? parseFloat(e[`row-${n}`]) : 0;
      let o = `row-${u}`;
      let i = (l + .1).toPrecision(15);
      c[o] = i;
    }
    if (f) {
      d = t();
      let n = sortedColumnGuids[sortedColumnGuids.length - 1];
      let l = n ? parseFloat(e[`column-${n}`]) : 0;
      let i = `column-${d}`;
      let s = (l + .1).toPrecision(15);
      if (c[i] = s, sortedRowGuids.length > 0) {
        let e = sortedRowGuids[0];
        c[`${e}:${d}`] = `Column ${o + 1}`;
      }
    }
    u && d && (c[`${u}:${d}`] = s, $H(n, c));
  }, [e, sortedRowGuids, sortedColumnGuids, t]);
}
export const YD = $$s0;
export const ZN = $$a1;
export const ZP = $$c2;
export const fM = $$u3;
export const tk = $$d4;