let u = null;
export function $$n0(e, t = "assertive", a = 7e3) {
  u ? u.announce(e, t, a) : (u = new i(), ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "undefined" != typeof jest) ? u.announce(e, t, a) : setTimeout(() => {
    u?.isAttached() && u?.announce(e, t, a);
  }, 100));
}
export function $$r1(e) {
  u && u.clear(e);
}
class i {
  isAttached() {
    var e;
    return this.node?.isConnected;
  }
  createLog(e) {
    let t = document.createElement("div");
    t.setAttribute("role", "log");
    t.setAttribute("aria-live", e);
    t.setAttribute("aria-relevant", "additions");
    return t;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(e, t = "assertive", a = 7e3) {
    var u;
    var n;
    if (!this.node) return;
    let r = document.createElement("div");
    "object" == typeof e ? (r.setAttribute("role", "img"), r.setAttribute("aria-labelledby", e["aria-labelledby"])) : r.textContent = e;
    "assertive" === t ? null === (u = this.assertiveLog) || void 0 === u || u.appendChild(r) : null === (n = this.politeLog) || void 0 === n || n.appendChild(r);
    "" !== e && setTimeout(() => {
      r.remove();
    }, a);
  }
  clear(e) {
    this.node && ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = null;
    this.assertiveLog = null;
    this.politeLog = null;
    "undefined" != typeof document && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
  }
}
export const iP = $$n0;
export const pA = $$r1;