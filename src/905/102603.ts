import { kH } from "../905/309735";
import { Do } from "../figma_app/633080";
export function $$a0(e, t) {
  let i = Do(e) ? null : e.description;
  if (i || e.name && t.shouldShowName && !t.isList) return t?.shouldShowName ? `${kH(e.name)}

${i}`.trim() : i?.trim();
}
export const o = $$a0;