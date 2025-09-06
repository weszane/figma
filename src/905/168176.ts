import { td } from "../figma_app/930338";
import { MultiSetMap } from "../905/810750";
import { $7 } from "../905/258397";
export class $$s0 {
  constructor(e, t) {
    for (let [i, n] of (this.scene = e, this.ownFailuresById = new MultiSetMap(), this.childrenWithFailuresById = new MultiSetMap(), this.badgesById = new Map(), this.propertiesById = new Map(), t.entries())) {
      let t = e.getNodeByGuid(i);
      t && this.processEntry(t, n);
    }
  }
  generateBadges(e) {
    let t = this.badgesById.get(e);
    if (t) return t;
    let i = [];
    let r = this.ownFailuresById.get(e);
    if (r && r.size > 0) {
      let e = r.size;
      let t = `${td(e, "SceneGraph validation failure")} for this node: ${Array.from(r).join(", ")}`;
      i.push({
        type: "error",
        value: `${e}!`,
        title: t
      });
    }
    let a = this.childrenWithFailuresById.get(e);
    if (a && a.size > 0) {
      let e = a.size;
      let t = `${td(e, "SceneGraph validation failure")} in this node's descendants.`;
      i.push({
        type: "warning",
        value: `${e}!`,
        title: t
      });
    }
    this.badgesById.set(e, i);
    return i;
  }
  generateProperty(e) {
    return this.propertiesById.get(e) || (this.scene.getNodeById(e) ? {
      label: "SceneGraph validation info",
      children: [$7({
        label: "Validation failures",
        list: Array.from(this.ownFailuresById.get(e) ?? []),
        generateChild: (e, t) => ({
          key: t,
          label: "",
          value: {
            type: "error",
            value: t
          },
          children: []
        })
      }), $7({
        label: "Children with validation failures",
        list: Array.from(this.childrenWithFailuresById.get(e) ?? []),
        generateChild: this.scene.generateNodeLinkItem
      })]
    } : null);
  }
  processEntry(e, t) {
    for (let i of t) this.ownFailuresById.add(e.id, i);
    for (let t = e.parent; t; t = t.parent) this.childrenWithFailuresById.add(t.id, e.guid);
  }
}
export const m = $$s0;