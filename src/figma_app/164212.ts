import { jsx } from "react/jsx-runtime";
import { $ } from "../905/953280";
import { X } from "../905/737763";
import { p as _$$p } from "../905/730229";
import { T as _$$T } from "../905/339716";
import { V } from "../905/735518";
import { m as _$$m } from "../905/367152";
import { O as _$$O } from "../905/599243";
import { c as _$$c } from "../905/535130";
import { s as _$$s } from "../905/551945";
import { _ as _$$_ } from "../905/144222";
import { h as _$$h } from "../905/565502";
import { R } from "../905/82603";
import { RR } from "../figma_app/338442";
import { J0O, Z_n, uXg, glU, rXF, j0r } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { iR } from "../figma_app/476572";
import { getI18nString } from "../905/303541";
import { Oo } from "../905/709171";
import { gl, oV, hS } from "../905/216495";
import { nD } from "../905/92359";
let $$A31 = 304;
let $$x1 = "add-component-prop-dropdown";
let $$N2 = "bubbled-props-picker";
var $$C6 = (e => (e[e.DEFINITION = 0] = "DEFINITION", e[e.ASSIGNMENT = 1] = "ASSIGNMENT", e))($$C6 || {});
var $$w5 = (e => (e[e.REGULAR = 0] = "REGULAR", e[e.WIDE = 1] = "WIDE", e[e.UNBOUNDED = 2] = "UNBOUNDED", e[e.RESIZABLE_SIDEBAR = 3] = "RESIZABLE_SIDEBAR", e))($$w5 || {});
let O = {
  [J0O.BOOL]: {
    SIZE_24_SMALL: $,
    SIZE_16: X
  },
  [J0O.TEXT]: {
    SIZE_24_SMALL: _$$p,
    SIZE_16: _$$T
  },
  [J0O.INSTANCE_SWAP]: {
    SIZE_24_SMALL: V,
    SIZE_16: _$$m
  },
  [J0O.NUMBER]: {
    SIZE_24_SMALL: _$$O,
    SIZE_16: _$$c
  },
  [J0O.IMAGE]: {
    SIZE_24_SMALL: _$$s,
    SIZE_16: _$$_
  },
  [J0O.SLOT]: {
    SIZE_24_SMALL: _$$h,
    SIZE_16: R
  }
};
export function $$R34(e, t = !1) {
  let r = O[e][t ? "SIZE_16" : "SIZE_24_SMALL"];
  return jsx(r, {});
}
export function $$L8(e, t, r, n) {
  e && trackEventAnalytics("ds_component_props_def_create_modal_open", {
    product_component_guid: e.guid,
    product_component_is_state_group: e.isStateGroup,
    is_bottoms_up_creation: t,
    prop_type: J0O[r],
    source: n
  });
}
export function $$P33(e) {
  switch (e) {
    case J0O.BOOL:
      return getI18nString("design_systems.component_properties.boolean");
    case J0O.TEXT:
      return getI18nString("design_systems.component_properties.text");
    case J0O.INSTANCE_SWAP:
      return getI18nString("design_systems.component_properties.instance_swap");
    case J0O.VARIANT:
      return getI18nString("design_systems.component_properties.variant");
    case J0O.NUMBER:
      return getI18nString("design_systems.component_properties.number");
    case J0O.IMAGE:
      return getI18nString("design_systems.component_properties.image");
    case J0O.SLOT:
      return getI18nString("design_systems.component_properties.slot");
  }
}
export function $$D19(e, t) {
  if (gl(t)) return oV;
  if (t && "object" == typeof t && "type" in t && t.type === Z_n.ALIAS) return t;
  switch (e) {
    case J0O.BOOL:
      return "true" === t;
    case J0O.IMAGE:
    case J0O.TEXT:
    case J0O.INSTANCE_SWAP:
    case J0O.NUMBER:
    case J0O.SLOT:
      return t;
    default:
      throw Error(`Unexpected component prop type: ${e}`);
  }
}
export function $$k20(e) {
  switch (e) {
    case RR.VISIBLE:
      return {
        defaultType: J0O.BOOL,
        types: [J0O.BOOL]
      };
    case RR.TEXT:
      return {
        defaultType: J0O.TEXT,
        types: [J0O.TEXT, J0O.NUMBER]
      };
    case RR.OVERRIDDEN_SYMBOL_ID:
      return {
        defaultType: J0O.INSTANCE_SWAP,
        types: [J0O.INSTANCE_SWAP]
      };
    case RR.SLOT_CONTENT_ID:
      return {
        defaultType: J0O.SLOT,
        types: [J0O.SLOT]
      };
  }
}
export function $$M9(e) {
  switch (e) {
    case J0O.BOOL:
      return !0;
    case J0O.TEXT:
      return "";
    case J0O.INSTANCE_SWAP:
      return null;
    case J0O.VARIANT:
      return getI18nString("design_systems.states_panel.default_property_value");
    case J0O.NUMBER:
      return "0";
    case J0O.IMAGE:
      return null;
  }
}
export function $$F0(e, t) {
  switch (e) {
    case J0O.INSTANCE_SWAP:
      return !!t;
    case J0O.TEXT || J0O.VARIANT:
      return !!t?.length;
    case J0O.NUMBER:
      return $$et10(t);
    default:
      return !0;
  }
}
export let $$j12 = {
  format: e => e ? getI18nString("design_systems.component_properties.boolean_true") : getI18nString("design_systems.component_properties.boolean_false"),
  isEqual: (e, t) => e === t
};
export function $$U32(e, t) {
  if (!t.length) return null;
  let r = e(t[0]);
  return r && t.every(t => e(t) === r) ? r : null;
}
export function $$B22(e, t) {
  switch (e) {
    case uXg.CONFLICTING_NAMES_ERROR:
    case uXg.CONFLICTING_NAMES_WITH_VARIANT_ERROR:
      return getI18nString("design_systems.component_properties.error_conflicting_name");
    case uXg.UNUSED_DEF_ERROR:
      return getI18nString("design_systems.component_properties.error_unused_property");
    default:
      return t ? getI18nString("design_systems.component_properties.has_unpublished_preferred_values") : "";
  }
}
export function $$G30(e, t) {
  if (!e.length) return null;
  let {
    backingSymbolGUID,
    backingStateGroupGUID
  } = nD(new Set(e), t);
  return backingStateGroupGUID && hS(backingStateGroupGUID) ? t.get(backingStateGroupGUID) : backingSymbolGUID && hS(backingSymbolGUID) ? t.get(backingSymbolGUID) : oV;
}
export function $$V25(e, t, r) {
  let n;
  if (t.size) {
    n = t.has(oV) ? oV : e === J0O.INSTANCE_SWAP ? $$G30([...t], r) : t.size > 1 ? oV : t.values().next().value;
    return $$D19(e, n);
  }
}
export function $$H27(e, t, r) {
  return Oo(e, r) ? glU.getDefaultStateForLocalStateGroup(t) : glU.getDefaultStateForSubscribedStateGroup(t, e.default_state_key);
}
export function $$z17(e) {
  if (e) try {
    return new URL(e).hostname;
  } catch (e) {}
}
export var $$W4 = (e => (e.PILL = "pill", e.ICON = "icon", e))($$W4 || {});
export function $$K28(e, t) {
  return !!("INSTANCE" === e.type && !e.isInstanceSublayer && e.simplifyInstancePanels && t.get(e.symbolId || "")) && e.hasHiddenChildrenWhenSimplified;
}
export function $$Y23(e, t) {
  let r;
  if (e.length) {
    for (let n of e) {
      let e = t.get(n);
      if (e) {
        if (e.isInstance) {
          let t = e.symbolId;
          if (!t) continue;
          if (void 0 === r) r = t;else if (t !== r) return;
        } else if (e.isCodeInstance) {
          let t = e.backingCodeComponent?.guid;
          if (!t) continue;
          if (void 0 === r) r = t;else if (t !== r) return;
        }
      }
    }
    return r;
  }
}
export function $$$15(e, t) {
  let r;
  if (e.length) {
    for (let n of e) {
      let e = t.get(n);
      if (!e || "INSTANCE" !== e.type) continue;
      let i = e.symbolId;
      if (!i) continue;
      let a = t.get(i);
      if (!a) continue;
      if (a.isLooseComponent) return;
      let s = a.containingStateGroupId;
      if (s) {
        if (void 0 === r) r = s;else if (s !== r) return;
      }
    }
    return r;
  }
}
export function $$X16(e, t) {
  if (!e.length) return new Set();
  let r = new Set(t[e[0]]?.hiddenProps);
  return e.reduce((e, r) => t[r]?.hiddenProps ? iR(e, new Set(t[r].hiddenProps)) : e, r);
}
export function $$q21(e, t) {
  return e ? t[e]?.componentPropDefError ?? uXg.NONE : uXg.NONE;
}
export function $$J14(e, t) {
  let r = {};
  for (let n of e) {
    let e = t.get(n);
    e && Object.assign(r, e.componentPropsJsonForNode);
  }
  return r;
}
export function $$Z18(e, t) {
  let r = t[e]?.defs;
  return r ? Object.values(r).sort((e, t) => e.sortPosition < t.sortPosition ? -1 : 1) : [];
}
export function $$Q7(e) {
  return e.type !== J0O.VARIANT;
}
let ee = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;
export function $$et10(e) {
  if (!ee.test(e)) return !1;
  let t = parseFloat(e);
  return !isNaN(t) && isFinite(t) && "" !== e.trim();
}
export function $$er11(e) {
  return $$et10(e) ? Number(parseFloat(e).toFixed(2)) : (console.warn("Failed converting string to float:", e), 0);
}
export function $$en24(e) {
  return isNaN(e) ? (console.warn("Failed converting number to string:", e), "0") : e.toFixed(2).replace(/\.?0+$/, "");
}
export function $$ei26(e) {
  if (e?.length === 1) switch (e[0]) {
    case "TEXT_DATA":
      return RR.TEXT;
    case "VISIBLE":
      return RR.VISIBLE;
    default:
      return;
  }
}
export function $$ea3(e) {
  return {
    type: Z_n.NODE_FIELD_ALIAS,
    resolvedType: e.value.varValue.resolvedType,
    value: {
      stablePathToNode: e.value.stablePath,
      nodeField: "COMPONENT_PROP_ASSIGNMENTS",
      indexOrKey: e.value.explicitDefId
    }
  };
}
export let $$es13 = {
  [J0O.BOOL]: {
    variableType: rXF.BOOLEAN,
    requestedTypes: [rXF.BOOLEAN],
    variableScope: j0r.ALL_SCOPES
  },
  [J0O.TEXT]: {
    variableType: rXF.TEXT_DATA,
    requestedTypes: [rXF.STRING],
    variableScope: j0r.TEXT_CONTENT
  },
  [J0O.NUMBER]: {
    variableType: rXF.FLOAT,
    requestedTypes: [rXF.FLOAT],
    variableScope: j0r.ALL_SCOPES
  }
};
export function $$eo29(e) {
  return !!getFeatureFlags().dse_slots && e === J0O.SLOT;
}
export const B_ = $$F0;
export const C4 = $$x1;
export const Dd = $$N2;
export const FF = $$ea3;
export const Fv = $$W4;
export const O2 = $$w5;
export const OE = $$C6;
export const Pf = $$Q7;
export const Pp = $$L8;
export const Ql = $$M9;
export const Rq = $$et10;
export const T1 = $$er11;
export const X9 = $$j12;
export const Xp = $$es13;
export const Yg = $$J14;
export const Yi = $$$15;
export const ZH = $$X16;
export const _P = $$z17;
export const aO = $$Z18;
export const dl = $$D19;
export const eM = $$k20;
export const f3 = $$q21;
export const iz = $$B22;
export const k4 = $$Y23;
export const lg = $$en24;
export const m5 = $$V25;
export const mv = $$ei26;
export const ui = $$H27;
export const vo = $$K28;
export const w1 = $$eo29;
export const wd = $$G30;
export const wh = $$A31;
export const xP = $$U32;
export const xb = $$P33;
export const zn = $$R34;