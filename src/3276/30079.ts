import { jsx } from "react/jsx-runtime";
import a from "classnames";
import { useSubscription } from "../figma_app/288654";
import { TrackingProvider } from "../figma_app/831799";
import { FileEditRequestExistence } from "../figma_app/43951";
var i = a;
export function $$d0({
  fileKey: e,
  isLegacyPosition: t
}) {
  let n = 0;
  let a = useSubscription(FileEditRequestExistence, {
    fileKey: e
  });
  if (a && "loaded" === a.status && a.data.file?.fileRoleRequests && (n = a.data.file.fileRoleRequests.length), 0 === n) return null;
  let d = i()("badge--shareButtonBadge--zXKJj", {
    "badge--legacyPosition--58g-I": t
  });
  return jsx(TrackingProvider, {
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