import { FullscreenPerfInfo, CorePerfInfo, TextureType, ImageSourceType, Multiplayer } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { BrowserInfo } from "../figma_app/778880";
import { isInteractionOrEvalMode } from "../figma_app/897289";
import { ds } from "../figma_app/314264";
import { aW, le } from "../figma_app/527873";
import { getJoinStatusString } from "../figma_app/582924";
import { h as _$$h } from "../figma_app/276445";
import { dd, PH } from "../905/550523";
let g = {
  periodMs: 36e5,
  frequentPeriodMs: 6e4
};
let f = {
  periodMs: 3e5,
  frequentPeriodMs: 6e4
};
export function $$E2(e, t) {
  return Object.keys(e).reduce((r, n) => {
    let i = t[n];
    let a = e[n];
    null != i && null != a && (r[n] = i - a);
    return r;
  }, {});
}
export function $$y1() {
  let e = b();
  if (!FullscreenPerfInfo) return {
    ...e
  };
  let t = FullscreenPerfInfo.getHeapMemoryBreakdown();
  let r = {};
  for (let e of Object.keys(t)) r[`heap_breakdown_${e}`] = t[e];
  let i = FullscreenPerfInfo.getRendererMemoryBreakdown() || {};
  function a(e) {
    return "number" == typeof e ? e : parseInt(e);
  }
  return {
    ...e,
    renderer_gpu_memory: a(FullscreenPerfInfo.getRendererGpuMemory()),
    renderer_textures_memory: a(i.textures),
    renderer_vertex_buffers_memory: a(i.vertexBuffers),
    renderer_render_buffers_memory: a(i.renderBuffers),
    renderer_uniform_buffers_memory: a(i.uniformBuffers),
    image_memory: a(FullscreenPerfInfo.getTotalImageMemory()),
    ...r
  };
}
function b() {
  let e = aW() ?? 0;
  let t = CorePerfInfo;
  if (!t) return {
    process_memory: e,
    emscripten_reserved_memory: le()
  };
  let r = t.getTotalUsedHeapMemory();
  return {
    process_memory: e,
    cpp_memory: r,
    js_memory: e > r ? e - r : void 0,
    cpp_max_memory: t.getMaxUsedHeapMemory(),
    alloc_total: t.getAllocTotal(),
    alloc_call_count: t.getAllocCallCount(),
    emscripten_reserved_memory: le(),
    indirect_buffer_memory: t.getJsBufferMemory(),
    texture_image_memory: t.getTextureMemStatsTotal(TextureType.IMAGE),
    texture_tile_atlas_memory: t.getTextureMemStatsTotal(TextureType.TILE_ATLAS),
    texture_tile_stack_memory: t.getTextureMemStatsTotal(TextureType.TILE_STACK),
    texture_glyph_data_memory: t.getTextureMemStatsTotal(TextureType.GLYPH_DATA),
    compressed_images: t.getImageMemStatsTotal(ImageSourceType.BITMAP),
    uncompressed_images_arraybuffer: t.getImageMemStatsTotal(ImageSourceType.COMPRESSED),
    uncompressed_images_imagebitmap: t.getImageMemStatsTotal(ImageSourceType.BUFFER)
  };
}
async function T() {
  if (desktopAPIInstance) {
    let e = await desktopAPIInstance.getCPUUsage();
    if (e) return e.percent;
  }
  return null;
}
async function I(e, t, r, i, o) {
  let p = "Fullscreen Periodic Metrics" === e;
  if (!(!CorePerfInfo || "ok" !== atomStoreManager.get(_$$h) || isInteractionOrEvalMode())) {
    if (p) {
      let a = $$y1();
      r && (a.cpu_usage = await T());
      let s = dd();
      let c = PH();
      ds(e, i, debugState.getState(), {
        reporting_interval: t,
        file_key: i,
        is_hidden: document.hidden,
        product_type: o,
        is64BitBrowser: BrowserInfo.is64BitBrowser,
        multiplayer_state: Multiplayer && getJoinStatusString(Multiplayer.getSessionState()),
        ...a,
        ...s,
        ...c
      }, {
        forwardToDatadog: !0
      });
    } else {
      let n = b();
      r && (n.cpu_usage = await T());
      let a = dd();
      let o = PH();
      trackEventAnalytics(e, {
        reporting_interval: t,
        file_key: i,
        is_hidden: document.hidden,
        is64BitBrowser: BrowserInfo.is64BitBrowser,
        ...n,
        ...a,
        ...o
      }, {
        forwardToDatadog: !0
      });
    }
  }
}
let S = !1;
export function $$v0(e, t, r) {
  if (S) return;
  S = !0;
  let n = getFeatureFlags().cpu_monitoring_enabled || !1;
  let a = "Fullscreen Periodic Metrics" === e ? g : f;
  let s = a.periodMs;
  getFeatureFlags().frequent_periodic_metrics && (s = a.frequentPeriodMs);
  setTimeout(() => {
    I(e, 0, n, t(), r());
  }, 3e5);
  setInterval(() => {
    I(e, s, n, t(), r());
  }, s);
}
export const Ts = $$v0;
export const Z_ = $$y1;
export const yQ = $$E2;