import { bN, mE, hP } from "../vendor/314111";
import { T } from "../vendor/381201";
import { vF } from "../vendor/150583";
import { FA } from "../vendor/931574";
import { _ } from "../vendor/577508";
function u(e) {
  return new Promise((n, i) => {
    e.oncomplete = e.onsuccess = () => n(e.result);
    e.onabort = e.onerror = () => i(e.error);
  });
}
function l(e) {
  return u(e.getAllKeys());
}
function d(e) {
  let n;
  function i() {
    void 0 == n && (n = function(e, n) {
      let i = indexedDB.open(e);
      i.onupgradeneeded = () => i.result.createObjectStore(n);
      let t = u(i);
      return e => t.then(i => e(i.transaction(n, "readwrite").objectStore(n)));
    }(e.dbName || "sentry-offline", e.storeName || "queue"));
    return n;
  }
  return {
    push: async n => {
      try {
        var f;
        var r;
        let a = await bN(n);
        await (f = i(), r = e.maxQueueSize || 30, f(e => l(e).then(n => {
          if (!(n.length >= r)) {
            e.put(a, Math.max(...n, 0) + 1);
            return u(e.transaction);
          }
        })));
      } catch (e) { }
    },
    unshift: async n => {
      try {
        var f;
        var r;
        let a = await bN(n);
        await (f = i(), r = e.maxQueueSize || 30, f(e => l(e).then(n => {
          if (!(n.length >= r)) {
            e.put(a, Math.min(...n, 0) - 1);
            return u(e.transaction);
          }
        })));
      } catch (e) { }
    },
    shift: async () => {
      try {
        let e = await i()(e => l(e).then(n => {
          let i = n[0];
          if (null != i) return u(e.get(i)).then(n => (e.$$delete(i), u(e.transaction).then(() => n)));
        }));
        if (e) return mE(e);
      } catch (e) { }
    }
  };
}
export function $$s0(e = _) {
  var n;
  n = function(e) {
    function n(...e) {
      T && vF.info("[Offline]:", ...e);
    }
    return i => {
      let f;
      let r = e(i);
      if (!i.createStore) throw Error("No `createStore` function was provided");
      let o = i.createStore(i);
      let u = 5e3;
      function l(e) {
        f && clearTimeout(f);
        "number" != typeof (f = setTimeout(async () => {
          f = void 0;
          let e = await o.shift();
          e && (n("Attempting to send previously queued event"), e[0].sent_at = new Date().toISOString(), s(e, !0).catch(e => {
            n("Failed to retry sending", e);
          }));
        }, e)) && f.unref && f.unref();
      }
      function d() {
        f || (l(u), u = Math.min(2 * u, 36e5));
      }
      async function s(e, f = !1) {
        if (!f && hP(e, ["replay_event", "replay_recording"])) {
          await o.push(e);
          l(100);
          return {};
        }
        try {
          let n = await r.send(e);
          let i = 100;
          if (n) {
            if (n.headers && n.headers["retry-after"]) i = FA(n.headers["retry-after"]); else if (n.headers && n.headers["x-sentry-rate-limits"]) i = 6e4; else if ((n.statusCode || 0) >= 400) return n;
          }
          l(i);
          u = 5e3;
          return n;
        } catch (r) {
          var c;
          if (await (c = u, !hP(e, ["client_report"]) && (!i.shouldStore || i.shouldStore(e, r, c)))) {
            f ? await o.unshift(e) : await o.push(e);
            d();
            n("Error sending. Event queued.", r);
            return {};
          }
          throw r;
        }
      }
      i.flushAtStartup && d();
      return {
        send: s,
        flush: e => r.flush(e)
      };
    };
  }(e);
  return e => n({
    ...e,
    createStore: d
  });
}
export const z9 = $$s0; 
