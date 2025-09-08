import { assert } from "../figma_app/465776";
import { VariableDataType } from "../figma_app/763686";
import { b } from "../905/428797";
function s(e) {
  for (let t = 0; t < b.length; t++) for (let i = 0; i < b[t].length; i++) {
    let n = b[t][i];
    if (n.expressionTypeMatch === e.type && (n.expressionTypeMatch !== VariableDataType.EXPRESSION || n.expressionFunctionMatch?.includes(e.value.expressionFunction))) return [n, t + "-" + i];
  }
  throw Error("Could not find matching rule for variableData " + JSON.stringify(e));
}
export const A = function e(t, i) {
  let [a, o] = s(t);
  if (!a) throw Error("Could not find matching rule for " + JSON.stringify(t));
  assert(!!a.stringify);
  return a.stringify({
    current: () => t,
    stringifyArgument: (a, l = !0) => {
      assert(t.type === VariableDataType.EXPRESSION);
      let d = t.value.expressionArguments[a];
      assert(!!d);
      let c = e(d, i);
      if (!l) return c;
      let [u, p] = s(d);
      return p > o ? `(${c})` : c;
    }
  }, i);
};