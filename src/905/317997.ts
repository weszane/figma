import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useContext } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import s from "classnames";
import { Rs } from "../figma_app/288654";
import { IT } from "../figma_app/566371";
import { P as _$$P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { X, U as _$$U } from "../905/77000";
import { d1 } from "../905/766303";
import { Lk } from "../figma_app/646357";
import { $cq } from "../figma_app/43951";
import { ev } from "../905/909811";
import { C } from "../905/109977";
import { r as _$$r } from "../905/336143";
import { c as _$$c } from "../905/511370";
import { RV } from "../figma_app/214643";
import { Ze, Go, jN, sU } from "../905/297574";
import { W as _$$W } from "../905/657133";
import { G as _$$G } from "../905/647352";
import { PV, eT, p9, FA } from "../905/985059";
var o = s;
export function $$w1(e) {
  let {
    productComponentStats,
    debouncedSearchQuery,
    publishedLibrary,
    libraryKey,
    width,
    onRemapLibraryClick,
    teamId,
    subscriptionState,
    canEditSubscriptions,
    orgId
  } = e;
  let N = useDispatch();
  let P = useSelector(e => e.dropdownShown);
  let O = useSelector(e => e.selectedView);
  let D = useSelector(e => d1(e));
  let L = useSelector(e => {
    if (orgId) return e.orgById[orgId]?.bigma_enabled;
    if (!teamId) return !1;
    let t = e.teams[teamId];
    return !!t && !!t.org_id && e.orgById[t.org_id]?.bigma_enabled;
  });
  let F = $$C0({
    libraryKey
  });
  let M = Ze({
    productComponentStats,
    libraryKey
  });
  let j = Rs($cq, {
    libraryKey
  });
  let U = useMemo(() => "loaded" === j.status && j.data.libraryKeyToFile?.file ? j.data.libraryKeyToFile.file.variableCollections : [], [j]);
  let B = Go(libraryKey);
  let V = jN(libraryKey);
  let G = !!D && D.library_key === libraryKey;
  let z = _$$W();
  let H = z ? PV : eT;
  let W = jsxs(_$$P, {
    width,
    className: _$$s.flexGrow1.$,
    children: [jsx(C, {
      inline: !1,
      publishedLibrary,
      onItemClick: void 0,
      width,
      searchQuery: debouncedSearchQuery,
      maxShownItems: 28
    }), U.length > 0 && jsx(RV, {
      variableSets: U,
      shouldDisplayDefaultModeDropdown: !G && !!subscriptionState && L,
      libraryKey,
      entity: {
        entityId: teamId ?? "",
        entityType: "team"
      },
      isLibraryFileEnabled: canEditSubscriptions && subscriptionState && (!!subscriptionState.design || !!subscriptionState.figjam)
    }), F.length > 0 && jsxs("div", {
      className: p9,
      children: [jsx("h2", {
        className: FA,
        children: renderI18nText("design_systems.libraries_modal.header_styles")
      }), jsx(_$$c, {
        styleList: F
      })]
    }), M.length > 0 && jsxs("div", {
      className: p9,
      children: [jsx("h2", {
        className: FA,
        children: renderI18nText("design_systems.libraries_modal.header_components")
      }), jsx(ev, {
        width,
        items: M,
        sourceForTracking: "Library Modal",
        onItemClick: void 0,
        selectedView: O,
        dispatch: N,
        dropdownShown: P,
        recordingKey: "subscriptionFileView.libraryItemTilesByPage",
        ui3Compact: !0
      })]
    }), D && z && jsx(_$$G, {
      libraryKey,
      editingFile: D,
      onRemapLibraryClick,
      numUsedComponents: B,
      numUsedStyles: V
    })]
  });
  let K = X(libraryKey, teamId ?? void 0);
  return jsxs("div", {
    className: o()(H, _$$s.flex.flexColumn.$),
    children: [K.data && jsx(_$$U, {
      connectedProjects: K.data,
      padding: 8
    }), W]
  });
}
export function $$C0({
  libraryKey: e
}) {
  let [t] = IT(sU(e));
  let i = useContext(_$$r);
  return useMemo(() => [...(("loaded" === t.status ? t.data : []) ?? i?.allUsedStylesByLibraryKey[e] ?? [])].sort(Lk), [t, i?.allUsedStylesByLibraryKey, e]);
}
export const c = $$C0;
export const g = $$w1;