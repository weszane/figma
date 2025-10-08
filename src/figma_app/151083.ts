import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fullscreen, SymbolOverrideType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useMemoShallow } from "../905/19536";
import c from "../vendor/128080";
import { analyticsEventManager } from "../905/449184";
import { selectWithShallowEqual } from "../905/103090";
import { generateRecordingKey } from "../figma_app/878298";
import { c$, wv } from "../figma_app/236327";
import { getI18nString } from "../905/303541";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { userAtom } from "../figma_app/864723";
import { fullscreenValue } from "../figma_app/455680";
import { selectFileInfo } from "../905/210851";
import { openFileAtom } from "../figma_app/516028";
import { useSubscribedAssets, AssetFilterMode } from "../figma_app/646357";
import { ij } from "../figma_app/745458";
import { createPrimaryInstancesSelector } from "../905/557338";
import { KindEnum } from "../905/129884";
import { c1, Yh } from "../figma_app/357047";
import { $H } from "../figma_app/323320";
import { AX } from "../905/542608";
import { $$et0 } from "../905/759609";
import { jX } from "../905/255446";
import { TM } from "../figma_app/435826";
import { ConnectedPointingDropdown } from "../905/504727";
import { YW } from "../figma_app/778125";
import { cB, jR } from "../figma_app/524618";
import { $ } from "../905/330495";
import { p as _$$p } from "../figma_app/295764";
import { l_, VM } from "../figma_app/882817";
import { A as _$$A } from "../svg/110995";
import { A as _$$A2 } from "../2854/580012";
var u = c;
let G = "instance-option-dropdown";
function V(e) {
  e.stopPropagation();
}
export function $$H1(e) {
  let {
    instanceAndSublayerGUIDs,
    resettableInstanceOverrides,
    showAllInstanceOptions
  } = e;
  let {
    appModel,
    detachInstanceShortcut
  } = selectWithShallowEqual(e => ({
    appModel: e.mirror.appModel,
    detachInstanceShortcut: c1(e.mirror.appModel.keyboardShortcuts, "detach-instance")
  }));
  let u = useMemo($H, []);
  let p = useSelector(e => u(e, instanceAndSublayerGUIDs));
  let {
    isBackingSymbolSoftDeleted,
    restoreType
  } = $(instanceAndSublayerGUIDs);
  let {
    onlyInstances,
    nestedInstances
  } = _$$p(instanceAndSublayerGUIDs);
  let T = useRef(null);
  let {
    needsUpdate
  } = $$K4(instanceAndSublayerGUIDs);
  let S = $$Y3(instanceAndSublayerGUIDs);
  let v = useMemo(() => {
    let e = [...S];
    if (!showAllInstanceOptions) return e;
    if (showAllInstanceOptions && S.length > 0 && e.push({
      type: "separator"
    }), "SYMBOL_AS_STATE" === restoreType && e.push({
      type: "option",
      value: "restore-symbol-or-state-group",
      displayText: getI18nString("design_systems.instance_panel.restore_variant"),
      callback: () => {
        fullscreenValue.triggerActionInUserEditScope("restore-symbol-or-state-group");
      }
    }), onlyInstances && e.push({
      type: "option",
      value: "detach-instance",
      displayText: getI18nString("fullscreen_actions.detach-instance"),
      shortcut: detachInstanceShortcut,
      callback: () => {
        permissionScopeHandler.user("detach-instances", () => Fullscreen.detachInstances(instanceAndSublayerGUIDs, !0));
      }
    }), Yh(appModel, "push-changes-to-main") && 0 === nestedInstances.length && !isBackingSymbolSoftDeleted && (e.length > 0 && e.push({
      type: "separator"
    }), e.push({
      type: "option",
      value: "push-changes-to-main",
      displayText: getI18nString("fullscreen_actions.push-changes-to-main"),
      callback: () => {
        fullscreenValue.triggerActionInUserEditScope("push-changes-to-main");
      }
    })), resettableInstanceOverrides && Object.values(resettableInstanceOverrides).some(e => e)) {
      if (Object.keys(resettableInstanceOverrides).forEach(n => {
        let i = parseInt(n);
        resettableInstanceOverrides?.[i] && (e.length > 0 && i === SymbolOverrideType.OVERRIDES_FOR_LAYER_AND_SUBLAYERS && e.push({
          type: "separator"
        }), e.push({
          type: "option",
          value: i,
          displayText: function (e) {
            switch (e) {
              case SymbolOverrideType.OVERRIDES_FOR_LAYER_AND_SUBLAYERS:
                return getI18nString("design_systems.instance_panel.reset_all_changes");
              case SymbolOverrideType.EXPORTS:
                return getI18nString("design_systems.instance_panel.reset_exports");
              case SymbolOverrideType.EFFECTS:
                return getI18nString("design_systems.instance_panel.reset_effects");
              case SymbolOverrideType.LAYER:
                return getI18nString("design_systems.instance_panel.reset_others");
              case SymbolOverrideType.VISIBLE:
                return getI18nString("design_systems.instance_panel.reset_visibility");
              case SymbolOverrideType.NAME:
                return getI18nString("design_systems.instance_panel.reset_name");
              case SymbolOverrideType.FILL:
                return getI18nString("design_systems.instance_panel.reset_fill");
              case SymbolOverrideType.STROKE:
                return getI18nString("design_systems.instance_panel.reset_stroke");
              case SymbolOverrideType.TEXT:
                return getI18nString("design_systems.instance_panel.reset_text");
              case SymbolOverrideType.TEXT_STYLE:
                return getI18nString("design_systems.instance_panel.reset_text_style");
              case SymbolOverrideType.SIZE:
                return getI18nString("design_systems.instance_panel.reset_size");
              case SymbolOverrideType.PROTOTYPE_INTERACTIONS:
                return getI18nString("design_systems.instance_panel.reset_interactions");
              case SymbolOverrideType.OVERLAY:
                return getI18nString("design_systems.instance_panel.reset_overlay");
              case SymbolOverrideType.NUM_VALUES:
            }
            return "";
          }(i),
          callback: () => {
            permissionScopeHandler.user("reset-overrides", () => Fullscreen.resetSymbolOverridesForNodes(instanceAndSublayerGUIDs, i));
          }
        }));
      }), p) for (let t in p) for (let r in p[t]) {
        let n = p[t][r];
        e.push({
          type: "option",
          value: "reset-component-prop-assignment",
          displayText: getI18nString("design_systems.instance_panel.reset_property_assignment", {
            assignmentName: n.name
          }),
          callback: () => {
            permissionScopeHandler.user("reset-prop-assignments", () => Fullscreen.resetComponentPropAssignmentForInstances(n.instanceGUIDs, r));
          }
        });
      }
    } else {
      e.length > 0 && e.push({
        type: "separator"
      });
      e.push({
        type: "option",
        value: SymbolOverrideType.OVERRIDES_FOR_LAYER_AND_SUBLAYERS,
        displayText: getI18nString("design_systems.instance_panel.no_changes_to_reset"),
        callback: () => {},
        disabled: !0
      });
    }
    return e;
  }, [S, showAllInstanceOptions, restoreType, onlyInstances, appModel, nestedInstances.length, isBackingSymbolSoftDeleted, resettableInstanceOverrides, detachInstanceShortcut, instanceAndSublayerGUIDs, p]);
  let {
    toggleDropdown,
    dropdownShown
  } = $$$2(instanceAndSublayerGUIDs);
  let O = generateRecordingKey(e, "toggleInstanceOptionDropdown", instanceAndSublayerGUIDs.join("-"));
  return showAllInstanceOptions || needsUpdate ? jsxs("span", {
    children: [jsx("div", {
      ref: T,
      children: needsUpdate ? jsx(YW, {
        className: l_,
        onClick: toggleDropdown,
        selected: dropdownShown,
        onMouseDown: V,
        svg: _$$A,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("design_systems.instance_panel.update_available"),
        recordingKey: O
      }) : jsx(YW, {
        onClick: toggleDropdown,
        selected: dropdownShown,
        onMouseDown: V,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("design_systems.instance_panel.instance_options"),
        svg: _$$A2,
        recordingKey: O,
        disabled: 0 === v.length
      })
    }), jsx($$z0, {
      targetRef: T,
      instanceDropdownOptions: v,
      recordingKey: e.recordingKey,
      dropdownShown
    })]
  }) : null;
}
export function $$z0({
  targetRef: e,
  instanceDropdownOptions: t,
  recordingKey: r,
  dropdownShown: i
}) {
  return e && null != e.current && i ? jsx(ConnectedPointingDropdown, {
    targetRect: e.current.getBoundingClientRect(),
    propagateCloseClick: !0,
    children: t.map((e, t) => "option" === e.type ? jsxs(c$, {
      className: VM,
      onClick: e.callback,
      recordingKey: generateRecordingKey(r, e.displayText),
      disabled: e.disabled,
      children: [e.displayText, e.shortcut && jsx("span", {
        children: e.shortcut
      })]
    }, "reset-component-prop-assignment" === e.value ? generateRecordingKey(e.value, t) : e.value) : jsx(wv, {}, t))
  }) : null;
}
function W() {
  let {
    file_key,
    file_team_id
  } = useSelector(selectFileInfo);
  let r = useAtomWithSubscription(openFileAtom);
  let n = useAtomWithSubscription(userAtom);
  return useMemo(() => ({
    fileKey: file_key,
    fileParentOrgId: r?.parentOrgId?.toString(),
    fileTeamId: file_team_id?.toString(),
    userId: n?.id
  }), [file_key, file_team_id, n, r]);
}
export function $$K4(e) {
  let {
    componentUpdatesForAllPages,
    stateGroupUpdatesForAllPages
  } = useSelector(ij);
  let n = useMemo(createPrimaryInstancesSelector, []);
  let s = useSelector(t => n(t, e));
  let {
    componentInstanceUpdateInfo,
    stateInstanceUpdateInfo
  } = useMemo(() => cB(componentUpdatesForAllPages, stateGroupUpdatesForAllPages, s), [componentUpdatesForAllPages, stateGroupUpdatesForAllPages, s]);
  let c = jR(componentInstanceUpdateInfo, stateInstanceUpdateInfo);
  let u = c > 0 && c === s.length;
  return useMemoShallow(() => ({
    needsUpdate: u,
    numSelectedInstancesToUpdate: c,
    componentInstanceUpdateInfo,
    stateInstanceUpdateInfo
  }), [u, c, componentInstanceUpdateInfo, stateInstanceUpdateInfo]);
}
export function $$Y3(e) {
  let {
    needsUpdate,
    numSelectedInstancesToUpdate,
    componentInstanceUpdateInfo,
    stateInstanceUpdateInfo
  } = $$K4(e);
  let o = useSubscribedAssets(AssetFilterMode.ALL);
  let {
    updateIndividualInstances
  } = TM(o, AX.DROPDOWN_UPDATE_SELECTED_INSTANCE);
  let d = useDispatch();
  let c = useMemo(() => ({
    source: "INSTANCE_PANEL",
    instanceAndSublayerGUIDs: e
  }), [e]);
  let u = jX(c);
  let _ = useCallback(() => {
    d(showModalHandler({
      type: $$et0,
      data: c
    }));
  }, [d, c]);
  let h = W();
  return useMemo(() => {
    let e = [];
    needsUpdate && (e.push({
      type: "option",
      value: "update-selected-instance",
      displayText: getI18nString("design_systems.instance_panel.update_selected", {
        numSelectedInstancesToUpdate
      }),
      callback: () => updateIndividualInstances(componentInstanceUpdateInfo, stateInstanceUpdateInfo)
    }), u && e.push({
      type: "option",
      value: "review-instance-update",
      displayText: getI18nString("design_systems.instance_panel.review_update"),
      callback: () => {
        analyticsEventManager.trackDefinedEvent("design_systems_analytics.instance_review_update_click", h);
        _();
      }
    }));
    return e;
  }, [componentInstanceUpdateInfo, needsUpdate, numSelectedInstancesToUpdate, u, stateInstanceUpdateInfo, _, h, updateIndividualInstances]);
}
export function $$$2(e) {
  let t = useDispatch();
  let r = useSelector(t => t.dropdownShown?.type === G && u()(t.dropdownShown.data?.guids, e));
  let n = W();
  let s = useCallback(i => {
    i.stopPropagation();
    r ? t(hideDropdownAction()) : (t(showDropdownThunk({
      type: G,
      data: {
        guids: e
      }
    })), analyticsEventManager.trackDefinedEvent("design_systems_analytics.instance_update_available_button_click", n));
  }, [r, t, e, n]);
  return useMemo(() => ({
    dropdownShown: r,
    toggleDropdown: s
  }), [r, s]);
}
export const PM = $$z0;
export const h_ = $$H1;
export const iT = $$$2;
export const sQ = $$Y3;
export const vr = $$K4;