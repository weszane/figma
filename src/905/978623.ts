import { permissionScopeHandler } from '../905/189185';
import { $$ab4, $$av5 } from '../905/472793';
import { subscribeAndAwaitData } from '../905/553831';
import { getFeatureFlags } from '../905/601108';
import { logInfo } from '../905/714362';
import { Wc } from '../905/839044';
import { Po } from '../905/859698';
import { atomStoreManager } from '../figma_app/27355';
import { Plugin } from '../figma_app/43951';
import { Ay } from '../figma_app/432652';
import { fullscreenValue } from '../figma_app/455680';
import { WhiteboardAiTemplatePreviewCppBindings } from '../figma_app/763686';
import { F9, LX } from '../figma_app/862108';
async function f(e, t) {
  let i = '';
  switch (e) {
    case 'COMPONENT':
      i = await $$ab4(t);
      break;
    case 'COMPONENT_SET':
      i = await $$av5(t);
      break;
    default:
      throw new Error(`Unknown component type ${e}`);
  }
  return i;
}
export async function $$_0({
  prompt: e,
  signal: t,
  fileKey: i,
  authInfo: h,
  orgId: _
}) {
  let A;
  let y;
  A = globalThis.AI_DEBUG_XML && getFeatureFlags().figjam_text_to_template_debug ? await Ay.figjam.createTemplate({
    prompt: e,
    mode: Wc.PASSTHROUGH_XML_DEBUG_ONLY
  }, h) : await Ay.figjam.createTemplate({
    prompt: e,
    mode: Wc.DESCRIPTION
  }, h);
  await fullscreenValue.onReady();
  WhiteboardAiTemplatePreviewCppBindings.resetInsertionLocation();
  let b = A.getReader();
  let v = [];
  async function I() {
    if (v.length === 0) return;
    let e = performance.now();
    for (; performance.now() - e < 32;) {
      let e = v.shift();
      if (!e) break;
      let t = permissionScopeHandler.system('ai-add-template', () => WhiteboardAiTemplatePreviewCppBindings.handleFigJamTemplateStreamMessage(e));
      logInfo('handleTextToTemplate', 'Create or update response message', {
        message: t
      });
    }
    await new Promise(e => setTimeout(e, 0));
  }
  try {
    for (;;) {
      await I();
      let {
        done,
        value
      } = await b.read();
      if (t.aborted) break;
      if (value?.createNodes) {
        for (let e of value.createNodes) {
          if (logInfo('handleTextToTemplate', 'Create or update node', e), e.node.type === 'INSTANCE' && e.node.componentType && e.node.componentKey) {
            let t = Po(e.node.componentKey);
            try {
              let i = await f(e.node.componentType, t);
              i && (e.node.componentId = i);
            } catch (e) {
              logInfo('handleTextToTemplate', 'Error importing component (e.g., sticker)', e);
            }
          } else if (e.node.type === 'WIDGET') {
            if (e.node.pluginData && e.node.pluginData.pluginSvgPreviewUrl) {
              try {
                let t = await fetch(e.node.pluginData.pluginSvgPreviewUrl).then(async e => (e.ok || logInfo('handleTextToTemplate', 'Error importing widget svg'), await e.text()));
                t && (e.node.pluginData.pluginSvgPreviewData = t);
              } catch (e) {
                logInfo('handleTextToTemplate', 'Error importing widget', e);
              }
            }
            if (e.node.pluginId) {
              let t;
              try {
                t = await subscribeAndAwaitData(Plugin, {
                  pluginId: e.node.pluginId,
                  orgId: _
                });
              } catch (e) {
                logInfo('handleTextToTemplate', 'Error getting plugin', e);
              }
              t && !t.plugin && logInfo('handleTextToTemplate', 'Error getting plugin; plugin possibly not loaded yet');
              let i = t?.plugin?.currentPluginVersionId ?? '';
              i || logInfo('handleTextToTemplate', 'Could not get latest plugin version ID');
              e.node.pluginVersionId = i;
            }
          }
          v.push(e);
        }
      }
      if (value?.trace && (y = value.trace, logInfo('handleTextToTemplate', 'Trace data', {
        message: value.trace
      })), value?.requestId) {
        let t = value.requestId;
        F9(i, 0, e, 'board', t);
        atomStoreManager.set(LX, t);
      }
      if (done) {
        logInfo('handleTextToTemplate', 'Stream seems to be done.');
        break;
      }
    }
    for (; v.length > 0;) await I();
  } catch (e) {
    e.trace = y;
    return e;
  } finally {
    permissionScopeHandler.system('ai-add-template-commit', () => WhiteboardAiTemplatePreviewCppBindings.commitPreview());
    b.releaseLock();
  }
  return y;
}
export const L = $$_0;