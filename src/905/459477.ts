import { useCallback } from "react";
import { useSelector } from "react-redux";
import { l as _$$l } from "../905/716947";
import { createSelector } from "../vendor/925040";
import { analyticsEventManager } from "../905/449184";
import { h } from "../905/207101";
import { ResourceLibraryType, PickerOptionType, getCategory } from "../905/211621";
var $$n0;
(e => {
  function t() {
    return useSelector(e.selectOpenFileProperties);
  }
  (e => {
    e.SELECTED_INSTANCE_SWAP = "Instance Panel > Selected Instance Swap";
    e.INSTANCE_SWAP_PROP_INSTANCE_PANEL = "Instance Panel > Instance Swap Prop Control";
    e.INSTANCE_SWAP_PROP_INSTANCE_PANEL_BUBBLED = "Instance Panel (Bubbled) > Instance Swap Prop Control";
    e.INSTANCE_SWAP_PROP_PLAYGROUND = "Playground > Instance Swap Prop Control";
    e.INSTANCE_SWAP_PROP_PLAYGROUND_BUBBLED = "Playground (Bubbled) > Instance Swap Prop Control";
    e.CREATE_COMPONENT_PROP_PICKER = "Create Component Prop Picker > Instance Swap Prop Control";
    e.EDIT_COMPONENT_PROP_PICKER = "Edit Component Prop Picker > Instance Swap Prop Control";
  })(e.InstancePickerEntrypoint || (e.InstancePickerEntrypoint = {}));
  (e => {
    e.CREATE_COMPONENT_PROP_PICKER = "Create Component Prop Picker > Preferred Values Select";
    e.EDIT_COMPONENT_PROP_PICKER = "Edit Component Prop Picker > Preferred Values Select";
  })(e.PreferredValuesPickerEntrypoint || (e.PreferredValuesPickerEntrypoint = {}));
  e.useOpenFileProperties = t;
  e.selectOpenFileProperties = createSelector([e => e.user?.id, e => e.openFile?.parentOrgId ?? void 0, e => e.openFile?.key, e => e.openFile?.teamId ?? void 0, e => e.openFile?.libraryKey], (e, t, i, n, r) => ({
    userId: e,
    teamId: n,
    orgId: t,
    fileKey: i,
    libraryKey: r
  }));
  e.useLaunchedEvent = function ({
    pickerType: e,
    sessionId: i,
    dropdownSelection: n,
    entrypoint: r
  }) {
    let o = t();
    let u = useSelector(e => e.instanceSwapPickerListLayout);
    let p = n.type === ResourceLibraryType.FILE ? n.libraryKey : void 0;
    h(() => {
      (e === PickerOptionType.INSTANCE_SWAP_PICKER || e === PickerOptionType.PREFERRED_VALUES_PICKER) && analyticsEventManager.trackDefinedEvent("instance_swap_picker.launched", {
        ...o,
        sessionId: i,
        viewMode: u ? "list" : "grid",
        dropdownType: getCategory(n, _$$l(o.libraryKey ?? "")),
        libraryKey: p,
        entrypoint: r ?? void 0,
        isPreferredValues: e === PickerOptionType.PREFERRED_VALUES_PICKER
      });
    });
  };
  e.useTrackViewToggle = function ({
    sessionId: e,
    queryId: i,
    isPreferredValues: n
  }) {
    let a = t();
    return useCallback(t => {
      analyticsEventManager.trackDefinedEvent("instance_swap_picker.view_toggle", {
        ...a,
        viewMode: t ? "list" : "grid",
        sessionId: e,
        queryId: i,
        isPreferredValues: n
      });
    }, [a, n, i, e]);
  };
})($$n0 || ($$n0 = {}));
export const S = $$n0;