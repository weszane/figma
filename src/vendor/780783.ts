let $$i3 = {
  log: "log",
  debug: "debug",
  info: "info",
  warn: "warn",
  error: "error"
};
let $$s0 = console;
let o = {};
Object.keys($$i3).forEach(e => {
  o[e] = $$s0[e];
});
let a = "Datadog Browser SDK:";
let $$h1 = {
  debug: o.debug.bind($$s0, a),
  log: o.log.bind($$s0, a),
  info: o.info.bind($$s0, a),
  warn: o.warn.bind($$s0, a),
  error: o.error.bind($$s0, a)
};
let $$d4 = "https://docs.datadoghq.com";
let $$p2 = `${$$d4}/real_user_monitoring/browser/troubleshooting`;
let $$g5 = "More details:";
export const JZ = $$s0;
export const Vy = $$h1;
export const Xs = $$p2;
export const bP = $$i3;
export const fH = $$d4;
export const xG = $$g5;