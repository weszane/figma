import { k } from "../figma_app/261445";
var $$n0;
class a {
  constructor() {
    this.reporter = null;
  }
  logOpenFileAction(e) {
    this.reporter = new k("Fullscreen Page Query");
    this.reporter.setFileKey(e);
  }
  logEvent(e, t) {
    if (this.reporter) switch (e) {
      case "receiveNodeChanges":
        this.reporter.logEvent({
          type: e,
          size: t
        });
        break;
      case "sendSceneGraphQuery":
      case "receiveSceneGraphReply":
        this.reporter.logEvent({
          type: e,
          queries: t.split(",")
        });
        break;
      case "finishIncrementalLoading":
        this.reporter.logEvent({
          type: e,
          fileKey: t
        });
    }
  }
}
(e => {
  e.isStringEvent = function (e) {
    return "sendSceneGraphQuery" === e || "receiveSceneGraphReply" === e || "finishIncrementalLoading" === e;
  };
  e.isNumberEvent = function (e) {
    return "receiveNodeChanges" === e;
  };
  e.loadTimer = new a();
})($$n0 || ($$n0 = {}));
export const N = $$n0;