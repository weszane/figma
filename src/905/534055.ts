import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { d as _$$d } from "../905/976845";
import { J } from "../905/125993";
import { UI3ConditionalWrapper } from "../905/341359";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { KindEnum } from "../905/129884";
import { Di, j_, ii } from "../905/217142";
export function $$p0(e) {
  let t = useRef(null);
  let {
    toggle,
    showing,
    data
  } = Di();
  return j_().unwrapOr(!1) ? jsxs("div", {
    className: cssBuilderInstance.ml4.$,
    children: [jsx(UI3ConditionalWrapper, {
      children: jsx(_$$d, {
        ref: t,
        "aria-expanded": showing,
        onClick: n => {
          n.stopPropagation();
          let r = t.current?.getBoundingClientRect();
          toggle({
            data: {
              publishedResource: e.resource,
              targetRect: r
            }
          });
        },
        "aria-label": getI18nString("universal_insert.more_options"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("universal_insert.more_options")
        },
        children: jsx(J, {})
      })
    }), showing && data && jsx(ii, {
      dropdownData: data,
      isFromDropdownButton: !0
    })]
  }) : null;
}
export const r = $$p0;