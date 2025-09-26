import { FontSourceType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { getViewerInstance } from "../figma_app/632319";
import { fetchFontFile, fetchFontByFamilyStyleVersion } from "../905/777093";
let $$d1 = {
  fetchFontFile: function (e, t, r) {
    let o = debugState.getState();
    let d = performance.now();
    let c = {
      source: e,
      id: t,
      postscriptName: r,
      fileKey: o.openFile?.key || null,
      teamId: function (e) {
        let {
          selectedView,
          folders
        } = e;
        return "team" === selectedView.view ? selectedView.teamId : "folder" === selectedView.view && folders[selectedView.folderId] ? folders[selectedView.folderId].team_id : null;
      }(o),
      orgId: o.currentUserOrgId || null
    };
    return fetchFontFile(c).then(e => {
      if (getFeatureFlags().ce_track_font_fetch_time) {
        let t = "";
        t = c.source === FontSourceType.LOCAL ? "N/A" : c.id;
        trackEventAnalytics("font_fetch_time", {
          ...c,
          id: t,
          fetch_time_ms: performance.now() - d,
          font_size_bytes: e.length
        });
      }
      return e;
    });
  },
  fetchFontFileWithoutPickerInfo: function (e, t, r) {
    return Promise.reject();
  }
};
let $$c0 = {
  fetchFontFile: (e, t, r) => fetchFontFile({
    source: e,
    id: t,
    postscriptName: r,
    fileKey: getViewerInstance()?.openFileKey() || null,
    teamId: null,
    orgId: null
  }),
  fetchFontFileWithoutPickerInfo(e, t, r) {
    var n;
    let i = getViewerInstance()?.openFileKey();
    return i ? fetchFontByFamilyStyleVersion(e, t, r, i, !(n = debugState.getState()) || !n.openFile || !!n.openFile.parentOrgId) : Promise.reject();
  }
};
export const Z = $$c0;
export const h = $$d1;