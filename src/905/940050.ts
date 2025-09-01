import { n as _$$n } from "../905/79930";
export function $$r0(e, t) {
  if (!t) return !1;
  switch (t.type) {
    case _$$n.HubFile:
      return e.type === t.type && t.template.id === e.template.id && t.category === e.category;
    case _$$n.TeamTemplate:
    case _$$n.TeamTemplateLg:
      return e.type === t.type && t.template.id === e.template.id;
  }
}
export const t = $$r0;