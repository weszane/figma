import { Fullscreen } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { zk } from "../figma_app/198712";
export class $$s0 {
  getValue() {
    let e = new Map();
    for (let t of getSingletonSceneGraph().getDirectlySelectedNodes()) {
      t.update();
      let r = this.getValueForNode(t);
      null != r && e.set(t.guid, r);
    }
    return e;
  }
  onChange(e, t, r) {
    let s = !1;
    for (let n of getSingletonSceneGraph().getDirectlySelectedNodes()) {
      let i = e.get(n.guid);
      if (null != i) try {
        let e = t(i);
        this.setValueForNode(n, e, r === zk.NO);
        s = !0;
      } catch (e) {}
    }
    r !== zk.NO && s && Fullscreen?.triggerAction("commit", {});
  }
}
export const M = $$s0;