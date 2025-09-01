import { a3 } from "../vendor/519647";
import { vF } from "../vendor/150583";
import { j } from "../vendor/520392";
import { xg, T2, XW } from "../vendor/873843";
import { T } from "../vendor/381201";
import { yH, zk, h4, bN } from "../vendor/314111";
import { U } from "../vendor/16909";
import { Jz, wq } from "../vendor/931574";
let r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
let o = {};
function h(e, n) {
  if ("event" === n || "transaction" === n) return Array.isArray(e) ? e[1] : void 0;
}
export function $$p0(e, n = function (e) {
  let n = o[e];
  if (n) return n;
  let i = j[e];
  if (a3(i)) return o[e] = i.bind(j);
  let u = j.document;
  if (u && "function" == typeof u.createElement) try {
    let n = u.createElement("iframe");
    n.hidden = !0;
    u.head.appendChild(n);
    let t = n.contentWindow;
    t && t[e] && (i = t[e]);
    u.head.removeChild(n);
  } catch (n) {
    r && vF.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, n);
  }
  return i ? o[e] = i.bind(j) : i;
}("fetch")) {
  let i = 0;
  let g = 0;
  return function (e, n, i = function (e) {
    let n = [];
    function i(e) {
      return n.splice(n.indexOf(e), 1)[0] || Promise.resolve(void 0);
    }
    return {
      $: n,
      add: function (t) {
        if (!(void 0 === e || n.length < e)) return xg(new U("Not adding Promise because buffer limit was reached."));
        let f = t();
        -1 === n.indexOf(f) && n.push(f);
        f.then(() => i(f)).then(null, () => i(f).then(null, () => {}));
        return f;
      },
      drain: function (e) {
        return new T2((i, t) => {
          let f = n.length;
          if (!f) return i(!0);
          let r = setTimeout(() => {
            e && e > 0 && i(!1);
          }, e);
          n.forEach(e => {
            XW(e).then(() => {
              --f || (clearTimeout(r), i(!0));
            }, t);
          });
        });
      }
    };
  }(e.bufferSize || 64)) {
    let t = {};
    return {
      send: function (r) {
        let a = [];
        if (yH(r, (n, i) => {
          let f = zk(i);
          if (Jz(t, f)) {
            let t = h(n, i);
            e.recordDroppedEvent("ratelimit_backoff", f, t);
          } else a.push(n);
        }), 0 === a.length) return XW({});
        let o = h4(r[0], a);
        let p = n => {
          yH(o, (i, t) => {
            let f = h(i, t);
            e.recordDroppedEvent(n, zk(t), f);
          });
        };
        return i.add(() => n({
          body: bN(o)
        }).then(e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && T && vF.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), t = wq(t, e), e), e => {
          p("network_error");
          return e;
        })).then(e => e, e => {
          if (e instanceof U) {
            T && vF.error("Skipped sending event because buffer is full.");
            p("queue_overflow");
            return XW({});
          }
          throw e;
        });
      },
      flush: e => i.drain(e)
    };
  }(e, function (t) {
    let f = t.body.length;
    i += f;
    g++;
    let r = {
      body: t.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      keepalive: i <= 6e4 && g < 15,
      ...e.fetchOptions
    };
    if (!n) {
      o.fetch = void 0;
      return xg("No fetch implementation available");
    }
    try {
      return n(e.url, r).then(e => (i -= f, g--, {
        statusCode: e.status,
        headers: {
          "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": e.headers.get("Retry-After")
        }
      }));
    } catch (e) {
      o.fetch = void 0;
      i -= f;
      g--;
      return xg(e);
    }
  });
}
export const _ = $$p0;