import { atom, atomStoreManager } from "../figma_app/27355";
import r from "../vendor/241899";
import { debugState } from "../905/407919";
import { trackFileEvent } from "../figma_app/314264";
var a = r;
let l = atom(!1);
export class $$d0 {
  constructor(e) {
    this.statMap = {
      totalAssetInstructions: 0,
      totalFillAssets: 0,
      totalGeneratedAssetSvgs: 0,
      totalGeneratedAssetImages: 0,
      totalAssetFiles: 0,
      totalAssetCacheHits: 0,
      totalFlattenedFillAssets: 0
    };
    this.record = (e, t) => {
      this.timingMap[e] ??= performance.now();
      t && this.updateStats(t);
      this.maybeFlushFigmentEvent();
    };
    this.maybeFlushFigmentEvent = () => {
      let {
        runtime_loaded,
        page_json_loaded,
        rendered,
        bundle_generation_start,
        bundle_generation_stop,
        asset_generation_start,
        asset_generation_stop
      } = this.timingMap;
      if (!this.hasTracked && null !== runtime_loaded && null !== page_json_loaded && null !== rendered && null !== bundle_generation_start && null !== bundle_generation_stop && null !== asset_generation_start && null !== asset_generation_stop) {
        this.hasTracked = !0;
        let u = debugState.getState();
        let p = atomStoreManager.get(this.sitePreviewStateAtom);
        trackFileEvent("sites_preview_perf", u.openFile?.key, a()(u, ["selectedView", "fileByKey"]), {
          click_to_runtime_load_ms: runtime_loaded - this.initTime,
          runtime_load_to_json_load_ms: page_json_loaded - runtime_loaded,
          json_load_to_render_ms: rendered - page_json_loaded,
          click_to_render_ms: rendered - this.initTime,
          bundle_generation_ms: bundle_generation_stop - bundle_generation_start,
          asset_generation_ms: asset_generation_stop - asset_generation_start,
          initial_webpage_guid: p?.startingNodeId,
          preview_mode: p?.mode,
          is_first_session_preview: this.isFirstSessionPreview,
          total_asset_instructions: this.statMap.totalAssetInstructions,
          total_asset_files: this.statMap.totalAssetFiles,
          total_asset_cache_hits: this.statMap.totalAssetCacheHits,
          total_fill_assets: this.statMap.totalFillAssets,
          total_generated_asset_svgs: this.statMap.totalGeneratedAssetSvgs,
          total_generated_asset_images: this.statMap.totalGeneratedAssetImages,
          total_flattened_fill_assets: this.statMap.totalFlattenedFillAssets
        }, {
          forwardToDatadog: !0
        });
      }
    };
    this.initTime = performance.now();
    this.timingMap = {
      runtime_loaded: null,
      page_json_loaded: null,
      rendered: null,
      bundle_generation_start: null,
      bundle_generation_stop: null,
      asset_generation_start: null,
      asset_generation_stop: null
    };
    this.hasTracked = !1;
    this.sitePreviewStateAtom = e;
    this.isFirstSessionPreview = !atomStoreManager.get(l);
    this.isFirstSessionPreview && atomStoreManager.set(l, !0);
  }
  updateStats(e) {
    for (let [t, i] of Object.entries(e)) {
      this.statMap[t] += i;
      this.statMap[t] < 0 && (this.statMap[t] = 0);
    }
  }
}
export const g = $$d0;