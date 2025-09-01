export function $$r0(e, n) {
  switch ($$arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(n).domain(e);
  }
  return this;
}
export const C = $$r0;