export class $$n2 extends Error {
  constructor(e, t) {
    super(e);
    t && (this.cause = t.cause);
  }
}
export function $$r1(e) {
  return e && "filePath" in e;
}
export function $$a0(e) {
  return e.message.includes("Maximum call stack size exceeded") || e.message.includes("too much recursion");
}
export const fF = $$a0;
export const hi = $$r1;
export const s9 = $$n2;