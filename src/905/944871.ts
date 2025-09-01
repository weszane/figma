import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { $D } from "../905/11";
import { t as _$$t } from "../905/303541";
import { bV } from "../figma_app/808294";
import { hN } from "../figma_app/248118";
import { Rm } from "../figma_app/86989";
import { M } from "../figma_app/170366";
import { Eh } from "../figma_app/12796";
import { M5, _V, JT, _H, VQ, Pl, Oe, YQ } from "../figma_app/300692";
import { SH } from "../figma_app/790714";
import { m3 } from "../figma_app/45218";
import { nT } from "../figma_app/53721";
import { ZQ, bH, ho, am, k0 } from "../figma_app/155287";
import { isPluginConfigMatching } from "../905/240440";
import { Ah } from "../figma_app/221114";
import { Zm } from "../figma_app/201703";
import { c as _$$c } from "../905/882587";
import { z } from "../905/905430";
import { q } from "../905/276489";
import { gy, ft, Im } from "../905/608145";
function S(e, t) {
  let i = C(Object.values(e.allSavedPlugins).filter(e => "user" === e.installed_by), e, t);
  let n = gy(i);
  return 0 === n.length ? [] : [{
    type: "submenu",
    name: _$$t("fullscreen_actions.plugins-menu-saved-plugins"),
    submenu: n
  }];
}
let w = {
  showUnpurchased: !0
};
function C(e, t, i) {
  let {
    publishedPlugins,
    isReadOnly
  } = t;
  i ??= w;
  let d = debugState.getState();
  let u = Eh(d);
  let h = [];
  if (!u) return h;
  for (let a of e) if (!(ZQ(a) || M5(a) && _V(a))) try {
    let e = publishedPlugins[a.plugin_id];
    if (m3(e) && Rm(e)) {
      if (!i.showUnpurchased) continue;
      h.push({
        type: "run-menu-action",
        name: {
          type: "plugin-name",
          plugin: a.name
        },
        menuAction: {
          type: "unpurchased-plugin"
        },
        rightText: bV(e.monetized_resource_metadata),
        requiresPurchase: !0,
        isWidget: e.is_widget,
        pluginId: e.id,
        path: []
      });
      continue;
    }
    let {
      canRun
    } = JT({
      plugin: a,
      editorType: t.editorType
    });
    if (!canRun) continue;
    let s = isReadOnly && !M5(a);
    if (!a.manifest.menu || 0 === a.manifest.menu.length || s) {
      let e = _$$c(a.manifest.parameters, a.name);
      let i = t.currentPlugin && _H(a, t.currentPlugin);
      h.push({
        type: "run-menu-action",
        name: {
          type: "plugin-name",
          plugin: a.name
        },
        menuAction: {
          type: "run-installed-plugin",
          pluginId: a.plugin_id,
          command: void 0,
          parameterEntry: e,
          parameterOnly: a.manifest.parameters && !1 !== a.manifest.parameterOnly
        },
        disabled: s,
        checked: i,
        path: []
      });
    } else {
      let e = z(a.manifest.menu, a, [a.name]);
      h.push({
        type: "submenu",
        subtype: "manifest",
        name: a.name,
        submenu: e
      });
    }
  } catch (e) {
    $D(_$$e.EXTENSIBILITY, e);
  }
  return h;
}
export function $$T0(e, t) {
  let i = M();
  let n = [];
  let s = !!e.isReadOnly;
  let l = debugState.getState();
  let c = Eh(l);
  let g = e.editorType === nT.DevHandoff;
  let A = SH();
  if (Ah(l.mirror.appModel.activeCanvasEditModeType)) return [];
  let v = [];
  if (s && c && !g) {
    v = S(e, t);
    n.push(...v);
  } else if (!s || g) {
    v = S(e, t);
    let i = function (e) {
      let t = e.recentlyUsedPlugins;
      if (!t || 0 === t.length) return [];
      let i = C(t, e, {
        showUnpurchased: !1
      }).slice(0, e.unboundedRecents ? void 0 : Zm);
      i.length > 0 && !e.hideRecentsHeader && i.unshift({
        type: "header",
        name: _$$t("fullscreen_actions.recents")
      });
      return i;
    }(e);
    n.push(...i);
    i.length > 0 && n.push({
      type: "separator"
    });
    n.push(ft({
      nameStringKey: "plugins-run-last",
      menuAction: {
        type: "run-last"
      },
      disabled: !VQ(A)
    }));
    v.length > 0 && n.push({
      type: "separator"
    });
    n.push(...v);
  } else n.push(ft({
    nameStringKey: "plugins-menu-view-only",
    menuAction: {
      type: "manage-plugins"
    },
    disabled: !0
  }));
  let E = [];
  e.org && (E = function (e, t) {
    let i = Object.values(e.orgSavedPlugins || {}).filter(e => !bH(e));
    let n = e.orgPrivatePlugins ? e.orgPrivatePlugins : [];
    let r = [];
    if (n.length > 0) {
      let i = gy(C(n, e, t));
      r.push(...i);
    }
    if (r.length > 0 && r.push({
      type: "separator"
    }), i.length > 0) {
      let n = gy(C(i, e, t));
      r.push(...n);
    }
    return r;
  }(e, t)).length > 0 && (0 === v.length && n.push({
    type: "separator"
  }), n.push({
    type: "submenu",
    name: _$$t("whiteboard.inserts.plugin_from_org", {
      orgName: e.org?.name || "your org"
    }),
    submenu: E
  }));
  i && c && (0 === E.length && v.length > 0 && n.push({
    type: "separator"
  }), n.push({
    type: "submenu",
    name: _$$t("widgets.development"),
    submenu: function (e) {
      let t = M();
      let i = function (e) {
        let {
          localExtensions,
          isReadOnly,
          editorType
        } = e;
        let r = debugState.getState();
        let s = Eh(r);
        let o = [];
        let l = editorType === nT.DevHandoff;
        if (!s) return o;
        for (let n in localExtensions) {
          let r = +n;
          let a = localExtensions[n];
          let {
            canRun
          } = JT({
            plugin: a
          });
          if (!canRun) continue;
          let c = a.error;
          c?.text === Pl() && (c = void 0);
          let u = Oe(a);
          if (!(!M5(a) && (isReadOnly || l) || M5(a) && _V(a))) {
            if (c) {
              let e = c.type === ho.LOAD;
              o.push({
                type: "submenu",
                name: u,
                submenu: [ft({
                  nameStringKey: e ? "plugins-menu-plugin-missing" : "plugins-menu-manifest-issue",
                  menuAction: {
                    type: "toggle-console"
                  },
                  disabled: !0
                }), ft({
                  nameStringKey: "plugins-menu-show-error",
                  menuAction: {
                    type: "toggle-console",
                    showError: am(c)
                  },
                  disabled: e
                }), ft({
                  nameStringKey: YQ(),
                  menuAction: {
                    type: "open-dir",
                    localFileId: r
                  },
                  disabled: e
                })]
              });
              continue;
            }
            if (a.manifest.menu && 0 !== a.manifest.menu.length) o.push({
              type: "submenu",
              subtype: "manifest",
              name: u,
              submenu: z(a.manifest.menu, a, [u])
            });else {
              let t = e.currentPlugin && _H(a, e.currentPlugin);
              o.push({
                type: "run-menu-action",
                name: {
                  type: "plugin-name",
                  plugin: u
                },
                menuAction: hN(a),
                checked: t,
                path: []
              });
            }
          }
        }
        return gy(o);
      }(e);
      Object.values(e.localExtensions).some(e => !k0(e)) && i.push(N());
      i.length > 0 && i.push({
        type: "separator"
      });
      i.push(ft({
        nameStringKey: "plugins-menu-dev-create-new",
        menuAction: {
          type: "create-new-plugin"
        },
        iconType: "plus"
      }));
      i.push(ft({
        nameStringKey: "plugins-menu-dev-import-from-manifest",
        menuAction: {
          type: "import-plugin-from-manifest"
        },
        iconType: "import"
      }));
      i.push({
        type: "separator"
      });
      i.push(ft({
        nameStringKey: "plugins-menu-view-documentation",
        menuAction: {
          type: "view-api-docs"
        },
        iconType: "external_link"
      }));
      i.push(ft({
        nameStringKey: "plugins-menu-toggle-console",
        menuAction: {
          type: "toggle-console"
        }
      }));
      i.push(ft({
        nameStringKey: "plugins-menu-dev-toggle-realms",
        menuAction: {
          actualTypeForBackwardsCompatibility: "toggle-realms",
          type: "toggle-console"
        },
        property: "useRealmsForPluginDev",
        propertyValue: !0
      }));
      i.push(ft({
        nameStringKey: "plugins-menu-dev-toggle-hot-reload",
        menuAction: {
          type: "toggle-hot-reload-plugin-dev"
        },
        property: "hotReloadPluginDev",
        propertyValue: !0
      }));
      getFeatureFlags().plugins_related_links_local && t && i.push(ft({
        nameStringKey: "plugins-menu-use-local-related-link-plugin",
        menuAction: {
          type: "toggle-use-local-related-link-plugin"
        },
        property: "useLocalRelatedLinkPlugin",
        propertyValue: !0
      }));
      return i;
    }(e)
  }));
  (!s || g) && (n.push({
    type: "separator"
  }), n.push(ft({
    nameStringKey: "browse-plugins",
    menuAction: {
      type: "browse-plugins"
    }
  })));
  return n;
}
export function $$k1(e, t) {
  if (!e) return [];
  let i = function (e) {
    let t = new Map();
    let {
      activeTextReviewPlugin
    } = e;
    for (let i of [...Object.values(e.allSavedPlugins), ...Object.values(e.recentlyUsedPlugins ?? {})]) !i.manifest.capabilities?.some(e => "textreview" === e) || t.has(i.plugin_id) || ZQ(i) || t.set(i.plugin_id, i);
    for (let i of Object.values(e.localExtensions)) i.manifest.capabilities?.some(e => "textreview" === e) && !t.has(i.localFileId) && t.set(i.localFileId, i);
    if (!t.size) return null;
    let n = Array.from(t.values(), e => ({
      type: "run-menu-action",
      name: {
        type: "plugin-name",
        plugin: ZQ(e) ? `(dev) ${e.name}` : e.name
      },
      menuAction: {
        type: "set-text-review-plugin",
        textReviewPluginInfo: ZQ(e) ? {
          type: "local",
          localFileId: e.localFileId
        } : {
          type: "published",
          pluginId: e.plugin_id
        }
      },
      checked: isPluginConfigMatching(activeTextReviewPlugin, e),
      path: []
    }));
    n.push({
      type: "run-menu-action",
      name: {
        type: "plugin-name",
        plugin: "None"
      },
      menuAction: {
        type: "set-text-review-plugin",
        textReviewPluginInfo: null
      },
      checked: !activeTextReviewPlugin,
      path: []
    });
    return {
      type: "submenu",
      name: "Text review plugins",
      submenu: n
    };
  }(e);
  return i ? [q(i, i => () => Im(e, t, i))] : [];
}
export function $$R2(e, t) {
  let i = i => () => Im(e, t, i);
  let n = $$T0(e);
  let r = [];
  n.forEach(e => {
    r.push(q(e, i));
  });
  return 0 === r.length ? null : {
    name: "plugins-menu",
    children: r
  };
}
let N = () => ft({
  nameStringKey: "plugins-menu-manage-development",
  menuAction: {
    type: "manage-plugins"
  }
});
export const $0 = $$T0;
export const dL = $$k1;
export const qz = $$R2;