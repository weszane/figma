import { nP, ul, rm } from "../figma_app/262240";
function r(e, t) {
  return void 0 === e.name && void 0 === e.type && void 0 === e.characters && void 0 === e.fills && void 0 === e.x && void 0 === e.y && void 0 === e.w && void 0 === e.h && void 0 === e.interactions && void 0 === e.children && null === t.semanticType && !t.isNavigationMenu;
}
function a(e) {
  return e.name.length > 50 ? e.name.substring(0, 50) + "..." : e.name;
}
let s = ["group", "mask group", "maskgroup"];
let o = [...s, "frame", "rectangle", "layer", "line", "component", "vector", "ellipse", "path", "union", "subtract", "intersect"];
export function $$l0(e, t = o) {
  let i = e.toLowerCase().trim().replace("_", "");
  if (i.length > 0 && !isNaN(Number(i))) return !0;
  for (let e of t) if (i.startsWith(e)) {
    let t = i.slice(e.length);
    if (0 === t.length || !isNaN(Number(t))) return !0;
  }
  return !1;
}
function d(e) {
  var t;
  var i;
  if ($$l0(null !== (t = e.name) && void 0 !== t ? t : "")) {
    if (!e.children || 0 === e.children.length) return {};
  } else if ($$l0(null !== (i = e.name) && void 0 !== i ? i : "", s)) {
    if (e.children && 1 === e.children.length) {
      let t = e.children[0];
      t.id = e.id;
      return t;
    }
  } else if (e.children && 1 === e.children.length && e.name === e.children[0].name) {
    let t = e.children[0];
    t.id = e.id;
    return t;
  }
  return e;
}
export function $$c2(e, t, i, s) {
  let o = [];
  for (let l of e) {
    let e = t ? function e(t, i, s) {
      if (!1 === t.visible || 0 === t.opacity) return null;
      let o = s.get(t.id);
      if (!o) throw Error("Error getting features for node " + t.id);
      let l = {};
      let c = t.type;
      if (i) {
        l.name = a(t);
        l.parentNode = t.parentNode;
        t.id && (l.id = t.id);
      } else {
        var p;
        if (o?.isClippedByAncestor || o?.isCovered) return null;
        let e = null !== (p = t.characters) && void 0 !== p ? p : "";
        let i = e.toLowerCase();
        "TEXT" !== c || i.includes("lorem ipsum") ? l.name = a(t) : (e.length > 10 && t.name && t.name.length > 10 && e.substring(0, 10) !== t.name.substring(0, 10) && (l.name = a(t)), l.characters = e.substring(0, 100));
      }
      nP(t) && (l.x = t.x, l.y = t.y);
      let m = [];
      for (let i of (t.children && (m = t.children), m)) {
        let t = e(i, !1, s);
        t && (l.children ? l.children.push(t) : l.children = [t]);
      }
      return (u(t) && (l.fills = t.fills, l.w = t.w, l.h = t.h), l = d(l), t.interactions && t.interactions.length > 0 && (l.interactions = t.interactions), r(l, o)) ? null : l;
    }(l, !0, i) : function e(t, i, s) {
      if (!1 === t.visible || 0 === t.opacity) return null;
      let o = i.get(t.id);
      if (!o) throw Error("Error getting features for node " + t.id);
      let l = {};
      let c = t.type;
      if (nP(t)) {
        if ("FRAME" !== c && "INSTANCE" !== c) return null;
        l.name = a(t);
        l.x = t.x;
        l.y = t.y;
        l.w = t.w;
        l.h = t.h;
      } else {
        var p;
        if (s.includes("remove_nonstandard_node_types") && "FRAME" !== c && "SYMBOL" !== c && "INSTANCE" !== c && "GROUP" !== c && "RECTANGLE" !== c && "ROUNDED_RECTANGLE" !== c && "TEXT" !== c || s.includes("remove_invisible_nodes") && (o?.isClippedByAncestor || o?.isCovered)) return null;
        let e = null !== (p = t.characters) && void 0 !== p ? p : "";
        let i = e.toLowerCase();
        s.includes("remove_long_or_generated_text") && "TEXT" === c && !i.includes("lorem ipsum") ? (e.length > 10 && t.name && t.name.length > 10 && e.substring(0, 10) !== t.name.substring(0, 10) && (l.name = a(t)), l.characters = e.substring(0, 100)) : l.name = a(t);
      }
      l.interactions = t.interactions;
      t.id && (l.id = t.id);
      let m = [];
      for (let n of (t.children && (m = t.children), l.caption = t.caption, m)) {
        let t = e(n, i, s);
        t && (l.children ? l.children.push(t) : l.children = [t]);
      }
      return (u(t) && (l.fills = t.fills, l.w = t.w, l.h = t.h), s.includes("flatten_groups") && (l = d(l)), s.includes("remove_empty_nodes") && r(l, o)) ? null : l;
    }(l, i, s);
    e && o.push(e);
  }
  o.sort((e, t) => void 0 === e.x || void 0 === t.x || void 0 === e.y || void 0 === t.y ? 0 : e.y !== t.y ? e.y - t.y : e.x !== t.x ? e.x - t.x : 0);
  return o;
}
function u(e) {
  return !!e.fills && e.fills.filter(e => "IMAGE" === e.type).length > 0;
}
export function $$p1(e, t) {
  let i;
  t && (i = new Map([...t].map(([e, t]) => [t, e])));
  let r = [];
  let a = [];
  if (e.forEach(e => {
    ul(e, e => {
      let t = rm(e, i);
      let s = t.interactionMappings.map(e => {
        let t = {
          buttonID: e.buttonID,
          actionType: e.navigationType
        };
        e.destinationScreenID && (t.destScreenID = e.destinationScreenID);
        return t;
      });
      r.push(...s);
      a.push(...t.interactionIds);
    });
  }), 0 === r.length) return {
    unfinishedJson: "",
    interactionIds: []
  };
  let s = JSON.stringify(r, null, 2);
  let o = s.lastIndexOf("}");
  return {
    unfinishedJson: s.slice(0, o + 1) + ",",
    interactionIds: a
  };
}
export const bB = $$l0;
export const i9 = $$p1;
export const sS = $$c2;