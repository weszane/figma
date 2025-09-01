import { Dx, dm } from "../vendor/186187";
import { wg } from "../vendor/73976";
import { iW, OY, M8 } from "../vendor/929565";
import { _m, iH } from "../vendor/853364";
import { G } from "../vendor/499591";
import { g as _$$g } from "../vendor/776770";
let p = 80 * _m;
let g = 32;
let m = 3 * iH;
let v = iW;
let y = OY;
function b(e, r, n, i, s) {
  0 === r.transportStatus && 0 === r.queuedPayloads.size() && r.bandwidthMonitor.canHandle(e) ? x(e, r, n, {
    onSuccess: () => w(0, r, n, i, s),
    onFailure: () => {
      r.queuedPayloads.enqueue(e);
      O(r, n, i, s);
    }
  }) : r.queuedPayloads.enqueue(e);
}
function O(e, r, n, i) {
  2 === e.transportStatus && wg(() => {
    x(e.queuedPayloads.first(), e, r, {
      onSuccess: () => {
        e.queuedPayloads.dequeue();
        e.currentBackoffTime = y;
        w(1, e, r, n, i);
      },
      onFailure: () => {
        e.currentBackoffTime = Math.min(v, 2 * e.currentBackoffTime);
        O(e, r, n, i);
      }
    });
  }, e.currentBackoffTime);
}
function x(e, r, n, {
  onSuccess: i,
  onFailure: s
}) {
  r.bandwidthMonitor.add(e);
  n(e, n => {
    r.bandwidthMonitor.remove(e);
    k(n) ? (r.transportStatus = r.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, e.retry = {
      count: e.retry ? e.retry.count + 1 : 1,
      lastFailureStatus: n.status
    }, s()) : (r.transportStatus = 0, i());
  });
}
function w(e, r, n, i, s) {
  0 === e && r.queuedPayloads.isFull() && !r.queueFullReported && (s({
    message: `Reached max ${i} events size queued for upload: ${m / iH}MiB`,
    source: _$$g.AGENT,
    startClocks: M8()
  }), r.queueFullReported = !0);
  let h = r.queuedPayloads;
  for (r.queuedPayloads = S(); h.size() > 0;) b(h.dequeue(), r, n, i, s);
}
function k(e) {
  return "opaque" !== e.type && (0 === e.status && !navigator.onLine || 408 === e.status || 429 === e.status || G(e.status));
}
function _() {
  return {
    transportStatus: 0,
    currentBackoffTime: y,
    bandwidthMonitor: E(),
    queuedPayloads: S(),
    queueFullReported: !1
  };
}
function S() {
  let e = [];
  return {
    bytesCount: 0,
    enqueue(r) {
      this.isFull() || (e.push(r), this.bytesCount += r.bytesCount);
    },
    first: () => e[0],
    dequeue() {
      let r = e.shift();
      r && (this.bytesCount -= r.bytesCount);
      return r;
    },
    size: () => e.length,
    isFull() {
      return this.bytesCount >= m;
    }
  };
}
function E() {
  return {
    ongoingRequestCount: 0,
    ongoingByteCount: 0,
    canHandle(e) {
      return 0 === this.ongoingRequestCount || this.ongoingByteCount + e.bytesCount <= p && this.ongoingRequestCount < g;
    },
    add(e) {
      this.ongoingRequestCount += 1;
      this.ongoingByteCount += e.bytesCount;
    },
    remove(e) {
      this.ongoingRequestCount -= 1;
      this.ongoingByteCount -= e.bytesCount;
    }
  };
}
export function $$A0(e, r, n) {
  let i = _();
  let s = (n, i) => P(e, r, n, i);
  return {
    send: r => {
      b(r, i, s, e.trackType, n);
    },
    sendOnExit: n => {
      C(e, r, n);
    }
  };
}
function C(e, r, n) {
  if (navigator.sendBeacon && n.bytesCount < r) try {
    let r = e.build("beacon", n);
    if (navigator.sendBeacon(r, n.data)) return;
  } catch (e) {
    I(e);
  }
  R(e, n);
}
let T = !1;
function I(e) {
  T || (T = !0, Dx(e));
}
function P(e, r, n, s) {
  M() && n.bytesCount < r ? fetch(e.build("fetch-keepalive", n), {
    method: "POST",
    body: n.data,
    keepalive: !0,
    mode: "cors"
  }).then(dm(e => s?.({
    status: e.status,
    type: e.type
  }))).catch(dm(() => R(e, n, s))) : R(e, n, s);
}
function R(e, r, n) {
  fetch(e.build("fetch", r), {
    method: "POST",
    body: r.data,
    mode: "cors"
  }).then(dm(e => n?.({
    status: e.status,
    type: e.type
  }))).catch(dm(() => n?.({
    status: 0
  })));
}
function M() {
  try {
    return window.Request && "keepalive" in new Request("http://a");
  } catch (e) {
    return !1;
  }
}
export const sA = $$A0; 
