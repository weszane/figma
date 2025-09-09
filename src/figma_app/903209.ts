import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { atom, Xr, useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { useSprigWithSampling } from "../905/99656";
import { VisualBellActions } from "../905/302958";
import { selectCurrentUser } from "../905/372672";
import { Wh } from "../figma_app/615482";
import { z } from "../905/931953";
import { b } from "../905/875374";
import { _t } from "../figma_app/171413";
import { V7, TI, uV } from "../figma_app/359181";
import { Oc } from "../figma_app/552876";
import { JW } from "../figma_app/433317";
import { q } from "../figma_app/216831";
export let $$b3 = Wh(() => atom({
  inProgress: !1,
  bundleId: null,
  error: !1
}));
export function $$T1({
  fileKey: e
}) {
  let t = JW(e);
  let {
    allResponsiveSetGuids,
    selectedResponsiveSetGuids
  } = q(t);
  let i = getFeatureFlags().sts_ppp ? Array.from(selectedResponsiveSetGuids || []) : allResponsiveSetGuids;
  let a = {
    fileKey: e,
    responsiveSetsToPublish: i
  };
  let {
    onPublishChanges
  } = $$I2(a);
  return {
    publishStatus: t,
    publishPayload: a,
    onPublishChanges: () => onPublishChanges(i)
  };
}
export function $$I2({
  fileKey: e
}) {
  let t = Xr($$b3);
  let r = useDispatch();
  let a = selectCurrentUser()?.id;
  let s = Oc();
  return {
    onPublishChanges: useCallback(async n => {
      let i;
      trackEventAnalytics("sites_publish_started", {
        fileKey: e,
        productType: s ? "figmake" : "sites"
      });
      t({
        inProgress: !0,
        bundleId: null,
        error: !1
      });
      try {
        i = await b(r, {
          fileKey: e,
          publishedByUserId: a || "",
          responsiveSetGuids: n
        });
      } catch (e) {
        t({
          inProgress: !1,
          bundleId: null,
          error: !0
        });
        return;
      }
      t({
        inProgress: !0,
        bundleId: i,
        error: !1
      });
    }, [r, e, s, t, a]),
    onUpdateBundle: useCallback(async r => {
      if (r.siteBundle?.id && e) {
        try {
          t({
            inProgress: !0,
            bundleId: null,
            error: !1
          });
          await z.updateBundle({
            fileKey: e,
            bundleId: r.siteBundle.id
          });
        } catch (e) {
          console.error(e);
          t({
            inProgress: !1,
            bundleId: null,
            error: !0
          });
          return;
        }
        t({
          inProgress: !0,
          bundleId: r.siteBundle.id,
          error: !1
        });
      }
    }, [e, t])
  };
}
var S = (e => (e.None = "None", e.Publishing = "Publishing", e.Published = "Published", e.Failed = "Failed", e))(S || {});
export function $$v0({
  fileKey: e
}) {
  let {
    Sprig
  } = useSprigWithSampling();
  let r = _t(e);
  let a = JW(e);
  let s = useAtomWithSubscription($$b3);
  let l = Xr($$b3);
  let u = useDispatch();
  let p = useCallback(() => {
    l({
      inProgress: !1,
      bundleId: null,
      error: !1
    });
  }, [l]);
  let _ = useCallback(() => {
    Object.values(V7).forEach(e => {
      u(VisualBellActions.dequeue({
        matchType: e
      }));
    });
  }, [u]);
  let h = Oc();
  useEffect(() => {
    let e = A({
      publishProgress: s,
      publishStatus: a,
      domainInfo: r
    });
    ("Published" === e || "Failed" === e) && p();
    x({
      visualBellManagerState: e,
      domainInfo: r,
      dequeuePublishVisualBells: _,
      Sprig,
      isFigmakeFile: h
    });
  }, [Sprig, _, u, r, s, a, p, h]);
  useEffect(() => () => {
    _();
  }, [_]);
}
let A = ({
  publishProgress: e,
  publishStatus: t,
  domainInfo: r
}) => t.isLoading ? "None" : e.error ? "Failed" : e.inProgress && !e.bundleId ? "Publishing" : e.inProgress && e.bundleId && t.lastAttemptedPublish?.id === e.bundleId ? t.lastAttemptedPublish?.status === "succeeded" && r?.fullURL ? "Published" : t.lastAttemptedPublish?.status === "failed" ? "Failed" : "Publishing" : "None";
let x = ({
  visualBellManagerState: e,
  domainInfo: t,
  dequeuePublishVisualBells: r,
  Sprig: n,
  isFigmakeFile: i
}) => {
  switch (e) {
    case "Publishing":
      r();
      break;
    case "Published":
      t?.fullURL && (getFeatureFlags().sts_sprig_targeted_feedback && n("track", "sites_publish", {
        source: i ? "make" : "sites"
      }), TI({
        domainInfo: t,
        onDismiss: () => {
          r();
        },
        isFigmake: i
      }));
      break;
    case "Failed":
      uV({
        onDismiss: () => {
          r();
        },
        isFigmake: i
      });
      break;
    case "None":
      break;
    default:
      throwTypeError(e);
  }
};
export const $D = $$v0;
export const HB = $$T1;
export const MT = $$I2;
export const up = $$b3;