import { useState, useCallback } from "react";
import { assertNotNullish } from "../figma_app/465776";
import { rXF, Z_n, JTp } from "../figma_app/763686";
import { sH } from "../905/871411";
import { sH as _$$sH } from "../905/805904";
import { WI } from "../905/929949";
function d(e, t, r) {
  let n = WI(t, r);
  let i = function (e) {
    switch (e) {
      case rXF.BOOLEAN:
        return "BOOLEAN";
      case rXF.FLOAT:
        return "FLOAT";
      case rXF.STRING:
        return "STRING";
      case rXF.COLOR:
        return "COLOR";
      case rXF.MAP:
        return "MAP";
      case rXF.SYMBOL_ID:
        return "SYMBOL_ID";
      case rXF.TEXT_DATA:
        return "TEXT_DATA";
      default:
        throw Error(`Unexpected resolved type: ${e}`);
    }
  }(t);
  if (e === Z_n.BOOLEAN) return {
    dataType: "BOOLEAN",
    resolvedDataType: i,
    value: {
      boolValue: n.value
    }
  };
  if (e === Z_n.FLOAT) return {
    dataType: "FLOAT",
    resolvedDataType: i,
    value: {
      floatValue: n.value
    }
  };
  if (e === Z_n.STRING) return {
    dataType: "STRING",
    resolvedDataType: i,
    value: {
      textValue: n.value
    }
  };
  if (e === Z_n.ALIAS) {
    var c;
    var u = null;
    if ("string" == typeof r) {
      let e = _$$sH(r);
      e && (u = {
        guid: {
          sessionID: e?.guid?.sessionID ?? -1,
          localID: e?.guid?.localID ?? -1
        }
      });
    }
    return {
      dataType: "ALIAS",
      resolvedDataType: i,
      value: {
        alias: u || n.value
      }
    };
  }
  if (e === Z_n.NODE_FIELD_ALIAS) return {
    dataType: "NODE_FIELD_ALIAS",
    resolvedDataType: i,
    value: {
      nodeFieldAliasValue: "stablePathToNode" in (c = n.value) && "nodeField" in c && "indexOrKey" in c ? {
        stablePathToNode: {
          guids: c.stablePathToNode.map(e => {
            let t = sH(e);
            return {
              sessionID: t?.sessionID ?? -1,
              localID: t?.localID ?? -1
            };
          })
        },
        nodeField: c.nodeField,
        indexOrKey: c.indexOrKey
      } : {}
    }
  };
  if (e === Z_n.COLOR) return {
    dataType: "COLOR",
    resolvedDataType: i,
    value: {
      colorValue: n.value
    }
  };
  if (e === Z_n.EXPRESSION) return {
    dataType: "EXPRESSION",
    resolvedDataType: i,
    value: {
      expressionValue: function (e) {
        for (t = e.expressionArguments, r = [], n = 0, void 0; n < t.length; n++) {
          var t;
          var r;
          var n;
          var i = t[n];
          var s = d(i.type, i.resolvedType, i.value);
          r.push(s);
        }
        return {
          expressionArguments: r,
          expressionFunction: JTp[e.expressionFunction]
        };
      }(r)
    }
  };else if (e === Z_n.MAP) return {
    dataType: "MAP",
    resolvedDataType: i,
    value: {
      mapValue: n.value
    }
  };else if (e === Z_n.SYMBOL_ID) return {
    dataType: "SYMBOL_ID",
    resolvedDataType: i,
    value: {
      symbolIdValue: n.value
    }
  };
}
export function $$c1(e) {
  for (var t of e) t && t.actions && (t.actions = $$u2(t.actions));
  return [].concat.apply([], e);
}
export function $$u2(e) {
  var t = [];
  for (var r of e) {
    if ("SET_VARIABLE" === r.connectionType) {
      if (r.targetVariable && "id" in r.targetVariable) {
        let e = _$$sH(r.targetVariable.id);
        r.targetVariable.id = {
          guid: {
            sessionID: e?.guid?.sessionID ?? -1,
            localID: e?.guid?.localID ?? -1
          }
        };
      }
      r.targetVariableData && (r.targetVariableData = d(r.targetVariableData.type, r.targetVariableData.resolvedType, r.targetVariableData.value));
    } else if ("SET_VARIABLE_MODE" === r.connectionType) {
      assertNotNullish(r.targetVariableModeID, "targetVariableModeID");
      r.targetVariableModeID = sH(r.targetVariableModeID) || void 0;
    } else if ("CONDITIONAL" === r.connectionType && r.conditionalActions) {
      var n = [];
      for (var a of r.conditionalActions) {
        var l = [];
        var c = null;
        a && (a.condition && (c = d(a.condition.type, a.condition.resolvedType, a.condition.value)), a.actions && (l = $$u2(a.actions)));
        n.push({
          condition: c,
          actions: l
        });
      }
      r.conditionalActions = n;
    }
    t.push(r);
  }
  return t;
}
export function $$p0(e) {
  let [t, r] = useState(null);
  return {
    tooltipText: t,
    showTooltip: useCallback(t => {
      let n = t.target;
      n.scrollWidth > n.offsetWidth && e ? r("string" == typeof e ? e : null) : r(null);
    }, [e])
  };
}
export const QY = $$p0;
export const lg = $$c1;
export const m5 = $$u2;