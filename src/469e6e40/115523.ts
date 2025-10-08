import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo, forwardRef, useEffect, useRef, useCallback } from "react";
import { LoadingSpinner } from "../905/443820";
import { getFeatureFlags } from "../905/601108";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { AutoLayout } from "../905/470281";
import { wR } from "../905/346715";
import { b as _$$b } from "../905/168239";
import { K as _$$K } from "../905/628118";
import { TrackingProvider } from "../figma_app/831799";
import { t as _$$t } from "../figma_app/55043";
import { Z as _$$Z } from "../4452/80578";
import { FOrganizationLevelType } from "../figma_app/191312";
import { ResourceConnectionByPlan } from "../figma_app/43951";
import { useTeamPlanFeatures } from "../figma_app/465071";
import { getOrgAdminTabMessage } from "../figma_app/809387";
import { DashboardSection, WorkspaceTab } from "../figma_app/650409";
import { TrackingKeyEnum } from "../905/696396";
import { K as _$$K2 } from "../4452/401058";
import { A as _$$A } from "../4452/239888";
import { useDispatch } from "react-redux";
import { noop } from 'lodash-es';
import { Button } from "../905/521428";
import { d as _$$d } from "../c5e2cae0/368426";
import { Q as _$$Q } from "../905/553231";
import I from "classnames";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { v as _$$v } from "../4452/562448";
import { B as _$$B } from "../4452/541264";
import { d as _$$d2 } from "../4452/230712";
import { showModalHandler } from "../905/156213";
import { Ro } from "../figma_app/805373";
import { Cj } from "../905/270084";
import { jT } from "../4452/650793";
import { e as _$$e } from "../905/295932";
import { BadgeColor, Badge, BadgeSize } from "../figma_app/919079";
import { Tabs } from "../905/150656";
import { ButtonPrimitive } from "../905/632989";
import { Bs, Hg } from "../905/672745";
import { I as _$$I } from "../4452/82228";
import { m as _$$m } from "../4452/688074";
import { selectViewAction } from "../905/929976";
import { Link } from "../905/438674";
import { _ as _$$_ } from "../7021/243271";
import { dayjs } from "../905/920142";
import { RelativeTimeDisplay } from "../905/986103";
import { SvgComponent } from "../905/714743";
import { TeamAvatar, AvatarSize } from "../905/590952";
import { Lg, Lq } from "../figma_app/392626";
import { h as _$$h } from "../905/973388";
import { K as _$$K3 } from "../905/41648";
import { C as _$$C } from "../905/138077";
import { r6 } from "../905/542608";
import { T as _$$T } from "../figma_app/472024";
import { UserAvatar, UserTeamAvatar } from "../905/144598";
import { A as _$$A3 } from "../6828/70690";
import { IconButton } from "../905/443068";
import { bL, l9, mc, c$ } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { FuzzyMatcher } from "../figma_app/616261";
import { truncate } from "../figma_app/930338";
import { LazyInputForwardRef } from "../905/408237";
import { In } from "../905/672640";
import { selectUser } from "../905/372672";
import { getPermissionLevelName } from "../figma_app/12796";
var T = I;
let B = "connected_projects_table--planRow--PfOxe";
let G = "connected_projects_table--clampText--q7sr9";
let z = "connected_projects_table--flyoutPlanRow--h5i0w";
let V = "connected_projects_table--timestampInfoContainer--eir-J";
let W = "connected_projects_table--arrowContainer---7g3H";
let H = "connected_projects_table--optionLabel--hxIAx";
let Y = "connected_projects_table--optionDescription--eHXXj";
let J = "connected_projects_table--greyText--w8OgD";
let K = "connected_projects_table--settingsOption--mmLXs";
let X = "connected_projects_table--peopleAvatar--Vp1de";
let Q = e => {
  switch (e) {
    case eP.PENDING:
    case eP.DISCONNECTED:
      return BadgeColor.DEFAULT;
    case eP.ACTIVE:
      return BadgeColor.SUCCESS;
  }
};
let Z = e => {
  switch (e) {
    case eP.PENDING:
      return getI18nString("connected_projects_table.status.pending");
    case eP.DISCONNECTED:
      return getI18nString("connected_projects_table.status.disconnected");
    case eP.ACTIVE:
      return getI18nString("connected_projects_table.status.active");
  }
};
function ee(e) {
  return jsx(Badge, {
    color: Q(e.resourceConnection.status),
    text: Z(e.resourceConnection.status),
    subtle: !0,
    size: BadgeSize.LARGE
  });
}
function et(e) {
  let t = {
    [eP.PENDING]: "connected_projects_table--pending--7Si-y",
    [eP.DISCONNECTED]: "connected_projects_table--disconnected--6c7HX",
    [eP.ACTIVE]: "connected_projects_table--active--43YYu"
  };
  return jsx("div", {
    className: T()("connected_projects_table--iconAvatar--pmmkp", t[e.resourceConnection.status]),
    children: jsx(_$$e, {})
  });
}
function ey(e) {
  let {
    id,
    hostPlan,
    connectingPlan,
    resourceId,
    resourceName,
    resourceTeamId,
    status,
    resourceConnectionInvite,
    disconnectedAt,
    disconnectedByName,
    isHostPlanAdmin,
    projectLastModifiedAt,
    projectDescription,
    assetTransferRequest
  } = e.resourceConnection;
  let h = useDispatch();
  if ("loading" === e.numLibrariesEnabledResult.status || "loading" === e.resourceConnectedUsersResult.status) return null;
  let {
    resourceConnectedUsersWithPlan,
    totalResourceConnectedUsers
  } = e.resourceConnectedUsersResult.unwrapOr({
    resourceConnectedUsersWithPlan: [],
    totalResourceConnectedUsers: 0
  });
  let v = resourceConnectedUsersWithPlan?.filter(e => e?.planId === connectingPlan.id).length || 0;
  let f = totalResourceConnectedUsers ? Number(totalResourceConnectedUsers) - v : 0;
  let j = (() => {
    if (status !== eP.PENDING) return {
      connectedByTimestamp: (isHostPlanAdmin ? resourceConnectionInvite?.createdAt : resourceConnectionInvite?.handledAt) ?? void 0,
      connectedBy: isHostPlanAdmin ? resourceConnectionInvite?.hostInviterName : resourceConnectionInvite?.handledByName
    };
  })();
  let y = (() => {
    if (status === eP.PENDING && isHostPlanAdmin) return {
      inviteSentByTimestamp: resourceConnectionInvite?.createdAt,
      inviteSentBy: resourceConnectionInvite?.hostInviterName
    };
  })();
  let w = jsx("div", {
    className: cssBuilderInstance.flex.flexColumn.itemsCenter.py8.$,
    children: jsx("div", {
      className: cssBuilderInstance.colorBorder.bSolid.bt1.wFull.$
    })
  });
  let E = e => e ? e.toLocaleDateString(dayjs(e).locale(), {
    year: "numeric",
    month: "short",
    day: "numeric"
  }) : "";
  let S = jsxs("div", {
    className: V,
    children: [jsx("div", {
      className: cssBuilderInstance.colorTextSecondary.$,
      children: isHostPlanAdmin ? renderI18nText("resource_connection.connected_by") : renderI18nText("resource_connection.approved_by")
    }), jsx("div", {
      children: renderI18nText("resource_connection.connected_by_info", {
        inviter: j?.connectedBy,
        timeStamp: E(j?.connectedByTimestamp)
      })
    })]
  });
  let N = jsxs(ButtonPrimitive, {
    className: T()(K, cssBuilderInstance.mb8.$),
    onClick: e.openPeopleTab,
    children: [jsxs("div", {
      className: cssBuilderInstance.flex.flexColumn.$,
      children: [jsx("div", {
        className: H,
        children: getI18nString("resource_connection.num_people", {
          count: totalResourceConnectedUsers
        })
      }), jsxs("div", {
        className: "connected_projects_table--avatarSection--aXOIX",
        children: [resourceConnectedUsersWithPlan?.slice(0, 10).map(e => e?.user && jsx("span", {
          className: X,
          children: jsx(UserAvatar, {
            user: e.user,
            id: e.user.id,
            pending: !1,
            border: !0
          }, e.user.id)
        })), !isHostPlanAdmin && (() => {
          let e = jsx("div", {
            className: "connected_projects_table--emptyAvatar--ieeKn",
            children: jsx(_$$_, {
              style: {
                "--color-icon": "var(--color-icon-secondary)"
              }
            })
          });
          let t = Math.min(10, resourceConnectedUsersWithPlan.length);
          let a = t < 10 ? Math.min(f, 10 - t) : 0;
          let s = [];
          for (let t = 0; t < a; t++) s.push(jsx("span", {
            className: X,
            children: e
          }, `emptyAvatar-${t}`));
          return s;
        })()]
      })]
    }), jsx("span", {
      className: W,
      children: jsx(SvgComponent, {
        svg: _$$A3
      })
    })]
  });
  let I = jsxs(Fragment, {
    children: [N, isHostPlanAdmin && resourceTeamId && jsxs(ButtonPrimitive, {
      className: T()(K, cssBuilderInstance.mb4.$),
      onClick: () => {
        resourceTeamId && h(showModalHandler({
          type: _$$T,
          data: {
            teamId: resourceTeamId,
            entrypoint: r6.CONNECTED_PROJECT_ADMIN_UI,
            resourceConnection: {
              id,
              projectName: resourceName,
              hostPlanType: hostPlan.type
            }
          }
        }));
      },
      children: [jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.$,
        children: [jsx("div", {
          className: H,
          children: getI18nString("resource_connection.manage_modal.libraries")
        }), jsx("div", {
          className: T()(Y, {
            [J]: !e.numLibrariesEnabledResult.data
          }),
          children: e.numLibrariesEnabledResult.data ? getI18nString("resource_connection.n_libraries_in_connected_project", {
            count: e.numLibrariesEnabledResult.data
          }) : getI18nString("resource_connection.manage_modal.allow_external_teams_to_use_libraries")
        })]
      }), jsx("span", {
        className: W,
        children: jsx(SvgComponent, {
          svg: _$$A3
        })
      })]
    }), w, projectLastModifiedAt && jsxs("div", {
      className: V,
      children: [jsx("div", {
        className: cssBuilderInstance.colorTextSecondary.$,
        children: renderI18nText("resource_connection.last_activity")
      }), jsx("div", {
        children: jsx(RelativeTimeDisplay, {
          date: projectLastModifiedAt
        })
      })]
    }), S, w, jsx("div", {
      className: cssBuilderInstance.py12.$,
      children: jsx(Button, {
        variant: "destructiveSecondary",
        onClick: () => {
          if (!resourceTeamId) {
            console.error("Project team ID missing");
            return;
          }
          h(showModalHandler({
            type: _$$K3,
            data: {
              resourceConnectionId: id,
              projectName: resourceName,
              projectId: resourceId,
              projectTeamId: resourceTeamId,
              hostPlan,
              connectedPlan: connectingPlan,
              isHostPlanAdmin
            }
          }));
        },
        children: renderI18nText("resource_connection.manage_modal.deactivate")
      })
    })]
  });
  let O = jsxs(Fragment, {
    children: [w, isHostPlanAdmin && jsxs("div", {
      className: V,
      children: [jsx("div", {
        className: cssBuilderInstance.colorTextSecondary.$,
        children: renderI18nText("resource_connection.invite_sent")
      }), jsx("div", {
        children: renderI18nText("resource_connection.invite_sent_info", {
          inviter: y?.inviteSentBy,
          timeStamp: E(y?.inviteSentByTimestamp)
        })
      })]
    }), w, jsx("div", {
      className: cssBuilderInstance.py12.$,
      children: jsx(Button, {
        variant: "destructiveSecondary",
        onClick: () => {
          h(showModalHandler({
            type: _$$h,
            data: {
              resourceConnectionInvite: {
                id,
                projectName: resourceName,
                hostPlan,
                connectingPlan
              }
            }
          }));
        },
        children: renderI18nText("resource_connection.pending_modal.revoke_invite")
      })
    })]
  });
  let L = jsxs(Fragment, {
    children: [w, S, w, disconnectedAt && jsxs("div", {
      className: cssBuilderInstance.colorTextSecondary.py12.$,
      children: [getI18nString("resource_connection.disconnected_info", {
        connectedPlanName: connectingPlan.name,
        disconnectedAt: E(disconnectedAt),
        disconnectedBy: disconnectedByName ?? ""
      }), isHostPlanAdmin && jsxs(Fragment, {
        children: [" ", assetTransferRequest ? assetTransferRequest.sourceUser?.name ? getI18nString("resource_connection.admin_sent_a_copy", {
          adminName: assetTransferRequest.sourceUser?.name ?? "",
          connectedPlanName: connectingPlan.name
        }) : getI18nString("resource_connection.admin_sent_a_copy_no_admin_name", {
          connectedPlanName: connectingPlan.name
        }) : renderI18nText("resource_connection.you_can_send_a_copy", {
          shareACopyButton: jsx(Button, {
            variant: "link",
            onClick: () => {
              resourceTeamId && h(showModalHandler({
                type: Lg(),
                data: {
                  folderId: resourceId,
                  teamId: resourceTeamId,
                  entryPoint: Lq.CONNECTED_PROJECT_ADMIN_UI_FLYOUT,
                  shouldTransferCopy: !0
                }
              }));
            },
            children: getI18nString("resource_connection.disconnect_success_modal.share_a_copy")
          }),
          connectedPlanName: connectingPlan.name
        })]
      })]
    })]
  });
  let D = projectDescription && "" !== projectDescription;
  let P = jsxs(ButtonPrimitive, {
    className: K,
    onClick: () => {
      h(showModalHandler({
        type: _$$C(),
        data: {
          folder: {
            id: resourceId,
            description: projectDescription ?? null
          }
        }
      }));
    },
    disabled: !isHostPlanAdmin,
    children: [jsxs("div", {
      className: cssBuilderInstance.flex.flexColumn.$,
      children: [jsx("div", {
        className: H,
        children: renderI18nText("file_browser.folder_settings_modal.description")
      }), jsx("div", {
        className: T()(Y, {
          [J]: !D
        }),
        children: D ? projectDescription : renderI18nText("file_browser.folder_settings_modal.add_description")
      })]
    }), jsx("span", {
      className: W,
      children: jsx(SvgComponent, {
        svg: _$$A3
      })
    })]
  });
  let U = projectDescription && "" !== projectDescription ? jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.my6.mb16.$,
    children: [jsx("div", {
      className: H,
      children: renderI18nText("file_browser.folder_settings_modal.description")
    }), jsx("div", {
      className: Y,
      children: projectDescription
    })]
  }) : void 0;
  return jsxs(Fragment, {
    children: [status === eP.ACTIVE && jsx("div", {
      className: cssBuilderInstance.mb16.$,
      children: isHostPlanAdmin ? P : U
    }), jsx("div", {
      className: cssBuilderInstance.textBodyMediumStrong.pb4.$,
      children: getI18nString("resource_connection.teams")
    }), jsxs("div", {
      className: T()(z, cssBuilderInstance.pb4.$),
      children: [jsx(TeamAvatar, {
        size: AvatarSize.MEDIUM,
        shape: "CIRCLE",
        team: hostPlan
      }), jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.$,
        children: [jsx("div", {
          children: hostPlan.name
        }), jsxs("span", {
          children: [status === eP.ACTIVE && jsxs("span", {
            className: cssBuilderInstance.textBodyMedium.colorTextSecondary.$,
            children: [getI18nString("resource_connection.num_members", {
              count: f
            }), " \xb7\xa0"]
          }), jsx(Link, {
            href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects#h_01JMJDKJFD8C3M4MDEVKBHAFEQ",
            children: getI18nString("resource_connection.host")
          })]
        })]
      })]
    }), jsxs("div", {
      className: T()(z, cssBuilderInstance.pb12.$),
      children: [jsx(TeamAvatar, {
        size: AvatarSize.MEDIUM,
        shape: "CIRCLE",
        team: connectingPlan
      }), jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.$,
        children: [jsx("div", {
          children: connectingPlan.name
        }), status === eP.ACTIVE && jsx("div", {
          className: cssBuilderInstance.textBodyMedium.colorTextSecondary.$,
          children: getI18nString("resource_connection.num_members", {
            count: v
          })
        })]
      })]
    }), status === eP.ACTIVE && I, status === eP.PENDING && O, status === eP.DISCONNECTED && L]
  });
}
let eR = "OTHER_GUESTS";
function eO(e) {
  let {
    hostPlan,
    connectingPlan,
    resourceId,
    resourceName,
    isHostPlanAdmin
  } = e.resourceConnection;
  let o = useDispatch();
  let d = selectUser();
  let [c, _] = useState("ALL");
  let [u, m] = useState("");
  let {
    resourceConnectedUsersWithPlan,
    totalResourceConnectedUsers
  } = e.resourceConnectedUsersResult.unwrapOr({
    resourceConnectedUsersWithPlan: [],
    totalResourceConnectedUsers: 0
  });
  let h = useMemo(() => new FuzzyMatcher(u.toLowerCase()), [u]);
  let x = useMemo(() => {
    switch (c) {
      case "ALL":
        return resourceConnectedUsersWithPlan || [];
      case hostPlan.id:
        return resourceConnectedUsersWithPlan?.filter(e => e?.planId === hostPlan.id) || [];
      case connectingPlan.id:
        return resourceConnectedUsersWithPlan?.filter(e => e?.planId === connectingPlan.id) || [];
      case eR:
        return resourceConnectedUsersWithPlan?.filter(e => e?.planId !== hostPlan.id && e?.planId !== connectingPlan.id) || [];
      default:
        return [];
    }
  }, [c, resourceConnectedUsersWithPlan, connectingPlan.id, hostPlan.id]);
  let b = useMemo(() => "" !== u ? x.filter(e => h.matchAgainstText(e?.user.name?.toLowerCase() || "") || h.matchAgainstText(e?.user.email?.toLowerCase() || "")) : x, [x, u, h]);
  let v = x?.filter(e => e?.planId === connectingPlan.id).length || 0;
  let f = isHostPlanAdmin ? x?.filter(e => e?.planId === hostPlan.id).length || 0 : totalResourceConnectedUsers ? Number(totalResourceConnectedUsers) - v : 0;
  let j = [hostPlan.id, connectingPlan.id, eR];
  let y = {
    ALL: getI18nString("resource_connection.people.all_teams"),
    [hostPlan.id]: hostPlan.name,
    [connectingPlan.id]: connectingPlan.name,
    [eR]: getI18nString("resource_connection.people.other_guests")
  };
  if ("loading" === e.resourceConnectedUsersResult.status) return null;
  let w = jsxs("div", {
    className: "connected_projects_flyout--searchFilterHeader--GBExZ",
    children: [jsx("div", {
      className: "connected_projects_flyout--searchInputContainer--F5an4",
      style: {
        maxWidth: isHostPlanAdmin ? "250px" : "100%"
      },
      children: jsxs("div", {
        className: "connected_projects_flyout--searchInputRow--xtkJV",
        children: [jsx(In, {
          icon: "search-32",
          fill: "secondary"
        }), jsx(LazyInputForwardRef, {
          className: "connected_projects_flyout--searchInput--68Ct-",
          autoFocus: !1,
          onChange: e => {
            e.target instanceof HTMLInputElement && m(e.target.value);
          },
          onMouseDown: e => e.stopPropagation(),
          placeholder: getI18nString("resource_connection.people.search_people"),
          value: u ?? "",
          spellCheck: "false"
        }), !!u && jsx("div", {
          className: "connected_projects_flyout--clearButton--A48Fo",
          children: jsx(IconButton, {
            onClick: () => {
              m("");
            },
            "aria-label": getI18nString("search.search_bar.clear"),
            children: jsx(In, {
              icon: "x-16",
              fill: "secondary"
            })
          })
        })]
      })
    }), isHostPlanAdmin && jsx("div", {
      className: "connected_projects_flyout--filterDropdownContainer---4vii",
      children: jsxs(bL, {
        value: c,
        onChange: e => _(e ?? "ALL"),
        children: [jsx(l9, {
          label: jsx(HiddenLabel, {
            children: " "
          })
        }), jsxs(mc, {
          children: [jsx(c$, {
            value: "ALL",
            children: y.ALL
          }), jsx("div", {
            className: cssBuilderInstance.py4.px8.$,
            children: jsx("div", {
              className: "connected_projects_flyout--selectDropdownDivider--UEuEC"
            })
          }), j.map(e => jsx(c$, {
            value: e,
            children: truncate(y[e] || "", 20)
          }, e))]
        })]
      })
    })]
  });
  return jsxs("div", {
    children: [resourceConnectedUsersWithPlan.length > 0 && jsxs(Fragment, {
      children: [w, jsx("div", {
        className: cssBuilderInstance.colorBorder.bSolid.bt1.wFull.$
      })]
    }), jsxs("div", {
      className: "connected_projects_flyout--peopleFlyoutBody--PBwlb",
      children: [jsx("div", {
        className: "connected_projects_flyout--description--yNN6h",
        children: isHostPlanAdmin ? renderI18nText("resource_connection.people.manage_peoples_access_on_the_project_page", {
          projectPageLink: jsx(ButtonPrimitive, {
            className: "connected_projects_flyout--projectLink--spvwE",
            onClick: () => {
              o(selectViewAction({
                view: "folder",
                folderId: resourceId
              }));
            },
            children: renderI18nText("resource_connection.people.project_page")
          })
        }) : v ? renderI18nText("resource_connection.people.there_are_x_people_in_project_name", {
          numPeople: Number(totalResourceConnectedUsers) || 0,
          projectName: resourceName,
          numHostPeople: f,
          hostPlanName: hostPlan.name,
          numConnectedPeople: v,
          connectedPlanName: connectingPlan.name
        }) : renderI18nText("resource_connection.people.there_are_x_people_in_project_name_none_from_connected_plan", {
          numPeople: Number(totalResourceConnectedUsers) || 0,
          projectName: resourceName,
          numHostPeople: f,
          hostPlanName: hostPlan.name,
          numConnectedPeople: v,
          connectedPlanName: connectingPlan.name
        })
      }), b && b.map(e => {
        let t = e?.planId ? {
          parentId: e?.planId || void 0,
          name: e?.planName || void 0,
          imgUrl: e?.planImgUrl || void 0
        } : void 0;
        return e && jsxs("div", {
          className: "connected_projects_flyout--userRow--yjbku",
          children: [jsxs("div", {
            className: "connected_projects_flyout--userAvatarAndHandle--ovISF",
            children: [t ? jsx(UserTeamAvatar, {
              user: e.user,
              id: e.user.id,
              plan: t
            }) : jsx("div", {
              className: "connected_projects_flyout--noPlanAvatar--8g4Kb",
              children: jsx(UserAvatar, {
                user: e.user,
                id: d.id,
                pending: !1
              })
            }), jsxs("div", {
              children: [jsxs("div", {
                className: "connected_projects_flyout--name--AyFlx",
                children: [e.user.name && truncate(e.user.name, 40), " ", d.id === e.user.id && jsx("span", {
                  className: "connected_projects_flyout--you--MfCZP",
                  children: renderI18nText("avatar.tooltip.you")
                })]
              }), jsx("div", {
                className: "connected_projects_flyout--email--Kix6Y",
                children: e.user.email && truncate(e.user.email, 40)
              })]
            })]
          }), jsx("span", {
            className: "connected_projects_flyout--level--UUwpu",
            children: e.isFileRole ? jsx("span", {
              className: "connected_projects_flyout--fileLevelAccess--VCER8",
              children: getI18nString("resource_connection.people.file_level_access")
            }) : e.level && getPermissionLevelName(e.level)
          })]
        });
      })]
    })]
  });
}
var eL = (e => (e.OVERVIEW = "overview", e.PEOPLE = "people", e))(eL || {});
function eD({
  children: e,
  loading: t
}) {
  return t ? jsx("div", {
    className: "connected_projects_table--loadingSpinnerContainer--E8QWF",
    children: jsx(LoadingSpinner, {})
  }) : e;
}
let eM = {
  Root: forwardRef((e, t) => jsx(_$$I, {
    open: e.open,
    trackingName: e.trackingName,
    trackingProperties: e.trackingProperties,
    children: jsx(_$$m.Root, {
      ref: t,
      open: e.open,
      onClose: e.onClose,
      children: e.children
    })
  })),
  Contents: function (e) {
    let {
      hostPlan,
      resourceName,
      resourceId,
      status
    } = e.resourceConnection;
    let l = useDispatch();
    let o = useTeamPlanFeatures().unwrapOr(null);
    let [d, c] = useState("overview");
    let [_, u, m] = Tabs.useManagedTabs({
      overview: !0,
      people: !0
    }, d, e => c(e));
    let p = status === eP.ACTIVE;
    useEffect(() => {
      p || c("overview");
    }, [p]);
    let g = Bs(e.resourceConnection.id, e.resourceConnection.isHostPlanAdmin);
    let h = Hg(e.resourceConnection.id);
    let x = o?.key.parentId === hostPlan.id && o?.key.type === hostPlan.type;
    return jsxs(_$$m.Contents, {
      zIndexOverrideClassName: cssBuilderInstance.zIndexTertiaryModal.$,
      children: [jsx(_$$m.Header, {
        children: jsxs("div", {
          className: "connected_projects_table--flyoutHeaderContainer--aoer8",
          children: [jsxs("div", {
            className: "connected_projects_table--flyoutHeader--8AtxP",
            "data-testid": "connected-projects-flyout-header",
            children: [jsx(et, {
              resourceConnection: e.resourceConnection
            }), jsxs("div", {
              className: cssBuilderInstance.flex.flexColumn.$,
              children: [jsxs("div", {
                className: "connected_projects_table--flyoutHeaderTextContainer--fLp-E",
                children: [jsx("p", {
                  className: cssBuilderInstance.textHeadingMedium.$,
                  children: resourceName
                }), jsx(ee, {
                  resourceConnection: e.resourceConnection
                })]
              }), e.resourceConnection.status === eP.ACTIVE && x && jsx(ButtonPrimitive, {
                className: cssBuilderInstance.colorTextBrand.cursorPointer.$,
                onClick: () => {
                  l(selectViewAction({
                    view: "folder",
                    folderId: resourceId
                  }));
                },
                children: getI18nString("resource_connection.view_project")
              })]
            })]
          }), jsx(_$$m.HiddenTitle, {
            children: resourceName
          }), p && jsxs(Fragment, {
            children: [jsx("div", {
              className: "connected_projects_table--separatorAboveTabStrip--zUAM-"
            }), jsx("div", {
              className: cssBuilderInstance.pl12.pr24.py8.$,
              children: jsxs(Tabs.TabStrip, {
                manager: m,
                children: [jsx(Tabs.Tab, {
                  ..._.overview,
                  children: getI18nString("resource_connection.overview")
                }), jsx(Tabs.Tab, {
                  ..._.people,
                  children: getI18nString("resource_connection.people")
                })]
              })
            })]
          })]
        })
      }), jsxs(_$$m.Body, {
        children: [jsx(Tabs.TabPanel, {
          ...u.overview,
          children: jsx(eD, {
            loading: "loading" === g.status || "loading" === h.status,
            children: jsx("div", {
              className: "connected_projects_table--flyoutBody--w9yQi",
              children: jsx(ey, {
                resourceConnection: e.resourceConnection,
                openPeopleTab: () => {
                  c("people");
                },
                resourceConnectedUsersResult: g,
                numLibrariesEnabledResult: h
              })
            })
          })
        }), jsx(Tabs.TabPanel, {
          ...u.people,
          children: jsx(eD, {
            loading: "loading" === g.status,
            children: jsx(eO, {
              resourceConnection: e.resourceConnection,
              resourceConnectedUsersResult: g
            })
          })
        })]
      })]
    });
  }
};
var eP = (e => (e.PENDING = "pending", e.DISCONNECTED = "disconnected", e.ACTIVE = "active", e))(eP || {});
function eU(e) {
  let {
    planId,
    planType,
    resourceConnectionsLgResult
  } = e;
  let r = _$$B();
  let l = useRef(null);
  let d = useRef(null);
  let c = useDispatch();
  let [_, u] = useState(!1);
  let p = useMemo(() => {
    let e = resourceConnectionsLgResult?.plan;
    let t = e?.hostPlanResourceConnections ?? [];
    let a = e?.connectedPlanResourceConnections ?? [];
    let n = [...(e?.hostPlanPendingResourceConnectionInvites ?? []), ...(e?.connectingPlanPendingResourceConnectionInvites ?? [])].map(e => {
      let t = new Date();
      return e.projectLimitedInfo ? {
        key: "pending-connection-" + e.id,
        id: e.id,
        resourceId: e.resourceId,
        resourceName: e.projectLimitedInfo.name,
        hostPlan: {
          id: e.hostPlanId,
          name: e.hostPlanName,
          imgUrl: e.hostPlanImageUrl,
          type: e.hostPlanType,
          parentId: e.hostPlanId
        },
        connectingPlan: {
          id: e.connectingPlanId,
          name: e.connectingPlanName,
          imgUrl: e.connectingPlanImageUrl,
          type: e.connectingPlanType,
          parentId: e.connectingPlanId
        },
        resourceConnectionInvite: e,
        hostInviter: {
          name: e.hostInviterName || "",
          imgUrl: getResourceDataOrFallback(e.hostInviterPublic)?.userPublicImgUrl || null
        },
        status: "pending",
        updatedAt: t,
        isHostPlanAdmin: e.isHostPlanAdmin
      } : null;
    }).filter(e => null !== e);
    let s = new Map(t.map(e => [e.id, getResourceDataOrFallback(e.assetTransferRequest)]));
    return [...[...t, ...a].map(e => {
      let t = e.disconnectedAt ? "disconnected" : "active";
      return !e.projectLimitedInfo || n.find(t => t.hostPlan.id === e.hostPlanId && t.connectingPlan.id === e.connectedPlanId && t.resourceId === e.resourceId && "pending" === t.status) ? null : {
        key: "resource-connection-" + e.id,
        id: e.id,
        resourceId: e.resourceId,
        resourceName: e.projectLimitedInfo.name,
        resourceTeamId: e.projectLimitedInfo.teamId,
        hostPlan: {
          id: e.hostPlanId,
          name: e.hostPlanName,
          imgUrl: e.hostPlanImageUrl,
          type: e.hostPlanType,
          parentId: e.hostPlanId
        },
        connectingPlan: {
          id: e.connectedPlanId,
          name: e.connectedPlanName,
          imgUrl: e.connectedPlanImageUrl,
          type: e.connectedPlanType,
          parentId: e.connectedPlanId
        },
        resourceConnectionInvite: e.resourceConnectionInvite ?? void 0,
        status: t,
        disconnectedAt: e.disconnectedAt ?? void 0,
        disconnectedByName: e.disconnectedByName ?? void 0,
        isHostPlanAdmin: e.isHostPlanAdmin,
        projectLastModifiedAt: e.projectLastModifiedAt ? new Date(e.projectLastModifiedAt) : void 0,
        projectDescription: e.projectDescription ?? void 0,
        assetTransferRequest: s.get(e.id) ?? void 0
      };
    }).filter(e => null !== e), ...n].sort((e, t) => {
      let a = {
        pending: 0,
        active: 1,
        disconnected: 2
      };
      return a[e.status] - a[t.status];
    });
  }, [resourceConnectionsLgResult]);
  let g = useMemo(() => p.some(e => "disconnected" !== e.status), [p]);
  let h = useMemo(() => p.some(e => "disconnected" === e.status), [p]);
  let x = e => {
    c(showModalHandler({
      type: _$$d2,
      data: {
        resourceConnectionInvite: e
      }
    }));
  };
  useEffect(() => {
    u(!g);
  }, [g]);
  let b = _ ? p : p.filter(e => "disconnected" !== e.status);
  let v = e => "pending" === e.status && e.connectingPlan.parentId === planId;
  let f = e => "disconnected" === e.status ? "connected_projects_table--disconnectedText--5m--h" : void 0;
  let {
    highlightedItem,
    setHighlightedItemId,
    clearHighlightedItemId
  } = _$$v(useCallback(e => p.find(t => t.id === e), [p]), {
    interactionConfig: [{
      ref: r,
      shouldClearHighlight: !0
    }, {
      ref: l,
      shouldClearHighlight: !1
    }, {
      ref: d,
      shouldClearHighlight: !1
    }],
    onHighlight: () => {
      l.current?.focus();
    }
  });
  useEffect(() => {
    e.showResourceConnectionFlyout && p.find(t => t.id === e.showResourceConnectionFlyout) && setHighlightedItemId(e.showResourceConnectionFlyout);
  }, [e.showResourceConnectionFlyout, p, setHighlightedItemId]);
  let q = jsx("div", {
    className: cssBuilderInstance.pt16.px32.$,
    children: jsx("div", {
      className: cssBuilderInstance.colorBorder.bSolid.bt1.wFull.$
    })
  });
  return jsxs(TrackingProvider, {
    name: TrackingKeyEnum.CONNECTED_PROJECTS_TABLE,
    properties: {
      planId,
      planType
    },
    children: [q, jsx(Cj, {
      columns: [{
        name: getI18nString("connected_projects_table.project"),
        className: "connected_projects_table--projectNameColumn--KUW-P connected_projects_table--column--MWjlO table--column--974RA",
        cellComponent: e => jsx("div", {
          className: T()(cssBuilderInstance.mr32.$, G, f(e)),
          children: jsx("div", {
            className: cssBuilderInstance.minW0.$,
            children: e.resourceName
          })
        })
      }, {
        name: getI18nString("connected_projects_table.host_plan"),
        className: "connected_projects_table--hostPlanColumn--USRkS connected_projects_table--column--MWjlO table--column--974RA",
        cellComponent: e => jsxs("div", {
          className: T()(B, f(e)),
          children: [jsx(Ro, {
            size: 24,
            entity: e.hostPlan
          }), jsx("div", {
            className: T()(cssBuilderInstance.minW0.$, G),
            children: e.hostPlan.name
          })]
        })
      }, {
        name: getI18nString("connected_projects_table.connected_plan"),
        className: "connected_projects_table--connectingPlanColumn--XRuPz connected_projects_table--column--MWjlO table--column--974RA",
        cellComponent: e => jsxs("div", {
          className: T()(B, f(e)),
          children: [jsx(Ro, {
            size: 24,
            entity: e.connectingPlan
          }), jsx("div", {
            className: T()(cssBuilderInstance.minW0.$, G),
            children: e.connectingPlan.name
          })]
        })
      }, {
        name: getI18nString("connected_projects_table.status"),
        className: "connected_projects_table--statusColumn--VJDqd connected_projects_table--column--MWjlO table--column--974RA",
        cellComponent: e => jsx("div", {
          className: f(e),
          children: jsx(ee, {
            resourceConnection: e
          })
        })
      }],
      emptyContent: null,
      getItemKey: e => e.key,
      isLoading: !resourceConnectionsLgResult,
      itemTypeContext: {
        itemType: "folder",
        getSelectedCountString: e => getI18nString("multi_select_list.selected_count_folder", {
          numSelected: e
        })
      },
      items: b,
      noCheckboxColumn: !0,
      onRowClick: e => {
        e.id === highlightedItem?.id ? clearHighlightedItemId() : setHighlightedItemId(e.id);
      },
      onSetSortState: noop,
      rightActionColumns: [{
        name: "",
        className: "connected_projects_table--iconColumn--RU6JC",
        cellComponent: e => jsx("div", {
          className: "connected_projects_table--iconColumnContainer--lbzmx",
          children: v(e) ? jsx(Button, {
            onClick: () => x(e),
            children: renderI18nText("connected_projects_table.review_request")
          }) : jsx(jT, {})
        })
      }],
      rowHeightOverride: 64,
      scrollContentRef: d,
      selectAllDisabled: !0,
      sortState: {
        columnName: "NO_SORT",
        isReversed: !1
      },
      styleOverrideClassNames: {
        tableWrapper: "connected_projects_table--tableWrapper--beUMZ",
        row: "connected_projects_table--row--KUik6"
      }
    }), h && g && jsx("div", {
      className: cssBuilderInstance.px32.pb32.$,
      children: jsx(Button, {
        iconPrefix: _ ? jsx(_$$d, {}) : jsx(_$$Q, {}),
        variant: "ghost",
        onClick: () => u(!_),
        children: _ ? getI18nString("connected_projects_table.hide_inactive_projects") : getI18nString("connected_projects_table.show_previous_connections")
      })
    }), jsx(eF, {
      highlightedItem,
      clearHighlightedItemId,
      flyoutRef: l
    })]
  });
}
function eF({
  highlightedItem: e,
  clearHighlightedItemId: t,
  flyoutRef: a
}) {
  return jsx(eM.Root, {
    open: !!e,
    onClose: t,
    trackingName: "ConnectedProjectsFlyout",
    trackingProperties: {
      resourceConnectionId: e?.id
    },
    ref: a,
    children: e && jsx(eM.Contents, {
      resourceConnection: e
    })
  });
}
export function $$eq0(e) {
  let t = useTeamPlanFeatures().unwrapOr(null);
  let a = t?.key.parentId;
  let k = t?.key.type;
  let E = useSubscription(ResourceConnectionByPlan, {
    planId: a,
    planType: k
  }, {
    enabled: !!a && !!k
  });
  let C = _$$Z(e.showResourceConnectionInviteModal);
  let S = e.showResourceConnectionInviteModal;
  let N = _$$t(C, S);
  useEffect(() => {
    e.showResourceConnectionInviteModal && N();
  }, [e.showResourceConnectionInviteModal, N]);
  let I = "loading" === E.status;
  let T = useMemo(() => {
    let e = E.data?.plan;
    let t = getResourceDataOrFallback(e?.hostPlanResourceConnections) ?? [];
    let a = getResourceDataOrFallback(e?.connectedPlanResourceConnections) ?? [];
    let n = getResourceDataOrFallback(e?.hostPlanPendingResourceConnectionInvites) ?? [];
    let s = getResourceDataOrFallback(e?.connectingPlanPendingResourceConnectionInvites) ?? [];
    return t.length + a.length + n.length + s.length;
  }, [E]);
  return t ? jsxs(TrackingProvider, {
    name: TrackingKeyEnum.CONNECTED_PROJECTS_TAB,
    properties: {
      planId: a,
      planType: k
    },
    children: [k === FOrganizationLevelType.ORG && !getFeatureFlags().ff_a11y_page_tab_fix && jsxs(Fragment, {
      children: [jsx(_$$K, {
        title: getOrgAdminTabMessage(DashboardSection.CONTENT)
      }), jsx(_$$b, {
        tab: DashboardSection.CONTENT,
        selectedSecondaryTab: WorkspaceTab.CONNECTED_PROJECTS
      })]
    }), I && jsx(AutoLayout, {
      width: "fill-parent",
      height: "fill-parent",
      direction: "vertical",
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      spacing: 16,
      padding: 32,
      children: jsx(LoadingSpinner, {})
    }), !I && 0 !== T && jsxs(Fragment, {
      children: [jsx(_$$A, {}), k && a && E && jsx(eU, {
        planType: k,
        planId: a,
        resourceConnectionsLgResult: E.data,
        showResourceConnectionFlyout: e.showResourceConnectionFlyout
      })]
    }), !I && 0 === T && jsx("div", {
      className: "connected_projects_tab--headerContainer--zEzIT",
      children: jsx(_$$K2, {
        entryPoint: wR.CONNECTED_PROJECT_ADMIN_UI
      })
    })]
  }) : null;
}
export const k = $$eq0;