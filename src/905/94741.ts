import { g } from "../905/346780";
let r = Symbol("REJECTED");
let $$a = Symbol("UNRESOLVED");
export async function $$s0(e, t) {
  try {
    return await Promise.race([e, g().then(() => t ?? $$a)]);
  } catch {
    return t ?? r;
  }
}
export const a = $$s0;