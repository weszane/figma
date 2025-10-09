import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TabLoop } from "../905/718764";
import { l as _$$l } from "../905/716947";
import l from "../vendor/523035";
import { useSubscription } from "../figma_app/288654";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { useHandleMouseEvent } from "../figma_app/878298";
import { RecordingScrollContainer } from "../905/347284";
import { renderI18nText } from "../905/303541";
import { TrackingProvider } from "../figma_app/831799";
import { useFigmaLibrariesEnabled } from "../figma_app/657017";
import { getSelectedFile } from "../905/766303";
import { Fl } from "../figma_app/236178";
import { LibraryModalAssetsDataByLibraryKey } from "../figma_app/43951";
import { useUntransformedSubscribedLibraries } from "../figma_app/155728";
import { getCurrentTeam } from "../figma_app/598018";
import { LibraryItemTilesByPage } from "../905/909811";
import { Yt } from "../905/712714";
import { c as _$$c } from "../905/511370";
import { ZO } from "../905/691188";
import { isLibraryModalContextAvailable, useLibraryModalContextOptional } from "../905/753512";
import { mapSubscribedLibraries } from "../905/825399";
import { W as _$$W } from "../905/729905";
import { RV } from "../figma_app/214643";
import { mergeComponentsWithOrphanStateGroups, getLibraryLooseComponentAndStateGroupCount, useUsedStylesCount } from "../905/297574";
import { W as _$$W2 } from "../905/657133";
import { G as _$$G } from "../905/647352";
import { SubscriptionFileViewHeader } from "../905/180528";
import { c as _$$c2 } from "../905/317997";
import { Cb, dk, eT, p9, FA } from "../905/985059";
var d = l;
export function $$F0({
  libraryKey: e,
  onBack: t,
  width: i,
  showSubscriptionsForTeamId: l,
  showSubscriptionsForUser: F,
  canEditSubscriptions: M,
  onRemapLibraryClick: j,
  bodyOnly: U
}) {
  let B = useFigmaLibrariesEnabled();
  let V = isLibraryModalContextAvailable();
  let G = useSubscription(LibraryModalAssetsDataByLibraryKey, {
    libraryKey: e
  }, {
    enabled: B
  });
  let z = useMemo(() => {
    if ("loaded" !== G.status) return [];
    let e = G.data.libraryKeyToFile?.hubFile?.communityLibrary;
    return e ? e.variableCollections : [];
  }, [G]);
  let H = useDispatch<AppDispatch>();
  let W = useSelector(e => e.dropdownShown);
  let K = useSelector(e => e.selectedView);
  let Y = useSelector(e => getSelectedFile(e));
  let q = _$$W2();
  let $ = getCurrentTeam();
  let Z = !l && !F;
  let [X] = setupResourceAtomHandler(Yt(e));
  let Q = useMemo(() => "loaded" !== X.status ? [] : mergeComponentsWithOrphanStateGroups(X.data.components, X.data.stateGroups), [X]);
  let J = _$$c2({
    libraryKey: e
  });
  let ee = useHandleMouseEvent("communityLibraryFileView.backCaret", "mousedown", t);
  let et = getLibraryLooseComponentAndStateGroupCount(e ?? _$$l(""));
  let ei = useUsedStylesCount(e);
  let en = useSelector(e => !!$?.org_id && e.orgById[$.org_id]?.bigma_enabled);
  let er = ZO(l, F);
  let ea = useMemo(() => er(e), [e, er]);
  let es = !!(ea?.design || ea?.figjam);
  let eo = function (e) {
    let t = useFigmaLibrariesEnabled();
    let i = useUntransformedSubscribedLibraries();
    let {
      workspaceApprovedLibraryKeys,
      orgApprovedLibraryKeys
    } = Fl();
    let {
      searchSessionId,
      queryId
    } = useLibraryModalContextOptional() ?? {};
    return useCallback(() => {
      let r = new Set([...workspaceApprovedLibraryKeys, ...orgApprovedLibraryKeys]);
      let l = mapSubscribedLibraries(i.data?.file?.libraryOrgSubscriptions ?? [], [{
        library_key: e
      }], t);
      let d = mapSubscribedLibraries(i.data?.file?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions ?? [], [{
        library_key: e
      }], t);
      let c = mapSubscribedLibraries(i.data?.file?.libraryTeamSubscriptions ?? [], [{
        library_key: e
      }], t);
      let u = null;
      l.length > 0 ? u = "org" : d.length > 0 ? u = "workspace" : c.length > 0 && (u = "team");
      return {
        approved: !!e && r.has(e),
        default_level: u,
        search_session_id: searchSessionId,
        query_id: queryId
      };
    }, [t, e, orgApprovedLibraryKeys, queryId, searchSessionId, i.data?.file?.libraryOrgSubscriptions, i.data?.file?.libraryTeamSubscriptions, i.data?.file?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions, workspaceApprovedLibraryKeys]);
  }(e);
  let el = useCallback(() => {
    let {
      approved,
      default_level,
      search_session_id,
      query_id
    } = eo();
    let a = d()(z.map(e => e.numVariables));
    return {
      library_key: e,
      added: es,
      approved,
      default_level,
      search_session_id,
      query_id,
      n_assets: Q.length + J.length + a,
      n_components: Q.length,
      n_styles: J.length,
      n_variables: a,
      ui_kit: !0
    };
  }, [Q.length, eo, es, e, J.length, z]);
  let ed = "loading" === X.status || "loading" === G.status;
  _$$W.useLogPageView({
    metadata: el,
    loading: ed
  });
  let ec = jsxs(RecordingScrollContainer, {
    width: i,
    className: q ? V ? Cb : dk : eT,
    children: [z.length > 0 && jsx(RV, {
      variableSets: z,
      isLibraryFileEnabled: es && M,
      shouldDisplayDefaultModeDropdown: M && en && !Z,
      libraryKey: e,
      entity: {
        entityId: $?.id ?? "",
        entityType: "team"
      }
    }), J.length > 0 && jsxs("div", {
      className: p9,
      children: [jsx("h2", {
        className: FA,
        children: renderI18nText("design_systems.libraries_modal.header_styles")
      }), jsx(_$$c, {
        styleList: J
      })]
    }), Q.length > 0 && jsxs("div", {
      className: p9,
      children: [jsx("h2", {
        className: FA,
        children: renderI18nText("design_systems.libraries_modal.header_components")
      }), jsx(LibraryItemTilesByPage, {
        width: i,
        items: Q,
        sourceForTracking: "Community Library Modal",
        selectedView: K,
        dispatch: H,
        dropdownShown: W,
        recordingKey: "communityFileView.libraryItemTilesByPage",
        ui3Compact: !0
      })]
    }), Y && q && B && jsx(_$$G, {
      libraryKey: e,
      editingFile: Y,
      onRemapLibraryClick: j,
      numUsedComponents: et,
      numUsedStyles: ei
    })]
  });
  return U ? ec : jsx(TrackingProvider, {
    name: "CommunityLibraryFileView",
    properties: {
      libraryKey: e
    },
    children: jsxs(TabLoop, {
      children: [jsx(SubscriptionFileViewHeader, {
        libraryStat: null,
        libraryKey: e,
        showingDefaultSubscriptionsForTeamId: l,
        showingDefaultSubscriptionsForUser: F,
        showingDefaultSubscriptionsForOrg: null,
        canEditSubscriptions: M,
        onBackToList: ee
      }), ec]
    })
  });
}
export const I = $$F0;
