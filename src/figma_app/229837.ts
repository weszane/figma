import { getFeatureFlags } from "src/905/601108";
import { trackEventAnalytics } from "src/905/449184";
import { getInitialOptions } from "src/figma_app/169182";
import { C as _$$C } from "src/905/797765";
import { isInteractionPathCheck } from "src/figma_app/897289";
var n;
let d = !1;
let c = [];
let u = [];
let p = 0;
export function $$_0(e) {
  let t = e.split(":");
  return {
    channel: t[0],
    timestamp: parseInt(t[1]),
    generation: parseInt(t[2]),
    signature: t[3]
  };
}
let h = -1;
export function $$m1() {
  let e = null;
  let t = null;
  let r = null;
  let n = null;
  let c = null;
  let p = {};
  let m = !0;
  let g = Date.now();
  let f = 0;
  let E = null;
  let y = !0;
  let b = null;
  let T = null;
  let I = null;
  getFeatureFlags().realtime_disconnect_in_background && (T = () => {
    "hidden" === document.visibilityState ? I || (I = setTimeout(() => {
      S();
      I = null;
    }, 12e4)) : (I && (clearTimeout(I), I = null), null == n && (console.log("[Realtime] Attempting reconnect due to page visibility change."), v()));
  }, document.addEventListener("visibilitychange", T));
  let S = () => {
    null != c && clearInterval(c);
    null != n && n.close();
    c = null;
    n = null;
    m = !0;
  };
  let v = () => {
    E && (clearTimeout(E), E = null);
    b && (window.removeEventListener("online", b), b = null);
    w();
  };
  let A = () => {
    if (S(), !y || null != E) return;
    let e = 4 + (Math.min(128, 4 * Math.pow(2, f)) - 4) * Math.random();
    console.log(`[Realtime] Disconnected. Will attempt reconnect in ${e.toFixed(0)} seconds.`);
    E = setTimeout(() => {
      console.log(`[Realtime] Attempting reconnect now after waiting ${e.toFixed(0)} seconds.`);
      v();
    }, 1e3 * e);
    f++;
    b = () => {
      console.log("[Realtime] Attempting reconnect due to connectivity change.");
      navigator.onLine && v();
    };
    window.addEventListener("online", b);
  };
  let x = e => {
    n && n.readyState === n.OPEN && n.send(`tok:${e.channel}:${e.timestamp}:${e.generation}:${e.signature}`);
  };
  let N = e => {
    let t = getInitialOptions().user_data;
    if (!t?.id) {
      console.warn("Can't post to me channel without user id available");
      trackEventAnalytics("Me Channel UserId Missing");
      return;
    }
    let r = `/me-${t?.id}`;
    if (!(r in p)) {
      if (console.warn("We're not subscribed to the me channel"), trackEventAnalytics("Me Channel Subscription Missing"), t?.realtime_token) {
        trackEventAnalytics("Me Channel Resubscribe");
        let e = $$_0(t.realtime_token);
        p[r] = e;
        x(e);
      } else {
        console.warn("We're unable to subscribe to the me channel; server will reject this message");
        trackEventAnalytics("Me Channel No Token");
        return;
      }
    }
    if (!n || n.readyState !== n.OPEN) {
      isInteractionPathCheck() || console.warn("Sending to me without open websocket");
      trackEventAnalytics("Me Channel Websocket Missing");
      return;
    }
    let i = JSON.stringify([{
      channel: r,
      data: e
    }]);
    n.send(`pme:${i}`);
  };
  let C = e => {
    delete p[e];
    n && n.readyState === n.OPEN && n.send(`uns:${e}`);
  };
  let w = () => {
    if (getFeatureFlags().realtime_disable_websocket_connection || getFeatureFlags().realtime_disconnect_in_background && "hidden" === document.visibilityState && d) return;
    S();
    let t = "";
    t = ("https:" === window.location.protocol ? `wss://${window.location.host}` : `ws://${window.location.host}`) + "/api/realtime_v2";
    let r = window.INITIAL_OPTIONS && window.INITIAL_OPTIONS.release_git_tag || "";
    t += `?release_git_tag=${r}&user_id=${window.INITIAL_OPTIONS?.user_data?.id || ""}`;
    (n = new WebSocket(t)).onopen = e => {
      for (let e in f = 0, console.log(`[Realtime] Connected to ${t}.`), null != c && clearInterval(c), c = setInterval(() => {
        n?.send("ping");
      }, 3e4 + 5e3 * Math.random() - 2500), d && Date.now() - g > 6e4 && u.forEach(e => {
        setTimeout(e, 0);
      }), d = !0, p) x(p[e]);
    };
    n.onmessage = t => {
      if ("pong" === t.data) {
        g = Date.now();
        return;
      }
      let r = t.data.substr(0, 4);
      if ("tok:" === r) {
        let e = $$_0(t.data.substr(4));
        p[e.channel] = e;
        return;
      }
      let n = {};
      if ("ouc:" === r) {
        let e = t.data.substr(4).split(":");
        3 !== e.length && console.warn("Got ouc: command with wrong number of params");
        for (let t = 0; t < e.length; t++) "null" === e[t] && (e[t] = null);
        n = {
          type: "verify_user_state",
          org_user_count: e[0] && parseInt(e[0]),
          org_user_updated: e[1] && new Date(parseInt(e[1])).toISOString(),
          target_user_id: e[2]
        };
      } else if ("sub:" === r || "uns:" === r) {
        let e = t.data.split(":");
        let r = e[e.length - 1];
        if ("ok" === r) return;
        if (delete p[e[1]], "expired" === r) {
          if (!m) return;
          m = !1;
          n = {
            type: "token_expired"
          };
        } else {
          console.warn(t.data);
          return;
        }
      } else {
        try {
          n = JSON.parse(t.data);
        } catch (e) {
          console.warn(`unexpected non-JSON realtime message: ${t.data}`);
          return;
        }
        null != n.err && (console.warn("encountered error message from realtime", n.err), A());
      }
      e && e(n);
    };
    n.onclose = e => {
      n = null;
      null != c && (clearInterval(c), c = null);
      A();
    };
  };
  let O = {};
  let R = new Set();
  let L = new Map();
  let P = {
    connect: w,
    disconnect: () => {
      y = !1;
      S();
      p = {};
      T && document.removeEventListener("visibilitychange", T);
    },
    setCallback: t => {
      e = e => {
        let r = e.method;
        let n = Object.keys(e).filter(e => _$$C.has(e)).map(t => ({
          type: t,
          value: e[t]
        }));
        let i = !1;
        t(e);
        n.forEach(t => {
          let n = O[t.type];
          n && Object.keys(n).map(e => n[e]).filter(e => e.methods[r]).forEach(r => {
            r.callback(t.value, e.method);
          });
        });
      };
    },
    setOnSubscribeCallback: e => {
      t = e;
    },
    setOnUnsubscribeCallback: e => {
      r = e;
    },
    subscribe: (e, r) => {
      let n = p[e.channel];
      p[e.channel] = e;
      n || x(e);
      !1 !== r && R.add(e.channel);
      t && t(e.channel);
    },
    unsubscribe: (e, t) => {
      if (!1 !== t && R.$$delete(e), !1 === t && R.has(e)) return;
      let n = L.get(e);
      n && n.size > 0 || (delete p[e], C(e), r && r(e));
    },
    postToMeChannel: e => {
      N(e);
    }
  };
  let D = () => {
    let e = getInitialOptions().user_data;
    return e?.realtime_token ? $$_0(e.realtime_token) : null;
  };
  let k = ["post", "put", "delete"];
  let M = e => "string" == typeof e ? {
    type: e,
    token: D(),
    methods: k
  } : e;
  let F = {
    subscriptions: p,
    subscribe: function (e, t) {
      let r = M(e);
      let n = r.token || D();
      if (!n) return () => {};
      h += 1;
      let i = `${h}:${performance.now()}`;
      let a = O[r.type] || {};
      let s = r.methods || k;
      let o = {};
      s.forEach(e => {
        o[e] = !0;
      });
      a[i] = {
        methods: o,
        callback: t
      };
      O[r.type] = a;
      (L.get(n.channel) || new Set()).add(i);
      P.subscribe(n, !1);
      return () => {
        let {
          channel
        } = n;
        let t = L.get(channel);
        t?.delete(i);
        let a = O[r.type];
        if (a && (delete a[i], 0 === Object.keys(a).length)) {
          let e = r.type;
          delete O[e];
        }
        P.unsubscribe(channel, !1);
      };
    }
  };
  return {
    ...P,
    v2: F
  };
}
n = function () {
  p > 0 || c.forEach(e => {
    p += 1;
    setTimeout(() => {
      try {
        e();
      } finally {
        p -= 1;
      }
    }, 6e4 + 24e4 * Math.random());
  });
};
u.push(n);
export const EM = $$_0;
export const Xs = $$m1;
