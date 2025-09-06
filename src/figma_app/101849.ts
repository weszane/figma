import { Z6A, DV9, glU } from "../figma_app/763686";
import { AD } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getI18nString } from "../905/303541";
var o = (e => (e.HEART = "heart", e.STAR = "star", e.PLUS_ONE = "+1", e.THUMBS_UP = "thumbs up", e.THUMBS_DOWN = "thumbs down", e.QUESTION = "question", e.PROFILE = "profile", e.DOT = "dot", e.OTHER = "other", e))(o || {});
let l = {
  heart: {
    type: "heart",
    nodeNameOnCanvas: "Heart"
  },
  star: {
    type: "star",
    nodeNameOnCanvas: "Star"
  },
  "+1": {
    type: "+1",
    nodeNameOnCanvas: "+1"
  },
  "thumbs up": {
    type: "thumbs up",
    nodeNameOnCanvas: "Thumbs up"
  },
  "thumbs down": {
    type: "thumbs down",
    nodeNameOnCanvas: "Thumbs down"
  },
  question: {
    type: "question",
    nodeNameOnCanvas: "Question"
  },
  profile: {
    type: "profile",
    nodeNameOnCanvas: "Profile"
  },
  dot: {
    type: "dot",
    nodeNameOnCanvas: "Dot"
  },
  other: {
    type: "other",
    nodeNameOnCanvas: "Other"
  }
};
let d = [Z6A.STICKY, Z6A.TEXT, Z6A.SHAPE_WITH_TEXT];
export function $$c7(e) {
  return e ? e.textSublayer ? e.textSublayer.textContent : e.textContent ? e.textContent : null : null;
}
let u = (e, t) => e ? $$c7(e) || (e.name ? e.name : null) : null;
let p = e => !!["STICKY", "TEXT", "SHAPE_WITH_TEXT"].includes(e.type);
let _ = (e, t, r) => {
  if (!p(e)) return null;
  let n = r[e.guid];
  let i = u(e, t);
  if (!i) return null;
  let a = {
    t: i,
    bounds: e.absoluteRenderBounds,
    id: e.guid,
    type: e.type
  };
  n && (a.stamps = n);
  return a;
};
let h = e => {
  if (!DV9) return {};
  let t = DV9.getStampsOnNodes(e);
  let r = {};
  for (let [e, n] of t) r[e] = Object.fromEntries(n);
  return r;
};
export function $$m6(e) {
  let t = function (e) {
    if (!glU) return [];
    let t = glU.searchForNodesInSelection(d);
    let r = [];
    for (let n of t) {
      let t = e.get(n);
      t && r.push(t);
    }
    return r.filter(e => p(e));
  }(e);
  let r = h(t.map(e => e.guid));
  let i = [];
  for (let n of t) {
    let t = _(n, e, r);
    t && i.push(t);
  }
  return {
    v: 1,
    data: i
  };
}
export function $$g0(e) {
  let t = function (e) {
    if (!glU) return [];
    let t = glU.getStickyThreadsFromSelection();
    let r = [];
    for (let n of t) {
      let t = !1;
      let i = {
        id: "",
        text: ""
      };
      for (let r of n) {
        let n = e.get(r);
        if (n && "STICKY" === n.type) {
          let e = n.textSublayer && n.textSublayer.textContent || "";
          if (t) {
            i.id = i.id ? `${i.id}|${r}` : r;
            e && (i.text = i.text ? `${i.text}|${e}` : e);
          } else {
            if (t = !0, !e) continue;
            i.id = n.guid;
            i.text = e;
            continue;
          }
        }
      }
      i.text && r.push(i);
    }
    return r;
  }(e);
  let r = JSON.stringify(t).length;
  return {
    v: 1,
    data: t,
    characterCount: r
  };
}
export function $$f1() {
  if (!glU || !DV9) return [];
  let e = glU.searchForNodesInSelection([Z6A.STICKY]);
  let t = DV9.getStickyClustersByAuthor(e);
  let r = [];
  for (let e of t) r.push({
    clusterName: e[0],
    messages: e[1]
  });
  return r;
}
export function $$E2() {
  if (!glU || !DV9) return [];
  let e = glU.searchForNodesInSelection([Z6A.STICKY]);
  let t = DV9.getStickyClusterByColor(e);
  let r = [];
  for (let e of t) r.push({
    clusterName: "",
    messages: e[1]
  });
  return r;
}
export function $$y3() {
  if (!glU || !DV9) return [];
  let e = glU.searchForNodesInSelection([Z6A.STICKY]);
  let t = DV9.getStickyClusterByStampCount(e);
  let r = [];
  for (let e of t) r.push({
    clusterName: e[0],
    messages: e[1]
  });
  r.sort((e, t) => parseInt(t.clusterName) - parseInt(e.clusterName));
  return r;
}
let b = e => {
  if (!DV9) return [];
  let t = DV9.getStickyClusterByStampType(e);
  let r = [];
  t.forEach((e, t) => {
    let n = "No stamps" === t ? null : function (e) {
      let t = Object.values(l).find(t => t.nodeNameOnCanvas === e);
      return t ? t.type : "other";
    }(t);
    let i = r.find(e => e.stampType === n);
    i || (i = {
      stampType: n,
      stickyThreadGuids: []
    }, r.push(i));
    i.stickyThreadGuids.push(...e);
  });
  return r;
};
let T = (e, t, r) => {
  let n = [];
  let i = e.get(t);
  if (!i) return n;
  for (let e of i.stuckNodes) e && e.name === l[r].nodeNameOnCanvas && n.push(e.guid);
  return n;
};
export function $$I4() {
  if (!glU) return [];
  let e = b(glU.searchForNodesInSelection([Z6A.STICKY]));
  let t = getSingletonSceneGraph();
  let r = [];
  for (let n of e) {
    let e = n.stickyThreadGuids.flatMap(e => e.split("|"));
    let i = [];
    if (n.stampType) for (let r of e) i.push(...T(t, r, n.stampType));
    r.push({
      clusterName: function (e) {
        switch (e) {
          case o.HEART:
            return getI18nString("whiteboard.clustering.heart_stamp_cluster");
          case o.DOT:
            return getI18nString("whiteboard.clustering.dot_stamp_cluster");
          case o.PLUS_ONE:
            return getI18nString("whiteboard.clustering.plus_one_stamp_cluster");
          case o.PROFILE:
            return getI18nString("whiteboard.clustering.face_stamp_cluster");
          case o.QUESTION:
            return getI18nString("whiteboard.clustering.question_mark_stamp_cluster");
          case o.STAR:
            return getI18nString("whiteboard.clustering.star_stamp_cluster");
          case o.THUMBS_DOWN:
            return getI18nString("whiteboard.clustering.thumbs_down_stamp_cluster");
          case o.THUMBS_UP:
            return getI18nString("whiteboard.clustering.thumbs_up_stamp_cluster");
          case o.OTHER:
          default:
            return getI18nString("whiteboard.clustering.other_stamp_cluster");
          case null:
            return getI18nString("whiteboard.clustering.no_stamps_cluster");
        }
      }(n.stampType),
      messages: n.stickyThreadGuids,
      allowedStampsToCopyGuids: i
    });
  }
  return r;
}
export function $$S5(e, t) {
  let r = e.get(t);
  if (!r || !r.isDiagramNode) return null;
  let n = $$c7(r);
  if (!n) return null;
  let a = [];
  let s = r.diagramParentId;
  for (; s && s !== AD;) {
    let t = e.get(s);
    if (!t) break;
    let r = $$c7(t);
    r && a.push(r);
    s = t.diagramParentId;
  }
  a.reverse();
  let o = [];
  for (let t of r.diagramChildIds) {
    let r = $$c7(e.get(t));
    r && o.push(r);
  }
  return {
    selectedNode: n,
    parentHierarchy: a,
    children: [],
    excludedSuggestions: o
  };
}
export const zi = $$g0;
export const Gq = $$f1;
export const MS = $$E2;
export const bM = $$y3;
export const ON = $$I4;
export const ep = $$S5;
export const b7 = $$m6;
export const SU = $$c7;