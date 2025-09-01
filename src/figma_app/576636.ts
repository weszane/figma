import { z } from "../905/239603";
import { ud } from "../905/513035";
var a = (e => (e.COLLAB = "collab", e.DEV = "dev", e.FULL = "full", e.VIEW = "view", e.CONTENT = "content", e))(a || {});
export let $$s1 = z.nativeEnum(a);
export function $$o0(e) {
  if (!e) return null;
  switch (e) {
    case "full":
      return ud.EXPERT;
    case "collab":
      return ud.COLLABORATOR;
    case "dev":
      return ud.DEVELOPER;
    case "view":
      return null;
  }
}
export const L8 = $$o0;
export const QT = $$s1;