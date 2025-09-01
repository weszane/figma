import { wA, d4 } from "../vendor/514228";
import { R } from "../905/103090";
import { to } from "../905/156213";
import { b as _$$b } from "../905/985254";
import { cW, Be, $1 } from "../figma_app/844435";
import { uF, LW, T } from "../figma_app/300692";
import { bD } from "../figma_app/45218";
import { r as _$$r } from "../905/319631";
import { jv } from "../905/525678";
import { z } from "../905/905430";
import { q } from "../905/276489";
export function $$$$p1(e, t, a) {
  let {
    appModel,
    selectedView
  } = R(e => ({
    appModel: e.mirror.appModel,
    selectedView: e.selectedView
  }));
  let h = wA();
  let x = cW()[e];
  let b = uF(x);
  let v = Be();
  let f = v.plugins[e] || v.orgPlugins[e] || b;
  let j = Object.values($1()).find(t => t.plugin_id === e);
  let y = j?.manifest.menu && j.manifest.menu.length > 0 && !LW(j) ? z(j.manifest.menu, j) : [];
  let w = f.manifest.menu && f.manifest.menu.length > 0 && !LW(f) ? z(f.manifest.menu, f) : [];
  let k = jv(w.map(e => q(e, e => () => t(e))), {
    appModel,
    selectedView
  });
  let E = jv(y.map(e => q(e, e => () => a(e))), {
    appModel,
    selectedView
  });
  if (!j) return k;
  if (!x || x && !x.current_plugin_version_id) return E;
  let C = [];
  j.error ? C.push({
    displayText: "\u26A0 In-development version",
    callback: () => {
      h(to({
        type: _$$r,
        data: {
          dispatch: h,
          error: j.error,
          resourceType: bD.PLUGIN
        },
        showModalsBeneath: !0
      }));
    }
  }) : C.push({
    displayText: "In-development version",
    ...(E.length > 0 ? {
      children: E
    } : {
      callback: () => {
        "figma" === T() && (h(_$$b({
          seen_published_plugin_onboarding_modal: !0
        })), h(_$$b({
          seen_development_plugin_onboarding_modal: !0
        })));
        a();
      }
    })
  });
  C.push({
    displayText: "Published version",
    ...(k.length > 0 ? {
      children: k
    } : {
      callback: () => {
        "figma" === T() && (h(_$$b({
          seen_published_plugin_onboarding_modal: !0
        })), h(_$$b({
          seen_development_plugin_onboarding_modal: !0
        })));
        t();
      }
    })
  });
  return C;
}
export function $$g0(e, t) {
  let a = d4(e => e.mirror.appModel);
  let s = d4(e => e.selectedView);
  let i = cW()[e];
  let r = uF(i);
  let d = r.manifest.menu && r.manifest.menu.length > 0 ? z(r.manifest.menu, r) : [];
  return jv(d.map(e => q(e, e => () => t(e))), {
    appModel: a,
    selectedView: s
  });
}
export const p = $$g0;
export const t = $$$$p1;