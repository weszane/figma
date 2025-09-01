import { T } from "../vendor/570893";
import { pq, vF } from "../vendor/150583";
let r = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
export function $$a1(e, n = !1) {
  let {
    host,
    path,
    pass,
    port,
    projectId,
    protocol,
    publicKey
  } = e;
  return `${protocol}://${publicKey}${n && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
function o(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId
  };
}
export function $$u0(e) {
  let n = "string" == typeof e ? function (e) {
    let n = r.exec(e);
    if (!n) {
      pq(() => {
        console.error(`Invalid Sentry Dsn: ${e}`);
      });
      return;
    }
    let [i, t, a = "", u = "", l = "", d = ""] = n.slice(1);
    let s = "";
    let c = d;
    let h = c.split("/");
    if (h.length > 1 && (s = h.slice(0, -1).join("/"), c = h.pop()), c) {
      let e = c.match(/^\d+/);
      e && (c = e[0]);
    }
    return o({
      host: u,
      pass: a,
      path: s,
      projectId: c,
      port: l,
      protocol: i,
      publicKey: t
    });
  }(e) : o(e);
  if (n && function (e) {
    if (!T) return !0;
    let {
      port,
      projectId,
      protocol
    } = e;
    return !["protocol", "publicKey", "host", "projectId"].find(n => !e[n] && (vF.error(`Invalid Sentry Dsn: ${n} missing`), !0)) && (projectId.match(/^\d+$/) ? "http" === protocol || "https" === protocol ? !(port && isNaN(parseInt(port, 10))) || (vF.error(`Invalid Sentry Dsn: Invalid port ${port}`), !1) : (vF.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), !1) : (vF.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), !1));
  }(n)) return n;
}
export const AD = $$u0;
export const SB = $$a1;