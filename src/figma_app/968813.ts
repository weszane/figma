import { createActionCreator } from "../905/73481";
import { createOptimistThunk } from "../905/350402";
import { Sb } from "../figma_app/49598";
import { Vx, uV, fs, b6 } from "../figma_app/559491";
import { loadingStatePutLoading, loadingStatePutSuccess, loadingStatePutFailure } from "../figma_app/714946";
import { isNullOrFailure } from "../905/18797";
import { defaultContentService } from "../905/751443";
let $$c1 = createActionCreator("UPDATE_FACE_STAMPS");
let $$u3 = createActionCreator("PUT_DEFAULT_FIGJAM_INSERT_ITEMS");
let $$p2 = createOptimistThunk(e => {
  let t = e.getState().selectedView;
  t && "fullscreen" === t.view && h(e);
});
let $$_0 = "FETCH_FIGJAM_DEFAULT_INSERTS";
async function h(e) {
  let t = e.getState();
  if (isNullOrFailure(t.loadingState, $$_0)) {
    e.dispatch(loadingStatePutLoading({
      key: $$_0
    }));
    try {
      let r = await defaultContentService.getDefaultInserts({
        orgId: t.currentUserOrgId || void 0
      });
      let n = [...r.data.meta.plugins, ...function (e) {
        let t = [];
        for (let r of e) for (let e of r.resources) e && "is_widget" in e && !e.is_widget && t.push(e);
        return t;
      }(r.data.meta.use_cases)];
      let i = [...r.data.meta.widgets, ...function (e) {
        let t = [];
        for (let r of e) for (let e of r.resources) e && "is_widget" in e && e.is_widget && t.push(e);
        return t;
      }(r.data.meta.use_cases)];
      let l = [...r.data.meta.templates, ...function (e) {
        let t = [];
        for (let r of e) for (let e of r.resources) e && "viewer_mode" in e && e.viewer_mode && t.push(e);
        return t;
      }(r.data.meta.use_cases)];
      e.dispatch(Sb({
        hubFiles: l,
        src: "figjam-inserts"
      }));
      e.dispatch($$u3(r.data.meta));
      e.dispatch(Vx(n));
      e.dispatch(uV(i));
      let c = {};
      let p = {};
      i.forEach(e => {
        let r = e.current_plugin_version_id;
        !(r && t.publishedCanvasWidgetVersions[e.id]?.[r]) && (c[e.id] = Object.keys(e.versions), e.current_plugin_version_id && (p[e.id] = {
          [e.current_plugin_version_id]: e.versions[e.current_plugin_version_id]
        }));
      });
      e.dispatch(fs(p));
      e.dispatch(b6({
        widgetIDToVersions: c
      }));
      e.dispatch(loadingStatePutSuccess({
        key: $$_0
      }));
    } catch (t) {
      e.dispatch(loadingStatePutFailure({
        key: $$_0
      }));
    }
  }
}
export const fC = $$_0;
export const o2 = $$c1;
export const qR = $$p2;
export const s7 = $$u3;