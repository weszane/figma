import { useEffect } from "react";
import { UP } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { _ } from "../905/793009";
class o {
  constructor() {
    this.allTemplateInfo = new Set();
    this.nodeGUIDsToTemplate = new Map();
    o.instance = this;
  }
  static removeInstance() {
    o.instance = void 0;
  }
  trackNodesAsTemplate(e, t, r, n) {
    let i = getSingletonSceneGraph();
    if (Array.from(t).forEach(e => {
      l(i.get(e)) || t.$$delete(e);
    }), 0 === t.size) return;
    let s = Math.floor(.1 * t.size);
    let o = {
      templateId: e,
      fileKey: r,
      nodeGUIDs: t,
      trackedNodeCount: t.size,
      deletionThreshold: s,
      creationMethod: n
    };
    this.allTemplateInfo.add(o);
    t.forEach(e => this.nodeGUIDsToTemplate.set(e, o));
  }
  checkForTemplateNodesDeletion(e) {
    0 !== this.allTemplateInfo.size && e.forEach(e => this.checkForTemplateNodeDeletion(e));
  }
  checkForTemplateNodeDeletion(e) {
    let t = this.nodeGUIDsToTemplate.get(e);
    if (!t) return;
    this.nodeGUIDsToTemplate.$$delete(e);
    let r = t.nodeGUIDs;
    r.$$delete(e);
    r.size <= t.deletionThreshold && (this.stopTrackingTemplate(t), _("template_deleted", {
      templateId: t.templateId,
      fileKey: t.fileKey,
      productType: "figjam",
      trackedNodeCount: t.trackedNodeCount,
      creationMethod: t.creationMethod
    }));
  }
  stopTrackingTemplate(e) {
    this.allTemplateInfo.$$delete(e);
    e.nodeGUIDs.forEach(e => this.nodeGUIDsToTemplate.$$delete(e));
  }
}
let l = e => !!e && ("CANVAS" === e.type ? e.visible : l(e.parentNode));
export async function $$d0(e, t, r, n, {
  enableTracking: a = !0
} = {}) {
  let s = o.instance;
  if (!a || !s) return await n();
  let l = UP();
  let c = await n();
  let u = new Set(UP());
  l.forEach(e => u.$$delete(e));
  t ||= "null";
  s.trackNodesAsTemplate(e(), u, t, r);
  return c;
}
export function $$c1() {
  useEffect(() => {
    let e = new o();
    let t = getSingletonSceneGraph().onDelete(t => e.checkForTemplateNodesDeletion(t));
    return () => {
      t();
      o.removeInstance();
    };
  }, []);
}
export const B = $$d0;
export const M = $$c1;