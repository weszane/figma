import { Actions } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { q } from "../905/196201";
import { YQ } from "../905/502364";
import { b } from "../905/985254";
import { fullscreenValue } from "../figma_app/455680";
export function $$d1() {
  fullscreenValue.dispatch(b({
    seen_widget_insert_onboarding_modal: !0,
    seen_component_onboarding_modal: !0,
    seen_published_plugin_onboarding_modal: !0,
    seen_development_plugin_onboarding_modal: !0,
    seen_universal_inserts_onboarding_modal: !0
  }));
  YQ({
    id: "components_proceed_to_close_modal"
  });
  YQ({
    id: "widget_insert_proceed_to_close_modal"
  });
  YQ({
    id: "development_plugin_proceed_to_close_modal"
  });
  YQ({
    id: "published_plugin_proceed_to_close_modal"
  });
  YQ({
    id: "universal_inserts_proceed_to_close_modal"
  });
  YQ({
    id: "saved_and_recent_close_modal"
  });
}
export let $$c0 = new class {
  constructor(e, t) {
    this._permanentCache = new q(e);
    this._temporaryCache = new q(t);
  }
  get(e, t, i) {
    let a = `${e} ${t}`;
    if (i) {
      let e = Object.keys(i);
      for (let t of (e.sort(), e)) a += ` ${t}:${i[t]}`;
    }
    let s = i ? this._temporaryCache : this._permanentCache;
    if (!s.get(a)) {
      let o = Actions?.isEditingAction(e) ?? !1;
      s.set(a, n => {
        "toggle-menu" === e && n?.stopPropagation();
        "component-insert" === e && $$d1();
        o ? permissionScopeHandler.user(`${e}-${t}`, () => {
          fullscreenValue.triggerAction(e, {
            source: t,
            args: i
          });
        }) : fullscreenValue.triggerAction(e, {
          source: t,
          args: i
        });
      });
    }
    return s.get(a);
  }
}(1e4, 500);
export const VU = $$c0;
export const nV = $$d1;