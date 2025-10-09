import { useDispatch, useSelector } from "react-redux";
import { selectWithShallowEqual } from "../905/103090";
import { showModalHandler } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { usePublishedPlugins, useInstalledPluginsAndWidgets, getLocalPlugins } from "../figma_app/844435";
import { getPluginVersion, isDevWithOnlyCodegen, getFullscreenViewEditorType } from "../figma_app/300692";
import { HubTypeEnum } from "../figma_app/45218";
import { r as _$$r } from "../905/319631";
import { jv } from "../905/525678";
import { createMenuItems } from "../905/905430";
import { q } from "../905/276489";
export function $$m1(e, t, i) {
  let {
    appModel,
    selectedView
  } = selectWithShallowEqual(e => ({
    appModel: e.mirror.appModel,
    selectedView: e.selectedView
  }));
  let g = useDispatch<AppDispatch>();
  let _ = usePublishedPlugins()[e];
  let x = getPluginVersion(_);
  let y = useInstalledPluginsAndWidgets();
  let b = y.plugins[e] || y.orgPlugins[e] || x;
  let C = Object.values(getLocalPlugins()).find(t => t.plugin_id === e);
  let v = C?.manifest.menu && C.manifest.menu.length > 0 && !isDevWithOnlyCodegen(C) ? createMenuItems(C.manifest.menu, C) : [];
  let E = b.manifest.menu && b.manifest.menu.length > 0 && !isDevWithOnlyCodegen(b) ? createMenuItems(b.manifest.menu, b) : [];
  let T = jv(E.map(e => q(e, e => () => t(e))), {
    appModel,
    selectedView
  });
  let w = jv(v.map(e => q(e, e => () => i(e))), {
    appModel,
    selectedView
  });
  if (!C) return T;
  if (!_ || _ && !_.current_plugin_version_id) return w;
  let S = [];
  C.error ? S.push({
    displayText: "\u26A0 In-development version",
    callback: () => {
      g(showModalHandler({
        type: _$$r,
        data: {
          dispatch: g,
          error: C.error,
          resourceType: HubTypeEnum.PLUGIN
        },
        showModalsBeneath: !0
      }));
    }
  }) : S.push({
    displayText: "In-development version",
    ...(w.length > 0 ? {
      children: w
    } : {
      callback: () => {
        "figma" === getFullscreenViewEditorType() && (g(postUserFlag({
          seen_published_plugin_onboarding_modal: !0
        })), g(postUserFlag({
          seen_development_plugin_onboarding_modal: !0
        })));
        i();
      }
    })
  });
  S.push({
    displayText: "Published version",
    ...(T.length > 0 ? {
      children: T
    } : {
      callback: () => {
        "figma" === getFullscreenViewEditorType() && (g(postUserFlag({
          seen_published_plugin_onboarding_modal: !0
        })), g(postUserFlag({
          seen_development_plugin_onboarding_modal: !0
        })));
        t();
      }
    })
  });
  return S;
}
export function $$f0(e, t) {
  let i = useSelector(e => e.mirror.appModel);
  let n = useSelector(e => e.selectedView);
  let a = usePublishedPlugins()[e];
  let s = getPluginVersion(a);
  let d = s.manifest.menu && s.manifest.menu.length > 0 ? createMenuItems(s.manifest.menu, s) : [];
  return jv(d.map(e => q(e, e => () => t(e))), {
    appModel: i,
    selectedView: n
  });
}
export const p = $$f0;
export const t = $$m1;
