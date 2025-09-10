import { throwTypeError } from "../figma_app/465776";
export function $$r0(e) {
  if ("communityHub" !== e.view) return !1;
  switch (e.subView) {
    case "plugin":
    case "widget":
    case "hubFile":
    case "searchAndBrowse":
    case "handle":
      return !0;
    case "hubFileEmbed":
    case "monetizationRedirectView":
      return !1;
    default:
      return throwTypeError(e);
  }
}
export const V = $$r0;
