import { bP } from "../vendor/780783";
import { bJ, e6 } from "../vendor/534521";
import { Yn } from "../vendor/316592";
import { q7 } from "../vendor/20148";
import { R8, Bb } from "../vendor/452342";
import { c } from "../vendor/902536";
import { nx } from "../vendor/929565";
import { Bd, oO } from "../vendor/186187";
import { b as _$$b } from "../vendor/712065";
import { ic } from "../vendor/300749";
import { s as _$$s } from "../vendor/878996";
import { kg } from "../vendor/103291";
import { T as _$$T } from "../vendor/324039";
import { q } from "../vendor/990937";
import { O as _$$O } from "../vendor/380458";
import { d0, Y9 } from "../vendor/345274";
import { Z as _$$Z } from "../vendor/237237";
let S = {
  LOG: "log",
  CONFIGURATION: "configuration",
  USAGE: "usage"
};
let E = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "https://d3uc069fcn7uxw.cloudfront.net", "https://d20xtzwzcl0ceb.cloudfront.net", "http://localhost", "<anonymous>"];
let A = [R8];
let C = _$$O();
let T = e => {
  C.add(() => T(e));
};
export function $$I4(e, r, n, i, s) {
  let o = new c();
  let {
    stop
  } = R(r, n, i, s, o);
  let {
    enabled,
    setContextProvider
  } = P(e, r, o);
  return {
    setContextProvider,
    stop,
    enabled
  };
}
function P(e, r, n) {
  let i = new Set();
  let s = new Map();
  let o = !A.includes(r.site) && ic(r.telemetrySampleRate);
  let h = {
    [S.LOG]: o,
    [S.CONFIGURATION]: o && ic(r.telemetryConfigurationSampleRate),
    [S.USAGE]: o && ic(r.telemetryUsageSampleRate)
  };
  let d = M();
  T = s => {
    let o = _$$s(s);
    if (h[s.type] && i.size < r.maxTelemetryEventsPerPage && !i.has(o)) {
      let r = O(e, s, d);
      n.notify(r);
      _$$b("telemetry", r);
      i.add(o);
    }
  };
  C.drain();
  Bd($$$2);
  return {
    setContextProvider: (e, r) => s.set(e, r),
    enabled: o
  };
  function O(e, r, n) {
    let i = {
      type: "telemetry",
      date: nx(),
      service: e,
      version: "6.13.0",
      source: "browser",
      _dd: {
        format_version: 2
      },
      telemetry: kg(r, {
        runtime_env: n,
        connectivity: q(),
        sdk_setup: "npm"
      }),
      experimental_features: Array.from(q7())
    };
    for (let [e, r] of s) i[e] = r();
    return i;
  }
}
function R(e, r, n, i, s) {
  let o = [];
  if (d0()) {
    let e = Y9();
    let r = s.subscribe(r => e.send("internal_telemetry", r));
    o.push(() => r.unsubscribe());
  } else {
    let a = _$$Z(e, {
      endpoint: e.rumEndpointBuilder,
      encoder: i(4)
    }, e.replica && {
      endpoint: e.replica.rumEndpointBuilder,
      encoder: i(5)
    }, r, n, new c());
    o.push(() => a.stop());
    let h = s.subscribe(r => a.add(r, D(e)));
    o.push(() => h.unsubscribe());
  }
  return {
    stop: () => o.forEach(e => e())
  };
}
function M() {
  return {
    is_local_file: "file:" === window.location.protocol,
    is_worker: "WorkerGlobalScope" in self
  };
}
function D(e) {
  return e.site === Bb;
}
export function $$N1(e, r) {
  oO(bP.debug, e, r);
  T({
    type: S.LOG,
    message: e,
    status: "debug",
    ...r
  });
}
export function $$$2(e, r) {
  T({
    type: S.LOG,
    status: "error",
    ...z(e),
    ...r
  });
}
export function $$L0(e) {
  T({
    type: S.CONFIGURATION,
    configuration: e
  });
}
export function $$j3(e) {
  T({
    type: S.USAGE,
    usage: e
  });
}
function z(e) {
  if (bJ(e)) {
    let r = _$$T(e);
    return {
      error: {
        kind: r.name,
        stack: Yn(Z(r))
      },
      message: r.message
    };
  }
  return {
    error: {
      stack: e6
    },
    message: `Uncaught ${_$$s(e)}`
  };
}
function Z(e) {
  e.stack = e.stack.filter(e => !e.url || E.some(r => e.url.startsWith(r)));
  return e;
}
export const Rr = $$L0;
export const A2 = $$N1;
export const VJ = $$$2;
export const Q6 = $$j3;
export const a5 = $$I4;