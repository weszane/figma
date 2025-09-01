import { gx } from "../905/321541";
import { z } from "../vendor/835909";
function a(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
let s = z.object({
  guid: z.string()
});
let $$o4 = z.object({
  message: z.string(),
  context: s
});
export class $$l1 extends Error {
  constructor(e, t) {
    super(e);
    a(this, "context", void 0);
    a(this, "errorMessage", void 0);
    this.name = "SerializeError";
    this.context = t;
    this.errorMessage = e;
  }
}
export let $$d2 = z.object({
  message: z.string(),
  context: z.any(),
  location: gx.optional()
}).extend({
  formatted: z.string().optional()
});
export class $$c3 extends Error {
  constructor(e, t) {
    super(e);
    a(this, "context", void 0);
    a(this, "errorMessage", void 0);
    this.name = "DeserializeError";
    this.context = t;
    this.errorMessage = e;
  }
}
export function $$u0(e) {
  return {
    type: "Frame",
    props: {
      className: "flex items-center justify-center bg-red-100"
    },
    children: [{
      type: "Text",
      props: {},
      children: [`Unhandled node type: ${e.type}`]
    }]
  };
}
export const Aw = $$u0;
export const LV = $$l1;
export const Mn = $$d2;
export const Ug = $$c3;
export const w5 = $$o4;