import { useEffect } from 'react';
import { StatePublisher } from '../905/284094';
import { getFeatureFlags } from '../905/601108';
import { EventEmitter } from '../905/690073';
import { useAtomWithSubscription } from '../figma_app/27355';
import { InlineModalStatus, inlinePreviewReducer } from '../figma_app/425489';
let d = new EventEmitter('variableEventEmitter');
let c = new class {
  constructor() {
    if (this.variableModeToDebugValue = new StatePublisher({}), this.isInitialized = new StatePublisher(!1), !getFeatureFlags().prototype_variable_debug_view) return;
    window.addEventListener('message', e => {
      if (e.origin === window.origin) {
        let t = e.data.debugPrototypeActionFromPreview;
        if (t) {
          if (t.type === 'RESET') {
            this.variableModeToDebugValue.set({});
            this.isInitialized.set(!0);
          } else if (t.type === 'SET_VARIABLE') {
            let e = `VariableID:${t.targetVarId}-${t.targetModeId}`;
            this.variableModeToDebugValue.set({
              ...this.variableModeToDebugValue.get(),
              [e]: t.targetVariableData
            });
            d.trigger('setVariable', e);
          }
        }
      }
    });
  }
}();
export function $$u1() {
  let e = useAtomWithSubscription(inlinePreviewReducer).modalStatus === InlineModalStatus.OPEN;
  let t = c.isInitialized.use();
  return getFeatureFlags().prototype_variable_debug_view && e && t;
}
export function $$p0(e, t) {
  let i = $$u1();
  let n = c.variableModeToDebugValue.use();
  return i ? n?.[`${e}-${t}`] : void 0;
}
export function $$m2(e, t, i) {
  let r = $$u1();
  let a = `${e}-${t}`;
  useEffect(() => {
    if (!r) return;
    let e = e => {
      e === a && i();
    };
    d.on('setVariable', e);
    return () => {
      d.removeListener('setVariable', e);
    };
  }, [a, i, r]);
}
export const _r = $$p0;
export const al = $$u1;
export const oG = $$m2;