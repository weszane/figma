import { az } from "../905/449184";
export let $$r0 = new class {
  constructor(e) {
    this.type = e;
  }
  start(e) {
    performance.mark(`${this.type}_${e}.startSpan`, {
      startTime: performance.now()
    });
  }
  endAndReport(e) {
    let t = performance.now();
    let i = `${this.type}_${e}`;
    performance.mark(`${i}.endSpan`, {
      startTime: t
    });
    try {
      let e = performance.measure(`${i}`, `${i}.startSpan`, `${i}.endSpan`).duration;
      az.trackDefinedEvent("file_browser.total_context_menu_load_time", {
        durationMs: Math.round(e),
        type: this.type
      });
      performance.clearMarks(`${i}.startSpan`);
      performance.clearMarks(`${i}.endSpan`);
    } catch (e) {}
  }
}("tile-action-dropdown");
export const $ = $$r0;