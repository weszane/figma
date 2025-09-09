import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jU } from "../figma_app/544879";
import { x } from "../905/796251";
import { t$ } from "../figma_app/863319";
import { j } from "../905/834956";
export function $$c0({
  setFavorite: e,
  sections: t,
  customSectionOrdering: i,
  resourceId: c,
  resourceType: u,
  favoriteId: p,
  currentSectionId: m,
  userHasMaxFavorites: h,
  orgId: g
}) {
  let f = useDispatch();
  let _ = useSelector(e => e.currentTeamId);
  let A = useMemo(() => t$(t, i), [t, i]);
  let y = x({
    currentOrgId: g,
    currentTeamId: _,
    updateFavorite: (t, i) => e(t, p, i),
    resourceId: c,
    resourceType: u,
    isFavorited: !!p,
    currentSectionId: m,
    sections: A,
    userHasMaxFavorites: h
  });
  let b = function () {
    let e = useSelector(e => e.dropdownShown);
    return e && e?.type === jU ? e : null;
  }();
  return null == b ? null : jsx(j, {
    autofocusPrevOnDismount: !0,
    items: y,
    parentRect: b.data.targetRect,
    showPoint: !1,
    lean: "right",
    recordingKey: "organize-favorited-dropdown",
    dispatch: f,
    onSelectItem: (e, t) => {
      e.callback?.("", {}, f, t);
    },
    shouldUsePortal: !0
  });
}
export const t = $$c0;
