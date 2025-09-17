import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter } from "../figma_app/272243";
import { ButtonPrimitive } from "../905/632989";
import { E as _$$E2 } from "../905/53857";
import { B as _$$B } from "../905/950875";
import u from "classnames";
import { YO } from "../figma_app/672951";
import { useSubscription } from "../figma_app/288654";
import { getAtomMutate } from "../figma_app/566371";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { FlashActions } from "../905/573154";
import { renderI18nText, getI18nString } from "../905/303541";
import { wR } from "../905/346715";
import { y as _$$y } from "../905/76789";
import { Lg, Lq } from "../figma_app/392626";
import { B as _$$B3 } from "../905/900597";
import { IconButton } from "../905/443068";
import { N as _$$N } from "../905/438674";
import { Button } from "../905/521428";
import { C as _$$C } from "../905/520159";
import { Hg, Bs } from "../905/672745";
import { A as _$$A } from "../905/920142";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { VisualBellActions } from "../905/302958";
import { nl, Pf } from "../905/590952";
import { h as _$$h } from "../905/973388";
import { selectViewAction } from "../905/929976";
import { hideModal, popModalStack, showModalHandler } from "../905/156213";
import { TrackingProvider, useTracking } from "../figma_app/831799";
import { FOrganizationLevelType, FPlanNameType, FPermissionDenialReason } from "../figma_app/191312";
import { useTeamPlanFeatures } from "../figma_app/465071";
import { DashboardSection, WorkspaceTab } from "../figma_app/650409";
import { DashboardSections, MemberSections } from "../905/548208";
import { registerModal } from "../905/102752";
import { r6 } from "../905/542608";
import { T as _$$T } from "../figma_app/472024";
import { K as _$$K2 } from "../905/41648";
import { YM, g2, Ec, lK, ed, q3, zc, Vr } from "../figma_app/397283";
import { A as _$$A2 } from "../6828/70690";
import { cm } from "../figma_app/544879";
import { C as _$$C2 } from "../905/138077";
import { V as _$$V } from "../905/633585";
import { d as _$$d } from "../905/693444";
import { logAndTrackCTA } from "../figma_app/314264";
import { consumptionPaywallUtils } from "../905/224";
import { Ct } from "../figma_app/199513";
import { b as _$$b } from "../905/388233";
import { N as _$$N2 } from "../figma_app/55043";
import { ProjectByIdForFolderSettings } from "../figma_app/43951";
import { FeatureFlag } from "../905/652992";
import { KindEnum } from "../905/129884";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
var p = u;
let Y = registerModal(function (e) {
  let t = useTeamPlanFeatures().unwrapOr(null);
  let i = e.hasOwnProperty("resourceConnectionInvite");
  let d = i ? e.resourceConnectionInvite.hostPlan : e.resourceConnection.hostPlan;
  let c = i ? e.resourceConnectionInvite.connectingPlan : e.resourceConnection.connectedPlan;
  let u = i ? e.resourceConnectionInvite.projectName : e.resourceConnection.projectName;
  let p = i ? e.resourceConnectionInvite.isHostPlanAdmin : e.resourceConnection.isHostPlanAdmin;
  if (null == d || null == c) throw Error("hostPlan or connectingPlan not found");
  let m = useDispatch();
  let h = useModalManager({
    ...e,
    onClose: () => {
      m(hideModal());
    }
  });
  let g = Hg(i ? void 0 : e.resourceConnection.id);
  let A = Bs(i ? "" : e.resourceConnection.id, p, !i && !!e.resourceConnection.id);
  let b = 0;
  let v = 0;
  let I = !i && "loaded" === A.status;
  if (I) {
    let {
      resourceConnectedUsersWithPlan,
      totalResourceConnectedUsers
    } = A.unwrapOr({
      resourceConnectedUsersWithPlan: [],
      totalResourceConnectedUsers: 0
    });
    b = resourceConnectedUsersWithPlan?.filter(e => e?.planId === c.id).length || 0;
    v = totalResourceConnectedUsers ? Number(totalResourceConnectedUsers) - b : 0;
  }
  let E = "loading" === g.status;
  let V = e => e ? e.toLocaleDateString(_$$A(e).locale(), {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : "";
  let Y = (() => {
    if (!i) return;
    let t = e.resourceConnectionInvite;
    return {
      inviteSentByTimestamp: t.createdAt,
      inviteSentBy: t.hostInviterName
    };
  })();
  let q = (() => {
    if (i) return;
    let t = e.resourceConnection.resourceConnectionInvite;
    return {
      connectedByTimestamp: (p ? t?.createdAt : t?.handledAt) ?? void 0,
      connectedBy: p ? t?.hostInviterName : t?.handledByName
    };
  })();
  let $ = jsxs("div", {
    className: YM,
    children: [jsx("div", {
      className: _$$s.colorTextSecondary.$,
      children: p ? renderI18nText("resource_connection.connected_by") : renderI18nText("resource_connection.approved_by")
    }), jsx("div", {
      children: renderI18nText("resource_connection.connected_by_info", {
        inviter: q?.connectedBy,
        timeStamp: V(q?.connectedByTimestamp)
      })
    })]
  });
  return jsx(TrackingProvider, {
    name: "Manage Project Connection Modal",
    properties: {
      resourceConnectionId: i ? null : e.resourceConnection.id,
      resourceConnectionInviteId: i ? e.resourceConnectionInvite.id : null
    },
    children: jsx(ModalRootComponent, {
      manager: h,
      width: "md",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: jsxs("div", {
              className: g2,
              children: [jsx(IconButton, {
                onClick: () => {
                  m(popModalStack());
                },
                "aria-label": getI18nString("resource_connection.aria_label.button"),
                children: jsx(_$$C, {})
              }), renderI18nText("resource_connection.manage_connection")]
            })
          })
        }), jsxs(DialogBody, {
          scrolling: "none",
          padding: {
            top: i ? 0 : 16,
            bottom: 16,
            left: 0,
            right: 0
          },
          children: [i && jsx("div", {
            className: _$$s.mb16.$,
            children: jsx(_$$_, {
              rounded: !1,
              dataTestId: "viewer-upgrade-banner",
              color: _$$S.PLAIN,
              text: renderI18nText("resource_connection.pending_modal.connecting_plan_hasnt_approved_invite_yet", {
                connectingPlan: c.name
              })
            })
          }), jsxs("div", {
            className: _$$s.pl16.pr16.$,
            children: [jsx("div", {
              className: _$$s.textBodyMediumStrong.pb4.$,
              children: getI18nString("resource_connection.teams")
            }), jsxs("div", {
              className: Ec,
              children: [jsx(nl, {
                size: Pf.MEDIUM,
                shape: "CIRCLE",
                team: d
              }), jsxs("div", {
                className: _$$s.flex.flexColumn.$,
                children: [jsx("div", {
                  children: d.name
                }), jsxs("span", {
                  children: [I && jsxs("span", {
                    className: _$$s.textBodyMedium.colorTextSecondary.$,
                    children: [getI18nString("resource_connection.num_members", {
                      count: v
                    }), " \xb7\xa0"]
                  }), jsx(_$$N, {
                    href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects#h_01JMJDKJFD8C3M4MDEVKBHAFEQ",
                    children: getI18nString("resource_connection.host")
                  })]
                })]
              })]
            }), jsxs("div", {
              className: Ec,
              children: [jsx(nl, {
                size: Pf.MEDIUM,
                shape: "CIRCLE",
                team: c
              }), jsxs("div", {
                className: _$$s.flex.flexColumn.$,
                children: [jsx("div", {
                  children: c.name
                }), jsx("div", {
                  className: _$$s.textBodyMedium.colorTextSecondary.$,
                  children: i ? renderI18nText("resource_connection.invite_pending") : I ? getI18nString("resource_connection.num_members", {
                    count: b
                  }) : null
                })]
              })]
            }), jsx("div", {
              className: _$$s.py8.$,
              children: !i && (() => {
                let t = [];
                p && e.resourceConnection.projectTeamId && t.push({
                  label: getI18nString("resource_connection.manage_modal.libraries"),
                  description: E ? void 0 : g.data ? getI18nString("resource_connection.n_libraries_in_connected_project", {
                    count: g.data
                  }) : getI18nString("resource_connection.manage_modal.allow_external_teams_to_use_libraries"),
                  onClick: () => {
                    m(showModalHandler({
                      type: _$$T,
                      data: {
                        teamId: e.resourceConnection.projectTeamId,
                        entrypoint: r6.CONNECTED_PROJECT_MANAGE_MODAL,
                        resourceConnection: {
                          id: e.resourceConnection.id,
                          projectName: u,
                          hostPlanType: d.type
                        }
                      }
                    }));
                  }
                });
                return t;
              })().map((e, t) => jsxs(ButtonPrimitive, {
                className: lK,
                onClick: e.onClick,
                children: [jsxs("div", {
                  className: _$$s.flex.flexColumn.my6.$,
                  children: [jsx("div", {
                    className: ed,
                    children: e.label
                  }), e.description && jsx("div", {
                    className: q3,
                    children: e.description
                  })]
                }), jsx("span", {
                  className: zc,
                  children: jsx(SvgComponent, {
                    svg: _$$A2
                  })
                })]
              }, t))
            }), i ? jsxs("div", {
              className: YM,
              children: [jsx("div", {
                className: _$$s.colorTextSecondary.$,
                children: renderI18nText("resource_connection.invite_sent")
              }), jsx("div", {
                children: renderI18nText("resource_connection.invite_sent_info", {
                  inviter: Y?.inviteSentBy,
                  timeStamp: V(Y?.inviteSentByTimestamp)
                })
              })]
            }) : $, jsx("div", {
              className: _$$s.mb8.mt12.$,
              children: jsx(Button, {
                variant: "link",
                onClick: () => {
                  t && (t.key.type === FOrganizationLevelType.ORG ? m(selectViewAction({
                    view: "orgAdminSettings",
                    orgAdminSettingsViewTab: DashboardSection.CONTENT,
                    orgAdminSettingsViewSecondaryTab: WorkspaceTab.CONNECTED_PROJECTS,
                    showResourceConnectionFlyout: e.resourceConnection.id
                  })) : t.key.type === FOrganizationLevelType.TEAM && m(selectViewAction({
                    view: "teamAdminConsole",
                    teamId: t.key.parentId,
                    isProTeam: t.tier === FPlanNameType.PRO,
                    teamAdminConsoleViewTab: DashboardSections.CONTENT,
                    teamAdminConsoleViewSecondaryTab: MemberSections.CONNECTED_PROJECTS,
                    showResourceConnectionFlyout: e.resourceConnection.id
                  })), m(hideModal()));
                },
                children: getI18nString("resource_connection.manage_modal.view_in_admin_dashboard")
              })
            })]
          })]
        }), jsx(DialogFooter, {
          children: jsxs("div", {
            className: Vr,
            children: [jsx("a", {
              href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects#h_01JMJDKJFD68CH88F663KG08AJ",
              target: "_blank",
              children: jsx(Button, {
                variant: "link",
                onClick: e => e.stopPropagation(),
                children: renderI18nText("resource_connection.request_modal.learn_more")
              })
            }), jsx(Button, {
              variant: "destructiveSecondary",
              onClick: i ? () => {
                m(showModalHandler({
                  type: _$$h,
                  data: {
                    resourceConnectionInvite: e.resourceConnectionInvite
                  }
                }));
              } : () => {
                if (!e.resourceConnection.projectTeamId) {
                  m(VisualBellActions.enqueue({
                    message: getI18nString("resource_connection.visual_bell.generic_error")
                  }));
                  return;
                }
                m(showModalHandler({
                  type: _$$K2,
                  data: {
                    resourceConnectionId: e.resourceConnection.id,
                    projectName: u,
                    projectId: e.resourceConnection.projectId,
                    projectTeamId: e.resourceConnection.projectTeamId,
                    hostPlan: d,
                    connectedPlan: c,
                    isHostPlanAdmin: p
                  }
                }));
              },
              children: i ? renderI18nText("resource_connection.pending_modal.revoke_invite") : renderI18nText("resource_connection.manage_modal.deactivate")
            })]
          })
        })]
      })
    })
  });
}, "ResourceConnectManageModal");
let eo = (e, t) => {
  let i = YO(e);
  let n = useSubscription(ProjectByIdForFolderSettings, {
    projectId: e
  });
  let a = useDispatch();
  let s = getAtomMutate(Ct);
  let o = n.data?.project;
  let l = _$$b(o?.plan?.tier);
  let d = o?.activeProjectResourceConnections;
  let c = d?.length ? d[0] : null;
  let u = o?.plan;
  let p = o?.plan?.tier === FPlanNameType.STARTER;
  let f = c ? o?.connectedPlan : null;
  let _ = o?.pendingResourceConnectionInvite;
  let x = o?.pendingAssetTransferRequest;
  let S = o?.team?.pendingAssetTransferRequest;
  let w = _$$N2(u?.key, () => {
    u && a(showModalHandler({
      type: _$$B3,
      data: {
        folder: {
          ...o,
          plan: u
        },
        entryPoint: wR.PROJECT_SETTINGS,
        assetTransferRequestWarning: !!(x && !x.isTransferCopy)
      }
    }));
  });
  if ([i, n].some(e => "loaded" !== e.status && "disabled" !== e.status)) return [];
  let C = i.data;
  if (!C || !o) return [];
  let T = () => x ? cm.PENDING_ASSET_TRANSFER : _ ? cm.PENDING_RESOURCE_CONNECTION : c ? cm.ACTIVE_RESOURCE_CONNECTION : null;
  let k = e => {
    a(showModalHandler({
      type: Lg(),
      data: {
        folderId: o.id,
        teamId: o.teamId,
        entryPoint: Lq.PROJECT_SETTINGS,
        shouldTransferCopy: e
      }
    }));
  };
  let R = () => {
    a(showModalHandler({
      type: ConsumptionPaywallModalPlansPricing,
      data: {
        team: o.team,
        resource: FeatureFlag.PROJECT_TRANSFER,
        currentPlan: consumptionPaywallUtils.Plan.STARTER,
        upsellPlan: consumptionPaywallUtils.Plan.PRO,
        editorType: null
      }
    }));
  };
  let N = [{
    label: renderI18nText("file_browser.folder_settings_modal.name"),
    description: o.name,
    onClick: () => {
      a(showModalHandler({
        type: _$$y(),
        data: {
          folder: o
        }
      }));
    },
    disabled: !C.canEdit,
    noDisabledStyling: !0,
    noChevron: !C.canEdit
  }, {
    label: renderI18nText("file_browser.folder_settings_modal.description"),
    description: o.description && "" !== o.description ? o.description : C.canEdit ? renderI18nText("file_browser.folder_settings_modal.add_description") : renderI18nText("file_browser.folder_settings_modal.no_description_added_yet"),
    onClick: () => {
      a(showModalHandler({
        type: _$$C2(),
        data: {
          folder: o
        }
      }));
    },
    disabled: !C.canEdit,
    noDisabledStyling: !0,
    noChevron: !C.canEdit
  }, {
    label: "",
    separator: !0
  }];
  let P = C.isPlanAdmin && C.planCanConnectWithReasons?.publicDenyReasons && 1 === C.planCanConnectWithReasons.publicDenyReasons.length && C.planCanConnectWithReasons.publicDenyReasons[0] === FPermissionDenialReason.PLAN_DENY_CAN_CONNECT_IF_AT_CONNECTION_LIMIT;
  let O = C.canConnect || P;
  let D = u?.isAdmin;
  let F = f?.isAdmin;
  c && (D || F) ? N.push({
    label: getI18nString("file_browser.folder_settings_modal.manage_connection"),
    description: D ? getI18nString("file_browser.folder_settings_modal.manage_connection_description") : void 0,
    onClick: () => {
      c && a(showModalHandler({
        type: Y,
        data: {
          resourceConnection: {
            ...c,
            hostPlan: {
              id: c.hostPlanId,
              name: c.hostPlanName,
              imgUrl: c.hostPlanImageUrl,
              type: c.hostPlanType
            },
            connectedPlan: {
              id: c.connectedPlanId,
              name: c.connectedPlanName,
              imgUrl: c.connectedPlanImageUrl,
              type: c.connectedPlanType
            },
            projectName: o.name,
            projectTeamId: o.teamId,
            projectId: o.id,
            resourceConnectionInvite: c.resourceConnectionInvite ?? void 0,
            isHostPlanAdmin: c.isHostPlanAdmin
          }
        }
      }));
    }
  }) : _ && D ? N.push({
    label: getI18nString("file_browser.folder_settings_modal.manage_connection"),
    description: getI18nString("file_browser.folder_settings_modal.manage_connection_description"),
    onClick: () => {
      _ && a(showModalHandler({
        type: Y,
        data: {
          resourceConnectionInvite: {
            ..._,
            hostPlan: {
              id: _.hostPlanId,
              name: _.hostPlanName,
              imgUrl: _.hostPlanImageUrl,
              type: _.hostPlanType
            },
            connectingPlan: {
              id: _.connectingPlanId,
              name: _.connectingPlanName,
              imgUrl: _.connectingPlanImageUrl,
              type: _.connectingPlanType
            },
            projectName: o.name,
            isHostPlanAdmin: _.isHostPlanAdmin
          }
        }
      }));
    }
  }) : O && N.push({
    label: getI18nString("file_browser.folder_settings_modal.connect_with_external_plan"),
    onClick: w,
    disabled: !!S,
    disabledMessage: getI18nString("file_browser.folder_settings_modal.tooltip.cannot_connect_folder_with_team_asset_transfer_request"),
    trackingEventName: "Folder Connect Click",
    trackingProperties: {
      folderId: o.id
    },
    showNewBadge: l
  });
  x ? (C.isPlanMember || C.isPlanAdmin) && N.push({
    label: getI18nString("project_menu.manage_transfer_request"),
    onClick: () => {
      x && a(showModalHandler({
        type: _$$d(),
        data: {
          pending: x && {
            id: x.id,
            source_user_email: x.sourceUser?.email,
            destination_user_email: x.destinationUser?.email,
            is_transfer_copy: x.isTransferCopy
          },
          canRevokeProjectTransfer: x.isTransferCopy ? C.canTransferCopy : C.canTransferExternally
        }
      }));
    }
  }) : (_ || c || !C.canTransferExternally || N.push({
    label: getI18nString("project_menu.transfer"),
    onClick: () => {
      p ? R() : k(!1);
    },
    disabled: !!S,
    disabledMessage: getI18nString("file_browser.folder_settings_modal.tooltip.cannot_transfer_folder_with_team_asset_transfer_request"),
    trackingEventName: "Folder Transfer Click",
    trackingProperties: {
      folderId: o.id,
      entryPoint: "Folder Settings Modal"
    }
  }), C.canTransferCopy && N.push({
    label: getI18nString("project_menu.send_a_copy"),
    onClick: () => {
      p ? R() : k(!0);
    },
    disabled: !!S,
    disabledMessage: getI18nString("file_browser.folder_settings_modal.tooltip.cannot_transfer_folder_with_team_asset_transfer_request"),
    trackingEventName: "Folder Transfer Copy Click",
    trackingProperties: {
      folderId: o.id,
      entryPoint: "Folder Settings Modal"
    }
  }));
  N.push({
    label: "",
    separator: !0
  });
  C.canTrash && N.push({
    label: renderI18nText("project_menu.move_to_trash"),
    onClick: () => {
      let e = T();
      C.canSkipDeletionConfirmation && !e ? (s({
        folderId: o.id
      }).catch(() => {
        a(FlashActions.error(getI18nString("file_browser.api_folder.error_when_moving_to_trash")));
      }), t()) : a(showModalHandler({
        type: _$$V(),
        data: {
          folder: o,
          folderState: e
        }
      }));
    },
    noChevron: !0,
    trackingEventName: "Folder Trash Click",
    trackingProperties: {
      folderId: o.id,
      entryPoint: "Folder Settings Modal"
    }
  });
  !C.canTrashWithReasons?.result && C.canTrashWithReasons?.publicDenyReasons.includes(FPermissionDenialReason.CONNECTED_FOLDER_DENY_CAN_TRASH_DESPITE_CAN_MANAGE_LIFECYCLE) && N.push({
    label: renderI18nText("project_menu.move_to_trash"),
    disabled: !0,
    disabledMessage: C.isPlanAdmin ? getI18nString("file_browser.folder_settings_modal.tooltip.disconnect_folder_before_moving_to_trash") : getI18nString("file_browser.folder_settings_modal.tooltip.contact_your_admin_to_disconnect_folder_before_moving_to_trash"),
    noChevron: !0
  });
  return N;
};
let $$el0 = registerModal(function (e) {
  let t;
  let i = useModalManager(e);
  let {
    folderId
  } = e;
  let u = useTracking();
  let m = useSubscription(ProjectByIdForFolderSettings, {
    projectId: folderId
  });
  let g = m.data?.project;
  let A = eo(folderId, e.onClose);
  let b = e => () => {
    !e.disabled && (e.onClick && e.onClick(), (e.trackingEventName || e.trackingProperties) && logAndTrackCTA({
      ...u.properties,
      trackingContext: e.trackingEventName || u.name,
      ...e.trackingProperties
    }));
  };
  if (!g) return jsx(Fragment, {});
  let v = e => e.disabled && e.disabledMessage ? {
    "data-tooltip": e.disabledMessage,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip-interactive": !0,
    "data-tooltip-max-width": 210,
    "data-tooltip-show-immediately": !0,
    "data-tooltip-show-below": !0
  } : {};
  return jsx(TrackingProvider, {
    name: "Folder Settings Modal",
    properties: {
      folderId: g?.id
    },
    children: jsx(ModalRootComponent, {
      manager: i,
      width: "lg",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("file_browser.folder_settings_modal.settings")
          })
        }), jsx(DialogBody, {
          scrolling: "none",
          children: A && (t = !1, A.slice().reverse().filter(e => (t || e.separator || (t = !0), t || !e.separator)).reverse().filter((e, t, i) => !e.separator || 0 === t || !i[t - 1]?.separator)).map((e, t) => {
            let i = e.disabled && !e.noDisabledStyling;
            let r = !e.noChevron && !e.disabled;
            let a = e.showNewBadge || r || i;
            return e.separator ? jsx("div", {
              className: "folder_settings_modal--separator--19MvF"
            }, t) : jsxs(ButtonPrimitive, {
              className: p()("folder_settings_modal--settingsOption--zt1FW", e.disabled && "folder_settings_modal--settingsOptionDisabled--lHgWj"),
              disabled: e.disabled,
              onClick: b(e),
              children: [jsxs("div", {
                className: _$$s.flex.flexColumn.my6.$,
                children: [jsx("div", {
                  className: p()("folder_settings_modal--optionLabel--ZvxkO", i && _$$s.colorTextSecondary.$),
                  children: e.label
                }), e.description && jsx("div", {
                  className: "folder_settings_modal--optionDescription--i7lA7",
                  children: e.description
                })]
              }), a && jsxs("div", {
                className: "folder_settings_modal--rightSideOptions--pIWL8",
                children: [e.showNewBadge && jsx(_$$E2, {
                  variant: "brandFilled",
                  children: renderI18nText("resource_connection.onboarding.new")
                }), r && jsx("span", {
                  className: "folder_settings_modal--iconContainer--9ZlTr",
                  children: jsx(SvgComponent, {
                    svg: _$$A2
                  })
                }), i && jsx("div", {
                  className: "folder_settings_modal--infoIconWrapper--IsNDl",
                  ...v(e),
                  children: jsx(_$$B, {})
                })]
              })]
            }, t);
          })
        })]
      })
    })
  });
}, "FolderSettingsModal");
export const l = $$el0;