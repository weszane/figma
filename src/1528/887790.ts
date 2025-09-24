import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import r from "classnames";
import { SvgComponent } from "../905/714743";
import { hx } from "../figma_app/290668";
import { A } from "../6828/523860";
import { A as _$$A } from "../6828/85206";
import { z } from "../905/284530";
import { usePlaygroundSceneGraph } from "../figma_app/722362";
import { PanelWidth, DefinitionAssignment } from "../figma_app/164212";
import { useSingleNodePropDefinitions } from "../figma_app/626952";
import { qC, tO } from "../figma_app/545190";
import { iN, NA } from "../figma_app/760428";
import { S as _$$S } from "../905/459477";
import { DK, q9 } from "../1528/85853";
import { A as _$$A2 } from "../1617/230645";
var i = r;
function u({
  children: e,
  isInitiallyOpen: t,
  title: n,
  titleClassName: r
}) {
  let [u, p] = useState(t);
  let h = () => p(e => !e);
  return jsxs("div", {
    children: [jsxs("div", {
      className: i()("collapse--collapseTitle---N1bR", r),
      onClick: h,
      onKeyDown: e => hx({
        e,
        onClickHandler: h
      }),
      role: "button",
      tabIndex: 0,
      children: [jsx(SvgComponent, {
        className: "collapse--expandCaret--FzvQ9 library_section_header--expandCaret--20Tzs object_row--expandCaret--f1MjE object_row--indent--uZlad",
        svg: u ? A : _$$A
      }), n]
    }), u && e]
  });
}
let v = "playground_props_section--divider--I23uK";
function N({
  componentProps: e,
  bubbledComponentId: t,
  productComponentGUID: n,
  sceneGraph: l,
  instanceSwapPickerInitialHeight: r,
  instanceSwapPickerInitialPosition: i,
  recordingKey: s,
  containerWidth: o,
  onSelectedPropertyValueHistoryChange: d,
  onTypedPropChange: c
}) {
  let p = usePlaygroundSceneGraph();
  let {
    typedPropDefsExcludingHidden,
    variantPropDefs,
    assignmentValuesByDefId,
    allStateVariantProps,
    backingStateVariantProps,
    statePropertyValues
  } = useSingleNodePropDefinitions(t, e, n, p);
  return typedPropDefsExcludingHidden.length || variantPropDefs.length ? jsx(u, {
    titleClassName: "playground_props_section--bubbledPropsTitle--8SBPC",
    isInitiallyOpen: typedPropDefsExcludingHidden.length < qC,
    title: jsx(iN, {
      canCollapse: !0,
      shouldHideButtons: !0,
      isInComponentPlayground: !0,
      instanceAndSublayerGUIDs: [t],
      containerWide: o === PanelWidth.WIDE,
      recordingKey: s,
      instanceNameDisplayOverride: NA.NAME_ONLY
    }),
    children: jsx(tO, {
      allStateVariantProps,
      assignmentValues: assignmentValuesByDefId,
      backingStateVariantProps,
      containerWidth: o,
      entrypointForInstanceSwapPicker: _$$S.InstancePickerEntrypoint.INSTANCE_SWAP_PROP_PLAYGROUND_BUBBLED,
      forBubbledProps: !0,
      guids: [t],
      hideIcon: !0,
      inPlayground: !0,
      instanceSwapPickerInitialHeight: r,
      instanceSwapPickerInitialPosition: i,
      onSelectedPropertyValueHistoryChange: d,
      onTypedPropChange: c,
      productComponentGUID: n,
      propDimension: DefinitionAssignment.ASSIGNMENT,
      recordingKey: s,
      sceneGraph: l,
      splitVariantAndTypedProps: !1,
      statePropertyValues,
      typedPropDefs: typedPropDefsExcludingHidden,
      variantPropDefs
    })
  }) : null;
}
export function $$y0({
  componentProps: e,
  label: t,
  playgroundGUID: n,
  productComponentGUID: r,
  sceneGraph: i,
  viewOnlyMode: s,
  instanceSwapPickerInitialHeight: o,
  instanceSwapPickerInitialPosition: d,
  recordingKey: c,
  containerWidth: u,
  errorData: x,
  shouldShowDividerAboveProps: y,
  onSelectedPropertyValueHistoryChange: b,
  onTypedPropChange: C
}) {
  let S = usePlaygroundSceneGraph();
  let T = n && e;
  let {
    typedPropDefsExcludingHidden,
    variantPropDefs,
    assignmentValuesByDefId,
    allStateVariantProps,
    backingStateVariantProps,
    statePropertyValues
  } = useSingleNodePropDefinitions(n ?? "", e ?? {}, r, S);
  let A = useMemo(() => T && e[n]?.bubbledNestedInstanceGUIDs || [], [e, T, n]);
  return x ? x.shouldHideError ? null : jsxs(Fragment, {
    children: [jsx("div", {
      className: v
    }), jsx("div", {
      className: "playground_props_section--errorBannerContainer--d3nQO",
      children: jsx(z, {
        orientation: "vertical",
        iconSrc: _$$A2,
        onClose: () => x.setShouldHideError(!0),
        variant: "warning",
        title: DK(x.errorType),
        children: q9(x.errorType)
      })
    })]
  }) : T && (typedPropDefsExcludingHidden.length || variantPropDefs.length || A.length) ? jsxs(Fragment, {
    children: [y && jsx("div", {
      className: v
    }), t, jsx(tO, {
      allStateVariantProps,
      assignmentValues: assignmentValuesByDefId,
      backingStateVariantProps,
      containerWidth: u,
      entrypointForInstanceSwapPicker: _$$S.InstancePickerEntrypoint.INSTANCE_SWAP_PROP_PLAYGROUND,
      forBubbledProps: !1,
      guids: [n],
      hideIcon: !0,
      inPlayground: !0,
      instanceSwapPickerInitialHeight: o,
      instanceSwapPickerInitialPosition: d,
      onSelectedPropertyValueHistoryChange: b,
      onTypedPropChange: C,
      productComponentGUID: r,
      propDimension: DefinitionAssignment.ASSIGNMENT,
      recordingKey: c,
      sceneGraph: i,
      splitVariantAndTypedProps: !!s,
      statePropertyValues,
      typedPropDefs: typedPropDefsExcludingHidden,
      variantPropDefs,
      viewOnlyMode: s
    }), A.map(t => {
      let n = e[t]?.backingSymbol || "";
      let l = e[n]?.containingStateGroupGUID || n;
      return l ? jsx(N, {
        bubbledComponentId: t,
        componentProps: e,
        containerWidth: u,
        instanceSwapPickerInitialHeight: o,
        instanceSwapPickerInitialPosition: d,
        onSelectedPropertyValueHistoryChange: b,
        onTypedPropChange: C,
        productComponentGUID: l,
        recordingKey: c,
        sceneGraph: i
      }, t) : null;
    })]
  }) : null;
}
export const x = $$y0;