import { sS, VP, kY, iF, I0, Uw, Kj, $y, M4, cI, iV, UG } from "../905/859698";
import { sH, dI, Hr, fn, AD } from "../905/871411";
import { KF } from "../figma_app/465776";
var $$n8;
var $$i3;
var $$a6;
var $$s10;
var $$o7;
var $$l4;
var $$d0;
var $$c2;
var $$u11;
var $$p1;
var $$_9;
var h;
var $$m5;
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
    toString: function (e) {
      return e;
    },
    toKiwi: function (e) {
      return r(e, e => {
        let t = n(e);
        if (t) return {
          assetRef: t
        };
        let r = sH(e);
        if (r) return {
          guid: r
        };
      }) ?? {
        guid: Hr
      };
    },
    toGuidObjIfLocal: i,
    toGuidStrIfLocal: function (e) {
      return r(e, e => n(e) ? null : e);
    },
    toRefIfSubscribed: a,
    fromString: function (e) {
      return r(e, t => sH(t) || n(t) ? e : null);
    },
    fromLocalNodeIdObj: s,
    fromLocalNodeIdStr: function (t) {
      return sH(t) ? e + t : null;
    },
    fromRef: o,
    fromKiwi: function (e) {
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
    isValid: function (e) {
      let r = i(e);
      if (r) return fn(r);
      let n = a(e);
      return !!n && t.isValid(n);
    }
  };
}
!function (e) {
  let t = y("CodeLibraryId:", sS);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
}($$n8 || ($$n8 = {}));
(function (e) {
  let t = y("CodeFileId:", VP);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
})($$i3 || ($$i3 = {}));
(function (e) {
  let t = y("CodeComponentId:", kY);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
})($$a6 || ($$a6 = {}));
(function (e) {
  let t = y("ManagedStringId:", iF);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
})($$s10 || ($$s10 = {}));
(function (e) {
  let t = y("ResponsiveSetId:", I0);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
})($$o7 || ($$o7 = {}));
(function (e) {
  let t = y("SymbolId:", Uw);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
})($$l4 || ($$l4 = {}));
(function (e) {
  let t = y("StateGroupId:", Kj);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
})($$d0 || ($$d0 = {}));
(function (e) {
  let t = y("StyleId:", $y);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
  e.fromBindingsObj = function (t) {
    return t.guid && t.guid !== AD ? e.fromLocalNodeIdStr(t.guid) : e.fromRef(t.ref);
  };
})($$c2 || ($$c2 = {}));
(function (e) {
  let t = y("VariableID:", M4);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
})($$u11 || ($$u11 = {}));
(function (e) {
  let t = y("VariableOverrideId:", cI);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
})($$p1 || ($$p1 = {}));
(function (e) {
  let t = "VariableSetID:";
  let r = y("VariableCollectionId:", iV);
  let n = y(t, iV);
  function i({
    current: e,
    deprecated: r
  }) {
    return n => n.startsWith(t) ? r(n) : e(n);
  }
  e.INVALID = r.fromLocalNodeIdStr(AD);
  e.toString = r.toString;
  e.toKiwi = i({
    current: r.toKiwi,
    deprecated: n.toKiwi
  });
  e.toGuidObjIfLocal = i({
    current: r.toGuidObjIfLocal,
    deprecated: n.toGuidObjIfLocal
  });
  e.toGuidStrIfLocal = i({
    current: r.toGuidStrIfLocal,
    deprecated: n.toGuidStrIfLocal
  });
  e.toRefIfSubscribed = i({
    current: r.toRefIfSubscribed,
    deprecated: n.toRefIfSubscribed
  });
  e.fromString = i({
    current: r.fromString,
    deprecated: n.fromString
  });
  e.fromLocalNodeIdObj = r.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = r.fromLocalNodeIdStr;
  e.fromRef = r.fromRef;
  e.fromKiwi = r.fromKiwi;
  e.isValid = i({
    current: r.isValid,
    deprecated: n.isValid
  });
})($$_9 || ($$_9 = {}));
(function (e) {
  let t = y("ModuleId:", UG);
  e.INVALID = t.fromLocalNodeIdStr(AD);
  e.toString = t.toString;
  e.toKiwi = t.toKiwi;
  e.toGuidObjIfLocal = t.toGuidObjIfLocal;
  e.toGuidStrIfLocal = t.toGuidStrIfLocal;
  e.toRefIfSubscribed = t.toRefIfSubscribed;
  e.fromString = t.fromString;
  e.fromLocalNodeIdObj = t.fromLocalNodeIdObj;
  e.fromLocalNodeIdStr = t.fromLocalNodeIdStr;
  e.fromRef = t.fromRef;
  e.fromKiwi = t.fromKiwi;
  e.isValid = t.isValid;
})(h || (h = {}));
(function (e) {
  e.fromKiwi = e => {
    if (e.guid) return {
      type: "guid",
      guid: dI(e.guid)
    };
    if (e.stateGroupId) {
      let t = $$d0.fromKiwi(e.stateGroupId);
      if (t) return {
        type: "stateGroup",
        stateGroupId: t
      };
    }
    if (e.symbolId) {
      let t = $$l4.fromKiwi(e.symbolId);
      if (t) return {
        type: "symbol",
        symbolId: t
      };
    }
    KF(!1, "Unhandled CanvasNodeId type");
  };
  e.toGuidStrIfLocal = e => {
    switch (e.type) {
      case "guid":
        return e.guid;
      case "symbol":
        return $$l4.toGuidStrIfLocal(e.symbolId);
      case "stateGroup":
        return $$d0.toGuidStrIfLocal(e.stateGroupId);
    }
  };
  e.toRefIfSubscribed = e => {
    switch (e.type) {
      case "guid":
        return null;
      case "symbol":
        return $$l4.toRefIfSubscribed(e.symbolId);
      case "stateGroup":
        return $$d0.toRefIfSubscribed(e.stateGroupId);
    }
  };
  e.toString = e => {
    switch (e.type) {
      case "guid":
        return e.guid;
      case "symbol":
        return $$l4.toString(e.symbolId);
      case "stateGroup":
        return $$d0.toString(e.stateGroupId);
    }
  };
  e.fromString = e => {
    let t = $$l4.fromString(e);
    if (t) return {
      type: "symbol",
      symbolId: t
    };
    let r = $$d0.fromString(e);
    return r ? {
      type: "stateGroup",
      stateGroupId: r
    } : sH(e) ? {
      type: "guid",
      guid: e
    } : null;
  };
})($$m5 || ($$m5 = {}));
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