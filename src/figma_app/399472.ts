import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { processHubFilesThunk } from "../905/359847";
import { createOptimistThunk } from "../905/350402";
import { Qi } from "../figma_app/559491";
import { s as _$$s2 } from "../905/58247";
import { trackGenericEvent } from "../figma_app/314264";
import { getFullscreenViewEditorType } from "../figma_app/300692";
import { R } from "../figma_app/185954";
import { p as _$$p } from "../905/42189";
import { s as _$$s3 } from "../figma_app/504088";
var $$g1 = (e => (e.INVITE_TILE = "invite_tile", e.COMMUNITY_PAGE = "community_page", e))($$g1 || {});
let $$f7 = createOptimistThunk((e, t) => {
  XHR.put("/api/community_publishers/accept", t).then(({
    data: t
  }) => {
    let r = T(t.meta);
    r && e.dispatch(r);
  }).catch(t => {
    let r = resolveMessage(t);
    e.dispatch(FlashActions.error(getI18nString("community.actions.an_error_occurred_accepting_invite_please_refresh_and_try_again")));
    return Error(`Error updating resource ${r}`);
  });
});
let $$E5 = createOptimistThunk((e, t) => {
  let {
    src,
    plugin_id,
    widget_id
  } = t;
  XHR.put("/api/plugin_publishers/accept", {
    plugin_id,
    widget_id
  }).then(({
    data: t
  }) => {
    let n = T(t.meta);
    n && e.dispatch(n);
    trackGenericEvent("plugin_publisher_invite_accepted", {
      src,
      userId: e.getState().user?.id,
      pluginId: plugin_id ?? widget_id,
      isWidget: !!widget_id
    });
    let i = getFullscreenViewEditorType();
    plugin_id ? _$$s2({
      initialX: 0,
      initialY: 0,
      initialTab: "figjam" === i ? _$$p.PLUGINS : void 0,
      initialFdResourceTab: "figma" === i ? _$$s3.PLUGIN : void 0,
      scrollDevelopmentSectionIntoView: "figjam" === i,
      initialFdView: "figma" === i ? "development" : void 0,
      source: `extension-publisher-invite-${src}`
    }) : widget_id && _$$s2({
      initialX: 0,
      initialY: 0,
      initialTab: "figjam" === i ? _$$p.WIDGETS : void 0,
      initialFdResourceTab: "figma" === i ? _$$s3.WIDGET : void 0,
      scrollDevelopmentSectionIntoView: "figjam" === i,
      initialFdView: "figma" === i ? "development" : void 0,
      source: `extension-publisher-invite-${src}`
    });
  }).catch(t => {
    let r = resolveMessage(t);
    e.dispatch(FlashActions.error(getI18nString("community.actions.an_error_occurred_accepting_invite_please_refresh_and_try_again")));
    return Error(`Error updating resource ${r}`);
  });
});
let $$y4 = createOptimistThunk((e, t) => {
  XHR.del("/api/community_publishers/remove", t).then(({
    data: t
  }) => {
    let r = T(t.meta);
    r && e.dispatch(r);
  }).catch(t => {
    let r = resolveMessage(t);
    e.dispatch(FlashActions.error(getI18nString("community.actions.an_error_occurred_while_removing_publisher_please_refresh_and_try_again")));
    return Error(`Error updating resource ${r}`);
  });
});
let $$b0 = createOptimistThunk((e, t) => {
  XHR.del("/api/plugin_publishers/remove", t).then(({
    data: r
  }) => {
    let n = r.meta;
    if (r.meta.plugin) {
      let {
        plugin_publishers
      } = r.meta.plugin;
      r.meta.plugin.plugin_publishers = plugin_publishers ?? {
        accepted: [],
        pending: []
      };
    } else if (r.meta.widget) {
      let {
        plugin_publishers
      } = r.meta.widget;
      r.meta.widget.plugin_publishers = plugin_publishers ?? {
        accepted: [],
        pending: []
      };
    }
    let i = T(n);
    i && e.dispatch(i);
    trackGenericEvent("plugin_publisher_invite_removed", {
      src: t.src,
      userId: e.getState().user?.id,
      pluginId: t.plugin_id || t.widget_id,
      isWidget: !!t.widget_id
    });
  }).catch(t => {
    let r = resolveMessage(t);
    e.dispatch(FlashActions.error(getI18nString("community.actions.an_error_occurred_while_removing_publisher_please_refresh_and_try_again")));
    return Error(`Error updating resource ${r}`);
  });
});
function T(e) {
  return e.hub_file ? processHubFilesThunk({
    hubFiles: [e.hub_file],
    src: "removeCommunityPublisher"
  }) : e.plugin ? Qi({
    publishedPlugins: [e.plugin],
    src: "removeCommunityPublisher"
  }) : e.widget ? Qi({
    publishedPlugins: [e.widget],
    src: "removeCommunityPublisher"
  }) : void 0;
}
let $$I3 = createOptimistThunk(e => {
  R.loadPluginsPublishedByUser(e);
  R.loadPluginsAuthoredByCurrentOrg(e);
});
let $$S2 = createOptimistThunk(e => {
  R.loadPluginsAuthoredByCurrentOrg(e);
});
let $$v6 = createOptimistThunk(async e => {
  await R.loadWidgetsAuthoredByCurrentOrg(e);
});
export const MZ = $$b0;
export const Nn = $$g1;
export const Xt = $$S2;
export const aq = $$I3;
export const bb = $$y4;
export const dx = $$E5;
export const gI = $$v6;
export const z8 = $$f7;