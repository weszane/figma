import { isEmptyObject } from "../figma_app/493477";
import { traverseChildren, getAncestors } from "../figma_app/387100";
import { createOptimistThunk } from "../905/350402";
import { exportPickerSetItemsAction } from "../905/496937";
import { getCurrentPageId } from "../figma_app/357047";
import { traverseNodeChildren, applyToNodes } from "../figma_app/678300";
class d {
  constructor() {
    this.indexer = {};
  }
  next(e) {
    null == this.indexer[e] ? this.indexer[e] = 0 : this.indexer[e]++;
    return this.indexer[e];
  }
}
let c = {
  PNG: ".png",
  JPEG: ".jpg",
  SVG: ".svg",
  PDF: ".pdf"
};
export function $$u1(e, t, r, n) {
  let i;
  let a;
  if ("CANVAS" === e) {
    "" === (i = r).trim() && (i = "Untitled");
    a = i = i.replace(/\//g, "_");
  } else {
    (i = t).endsWith("/") && (i = i.substr(0, i.length - 1));
    let e = i.lastIndexOf("/");
    for (let t of (a = -1 !== e ? i.substr(e + 1, i.length) : i, n)) {
      let e = t.substr(0, t.lastIndexOf("/"));
      e.length > 0 && (i = e + "/" + i);
    }
  }
  return {
    name: i,
    title: a
  };
}
export let $$p0 = createOptimistThunk(e => {
  let t = e.getState();
  let r = [];
  let a = [];
  let p = t.mirror;
  let h = p.sceneGraph;
  let m = e => {
    (null != e.exportSettings && e.exportSettings.length > 0 || _(e)) && r.push(e);
  };
  if (isEmptyObject(p.sceneGraphSelection)) {
    let e = h.get(getCurrentPageId(p.appModel));
    e && (traverseChildren(e, m), traverseChildren(e, e => {
      let t = e.parentNode;
      _(e) && null != t && "CANVAS" === t.type && a.push({
        nodeID: e.guid,
        name: e.name
      });
    }));
  } else {
    traverseNodeChildren(h, p.sceneGraphSelection, m);
    applyToNodes(h, p.sceneGraphSelection, e => {
      _(e) && a.push({
        nodeID: e.guid,
        name: e.name
      });
    });
  }
  let g = "Untitled";
  t.openFile && (g = t.openFile.name);
  let f = [];
  let E = new d();
  let y = new d();
  for (let e of r) {
    let t = getAncestors(p.sceneGraph, e.guid).filter(e => !e.visible);
    if (!e.visible || t.length > 0) continue;
    let r = e.exportSettings;
    if (null != r) for (let t of r) {
      if (null == t.imageType) continue;
      let r = getAncestors(p.sceneGraph, e.guid).map(e => e.name);
      let {
        name,
        title
      } = $$u1(e.type, e.name, g, r);
      let s = function (e, t, r, n) {
        let i = `${e}-${t}-${r.imageType}-${r.suffix}`;
        return `${i}-${n.next(i)}`;
      }(e.guid, name, t, y);
      let {
        filename,
        isDuplicate
      } = function (e, t, r, n) {
        let i;
        let a = !1;
        "" === e.trim() && (e = "Untitled");
        i = `${e}${t}${r}`;
        let s = n.next(`${i}`);
        s > 0 && (i = `${e}${t}-${s}${r}`, a = !0);
        return {
          filename: i,
          isDuplicate: a
        };
      }(name, t.suffix || "", c[t.imageType], E);
      f.push({
        itemID: s,
        nodeID: e.guid,
        title,
        filename,
        exportSetting: t,
        warning: isDuplicate ? "Name duplicated" : void 0,
        warningTooltip: isDuplicate ? `Renamed to ${filename}` : void 0
      });
    }
  }
  e.dispatch(exportPickerSetItemsAction({
    items: f,
    frames: a
  }));
});
function _(e) {
  return ("FRAME" === e.type || "SYMBOL" === e.type) && !e.resizeToFit;
}
export const HR = $$p0;
export const vk = $$u1;