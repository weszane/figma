import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { K as _$$K } from "../905/443068";
import { EventShield } from "../905/821217";
import { A as _$$A } from "../905/24328";
import { r as _$$r } from "../905/857502";
import { PrototypingTsApi, Fullscreen, NodePropertyCategory } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { useAtomValueAndSetter } from "../figma_app/27355";
import m from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { logError } from "../905/714362";
import { k as _$$k } from "../905/582200";
import { k as _$$k2 } from "../6020/640789";
import { getI18nString } from "../905/303541";
import { lW } from "../figma_app/11182";
import { K as _$$K2 } from "../905/987240";
import { m0 } from "../figma_app/976749";
import { VU } from "../905/625959";
import { fullscreenValue } from "../figma_app/455680";
import { valueOrFallback } from "../905/216495";
import { kl } from "../905/275640";
import { eY } from "../figma_app/722362";
import { selectOpenFileKey, selectCurrentFile, useOpenFileObjectWithSinatraType } from "../figma_app/516028";
import { qb, Rv } from "../figma_app/2590";
import { vp } from "../figma_app/831696";
import { KindEnum } from "../905/129884";
import { QZ } from "../figma_app/727192";
import { e as _$$e } from "../figma_app/905311";
import { h6 } from "../905/401389";
import { m as _$$m } from "../6020/624960";
import { JU, Zk } from "../figma_app/626177";
let c = memo(function (t) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...t,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M16.5 7h-9a.5.5 0 0 0-.5.5V8h10v-.5a.5.5 0 0 0-.5-.5m.5 2H7v7.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5zM7.5 6A1.5 1.5 0 0 0 6 7.5v9A1.5 1.5 0 0 0 7.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 16.5 6zm7 7a1 1 0 0 0-.486-.857l-2.5-1.5A1 1 0 0 0 10 11.5v3a1 1 0 0 0 1.515.857l2.5-1.5A1 1 0 0 0 14.5 13m-1.972-.583L13.5 13l-.972.583L12 13.9l-1 .6v-3l1 .6z",
      clipRule: "evenodd"
    })
  });
});
var f = m;
function V({
  children: t,
  ...e
}) {
  return jsx(_$$k2, {
    isVisible: !0,
    children: jsx(_$$K, {
      ...e,
      children: t
    })
  });
}
function F({
  selected: t,
  hasFocus: e,
  flowItemsCount: o,
  item: i,
  index: r,
  hasFile: a,
  fileKey: l,
  fileProtoUrl: g,
  isDragging: _,
  viewOnly: m,
  dispatch: h,
  onMouseDown: b,
  onMouseMove: w,
  onMouseUp: I,
  renamingStartingPointNodeId: T,
  setRenamingStartingPointNodeId: j,
  submitRename: k,
  selectFlowRowAndSetToEditName: E,
  recordingKey: A
}) {
  return jsxs(_$$e, {
    className: "prototype_flows_panel--flowRow--pqvyi",
    "data-testid": "prototype-flow-panel-row",
    dragging: _,
    onDoubleClick: () => {
      var t;
      t = i.nodeID;
      return void (m || T === t || (j(t), PrototypingTsApi.centerViewportOnNodeIfNecessary(t)));
    },
    onMouseDown: b,
    onMouseMove: w,
    onMouseUp: I,
    recordingKey: generateRecordingKey(A, "draggableRow"),
    selected: t && e,
    singletonRow: o <= 1,
    children: [!m && T && T === i.nodeID ? jsx(_$$m, {
      defaultValue: i.prototypeStartingPoint.name || "",
      submitRename: t => k(i.nodeID, t),
      recordingKey: generateRecordingKey(A, "startingPointNameInput"),
      shouldListenForTabKeyboardEvent: o > 1,
      onTabKeyboardEvent: t => E(t ? r - 1 : r + 1),
      className: "prototype_flows_panel--startingPointNameInput--fH7vx prototype_starting_point_panel--startingPointNameInput--uR8GY raw_components--textAreaInput--mi1Ag raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t"
    }) : jsx(JU, {
      className: "prototype_flows_panel--flowName--kg1JF",
      children: i.prototypeStartingPoint.name
    }), T !== i.nodeID && jsx("div", {
      className: f()("prototype_flows_panel--panelInfoContainer--pVsR6", "prototype_flows_panel--fadeOutOnTitleUnhover--G4xPQ"),
      children: jsxs(EventShield, {
        display: "contents",
        eventListeners: ["onMouseDown"],
        children: [jsx(V, {
          onClick: () => {
            var t;
            t = i.nodeID;
            return void Fullscreen.selectInstances(t, !PrototypingTsApi.isNodeVisibleInViewport(t));
          },
          "aria-label": getI18nString("proto.flows_panel.select_frame"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("proto.flows_panel.select_frame")
          },
          children: jsx(_$$A, {})
        }), jsx(V, {
          disabled: !a,
          onClick: () => function (t) {
            let e = PrototypingTsApi.currentDeviceType();
            let o = vp({
              scalingInfo: {
                viewportScalingMode: qb(e),
                contentScalingMode: Rv(e)
              },
              nodeId: void 0,
              startingPointNodeId: t,
              showHotspots: void 0
            });
            h(lW({
              stringToCopy: `${g}${o}`
            }));
          }(i.nodeID),
          "aria-label": getI18nString("proto.flows_panel.copy_link"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("proto.flows_panel.copy_link")
          },
          children: jsx(_$$r, {})
        }), jsx(V, {
          disabled: !l,
          onClick: function () {
            h(_$$K2({
              fileKey: l,
              startingPointNodeId: i.nodeID,
              shouldOpenAtStartingPoint: !0,
              source: "properties_panel"
            }));
          },
          "aria-label": getI18nString("proto.flows_panel.preview"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("proto.flows_panel.preview")
          },
          children: jsx(c, {})
        })]
      })
    })]
  }, i.nodeID);
}
export let $$L0 = function (t) {
  let e = kl("prototypeStartingPointsInfo");
  let o = useSelector(selectOpenFileKey) || "";
  let l = selectCurrentFile();
  let s = useOpenFileObjectWithSinatraType({
    useSinatraType: !0
  });
  let p = useSelector(t => t.mirror.appModel.currentSelectedProperty);
  let d = eY();
  let c = m0();
  let [m, f] = useState(null);
  let w = useDispatch();
  let v = c || t.viewOnly;
  let P = useSelector(t => t.mirror.appModel.prototypeCanvasUiVisible && v);
  let R = valueOrFallback(e, []);
  let {
    collapsedInspectionPanelAtom,
    collapseEnabled
  } = QZ("prototype_flows");
  let [K, B] = useAtomValueAndSetter(collapsedInspectionPanelAtom);
  let V = useCallback(() => {
    B(!K);
  }, [B, K]);
  if (useEffect(() => {
    s || logError("prototyping", "No file available in flows panel", {
      fileKey: o
    });
  }, [s, o]), !e || c && 0 === (R = R.filter(t => d.get(t.nodeID)?.visible)).length) return null;
  function L(t) {
    let e = t;
    t >= R.length ? e = 0 : t < 0 && (e = R.length - 1);
    fullscreenValue.updateAppModel({
      currentSelectedProperty: {
        type: NodePropertyCategory.PROTOTOTYPE_STARTING_POINT,
        indices: [e]
      }
    });
    f(R[e].nodeID);
  }
  function z(t, e) {
    f(null);
    e && permissionScopeHandler.user("update-prototype-starting-point-name", () => {
      Fullscreen.updatePrototypeStartingPointName(t, e);
    });
  }
  let U = c && collapseEnabled && K;
  return jsx(_$$k, {
    name: "prototype_flows_panel",
    children: jsx(Zk, {
      className: K ? "noBottomPadding" : void 0,
      children: jsx(h6, {
        addProperty: lQ,
        boldHeaderRow: U,
        currentSelectedProperty: p,
        dispatch: w,
        hideAddButton: !0,
        isPanelBodyCollapsedAtom: collapseEnabled ? collapsedInspectionPanelAtom : void 0,
        onChange: t => {
          if (0 === t.length || 0 === p.indices.length) return;
          let e = R.filter((t, e) => p.indices.includes(e)).map(t => t.nodeID);
          if (0 === e.length) return;
          let o = R[p.indices[0]].nodeID;
          let n = t[0].nodeID === o ? "" : t[t.findIndex(t => t.nodeID === o) - 1].nodeID;
          let i = R[p.indices[p.indices.length - 1]].nodeID;
          let r = t[t.length - 1].nodeID === i ? "" : t[t.findIndex(t => t.nodeID === i) + 1].nodeID;
          permissionScopeHandler.user("change-starting-points", () => {
            Fullscreen.insertPrototypeStartingPointsBetween(e, n, r);
          });
        },
        onDeleteProperty: v ? () => {} : t => {
          let e = R.filter((e, o) => t.has(o)).map(t => t.nodeID);
          e.length > 0 && Fullscreen.deletePrototypeStartingPoints(e);
        },
        onHeaderClick: collapseEnabled ? V : void 0,
        openFile: l,
        pickerShown: null,
        propertyList: R,
        recordingKey: "prototypeFlowsList",
        renderProperty: (t, e, i, r, a, l, p, d, c) => jsx(F, {
          dispatch: w,
          fileKey: o,
          fileProtoUrl: s?.prototype_url,
          flowItemsCount: R.length,
          hasFile: !!s,
          hasFocus: a,
          index: e,
          isDragging: r,
          item: t,
          onMouseDown: p,
          onMouseMove: d,
          onMouseUp: c,
          recordingKey: generateRecordingKey("prototypeFlowsList", e),
          renamingStartingPointNodeId: m,
          selectFlowRowAndSetToEditName: L,
          selected: i,
          setRenamingStartingPointNodeId: f,
          submitRename: z,
          viewOnly: !!v
        }, e),
        reversed: !1,
        selectedPropertyType: NodePropertyCategory.PROTOTOTYPE_STARTING_POINT,
        shouldIgnoreKeyboardEventDuplicateProperty: !0,
        showVisibleFlowsButton: v && !U,
        stylePickerShown: {
          isShown: !1
        },
        title: getI18nString("proto.flows"),
        toggleVisibleFlows: t => {
          collapseEnabled && t.stopPropagation();
          VU.get("toggle-prototyping-info", "panel")(t);
        },
        visibleFlowsButtonChecked: P
      })
    })
  });
};
export const A = $$L0;