import { sFD, VIy, $mk, vwB, miP, QOd, Pls } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { zl } from "../figma_app/27355";
import { Lo } from "../905/714362";
import { Ay } from "../figma_app/432652";
import { Y5 } from "../figma_app/455680";
import { LX } from "../figma_app/862108";
export async function $$c0({
  prompt: e,
  visualType: t,
  signal: i,
  authInfo: n,
  ganttColor: r,
  ganttType: c
}) {
  let u = await Ay.figjam.createVisual({
    prompt: e,
    visualType: t
  }, n);
  i.aborted || (u?.requestId && zl.set(LX, u.requestId), u?.trace && Lo("handleTextToVisual", "Trace data", {
    message: u.trace
  }), await Y5.onReady(), $$p1(t, u, {
    ganttColor: r,
    ganttType: c
  }));
}
export function $$u2() {
  let e = [sFD.BLUE, sFD.GREEN, sFD.PURPLE, sFD.RED, sFD.YELLOW];
  return e[Math.floor(Math.random() * e.length)];
}
export function $$p1(e, t, {
  ganttType: i = VIy.BASIC,
  ganttColor: a = $$u2()
} = {}) {
  switch (e) {
    case "gantt":
      l7.user("generate-figjam-ai-gantt-chart", () => $mk.generateFigjamAiGanttChart(t, i, a));
      return;
    case "orgchart":
    case "diagram":
      l7.user("generate-figjam-ai-flowchart", () => $mk.generateFigjamAiFlowchart({
        type: "diagram" === t.type ? vwB.DIAGRAM : vwB.ORG_CHART,
        direction: "horizontal" === t.direction ? miP.HORIZONTAL : miP.VERTICAL,
        vertices: t.vertices,
        edges: t.edges
      }, function () {
        let e = [QOd.PURPLE, QOd.BLUE, QOd.GREEN];
        return e[Math.floor(Math.random() * e.length)];
      }()));
      return;
    case "mindmap":
      l7.user("generate-figjam-ai-mindmap", () => $mk.generateFigjamAiMindmap(t));
      return;
    case "timeline":
      l7.user("generate-figjam-ai-timeline", () => $mk.generateFigjamAiTimeline(t, function () {
        let e = [Pls.BLUE, Pls.GREEN, Pls.PURPLE, Pls.RED, Pls.YELLOW];
        return e[Math.floor(Math.random() * e.length)];
      }()));
      return;
  }
}
export const $D = $$c0;
export const Rz = $$p1;
export const Xi = $$u2;