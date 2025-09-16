import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { createContext, useContext, useRef, useCallback, useEffect, useMemo, memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { assertNotNullish } from "../figma_app/95419";
import { K as _$$K } from "../905/443068";
import { s as _$$s } from "../905/403855";
import { J as _$$J } from "../905/125993";
import { permissionScopeHandler } from "../905/189185";
import g from "classnames";
import { desktopAPIInstance } from "../figma_app/876459";
import { stripHtmlTags } from "../905/491152";
import { ButtonBasePrimary } from "../figma_app/637027";
import { M3 } from "../figma_app/119475";
import { SvgComponent } from "../905/714743";
import { t as _$$t } from "../905/331623";
import { s as _$$s2 } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { AutoLayout } from "../905/470281";
import { Ex } from "../905/69098";
import { QP, op, $3 } from "../figma_app/487970";
import { L as _$$L } from "../3591/956338";
import { w5 } from "../figma_app/15924";
import { getProductPriceString, hasTrialAvailable } from "../figma_app/808294";
import { getResourceTaglineOrDescription, isResourcePendingPublishing } from "../figma_app/777551";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { postUserFlag } from "../905/985254";
import { useTracking } from "../figma_app/831799";
import { t as _$$t3 } from "../469e6e40/489933";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { dR, Gt, RK } from "../figma_app/248118";
import { $1, b4, cW, Be, j1, nl, kd, ll, YO, ZT, Ud, WK, Ys, yQ, jg, bh, U6, x as _$$x } from "../figma_app/844435";
import { logAndTrackCTA } from "../figma_app/314264";
import { tw, ul, EO, OY, gn, J$, lt } from "../figma_app/86989";
import { BF } from "../figma_app/684168";
import { j as _$$j } from "../905/813868";
import { Um } from "../905/848862";
import { useCurrentUserOrg } from "../905/845253";
import { FFileType } from "../figma_app/191312";
import { getPluginVersion, isDevModeWithCodegen, pluginMetadata } from "../figma_app/300692";
import { ResourceTypeNoComment } from "../figma_app/45218";
import { hasLocalFileId } from "../figma_app/155287";
import { KindEnum } from "../905/129884";
import { bE } from "../figma_app/78725";
import { V as _$$V } from "../905/480825";
import { z as _$$z } from "../905/255946";
import { _ as _$$_ } from "../469e6e40/273550";
import { jZ } from "../3591/828414";
import { li, dn, ZA } from "../figma_app/994403";
import { j as _$$j2 } from "../905/834956";
import { A as _$$A } from "../3591/199070";
import { ur, xY } from "../figma_app/439332";
import { PE } from "../3591/130069";
import { _W, nN } from "../7492/254275";
import { J as _$$J2 } from "../469e6e40/985095";
import { cH } from "../figma_app/212260";
import { _n, EJ, lD, T9, NR } from "../figma_app/38430";
import { B6, IT, fO, CF } from "../figma_app/201703";
import { s as _$$s3 } from "../figma_app/504088";
import { Sx, y7, Yl, Pg, Bx, lP, vt as _$$vt, FV, B6 as _$$B2, UK, o2, ZK, D1, $C, MJ, c6, NH, ot, Vx, rz, Zv, Cq, VJ, QF, JW, Y2, Y9, ML, Gy, BG, lI, sI, lO, zZ, od, y2 } from "../figma_app/968638";
import { A as _$$A2 } from "../svg/957897";
import { A as _$$A3 } from "../svg/465311";
import { A as _$$A4 } from "../svg/586486";
import { A as _$$A5 } from "../1617/579393";
if (443 == require.j) {}
var p = g;
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
export var $$eI2 = (e => (e.COMMUNITY = "community", e.RECENT = "recent", e.DEVELOPMENT = "development", e.DEVELOPMENT_MISSING_LOCAL = "development_missing_local", e.ORG_PRIVATE = "org_private", e.SAVED = "saved", e.INVITED = "invited", e))($$eI2 || {});
function em(e) {
  let i = useSelector(e => e.orgById);
  if (e.resource.is_private) {
    let t = e.resource?.org_id && i[e.resource.org_id]?.name;
    return jsx(_$$s, {
      className: Sx,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": t ? getI18nString("community.plugins.private_for_plugin_org_name", {
        orgName: t
      }) : getI18nString("community.plugins.private_for_plugin_org")
    });
  }
  return jsx(Fragment, {});
}
let ex = createContext(null);
function ej() {
  return assertNotNullish(useContext(ex), "Must be wrapped within <FdBrowseWidgetTileContext.Provider>");
}
let eh = createContext(null);
function ew() {
  return assertNotNullish(useContext(eh), "Must be wrapped within <FdBrowsePluginTileContext.Provider>");
}
function ef(e, i, t) {
  let n = useRef(null);
  let s = useCallback(() => {
    n.current && n.current.click();
  }, [n]);
  let {
    setKeyboardNavigationElement,
    isFauxFocused,
    keyboardNavigationItem
  } = M3({
    path: i || [0],
    fauxClick: s,
    id: e
  });
  let o = t && i && i.length >= 2 && i[0] === B6 && 0 === i[1];
  useEffect(() => {
    o && keyboardNavigationItem?.fauxFocus();
  }, [o, keyboardNavigationItem]);
  return {
    setKeyboardNavigationElement,
    isFauxFocused,
    keyboardNavigationButtonRef: n
  };
}
export function $$ey4({
  resourceId: e,
  type: i,
  keyboardNavigationPath: t,
  shouldFocusFirstItem: s
}) {
  let r;
  let {
    activeTab,
    viewResource
  } = IT();
  let o = $1();
  let u = "development" === i ? Object.values(o).find(i => String(i.localFileId) === e) : null;
  let c = u?.plugin_id;
  let g = useCallback(() => viewResource({
    id: c ?? e
  }), [e, viewResource, c]);
  let p = useMemo(() => activeTab === _$$s3.WIDGET ? {
    viewWidgetDetails: g,
    keyboardNavigationPath: t,
    shouldFocusFirstItem: s
  } : {
    viewPluginDetails: g,
    keyboardNavigationPath: t,
    shouldFocusFirstItem: s
  }, [activeTab, t, g, s]);
  if (activeTab === _$$s3.WIDGET) {
    switch (i) {
      case "community":
        r = jsx(eV, {
          widgetId: e
        });
        break;
      case "recent":
        r = jsx(eE, {
          widgetId: e,
          type: "recent"
        });
        break;
      case "development":
        r = jsx(eS, {
          localFileId: e
        });
        break;
      case "development_missing_local":
        r = jsx(eS, {
          widgetId: e
        });
        break;
      case "org_private":
        r = jsx(eD, {
          widgetId: e
        });
        break;
      case "saved":
        r = jsx(eA, {
          widgetId: e,
          type: "saved"
        });
        break;
      case "invited":
        r = jsx(eO, {
          widgetId: e
        });
        break;
      default:
        return null;
    }
    return jsx(ex.Provider, {
      value: p,
      children: r
    });
  }
  switch (i) {
    case "community":
      r = jsx(eb, {
        pluginId: e
      });
      break;
    case "recent":
      r = jsx(e_, {
        pluginId: e
      });
      break;
    case "development":
      r = jsx(eN, {
        localFileId: e
      });
      break;
    case "development_missing_local":
      r = jsx(eN, {
        pluginId: e
      });
      break;
    case "org_private":
      r = jsx(ek, {
        pluginId: e
      });
      break;
    case "saved":
      r = jsx(eR, {
        pluginId: e,
        type: "saved"
      });
      break;
    case "invited":
      r = jsx(eC, {
        pluginId: e
      });
      break;
    default:
      return null;
  }
  return jsx(eh.Provider, {
    value: p,
    children: r
  });
}
function e_({
  pluginId: e
}) {
  let i = b4()[e];
  let t = cW()[e];
  let l = tw(t);
  return i ? hasLocalFileId(i) ? jsx(eN, {
    localFileId: i.localFileId.toString(),
    isRecentTile: !0
  }) : l ? null : jsx(eR, {
    pluginId: i.plugin_id,
    type: "recent"
  }) : null;
}
function eb(e) {
  let i = cW()[e.pluginId];
  if (e.plugin && (i = e.plugin), !i) return null;
  let t = getPluginVersion(i);
  let {
    description,
    tagline
  } = t;
  let r = fO(i);
  let d = jsxs(Fragment, {
    children: [jsx("div", {
      className: y7,
      children: getResourceTaglineOrDescription({
        tagline,
        description
      }, stripHtmlTags)
    }), jsx("div", {
      className: Yl,
      children: r
    })]
  });
  return jsx(eP, {
    pluginVersion: t,
    subheader: d,
    pluginId: e.pluginId,
    primaryCTAButton: e.ctaButton,
    alwaysShowPrimaryCTA: e.alwaysShowCta,
    isDevModeWizard: e.isDevModeWizard,
    onClick: e.onClick,
    isCommunityPreview: !0
  });
}
export function $$eT0({
  plugin: e,
  ctaButton: i,
  onClick: t
}) {
  let l = {
    viewPluginDetails: lQ,
    keyboardNavigationPath: void 0,
    shouldFocusFirstItem: void 0
  };
  return jsx(eh.Provider, {
    value: l,
    children: jsx(eb, {
      pluginId: e.id,
      plugin: e,
      ctaButton: i,
      alwaysShowCta: !0,
      isDevModeWizard: !0,
      onClick: t
    })
  });
}
function eC(e) {
  let i = cW()[e.pluginId];
  let t = useDispatch();
  let r = useCallback(() => {
    t(hideDropdownAction());
  }, [t]);
  if (!i) return null;
  let d = getPluginVersion(i);
  let {
    description,
    tagline
  } = d;
  let u = jsxs(Fragment, {
    children: [jsx("div", {
      className: Pg,
      children: getResourceTaglineOrDescription({
        tagline,
        description
      }, stripHtmlTags)
    }), jsx("div", {
      className: Yl,
      children: fO(i)
    })]
  });
  return jsx(Fragment, {
    children: jsx(eP, {
      pluginVersion: d,
      subheader: u,
      pluginId: e.pluginId,
      onClick: r,
      showEditorTypeIcon: !0,
      isNotification: !0,
      metadataOverrideNode: jsx(PE, {
        resource: i
      })
    })
  });
}
let eR = memo(function (e) {
  let i = Be();
  let t = i.plugins[e.pluginId] || i.orgPlugins[e.pluginId];
  let s = b4()[e.pluginId];
  let r = cW()[e.pluginId];
  let d = useMemo(() => "recent" === e.type ? s : "org_private" === e.type ? getPluginVersion(r) : t, [t, e.type, r, s]);
  let a = Um();
  let o = a?.type === _n && a.data.pluginId === e.pluginId && a.data.targetRect && a.data.viewType === e.type;
  let u = $$eG6(e.pluginId, e.type);
  return jsx(eF, {
    pluginId: e.pluginId,
    type: e.type,
    dropdownIsShown: o,
    runOptionsDropdownIsShown: u,
    version: d
  });
});
let eF = memo(function (e) {
  let {
    dropdownIsShown,
    version
  } = e;
  let r = useDispatch();
  let {
    viewPluginDetails
  } = ew();
  let a = useCallback(t => {
    t.stopPropagation();
    dropdownIsShown ? r(hideDropdownAction()) : r(showDropdownThunk({
      type: _n,
      data: {
        pluginId: e.pluginId,
        targetRect: t.currentTarget.getBoundingClientRect(),
        viewType: e.type
      }
    }));
  }, [dropdownIsShown, r, e.pluginId, e.type]);
  let o = dR(e.pluginId, "universal-insert");
  let u = Gt(e.pluginId, "universal-insert");
  let c = _$$t3(e.pluginId, u, o);
  let g = c.length > 0;
  let p = e.runOptionsDropdownIsShown && g;
  let v = useRef(null);
  let {
    validatePublishedPluginInOrgAllowlist,
    isPluginBlockedByAllowlist
  } = j1(e.pluginId);
  let x = RK(e.pluginId);
  let j = useCallback(i => {
    if (i?.stopPropagation(), validatePublishedPluginInOrgAllowlist()) {
      if (g) {
        p ? r(hideDropdownAction()) : r($$eU3({
          pluginId: e.pluginId,
          tileType: e.type
        }));
        return;
      }
      x ? u() : o();
      r(postUserFlag({
        seen_published_plugin_onboarding_modal: !0
      }));
      r(postUserFlag({
        seen_development_plugin_onboarding_modal: !0
      }));
    }
  }, [validatePublishedPluginInOrgAllowlist, g, x, r, p, e.pluginId, e.type, u, o]);
  let h = v.current?.getBoundingClientRect();
  if (!version) return null;
  let w = !!(p && h) || dropdownIsShown;
  let f = jsx(_W, {
    resourceId: e.pluginId,
    resourceType: ResourceTypeNoComment.PLUGIN,
    parentView: nN.TILE,
    isFauxFocused: w
  });
  return jsxs("div", {
    children: [jsx(eP, {
      isFauxFocused: w,
      onClick: j,
      onOptionsClick: a,
      optionsButtonIsActive: dropdownIsShown,
      pluginId: e.pluginId,
      pluginVersion: version,
      primaryCTAButton: f,
      secondaryIcon: jsx(em, {
        resource: version
      }),
      showOnClickDropdownChevron: g,
      visuallyDisabled: isPluginBlockedByAllowlist
    }), jsx("div", {
      ref: v
    }), p && h && jsx(_$$j2, {
      showPoint: !1,
      lean: "center",
      items: c,
      onSelectItem: e => {
        e.callback && e.callback("", null, r);
      },
      parentRect: h,
      dispatch: r
    }), dropdownIsShown && jsx(EJ, {
      viewResource: viewPluginDetails,
      plugin: version
    })]
  });
});
function eN(e) {
  let i = useDispatch();
  let t = nl({
    allowNonVsCodePluginsInVsCode: !0
  });
  let r = e.localFileId ? t[e.localFileId] : void 0;
  let d = r ? r.plugin_id : e.pluginId;
  let a = kd({
    includePendingPublishers: !1
  }).find(e => e.id === d);
  let o = a ? getPluginVersion(a) : void 0;
  let u = Um();
  let {
    viewPluginDetails
  } = ew();
  let g = u?.type === lD && u?.data.localFileId === e.localFileId && u?.data.pluginId === d;
  let p = useCallback(t => {
    if (t.stopPropagation(), g) i(hideDropdownAction());else {
      let n = t.currentTarget.getBoundingClientRect();
      i(showDropdownThunk({
        type: lD,
        data: {
          localFileId: e.localFileId,
          pluginId: d,
          targetRect: n
        }
      }));
    }
  }, [i, e.localFileId, d, g]);
  let v = Gt(d, "universal-insert");
  let I = dR(d, "universal-insert");
  let m = _$$t3(d, v, I);
  let x = m.length > 0;
  let h = useRef(null);
  let w = h.current?.getBoundingClientRect();
  let y = $$eG6(d, e.isRecentTile ? "recent_development" : "development") && x;
  let _ = useCallback(() => {
    if (x) {
      y ? i(hideDropdownAction()) : d && i($$eU3({
        pluginId: d,
        tileType: e.isRecentTile ? "recent_development" : "development"
      }));
      return;
    }
    I();
  }, [x, I, y, i, d, e.isRecentTile]);
  if (!r && !a) return null;
  let T = jsx(_$$A, {
    localResource: r,
    publishedResource: a
  });
  let C = a && isResourcePendingPublishing(a);
  let R = a && o?.redirect_icon_url;
  let F = a && !C ? a.roles.is_public ? _$$A3 : _$$A5 : void 0;
  let B = jsx(Ex, {
    height: "16",
    children: jsx("span", {
      children: renderI18nText("universal_insert.development")
    })
  });
  return jsxs(Fragment, {
    children: [jsx(eP, {
      icon: R ? void 0 : jsx(SvgComponent, {
        svg: _$$A4,
        className: Bx
      }),
      inReview: C,
      localPlugin: r,
      onClick: _,
      onOptionsClick: p,
      optionsButtonIsActive: g,
      pluginId: d,
      pluginVersion: o,
      publishingStatusIcon: F,
      secondaryIcon: B,
      showEditorTypeIcon: !1,
      showOnClickDropdownChevron: x,
      subheader: T
    }), jsx("div", {
      ref: h
    }), y && w && jsx(_$$j2, {
      showPoint: !1,
      lean: "center",
      items: m,
      onSelectItem: e => {
        e.callback && e.callback("", null, i);
      },
      parentRect: w,
      dispatch: i
    }), g && (r ? jsx(T9, {
      localResource: r,
      viewResource: viewPluginDetails
    }) : jsx(T9, {
      publishedResource: a,
      viewResource: viewPluginDetails
    }))]
  });
}
function ek(e) {
  return cW()[e.pluginId] ? jsx(eR, {
    pluginId: e.pluginId,
    type: "org_private"
  }) : null;
}
function eB({
  pluginId: e,
  name: i,
  icon: t,
  iconUrl: s
}) {
  let [r, d] = useState(!!t);
  return jsx("div", {
    className: p()(r ? lP : _$$vt),
    children: t || jsx(_$$V, {
      plugin: {
        name: i,
        plugin_id: e,
        redirect_icon_url: s ?? ""
      },
      loading: "lazy",
      alt: `${i} icon`,
      onLoad: () => d(!0)
    })
  });
}
function eP(e) {
  let i;
  let t = e.pluginVersion?.name ?? e.localPlugin?.name ?? "";
  let l = e.pluginVersion?.redirect_icon_url;
  let {
    isPluginSetToAutoRun
  } = bE(e.pluginVersion ?? null);
  let r = e.localPlugin ? e.localPlugin.manifest.editorType : e.pluginVersion?.manifest.editorType;
  let d = !e.subheader;
  let {
    viewPluginDetails,
    keyboardNavigationPath,
    shouldFocusFirstItem
  } = ew();
  let {
    setKeyboardNavigationElement,
    isFauxFocused,
    keyboardNavigationButtonRef
  } = ef(`plugin_${t}`, keyboardNavigationPath, !!shouldFocusFirstItem);
  let x = useTracking();
  let R = ul(e.pluginId);
  let F = Object.values($1()).find(i => String(i.plugin_id) === e.pluginId);
  let N = getPluginVersion(R);
  let k = isDevModeWithCodegen(N);
  let B = EO(R) && !F;
  let E = OY(R);
  let D = gn(R) && !F;
  let M = useCurrentUserOrg();
  let z = ll();
  let U = !F && BF({
    org: M,
    extensionVersion: N ?? e.pluginVersion,
    isWidget: !1,
    allowlistedExtensions: z
  });
  let H = e.isCommunityPreview && !U && !e.isDevModeWizard;
  let $ = B && !E ? jsx(e$, {
    plugin: R,
    hideFreeTrialBadge: !0
  }) : D ? jsx(ur, {}) : H ? jsx($$ez5, {
    pluginId: e.pluginId,
    buttonRef: keyboardNavigationButtonRef,
    usePrimaryButtonStyles: !0
  }) : void 0;
  let J = QP({
    resource: R,
    validBadges: [op.FREEMIUM, op.OFF_PLATFORM, op.PURCHASED]
  });
  let K = e.metadataOverrideNode ?? jsxs(Fragment, {
    children: [jsxs("div", {
      className: FV,
      children: [jsxs(AutoLayout, {
        spacing: 4,
        children: [jsx("div", {
          className: p()(_$$B2, {
            [_$$s2.colorTextDisabled.$]: e.visuallyDisabled
          }),
          children: t
        }), isPluginSetToAutoRun && jsx(Ex, {
          height: "16",
          children: getI18nString("universal_insert.auto_run")
        }), e.inReview && jsx(_$$L, {
          height: "16"
        }), !!e.secondaryIcon && e.secondaryIcon, J && !D && jsx("div", {
          className: UK,
          children: J
        }), e.publishingStatusIcon && jsx("div", {
          className: _$$s2.colorIcon.$,
          children: jsx(_$$t, {
            svg: e.publishingStatusIcon
          })
        }), e.showOnClickDropdownChevron && jsx(SvgComponent, {
          svg: _$$A2,
          className: o2
        })]
      }), e.subheader && jsx("div", {
        className: ZK,
        children: e.subheader
      })]
    }), $ && jsx("div", {
      className: D1,
      children: $
    }), e.onOptionsClick && jsx(_$$K, {
      onClick: e.onOptionsClick,
      "aria-label": getI18nString("universal_insert.more_options"),
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("universal_insert.more_options")
      },
      children: jsx(_$$J, {})
    }), e.primaryCTAButton && jsx("div", {
      style: sx.add({
        alignSelf: "center"
      }).$,
      children: e.primaryCTAButton
    })]
  });
  let Q = function (e, i) {
    if (isDevHandoffEditorType()) ;else if (e && i) return !0;
    return !1;
  }(e.showEditorTypeIcon, r);
  let X = isDevHandoffEditorType();
  i = Q ? jsxs(li.IconAndBadgeContainer, {
    children: [jsx(eB, {
      pluginId: e.pluginId,
      name: t,
      iconUrl: l,
      icon: e.icon
    }), jsx(li.BadgeContainer, {
      fromBrowseResourceModal: !0,
      resourceType: "plugin",
      children: jsx(dn, {
        editorType: r,
        is16x16: !0
      })
    })]
  }) : X && k ? jsxs(li.IconAndBadgeContainer, {
    children: [jsx(eB, {
      pluginId: e.pluginId,
      name: t,
      icon: e.icon,
      iconUrl: l
    }), jsx(li.BadgeContainer, {
      fromBrowseResourceModal: !0,
      resourceType: "plugin",
      children: jsx(ZA, {})
    })]
  }) : jsx(eB, {
    pluginId: e.pluginId,
    name: t,
    icon: e.icon,
    iconUrl: l
  });
  let ee = () => {
    if (logAndTrackCTA({
      trackingContext: x.name,
      pluginId: e.pluginId
    }), B && !E || U) {
      viewPluginDetails();
      return;
    }
    if (e.onClick) {
      e.onClick();
      return;
    }
    viewPluginDetails();
  };
  return jsxs("div", {
    className: p()(d ? $C : MJ, isFauxFocused || e.isFauxFocused ? c6 : void 0, e.isDevModeWizard ? NH : void 0),
    onClick: ee,
    role: "button",
    tabIndex: 0,
    ref: keyboardNavigationPath ? setKeyboardNavigationElement : void 0,
    children: [jsx("button", {
      onClick: e => {
        e.stopPropagation();
        ee();
      },
      ref: H ? void 0 : keyboardNavigationButtonRef,
      "data-testid": "plugin-tile-button"
    }), jsxs("div", {
      className: ot,
      children: [e.isNotification && jsx("div", {
        className: Vx
      }), i]
    }), K]
  });
}
function eE(e) {
  let i = YO()[e.widgetId];
  let t = ZT()[e.widgetId];
  let l = tw(t);
  return i ? hasLocalFileId(i) ? jsx(eS, {
    localFileId: i.localFileId.toString(),
    isRecentTile: !0
  }) : l ? null : jsx(eA, {
    widgetId: e.widgetId,
    type: "recent"
  }) : null;
}
function eA(e) {
  let i = useDispatch();
  let {
    viewWidgetDetails
  } = ej();
  let r = ZT()[e.widgetId];
  let d = Be().widgets[e.widgetId];
  let a = YO()[e.widgetId];
  let o = "recent" === e.type ? a : "org_private" === e.type ? getPluginVersion(r) : d;
  let u = Um();
  let g = u?.type === _n && u.data.widgetId === e.widgetId && u.data.targetRect && u.data.viewType === e.type;
  let p = Ud(e.widgetId);
  let I = useRef(null);
  let m = WK(e.widgetId);
  let x = desktopAPIInstance && !!p && !m;
  let j = !!m || x;
  let h = Um();
  let w = useRef(null);
  let f = u?.type === cH && u.data.widgetId === e.widgetId;
  let {
    isWidgetBlockedByAllowlist
  } = Ys(e.widgetId);
  let _ = useCallback(t => {
    if (j) {
      if (t.preventDefault(), t.stopPropagation(), f) i(hideDropdownAction());else {
        let n = t.currentTarget.getBoundingClientRect();
        i(showDropdownThunk({
          type: cH,
          data: {
            targetRect: n,
            widgetId: e.widgetId
          }
        }));
      }
    }
  }, [i, e.widgetId, f, j]);
  let b = useCallback(() => {
    _$$j({
      pluginID: e.widgetId,
      widgetName: o.name,
      pluginVersionID: o.id,
      triggeredFrom: "universal-insert"
    });
  }, [o, e.widgetId]);
  let T = useCallback(e => {
    j ? _(e) : permissionScopeHandler.user("insert-published-widget", () => {
      b();
    });
  }, [b, _, j]);
  let C = useCallback(t => {
    t.stopPropagation();
    g ? i(hideDropdownAction()) : i(showDropdownThunk({
      type: _n,
      data: {
        widgetId: e.widgetId,
        targetRect: t.currentTarget.getBoundingClientRect(),
        viewType: e.type
      }
    }));
  }, [g, i, e.widgetId, e.type]);
  if (!o) return null;
  if (hasLocalFileId(o)) return jsx(eS, {
    localFileId: o.localFileId.toString()
  });
  let R = w.current?.getBoundingClientRect();
  let F = !!(h && R) || g;
  let N = jsx(_W, {
    resourceId: e.widgetId,
    resourceType: ResourceTypeNoComment.WIDGET,
    parentView: nN.TILE,
    isFauxFocused: F
  });
  return jsxs("div", {
    children: [jsx(eM, {
      iconUrl: o.redirect_snapshot_url ?? void 0,
      isFauxFocused: F,
      localWidget: m,
      onClick: T,
      onOptionsClick: C,
      optionsButtonIsActive: g,
      primaryCTAButton: N,
      secondaryIcon: jsx(em, {
        resource: o
      }),
      subheader: CF(o),
      useHorizontalLayout: !0,
      visuallyDisabled: isWidgetBlockedByAllowlist,
      widget: o,
      widgetId: e.widgetId
    }), jsx("div", {
      ref: I
    }), h && R && jsx(NR, {
      targetRect: R,
      widgetId: e.widgetId,
      lean: "center"
    }), g && jsx(EJ, {
      viewResource: viewWidgetDetails,
      plugin: o
    })]
  });
}
function eD(e) {
  return ZT()[e.widgetId] ? jsx(eA, {
    widgetId: e.widgetId,
    type: "org_private"
  }) : null;
}
function eS(e) {
  let i = useDispatch();
  let t = yQ();
  let r = useMemo(() => e.localFileId ? t[e.localFileId] : void 0, [t, e.localFileId]);
  let d = jg();
  let a = r ? r.plugin_id : e.widgetId;
  let o = bh({
    includePendingPublishers: !1
  });
  let u = useMemo(() => Object.values(o).find(e => e.id === a), [o, a]);
  let c = useMemo(() => u && u.current_plugin_version_id ? u.versions[u.current_plugin_version_id] : void 0, [u]);
  let g = Um();
  let {
    viewWidgetDetails
  } = ej();
  let v = g?.type === jZ.DEVELOPMENT_WIDGET_DROPDOWN && g?.data.isRecentTile === e.isRecentTile && g?.data.localFileId === e.localFileId && g?.data.pluginId === a && g?.data.targetRect;
  let I = useCallback(t => {
    if (t.stopPropagation(), v) i(hideDropdownAction());else {
      let n = t.currentTarget.getBoundingClientRect();
      i(showDropdownThunk({
        type: jZ.DEVELOPMENT_WIDGET_DROPDOWN,
        data: {
          localFileId: e.localFileId,
          pluginId: a,
          isRecentTile: e.isRecentTile,
          targetRect: n
        }
      }));
    }
  }, [i, e.localFileId, a, e.isRecentTile, v]);
  let m = useCallback(() => {
    r && _$$j({
      pluginID: r.plugin_id,
      widgetName: r.name,
      pluginVersionID: "",
      triggeredFrom: "universal-insert"
    });
  }, [r]);
  if (!r && !u) return null;
  let x = jsx(_$$A, {
    localResource: r,
    publishedResource: u
  });
  let j = u && isResourcePendingPublishing(u);
  let h = u && getPluginVersion(u).redirect_snapshot_url || e.localFileId && d[e.localFileId] && d[e.localFileId].metadata.widgetSnapshotImageSrc || _$$J2;
  let w = u && !j ? u.roles.is_public ? _$$A3 : _$$A5 : void 0;
  return jsxs(Fragment, {
    children: [jsx(eM, {
      iconUrl: h,
      inReview: j,
      localWidget: r,
      onClick: () => m(),
      onOptionsClick: I,
      optionsButtonIsActive: v,
      publishingStatusIcon: w,
      showEditorTypeIcon: !1,
      subheader: x,
      useHorizontalLayout: !0,
      widget: c,
      widgetId: a
    }), v && (r ? jsx(T9, {
      localResource: r,
      viewResource: viewWidgetDetails
    }) : jsx(T9, {
      publishedResource: u,
      viewResource: viewWidgetDetails
    }))]
  });
}
function eO(e) {
  let {
    widgetId
  } = e;
  let t = ZT()[widgetId] ?? null;
  if (!t) return null;
  let l = getPluginVersion(t);
  let {
    redirect_snapshot_url,
    manifest
  } = l;
  return jsx(eM, {
    widget: l,
    iconUrl: redirect_snapshot_url ?? void 0,
    widgetId: t.id,
    onClick: e => e.stopPropagation(),
    useHorizontalLayout: !0,
    showEditorTypeIcon: !0,
    editorType: manifest.editorType,
    isNotification: !0,
    metadataOverrideNode: jsx(PE, {
      resource: t
    })
  });
}
function eV(e) {
  let i = J$(e.widgetId);
  if (!i) return null;
  let t = getPluginVersion(i);
  let l = fO(i);
  let s = jsxs(Fragment, {
    children: [jsx("div", {
      className: rz,
      children: getResourceTaglineOrDescription(t, stripHtmlTags)
    }), jsx("div", {
      className: Yl,
      children: l
    })]
  });
  return jsx(eM, {
    widget: t,
    subheader: s,
    iconUrl: t.redirect_snapshot_url ?? void 0,
    widgetId: e.widgetId
  });
}
function eL({
  useHorizontalLayout: e = !1,
  onIconClick: i,
  disabled: t,
  iconUrl: r = "",
  widget: d,
  publishedWidget: a,
  keyboardNavigationButtonRef: o
}) {
  let u = useMemo(() => e ? [op.PRICE] : [op.PURCHASED, op.OFF_PLATFORM, op.FREEMIUM, op.PRICE], [e]);
  let c = useSelector(e => e.authedActiveCommunityProfile);
  return jsxs("div", {
    className: e ? Zv : Cq,
    onClick: i,
    role: "button",
    tabIndex: 0,
    children: [t ? jsx(_$$z, {
      src: r,
      context: FFileType.DESIGN
    }) : jsx(_$$_, {
      widget: d,
      src: r,
      analytics: {
        triggeredFrom: "universal-insert"
      },
      keyboardNavigationButtonRef: o,
      context: FFileType.DESIGN
    }), jsx("div", {
      className: VJ,
      children: $3({
        resource: a,
        authedActiveCommunityProfile: c,
        validBadges: u,
        size: e ? "md" : "lg"
      })
    })]
  });
}
let eM = memo(function (e) {
  let i = e.localWidget ?? e.widget ?? pluginMetadata;
  let {
    viewWidgetDetails,
    keyboardNavigationPath,
    shouldFocusFirstItem
  } = ej();
  let {
    setKeyboardNavigationElement,
    isFauxFocused,
    keyboardNavigationButtonRef
  } = ef(`widget_${i.name}`, keyboardNavigationPath, !!shouldFocusFirstItem);
  let c = ZT()[e.widgetId];
  let g = EO(c);
  let v = gn(c);
  let I = c ? getPluginVersion(c) : null;
  let m = i.name;
  I?.name && I?.name !== "" && (m = I?.name);
  let x = useCurrentUserOrg();
  let j = U6();
  let b = !e.localWidget && BF({
    org: x,
    extensionVersion: I ?? e.widget,
    isWidget: !0,
    allowlistedExtensions: j
  });
  let T = !!(g || b);
  let R = useTracking();
  let F = T ? void 0 : e => e.stopPropagation();
  let N = e.metadataOverrideNode ?? jsxs(Fragment, {
    children: [jsxs("div", {
      className: QF,
      children: [jsx("div", {
        className: JW,
        children: jsxs(AutoLayout, {
          spacing: 4,
          verticalAlignItems: "center",
          children: [jsx("div", {
            className: p()(Y2, {
              [_$$s2.colorTextDisabled.$]: e.visuallyDisabled
            }),
            children: m
          }), e.inReview && jsx(_$$L, {
            height: "16"
          }), !!e.secondaryIcon && e.secondaryIcon, e.publishingStatusIcon && jsx("div", {
            className: _$$s2.colorIcon.$,
            children: jsx(_$$t, {
              svg: e.publishingStatusIcon
            })
          }), v && jsx("div", {
            className: Y9,
            children: jsx(xY, {})
          })]
        })
      }), jsx("div", {
        className: ML,
        children: e.subheader
      })]
    }), e.onOptionsClick && jsx(_$$K, {
      "aria-label": getI18nString("universal_insert.more_options"),
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("universal_insert.more_options")
      },
      onClick: e.onOptionsClick,
      children: jsx(_$$J, {})
    }), e.primaryCTAButton && jsx("div", {
      style: sx.add({
        alignSelf: "center"
      }).$,
      children: e.primaryCTAButton
    })]
  });
  return jsxs("div", {
    className: p()(e.useHorizontalLayout ? Gy : BG, isFauxFocused ? c6 : void 0),
    onClick: i => {
      logAndTrackCTA({
        trackingContext: R.name,
        widgetId: e.widgetId
      });
      T ? viewWidgetDetails() : e.onClick ? e.onClick(i) : viewWidgetDetails();
    },
    role: "button",
    tabIndex: 0,
    ref: keyboardNavigationPath ? setKeyboardNavigationElement : void 0,
    "data-testid": "widget-tile",
    children: [jsxs("div", {
      className: ot,
      children: [e.isNotification && jsx("div", {
        className: Vx
      }), e.showEditorTypeIcon ? jsxs(li.IconAndBadgeContainer, {
        children: [jsx(eL, {
          useHorizontalLayout: e.useHorizontalLayout,
          onIconClick: F,
          disabled: T,
          iconUrl: e.iconUrl,
          widget: i,
          publishedWidget: c,
          keyboardNavigationButtonRef
        }), jsx(li.BadgeContainer, {
          fromBrowseResourceModal: !0,
          resourceType: "widget",
          children: jsx(dn, {
            editorType: e.editorType,
            is16x16: !0
          })
        })]
      }) : jsx(eL, {
        useHorizontalLayout: e.useHorizontalLayout,
        onIconClick: F,
        disabled: T,
        iconUrl: e.iconUrl,
        widget: i,
        publishedWidget: c,
        keyboardNavigationButtonRef
      })]
    }), N]
  });
});
export function $$ez5(e) {
  let i = useDispatch();
  let t = useRef(null);
  let r = Um();
  let d = _$$x();
  let a = isDevHandoffEditorType();
  let o = dR(e.pluginId, "universal-insert");
  let u = Gt(e.pluginId, "universal-insert");
  let c = _$$t3(e.pluginId, u, o);
  let g = c.length > 0;
  let p = $$eG6(e.pluginId, "community");
  let v = g && r?.type === e.dropdownShownType && r?.data.pluginId === e.pluginId;
  let I = p || v;
  let {
    validatePublishedPluginInOrgAllowlist
  } = j1(e.pluginId);
  let h = RK(e.pluginId);
  let w = useCallback(t => {
    if (t.stopPropagation(), validatePublishedPluginInOrgAllowlist()) {
      if (g) {
        I ? i(hideDropdownAction()) : (e.dropdownShownType && i(showDropdownThunk({
          type: e.dropdownShownType,
          data: {
            pluginId: e.pluginId
          }
        })), i($$eU3({
          pluginId: e.pluginId,
          tileType: "community"
        })));
        return;
      }
      h ? u() : o();
      i(postUserFlag({
        seen_published_plugin_onboarding_modal: !0
      }));
      i(postUserFlag({
        seen_development_plugin_onboarding_modal: !0
      }));
    }
  }, [validatePublishedPluginInOrgAllowlist, g, h, i, I, e.dropdownShownType, e.pluginId, u, o]);
  if (a && !d) return null;
  let y = t.current?.getBoundingClientRect();
  let _ = e.usePrimaryButtonStyles ? jsxs(ButtonBasePrimary, {
    onClick: w,
    className: lI,
    children: [renderI18nText("universal_insert.run"), g && jsx(SvgComponent, {
      svg: _$$A2,
      className: sI
    })]
  }) : jsxs("button", {
    className: lO,
    onClick: w,
    ref: e.buttonRef,
    children: [renderI18nText("universal_insert.run"), g && jsx(SvgComponent, {
      svg: _$$A2,
      className: zZ
    })]
  });
  return jsxs("div", {
    className: e.usePrimaryButtonStyles ? od : void 0,
    "data-testid": "run-plugin-button",
    children: [jsx("div", {
      ref: t,
      children: _
    }), I && y && jsx(_$$j2, {
      showPoint: !1,
      items: c,
      onSelectItem: e => {
        e.callback && e.callback("", null, i);
      },
      parentRect: y,
      dispatch: i,
      lean: "left"
    })]
  });
}
let eW = "DROPDOWN_TYPE_RUN_PLUGIN_SUBMENU";
export function $$eU3(e) {
  return showDropdownThunk({
    type: eW,
    data: e
  });
}
export function $$eG6(e, i) {
  let t = Um();
  return t?.type === eW && t.data.pluginId === e && i === t.data.tileType;
}
export function $$eH1(e) {
  let i = useDispatch();
  let t = ZT()[e.widgetId];
  let r = WK(e.widgetId);
  let d = Ud(e.widgetId);
  let a = desktopAPIInstance && !!d && !r;
  let o = !!r || a;
  let u = Um();
  let g = u?.type === cH && u.data.widgetId === e.widgetId;
  let p = useRef(null);
  let I = useCallback(t => {
    if (o) {
      if (t.preventDefault(), t.stopPropagation(), g) i(hideDropdownAction());else {
        let n = t.currentTarget.getBoundingClientRect();
        i(showDropdownThunk({
          type: cH,
          data: {
            targetRect: n,
            widgetId: e.widgetId
          }
        }));
      }
    }
  }, [i, e.widgetId, g, o]);
  let x = useCallback(() => {
    let e = getPluginVersion(t);
    _$$j({
      pluginID: e.plugin_id,
      widgetName: e.name,
      pluginVersionID: e.id,
      triggeredFrom: "universal-insert"
    });
  }, [t]);
  let h = useCallback(e => {
    o ? I(e) : permissionScopeHandler.user("insert-published-widget", () => {
      x();
    });
  }, [x, I, o]);
  if (!t) return null;
  let w = jsxs(ButtonBasePrimary, {
    onClick: h,
    className: lI,
    children: [renderI18nText("universal_insert.add"), o && jsx(SvgComponent, {
      svg: _$$A2,
      className: sI
    })]
  });
  let y = p.current?.getBoundingClientRect();
  return jsxs("div", {
    className: od,
    children: [jsx("div", {
      ref: p,
      children: w
    }), g && y && jsx(NR, {
      targetRect: y,
      widgetId: e.widgetId
    })]
  });
}
function e$(e) {
  let i = lt(e.plugin);
  return e.plugin.monetized_resource_metadata ? jsxs("div", {
    className: y2,
    children: [jsx("div", {
      className: lO,
      children: getProductPriceString(e.plugin.monetized_resource_metadata)
    }), !e.hideFreeTrialBadge && hasTrialAvailable({
      resource: e.plugin,
      payment: i
    }) && jsx(w5, {
      metadata: e.plugin.monetized_resource_metadata,
      condensed: !0
    })]
  }) : null;
}
export const Cg = $$eT0;
export const GJ = $$eH1;
export const R7 = $$eI2;
export const dr = $$eU3;
export const ff = $$ey4;
export const tO = $$ez5;
export const yG = $$eG6;