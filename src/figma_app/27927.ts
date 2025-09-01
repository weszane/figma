import { jsx } from "react/jsx-runtime";
import { createContext, useState, useRef, useMemo } from "react";
import { KF } from "../figma_app/465776";
import { NLJ, rcl } from "../figma_app/763686";
import { t } from "../905/303541";
import { YV } from "../figma_app/240545";
import { KB, hP, H9, BK, il, bp, Wm, nF, iB, cc, P6, VC, b1, Z3, qO, Nm, $W, sb, Vx, Ad, RB, S2, y8, kf, Jo, QF, bE, kd, FJ, Ty } from "../figma_app/801324";
import { HY, V4 } from "../figma_app/300024";
let n;
export let $$p3 = createContext({
  hoveredShape: null,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  draggedShape: null,
  shouldDragCancel: !1,
  onDragStart: () => {},
  onDrag: () => {},
  onDragEnd: () => {}
});
export function $$_1(e) {
  let [t, r] = useState(null);
  let [n, o] = useState(null);
  let [l, c] = useState(!1);
  let _ = useRef(null);
  let m = useRef(null);
  let g = useRef(null);
  let f = useMemo(() => ({
    hoveredShape: t,
    onMouseEnter: e => {
      r(e);
    },
    onMouseLeave: () => {
      r(null);
    },
    draggedShape: n,
    shouldDragCancel: l,
    onDragStart: e => {
      let t = document.getElementById(HY);
      KF(!!t, "Can't find delightful toolbar");
      t && (_.current = t.getBoundingClientRect());
      let r = document.getElementById(V4);
      KF(!!r, "Can't find delightful toolbar submenu");
      r && (m.current = r.getBoundingClientRect());
      let n = document.getElementById(YV);
      n && (g.current = n.getBoundingClientRect());
      o(e);
    },
    onDrag: e => {
      if (_.current && m.current) {
        let t = h(e, _.current) || h(e, m.current) || !!g.current && h(e, g.current, !1);
        t !== l && c(t);
      }
    },
    onDragEnd: () => {
      _.current = null;
      m.current = null;
      g.current = null;
      o(null);
      c(!1);
    }
  }), [n, t, l]);
  return jsx($$p3.Provider, {
    value: f,
    children: e.children
  });
}
function h(e, t, r = !0) {
  return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && (r || e.y <= t.y + t.height) || r && e.y > t.y + t.height;
}
let $$m0 = new Map([["SQUARE", NLJ.SHAPE_WHITEBOARD_SQUARE], ["ELLIPSE", NLJ.SHAPE_WHITEBOARD_ELLIPSE], ["ROUNDED_RECTANGLE", NLJ.SHAPE_WHITEBOARD_ROUNDED_RECTANGLE], ["DIAMOND", NLJ.SHAPE_WHITEBOARD_DIAMOND], ["TRIANGLE_UP", NLJ.SHAPE_WHITEBOARD_TRIANGLE_UP], ["TRIANGLE_DOWN", NLJ.SHAPE_WHITEBOARD_TRIANGLE_DOWN], ["PARALLELOGRAM_RIGHT", NLJ.SHAPE_WHITEBOARD_PARALLELOGRAM_RIGHT], ["PARALLELOGRAM_LEFT", NLJ.SHAPE_WHITEBOARD_PARALLELOGRAM_LEFT], ["ENG_DATABASE", NLJ.SHAPE_WHITEBOARD_ENG_DATABASE], ["ENG_QUEUE", NLJ.SHAPE_WHITEBOARD_ENG_QUEUE], ["ENG_FILE", NLJ.SHAPE_WHITEBOARD_ENG_FILE], ["ENG_FOLDER", NLJ.SHAPE_WHITEBOARD_ENG_FOLDER], ["TRAPEZOID", NLJ.SHAPE_WHITEBOARD_TRAPEZOID], ["STAR", NLJ.SHAPE_WHITEBOARD_STAR], ["SHIELD", NLJ.SHAPE_WHITEBOARD_SHIELD], ["HEXAGON", NLJ.SHAPE_WHITEBOARD_HEXAGON], ["PENTAGON", NLJ.SHAPE_WHITEBOARD_PENTAGON], ["OCTAGON", NLJ.SHAPE_WHITEBOARD_OCTAGON], ["PLUS", NLJ.SHAPE_WHITEBOARD_PLUS], ["PREDEFINED_PROCESS", NLJ.SHAPE_WHITEBOARD_PREDEFINED_PROCESS], ["MANUAL_INPUT", NLJ.SHAPE_WHITEBOARD_MANUAL_INPUT], ["CHEVRON", NLJ.SHAPE_WHITEBOARD_CHEVRON], ["DOCUMENT_SINGLE", NLJ.SHAPE_WHITEBOARD_DOCUMENT_SINGLE], ["DOCUMENT_MULTIPLE", NLJ.SHAPE_WHITEBOARD_DOCUMENT_MULTIPLE], ["ARROW_LEFT", NLJ.SHAPE_WHITEBOARD_ARROW_LEFT], ["ARROW_RIGHT", NLJ.SHAPE_WHITEBOARD_ARROW_RIGHT], ["SUMMING_JUNCTION", NLJ.SHAPE_WHITEBOARD_SUMMING_JUNCTION], ["OR", NLJ.SHAPE_WHITEBOARD_OR], ["SPEECH_BUBBLE", NLJ.SHAPE_WHITEBOARD_SPEECH_BUBBLE], ["INTERNAL_STORAGE", NLJ.SHAPE_WHITEBOARD_INTERNAL_STORAGE], ["MINDMAP_TREE_NUCLEUS", NLJ.SHAPE_WHITEBOARD_MINDMAP_TREE_NUCLEUS]]);
let $$g4 = new Map(Array.from($$m0, ([e, t]) => [t, e]));
export function $$f5(e) {
  return $$g4.has(e);
}
let E = new Map([[NLJ.SHAPE_WHITEBOARD_TRIANGLE_UP, 104], [NLJ.SHAPE_WHITEBOARD_ELLIPSE, 128], [NLJ.SHAPE_WHITEBOARD_SQUARE, 112]]);
function y(e) {
  let t = E.get(e);
  return void 0 === t ? 112 : t;
}
export function $$b2() {
  n || (n = new Map([[NLJ.SHAPE_WHITEBOARD_SQUARE, {
    action: "set-tool-shape-whiteboard-square",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-square"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_SQUARE,
    Icon: KB,
    canvasToSvgScale: 176 / y(NLJ.SHAPE_WHITEBOARD_SQUARE)
  }], [NLJ.SHAPE_WHITEBOARD_ELLIPSE, {
    action: "set-tool-shape-whiteboard-ellipse",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-ellipse"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_ELLIPSE,
    Icon: hP,
    canvasToSvgScale: 176 / y(NLJ.SHAPE_WHITEBOARD_ELLIPSE)
  }], [NLJ.SHAPE_WHITEBOARD_ROUNDED_RECTANGLE, {
    action: "set-tool-shape-whiteboard-rounded-rectangle",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-rounded-rectangle"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_ROUNDED_RECTANGLE,
    Icon: H9,
    canvasToSvgScale: 160 / 104
  }], [NLJ.SHAPE_WHITEBOARD_DIAMOND, {
    action: "set-tool-shape-whiteboard-diamond",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-diamond"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_DIAMOND,
    Icon: BK,
    canvasToSvgScale: 176 / 112
  }], [NLJ.SHAPE_WHITEBOARD_TRIANGLE_UP, {
    action: "set-tool-shape-whiteboard-triangle-up",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-triangle-up"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_TRIANGLE_UP,
    Icon: il,
    canvasToSvgScale: 176 / y(NLJ.SHAPE_WHITEBOARD_TRIANGLE_UP)
  }], [NLJ.SHAPE_WHITEBOARD_TRIANGLE_DOWN, {
    action: "set-tool-shape-whiteboard-triangle-down",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-triangle-down"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_TRIANGLE_DOWN,
    Icon: bp,
    canvasToSvgScale: 176 / 104
  }], [NLJ.SHAPE_WHITEBOARD_PARALLELOGRAM_RIGHT, {
    action: "set-tool-shape-whiteboard-parallelogram-right",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-parallelogram-right"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_PARALLELOGRAM_RIGHT,
    Icon: Wm,
    canvasToSvgScale: 176 / 104
  }], [NLJ.SHAPE_WHITEBOARD_PARALLELOGRAM_LEFT, {
    action: "set-tool-shape-whiteboard-parallelogram-left",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-parallelogram-left"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_PARALLELOGRAM_LEFT,
    Icon: nF,
    canvasToSvgScale: 176 / 104
  }], [NLJ.SHAPE_WHITEBOARD_ENG_DATABASE, {
    action: "set-tool-shape-whiteboard-eng-database",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-eng-database"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_ENG_DATABASE,
    Icon: iB,
    canvasToSvgScale: 1.5446428571428572
  }], [NLJ.SHAPE_WHITEBOARD_ENG_QUEUE, {
    action: "set-tool-shape-whiteboard-eng-queue",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-eng-queue"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_ENG_QUEUE,
    Icon: cc,
    canvasToSvgScale: 1.7653061224489797
  }], [NLJ.SHAPE_WHITEBOARD_ENG_FILE, {
    action: "set-tool-shape-whiteboard-eng-file",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-eng-file"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_ENG_FILE,
    Icon: P6,
    canvasToSvgScale: 1.6634615384615385
  }], [NLJ.SHAPE_WHITEBOARD_ENG_FOLDER, {
    action: "set-tool-shape-whiteboard-eng-folder",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-eng-folder"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_ENG_FOLDER,
    Icon: VC,
    canvasToSvgScale: 1.6634615384615385
  }], [NLJ.SHAPE_WHITEBOARD_TRAPEZOID, {
    action: "set-tool-shape-whiteboard-trapezoid",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-trapezoid"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_TRAPEZOID,
    Icon: b1,
    canvasToSvgScale: 152 / 81.92
  }], [NLJ.SHAPE_WHITEBOARD_STAR, {
    action: "set-tool-shape-whiteboard-star",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-star"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_STAR,
    Icon: Z3,
    canvasToSvgScale: 240 / 112
  }], [NLJ.SHAPE_WHITEBOARD_SHIELD, {
    action: "set-tool-shape-whiteboard-shield",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-shield"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_SHIELD,
    Icon: qO,
    canvasToSvgScale: 212 / 90
  }], [NLJ.SHAPE_WHITEBOARD_HEXAGON, {
    action: "set-tool-shape-whiteboard-hexagon",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-hexagon"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_HEXAGON,
    Icon: Nm,
    canvasToSvgScale: 152 / 80.5
  }], [NLJ.SHAPE_WHITEBOARD_PENTAGON, {
    action: "set-tool-shape-whiteboard-pentagon",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-pentagon"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_PENTAGON,
    Icon: $W,
    canvasToSvgScale: 190 / 111
  }], [NLJ.SHAPE_WHITEBOARD_OCTAGON, {
    action: "set-tool-shape-whiteboard-octagon",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-octagon"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_OCTAGON,
    Icon: sb,
    canvasToSvgScale: 218 / 112
  }], [NLJ.SHAPE_WHITEBOARD_PLUS, {
    action: "set-tool-shape-whiteboard-plus",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-plus"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_PLUS,
    Icon: Vx,
    canvasToSvgScale: 234 / 112
  }], [NLJ.SHAPE_WHITEBOARD_PREDEFINED_PROCESS, {
    action: "set-tool-shape-whiteboard-predefined-process",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-predefined-process"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_PREDEFINED_PROCESS,
    Icon: Ad,
    canvasToSvgScale: 149 / 86.09
  }], [NLJ.SHAPE_WHITEBOARD_MANUAL_INPUT, {
    action: "set-tool-shape-whiteboard-manual-input",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-manual-input"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_MANUAL_INPUT,
    Icon: RB,
    canvasToSvgScale: 152 / 93
  }], [NLJ.SHAPE_WHITEBOARD_CHEVRON, {
    action: "set-tool-shape-whiteboard-chevron",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-chevron"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_CHEVRON,
    Icon: S2,
    canvasToSvgScale: 168 / 77
  }], [NLJ.SHAPE_WHITEBOARD_DOCUMENT_SINGLE, {
    action: "set-tool-shape-whiteboard-document-single",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-document-single"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_DOCUMENT_SINGLE,
    Icon: y8,
    canvasToSvgScale: 188 / 99.08
  }], [NLJ.SHAPE_WHITEBOARD_DOCUMENT_MULTIPLE, {
    action: "set-tool-shape-whiteboard-document-multiple",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-document-multiple"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_DOCUMENT_MULTIPLE,
    Icon: kf,
    canvasToSvgScale: 201 / 100.89
  }], [NLJ.SHAPE_WHITEBOARD_ARROW_LEFT, {
    action: "set-tool-shape-whiteboard-arrow-left",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-arrow-left"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_ARROW_LEFT,
    Icon: Jo,
    canvasToSvgScale: 212 / 88.97
  }], [NLJ.SHAPE_WHITEBOARD_ARROW_RIGHT, {
    action: "set-tool-shape-whiteboard-arrow-right",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-arrow-right"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_ARROW_RIGHT,
    Icon: QF,
    canvasToSvgScale: 212 / 88.97
  }], [NLJ.SHAPE_WHITEBOARD_SUMMING_JUNCTION, {
    action: "set-tool-shape-whiteboard-summing-junction",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-summing-junction"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_SUMMING_JUNCTION,
    Icon: bE,
    canvasToSvgScale: 1
  }], [NLJ.SHAPE_WHITEBOARD_OR, {
    action: "set-tool-shape-whiteboard-or",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-or"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_OR,
    Icon: kd,
    canvasToSvgScale: 1
  }], [NLJ.SHAPE_WHITEBOARD_SPEECH_BUBBLE, {
    action: "set-tool-shape-whiteboard-speech-bubble",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-speech-bubble"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_SPEECH_BUBBLE,
    Icon: FJ,
    canvasToSvgScale: 2
  }], [NLJ.SHAPE_WHITEBOARD_INTERNAL_STORAGE, {
    action: "set-tool-shape-whiteboard-internal-storage",
    name: t("fullscreen_actions.set-tool-shape-whiteboard-internal-storage"),
    actionEnum: rcl.SET_TOOL_SHAPE_WHITEBOARD_INTERNAL_STORAGE,
    Icon: Ty,
    canvasToSvgScale: 149 / 85.52
  }], [NLJ.SHAPE_WHITEBOARD_MINDMAP_TREE_NUCLEUS, {
    action: "set-tool-mindmap-tree-nucleus",
    name: t("fullscreen_actions.set_tool_mindmap_tree_nucleus"),
    actionEnum: rcl.SET_TOOL_MINDMAP_TREE_NUCLEUS,
    Icon: KB,
    canvasToSvgScale: 176 / 112
  }]]));
  return n;
}
export const Jc = $$m0;
export const Lz = $$_1;
export const Qd = $$b2;
export const S8 = $$p3;
export const lx = $$g4;
export const qW = $$f5;