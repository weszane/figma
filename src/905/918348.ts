import { useState, useEffect } from "react";
import { d4 } from "../vendor/514228";
import { xb } from "../figma_app/465776";
import { c2 } from "../905/382883";
import { lQ } from "../905/934246";
import { AD } from "../905/871411";
import { UN } from "../905/700578";
import { sx } from "../905/449184";
import { sn } from "../905/542194";
import { h as _$$h } from "../905/207101";
import { zL } from "../905/294543";
import { S as _$$S } from "../905/491708";
import { px } from "../905/201014";
import { JG } from "../figma_app/852050";
import { le } from "../figma_app/415217";
import { R as _$$R } from "../905/949750";
import { d as _$$d } from "../905/485888";
import { Z0 } from "../905/195478";
import { m as _$$m } from "../905/661977";
function I(e, t) {
  let i = "first-party" === t.type ? t.id : "THIRD_PARTY_PLUGIN";
  sx("dev_handoff.codegen", {
    elapsedMs: e,
    languageType: t.type,
    suggestVariablesEnabled: !0,
    verifyLibraryVariablesEnabled: !0,
    codeLanguage: i
  }, {
    forwardToDatadog: !0
  });
}
export function $$E0({
  selectedNodeID: e,
  extensionLanguage: t,
  onFinish: i = lQ,
  sceneGraph: c,
  selectedVersion: E,
  preferences: x,
  plugin: S
}) {
  let [{
    code: w,
    error: C
  }, T] = useState({
    code: [],
    error: void 0
  });
  let [k, R] = useState(!1);
  let [N, P] = useState(!1);
  let O = _$$R();
  let D = d4(e => e.versionHistory.activeId);
  let L = UN();
  let F = zL();
  let M = px(c);
  let j = JG({
    enabled: "first-party" === t.type
  });
  let U = d4(_$$S, c2);
  useEffect(() => {
    M.rebuildNodeCache();
  }, [M, D, E, j]);
  useEffect(() => {
    let n = !1;
    (async () => {
      if (!e || e === AD) return;
      let r = sn.start("dev_handoff.codegen");
      if ("local-plugin" === t.type || "published-plugin" === t.type) {
        let a;
        if (!S) return;
        let s = [];
        let o = t;
        let l = _$$m(S).map(({
          value: e
        }) => e);
        l.includes(o.pluginLanguage ?? "") || (o = F({
          ...o,
          pluginLanguage: l[0] ?? ""
        }));
        try {
          R(!0);
          P(!1);
          s = await _$$d.instance.generateCode({
            plugin: S,
            nodeId: e,
            handoffLanguage: o,
            canRunCodegenArgs: U
          });
        } catch (e) {
          a = e instanceof Error ? e : Error("unknown");
        } finally {
          n || R(!1);
          P(!0);
        }
        if (n) return;
        let d = {
          code: Z0(s),
          error: a
        };
        T(d);
        i(d.code);
        I(r.stop(), o);
        le(s.map(e => ({
          code: e.code,
          language: e.language
        })));
        return;
      }
      if ("first-party" === t.type) {
        await _$$d.instance.maybeTerminatePlugin(t);
        let {
          code,
          error
        } = await M.runExtension({
          selectedNodeId: e,
          codegenPluginID: t.id,
          preferences: x,
          canRunCodegenArgs: U,
          generateForCodePanel: !0
        });
        if (n) return;
        T({
          code,
          error
        });
        i(code);
        I(r.stop(), t);
      } else xb(t.type);
    })();
    return () => {
      n = !0;
    };
  }, [i, e, O, t, x, S, D, F, c, L, E, M, U, j]);
  _$$h(() => () => {
    _$$d.instance.maybeTerminatePlugin(t);
  });
  return {
    code: w,
    error: C,
    isLoading: k && "first-party" !== t.type,
    hasRun: N
  };
}
export const K = $$E0;