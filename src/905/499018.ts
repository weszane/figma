export function $$n0(e) {
  switch (e) {
    case "transparent":
      return e;
    case "default":
      return "var(--color-bg, var(--fallback-color-bg))";
    default:
      return `var(--color-bg-${e}, var(--fallback-color-bg-${e}))`;
  }
}
export function $$r1(e) {
  switch (e) {
    case "transparent":
      return e;
    case "default":
      return "var(--color-border, var(--fallback-color-border))";
    default:
      return `var(--color-border-${e}, var(--fallback-color-border-${e}))`;
  }
}
export function $$a3(e) {
  return "default" === e ? "var(--color-text, var(--fallback-color-text))" : `var(--color-text-${e}, var(--fallback-color-text-${e}))`;
}
export function $$s2(e) {
  return "default" === e ? "var(--color-icon, var(--fallback-color-icon))" : `var(--color-icon-${e}, var(--fallback-color-icon-${e}))`;
}
export const K = $$n0;
export const Uw = $$r1;
export const TD = $$s2;
export const jk = $$a3;