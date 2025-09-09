import { createEmptyMixin as CreateEmptyMixin } from '../905/112832';
import { StyleIdHandler} from '../figma_app/243058';
import { nM as NMUtil } from '../figma_app/276332';

/**
 * Enhances a base class with style-related properties and methods.
 * @param Base - The base class to extend.
 * @returns A new class with style mixin functionality.
 * (Original: $$l1)
 */
export function withStyleMixin<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class StyleMixin extends CreateEmptyMixin(Base) {
    /**
     * Returns the style key for the plugin API, or an empty string if not available.
     * (Original: idForPluginApi)
     */
    get idForPluginApi(): string {
      return this.styleKeyForPublish ? NMUtil({
        key: this.styleKeyForPublish,
        version: this.isLocalStyle ? '' : this.getStyleVersion()
      }) : '';
    }

    /**
     * Returns the style asset ID from the styleId binding.
     * (Original: styleAssetId)
     */
    get styleAssetId(): any {
      return StyleIdHandler.fromBindingsObj(this.styleId);
    }

    /**
     * Retrieves the style ID from the node context.
     * (Original: styleId)
     */
    get styleId(): any {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.styleId(this.sceneGraph.nodeContext);
    }

    /**
     * Retrieves the style version from the node context.
     * (Original: getStyleVersion)
     */
    getStyleVersion(): any {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getStyleVersion(this.sceneGraph.nodeContext);
    }

    /**
     * Returns the style key, or null if invalid.
     * (Original: styleKey)
     */
    get styleKey(): any {
      const key = this.assetKey;
      return key === 'INVALID' ? null : key;
    }

    /**
     * Returns the style key for publishing, or null if invalid.
     * (Original: styleKeyForPublish)
     */
    get styleKeyForPublish(): any {
      const key = this.assetKeyForPublish;
      return key === 'INVALID' ? null : key;
    }

    /**
     * Determines if the style is local.
     * (Original: isLocalStyle)
     */
    get isLocalStyle(): boolean {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsLocalStyle(this.sceneGraph.nodeContext);
    }

    /**
     * Returns the style version hash, or null if invalid.
     * (Original: styleVersionHash)
     */
    get styleVersionHash(): any {
      this.setGlobalNodeID();
      const hash = this.bindings.NodeTsApi.getStyleVersionHash(this.sceneGraph.nodeContext);
      return hash === 'INVALID' ? null : hash;
    }
  };
}

/**
 * Checks if the given object's styleType is not 'NONE'.
 * @param obj - The object to check.
 * @returns True if styleType is not 'NONE', false otherwise.
 * (Original: $$d0)
 */
export function hasStyleType(obj: any): boolean {
  return obj.styleType !== 'NONE';
}

// Exported names updated for clarity and traceability
export const G = hasStyleType;
export const w = withStyleMixin;
