import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useCallback, useEffect, useId } from "react";
import { useDispatch } from "../vendor/514228";
import { gr } from "../figma_app/243058";
import { yG } from "../905/859698";
import { mSn } from "../figma_app/763686";
import d from "../vendor/181640";
import p from "../vendor/223926";
import h from "lodash-es/mapValues";
import x from "../vendor/626715";
import { Pt } from "../figma_app/806412";
import { Lo } from "../905/714362";
import { t as _$$t } from "../905/303541";
import { gl } from "../905/216495";
import { h6 } from "../figma_app/852050";
import { Um } from "../905/848862";
import { U as _$$U } from "../905/506188";
import { Zh } from "../figma_app/2590";
import { zt } from "../figma_app/84580";
import { A as _$$A } from "../897/590880";
import { l6, c$, sK } from "../905/794875";
import { iR, d2 } from "../figma_app/152690";
import { CC } from "../figma_app/767318";
var c = d;
var u = p;
var m = h;
var g = x;
let w = "prototype_set_variable_mode_controls--dropdownRow--vl5z4";
let k = "missing";
let P = l6;
let O = c$;
let L = l6;
let D = c$;
let R = {};
export function $$M1() {
  let e = h6() || R;
  let t = iR();
  let n = useMemo(() => {
    let n = m()(t, (e, t) => ({
      collectionID: e.node_id,
      collectionName: e.name,
      modeOptions: e.modes?.map(t => ({
        modeId: {
          guid: t.id,
          collectionKey: e.key,
          extendedCollectionId: null
        },
        name: t.name,
        sortPosition: t.sortPosition,
        isCompatible: !0,
        collectionName: e.name
      })) || [],
      explicitMode: null,
      inheritMode: null,
      libraryKey: e.library_key
    }));
    return c()({}, e, n);
  }, [t, e]);
  let o = useMemo(() => Object.entries(n).map(([e, t]) => ({
    setKey: e,
    modeData: t,
    isLocal: void 0 === t.libraryKey
  })), [n]);
  let a = useMemo(() => Object.values(o).filter(e => e.modeData?.modeOptions && e.modeData?.modeOptions.length > 1), [o]);
  let d = useMemo(() => g()(a.map(e => e.modeData.libraryKey ?? CC)), [a]);
  let p = _$$U(d);
  let [h, x] = useMemo(() => {
    let {
      _local,
      _unknownFile,
      ...n
    } = u()(a, e => e.isLocal ? "_local" : e.modeData.libraryKey && p.data?.[e.modeData.libraryKey] === void 0 ? "_unknownFile" : e.modeData.libraryKey);
    let o = Object.entries(n).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [{
      libraryKey: e,
      fileName: p.data?.[e] ?? ""
    }, ...t]).flat(1);
    _unknownFile && (o.push({
      libraryKey: CC,
      fileName: _$$t("variables.mode_properties_panel.used_variables.subheading")
    }), o.push(..._unknownFile));
    return [_local ?? [], o];
  }, [p, a]);
  let y = d2();
  let f = useCallback(e => {
    let t = y[yG(e)];
    let n = a.find(t => t.setKey === e);
    if (n) return (e => {
      if (e) {
        void 0 === t && (t = e.modeData.modeOptions[0].modeId.guid);
        return e.modeData.modeOptions.find(e => e.modeId.guid !== t && (t = e.modeId.guid, !0))?.modeId.guid;
      }
    })(n);
  }, [y, a]);
  let b = a.length > 0 ? a[0] : void 0;
  let I = b?.setKey;
  let j = b?.modeData.collectionID;
  let N = useMemo(() => I && f(I), [I, f]);
  let T = useDispatch();
  return {
    localVariableSets: h,
    allVariableSets: a,
    firstVariableSet: b,
    firstVariableSetID: j,
    firstVariableSetMode: N,
    getDefaultNewModeForVariableCollectionKey: f,
    reportAnalyticsEventWhenSelected: e => {
      let t = mSn.getVariableSetInfoForSetModeAnalytics(e);
      T(Zh({
        name: "prototype.set_mode_select_variable_set",
        params: {
          ...t
        }
      }));
    },
    subscribedVariableSetsWithSections: x
  };
}
export function $$V0({
  targetVariableSetID: e,
  targetVariableModeID: t,
  deprecatedTargetVariableSetKey: n,
  updateSelectionProperties: r,
  actionIndexPath: l
}) {
  let {
    getDefaultNewModeForVariableCollectionKey,
    allVariableSets,
    reportAnalyticsEventWhenSelected
  } = $$M1();
  let {
    shouldShowAdvancedPrototypingPaywall,
    showAdvancedPrototypingVariablesModal
  } = zt();
  useEffect(() => {
    if (!n || gl(n)) return;
    let e = allVariableSets.find(e => e.setKey === n);
    e ? (Lo("SetVariableModeControls", "updating variable set key to non-deprecated id value"), r({
      targetVariableSetKey: void 0,
      targetVariableSetID: e?.modeData.collectionID
    })) : (Lo("SetVariableModeControls", "attempted to update variable set key to non-deprecated id value, but could not find it in the list of variable sets, will just clear out the bad data."), r({
      targetVariableSetKey: void 0
    }));
  }, [n, allVariableSets, r]);
  let [h, m] = useMemo(() => {
    let t = gl(e) || void 0 === e ? e : function (e, t) {
      let n = e.find(e => e.modeData.collectionID === t);
      if (n) return n;
      let o = gr.toRefIfSubscribed(t);
      if (o) return e.find(e => e.setKey === o.key);
    }(allVariableSets, e) || k;
    let n = (() => {
      if (!gl(t) && void 0 !== t && t !== k) return t;
    })();
    return [t, n];
  }, [e, allVariableSets]);
  let x = useId();
  let g = jsx(U, {
    ariaLabelledBy: x,
    selectedVariableSet: h,
    onChange: e => {
      shouldShowAdvancedPrototypingPaywall ? showAdvancedPrototypingVariablesModal() : (reportAnalyticsEventWhenSelected(e.modeData.collectionID), r({
        targetVariableSetID: e.modeData.collectionID,
        targetVariableModeID: getDefaultNewModeForVariableCollectionKey(e.setKey)
      }));
    },
    actionIndexPath: l
  });
  let y = jsx(_$$A, {
    input: g,
    label: _$$t("proto.set_variable_mode.collection_label"),
    labelId: x
  });
  let v = useId();
  let I = jsx($, {
    ariaLabelledBy: v,
    selectedVariableSetKey: m && m.setKey,
    selectedVariableModeID: t,
    onChange: e => {
      shouldShowAdvancedPrototypingPaywall ? showAdvancedPrototypingVariablesModal() : r({
        targetVariableModeID: e
      });
    },
    actionIndexPath: l
  });
  let C = jsx(_$$A, {
    input: I,
    label: _$$t("proto.set_variable_mode.mode_label"),
    labelId: v
  });
  return jsxs("div", {
    children: [y, m && C]
  });
}
let B = {
  format: e => void 0 === e ? _$$t("proto.prototype_panel.edit_set_mode.none") : e === k ? _$$t("proto.prototype_panel.edit_set_mode.missing_collection") : e.modeData.collectionName,
  isEqual: (e, t) => void 0 !== e && void 0 !== t && e !== k && t !== k && (e.setKey === t.setKey || e.modeData.collectionID === t.modeData.collectionID)
};
function H(e, t) {
  return "libraryKey" in e ? [t && jsx(sK, {}, e.libraryKey + "divider"), jsx(O, {
    isHeader: !0,
    formattedValue: e.fileName
  }, e.libraryKey + "header")] : jsx(O, {
    value: e
  }, e.setKey);
}
function U({
  selectedVariableSet: e,
  onChange: t,
  actionIndexPath: n,
  ariaLabelledBy: i
}) {
  let a = useDispatch();
  let l = Um();
  let s = "set-variable-mode--select-variable-set-" + n;
  let {
    localVariableSets,
    allVariableSets,
    subscribedVariableSetsWithSections
  } = $$M1();
  return jsx(P, {
    id: s,
    ariaLabelledBy: i,
    className: w,
    property: e,
    formatter: B,
    dispatch: a,
    dropdownShown: l?.type === s ? l : null,
    onChange: e => {
      gl(e) || void 0 === e || e === k || t(e);
    },
    children: allVariableSets.length > 0 ? [localVariableSets.length > 0 && jsx(O, {
      isHeader: !0,
      formattedValue: _$$t("variables.mode_properties_panel.assets_created_in_file.subheading")
    }, Pt(s, "local_variables")), ...localVariableSets.map(e => H(e, !1)), ...subscribedVariableSetsWithSections.map((e, t) => H(e, localVariableSets.length > 0 || t > 0))] : []
  });
}
let F = {
  format: e => void 0 === e ? _$$t("proto.prototype_panel.edit_set_mode.none") : e === k ? _$$t("proto.prototype_panel.edit_set_mode.missing_mode") : e?.name ?? ""
};
function K(e) {
  return jsx(D, {
    value: e
  }, e.modeId.guid);
}
function $({
  selectedVariableSetKey: e,
  selectedVariableModeID: t,
  onChange: n,
  actionIndexPath: a,
  ariaLabelledBy: l
}) {
  let s = useDispatch();
  let d = Um();
  let c = "set-variable-mode--select-variable-mode-" + a;
  let {
    allVariableSets
  } = $$M1();
  let u = useMemo(() => allVariableSets.find(t => t.setKey === e)?.modeData.modeOptions, [e, allVariableSets]);
  let h = useMemo(() => gl(t) || void 0 === t ? t : u?.find(e => e.modeId.guid === t) || k, [t, u]);
  return jsx(L, {
    "aria-labelledby": l,
    id: c,
    className: w,
    property: h,
    formatter: F,
    dispatch: s,
    dropdownShown: d?.type === c ? d : null,
    onChange: e => {
      !e || gl(e) || e === k || n(e.modeId.guid);
    },
    children: u && u?.map(K)
  });
}
export const I = $$V0;
export const b = $$M1;