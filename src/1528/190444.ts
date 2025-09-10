import { jsx, jsxs } from "react/jsx-runtime";
import { PureComponent } from "react";
import { O as _$$O } from "../905/487602";
import { PluginHelpers } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import o from "classnames";
import { A as _$$A } from "../905/920142";
import { generateRecordingKey, RecordingPureComponent, handleMouseEvent } from "../figma_app/878298";
import { k as _$$k } from "../905/582200";
import { Yo } from "../figma_app/637027";
import { t } from "../905/331623";
import { s as _$$s } from "../cssbuilder/589278";
import { Me } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { af } from "../figma_app/559491";
import { Q7 } from "../905/15667";
import { fu } from "../figma_app/831799";
import { K } from "../905/135526";
import { canRunPlugin, getRelaunchablePlugins } from "../figma_app/300692";
import { O as _$$O2 } from "../figma_app/185954";
import { R as _$$R } from "../figma_app/612938";
import { bD } from "../figma_app/45218";
import { FEditorType } from "../figma_app/53721";
import { ManifestEditorType, hasLocalFileId, relaunchMixedDescription } from "../figma_app/155287";
import { Ib } from "../905/129884";
import { checkCanRunExtensions } from "../905/622391";
import { V } from "../905/480825";
import { VZ } from "../figma_app/727192";
import { Q as _$$Q2 } from "../905/346809";
import { Zk, fI } from "../figma_app/626177";
import { A as _$$A2 } from "../svg/26950";
import { A as _$$A3 } from "../svg/691417";
var d = o;
let P = class e extends PureComponent {
  constructor() {
    super(...arguments);
    this.onRemoveRelaunchData = e => {
      permissionScopeHandler.user("remove-plugin-relaunch-data", () => PluginHelpers.removeRelaunchDataFromSelection(e));
    };
    this.onRelaunch = async e => {
      let t = this.props.openFileKey;
      if (!t) return;
      if (!checkCanRunExtensions()) {
        _$$R.instance.handleUpgrade(Q7.RUN_PLUGIN);
        return;
      }
      let {
        canRun
      } = canRunPlugin({
        plugin: e.plugin,
        editorType: this.props.editorType ?? FEditorType.Design
      });
      if (canRun) return await _$$R.instance.enqueue({
        mode: "run-forever",
        runPluginArgs: {
          plugin: e.plugin,
          openFileKey: t,
          command: e.relaunchButton.command,
          queryMode: !1,
          runMode: "default",
          triggeredFrom: this.props.editorType === FEditorType.DevHandoff ? "handoff-relaunch" : "relaunch",
          ignoreForRunLastPlugin: !0,
          isWidget: !1
        }
      });
    };
    this.fetchPlugin = e => {
      this.props.dispatch(af({
        id: e,
        resourceType: bD.PLUGIN
      }));
    };
    this.renderRelaunchRows = e => {
      let t = "";
      return e.map(e => {
        let n = e.plugin.plugin_id;
        let l = `${e.pluginTypeAndID}-${e.relaunchButton.command}`;
        let r = jsx(M, {
          relaunchData: e,
          recordingKey: generateRecordingKey(this.props, "relaunch", l),
          onRelaunch: this.onRelaunch,
          onRemoveRelaunchData: this.onRemoveRelaunchData,
          firstButtonForPlugin: n !== t,
          collapsibleStyling: this.props.isDevHandoff && this.props.collapsible
        }, l);
        t = n;
        return r;
      });
    };
  }
  render() {
    let t = getRelaunchablePlugins(this.props.pluginRelaunchData, this.props.publishedPlugins, this.props.localPlugins, this.props.orgEntity, this.props.numSelected, (t, n) => e.refreshCache.debounceRefresh(t, this.fetchPlugin.bind(this), n), ManifestEditorType.FIGMA);
    if (0 === t.length) return null;
    let n = this.props.title ?? getI18nString("properties_panel.plugin.title");
    return this.props.isDevHandoff ? jsx(_$$k, {
      name: "inspection_panel",
      children: jsx(VZ, {
        title: n,
        collapsiblePanelKey: this.props.collapsible ? "plugin-relaunch" : void 0,
        recordingKey: "plugin",
        children: this.renderRelaunchRows(t)
      })
    }) : jsx(_$$k, {
      name: "plugin_panel",
      children: jsxs(Zk, {
        children: [jsx(fI, {
          children: jsx(_$$Q2, {
            children: n
          })
        }), this.renderRelaunchRows(t)]
      })
    });
  }
};
P.displayName = "PluginPanel";
P.refreshCache = new _$$O2(_$$A.duration(1, "day"));
export let $$F0 = P;
class M extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.onRelaunch = handleMouseEvent(this, "click", () => {
      this.props.onRelaunch(this.props.relaunchData);
    });
  }
  render() {
    return jsx(B, {
      ...{
        ...this.props,
        onRelaunch: this.onRelaunch,
        recordingKey: generateRecordingKey(this.props, "removeButton")
      }
    });
  }
}
function B(e) {
  let {
    plugin,
    relaunchButton
  } = e.relaunchData;
  let l = hasLocalFileId(plugin) ? jsx("div", {
    className: "plugin_panel--pluginIconLocal--44TyG",
    children: jsx(t, {
      svg: _$$A2,
      fallbackSvg: _$$A3
    })
  }) : jsx("div", {
    className: "plugin_panel--pluginIcon--TvCDA plugin--pluginIconBase--yAG5F",
    children: jsx(V, {
      plugin
    })
  });
  return jsxs(fu, {
    name: "PluginRelaunchRow",
    properties: {
      pluginId: plugin.plugin_id
    },
    trackingTargets: K.RCS,
    children: [jsx(fI, {
      className: e.collapsibleStyling ? "plugin_panel--rowButtonCollapsible--Vfrhx button_row--rowButton--s-r8y raw_components--singleRow--W5dYN raw_components--_singleRow--yTGIY raw_components--singleRowHeight--dKM4t raw_components--_row--rHucX raw_components--row--NThzm button_row--_rowButton--EdZXq" : "plugin_panel--rowButton--PxW5t button_row--rowButton--s-r8y raw_components--singleRow--W5dYN raw_components--_singleRow--yTGIY raw_components--singleRowHeight--dKM4t raw_components--_row--rHucX raw_components--row--NThzm button_row--_rowButton--EdZXq",
      children: jsxs("div", {
        className: "plugin_panel--relaunchContainer--leq1l",
        children: [jsx(Yo, {
          className: "plugin_panel--relaunchButton--sEH4s",
          onClick: () => e.onRelaunch(e.relaunchData),
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": plugin.name,
          children: jsxs("div", {
            className: _$$s.flex.itemsCenter.$,
            children: [jsx("div", {
              className: "plugin_panel--pluginIconContainer--o3Wvm",
              children: l
            }), jsx("div", {
              className: "plugin_panel--relaunchButtonName--Ol-Gy",
              children: jsx("div", {
                className: _$$s.ellipsis.overflowHidden.noWrap.fontMedium.$,
                children: relaunchButton.name
              })
            })]
          })
        }), jsx("div", {
          className: "plugin_panel--iconContainer--KltJf",
          children: jsx(Me, {
            recordingKey: e.recordingKey,
            trackingProperties: {
              action: "minus"
            },
            "aria-label": getI18nString("properties_panel.plugin.remove_tooltip"),
            onClick: () => e.onRemoveRelaunchData(e.relaunchData.plugin.plugin_id),
            htmlAttributes: {
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": getI18nString("properties_panel.plugin.remove_tooltip")
            },
            children: jsx(_$$O, {})
          })
        })]
      })
    }), !!relaunchButton.description && jsx("div", {
      className: d()("plugin_panel--relaunchDescription--TmxcU", e.collapsibleStyling && "plugin_panel--relaunchDescriptionPadded--G2-Tl"),
      children: jsx("pre", {
        className: "plugin_panel--relaunchDescriptionText--8x1PM ellipsis--ellipsisAfter3Lines--h405C ellipsis--_ellipsisAfterNLines--LzI7k",
        children: relaunchButton.description === relaunchMixedDescription ? renderI18nText("properties_panel.plugin.mixed_descriptions") : relaunchButton.description
      })
    })]
  });
}
M.displayName = "PluginRelaunchRow";
export const Q = $$F0;