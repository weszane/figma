import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useCallback, useEffect, useState, Fragment as _$$Fragment, useRef, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { resourceUtils } from "../905/989992";
import l from "../vendor/239910";
import { trackEventAnalytics } from "../905/449184";
import { selectWithShallowEqual } from "../905/103090";
import { useSubscription } from "../figma_app/288654";
import { PerfTimer } from "../905/609396";
import { handleAtomEvent } from "../905/502364";
import { nz, Yx, Tn } from "../figma_app/933328";
import { TrackingProvider } from "../figma_app/831799";
import { useShadowReadLoaded, adminPermissionConfig } from "../figma_app/391338";
import { selectPermissionsState } from "../figma_app/212807";
import { getParentOrgId } from "../905/872904";
import { FileCanEdit, LibraryIsBranch, TeamCanAdmin, SharingGroupsByResourceConnection } from "../figma_app/43951";
import { hasAdminRoleAccessOnTeam } from "../figma_app/642025";
import { NO_TEAM, getDraftsSidebarString, isCommunityLibraryFile, initialLibraryStats } from "../figma_app/633080";
import { e0 as _$$e } from "../905/696396";
import { r as _$$r, F as _$$F } from "../905/336143";
import { I as _$$I } from "../905/423735";
import { TabLoop } from "../905/718764";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { mapLibraryAttributes } from "../905/128063";
import { Yt } from "../905/712714";
import { ZO, kz, d_, tq } from "../905/691188";
import { C as _$$C, Y as _$$Y } from "../905/180528";
import { g as _$$g } from "../905/317997";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { Link } from "../905/438674";
import { d as _$$d } from "../905/49800";
import { Label } from "../905/270045";
import { l as _$$l } from "../905/716947";
import { useAtomWithSubscription } from "../figma_app/27355";
import B from "../vendor/946678";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { P as _$$P } from "../905/347284";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { V as _$$V } from "../905/223767";
import { showModalHandler } from "../905/156213";
import { UpgradeAction } from "../905/370443";
import { g7, Ev } from "../905/939482";
import { getSelectedFile } from "../905/766303";
import { getRepoById, isBranch, getDisplayNameAlt } from "../905/760074";
import { transformLibraryWithCounts, transformLibraryFile } from "../figma_app/630951";
import { t as _$$t2 } from "../figma_app/579169";
import { fV, Fl } from "../figma_app/236178";
import { NX, k9 } from "../figma_app/777207";
import { SR } from "../figma_app/852050";
import { selectCurrentFile, useOpenFileObjectWithSinatraType } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { gE, DV } from "../905/842072";
import { FOrganizationLevelType } from "../figma_app/191312";
import { UpsellModalType } from "../905/165519";
import { AccessLevelEnum } from "../905/557142";
import { p as _$$p } from "../figma_app/353099";
import { useSingleEffect } from "../905/791079";
import { e as _$$e3 } from "../905/621515";
import { UC } from "../figma_app/33126";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { KI } from "../figma_app/797994";
import { useDropdownState } from "../905/848862";
import { N as _$$N2 } from "../figma_app/268271";
import { OnboardingModal } from "../905/425180";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
import { getCurrentTeamId } from "../figma_app/598018";
import { l6, c$ } from "../905/794875";
import { SF, CK, Yy, is, mJ, mo, TW } from "../905/55862";
import { UDe } from "../figma_app/6204";
import { i as _$$i2 } from "../905/565139";
import { y as _$$y, C as _$$C2 } from "../905/109977";
import { A as _$$A } from "../905/47292";
import { aU } from "../figma_app/757606";
import { ButtonWide } from "../905/521428";
import { Badge, BadgeColor } from "../figma_app/919079";
import { l as _$$l2 } from "../905/997221";
import { Pg, y6 } from "../figma_app/803787";
import { b as _$$b2 } from "../905/937225";
import { I as _$$I2 } from "../905/266213";
import { Xm as _$$Xm } from "../905/935570";
import { RR } from "../905/514666";
import { c as _$$c2 } from "../905/426262";
import { u as _$$u } from "../905/831362";
import { m as _$$m } from "../905/760316";
import { Bj, eR as _$$eR, h5, yz } from "../905/42209";
import { Q as _$$Q } from "../905/711770";
import { getResourceDataOrFallback } from "../905/723791";
import { generateRecordingKey } from "../figma_app/878298";
import { KP, L1 } from "../figma_app/12491";
import { E as _$$E2 } from "../905/511388";
import { createFileLibraryKeys } from "../905/651613";
import { ButtonPrimitive } from "../905/632989";
import { w as _$$w } from "../905/768636";
import { useFigmaLibrariesEnabled } from "../figma_app/657017";
import { p as _$$p2 } from "../905/895920";
import { hasResourcePresetKey } from "../figma_app/255679";
import { B as _$$B2 } from "../905/146468";
import { h as _$$h2 } from "../905/594794";
import { hubFileAndPresetKeysSetAtom } from "../905/72677";
import { FO } from "../905/682977";
import { sO } from "../figma_app/21029";
import { A as _$$A2 } from "../6828/117346";
import { f as _$$f } from "../905/405189";
import { U as _$$U } from "../905/763676";
import { ry } from "../905/825399";
var d = l;
function O({
  canEditSubscriptions: e,
  debouncedSearchQuery: t,
  libraryKey: i,
  fileLibraryStat: a,
  onBack: s,
  onRemapLibraryClick: o,
  showingDefaultSubscriptionsForTeamId: l,
  showingDefaultSubscriptionsForUser: d,
  width: c,
  sharingGroupData: u
}) {
  let [p] = setupResourceAtomHandler(Yt(i));
  let m = ZO(l, d);
  let h = useMemo(() => m(i), [i, m]);
  return jsx(TrackingProvider, {
    name: "SubscriptionFileView",
    properties: {
      libraryKey: i
    },
    children: jsxs(TabLoop, {
      children: [a ? jsx(_$$C, {
        libraryStat: a,
        libraryKey: i,
        showingDefaultSubscriptionsForTeamId: l,
        showingDefaultSubscriptionsForUser: d,
        showingDefaultSubscriptionsForOrg: null,
        canEditSubscriptions: e,
        onBackToList: s,
        sharingGroupData: u
      }) : jsx(_$$Y, {
        backToList: s,
        numMissingLibraries: 1
      }), jsx(_$$g, {
        productComponentStats: p.data,
        debouncedSearchQuery: t,
        publishedLibrary: mapLibraryAttributes(a),
        libraryKey: i,
        onRemapLibraryClick: o,
        width: c,
        teamId: l,
        canEditSubscriptions: e,
        subscriptionState: h
      })]
    })
  });
}
var V = B;
let eS = "LIBRARIES_WORKSPACE_ONBOARDING_KEY";
function ew({
  filters: e,
  currentFilter: t,
  onChangeFilter: i
}) {
  let s = useCurrentPrivilegedPlan("SubscriptionListFilterSelect").unwrapOr(null);
  let o = s?.key.type === FOrganizationLevelType.ORG ? s?.key.parentId : void 0;
  let l = s?.name;
  let d = getCurrentTeamId();
  let u = useSelector(e => e.dropdownShown);
  let p = useDispatch();
  let m = useCallback(e => {
    i(e);
    trackEventAnalytics("CTA Clicked", {
      name: "Library Preference Modal Change filter",
      orgId: o,
      location: "tab",
      filterType: e.type,
      workspaceId: "workspace" === e.type && e.id,
      teamId: d
    });
  }, [i, o, d]);
  let h = useMemo(() => ({
    format: e => SF(e, l),
    isEqual: (e, t) => "workspace" === e.type && "workspace" === t.type ? e.id === t.id : e.type === t.type
  }), [l]);
  let g = useCallback(e => "workspace" === e.type ? `workspace-${e.id}` : e.type, []);
  return jsx(l6, {
    ariaLabel: getI18nString("design_systems.libraries_modal.filtered_by"),
    className: "subscription_list_filter_tabs--selectContainer--BdpOn",
    dataOnboardingKey: eS,
    dispatch: p,
    dropdownShown: u,
    formatter: h,
    id: "subscription-list-filter-select",
    inputClassName: "subscription_list_filter_tabs--selectInput--ifokJ",
    onChange: m,
    openBelowTarget: !0,
    property: t,
    children: e.map(e => jsx(c$, {
      value: e
    }, g(e)))
  });
}
let eT = "seen_libraries_workspace_onboarding";
let ek = userFlagExistsAtomFamily("file_browser_onboarded");
let eR = userFlagExistsAtomFamily(eT);
function eN() {
  let e = useAtomWithSubscription(ek);
  let t = useSelector(e => e.currentUserOrgId);
  let i = UC(t);
  let s = useAtomWithSubscription(i);
  let o = useAtomWithSubscription(eR);
  let l = useDropdownState();
  let d = _$$e3({
    overlay: UDe,
    priority: _$$N2.DEFAULT_MODAL
  }, [e, s, o]);
  useSingleEffect(() => {
    d.show({
      canShow: (e, t, i) => e && t && !i && KI("LIBRARIES_WORKSPACE_ONBOARDING_KEY")
    });
  });
  useEffect(() => {
    l?.type === "subscription-list-filter-select" && d.complete();
  }, [l?.type, d]);
  return jsx(OnboardingModal, {
    isShowing: d.isShowing,
    trackingContextName: "Libraries Workspace Onboarding",
    userFlagOnShow: eT,
    onClose: d.complete,
    targetKey: eS,
    title: renderI18nText("rcs.libraries_workspace_onboarding_modal.title"),
    description: jsx("p", {
      children: renderI18nText("rcs.libraries_workspace_onboarding_modal.text")
    }),
    emphasized: !0
  });
}
let e$ = "file_row--fileRowNoHover--u5K44 file_row_styles--fileRowBase_v2---Q0vy";
let eZ = "file_row--fileRow_v2--g-UZw file_row_styles--fileRowBase_v2---Q0vy file_row_styles--fileRowHover--WZeMw";
let eX = "file_row--fileThumbnail--stooy";
let eQ = "file_row--fileThumbnailSet--LGTst file_row--fileThumbnail--stooy";
let eJ = "file_row--fileStats--z2Twn ellipsis--ellipsis--Tjyfa";
let e0 = "file_row--fileNameAndStats--ULNlw";
let e1 = "file_row--fileNameAndBadge--ijeO3";
function e2(e) {
  return e.modified.wellFormed.length + e.unmodified.published.length;
}
function e5(e) {
  return e.filter(e => "state_group" !== e.type);
}
function e4({
  file: e,
  numComponents: t,
  numStateGroups: i,
  numStyles: r,
  numVariableCollections: o,
  recordingKey: l,
  viewFile: d,
  isLibraryUpsell: c
}) {
  var u;
  let m = selectPermissionsState();
  let h = getRepoById(e, m.repos);
  let g = isBranch(e);
  let f = _$$l2(e);
  let _ = useSelector(Pg);
  let y = _$$b2(t, i, r, o) || g;
  let v = getFeatureFlags().cmty_lib_admin_publish ? y && !_ : y;
  let {
    data
  } = useSubscription(FileCanEdit, {
    key: e.key
  });
  let E = _$$Q({
    disabled: v,
    libraryKey: f,
    fileName: e.name,
    viewFile: d
  });
  let x = _$$Xm();
  let S = useAtomWithSubscription(y6(x));
  S.productComponents = {
    modified: {
      wellFormed: e5((u = S.productComponents).modified.wellFormed),
      erroneous: e5(u.modified.erroneous)
    },
    unmodified: {
      published: e5(u.unmodified.published),
      unpublished: e5(u.unmodified.unpublished)
    }
  };
  let w = t + i + r + o;
  let C = e2(S.styles);
  let T = e2(S.variableSets);
  let k = e2(S.variables);
  let R = e2(S.productComponents);
  let N = e2(S.stateGroups);
  let P = S.productComponents.modified.wellFormed.length;
  let O = S.styles.modified.wellFormed.length;
  let D = S.variableSets.modified.wellFormed.length + O + P;
  let L = jsxs(Bj, {
    children: [e.thumbnail_url && jsx("div", {
      className: e.thumbnail_guid ? eQ : eX,
      style: {
        backgroundImage: `url(${e.thumbnail_url})`
      }
    }), jsxs("div", {
      className: e0,
      children: [jsxs("div", {
        className: e1,
        children: [jsx(_$$u, {
          name: e.name,
          noMargin: !0,
          children: g && jsx("span", {
            className: "file_row--branchInfo--ZjSUe text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: renderI18nText("design_systems.libraries_modal.branch_of", {
              repoName: jsx("span", {
                className: "file_row--branchInfoRepoName--Hve9w",
                children: getDisplayNameAlt(h, e)
              })
            })
          })
        }), w > 0 && jsx(Badge, {
          text: 0 === D ? getI18nString("design_systems.libraries_modal.no_changes") : getI18nString("design_systems.libraries_modal.x_changes", {
            numChanges: D
          }),
          color: D > 0 ? BadgeColor.BRAND : BadgeColor.TERTIARY,
          className: D > 0 ? "file_row--badgeWithChanges--SXpio file_row--badge--DB32q" : "file_row--badge--DB32q"
        })]
      }), jsx("div", {
        className: eJ,
        children: jsx(_$$c2, {
          numComponents: R,
          numStateGroups: N,
          numStyles: C,
          numVariables: k,
          numVariableCollections: T
        })
      })]
    })]
  });
  let F = jsx(_$$eR, {
    children: data?.file?.hasPermission && jsx(_$$I2, {
      entryPoint: RR.LIBRARY_MODAL_OVERVIEW,
      recordingKey: "libraryPublishButton",
      publishedState: jsx(ButtonWide, {
        variant: "primary",
        disabled: !0,
        children: renderI18nText("design_systems.libraries_modal.publish")
      }),
      emptyState: jsx(ButtonWide, {
        variant: "primary",
        disabled: !0,
        children: renderI18nText("design_systems.libraries_modal.publish")
      })
    })
  });
  return jsxs(_$$m, {
    libraryKey: f,
    disabled: v,
    className: c ? "" : eZ,
    disabledClassName: c ? "file_row--upsellFileRow--vjMcD" : e$,
    onClick: E,
    recordingKey: l,
    hideCaret: !0,
    ariaLabel: e.name,
    children: [L, F]
  });
}
function te({
  file: e,
  publishedLibrary: t,
  canEditSubscriptions: i,
  numComponents: a,
  numStateGroups: s,
  numStyles: o,
  numVariables: l,
  numVariableCollections: d,
  recordingKey: c,
  showPresetLibraryIcon: u,
  viewFile: m,
  usedInThisFile: h = !1
}) {
  let g;
  let f = createFileLibraryKeys(e.key, t.library_key);
  let _ = "community" === t.library_type;
  let A = fV(f.libraryKey);
  let y = function (e) {
    let t = useSubscription(LibraryIsBranch, {
      libraryKey: e
    });
    return getResourceDataOrFallback(t?.data?.libraryKeyToFile?.file?.isBranch) ?? !1;
  }(f.libraryKey);
  g = !_ && (_$$b2(a, s, o, d) || y);
  let v = _$$Q({
    disabled: g,
    libraryKey: t.library_key,
    fileName: e.name,
    viewFile: m
  });
  let I = "community" === t.library_type || t.thumbnail_guid ? eQ : eX;
  let E = useMemo(() => _ && u ? jsx("div", {
    className: "file_row--presetLibraryIcon--WOwB2",
    children: jsx(_$$E2, {
      libraryKey: f.libraryKey,
      showTooltip: !0,
      redirectToHubFile: !0
    })
  }) : A ? jsx("div", {
    className: cssBuilderInstance.ml4.$,
    children: jsx(KP, {
      libraryKey: f.libraryKey
    })
  }) : null, [f, A, _, u]);
  let x = t.thumbnail_url;
  let S = jsxs(Bj, {
    children: [x && jsx("div", {
      className: I,
      style: {
        backgroundImage: `url(${x})`
      }
    }), jsxs("div", {
      className: e0,
      children: [jsxs("div", {
        className: e1,
        children: [jsx(_$$u, {
          name: t.library_name,
          noMargin: !0
        }), E]
      }), jsx("div", {
        className: eJ,
        children: jsx(_$$c2, {
          numComponents: a,
          numStateGroups: s,
          numStyles: o,
          numVariables: l,
          numVariableCollections: d
        })
      })]
    })]
  });
  let w = jsx(_$$eR, {
    children: jsx(kz, {
      libraryKey: f.libraryKey,
      showingDefaultSubscriptionsForUser: !1,
      showingDefaultSubscriptionsForTeamId: null,
      disabled: !i,
      recordingKey: generateRecordingKey(c, "fileRowSubscriptionToggle"),
      buttonStyleType: d_.SECONDARY
    })
  });
  return jsxs(_$$m, {
    libraryKey: f.libraryKey,
    disabled: g,
    onClick: v,
    className: eZ,
    disabledClassName: e$,
    usedInThisFile: h,
    recordingKey: c,
    hideCaret: !0,
    ariaLabel: e.name,
    children: [S, w]
  });
}
function tn({
  libraryKeys: e,
  viewFiles: t
}) {
  let i = useCallback(() => {
    t(!0);
  }, [t]);
  let a = e.length;
  return jsxs(ButtonPrimitive, {
    className: "file_row--missingLibrariesfileRow--XUmzk file_row--fileRow--ZqbUK file_row_styles--fileRowBase--USCNr file_row_styles--fileRowHover--WZeMw",
    onClick: i,
    htmlAttributes: {
      "data-testid": "missing_libraries_file_row"
    },
    children: [jsx(h5, {
      children: jsx("div", {
        className: cssBuilderInstance.font12.overflowHidden.ellipsis.$,
        children: getI18nString("design_systems.libraries_modal.plural.includes_missing_library", {
          missingLibCount: a
        })
      })
    }), jsx(yz, {
      children: null
    }), jsx(_$$w, {})]
  });
}
tn.displayName = "MissingFileRow";
function tl({
  publishedLibrary: e,
  canEditSubscriptions: t,
  showingDefaultSubscriptionsForTeamId: i,
  showingDefaultSubscriptionsForUser: a,
  numComponents: s,
  numStateGroups: o,
  numStyles: l,
  numVariableCollections: d,
  recordingKey: c,
  viewFile: u,
  resourceConnectionSharingGroupData: p
}) {
  let m = e.library_key;
  let h = _$$b2(s, o, l, d);
  let [g, f] = useState(!1);
  let _ = e.library_name;
  let A = _$$Q({
    disabled: h || g,
    libraryKey: e.library_key,
    fileName: _,
    viewFile: u
  });
  let y = fV(e.library_key, a);
  let b = hasResourcePresetKey(e.library_key);
  return jsxs(_$$m, {
    libraryKey: m,
    disabled: h,
    onClick: A,
    className: "file_row--fileRowWithBorder--nBoqz file_row_styles--fileRowBase--USCNr file_row_styles--fileRowHover--WZeMw",
    disabledClassName: "file_row--fileRowWithBorderNoHover--6FizW file_row_styles--fileRowBase--USCNr",
    recordingKey: c,
    ariaLabel: _,
    children: [jsx(h5, {
      children: jsxs("div", {
        className: cssBuilderInstance.flex.itemsCenter.px6.minW0.$,
        children: [jsx(_$$u, {
          noMargin: !0,
          name: _
        }), y && jsx("div", {
          className: cssBuilderInstance.ml4.$,
          children: a ? jsx(L1, {
            libraryKey: e.library_key
          }) : jsx(KP, {
            libraryKey: e.library_key
          })
        }), b && jsx("div", {
          className: cssBuilderInstance.ml4.$,
          children: jsx(_$$E2, {
            libraryKey: e.library_key,
            showTooltip: !0,
            redirectToHubFile: !0
          })
        })]
      })
    }), jsx(yz, {
      children: p ? jsx("div", {
        className: cssBuilderInstance.mlAuto.$,
        children: jsx(_$$B2, {
          resourceConnectionSharingGroupData: p
        })
      }) : jsx(tq, {
        libraryKey: m,
        showingDefaultSubscriptionsForUser: a,
        showingDefaultSubscriptionsForTeamId: i,
        disabled: !t,
        confirmCalloutShowing: g,
        setConfirmCalloutShowing: f
      })
    })]
  });
}
let td = "subscription_list_file_rows--teamSectionHeader--Uqusp library_section_header--teamSectionHeader--V2DhU library_section_header--_teamSectionHeaderBase--WYP5z library_section_header--sectionHeader--U79xZ";
let tc = "subscription_list_file_rows--teamSectionHeaderBottomBorder--0oVTu library_section_header--teamSectionHeaderBottomBorder--5Sezu library_section_header--_teamSectionHeaderBase--WYP5z library_section_header--sectionHeader--U79xZ";
let tu = "subscription_list_file_rows--teamSectionsWrapper--DXV1e";
function tp({
  canEditSubscriptions: e,
  hideHeader: t,
  hideUnsubscribedLibraries: i,
  isSearching: a,
  itemTileWidth: s,
  searchResults: o,
  showingDefaultSubscriptionsForUser: l,
  showSubscriptionsForTeamId: d,
  viewFile: c
}) {
  let u = g7();
  let p = CK({
    libraryFiles: u,
    currentLibrariesViewFilterState: null,
    hideUnsubscribedFiles: i,
    showingDefaultSubscriptionsForTeamId: d
  });
  let m = Ev(p);
  let h = useMemo(() => a ? o.map(transformLibraryWithCounts) : [], [a, o]);
  let g = CK({
    libraryFiles: h,
    currentLibrariesViewFilterState: null,
    hideUnsubscribedFiles: i
  });
  let f = a ? g : m;
  let _ = useMemo(() => {
    let e = {};
    o.forEach(t => {
      e[t.file.key] = t;
    });
    return e;
  }, [o]);
  let A = !!d;
  let y = !!l;
  let b = useMemo(() => !!e && (!!l || !!d), [e, l, d]);
  if (0 === f.length) return null;
  let v = f.map(e => {
    let t = transformLibraryFile(e);
    if (!t) return null;
    let i = mapLibraryAttributes(e);
    return jsxs(_$$Fragment, {
      children: [A || y ? jsx(tl, {
        canEditSubscriptions: b,
        numComponents: e.num_components,
        numStateGroups: e.num_state_groups,
        numStyles: e.num_styles,
        numVariableCollections: e.num_variable_collections,
        numVariables: e.num_variables,
        publishedLibrary: i,
        recordingKey: `communityLibraryRow.${l ? "user" : d}.${t.name}`,
        showingDefaultSubscriptionsForTeamId: d,
        showingDefaultSubscriptionsForUser: l,
        viewFile: c
      }, i.library_key) : jsx(te, {
        canEditSubscriptions: !0,
        file: t,
        numComponents: e.num_components,
        numStateGroups: e.num_state_groups,
        numStyles: e.num_styles,
        numVariableCollections: e.num_variable_collections,
        numVariables: e.num_variables,
        publishedLibrary: i,
        recordingKey: `communityLibraryRow.${i.library_name}`,
        showPresetLibraryIcon: !0,
        viewFile: c
      }, i.library_key), a && jsx(_$$y, {
        libraryFile: _[t.key],
        width: s,
        inTeamLibrarySettingsModal: A
      })]
    }, i.library_key);
  });
  return jsxs(Fragment, {
    children: [!t && jsx("div", {
      className: A ? tc : td,
      children: renderI18nText("design_systems.libraries_modal.ui_kits")
    }), v]
  });
}
function tm({
  canEditSubscriptions: e,
  libraryFiles: t,
  fileByKey: i,
  currentLibrariesViewFilterState: a,
  handleLibrariesViewFilterChange: s,
  hideUnsubscribedLibraries: o,
  hideLibrariesNotAddedToConnectedProject: l,
  isSearching: d,
  debouncedSearchQuery: c,
  onItemClick: u,
  showingDefaultSubscriptionsForTeamId: p,
  showingDefaultSubscriptionsForUser: m,
  sortState: h,
  viewFile: g,
  width: f,
  mapFromLibraryKeyToSharingGroupData: _,
  isConnectedProjectLibraryShare: A
}) {
  let y = !d;
  let b = CK({
    libraryFiles: t,
    currentLibrariesViewFilterState: y ? a : null,
    hideUnsubscribedFiles: o,
    showingDefaultSubscriptionsForTeamId: p,
    showingDefaultSubscriptionsForUser: m,
    hideLibrariesNotAddedToConnectedProject: l,
    mapFromLibraryKeyToSharingGroupData: _
  });
  let v = useFigmaLibrariesEnabled();
  let I = gE(c);
  let E = useMemo(() => !!v && (a?.type === "presetLibraries" || d), [a?.type, v, d]);
  let x = m || !!p;
  let S = !d && (!!a || x) && 0 === b.length && !E;
  let w = a?.type === "presetLibraries";
  return jsxs(Fragment, {
    children: [!w && jsx(th, {
      canEditSubscriptions: e,
      currentLibrariesViewFilterState: a,
      debouncedSearchQuery: c,
      fileByKey: i,
      filteredLibraryFiles: b,
      handleLibrariesViewFilterChange: s,
      hideLibrariesNotAddedToConnectedProject: l,
      hideUnsubscribedLibraries: o,
      isConnectedProjectLibraryShare: A,
      isSearching: d,
      mapFromLibraryKeyToSharingGroupData: _,
      onItemClick: u,
      shouldShowEmptyState: S,
      showingDefaultSubscriptionsForTeamId: p,
      showingDefaultSubscriptionsForUser: m,
      sortState: h,
      viewFile: g,
      width: f
    }), E && jsx("div", {
      className: b.length > 0 ? tu : "",
      children: jsx(tp, {
        viewFile: g,
        showSubscriptionsForTeamId: p,
        showingDefaultSubscriptionsForUser: m,
        canEditSubscriptions: e,
        hideUnsubscribedLibraries: o,
        hideHeader: a?.type === "presetLibraries",
        isSearching: d,
        searchResults: I,
        itemTileWidth: f
      })
    })]
  });
}
function th({
  canEditSubscriptions: e,
  filteredLibraryFiles: t,
  fileByKey: i,
  handleLibrariesViewFilterChange: a,
  hideUnsubscribedLibraries: s,
  hideLibrariesNotAddedToConnectedProject: o,
  isSearching: l,
  debouncedSearchQuery: d,
  onItemClick: c,
  showingDefaultSubscriptionsForTeamId: u,
  showingDefaultSubscriptionsForUser: p,
  shouldShowEmptyState: m,
  sortState: h,
  viewFile: g,
  width: f,
  mapFromLibraryKeyToSharingGroupData: _,
  isConnectedProjectLibraryShare: A
}) {
  let y = p || u || A;
  let b = null;
  return jsxs("div", {
    className: tu,
    children: [t.map(t => {
      let a = i[t.library_file_key];
      if (!a) return;
      let s = ("alpha" === h.sortBy || "search" === h.sortBy) && b !== (t.team_id ?? NO_TEAM);
      b = t.team_id ?? NO_TEAM;
      let o = t.team_name || getDraftsSidebarString();
      let m = mapLibraryAttributes(t);
      return jsxs(_$$Fragment, {
        children: [s && jsx("div", {
          className: y ? tc : td,
          children: o
        }), y ? jsx(tl, {
          canEditSubscriptions: e,
          numComponents: t.num_components,
          numStateGroups: t.num_state_groups,
          numStyles: t.num_styles,
          numVariableCollections: t.num_variable_collections,
          numVariables: t.num_variables,
          publishedLibrary: m,
          recordingKey: `subscriptionListViewFileRow.${o}.${a.name}`,
          resourceConnectionSharingGroupData: _?.[t.library_key],
          showingDefaultSubscriptionsForTeamId: u,
          showingDefaultSubscriptionsForUser: p,
          viewFile: g
        }) : jsx(te, {
          canEditSubscriptions: e,
          file: a,
          numComponents: t.num_components,
          numStateGroups: t.num_state_groups,
          numStyles: t.num_styles,
          numVariableCollections: t.num_variable_collections,
          numVariables: t.num_variables,
          publishedLibrary: m,
          recordingKey: `subscriptionListViewFileRow.${o}.${a.name}`,
          viewFile: g
        }), l && jsx(_$$C2, {
          searchQuery: d,
          publishedLibrary: m,
          inline: !0,
          width: f,
          onItemClick: c,
          showLibraryModalUiRefresh: !y
        })]
      }, t.library_key);
    }), m && jsx(_$$p2, {
      filtersActive: s || o,
      onViewPresetsClicked: () => a({
        type: "presetLibraries"
      })
    })]
  });
}
let ty = "subscription_list_view--branchPublishExplanationBanner--nsyAo";
let tb = "subscription_list_view--branchIcon--kaQAC";
let tv = "subscription_list_view--slidingPane--225Uk sliding_pane--slidingPane--6OmDU";
let tI = "subscription_list_view--teamSection--xFpbV";
let tE = "subscription_list_view--teamSubscriptionHint--1qX0s text--fontPos11--2LvXf text--_fontBase--QdLsd";
function tS(e) {
  let {
    isLoading,
    viewFile,
    viewMissingFiles,
    canEditSubscriptions,
    onItemClick,
    showingDefaultSubscriptionsForTeamId,
    showingDefaultSubscriptionsForUser,
    width,
    debouncedSearchQuery,
    searchQuery,
    isSearchLoading,
    isSearching,
    searchBarRef,
    libraryFiles,
    onSearchQueryChange,
    mapFromLibraryKeyToSharingGroupData,
    planType
  } = e;
  let v = selectCurrentFile();
  let I = sO();
  let E = !!useAtomWithSubscription(_$$t2).data;
  let x = useCurrentUserOrg();
  let {
    fileByKey
  } = selectPermissionsState();
  let w = Yy(showingDefaultSubscriptionsForTeamId, !!mapFromLibraryKeyToSharingGroupData);
  let C = Fl();
  let [T, k] = useState(w && w.length > 0 ? w[0] : null);
  is(w, T, k);
  let R = useRef(null);
  let N = useCallback(e => {
    k(e);
    R.current && T?.type === "org" && e?.type === "workspace" && R.current.scrollTo({
      top: 0
    });
  }, [T?.type]);
  let P = T && !isSearching && !w?.some(e => "workspace" === e.type && T?.type === "workspace" ? e.id === T.id : T.type === e.type);
  let O = w && w.length > 1 && T && !P && !isSearching;
  let D = !!showingDefaultSubscriptionsForTeamId || !!showingDefaultSubscriptionsForUser;
  let j = !mapFromLibraryKeyToSharingGroupData && (T?.type === "workspace" || T?.type === "joinedTeams" || T?.type === "nonJoinedTeams" || null === T && D || isSearching);
  let [B, V] = useState(!1);
  let H = !!mapFromLibraryKeyToSharingGroupData;
  let [K, q] = useState(!1);
  let $ = useMemo(() => ({
    sortBy: isSearching ? "search" : "alpha",
    prevCol: null,
    isDescending: !0
  }), [isSearching]);
  let Z = mJ({
    libraryFiles,
    showingDefaultSubscriptionsForTeamId,
    sortState: $,
    approvedLibraryKeysByResourceType: C
  });
  let X = g7();
  let J = useMemo(() => [...libraryFiles, ...X], [libraryFiles, X]);
  let {
    hasResults,
    isLoading: _isLoading
  } = DV(debouncedSearchQuery);
  let er = v && !isSearching && (!T || "currentFile" === T.type);
  let ea = er;
  let ec = isSearching && 0 === libraryFiles.length && !_isLoading && !hasResults;
  let eu = null;
  if (v) {
    for (let e of libraryFiles) if (e.library_key === v.libraryKey) {
      ea = !0;
      eu = e;
      break;
    }
  }
  let em = jsx(tm, {
    canEditSubscriptions,
    currentLibrariesViewFilterState: T,
    debouncedSearchQuery,
    fileByKey,
    handleLibrariesViewFilterChange: N,
    hideLibrariesNotAddedToConnectedProject: H && K,
    hideUnsubscribedLibraries: j && B,
    isConnectedProjectLibraryShare: !!mapFromLibraryKeyToSharingGroupData,
    isSearching,
    libraryFiles: Z,
    mapFromLibraryKeyToSharingGroupData,
    onItemClick,
    showingDefaultSubscriptionsForTeamId,
    showingDefaultSubscriptionsForUser,
    sortState: $,
    viewFile,
    width
  });
  let eh = em;
  isSearching || (T?.type === "org" && (eh = jsx(_$$A, {
    libraryFiles: Z,
    allLibrariesViewFilterStates: w,
    handleLibrariesViewFilterChange: N,
    showingDefaultSubscriptionsForUser,
    isSearching
  })), T?.type !== "currentFile" || (eh = null));
  let eg = renderI18nText("design_systems.libraries_modal.when_you_add_a_library_to_a_connected_project_external_teams_can_view_its_source_file_v2", {
    externalTeamsAccessRestrictedText: planType === FOrganizationLevelType.ORG ? getI18nString("design_systems.libraries_modal.by_default_external_teams_cant_access") : "",
    learnMore: jsx(Link, {
      newTab: !0,
      href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
      children: getI18nString("resource_connection.request_modal.learn_more")
    })
  });
  return jsxs("div", {
    className: "subscription_list_view--viewContainer--9nzVv",
    children: [!!mapFromLibraryKeyToSharingGroupData && jsx("div", {
      className: cssBuilderInstance.p8.$,
      children: jsx(_$$_, {
        color: _$$S.WARNING,
        text: eg
      })
    }), jsxs("div", {
      className: "subscription_list_view--searchAndFilterWrapper--Z6Hrf",
      children: [jsx(tw, {
        isUi3: !0,
        searchQuery,
        onSearchQueryChange,
        forwardedRef: searchBarRef
      }), O && jsxs(Fragment, {
        children: [jsx(ew, {
          filters: w,
          currentFilter: T,
          onChangeFilter: N
        }), jsx(_$$p, {
          children: jsx(eN, {})
        })]
      })]
    }), jsx(_$$P, {
      className: "subscription_list_view--fileListView--ucslx",
      hideScrollbar: isLoading,
      width,
      scrollContainerRef: R,
      children: jsxs("div", {
        className: "subscription_list_view--slidingPaneContainer--mru7Q sliding_pane--slidingPaneContainer--RQkXf",
        children: [jsxs("div", {
          className: P ? "subscription_list_view--slidingPaneLeft--RzPIV sliding_pane--slidingPaneLeft--Wrfdy sliding_pane--slidingPane--6OmDU" : tv,
          children: [(er || isSearching && ea) && !I && v && jsx(E ? tT : tC, {
            openFile: v,
            editingStats: eu,
            viewFile
          }), isLoading && jsx(FO, {}), !isLoading && jsxs(Fragment, {
            children: [showingDefaultSubscriptionsForTeamId && !isSearching && T?.type !== "presetLibraries" && !mapFromLibraryKeyToSharingGroupData && jsx(tN, {
              showingDefaultSubscriptionsForTeamId,
              canEditSubscriptions,
              isEmpty: 0 === libraryFiles.length
            }), showingDefaultSubscriptionsForUser && !isSearching && T?.type !== "presetLibraries" && jsx(tR, {}), ec && jsx(_$$h2, {
              isSearchLoading,
              searchQuery
            }), er && jsx(tk, {
              isSearching,
              debouncedSearchQuery,
              canEditSubscriptions,
              width,
              fileByKey,
              libraryFiles: J,
              viewFile,
              viewMissingFiles
            }), !P && eh]
          })]
        }), P && T && jsxs("div", {
          className: tv,
          children: [jsx(_$$i2, {
            assetOrFileName: SF(T, x?.name),
            onBack: () => N({
              type: "org"
            })
          }), em]
        })]
      })
    }), j && jsx("div", {
      className: cssBuilderInstance.px16.flex.flexShrink0.itemsCenter.colorBorder.bt1.bSolid.borderBox.h48.$,
      children: jsx(_$$d, {
        checked: B,
        label: jsx(Label, {
          children: renderI18nText("design_systems.libraries_modal.show_enabled_libraries_filter")
        }),
        onChange: V
      })
    }), H && jsx("div", {
      className: cssBuilderInstance.px16.flex.flexShrink0.itemsCenter.colorBorder.bt1.bSolid.borderBox.h48.$,
      children: jsx(_$$d, {
        checked: K,
        label: jsx(Label, {
          children: renderI18nText("design_systems.libraries_modal.show_libraries_added_to_connected_project_filter")
        }),
        onChange: q
      })
    })]
  });
}
function tw({
  isUi3: e,
  searchQuery: t,
  onSearchQueryChange: i,
  forwardedRef: r
}) {
  return jsx("div", {
    className: "subscription_list_view--searchContainer--f9U-d modal--searchContainer--EA8ib",
    children: jsx(aU, {
      autofocus: !0,
      className: e ? "subscription_list_view--librarySearch--01z7Z" : void 0,
      entryPointForTracking: "editor:library_subscriptions_modal",
      extraSpacing: !0,
      forwardedRef: r,
      isLibraryModalUi3: e,
      isVisible: !0,
      onChange: i,
      query: t,
      recordingKey: "subscriptionListViewLibrarySearch",
      selectOnFocus: !0
    })
  });
}
function tC({
  openFile: e,
  editingStats: t,
  viewFile: i
}) {
  let r = useOpenFileObjectWithSinatraType({
    useSinatraType: !0
  })?.thumbnail_url || "";
  SR();
  return jsxs("div", {
    className: tI,
    children: [jsx(e4, {
      file: {
        key: e.key,
        library_key: e.libraryKey,
        name: e.name,
        team_id: e.teamId,
        source_file_key: e.sourceFileKey,
        file_repo_id: e.fileRepoId,
        link_access: e.linkAccess,
        thumbnail_url: r
      },
      numComponents: t?.num_components ?? 0,
      numStateGroups: t?.num_state_groups ?? 0,
      numStyles: t?.num_styles ?? 0,
      numVariables: t?.num_variables ?? 0,
      numVariableCollections: t?.num_variable_collections ?? 0,
      viewFile: i,
      recordingKey: "subscriptionListViewFileRow.currentFile"
    }), isBranch({
      file_repo_id: e.fileRepoId,
      source_file_key: e.sourceFileKey
    }) && jsxs("div", {
      className: ty,
      children: [jsx(SvgComponent, {
        svg: _$$A2,
        className: tb
      }), jsx("div", {
        children: renderI18nText("design_systems.libraries_modal.you_can_t_publish_from_branches")
      })]
    })]
  });
}
function tT({
  openFile: e,
  editingStats: t,
  viewFile: i
}) {
  let r = useOpenFileObjectWithSinatraType({
    useSinatraType: !0
  })?.thumbnail_url || "";
  SR();
  let s = useDispatch();
  return jsx(TrackingProvider, {
    name: _$$e.LIBRARY_MODAL_UPSELL,
    children: jsx("div", {
      className: cssBuilderInstance.pt16.mx16.$,
      children: jsxs("div", {
        className: cssBuilderInstance.colorBgSecondary.bRadius6.flex.flexColumn.$,
        children: [jsxs("div", {
          className: cssBuilderInstance.pt16.mx12.flex.flexColumn.font11.fpl__textBodyMediumLetterSpacing.$,
          children: [jsx("h2", {
            className: cssBuilderInstance.fontSemiBold.$,
            children: renderI18nText("design_systems.libraries_modal.publish_components_as_a_library")
          }), jsx("p", {
            children: renderI18nText("design_systems.libraries_modal.share_components_on_new_plan", {
              upgradePlanText: jsx($z, {
                variant: "link",
                onClick: function () {
                  s(showModalHandler({
                    type: _$$V,
                    data: {
                      upsellSource: UpsellModalType.HISTORY_UPSELL,
                      teamId: e.teamId ?? "",
                      openCheckoutInNewTab: !0
                    }
                  }));
                },
                trackingProperties: {
                  trackingDescriptor: UpgradeAction.UPGRADE,
                  upsellSource: UpsellModalType.LIBRARY_MODAL_UPSELL,
                  canUserAccessProFeature: !1
                },
                children: renderI18nText("design_systems.libraries_modal.upgrade_to_professional_plan")
              })
            })
          })]
        }), jsx("div", {
          className: cssBuilderInstance.mt12.bt1.mxAuto.colorBorder.bSolid.$,
          style: styleBuilderInstance.add({
            width: "94%"
          }).$
        }), jsx(e4, {
          file: {
            key: e.key,
            library_key: e.libraryKey,
            name: e.name,
            team_id: e.teamId,
            source_file_key: e.sourceFileKey,
            file_repo_id: e.fileRepoId,
            link_access: e.linkAccess,
            thumbnail_url: r
          },
          numComponents: t?.num_components ?? 0,
          numStateGroups: t?.num_state_groups ?? 0,
          numStyles: t?.num_styles ?? 0,
          numVariables: t?.num_variables ?? 0,
          numVariableCollections: t?.num_variable_collections ?? 0,
          viewFile: i,
          recordingKey: "subscriptionListViewFileRow.currentFile",
          isLibraryUpsell: !0
        }), isBranch({
          file_repo_id: e.fileRepoId,
          source_file_key: e.sourceFileKey
        }) && jsxs("div", {
          className: ty,
          children: [jsx(SvgComponent, {
            svg: _$$A2,
            className: tb
          }), jsx("p", {
            children: renderI18nText("design_systems.libraries_modal.you_can_t_publish_from_branches")
          })]
        })]
      })
    })
  });
}
function tk({
  isSearching: e,
  debouncedSearchQuery: t,
  canEditSubscriptions: i,
  width: s,
  fileByKey: o,
  libraryFiles: l,
  viewFile: c,
  viewMissingFiles: u
}) {
  let p = useContext(_$$r);
  let m = useSelector(getSelectedFile);
  let [h, g] = useState(new Set());
  let f = Fl();
  let _ = useAtomWithSubscription(hubFileAndPresetKeysSetAtom);
  let A = useMemo(() => d()(l, e => e.library_key), [l]);
  let [y, b] = useMemo(() => V()(p?.allUsedLibraryKeys ? Array.from(p.allUsedLibraryKeys) : [], e => !!A[e]), [A, p?.allUsedLibraryKeys]);
  let v = mo({
    libraryFiles: l
  });
  useEffect(() => g(e => new Set([...e, ...y, ...v])), [v, y]);
  let E = useMemo(() => {
    let e = l.filter(e => h && Array.from(h).some(t => t === e.library_key) && m?.library_key !== e.library_key);
    sortByPropertyWithOptions(e, "library_file_name");
    NX(f) && k9({
      libraries: e,
      approvedLibraryKeysByResourceType: f
    });
    return e;
  }, [h, m, l, f]);
  let [S, w] = useMemo(() => V()(E, e => isCommunityLibraryFile(e)), [E]);
  return 0 === E.length && 0 === b.length ? null : jsxs("div", {
    className: tI,
    children: [jsx("div", {
      className: "subscription_list_view--sectionHeader--lgMzP library_section_header--sectionHeader--U79xZ",
      children: renderI18nText("design_systems.libraries_modal.libraries_available_in_this_file")
    }), w.map(a => {
      let l = o && a && o[a.library_file_key];
      let d = mapLibraryAttributes(a);
      return jsxs(_$$Fragment, {
        children: [jsx(te, {
          canEditSubscriptions: i,
          file: l,
          numComponents: a.num_components,
          numStateGroups: a.num_state_groups,
          numStyles: a.num_styles,
          numVariableCollections: a.num_variable_collections,
          numVariables: a.num_variables,
          publishedLibrary: d,
          recordingKey: `subscriptionListViewFileRow.usedInThisFile.${l.name}`,
          usedInThisFile: !0,
          viewFile: c
        }), e && jsx(_$$C2, {
          searchQuery: t,
          publishedLibrary: d,
          inline: !0,
          width: s
        })]
      }, a.library_file_key);
    }), S.map(e => {
      let t = transformLibraryFile(e);
      let r = mapLibraryAttributes(e);
      return jsx(te, {
        canEditSubscriptions: i,
        file: t,
        numComponents: e.num_components,
        numStateGroups: e.num_state_groups,
        numStyles: e.num_styles,
        numVariableCollections: e.num_variable_collections,
        numVariables: e.num_variables,
        publishedLibrary: r,
        recordingKey: `subscriptionListViewFileRow.usedInThisFile.${t.name}`,
        showPresetLibraryIcon: _.has(_$$l(e.library_file_key)),
        usedInThisFile: !0,
        viewFile: c
      }, e.library_file_key);
    }), b.length > 0 && jsx(tn, {
      viewFiles: u,
      libraryKeys: b
    }, "missingFiles")]
  });
}
function tR() {
  return jsx("div", {
    className: tE,
    children: renderI18nText("design_systems.libraries_modal.enabling_a_file_will_make_its_styles_available_in_all_personal_drafts")
  });
}
function tN(e) {
  let {
    roles
  } = selectWithShallowEqual(e => ({
    roles: e.roles
  }));
  if (e.isEmpty) return jsx("div", {
    className: tE,
    children: renderI18nText("design_systems.libraries_modal.there_are_no_published_components_or_styles_in_your_team")
  });
  if (e.canEditSubscriptions) return jsx("div", {
    className: tE,
    children: renderI18nText("design_systems.libraries_modal.enabling_a_team_library_will_make_it_show_up_in_all_team_files")
  });
  {
    let i = [];
    let r = e.showingDefaultSubscriptionsForTeamId && roles.byTeamId[e.showingDefaultSubscriptionsForTeamId] || {};
    for (let e in r) {
      let t = r[e];
      !1 === t.pending && t.level >= AccessLevelEnum.ADMIN && i.push(t.user);
    }
    let a = "";
    1 === i.length ? a = getI18nString("design_systems.libraries_modal.admin_list_1", {
      adminHandle: i[0].handle
    }) : 2 === i.length ? a = getI18nString("design_systems.libraries_modal.admin_list_2", {
      adminHandle1: i[0].handle,
      adminHandle2: i[1].handle
    }) : 3 === i.length ? a = getI18nString("design_systems.libraries_modal.admin_list_3", {
      adminHandle1: i[0].handle,
      adminHandle2: i[1].handle,
      adminHandle3: i[2].handle
    }) : i.length >= 4 && (a = getI18nString("design_systems.libraries_modal.admin_list_many", {
      adminHandle1: i[0].handle,
      adminHandle2: i[1].handle,
      numAdditionalAdmins: i.length - 2
    }));
    return jsxs("div", {
      className: tE,
      children: [renderI18nText("design_systems.libraries_modal.only_team_admins_can_enable_libraries_for_the_team"), a && jsx("div", {
        children: a
      })]
    });
  }
}
let tL = "library_subscriptions--slidingPane--NA6-g sliding_pane--slidingPane--6OmDU";
let tF = "library_subscriptions--slidingPaneLeft--1TcCU sliding_pane--slidingPaneLeft--Wrfdy sliding_pane--slidingPane--6OmDU";
export function $$tM0({
  showingDefaultSubscriptionsForTeamId: e,
  showingDefaultSubscriptionsForUser: t,
  resourceConnectionId: i,
  width: l,
  planType: w,
  includeThumbnails: C = !1
}) {
  let T;
  let k = useDispatch();
  let {
    user,
    teams,
    openFileKey,
    openFile
  } = selectWithShallowEqual(e => ({
    user: e.user,
    teams: e.teams,
    openFileKey: e.openFile?.key || null,
    openFile: e.openFile
  }));
  let L = getParentOrgId();
  let F = selectPermissionsState();
  let [M, j] = useState(null);
  let [U, B] = useState(!1);
  let [V, G] = useState(!1);
  let z = _$$F();
  let H = useRef(null);
  nz();
  useEffect(() => {
    k(Yx({}));
  }, [k]);
  let [W] = Tn({
    currentOrgId: L,
    subscriptionFileKey: openFileKey,
    includeThumbnails: C
  });
  let K = W?.data || initialLibraryStats;
  let Y = ry();
  let q = useMemo(() => d()(K?.files ?? [], e => e.library_key), [K]);
  let $ = useMemo(() => M ? q[M] ?? null : null, [q, M]);
  let Z = useCallback(() => {
    j(null);
    B(!1);
    H?.current?.focus?.();
    setTimeout(() => {
      handleAtomEvent({
        id: "Library File Collapsed"
      });
    }, 200);
  }, []);
  let X = useCallback(() => {
    trackEventAnalytics("Open remapping libraries modal", {
      editingFileKey: openFileKey,
      libraryKeyToSwapFrom: M
    });
    G(!0);
  }, [openFileKey, M]);
  let Q = useCallback(() => {
    G(!1);
  }, []);
  let {
    searchQuery,
    debouncedSearchQuery,
    isSearching,
    isSearchLoading,
    libraryFiles,
    onSearchQueryChange
  } = TW(K.files);
  let ea = Y.result.some(e => e.library_key === M);
  let es = useSubscription(TeamCanAdmin, {
    id: e ?? ""
  }, {
    enabled: !!e
  });
  let eo = useMemo(() => {
    if (!e) return !1;
    let t = teams[e];
    return !!(t && hasAdminRoleAccessOnTeam(t.id, F));
  }, [e, teams, F]);
  let el = useShadowReadLoaded({
    oldValue: resourceUtils.loaded(eo),
    newValue: es.transform(e => !!e.team?.hasPermission),
    label: adminPermissionConfig.LibrarySubscriptions.canEditSubscriptionsForTeamLibraryModal,
    enableFullRead: getFeatureFlags().dse_library_subscriptions_for_team,
    contextArgs: {
      teamId: e
    }
  });
  T = e ? !!el.data : t ? !!user : !!openFile?.canEdit;
  let ed = useSubscription(SharingGroupsByResourceConnection, {
    resourceConnectionId: i
  }, {
    enabled: !!i
  });
  let ec = "loading" === W.status || null == z || "loading" === ed.status || !!(e && "loading" === el.status);
  let eu = useRef(new PerfTimer("get_library_info", {}));
  useEffect(() => {
    let e = eu.current;
    if (ec) e.start();else {
      e.stop();
      let t = e.getElapsedTime();
      trackEventAnalytics("load_library_modal", {
        elapsedMs: t,
        include_thumbnails: C,
        is_org_user: !!L,
        denormalized_asset_counts: !!getFeatureFlags().dse_calc_counts_from_library,
        improved_unpublish_styles: !0,
        cache_missing_libraries: !0
      }, {
        forwardToDatadog: !0
      });
    }
  }, [ec, C, L]);
  let ep = useMemo(() => new Set([...K.files.map(e => e.library_key), ...Y.result.map(e => e.library_key)]), [K.files, Y.result]);
  let em = useMemo(() => (z ? Array.from(z.allUsedLibraryKeys) : []).filter(e => !ep.has(e)), [ep, z]);
  let eh = useMemo(() => {
    if (!i) return;
    let e = ed.data?.resourceConnectionSharingGroups;
    return libraryFiles.map(e => e.library_key).reduce((t, n) => {
      let r = e?.find(e => e.libraryKey === n);
      t[n] = {
        sharingGroupId: r?.id,
        libraryKey: n,
        resourceConnectionId: i
      };
      return t;
    }, {});
  }, [ed, libraryFiles, i]);
  let eg = M ? ea ? jsx("div", {
    className: V ? tF : tL,
    children: jsx(_$$I, {
      libraryKey: $?.library_key ?? M,
      onBack: Z,
      width: l,
      showSubscriptionsForTeamId: e,
      showSubscriptionsForUser: t,
      canEditSubscriptions: T,
      onRemapLibraryClick: X
    })
  }) : jsx("div", {
    className: V ? tF : tL,
    children: jsx(O, {
      canEditSubscriptions: T,
      debouncedSearchQuery,
      fileLibraryStat: $,
      libraryKey: M,
      onBack: Z,
      onRemapLibraryClick: X,
      sharingGroupData: $?.library_key ? eh?.[$.library_key] : void 0,
      showingDefaultSubscriptionsForTeamId: e,
      showingDefaultSubscriptionsForUser: t,
      width: l
    })
  }) : null;
  return jsx(TrackingProvider, {
    name: _$$e.LIBRARY_SUBSCRIPTIONS,
    children: jsx(_$$r.Provider, {
      value: z,
      children: jsxs("div", {
        className: "library_subscriptions--slidingPaneContainer--PMYWT sliding_pane--slidingPaneContainer--RQkXf",
        children: [jsx("div", {
          className: M || U || V ? tF : tL,
          children: jsx(tS, {
            canEditSubscriptions: T,
            debouncedSearchQuery,
            isLoading: ec,
            isSearchLoading,
            isSearching,
            libraryFiles,
            mapFromLibraryKeyToSharingGroupData: eh,
            onSearchQueryChange,
            planType: w,
            searchBarRef: H,
            searchQuery,
            showingDefaultSubscriptionsForTeamId: e,
            showingDefaultSubscriptionsForUser: t,
            viewFile: j,
            viewMissingFiles: B,
            width: l
          })
        }), eg, M && V && jsx("div", {
          className: tL,
          children: jsx(_$$U, {
            selectedLibraryKey: M,
            onBackClick: Q
          })
        }), U && em.length > 0 && (1 === em.length && em[0] ? jsx(_$$U, {
          selectedLibraryKey: em[0],
          onBackClick: Z
        }) : jsx(_$$f, {
          backToList: Z,
          libraryKeys: em
        }))]
      })
    })
  });
}
export const s = $$tM0;