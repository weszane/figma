import { T } from "../vendor/381201";
import { vF } from "../vendor/150583";
let r = [];
export function getIntegrationsToSetup(e) {
  let n;
  let i = e.defaultIntegrations || [];
  let t = e.integrations;
  if (i.forEach(e => {
    e.isDefaultInstance = !0;
  }), Array.isArray(t)) n = [...i, ...t];else if ("function" == typeof t) {
    let e = t(i);
    n = Array.isArray(e) ? e : [e];
  } else n = i;
  let f = function (e) {
    let n = {};
    e.forEach(e => {
      let {
        name
      } = e;
      let t = n[name];
      t && !t.isDefaultInstance && e.isDefaultInstance || (n[name] = e);
    });
    return Object.values(n);
  }(n);
  let r = f.findIndex(e => "Debug" === e.name);
  if (r > -1) {
    let [e] = f.splice(r, 1);
    f.push(e);
  }
  return f;
}
export function setupIntegrations(e, n) {
  let i = {};
  n.forEach(n => {
    n && setupIntegration(e, n, i);
  });
  return i;
}
export function afterSetupIntegrations(e, n) {
  for (let i of n) i && i.afterAllSetup && i.afterAllSetup(e);
}
export function setupIntegration(e, n, i) {
  if (i[n.name]) {
    T && vF.log(`Integration skipped because it was already installed: ${n.name}`);
    return;
  }
  if (i[n.name] = n, -1 === r.indexOf(n.name) && "function" == typeof n.setupOnce && (n.setupOnce(), r.push(n.name)), n.setup && "function" == typeof n.setup && n.setup(e), "function" == typeof n.preprocessEvent) {
    let i = n.preprocessEvent.bind(n);
    e.on("preprocessEvent", (n, t) => i(n, t, e));
  }
  if ("function" == typeof n.processEvent) {
    let i = n.processEvent.bind(n);
    let t = Object.assign((n, t) => i(n, t, e), {
      id: n.name
    });
    e.addEventProcessor(t);
  }
  T && vF.log(`Integration installed: ${n.name}`);
}
export function defineIntegration(e) {
  return e;
}
export const P$ = setupIntegrations;
export const _C = defineIntegration;
export const lc = afterSetupIntegrations;
export const mH = getIntegrationsToSetup;
export const qm = setupIntegration;
