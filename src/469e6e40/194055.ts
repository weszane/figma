import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useCallback, useEffect, useRef, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { useSubscription } from "../figma_app/288654";
import { useSprigWithSampling } from "../905/99656";
import { SecureLink, ButtonBase } from "../figma_app/637027";
import { P as _$$P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { AutoLayout } from "../905/470281";
import { $ as _$$$ } from "../905/355181";
import { TextWithTruncation } from "../905/984674";
import { XB } from "../figma_app/481749";
import { popModalStack, showModalHandler } from "../905/156213";
import { A as _$$A2 } from "../905/72153";
import { ExtensionActivityLogHistoryView, PluginAllowlistManagementModalView } from "../figma_app/43951";
import { useTeamPlanPublicInfo, useCurrentPrivilegedPlan, useTeamPlanUser } from "../figma_app/465071";
import { X as _$$X } from "../5430/785696";
import { J as _$$J } from "../905/403084";
import { ox, ab } from "../figma_app/870683";
import { OJ } from "../905/519092";
import { useLatestRef } from "../figma_app/922077";
import { u as _$$u } from "../4452/434813";
import { z as _$$z } from "../905/284530";
import { kq } from "../figma_app/563413";
import { Pf, H8 } from "../905/590952";
import { q as _$$q } from "../905/749058";
import { registerModal } from "../905/102752";
import { ConfirmationModal2 } from "../figma_app/918700";
import { Ef } from "../905/81982";
import { l as _$$l } from "../469e6e40/774192";
import { A as _$$A3 } from "../5724/663128";
import { SvgComponent } from "../905/714743";
import { lQ } from "../905/934246";
import { z as _$$z2 } from "../905/239603";
import { c$, ms } from "../figma_app/236327";
import { consumptionPaywallUtils } from "../905/224";
import { FPlanNameType } from "../figma_app/191312";
import { FeatureFlag } from "../905/652992";
import { Ro } from "../figma_app/805373";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { A as _$$A4 } from "../6828/154709";
import { h1 } from "../905/986103";
import { getUserId, selectCurrentUser } from "../905/372672";
import { KindEnum } from "../905/129884";
import { A as _$$A5 } from "../5724/933949";
import { stripHtmlTags } from "../905/491152";
import { formatNumber } from "../figma_app/930338";
import { x as _$$x } from "../5430/373843";
import { L as _$$L } from "../1577/16430";
import { parseAndValidateManifest, getPluginOrWidget } from "../figma_app/844435";
import { u as _$$u2 } from "../905/952696";
import { X as _$$X2, b as _$$b } from "../5430/435821";
import { I as _$$I } from "../905/343721";
import { aI, JA, lx } from "../figma_app/558929";
import { hasExternalRestrictedOrgId } from "../figma_app/12796";
import { mapToEditorType } from "../figma_app/300692";
import { mapEditorTypeToFileType } from "../figma_app/53721";
import { ManifestEditorType } from "../figma_app/155287";
import { showDropdownThunk, hideDropdownAction } from "../905/929976";
import { Um } from "../905/848862";
import { UK } from "../figma_app/764679";
import { Cf, it } from "../905/504727";
import { qN } from "../905/884637";
let L = registerModal(function ({
  extensionName: e,
  onConfirm: t,
  orgName: a,
  extensionType: s
}) {
  return jsx(ConfirmationModal2, {
    confirmationTitle: jsx(TextWithTruncation, {
      fontWeight: "semi-bold",
      children: renderI18nText("resources_tab.extension_revoke_modal.title", {
        extensionName: e
      })
    }),
    confirmText: getI18nString("resources_tab.extension_revoke_modal.confirmation_button"),
    onConfirm: t,
    popStack: !0,
    children: jsx(TextWithTruncation, {
      children: renderI18nText("widget" === s ? "resources_tab.extension_revoke_modal.body.widget" : "resources_tab.extension_revoke_modal.body.plugin", {
        orgName: jsx(TextWithTruncation, {
          fontWeight: "semi-bold",
          children: a
        })
      })
    })
  });
}, "ExtensionAllowlistRevokeConfirmationModal");
let U = new Ef([], {
  keys: ["name"],
  threshold: 0,
  tokenize: !0,
  matchAllTokens: !0
});
function F(e) {
  let {
    requesters
  } = e;
  if (!requesters || 0 === requesters.length) return null;
  let a = null;
  a = 1 === requesters.length ? jsx(TextWithTruncation, {
    fontSize: 11,
    color: "secondary",
    children: renderI18nText("resources_tab.approved_plugins.modal.requested_by.one", {
      requesterName: requesters[0].name
    })
  }) : 2 === requesters.length ? jsx(TextWithTruncation, {
    fontSize: 11,
    color: "secondary",
    children: renderI18nText("resources_tab.approved_plugins.modal.requested_by.two", {
      requesterName1: requesters[0].name,
      requesterName2: requesters[1].name
    })
  }) : jsx(TextWithTruncation, {
    fontSize: 11,
    color: "secondary",
    children: renderI18nText("resources_tab.approved_plugins.modal.requested_by.many", {
      requesterName: requesters[0].name,
      numOthers: requesters.length - 1
    })
  });
  return jsxs("div", {
    className: _$$s.flex.gap4.$,
    children: [jsx(_$$u, {
      avatarSize: Pf.SMALL16,
      users: requesters,
      totalNum: requesters.length,
      numAvatarsToDisplay: 3
    }), a]
  });
}
function q({
  extension: e,
  org: t,
  onNavigateBack: a,
  mode: r,
  requests: l
}) {
  let o = useDispatch();
  let d = _$$q(XB, !0);
  let {
    id
  } = e;
  let v = e.isWidget ? "widget" : "plugin";
  let f = useMemo(() => {
    let e = new Map();
    l.forEach(t => {
      if (!t.orgUser || !t.workspaceId) return;
      let a = t.workspaceId;
      let {
        workspaceUsers,
        user
      } = t.orgUser;
      if (!workspaceUsers) return;
      let i = {
        name: user.name ?? "",
        imgUrl: user.imgUrl,
        id: user.id,
        handle: user.handle
      };
      let r = e.get(a);
      r ? r.push(i) : e.set(a, [i]);
    });
    return e;
  }, [l]);
  let [j, k] = useState(t.isPluginAllowlisted);
  let E = useLatestRef(j);
  let S = useMemo(() => l.some(e => null === e.workspaceId), [l]);
  let T = useCallback(() => (t.workspaces ?? []).reduce((e, t) => (e[t.id] = !!j || t.isPluginAllowlisted, e), {}), [t.workspaces, j]);
  let [R, O] = useState(T());
  let [D, q] = useState(null);
  useEffect(() => {
    void 0 !== E && E !== j && (j ? (D || q(R), O(e => Object.fromEntries(Object.entries(e).map(([e]) => [e, j])))) : D ? (O(D), q(null)) : O(e => Object.fromEntries(Object.entries(e).map(([e]) => [e, !1]))));
  }, [T, R, j, D, E]);
  let [$, B] = useState("");
  let G = useMemo(() => {
    let e = t.workspaces ?? [];
    return "" === $ ? e : (U.set(e), U.search($));
  }, [$, t.workspaces]);
  let z = async () => {
    let e = [];
    let a = [];
    for (let [t, n] of Object.entries(R)) {
      let s = G.find(e => e.id === t);
      s && (n && !s.isPluginAllowlisted && e.push(t), !n && s.isPluginAllowlisted && a.push(t));
    }
    let n = [];
    !j && e.length > 0 && n.push(_$$X.enableExtensionForWorkspaces({
      orgId: t.id,
      extensionId: id,
      extensionType: v,
      workspaceIds: e
    }));
    a.length > 0 && n.push(_$$X.disableExtensionForWorkspaces({
      orgId: t.id,
      extensionId: id,
      extensionType: v,
      workspaceIds: a
    }));
    j !== t.isPluginAllowlisted && n.push(j ? _$$X.enableExtensionForOrg({
      orgId: t.id,
      extensionId: id,
      extensionType: v
    }) : _$$X.disableExtensionForOrg({
      orgId: t.id,
      extensionId: id,
      extensionType: v
    }));
    try {
      await Promise.all(n);
      o(popModalStack());
      d();
    } catch {
      o(VisualBellActions.enqueue({
        error: !0,
        message: getI18nString("resources_tab.approved_plugins.modal.failed_to_update_plugin_approval")
      }));
    }
  };
  let V = useMemo(() => j !== t.isPluginAllowlisted || Object.entries(R).some(([e, a]) => {
    let n = t.workspaces?.find(t => t.id === e);
    return n?.isPluginAllowlisted !== a;
  }), [j, t.isPluginAllowlisted, t.workspaces, R]);
  let W = useMemo(() => j || Object.values(R).some(e => e), [j, R]);
  let H = useMemo(() => j ? [] : Object.entries(R).filter(([, e]) => e).map(([e]) => e), [R, j]);
  return jsxs("div", {
    className: _$$s.flex.flexColumn.hFull.$,
    children: [jsx("div", {
      className: _$$s.px8.py4.flex.itemsCenter.bb1.bSolid.colorBorder.$,
      children: jsxs("div", {
        className: _$$s.wFull.flex.itemsCenter.$,
        children: [jsxs("div", {
          className: _$$s.wFull.flex.itemsCenter.gap4.$,
          children: [jsx(_$$$, {
            icon: "chevron-left-32",
            onClick: a,
            variant: "text"
          }), jsx(TextWithTruncation, {
            children: renderI18nText("plugin" === v ? "resources_tab.approved_plugins.modal.approve_plugin" : "resources_tab.approved_plugins.modal.approve_widget")
          })]
        }), jsx(kq, {
          onChange: B,
          focusOnMount: !1,
          query: $,
          clearSearch: () => B(""),
          hideXIcon: !0,
          placeholder: getI18nString("resources_tab.approved_plugins.modal.search_workspaces"),
          smallFont: !0
        })]
      })
    }), jsxs("div", {
      className: _$$s.flex.itemsCenter.px16.h48.bb1.colorBorder.bSolid.gap8.$,
      children: [jsx("div", {
        className: _$$s.p8.$,
        children: jsx(_$$l, {
          on: j,
          onChange: () => {
            k(e => !e);
          },
          dataTestId: "org-allowlist-toggle"
        })
      }), jsx(TextWithTruncation, {
        children: renderI18nText("resources_tab.approved_plugins.modal.allow_for_all_files_and_drafts_in_org_workspaces", {
          orgName: t.name
        })
      })]
    }), !j && S && jsx("div", {
      className: _$$s.px16.pt16.$,
      children: jsx(_$$z, {
        dataTestId: "plugin-request-from-drafts-warning",
        variant: "warning",
        orientation: "vertical",
        iconSrc: _$$A3,
        children: "plugin" === v ? getI18nString("resources_tab.approved_plugins.modal.individual_workspaces_approval_warning") : getI18nString("resources_tab.approved_widgets.modal.individual_workspaces_approval_warning")
      })
    }), jsx(_$$P, {
      className: _$$s.flexGrow1.$,
      children: jsx("div", {
        className: _$$s.py8.$$if(j, _$$s.opacity0_5.eventsNone).$,
        children: G.map(e => jsxs("div", {
          className: _$$s.px16.h48.flex.itemsCenter.gap8.$,
          children: [jsx("div", {
            className: _$$s.p8.$,
            children: jsx(_$$l, {
              dataTestId: `workspace-allowlist-toggle-${e.id}`,
              on: R[e.id],
              onChange: () => O(t => ({
                ...t,
                [e.id]: !t[e.id]
              }))
            })
          }), jsxs("div", {
            className: _$$s.flex.flexColumn.gap4.$,
            children: [jsx(TextWithTruncation, {
              children: e.name
            }), jsx(F, {
              requesters: f.get(e.id)
            })]
          })]
        }, e.id))
      })
    }), jsxs("div", {
      className: _$$s.flex.itemsCenter.p16.bt1.colorBorder.bSolid.gap8.justifyEnd.$,
      children: ["review" === r && jsxs(Fragment, {
        children: [jsx(_$$$, {
          onClick: a,
          children: jsx(TextWithTruncation, {
            children: renderI18nText("resources_tab.approved_plugins.modal.cancel")
          })
        }), jsx(_$$$, {
          variant: "primary",
          onClick: () => {
            let e = () => {
              o(VisualBellActions.enqueue({
                error: !0,
                message: getI18nString("resources_tab.approved_plugins.modal.failed_to_update_plugin_approval")
              }));
            };
            try {
              z().then(() => {
                let e = {
                  orgId: t.id,
                  extensionId: id,
                  extensionType: v
                };
                if (0 === H.length) {
                  _$$J.approveRequestForOrg(e);
                  return;
                }
                _$$J.updateRequestForWorkspaces({
                  ...e,
                  approvedWorkspaceIds: H
                });
              }).catch(e);
            } catch (t) {
              e();
            }
          },
          disabled: !W,
          dataTestId: "approve-button",
          children: jsx(TextWithTruncation, {
            children: renderI18nText("resources_tab.approved_plugins.modal.approve")
          })
        })]
      }), "manage" === r && jsxs(Fragment, {
        children: [jsx(_$$$, {
          onClick: a,
          children: jsx(TextWithTruncation, {
            children: renderI18nText("resources_tab.approved_plugins.modal.back")
          })
        }), jsx(_$$$, {
          variant: "primary",
          onClick: () => {
            if (!j && 0 === H.length) {
              o(showModalHandler({
                type: L,
                data: {
                  extensionName: e.currentPluginVersion?.name ?? "",
                  orgName: t.name,
                  extensionType: v,
                  onConfirm: () => {
                    z();
                  }
                },
                showModalsBeneath: !0
              }));
              return;
            }
            z();
          },
          dataTestId: "save-changes-button",
          disabled: !V,
          children: jsx(TextWithTruncation, {
            children: renderI18nText("resources_tab.approved_plugins.modal.save_changes")
          })
        })]
      })]
    })]
  });
}
let K = "extension_usage_data--dropdown--Epdmp";
var Q = (e => (e.LastWeek = "Last Week", e.LastMonth = "Last Month", e.LastYear = "Last Year", e))(Q || {});
let Z = {
  usage_windows: {
    "Last Week": {
      n_extension_actions: 0,
      n_extension_users: 0,
      top_org_users: [],
      workspaces_extensions_used_on: ""
    },
    "Last Month": {
      n_extension_actions: 0,
      n_extension_users: 0,
      top_org_users: [],
      workspaces_extensions_used_on: ""
    },
    "Last Year": {
      n_extension_actions: 0,
      n_extension_users: 0,
      top_org_users: [],
      workspaces_extensions_used_on: ""
    }
  }
};
let ee = {
  usage_windows: {
    "Last Week": {
      n_extension_actions: 0,
      n_extension_users: 0,
      top_org_users: [{
        user_id: "placeholder1",
        user_name: "Organization user",
        org_rank: 1,
        n_extension_actions: 0
      }, {
        user_id: "placeholder2",
        user_name: "Organization user",
        org_rank: 2,
        n_extension_actions: 0
      }, {
        user_id: "placeholder3",
        user_name: "Organization user",
        org_rank: 3,
        n_extension_actions: 0
      }],
      workspaces_extensions_used_on: ""
    },
    "Last Month": {
      n_extension_actions: 0,
      n_extension_users: 0,
      top_org_users: [{
        user_id: "placeholder1",
        user_name: "Organization user",
        org_rank: 1,
        n_extension_actions: 0
      }, {
        user_id: "placeholder2",
        user_name: "Organization user",
        org_rank: 2,
        n_extension_actions: 0
      }, {
        user_id: "placeholder3",
        user_name: "Organization user",
        org_rank: 3,
        n_extension_actions: 0
      }],
      workspaces_extensions_used_on: ""
    },
    "Last Year": {
      n_extension_actions: 0,
      n_extension_users: 0,
      top_org_users: [{
        user_id: "placeholder1",
        user_name: "Organization user",
        org_rank: 1,
        n_extension_actions: 0
      }, {
        user_id: "placeholder2",
        user_name: "Organization user",
        org_rank: 2,
        n_extension_actions: 0
      }, {
        user_id: "placeholder3",
        user_name: "Organization user",
        org_rank: 3,
        n_extension_actions: 0
      }],
      workspaces_extensions_used_on: ""
    }
  }
};
let et = new Map([["Last Week", renderI18nText("resources_tab.extension_usage_data.past_7_days")], ["Last Month", renderI18nText("resources_tab.extension_usage_data.past_30_days")], ["Last Year", renderI18nText("resources_tab.extension_usage_data.past_year")]]);
function ea({
  users: e,
  showUpsell: t,
  extensionType: a
}) {
  let s = useDispatch();
  let l = e.sort((e, t) => e.org_rank - t.org_rank);
  let o = jsx(SecureLink, {
    onClick: () => {
      s(showModalHandler({
        type: ConsumptionPaywallModalPlansPricing,
        data: {
          team: null,
          resource: "widget" === a ? FeatureFlag.WIDGET_ANALYTICS : FeatureFlag.PLUGIN_ANALYTICS,
          currentPlan: consumptionPaywallUtils.Plan.ORG,
          upsellPlan: consumptionPaywallUtils.Plan.ENTERPRISE,
          editorType: null
        }
      }));
      trackEventAnalytics("Admin Plugin Review Modal", {
        action: "Upgrade to Enterprise"
      });
    },
    trusted: !0,
    target: "_blank",
    "data-testid": "upgrade-to-enterprise-link",
    children: jsx(TextWithTruncation, {
      fontSize: 11,
      children: renderI18nText("resources_tab.extension_usage_data.upgrade_enterprise_link")
    })
  });
  let c = "widget" === a ? jsx(TextWithTruncation, {
    fontSize: 11,
    children: renderI18nText("resources_tab.extension_usage_data.upgrade_enterprise_widgets", {
      upgradeLink: o
    })
  }) : jsx(TextWithTruncation, {
    fontSize: 11,
    children: renderI18nText("resources_tab.extension_usage_data.upgrade_enterprise_plugins", {
      upgradeLink: o
    })
  });
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: _$$s.flex.flexColumn.$,
      style: t ? {
        WebkitMaskImage: "linear-gradient(0deg, transparent, var(--color-bg))"
      } : {},
      children: l.map(e => {
        let a = {
          id: e.user_id,
          name: e.user_name,
          img_url: e.img_url
        };
        return jsxs("div", {
          className: _$$s.pt16.flex.justifyBetween.alignCenter.itemsCenter.$,
          children: [jsxs("div", {
            className: _$$s.flex.breakWord.alignLeft.itemsCenter.pr8.gap8.$,
            children: [!t && jsx(H8, {
              user: a,
              size: Pf.MEDIUM
            }), t && jsx(Ro, {
              entity: {}
            }), jsx(TextWithTruncation, {
              fontSize: 11,
              fontWeight: "medium",
              children: e.user_name
            })]
          }), t && jsx(TextWithTruncation, {
            fontSize: 11,
            color: "secondary",
            children: renderI18nText("resources_tab.extension_usage_data.placeholder_runs")
          }), !t && jsx(TextWithTruncation, {
            fontSize: 11,
            color: "secondary",
            children: renderI18nText("resources_tab.extension_usage_data.runs", {
              numberOfRuns: e.n_extension_actions
            })
          })]
        }, e.user_id);
      })
    }), t && jsx("div", {
      className: _$$s.mt16.px16.py16.bRadius4.colorBgSecondary.breakWord.$,
      children: c
    })]
  });
}
function en({
  workspaces: e
}) {
  let t;
  let a = _$$z2.record(_$$z2.string(), _$$z2.number());
  try {
    t = a.parse(JSON.parse(e));
  } catch (e) {
    t = {};
  }
  let s = Object.keys(t);
  return jsx("div", {
    className: _$$s.flex.flexColumn.pl16.pr16.$,
    children: s.map(e => jsx("div", {
      className: _$$s.pt16.breakWord.alignLeft.pr8.$,
      children: jsx(TextWithTruncation, {
        fontSize: 11,
        children: e
      })
    }, e))
  });
}
var es = (e => (e[e.Users = 0] = "Users", e[e.Workspaces = 1] = "Workspaces", e))(es || {});
function ei(e) {
  let t = useTeamPlanPublicInfo().unwrapOr(null);
  let a = t?.tier !== FPlanNameType.ENTERPRISE;
  let i = e.usageData || (a ? ee : Z);
  let {
    extensionType
  } = e;
  let [l, o] = useState(0);
  let [c, m] = useState(!1);
  let p = [jsx(c$, {
    onClick: () => o(0),
    recordingKey: "userViewOption",
    children: renderI18nText("resources_tab.extension_usage_data.users")
  }, 0), jsx(c$, {
    onClick: () => o(1),
    recordingKey: "workspaceViewOption",
    children: renderI18nText("resources_tab.extension_usage_data.workspaces")
  }, 1)];
  let [g, x] = useState("Last Week");
  let [b, v] = useState(!1);
  let f = i.usage_windows[g];
  let y = [];
  for (let [e, t] of et.entries()) y.push(jsx(c$, {
    onClick: () => x(e),
    children: t
  }, e));
  let w = 0 !== f.n_extension_actions || 0 !== f.n_extension_users || a;
  let k = jsxs(Fragment, {
    children: [jsx("div", {
      className: _$$s.wFull.bb1.bSolid.colorBorder.$
    }), 0 === l && jsx(ea, {
      users: f.top_org_users,
      showUpsell: a,
      extensionType
    }), 1 === l && jsx(en, {
      workspaces: f.workspaces_extensions_used_on
    })]
  });
  return jsxs("div", {
    className: _$$s.hFull.py8.px16.$,
    "data-testid": "extension-usage-data",
    children: [jsxs("div", {
      className: _$$s.flex.justifyBetween.py8.$,
      children: [jsxs("div", {
        className: _$$s.block.$,
        children: [jsxs(ButtonBase, {
          defaultClass: "",
          onClick: () => v(!b),
          dataTestId: "usage-window-dropdown",
          children: [et.get(g), jsx(SvgComponent, {
            svg: _$$A4,
            className: _$$s.colorIconSecondary.inlineBlock.pl8.$
          })]
        }), b && jsx(ms, {
          className: K,
          onClick: () => v(!1),
          children: y
        })]
      }), jsxs("div", {
        className: _$$s.block.$,
        children: [jsxs(ButtonBase, {
          defaultClass: "",
          onClick: a ? lQ : () => m(!c),
          dataTestId: "user-workspace-dropdown",
          children: [0 === l ? renderI18nText("resources_tab.extension_usage_data.users") : renderI18nText("resources_tab.extension_usage_data.workspaces"), !a && jsx(SvgComponent, {
            svg: _$$A4,
            className: _$$s.colorIconSecondary.inlineBlock.pl8.$
          })]
        }), c && jsx(ms, {
          className: K,
          onClick: () => m(!1),
          children: p
        })]
      })]
    }), jsxs("div", {
      className: _$$s.flex.pt16.pb16.wFull.justifyBetween.$,
      children: [jsx("div", {
        className: _$$s.w16.$
      }), jsxs("div", {
        className: _$$s.flex.flexColumn.alignCenter.$,
        children: [jsx("div", {
          "data-testid": "total-num-runs",
          children: jsx(TextWithTruncation, {
            fontSize: 14,
            fontWeight: "semi-bold",
            children: a ? "--" : f.n_extension_actions
          })
        }), jsx("div", {
          children: jsx(TextWithTruncation, {
            fontSize: 11,
            color: "secondary",
            children: renderI18nText("resources_tab.extension_usage_data.total_runs")
          })
        })]
      }), jsxs("div", {
        className: _$$s.flex.flexColumn.alignCenter.$,
        children: [jsx("div", {
          "data-testid": "total-num-users",
          children: jsx(TextWithTruncation, {
            fontSize: 14,
            fontWeight: "semi-bold",
            children: a ? "--" : f.n_extension_users
          })
        }), jsx("div", {
          children: jsx(TextWithTruncation, {
            fontSize: 11,
            color: "secondary",
            children: renderI18nText("resources_tab.extension_usage_data.users")
          })
        })]
      }), jsx("div", {
        className: _$$s.w16.$
      })]
    }), w && k]
  });
}
function ed({
  log: e,
  index: t,
  noteType: a
}) {
  let r;
  let l;
  let o = useDispatch();
  let d = useCallback((e, t) => {
    e.preventDefault();
    e.stopPropagation();
    (async e => {
      try {
        await navigator.clipboard.writeText(e);
      } catch (e) {
        o(VisualBellActions.enqueue({
          message: `Could not copy email: ${e.message}`,
          error: !0
        }));
        return e;
      }
    })(t).then(() => {
      o(VisualBellActions.enqueue({
        message: `Copied ${t}`
      }));
    }).catch(() => {});
  }, [o]);
  try {
    r = JSON.parse(e.metadata);
  } catch {
    return null;
  }
  let c = "request" === a ? r.requester_note : r.decline_note;
  let p = r.workspace_name ?? "";
  let g = {
    id: e.actorId ?? "",
    name: e.actor?.name ?? "",
    imgUrl: e.actor?.imgUrl ?? ""
  };
  let x = e.actor?.email ?? "";
  let b = 0 === t ? _$$s.flex.flexColumn.pb16.$ : _$$s.flex.flexColumn.pb16.pt16.bt1.colorBorder.bSolid.$;
  switch (a) {
    case "approve":
      l = p ? getI18nString("extension_decline_modal.approved_access_workspace", {
        workspace: p
      }) : getI18nString("extension_decline_modal.approved_access_org");
      break;
    case "decline":
      l = getI18nString("extension_decline_modal.declined_request");
      break;
    case "revoke":
      l = p ? getI18nString("extension_decline_modal.revoked_access_workspace", {
        workspace: p
      }) : getI18nString("extension_decline_modal.revoked_access_org");
      break;
    case "add":
      l = p ? getI18nString("extension_decline_modal.add_access_workspace", {
        workspace: p
      }) : getI18nString("extension_decline_modal.add_access_org");
      break;
    default:
      l = "";
  }
  return jsxs("div", {
    className: b,
    children: [jsxs("div", {
      className: _$$s.flex.flexRow.itemsCenter.gap8.$,
      children: [jsx(H8, {
        user: g,
        size: Pf.MEDIUM
      }), jsx("div", {
        role: "button",
        tabIndex: 0,
        className: _$$s.noWrap.overflowHidden.ellipsis.cursorPointer.$,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": x,
        "data-tooltip-show-immediately": !0,
        onMouseDown: e => d(e, x),
        children: jsx(TextWithTruncation, {
          fontSize: 11,
          fontWeight: "medium",
          children: g.name
        })
      }), jsx("div", {
        className: _$$s.noWrap.$,
        children: jsx(TextWithTruncation, {
          fontSize: 11,
          color: "secondary",
          children: jsx(h1, {
            date: e.createdAt
          })
        })
      })]
    }), jsx("div", {
      className: _$$s.ml32.mt4.overflowBreakWord.$,
      children: jsx(TextWithTruncation, {
        fontSize: 11,
        color: "secondary",
        children: l
      })
    }), c && jsx("div", {
      className: _$$s.ml32.mt4.overflowBreakWord.$,
      children: jsx(TextWithTruncation, {
        fontSize: 11,
        color: "default",
        children: c
      })
    })]
  });
}
function ec(e) {
  let {
    orgId,
    extensionId
  } = e;
  let s = useSubscription(ExtensionActivityLogHistoryView, {
    userId: getUserId(),
    actedOnIdOrKey: extensionId,
    orgId
  });
  let i = ("loaded" === s.status && s.data.org ? s.data.org.activityLogByActedOnId : []).sort((e, t) => new Date(t.createdAt).getTime() - new Date(e.createdAt).getTime());
  let r = (e, t) => {
    let a = e.eventName;
    return a.endsWith("_request_org") || a.endsWith("_request_workspace") ? jsx(ed, {
      log: e,
      index: t,
      noteType: "request"
    }, e.id) : a.endsWith("request_approve_org") || a.endsWith("request_approve_workspace") ? jsx(ed, {
      log: e,
      index: t,
      noteType: "approve"
    }, e.id) : a.endsWith("_add") || a.endsWith("_add_workspace") ? jsx(ed, {
      log: e,
      index: t,
      noteType: "add"
    }, e.id) : a.endsWith("_request_reject_org") || a.endsWith("_request_reject_workspace") ? jsx(ed, {
      log: e,
      index: t,
      noteType: "decline"
    }, e.id) : a.endsWith("_remove") || a.endsWith("_remove_workspace") ? jsx(ed, {
      log: e,
      index: t,
      noteType: "revoke"
    }, e.id) : void 0;
  };
  return jsx(_$$P, {
    className: _$$s.hFull.flex.flexColumn.p16.gap16.$,
    children: jsx("div", {
      "data-testid": "extension-request-sidebar",
      children: i.map((e, t) => r(e, t))
    })
  });
}
function eu(e) {
  let t;
  let {
    numWorkspaces,
    isOrgAllowlisted
  } = e;
  return (isOrgAllowlisted ? t = jsx(TextWithTruncation, {
    fontSize: 11,
    fontWeight: "regular",
    color: "success",
    children: renderI18nText("resources_tab.approved_plugins.table.approved_for_all_workspaces")
  }) : numWorkspaces > 0 && (t = jsx(TextWithTruncation, {
    fontSize: 11,
    fontWeight: "regular",
    color: "success",
    children: renderI18nText("resources_tab.approved_plugins.table.approved_for_workspace", {
      numWorkspaces
    })
  })), t) ? jsxs("div", {
    className: _$$s.colorBg.py12.px16.flex.flexRow.gap8.bb1.bSolid.colorBorder.$,
    children: [jsx(SvgComponent, {
      width: "16px",
      height: "16px",
      svg: _$$A5,
      className: "extension_allowlist_modal_sidebar--greenCheck--uZoPv"
    }), t]
  }) : null;
}
function em(e) {
  let {
    isAllowed,
    usageData,
    numWorkspaces,
    extensionType,
    isOrgAllowlisted,
    orgId,
    extensionId
  } = e;
  let [m, p] = useState("requests");
  return jsxs("div", {
    className: _$$s.hFull.wFull.flex.flexColumn.bl1.bSolid.colorBorder.$,
    children: [jsxs("div", {
      className: _$$s.colorBg.py12.px16.flex.flexRow.gap16.bb1.bSolid.colorBorder.$,
      children: [jsx("button", {
        onClick: () => p("requests"),
        children: jsx(TextWithTruncation, {
          fontSize: 11,
          fontWeight: "medium",
          color: "requests" === m ? "default" : "secondary",
          children: renderI18nText("resources_tab.extension_request_sidebar.requests")
        })
      }), isAllowed && jsx("button", {
        onClick: () => {
          p("usage");
          trackEventAnalytics("Admin Plugin Review Modal", {
            action: "Extension usage tab"
          });
        },
        "data-testid": "extension-usage-tab",
        children: jsx(TextWithTruncation, {
          fontSize: 11,
          fontWeight: "medium",
          color: "usage" === m ? "default" : "secondary",
          children: renderI18nText("resources_tab.extension_usage_data.usage")
        })
      })]
    }), jsx(eu, {
      numWorkspaces,
      isOrgAllowlisted
    }), "requests" === m ? jsx(ec, {
      orgId,
      extensionId
    }) : jsx(ei, {
      usageData,
      extensionType
    })]
  });
}
function ej({
  mode: e,
  extension: t,
  securityFormResponse: a
}) {
  let {
    currentPluginVersion
  } = t;
  if (!currentPluginVersion) return null;
  let i = formatNumber(t.installCount);
  let r = currentPluginVersion.name ?? "";
  let l = currentPluginVersion.description ?? "";
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap16.p16.$,
    "data-testid": "extension-allowlist-overview-section",
    children: [jsxs("div", {
      className: _$$s.flex.flexColumn.gap8.$,
      children: [jsx(TextWithTruncation, {
        fontSize: 13,
        fontWeight: "semi-bold",
        truncate: "end",
        children: r
      }), jsxs("div", {
        className: _$$s.flex.gap4.$,
        children: [jsx(ew, {
          plugin: t
        }), "review" === e && jsx(TextWithTruncation, {
          color: "secondary",
          children: renderI18nText("resources_tab.approved_plugins.modal.user_count", {
            count: i
          })
        })]
      })]
    }), currentPluginVersion.coverImageUrl && jsx("img", {
      alt: "extension cover",
      src: currentPluginVersion.coverImageUrl,
      className: _$$s.wFull.bRadius4.$
    }), jsx(ey, {
      description: l
    }), jsxs("div", {
      className: _$$s.flex.flexColumn.gap16.$,
      children: [jsx(eE, {
        extension: t,
        securityFormResponse: a,
        entryPoint: "review" === e ? _$$X2.ADMIN_REVIEW : _$$X2.ADMIN_MANAGE
      }), jsx(eC, {
        extension: t
      })]
    })]
  });
}
function ey({
  description: e
}) {
  let t = useRef(null);
  let [a, i] = useState(!1);
  let [r, l] = useState(!1);
  useLayoutEffect(() => {
    t.current && i(t.current.isTruncated);
  }, [e]);
  return jsxs("div", {
    className: _$$s.flex.flexColumn.$,
    children: [r ? jsx(TextWithTruncation, {
      ref: t,
      children: stripHtmlTags(e).trim()
    }) : jsx(TextWithTruncation, {
      truncate: "line-clamp",
      lineClamp: 3,
      ref: t,
      showTooltipWhenTruncated: !1,
      children: stripHtmlTags(e).trim()
    }), a && jsx(SecureLink, {
      trusted: !0,
      onClick: () => l(e => !e),
      children: r ? getI18nString("resources_tab.approved_plugins.modal.show_less") : getI18nString("resources_tab.approved_plugins.modal.show_more")
    })]
  });
}
function ew({
  plugin: e
}) {
  let t = useMemo(() => (e.communityPublishers ?? []).map(e => e.profile).filter(e => null != e).map(e => {
    let t = function (e) {
      switch (e.entityType) {
        case "user":
          return e.user;
        case "team":
          return e.team;
        case "org":
          return e.org;
        default:
          return null;
      }
    }(e);
    return {
      id: e.id,
      badges: [],
      profile_handle: e.profileHandle,
      img_urls: {},
      name: t?.name ?? "",
      img_url: t?.imgUrl ?? "",
      follower_count: 0,
      description: ""
    };
  }), [e.communityPublishers]);
  return jsxs("div", {
    className: _$$s.flex.gap8.$,
    children: [jsx(_$$L, {
      publishers: t,
      size: 16
    }), jsx(ek, {
      profiles: t
    })]
  });
}
function ek({
  profiles: e
}) {
  let [t, a, ...s] = e;
  return t ? a ? 0 === s.length ? jsx(TextWithTruncation, {
    color: "secondary",
    children: renderI18nText("resources_tab.approved_plugins.modal.attribution_two_creators", {
      creator1: t.name,
      creator2: a.name
    })
  }) : jsx(TextWithTruncation, {
    color: "secondary",
    children: renderI18nText("resources_tab.approved_plugins.modal.attribution_multiple_creators", {
      creator1: t.name
    })
  }) : jsx(TextWithTruncation, {
    color: "secondary",
    children: renderI18nText("resources_tab.approved_plugins.modal.attribution_single_creator", {
      creator: t.name
    })
  }) : null;
}
function eE({
  extension: e,
  securityFormResponse: t,
  entryPoint: a
}) {
  let {
    currentPluginVersion
  } = e;
  let r = useMemo(() => {
    let e = currentPluginVersion?.manifest;
    if (e) return parseAndValidateManifest(e);
  }, [currentPluginVersion?.manifest]);
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap8.$,
    children: [jsx(TextWithTruncation, {
      color: "secondary",
      children: renderI18nText("resources_tab.approved_plugins.modal.security")
    }), jsx(_$$b, {
      securityFormResponse: t,
      entryPoint: a,
      isWidget: !!e.isWidget
    }), jsx(_$$u2, {
      networkAccess: r?.networkAccess,
      isWidget: !!e.isWidget,
      isAlwaysExpanded: !0,
      isLearnMoreLinkVisible: !0
    })]
  });
}
function eC({
  extension: e
}) {
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap8.$,
    children: [jsx(TextWithTruncation, {
      color: "secondary",
      children: renderI18nText("resources_tab.approved_plugins.modal.licenses")
    }), jsx(_$$x, {
      isMonetizedResource: null != e.monetizedResourceMetadataId,
      isHubFile: !1
    })]
  });
}
let eU = "EXTENSION_ALLOWLIST_TRY_EDITOR_DROPDOWN";
export function $$eF1(e) {
  let {
    extension,
    orgId,
    mode,
    resource,
    source
  } = e;
  let o = useMemo(() => {
    let e = extension.currentPluginVersion?.manifest;
    if (e) return parseAndValidateManifest(e);
  }, [extension.currentPluginVersion?.manifest]);
  if (!o) return null;
  let d = o.editorType ?? [];
  if (d.length > 1) return jsx(eq, {
    extension,
    manifestEditorTypes: d,
    orgId,
    mode,
    resource,
    source
  });
  let c = d[0] ?? ManifestEditorType.FIGMA;
  return jsx(e$, {
    extension,
    orgId,
    mode,
    manifestEditorType: c,
    resource,
    source
  });
}
function eq(e) {
  let {
    extension,
    manifestEditorTypes,
    orgId,
    mode,
    resource,
    source
  } = e;
  let {
    dropdownIsShown,
    toggleSwitchEditorDropdown,
    ExtensionAllowlistTryEditorDropdown
  } = function (e, t, a, s, l) {
    let o = useDispatch();
    let d = Um();
    let c = d?.type === eU;
    let _ = getPluginOrWidget(e) || s;
    return {
      dropdownIsShown: c,
      toggleSwitchEditorDropdown: (e, t) => {
        let a = e.current?.getBoundingClientRect();
        a && ((void 0 !== t ? t : !c) ? o(showDropdownThunk({
          type: eU,
          data: {
            targetRect: a
          }
        })) : o(hideDropdownAction()));
      },
      ExtensionAllowlistTryEditorDropdown: function ({
        manifestEditorTypes: s
      }) {
        let i = s.slice().sort();
        return jsx(Cf, {
          className: qN,
          targetRect: d?.data.targetRect,
          minWidth: 242,
          type: it.MATCH_BACKGROUND,
          propagateCloseClick: !0,
          children: i.map(s => jsx(UK, {
            editorType: s,
            onClick: n => {
              n.preventDefault();
              n.stopPropagation();
              o(hideDropdownAction());
              let i = mapToEditorType(s);
              "community" === l ? o(aI({
                resource: _,
                fullscreenEditorType: i
              })) : "review" === a ? o(JA({
                extension: e,
                fullscreenEditorType: i
              })) : o(lx({
                extension: e,
                fullscreenEditorType: i
              }));
              trackEventAnalytics("Admin Plugin Review Modal", {
                orgId: t,
                extensionId: e.id,
                extensionType: e.isWidget ? "widget" : "plugin",
                mode: a,
                editorType: mapEditorTypeToFileType(i),
                action: "Try it out"
              });
            }
          }, s))
        });
      }
    };
  }(extension, orgId, mode, resource, source);
  let b = useRef(null);
  let v = selectCurrentUser();
  let f = useCurrentPrivilegedPlan("UniversalEditorPluginTryButton").unwrapOr(null);
  let y = f?.name;
  let w = hasExternalRestrictedOrgId(v);
  return jsxs("div", {
    ref: b,
    children: [jsx(_$$$, {
      onClick: () => {
        toggleSwitchEditorDropdown(b, !0);
      },
      dataTestId: "universal-editor-button",
      disabled: w,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": w && y ? getI18nString("resources_tab.approved_plugins.modal.try_it_out_ecc_tooltip", {
        orgName: y
      }) : void 0,
      children: jsxs("div", {
        className: _$$s.flex.itemsCenter.gap4.$,
        children: [jsx(TextWithTruncation, {
          children: renderI18nText("resources_tab.approved_plugins.modal.try_it_out")
        }), jsx(_$$I, {
          icon: "chevron-down-16"
        })]
      })
    }), dropdownIsShown && jsx(ExtensionAllowlistTryEditorDropdown, {
      manifestEditorTypes
    })]
  });
}
function e$(e) {
  let {
    extension,
    orgId,
    mode,
    manifestEditorType,
    resource,
    source
  } = e;
  let c = useDispatch();
  let _ = getPluginOrWidget(extension) || resource;
  let m = mapToEditorType(manifestEditorType);
  let p = () => {
    "community" === source ? c(aI({
      resource: _,
      fullscreenEditorType: m
    })) : "review" === mode ? c(JA({
      extension,
      fullscreenEditorType: m
    })) : c(lx({
      extension,
      fullscreenEditorType: m
    }));
  };
  let x = selectCurrentUser();
  let b = hasExternalRestrictedOrgId(x);
  let v = useCurrentPrivilegedPlan("SingleEditorPluginTryButton").unwrapOr(null);
  let f = v?.name;
  return jsx(_$$$, {
    onClick: () => {
      p();
      trackEventAnalytics("Admin Plugin Review Modal", {
        orgId,
        extensionId: extension.id,
        extensionType: extension.isWidget ? "widget" : "plugin",
        mode,
        editorType: mapEditorTypeToFileType(m),
        action: "Try it out"
      });
    },
    dataTestId: "single-editor-button",
    disabled: b,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": b && f ? getI18nString("resources_tab.approved_plugins.modal.try_it_out_ecc_tooltip", {
      orgName: f
    }) : void 0,
    children: jsx(TextWithTruncation, {
      children: renderI18nText("resources_tab.approved_plugins.modal.try_it_out")
    })
  });
}
function eB(e) {
  let {
    extensionType,
    extensionId,
    org,
    approvedWorkspaceIds,
    openDeclineModal
  } = e;
  let {
    Sprig
  } = useSprigWithSampling();
  let d = useTeamPlanUser().unwrapOr(null);
  let c = d?.key?.parentId;
  return jsx(_$$$, {
    onClick: () => {
      openDeclineModal({
        orgId: org.id,
        extensionId,
        extensionType,
        approvedWorkspaceIds
      });
      c && Sprig("track", XB, {
        orgId: org.id,
        userId: c
      });
    },
    children: jsx(TextWithTruncation, {
      children: renderI18nText("resources_tab.approved_plugins.modal.decline")
    })
  });
}
function eG(e) {
  let {
    extensionType,
    extensionId,
    org,
    goToEditTab,
    workspaces
  } = e;
  let d = useDispatch();
  let c = useTeamPlanUser().unwrapOr(null);
  let _ = c?.key?.parentId;
  let {
    Sprig
  } = useSprigWithSampling();
  return workspaces.length > 0 ? jsx(_$$$, {
    variant: "primary",
    onClick: goToEditTab,
    children: jsx(TextWithTruncation, {
      children: renderI18nText("resources_tab.approved_plugins.modal.approve\u2026")
    })
  }) : jsx(_$$$, {
    variant: "primary",
    onClick: () => {
      let e = () => {
        d(VisualBellActions.enqueue({
          error: !0,
          message: getI18nString("resources_tab.approved_plugins.modal.failed_to_update_plugin_approval")
        }));
      };
      try {
        _$$X.enableExtensionForOrg({
          orgId: org.id,
          extensionId,
          extensionType
        }).then(() => {
          _$$J.approveRequestForOrg({
            orgId: org.id,
            extensionId,
            extensionType
          });
          _ && Sprig("track", XB, {
            orgId: org.id,
            userId: _
          });
          d(VisualBellActions.enqueue({
            message: "plugin" === extensionType ? getI18nString("resources_tab.approved_plugins.modal.plugin_approved_for", {
              orgName: org.name
            }) : getI18nString("resources_tab.approved_plugins.modal.widget_approved_for", {
              orgName: org.name
            })
          }));
        }).catch(e);
      } catch (t) {
        e();
      }
      d(popModalStack());
    },
    children: jsx(TextWithTruncation, {
      children: renderI18nText("resources_tab.approved_plugins.modal.approve")
    })
  });
}
function ez(e) {
  let {
    extensionType,
    extensionId,
    org,
    goToEditTab,
    workspaces
  } = e;
  let d = useDispatch();
  let {
    Sprig
  } = useSprigWithSampling();
  let _ = useTeamPlanUser().unwrapOr(null);
  let p = _?.key?.parentId;
  return workspaces.length > 0 ? jsx(_$$$, {
    variant: "primary",
    onClick: goToEditTab,
    children: jsx(TextWithTruncation, {
      children: renderI18nText("resources_tab.approved_plugins.modal.edit_approvals")
    })
  }) : jsx(_$$$, {
    variant: "destructive-secondary",
    onClick: () => {
      _$$X.disableExtensionForOrg({
        orgId: org.id,
        extensionId,
        extensionType
      }).then(() => {
        d(VisualBellActions.enqueue({
          message: "plugin" === extensionType ? getI18nString("resources_tab.approved_plugins.modal.plugin_approval_removed_for", {
            orgName: org.name
          }) : getI18nString("resources_tab.approved_plugins.modal.widget_approval_removed_for", {
            orgName: org.name
          })
        }));
        p && Sprig("track", XB, {
          orgId: org.id,
          userId: p
        });
      });
      d(popModalStack());
    },
    children: jsx(TextWithTruncation, {
      children: renderI18nText("resources_tab.approved_plugins.modal.remove")
    })
  });
}
export function $$eV0({
  orgId: e,
  extensionId: t,
  extensionType: a,
  usageData: o,
  mode: m,
  initialTab: g,
  isAllowed: x,
  openDeclineModal: j,
  resource: y,
  source: w
}) {
  let C = useDispatch();
  let S = _$$A2(t, !0);
  let N = useSubscription(PluginAllowlistManagementModalView, {
    pluginId: t,
    orgId: e
  });
  let [I, T] = useState(g ?? "overview");
  let A = "widget" === a ? ox(t) : ab(t);
  if (!("loaded" === N.status && N.data.plugin && N.data.org && S.loaded)) return null;
  let R = N.data.plugin.pluginRequests?.filter(e => "pending" === e.status) ?? [];
  let O = N.data.org.workspaces ?? [];
  let L = O.filter(e => e.isPluginAllowlisted);
  let D = N.data.org.isPluginAllowlisted;
  m = m ?? (D ? "manage" : "review");
  x = void 0 === x ? D : x;
  return jsx(OJ, {
    title: function (e, t, a) {
      switch (e) {
        case "review":
          switch (t) {
            case "overview":
            case "edit":
              return "plugin" === a ? getI18nString("resources_tab.approved_plugins.modal.review_plugin") : getI18nString("resources_tab.approved_plugins.modal.review_widget");
          }
        case "manage":
          return "plugin" === a ? getI18nString("resources_tab.approved_plugins.modal.manage_plugin") : getI18nString("resources_tab.approved_plugins.modal.manage_widget");
      }
    }(m, I, a),
    maxWidth: 640,
    onClose: () => C(popModalStack()),
    closeOnEsc: !0,
    children: jsxs("div", {
      className: _$$s.relative.$,
      style: {
        height: 560
      },
      "data-testid": "plugin-allowlist-modal",
      children: ["overview" === I && jsxs("div", {
        className: _$$s.flex.flexColumn.hFull.$,
        children: [jsxs("div", {
          className: _$$s.flex.flexGrow1.overflowHidden.$,
          children: [jsx(_$$P, {
            className: _$$s.flexGrow1.flexRow.flexWrap.$,
            innerClassName: _$$s.hFull.$,
            children: jsx(ej, {
              extension: N.data.plugin,
              mode: m,
              securityFormResponse: S.data
            })
          }), jsx(AutoLayout, {
            direction: "horizontal",
            width: 240,
            children: jsx(em, {
              isAllowed: x,
              usageData: o,
              numWorkspaces: L.length,
              isOrgAllowlisted: D,
              extensionType: a,
              orgId: e,
              extensionId: t
            })
          })]
        }), jsxs("div", {
          className: _$$s.flex.itemsCenter.p16.bt1.colorBorder.bSolid.gap8.$,
          children: [jsx(SecureLink, {
            className: _$$s.mrAuto.$,
            href: A,
            target: "_blank",
            trusted: !0,
            "data-testid": "open-in-community-link",
            onClick: () => {
              trackEventAnalytics("Admin Plugin Review Modal", {
                orgId: e,
                extensionId: t,
                extensionType: a,
                mode: m,
                action: "Open in community"
              });
            },
            children: jsx(TextWithTruncation, {
              children: renderI18nText("resources_tab.approved_plugins.modal.open_in_community")
            })
          }), "review" === m && jsxs(Fragment, {
            children: [jsx($$eF1, {
              extension: N.data.plugin,
              orgId: e,
              mode: m,
              resource: y,
              source: w
            }), j && jsx(eB, {
              extensionId: t,
              extensionType: a,
              org: N.data.org,
              approvedWorkspaceIds: L.map(e => e.id),
              openDeclineModal: j
            }), jsx(eG, {
              extensionId: t,
              extensionType: a,
              org: N.data.org,
              workspaces: O,
              goToEditTab: () => T("edit")
            })]
          }), "manage" === m && jsxs(Fragment, {
            children: [jsx($$eF1, {
              extension: N.data.plugin,
              orgId: e,
              mode: m,
              resource: y,
              source: w
            }), jsx(ez, {
              extensionId: t,
              extensionType: a,
              org: N.data.org,
              workspaces: O,
              goToEditTab: () => T("edit")
            })]
          })]
        })]
      }), "edit" === I && jsx(q, {
        mode: m,
        org: N.data.org,
        onNavigateBack: () => T("overview"),
        requests: R,
        extension: N.data.plugin
      })]
    })
  });
}
export const ExtensionAllowlistModal = $$eV0;
export const TryItOutButton = $$eF1;