import { jsx } from "react/jsx-runtime";
import { Link } from "../905/438674";
import { renderI18nText } from "../905/303541";
import { b } from "../905/217163";
import { E4, m3, bj } from "../905/66449";
export function $$l0({
  libraryKey: e
}) {
  let {
    ref,
    kbArgs
  } = E4({
    path: [m3.TabBodySection.Footer],
    column: 1
  });
  let l = b({
    libraryKey: e
  });
  let d = l?.data?.link;
  return d ? jsx(bj, {
    elementRef: ref,
    kbArgs,
    children: jsx(Link.Button, {
      href: d,
      newTab: !0,
      trusted: !0,
      variant: "secondary",
      onClick: e => e.stopPropagation(),
      htmlAttributes: {
        onMouseDown: e => e.stopPropagation()
      },
      ref,
      children: renderI18nText("design_systems.libraries_modal.open_file")
    })
  }) : null;
}
export const x = $$l0;