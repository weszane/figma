import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { Xr, useAtomValueAndSetter } from "../figma_app/27355";
import { Rs } from "../figma_app/288654";
import { Lo, to } from "../905/156213";
import { m0 } from "../figma_app/976749";
import { mf, YN } from "../figma_app/844435";
import { tS } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { FInheritanceType, FOrganizationLevelType, FPlanNameType } from "../figma_app/191312";
import { Sc8 } from "../figma_app/43951";
import { T5, H3, X$ } from "../figma_app/465071";
import { UH } from "../figma_app/300692";
import { R } from "../figma_app/612938";
import { Lx } from "../figma_app/474636";
import { s as _$$s } from "../figma_app/961559";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { nB, wi, jk, vo, Y9, hE } from "../figma_app/272243";
import { $n } from "../905/521428";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { renderI18nText, getI18nString } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { Ju } from "../905/102752";
var C = (e => (e.STOP_AUTO_RUN_FROM_USER = "stop-auto-run-from-user", e.STOP_AUTO_RUN_FROM_ORG = "stop-auto-run-from-org", e.CONFIRM_REPLACE = "confirm-replace", e.ENABLE_AUTO_RUN = "enable-auto-run", e))(C || {});
let w = Ju(function ({
  commonShowModalArgs: e,
  newPluginName: t,
  autoRunModalType: r,
  open: n
}) {
  let s;
  let o;
  let d = useDispatch();
  let c = () => {
    _$$s.updateUserAutoRunPluginId(e.pluginID, FInheritanceType.NONE);
    d(Lo());
  };
  let u = () => d(Lo());
  let p = T5("AutoRunConfirmModal").unwrapOr(null);
  let h = p?.key.type === FOrganizationLevelType.ORG ? p.name : void 0;
  let g = {
    currentAutoRunPluginName: jsx(_$$E, {
      fontWeight: "bold",
      children: e.currentAutoRunPluginName
    })
  };
  let f = {
    orgName: jsx(_$$E, {
      children: h || ""
    }),
    orgPluginName: jsx(_$$E, {
      fontWeight: "bold",
      children: e.orgPluginName
    })
  };
  let E = {
    orgPluginName: jsx(_$$E, {
      fontWeight: "bold",
      children: e.orgPluginName
    }),
    newPluginName: jsx(_$$E, {
      fontWeight: "bold",
      children: t
    }),
    orgName: jsx(_$$E, {
      children: h || ""
    })
  };
  switch (r) {
    case "stop-auto-run-from-user":
      s = jsxs(Fragment, {
        children: [jsx(nB, {
          children: jsx(_$$E, {
            color: "default",
            fontWeight: "medium",
            children: renderI18nText("dev_handoff.autorun_confirm_modal.stop_auto_run_desc", g)
          })
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: "secondary",
              onClick: u,
              children: getI18nString("dev_handoff.autorun_confirm_modal.cancel")
            }), jsx($n, {
              variant: "primary",
              onClick: () => {
                c();
                d(to({
                  type: w,
                  data: {
                    commonShowModalArgs: e,
                    autoRunModalType: "enable-auto-run"
                  }
                }));
              },
              children: getI18nString("dev_handoff.autorun_confirm_modal.stop_auto_run")
            })]
          })
        })]
      });
      break;
    case "enable-auto-run":
      s = jsxs(Fragment, {
        children: [jsx(nB, {
          children: jsx(_$$E, {
            color: "default",
            fontWeight: "medium",
            children: renderI18nText("dev_handoff.autorun_confirm_modal.enable_auto_run_desc", f)
          })
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: "secondary",
              onClick: u,
              children: getI18nString("dev_handoff.autorun_confirm_modal.dont_enable")
            }), jsx($n, {
              variant: "primary",
              onClick: () => {
                _$$s.updateUserAutoRunPluginId(e.pluginID, FInheritanceType.INHERIT);
                d(Lo());
              },
              children: getI18nString("dev_handoff.autorun_confirm_modal.enable_auto_run")
            })]
          })
        })]
      });
      break;
    case "confirm-replace":
      s = jsxs(Fragment, {
        children: [jsx(nB, {
          children: jsx(_$$E, {
            color: "default",
            fontWeight: "medium",
            children: renderI18nText("dev_handoff.autorun_confirm_modal.confirm_replace", E)
          })
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: "secondary",
              onClick: u,
              children: getI18nString("dev_handoff.autorun_confirm_modal.cancel")
            }), jsx($n, {
              variant: "primary",
              onClick: () => {
                _$$s.updateUserAutoRunPluginId(e.pluginID, FInheritanceType.OVERRIDE);
                d(Lo());
              },
              children: getI18nString("dev_handoff.autorun_confirm_modal.replace")
            })]
          })
        })]
      });
      break;
    case "stop-auto-run-from-org":
      s = jsxs(Fragment, {
        children: [jsx(nB, {
          children: jsx(_$$E, {
            color: "default",
            fontWeight: "medium",
            children: renderI18nText("dev_handoff.autorun_confirm_modal.stop_auto_run_from_org", f)
          })
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: "secondary",
              onClick: u,
              children: getI18nString("dev_handoff.autorun_confirm_modal.cancel")
            }), jsx($n, {
              variant: "primary",
              onClick: c,
              children: getI18nString("dev_handoff.autorun_confirm_modal.stop_auto_run")
            })]
          })
        })]
      });
      break;
    default:
      throwTypeError(r);
  }
  switch (r) {
    case "stop-auto-run-from-user":
    case "stop-auto-run-from-org":
      o = getI18nString("dev_handoff.autorun_confirm_modal.title_stop_auto_run");
      break;
    case "confirm-replace":
      o = getI18nString("dev_handoff.autorun_confirm_modal.title_replace_auto_run");
      break;
    case "enable-auto-run":
      o = getI18nString("dev_handoff.autorun_confirm_modal.title_enable_auto_run", {
        pluginName: e.orgPluginName
      });
      break;
    default:
      throwTypeError(r);
  }
  let N = hS({
    open: n,
    onClose: () => d(Lo())
  });
  return jsx(bL, {
    manager: N,
    width: "md",
    htmlAttributes: {
      "data-testid": "autorun-confirm-modal"
    },
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: o
        })
      }), s]
    })
  });
}, "AutoRunConfirmModal");
export function $$O3(e) {
  let t = e?.plugin_id ?? "";
  let r = e?.name ?? "";
  let o = L();
  let c = D();
  let u = m0();
  let p = u && o.plugin?.plugin_id === t;
  let h = Xr(Lx);
  let m = P();
  let g = useDispatch();
  return {
    isPluginSetToAutoRun: p,
    callback: useCallback(() => {
      if (!u || (h(!0), !o.loaded || !c.loaded)) return;
      let e = m.autoRunPrefs?.autoRunPluginBehavior;
      let n = {
        pluginID: t,
        orgPluginName: c.autoRunPrefs?.autoRunPlugin.currentPluginVersion?.name || "",
        currentAutoRunPluginName: o.plugin?.name || ""
      };
      switch (e) {
        case void 0:
        case FInheritanceType.NONE:
          _$$s.updateUserAutoRunPluginId(t, FInheritanceType.OVERRIDE);
          break;
        case FInheritanceType.OVERRIDE:
          t !== o.plugin?.plugin_id ? _$$s.updateUserAutoRunPluginId(t, FInheritanceType.OVERRIDE) : c.autoRunPrefs ? g(to({
            type: w,
            data: {
              commonShowModalArgs: n,
              autoRunModalType: C.STOP_AUTO_RUN_FROM_USER
            }
          })) : _$$s.updateUserAutoRunPluginId(t, FInheritanceType.NONE);
          break;
        case FInheritanceType.INHERIT:
          c.autoRunPrefs ? t !== c.autoRunPrefs.autoRunPluginId ? g(to({
            type: w,
            data: {
              commonShowModalArgs: n,
              newPluginName: r,
              autoRunModalType: C.CONFIRM_REPLACE
            }
          })) : g(to({
            type: w,
            data: {
              commonShowModalArgs: n,
              autoRunModalType: C.STOP_AUTO_RUN_FROM_ORG
            }
          })) : _$$s.updateUserAutoRunPluginId(t, FInheritanceType.OVERRIDE);
          break;
        default:
          throwTypeError(e);
      }
    }, [u, h, o.loaded, o.plugin?.name, o.plugin?.plugin_id, c.loaded, c.autoRunPrefs, m.autoRunPrefs?.autoRunPluginBehavior, t, g, r])
  };
}
export function $$R0(e) {
  return e && UH(e);
}
function L() {
  let e = P();
  let t = D();
  let r = T5("usePluginToAutoRun").unwrapOr(null);
  let n = H3(r);
  let i = iZ()?.id;
  if (!(e.loaded && t.loaded)) return {
    loaded: !1,
    plugin: null
  };
  let a = null;
  switch (e.autoRunPrefs?.autoRunPluginBehavior) {
    case FInheritanceType.NONE:
      a = null;
      break;
    case FInheritanceType.OVERRIDE:
      a = e.autoRunPrefs.autoRunPlugin;
      break;
    case FInheritanceType.INHERIT:
    default:
      a = t.autoRunPrefs?.autoRunPlugin ?? null;
  }
  let s = a ? mf(a, n ?? "", i ?? "", null) ?? null : null;
  return {
    loaded: !0,
    plugin: $$R0(s) ? s : null
  };
}
function P() {
  let e = iZ();
  return k(Rs(Sc8, {
    targetOrgId: null,
    targetUserId: e?.id ?? ""
  }, {
    enabled: !!e?.id
  }));
}
function D(e) {
  let t = X$("useOrgAutoRunPlugin").unwrapOr(null);
  let r = {
    id: H3(t),
    isEnterprise: t?.tier === FPlanNameType.ENTERPRISE
  };
  let n = Rs(Sc8, {
    targetOrgId: r?.id ?? "",
    targetUserId: null
  }, {
    enabled: r.isEnterprise
  });
  return r.isEnterprise ? k(n, e) : {
    loaded: !0,
    autoRunPrefs: null
  };
}
function k(e, t) {
  if ("loaded" !== e.status) return {
    loaded: !1,
    autoRunPrefs: null
  };
  let r = e.data.pluginPreferences;
  let n = !!(t || r?.autoRunEnabled);
  return r && r.autoRunPluginId && r.autoRunPlugin && n ? {
    loaded: !0,
    autoRunPrefs: {
      autoRunPluginId: r.autoRunPluginId,
      autoRunPluginBehavior: r.autoRunBehavior,
      autoRunPlugin: r.autoRunPlugin
    }
  } : {
    loaded: !0,
    autoRunPrefs: null
  };
}
async function M(e, t, r) {
  r(!0);
  await R.instance.enqueue({
    runPluginArgs: {
      plugin: e,
      command: "",
      queryMode: !1,
      runMode: "default",
      triggeredFrom: "auto-run",
      openFileKey: t,
      isWidget: !1,
      ignoreForRunLastPlugin: !0
    },
    mode: "run-forever"
  });
}
export function $$F1() {
  let e = m0();
  let t = tS();
  let r = YN();
  let n = L();
  let [i, a] = useAtomValueAndSetter(Lx);
  if (!e || i || !n.loaded) return;
  let o = n.plugin;
  if (!o) {
    a(!0);
    return;
  }
  $$R0(o) && t && r(o) && M(o, t, a);
}
export function $$j2() {
  let e = D(!0);
  let t = T5("useOrgPluginToAutoRun").unwrapOr(null);
  let r = H3(t);
  if (!e.loaded) return {
    loaded: !1,
    plugin: null
  };
  let n = e.autoRunPrefs?.autoRunPlugin ?? null;
  let i = n ? mf(n, r ?? "", null, null) ?? null : null;
  return {
    loaded: !0,
    plugin: $$R0(i) ? i : null
  };
}
export const aY = $$R0;
export const X_ = $$F1;
export const JA = $$j2;
export const bE = $$O3;