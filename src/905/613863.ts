import { useRef } from "react";
import { wA, d4 } from "../vendor/514228";
import { lQ } from "../905/934246";
import { t as _$$t } from "../905/303541";
import { jU } from "../figma_app/544879";
import { j7 } from "../905/929976";
import { kK } from "../figma_app/863319";
export function $$c0({
  subscription: e,
  orgId: t,
  resourceId: i,
  setFavorite: c
}) {
  let u = wA();
  let p = d4(e => e.dropdownShown);
  let m = useRef(null);
  let h = !!m.current && p?.data?.targetRef === m.current;
  if ("loaded" !== e.status) return {
    toggle: lQ,
    buttonRef: m,
    isDropdownShown: h,
    tooltip: _$$t("favorited_resources.add_to_sidebar")
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
    m.current && u(j7({
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
    tooltip: e.favorite ? _$$t("favorited_resources.remove_from_sidebar") : e.hasMaxFavorites ? _$$t("tile.favoriting.max_favorites", {
      maxFavorites: kK(t)
    }) : _$$t("favorited_resources.add_to_sidebar")
  };
}
export const _ = $$c0;