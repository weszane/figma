import { sx } from "../905/449184";
import { sn } from "../905/542194";
import { B1 } from "../figma_app/925651";
import { zo, Je, d7 } from "../905/747968";
let n;
var l = (e => (e.PUSH = "push", e.REPLACE = "replace", e.POP = "pop", e.VISIBILITY_CHANGE = "visibility_change", e))(l || {});
let d = "page_timespent";
let c = "page_timespent_error";
let u = {
  startPageVisit() {
    let e = sn.getAll(d);
    if (n = u.getPage(), e?.size) {
      let t = !1;
      let i = Array.from(e.keys()).join(", ");
      e.forEach((e, i) => {
        i !== n?.path && (t = !0, sn.$$delete(d, i));
      });
      t && sx(c, {
        error: "Timer already running for another page",
        keys: i,
        path: n?.path
      }, {
        forwardToDatadog: !0,
        sendAsBeacon: !0
      });
    }
    if (sn.get(d, n?.path)) {
      sx(c, {
        error: "Timer already running for this page",
        ...n
      }, {
        forwardToDatadog: !0,
        sendAsBeacon: !0
      });
      return;
    }
    sn.start(d, {
      key: n?.path
    });
  },
  endPageVisit(e) {
    if (!n) {
      sx(c, {
        error: "Undefined page info",
        navigation_type: e
      }, {
        forwardToDatadog: !0,
        sendAsBeacon: !0
      });
      return;
    }
    try {
      let t = sn.stop(d, n?.path);
      sx(d, {
        ...n,
        time_on_page_ms: t,
        navigation_type: e
      }, {
        sendAsBeacon: !0,
        page: n
      });
      sn.$$delete(d, n?.path);
      n = void 0;
    } catch (t) {
      sx(c, {
        ...n,
        error: t.message,
        navigation_type: e
      }, {
        forwardToDatadog: !0,
        sendAsBeacon: !0
      });
    }
  },
  endPageVisitAndStartNewPageVisit(e, t) {
    "visibility_change" !== e && n?.path !== t && (u.endPageVisit(e), u.startPageVisit());
  },
  getPage: () => ({
    path: self.window?.location.pathname,
    referrer: zo(),
    document_referrer: Je(),
    search: self.window?.location.search,
    title: self.document?.title,
    url: self.window?.location.href
  }),
  getCurrentPageTimeSpent() {
    let e = sn.get(d, n?.path);
    return {
      pageInfo: n,
      time: e
    };
  }
};
export function $$p0(e) {
  [d7, t => {
    u.endPageVisitAndStartNewPageVisit(function (e) {
      switch (e) {
        case "PUSH":
          return "push";
        case "REPLACE":
          return "replace";
        case "POP":
          return "pop";
      }
    }(t), e.location.pathname);
  }].forEach(t => {
    e.listen(t);
  });
}
u.startPageVisit();
B1(e => {
  "hidden" === e && u.endPageVisit("visibility_change");
  "visible" === e && u.startPageVisit();
});
export const U = $$p0;