import { getFeatureFlags } from "../905/601108";
import { t as _$$t } from "../905/303541";
export function $$a0(e) {
  let {
    msalEnabled,
    destroyAllALEnabled,
    resizeToFitEnabled
  } = e;
  return msalEnabled || destroyAllALEnabled || resizeToFitEnabled ? msalEnabled ? {
    name: "multi-stack-selection-submenu",
    featureFlags: ["auto_auto_layout"],
    flags: ["design", "edit", "slides"],
    children: [{
      action: "run-multi-stack-auto-layout",
      displayText: _$$t("fullscreen_actions.run-multi-stack-auto-layout")
    }, {
      action: "destroy-all-auto-layout",
      displayText: _$$t("fullscreen_actions.destroy-all-auto-layout"),
      disabledAndForceVisible: !0
    }, {
      separator: !0
    }, {
      action: "resize-to-fit",
      displayText: _$$t("fullscreen_actions.resize-to-fit"),
      disabledAndForceVisible: !0
    }]
  } : {
    name: "multi-stack-selection-submenu",
    featureFlags: ["auto_auto_layout"],
    flags: ["design", "edit", "slides"],
    children: [{
      action: "destroy-all-auto-layout",
      displayText: _$$t("fullscreen_actions.destroy-all-auto-layout"),
      disabledAndForceVisible: !0
    }, {
      separator: !0
    }, {
      action: "resize-to-fit",
      displayText: _$$t("fullscreen_actions.resize-to-fit"),
      disabledAndForceVisible: !0
    }]
  } : {};
}
export function $$s1() {
  let e = getFeatureFlags().ce_tv_fill_hug_suggest ? [{
    separator: !0
  }, {
    action: "set-selection-hug-horizontal",
    displayText: _$$t("fullscreen_actions.set-hug-width")
  }, {
    action: "set-selection-hug-vertical",
    displayText: _$$t("fullscreen_actions.set-hug-height")
  }, {
    action: "set-selection-fill-horizontal",
    displayText: _$$t("fullscreen_actions.set-fill-width")
  }, {
    action: "set-selection-fill-vertical",
    displayText: _$$t("fullscreen_actions.set-fill-height")
  }] : [];
  return {
    name: "multi-stack-selection-submenu",
    featureFlags: ["auto_auto_layout"],
    flags: ["design", "edit", "slides", "sites"],
    children: [{
      action: "run-multi-stack-auto-layout",
      displayText: _$$t("fullscreen_actions.run-multi-stack-auto-layout")
    }, {
      action: "destroy-all-auto-layout",
      displayText: _$$t("fullscreen_actions.destroy-all-auto-layout")
    }, {
      separator: !0
    }, {
      action: "resize-to-fit",
      displayText: _$$t("fullscreen_actions.resize-to-fit")
    }, ...e]
  };
}
export const r = $$a0;
export const t = $$s1;