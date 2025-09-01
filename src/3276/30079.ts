import { jsx } from "react/jsx-runtime";
import a from "classnames";
import { Rs } from "../figma_app/288654";
import { fu } from "../figma_app/831799";
import { OCJ } from "../figma_app/43951";
var i = a;
export function $$d0({
  fileKey: e,
  isLegacyPosition: t
}) {
  let n = 0;
  let a = Rs(OCJ, {
    fileKey: e
  });
  if (a && "loaded" === a.status && a.data.file?.fileRoleRequests && (n = a.data.file.fileRoleRequests.length), 0 === n) return null;
  let d = i()("badge--shareButtonBadge--zXKJj", {
    "badge--legacyPosition--58g-I": t
  });
  return jsx(fu, {
    name: "Share Button Badge",
    properties: {
      numRequests: n
    },
    children: jsx("div", {
      className: d
    })
  });
}
export const $ = $$d0;