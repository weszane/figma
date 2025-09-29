import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { UISection } from '../905/15667';
import { i as _$$i2 } from '../905/46262';
import { B as _$$B } from '../905/55104';
import { getPrefetchPlanKeyHandler } from '../905/86266';
import { UserAPIHandlers } from '../905/93362';
import { registerModal } from '../905/102752';
import { KindEnum } from '../905/129884';
import { f as _$$f2, r as _$$r2 } from '../905/136283';
import { searchAPIHandler } from '../905/144933';
import { hideModal, hideSpecificModal, popModalStack, showModalHandler } from '../905/156213';
import { UpsellModalType } from '../905/165519';
import { J as _$$J } from '../905/202542';
import { C8 } from '../905/223565';
import { o as _$$o } from '../905/268099';
import { HighlightedText } from '../905/287602';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { P as _$$P } from '../905/347284';
import { BannerMessage } from '../905/363675';
import { getMinimumBundle } from '../905/389382';
import { z as _$$z } from '../905/404751';
import { LazyInputForwardRef } from '../905/408237';
import { A as _$$A3 } from '../905/408320';
import { FileMoveButton } from '../905/433182';
import { IconButton } from '../905/443068';
import { trackEventAnalytics } from '../905/449184';
import { useWebLoggerTimerEffect } from '../905/485103';
import { x as _$$x } from '../905/505155';
import { HeaderModal } from '../905/519092';
import { APILoadingStatus } from '../905/520829';
import { v as _$$v } from '../905/556792';
import { requestUpgrade } from '../905/584989';
import { getFeatureFlags } from '../905/601108';
import { eb as _$$eb, _Z, Al, bV, BY, Er, IS, KF, mt, qr, rJ, Rt, rx, Ub, Uo, Xv, Yf, Zg } from '../905/615608';
import { getResourceDataOrFallback } from '../905/663269';
import { In } from '../905/672640';
import { P as _$$P2 } from '../905/688136';
import { e0 as _$$e } from '../905/696396';
import { SvgComponent } from '../905/714743';
import { TabLoop } from '../905/718764';
import { s as _$$s2 } from '../905/761565';
import { h as _$$h } from '../905/864281';
import { K as _$$K2 } from '../905/899124';
import { selectViewAction } from '../905/929976';
import { noop } from 'lodash-es';
;
import { fileEntityDataMapper } from '../905/943101';
import { TextWithTruncation } from '../905/984674';
import { A as _$$A2 } from '../5724/142155';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { DestinationProjectsForTeam, MoveFileCurrentProject, MoveFileDestination, OrgUserDraftFolder, ProjectNameForFile } from '../figma_app/43951';
import { BannerInsetModal } from '../figma_app/59509';
import { $$, nR, vd } from '../figma_app/60079';
import { Q as _$$Q2 } from '../figma_app/113686';
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241';
import { FAccessLevelType, FFileType, FOrganizationLevelType, FPermissionDenialReason, FProductAccessType } from '../figma_app/191312';
import { getUpgradeMessage } from '../figma_app/217457';
import { useSubscription } from '../figma_app/288654';
import { Ki } from '../figma_app/328188';
import { KQ } from '../figma_app/475472';
import { _ as _$$_, S as _$$S } from '../figma_app/490799';
import { hasRootPathOptional } from '../figma_app/528509';
import { isProrationBillingEnabledForCurrentPlan } from '../figma_app/618031';
import { teamConstant } from '../figma_app/630077';
import { SecureLink, BigTextInputForwardRef } from '../figma_app/637027';
import { filterNotNullish } from '../figma_app/656233';
import { fm, Y9 } from '../figma_app/680166';
import { TeamPropertyKey } from '../figma_app/713624';
import { jB, LU, xd } from '../figma_app/722141';
import { getProductAccessTypeOrDefault } from '../figma_app/765689';
import { TrackingProvider } from '../figma_app/831799';
import { LoadingOverlay, LoadingSpinner } from '../figma_app/858013';
import { ds, sb, t$, TF } from '../figma_app/863319';
import { Badge, BadgeColor } from '../figma_app/919079';
import { requestOrgAccountTypeAction } from '../figma_app/990058';
import { useDebounce } from 'use-debounce';
var X = (e => (e.BASE_TAB = 'base_tab', e.ALL_TEAM = 'all_team', e.STARRED_TEAM = 'starred_team', e))(X || {});
var Q = (e => (e.SUGGESTED = 'Suggested', e.STARRED = 'Starred', e.ALL = 'All', e))(Q || {});
let en = new class {
  constructor() {
    this.FileMoveSuggestedSchemaValidator = createNoOpValidator();
    this.getFileMoveSuggestedResults = e => {
      let {
        orgId
      } = e;
      return this.FileMoveSuggestedSchemaValidator.validate(async ({
        xr: e
      }) => await e.get('/api/file_move/suggested', APIParameterUtils.toAPIParameters({
        org_id: orgId
      })));
    };
  }
}();
function eA(e) {
  let {
    selectedFolder,
    setSelectedFolder,
    selectedTeam,
    setSelectedTeam,
    setBreadcrumbView,
    isOrgContext,
    planId,
    currentFolderId
  } = e;
  let c = useSubscription(OrgUserDraftFolder, {
    orgId: planId ?? ''
  }, {
    enabled: isOrgContext && !!planId
  });
  let u = c.status === 'loaded' ? {
    id: c.data.currentUser?.baseOrgUser?.draftsProject?.id || '',
    name: getI18nString('file_browser.file_move.drafts'),
    canEdit: !!c.data.currentUser?.baseOrgUser?.draftsProject?.canEdit
  } : null;
  let p = u && jsx(_$$o, {
    folderId: u.id,
    folderName: u.name,
    checked: !!selectedFolder && selectedFolder.id === u.id,
    onSelect: () => {
      setSelectedFolder({
        id: u.id,
        name: u.name,
        source: Q.ALL
      });
    },
    canEdit: u.canEdit,
    isCurrentFolder: currentFolderId === u.id
  });
  let m = (e, t) => {
    setSelectedTeam(e, t);
    setBreadcrumbView(X.ALL_TEAM);
  };
  let h = jsx(_$$B, {
    onShouldFetchNextPage: () => {
      e.fetchMore && e.fetchMore();
    },
    children: jsxs('div', {
      className: Er,
      children: [e.isOrgContext && p, e.teamsList.map(e => jsx(_$$P2, {
        teamId: e.id,
        teamName: e.name,
        onSelect: () => {
          m(e.id, e.name);
          setSelectedFolder(null);
        }
      }, `all-team-${e.id}}`))]
    })
  });
  let g = useSubscription(DestinationProjectsForTeam, {
    teamId: selectedTeam ? selectedTeam.id : ''
  }, {
    enabled: !!selectedTeam
  });
  let _ = g.data?.team?.currentTeamUser?.draftsProject?.id || '';
  let A = !isOrgContext;
  let y = A && g.status === 'loaded' ? jsx(_$$o, {
    folderId: _,
    folderName: getI18nString('file_browser.file_move.drafts'),
    teamName: selectedTeam?.name || '',
    checked: !!selectedFolder && selectedFolder.id === _,
    onSelect: () => {
      setSelectedFolder({
        id: _,
        name: getI18nString('file_browser.file_move.drafts'),
        source: Q.ALL
      });
    },
    canEdit: !0,
    isCurrentFolder: currentFolderId === _
  }) : null;
  let b = g.status === 'loaded' ? getResourceDataOrFallback(g.data.team?.allActiveProjects) : void 0;
  let v = g.status === 'loaded' ? b && b.length === 0 ? jsxs('div', {
    className: Ub,
    children: [renderI18nText('file_browser.file_move.no_projects_in_this_team'), jsx('div', {
      className: cssBuilderInstance.colorTextSecondary.$
    })]
  }) : b?.map(e => jsx(_$$o, {
    folderId: e.id || '',
    folderName: e.name || '',
    teamName: selectedTeam?.name || '',
    checked: !!selectedFolder && selectedFolder.id === e.id,
    onSelect: () => {
      setSelectedFolder({
        id: e.id || '',
        name: e.name || '',
        source: Q.ALL
      });
    },
    canEdit: e.canEdit,
    isCurrentFolder: currentFolderId === e.id,
    isConnectedProject: (e.activeProjectResourceConnections?.length ?? 0) > 0
  }, `team-folder-${e.id}}`)) : jsx('div', {
    className: cssBuilderInstance.h300.$,
    children: jsx(LoadingOverlay, {})
  });
  return jsxs('div', {
    children: [!selectedTeam && jsx(_$$P, {
      width: 400,
      height: 300,
      children: h
    }), selectedTeam && jsx(_$$P, {
      width: 400,
      height: 300,
      children: jsxs('div', {
        className: Er,
        children: [jsx(FileMoveButton, {
          team: g.data?.team,
          setSelectedFolder: (e, t) => {
            setSelectedFolder({
              id: e,
              name: t,
              source: Q.ALL
            });
          }
        }), A && y, v]
      })
    })]
  });
}
function ey(e) {
  let {
    setSelectedTeam,
    setBreadcrumbView
  } = e;
  let n = useCallback((e, n) => {
    setSelectedTeam(e, n);
    setBreadcrumbView(X.STARRED_TEAM);
  }, [setSelectedTeam, setBreadcrumbView]);
  let r = useMemo(() => sb(e.favorites, e.order), [e.favorites, e.order]);
  return jsxs('div', {
    children: [jsx('div', {
      className: cssBuilderInstance.p8.ml8.colorTextSecondary.$,
      children: e.sectionName || getI18nString('sidebar.starred')
    }), r.map(t => {
      if (t.resourceType === 'folder') {
        let i = t.resource.project;
        return i ? jsx(_$$o, {
          folderId: i.id,
          folderName: i.path,
          teamName: i.teamPermissioned?.name,
          checked: !!e.selectedFolder && e.selectedFolder.id === i.id,
          onSelect: () => {
            e.setSelectedFolder({
              id: i.id,
              name: i.path,
              source: Q.STARRED,
              isConnectedProject: (i.activeProjectResourceConnections?.length ?? 0) > 0
            });
          },
          canEdit: i.canEdit,
          isCurrentFolder: e.currentFolderId === i.id,
          isConnectedProject: (i.activeProjectResourceConnections?.length ?? 0) > 0
        }, `starred-folder-${i.id}`) : jsx(Fragment, {});
      }
      if (t.resourceType === 'team') {
        let i = t.resource.team;
        return i ? jsx(_$$P2, {
          teamId: i.id,
          teamName: i.name,
          onSelect: () => {
            n(i.id, i.name);
            e.setSelectedFolder(null);
          }
        }, `starred-team-${i.id}`) : jsx(Fragment, {});
      }
    })]
  });
}
function eb(e) {
  let t = useMemo(() => t$(e.userSidebarSections ?? [], e.fileBrowserPreferences?.orderedSidebarSections ?? void 0), [e.userSidebarSections, e.fileBrowserPreferences?.orderedSidebarSections]);
  let i = ds(null, null, e.favoritedProjects, e.favoritedTeams, null);
  let n = useMemo(() => {
    let e = {};
    i.forEach(t => {
      t.resource.sidebarSectionId && (e[t.resource.sidebarSectionId] ? e[t.resource.sidebarSectionId].push(t) : e[t.resource.sidebarSectionId] = [t]);
    });
    return e;
  }, [i]);
  let r = t.map(t => jsx(ey, {
    breadcrumbView: e.breadcrumbView,
    currentFolderId: e.currentFolderId,
    favorites: n[t.id] ?? [],
    isOrgContext: e.isOrgContext,
    order: t.orderedFavoritedResourceIds ?? [],
    sectionName: t.name,
    selectedFolder: e.selectedFolder,
    selectedTeam: e.selectedTeam,
    setBreadcrumbView: e.setBreadcrumbView,
    setSelectedFolder: e.setSelectedFolder,
    setSelectedTeam: e.setSelectedTeam
  }, `section-${t.id}`));
  let o = !!(e.selectedTeam && e.isOrgContext);
  let l = useSubscription(DestinationProjectsForTeam, {
    teamId: e.selectedTeam ? e.selectedTeam.id : ''
  }, {
    enabled: o
  });
  let d = l.status === 'loaded' ? getResourceDataOrFallback(l.data.team?.allActiveProjects) : void 0;
  let c = l.status === 'loaded' ? d && d.length === 0 ? jsxs('div', {
    className: Ub,
    children: [renderI18nText('file_browser.file_move.no_projects_in_this_team'), jsx('div', {
      className: cssBuilderInstance.colorTextSecondary.$
    })]
  }) : d?.map(t => jsx(_$$o, {
    folderId: t.id || '',
    folderName: t.name || '',
    teamName: e.selectedTeam?.name || '',
    checked: !!e.selectedFolder && e.selectedFolder.id === t.id,
    onSelect: () => {
      e.setSelectedFolder({
        id: t.id || '',
        name: t.name || '',
        source: Q.STARRED,
        isConnectedProject: (t.activeProjectResourceConnections?.length ?? 0) > 0
      });
    },
    canEdit: t.canEdit,
    isCurrentFolder: e.currentFolderId === t.id,
    isConnectedProject: (t.activeProjectResourceConnections?.length ?? 0) > 0
  }, `all-folder-${t.id}}`)) : jsx('div', {
    className: cssBuilderInstance.h300.$,
    children: jsx(LoadingOverlay, {})
  });
  return i.length === 0 ? jsx('div', {
    className: Al,
    children: renderI18nText('file_browser.file_move.no_projects_yet')
  }) : jsxs('div', {
    children: [!o && jsx(_$$P, {
      width: 400,
      height: 300,
      children: r
    }), o && jsx(_$$P, {
      width: 400,
      height: 300,
      children: c
    })]
  });
}
function ev(e) {
  let t = jsx(_$$B, {
    onShouldFetchNextPage: noop,
    children: e.teamsList.map(t => jsx(_$$P2, {
      teamId: t.id,
      teamName: t.name,
      onSelect: () => {
        e.setSelectedTeam(t.id, t.name);
        e.setBreadcrumbView(X.STARRED_TEAM);
      }
    }, `all-team-${t.id}}`))
  });
  return jsx('div', {
    children: jsx(_$$P, {
      width: 400,
      height: 300,
      children: t
    })
  });
}
function eC(e) {
  let t = useDispatch();
  let {
    onTeamCreate
  } = e;
  let n = useCallback(() => {
    t(showModalHandler({
      type: eT,
      data: {
        onTeamCreate
      }
    }));
  }, [t, onTeamCreate]);
  return jsxs(nR, {
    onClick: n,
    className: rJ,
    children: [jsx(SvgComponent, {
      svg: _$$A2,
      className: Xv
    }), renderI18nText('file_browser.file_move.new_team')]
  });
}
let eT = registerModal(e => {
  let t = useDispatch();
  let [i, n] = useState('');
  let r = useCallback(() => {
    t(popModalStack());
  }, [t]);
  let {
    onTeamCreate
  } = e;
  let d = useCallback(e => {
    onTeamCreate({
      id: e.id,
      name: e.name
    });
  }, [onTeamCreate]);
  let c = useCallback(() => {
    t(KQ({
      teamName: i,
      orgAccess: FAccessLevelType.PUBLIC,
      dontRedirect: !0,
      onSuccessNoRedirect: d,
      ignoreCurrentPlan: !0
    }));
    t(popModalStack());
  }, [t, i, d]);
  return jsx(HeaderModal, {
    title: jsx('div', {
      className: cssBuilderInstance.alignCenter.flex.ml8.$,
      children: renderI18nText('file_browser.file_move.create_team')
    }),
    onClose: r,
    maxWidth: 480,
    minWidth: 480,
    fixedTop: !0,
    children: jsxs('div', {
      className: rx,
      children: [jsx('div', {
        className: bV,
        children: getI18nString('team_creation.team_name_label')
      }), jsx(BigTextInputForwardRef, {
        className: _Z,
        onChange: e => n(e.target.value),
        value: i,
        autoFocus: !0,
        required: !0,
        maxLength: teamConstant,
        minLength: 1,
        placeholder: getI18nString('team_creation.writer_s_guild_placeholder')
      }), jsxs('div', {
        className: Uo,
        children: [jsx(nR, {
          onClick: r,
          children: renderI18nText('project_creation.cancel')
        }), jsx($$, {
          disabled: !i,
          onClick: c,
          children: renderI18nText('team_creation.create_team')
        })]
      })]
    })
  });
}, 'FileMoveTeamCreateModal');
let ek = (e, t) => {
  switch (e) {
    case FProductAccessType.DESIGN:
      return renderI18nText('upgrades.drafts_move.request_body_design_plan_name', {
        planName: t
      });
    case FProductAccessType.WHITEBOARD:
      return renderI18nText('upgrades.drafts_move.request_body_figjam_plan_name', {
        planName: t
      });
    case FProductAccessType.SLIDES:
      return renderI18nText('upgrades.drafts_move.request_body_slides_plan_name', {
        planName: t
      });
    case FProductAccessType.SITES:
      return renderI18nText('upgrades.drafts_move.request_body_sites_plan_name', {
        planName: t
      });
    case FProductAccessType.FIGMAKE:
      return renderI18nText('upgrades.drafts_move.request_body_figmake_plan_name', {
        planName: t
      });
    case FProductAccessType.DEV_MODE:
    case FProductAccessType.COOPER:
      return null;
  }
};
let eR = registerModal(e => {
  let t = useDispatch();
  let i = _$$s2();
  let n = isProrationBillingEnabledForCurrentPlan();
  let {
    files,
    repos,
    onSuccessCallback,
    bannerToDisplay,
    shouldRedirectToSelectedFolder,
    restoreFiles = !1
  } = e;
  let ey = files[0] || repos[0];
  let eI = !!ey.trashed_at && restoreFiles;
  let eE = new Set();
  files.forEach(e => {
    eE.add(e.folder_id || '');
  });
  repos.forEach(e => {
    eE.add(e.folder_id);
  });
  let ex = eE.size === 1 ? eE.values().next().value : '';
  let [eS, ew] = useState(null);
  let [eT, eN] = useState(null);
  let [eP, eO] = useState(Q.SUGGESTED);
  let [eD, eL] = useState(X.BASE_TAB);
  let [eF, eM] = useState(!1);
  let [ej, eU] = useState(null);
  let eB = useRef(null);
  let [eV] = useDebounce(ej, 400);
  let [eG, ez] = useState(null);
  let [eH, eW] = useState(null);
  let [eK, eY] = useState(!1);
  let eq = _$$h.useTrackingContext({
    trigger: UpsellModalType.FILE_MOVE_MODAL
  });
  let e$ = useCallback(e => {
    (ew(null), e) ? eW([...(e ? e.filter(e => e.model.is_editable) : []), ...(e ? e.filter(e => !e.model.is_editable) : [])]) : eW(null);
  }, []);
  let eZ = useCallback(e => {
    eU(e);
    eB.current = e;
  }, []);
  let eX = useCallback(e => {
    e.target instanceof HTMLInputElement && eZ(e.target.value);
  }, [eZ]);
  let eQ = useCallback(() => {
    eZ(null);
    e$(null);
  }, [e$, eZ]);
  useEffect(() => {
    if (!eV) {
      e$(null);
      return;
    }
    eM(!0);
    searchAPIHandler.getFileMoveSearchResults({
      query: eV,
      orgId: e.orgId ?? null,
      maxNumResults: 50
    }).then(e => {
      eB.current === eV && (e$(e.data.meta.results), ez(eV));
    }).finally(() => {
      eM(!1);
    });
  }, [eV, e.orgId, e$]);
  let [eJ, e0] = useState(null);
  useEffect(() => {
    en.getFileMoveSuggestedResults({
      orgId: e.orgId ?? null
    }).then(e => e0(e.data.meta.filter(e => e.is_editable && e.id !== ex)));
  }, [ex, e.orgId]);
  let e1 = eJ === null ? jsx('div', {
    className: cssBuilderInstance.h300.$,
    children: jsx(LoadingOverlay, {})
  }) : eJ.length === 0 ? jsx('div', {
    className: Al,
    children: renderI18nText('file_browser.file_move.no_suggestions_yet_try_moving_your_files', {
      lineBreak: jsx(Fragment, {
        children: jsx('br', {})
      })
    })
  }) : jsx(_$$P, {
    width: 400,
    height: 300,
    children: jsx('div', {
      className: Er,
      children: eJ.map(e => jsx(_$$o, {
        folderId: e.id || '',
        folderName: e.name || getI18nString('file_browser.file_move.drafts'),
        teamName: e.team_name || '',
        checked: !!eS && eS.id === e.id,
        onSelect: () => {
          ew({
            id: e.id || '',
            name: e.name || '',
            isConnectedProject: e.is_connected_project,
            source: Q.SUGGESTED
          });
        },
        canEdit: e.is_editable,
        isCurrentFolder: e.id === ex,
        isConnectedProject: e.is_connected_project
      }, `suggested-folder-${e.id}`))
    })
  });
  let e2 = ey?.parent_org_id ?? ey?.team_id;
  let e5 = !!(e2 && e2 === ey?.parent_org_id);
  let {
    status,
    teams,
    fetchMore
  } = Ki({
    searchQuery: '',
    filters: {
      workspaceFilter: null,
      orgAccessFilter: null,
      orphanedTeamFilter: !1,
      teamMembershipFilter: null,
      discoverabilityFilter: null
    },
    sortConfig: {
      columnName: TeamPropertyKey.NAME,
      isReversed: !1
    },
    membersMap: {},
    firstPageSize: 50,
    isEndUserSurface: !0,
    enabled: e5,
    orgId: e2 ?? ''
  });
  let e7 = useMemo(() => status === APILoadingStatus.SUCCESS ? teams.map(e => ({
    id: e.id || '',
    name: e.name || ''
  })) : [], [status, teams]);
  let [e8, e9] = useState(null);
  let [te, tt] = useState(null);
  let [ti, tn] = useState(null);
  let tr = useCallback(async () => {
    let e = await UserAPIHandlers.getPlans();
    e9(e.data.meta.teams);
    tt(e.data.meta.orgs);
    tn(e.data.meta.plans);
    e5 || e.data.meta.teams.length !== 1 || eN({
      id: e.data.meta.teams[0].id,
      name: e.data.meta.teams[0].name
    });
  }, [e5]);
  useEffect(() => {
    tr();
  }, [tr]);
  let ta = e8 ? e8.sort((e, t) => e.name.localeCompare(t.name)).map(e => ({
    id: e.id || '',
    name: e.name || ''
  })) : [];
  let ts = e5 ? te?.find(e => e.id === e2) : e8?.find(e => e.id === e2);
  let to = ts?.name || '';
  let tl = e5 && ts;
  let td = _$$Q2({
    currentOrgId: e5 ? e2 : null,
    currentTeamId: e5 ? null : eT?.id ?? null
  });
  let tc = useMemo(() => e5 || td.status !== 'loaded' || eT === null ? null : TF(td.data.currentUser, eT.id, ti), [e5, td, eT, ti]);
  let tu = useMemo(() => {
    if (td.status !== 'loaded') return null;
    let e = e5 ? td.data.currentUser.favoritedProjects : tc?.favoritedProjects;
    return {
      fileBrowserPreferences: e5 ? td.data.currentUser.baseOrgUser?.fileBrowserPreferences : td.data.currentUser.currentTeamUser?.fileBrowserPreferences,
      favoritedProjects: e,
      favoritedTeams: e5 ? td.data.currentUser.favoritedTeams : [],
      userSidebarSections: getResourceDataOrFallback(td.data.currentUser.userSidebarSections) || null
    };
  }, [td, e5, tc]);
  let tp = filterNotNullish(Object.values(Q).map(e => jsx(_$$r2, {
    tab: e,
    tabName: getI18nString(`file_browser.file_move.tab_name_${e.toLowerCase()}`),
    onClick: () => {
      eO(e);
      eL(X.BASE_TAB);
      ew(null);
    },
    isSelected: eP === e
  }, e)));
  let tm = !e5 && ta.length > 1;
  let th = useSubscription(MoveFileDestination, {
    projectId: eS?.id
  }, {
    enabled: !!eS?.id
  });
  let tg = th?.status === 'loaded' ? th.data.project : null;
  let tf = useSubscription(MoveFileCurrentProject, {
    projectId: eS?.id
  }, {
    enabled: !!eS?.id
  });
  let t_ = tf?.status === 'loaded' ? getResourceDataOrFallback(tf.data.project) : null;
  let tA = jB({
    files,
    repos,
    destinationFolderId: eS?.id ?? null,
    isDestinationDrafts: t_?.path === ''
  });
  let {
    licenseType,
    destinationPlan,
    destinationPlanUser,
    shouldShowCurf,
    getIsEligibleForProvisionalAccess,
    cannotUpgradeDisableAction,
    loading,
    requiresUpgrade
  } = tA ?? {};
  let tC = xd(tA);
  let tT = ey.editor_type === FFileType.FIGMAKE && requiresUpgrade && !getFeatureFlags().bake_monetization_plan;
  let tk = useCallback(() => {
    t(hideSpecificModal({
      type: eR.type
    }));
  }, [t]);
  let tR = useCallback(({
    folderName: e,
    fileCount: i,
    folderIdToOpen: n
  }) => {
    let r = () => {
      n && t(selectViewAction({
        view: 'folder',
        folderId: n
      }));
    };
    eY(!1);
    eI ? t(VisualBellActions.enqueue({
      message: getI18nString('visual_bell.files_restored_to_folder', {
        fileCount: i
      }),
      button: {
        text: getI18nString('visual_bell.show_in_toast', {
          destination: e
        }),
        action: r
      }
    })) : (t(VisualBellActions.enqueue({
      message: getI18nString('visual_bell.files_moved_to_folder', {
        fileCount: i,
        folderName: e
      })
    })), r());
    onSuccessCallback && onSuccessCallback(e);
    tk();
  }, [t, tk, onSuccessCallback, eI]);
  let tN = getPrefetchPlanKeyHandler();
  let tP = useCallback(() => {
    if (!tg || tg.id !== eS?.id) {
      t(VisualBellActions.enqueue({
        message: getI18nString('visual_bell.error_finding_destination_folder'),
        error: !0
      }));
      return;
    }
    let e = tg.name || getI18nString('file_browser.file_move.drafts');
    t(_$$z({
      files,
      repos,
      folder: tg,
      team: tg.team,
      onError: tk,
      onFinishCallback: async () => {
        await tN(tg);
        tR({
          folderName: e,
          fileCount: files.length + repos.length,
          folderIdToOpen: shouldRedirectToSelectedFolder || eI ? tg.id : void 0
        });
      },
      fromFileModal: !0,
      restoreFiles: eI,
      draftsMoveData: tA || null
    }));
    trackEventAnalytics('file_move_modal_v2_submit', {
      folderId: tg.id,
      source: eS?.source,
      fileKeys: files.map(e => e.key),
      repoIds: repos.map(e => e.id)
    });
    eY(!0);
  }, [tg, eS?.id, eS?.source, t, files, repos, tk, eI, tA, tN, tR, shouldRedirectToSelectedFolder]);
  let tO = useCallback(e => {
    tr();
    eN(e);
    eL(X.ALL_TEAM);
  }, [tr]);
  let tD = e.files.length + e.repos.length;
  let tL = files.length > 0 ? e.files[0].name : repos.length > 0 ? e.repos[0].name : '';
  let tF = tD === 1 ? tL : `${tD} files`;
  useWebLoggerTimerEffect(eJ !== null, e => {
    trackEventAnalytics('file_move_modal_v2_latency', {
      latency_ms: e
    }, {
      forwardToDatadog: !0
    });
  });
  let tM = !tA.isAdminSelfUpgrade && tA?.requiresManualUpgrade;
  let tj = !eS || eS.id === ex || eS.id !== tg?.id || eK || loading || tM || cannotUpgradeDisableAction || tT;
  return jsx(TrackingProvider, {
    name: _$$e.FILE_MOVE_MODAL,
    properties: eq,
    children: jsx(TabLoop, {
      children: jsxs(HeaderModal, {
        title: jsxs('div', {
          className: cssBuilderInstance.alignCenter.flex.ml8.maxW350.$,
          children: [jsx('span', {
            className: cssBuilderInstance.ellipsis.noWrap.overflowHidden.$,
            children: eI ? renderI18nText('file_browser.file_move.modal_header_restore_file', {
              fileName: tF
            }) : renderI18nText('file_browser.file_move.modal_header_move_file', {
              fileName: tF
            })
          }), tl && jsx(Badge, {
            color: BadgeColor.DEFAULT,
            text: to,
            className: cssBuilderInstance.ml6.mr0.noWrap.flex.$,
            dataTooltipType: KindEnum.TEXT,
            dataTooltip: getI18nString('file_browser.file_move.files_can_only_be_moved_within_the_same_organization'),
            dataTooltipShowBelow: !0
          })]
        }),
        onClose: tk,
        maxWidth: 400,
        minWidth: 400,
        disableClickOutsideToHide: !0,
        fixedTop: !0,
        children: [eS?.isConnectedProject && jsx(BannerInsetModal, {
          variant: 'default',
          children: jsx(BannerMessage, {
            children: getI18nString('resource_connection.when_you_move_files_everyone_in_the_connected_project_can_access_them')
          })
        }), bannerToDisplay && jsx('div', {
          className: cssBuilderInstance.mt8.mx8.mb4.$,
          children: bannerToDisplay
        }), eI ? jsx(TrackingProvider, {
          name: 'Restore File From Trashed Project Banner',
          children: jsx('div', {
            className: cssBuilderInstance.pb2.px8.$,
            children: jsx(_$$_, {
              dataTestId: 'viewer-upgrade-banner',
              color: _$$S.INFORMATION,
              text: jsxs(Fragment, {
                children: [jsx('p', {
                  className: cssBuilderInstance.fontSemiBold.$,
                  children: renderI18nText('file_browser.file_move.file_belongs_to_trashed_project_banner_title')
                }), jsx('p', {
                  children: renderI18nText('file_browser.file_move.file_belongs_to_trashed_project_banner_text')
                })]
              })
            })
          })
        }) : null, jsx('div', {
          className: KF,
          children: jsxs('div', {
            className: Zg,
            children: [jsx(In, {
              icon: 'search-32',
              fill: 'secondary',
              ariaHidden: !0
            }), jsx(LazyInputForwardRef, {
              'className': Rt,
              'autoFocus': !0,
              'onChange': eX,
              'onMouseDown': e => e.stopPropagation(),
              'placeholder': getI18nString('file_browser.file_move.search_placeholder'),
              'value': ej ?? '',
              'spellCheck': 'false',
              'aria-label': getI18nString('file_browser.file_move.search_placeholder')
            }), !!ej && jsx('div', {
              className: mt,
              children: jsx(IconButton, {
                'onClick': eQ,
                'aria-label': getI18nString('search.search_bar.clear'),
                'children': jsx(In, {
                  icon: 'x-16',
                  fill: 'secondary'
                })
              })
            })]
          })
        }), jsxs('div', {
          children: [!eH && !eF && jsxs(Fragment, {
            children: [jsxs('div', {
              className: _$$eb,
              children: [eD === X.BASE_TAB && jsx(_$$f2, {
                tabs: tp,
                height: 24
              }), eD !== X.BASE_TAB && jsxs('div', {
                className: Yf,
                children: [jsx('button', {
                  className: BY,
                  onClick: () => {
                    eL(X.BASE_TAB);
                    ew(null);
                    (tm || e5) && eN(null);
                  },
                  children: eP
                }), jsx(TextWithTruncation, {
                  children: '/'
                }), jsx('div', {
                  className: cssBuilderInstance.ml6.mr6.ellipsis.noWrap.overflowHidden.$,
                  children: eT?.name
                })]
              })]
            }), eP === Q.SUGGESTED ? e1 : eP === Q.STARRED ? td.status === 'loading' ? jsx('div', {
              className: cssBuilderInstance.h300.$,
              children: jsx(LoadingOverlay, {})
            }) : tm && eT === null ? jsx(ev, {
              teamsList: ta,
              setSelectedTeam: (e, t) => {
                eN({
                  id: e,
                  name: t
                });
              },
              setBreadcrumbView: eL
            }) : tu ? jsx(eb, {
              selectedFolder: eS,
              setSelectedFolder: e => ew(e),
              selectedTeam: eT,
              setSelectedTeam: (e, t) => {
                eN({
                  id: e,
                  name: t
                });
              },
              isOrgContext: e5,
              breadcrumbView: eD,
              setBreadcrumbView: eL,
              currentFolderId: ex,
              ...tu
            }) : null : eP === Q.ALL ? jsx(eA, {
              breadcrumbView: eD,
              currentFolderId: ex,
              fetchMore: e5 ? fetchMore : () => {},
              isOrgContext: e5,
              planId: e2,
              selectedFolder: eS,
              selectedTeam: eT,
              setBreadcrumbView: eL,
              setSelectedFolder: e => ew(e),
              setSelectedTeam: (e, t) => {
                eN({
                  id: e,
                  name: t
                });
              },
              teamsList: e5 ? e7 : ta
            }) : void 0]
          }), (eH || eF) && jsx(_$$P, {
            width: 400,
            height: 346,
            children: eF ? jsx('div', {
              className: cssBuilderInstance.h300.$,
              children: jsx(LoadingOverlay, {})
            }) : jsxs('div', {
              children: [eH && eH.length === 0 && jsxs('div', {
                className: Al,
                children: [renderI18nText('file_browser.file_move.no_project_or_team_results_matching_query'), jsx('br', {}), jsx('span', {
                  className: cssBuilderInstance.fontBold.ml2.$,
                  children: ej || ''
                })]
              }), jsx('div', {
                className: Er,
                children: eH && eH.map(e => jsx(_$$o, {
                  canEdit: !!e.model.is_editable,
                  checked: !!eS && eS.id === e.model.id,
                  fileCount: e.file_count,
                  folderId: e.model.id || '',
                  folderName: jsx(HighlightedText, {
                    text: e.model.name,
                    query: eG ?? '',
                    highlightFontWeight: 550
                  }),
                  isConnectedProject: e.model.is_connected_project ?? void 0,
                  isCurrentFolder: e.model.id === ex,
                  onSelect: () => {
                    ew({
                      id: e.model.id || '',
                      name: e.model.name || '',
                      source: 'search',
                      isConnectedProject: !!e.model.is_connected_project
                    });
                  },
                  teamName: e.model.team_name ? jsx(HighlightedText, {
                    text: e.model.team_name,
                    query: eG ?? '',
                    highlightFontWeight: 550
                  }) : ''
                }, `search-folder-${e.model.id}}`))
              })]
            })
          })]
        }), (() => {
          let e = destinationPlan?.key.parentId;
          if (!licenseType || !e || tT) return null;
          let i = getMinimumBundle(licenseType);
          if (!i) return null;
          let r = null;
          let s = null;
          let o = null;
          switch (tC) {
            case LU.ADMIN_SELF_UPGRADE:
              let l = getUpgradeMessage(licenseType, to);
              if (!l) break;
              let d = n ? renderI18nText('upgrades.drafts_move.admin_self_upgrade_body.proration_billing_mechanics') : renderI18nText('upgrades.drafts_move.admin_self_upgrade_body.legacy_billing_mechanics');
              r = l.header;
              s = jsxs(Fragment, {
                children: [l.body, ' ', d]
              });
              break;
            case LU.PROVISIONAL_ACCESS:
              s = C8(licenseType, shouldShowCurf);
              shouldShowCurf && (o = jsx('button', {
                className: cssBuilderInstance.colorTextBrand.bgTransparent.cursorPointer.$,
                onClick: () => {
                  destinationPlanUser && fm({
                    licenseType,
                    dispatch: t,
                    entryPoint: UISection.FileMoveUpsell,
                    plan: destinationPlan,
                    planUser: destinationPlanUser,
                    fileKey: ey.key,
                    folderId: eS?.id ?? null,
                    onRequestWithProvisionalAccess: () => {},
                    getIsEligibleForProvisionalAccess
                  })({});
                },
                children: renderI18nText('fullscreen.toolbar_banner.provisional_access.curf.cta')
              }));
              break;
            case LU.REQUESTED:
              r = renderI18nText('upgrades.drafts_move.request_sent_header');
              s = renderI18nText('upgrades.drafts_move.request_sent_body');
              break;
            case LU.CAN_AUTO_UPGRADE:
              r = renderI18nText('upgrades.drafts_move.auto_upgrade_header');
              s = renderI18nText('upgrades.drafts_move.auto_upgrade_body', {
                planName: destinationPlan?.name
              });
              break;
            case LU.CANNOT_UPGRADE_DISABLE:
              r = renderI18nText('upgrades.drafts_move.cannot_upgrade_header');
              s = renderI18nText('upgrades.drafts_move.cannot_upgrade_body');
              break;
            case LU.REQUEST:
              r = renderI18nText('upgrades.drafts_move.request_header');
              s = ek(licenseType, destinationPlan?.name || '');
              let c = () => {
                destinationPlanUser?.id && destinationPlan.key && destinationPlan.key.type === FOrganizationLevelType.ORG ? shouldShowCurf ? fm({
                  licenseType,
                  dispatch: t,
                  entryPoint: UISection.FileMoveUpsell,
                  plan: destinationPlan,
                  planUser: destinationPlanUser,
                  fileKey: ey.key,
                  folderId: eS?.id ?? null,
                  onRequestWithProvisionalAccess: () => {},
                  getIsEligibleForProvisionalAccess
                })({}) : t(requestOrgAccountTypeAction({
                  orgId: e,
                  entryPoint: UISection.FileMoveUpsell,
                  licenseType,
                  seatTypeKey: i,
                  fileKey: ey.key,
                  suppressVisualBell: !0,
                  folderId: eS?.id
                })) : destinationPlan.key && destinationPlan.key.type === FOrganizationLevelType.TEAM && t(requestUpgrade({
                  teamId: e,
                  licenseType,
                  seatTypeKey: i,
                  fileKey: ey.key,
                  entryPoint: UISection.FileMoveUpsell,
                  hideSuccessMessage: !0,
                  folderId: eS?.id
                }));
              };
              o = jsx('button', {
                className: cssBuilderInstance.colorTextBrand.bgTransparent.cursorPointer.$,
                onClick: () => {
                  c();
                },
                children: shouldShowCurf ? renderI18nText('fullscreen.toolbar_banner.provisional_access.curf.cta') : renderI18nText('upgrades.request_access')
              });
          }
          return s === null ? null : jsx('div', {
            className: cssBuilderInstance.p8.$,
            children: jsx(_$$_, {
              color: _$$S.INFORMATION,
              padding: 8,
              text: jsxs(Fragment, {
                children: [r && jsx('p', {
                  className: cssBuilderInstance.fontSemiBold.$,
                  children: r
                }), jsx('p', {
                  children: s
                }), o]
              })
            })
          });
        })(), i && (tC && t_ && !hasRootPathOptional(t_) && files.some(e => (e.editor_type === FFileType.SITES || e.editor_type === FFileType.FIGMAKE) && e.is_published_site && !e.parent_org_id && e.team_id !== t_.teamId) ? jsx('div', {
          className: cssBuilderInstance.p8.$,
          children: jsx(_$$_, {
            padding: 8,
            color: _$$S.WARNING,
            text: jsx('p', {
              children: renderI18nText('file_browser.file_move.sites_unpublished_on_file_move_warning')
            })
          })
        }) : null), jsxs('div', {
          className: qr,
          children: [eP === Q.ALL && eD === X.BASE_TAB && !e.orgId && jsx(eC, {
            onTeamCreate: tO
          }), jsx(nR, {
            onClick: tk,
            children: renderI18nText('modal.cancel')
          }), jsx(vd, {
            disabled: tj,
            onClick: tP,
            children: eK ? jsxs(Fragment, {
              children: [jsx(LoadingSpinner, {
                size: 'small',
                shouldMatchTextColor: !0
              }), jsx('div', {
                className: cssBuilderInstance.ml6.$,
                children: renderI18nText('file_browser.file_move.moving')
              })]
            }) : eI ? renderI18nText('file_browser.file_move.restore') : renderI18nText('file_browser.file_move.move')
          })]
        })]
      })
    })
  });
}, 'FileMoveModalV2');
let eU = registerModal(e => {
  let t = useDispatch();
  let i = useCallback(() => {
    t(hideModal());
  }, [t]);
  let n = useSubscription(ProjectNameForFile, {
    fileKey: e.fileKey
  });
  if (n.status === 'loading') return jsx(LoadingOverlay, {});
  if (n.status === 'errors') return null;
  let r = n.data?.file?.folderOwnerRole?.user?.handle ?? getI18nString('file_browser.file_move.another_user');
  let l = e.inDrafts ? getI18nString('file_browser.file_move.users_drafts', {
    userHandle: r
  }) : n.data?.file?.project?.path ?? getI18nString('file_browser.file_move.users_folder', {
    userHandle: r
  });
  let d = jsxs('div', {
    className: cssBuilderInstance.fontMedium.flex.columnGap2.$,
    children: [e.inDrafts ? jsx(_$$A3, {}) : jsx(_$$x, {}), l]
  });
  return jsxs(HeaderModal, {
    title: getI18nString('file_browser.file_move.modal_header_move_file', {
      fileName: e.fileName
    }),
    onClose: i,
    children: [jsxs('div', {
      className: IS,
      children: [jsx('div', {
        className: cssBuilderInstance.flex.columnGap4.$,
        children: renderI18nText('file_browser.file_move.current_location_project_name', {
          projectName: d
        })
      }), jsx('div', {
        children: e.inDrafts ? getI18nString('file_browser.file_move.you_cant_move_files_that_are_in_others_drafts') : jsxs(Fragment, {
          children: [renderI18nText('file_browser.file_move.you_need_edit_access_to_project_name_to_move_this_file', {
            projectName: jsx('span', {
              className: cssBuilderInstance.fontMedium.$,
              children: l
            })
          }), ' ', jsx(SecureLink, {
            href: 'https://help.figma.com/hc/articles/360038511573',
            target: '_blank',
            trusted: !0,
            children: getI18nString('general.learn_more')
          })]
        })
      })]
    }), jsx('div', {
      className: qr,
      children: jsx($$, {
        onClick: i,
        children: getI18nString('file_browser.file_move.done')
      })
    })]
  });
}, 'FileMoveNoFolderEditModal');
function eB(e, t, i, a, s, o, l = !1) {
  if (!getFeatureFlags().ps_draft_move_modal || e.team_id || e.parent_org_id || t?.parent_org_id) {
    let n = e?.parent_org_id ?? t?.parent_org_id ?? void 0;
    let r = t ? null : e;
    i(showModalHandler({
      type: eR,
      data: {
        files: r ? [r] : [],
        repos: t ? [t] : [],
        orgId: n,
        onSuccessCallback: a?.callback,
        bannerToDisplay: s,
        shouldRedirectToSelectedFolder: o,
        restoreFiles: l
      }
    }));
  } else {
    i(showModalHandler({
      type: _$$K2,
      data: {
        reposToMove: t ? [t] : [],
        draftsToMove: e && !t ? [fileEntityDataMapper.toLiveGraph(e)] : [],
        onMoveSuccess: a?.handlesVisualBell ? a.callback : void 0,
        onClose: () => i(hideModal()),
        setSynchronousFileTransferInProgress: noop
      }
    }));
  }
}
export function $$eV0(e, t, i, n, r, a, s, o = !1) {
  if (!e) return;
  if (!a || a.canMove) {
    eB(e, t, i, n, r, s, o);
    return;
  }
  let {
    draftsMoveData,
    hasConnectedPlanUserInOrg,
    inDrafts,
    canMoveWithReasons
  } = a;
  if (canMoveWithReasons && !canMoveWithReasons.result && (canMoveWithReasons.publicDenyReasons.includes(FPermissionDenialReason.FILE_DENY_CONNECTED_GUEST_CAN_MOVE) || canMoveWithReasons.publicDenyReasons.includes(FPermissionDenialReason.FILE_REPO_DENY_CONNECTED_GUEST_CAN_MOVE))) {
    i(showModalHandler({
      type: _$$v(),
      data: {
        fileKey: e.key
      }
    }));
    return;
  }
  if (!draftsMoveData.requiresUpgrade || draftsMoveData.destinationPlan?.type !== FOrganizationLevelType.ORG) {
    let p;
    let m;
    p = e.name;
    m = e.key;
    i(showModalHandler({
      type: eU,
      data: {
        fileName: p,
        inDrafts: a.inDrafts,
        fileKey: m
      }
    }));
    return;
  }
  let h = !!inDrafts && hasConnectedPlanUserInOrg;
  if (draftsMoveData.requiresUpgrade && draftsMoveData.isAdminSelfUpgrade && !draftsMoveData.shouldShowCurf && !draftsMoveData.shouldShowScim && !h) {
    Y9({
      licenseType: getProductAccessTypeOrDefault(e.editor_type),
      dispatch: i,
      upgradePathway: _$$J.ADMIN_AUTO_PATHWAY,
      entryPoint: UISection.FileMoveUpsell,
      upgradeReason: _$$i2.RESOURCE_MOVED_FROM_DRAFTS,
      plan: draftsMoveData.destinationPlan ?? null,
      onUpgrade: () => {
        eB(e, t, i, n, r, s, o);
      },
      fileKey: e.key,
      skipConfirmationModal: !1,
      folderId: null
    })({});
    return;
  }
  if (draftsMoveData.requiresManualUpgrade && !h) {
    fm({
      licenseType: getProductAccessTypeOrDefault(e.editor_type),
      dispatch: i,
      entryPoint: UISection.FileMoveUpsell,
      plan: draftsMoveData.destinationPlan ?? null,
      planUser: draftsMoveData.destinationPlanUser ?? null,
      fileKey: e.key,
      onRequestWithProvisionalAccess: () => {
        eB(e, t, i, n, r, s, o);
      },
      folderId: null,
      getIsEligibleForProvisionalAccess: draftsMoveData.getIsEligibleForProvisionalAccess || (() => !1)
    })({});
    return;
  }
  if (draftsMoveData.canAutoUpgrade && !h) {
    Y9({
      licenseType: getProductAccessTypeOrDefault(e.editor_type),
      dispatch: i,
      upgradePathway: _$$J.AUTO_PATHWAY,
      entryPoint: UISection.FileMoveUpsell,
      upgradeReason: _$$i2.RESOURCE_MOVED_FROM_DRAFTS,
      plan: draftsMoveData.destinationPlan ?? null,
      onUpgrade: () => {
        eB(e, t, i, n, r, s, o);
      },
      fileKey: e.key,
      skipConfirmationModal: !1,
      folderId: null
    })({});
    return;
  }
  eB(e, t, i, n, r, s, o);
}
export function $$eG1(e, t, i, n, r = !1) {
  if (!e && !t) return;
  let {
    canMove,
    orgId
  } = function (e, t) {
    let i = new Set();
    let n = new Set();
    return (e.forEach(e => {
      e.parent_org_id ? (i.add('org'), n.add(e.parent_org_id)) : e.team_id && (i.add('team'), n.add(e.team_id));
    }), t.forEach(e => {
      e.parent_org_id ? (i.add('org'), n.add(e.parent_org_id)) : e.team_id && (i.add('team'), n.add(e.team_id));
    }), i.size !== 1 || i.has('org') && n.size > 1) ? {
      canMove: !1,
      orgId: ''
    } : i.has('org') ? {
      canMove: !0,
      orgId: n.values().next().value
    } : {
      canMove: !0,
      orgId: ''
    };
  }(e, t);
  canMove && i(showModalHandler({
    type: eR,
    data: {
      files: e,
      repos: t,
      orgId,
      shouldRedirectToSelectedFolder: n,
      restoreFiles: r
    }
  }));
}
export const h = $$eV0;
export const O = $$eG1;