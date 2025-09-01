let n;
let r;
function a(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
let s = "aws_waf_token_challenge_attempts";
function o() {
  let e = n ?? ("undefined" != typeof window ? window : void 0);
  if (!e) throw Error("Expected window object to be defined");
  return e;
}
function l() {
  let e = r ?? ("undefined" != typeof document ? document : void 0);
  if (!e) throw Error("Expected document object to be defined");
  return e;
}
export let $$d1 = new class {
  waitForWAFValidation(e) {
    if (this.pendingWAFVerification) return this.pendingWAFVerification.deferred.promise;
    let t = function () {
      let e;
      let t;
      let i = {
        promise: new Promise((i, n) => {
          e = i;
          t = n;
        }),
        resolve: t => {
          i.status = "resolved";
          i.result = t;
          e(t);
        },
        reject: e => {
          i.status = "rejected";
          i.error = e;
          t(e);
        },
        status: "pending"
      };
      return i;
    }();
    try {
      let e = o().localStorage.getItem(s);
      if (e) {
        let t = JSON.parse(e);
        t.attempts = 1;
        o().localStorage.setItem(s, JSON.stringify(t));
      }
    } catch (e) {
      console.error(e);
    }
    if ("challenge" === e) {
      let e = l().createElement("iframe");
      e.src = `${o().location.origin}/waf-validation`;
      e.id = "waf-iframe";
      l().body.appendChild(e);
      o().addEventListener("message", this.onMessage);
      this.pendingWAFVerification = {
        type: "challenge",
        deferred: t,
        iframe: e
      };
      return t.promise;
    }
    if ("captcha" === e) throw Error("Unhandled in Cortex client");
  }
  constructor() {
    a(this, "pendingWAFVerification", void 0);
    a(this, "onMessage", e => {
      if (this.pendingWAFVerification && "waf-successful" === e.data) {
        if ("challenge" === this.pendingWAFVerification.type) {
          let {
            deferred,
            iframe
          } = this.pendingWAFVerification;
          this.pendingWAFVerification = void 0;
          deferred.resolve();
          iframe.remove();
        }
        o().removeEventListener("message", this.onMessage);
      }
    });
  }
}();
export function $$c0(e) {
  if (!e.url || !e.url.startsWith(o().location.origin)) return null;
  let t = e.headers.get("x-amzn-waf-action");
  return t ? "challenge" === t ? "challenge" : "captcha" : null;
}
export const HP = $$c0;
export const Kg = $$d1;