import { $y, cI, I0, iF, iV, Kj, kY, M4, sS, UG, Uw, VP } from '../905/859698';
import { AD, dI, fn, Hr, sH } from '../905/871411';
import { debug } from '../figma_app/465776';
function y(e, t) {
  function r(t, r) {
    return t.startsWith(e) ? r(t.slice(e.length)) : null;
  }
  function n(e) {
    return t.fromString(e);
  }
  function i(e) {
    return r(e, e => n(e) ? null : sH(e));
  }
  function a(e) {
    return r(e, e => n(e));
  }
  function s(t) {
    return e + dI(t);
  }
  function o(r) {
    return e + t.toString(r);
  }
  return {
    toString(e) {
      return e;
    },
    toKiwi(e) {
      return r(e, e => {
        let t = n(e);
        if (t) {
          return {
            assetRef: t
          };
        }
        let r = sH(e);
        if (r) {
          return {
            guid: r
          };
        }
      }) ?? {
        guid: Hr
      };
    },
    toGuidObjIfLocal: i,
    toGuidStrIfLocal(e) {
      return r(e, e => n(e) ? null : e);
    },
    toRefIfSubscribed: a,
    fromString(e) {
      return r(e, t => sH(t) || n(t) ? e : null);
    },
    fromLocalNodeIdObj: s,
    fromLocalNodeIdStr(t) {
      return sH(t) ? e + t : null;
    },
    fromRef: o,
    fromKiwi(e) {
      if (!e) return null;
      let {
        guid,
        assetRef
      } = e;
      if (guid && !assetRef) return s(guid);
      if (!guid && assetRef) {
        let e = t.fromKiwi(assetRef);
        if (e) return o(e);
      }
      return null;
    },
    isValid(e) {
      let r = i(e);
      if (r) return fn(r);
      let n = a(e);
      return !!n && t.isValid(n);
    }
  };
}
let tnode0 = y('CodeLibraryId:', sS);
export const $$n8 = {
  INVALID: tnode0.fromLocalNodeIdStr(AD),
  toString: tnode0.toString,
  toKiwi: tnode0.toKiwi,
  toGuidObjIfLocal: tnode0.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode0.toGuidStrIfLocal,
  toRefIfSubscribed: tnode0.toRefIfSubscribed,
  fromString: tnode0.fromString,
  fromLocalNodeIdObj: tnode0.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode0.fromLocalNodeIdStr,
  fromRef: tnode0.fromRef,
  fromKiwi: tnode0.fromKiwi,
  isValid: tnode0.isValid
};
let tnode1 = y('CodeFileId:', VP);
export const $$i3 = {
  INVALID: tnode1.fromLocalNodeIdStr(AD),
  toString: tnode1.toString,
  toKiwi: tnode1.toKiwi,
  toGuidObjIfLocal: tnode1.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode1.toGuidStrIfLocal,
  toRefIfSubscribed: tnode1.toRefIfSubscribed,
  fromString: tnode1.fromString,
  fromLocalNodeIdObj: tnode1.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode1.fromLocalNodeIdStr,
  fromRef: tnode1.fromRef,
  fromKiwi: tnode1.fromKiwi,
  isValid: tnode1.isValid
};
let tnode2 = y('CodeComponentId:', kY);
export const $$a6 = {
  INVALID: tnode2.fromLocalNodeIdStr(AD),
  toString: tnode2.toString,
  toKiwi: tnode2.toKiwi,
  toGuidObjIfLocal: tnode2.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode2.toGuidStrIfLocal,
  toRefIfSubscribed: tnode2.toRefIfSubscribed,
  fromString: tnode2.fromString,
  fromLocalNodeIdObj: tnode2.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode2.fromLocalNodeIdStr,
  fromRef: tnode2.fromRef,
  fromKiwi: tnode2.fromKiwi,
  isValid: tnode2.isValid
};
let tnode3 = y('ManagedStringId:', iF);
export const $$s10 = {
  INVALID: tnode3.fromLocalNodeIdStr(AD),
  toString: tnode3.toString,
  toKiwi: tnode3.toKiwi,
  toGuidObjIfLocal: tnode3.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode3.toGuidStrIfLocal,
  toRefIfSubscribed: tnode3.toRefIfSubscribed,
  fromString: tnode3.fromString,
  fromLocalNodeIdObj: tnode3.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode3.fromLocalNodeIdStr,
  fromRef: tnode3.fromRef,
  fromKiwi: tnode3.fromKiwi,
  isValid: tnode3.isValid
};
let tnode4 = y('ResponsiveSetId:', I0);
export const $$o7 = {
  INVALID: tnode4.fromLocalNodeIdStr(AD),
  toString: tnode4.toString,
  toKiwi: tnode4.toKiwi,
  toGuidObjIfLocal: tnode4.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode4.toGuidStrIfLocal,
  toRefIfSubscribed: tnode4.toRefIfSubscribed,
  fromString: tnode4.fromString,
  fromLocalNodeIdObj: tnode4.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode4.fromLocalNodeIdStr,
  fromRef: tnode4.fromRef,
  fromKiwi: tnode4.fromKiwi,
  isValid: tnode4.isValid
};
let tnode5 = y('SymbolId:', Uw);
export const $$l4 = {
  INVALID: tnode5.fromLocalNodeIdStr(AD),
  toString: tnode5.toString,
  toKiwi: tnode5.toKiwi,
  toGuidObjIfLocal: tnode5.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode5.toGuidStrIfLocal,
  toRefIfSubscribed: tnode5.toRefIfSubscribed,
  fromString: tnode5.fromString,
  fromLocalNodeIdObj: tnode5.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode5.fromLocalNodeIdStr,
  fromRef: tnode5.fromRef,
  fromKiwi: tnode5.fromKiwi,
  isValid: tnode5.isValid
};
let tnode6 = y('StateGroupId:', Kj);
export const $$d0 = {
  INVALID: tnode6.fromLocalNodeIdStr(AD),
  toString: tnode6.toString,
  toKiwi: tnode6.toKiwi,
  toGuidObjIfLocal: tnode6.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode6.toGuidStrIfLocal,
  toRefIfSubscribed: tnode6.toRefIfSubscribed,
  fromString: tnode6.fromString,
  fromLocalNodeIdObj: tnode6.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode6.fromLocalNodeIdStr,
  fromRef: tnode6.fromRef,
  fromKiwi: tnode6.fromKiwi,
  isValid: tnode6.isValid
};
let tnode7 = y('StyleId:', $y);
export const $$c2 = {
  INVALID: tnode7.fromLocalNodeIdStr(AD),
  toString: tnode7.toString,
  toKiwi: tnode7.toKiwi,
  toGuidObjIfLocal: tnode7.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode7.toGuidStrIfLocal,
  toRefIfSubscribed: tnode7.toRefIfSubscribed,
  fromString: tnode7.fromString,
  fromLocalNodeIdObj: tnode7.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode7.fromLocalNodeIdStr,
  fromRef: tnode7.fromRef,
  fromKiwi: tnode7.fromKiwi,
  isValid: tnode7.isValid,
  fromBindingsObj(t) {
    return t.guid && t.guid !== AD ? e.fromLocalNodeIdStr(t.guid) : e.fromRef(t.ref);
  }
};
let tnode8 = y('VariableID:', M4);
export const $$u11 = {
  INVALID: tnode8.fromLocalNodeIdStr(AD),
  toString: tnode8.toString,
  toKiwi: tnode8.toKiwi,
  toGuidObjIfLocal: tnode8.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode8.toGuidStrIfLocal,
  toRefIfSubscribed: tnode8.toRefIfSubscribed,
  fromString: tnode8.fromString,
  fromLocalNodeIdObj: tnode8.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode8.fromLocalNodeIdStr,
  fromRef: tnode8.fromRef,
  fromKiwi: tnode8.fromKiwi,
  isValid: tnode8.isValid
};
let tnode9 = y('VariableOverrideId:', cI);
export const $$p1 = {
  INVALID: tnode9.fromLocalNodeIdStr(AD),
  toString: tnode9.toString,
  toKiwi: tnode9.toKiwi,
  toGuidObjIfLocal: tnode9.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode9.toGuidStrIfLocal,
  toRefIfSubscribed: tnode9.toRefIfSubscribed,
  fromString: tnode9.fromString,
  fromLocalNodeIdObj: tnode9.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode9.fromLocalNodeIdStr,
  fromRef: tnode9.fromRef,
  fromKiwi: tnode9.fromKiwi,
  isValid: tnode9.isValid
};
let tnode10 = 'VariableSetID:';
let rnode11 = y('VariableCollectionId:', iV);
let nnode12 = y(tnode10, iV);
function inode13({
  current: e,
  deprecated: r
}) {
  return n => n.startsWith(tnode10) ? r(n) : e(n);
}
export const $$_9 = {
  INVALID: rnode11.fromLocalNodeIdStr(AD),
  toString: rnode11.toString,
  toKiwi: inode13({
    current: rnode11.toKiwi,
    deprecated: nnode12.toKiwi
  }),
  toGuidObjIfLocal: inode13({
    current: rnode11.toGuidObjIfLocal,
    deprecated: nnode12.toGuidObjIfLocal
  }),
  toGuidStrIfLocal: inode13({
    current: rnode11.toGuidStrIfLocal,
    deprecated: nnode12.toGuidStrIfLocal
  }),
  toRefIfSubscribed: inode13({
    current: rnode11.toRefIfSubscribed,
    deprecated: nnode12.toRefIfSubscribed
  }),
  fromString: inode13({
    current: rnode11.fromString,
    deprecated: nnode12.fromString
  }),
  fromLocalNodeIdObj: rnode11.fromLocalNodeIdObj,
  fromLocalNodeIdStr: rnode11.fromLocalNodeIdStr,
  fromRef: rnode11.fromRef,
  fromKiwi: rnode11.fromKiwi,
  isValid: inode13({
    current: rnode11.isValid,
    deprecated: nnode12.isValid
  })
};
let tnode14 = y('ModuleId:', UG);
export const h = {
  INVALID: tnode14.fromLocalNodeIdStr(AD),
  toString: tnode14.toString,
  toKiwi: tnode14.toKiwi,
  toGuidObjIfLocal: tnode14.toGuidObjIfLocal,
  toGuidStrIfLocal: tnode14.toGuidStrIfLocal,
  toRefIfSubscribed: tnode14.toRefIfSubscribed,
  fromString: tnode14.fromString,
  fromLocalNodeIdObj: tnode14.fromLocalNodeIdObj,
  fromLocalNodeIdStr: tnode14.fromLocalNodeIdStr,
  fromRef: tnode14.fromRef,
  fromKiwi: tnode14.fromKiwi,
  isValid: tnode14.isValid
};
export const $$m5 = {
  fromKiwi: e => {
    if (e.guid) {
      return {
        type: 'guid',
        guid: dI(e.guid)
      };
    }
    if (e.stateGroupId) {
      let t = $$d0.fromKiwi(e.stateGroupId);
      if (t) {
        return {
          type: 'stateGroup',
          stateGroupId: t
        };
      }
    }
    if (e.symbolId) {
      let t = $$l4.fromKiwi(e.symbolId);
      if (t) {
        return {
          type: 'symbol',
          symbolId: t
        };
      }
    }
    debug(!1, 'Unhandled CanvasNodeId type');
  },
  toGuidStrIfLocal: e => {
    switch (e.type) {
      case 'guid':
        return e.guid;
      case 'symbol':
        return $$l4.toGuidStrIfLocal(e.symbolId);
      case 'stateGroup':
        return $$d0.toGuidStrIfLocal(e.stateGroupId);
    }
  },
  toRefIfSubscribed: e => {
    switch (e.type) {
      case 'guid':
        return null;
      case 'symbol':
        return $$l4.toRefIfSubscribed(e.symbolId);
      case 'stateGroup':
        return $$d0.toRefIfSubscribed(e.stateGroupId);
    }
  },
  toString: e => {
    switch (e.type) {
      case 'guid':
        return e.guid;
      case 'symbol':
        return $$l4.toString(e.symbolId);
      case 'stateGroup':
        return $$d0.toString(e.stateGroupId);
    }
  },
  fromString: e => {
    let t = $$l4.fromString(e);
    if (t) {
      return {
        type: 'symbol',
        symbolId: t
      };
    }
    let r = $$d0.fromString(e);
    return r ? {
      type: 'stateGroup',
      stateGroupId: r
    } : sH(e) ? {
      type: 'guid',
      guid: e
    } : null;
  }
};
export const GU = $$d0;
export const Kw = $$p1;
export const PK = $$c2;
export const Tq = $$i3;
export const Ws = $$l4;
export const YB = $$m5;
export const _H = $$a6;
export const cd = $$o7;
export const eJ = $$n8;
export const gr = $$_9;
export const oW = $$s10;
export const sD = $$u11;