import { TeamTemplateType } from "../905/79930";
export function $$r0(e, t) {
  if (!t) return !1;
  switch (t.type) {
    case TeamTemplateType.HubFile:
      return e.type === t.type && t.template.id === e.template.id && t.category === e.category;
    case TeamTemplateType.TeamTemplate:
    case TeamTemplateType.TeamTemplateLg:
      return e.type === t.type && t.template.id === e.template.id;
  }
}
export const t = $$r0;