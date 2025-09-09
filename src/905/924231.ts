import { jsx } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { h as _$$h } from "../905/207101";
import { B } from "../905/714743";
import { Rw } from "../figma_app/91703";
import { E3 } from "../figma_app/976749";
import { cW, $1 } from "../figma_app/844435";
import { selectCurrentFile } from "../figma_app/516028";
import { getPluginVersion, canRunPlugin } from "../figma_app/300692";
import { C3 } from "../figma_app/790714";
import { createDeferredPromise } from "../905/263346";
import { R as _$$R } from "../figma_app/612938";
import { y as _$$y } from "../905/916933";
import { wY } from "../905/753206";
import { V } from "../905/480825";
import { ch } from "../905/443517";
import { s as _$$s } from "../905/73603";
import { zF, nW } from "../figma_app/627977";
import { A as _$$A } from "../1617/610488";
export function $$E0({
  pluginId: e,
  pluginLocalFileId: t,
  command: i,
  parameterOnly: o,
  parameters: A,
  displayName: I,
  triggeredFrom: E,
  initialParameterValues: S,
  recentlyUsedCommandName: w
}) {
  let C = cW();
  let T = useSelector(e => e.installedPluginVersions.plugins);
  let k = $1();
  let R = E3();
  let N = selectCurrentFile();
  let P = useDispatch();
  let O = useCallback(async () => {
    let n = null;
    if (e ? T[e] ? n = T[e] : C[e] && (n = getPluginVersion(C[e])) : t && (n = k[t]), !n) throw Error("Plugin not runnable");
    let {
      canRun
    } = canRunPlugin({
      plugin: n,
      editorType: R
    });
    if (!canRun) throw Error("Plugin not runnable");
    let a = {
      plugin: n,
      command: i || "",
      queryMode: !0,
      runMode: "default",
      triggeredFrom: "parameter-entry",
      openFileKey: N?.key || "",
      deferRunEvent: !0,
      isWidget: !1
    };
    let s = createDeferredPromise();
    _$$R.instance.enqueue({
      mode: "run-forever",
      runPluginArgs: a
    });
    let {
      triggerParameterInputEvent,
      triggerRunEvent
    } = await s;
    return {
      triggerParameterInputEvent,
      triggerRunEvent: async i => {
        let n = {
          ...a
        };
        let {
          isCancelled
        } = await _$$y(n);
        isCancelled || (n && (n.queryMode = !1, n.deferRunEvent = !1, n.parameterValues = i.parameters, w && (P(Rw({
          currentDisplayName: w,
          newCommand: {
            displayName: w,
            runPluginArgs: n
          }
        })), _$$s({
          displayText: w,
          runPluginArgs: n,
          localFileIdOrPluginId: t ?? e
        })), C3(n)), triggerRunEvent(i));
      }
    };
  }, [i, P, R, k, N?.key, e, t, C, w, T]);
  let [D, L] = useState(null);
  _$$h(() => {
    O().then(L);
  });
  return jsx(ch, {
    actionIcon: x(T, C, e),
    actionLabel: x(T, C, e, zF),
    command: i,
    displayName: I,
    handler: D,
    initialParameterValues: S,
    parameterOnly: o,
    parameters: A,
    pluginId: e,
    pluginLocalFileId: t,
    terminate: wY,
    triggeredFrom: E
  });
}
function x(e, t, i, r = nW) {
  if (!i) return jsx(B, {
    className: r,
    svg: _$$A,
    ariaLabel: "plugin icon"
  });
  {
    let a = e[i];
    a || (a = t[i] && getPluginVersion(t[i]));
    return jsx(V, {
      className: r,
      plugin: a,
      alt: "plugin icon"
    });
  }
}
export const r = $$E0;