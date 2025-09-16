import { useDispatch, useSelector } from "react-redux";
import { lQ } from "../905/934246";
import { getI18nString } from "../905/303541";
import { PY } from "../905/34809";
import { U6, to, pS } from "../figma_app/909778";
import { hideDropdownAction } from "../905/929976";
import { Fp } from "../905/148074";
export function $$c0({
  currentOrgId: e,
  currentTeamId: t,
  updateFavorite: i,
  resourceId: c,
  resourceType: p,
  isFavorited: m,
  currentSectionId: h,
  sections: g,
  userHasMaxFavorites: f
}) {
  let _ = useDispatch();
  let A = useSelector(e => e.mobileNavShown);
  let y = useSelector(e => e.favorites.collapsedCustomSections);
  let b = (t, n) => {
    _(hideDropdownAction());
    (!f || !t) && (i(t, n), t && n && (y.$$delete(n), _(U6({
      collapsedCustomSections: y
    })), Fp({
      type: "topLevel",
      id: "custom",
      orgId: e,
      sectionId: n
    }, !0)));
  };
  let v = g.map(e => ({
    displayText: "" === e.name ? getI18nString("sidebar.starred") : e.name,
    isChecked: m && h === e.id,
    alwaysShowCheckMarkOffset: !0,
    callback: () => b(!(m && h === e.id), e.id)
  }));
  let I = [...u(m, null, lQ, {
    separator: !0
  }), ...u(m, getI18nString("favorited_resources.remove_from_sidebar"), () => b(!1))];
  let E = [...u(!t, getI18nString("favorited_resources.create_a_new_section"), () => {
    void 0 === A || A || _(PY());
    let e = h ? g.findIndex(e => e.id === h) : 0;
    p && _(to({
      movingResource: {
        resourceId: c,
        isFavorited: !0,
        resourceType: p
      }
    }));
    _(pS({
      newCustomSectionIndex: e
    }));
    _(hideDropdownAction());
  })];
  let x = [{
    displayText: "",
    separator: !0
  }];
  let S = g.find(e => e.id === h);
  let w = m ? `${getI18nString("favorited_resources.indicate_section_prefix")}: ${S?.name || getI18nString("sidebar.starred")}` : getI18nString("favorited_resources.add_to_sidebar");
  return g.length > 4 ? [{
    displayText: w,
    children: [...v, ...x, ...E]
  }, ...I] : [...u(!0, getI18nString("favorited_resources.add_to_sidebar"), lQ, {
    disabled: !0
  }), ...v, ...x, ...I, ...x, ...E];
}
function u(e, t, i, n = {}) {
  return e ? [{
    displayText: t || "",
    callback: i,
    ...n
  }] : [];
}
export const x = $$c0;