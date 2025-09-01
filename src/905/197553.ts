import { Wh } from "../905/968269";
import { Y } from "../905/696438";
let a = `
  <body>
  <script>
  onmessage = async function(msg) {
    const {id, data} = msg.data
    try {
      const request = new Request(data.url, {...data})
      const response = await fetch(request)
      const blob = await response.blob()
      const responseData = {
        _blob: blob,
        headersObject: Object.fromEntries(response.headers.entries()),
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        type: response.type,
        url: response.url,
      }
      window.parent.postMessage({id, data: responseData}, '*')
    } catch(error) {
      window.parent.postMessage({id, error}, '*')
    }
  }
  </script>
  </body>
`;
let s = class e {
  constructor(e, t) {
    this.pluginID = e;
    this.nextMessageID = 0;
    this.outerIframe = null;
    this.messageCallbacks = {};
    this.innerIframe = null;
    this.handleMessages = e => {
      let t = e.data;
      t.id in this.messageCallbacks && (this.messageCallbacks[t.id](t), delete this.messageCallbacks[t.id]);
    };
    this.outerIframe = Y.getInstance(Wh.FETCH);
    this.allowedDomains = t.allowedDomains;
    this.isLocal = t.isLocal;
  }
  createInnerIframe() {
    let t = this.outerIframe.createInnerIframe(a, this.handleMessages, {
      name: `${this.pluginID} fetch`,
      isWidget: !1,
      cameraAccess: !1,
      microphoneAccess: !1,
      displayCaptureAccess: !1,
      clipboardWriteAccess: !1,
      allowedDomains: this.allowedDomains,
      isLocal: this.isLocal,
      pluginId: this.pluginID
    });
    this.innerIframe = e.innerIframes[this.pluginID] = t;
  }
  getOrCreateInnerIframe() {
    this.innerIframe || (this.pluginID in e.innerIframes ? this.innerIframe = e.innerIframes[this.pluginID] : this.createInnerIframe());
  }
  postMessageAndWait(e) {
    this.getOrCreateInnerIframe();
    return new Promise((t, i) => {
      e.id = this.nextMessageID++;
      this.messageCallbacks[e.id] = e => {
        e.data ? t(e.data) : e.error && i(e.error);
      };
      this.innerIframe?.postMessage(e, {
        origin: "*"
      });
    });
  }
  fetch(e) {
    return this.postMessageAndWait({
      data: e
    });
  }
  destroyIframe() {
    delete e.innerIframes[this.pluginID];
    this.innerIframe && (this.innerIframe.destroy(), this.innerIframe = null);
    this.outerIframe = null;
  }
};
s.innerIframes = {};
export let $$o0 = s;
export const V = $$o0;