import { IgnoreUndoRedoBindings } from "../figma_app/13528";
import { EditScopeBindings, SourceType } from "../figma_app/175377";
let $$a1 = Object.assign(function (e, t, i) {
  let n = EditScopeBindings?.openEditScope(e, t);
  try {
    return i();
  } finally {
    null != n && EditScopeBindings?.closeEditScope(n);
  }
}, {
  system: function (e, t) {
    return $$a1(SourceType.SYSTEM, e, t);
  },
  user: function (e, t) {
    return $$a1(SourceType.USER, e, t);
  },
  plugin: function (e, t) {
    return $$a1(SourceType.PLUGIN, e, t);
  },
  onboarding: function (e, t) {
    return $$a1(SourceType.ONBOARDING, e, t);
  },
  autosave: function (e, t) {
    return $$a1(SourceType.AUTOSAVE, e, t);
  },
  ai: function (e, t) {
    return $$a1(SourceType.AI, e, t);
  },
  testSetup: function (e, t) {
    return t();
  }
});
let $$s2 = Object.assign(function (e, t, i) {
  return (...n) => $$a1(e, t, () => i(...n));
}, {
  user: function (e, t) {
    return (...i) => $$a1.user(e, () => t(...i));
  },
  system: function (e, t) {
    return (...i) => $$a1.system(e, () => t(...i));
  },
  plugin: function (e, t) {
    return (...i) => $$a1.plugin(e, () => t(...i));
  },
  onboarding: function (e, t) {
    return (...i) => $$a1.onboarding(e, () => t(...i));
  },
  ai: function (e, t) {
    return (...i) => $$a1.ai(e, () => t(...i));
  },
  testSetup: function (e, t) {
    return (...i) => $$a1.testSetup(e, () => t(...i));
  }
});
let $$o0 = {
  system: (e, t) => {
    let i = EditScopeBindings?.openEditScope(SourceType.SYSTEM, e);
    let a = IgnoreUndoRedoBindings?.openIgnoreUndoRedoScope();
    try {
      return t();
    } finally {
      null != a && IgnoreUndoRedoBindings?.closeIgnoreUndoRedoScope(a);
      null != i && EditScopeBindings?.closeEditScope(i);
    }
  },
  ai: (e, t) => {
    let i = EditScopeBindings?.openEditScope(SourceType.AI, e);
    let a = IgnoreUndoRedoBindings?.openIgnoreUndoRedoScope();
    try {
      return t();
    } finally {
      null != a && IgnoreUndoRedoBindings?.closeIgnoreUndoRedoScope(a);
      null != i && EditScopeBindings?.closeEditScope(i);
    }
  }
};
export const Hq = $$o0;
export const l7 = $$a1;
export const nc = $$s2;
export const zk = SourceType;