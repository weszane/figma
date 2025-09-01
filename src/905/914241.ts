import { c2 } from "../905/382883";
import { JTp, rXF } from "../figma_app/763686";
let a = [["toString", JTp.STRINGIFY]];
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
  let r = c.find(t => t.expressionFunction === e && c2(t.argumentTypes, i));
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
m(rXF.BOOLEAN, JTp.OR, rXF.BOOLEAN, rXF.BOOLEAN);
m(rXF.BOOLEAN, JTp.AND, rXF.BOOLEAN, rXF.BOOLEAN);
m(rXF.BOOLEAN, JTp.NOT, rXF.BOOLEAN);
m(rXF.BOOLEAN, JTp.EQUALS, rXF.FLOAT, rXF.FLOAT);
m(rXF.BOOLEAN, JTp.NOT_EQUAL, rXF.FLOAT, rXF.FLOAT);
m(rXF.BOOLEAN, JTp.EQUALS, rXF.BOOLEAN, rXF.BOOLEAN);
m(rXF.BOOLEAN, JTp.NOT_EQUAL, rXF.BOOLEAN, rXF.BOOLEAN);
m(rXF.BOOLEAN, JTp.EQUALS, rXF.STRING, rXF.STRING);
m(rXF.BOOLEAN, JTp.EQUALS, rXF.TEXT_DATA, rXF.TEXT_DATA);
m(rXF.BOOLEAN, JTp.EQUALS, rXF.STRING, rXF.TEXT_DATA);
m(rXF.BOOLEAN, JTp.EQUALS, rXF.TEXT_DATA, rXF.STRING);
m(rXF.BOOLEAN, JTp.NOT_EQUAL, rXF.STRING, rXF.TEXT_DATA);
m(rXF.BOOLEAN, JTp.NOT_EQUAL, rXF.TEXT_DATA, rXF.STRING);
m(rXF.BOOLEAN, JTp.NOT_EQUAL, rXF.STRING, rXF.STRING);
m(rXF.BOOLEAN, JTp.LESS_THAN, rXF.FLOAT, rXF.FLOAT);
m(rXF.BOOLEAN, JTp.LESS_THAN_OR_EQUAL, rXF.FLOAT, rXF.FLOAT);
m(rXF.BOOLEAN, JTp.GREATER_THAN, rXF.FLOAT, rXF.FLOAT);
m(rXF.BOOLEAN, JTp.GREATER_THAN_OR_EQUAL, rXF.FLOAT, rXF.FLOAT);
m(rXF.STRING, JTp.STRINGIFY, rXF.FLOAT);
m(rXF.FLOAT, JTp.ADDITION, rXF.FLOAT, rXF.FLOAT);
m(rXF.FLOAT, JTp.SUBTRACTION, rXF.FLOAT, rXF.FLOAT);
m(rXF.FLOAT, JTp.MULTIPLY, rXF.FLOAT, rXF.FLOAT);
m(rXF.FLOAT, JTp.DIVIDE, rXF.FLOAT, rXF.FLOAT);
m(rXF.FLOAT, JTp.TERNARY, rXF.BOOLEAN, rXF.FLOAT, rXF.FLOAT);
m(rXF.BOOLEAN, JTp.TERNARY, rXF.BOOLEAN, rXF.BOOLEAN, rXF.BOOLEAN);
m(rXF.STRING, JTp.TERNARY, rXF.BOOLEAN, rXF.STRING, rXF.STRING);
m(rXF.COLOR, JTp.TERNARY, rXF.BOOLEAN, rXF.COLOR, rXF.COLOR);
m(rXF.SYMBOL_ID, JTp.RESOLVE_VARIANT, rXF.MAP);
m(rXF.STRING, JTp.STRINGIFY, rXF.BOOLEAN);
m(rXF.STRING, JTp.STRINGIFY, rXF.STRING);
m(rXF.STRING, JTp.ADDITION, rXF.STRING, rXF.STRING);
m(rXF.STRING, JTp.ADDITION, rXF.FLOAT, rXF.STRING);
m(rXF.STRING, JTp.ADDITION, rXF.STRING, rXF.FLOAT);
m(rXF.STRING, JTp.ADDITION, rXF.TEXT_DATA, rXF.TEXT_DATA);
m(rXF.STRING, JTp.ADDITION, rXF.TEXT_DATA, rXF.STRING);
m(rXF.STRING, JTp.ADDITION, rXF.STRING, rXF.TEXT_DATA);
m(rXF.STRING, JTp.ADDITION, rXF.BOOLEAN, rXF.STRING);
m(rXF.STRING, JTp.ADDITION, rXF.STRING, rXF.BOOLEAN);
m(rXF.FLOAT, JTp.VAR_MODE_LOOKUP, rXF.FLOAT, rXF.STRING);
m(rXF.BOOLEAN, JTp.VAR_MODE_LOOKUP, rXF.BOOLEAN, rXF.STRING);
m(rXF.STRING, JTp.VAR_MODE_LOOKUP, rXF.STRING, rXF.STRING);
m(rXF.FLOAT, JTp.NEGATE, rXF.FLOAT);
m(rXF.BOOLEAN, JTp.IS_TRUTHY, rXF.FLOAT);
m(rXF.BOOLEAN, JTp.IS_TRUTHY, rXF.BOOLEAN);
m(rXF.BOOLEAN, JTp.IS_TRUTHY, rXF.STRING);
export const j9 = $$d0;
export const lq = $$l1;
export const rV = $$p2;
export const zS = $$u3;