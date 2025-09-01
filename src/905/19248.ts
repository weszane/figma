import { hasTypeProperty } from "../905/957591";
export function $$r1(e) {
  let t = new Set();
  let i = e => {
    switch (e.type) {
      case "binary":
      case "in":
        t.add(e.left);
        break;
      case "or":
      case "and":
        e.expressions.forEach(i);
    }
  };
  e && i(e);
  return t;
}
export function $$a0(e) {
  let t = [];
  let i = e => {
    switch (e.type) {
      case "binary":
      case "in":
        hasTypeProperty(e.right) && t.push(e.right);
        break;
      case "or":
      case "and":
        e.expressions.forEach(i);
    }
  };
  e && i(e);
  return t;
}
export const Gz = $$a0;
export const az = $$r1;