import { jsx } from "react/jsx-runtime";
import { useMemo, useRef } from "react";
import { d4 } from "../vendor/514228";
import { N as _$$N } from "../905/120979";
import { $ } from "../905/953280";
import { y as _$$y } from "../905/582657";
import { o as _$$o } from "../905/530496";
import { V } from "../905/735518";
import { glU } from "../figma_app/763686";
import { RR } from "../figma_app/338442";
import { l7 } from "../905/189185";
import { md } from "../figma_app/27355";
import { R as _$$R } from "../905/103090";
import { t as _$$t } from "../905/303541";
import { Y5 } from "../figma_app/455680";
import { rT, dT } from "../figma_app/889655";
import { Xn } from "../905/429125";
import { Fv } from "../figma_app/164212";
import { Yc, m as _$$m, oX, MB } from "../figma_app/930914";
import { $H } from "../figma_app/323320";
import { GV } from "../figma_app/159296";
import { $ as _$$$ } from "../905/330495";
import { vr, sQ, iT, PM } from "../figma_app/151083";
import { _B } from "../figma_app/760428";
import { M0 } from "../figma_app/803054";
import { c as _$$c } from "../figma_app/94664";
import { sy } from "../figma_app/29089";
import { ZU, Wg } from "../figma_app/986347";
import { IU } from "../figma_app/386160";
export function $$L2() {
  let e = P();
  return useMemo(() => ({
    type: ZU.ACTION_SUBMENU,
    getTitle: () => _$$t("fullscreen.properties_panel.layer_header.reset_specific_changes"),
    icon: jsx(_$$N, {}),
    recordingKey: "resetSubmenu",
    items: [...sy, ...e],
    preventHoisting: !0
  }), [e]);
}
let P = () => {
  let e = useMemo($H, []);
  let t = _$$R(t => e(t, rT(Object.keys(t.mirror.sceneGraphSelection), t.mirror.sceneGraph)));
  return useMemo(() => {
    let e = [];
    for (let r in t) for (let i in t[r]) {
      let a = t[r][i];
      e.push({
        type: ZU.CUSTOM_ACTION,
        customActionType: Wg.STANDARD_BUTTON,
        onClick: () => l7.user("reset-prop-assignments", () => glU.resetComponentPropAssignmentForInstances(a.instanceGUIDs, i)),
        icon: jsx($, {}),
        getTitle: () => _$$t("design_systems.instance_panel.reset_property_assignment", {
          assignmentName: a.name
        }),
        recordingKey: `reset_property_assignment_${a.name}`,
        preventHoisting: !0
      });
    }
    return e;
  }, [t]);
};
var D = (e => (e[e.NO_SELECTIONS_ARE_INSTANCES = 0] = "NO_SELECTIONS_ARE_INSTANCES", e[e.SOME_SELECTIONS_ARE_INSTANCES = 1] = "SOME_SELECTIONS_ARE_INSTANCES", e[e.ALL_SELECTIONS_ARE_TOPLEVEL_INSTANCES = 2] = "ALL_SELECTIONS_ARE_TOPLEVEL_INSTANCES", e))(D || {});
export function $$k0() {
  let e = d4(dT);
  let {
    restoreType
  } = _$$$(e);
  if ("SYMBOL_AS_STATE" === restoreType) return {
    type: ZU.CUSTOM_ACTION,
    customActionType: Wg.STANDARD_BUTTON,
    getTitle: () => _$$t("design_systems.instance_panel.restore_variant"),
    recordingKey: "restoreVariant",
    icon: jsx(_$$y, {}),
    onClick: () => Y5.triggerActionInUserEditScope("restore-symbol-or-state-group")
  };
}
function M(e) {
  let t = M0(GV());
  return void 0 !== e ? e : t;
}
export function $$F1(e) {
  let t = useRef(null);
  let r = md(_$$c);
  let s = d4(dT);
  let o = function (e) {
    let t = d4(dT);
    let {
      needsUpdate
    } = vr(t);
    let n = M(e);
    return needsUpdate && n;
  }(e);
  let l = sQ(s);
  let {
    toggleDropdown,
    dropdownShown
  } = iT(s);
  let p = "ui3_toolbar_toggleInstanceOptionDropdown." + s.join("-");
  let _ = useMemo(() => ({
    type: ZU.CUSTOM_ACTION,
    customActionType: Wg.DROPDOWN_TRIGGER_BUTTON,
    onClick: toggleDropdown,
    icon: jsx("span", {
      className: IU,
      children: jsx(_$$o, {})
    }),
    getTitle: () => _$$t("design_systems.instance_panel.update_available"),
    recordingKey: p,
    isSelected: dropdownShown,
    dropdownTargetButtonRef: t,
    dropdown: jsx(PM, {
      targetRef: t.current ? t : r,
      instanceDropdownOptions: l,
      recordingKey: "ui3_toolbar_instanceNeedsUpdateDropdown",
      dropdownShown
    })
  }), [toggleDropdown, dropdownShown, p, l, r]);
  if (o) return _;
}
export function $$j3(e) {
  let t = useRef(null);
  let r = md(_$$c);
  let s = d4(dT);
  let o = _B(s);
  let l = Yc(RR.OVERRIDDEN_SYMBOL_ID, s);
  let d = _$$m(RR.OVERRIDDEN_SYMBOL_ID);
  let u = oX(RR.OVERRIDDEN_SYMBOL_ID, t.current ? t : r, o);
  let _ = MB(RR.OVERRIDDEN_SYMBOL_ID);
  let m = useMemo(() => ({
    type: ZU.CUSTOM_ACTION,
    customActionType: Wg.DROPDOWN_TRIGGER_BUTTON,
    onClick: u,
    icon: jsx(V, {}),
    getTitle: () => d,
    recordingKey: "ui3_toolbar_apply_instance_swap_prop_ref",
    isSelected: _,
    dropdownTargetButtonRef: t,
    dropdown: jsx(Xn, {
      source: Fv.ICON,
      nodeField: RR.OVERRIDDEN_SYMBOL_ID,
      newPropDefaultValue: o
    })
  }), [u, d, _, t, o]);
  if (M(e) && !l) return m;
}
export const NV = $$k0;
export const RK = $$F1;
export const aC = $$L2;
export const bX = $$j3;