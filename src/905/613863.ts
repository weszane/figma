import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noop } from 'lodash-es';
import { getI18nString } from "../905/303541";
import { jU } from "../figma_app/544879";
import { showDropdownThunk } from "../905/929976";
import { kK } from "../figma_app/863319";
export function $$c0({
  subscription: e,
  orgId: t,
  resourceId: i,
  setFavorite: c
}) {
  let u = useDispatch();
  let p = useSelector(e => e.dropdownShown);
  let m = useRef(null);
  let h = !!m.current && p?.data?.targetRef === m.current;
  if ("loaded" !== e.status) return {
    toggle: noop,
    buttonRef: m,
    isDropdownShown: h,
    tooltip: getI18nString("favorited_resources.add_to_sidebar")
  };
  let g = e.favorite;
  let f = void 0 !== g;
  let _ = g?.id;
  let A = e.hasMaxFavorites;
  let y = () => {
    (!A || f) && c(!f, _);
  };
  let b = e.userSidebarSections;
  let v = () => {
    b && b.length <= 1 ? y() : I();
  };
  let I = () => {
    m.current && u(showDropdownThunk({
      type: jU,
      data: {
        targetRect: m.current.getBoundingClientRect(),
        targetRef: m.current,
        resourceId: i
      }
    }));
  };
  return {
    toggle: () => {
      t ? v() : y();
    },
    buttonRef: m,
    isDropdownShown: h,
    tooltip: e.favorite ? getI18nString("favorited_resources.remove_from_sidebar") : e.hasMaxFavorites ? getI18nString("tile.favoriting.max_favorites", {
      maxFavorites: kK(t)
    }) : getI18nString("favorited_resources.add_to_sidebar")
  };
}
export const _ = $$c0;
