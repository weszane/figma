import { cn, VZ } from "../905/959568";
import { d9 } from "../905/579068";
export function $$a0({
  inputRef: e,
  rowRef: t,
  isInStyleModal: i
}) {
  if (i && t && t.current) return cn(t.current, d9);
  let a = null;
  if (a = e.current ?? t?.current ?? null) return VZ(a, d9, !1);
}
export const k = $$a0;