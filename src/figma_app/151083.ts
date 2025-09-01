import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useRef, useCallback } from "react";
import { d4, wA } from "../vendor/514228";
import { glU, YnC } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { md } from "../figma_app/27355";
import { wm } from "../905/19536";
import c from "../vendor/128080";
import { az } from "../905/449184";
import { R as _$$R } from "../905/103090";
import { Pt } from "../figma_app/806412";
import { c$, wv } from "../figma_app/236327";
import { t as _$$t } from "../905/303541";
import { oB, j7 } from "../905/929976";
import { to } from "../905/156213";
import { p9 } from "../figma_app/864723";
import { Y5 } from "../figma_app/455680";
import { c as _$$c } from "../905/210851";
import { yV } from "../figma_app/516028";
import { eS, aD } from "../figma_app/646357";
import { ij } from "../figma_app/745458";
import { bd } from "../905/557338";
import { Ib } from "../905/129884";
import { c1, Yh } from "../figma_app/357047";
import { $H } from "../figma_app/323320";
import { AX } from "../905/542608";
import { $$et0 } from "../905/759609";
import { jX } from "../905/255446";
import { TM } from "../figma_app/435826";
import { Cf } from "../905/504727";
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
  } = _$$R(e => ({
    appModel: e.mirror.appModel,
    detachInstanceShortcut: c1(e.mirror.appModel.keyboardShortcuts, "detach-instance")
  }));
  let u = useMemo($H, []);
  let p = d4(e => u(e, instanceAndSublayerGUIDs));
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
      displayText: _$$t("design_systems.instance_panel.restore_variant"),
      callback: () => {
        Y5.triggerActionInUserEditScope("restore-symbol-or-state-group");
      }
    }), onlyInstances && e.push({
      type: "option",
      value: "detach-instance",
      displayText: _$$t("fullscreen_actions.detach-instance"),
      shortcut: detachInstanceShortcut,
      callback: () => {
        l7.user("detach-instances", () => glU.detachInstances(instanceAndSublayerGUIDs, !0));
      }
    }), Yh(appModel, "push-changes-to-main") && 0 === nestedInstances.length && !isBackingSymbolSoftDeleted && (e.length > 0 && e.push({
      type: "separator"
    }), e.push({
      type: "option",
      value: "push-changes-to-main",
      displayText: _$$t("fullscreen_actions.push-changes-to-main"),
      callback: () => {
        Y5.triggerActionInUserEditScope("push-changes-to-main");
      }
    })), resettableInstanceOverrides && Object.values(resettableInstanceOverrides).some(e => e)) {
      if (Object.keys(resettableInstanceOverrides).forEach(n => {
        let i = parseInt(n);
        resettableInstanceOverrides?.[i] && (e.length > 0 && i === YnC.OVERRIDES_FOR_LAYER_AND_SUBLAYERS && e.push({
          type: "separator"
        }), e.push({
          type: "option",
          value: i,
          displayText: function (e) {
            switch (e) {
              case YnC.OVERRIDES_FOR_LAYER_AND_SUBLAYERS:
                return _$$t("design_systems.instance_panel.reset_all_changes");
              case YnC.EXPORTS:
                return _$$t("design_systems.instance_panel.reset_exports");
              case YnC.EFFECTS:
                return _$$t("design_systems.instance_panel.reset_effects");
              case YnC.LAYER:
                return _$$t("design_systems.instance_panel.reset_others");
              case YnC.VISIBLE:
                return _$$t("design_systems.instance_panel.reset_visibility");
              case YnC.NAME:
                return _$$t("design_systems.instance_panel.reset_name");
              case YnC.FILL:
                return _$$t("design_systems.instance_panel.reset_fill");
              case YnC.STROKE:
                return _$$t("design_systems.instance_panel.reset_stroke");
              case YnC.TEXT:
                return _$$t("design_systems.instance_panel.reset_text");
              case YnC.TEXT_STYLE:
                return _$$t("design_systems.instance_panel.reset_text_style");
              case YnC.SIZE:
                return _$$t("design_systems.instance_panel.reset_size");
              case YnC.PROTOTYPE_INTERACTIONS:
                return _$$t("design_systems.instance_panel.reset_interactions");
              case YnC.OVERLAY:
                return _$$t("design_systems.instance_panel.reset_overlay");
              case YnC.NUM_VALUES:
            }
            return "";
          }(i),
          callback: () => {
            l7.user("reset-overrides", () => glU.resetSymbolOverridesForNodes(instanceAndSublayerGUIDs, i));
          }
        }));
      }), p) for (let t in p) for (let r in p[t]) {
        let n = p[t][r];
        e.push({
          type: "option",
          value: "reset-component-prop-assignment",
          displayText: _$$t("design_systems.instance_panel.reset_property_assignment", {
            assignmentName: n.name
          }),
          callback: () => {
            l7.user("reset-prop-assignments", () => glU.resetComponentPropAssignmentForInstances(n.instanceGUIDs, r));
          }
        });
      }
    } else {
      e.length > 0 && e.push({
        type: "separator"
      });
      e.push({
        type: "option",
        value: YnC.OVERRIDES_FOR_LAYER_AND_SUBLAYERS,
        displayText: _$$t("design_systems.instance_panel.no_changes_to_reset"),
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
  let O = Pt(e, "toggleInstanceOptionDropdown", instanceAndSublayerGUIDs.join("-"));
  return showAllInstanceOptions || needsUpdate ? jsxs("span", {
    children: [jsx("div", {
      ref: T,
      children: needsUpdate ? jsx(YW, {
        className: l_,
        onClick: toggleDropdown,
        selected: dropdownShown,
        onMouseDown: V,
        svg: _$$A,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("design_systems.instance_panel.update_available"),
        recordingKey: O
      }) : jsx(YW, {
        onClick: toggleDropdown,
        selected: dropdownShown,
        onMouseDown: V,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("design_systems.instance_panel.instance_options"),
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
  return e && null != e.current && i ? jsx(Cf, {
    targetRect: e.current.getBoundingClientRect(),
    propagateCloseClick: !0,
    children: t.map((e, t) => "option" === e.type ? jsxs(c$, {
      className: VM,
      onClick: e.callback,
      recordingKey: Pt(r, e.displayText),
      disabled: e.disabled,
      children: [e.displayText, e.shortcut && jsx("span", {
        children: e.shortcut
      })]
    }, "reset-component-prop-assignment" === e.value ? Pt(e.value, t) : e.value) : jsx(wv, {}, t))
  }) : null;
}
function W() {
  let {
    file_key,
    file_team_id
  } = d4(_$$c);
  let r = md(yV);
  let n = md(p9);
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
  } = d4(ij);
  let n = useMemo(bd, []);
  let s = d4(t => n(t, e));
  let {
    componentInstanceUpdateInfo,
    stateInstanceUpdateInfo
  } = useMemo(() => cB(componentUpdatesForAllPages, stateGroupUpdatesForAllPages, s), [componentUpdatesForAllPages, stateGroupUpdatesForAllPages, s]);
  let c = jR(componentInstanceUpdateInfo, stateInstanceUpdateInfo);
  let u = c > 0 && c === s.length;
  return wm(() => ({
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
  let o = eS(aD.ALL);
  let {
    updateIndividualInstances
  } = TM(o, AX.DROPDOWN_UPDATE_SELECTED_INSTANCE);
  let d = wA();
  let c = useMemo(() => ({
    source: "INSTANCE_PANEL",
    instanceAndSublayerGUIDs: e
  }), [e]);
  let u = jX(c);
  let _ = useCallback(() => {
    d(to({
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
      displayText: _$$t("design_systems.instance_panel.update_selected", {
        numSelectedInstancesToUpdate
      }),
      callback: () => updateIndividualInstances(componentInstanceUpdateInfo, stateInstanceUpdateInfo)
    }), u && e.push({
      type: "option",
      value: "review-instance-update",
      displayText: _$$t("design_systems.instance_panel.review_update"),
      callback: () => {
        az.trackDefinedEvent("design_systems_analytics.instance_review_update_click", h);
        _();
      }
    }));
    return e;
  }, [componentInstanceUpdateInfo, needsUpdate, numSelectedInstancesToUpdate, u, stateInstanceUpdateInfo, _, h, updateIndividualInstances]);
}
export function $$$2(e) {
  let t = wA();
  let r = d4(t => t.dropdownShown?.type === G && u()(t.dropdownShown.data?.guids, e));
  let n = W();
  let s = useCallback(i => {
    i.stopPropagation();
    r ? t(oB()) : (t(j7({
      type: G,
      data: {
        guids: e
      }
    })), az.trackDefinedEvent("design_systems_analytics.instance_update_available_button_click", n));
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