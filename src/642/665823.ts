import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { At } from "../905/973142";
import { isInvalidValue } from "../905/216495";
import { Ad } from "../figma_app/811257";
export function $$o0({
  description: e
}) {
  let t = useMemo(() => isInvalidValue(e) ? "" : At(e), [e]);
  return "" === t ? null : jsx(Ad, {
    appendedClassName: "asset_description_preview--ui3DescriptionRow--U6fJ7",
    label: null,
    input: jsx("div", {
      className: "asset_description_preview--ui3Description--s4mHd ellipsis--ellipsisAfter2Lines--Qo-Xh ellipsis--_ellipsisAfterNLines--LzI7k",
      children: t
    })
  });
}
export const n = $$o0;