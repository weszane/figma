import { throwTypeError } from "../figma_app/465776";
export function $$r0(e, t) {
  return [...e].sort((e, i) => {
    switch (t) {
      case "percent_match":
        return 0;
      case "last_modified":
        return new Date(i.last_edited_at).getTime() - new Date(e.last_edited_at).getTime();
      default:
        throwTypeError(t);
    }
  });
}
export const t = $$r0;