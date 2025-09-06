import { unstable_batchedUpdates } from "../vendor/944059";
import { EventEmitter } from "../905/690073";
import { u4j } from "../figma_app/763686";
import { AD } from "../905/871411";
export let $$n0;
let l = null;
export function $$d3(e) {
  l = e;
  return () => {
    l = null;
  };
}
let c = null;
export function $$u4(e) {
  c = e;
  return () => {
    c = null;
  };
}
let p = null;
export function $$_5(e) {
  p = e;
  return () => {
    p = null;
  };
}
let h = null;
export function $$m9(e) {
  h = e;
  return () => {
    h = null;
  };
}
let g = null;
export function $$f6(e) {
  g = e;
  return () => {
    g = null;
  };
}
let E = null;
export function $$y7(e) {
  E = e;
  return () => {
    E = null;
  };
}
let b = new EventEmitter("VariableMirrorVariableResolvedValueEmitter");
export function $$T2(e, t) {
  u4j.subscribeToLocalVariableResolvedValue(e, AD);
  b.on(e, t);
  return () => {
    u4j.unsubscribeFromLocalVariableResolvedValue(e, AD);
    b.removeListener(e, t);
  };
}
let I = new EventEmitter("VariableMirrorExplicitModeEmitter");
export function $$S1(e, t) {
  u4j.subscribeToExplicitModeChanges(e);
  I.on(e, t);
  return () => {
    u4j.unsubscribeFromExplicitModeChanges(e);
    I.removeListener(e, t);
  };
}
class v {
  localVariableSetUpdated(e) {
    unstable_batchedUpdates(() => {
      l?.({
        added: [e]
      });
    });
  }
  localVariableSetDeleted(e) {
    unstable_batchedUpdates(() => {
      l?.({
        deleted: e
      });
      p?.({
        setDeleted: e
      });
    });
  }
  subscribedVariableSetUpdated(e, t) {
    unstable_batchedUpdates(() => {
      c?.({
        added: [e]
      });
      E?.({
        setDeleted: e.id
      });
      E?.({
        added: t
      });
    });
  }
  subscribedVariableSetDeleted(e) {
    unstable_batchedUpdates(() => {
      c?.({
        deleted: e
      });
      E?.({
        setDeleted: e
      });
    });
  }
  localVariablesUpdated(e) {
    p?.({
      added: e
    });
  }
  localVariableOverridesUpdated(e) {
    h?.({
      added: e
    });
  }
  localVariableOverridesDeleted(e) {
    h?.({
      deleted: e
    });
  }
  subscribedVariableOverridesUpdated(e) {
    g?.({
      added: e
    });
  }
  subscribedVariableOverridesDeleted(e) {
    g?.({
      deleted: e
    });
  }
  localVariablesDeleted(e) {
    p?.({
      deleted: e
    });
    e.forEach(e => {
      b.trigger(e, {});
    });
  }
  variableResolvedValueUpdated(e, t) {
    b.trigger(e, t);
  }
  explicitModeUpdated(e, t) {
    I.trigger(e, t);
  }
  resetMirrorCache() {
    unstable_batchedUpdates(() => {
      l?.(null);
      p?.(null);
      h?.(null);
      c?.(null);
      E?.(null);
    });
    b.removeAllListeners();
  }
}
export function $$A8() {
  $$n0 = new v();
}
export const DQ = $$n0;
export const Lk = $$S1;
export const RW = $$T2;
export const Vr = $$d3;
export const _n = $$u4;
export const j2 = $$_5;
export const kL = $$f6;
export const uE = $$y7;
export const xQ = $$A8;
export const xb = $$m9;