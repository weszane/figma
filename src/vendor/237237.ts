import { Vy, xG, Xs } from "../vendor/780783";
import { KQ } from "../vendor/82111";
import { Kp } from "../vendor/64215";
import { s as _$$s } from "../vendor/878996";
import { WW } from "../vendor/853364";
import { sA } from "../vendor/127";
import { c } from "../vendor/902536";
import { wg, DJ } from "../vendor/73976";
function d({
  encoder: e,
  request: r,
  flushController: n,
  messageBytesLimit: d
}) {
  let g = {};
  let m = n.flushObservable.subscribe(e => x(e));
  function v(r, i, s) {
    n.notifyBeforeAddMessage(i);
    void 0 !== s ? (g[s] = r, n.notifyAfterAddMessage()) : e.write(e.isEmpty ? r : `
${r}`, e => {
      n.notifyAfterAddMessage(e - i);
    });
  }
  function y(e) {
    return void 0 !== e && void 0 !== g[e];
  }
  function b(r) {
    let i = g[r];
    delete g[r];
    let s = e.estimateEncodedBytesCount(i);
    n.notifyAfterRemoveMessage(s);
  }
  function O(r, n) {
    let s = _$$s(r);
    let o = e.estimateEncodedBytesCount(s);
    if (o >= d) {
      Vy.warn(`Discarded a message whose size was bigger than the maximum allowed size ${d}KB. ${xG} ${Xs}/#technical-limitations`);
      return;
    }
    y(n) && b(n);
    v(s, o, n);
  }
  function x(n) {
    let i = KQ(g).join("\n");
    g = {};
    let a = Kp(n.reason);
    let d = a ? r.sendOnExit : r.send;
    if (a && e.isAsync) {
      let r = e.finishSync();
      r.outputBytesCount && d(p(r));
      let n = [r.pendingData, i].filter(Boolean).join("\n");
      n && d({
        data: n,
        bytesCount: WW(n)
      });
    } else {
      i && e.write(e.isEmpty ? i : `
${i}`);
      e.finish(e => {
        d(p(e));
      });
    }
  }
  return {
    flushController: n,
    add: O,
    upsert: O,
    stop: m.unsubscribe
  };
}
function p(e) {
  let r;
  return {
    data: r = "string" == typeof e.output ? e.output : new Blob([e.output], {
      type: "text/plain"
    }),
    bytesCount: e.outputBytesCount,
    encoding: e.encoding
  };
}
function y({
  messagesLimit: e,
  bytesLimit: r,
  durationLimit: n,
  pageMayExitObservable: i,
  sessionExpireObservable: s
}) {
  let o;
  let a = i.subscribe(e => y(e.reason));
  let h = s.subscribe(() => y("session_expire"));
  let d = new c(() => () => {
    a.unsubscribe();
    h.unsubscribe();
  });
  let p = 0;
  let g = 0;
  function y(e) {
    if (0 === g) return;
    let r = g;
    let n = p;
    g = 0;
    p = 0;
    O();
    d.notify({
      reason: e,
      messagesCount: r,
      bytesCount: n
    });
  }
  function b() {
    void 0 === o && (o = wg(() => {
      y("duration_limit");
    }, n));
  }
  function O() {
    DJ(o);
    o = void 0;
  }
  return {
    flushObservable: d,
    get messagesCount() {
      return g;
    },
    notifyBeforeAddMessage(e) {
      p + e >= r && y("bytes_limit");
      g += 1;
      p += e;
      b();
    },
    notifyAfterAddMessage(n = 0) {
      p += n;
      g >= e ? y("messages_limit") : p >= r && y("bytes_limit");
    },
    notifyAfterRemoveMessage(e) {
      p -= e;
      0 == (g -= 1) && O();
    }
  };
}
export function $$b0(e, r, n, i, s, o, a = d) {
  let h = m(e, r);
  let p = n && m(e, n);
  function m(e, {
    endpoint: r,
    encoder: n
  }) {
    return a({
      encoder: n,
      request: sA(r, e.batchBytesLimit, i),
      flushController: y({
        messagesLimit: e.batchMessagesLimit,
        bytesLimit: e.batchBytesLimit,
        durationLimit: e.flushTimeout,
        pageMayExitObservable: s,
        sessionExpireObservable: o
      }),
      messageBytesLimit: e.messageBytesLimit
    });
  }
  return {
    flushObservable: h.flushController.flushObservable,
    add(e, r = !0) {
      h.add(e);
      p && r && p.add(n.transformMessage ? n.transformMessage(e) : e);
    },
    upsert: (e, r) => {
      h.upsert(e, r);
      p && p.upsert(n.transformMessage ? n.transformMessage(e) : e, r);
    },
    stop: () => {
      h.stop();
      p && p.stop();
    }
  };
}
export const Z = $$b0;