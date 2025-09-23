import { ServiceCategories } from "../905/165054";
import { Fullscreen } from "../figma_app/763686";
import { getSceneGraphInstance } from "../905/830071";
import { trackFullScreenAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { BrowserInfo } from "../figma_app/778880";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { getProductPriceString } from "../figma_app/808294";
import { Bi, ee } from "../figma_app/248118";
import { isEditorTypeSupportedFor, comparePluginsByName } from "../figma_app/844435";
import { s7 } from "../905/551193";
import { checkResourceEligibilityDebug } from "../figma_app/86989";
import { x as _$$x } from "../905/239551";
import { isValidWidgetType } from "../figma_app/364284";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { canRunPluginWithinOrg, formatPluginName, filterResourcesByMatch, getCurrentPluginVersionId } from "../figma_app/300692";
import { D as _$$D2 } from "../905/629114";
import { clearWidgetSyncedState, getSyncedState, getSyncedMap } from "../905/486749";
import { fullscreenValue } from "../figma_app/455680";
import { widgetErrorTracker } from "../905/250412";
import { j } from "../905/813868";
import { hasKey, getArrayLength } from "../905/764747";
import { canPerformAction } from "../figma_app/12796";
import { hasMonetizedResourceMetadata } from "../figma_app/45218";
import { hasLocalFileId, manifestContainsWidget, manifestErrorMessage } from "../figma_app/155287";
import { Zm } from "../figma_app/201703";
import { q } from "../905/276489";
import { ft, gy, Im } from "../905/608145";
let D = {
  showUnpurchased: !0
};
function L(e, t, i) {
  let {
    publishedWidgets
  } = t;
  i ??= D;
  let a = [];
  let s = debugState.getState();
  for (let t of e) if (!hasLocalFileId(t) && canRunPluginWithinOrg(s, t)) try {
    let e = publishedWidgets ? publishedWidgets[t.plugin_id] : void 0;
    if (hasMonetizedResourceMetadata(e) && checkResourceEligibilityDebug(e)) {
      if (!i.showUnpurchased) continue;
      a.push({
        type: "run-menu-action",
        name: {
          type: "plugin-name",
          plugin: t.name
        },
        menuAction: {
          type: "unpurchased-plugin"
        },
        rightText: getProductPriceString(e.monetized_resource_metadata),
        requiresPurchase: !0,
        isWidget: e.is_widget,
        pluginId: e.id,
        path: []
      });
      continue;
    }
    t.manifest.menu && 0 !== t.manifest.menu.length || a.push({
      type: "run-menu-action",
      name: {
        type: "plugin-name",
        plugin: t.name
      },
      menuAction: Bi(t),
      path: []
    });
  } catch (e) {
    reportError(ServiceCategories.EXTENSIBILITY, e);
  }
  return a;
}
export function $$F0(e, t) {
  let i = [];
  let n = !!e.isReadOnly;
  let r = debugState.getState();
  let a = canPerformAction(r);
  if (!e.userCanViewWidgets) return i;
  if (!a || n || !isEditorTypeSupportedFor(r)) {
    i.push(ft({
      nameStringKey: "widgets-menu-view-only",
      menuAction: {
        type: "manage-widgets"
      },
      disabled: !0
    }));
    return i;
  }
  let s = function (e) {
    let t = e.recentlyUsedWidgets?.sort(comparePluginsByName);
    if (!t || 0 === t.length) return [];
    let i = L(t, e, {
      showUnpurchased: !1
    }).slice(0, e.unboundedRecents ? void 0 : Zm);
    i.length > 0 && !e.hideRecentsHeader && i.unshift({
      type: "header",
      name: getI18nString("fullscreen_actions.recents")
    });
    return i;
  }(e);
  s.length > 0 && (i.push(...s), i.push({
    type: "separator"
  }));
  let c = function (e, t) {
    let {
      savedWidgetVersions
    } = e;
    let n = savedWidgetVersions ? Object.values(savedWidgetVersions).sort(comparePluginsByName).filter(e => "user" === e.installed_by) : [];
    if (!n || 0 === n.length) return [];
    let r = L(n, e, t);
    return [{
      type: "submenu",
      name: getI18nString("fullscreen_actions.widgets-menu-saved-widgets"),
      submenu: r
    }];
  }(e, t);
  c.length > 0 && i.push(...c);
  e.org && i.push({
    type: "submenu",
    name: getI18nString("whiteboard.inserts.plugin_from_org", {
      orgName: e.org?.name || "your org"
    }),
    submenu: function (e, t) {
      let i = Object.values(e.orgSavedWidgets || {}).filter(t => !s7(t, e.org?.id || ""));
      let n = e.orgPrivateWidgets ? e.orgPrivateWidgets : [];
      let r = [];
      if (n.length > 0) {
        let i = gy(L(n, e, t));
        r.push(...i);
      }
      if (r.length > 0 && r.push({
        type: "separator"
      }), i.length > 0) {
        let n = gy(L(i, e, t));
        r.push(...n);
      }
      return r;
    }(e, t)
  });
  desktopAPIInstance && i.push({
    type: "submenu",
    name: getI18nString("widgets.development"),
    submenu: function (e) {
      let t = [];
      let i = function (e) {
        let {
          localExtensions
        } = e;
        let i = [];
        for (let e in localExtensions) {
          let n = +e;
          let r = localExtensions[e];
          if (!manifestContainsWidget(r)) continue;
          let a = r.error;
          let s = formatPluginName(r);
          if (a) {
            i.push({
              type: "submenu",
              name: s,
              submenu: [ft({
                nameStringKey: "widgets-menu-manifest-issue",
                menuAction: {
                  type: "toggle-console"
                },
                disabled: !0
              }), ft({
                nameStringKey: "widgets-menu-show-error",
                menuAction: {
                  type: "toggle-console",
                  showError: manifestErrorMessage(a)
                },
                disabled: !1
              }), ft({
                nameStringKey: BrowserInfo.mac ? "plugins-menu-open-directory-mac" : "plugins-menu-open-directory-win",
                menuAction: {
                  type: "open-dir",
                  localFileId: n
                },
                disabled: !1
              })]
            });
            continue;
          }
          i.push({
            type: "run-menu-action",
            name: {
              type: "plugin-name",
              plugin: s
            },
            menuAction: ee(r),
            path: []
          });
        }
        return gy(i);
      }(e);
      t.push(...i);
      let n = Object.keys(i).length > 0 || Object.keys(filterResourcesByMatch(debugState.getState().publishedWidgets, debugState.getState().user?.id || "")).length > 0;
      desktopAPIInstance && n && t.push(ft({
        nameStringKey: "widgets-menu-manage-development",
        menuAction: {
          type: "manage-widgets"
        }
      }));
      t.push({
        type: "separator"
      }, ft({
        nameStringKey: "widgets-menu-dev-create-new",
        menuAction: {
          type: "create-new-widget"
        },
        iconType: "plus"
      }), ft({
        nameStringKey: "widgets-menu-dev-import-from-manifest",
        menuAction: {
          type: "import-widget-from-manifest"
        },
        iconType: "import"
      }), {
        type: "separator"
      }, ft({
        nameStringKey: "plugins-menu-toggle-console",
        menuAction: {
          type: "toggle-console"
        }
      }), ft({
        nameStringKey: "plugins-menu-dev-toggle-realms",
        menuAction: {
          actualTypeForBackwardsCompatibility: "toggle-realms",
          type: "toggle-console"
        },
        property: "useRealmsForPluginDev",
        propertyValue: !0
      }));
      return t;
    }(e)
  });
  (e.org || desktopAPIInstance) && i.push({
    type: "separator"
  });
  i.push(ft({
    nameStringKey: "browse-widgets",
    menuAction: {
      type: "browse-widgets"
    }
  }), ft({
    nameStringKey: "select-all-widgets",
    menuAction: {
      type: "select-all-widgets"
    }
  }));
  return i;
}
export function $$M1({
  widgetSelectionInfo: e,
  publishedCanvasWidgetVersions: t
}) {
  if (!(e && e?.pluginID && e?.widgetID)) return [];
  let {
    pluginID,
    widgetID
  } = e;
  if (isValidWidgetType(pluginID)) return [];
  let o = !!e;
  if (o) {
    let {
      pluginID: _pluginID,
      widgetID: _widgetID
    } = e;
    let r = getSceneGraphInstance().get(_widgetID);
    if (r?.widgetVersionId) {
      var l;
      l = r.widgetVersionId;
      o = hasKey(_pluginID) ? getArrayLength(_pluginID) !== l : !t || !t[_pluginID] || getCurrentPluginVersionId(t, _pluginID) !== l;
    } else o = !1;
  }
  let d = [{
    name: "labeled-menu-item",
    args: {
      label: getI18nString("widgets.re_render_widget")
    },
    flags: ["edit"],
    callback: () => {
      _$$x.mountWidget(pluginID, widgetID, "menu re-render");
      trackFullScreenAnalytics("Re-render Widget", {
        pluginId: pluginID,
        widgetId: widgetID
      });
    }
  }, {
    name: "labeled-menu-item",
    args: {
      label: getI18nString("widgets.reset_widget_state")
    },
    flags: ["edit"],
    callback: () => {
      let e = getSceneGraphInstance().get(widgetID);
      e && (clearWidgetSyncedState(e), _$$x.mountWidget(pluginID, widgetID, "menu reset and re-render"), trackFullScreenAnalytics("Reset Widget State", {
        pluginId: pluginID,
        widgetId: widgetID
      }));
    }
  }, {
    action: "view-widget-details",
    flags: ["edit"],
    iconType: "widget"
  }];
  d.push({
    name: "labeled-menu-item",
    args: {
      label: getI18nString("widgets.copy_as_layers")
    },
    flags: ["edit"],
    callback: () => {
      Fullscreen.copyWidgetAsLayers(widgetID);
      trackFullScreenAnalytics("Copy Widget As Layers", {
        pluginId: pluginID,
        widgetId: widgetID
      });
    }
  });
  o && d.push({
    name: "labeled-menu-item",
    args: {
      label: getI18nString("widgets.update_to_latest_version")
    },
    flags: ["edit"],
    callback: () => {
      !function ({
        widgetSelectionInfo: e,
        publishedCanvasWidgetVersions: t
      }) {
        if (!e || !t) return;
        let {
          pluginID: _pluginID3,
          widgetID: _widgetID2
        } = e;
        let r = getSceneGraphInstance().get(_widgetID2);
        if (!r) return;
        let s = r.relativeTransform;
        let o = r.widgetVersionId;
        let l = getCurrentPluginVersionId(t, _pluginID3);
        if (!l) return;
        let d = getSyncedState("current", r);
        let c = getSyncedMap("current", r);
        let p = r.widgetName;
        let m = r.parentNode;
        let h = -1;
        m && (h = [...m.reversedChildrenGuids].reverse().indexOf(_widgetID2));
        try {
          let e = j({
            pluginID: _pluginID3,
            widgetName: p,
            pluginVersionID: l,
            basicOverrides: d,
            mapOverrides: c,
            widgetAction: "widget_update",
            parentNodeID: m?.guid || "",
            shouldPositionWidget: !1,
            indexInParent: h
          }).widgetNodeID;
          if (e) {
            let t = getSceneGraphInstance().get(e);
            t && (t.relativeTransform = s, function (e, t) {
              for (let i of _$$D2().currentPage.findAllWithCriteria({
                types: ["CONNECTOR"]
              })) {
                "endpointNodeId" in i.connectorEnd && i.connectorEnd.endpointNodeId === e && (i.connectorEnd = {
                  ...i.connectorEnd,
                  endpointNodeId: t
                });
                "endpointNodeId" in i.connectorStart && i.connectorStart.endpointNodeId === e && (i.connectorStart = {
                  ...i.connectorStart,
                  endpointNodeId: t
                });
              }
            }(r.guid, e));
          }
          let n = t?.[_pluginID3]?.[r.widgetVersionId];
          let g = t?.[_pluginID3]?.[l];
          let f = g?.redirect_icon_url || n?.redirect_icon_url || "";
          r.removeSelfAndChildren();
          fullscreenValue.dispatch(VisualBellActions.enqueue({
            type: "widget-update-success",
            message: getI18nString("widgets.widget_name_updated", {
              widgetName: p
            }),
            icon: VisualBellIcon.FROM_URL,
            iconURL: f,
            button: {
              text: "Undo",
              editScope: "widget-undo",
              action: () => {
                (function (e) {
                  let {
                    pluginID: _pluginID2,
                    widgetName,
                    pluginVersionID,
                    relativeTransform,
                    basicOverrides,
                    mapOverrides,
                    newWidgetNodeID,
                    iconURL,
                    parentNodeID
                  } = e;
                  let u = j({
                    pluginID: _pluginID2,
                    widgetName,
                    pluginVersionID,
                    basicOverrides,
                    mapOverrides,
                    widgetAction: "undo_widget_update",
                    parentNodeID,
                    shouldPositionWidget: !1
                  }).widgetNodeID;
                  if (newWidgetNodeID) {
                    let e = getSceneGraphInstance().get(newWidgetNodeID);
                    e && e.removeSelfAndChildren();
                  }
                  if (u) {
                    let e = getSceneGraphInstance().get(u);
                    e && (e.shouldPreventWidgetAutoUpdate = !0, e.relativeTransform = relativeTransform);
                  }
                  fullscreenValue.dispatch(VisualBellActions.enqueue({
                    type: "widget-update-undo-success",
                    message: `${widgetName} reverted to previous version`,
                    icon: VisualBellIcon.FROM_URL,
                    iconURL,
                    error: !1
                  }));
                })({
                  newWidgetNodeID: e,
                  pluginID: _pluginID3,
                  widgetName: p,
                  pluginVersionID: o,
                  relativeTransform: s,
                  basicOverrides: d,
                  mapOverrides: c,
                  iconURL: f,
                  parentNodeID: m?.guid || ""
                });
              }
            },
            error: !1
          }));
        } catch (e) {
          widgetErrorTracker.trackWidgetUpdateError(e, {
            pluginID: _pluginID3,
            widgetNodeID: _widgetID2,
            widgetName: p,
            widgetVersionID: o,
            isLocalWidget: !1,
            currentWidgetVersionID: l
          });
          fullscreenValue.dispatch(VisualBellActions.enqueue({
            type: "widget-update-error",
            message: `Unable to update widget: ${e}`,
            error: !0
          }));
          return;
        }
      }({
        widgetSelectionInfo: e,
        publishedCanvasWidgetVersions: t
      });
    }
  });
  return d;
}
export function $$j2(e, t) {
  let i = i => () => Im(e, t, i);
  let n = $$F0(e).map(e => q(e, i));
  let r = $$M1(e);
  0 !== r.length && n.push({
    separator: !0
  }, ...r);
  let a = function (e) {
    let t = [];
    if (!(e.widgetSelectionInfo && e.widgetSelectionInfo?.pluginID && e.widgetSelectionInfo?.widgetID)) return t;
    let {
      widgetID,
      pluginID
    } = e.widgetSelectionInfo;
    let r = Object.values(e.localExtensions).find(e => e.plugin_id === pluginID);
    r && (t.push({
      type: "run-menu-action",
      name: {
        type: "plugin-name",
        plugin: getI18nString("fullscreen_actions.set-widget-thumbnail")
      },
      menuAction: {
        type: "set-widget-thumbnail",
        widgetId: widgetID,
        localFileId: r.localFileId,
        command: void 0
      },
      path: []
    }), t.push({
      type: "run-menu-action",
      name: {
        type: "plugin-name",
        plugin: getI18nString("community.publishing.publish_widget")
      },
      menuAction: {
        type: "publish-widget",
        widgetId: widgetID,
        localFileId: r.localFileId
      },
      path: []
    }));
    return t;
  }(e).map(e => q(e, i));
  0 !== a.length && n.push({
    separator: !0
  }, ...a);
  return {
    ...(e.org?.widgets_whitelist_enforced ? {
      args: {
        orgName: e.org?.name || "your org"
      }
    } : {}),
    name: "widgets-menu",
    children: n
  };
}
export const wX = $$F0;
export const WG = $$M1;
export const Vd = $$j2;
