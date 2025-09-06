import { arraysEqual } from "../figma_app/656233";
import { lQ } from "../905/934246";
import { isNotNullish } from "../figma_app/95419";
import { ey, yG } from "../905/859698";
import { Ez5, CWU } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atom, setupCustomAtom, createRemovableAtomFamily } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import u from "../vendor/223926";
import _ from "../vendor/239910";
import m from "lodash-es/mapValues";
import f from "../vendor/149674";
import { BV, eS, a5, Ew } from "../905/888985";
import { he } from "../905/157003";
import { Ez } from "../figma_app/766708";
import { logError } from "../905/714362";
import { JB as _$$JB } from "../figma_app/657017";
import { lR, ku, p9, nT } from "../figma_app/255679";
import { Y5 } from "../figma_app/455680";
import { Vr, _n, j2, uE, RW, Lk, xb, kL } from "../figma_app/345195";
import { Wh } from "../figma_app/615482";
import { SG } from "../905/508457";
import { createAtomWithReduxWithState, attachReducerWrapper, setupReduxAtomWithState } from "../905/270322";
import { o9k, BbB, eHy, cmY, Ipg, jXq } from "../figma_app/43951";
import { Rn, Dt, kz, ZI, GI, Vk, Hr } from "../figma_app/633080";
import { TG } from "../905/72677";
var p = u;
var h = _;
var g = m;
var E = f;
let P = SG(() => Ez5.libraryAssets().fileLevelVariableSetsSubscribed);
let D = atom(e => e(P).map(Rn));
let k = SG(() => Ez5.libraryAssets().fileLevelVariableSetsLocal);
let M = atom(e => e(k).map(Dt));
let F = SG(() => Ez5.libraryAssets().fileLevelVariablesSubscribed);
let j = SG(() => Ez5.libraryAssets().fileLevelVariablesLocal);
let U = atom(e => e(j).map(kz));
let B = atom(e => e(F).map(ZI));
atom(e => ({
  ...h()(e(M), e => e.keyForPublish),
  ...h()(e(D), e => e.key)
}));
atom(e => ({
  ...h()(e(U), e => e.keyForPublish),
  ...h()(e(B), e => e.key)
}));
let $$G26 = (() => {
  let e = createAtomWithReduxWithState({}, "SYNC_ATOM_VARIABLE_SETS_BY_ID");
  let t = setupCustomAtom(e, (e, t) => {
    if (t) {
      if ("added" in t) {
        let r = h()(t.added.map(Dt), e => e.node_id);
        return {
          ...e,
          ...r
        };
      }
      if ("deleted" in t) {
        let r = {
          ...e
        };
        delete r[t.deleted];
        return r;
      }
    }
    return {};
  });
  t.onMount = e => {
    Y5.onReady().then(() => {
      e({
        added: CWU.getLocalVariableSetsInfo()
      });
    });
    let t = Vr(t => {
      e(t);
    });
    return () => {
      t();
      e(null);
    };
  };
  return attachReducerWrapper(t, e.reducer);
})();
let $$V20 = atom(e => ({
  ...e($$G26),
  ...e($$ec29)
}));
let $$H19 = createRemovableAtomFamily(e => atom(t => t($$G26)[e]));
createRemovableAtomFamily(e => atom(t => t($$ec29)[e]));
let $$z3 = createRemovableAtomFamily(e => atom(t => t($$V20)[e]));
let $$W17 = createRemovableAtomFamily(e => Wh(() => atom(t => {
  let r = t($$z3(e));
  if (!r || !getFeatureFlags().ds_extended_collections) return {};
  let n = t(eg);
  if (GI(r)) {
    let n = t($$W17(r.backingVariableSetId));
    let i = t($$eA5(e));
    let s = {};
    Object.entries(n).forEach(([e, t]) => {
      s[e] = {
        originVariableSetId: t.originVariableSetId,
        resolvedType: t.resolvedType,
        modeValues: Object.fromEntries(r.modes.map(e => {
          if (!e.parentModeId) {
            logError("Mode in extended collection has no parent mode set", "variableTableDataForVariableSetAtom", {
              mode: e,
              variable: t,
              variableSet: r
            }, {
              reportAsSentryError: !0
            });
            return null;
          }
          let n = t.modeValues[e.parentModeId];
          return n ? [e.id, n] : (logError("Parent mode value not found in backing variable collection", "variableTableDataForVariableSetAtom", {
            parentModeId: e.parentModeId,
            variable: t,
            variableSet: r
          }, {
            reportAsSentryError: !0
          }), null);
        }).filter(isNotNullish)),
        modeValueOriginVariableSetId: Object.fromEntries(r.modes.map(e => [e.id, r.backingVariableSetId]))
      };
    });
    Object.values(i).forEach(t => {
      let n = s[t.overriddenVariableID];
      if (!n) {
        logError("Variable not found in backingVariableSet", "variableTableDataForVariableSetAtom", {
          overriddenVariableID: t.overriddenVariableID,
          extensionVariableSetID: e,
          backingVariableSetID: r.backingVariableSetId,
          returnValue: s
        }, {
          reportAsSentryError: !0
        });
        return;
      }
      if (!t.overrideValues) {
        logError("VariableOverride has no overrideValues", "variableTableDataForVariableSetAtom", {
          override: t,
          extensionVariableSetID: e
        }, {
          reportAsSentryError: !0
        });
        return;
      }
      Object.entries(t.overrideValues).forEach(([e, t]) => {
        n.resolvedType = t.resolvedType;
        n.modeValues[e] = t;
        n.modeValueOriginVariableSetId[e] = r.node_id;
      });
    });
    return s;
  }
  {
    let e = n[r.node_id];
    return e ? e.reduce((e, t) => {
      let n = {};
      Object.keys(t.modeValues).forEach(e => n[e] = r.node_id);
      e[t.node_id] = {
        originVariableSetId: r.node_id,
        modeValues: t.modeValues,
        modeValueOriginVariableSetId: n,
        resolvedType: t.resolvedType
      };
      return e;
    }, {}) : {};
  }
})));
createRemovableAtomFamily(e => BV(t => r => r(t({
  fileKey: e
}))));
let $$K7 = createRemovableAtomFamily(e => atom(t => {
  let r = {};
  for (let n of e) r[n] = t(o9k.Query({
    fileKey: n
  }));
  return r;
}), arraysEqual);
let $$Y28 = createRemovableAtomFamily(e => atom(t => g()(h()(e), e => t(BbB.Query({
  libraryKey: e
})))), arraysEqual);
let $$$22 = createRemovableAtomFamily(e => eS(t => r => r(t({
  fileKey: e
}))));
export function $$X14(e) {
  return eHy.Query(e ? {
    hubFileId: e
  } : null);
}
let $$q13 = createRemovableAtomFamily(e => atom(t => {
  let r = {};
  for (let n of e) r[n] = t(he(cmY)({
    variableCollectionKey: n
  }));
  return r;
}), arraysEqual);
let $$J8 = createRemovableAtomFamily(e => atom(t => g()(h()(e), e => t(Ipg.Query({
  libraryKey: e
})))), arraysEqual);
let $$Z18 = createRemovableAtomFamily(e => atom(t => {
  let r = {};
  for (let n of e) r[n] = t(jXq.Query({
    fileKey: n
  }));
  return r;
}), arraysEqual);
let $$Q24 = createRemovableAtomFamily(e => atom(t => {
  let r = {};
  for (let n of e) r[n] = t(eHy.Query({
    hubFileId: n
  }));
  return r;
}), arraysEqual);
export function $$ee10(e) {
  let t = g()(h()(e), () => resourceUtils.disabled());
  return atom(t);
}
let et = atom(e => {
  let t = e($$ef21);
  let r = e(TG);
  let n = Object.values(t).filter(e => !lR(e, r)).map(e => e.key).sort();
  return e(a5(n.map(e => ({
    key: e
  })))).reduce((e, t) => (e[ey(t.args.key)] = t.result, e), {});
});
let er = atom(e => {
  let t = e($$ef21);
  let r = e(TG);
  let n = (e(_$$JB) ? Object.values(t).filter(e => lR(e, r)) : []).map(e => e.key).sort().map(e => ({
    key: e
  }));
  let i = ku(p9, n, e);
  return "loaded" !== i.status ? {} : i.data.reduce((e, t) => {
    if ("loaded" !== t.result.status) return e;
    let r = t.result.data.variable;
    if (!r) return e;
    let n = ey(r.key);
    return {
      ...e,
      [n]: t.result
    };
  }, {});
});
let en = atom(e => ({
  ...e(et),
  ...e(er)
}), lQ);
let $$ei12 = setupReduxAtomWithState(en, "SYNC_ATOM_USED_LIBRARY_VARIABLES_BY_KEY", {});
let ea = atom(e => {
  let t = [...new Set(Object.values(e(et)).map(e => e.data?.variable?.variableCollection.key).filter(isNotNullish))];
  let r = e($$ec29);
  let n = Object.keys(r);
  Object.values(e($$G26)).forEach(e => {
    e.isExtension && n.includes(e.backingVariableSetId) && t.push(r[e.backingVariableSetId].key);
  });
  let i = t.sort();
  return e(Ew(i.map(e => ({
    key: e
  })))).reduce((e, t) => (e[yG(t.args.key)] = t.result, e), {});
}, lQ);
let es = atom(e => {
  let t = [...new Set(Object.values(e(er)).map(e => e.data?.variable?.variableCollection.key).filter(isNotNullish))].sort().map(e => ({
    key: e
  }));
  let r = ku(nT, t, e);
  return "loaded" !== r.status ? {} : r.data.reduce((e, t) => {
    if ("loaded" !== t.result.status) return e;
    let r = t.result.data.variableCollection;
    if (!r) return e;
    let n = ey(r.key);
    return {
      ...e,
      [n]: t.result
    };
  }, {});
});
let eo = atom(e => ({
  ...e(ea),
  ...e(es)
}), lQ);
let $$el25 = setupReduxAtomWithState(eo, "SYNC_ATOM_USED_LIBRARY_VARIABLE_SETS_BY_KEY", {});
atom(e => {
  let t = Object.keys(e($$G26));
  if (0 !== t.length) return t[0];
});
let $$ed15 = atom(e => Object.values(e($$G26)));
let $$ec29 = (() => {
  let e = createAtomWithReduxWithState({}, "SYNC_ATOM_SUBSCRIBED_VARIABLE_SETS_BY_ID");
  let t = setupCustomAtom(e, (e, t) => {
    if (t) {
      if ("added" in t) {
        let r = h()(t.added.map(Rn), e => e.node_id);
        return {
          ...e,
          ...r
        };
      }
      {
        let r = {
          ...e
        };
        delete r[t.deleted];
        return r;
      }
    }
    return {};
  });
  t.onMount = e => {
    Y5.onReady().then(() => {
      e({
        added: CWU.getSubscribedVariableSetsInfo()
      });
    });
    let t = _n(t => {
      e(t);
    });
    return () => {
      t();
      e(null);
    };
  };
  return attachReducerWrapper(t, e.reducer);
})();
let $$eu2 = (() => {
  let e = createAtomWithReduxWithState({}, "SYNC_ATOM_LOCAL_VARIABLES_BY_ID");
  let t = setupCustomAtom(e, (e, t) => {
    if (t) {
      if ("added" in t) {
        t.added && "map" in t.added || logError("variableChange is malformed, expected added to be an array", "variableChange", {
          variableChange: t
        }, {
          reportAsSentryError: !0
        });
        return {
          ...e,
          ...h()(t.added.map(kz), e => e.node_id)
        };
      }
      if ("deleted" in t) {
        let r = new Set(t.deleted);
        return E()(e, e => e.node_id && !r.has(e.node_id));
      }
      if ("setDeleted" in t) return E()(e, e => e.variableSetId !== t.setDeleted);
    }
    return {};
  });
  t.onMount = e => {
    Y5.onReady().then(() => {
      e({
        added: CWU.getLocalVariablesInfo()
      });
    });
    let t = j2(t => {
      e(t);
    });
    return () => {
      t();
      e(null);
    };
  };
  return attachReducerWrapper(t, e.reducer);
})();
let $$ep23 = createRemovableAtomFamily(e => atom(t => t($$eu2)[e] ?? null));
let $$e_27 = atom(e => Object.keys(e($$eu2)).map(t => e($$ep23(t))).sort((e, t) => -Ez(e.sortPosition, t?.sortPosition)));
let $$eh6 = atom(e => p()(e($$e_27), e => e.variableSetId));
let $$em11 = atom(e => p()(e($$ef21), e => e.variableSetId));
let eg = atom(e => {
  let t = e($$eh6);
  let r = e($$em11);
  return {
    ...t,
    ...r
  };
});
let $$ef21 = (() => {
  let e = createAtomWithReduxWithState({}, "SYNC_ATOM_SUBSCRIBED_VARIABLES_BY_ID");
  let t = setupCustomAtom(e, (e, t) => {
    if (t) {
      if ("added" in t) return {
        ...e,
        ...h()(t.added.map(ZI), e => e.node_id)
      };
      if ("deleted" in t) return E()(e, e => e.id !== t.deleted);
      if ("setDeleted" in t) return E()(e, e => e.variableSetId !== t.setDeleted);
    }
    return {};
  });
  t.onMount = e => {
    Y5.onReady().then(() => {
      e({
        added: CWU.getSubscribedVariablesInfo()
      });
    });
    let t = uE(t => {
      e(t);
    });
    return () => {
      t();
      e(null);
    };
  };
  return attachReducerWrapper(t, e.reducer);
})();
createRemovableAtomFamily(e => atom(t => t($$ef21)[e] ?? null));
export let $$eE4 = createRemovableAtomFamily(e => atom(t => t($$eu2)[e] ?? t($$ef21)[e] ?? null));
export function $$ey1(e, t) {
  let r = Y5.isReady();
  let n = new Map(Object.entries(t));
  let i = r && e ? CWU.getVariableResolvedValue(e, n) : null;
  let a = atom(i);
  e && (a.onMount = t => {
    r || Y5.onReady().then(() => {
      t(CWU.getVariableResolvedValue(e, n));
    });
    let i = RW(e, () => {
      t(CWU.getVariableResolvedValue(e, n));
    });
    return () => {
      i();
      t(null);
    };
  });
  return a;
}
export function $$eb9(e) {
  let t = Y5.isReady();
  let r = t && e ? CWU.getExplicitModeNames(e) : null;
  let n = atom(r);
  e && (n.onMount = r => {
    t || Y5.onReady().then(() => {
      r(CWU.getExplicitModeNames(e));
    });
    let n = Lk(e, e => {
      r(e);
    });
    return () => {
      n();
      r(null);
    };
  });
  return n;
}
let eT = (() => {
  let e = atom({});
  let t = setupCustomAtom(e, (e, t) => {
    if (t) {
      if ("added" in t) return {
        ...e,
        ...h()(t.added.map(Vk), e => e.node_id)
      };
      if ("deleted" in t) {
        let r = new Set(t.deleted);
        return E()(e, e => e.node_id && !r.has(e.node_id));
      }
      return {};
    }
    return e;
  });
  t.onMount = e => {
    Y5.onReady().then(() => {
      let t = CWU?.getLocalVariableOverridesInfo();
      t && e({
        added: t
      });
    });
    let t = xb(t => {
      e(t);
    });
    return () => {
      t();
      e(null);
    };
  };
  return t;
})();
let eI = (() => {
  let e = atom({});
  let t = setupCustomAtom(e, (e, t) => {
    if (t) {
      if ("added" in t) return {
        ...e,
        ...h()(t.added.map(Hr), e => e.node_id)
      };
      if ("deleted" in t) {
        let r = new Set(t.deleted);
        return E()(e, e => e.node_id && !r.has(e.node_id));
      }
    }
    return e;
  });
  t.onMount = e => {
    Y5.onReady().then(() => {
      let t = CWU?.getSubscribedVariableOverridesInfo();
      t && e({
        added: t
      });
    });
    let t = kL(t => {
      e(t);
    });
    return () => {
      t();
      e(null);
    };
  };
  return t;
})();
let $$eS0 = createRemovableAtomFamily(e => atom(t => {
  let r = Object.values(t(eT)).filter(t => t.variableSetId === e);
  return h()(r, e => e.overriddenVariableID);
}));
let ev = createRemovableAtomFamily(e => atom(t => {
  let r = Object.values(t(eI)).filter(t => t.variableSetId === e);
  return h()(r, e => e.overriddenVariableID);
}));
let $$eA5 = createRemovableAtomFamily(e => atom(t => {
  let r = t($$eS0(e));
  let n = t(ev(e));
  let i = {
    ...r,
    ...n
  };
  return h()(i, e => e.overriddenVariableID);
}));
export function $$ex16() {
  let e = Y5.isReady();
  let t = e ? CWU.getPageLevelModes() : null;
  let r = atom(t);
  r.onMount = t => (e || Y5.onReady().then(() => {
    t(CWU.getPageLevelModes());
  }), () => {
    t(null);
  });
  return r;
}
export const A6 = $$eS0;
export const BJ = $$ey1;
export const Cg = $$eu2;
export const Eo = $$z3;
export const Ev = $$eE4;
export const Fx = $$eA5;
export const Gc = $$eh6;
export const H2 = $$K7;
export const Ho = $$J8;
export const JB = $$eb9;
export const Jo = $$ee10;
export const L9 = $$em11;
export const LC = $$ei12;
export const Oj = $$q13;
export const Ri = $$X14;
export const TD = $$ed15;
export const Tg = $$ex16;
export const XC = $$W17;
export const Yt = $$Z18;
export const ZG = $$H19;
export const Zc = $$V20;
export const bO = $$ef21;
export const cp = $$$22;
export const hy = $$ep23;
export const hz = $$Q24;
export const jt = $$el25;
export const qy = $$G26;
export const uk = $$e_27;
export const wh = $$Y28;
export const xA = $$ec29;