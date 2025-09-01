import { r as _$$r } from "../905/882131";
class r {
  constructor() {
    this.channel_ = new MessageChannel();
    this.sendPort_ = this.channel_.port2;
    this.messages_ = {};
    this.nextMessageHandle_ = 1;
    this.channel_.port1.onmessage = e => this.onMessageReceived_(e);
  }
  queueCallback(e) {
    let t = this.nextMessageHandle_++;
    this.messages_[t] = e;
    this.sendPort_.postMessage(t);
    return t;
  }
  cancelCallback(e) {
    delete this.messages_[e];
  }
  onMessageReceived_(e) {
    let t = e.data;
    if (!(t in this.messages_)) return;
    let i = this.messages_[t];
    delete this.messages_[t];
    i();
  }
}
function a() {
  a.instance_ || (a.instance_ = new r());
  return a.instance_;
}
let s = {
  REQUEST_IDLE_CALLBACK: 0,
  SET_TIMEOUT: 1,
  POST_MESSAGE: 2
};
export class $$o0 {
  constructor(e, t, i = 0) {
    this.callback_ = e;
    this.callbackType_ = null;
    this.handle_ = null;
    this.canceled_ = !1;
    this.schedule_(t, i);
  }
  isIdleCallback() {
    return this.callbackType_ === s.REQUEST_IDLE_CALLBACK;
  }
  cancel() {
    if (!this.canceled_) switch (this.canceled_ = !0, this.callbackType_) {
      case s.REQUEST_IDLE_CALLBACK:
        cancelIdleCallback(this.handle_);
        break;
      case s.SET_TIMEOUT:
        clearTimeout(this.handle_);
        break;
      case s.POST_MESSAGE:
        a().cancelCallback(this.handle_);
        break;
      default:
        throw TypeError("Unknown CallbackType");
    }
  }
  schedule_(e, t) {
    if (t && t > 0 || "function" != typeof MessageChannel) {
      t || (t = 0);
      this.callbackType_ = s.SET_TIMEOUT;
      this.handle_ = setTimeout(() => {
        this.runCallback_();
      }, t);
      return;
    }
    if (!_$$r.includes(e)) throw TypeError(`Invalid task priority : ${e}`);
    "background" === e && "function" == typeof requestIdleCallback ? (this.handle_ = requestIdleCallback(() => {
      this.runCallback_();
    }), this.callbackType_ = s.REQUEST_IDLE_CALLBACK) : (this.handle_ = a().queueCallback(() => {
      this.runCallback_();
    }), this.callbackType_ = s.POST_MESSAGE);
  }
  runCallback_() {
    this.canceled_ || this.callback_();
  }
}
export const g = $$o0;