import { atomStoreManager } from "../figma_app/27355";
import { RelatedLinksManager } from "../905/37051";
import { Q } from "../905/917104";
import { e3 } from "../figma_app/852050";
export let $$n1;
export function $$l0() {
  $$n1 = new d();
}
class d {
  constructor() {
    this.developerRelatedLinksManager = new RelatedLinksManager();
  }
  submitDeveloperRelatedLinks(e) {
    this.developerRelatedLinksManager.addLinks(e);
  }
  didGetNodeStatusChange() {
    Q();
  }
  isVariableAvailableInLibraryAsset(e) {
    let t = atomStoreManager.get(e3);
    return t?.status === "loaded" && t.data.some(t => t.node_id === e);
  }
}
export const bJ = $$l0;
export const ld = $$n1;