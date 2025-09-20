import { filterNotNullish } from "../figma_app/656233";
import { Thumbnail, RelationType, ImageExportType, LibraryUpdateStatus, SceneGraphHelpers } from "../figma_app/763686";
import { sessionLocalIDToString } from "../905/871411";
import s from "../vendor/267721";
import l from "../vendor/946678";
import c from "../vendor/626715";
import { isColorDark } from "../figma_app/191804";
import { parsePxInt } from "../figma_app/783094";
import { logWarning } from "../905/714362";
import { XHR } from "../905/910117";
import { getFileKey } from "../905/412913";
import { z5 } from "../905/713722";
import { A as _$$A } from "../905/639174";
import { rY } from "../905/985490";
import { getImageManager } from "../figma_app/624361";
import { fetchStylesByKeys, batchFetchFiles } from "../figma_app/646357";
import { bW } from "../905/491806";
import { SourceDirection, ViewType } from "../905/535806";
import { vPu, kLz } from "../figma_app/27776";
import { A as _$$A2 } from "../2854/317197";
import { A as _$$A3 } from "../2854/950417";
import { A as _$$A4 } from "../2854/957401";
var o = s;
var d = l;
var u = c;
let T = async (e, t, i) => {
  let {
    data: {
      meta: {
        images
      }
    }
  } = await XHR.post(`/api/file_diff/file_merge/${e}/${t}/generate_images`, i, {
    retryCount: 2
  });
  return images;
};
export function $$k2({
  nodes: e,
  width: t,
  height: i,
  scale: n
}) {
  return e.map(e => {
    let a;
    e.isStyle || (a = e.backgroundColor ?? $$D20);
    let [s, o] = Thumbnail.generateThumbnailForNode(e.id, t || 0, i || 0, 2, {
      scale: n ?? (t && i ? void 0 : 2),
      type: "UNCOMPRESSED",
      clearColor: a,
      renderDefaultStateForSubscribedStateGroups: !0
    });
    return o.length ? {
      image: o,
      width: s.width,
      height: s.height
    } : null;
  });
}
export function $$R1(e) {
  let t = rY.getImmediateParentHierarchyNodeChange(e, RelationType.PARENT);
  if (t) return t;
  {
    let t = rY.getImmediateParentHierarchyNodeChange(e, RelationType.BASIS_PARENT);
    if (t) return t;
  }
}
let N = async (e, t) => {
  let i;
  let n = new Promise(e => {
    i = setTimeout(() => {
      logWarning("merge", "gave up waiting on images");
      e();
    }, t);
  });
  let a = getImageManager().loadAllImagesUnder([e], ImageExportType.NON_ANIMATED_ONLY, "merge.waitForImagesToLoad");
  await Promise.race([n, a]);
  clearTimeout(i);
};
let P = (e, t, i, n) => {
  let a = performance.now();
  let s = async e => {
    await N(e.id, 3e4);
    let [t, a] = Thumbnail.generateThumbnailForNode(e.id, i || 0, n || 0, 2, {
      scale: i && n ? void 0 : 2,
      type: "PNG"
    });
    return bW(a);
  };
  let o = performance.now() - a;
  let l = e.map(e => e.id);
  if (l.length > 0) {
    let e = l.sort().join(",");
    rY.trackGranularLoadTime({
      durationMs: o,
      functionName: "getMergeResultImages",
      nodeIds: e,
      ...t
    });
  }
  return Promise.all(e.map(s));
};
export async function $$O5(e, t, i, n, s) {
  let [l, c] = d()(e, e => e.mainChunk.phase === LibraryUpdateStatus.REMOVED);
  let u = function (e) {
    let {
      direction,
      fileKey,
      nodeIds,
      checkpointKey,
      resolution,
      maxChunksPerRequest
    } = e;
    return 0 === nodeIds.length ? [] : o()(nodeIds, maxChunksPerRequest).map(e => T(direction, fileKey, {
      node_ids: e.join(","),
      checkpoint_key: checkpointKey,
      resolution
    }).then(t => {
      let i = {};
      for (let t of e) i[t] = null;
      for (let e of t) i[e.node_id] = e;
      return i;
    }));
  }({
    direction: SourceDirection.FROM_SOURCE,
    fileKey: t,
    nodeIds: l.map(e => sessionLocalIDToString(e.mainChunk.displayNode.guid)),
    checkpointKey: n,
    resolution: ViewType.SUMMARY,
    maxChunksPerRequest: 50
  });
  let p = await P(c.map(e => ({
    id: sessionLocalIDToString(e.mainChunk.displayNode.guid),
    styleType: e.mainChunk.displayNode.styleType
  })), {
    branchKey: t,
    sourceKey: i,
    branchModalTrackingId: s
  }, 2 * parsePxInt(vPu), 2 * parsePxInt(kLz));
  let h = {};
  p.forEach((e, t) => {
    let i = sessionLocalIDToString(c[t].mainChunk.displayNode.guid);
    i && e && (h[i] = e);
  });
  let g = Promise.all(u).then(e => {
    let t = {};
    e.forEach(e => {
      Object.keys(e).forEach(function (i) {
        let n = e[i];
        t[i] = n ? n.img_url : null;
      });
    });
    return t;
  });
  return [Promise.resolve(h), g];
}
export let $$D20 = "rgba(0, 0, 0, 0.06)";
export function $$L13(e, t) {
  return !!e && !(t && $$F0(t));
}
export function $$F0(e) {
  return "GRID" === e.styleType && !!e.layoutGrids?.length;
}
export function $$M9(e) {
  return !!(e.canvasIsInternal && e.displayNode.styleType && !e.styleKey);
}
export function $$j12(e) {
  return e.canvasIsInternal && "VARIABLE_SET" === e.displayNode.type && !e.displayNode.key;
}
export function $$U7(e) {
  return !!(e.styleKey || e.componentLibraryKey);
}
export function $$B4(e) {
  if ("SYMBOL" !== e.displayNode.type) return !1;
  let t = e.basisParentHierarchyGuids.map(t => rY.getParentHierarchyNodeChange(e.diffType, t, RelationType.BASIS_PARENT));
  for (let t of e.parentHierarchyGuids.map(t => rY.getParentHierarchyNodeChange(e.diffType, t, RelationType.PARENT))) if (t.isStateGroup) return !0;
  for (let e of t) if (e.isStateGroup) return !0;
  return !1;
}
let V = getFileKey();
let G = async (e, t, i) => {
  if (0 === e.length) return {
    styleKeyToFileKey: {},
    styleKeyToLibraryKey: {}
  };
  let n = {};
  let r = {};
  (await fetchStylesByKeys(i, e, t)).forEach(e => {
    n[e.key] = e.library_key;
    r[e.key] = V(e);
  });
  return {
    styleKeyToLibraryKey: n,
    styleKeyToFileKey: r
  };
};
export async function $$z15(e, t, i) {
  let r = filterNotNullish(u()(e.map(e => e.mainChunk.styleKey)));
  let a = filterNotNullish(u()(e.map(e => e.mainChunk.componentLibraryKey)));
  let [{
    styleKeyToLibraryKey: s,
    styleKeyToFileKey: o
  }] = await Promise.all([G(r, t, i), batchFetchFiles(a, i)]);
  return {
    styleKeyToLibraryKey: s,
    styleKeyToFileKey: o
  };
}
export function $$H10(e) {
  if ("CANVAS" === e.displayNode.type) {
    e.displayNode.internalOnly && (e.displayNode.name = "Other");
    return rY.parseParentHierarchyNodeChange(e.displayNode);
  }
  let t = rY.getImmediateParentHierarchyNodeChange(e, RelationType.PARENT);
  let i = rY.getTopLevelParentHierarchyNodeChange(e, RelationType.PARENT);
  let n = rY.getImmediateParentHierarchyNodeChange(e, RelationType.BASIS_PARENT);
  let s = rY.getTopLevelParentHierarchyNodeChange(e, RelationType.BASIS_PARENT);
  if (t && !t.internalOnly && i) return i;
  if (n && !n.internalOnly && s) return s;
  let o = t ?? n;
  if (!o) throw Error(`Chunk ${sessionLocalIDToString(e.displayNode.guid)} should have a page`);
  o.name = "Other";
  return o;
}
export function $$W8(e, t) {
  let i = $$H10(t);
  let n = i.guid || "";
  return e[n] ? e[n].backgroundColor : i?.backgroundColor ? z5.format({
    r: i.backgroundColor.red,
    g: i.backgroundColor.green,
    b: i.backgroundColor.blue,
    a: i.backgroundColor.alpha
  }) : $$D20;
}
let K = (e, t, i) => {
  let n = {};
  let r = [];
  let a = i || Object.keys(e);
  let s = t;
  for (let t of a) for (let i of (n[t] = [], e[t])) {
    let e = {
      ...i,
      index: s
    };
    n[t].push(e);
    r.push(e);
    s++;
  }
  return {
    numberedDisplayGroupMap: n,
    numberedDisplayGroups: r
  };
};
let Y = e => {
  let t = {};
  Object.keys(e).forEach(i => {
    for (let n of e[i]) {
      let e = n.mainChunk;
      let a = rY.getTopLevelParentHierarchyNodeChange(e, RelationType.PARENT)?.parentIndexPosition;
      if (a) {
        t[a] = i;
        break;
      }
    }
  });
  let i = Object.keys(t).sort().map(e => t[e]);
  return i.filter(t => t in e).concat(Object.keys(e).filter(e => !i.includes(e)));
};
export function $$q16(e, t, i, n) {
  let s = function (e, t, i, n = SourceDirection.TO_SOURCE) {
    let s = {};
    let o = {};
    let l = {};
    let d = {};
    let c = {};
    if (e.forEach(e => {
      let t = e.mainChunk;
      if ($$M9(t) && t.displayNode.styleType) {
        let i = t.displayNode.styleType;
        l[i] || (l[i] = []);
        l[i].push(e);
        return;
      }
      if ("variable-collection" === e.type && $$j12(t)) {
        let i = sessionLocalIDToString(t.displayNode.guid);
        if (null == i) return;
        d[i] || (d[i] = []);
        d[i].push(e);
        return;
      }
      if ($$U7(t)) {
        let n = t.componentLibraryKey || i[t.styleKey];
        c[n] || (c[n] = []);
        c[n].push(e);
        return;
      }
      if (s[t.canvasId] || (s[t.canvasId] = []), s[t.canvasId].push(e), !o[t.canvasId] || t.phase !== LibraryUpdateStatus.REMOVED) {
        let e = $$H10(t);
        let i = e.backgroundColor;
        let n = e.name;
        o[t.canvasId] = {
          name: n,
          backgroundColor: i ? z5.format({
            r: i.red,
            g: i.green,
            b: i.blue,
            a: i.alpha
          }) : $$D20
        };
      }
    }), n === SourceDirection.FROM_SOURCE) for (let e of Object.keys(o)) {
      let t = SceneGraphHelpers.getNodePageBackgroundColor(e);
      t && (o[e] = {
        ...o[e],
        backgroundColor: t
      });
    }
    return {
      displayGroupsByPage: s,
      pageIdToInfo: o,
      displayGroupsByStyle: l,
      displayGroupsByVariableSet: d,
      displayGroupsByLibrary: c
    };
  }(e, 0, i, n);
  let o = [];
  let l = 0;
  let d = Y(s.displayGroupsByPage);
  let {
    numberedDisplayGroupMap: _numberedDisplayGroupMap3,
    numberedDisplayGroups: _numberedDisplayGroups3
  } = K(s.displayGroupsByPage, l, d);
  o = o.concat(_numberedDisplayGroups3);
  l += _numberedDisplayGroups3.length;
  let {
    numberedDisplayGroupMap,
    numberedDisplayGroups
  } = K(s.displayGroupsByStyle, l);
  o = o.concat(numberedDisplayGroups);
  l += numberedDisplayGroups.length;
  let {
    numberedDisplayGroupMap: _numberedDisplayGroupMap,
    numberedDisplayGroups: _numberedDisplayGroups
  } = K(s.displayGroupsByVariableSet, l);
  o = o.concat(_numberedDisplayGroups);
  l += _numberedDisplayGroups.length;
  let {
    numberedDisplayGroupMap: _numberedDisplayGroupMap2,
    numberedDisplayGroups: _numberedDisplayGroups2
  } = K(s.displayGroupsByLibrary, l);
  o = o.concat(_numberedDisplayGroups2);
  l += _numberedDisplayGroups2.length;
  return {
    allDisplayGroups: o,
    displayGroupsByPage: _numberedDisplayGroupMap3,
    pageIdToInfo: s.pageIdToInfo,
    displayGroupsByStyle: numberedDisplayGroupMap,
    displayGroupsByVariableSet: _numberedDisplayGroupMap,
    displayGroupsByLibrary: _numberedDisplayGroupMap2,
    sortedPageIds: d
  };
}
export function $$$14(e) {
  return {
    modifiedVariants: e.variantChunks.filter(e => e.mainChunk.phase !== LibraryUpdateStatus.UNMODIFIED).map((e, t) => ({
      ...e,
      index: t
    })),
    unmodifiedVariants: e.variantChunks.filter(e => e.mainChunk.phase === LibraryUpdateStatus.UNMODIFIED).map((e, t) => ({
      ...e,
      index: t
    }))
  };
}
export function $$Z18(e) {
  let {
    layoutGrids
  } = e;
  let i = _$$A4;
  if (layoutGrids?.length === 1) {
    let e = layoutGrids[0];
    "STRIPES" === e.pattern && (i = "Y" === e.axis ? _$$A3 : _$$A2);
  }
  return i;
}
export function $$X3(e) {
  return !!e && "NONE" !== e && void 0 !== e;
}
export function $$Q17(e, t, i) {
  let n = t && isColorDark(t);
  return !("GRID" === i || "EFFECT" === i) && (n || e && ("NONE" !== i || void 0 !== i));
}
export function $$J6(e, t) {
  return $$et11(e, t, !0);
}
export function $$ee19(e, t) {
  return $$et11(e, t, !1);
}
export function $$et11(e, t, i) {
  let n = {};
  "TEXT" === e.displayNode.styleType || "FILL" === e.displayNode.styleType || (("EFFECT" === e.displayNode.styleType || "GRID" === e.displayNode.styleType) && (n.backgroundImage = `url('${_$$A()}')`, n.backgroundSize = i ? "24px" : "16px"), n.backgroundColor = t && "string" != typeof t ? $$W8(t, e) : t);
  return n;
}
export const $2 = $$F0;
export const C_ = $$R1;
export const FD = $$k2;
export const KZ = $$X3;
export const MY = $$B4;
export const Mt = $$O5;
export const Oh = $$J6;
export const Oi = $$U7;
export const PE = $$W8;
export const Rw = $$M9;
export const WE = $$H10;
export const Xp = $$et11;
export const Y1 = $$j12;
export const cs = $$L13;
export const ju = $$$14;
export const mT = $$z15;
export const on = $$q16;
export const rB = $$Q17;
export const s$ = $$Z18;
export const uA = $$ee19;
export const yi = $$D20;