import { getFeatureFlags } from "../905/601108";
import { analyticsEventManager } from "../905/449184";
import { FFileType } from "../figma_app/191312";
import { Wc, PT } from "../905/669853";
export let $$n0;
class l {
  constructor(e) {
    this.store = e;
  }
  trackComponentAction(e, t, r) {
    let n = this.state.openFile;
    let l = n?.key;
    let d = !!this.state.user;
    if (null == n || null == l || !d) return;
    let c = n.editorType;
    if (c === FFileType.SLIDES || c === FFileType.FIGMAKE || getFeatureFlags().dsa_restrict_actions_to_design && !this.isInDesignFile()) {
      e === Wc.DETACHMENT && analyticsEventManager.trackDefinedEvent("design_systems_analytics.non_design_component_detached", {
        fileKey: l,
        componentKey: Object.keys(t ?? {})[0],
        editorType: c || void 0
      });
      return;
    }
    let u = Object.entries(t).map(([e, t]) => ({
      key: e,
      count: t
    }));
    try {
      PT.recordComponentAction({
        action: e,
        action_source: r,
        fileKey: l,
        components: u
      });
    } catch (e) {}
  }
  trackStyleAction(e, t, r) {
    let n = !!this.state.user;
    if (!this.isInDesignFile() || !n) return;
    let i = [];
    for (let [e, r] of Object.entries(t)) i.push({
      key: e,
      count: r
    });
    if (0 !== i.length) try {
      PT.recordStylesAction({
        action: e,
        action_source: r,
        fileKey: this.state.openFile?.key,
        styles: i
      });
    } catch (e) {}
  }
  trackVariableAction(e, t, r) {
    let n = !!this.state.user;
    if (!this.isInDesignFile() || !n) return;
    let i = [];
    for (let [e, r] of Object.entries(t)) i.push({
      key: e,
      count: r
    });
    if (0 !== i.length) try {
      PT.recordVariablesAction({
        action: e,
        action_source: r,
        fileKey: this.state.openFile?.key,
        variables: i
      });
    } catch (e) {}
  }
  isInDesignFile() {
    let e = this.state.openFile;
    let t = e?.key;
    return null != e && null != t && e.editorType === FFileType.DESIGN;
  }
  get state() {
    if (!this.store) throw Error("Calling _state without a valid store");
    return this.store.getState();
  }
}
export function $$d1(e) {
  $$n0 = new l(e);
}
export const Tl = $$n0;
export const pH = $$d1;