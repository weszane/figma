import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { K } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { t as _$$t } from "../905/303541";
import { oB, j7 } from "../905/929976";
import { Um } from "../905/848862";
import { bD } from "../figma_app/45218";
import { Ib } from "../905/129884";
import { kt, Pq } from "../3591/828414";
export function $$m0(e) {
  let t = useDispatch();
  let i = Um();
  let m = i?.type === kt;
  let f = e.resourceType === bD.WIDGET ? _$$t("community.plugins.create_new_widget") : _$$t("community.plugins.create_new_plugin");
  let _ = useCallback(e => {
    m ? t(oB()) : t(j7({
      type: kt,
      data: {
        targetRect: e.currentTarget?.getBoundingClientRect()
      }
    }));
  }, [t, m]);
  return jsxs(Fragment, {
    children: [jsx(K, {
      "aria-label": f,
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": f
      },
      onClick: _,
      children: jsx(_$$e, {})
    }), m && jsx(Pq, {
      resourceType: e.resourceType
    })]
  });
}
export const n = $$m0;