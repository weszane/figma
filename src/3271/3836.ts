import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { K } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { getI18nString } from "../905/303541";
import { oB, j7 } from "../905/929976";
import { Um } from "../905/848862";
import { ResourceType } from "../figma_app/45218";
import { KindEnum } from "../905/129884";
import { kt, Pq } from "../3591/828414";
export function $$x0(e) {
  let t = useDispatch();
  let s = Um();
  let x = s?.type === kt;
  let p = e.resourceType === ResourceType.WIDGET ? getI18nString("community.plugins.create_new_widget") : getI18nString("community.plugins.create_new_plugin");
  let g = useCallback(e => {
    x ? t(oB()) : t(j7({
      type: kt,
      data: {
        targetRect: e.currentTarget?.getBoundingClientRect()
      }
    }));
  }, [t, x]);
  return jsxs(Fragment, {
    children: [jsx(K, {
      "aria-label": p,
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": p
      },
      onClick: g,
      children: jsx(_$$e, {})
    }), x && jsx(Pq, {
      resourceType: e.resourceType
    })]
  });
}
export const n = $$x0;