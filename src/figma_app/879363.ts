import { setupRemovableAtomFamily } from "../figma_app/615482";
import { useEffect } from "react";
import { shallowEqual } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { U } from "../figma_app/901889";
import { h } from "../905/207101";
import { reportError } from "../905/11";
import { useCanAccessFullDevMode } from "../figma_app/473493";
let n;
let _ = setupRemovableAtomFamily(() => atom(!1), {
  preserveValue: !1
});
let $$h1 = atom("");
let $$m4 = atom("");
var $$g3 = (e => (e.ALL = "ALL", e.RECENTLY_VIEWED = "RECENTLY_VIEWED", e.BUILD = "BUILD", e.COMPLETED = "COMPLETED", e))($$g3 || {});
var $$f0 = (e => (e.RECENT = "RECENT", e.PAGE = "PAGE", e.ALPHABETICAL = "ALPHABETICAL", e))($$f0 || {});
export function $$E2(e, t, r) {
  let o = U();
  let l = useCanAccessFullDevMode();
  h(() => {
    n = null;
  });
  useEffect(() => {
    if (0 !== e.length) try {
      let i = new Set(e.map(e => e.pageId)).size;
      let s = new Set(e.filter(e => e.userId).map(e => e.userId)).size;
      let d = {
        numNodes: e.length,
        numNodesWithFallbackUser: e.filter(e => e.isFallbackForLegacyStatus).length,
        numSectionsWithMissingUserInfo: e.filter(e => !e.userId && e.isSection).length,
        numFramesWithMissingUserInfo: e.filter(e => !e.userId && !e.isSection).length,
        numPages: i,
        numUsers: s,
        tab: t,
        sortedBy: r,
        type: l ? "full" : "lite"
      };
      shallowEqual(d, n) || (o("dev_mode.overview.stats", d, {
        forwardToDatadog: !0
      }), n = d);
    } catch (e) {
      reportError(_$$e.DEVELOPER_TOOLS, e);
    }
  }, [e, r, t, l, o]);
}
export function $$y5(e, t, r) {
  let [n, a] = useAtomValueAndSetter(_);
  let c = U();
  useEffect(() => {
    if (!n) try {
      if (e.length > 0 && t && !t.loading) {
        if (t.hasError || !t.usersById) {
          a(!0);
          trackEventAnalytics("dev_mode.overview.avatars.error", {}, {
            forwardToDatadog: !0
          });
        } else if (Object.keys(t.usersById).length === e.length) {
          a(!0);
          let n = r.filter(e => !e.userId);
          let i = r.filter(e => !e.userId && e.isFallbackForLegacyStatus);
          let s = r.filter(e => !e.userId && !e.isFallbackForLegacyStatus && e.hasBeenEditedSinceLastStatusChange);
          let o = Object.entries(t.usersById).filter(([e, t]) => e && !t);
          c("dev_mode.overview.avatars.loaded", {
            numUsersRequested: e.length,
            numUsersNotFound: o.length,
            numNodesWithMissingUserInfo: n.length,
            numNodesWithMissingFallbackUserInfo: i.length,
            numNodesEditedWithMissingUserInfo: s.length
          }, {
            forwardToDatadog: !0
          });
        }
      }
    } catch (e) {
      a(!0);
      reportError(_$$e.DEVELOPER_TOOLS, e);
    }
  }, [n, r, a, c, e.length, t]);
}
export const _6 = $$f0;
export const _o = $$h1;
export const c7 = $$E2;
export const oz = $$g3;
export const wz = $$m4;
export const zz = $$y5;