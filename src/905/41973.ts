import { deprecatedXHRBindings } from "../figma_app/763686";
import { getInitialOptions } from "../figma_app/169182";
export let $$n1;
class s {
  constructor() {
    this.sendRequest = e => {
      let t = new XMLHttpRequest();
      for (let i in t.onloadend = () => {
        deprecatedXHRBindings?.receiveResponse({
          promiseID: e.promiseID,
          status: t.status,
          contentType: t.getResponseHeader("Content-Type"),
          data: t.response ? new Uint8Array(t.response) : null
        });
      }, t.open(e.method, e.url), t.responseType = "arraybuffer", e.headers) t.setRequestHeader(i, e.headers[i]);
      let i = getInitialOptions().user_data?.id;
      if (i && t.setRequestHeader("X-Figma-User-ID", i), e.formData) {
        let i = new FormData();
        for (let t of e.formData) null != t.data ? i.append(t.name, t.data) : i.append(t.name, new Blob([e.buffer.subarray(t.dataStart, t.dataEnd)], {
          type: t.mimeType
        }));
        t.send(i);
      } else t.send(e.buffer);
    };
  }
}
export function $$o0() {
  $$n1 = new s();
}
export const ae = $$o0;
export const yx = $$n1;