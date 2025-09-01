import { glU } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { J } from "../905/231762";
import { F } from "../905/302958";
import { Ul } from "../figma_app/777551";
import { p4 } from "../905/448740";
import { T as _$$T } from "../905/594474";
import { nF } from "../905/350402";
import { Qi, fy } from "../figma_app/559491";
import { $O, to } from "../905/156213";
import { Q7 } from "../905/15667";
import { uE } from "../figma_app/314264";
import { cb } from "../figma_app/12796";
import { getPermissionsState } from "../figma_app/642025";
import { mI } from "../figma_app/300692";
import { R as _$$R } from "../figma_app/612938";
import { m3 } from "../figma_app/45218";
import { k2 } from "../figma_app/10554";
import { pluginAPIService } from "../905/3209";
import { U as _$$U } from "../905/424668";
import { o as _$$o } from "../905/938553";
import { KM, x5 } from "../figma_app/224019";
import { O as _$$O } from "../905/166544";
export let $$x0 = nF(async (e, {
  localFileId: t,
  publishedPluginId: r,
  entryPoint: c,
  initialTab: x,
  initialAllowedTabs: N,
  localSnapshotUrl: C,
  localSnapshotBlob: w,
  widgetNodeId: O
}) => {
  if (c === k2.EDITOR && !cb(e.getState())) return _$$R.instance.handleUpgrade(Q7.MANAGE_EXTENSIONS);
  if (null != r) {
    let [t, n] = await Promise.all([pluginAPIService.getPlugins({
      id: r
    }), _$$U.getWidgets({
      id: r
    })]);
    let i = t.data.meta;
    let a = n.data.meta;
    let s = i.concat(a).find(e => e.id === r);
    s && e.dispatch(Qi({
      publishedPlugins: [s],
      src: "showPublishPluginModal"
    }));
  }
  let R = e.getState();
  let {
    localPlugins,
    publishedPlugins,
    publishedWidgets,
    publishingPlugins,
    currentUserOrgId,
    authedProfilesById,
    user
  } = R;
  let U = (r ? publishedPlugins[r] : void 0) || (r ? publishedWidgets[r] : void 0);
  let B = null != t ? localPlugins[t] : void 0;
  if (U && !m3(U) && Ul(U) && B && B.manifest.permissions?.includes("payments") && user && !user.has_passed_visual_compliance) {
    e.dispatch($O({
      type: _$$O.type
    }));
    return;
  }
  if (null == t || publishingPlugins[t]) {
    if (null != t && publishingPlugins[t]) try {
      if (C && publishingPlugins[t].metadata.widgetSnapshotImageSrc !== C) {
        let {
          metadata
        } = publishingPlugins[t];
        metadata.widgetSnapshotImageSrc = C;
        metadata.widgetSnapshotImageBlob = w;
        e.dispatch(fy({
          id: t,
          metadata
        }));
      }
    } catch (t) {
      e.dispatch(F.enqueue({
        message: J(t) || t.message,
        error: !0
      }));
      return;
    } else if (void 0 === t && r && U) try {
      let t = mI({
        ...getPermissionsState(R),
        currentUserOrgId,
        localPlugins,
        publishedPlugins,
        publishedWidgets,
        authedProfilesById
      }, void 0, r, C);
      e.dispatch(fy({
        id: U.id,
        metadata: t
      }));
    } catch (t) {
      e.dispatch(F.enqueue({
        message: J(t) || t.message,
        error: !0
      }));
      return;
    }
  } else try {
    let n = mI({
      ...getPermissionsState(R),
      currentUserOrgId,
      localPlugins,
      publishedPlugins,
      publishedWidgets,
      authedProfilesById
    }, t, r, C, w);
    e.dispatch(fy({
      id: t,
      metadata: n
    }));
  } catch (t) {
    e.dispatch(F.enqueue({
      message: J(t) || t.message,
      error: !0
    }));
    return;
  }
  if (glU && glU.triggerAction("set-tool-default", null), uE("show_publish_plugin_modal", R, {
    entryPoint: c,
    userId: R.user?.id,
    orgId: R.currentUserOrgId,
    resourceType: U ? U.is_widget ? "widget" : "plugin" : void 0,
    publishedResourceId: U ? U.id : void 0,
    initialTab: x ?? KM.PUBLISH
  }), getFeatureFlags().ext_plugin_publish_rearch) {
    if (!B && !U) return;
    if (x === KM.PERMISSIONS) {
      e.dispatch(to({
        type: _$$o,
        data: {
          localFileId: t,
          entryPoint: c,
          initialTab: x,
          initialAllowedTabs: [KM.PERMISSIONS],
          publishedPluginId: U ? U.id : void 0,
          existingSecurityFormResponse: null
        }
      }));
      return;
    }
    !B && U ? e.dispatch(to({
      type: _$$T,
      data: {
        localFileId: void 0,
        validExtensionId: U.id,
        entryPoint: c,
        isWidget: p4({
          existingExtension: U,
          localExtension: B
        }),
        widgetNodeId: O
      }
    })) : t && e.dispatch(to({
      type: _$$T,
      data: {
        localFileId: t,
        validExtensionId: U?.id,
        entryPoint: c,
        isWidget: p4({
          existingExtension: U,
          localExtension: B
        }),
        widgetNodeId: O
      }
    }));
  } else e.dispatch(to({
    type: _$$o,
    data: {
      localFileId: t,
      entryPoint: c,
      initialTab: x,
      initialAllowedTabs: N ?? x5,
      publishedPluginId: U ? U.id : void 0,
      existingSecurityFormResponse: null
    }
  }));
});
export const r = $$x0;