import { createEmptyMixin15 } from '../905/112832';
import { IA, sg } from '../905/859698';
import { PK } from '../figma_app/243058';
import { nM } from '../figma_app/276332';


export function $$l1(e) {
  return class extends createEmptyMixin15(e) {
    get idForPluginApi() {
      return this.styleKeyForPublish ?
      nM({
        key: this.styleKeyForPublish,
        version: this.isLocalStyle ? IA('') : this.getStyleVersion()
      }) :
      '';
    }

    get styleAssetId() {
      return PK.fromBindingsObj(this.styleId);
    }

    get styleId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.styleId(this.sceneGraph.nodeContext);
    }

    getStyleVersion() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStyleVersion(this.sceneGraph.nodeContext);
    }

    get styleKey() {
      let e = this.assetKey;
      return e === sg.INVALID ? null : e;
    }

    get styleKeyForPublish() {
      let e = this.assetKeyForPublish;
      return e === sg.INVALID ? null : e;
    }

    get isLocalStyle() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsLocalStyle(this.sceneGraph.nodeContext);
    }

    get styleVersionHash() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getStyleVersionHash(this.sceneGraph.nodeContext);
      return e === IA.INVALID ? null : e;
    }
  };
}
export function $$d0(e) {
  return (e).styleType !== 'NONE';
}
export const G = $$d0;
export const w = $$l1;
