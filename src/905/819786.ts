import { R } from "../905/995587";
export class $$r0 extends R {
  get rootObjects() {
    return this.scene.rootNodes;
  }
  getObject(e) {
    return this.scene.getNodeById(e);
  }
}
export const $ = $$r0;