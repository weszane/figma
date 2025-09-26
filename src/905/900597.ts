import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { buildUploadUrl } from "../figma_app/169182";
import { WAFImage } from "../905/675859";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { C as _$$C, wR } from "../905/346715";
import { hideModal, showModalHandler } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { registerModal } from "../905/102752";
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { IconButton } from "../905/443068";
import { useDebounce } from 'use-debounce';
import { APILoadingStatus } from "../905/520829";
import { LazyInputForwardRef } from "../905/408237";
import { LoadingOverlay } from "../figma_app/858013";
import { P as _$$P } from "../905/347284";
import { In } from "../905/672640";
import { Ki } from "../figma_app/328188";
import { o as _$$o } from "../905/268099";
import { HighlightedText } from "../905/287602";
import { FOrganizationLevelType } from "../figma_app/191312";
import { useTeamPlanFeatures } from "../figma_app/465071";
import { TeamPropertyKey } from "../figma_app/713624";
import { c as _$$c } from "../905/32166";
import { ButtonPrimitive } from "../905/632989";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { TextWithTruncation } from "../905/984674";
import { FileMoveButton } from "../905/433182";
import { P as _$$P2 } from "../905/688136";
import { B as _$$B } from "../905/55104";
import { DestinationProjectsForTeam } from "../figma_app/43951";
import { Yf, BY, KF, Zg, Rt, mt, Al } from "../905/615608";
import { CE, oA as _$$oA, Cr, kA, C2, FJ } from "../figma_app/397283";
function G({
  currentPlan: e,
  selectedFolder: t,
  setSelectedFolder: i,
  fetchMore: r,
  orgTeamsList: a
}) {
  let s = e.type === FOrganizationLevelType.ORG;
  let [o, l] = useState(s ? null : {
    id: e.key.parentId || "",
    name: e.name || ""
  });
  let d = jsx("div", {
    className: cssBuilderInstance.flex.flexColumn.itemsCenter.py2.$,
    children: jsx("div", {
      className: cssBuilderInstance.colorBorder.bSolid.bt1.wFull.$
    })
  });
  let c = useSubscription(DestinationProjectsForTeam, {
    teamId: o ? o.id : ""
  }, {
    enabled: !!o
  });
  let u = useMemo(() => c.data ? getResourceDataOrFallback(c.data.team?.allActiveProjects) : void 0, [c]);
  let h = "loaded" !== c.status;
  let g = u?.length === 0 ? jsx("div", {
    className: cssBuilderInstance.h300.flex.justifyCenter.itemsCenter.colorTextSecondary.$,
    children: renderI18nText("file_browser.file_move.no_projects_in_this_team")
  }) : u?.map(e => jsx("div", {
    className: cssBuilderInstance.my6.wFull.$,
    children: jsx(_$$o, {
      folderId: e.id || "",
      folderName: e.name || "",
      teamName: o?.name || "",
      checked: !!t && t.id === e.id,
      onSelect: () => {
        i({
          id: e.id || "",
          path: e.path || "",
          teamId: e.teamId || ""
        });
      },
      isConnectedProject: !!e.activeProjectResourceConnections?.length,
      hasPendingConnectionInvite: !!e.pendingResourceConnectionInvite,
      isCurrentFolder: !1,
      canDisableForConnectedProject: !0
    })
  }, `team-folder-${e.id}}`));
  let f = jsx(_$$B, {
    onShouldFetchNextPage: r || (() => {}),
    children: a?.map(e => jsx(_$$P2, {
      teamId: e.id,
      teamName: e.name,
      onSelect: () => {
        l({
          id: e.id,
          name: e.name
        });
        i(null);
      }
    }, `all-team-${e.id}}`))
  });
  return jsxs("div", {
    className: cssBuilderInstance.h400.$,
    children: [s && jsxs(Fragment, {
      children: [jsx("div", {
        className: cssBuilderInstance.px12.py8.$,
        children: jsxs("div", {
          className: Yf,
          children: [jsx(ButtonPrimitive, {
            className: BY,
            onClick: () => {
              i(null);
              l(null);
            },
            children: renderI18nText("resource_connection.all_teams")
          }), !!o && jsxs(Fragment, {
            children: [jsx(TextWithTruncation, {
              children: "/"
            }), jsx("div", {
              className: cssBuilderInstance.ml6.mr6.ellipsis.noWrap.overflowHidden.$,
              children: o?.name
            })]
          })]
        })
      }), d]
    }), jsx("div", {
      className: cssBuilderInstance.py8.$,
      children: jsx(_$$P, {
        children: o ? h ? jsx("div", {
          className: cssBuilderInstance.h350.$,
          children: jsx(LoadingOverlay, {})
        }) : jsxs(Fragment, {
          children: [jsx(FileMoveButton, {
            team: c.data?.team,
            setSelectedFolder: (e, t) => {
              i({
                id: e,
                path: t,
                teamId: c.data?.team?.id || ""
              });
            }
          }), g]
        }) : f
      })
    })]
  });
}
let z = registerModal(function (e) {
  let t = useDispatch();
  let i = useCallback(() => {
    t(hideModal());
  }, [t]);
  let d = useModalManager({
    ...e,
    onClose: i
  });
  let [c, u] = useState(null);
  let [_, O] = useState(null);
  let D = useRef(null);
  let [L] = useDebounce(_, 400);
  let [F, M] = useState(null);
  let [j, U] = useState(!1);
  let [B, z] = useState(null);
  let H = useTeamPlanFeatures().unwrapOr(null);
  let W = H?.key.type === FOrganizationLevelType.ORG ? H?.key.parentId : void 0;
  let K = H?.key.type === FOrganizationLevelType.TEAM ? H?.key.parentId : void 0;
  let Y = useCallback(e => {
    if (u(null), e) {
      let t = e => !e.model.is_connected_project && !e.model.has_pending_connection_invite;
      z([...(e.filter(t) || []), ...(e.filter(e => !t(e)) || [])]);
    } else z(null);
  }, []);
  let q = useCallback(e => {
    O(e);
    D.current = e;
  }, []);
  let $ = useCallback(e => {
    e.target instanceof HTMLInputElement && q(e.target.value);
  }, [q]);
  let Z = useCallback(() => {
    q(null);
    Y(null);
  }, [Y, q]);
  useEffect(() => {
    if (!L) {
      Y(null);
      return;
    }
    U(!0);
    _$$c.getFolderSearchResults({
      query: L,
      orgId: W ?? null,
      teamId: K ?? null,
      maxNumResults: 50
    }).then(e => {
      D.current === L && (Y(e.data.meta.results), M(L));
    }).finally(() => {
      U(!1);
    });
  }, [L, W, K, Y]);
  let {
    status,
    teams,
    fetchMore
  } = Ki({
    searchQuery: "",
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
    enabled: !!W,
    orgId: W || ""
  });
  let ee = useMemo(() => {
    if (W) return teams?.map(e => ({
      id: e.id || "",
      name: e.name || ""
    })) ?? [];
  }, [teams, W]);
  let et = useCallback(() => {
    c && H && (i(), t(showModalHandler({
      type: _$$C,
      data: {
        folder: {
          ...c,
          plan: H
        },
        entryPoint: wR.CONNECTED_PROJECT_ADMIN_UI
      }
    })));
  }, [t, c, i, H]);
  let ei = jsx("div", {
    className: KF,
    children: jsxs("div", {
      className: Zg,
      children: [jsx(In, {
        icon: "search-32",
        fill: "secondary"
      }), jsx(LazyInputForwardRef, {
        className: Rt,
        autoFocus: !0,
        onChange: $,
        onMouseDown: e => e.stopPropagation(),
        placeholder: getI18nString("file_browser.file_move.search_placeholder"),
        value: _ ?? "",
        spellCheck: "false"
      }), !!_ && jsx("div", {
        className: mt,
        children: jsx(IconButton, {
          onClick: Z,
          "aria-label": getI18nString("search.search_bar.clear"),
          children: jsx(In, {
            icon: "x-16",
            fill: "secondary"
          })
        })
      })]
    })
  });
  let en = jsx(_$$P, {
    children: jsxs("div", {
      children: [!B?.length && jsxs("div", {
        className: Al,
        children: [renderI18nText("file_browser.file_move.no_project_or_team_results_matching_query"), jsx("br", {}), jsx("span", {
          className: cssBuilderInstance.fontBold.ml2.$,
          children: _ || ""
        })]
      }), B?.map(e => jsx("div", {
        className: cssBuilderInstance.my6.wFull.$,
        children: jsx(_$$o, {
          canDisableForConnectedProject: !0,
          checked: !!c && c.id === e.model.id,
          fileCount: e.file_count,
          folderId: e.model.id || "",
          folderName: jsx(HighlightedText, {
            text: e.model.name,
            query: F ?? "",
            highlightFontWeight: 550
          }),
          hasPendingConnectionInvite: !!e.model.has_pending_connection_invite,
          isConnectedProject: !!e.model.is_connected_project,
          isCurrentFolder: !1,
          onSelect: () => {
            u({
              id: e.model.id || "",
              path: e.model.path || "",
              teamId: e.model.team_id || ""
            });
          },
          teamName: e.model.team_name ? jsx(HighlightedText, {
            text: e.model.team_name,
            query: F ?? "",
            highlightFontWeight: 550
          }) : void 0
        })
      }, `search-folder-${e.model.id}}`))]
    })
  });
  let er = W && status === APILoadingStatus.LOADING || j || !H;
  return jsx(TrackingProvider, {
    name: "Connected Project Select Project Modal",
    children: jsx(ModalRootComponent, {
      manager: d,
      width: "lg",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("resource_connection.select_a_project_to_connect_an_external_team_to")
          })
        }), jsxs(DialogBody, {
          padding: 0,
          children: [ei, jsx("div", {
            className: cssBuilderInstance.h400.$,
            children: er ? jsx("div", {
              className: cssBuilderInstance.hFull.$,
              children: jsx(LoadingOverlay, {})
            }) : B ? en : jsx(G, {
              currentPlan: H,
              selectedFolder: c,
              setSelectedFolder: u,
              orgTeamsList: ee,
              fetchMore
            })
          })]
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx(Button, {
              variant: "secondary",
              onClick: i,
              children: renderI18nText("modal.cancel")
            }), jsx(Button, {
              variant: "primary",
              onClick: et,
              disabled: !c,
              children: renderI18nText("resource_connection.next")
            })]
          })
        })]
      })
    })
  });
}, "ConnectedProjectSelectModal");
export let $$W0 = registerModal(function (e) {
  var t;
  let i = useModalManager(e);
  let _ = useDispatch();
  let A = e.entryPoint === wR.PROJECT_SETTINGS && e.assetTransferRequestWarning;
  return jsx(TrackingProvider, {
    name: "Connected Project Intro Modal",
    children: jsx(ModalRootComponent, {
      manager: i,
      width: "lg",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("resource_connection.connect_an_external_team")
          })
        }), jsxs(DialogBody, {
          padding: 0,
          children: [A && jsx("div", {
            className: cssBuilderInstance.mb12.$,
            children: jsx(_$$_, {
              dataTestId: "resource-connect-warning-banner",
              color: _$$S.WARNING,
              text: renderI18nText("resource_connection.request_modal.asset_transfer_request_will_be_revoked")
            })
          }), jsx(WAFImage, {
            className: CE,
            src: buildUploadUrl("79f17ef7df0c5ed50af97e6c5e98651536c94352"),
            alt: "Connected projects logo"
          }), jsx("div", {
            className: _$$oA,
            children: renderI18nText("resource_connection.connect_an_external_team.intro_description", {
              connectedProject: jsx("span", {
                className: Cr,
                children: renderI18nText("resource_connection.connected_project_link")
              })
            })
          })]
        }), jsx(DialogFooter, {
          children: jsxs("div", {
            className: kA,
            children: [jsx("div", {
              className: C2,
              children: jsx("a", {
                className: C2,
                href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects#h_01JMJDKJFD68CH88F663KG08AJ",
                target: "_blank",
                children: t || renderI18nText("resource_connection.request_modal.learn_more")
              })
            }), jsxs("div", {
              className: FJ,
              children: [jsx(Button, {
                variant: "secondary",
                onClick: e.onClose,
                children: renderI18nText("resource_connection.request_modal.cancel")
              }), jsx(Button, {
                variant: "primary",
                onClick: () => {
                  e.entryPoint === wR.PROJECT_SETTINGS ? _(showModalHandler({
                    type: _$$C,
                    data: {
                      folder: e.folder,
                      entryPoint: wR.PROJECT_SETTINGS
                    }
                  })) : _(showModalHandler({
                    type: z
                  }));
                },
                children: renderI18nText("resource_connection.connect")
              })]
            })]
          })
        })]
      })
    })
  });
}, "ConnectedProjectIntroModal");
export const B = $$W0;