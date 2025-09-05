import { jsx } from "react/jsx-runtime";
import { useRef, useMemo, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { u as _$$u } from "../905/911813";
import { A as _$$A } from "../905/891805";
import { _ as _$$_ } from "../905/607842";
import { N as _$$N } from "../905/120979";
import { glU } from "../figma_app/763686";
import { RR } from "../figma_app/338442";
import { l7 } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { t as _$$t } from "../905/303541";
import { u1, XE } from "../figma_app/91703";
import { VU } from "../905/625959";
import { Xo } from "../figma_app/482495";
import { Fk } from "../figma_app/167249";
import { cn } from "../905/959568";
import { Xn } from "../905/429125";
import { eM, xb, Fv, wh } from "../figma_app/164212";
import { aR } from "../figma_app/530362";
import { yt } from "../figma_app/292212";
import { oX, MB } from "../figma_app/930914";
import { fx } from "../figma_app/505098";
import { A as _$$A2 } from "../figma_app/78608";
import { ZU, Wg } from "../figma_app/986347";
export function $$w0(e) {
  let t = yt();
  let r = function (e, t) {
    let r = function () {
      let e = useRef(null);
      let t = Fk(e => e.getDirectlySelectedNodes()[0]?.name);
      let r = useMemo(() => ({
        propName: t
      }), [t]);
      let a = useMemo(() => {
        let e = eM(RR.SLOT_CONTENT_ID).defaultType;
        return _$$t("design_systems.component_properties.apply_component_property", {
          propType: xb(e).toLocaleLowerCase()
        });
      }, []);
      let o = oX(RR.SLOT_CONTENT_ID, e, r);
      let l = MB(RR.SLOT_CONTENT_ID);
      let d = Fk(e => {
        if (!getFeatureFlags().dse_slots) return !1;
        let t = e.getDirectlySelectedNodes();
        if (0 === t.length || !t.every(e => e.canBeSlot && !e.isSlotReactive) || void 0 === fx(e, t.map(e => e.id))) return !1;
        let r = new Set();
        for (let e of t) {
          if (!e.containingSymbolId || r.has(e.containingSymbolId)) return !1;
          r.add(e.containingSymbolId);
        }
        return !0;
      });
      let c = useMemo(() => ({
        type: ZU.CUSTOM_ACTION,
        customActionType: Wg.DROPDOWN_TRIGGER_BUTTON,
        onClick: o,
        icon: jsx(_$$u, {}),
        getTitle: () => a,
        recordingKey: "ui3_toolbar_apply_slot_property",
        isSelected: l,
        dropdownTargetButtonRef: e,
        dropdown: jsx(Xn, {
          source: Fv.ICON,
          nodeField: RR.SLOT_CONTENT_ID,
          newPropDefaultValue: r
        })
      }), [o, l, e, r, a]);
      if (d) return c;
    }();
    let l = O(e);
    let d = function ({
      slotPropertyDefinition: e,
      includesInstanceSublayer: t
    }, r) {
      let s = useDispatch();
      let l = Xo();
      let d = l?.id === aR;
      let c = md(_$$A2);
      let u = r ?? c;
      let p = useCallback(() => {
        let t = u?.current ? cn(u.current, wh) : {};
        s(u1({
          id: aR,
          initialX: t?.x,
          initialY: t?.y,
          data: {
            defID: e?.explicitDefID
          }
        }));
      }, [s, e?.explicitDefID, u]);
      let f = useCallback(() => {
        d ? s(XE()) : p();
      }, [s, d, p]);
      let y = useMemo(() => ({
        type: ZU.CUSTOM_ACTION,
        customActionType: Wg.DIALOG_TRIGGER_BUTTON,
        onClick: f,
        icon: jsx(_$$A, {}),
        getTitle: () => _$$t("fullscreen.properties_panel.section_slot.edit_slot_property"),
        recordingKey: "ui3_toolbar_edit_slot_property",
        isSelected: d
      }), [f, d]);
      if (getFeatureFlags().dse_slots && void 0 !== e && !t) return y;
    }(e, t);
    return useMemo(() => {
      let e = [];
      d && e.push(d);
      l && e.push(l);
      r && e.push(r);
      return e;
    }, [r, d, l]);
  }(t, e);
  let l = function (e) {
    let t = function ({
      slotPropertyDefinition: e,
      includesAssignedSlot: t
    }) {
      let r = Fk(e => {
        let t = e.getDirectlySelectedNodes();
        if (1 !== t.length) return;
        let r = t[0];
        return r?.containingInstanceId;
      });
      return useMemo(() => {
        if (getFeatureFlags().dse_slots && void 0 !== e && t && r) return {
          type: ZU.CUSTOM_ACTION,
          customActionType: Wg.STANDARD_BUTTON,
          onClick: () => {
            l7.user("reset-slot-assignment", () => {
              glU?.resetComponentPropAssignmentForInstances([r], e.explicitDefID);
            });
          },
          icon: jsx(_$$N, {}),
          getTitle: () => _$$t("fullscreen.properties_panel.section_slot.reset_slot_assignment"),
          recordingKey: "toolResetSlotAssignment"
        };
      }, [t, r, e]);
    }(e);
    let r = O(e);
    return useMemo(() => {
      let e = [];
      t && (t.preventHoisting = void 0 !== r, e.push(t));
      r && (r.preventHoisting = !0, e.push(r));
      return e;
    }, [t, r]);
  }(t);
  return useMemo(() => getFeatureFlags().dse_slots ? t.includesInstanceSublayer ? l : r : [], [r, l, t]);
}
function O({
  slotPropertyDefinition: e,
  includesInstanceSublayer: t
}) {
  let r = Fk(e => {
    let t = e.getDirectlySelectedNodes();
    if (1 !== t.length) return;
    let r = t[0];
    return !!r && r.isSlotReactive && r.childCount > 0;
  });
  return useMemo(() => {
    if (getFeatureFlags().dse_slots && e && r) return {
      type: ZU.CUSTOM_ACTION,
      customActionType: Wg.STANDARD_BUTTON,
      onClick: () => {
        VU.get("empty-slot-contents", "toolbar")?.();
      },
      icon: t ? jsx(_$$_, {}) : jsx(_$$N, {}),
      getTitle: () => t ? _$$t("fullscreen.properties_panel.section_slot.empty_slot_contents") : _$$t("fullscreen.properties_panel.section_slot.reset_slot"),
      recordingKey: "toolEmptySlotContents"
    };
  }, [r, e, t]);
}
export const db = $$w0;