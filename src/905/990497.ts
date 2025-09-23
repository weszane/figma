import { permissionScopeHandler } from '../905/189185';
import { logInfo } from '../905/714362';
import { atomStoreManager } from '../figma_app/27355';
import { cortexAPI } from '../figma_app/432652';
import { fullscreenValue } from '../figma_app/455680';
import { BaseColor, ChartType, ColorIdentifier, IPanelType, Orientation, WhiteboardAiVisualCppBindings } from '../figma_app/763686';
import { LX } from '../figma_app/862108';
export async function $$c0({
  prompt: e,
  visualType: t,
  signal: i,
  authInfo: n,
  ganttColor: r,
  ganttType: c
}) {
  let u = await cortexAPI.figjam.createVisual({
    prompt: e,
    visualType: t
  }, n);
  i.aborted || (u?.requestId && atomStoreManager.set(LX, u.requestId), u?.trace && logInfo('handleTextToVisual', 'Trace data', {
    message: u.trace
  }), await fullscreenValue.onReady(), $$p1(t, u, {
    ganttColor: r,
    ganttType: c
  }));
}
export function $$u2() {
  let e = [ColorIdentifier.BLUE, ColorIdentifier.GREEN, ColorIdentifier.PURPLE, ColorIdentifier.RED, ColorIdentifier.YELLOW];
  return e[Math.floor(Math.random() * e.length)];
}
export function $$p1(e, t, {
  ganttType: i = IPanelType.BASIC,
  ganttColor: a = $$u2()
} = {}) {
  switch (e) {
    case 'gantt':
      permissionScopeHandler.user('generate-figjam-ai-gantt-chart', () => WhiteboardAiVisualCppBindings.generateFigjamAiGanttChart(t, i, a));
      return;
    case 'orgchart':
    case 'diagram':
      permissionScopeHandler.user('generate-figjam-ai-flowchart', () => WhiteboardAiVisualCppBindings.generateFigjamAiFlowchart({
        type: t.type === 'diagram' ? ChartType.DIAGRAM : ChartType.ORG_CHART,
        direction: t.direction === 'horizontal' ? Orientation.HORIZONTAL : Orientation.VERTICAL,
        vertices: t.vertices,
        edges: t.edges
      }, function () {
        let e = [BaseColor.PURPLE, BaseColor.BLUE, BaseColor.GREEN];
        return e[Math.floor(Math.random() * e.length)];
      }()));
      return;
    case 'mindmap':
      permissionScopeHandler.user('generate-figjam-ai-mindmap', () => WhiteboardAiVisualCppBindings.generateFigjamAiMindmap(t));
      return;
    case 'timeline':
      permissionScopeHandler.user('generate-figjam-ai-timeline', () => WhiteboardAiVisualCppBindings.generateFigjamAiTimeline(t, function () {
        let e = [ColorIdentifier.BLUE, ColorIdentifier.GREEN, ColorIdentifier.PURPLE, ColorIdentifier.RED, ColorIdentifier.YELLOW];
        return e[Math.floor(Math.random() * e.length)];
      }()));
  }
}
export const $D = $$c0;
export const Rz = $$p1;
export const Xi = $$u2;