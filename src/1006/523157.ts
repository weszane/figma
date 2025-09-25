import { registerTooltip } from "../905/524523";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonLarge } from "../905/521428";
import { generateRecordingKey } from "../figma_app/878298";
import p from "../vendor/223926";
import { dayjs } from "../905/920142";
import { selectWithShallowEqual } from "../905/103090";
import { getI18nString } from "../905/303541";
import { af } from "../figma_app/559491";
import { PluginAction } from "../905/15667";
import { useCurrentOrgAdminInfo } from "../figma_app/543529";
import { useCanRunExtensions } from "../figma_app/844435";
import { useCurrentFileKey } from "../figma_app/516028";
import { getRelaunchablePlugins, canRunPlugin } from "../figma_app/300692";
import { O as _$$O } from "../figma_app/185954";
import { PluginManager } from "../figma_app/612938";
import { HubTypeEnum } from "../figma_app/45218";
import { FEditorType } from "../figma_app/53721";
import { hasLocalFileId, ManifestEditorType } from "../figma_app/155287";
import { KindEnum } from "../905/129884";
import { PluginImage } from "../905/480825";
import { _r } from "../905/291714";
import { ButtonPrimitive } from "../905/632989";
import { O as _$$O2 } from "../905/969533";
import { wv } from "../figma_app/439493";
import { Fn } from "../figma_app/769101";
import { debugState } from "../905/407919";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
let a = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M18.5 4A1.5 1.5 0 0 1 20 5.5V19a1 1 0 0 1-.898.995L19 20h-1l-.102-.005A1 1 0 0 1 17 19v-6H7v6a1 1 0 0 1-.897.995L6 20H5l-.103-.005A1 1 0 0 1 4 19V5.5a1.5 1.5 0 1 1 3 0V7h10V5.5A1.5 1.5 0 0 1 18.5 4m0 1a.5.5 0 0 0-.5.5V19h1V5.5a.5.5 0 0 0-.5-.5m-13 0a.5.5 0 0 0-.5.5V19h1V5.5a.5.5 0 0 0-.5-.5m9.701 7H17v-1.799zM7 11.2v.8h.802l-.009-.009L11.784 8H10.2zm2.198.8h1.603l-.008-.008L14.785 8h-1.587zM16.2 8l-4 4h1.588L17 8.787V8zM7 9.786 8.786 8H7z"
    })
  });
});
var u = p;
let I = registerTooltip("figjam_plugin_relaunch_button_info", function (e) {
  let {
    name,
    description
  } = e;
  return jsxs("div", {
    className: "figjam_plugin_relaunch_button_info_tooltip--figjamRelaunchButtonInfo--d289K text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [jsx("span", {
      className: "figjam_plugin_relaunch_button_info_tooltip--handle--XUJNp",
      children: name
    }), description && jsx("div", {
      children: description
    })]
  });
}, e => ({
  name: e.getAttribute("data-tooltip-name"),
  description: e.getAttribute("data-tooltip-description")
}));
function B({
  onClick: e,
  recordingKey: t,
  ariaLabel: n,
  tooltip: i,
  tooltipType: l,
  tooltipName: r,
  tooltipDescription: a,
  showChevron: c,
  children: p
}) {
  return jsx(ButtonPrimitive, {
    className: "whiteboard_inline_menu_icon_button--iconButton40--yjNDz",
    onClick: e,
    recordingKey: t,
    "aria-label": n,
    htmlAttributes: {
      "data-tooltip": i,
      "data-tooltip-type": l,
      "data-tooltip-show-above": !0,
      "data-tooltip-name": r,
      "data-tooltip-description": a,
      "data-testid": t
    },
    children: jsxs("span", {
      "aria-hidden": !0,
      className: "whiteboard_inline_menu_icon_button--icon--SUTLm",
      children: [p, c && jsx(_$$O2, {
        className: "whiteboard_inline_menu_icon_button--chevron--tjrn4"
      })]
    })
  });
}
function S(e) {
  let {
    tooltipName,
    tooltipDescription,
    onClick,
    hasMultipleOptions,
    recordingKey,
    plugin
  } = e;
  let p = _r();
  let u = hasMultipleOptions ? getI18nString("whiteboard.inline_menu.open_relaunch_menu.aria_label", {
    pluginName: plugin.name
  }) : tooltipName ?? plugin.name;
  let s = hasMultipleOptions ? {
    tooltip: plugin.name,
    tooltipType: KindEnum.TEXT
  } : {
    tooltip: I,
    tooltipType: p && tooltipName ? KindEnum.SPECIAL : void 0,
    tooltipName,
    tooltipDescription: "string" == typeof tooltipDescription ? tooltipDescription : String(tooltipDescription)
  };
  return jsx(B, {
    onClick,
    recordingKey,
    showChevron: hasMultipleOptions,
    ariaLabel: u,
    ...s,
    children: hasLocalFileId(plugin) ? jsx(a, {}) : jsx(PluginImage, {
      className: "plugin_relaunch_content--pluginIcon--dxgZD plugin--pluginIconBase--yAG5F",
      plugin,
      alt: plugin.name
    })
  });
}
function H({
  children: e
}) {
  return jsx("div", {
    className: "plugin_relaunch_content--flexColumn--3aDVl",
    children: e
  });
}
function E(e) {
  let {
    relaunchData
  } = e;
  let n = e => parseInt(e || "0");
  return jsx(Fn, {
    onChange: o => {
      let i = relaunchData[n(o)];
      i && e.onSelect(i);
    },
    value: null,
    renderOption: ({
      value: e,
      onClick: i
    }) => {
      let l = relaunchData[n(e)];
      if (!l) return null;
      let a = l.relaunchButton.name.length > 34 || "string" == typeof l.relaunchButton.description && l.relaunchButton.description.length > 34;
      let p = generateRecordingKey("relaunchMenuSelectorOption", l.pluginTypeAndID, l.relaunchButton.command);
      return jsx("div", {
        "data-tooltip": I,
        "data-tooltip-type": l.relaunchButton.name && a ? KindEnum.SPECIAL : void 0,
        "data-tooltip-show-right": !0,
        "data-tooltip-name": l.relaunchButton.name,
        "data-tooltip-description": l.relaunchButton.description,
        children: jsx("div", {
          className: "plugin_relaunch_content--menuItem--fZT86",
          children: jsxs(ButtonLarge, {
            variant: "secondary",
            onClick: i,
            recordingKey: p,
            children: [jsx("div", {
              className: "plugin_relaunch_content--name--VYXnN ellipsis--ellipsis--Tjyfa",
              children: l.relaunchButton.name
            }), l.relaunchButton.description && jsx("div", {
              className: "plugin_relaunch_content--description--aAoGx ellipsis--ellipsis--Tjyfa",
              children: String(l.relaunchButton.description)
            })]
          })
        })
      }, `${l.pluginTypeAndID}-${e}`);
    },
    renderButton: ({
      onClick: e,
      value: i
    }) => {
      let l = relaunchData[n(i)];
      return l ? jsx(S, {
        hasMultipleOptions: !0,
        onClick: e,
        plugin: l.plugin,
        recordingKey: generateRecordingKey("relaunchMenuSelectorIconButton", l.pluginTypeAndID)
      }) : null;
    },
    options: relaunchData.map((e, t) => `${t}`),
    OptionWrapper: H
  });
}
export function $$F0() {
  let e = selectWithShallowEqual(e => e.mirror.selectionProperties.pluginRelaunchData);
  let t = useSelector(e => e.mirror.selectionProperties.numSelected);
  let n = selectWithShallowEqual(e => e.publishedPlugins);
  let r = selectWithShallowEqual(e => e.localPlugins);
  let a = useCurrentOrgAdminInfo();
  let p = useCurrentFileKey();
  let C = useRef(new _$$O(dayjs.duration(1, "day")));
  let T = useCanRunExtensions();
  let I = useDispatch();
  let D = e => I(af({
    id: e,
    resourceType: n[e]?.is_widget ? HubTypeEnum.WIDGET : HubTypeEnum.PLUGIN
  }));
  let k = getRelaunchablePlugins(e, n, r, a, t || 0, (e, t) => C.current.debounceRefresh(e, () => D(e), t), ManifestEditorType.FIGJAM);
  let V = u()(k, e => e.pluginTypeAndID);
  let B = e => {
    var t;
    var n;
    if (!p) return;
    if (!T) {
      PluginManager.instance.handleUpgrade(PluginAction.RUN_WIDGET);
      return;
    }
    t = getI18nString("whiteboard.inline_menu.relaunching_plugin", {
      commandName: e.relaunchButton.name
    });
    n = "figjam-plugin-relaunched";
    debugState.dispatch(VisualBellActions.enqueue({
      message: t,
      type: n,
      icon: VisualBellIcon.CHECK,
      timeoutOverride: 3e3
    }));
    let {
      canRun
    } = canRunPlugin({
      plugin: e.plugin,
      editorType: FEditorType.Whiteboard
    });
    canRun && PluginManager.instance.enqueue({
      mode: "run-forever",
      runPluginArgs: {
        plugin: e.plugin,
        openFileKey: p || "",
        command: e.relaunchButton.command,
        queryMode: !1,
        runMode: "default",
        triggeredFrom: "relaunch",
        ignoreForRunLastPlugin: !0,
        isWidget: !1
      }
    });
  };
  return 0 === k.length ? null : jsxs(Fragment, {
    children: [jsx(wv, {}), Object.values(V).map(e => {
      if (!e || !e[0]) return;
      let t = e[0];
      let n = `relaunch-button-${t.pluginTypeAndID}-${e.length}`;
      return 1 === e.length ? jsx(S, {
        tooltipName: t.relaunchButton.name,
        tooltipDescription: t.relaunchButton.description,
        plugin: t.plugin,
        onClick: () => B(t),
        recordingKey: generateRecordingKey("relaunchIconButton", t.pluginTypeAndID, t.relaunchButton.command)
      }, n) : jsx(E, {
        relaunchData: e,
        onSelect: B
      }, n);
    })]
  });
}
export const x = $$F0;