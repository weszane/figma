import { debug } from "../figma_app/465776";
import { az } from "../905/449184";
var a = (e => (e.SLIDE = "SLIDE", e.SLIDE_MASTER = "SLIDE_MASTER", e.SLIDE_LAYOUT = "SLIDE_LAYOUT", e.NODE = "NODE", e.META = "META", e))(a || {});
var $$s1 = (e => (e.IMPORT = "IMPORT", e.EXPORT = "EXPORT", e))($$s1 || {});
let o = class e {
  constructor() {
    this.scopes = {};
    this.next = 0;
  }
  withScope(t, i, n, r) {
    let a = this.createScope(t, i, n);
    try {
      return r(a);
    } catch (i) {
      e.error(`Uncaught error in scope ${t}`, a, i);
      return i;
    } finally {
      null != a && this.closeScope(a.id);
    }
  }
  async withScopeAsync(t, i, n, r) {
    let a = this.createScope(t, i, n);
    try {
      return await r(a);
    } catch (i) {
      e.error(`Uncaught error in scope ${t}`, a, i);
      return i;
    } finally {
      null != a && this.closeScope(a.id);
    }
  }
  createScope(e, t, i) {
    let n = this.next++;
    let r = i ? i.depth + 1 : 0;
    this.scopes[n] = {
      id: n,
      label: e,
      type: t,
      start: Date.now(),
      parent: i?.id ?? null,
      depth: r
    };
    return this.scopes[n];
  }
  closeScope(e) {
    let t = this.scopes[e];
    debug(null != t && null == t.durationMs, "Scope should exist and not have a duration");
    let i = Date.now() - t.start;
    t.durationMs = i;
  }
  toFigmentLatency(e, t, i, n) {
    "IMPORT" !== e && az.trackDefinedEvent("slides.export.pptx.latency", {
      durationMs: t,
      numSlides: i,
      success: n
    });
  }
  static getInstance() {
    e.instance || (e.instance = new e());
    return e.instance;
  }
  static reset() {
    e.instance = void 0;
  }
  totalDurationMs() {
    return Object.values(this.scopes).filter(e => 0 === e.depth).map(e => e.durationMs ?? 0).reduce((e, t) => e + t, 0);
  }
  static withSlideScope(t, i) {
    return e.getInstance().withScope(`Slide ${t}`, "SLIDE", null, i);
  }
  static withSlideScopeAsync(t, i) {
    return e.getInstance().withScopeAsync(`Slide ${t}`, "SLIDE", null, i);
  }
  static withSlideMasterScope(t, i) {
    return e.getInstance().withScope(`Slide Master ${t}`, "SLIDE_MASTER", null, i);
  }
  static withSlideLayoutScope(t, i) {
    return e.getInstance().withScope(`Slide Layout ${t}`, "SLIDE_LAYOUT", null, i);
  }
  static withNodeScope(t, i, n) {
    return e.getInstance().withScope(`Node: ${t}`, "NODE", i, n);
  }
  static withNodeScopeAsync(t, i, n) {
    return e.getInstance().withScopeAsync(`Node: ${t}`, "NODE", i, n);
  }
  static withMetaScope(t, i, n) {
    return e.getInstance().withScope(t, "META", i, n);
  }
  static withMetaScopeAsync(t, i, n) {
    return e.getInstance().withScopeAsync(t, "META", i, n);
  }
  static debug(e, t, ...i) {}
  static error(e, t, i) {
    debug(null != t, "Should have a current scope");
    t.errors || (t.errors = []);
    t.errors.push([e, i]);
  }
  static toFigment(t, i, n, a, s) {
    let o = e.getInstance();
    let l = o.getTopErrors().join(", ");
    let d = null != t && null == s;
    let c = Object.keys(o.scopes).filter(e => o.scopes[Number(e)]?.type === "SLIDE").length;
    let u = o.totalDurationMs();
    az.trackDefinedEvent("IMPORT" === i ? "slides.import.pptx" : "slides.export.pptx", {
      fileKey: t,
      numSlides: c,
      durationMs: u,
      success: d,
      pptxFileSizeKB: n,
      slidesFileSizeKB: a,
      failureReason: s?.message ?? "Unknown",
      topErrors: l
    });
    e.getInstance().toFigmentLatency(i, u, c, d);
  }
  static toConsole(e) {}
  getSlideScopeId(e) {
    let t = Object.keys(this.scopes).find(t => this.scopes[Number(t)]?.type === "SLIDE" && this.scopes[Number(t)]?.label === `Slide ${e}`);
    return t ? Number(t) : void 0;
  }
  getSlideMasterScopeIds() {
    return Object.keys(this.scopes).map(Number).filter(e => this.scopes[e]?.type === "SLIDE_MASTER");
  }
  getSlideLayoutScopeIds() {
    return Object.keys(this.scopes).map(Number).filter(e => this.scopes[e]?.type === "SLIDE_LAYOUT");
  }
  getScope(e, t) {
    return Object.values(this.scopes).find(i => i.type === e && i.label === t) ?? null;
  }
  getTopErrors() {
    let e = new Map();
    for (let t of Object.values(this.scopes)) if (t.errors) for (let [i, n] of t.errors) {
      let t = `${i}${n ? `: ${n.message}` : ""}`;
      e.set(t, (e.get(t) ?? 0) + 1);
    }
    return Array.from(e.entries()).sort((e, t) => t[1] - e[1]).slice(0, 3).map(([e]) => e);
  }
  toDebugConsole(e, t) {}
};
o.instance = void 0;
export let $$l0 = o;
export const Vy = $$l0;
export const zT = $$s1;