import { throwTypeError } from "../figma_app/465776";
import { trackEventAnalytics } from "../905/449184";
export class $$a0 {
  constructor(e) {
    this.eventName = e;
    this.fileKey = null;
    this.nodeChangesSizes = [];
    this.queries = [];
    this.replies = [];
    this.queriesTs = [];
    this.nodeChangesTs = [];
    this.repliesTs = [];
    this.alreadySent = !1;
    this.logEvent = e => {
      if (this.fileKey && !this.alreadySent) switch (e.type) {
        case "sendSceneGraphQuery":
          this.queries.push(s(e.queries));
          this.queriesTs.push(this.now());
          break;
        case "receiveNodeChanges":
          this.nodeChangesSizes.push(e.size);
          this.nodeChangesTs.push(this.now());
          break;
        case "receiveSceneGraphReply":
          this.replies.push(s(e.queries));
          this.repliesTs.push(this.now());
          break;
        case "finishIncrementalLoading":
          if (e.fileKey === this.fileKey) {
            if (this.nodeChangesSizes.length > 0) {
              let t = {
                version: 1,
                fileKey: e.fileKey,
                nodeChangesSizes: this.nodeChangesSizes,
                queries: this.queries,
                replies: this.replies,
                maxNodeChangesSize: Math.max.apply(null, this.nodeChangesSizes),
                ...o(this.queriesTs, "query", 5),
                ...o(this.nodeChangesTs, "node", 5),
                ...o(this.repliesTs, "reply", 5)
              };
              trackEventAnalytics(this.eventName, t);
              this.alreadySent = !0;
            }
          } else console.error(`IncrementalLoadTimer: file key mismatch ${e.fileKey} != ${this.fileKey}`);
          this.reset();
          break;
        default:
          throwTypeError(e);
      }
    };
  }
  reset() {
    this.fileKey = null;
    this.nodeChangesSizes = [];
    this.queries = [];
    this.replies = [];
    this.queriesTs = [];
    this.nodeChangesTs = [];
    this.repliesTs = [];
    this.alreadySent = !1;
  }
  now() {
    return Math.round(performance.now());
  }
  setFileKey(e) {
    this.fileKey = e;
  }
}
function s(e) {
  return [...e].sort().join(",");
}
function o(e, t, r) {
  let n = {};
  e.forEach((e, i) => {
    i < r && (n[`${t}.${i}`] = e);
  });
  return n;
}
export const k = $$a0;