import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { c2 } from "../905/382883";
import { lQ } from "../905/934246";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { trackEventAnalytics } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { h as _$$h } from "../905/207101";
import { zL } from "../905/294543";
import { S as _$$S } from "../905/491708";
import { px } from "../905/201014";
import { JG } from "../figma_app/852050";
import { le } from "../figma_app/415217";
import { R as _$$R } from "../905/949750";
import { d as _$$d } from "../905/485888";
import { Z0 } from "../905/195478";
import { getCodegenLanguages } from "../905/661977";
function I(e, t) {
  let i = "first-party" === t.type ? t.id : "THIRD_PARTY_PLUGIN";
  trackEventAnalytics("dev_handoff.codegen", {
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
  let D = useSelector(e => e.versionHistory.activeId);
  let L = getSingletonSceneGraph();
  let F = zL();
  let M = px(c);
  let j = JG({
    enabled: "first-party" === t.type
  });
  let U = useSelector(_$$S, c2);
  useEffect(() => {
    M.rebuildNodeCache();
  }, [M, D, E, j]);
  useEffect(() => {
    let n = !1;
    (async () => {
      if (!e || e === defaultSessionLocalIDString) return;
      let r = globalPerfTimer.start("dev_handoff.codegen");
      if ("local-plugin" === t.type || "published-plugin" === t.type) {
        let a;
        if (!S) return;
        let s = [];
        let o = t;
        let l = getCodegenLanguages(S).map(({
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
      } else throwTypeError(t.type);
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
