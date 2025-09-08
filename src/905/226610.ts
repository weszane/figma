import { throwTypeError } from "../figma_app/465776";
import { FeedbackCategory } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { createReduxSubscriptionAtom } from "../905/111321";
import { y$ } from "../vendor/156872";
import { jm } from "../figma_app/416935";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { NU } from "../905/11";
import { logDebug, logWarning } from "../905/714362";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { b as _$$b } from "../905/985254";
import { k as _$$k } from "../905/651849";
import { uE } from "../figma_app/314264";
function y() {
  return debugState || (logDebug("Labs", "No global redux store set, so creating a mock store with empty userFlags"), y$(() => ({
    userFlags: {},
    isStarterUser: !1
  })));
}
class b {
  constructor({
    name: e,
    getDisplayName: t,
    getCanOverride: i,
    getDefaultValue: n,
    getVisualBellMessage: r
  }) {
    this.name = e;
    this.getDisplayName = t;
    this.getVisualBellMessage = r || this.getDefaultVisualBellMessage;
    this.defaultValue = n;
    this.trueOverrideUserFlag = `${e}_override_true`;
    this.falseOverrideUserFlag = `${e}_override_false`;
    this.atom = createReduxSubscriptionAtom(y, e => this.getEffectiveValue(e.userFlags));
    this.canOverrideAtom = createReduxSubscriptionAtom(y, e => i(e));
  }
  getValue() {
    return atomStoreManager.get(this.atom);
  }
  getEffectiveValue(e) {
    let t = this.isUserOverriddenToTrue(e);
    let i = this.isUserOverriddenToFalse(e);
    if (t && i) {
      logWarning("Labs", "Unexpected state: both lab flags are set", {
        falseOverrideFlagId: e[this.falseOverrideUserFlag]?.id,
        falseOverrideFlagCreatedAt: e[this.falseOverrideUserFlag]?.createdAt,
        falseOverrideUserFlagUpdatedAt: e[this.falseOverrideUserFlag]?.updatedAt,
        trueOverrideFlagId: e[this.trueOverrideUserFlag]?.id,
        trueOverrideFlagCreatedAt: e[this.trueOverrideUserFlag]?.createdAt,
        trueOverrideFlagUpdatedAt: e[this.trueOverrideUserFlag]?.updatedAt
      }, {
        modeEventName: "labs_both_flags_set",
        figmentOnly: !0,
        logToConsole: NU.ALWAYS
      });
      let n = e[this.trueOverrideUserFlag]?.updatedAt;
      let r = e[this.falseOverrideUserFlag]?.updatedAt;
      n === r || (n > r ? i = !1 : t = !1);
    }
    return function ({
      trueOverrideUserFlag: e,
      falseOverrideUserFlag: t,
      canOverride: i,
      defaultValue: n
    }) {
      return i ? e && t ? (_$$k.error("[getEffectiveLabValue] Both override flags are set"), n) : !!e || !t && n : n;
    }({
      trueOverrideUserFlag: t,
      falseOverrideUserFlag: i,
      canOverride: this.canOverride(),
      defaultValue: this.defaultValue()
    });
  }
  isUserOverriddenToTrue(e) {
    return !!e[this.trueOverrideUserFlag];
  }
  isUserOverriddenToFalse(e) {
    return !!e[this.falseOverrideUserFlag];
  }
  canOverride() {
    return atomStoreManager.get(this.canOverrideAtom);
  }
  isOverridden(e) {
    return this.canOverride() && (this.isUserOverriddenToTrue(e) || this.isUserOverriddenToFalse(e));
  }
  toggleValue(e, t, i) {
    if (!this.canOverride()) return;
    let n = this.getValue();
    let r = !n;
    let a = {
      [this.trueOverrideUserFlag]: !1,
      [this.falseOverrideUserFlag]: !1
    };
    a[r ? this.trueOverrideUserFlag : this.falseOverrideUserFlag] = !0;
    t(_$$b(a));
    t(F.enqueue({
      message: this.getVisualBellMessage(r)
    }));
    this.trackChange({
      user: e,
      previousValue: n,
      newValue: !n,
      source: i
    });
  }
  getDefaultVisualBellMessage(e) {
    return e ? getI18nString("lab.enabled", {
      labName: this.getDisplayName()
    }) : getI18nString("lab.disabled", {
      labName: this.getDisplayName()
    });
  }
  resetToDefault(e, t) {
    let i = this.getValue();
    t(_$$b({
      [this.trueOverrideUserFlag]: !1,
      [this.falseOverrideUserFlag]: !1
    }));
    this.trackChange({
      user: e,
      previousValue: i,
      newValue: this.defaultValue(),
      source: "reset"
    });
  }
  trackChange({
    user: e,
    previousValue: t,
    newValue: i,
    source: n
  }) {
    uE("labs", {
      user: e
    }, {
      name: this.name,
      canOverride: this.canOverride(),
      previousValue: t,
      newValue: i,
      defaultValue: this.defaultValue(),
      source: n,
      canToggleFF: null,
      defaultValueFF: null
    });
  }
}
export function $$v2(e) {
  return useAtomWithSubscription(e.atom);
}
var I = (e => (e[e.DEFAULT = 0] = "DEFAULT", e[e.OVERRIDDEN = 1] = "OVERRIDDEN", e))(I || {});
let E = "prod" !== getInitialOptions().cluster_name;
let $$x0 = Object.freeze({
  customKeyboardShortcuts: new b({
    name: "ce_custom_keyboard_shortcuts",
    getDisplayName: () => getI18nString("keyboard_settings.custom_keyboard_shortcuts"),
    getCanOverride: () => !!getFeatureFlags().ce_custom_keyboard_shortcuts,
    getDefaultValue: () => !!getFeatureFlags().ce_custom_keyboard_default
  }),
  ui3: new b({
    name: "unified_index_v3_endpoint",
    getDisplayName: () => getI18nString("lab.ui3"),
    getVisualBellMessage: e => e ? getI18nString("lab.ui3_enabled_message") : getI18nString("lab.ui3_disabled_message"),
    getCanOverride: () => !0,
    getDefaultValue: () => !0
  }),
  ui3ForceDevOnly: new b({
    name: "force_ui3_dev_only",
    getDisplayName: () => "[Dev only] Force UI3 everywhere",
    getCanOverride: () => E,
    getDefaultValue: () => !1
  }),
  trackableDebug: new b({
    name: "lab_trackable_debug_toggle",
    getDisplayName: () => getI18nString("lab.trackable_debug"),
    getCanOverride: () => E || jm(getInitialOptions().user_data?.email),
    getDefaultValue: () => !1
  }),
  interopFiles: new b({
    name: "interop_files",
    getDisplayName: () => "Interop Files",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().ui3p_interop_files
  }),
  newResizablePanel: new b({
    name: "new_resizable_panel",
    getDisplayName: () => "New Resizable Panel",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().ui3p_new_resizable_panel
  }),
  useGrid: new b({
    name: "fpl_grid",
    getDisplayName: () => "UI3: FPL Grid",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().fpl_a11y_grid
  }),
  designSelectionActionsPanel: new b({
    name: "ui3_selection_actions_refactor_in_design",
    getDisplayName: () => "Design: Selection actions panel",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().ui3_selection_actions_refactor_in_design
  }),
  designLeftRailPrototype: new b({
    name: "design_left_rail_prototype",
    getDisplayName: () => "Design: LeftRail Prototype for Make",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().ui3p_design_left_rail_prototype
  }),
  designNavBar: new b({
    name: "ui3p_design_navbar",
    getDisplayName: () => "Design: Left NavBar",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().ui3p_design_navbar
  }),
  variablePillA11y: new b({
    name: "ui3_variable_pill_a11y",
    getDisplayName: () => "UI3: Variable Pill A11y",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().ui3p_variable_pill_a11y
  }),
  useGridPart2: new b({
    name: "fpl_grid_part_2",
    getDisplayName: () => "UI3: FPL Grid Part 2",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().fpl_a11y_grid && !!getFeatureFlags().fpl_a11y_grid_part_2
  }),
  commentsA11y: new b({
    name: "comments_a11y",
    getDisplayName: () => "Comments A11y Improvements (Requires Page Refresh)",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().ui3p_comments_a11y
  }),
  figjamPagePickerA11y: new b({
    name: "figjam_page_picker_a11y",
    getDisplayName: () => "Page Picker A11y",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().figjam_page_picker_a11y
  }),
  fplScrubbableInput: new b({
    name: "fpl_scrubbable_input",
    getDisplayName: () => "FPL Scrubbable Input",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().fpl_scrubbable_input
  }),
  quickActionsA11y: new b({
    name: "ui3_quick_actions_a11y",
    getDisplayName: () => "Quick Actions Menu A11y",
    getCanOverride: () => E,
    getDefaultValue: () => !!getFeatureFlags().ui3_quick_actions_a11y
  }),
  toolbeltPinning: new b({
    name: "mw_toolbelt_pinning",
    getDisplayName: () => "Maker week: Toolbelt pinning",
    getCanOverride: () => E,
    getDefaultValue: () => !1
  })
});
export function $$S1(e) {
  switch (e) {
    case FeedbackCategory.PLACEHOLDER:
      return !1;
    case FeedbackCategory.COMMENTS_A11Y:
      return $$x0.commentsA11y.getValue();
    default:
      throwTypeError(e);
  }
}
export const nt = $$x0;
export const Xo = $$S1;
export const o3 = $$v2;