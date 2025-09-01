import { vh } from "../figma_app/181241";
import { wq } from "../905/234821";
let r = new class {
  constructor() {
    this.FileCommentPinImpl = vh();
  }
  setPin(e, t) {
    return this.FileCommentPinImpl.validate(({
      xr: i
    }) => i.put(`/api/file/${e}/comments/${t}`, {
      comment_pin_action: "set_pin"
    }));
  }
  removePin(e, t) {
    return this.FileCommentPinImpl.validate(({
      xr: i
    }) => i.put(`/api/file/${e}/comments/${t}`, {
      comment_pin_action: "remove_pin"
    }));
  }
}();
export function $$s1() {
  return function (e) {
    if ("loaded" !== e.status) return 0;
    let t = 0;
    for (let i of e.data) i.commentPin && t++;
    return t;
  }(wq());
}
export class $$o0 {
  constructor(e) {
    this.client = e;
  }
  setPin(e) {
    let t = r.setPin(this.client.fileKey, e);
    this.client.optimistically(async (i, n, r) => {
      let a = new Date();
      let s = `${e}_${this.client.fileKey}`;
      await n.optimisticallyCreate({
        CommentPin: {
          [s]: {
            fileKey: i.file.id,
            fileCommentId: e,
            updatedAt: a,
            createdAt: a,
            userId: r.id
          }
        }
      }, t);
    });
    return t;
  }
  removePin(e, t) {
    let i = r.removePin(this.client.fileKey, e);
    this.client.optimistically(async (n, r) => {
      if ("loaded" !== this.client.subscription.status) throw Error("Unable to get pin for unloaded subscription");
      await r.optimisticallyDelete({
        CommentPin: {
          [t || `${e}_${this.client.fileKey}`]: null
        }
      }, i);
    });
    return i;
  }
}
export const xI = $$o0;
export const kJ = $$s1;