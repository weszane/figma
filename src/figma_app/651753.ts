import { useState, useCallback } from "react";
import { assertNotNullish } from "../figma_app/465776";
import { VariableResolvedDataType, VariableDataType, OperationType } from "../figma_app/763686";
import { parseSessionLocalID } from "../905/871411";
import { sH as _$$sH } from "../905/805904";
import { resolveVariableValue } from "../905/929949";
function d(e, t, r) {
  let n = resolveVariableValue(t, r);
  let i = function (e) {
    switch (e) {
      case VariableResolvedDataType.BOOLEAN:
        return "BOOLEAN";
      case VariableResolvedDataType.FLOAT:
        return "FLOAT";
      case VariableResolvedDataType.STRING:
        return "STRING";
      case VariableResolvedDataType.COLOR:
        return "COLOR";
      case VariableResolvedDataType.MAP:
        return "MAP";
      case VariableResolvedDataType.SYMBOL_ID:
        return "SYMBOL_ID";
      case VariableResolvedDataType.TEXT_DATA:
        return "TEXT_DATA";
      default:
        throw Error(`Unexpected resolved type: ${e}`);
    }
  }(t);
  if (e === VariableDataType.BOOLEAN) return {
    dataType: "BOOLEAN",
    resolvedDataType: i,
    value: {
      boolValue: n.value
    }
  };
  if (e === VariableDataType.FLOAT) return {
    dataType: "FLOAT",
    resolvedDataType: i,
    value: {
      floatValue: n.value
    }
  };
  if (e === VariableDataType.STRING) return {
    dataType: "STRING",
    resolvedDataType: i,
    value: {
      textValue: n.value
    }
  };
  if (e === VariableDataType.ALIAS) {
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
  if (e === VariableDataType.NODE_FIELD_ALIAS) return {
    dataType: "NODE_FIELD_ALIAS",
    resolvedDataType: i,
    value: {
      nodeFieldAliasValue: "stablePathToNode" in (c = n.value) && "nodeField" in c && "indexOrKey" in c ? {
        stablePathToNode: {
          guids: c.stablePathToNode.map(e => {
            let t = parseSessionLocalID(e);
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
  if (e === VariableDataType.COLOR) return {
    dataType: "COLOR",
    resolvedDataType: i,
    value: {
      colorValue: n.value
    }
  };
  if (e === VariableDataType.EXPRESSION) return {
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
          expressionFunction: OperationType[e.expressionFunction]
        };
      }(r)
    }
  };else if (e === VariableDataType.MAP) return {
    dataType: "MAP",
    resolvedDataType: i,
    value: {
      mapValue: n.value
    }
  };else if (e === VariableDataType.SYMBOL_ID) return {
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
      r.targetVariableModeID = parseSessionLocalID(r.targetVariableModeID) || void 0;
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