import { M as _$$M } from "../5430/324263";
import { s as _$$s } from "../5430/771444";
import { ai } from "../figma_app/487970";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useCallback, useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAtomValueAndSetter } from "../figma_app/27355";
import a from "classnames";
import { renderI18nText, getI18nString } from "../905/303541";
import { R as _$$R } from "../5430/129716";
import { Cc } from "../5430/664984";
import { Qo, qD, _m } from "../figma_app/471982";
import { isTntSavingEnabled } from "../figma_app/275462";
import { K2 } from "../figma_app/777551";
import { $9, Vm, rZ, XW, g0, YI, $3, qY, ws, bc, zL } from "../figma_app/427318";
import { $O, bK } from "../figma_app/701107";
import { Tm, e5 } from "../figma_app/740025";
import { hasClientMeta, isPlugin, isWidget, isMonetizedWithClientMeta } from "../figma_app/45218";
import { e0 } from "../905/696396";
import { Q as _$$Q } from "../5430/662041";
import { T as _$$T } from "../5132/203178";
import { J3 } from "../figma_app/699310";
import { hasOrgRole } from "../figma_app/300692";
import { E as _$$E } from "../905/53857";
import { I as _$$I } from "../5430/750114";
import { J as _$$J } from "../905/125993";
import { ServiceCategories as _$$e } from "../905/165054";
import { customHistory } from "../905/612521";
import { WB } from "../905/761735";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback, tT } from "../905/723791";
import { reportError } from "../905/11";
import { generateUUIDv4 } from "../905/871474";
import { XHR } from "../905/910117";
import { AuthFlowStep } from "../905/862321";
import { handleAtomEvent } from "../905/502364";
import { VisualBellActions } from "../905/302958";
import { AG } from "../figma_app/999312";
import { FL } from "../figma_app/248365";
import { wr } from "../figma_app/387599";
import { xn } from "../905/934145";
import { Om, tv } from "../figma_app/979714";
import { e as _$$e2 } from "../5430/411458";
import { d6, uR, s1 } from "../figma_app/304207";
import { showModalHandler } from "../905/156213";
import { logAndTrackCTA } from "../figma_app/314264";
import { ResourceSaveFromResourceId, ResourceSave, PluginInstall, AllowlistedPlugin } from "../figma_app/43951";
import { UserProfileTab } from "../figma_app/707808";
import { a as _$$a } from "../figma_app/601188";
import { G$, FF } from "../figma_app/588092";
import { c as _$$c } from "../figma_app/11961";
import { W as _$$W, B as _$$B } from "../905/841666";
import { w as _$$w } from "../5430/495667";
import { j7 } from "../905/929976";
import { j as _$$j } from "../905/834956";
import { W as _$$W2, C as _$$C } from "../5430/92864";
import { s as _$$s2 } from "../cssbuilder/589278";
import { KindEnum } from "../905/129884";
import { q as _$$q } from "../5430/229559";
import { A as _$$A } from "../5430/838986";
import { L as _$$L, I as _$$I2 } from "../1577/16430";
import { M as _$$M2 } from "../905/722875";
import { cy } from "../5430/28597";
import { fj, bU, Zc, CS, p9, sB } from "../5430/658869";
import { yq, Jp, Xd, eO as _$$eO, OQ, tF, X7, DD, N1, h_, nV, QY, VB, zu, NG, y_, Z0, YO, gi, dD, qY as _$$qY, kO } from "../5430/14019";
var l = a;
function L({
  orgName: e
}) {
  return jsx(_$$E, {
    variant: "defaultOutline",
    children: e ? renderI18nText("community.plugins.private_for_plugin_org_name", {
      orgName: e
    }) : renderI18nText("community.plugins.private_for_your_organization")
  });
}
let I = ai;
function N({
  resource: e,
  resourceContent: t
}) {
  let r;
  let i = I ? jsx(I, {
    resource: t
  }) : void 0;
  let n = $9(e);
  n && (r = hasOrgRole(n) ? jsx(L, {
    orgName: n.roles?.org?.name
  }) : void 0);
  return jsxs(Fragment, {
    children: [i, r, jsx(_$$I, {
      badges: e.badges,
      height: "16",
      border: "strong",
      disableIcon: !0
    })]
  });
}
let ee = "save-button-clicked";
function et(e, t, r, s) {
  return function (r, i) {
    let n = i();
    if (logAndTrackCTA(eo({
      state: n,
      resourceId: e.id,
      resourceType: Vm(e),
      viewContext: t,
      action: "save",
      loggedIn: !!n.user,
      orgId: s
    }), ee), !n.user) {
      reportError(_$$e.COMMUNITY, Error("[Community Saves] Attempted unsave without currentUser"));
      return;
    }
    if (hasClientMeta(e)) {
      let t = () => {
        let t = XHR.post(`/api/hub_file/${e.id}/save`);
        let s = `optimistic-resource-save-${generateUUIDv4()}`;
        WB().optimisticallyCreate({
          ResourceSave: {
            [s]: {
              userId: n.user.id,
              hubFileId: e.id,
              createdAt: new Date(Date.now()),
              resourceId: null,
              orgId: null
            }
          }
        }, t);
        t.then(() => {
          r(VisualBellActions.enqueue({
            message: getI18nString("community.saves.file_saved_for_your_profile"),
            type: "resource-save"
          }));
        }).catch(e => {
          reportError(_$$e.COMMUNITY, e);
        });
      };
      if (!n.authedActiveCommunityProfile?.public_at) {
        r(showModalHandler({
          type: G$,
          data: {
            userId: n.user.id,
            variations: [FF.OPT_IN],
            onFinish: t
          }
        }));
        return;
      }
      t();
    } else r(d6({
      id: e.id,
      resourceType: Vm(e),
      communityProfile: i().authedActiveCommunityProfile || void 0,
      orgId: s,
      source: uR.COMMUNITY_HUB,
      optimisticData: {
        resource: e
      }
    }));
  };
}
function er(e, t, r, s, i) {
  return function (n, o) {
    let a = o();
    if (logAndTrackCTA(eo({
      state: a,
      resourceId: e.id,
      resourceType: Vm(e),
      viewContext: t,
      action: "save",
      loggedIn: !!a.user,
      orgId: s
    }), ee), !a.user) {
      reportError(_$$e.COMMUNITY, Error("[Community Saves] Attempted unsave without currentUser"));
      return;
    }
    if (rZ(e)) {
      let t = $9(e);
      if (!t) {
        reportError(_$$e.COMMUNITY, Error("Extension type resource is missing plugin and widget content"), {
          extra: {
            resourceId: e.id
          }
        });
        return;
      }
      n(d6({
        id: e.id,
        resourceType: Vm(t),
        communityProfile: a.authedActiveCommunityProfile || void 0,
        orgId: s,
        source: uR.COMMUNITY_HUB,
        optimisticData: {
          resource: t
        }
      }));
    } else {
      if (!a.authedActiveCommunityProfile?.public_at) {
        n(showModalHandler({
          type: G$,
          data: {
            userId: a.user.id,
            variations: [FF.OPT_IN],
            onFinish: () => es({
              state: a,
              dispatch: n,
              resource: e,
              savesUrl: r,
              orgId: s,
              orgName: i
            })
          }
        }));
        return;
      }
      es({
        state: a,
        dispatch: n,
        resource: e,
        savesUrl: r,
        orgId: s,
        orgName: i
      });
    }
  };
}
function es({
  state: e,
  dispatch: t,
  resource: r,
  savesUrl: s,
  orgId: i,
  orgName: n
}) {
  let o = isTntSavingEnabled();
  if (!e.authedActiveCommunityProfile) {
    reportError(_$$e.COMMUNITY, Error("Attempted to save resource without an active community profile"));
    return;
  }
  let a = _$$a.saveResource({
    resource: r,
    profileId: e.authedActiveCommunityProfile.id,
    orgId: i
  });
  let l = i ? `optimistic-resource-save-${r.id}-${i}` : `optimistic-resource-save-${r.id}-${e.user.id}`;
  WB().optimisticallyCreate({
    ResourceSave: {
      [l]: {
        userId: e.user.id,
        hubFileId: null,
        createdAt: new Date(Date.now()),
        resourceId: r.id,
        orgId: i || null
      }
    }
  }, a);
  let d = o ? getI18nString("community.saves.added_to_your_saves") : getI18nString("community.saves.resource_saved_for_your_profile");
  a.then(() => {
    t(VisualBellActions.enqueue({
      message: i ? getI18nString("community.saves.resource_saved_for_everyone_at", {
        orgName: n || "your org"
      }) : d,
      type: "resource-save",
      button: o && s ? {
        text: getI18nString("community.saves.go_there"),
        action: () => {
          customHistory.push(s);
        }
      } : void 0
    }));
  }).catch(e => {
    reportError(_$$e.COMMUNITY, e);
    t(VisualBellActions.enqueue({
      message: getI18nString("community.actions.unable_to_save_resource"),
      type: "RESOURCE_SAVE_FAILED",
      error: !0
    }));
  });
}
function ei(e, t, r, s) {
  return function (r, i) {
    let n = i();
    if (!n.user) {
      reportError(_$$e.COMMUNITY, Error("[Community Saves] Attempted save without currentUser"));
      return;
    }
    (logAndTrackCTA(eo({
      state: n,
      resourceId: e.id,
      resourceType: Vm(e),
      viewContext: t,
      action: "unsave",
      loggedIn: !!n.user,
      orgId: s
    }), ee), hasClientMeta(e)) ? XHR.del(`/api/hub_file/${e.id}/save`).then(() => {
      r(VisualBellActions.enqueue({
        message: getI18nString("community.saves.file_removed_from_your_profile"),
        type: "resource-save"
      }));
    }).catch(e => {
      reportError(_$$e.COMMUNITY, e);
    }) : r(s1({
      id: e.id,
      resourceType: Vm(e),
      communityProfile: i().authedActiveCommunityProfile || void 0,
      orgId: s,
      source: uR.COMMUNITY_HUB
    }));
  };
}
function en(e, t, r, s) {
  return function (i, n) {
    let o = n();
    let a = isTntSavingEnabled();
    if (!o.user || !o.authedActiveCommunityProfile) {
      reportError(_$$e.COMMUNITY, Error("[Community Saves] Attempted to remove save without currentUser"));
      return;
    }
    if (logAndTrackCTA(eo({
      state: o,
      resourceId: e.id,
      resourceType: Vm(e),
      viewContext: t,
      action: "unsave",
      loggedIn: !!o.user,
      orgId: r
    }), ee), rZ(e)) {
      let t = $9(e);
      if (!t) {
        reportError(_$$e.COMMUNITY, Error("Extension type resource is missing plugin and widget content"), {
          extra: {
            resourceId: e.id
          }
        });
        return;
      }
      i(s1({
        id: e.id,
        resourceType: Vm(t),
        communityProfile: n().authedActiveCommunityProfile || void 0,
        orgId: r,
        source: uR.COMMUNITY_HUB
      }));
    } else {
      let t = _$$a.unsaveResource({
        resource: e,
        profileId: o.authedActiveCommunityProfile.id,
        orgId: r
      });
      let n = r ? `optimistic-resource-save-${e.id}-${r}` : `optimistic-resource-save-${e.id}-${o.user.id}`;
      WB().optimisticallyDelete({
        ResourceSave: {
          [n]: null
        }
      }, t);
      let l = a ? getI18nString("community.saves.removed_from_saves") : getI18nString("community.saves.resource_removed_from_your_profile");
      t.then(() => {
        i(VisualBellActions.enqueue({
          message: r ? getI18nString("community.saves.resource_removed_for_everyone_at", {
            orgName: s || "your org"
          }) : l,
          type: "resource-unsave"
        }));
      }).catch(e => {
        reportError(_$$e.COMMUNITY, e);
      });
    }
  };
}
function eo({
  state: e,
  resourceId: t,
  resourceType: r,
  viewContext: s,
  action: i,
  loggedIn: n,
  orgId: o
}) {
  return {
    action: i,
    resourceId: t,
    resourceType: r,
    viewContext: s,
    loggedIn: n,
    forOrgId: o,
    searchSessionId: wr(e)
  };
}
function ea(e, t) {
  let r = useDispatch();
  let s = function (e) {
    let t = useSubscription(ResourceSaveFromResourceId, {
      resourceId: e.id,
      orgIds: []
    }, {
      enabled: XW(e) && !rZ(e)
    });
    let r = useSubscription(ResourceSave, {
      hubFileId: e.id
    }, {
      enabled: !XW(e) && hasClientMeta(e)
    });
    let s = useSubscription(PluginInstall, {
      pluginId: e.id,
      orgIds: []
    }, {
      enabled: rZ(e) || !XW(e) && (isPlugin(e) || isWidget(e))
    });
    return XW(e) ? getResourceDataOrFallback(t.data?.resourceSaveFromResourceId)?.createdAt || null : r.data?.resourceSave?.createdAt || s.data?.pluginInstall?.createdAt || null;
  }(e);
  let o = AG();
  let a = Om();
  let l = tv() ?? void 0;
  let c = useSelector(e => e.authedActiveCommunityProfile?.profile_handle);
  let d = useMemo(() => o && a ? new _$$e2(a, l) : c ? new xn({
    profileHandle: c,
    tabView: UserProfileTab.SAVES
  }) : void 0, [o, a, l, c]);
  let u = !!s;
  let m = useCallback(s => {
    handleAtomEvent({
      id: "cmty-detail-view-saved-button-clicked"
    });
    s?.stopPropagation();
    u ? r(XW(e) ? en(e, t) : ei(e, t)) : r(XW(e) ? er(e, t, d?.href) : et(e, t));
  }, [u, r, e, t, d]);
  useCallback(e => {
    FL(AuthFlowStep.SIGN_UP, {
      preventDefaultRedirect: !0
    });
  }, []);
  return {
    onUserSaveActionClick: m,
    isResourceSavedForUser: u
  };
}
function el(e, t, r) {
  let s = useDispatch();
  let o = useSelector(e => Tm(e));
  let a = useSubscription(PluginInstall, {
    pluginId: t.id,
    orgIds: Object.keys(o)
  }, {
    enabled: !XW(e)
  });
  let l = useSubscription(ResourceSaveFromResourceId, {
    resourceId: e.id,
    orgIds: Object.keys(o)
  }, {
    enabled: XW(e)
  });
  let c = useSubscription(AllowlistedPlugin, {
    pluginId: t.id,
    orgIds: Object.keys(o)
  });
  let d = useMemo(() => {
    let t;
    if (!g0(e)) return {};
    t = XW(e) ? getResourceDataOrFallback(l.data?.orgResourceSaves) || [] : a.data?.orgPluginInstalls.status !== tT.Loaded ? [] : a.data?.orgPluginInstalls.data || [];
    let r = {};
    Object.values(o).forEach(s => {
      (!(YI(e) && s.plugins_whitelist_enforced || $3(e) && s.widgets_whitelist_enforced) || (c.data?.orgAllowlistedPlugins.status !== tT.Loaded ? [] : c.data?.orgAllowlistedPlugins.data || []).some(e => e.orgId === s.id)) && (r[s.id] = t.some(e => e.orgId === s.id));
    });
    return r;
  }, [o, c, e, a.data?.orgPluginInstalls, l.data]);
  let u = useCallback((t, i, n) => {
    n?.stopPropagation();
    d[t] ? s(XW(e) ? en(e, r, t, i) : ei(e, r, !0, t)) : s(XW(e) ? er(e, r, void 0, t, i) : et(e, r, !0, t));
  }, [s, e, r, d]);
  return {
    savesByOrgId: d,
    onOrgSaveAction: u
  };
}
function eh(e) {
  return jsxs("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    children: [jsxs("g", {
      clipPath: "url(#clip0_8184_71416)",
      children: [jsx("rect", {
        width: "16",
        height: "16",
        fill: "var(--color-background)"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 10.5212L12 13.3883V2H4V13.3883L8 10.5212ZM3.5625 14.9322C3.33074 15.0983 3 14.9403 3 14.6634V1.67197C3 1.30085 3.3148 1 3.70312 1H12.2969C12.6852 1 13 1.30085 13 1.67197V14.6634C13 14.9403 12.6693 15.0983 12.4375 14.9322L8 11.7515L3.5625 14.9322Z",
        fill: e.fill || "var(--color-icon)"
      })]
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_8184_71416",
        children: jsx("rect", {
          width: "16",
          height: "16",
          fill: "var(--color-background)"
        })
      })
    })]
  });
}
function ex(e) {
  return jsxs("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    children: [jsxs("g", {
      clipPath: "url(#clip0_8174_71409)",
      children: [jsx("rect", {
        width: "16",
        height: "16",
        fill: "var(--color-background)"
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.5625 14.9322C3.33074 15.0983 3 14.9403 3 14.6634V1.67197C3 1.30085 3.3148 1 3.70312 1H12.2969C12.6852 1 13 1.30085 13 1.67197V14.6634C13 14.9403 12.6693 15.0983 12.4375 14.9322L8 11.7515L3.5625 14.9322Z",
        fill: e.fill || "var(--color-icon)"
      })]
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_8174_71409",
        children: jsx("rect", {
          width: "16",
          height: "16",
          fill: "var(--color-background)"
        })
      })
    })]
  });
}
let ef = "more_options_button--icon--apR87";
let ey = "more_options_button--dropdownItem--ZH0ds";
let eg = "community-more-options-button-dropdown";
function ev({
  resource: e,
  resourceContent: t,
  viewContext: r
}) {
  let i = useDispatch();
  let o = useSelector(e => e.dropdownShown?.type === eg);
  let a = useSelector(e => e.dropdownShown?.data?.targetRect);
  let l = [];
  let {
    isTeamOrOrgProfileActive,
    isResourceLiked,
    onLikeActionClick
  } = function (e) {
    let {
      resource,
      viewContext
    } = e;
    let s = useSelector(e => e.authedActiveCommunityProfile);
    let i = _$$c(s);
    let o = _$$W(resource.id, Vm(resource), !XW(resource));
    let a = _$$B(resource.id, XW(resource));
    let l = XW(resource) ? !!a.data?.[0] : !!o.data?.[0];
    let c = XW(resource) ? a.data?.[1] : o.data?.[1];
    let d = _$$w(resource, l, c || null, viewContext);
    return {
      isTeamOrOrgProfileActive: i,
      isResourceLiked: l,
      onLikeActionClick: d
    };
  }({
    resource: e,
    viewContext: r
  });
  let _ = {
    displayText: isTeamOrOrgProfileActive ? getI18nString("community.likes.switch_profile_to_like") : getI18nString("community.like"),
    icon: jsx("div", {
      className: ef,
      style: {
        "--color-icon": isTeamOrOrgProfileActive ? "var(--color-text-menu-disabled)" : "var(--color-icon-menu)"
      },
      children: isResourceLiked ? _$$W2 : _$$C
    }),
    preventDismissOnSelected: !0,
    unsetStrokeOnActiveOption: !0,
    callback: (e, t, r, s) => {
      isTeamOrOrgProfileActive || onLikeActionClick()(s);
    },
    disabled: isTeamOrOrgProfileActive,
    className: ey
  };
  let {
    isResourceSaved,
    isResourceSavedForUser,
    onUserSaveActionClick,
    savesByOrgId,
    onOrgSaveAction
  } = function ({
    resource: e,
    resourceContent: t,
    viewContext: r,
    allowOrgSaves: s
  }) {
    let {
      onUserSaveActionClick: _onUserSaveActionClick,
      isResourceSavedForUser: _isResourceSavedForUser
    } = ea(e, r);
    let {
      savesByOrgId: _savesByOrgId,
      onOrgSaveAction: _onOrgSaveAction
    } = el(e, t, r);
    return {
      isResourceSaved: _isResourceSavedForUser || Object.values(s ? _savesByOrgId : {}).some(e => e),
      isResourceSavedForUser: _isResourceSavedForUser,
      onUserSaveActionClick: _onUserSaveActionClick,
      savesByOrgId: _savesByOrgId,
      onOrgSaveAction: _onOrgSaveAction
    };
  }({
    resource: e,
    resourceContent: t,
    viewContext: r,
    allowOrgSaves: !0
  });
  let b = useSelector(e => Tm(e));
  let j = [];
  if (0 !== Object.values(b).length && g0(e)) {
    j.push({
      displayText: getI18nString("community.saves.save_for_yourself"),
      icon: jsx("div", {
        className: ef,
        children: isResourceSavedForUser ? jsx(ex, {}) : jsx(eh, {})
      }),
      unsetStrokeOnActiveOption: !0,
      callback: (e, t, r, s) => {
        onUserSaveActionClick(s);
      },
      className: ey
    });
    let e = Object.values(b).map(e => ({
      displayText: getI18nString("community.saves.save_for", {
        orgName: e.name
      }),
      icon: jsx("div", {
        className: ef,
        children: savesByOrgId[e.id] ? jsx(ex, {}) : jsx(eh, {})
      }),
      unsetStrokeOnActiveOption: !0,
      callback: () => {
        onOrgSaveAction(e.id, e.name);
      },
      className: ey
    }));
    j.push(...e);
  } else j.push({
    displayText: getI18nString("community.saves.save"),
    "data-onboarding-key": "save-button",
    icon: jsx("div", {
      className: ef,
      children: isResourceSaved ? jsx(ex, {}) : jsx(eh, {})
    }),
    preventDismissOnSelected: !0,
    unsetStrokeOnActiveOption: !0,
    callback: (e, t, r, s) => {
      onUserSaveActionClick(s);
    },
    className: ey
  });
  _.disabled ? (l.push(...j), l.push(_)) : (l.push(_), l.push(...j));
  return jsx(Fragment, {
    children: o && jsx(_$$j, {
      showPoint: !0,
      items: l,
      onSelectItem: (e, t) => {
        e.callback && e.callback("", null, i, t);
      },
      lean: "right",
      parentRect: a,
      dispatch: i,
      minWidth: 208
    })
  });
}
function eb({
  resource: e,
  resourceContent: t,
  viewContext: r
}) {
  let o = useDispatch();
  let a = useRef(null);
  let [l, c] = useState(!1);
  return jsxs(Fragment, {
    children: [jsx("button", {
      ref: a,
      className: "more_options_button--moreOptionsContainer--ncSsU cta_button--buttonBase--xMT0c text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L",
      onClick: () => {
        c(!l);
        let e = a.current?.getBoundingClientRect();
        e && o(j7({
          type: eg,
          data: {
            targetRect: e
          }
        }));
      },
      "data-testid": "more-options-button",
      children: jsx("div", {
        className: "more_options_button--verticalIcon--Pv-8l",
        children: jsx(_$$J, {
          style: {
            "--color-icon": "var(--color-icon-secondary)"
          }
        })
      })
    }), jsx(ev, {
      resource: e,
      resourceContent: t,
      viewContext: r
    })]
  });
}
let eC = "community-save-button-dropdown";
function eL({
  resource: e,
  resourceContent: t,
  viewContext: r,
  type: o,
  theme: a,
  allowOrgSaves: d,
  enableWideButtonForStickyFooter: u
}) {
  let m = useDispatch();
  let {
    onUserSaveActionClick,
    isResourceSavedForUser
  } = ea(e, r);
  let {
    savesByOrgId
  } = el(e, t, r);
  let x = d ? savesByOrgId : {};
  let f = useRef(null);
  let y = l()("save_button--buttonContainerBase--m8dS8 text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L", {
    [_$$s2.gap6.pl16.pr16.$]: "containText" === o,
    "save_button--buttonContainerBrandColors--xQhK7": "brand" === a,
    [_$$s2.w40.h40.$]: "square" === o,
    "save_button--buttonContainerBaseWide--EDZcF": u
  });
  let g = l()("save_button--iconContainer--Brlqe", {
    [_$$s2.ml2.$]: "containText" === o
  });
  let v = "brand" === a ? "var(--color-icon-onbrand)" : void 0;
  let b = isResourceSavedForUser || Object.values(x).some(e => e);
  return jsxs(Fragment, {
    children: [jsxs("button", {
      className: y,
      onClick: e => {
        if (0 === Object.keys(x).length) return onUserSaveActionClick(e);
        let t = f.current?.getBoundingClientRect();
        t && m(j7({
          type: eC,
          data: {
            targetRect: t
          }
        }));
      },
      "data-testid": "save-button",
      "data-onboarding-key": "save-button",
      "data-tooltip-type": KindEnum.TEXT,
      ref: f,
      "data-tooltip": b ? getI18nString("community.saves.remove_from_saves") : getI18nString("community.saves.save"),
      "aria-label": b ? getI18nString("community.saves.remove_from_saves") : getI18nString("community.saves.save"),
      children: [jsx("div", {
        className: g,
        children: b ? jsx(ex, {
          fill: v
        }) : jsx(eh, {
          fill: v
        })
      }), "containText" === o && jsx("div", {
        children: renderI18nText(b ? "community.saves.remove_from_saves" : "community.saves.save_for_later")
      })]
    }), d && jsx(eT, {
      resource: e,
      resourceContent: t,
      viewContext: r
    })]
  });
}
function eT({
  resource: e,
  resourceContent: t,
  viewContext: r
}) {
  let i = useDispatch();
  let o = useSelector(e => e.dropdownShown?.type === eC);
  let a = useSelector(e => e.dropdownShown?.data?.targetRect);
  let {
    onUserSaveActionClick,
    isResourceSavedForUser
  } = ea(e, r);
  let {
    savesByOrgId,
    onOrgSaveAction
  } = el(e, t, r);
  let _ = useSelector(e => Tm(e));
  if (!g0(e)) return null;
  let p = [{
    displayText: getI18nString("community.saves.save_this_resource_for_yourself"),
    isChecked: isResourceSavedForUser,
    callback: () => {
      onUserSaveActionClick();
    }
  }];
  let x = Object.values(_).map(e => ({
    displayText: getI18nString("community.saves.save_for_everyone_at", {
      orgName: e.name
    }),
    isChecked: savesByOrgId[e.id],
    callback: () => {
      onOrgSaveAction(e.id, e.name);
    }
  }));
  p = p.concat(x);
  return jsx(Fragment, {
    children: o && jsx(_$$j, {
      showPoint: !0,
      items: p,
      onSelectItem: (e, t) => {
        e.callback && e.callback("", null, i, t);
      },
      parentRect: a,
      dispatch: i
    })
  });
}
function eI(e) {
  return jsx(eL, {
    resource: e.resource,
    resourceContent: e.resourceContent,
    viewContext: e.viewContext,
    type: "square",
    theme: "default",
    allowOrgSaves: !0
  });
}
function eN(e) {
  return jsx(eL, {
    resource: e.resource,
    resourceContent: e.resourceContent,
    viewContext: e.viewContext,
    type: "containText",
    theme: "brand",
    enableWideButtonForStickyFooter: e.enableWideButtonForStickyFooter
  });
}
function eM({
  resource: e
}) {
  let t = _$$M2() ? "mobile_logged_in" : "mobile_logged_out";
  let r = XW(e) ? qY(e) : e;
  let n = !!r && isMonetizedWithClientMeta(r);
  let o = useMemo(() => r ? g0(e) ? jsxs(Fragment, {
    children: [jsx(eN, {
      resource: e,
      resourceContent: r,
      viewContext: t,
      enableWideButtonForStickyFooter: !0
    }), jsx(cy, {
      resource: e
    })]
  }) : jsxs(Fragment, {
    children: [jsx("div", {
      className: fj,
      children: jsx(_$$q, {
        resource: e,
        resourceContent: r,
        enableWideButtonForStickyFooter: !n,
        enableCondensedWideButtonForStickyFooter: n
      })
    }), n ? jsx(eb, {
      resource: e,
      resourceContent: r,
      viewContext: t
    }) : jsxs("div", {
      className: bU,
      children: [jsx(cy, {
        resource: e
      }), jsx(eI, {
        resource: e,
        resourceContent: r,
        viewContext: t
      })]
    })]
  }) : null, [e, r, t, n]);
  return jsx("div", {
    className: l()(Zc, CS),
    children: o
  });
}
let eB = _$$s;
let eD = _$$M;
export function $$eF0({
  resource: e,
  resourceContent: t,
  hasScrolled: r,
  layout: i = "oneColumn"
}) {
  let {
    showLikeButton,
    showSaveButton,
    showAuthorsHeader
  } = function () {
    let e = _$$T();
    return {
      showLikeButton: !0,
      showSaveButton: (!e || isTntSavingEnabled()) && !0,
      showAuthorsHeader: !e
    };
  }();
  let c = K2(e);
  let d = useSelector(e => Tm(e));
  let x = Qo(t) ? e0.COMMUNITY_HUB_FILE : isWidget(t) ? e0.COMMUNITY_HUB_WIDGET : e0.COMMUNITY_HUB_PLUGIN;
  let j = null;
  let w = jsx(_$$q, {
    resource: e,
    resourceContent: t
  });
  let C = $9(e);
  if (eB && C) {
    let e = qD(C);
    let t = Object.values(d).some(e => isPlugin(C) && e.plugins_whitelist_enforced || isWidget(C) && e.widgets_whitelist_enforced);
    !(e && "is_private" in e && e.is_private) && t && (j = jsx(eB, {
      resource: C,
      viewContext: x
    }));
  }
  let L = showLikeButton && showSaveButton ? jsx(eb, {
    resource: e,
    resourceContent: t,
    viewContext: x
  }) : null;
  let T = showSaveButton ? jsx(eI, {
    "data-onboarding-key": "save-button",
    resource: e,
    resourceContent: t,
    viewContext: x
  }) : null;
  let I = j || !showLikeButton ? null : jsx(_$$Q, {
    resource: e,
    viewContext: x
  });
  let E = isMonetizedWithClientMeta(t) ? L : jsxs(Fragment, {
    children: [I, T]
  });
  let S = jsx(N, {
    resource: e,
    resourceContent: t
  });
  let R = ws(e) ? e.resource_type : bc(e);
  let {
    isDisabled,
    disabledReason
  } = Cc(R);
  let P = isDisabled && disabledReason && eD;
  let M = P ? jsx(eD, {
    resource: e
  }) : null;
  let O = zL(e);
  let B = "oneColumn" === i ? jsx(_$$A, {
    resource: e,
    resourceContent: t,
    viewContext: x,
    disableLikeButton: !showLikeButton,
    hideResourceType: O
  }) : jsx(_$$A, {
    resource: e,
    resourceContent: t,
    viewContext: x,
    disableLikeButton: !showLikeButton,
    hideResourceType: !!P || O,
    ctaDisabledMessage: M
  });
  return r ? jsx("div", {
    className: yq,
    children: jsxs("div", {
      className: Jp,
      children: [jsxs("div", {
        className: Xd,
        children: [jsx("h1", {
          className: _$$eO,
          children: c
        }), jsx(eV, {
          hasCommentsEnabled: e5(t),
          commentCount: t.comment_count
        })]
      }), jsxs("div", {
        className: OQ,
        children: [w, j, E]
      })]
    })
  }) : jsx($$eH1, {
    CTAButton: w,
    approveButton: j,
    headerBadges: S,
    layout: i,
    likeSaveButtons: E,
    publishers: e.community_publishers.accepted,
    resource: e,
    resourceHeaderStats: B,
    showAuthorsHeader,
    title: c ?? ""
  });
}
export function $$eH1({
  CTAButton: e,
  publishers: t,
  title: r,
  description: i,
  resourceHeaderStats: n,
  approveButton: o,
  likeSaveButtons: a,
  learnMore: l,
  headerBadges: c,
  openInNewTab: d = !1,
  showAuthorsHeader: u = !0,
  resource: m,
  layout: _ = "oneColumn"
}) {
  let p = [...t.filter(e => J3(e.badges)), ...t.filter(e => !J3(e.badges))];
  let h = u ? jsxs("div", {
    className: tF,
    children: [jsx(_$$L, {
      publishers: p,
      showFigmaPartnerBadge: !0
    }), jsx(_$$I2, {
      publishers: p,
      openInNewTab: d,
      useSmallWidth: !0,
      removeByLabel: !0
    })]
  }) : null;
  let x = jsxs("div", {
    className: X7,
    children: [jsx("div", {
      className: DD,
      children: jsx("h1", {
        children: r
      })
    }), c]
  });
  return "oneColumn" === _ ? jsxs("div", {
    className: N1,
    children: [h, x, n, !!i && jsx("div", {
      className: h_,
      children: i
    }), jsxs("div", {
      className: OQ,
      children: [e, l, o, a]
    }), eD && jsx(eD, {
      resource: m
    })]
  }) : jsxs("div", {
    className: nV,
    children: [jsxs("div", {
      children: [h, x, n, !!i && jsx("div", {
        className: h_,
        children: i
      })]
    }), jsx("div", {
      children: jsxs("div", {
        className: OQ,
        children: [e, l, o, a]
      })
    })]
  });
}
export function $$eU2({
  resource: e,
  resourceContent: t,
  hasScrolled: r
}) {
  let i = K2(e);
  let n = e.community_publishers.accepted;
  let o = e5(t);
  let a = t.comment_count;
  return r ? jsx("div", {
    className: QY,
    children: jsxs("div", {
      className: VB,
      children: [jsx("div", {
        className: zu,
        children: jsx("h1", {
          className: NG,
          children: jsx("span", {
            className: y_,
            children: i
          })
        })
      }), jsx(eM, {
        resource: e
      }), jsx(eV, {
        hasCommentsEnabled: o,
        commentCount: a
      })]
    })
  }) : jsx("div", {
    className: Z0,
    children: jsxs("div", {
      className: VB,
      children: [jsxs("div", {
        className: zu,
        children: [jsx("h1", {
          className: NG,
          children: jsx("span", {
            className: y_,
            children: i
          })
        }), jsxs("div", {
          className: YO,
          "data-testid": "mobile-header-attribution",
          children: [jsx(N, {
            resource: e,
            resourceContent: t
          }), jsx(_$$A, {
            resource: e,
            resourceContent: t
          }), jsxs("div", {
            className: gi,
            children: [jsx(_$$L, {
              publishers: n
            }), jsx(_$$I2, {
              publishers: n
            })]
          })]
        })]
      }), jsx(eM, {
        resource: e
      }), jsx(eV, {
        hasCommentsEnabled: o,
        commentCount: a
      })]
    })
  });
}
function eV({
  hasCommentsEnabled: e,
  commentCount: t
}) {
  let [r, n] = useAtomValueAndSetter(_$$R);
  useEffect(() => {
    let e = () => {
      let e = document.getElementById($O.CommentsView);
      if (e) {
        let t = e.getBoundingClientRect().top;
        _m(t, window.innerHeight, window.scrollY) ? n($O.CommentsView) : n($O.DescriptionView);
      }
    };
    window.addEventListener("scroll", e);
    return () => {
      window.removeEventListener("scroll", e);
    };
  }, [n]);
  let a = (e, t) => {
    if (e.preventDefault(), t === $O.DescriptionView) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    let r = document.getElementById(t);
    if (r) {
      let e = bK;
      let t = r.getBoundingClientRect().top + window.scrollY + e;
      window.scrollTo({
        top: t,
        behavior: "smooth"
      });
    }
  };
  return jsxs("div", {
    className: dD,
    children: [jsx("button", {
      onClick: e => a(e, $O.DescriptionView),
      children: jsx("div", {
        className: l()(_$$qY, {
          [kO]: r === $O.DescriptionView
        }),
        children: getI18nString("community.resource_page.about")
      })
    }), e && jsx("button", {
      onClick: e => a(e, $O.CommentsView),
      children: jsx("div", {
        className: l()(_$$qY, {
          [kO]: r === $O.CommentsView
        }),
        children: renderI18nText("community.resource_page.comments", {
          numComments: jsx("span", {
            className: l()(p9, {
              [sB]: r === $O.CommentsView
            }),
            children: t
          })
        })
      })
    })]
  });
}
export const Gm = $$eF0;
export const Wt = $$eH1;
export const Hb = $$eU2;