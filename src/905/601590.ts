export function $$n1(e) {
  if ("loaded" !== e.status) return !1;
  let t = e.data.file;
  return !!t && ("comments" in t || "mobileCommentThread" in t);
}
export class $$r0 {
  constructor(e, t, i) {
    this.args = e;
    this.subscription = t;
    this.user = i;
    this.livegraphClient = null;
  }
  get fileKey() {
    return this.args.fileKey;
  }
  get loadedComments() {
    return $$n1(this.subscription) ? "comments" in this.subscription.data.file ? this.subscription.data.file.comments : this.subscription.data.file.mobileCommentThread : [];
  }
  optimistically(e) {
    if (!this.livegraphClient) {
      setTimeout(() => {
        throw Error("Unable to perform optimistic mutation to livegraph, no livegraph client");
      });
      return;
    }
    if (!this.subscription) {
      setTimeout(() => {
        throw Error(`Unable to perform optimistic mutation to livegraph, no livegraph client ${JSON.stringify(this.args)}`);
      });
      return;
    }
    if (!$$n1(this.subscription)) {
      let e = this.subscription;
      console.error("Unable to perform optimistic mutation to livegraph - partial subscription", JSON.stringify(this.args), JSON.stringify({
        loaded: "loaded" === e.status,
        status: e.status,
        file: "loaded" === e.status && !!e.data.file,
        currentFileFollower: "loaded" === e.status && !!e.data.file?.currentUserFileFollower,
        comments: "loaded" === e.status && !!(e.data.file && "comments" in e.data.file ? e.data.file.comments : e.data.file?.mobileCommentThread)
      }));
      return;
    }
    e(this.subscription.data, this.livegraphClient, this.user);
  }
}
export const I = $$r0;
export const e = $$n1;