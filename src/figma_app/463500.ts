import { debug } from "../figma_app/465776";
import { Fullscreen } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { compareWithGeneratedKey } from "../905/709171";
import { splitPath, getDirname, getBasename } from "../905/309735";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
export function $$d13(e, t) {
  let r = {
    name: "",
    type: "STYLE_FOLDER",
    level: 0,
    styles: [],
    subfolders: [],
    styleTypeSection: t
  };
  e.forEach(e => {
    let n = r;
    let i = splitPath(e.name);
    i.pop();
    i.forEach(e => {
      let r = n.name ? n.name + "/" + e : e;
      let i = n.subfolders.find(e => e.name === r);
      if (!i) {
        let e = {
          name: r,
          type: "STYLE_FOLDER",
          level: n.level + 1,
          styles: [],
          subfolders: [],
          styleTypeSection: t
        };
        n.subfolders.push(e);
        i = e;
      }
      n = i;
    });
    n.styles.push(e);
  });
  return r;
}
export function $$c17(e) {
  if (!e.length) return [];
  let t = $$d13(e, e[0].style_type);
  let r = [];
  let n = e => {
    e.styles.length > 0 && r.push(e.name);
    e.subfolders.forEach(n);
  };
  n(t);
  return r;
}
export function $$u12(e) {
  let t = [...e.subfolders].reverse();
  let r = [...e.styles];
  for (; t.length > 0;) {
    let e = t.pop();
    e && (r.push(e), r.push(...e.styles), t.push(...[...e.subfolders].reverse()));
  }
  return r;
}
export function $$p16(e) {
  return "STYLE_FOLDER" === e.type ? e.name : e.node_id;
}
export function $$_3(e) {
  return e.split("/").filter(e => e).map(e => e.trim()).join("/");
}
export function $$h14(e, t) {
  let r = t[e];
  if ("STYLE_FOLDER" !== r.type) return [];
  let n = [];
  for (let [i, a] of t.slice(e + 1).entries()) {
    if ("STYLE_FOLDER" === a.type && a.level <= r.level) break;
    n.push(e + 1 + i);
  }
  return n;
}
function m(e) {
  return "STYLE_FOLDER" === e.type ? e.name : getDirname(e.name);
}
export function $$g8(e) {
  return $$u12(e).filter(e => e.type === PrimaryWorkflowEnum.STYLE);
}
export function $$f0(e) {
  return $$u12(e).filter(e => "STYLE_FOLDER" === e.type);
}
export function $$E5(e) {
  let t = [];
  e.forEach(e => {
    "STYLE_FOLDER" === e.type ? t.push(...$$g8(e)) : t.push(e);
  });
  return t;
}
export function $$y4(e, t) {
  let r = $$b10(e, t);
  let n = [];
  r.forEach(e => {
    let r = t[e];
    r && n.push(r);
  });
  return n;
}
export function $$b10(e, t) {
  let r = [];
  let n = t.map(e => e.type === PrimaryWorkflowEnum.STYLE ? e.node_id : null);
  let i = t.map(e => "STYLE_FOLDER" === e.type ? e.name : null);
  e.styleIds.forEach(e => {
    let t = n.indexOf(e);
    -1 !== t && r.push(t);
  });
  e.folderNames.forEach(e => {
    let t = i.indexOf(e);
    -1 !== t && r.push(t);
  });
  r.sort((e, t) => e - t);
  return r;
}
export function $$T15(e) {
  return e.type === PrimaryWorkflowEnum.STYLE ? splitPath(e.name).length : e.level;
}
export function $$I2(e, t) {
  compareWithGeneratedKey(e, t) && (Fullscreen.deleteNode(e.node_id), trackEventAnalytics("Style Deleted", {
    styleType: e.style_type,
    from: "styleListContextMenu"
  }));
}
export function $$S1(e, t, r, n) {
  if (!e && !r || !t) return !1;
  let i = !n && "" !== n || "STYLE_FOLDER" === t.type && r === t && e?.type === PrimaryWorkflowEnum.STYLE && $$T15(e) > $$T15(r) && n !== getDirname(t.name);
  return !(e === t || r === t && (t.type === PrimaryWorkflowEnum.STYLE || !i) || "STYLE_FOLDER" === t.type && (e?.type === PrimaryWorkflowEnum.STYLE && r?.type === PrimaryWorkflowEnum.STYLE || e?.type === "STYLE_FOLDER" && r?.type === PrimaryWorkflowEnum.STYLE || e && (m(e) + "/").startsWith(t.name + "/") || r && (m(r) + "/").startsWith(t.name + "/") && !i));
}
export function $$v6(e, t, r, a, s, c, p) {
  if (e.forEach(e => {
    (function (e, t) {
      let r = e.filter(e => e.type === PrimaryWorkflowEnum.STYLE).map(e => e.node_id);
      let n = [];
      t.forEach(e => {
        r.indexOf(e.node_id) > -1 && n.push(e);
      });
      let i = e[0];
      let a = $$u12($$d13(n, i.type === PrimaryWorkflowEnum.STYLE ? i.style_type : i.styleTypeSection)).filter(e => e.type === PrimaryWorkflowEnum.STYLE);
      for (let e = 0; e < r.length; e++) if (r[e] !== a[e].node_id) return !0;
      return !1;
    })(s = function (e, t) {
      let r = new Set();
      let n = new Set();
      for (let t of e) (t.type === PrimaryWorkflowEnum.STYLE ? [t] : function e(t) {
        let r = [];
        t.styles.forEach(e => {
          r.push(e);
        });
        t.subfolders.forEach(t => {
          r.push(t);
          r.push(...e(t));
        });
        return r;
      }(t).concat([t])).forEach(e => e.type === PrimaryWorkflowEnum.STYLE ? n.add(e.node_id) : r.add(e.name));
      return t.filter(e => "STYLE_FOLDER" === e.type ? !r.has(e.name) : !n.has(e.node_id));
    }([e], s), c) && (c = A(e, s, c));
  }), !s) return;
  let _ = new Set(e.map(e => "STYLE_FOLDER" === e.type || p ? function (e, t, r, i) {
    if (!e) return i.some(e => e.type === PrimaryWorkflowEnum.STYLE && "" === getDirname(e.name)) ? null : -1;
    if (!t) return r.length - 1;
    let a = r.map(e => e.node_id);
    if (e.type === PrimaryWorkflowEnum.STYLE && t.type === PrimaryWorkflowEnum.STYLE || "STYLE_FOLDER" === e.type && t.type === PrimaryWorkflowEnum.STYLE) return null;
    if (e.type === PrimaryWorkflowEnum.STYLE && "STYLE_FOLDER" === t.type && $$T15(e) === $$T15(t)) {
      let r = a.indexOf(e.node_id);
      let n = function (e, t) {
        let r = $$g8(e);
        let n = new Set(t.filter(e => e.type === PrimaryWorkflowEnum.STYLE).map(e => e.node_id));
        let i = r[0];
        r.forEach(e => {
          e.sort_position && i.sort_position && e.sort_position < i.sort_position && n.has(e.node_id) && (i = e);
        });
        return i;
      }(t, i);
      let s = a.indexOf(n.node_id);
      return r < s ? r : s - 1;
    }
    {
      let s = i.indexOf(t);
      if (-1 !== s) {
        let e = i.slice(s, i.length).find(e => e.type === PrimaryWorkflowEnum.STYLE);
        if (!e) return r.length - 1;
        let t = a.indexOf(e.node_id);
        debug(-1 !== t, "style to insert before does not exist in the stored list");
        return t - 1;
      }
      {
        let t = i.indexOf(e);
        let s = i.slice(t + 1).reverse().find(e => e.type === PrimaryWorkflowEnum.STYLE);
        if (!s) return r.length - 1;
        let o = a.indexOf(s.node_id);
        debug(-1 !== o, "style to insert after does not exist in the stored list");
        return o;
      }
    }
  }(t, r, c, s) : function (e, t, r, i) {
    if (!e) return -1;
    if (!t) return r.length - 1;
    let a = r.map(e => e.node_id);
    if (e.type === PrimaryWorkflowEnum.STYLE && "STYLE_FOLDER" === t.type) return a.indexOf(e.node_id);
    {
      let e = i.indexOf(t);
      let s = i.slice(e, i.length).find(e => e.type === PrimaryWorkflowEnum.STYLE);
      if (!s) return r.length - 1;
      let o = a.indexOf(s.node_id);
      debug(-1 !== o, "style to insert before does not exist in the stored list");
      return o - 1;
    }
  }(t, r, c, s)));
  if (_.size > 1 || _.has(null)) return;
  let h = _.values().next().value;
  let m = c[h];
  let f = c[h + 1];
  let E = new Map();
  let y = m;
  for (let t of e) {
    let e = t => {
      t.type === PrimaryWorkflowEnum.STYLE ? (Fullscreen.insertStyleBetween(t.node_id, y?.node_id || "", f?.node_id || ""), y = t) : (t.styles.forEach(t => {
        e(t);
      }), t.subfolders.forEach(t => {
        e(t);
      }));
    };
    e(t);
    let r = "" === a ? [] : a.split("/");
    let n = [...r, getBasename(t.name)];
    if (n.join("/") !== t.name) {
      let e = (t, r) => {
        if (t.type === PrimaryWorkflowEnum.STYLE) {
          let e = [...r, getBasename(t.name)].join("/");
          E.set(t.node_id, e);
          Fullscreen.renameNode(t.node_id, e);
        } else {
          E.set(t.name, r.join("/"));
          t.styles.forEach(t => {
            e(t, r);
          });
          t.subfolders.forEach(t => {
            let n = [...r, getBasename(t.name)];
            e(t, n);
          });
        }
      };
      e(t, "STYLE_FOLDER" === t.type ? n : r);
    } else E.set("STYLE_FOLDER" === t.type ? t.name : t.node_id, t.name);
  }
  return E;
}
let A = (e, t, r) => {
  let n = splitPath(e.name);
  e.type === PrimaryWorkflowEnum.STYLE && n.pop();
  let a = t.filter(e => e.type === PrimaryWorkflowEnum.STYLE);
  let s = [];
  for (; n.length;) {
    let e = n.join("/");
    if (0 === (s = a.filter(t => getDirname(t.name).startsWith(e))).length) n.pop();else break;
  }
  if (s.length) {
    let t;
    let n = s[0];
    s.forEach(e => {
      null != e.sort_position && null != n.sort_position && e.sort_position < n.sort_position && (n = e);
    });
    t = e.type === PrimaryWorkflowEnum.STYLE ? e : $$g8(e)[0];
    let a = r.indexOf(t);
    let o = r[a - 1];
    let d = r[a + 1];
    Fullscreen.insertStyleBetween(n.node_id, o?.node_id || "", d?.node_id || "");
    let c = [...r];
    c.splice(c.indexOf(n), 1);
    c.splice(c.indexOf(o) + 1, 0, n);
    return c;
  }
  return r;
};
export function $$x9({
  prevItem: e,
  nextItem: t,
  localStyleSelection: r,
  styleList: i,
  collapsedFolders: a,
  horizontalDragAmount: s,
  temporarilyExpandedFolders: d
}) {
  if (!r) return null;
  let c = $$y4(r, i);
  let u = c[0];
  if (e?.type === "STYLE_FOLDER" && a.has(e.name) && -1 === d.indexOf(e.name)) return {
    folderNameToNestUnder: e.name,
    dividerStyles: {
      display: "none"
    }
  };
  if (e?.type === PrimaryWorkflowEnum.STYLE) {
    let t = getDirname(e.name).split("/");
    for (let e = 0; e < t.length; e++) {
      let r = t.slice(0, e + 1).join("/");
      if (a.has(r) && -1 === d.indexOf(r)) {
        if ("STYLE_FOLDER" !== u.type) return {
          folderNameToNestUnder: r,
          dividerStyles: {
            display: "none"
          }
        };
        return {
          folderNameToNestUnder: getDirname(r),
          dividerStyles: {
            marginLeft: 24 * Math.min(splitPath(r).length, 8) - 8
          }
        };
      }
    }
  }
  let p = 0;
  let _ = null;
  let h = e ? $$T15(e) : 0;
  let m = t ? $$T15(t) : 0;
  if (h <= m) {
    p = m;
    _ = e ? e.type === PrimaryWorkflowEnum.STYLE ? getDirname(e.name) : e.name : "";
  } else if (debug(null != e, "Dragging after an item that doesn't exist"), u.type === PrimaryWorkflowEnum.STYLE || s >= .5) {
    p = h;
    _ = getDirname(e.name);
  } else {
    let t = Math.floor(s / .5 * $$T15(e));
    t = Math.max(m - 1, t);
    _ = splitPath(getDirname(e.name)).slice(0, t).join("/");
    p = t + 1;
  }
  let g = {
    marginLeft: 24 * Math.min(p, 8) - 8
  };
  return e && c.includes(e) || !$$S1(e, u, t) ? {
    folderNameToNestUnder: null,
    dividerStyles: g
  } : {
    folderNameToNestUnder: _,
    dividerStyles: g
  };
}
export function $$N11(e, t) {
  let r = e[0];
  let n = r ? t.indexOf(r) : -1;
  let i = n;
  let a = n + 1;
  if (r?.type === PrimaryWorkflowEnum.STYLE && t[a] && t[a]?.type === PrimaryWorkflowEnum.STYLE) {
    let e = $$T15(r);
    for (let r = n + 1; r < t.length; r++) {
      let n = t[r];
      if ("STYLE_FOLDER" === n.type && n.level === e || $$T15(n) < e) {
        i = r - 1;
        a = r;
        break;
      }
      r === t.length - 1 && (i = r, a = r + 1);
    }
  }
  return {
    prevItem: t[i],
    nextItem: t[a]
  };
}
export const KU = $$f0;
export const Md = $$S1;
export const Nr = $$I2;
export const Pc = $$_3;
export const QA = $$y4;
export const Ug = $$E5;
export const VB = $$v6;
export const a2 = function e(t, r) {
  t.styles.forEach(e => {
    $$I2(e, r);
  });
  t.subfolders.forEach(t => {
    e(t, r);
  });
};
export const dm = $$g8;
export const g5 = $$x9;
export const h$ = $$b10;
export const j3 = $$N11;
export const l0 = $$u12;
export const lM = $$d13;
export const mx = $$h14;
export const rM = $$T15;
export const t_ = $$p16;
export const wM = $$c17;