import { VariableDataType, VariableResolvedDataType, OperationType } from "../figma_app/763686";
import { TI } from "../905/713722";
import { Ub, _z, Hq, bU } from "../figma_app/632975";
import { zS, j9, rV, lq } from "../905/914241";
function o(e, t) {
  return {
    type: VariableDataType.EXPRESSION,
    resolvedType: zS(e, t),
    value: {
      expressionFunction: e,
      expressionArguments: t
    }
  };
}
function l(e, t, i) {
  return {
    tokenMatch: t,
    parseOperator: t => o(e, t),
    expressionTypeMatch: VariableDataType.EXPRESSION,
    expressionFunctionMatch: [e],
    stringify: e => `${e.stringifyArgument(0)} ${i} ${e.stringifyArgument(1)}`
  };
}
export let $$d0 = [[{
  tokenMatch: "TOKEN_PAREN_OPEN",
  parseToken: e => {
    e.next();
    let t = e.parseAllLevels();
    if ("TOKEN_PAREN_CLOSE" !== e.current().type) throw Error("missing )");
    return t;
  }
}, {
  tokenMatch: "TOKEN_NUMBER",
  parseToken: e => ({
    type: VariableDataType.FLOAT,
    resolvedType: VariableResolvedDataType.FLOAT,
    value: parseFloat(e.current().stringValue)
  }),
  expressionTypeMatch: VariableDataType.FLOAT,
  stringify: e => String(parseFloat(e.current().value.toFixed(2)))
}, {
  tokenMatch: "TOKEN_BOOL",
  parseToken: e => ({
    type: VariableDataType.BOOLEAN,
    resolvedType: VariableResolvedDataType.BOOLEAN,
    value: "true" === e.current().stringValue || "True" === e.current().stringValue
  }),
  expressionTypeMatch: VariableDataType.BOOLEAN,
  stringify: e => e.current().value.toString()
}, {
  tokenMatch: "TOKEN_STRING",
  parseToken: e => ({
    type: VariableDataType.STRING,
    resolvedType: VariableResolvedDataType.STRING,
    value: JSON.parse(e.current().stringValue).toString()
  }),
  expressionTypeMatch: VariableDataType.STRING,
  stringify: e => JSON.stringify(e.current().value)
}, {
  tokenMatch: "TOKEN_VARIABLE_WITH_MODE",
  parseToken: (e, t) => {
    let [i, r] = Ub(e.current().stringValue);
    let s = t.variableIdToVariable(i);
    if (!s) throw Error("Can't find variable/mode while parsing expression");
    let l = s.resolvedType;
    return o(OperationType.VAR_MODE_LOOKUP, [{
      type: VariableDataType.ALIAS,
      resolvedType: l,
      value: i
    }, {
      type: VariableDataType.STRING,
      resolvedType: VariableResolvedDataType.STRING,
      value: r
    }]);
  },
  expressionTypeMatch: VariableDataType.EXPRESSION,
  expressionFunctionMatch: [OperationType.VAR_MODE_LOOKUP],
  stringify: (e, t) => {
    let i = e.current().value.expressionArguments;
    let n = i[0].value;
    let r = i[1].value;
    let s = _z(n, r, t);
    if (t.keepVariableResolvedType) {
      let e = t.variableIdToVariable(n);
      return e ? "{" + s + "} %%% " + e.resolvedType.toString() + "}" : "{}";
    }
    return s;
  }
}, {
  tokenMatch: "TOKEN_VARIABLE",
  parseToken: (e, t) => {
    let i = e.current().stringValue;
    let r = t.variableIdToVariable(i);
    if (!r) throw Error("Can't find variable while parsing expression");
    let a = r.resolvedType;
    return {
      type: VariableDataType.ALIAS,
      resolvedType: a,
      value: i
    };
  },
  expressionTypeMatch: VariableDataType.ALIAS,
  stringify: (e, t) => {
    let i = e.current().value;
    if (t.keepAliasId) return i;
    let n = t.variableIdToVariable(i);
    return n ? t.keepVariableResolvedType ? "{" + n.name + "} %%% " + n.resolvedType.toString() + "}" : "{" + n.name + "}" : "{}";
  }
}, {
  tokenMatch: "TOKEN_NODE_FIELD_ALIAS",
  parseToken: e => {
    let [t, i, r, s] = Hq(e.current().stringValue);
    if (!t || !i || !r || void 0 === s) throw Error("Can't find node field alias while parsing expression");
    return {
      type: VariableDataType.NODE_FIELD_ALIAS,
      resolvedType: s,
      value: {
        stablePathToNode: t,
        nodeField: i,
        indexOrKey: r
      }
    };
  },
  expressionTypeMatch: VariableDataType.NODE_FIELD_ALIAS,
  stringify: (e, t) => {
    let i = e.current().value;
    return t.keepAliasId ? bU(i.stablePathToNode, i.nodeField, i.indexOrKey) : i ? "[" + bU(i.stablePathToNode, i.nodeField, i.indexOrKey) + "]" : "[]";
  }
}, {
  tokenMatch: "TOKEN_COLOR",
  parseToken: e => ({
    type: VariableDataType.COLOR,
    resolvedType: VariableResolvedDataType.COLOR,
    value: JSON.parse(e.current().stringValue).toString()
  }),
  expressionTypeMatch: VariableDataType.COLOR,
  stringify: e => {
    let t = e.current().value;
    return "{" + TI.format(t) + "}";
  }
}, {
  tokenMatch: "TOKEN_IDENTIFIER",
  parseToken: e => {
    let t = [];
    let i = e.current().stringValue;
    if (e.next(), "TOKEN_PAREN_OPEN" !== e.current().type) throw Error("expected (");
    for (;;) {
      if (e.next(), !e.current()) throw Error("reached the end while parsing function - did you forget )?");
      let i = e.parseAllLevels();
      if (t.push(i), e.current()) {
        if ("TOKEN_COMMA" === e.current().type) ;else if ("TOKEN_PAREN_CLOSE" === e.current().type) break;else throw Error(`unexpected ${e.current().type}`);
      } else throw Error("reached the end while parsing function - did you forget )?");
    }
    return o(j9(i), t);
  },
  expressionTypeMatch: VariableDataType.EXPRESSION,
  expressionFunctionMatch: rV(),
  stringify: e => {
    let t = e.current();
    return `${lq(t.value.expressionFunction)}(${t.value.expressionArguments.map((t, i) => e.stringifyArgument(i, !1)).join(", ")})`;
  }
}], [{
  tokenMatch: "TOKEN_NOT",
  parseOperator: e => ({
    type: VariableDataType.EXPRESSION,
    resolvedType: VariableResolvedDataType.BOOLEAN,
    value: {
      expressionFunction: OperationType.NOT,
      expressionArguments: e
    }
  }),
  expressionTypeMatch: VariableDataType.EXPRESSION,
  expressionFunctionMatch: [OperationType.NOT],
  stringify: e => `not ${e.stringifyArgument(0)} `
}, {
  tokenMatch: "TOKEN_SUBTRACTION",
  parseOperator: e => ({
    type: VariableDataType.EXPRESSION,
    resolvedType: VariableResolvedDataType.FLOAT,
    value: {
      expressionFunction: OperationType.NEGATE,
      expressionArguments: e
    }
  }),
  expressionTypeMatch: VariableDataType.EXPRESSION,
  expressionFunctionMatch: [OperationType.NEGATE],
  stringify: e => `- ${e.stringifyArgument(0)} `
}], [l(OperationType.MULTIPLY, "TOKEN_MULTIPLICATION", "*"), l(OperationType.DIVIDE, "TOKEN_DIVISION", "/")], [l(OperationType.ADDITION, "TOKEN_ADDITION", "+"), l(OperationType.SUBTRACTION, "TOKEN_SUBTRACTION", "-")], [l(OperationType.EQUALS, "TOKEN_EQUALS", "=="), l(OperationType.NOT_EQUAL, "TOKEN_NOT_EQUAL", "!="), l(OperationType.LESS_THAN_OR_EQUAL, "TOKEN_LESS_THAN_OR_EQUAL", "<="), l(OperationType.LESS_THAN, "TOKEN_LESS_THAN", "<"), l(OperationType.GREATER_THAN_OR_EQUAL, "TOKEN_GREATER_THAN_OR_EQUAL", ">="), l(OperationType.GREATER_THAN, "TOKEN_GREATER_THAN", ">")], [l(OperationType.AND, "TOKEN_AND", "and")], [l(OperationType.OR, "TOKEN_OR", "or")]];
export const b = $$d0;