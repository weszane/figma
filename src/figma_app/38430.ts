import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { desktopAPIInstance } from "../figma_app/876459";
import { c$ } from "../figma_app/236327";
import { renderI18nText, getI18nString } from "../905/303541";
import { qR, JZ } from "../figma_app/696043";
import { S as _$$S } from "../figma_app/11182";
import { showModalHandler } from "../905/156213";
import { m0 } from "../figma_app/976749";
import { NV, OX, x2, qu, qi } from "../figma_app/33586";
import { ZT, WK, Ud, ll, $1, B7 } from "../figma_app/844435";
import { j } from "../905/813868";
import { LR } from "../figma_app/120210";
import { Um } from "../905/848862";
import { sZ } from "../905/845253";
import { getPluginVersion, isValidForSelectedViewAndWhitelist } from "../figma_app/300692";
import { bD, vt } from "../figma_app/45218";
import { ManifestErrorType } from "../figma_app/155287";
import { bE, aY } from "../figma_app/78725";
import { VR } from "../figma_app/545541";
import { r as _$$r } from "../905/319631";
import { ab, ox } from "../figma_app/870683";
import { j as _$$j } from "../905/834956";
import { Cf, it } from "../905/504727";
import { ak } from "../figma_app/212260";
export function $$w2(e) {
  let t = useDispatch();
  let r = ZT()[e.widgetId];
  let i = getPluginVersion(r);
  let d = WK(e.widgetId);
  let c = Ud(e.widgetId);
  let p = desktopAPIInstance && !!c && !d;
  return jsxs(Cf, {
    targetRect: e.targetRect,
    lean: e.lean || "left",
    minWidth: 120,
    maxWidth: 190,
    disableDropdownScrollContainer: !0,
    propagateCloseClick: !0,
    children: [d?.error || p ? jsxs(c$, {
      onClick: () => {
        d && d.error ? t(showModalHandler({
          type: _$$r,
          data: {
            error: d.error,
            dispatch: t,
            resourceType: bD.WIDGET
          },
          showModalsBeneath: !0
        })) : t(showModalHandler({
          type: ak,
          data: {
            dispatch: t
          },
          showModalsBeneath: !0
        }));
      },
      children: ["\u26A0 ", renderI18nText("universal_insert.in_development_version")]
    }) : jsx(c$, {
      onClick: () => {
        j({
          pluginID: i.plugin_id,
          widgetName: i.name,
          pluginVersionID: "",
          triggeredFrom: "universal-insert"
        });
      },
      children: renderI18nText("universal_insert.in_development_version")
    }), jsx(c$, {
      onClick: () => {
        j({
          pluginID: i.plugin_id,
          widgetName: i.name,
          pluginVersionID: i.id,
          triggeredFrom: "universal-insert"
        });
      },
      children: renderI18nText("universal_insert.published_version")
    })]
  });
}
function O({
  pluginId: e,
  preferences: t
}) {
  let {
    pinnedPlugins,
    pinPlugin,
    unpinPlugin
  } = t;
  return pinnedPlugins.find(t => t.plugin_id === e) ? {
    displayText: getI18nString("dev_handoff.inspect_panel.unpin"),
    callback: () => {
      unpinPlugin(e);
    }
  } : {
    displayText: getI18nString("dev_handoff.inspect_panel.pin"),
    callback: () => {
      pinPlugin(e);
    }
  };
}
function R({
  plugin: e
}) {
  let {
    callback,
    isPluginSetToAutoRun
  } = bE(e ?? null);
  return aY(e) ? {
    displayText: getI18nString("dev_handoff.inspect_panel.auto_run"),
    callback,
    isChecked: isPluginSetToAutoRun
  } : null;
}
export function $$L1(e) {
  let t = useDispatch();
  let r = Um();
  let s = m0();
  let o = VR();
  let d = sZ();
  let u = ll();
  let _ = R({
    plugin: e.plugin
  });
  let m = useCallback(() => {
    t(_$$S({
      url: e.resourceType === vt.PLUGIN ? ab(e.resourceId) : ox(e.resourceId),
      linkType: e.resourceType === vt.PLUGIN ? "plugin" : "widget"
    }));
  }, [t, e.resourceType, e.resourceId]);
  let g = [];
  return (e.resourceType === vt.PLUGIN && (isValidForSelectedViewAndWhitelist(e.plugin, d, u) && o.loaded && g.push(O({
    pluginId: e.plugin.plugin_id,
    preferences: o
  })), _ && g.push(_)), g.push({
    displayText: getI18nString("universal_insert.copy_link"),
    callback: m
  }), r) ? s ? jsx($$j6, {
    parentRect: r?.data.targetRect,
    items: g,
    autoHeight: !0,
    minWidth: _ ? 220 : void 0
  }) : jsx($$j6, {
    parentRect: r?.data.targetRect,
    lean: "left",
    minWidth: 64,
    items: g
  }) : null;
}
export let $$P4 = "DROPDOWN_TYPE_SAVED_AND_RECENT_ACTIONS_DROPDOWN";
export function $$D0(e) {
  let t = Um();
  let r = VR();
  let i = m0();
  let a = sZ();
  let s = ll();
  let o = R({
    plugin: e.plugin
  });
  let d = [];
  return (d.push({
    displayText: getI18nString("universal_insert.view_details"),
    callback: e.viewResource
  }), i && (isValidForSelectedViewAndWhitelist(e.plugin, a, s) && r.loaded && d.push(O({
    pluginId: e.plugin.plugin_id,
    preferences: r
  })), o && d.push(o)), t) ? i ? jsx($$j6, {
    parentRect: t?.data.targetRect,
    lean: "left",
    minWidth: 64,
    items: d,
    autoHeight: !0
  }) : jsx($$j6, {
    parentRect: t?.data.targetRect,
    lean: "left",
    minWidth: 64,
    items: d
  }) : null;
}
export let $$k7 = "DROPDOWN_TYPE_PLUGIN_USER_OPTIONS_DROPDOWN";
export function $$M3(e) {
  if (!e.localResource && !e.publishedResource) throw Error("Either localResource or publishedResource is required");
  let t = m0();
  let r = useDispatch();
  let i = Um();
  let s = Object.values($1()).find(t => t.plugin_id === e.publishedResource?.id);
  let o = VR();
  let c = R({
    plugin: e.publishedResource ? getPluginVersion(e.publishedResource) : null
  });
  let u = e.localResource || s;
  let m = B7(u ? u.plugin_id : e.publishedResource.id);
  let E = Ud(u ? u.plugin_id : e.publishedResource.id);
  let b = e.publishedResource || m || E;
  let I = !!b?.versions[b.current_plugin_version_id];
  let v = b ? b.is_widget : u?.manifest.containsWidget;
  let A = LR();
  let x = NV(u, b);
  let N = OX(b);
  let C = x2(u, b, A);
  let w = qu(u);
  let L = qi(I, () => {
    u && r(qR(u?.localFileId));
  });
  if (!i || !i.data.targetRect) return null;
  let P = [];
  (u && !u.error || b) && P.push(x);
  I && e.viewResource && P.push({
    displayText: getI18nString("universal_insert.view_details"),
    callback: e.viewResource
  });
  I && P.push(C);
  u && u.error?.type !== ManifestErrorType.LOAD && P.push(w);
  u || P.push({
    displayText: getI18nString("universal_insert.locate_local_version"),
    callback: () => {
      JZ({
        resourceType: v ? "widget" : "plugin"
      });
    }
  });
  let D = [];
  b && I && o.loaded && t && D.push(O({
    pluginId: b.id,
    preferences: o
  }));
  I && c && D.push(c);
  let k = [];
  u && k.push(L);
  N && k.push(N);
  let M = P.some(Boolean) && (k.some(Boolean) || D.some(Boolean)) && {
    displayText: "",
    separator: !0
  };
  let F = k.some(Boolean) && D.some(Boolean) && {
    displayText: "",
    separator: !0
  };
  return jsx($$j6, {
    parentRect: i.data.targetRect,
    lean: "left",
    minWidth: c ? 220 : 120,
    rootAndSubmenuMaxWidth: c ? void 0 : 190,
    disableDropdownScrollContainer: !0,
    hidePointWhenContentOffScreen: !0,
    dataTestId: "developmentResourceOptionDropdown",
    items: [...P, M, ...D, F, ...k].filter(e => !!e)
  });
}
export let $$F5 = "DROPDOWN_TYPE_DEVELOPMENT_RESOURCE_OPTIONS_DROPDOWN";
export function $$j6(e) {
  let t = useDispatch();
  return jsx(_$$j, {
    ...e,
    dispatch: t,
    showPoint: !0,
    type: it.DEFAULT,
    onSelectItem: e => {
      e.callback && e.callback("", null, t);
    }
  });
}
export const EJ = $$D0;
export const Gq = $$L1;
export const NR = $$w2;
export const T9 = $$M3;
export const _n = $$P4;
export const lD = $$F5;
export const ms = $$j6;
export const yW = $$k7;
