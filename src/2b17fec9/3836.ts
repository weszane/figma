import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { getI18nString } from "../905/303541";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { useDropdownState } from "../905/848862";
import { HubTypeEnum } from "../figma_app/45218";
import { KindEnum } from "../905/129884";
import { kt, Pq } from "../3591/828414";
export function $$m0(e) {
  let t = useDispatch<AppDispatch>();
  let i = useDropdownState();
  let m = i?.type === kt;
  let f = e.resourceType === HubTypeEnum.WIDGET ? getI18nString("community.plugins.create_new_widget") : getI18nString("community.plugins.create_new_plugin");
  let _ = useCallback(e => {
    m ? t(hideDropdownAction()) : t(showDropdownThunk({
      type: kt,
      data: {
        targetRect: e.currentTarget?.getBoundingClientRect()
      }
    }));
  }, [t, m]);
  return jsxs(Fragment, {
    children: [jsx(IconButton, {
      "aria-label": f,
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
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
