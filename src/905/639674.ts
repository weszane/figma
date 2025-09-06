import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { useDispatch } from "../vendor/514228";
import { $n } from "../905/521428";
import { getFeatureFlags } from "../905/601108";
import { e2 } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
import { F } from "../905/302958";
import { _l } from "../905/105972";
export function $$p0(e) {
  let t = useDispatch();
  let i = useRef(null);
  let [p, m] = useState(!1);
  let h = async () => {
    if (!i.current) return;
    let t = await i.current.stop();
    e.onProfilingFinish(t);
    m(!1);
  };
  return jsxs(Fragment, {
    children: [jsxs(e2, {
      className: _l,
      children: [jsx($n, {
        variant: "primary",
        disabled: p,
        onClick: () => {
          if (!getFeatureFlags()["js-profiling"]) {
            t(F.enqueue({
              message: "Please enable the js-profiling feature flag for yourself in order to collect a performance profile."
            }));
            return;
          }
          p || ("function" == typeof window.Profiler ? (i.current = new window.Profiler({
            sampleInterval: 1,
            maxBufferSize: 1e4
          }), m(!0)) : t(F.enqueue({
            message: "Performance profiling is only available in Chromium browsers."
          })));
        },
        children: renderI18nText("bug_reporter.profiler.start")
      }), jsx($n, {
        variant: "secondary",
        disabled: !p,
        onClick: h,
        children: renderI18nText("bug_reporter.profiler.stop")
      })]
    }), p && renderI18nText("bug_reporter.profiler.collecting_profile")]
  });
}
export const J = $$p0;