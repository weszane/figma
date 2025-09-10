import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { R as _$$R } from "../905/57445";
import { RR } from "../figma_app/338442";
import { AppStateTsApi } from "../figma_app/763686";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useMemoStable } from "../905/19536";
import u from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { E as _$$E } from "../905/277716";
import { TQ, Zl } from "../905/211621";
import { B as _$$B } from "../905/714743";
import { o as _$$o } from "../905/96108";
import { getI18nString } from "../905/303541";
import { zE } from "../905/8732";
import { replaceSelection } from "../figma_app/741237";
import { isInvalidValue, MIXED_MARKER } from "../905/216495";
import { B9 } from "../figma_app/722362";
import { getBasename } from "../905/309735";
import { XV } from "../figma_app/383828";
import { Ib } from "../905/129884";
import { VZ } from "../905/959568";
import { xP } from "../figma_app/65182";
import { u as _$$u } from "../figma_app/940920";
import { yQ } from "../figma_app/930914";
import { L as _$$L } from "../figma_app/884735";
import { en } from "../figma_app/323320";
import { x as _$$x } from "../905/346809";
import { fI } from "../figma_app/626177";
import { _ as _$$_ } from "../figma_app/103028";
import { DE } from "../figma_app/811257";
import { $ as _$$$ } from "../905/330495";
import { p as _$$p } from "../figma_app/295764";
import { h_ } from "../figma_app/151083";
import { T as _$$T } from "../figma_app/270091";
import { S as _$$S } from "../905/459477";
import { F as _$$F } from "../905/280165";
import { MC, LO, Z0, YF, sK, qw, vS, EA, me, t4, Bt, Qp, iB, u$, vF, I0, $C, We, N1 } from "../figma_app/882817";
import { A as _$$A } from "../3850/839808";
import { A as _$$A2 } from "../svg/431879";
import { A as _$$A3 } from "../2854/769773";
var p = u;
var $$Y0 = (e => (e[e.NAME_ONLY = 0] = "NAME_ONLY", e[e.INSTANCE_SWAP_PICKER = 1] = "INSTANCE_SWAP_PICKER", e))($$Y0 || {});
function $(e) {
  e.stopPropagation();
}
export function $$X1(e) {
  let t = B9();
  return useMemo(() => {
    if (0 === e.length) return null;
    let r = t.get(e[0]);
    return r?.symbolId;
  }, [e, t]);
}
export function $$q3(e) {
  let {
    canCollapse,
    resettableInstanceOverrides,
    instanceAndSublayerGUIDs,
    shouldHideButtons,
    isInComponentPlayground
  } = e;
  let d = useRef(null);
  let {
    onlyInstances,
    onlyInstanceSublayers
  } = _$$p(instanceAndSublayerGUIDs);
  let _ = $$X1(instanceAndSublayerGUIDs);
  if (!onlyInstances && !onlyInstanceSublayers) return null;
  let h = !isInComponentPlayground && 0 === e.instanceNameDisplayOverride;
  let m = jsxs(Fragment, {
    children: [jsx($$J2, {
      ...e,
      panelTitleRef: d,
      dropdownIdPrefix: "instance-panel-instance-swap-picker",
      shouldUseUI3RowCompatibleStyles: h
    }), !shouldHideButtons && jsxs("span", {
      className: MC,
      children: [jsx(yQ, {
        nodeField: RR.OVERRIDDEN_SYMBOL_ID,
        defaultValue: _,
        guids: instanceAndSublayerGUIDs
      }), jsx(_$$F, {
        instanceAndSublayerGUIDs,
        recordingKey: e.recordingKey
      }), jsx(h_, {
        resettableInstanceOverrides,
        instanceAndSublayerGUIDs,
        recordingKey: e.recordingKey,
        showAllInstanceOptions: !0
      })]
    })]
  });
  return h ? jsx(DE, {
    label: null,
    input: m,
    icon: null
  }) : jsx(fI, {
    className: p()(LO, {
      [Z0]: canCollapse,
      [YF]: isInComponentPlayground
    }),
    ref: d,
    children: m
  });
}
export function $$J2({
  panelTitleRef: e,
  panelTitleOverridesClassName: t,
  pickerButtonTextOverridesClassName: r,
  flushLeft: u,
  dropdownIdPrefix: O,
  shouldHideInstanceIcon: D = !1,
  chevronOverride: M,
  shouldUseUI3RowCompatibleStyles: U,
  ...V
}) {
  let {
    instanceNameDisplayOverride,
    containerWide,
    instanceAndSublayerGUIDs,
    shouldHideButtons,
    highlightNodesOnHover
  } = V;
  let Q = `${O}-${instanceAndSublayerGUIDs.join("-")}`;
  let ee = B9();
  let et = useMemo(en, []);
  let {
    propDef,
    instanceSwapPickerShown
  } = selectWithShallowEqual(e => ({
    propDef: et(e, instanceAndSublayerGUIDs, RR.OVERRIDDEN_SYMBOL_ID),
    instanceSwapPickerShown: e.instanceSwapPickerShown
  }));
  let {
    preferredValues,
    preferredValuesFetchError,
    retryPreferredValuesFetch
  } = xP(propDef ?? void 0);
  let eo = useMemo(() => preferredValuesFetchError ? jsx(_$$u, {
    onRetry: retryPreferredValuesFetch,
    recordingKey: "instancePropAssignment"
  }) : void 0, [preferredValuesFetchError, retryPreferredValuesFetch]);
  let el = useDispatch();
  let {
    backingSymbolGUID,
    backingStateGroupGUID,
    affiliatedStateGroupId
  } = _$$$(instanceAndSublayerGUIDs);
  let {
    backingSymbolOrStateGroupOfContainingInstances,
    containingInstancesOfSublayers,
    onlyInstances,
    onlyInstanceSublayers
  } = _$$p(instanceAndSublayerGUIDs);
  let eg = useSelector(e => e.library);
  let [ef, eE] = useMemoStable(() => {
    let e = backingStateGroupGUID ?? backingSymbolGUID;
    if (!e || isInvalidValue(e)) return [[], null];
    let {
      selectedItem,
      selectedLibraryKey
    } = XV(e, eg, ee);
    return [selectedItem ? [selectedItem] : [], selectedLibraryKey];
  }, [backingStateGroupGUID, backingSymbolGUID, eg, ee]);
  let ey = useMemo(() => !!onlyInstanceSublayers && !!backingSymbolOrStateGroupOfContainingInstances && backingSymbolOrStateGroupOfContainingInstances !== MIXED_MARKER, [onlyInstanceSublayers, backingSymbolOrStateGroupOfContainingInstances]);
  let eb = useHandleMouseEvent(generateRecordingKey(V.recordingKey, "instanceName", instanceAndSublayerGUIDs.join("-")), "mouseenter", () => {
    highlightNodesOnHover && AppStateTsApi.canvasViewState().temporarilyHoveredNodes.set(instanceAndSublayerGUIDs);
  });
  let eT = useHandleMouseEvent(generateRecordingKey(V.recordingKey, "instanceName", instanceAndSublayerGUIDs.join("-")), "mouseleave", () => {
    highlightNodesOnHover && AppStateTsApi.canvasViewState().temporarilyHoveredNodes.set([]);
  });
  let eI = "";
  if (null != backingStateGroupGUID || affiliatedStateGroupId) {
    if (isInvalidValue(backingStateGroupGUID)) eI = getI18nString("design_systems.instance_panel.mixed");else {
      let e = backingStateGroupGUID ? ee.get(backingStateGroupGUID) : null;
      let t = affiliatedStateGroupId ? ee.get(affiliatedStateGroupId) : null;
      eI = getBasename(t?.name || e?.name || "");
    }
  } else null != backingSymbolGUID ? eI = isInvalidValue(backingSymbolGUID) ? getI18nString("design_systems.instance_panel.mixed") : getBasename(ee.get(backingSymbolGUID)?.name || "") : null != backingSymbolOrStateGroupOfContainingInstances && (eI = isInvalidValue(backingSymbolOrStateGroupOfContainingInstances) ? getI18nString("design_systems.instance_panel.mixed") : getBasename(backingSymbolOrStateGroupOfContainingInstances.name || ""));
  let eS = "";
  if (onlyInstances) {
    let e = ee.get(instanceAndSublayerGUIDs[0])?.name;
    instanceAndSublayerGUIDs.every(t => ee.get(t)?.name === e) && e && (eS = e);
  }
  let {
    modalWidth
  } = TQ(Zl.INSTANCE_SWAP_PICKER);
  let eA = useAtomWithSubscription(_$$_);
  let ex = useCallback(() => {
    if (shouldHideButtons) return;
    let t = eA?.current || e?.current;
    let r = t ? VZ(t, modalWidth, !1) : void 0;
    el(zE({
      initialPosition: r,
      id: Q,
      modal: !0
    }));
  }, [shouldHideButtons, e, modalWidth, el, Q, eA]);
  let eN = useCallback(() => {
    ey && replaceSelection(containingInstancesOfSublayers.map(e => e.guid));
  }, [ey, containingInstancesOfSublayers]);
  let eC = "";
  onlyInstances ? eC = instanceSwapPickerShown.isShown && instanceSwapPickerShown.id === Q ? sK : shouldHideButtons ? qw : vS : onlyInstanceSublayers && (eC = ey ? EA : me);
  let ew = useRef(null);
  let eO = _$$R(ew);
  let eR = M ?? jsx(_$$B, {
    className: t4,
    svg: _$$A3
  });
  return jsxs(_$$E, {
    name: "instance_title_control",
    children: [0 === instanceNameDisplayOverride ? jsx("div", {
      className: U ? Bt : Qp,
      onMouseEnter: eb,
      onMouseLeave: eT,
      children: jsx(_$$o, {
        className: U ? iB : containerWide ? u$ : vF,
        text: eS ?? eI
      })
    }) : 1 !== instanceNameDisplayOverride && propDef ? jsx("div", {
      className: I0,
      children: jsx(_$$L, {
        nodeField: RR.OVERRIDDEN_SYMBOL_ID,
        instanceGUIDs: instanceAndSublayerGUIDs,
        label: null
      })
    }) : jsxs(_$$x, {
      className: p()(eC, t),
      recordingKey: generateRecordingKey(V, "panelTitle", instanceAndSublayerGUIDs.join("-")),
      onClick: onlyInstanceSublayers ? eN : ex,
      onMouseDown: $,
      doNotReserveSpaceForChevron: u,
      ...(eO ? {
        "data-tooltip": eI,
        "data-tooltip-type": Ib.TEXT
      } : void 0),
      children: [!D && jsx(_$$B, {
        className: $C,
        svg: _$$A
      }), jsx("div", {
        "data-testid": "instance-panel-title-component-name",
        className: r || We,
        ref: ew,
        children: eI
      }), !shouldHideButtons && jsxs(Fragment, {
        children: [!onlyInstanceSublayers && eR, ey && jsx(_$$B, {
          className: N1,
          width: "24px",
          height: "24px",
          svg: _$$A2,
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": getI18nString("design_systems.instance_panel.select_instance")
        })]
      })]
    }), instanceSwapPickerShown.isShown && instanceSwapPickerShown.id === Q && jsx(_$$T, {
      selectedItems: ef,
      selectedLibraryKey: eE,
      title: getI18nString("design_systems.instance_panel.swap_instance"),
      itemsToSwap: instanceAndSublayerGUIDs,
      recordingKey: generateRecordingKey(V, "instanceSwapPicker"),
      pickerType: Zl.INSTANCE_SWAP_PICKER,
      preferredItems: preferredValues,
      preferredValuesErrorComponent: eo,
      entrypointForLogging: _$$S.InstancePickerEntrypoint.SELECTED_INSTANCE_SWAP
    })]
  });
}
export const NA = $$Y0;
export const _B = $$X1;
export const bj = $$J2;
export const iN = $$q3;