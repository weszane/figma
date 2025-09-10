import { deepEqual } from "../905/382883";
import { OperationType, VariableResolvedDataType } from "../figma_app/763686";
let a = [["toString", OperationType.STRINGIFY]];
let s = new Map(a);
let o = new Map(a.map(e => e.reverse()));
export function $$l1(e) {
  let t = o.get(e);
  if (!t) throw Error("Expression identifier not registered for function: " + e);
  return t;
}
export function $$d0(e) {
  let t = s.get(e);
  if (!t) throw Error("Can't find function with identifier: " + e);
  return t;
}
let c = [];
export function $$u3(e, t) {
  let i = t.map(e => e.resolvedType);
  let r = c.find(t => t.expressionFunction === e && deepEqual(t.argumentTypes, i));
  if (!r) throw Error("Invalid expression function or arguments provided - check the number and type of arguments in order to find a correct expression function signature. " + (o.get(e) ?? "Unknown expression function"));
  return r.returnType;
}
export function $$p2() {
  return Array.from(s.values());
}
function m(e, t, ...i) {
  c.push({
    returnType: e,
    expressionFunction: t,
    argumentTypes: i
  });
}
m(VariableResolvedDataType.BOOLEAN, OperationType.OR, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.BOOLEAN);
m(VariableResolvedDataType.BOOLEAN, OperationType.AND, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.BOOLEAN);
m(VariableResolvedDataType.BOOLEAN, OperationType.NOT, VariableResolvedDataType.BOOLEAN);
m(VariableResolvedDataType.BOOLEAN, OperationType.EQUALS, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.BOOLEAN, OperationType.NOT_EQUAL, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.BOOLEAN, OperationType.EQUALS, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.BOOLEAN);
m(VariableResolvedDataType.BOOLEAN, OperationType.NOT_EQUAL, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.BOOLEAN);
m(VariableResolvedDataType.BOOLEAN, OperationType.EQUALS, VariableResolvedDataType.STRING, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.BOOLEAN, OperationType.EQUALS, VariableResolvedDataType.TEXT_DATA, VariableResolvedDataType.TEXT_DATA);
m(VariableResolvedDataType.BOOLEAN, OperationType.EQUALS, VariableResolvedDataType.STRING, VariableResolvedDataType.TEXT_DATA);
m(VariableResolvedDataType.BOOLEAN, OperationType.EQUALS, VariableResolvedDataType.TEXT_DATA, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.BOOLEAN, OperationType.NOT_EQUAL, VariableResolvedDataType.STRING, VariableResolvedDataType.TEXT_DATA);
m(VariableResolvedDataType.BOOLEAN, OperationType.NOT_EQUAL, VariableResolvedDataType.TEXT_DATA, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.BOOLEAN, OperationType.NOT_EQUAL, VariableResolvedDataType.STRING, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.BOOLEAN, OperationType.LESS_THAN, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.BOOLEAN, OperationType.LESS_THAN_OR_EQUAL, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.BOOLEAN, OperationType.GREATER_THAN, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.BOOLEAN, OperationType.GREATER_THAN_OR_EQUAL, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.STRING, OperationType.STRINGIFY, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.FLOAT, OperationType.ADDITION, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.FLOAT, OperationType.SUBTRACTION, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.FLOAT, OperationType.MULTIPLY, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.FLOAT, OperationType.DIVIDE, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.FLOAT, OperationType.TERNARY, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.FLOAT, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.BOOLEAN, OperationType.TERNARY, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.BOOLEAN);
m(VariableResolvedDataType.STRING, OperationType.TERNARY, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.STRING, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.COLOR, OperationType.TERNARY, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.COLOR, VariableResolvedDataType.COLOR);
m(VariableResolvedDataType.SYMBOL_ID, OperationType.RESOLVE_VARIANT, VariableResolvedDataType.MAP);
m(VariableResolvedDataType.STRING, OperationType.STRINGIFY, VariableResolvedDataType.BOOLEAN);
m(VariableResolvedDataType.STRING, OperationType.STRINGIFY, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.STRING, OperationType.ADDITION, VariableResolvedDataType.STRING, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.STRING, OperationType.ADDITION, VariableResolvedDataType.FLOAT, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.STRING, OperationType.ADDITION, VariableResolvedDataType.STRING, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.STRING, OperationType.ADDITION, VariableResolvedDataType.TEXT_DATA, VariableResolvedDataType.TEXT_DATA);
m(VariableResolvedDataType.STRING, OperationType.ADDITION, VariableResolvedDataType.TEXT_DATA, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.STRING, OperationType.ADDITION, VariableResolvedDataType.STRING, VariableResolvedDataType.TEXT_DATA);
m(VariableResolvedDataType.STRING, OperationType.ADDITION, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.STRING, OperationType.ADDITION, VariableResolvedDataType.STRING, VariableResolvedDataType.BOOLEAN);
m(VariableResolvedDataType.FLOAT, OperationType.VAR_MODE_LOOKUP, VariableResolvedDataType.FLOAT, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.BOOLEAN, OperationType.VAR_MODE_LOOKUP, VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.STRING, OperationType.VAR_MODE_LOOKUP, VariableResolvedDataType.STRING, VariableResolvedDataType.STRING);
m(VariableResolvedDataType.FLOAT, OperationType.NEGATE, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.BOOLEAN, OperationType.IS_TRUTHY, VariableResolvedDataType.FLOAT);
m(VariableResolvedDataType.BOOLEAN, OperationType.IS_TRUTHY, VariableResolvedDataType.BOOLEAN);
m(VariableResolvedDataType.BOOLEAN, OperationType.IS_TRUTHY, VariableResolvedDataType.STRING);
export const j9 = $$d0;
export const lq = $$l1;
export const rV = $$p2;
export const zS = $$u3;