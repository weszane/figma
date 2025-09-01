import { Z_n, rXF, JTp } from "../figma_app/763686";
import { TI } from "../905/713722";
import { Ub, _z, Hq, bU } from "../figma_app/632975";
import { zS, j9, rV, lq } from "../905/914241";
function o(e, t) {
  return {
    type: Z_n.EXPRESSION,
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
    expressionTypeMatch: Z_n.EXPRESSION,
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
    type: Z_n.FLOAT,
    resolvedType: rXF.FLOAT,
    value: parseFloat(e.current().stringValue)
  }),
  expressionTypeMatch: Z_n.FLOAT,
  stringify: e => String(parseFloat(e.current().value.toFixed(2)))
}, {
  tokenMatch: "TOKEN_BOOL",
  parseToken: e => ({
    type: Z_n.BOOLEAN,
    resolvedType: rXF.BOOLEAN,
    value: "true" === e.current().stringValue || "True" === e.current().stringValue
  }),
  expressionTypeMatch: Z_n.BOOLEAN,
  stringify: e => e.current().value.toString()
}, {
  tokenMatch: "TOKEN_STRING",
  parseToken: e => ({
    type: Z_n.STRING,
    resolvedType: rXF.STRING,
    value: JSON.parse(e.current().stringValue).toString()
  }),
  expressionTypeMatch: Z_n.STRING,
  stringify: e => JSON.stringify(e.current().value)
}, {
  tokenMatch: "TOKEN_VARIABLE_WITH_MODE",
  parseToken: (e, t) => {
    let [i, r] = Ub(e.current().stringValue);
    let s = t.variableIdToVariable(i);
    if (!s) throw Error("Can't find variable/mode while parsing expression");
    let l = s.resolvedType;
    return o(JTp.VAR_MODE_LOOKUP, [{
      type: Z_n.ALIAS,
      resolvedType: l,
      value: i
    }, {
      type: Z_n.STRING,
      resolvedType: rXF.STRING,
      value: r
    }]);
  },
  expressionTypeMatch: Z_n.EXPRESSION,
  expressionFunctionMatch: [JTp.VAR_MODE_LOOKUP],
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
      type: Z_n.ALIAS,
      resolvedType: a,
      value: i
    };
  },
  expressionTypeMatch: Z_n.ALIAS,
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
      type: Z_n.NODE_FIELD_ALIAS,
      resolvedType: s,
      value: {
        stablePathToNode: t,
        nodeField: i,
        indexOrKey: r
      }
    };
  },
  expressionTypeMatch: Z_n.NODE_FIELD_ALIAS,
  stringify: (e, t) => {
    let i = e.current().value;
    return t.keepAliasId ? bU(i.stablePathToNode, i.nodeField, i.indexOrKey) : i ? "[" + bU(i.stablePathToNode, i.nodeField, i.indexOrKey) + "]" : "[]";
  }
}, {
  tokenMatch: "TOKEN_COLOR",
  parseToken: e => ({
    type: Z_n.COLOR,
    resolvedType: rXF.COLOR,
    value: JSON.parse(e.current().stringValue).toString()
  }),
  expressionTypeMatch: Z_n.COLOR,
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
  expressionTypeMatch: Z_n.EXPRESSION,
  expressionFunctionMatch: rV(),
  stringify: e => {
    let t = e.current();
    return `${lq(t.value.expressionFunction)}(${t.value.expressionArguments.map((t, i) => e.stringifyArgument(i, !1)).join(", ")})`;
  }
}], [{
  tokenMatch: "TOKEN_NOT",
  parseOperator: e => ({
    type: Z_n.EXPRESSION,
    resolvedType: rXF.BOOLEAN,
    value: {
      expressionFunction: JTp.NOT,
      expressionArguments: e
    }
  }),
  expressionTypeMatch: Z_n.EXPRESSION,
  expressionFunctionMatch: [JTp.NOT],
  stringify: e => `not ${e.stringifyArgument(0)} `
}, {
  tokenMatch: "TOKEN_SUBTRACTION",
  parseOperator: e => ({
    type: Z_n.EXPRESSION,
    resolvedType: rXF.FLOAT,
    value: {
      expressionFunction: JTp.NEGATE,
      expressionArguments: e
    }
  }),
  expressionTypeMatch: Z_n.EXPRESSION,
  expressionFunctionMatch: [JTp.NEGATE],
  stringify: e => `- ${e.stringifyArgument(0)} `
}], [l(JTp.MULTIPLY, "TOKEN_MULTIPLICATION", "*"), l(JTp.DIVIDE, "TOKEN_DIVISION", "/")], [l(JTp.ADDITION, "TOKEN_ADDITION", "+"), l(JTp.SUBTRACTION, "TOKEN_SUBTRACTION", "-")], [l(JTp.EQUALS, "TOKEN_EQUALS", "=="), l(JTp.NOT_EQUAL, "TOKEN_NOT_EQUAL", "!="), l(JTp.LESS_THAN_OR_EQUAL, "TOKEN_LESS_THAN_OR_EQUAL", "<="), l(JTp.LESS_THAN, "TOKEN_LESS_THAN", "<"), l(JTp.GREATER_THAN_OR_EQUAL, "TOKEN_GREATER_THAN_OR_EQUAL", ">="), l(JTp.GREATER_THAN, "TOKEN_GREATER_THAN", ">")], [l(JTp.AND, "TOKEN_AND", "and")], [l(JTp.OR, "TOKEN_OR", "or")]];
export const b = $$d0;