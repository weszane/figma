import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../905/521428";
import { ComponentPropType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { generateRecordingKey } from "../figma_app/878298";
import { gw, c$ } from "../figma_app/236327";
import { Qp, JR, Wi } from "../figma_app/162641";
import { P as _$$P } from "../905/347284";
import { SvgComponent } from "../905/714743";
import { n as _$$n } from "../905/734251";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { findAssetForNode } from "../figma_app/646357";
import { isLoading } from "../905/18797";
import { FZ } from "../figma_app/803787";
import { selectMergedAssets } from "../figma_app/645694";
import { selectSceneGraph } from "../figma_app/889655";
import { rp } from "../figma_app/703988";
import { dD } from "../905/519113";
import { RR } from "../905/514666";
import { Wu } from "../905/221848";
import { lL, Cc, T as _$$T } from "../figma_app/270091";
import { wS, J0, fN, _A } from "../figma_app/65182";
import { RecordableDiv } from "../905/511649";
import { ph } from "../figma_app/709893";
import { KindEnum } from "../905/129884";
import { e as _$$e, q as _$$q } from "../figma_app/905311";
import { K0 } from "../figma_app/778125";
import { A as _$$A } from "../2854/952200";
import { A as _$$A2 } from "../1617/316388";
import { d as _$$d } from "../905/976845";
import { x as _$$x } from "../905/587214";
import { Zl } from "../905/211621";
import { SecureLink } from "../figma_app/637027";
import { zE } from "../905/8732";
import { stopPropagation } from "../figma_app/753501";
import { TS } from "../905/959568";
import { fieldContainer, fieldContainerFaded, label, learnMore, buttons, thumbnailGrid, contextMenu, warningPublish, warningIcon, listItemContainer, skeletonThumbnailList, skeletonText, skeletonThumbnailGrid, outerContainerBorderBottom, outerContainer, listContainer, gridContainer } from "../figma_app/527659";
function F({
  listItems: e,
  onSetComponents: t,
  onRemoveComponents: i,
  recordingKey: a
}) {
  let [s, o] = useState([]);
  let l = wS(e);
  let d = useCallback(e => i([e]), [i]);
  let c = useCallback((e, t, i, r, s, o, c, u) => jsx(_$$e, {
    selected: i,
    dragging: r,
    heightMultiplier: 1.5,
    className: "preferred_values_list_view--row--jqWFK",
    onMouseDown: s,
    onMouseMove: o,
    onMouseUp: c,
    onContextMenu: u,
    children: jsx(M, {
      component: e,
      removeComponent: d,
      unpublished: l.has(e.node_id),
      recordingKey: a
    }, e.node_id)
  }, e.node_id), [d, a, l]);
  return jsx(_$$q, {
    isDragDisabled: !1,
    listItems: e,
    selectedIndices: s,
    updateSelection: o,
    onChange: t,
    recordingKey: a,
    renderListItem: c
  });
}
function M({
  component: e,
  removeComponent: t,
  recordingKey: i,
  unpublished: s
}) {
  let o = useDispatch();
  let [l, c] = useState(!1);
  let u = useMemo(() => l ? J0(e) : void 0, [e, l]);
  return jsxs(RecordableDiv, {
    className: "preferred_values_list_view--listItemContainer--HQ71E preferred_values_instance_picker--listItemContainer--a4t-g",
    recordingKey: generateRecordingKey(...fN([i, ...j(e)])),
    children: [jsx("div", {
      className: "preferred_values_list_view--thumbnailList--L5c6i preferred_values_instance_picker--thumbnailList--nGJE1 drilldown_item--_thumbnailContainer--kDsBt preferred_values_instance_picker--thumbnailListBase--KpYBM preferred_values_instance_picker--_thumbnailBase--eAxDp",
      children: lL(e, null)
    }), jsx(ph, {
      text: e.name,
      onTruncationChange: c,
      tooltipPropsWhenTruncated: u
    }), s && jsx(SvgComponent, {
      className: "preferred_values_list_view--warningIconList--ivdml preferred_values_instance_picker--warningIconList--aDgpb preferred_values_instance_picker--warningIcon--2TXXz",
      svg: _$$A2
    }), jsx(K0, {
      recordingKey: generateRecordingKey(...fN([i, ...j(e), "removeButton"])),
      className: "preferred_values_list_view--listItemRemoveButton--QevDg preferred_values_instance_picker--listItemRemoveButton--HO05L",
      svg: _$$A,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("fullscreen.draggable_list.remove"),
      tooltipForScreenReadersOnly: !0,
      onClick: () => {
        t(e);
        o(hideDropdownAction());
      },
      onMouseDown: e => e.stopPropagation()
    })]
  });
}
let j = e => ["listView", "listItemProductComponent", e.node_id];
function Y(e) {
  let {
    pickerID,
    pickerWidth,
    shouldPerformSwapOnClick,
    title,
    preferredValues,
    onSwapCallback,
    onMultiselectCallback,
    overrideDefaultItem,
    hasValues
  } = e;
  let h = useSelector(e => e.instanceSwapPickerShown);
  let f = useDispatch();
  let _ = useRef(null);
  let A = useCallback(() => _.current ? TS({
    el: _.current
  }) : void 0, []);
  let y = useCallback(() => {
    f(zE({
      initialPosition: A(),
      id: pickerID,
      modal: !0
    }));
  }, [f, pickerID, A]);
  let b = useCallback(e => {
    "Enter" === e.key && f(zE({
      initialPosition: A(),
      id: pickerID,
      modal: !0,
      returnFocusToToggle: !0
    }));
  }, [f, pickerID, A]);
  return jsxs("div", {
    className: hasValues || h.isShown ? fieldContainer : fieldContainerFaded,
    children: [jsx("span", {
      className: label,
      children: renderI18nText("design_systems.component_properties.preferred_values")
    }), jsx("span", {
      className: learnMore,
      children: jsx(SecureLink, {
        href: "https://help.figma.com/hc/articles/5579474826519-Explore-component-properties#preferred",
        target: "_blank",
        onClick: stopPropagation,
        trusted: !0,
        children: renderI18nText("general.learn_more")
      })
    }), jsxs("div", {
      className: buttons,
      children: [hasValues && jsx(Cc, {
        isSwapPicker: !1,
        isPreferredValues: !0
      }), jsx(_$$d, {
        "aria-label": getI18nString("design_systems.component_properties.select_preferred_values"),
        "aria-expanded": h.isShown && h.id === pickerID,
        ref: _,
        onClick: y,
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("design_systems.component_properties.select_preferred_values"),
          onKeyDown: b
        },
        recordingKey: generateRecordingKey("instanceSwapToggle", pickerID),
        children: jsx(_$$x, {})
      }), h.isShown && h.id === pickerID && jsx(_$$T, {
        entrypointForLogging: e.entrypointForLogging,
        initialWidth: pickerWidth,
        multiselect: !0,
        onMultiselectCallback,
        onSwapCallback,
        overrideDefaultItem,
        pickerToggleRef: _,
        pickerType: Zl.PREFERRED_VALUES_PICKER,
        recordingKey: generateRecordingKey("instanceSwapPicker", pickerID),
        selectedItems: preferredValues,
        shouldPerformSwapOnClick,
        title
      })]
    })]
  });
}
let q = gw;
let $ = c$;
let Z = e => ["gridView", "gridItemProductComponent", e.node_id];
function X({
  component: e,
  onContextMenu: t,
  recordingKey: i
}) {
  let a = useMemo(() => J0(e), [e]);
  return jsx(_$$n.recordableDiv, {
    className: thumbnailGrid,
    recordingKey: i,
    onContextMenu: i => t(i, e),
    ...a,
    children: lL(e, rp.NORMAL)
  });
}
let Q = "preferred-values-picker-component-context-menu";
function J({
  onRemove: e,
  recordingKeys: t
}) {
  let i = useSelector(e => e.dropdownShown);
  let r = useDispatch();
  return i && i.type === Q ? jsx(q, {
    className: contextMenu,
    style: i.data.position,
    dispatch: r,
    children: jsx($, {
      recordingKey: generateRecordingKey(...t, "remove"),
      onClick: () => {
        e(i.data.component);
        r(hideDropdownAction());
      },
      children: renderI18nText("design_systems.component_properties.remove_value")
    })
  }) : null;
}
function ee({
  guids: e,
  recordingKey: t
}) {
  let i = useDispatch();
  let o = useCallback(() => {
    i(showModalHandler({
      type: dD,
      data: {
        initiallyCheckedItemIDs: new Set(e),
        entrypoint: RR.UNPUBLISHED_PREFERRED_VALUES_WARNING
      }
    }));
  }, [i, e]);
  return jsxs("div", {
    className: warningPublish,
    children: [jsx(SvgComponent, {
      className: warningIcon,
      svg: _$$A2
    }), renderI18nText("design_systems.component_properties.unpublished_preferred_values"), jsx(Button, {
      onClick: o,
      recordingKey: t,
      variant: "link",
      children: renderI18nText("design_systems.component_properties.publish_preferred_values")
    })]
  });
}
function et({
  isList: e
}) {
  return e ? jsxs("div", {
    className: listItemContainer,
    children: [jsx(Qp, {
      className: skeletonThumbnailList,
      animationType: JR.LIGHT_SHIMMER,
      opacity: 50
    }), jsx(Wi, {
      className: skeletonText,
      animationType: JR.LIGHT_SHIMMER,
      opacity: 50
    })]
  }) : jsx("div", {
    className: skeletonThumbnailGrid,
    children: jsx(Qp, {
      animationType: JR.LIGHT_SHIMMER,
      opacity: 50
    })
  });
}
export function $$ei0({
  borderBottom: e,
  swapPickerId: t,
  swapPickerWidth: i,
  values: s,
  addComponents: c,
  onSetComponents: u,
  removeComponents: m,
  toggleComponent: h,
  recordingKey: _,
  propDefType: E,
  propDefDefaultValue: x,
  entrypointForLogging: S
}) {
  let C = useSelector(e => e.preferredValuesPickerListLayout);
  let k = useDispatch();
  let R = useCallback((e, t) => {
    e.preventDefault();
    e.stopPropagation();
    k(showDropdownThunk({
      type: Q,
      data: {
        component: t,
        position: {
          top: e.clientY,
          left: e.clientX
        }
      }
    }));
  }, [k]);
  let N = useCallback((e, t) => {
    t === Wu.SELECT ? permissionScopeHandler.user("add-preferred-prop-values", () => c(e)) : permissionScopeHandler.user("remove-preferred-prop-values", () => m(e));
  }, [c, m]);
  let P = useCallback(e => {
    permissionScopeHandler.user("remove-preferred-prop-values", () => m(e));
  }, [m]);
  let O = useCallback(e => {
    permissionScopeHandler.user("toggle-preferred-prop-value", () => h(e));
  }, [h]);
  let D = useSelector(FZ);
  let L = useSelector(selectMergedAssets);
  let M = useSelector(selectSceneGraph);
  let j = wS(s);
  let U = 0 === s.length && E === ComponentPropType.INSTANCE_SWAP && x ? findAssetForNode(x, M, D, L) : void 0;
  let B = useSelector(e => isLoading(e.loadingState, _A(e.openFile?.key)));
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: e ? outerContainerBorderBottom : outerContainer,
      children: [jsx(Y, {
        entrypointForLogging: S,
        hasValues: s.length > 0,
        onMultiselectCallback: N,
        onSwapCallback: O,
        overrideDefaultItem: U,
        pickerID: t,
        pickerWidth: i,
        preferredValues: s,
        shouldPerformSwapOnClick: !1,
        title: getI18nString("design_systems.component_properties.choose_instances")
      }), s.length > 0 && jsxs(Fragment, {
        children: [jsx(_$$P, {
          className: K[`scrollContainer_${C ? "list" : "grid"}`],
          children: jsxs("div", {
            className: C ? listContainer : gridContainer,
            children: [C ? jsx(F, {
              onSetComponents: u,
              onRemoveComponents: P,
              listItems: s,
              recordingKey: _
            }) : s.map(e => jsx(X, {
              component: e,
              onContextMenu: R,
              recordingKey: generateRecordingKey(...fN([_, ...Z(e)]))
            }, e.node_id)), B && jsx(et, {
              isList: C
            })]
          })
        }), j.size > 0 && jsx(ee, {
          guids: s.map(e => e.node_id),
          recordingKey: generateRecordingKey(...fN([_, "publishValuesFromWarning"]))
        })]
      })]
    }), jsx(J, {
      onRemove: e => permissionScopeHandler.user("remove-preferred-prop-value", () => m([e])),
      recordingKeys: fN([_, "context-menu"])
    })]
  });
}
export const D = $$ei0;