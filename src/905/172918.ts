import { NC } from "../905/17179";
import { nF } from "../905/350402";
let $$a2 = NC("PLUGIN_PUT_ALL");
let $$s5 = NC("WIDGET_PUT_ALL");
let $$o4 = NC("PLUGIN_DEL_ALL");
let $$l0 = NC("WIDGET_DEL_ALL");
let $$d3 = NC("MERGE_PUBLISHED_PLUGIN");
let $$c1 = nF((e, t) => {
  if (!t.publishedPlugins) return;
  let i = (e.getState().user || {
    id: null
  }).id;
  let n = [];
  let r = [];
  for (let a of t.publishedPlugins) {
    if (a.unpublished_at && a.creator.id !== i) {
      r.push(a);
      continue;
    }
    try {
      let {
        publishedPlugins,
        publishedWidgets
      } = e.getState();
      if (!t.overrideInstallStatus && null == a.install_status) {
        let e = publishedPlugins[a.id] || publishedWidgets[a.id];
        e && (a.install_status = e.install_status);
      }
      n.push(function (e, t) {
        let i = e.current_plugin_version_id;
        if (i && (!e.versions || !e.versions[i])) throw Error(`${t} Invalid publishedPlugin ${e.id}: version id ${i} does not exist in versions`);
        return e;
      }(a, t.src));
    } catch (e) {
      console.error(e);
    }
  }
  let c = {
    plugins: n.filter(e => !e.is_widget),
    widgets: n.filter(e => e.is_widget)
  };
  let u = {
    plugins: r.filter(e => !e.is_widget),
    widgets: r.filter(e => e.is_widget)
  };
  c.widgets.length > 0 && e.dispatch($$s5(c.widgets));
  c.plugins.length > 0 && e.dispatch($$a2(c.plugins));
  u.widgets.length > 0 && e.dispatch($$l0(u.widgets));
  u.plugins.length > 0 && e.dispatch($$o4(u.plugins));
  e.dispatch($$d3(t));
});
export const GV = $$l0;
export const Qi = $$c1;
export const Vx = $$a2;
export const l5 = $$d3;
export const l7 = $$o4;
export const uV = $$s5;