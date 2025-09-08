import { randomBetween } from "../figma_app/492908";
import { serializeJSON } from "../905/251556";
import { getFalseValue } from "../figma_app/897289";
export class $$s0 {
  constructor(e) {
    this.config = e;
    this.subscriptionMap = new Map();
    this.onRealtimeMessage = null;
    this.shimLogger = null;
  }
  setOnRealtimeMessage(e) {
    this.onRealtimeMessage = e;
  }
  setLogger(e) {
    this.shimLogger = e;
  }
  handleSubscription(e, t, i) {
    let s = {
      lgClient: i,
      store: t
    };
    if (!this.config.shouldHandle(e) || !this.config.darkReadEnabled(s)) return;
    let o = this.config.parseChannelArgs(e);
    let l = serializeJSON(o);
    if (this.subscriptionMap.has(l)) return;
    let d = null;
    let c = () => {
      d && clearTimeout(d);
    };
    let u = () => {
      let e = () => {
        let e = new Date(new Date().setHours(0, 0, 0, 0));
        let n = this.config.livegraphArgs(o, e, s);
        return i.subscribe(this.config.livegraphView, n, e => {
          if ("loaded" !== e.status) return;
          let i = this.config.convertLivegraphMessage(e.data, e.errors, n, s);
          if (this.shimLogger?.logMessages(i, {
            origin: this.config.name
          }), this.config.fullReadEnabled(s)) {
            let e = () => {
              if (!this.onRealtimeMessage) throw Error("Forgot to set shim callback?");
              this.onRealtimeMessage(i, t);
            };
            getFalseValue() ? e() : setTimeout(() => {
              e();
            });
          }
        });
      };
      c = this.config.periodicallyResubscribe ? function (e, t, i) {
        let r = null;
        let a = null;
        let s = () => {
          a = e();
          r = setTimeout(() => {
            a && a();
            s();
          }, 864e5 + randomBetween(0, 36e5));
        };
        s();
        return () => {
          r && clearTimeout(r);
          a && a();
        };
      }(e, 0, 36e5) : e();
    };
    this.subscriptionMap.set(l, c);
    this.config.delaySubscribeMs ? d = setTimeout(u, this.config.delaySubscribeMs()) : u();
  }
  handleUnsubscription(e) {
    if (!this.config.shouldHandle(e)) return;
    let t = this.config.parseChannelArgs(e);
    let i = serializeJSON(t);
    let n = this.subscriptionMap.get(i);
    n && (n(), this.subscriptionMap.$$delete(i));
  }
  resetForTests() {
    this.subscriptionMap.clear();
  }
}
export const H = $$s0;