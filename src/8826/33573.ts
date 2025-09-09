import { jsx, jsxs } from "react/jsx-runtime";
import { useContext, useRef } from "react";
import { useDispatch } from "react-redux";
import { d as _$$d } from "../905/976845";
import { J as _$$J } from "../905/125993";
import { NodePropertyCategory, DesignGraphElements, DrawingElementType } from "../figma_app/763686";
import { ri, nc } from "../figma_app/15927";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { selectWithShallowEqual } from "../905/103090";
import { generateRecordingKey } from "../figma_app/878298";
import { GI } from "../905/125333";
import { getI18nString, renderI18nText } from "../905/303541";
import { XE, u1, Y as _$$Y } from "../figma_app/91703";
import { AV } from "../figma_app/933328";
import { fullscreenValue } from "../figma_app/455680";
import { Ku } from "../figma_app/740163";
import { normalizeValue, getCommonFromArray } from "../905/216495";
import { Tm, rC, Em } from "../figma_app/385874";
import { selectCurrentFile } from "../figma_app/516028";
import { Ib } from "../905/129884";
import { cn } from "../905/959568";
import { zK } from "../905/182453";
import { u as _$$u } from "../figma_app/365543";
import { W4, Gg, z1 } from "../figma_app/580959";
import { v9 } from "../figma_app/161708";
import { Hd } from "../figma_app/359164";
import { Zk } from "../figma_app/626177";
import { eh } from "../figma_app/156285";
import { o as _$$o } from "../905/705812";
import { _2 } from "../905/185121";
import { Y4 } from "../figma_app/384713";
import { A8 } from "../figma_app/722913";
import { fn } from "../figma_app/811257";
import { wv } from "../905/888175";
import { A as _$$A } from "../svg/88630";
function B(e) {
  let t = "stroke-settings";
  let [n, u] = useAtomValueAndSetter(GI);
  let v = (n.encodedPaints ? ri(n.encodedPaints) : n.paints) ?? [];
  let w = useDispatch();
  let B = useContext(zK);
  let F = () => null != B;
  let z = useRef(null);
  let G = e => {
    let t = nc(e);
    u({
      paints: e,
      encodedPaints: t
    });
    Tm.clearCache();
  };
  let K = e => {
    let {
      strokeWeight,
      dashPattern,
      strokeBrushGuid,
      stretchStrokeSettings,
      scatterStrokeSettings,
      dynamicStrokeSettings
    } = e;
    let o = normalizeValue(strokeWeight);
    o && u({
      strokeWeight: o
    });
    let s = normalizeValue(dashPattern);
    if (s && u({
      dashPattern: s
    }), strokeBrushGuid) {
      let e = normalizeValue(getCommonFromArray(strokeBrushGuid));
      e && u({
        strokeBrushGuid: e
      });
    }
    if (stretchStrokeSettings && u({
      stretchStrokeSettings: normalizeValue(stretchStrokeSettings)
    }), scatterStrokeSettings && u({
      scatterStrokeSettings: normalizeValue(scatterStrokeSettings)
    }), dynamicStrokeSettings) {
      let e = normalizeValue(getCommonFromArray(dynamicStrokeSettings));
      e && u({
        dynamicStrokeSettings: {
          interval: e.frequency ?? Y4.frequency,
          wiggle: e.wiggle ?? Y4.wiggle,
          smoothen: e.smoothen ?? Y4.smoothen
        }
      });
    }
  };
  let V = e => {
    let t = v.filter((t, n) => !e.has(n));
    0 === t.length && (t = [v[0]]);
    G(t);
  };
  let D = (e, {
    fromSearch: t
  } = {}) => {
    w(AV({
      style: e,
      inheritStyleKeyField: "inheritFillStyleKeyForStroke",
      fromSearch: t
    }));
  };
  let U = !!n.styleId || v.length > 0;
  let W = e.pickerShown?.id === t;
  let Y = !e.userFlags.dismissed_shift_to_draw_straight_lines_hint;
  let X = A8(GI);
  let Q = eh(GI);
  let $ = n.strokeBrushGuid;
  let Z = jsx(v9, {
    strokeWeight: n.strokeWeight || wv,
    onChange: K,
    recordingKey: generateRecordingKey(e, "weight")
  });
  let q = jsx("span", {
    children: jsx(_$$o, {
      value: Hd(n.strokeCap || "ROUND") || "ROUND",
      onChange: e => {
        u({
          strokeCap: e
        });
      },
      recordingKey: generateRecordingKey(e, "dashCap"),
      label: getI18nString("fullscreen.properties_panel.stroke_settings.end_points"),
      kind: "endCap"
    })
  });
  let J = jsx("span", {
    className: "pencil_tool_panel--advancedStroke--1497y",
    children: jsx(_$$d, {
      onClick: () => {
        if (e.pickerShown?.id === t) w(XE());else {
          if (!z) return;
          let e = cn(z.current);
          w(u1({
            id: t,
            initialX: e.x,
            initialY: e.y
          }));
        }
      },
      "aria-expanded": W,
      "aria-label": getI18nString("fullscreen.pencil_tool.advanced_stroke_settings"),
      recordingKey: generateRecordingKey(e, "more"),
      htmlAttributes: {
        onMouseDown: e => e.stopPropagation(),
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": getI18nString("fullscreen.pencil_tool.advanced_stroke_settings")
      },
      children: jsx(_$$J, {})
    })
  });
  return jsxs("div", {
    className: "pencil_tool_panel--pencilPanelContainer--O-fFF",
    children: [jsxs(Zk, {
      children: [jsx(W4, {
        addProperty: () => {
          fullscreenValue.triggerAction("add-stroke-to-selection");
        },
        currentSelectedProperty: e.currentSelectedProperty,
        defaultColor: rC,
        inheritStyleID: null,
        inheritStyleKey: n.styleId || null,
        inheritStyleKeyField: "inheritFillStyleKeyForStroke",
        library: e.library,
        modalShown: e.modalShown,
        onApplyStyle: D,
        onChange: G,
        onDeleteProperty: e => V(e),
        onReorder: () => {
          Tm.clearCache();
        },
        onToggleListLayout: () => {
          w(_$$Y({
            isListLayout: !e.stylePickerListLayout
          }));
        },
        openFile: e.openFile,
        propertyList: v,
        recordingKey: e.recordingKey,
        removeAllProperties: null,
        renderProperty: (t, n, i, r, a, o, c, d, u) => {
          let h = F() ? "preview-paint" : "paint";
          let g = Tm.getId(n, NodePropertyCategory.STROKE_PRESET, h);
          let m = v.slice(0, n).some(e => e.visible);
          return jsx(Gg, {
            colorFormat: e.colorFormat,
            currentSelectedGradientStop: e.currentSelectedGradientStop,
            currentTool: DesignGraphElements.VECTOR_PENCIL,
            defaultColor: Em,
            dispatch: w,
            dropdownShown: e.dropdownShown,
            editModeType: e.editModeType,
            hasFocus: a,
            hasVisiblePaintBelow: m,
            hideVisibilityToggle: 1 === v.length,
            id: g,
            index: n,
            inheritStyleKeyField: "inheritFillStyleKeyForStroke",
            isDragging: r,
            library: e.library,
            onApplyStyle: D,
            onChange: o,
            onMouseDown: c,
            onMouseMove: d,
            onMouseUp: u,
            onRemovePaint: v.length > 1 ? () => V(new Set([n])) : void 0,
            openFile: e.openFile,
            paint: t,
            pickerInStyleCreationShown: e.pickerInStyleCreationShown,
            pickerShown: e.pickerShown,
            recordingKey: generateRecordingKey(e, n),
            sceneGraphSelection: e.sceneGraphSelection,
            selected: e.stylePickerShown.isShown ? e.pickerShown?.id === g : i,
            selectedPropertyType: NodePropertyCategory.STROKE_PRESET,
            singletonRow: 1 === v.length,
            stylePickerShown: e.stylePickerShown,
            variableScopes: z1
          }, `paint-${n}`);
        },
        sceneGraphSelection: e.sceneGraphSelection,
        selectedPropertyType: NodePropertyCategory.STROKE_PRESET,
        selectedStyleGuid: e.selectedStyleGuid,
        stylePickerListLayout: e.stylePickerListLayout,
        stylePickerShown: e.stylePickerShown,
        styleType: "FILL",
        title: getI18nString("fullscreen.pencil_tool.stroke")
      }), U && jsx(fn, {
        ref: z,
        leftLabel: renderI18nText("fullscreen.properties_panel.section_stroke.label_weight"),
        leftInput: Z,
        rightLabel: renderI18nText("fullscreen.properties_panel.section_stroke.label_end_cap"),
        rightInput: q,
        icon: J
      })]
    }), Y && jsx("div", {
      className: "pencil_tool_panel--hintPanel--917wK",
      children: jsx(_$$u, {
        title: getI18nString("fullscreen.pencil_tool.hold_shift_to_draw_straight_lines"),
        icon_DEPRECATED: _$$A,
        userFlag: "dismissed_shift_to_draw_straight_lines_hint",
        hintText: getI18nString("fullscreen.pencil_tool.now_vertical_horizontal_and_diagonal_lines_are_a_breeze")
      })
    }), W && e.pickerShown && jsx(_2, {
      brushType: Q,
      dashPattern: n.dashPattern,
      defaultStyleAtom: GI,
      dropdownShown: e.dropdownShown,
      maxStrokeWeight: n.strokeWeight || wv,
      onChange: K,
      pickerShown: e.pickerShown,
      recordingKey: generateRecordingKey(e, "advanced"),
      strokeBrushGuid: $,
      strokeCap: n.strokeCap || "ROUND",
      strokeJoin: "ROUND",
      strokePanelMode: DrawingElementType.PENCIL,
      strokePanelTerminalPointCount: 2,
      strokeType: X
    })]
  });
}
export function $$F0(e) {
  let t = Ku();
  let n = selectCurrentFile();
  let i = selectWithShallowEqual(e => ({
    currentSelectedGradientStop: e.mirror.appModel.currentSelectedGradientStop,
    library: e.library,
    dropdownShown: e.dropdownShown,
    modalShown: e.modalShown,
    pickerShown: e.pickerShown,
    pickerInStyleCreationShown: e.pickerInStyleCreationShown,
    stylePickerShown: e.stylePickerShown,
    colorPicker: e.colorPicker,
    styleSets: e.styleSets,
    reposById: e.repos,
    teams: e.teams,
    editModeType: e.mirror.appModel.activeCanvasEditModeType,
    currentTool: e.mirror.appModel.currentTool,
    sceneGraphSelection: e.mirror.sceneGraphSelection,
    currentSelectedProperty: e.mirror.appModel.currentSelectedProperty,
    inheritStyleKey: e.mirror.selectionProperties.inheritFillStyleKeyForStroke || null,
    stylePickerListLayout: e.stylePickerListLayout,
    userFlags: e.userFlags,
    selectedStyleGuid: e.mirror.selectedStyleProperties.guid || null
  }));
  return jsx(B, {
    ...i,
    ...e,
    openFile: n,
    colorFormat: t
  });
}
export const q = $$F0;