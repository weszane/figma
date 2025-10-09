import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useState, useEffect, useMemo, Component } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { SettingsAction } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { memoizeByArgs } from "../figma_app/815945";
import { RecordingPureComponent } from "../figma_app/878298";
import { n as _$$n } from "../figma_app/339971";
import { canAccessFullDevMode } from "../figma_app/473493";
import { updateDropdownSelectionAction, hideDropdownAction } from "../905/929976";
import { Dm } from "../figma_app/8833";
import { hasSeparator, hasHeader, hasRenderFunction, getActionOrName } from "../figma_app/847915";
import { formatI18nMessage } from "../905/482208";
import { n as _$$n2 } from "../figma_app/307143";
import { TrackingProvider } from "../figma_app/831799";
import { d$ } from "../figma_app/291792";
import { VU } from "../905/625959";
import { handleKeyboardEventByState, KeyboardEventResponse } from "../figma_app/896988";
import { FEditorType } from "../figma_app/53721";
import { pi } from "../figma_app/357047";
import { TrackingKeyEnum } from "../905/696396";
import { isFullscreenDevHandoffView } from "../905/782918";
import { j as _$$j } from "../905/834956";
import { getFeatureFlags } from "../905/601108";
import { isDevEnvironment } from "../figma_app/169182";
import { handleAtomEvent } from "../905/502364";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { Point } from "../905/736624";
import { breakInTemplateExecutionAtom } from "../figma_app/451396";
import { Oq } from "../figma_app/478201";
import { MW } from "../figma_app/570310";
import { hideModalHandler, showModalConditional, showModalHandler } from "../905/156213";
import { registerModal } from "../905/102752";
import { DraggableModalManager } from "../905/748636";
import { kL, zN, Pf } from "../905/326616";
import { postUserFlag } from "../905/985254";
import { fullscreenValue } from "../figma_app/455680";
import { useCurrentFileKey, useOpenFileObjectWithSinatraType } from "../figma_app/516028";
import { selectUserFlag } from "../905/940356";
import { FFileType } from "../figma_app/191312";
import { isInvalidValue } from "../905/216495";
import { KindEnum } from "../905/129884";
import { NumericInput } from "../figma_app/178475";
import { uw, i$ } from "../figma_app/582377";
import { hF, Pf as _$$Pf, kL as _$$kL } from "../905/875676";
import { io } from "../figma_app/73698";
import { W as _$$W } from "../figma_app/467880";
import { v as _$$v } from "../figma_app/163681";
import { sendWithRetry } from "../905/910117";
import { maybeCreateSavepoint } from "../905/294113";
import { HeaderModal } from "../905/519092";
import { k as _$$k2 } from "../905/284709";
import { D as _$$D } from "../figma_app/32557";
import { O as _$$O } from "../figma_app/688952";
import { jv } from "../905/525678";
let U = registerModal(function () {
  let e = useDispatch<AppDispatch>();
  let t = useCallback(() => {
    e(hideModalHandler());
  }, [e]);
  let [r, a] = useAtomValueAndSetter(breakInTemplateExecutionAtom);
  let [o, l] = useAtomValueAndSetter(MW);
  let [d, c] = useAtomValueAndSetter(Oq);
  return jsx(DraggableModalManager, {
    title: "Code Connect Debug Settings",
    headerSize: "small",
    initialPosition: new Point(0, 0),
    onClose: t,
    children: jsxs("div", {
      className: kL,
      children: [jsxs("div", {
        className: zN,
        children: [jsx("input", {
          type: "checkbox",
          onChange: e => a(e.target.checked),
          checked: r
        }), jsx("span", {
          className: Pf,
          children: "Debugger break in template execution"
        })]
      }), jsxs("div", {
        className: zN,
        children: [jsx("input", {
          type: "checkbox",
          onChange: e => l(e.target.checked),
          checked: o
        }), jsx("span", {
          className: Pf,
          children: "Log Code Connect document"
        })]
      }), jsxs("div", {
        className: zN,
        children: [jsx("input", {
          type: "checkbox",
          onChange: e => c(e.target.checked),
          checked: d
        }), jsx("span", {
          className: Pf,
          children: "Log JS before execution"
        })]
      })]
    })
  });
}, "CodeConnectDebugModal");
function q(e) {
  let [t, r] = useState(e.initialValue);
  let a = useCallback(e => {
    isInvalidValue(e) || r(e.valueOf());
  }, [r]);
  let o = useDispatch<AppDispatch>();
  useEffect(() => {
    uw({
      [e.configPropertyName]: t
    });
  }, [t, e.configPropertyName]);
  return jsx(NumericInput, {
    bigNudgeAmount: e.bigNudgeAmount,
    className: hF,
    "data-tooltip": e.propertyDescription,
    "data-tooltip-type": KindEnum.TEXT,
    dispatch: o,
    max: e.maxVal,
    min: e.minVal,
    onValueChange: a,
    smallNudgeAmount: e.smallNudgeAmount,
    value: t,
    children: jsx("span", {
      className: _$$Pf,
      children: e.displayName
    })
  });
}
let J = registerModal(function () {
  let e = useDispatch<AppDispatch>();
  let t = useCallback(() => {
    e(hideModalHandler());
  }, [e]);
  return jsx(DraggableModalManager, {
    title: "Comments Debug Settings",
    headerSize: "small",
    initialPosition: new Point(0, 0),
    onClose: t,
    children: jsxs("div", {
      className: _$$kL,
      onMouseDown: e => {
        e.stopPropagation();
      },
      children: [jsx(q, {
        configPropertyName: "minZoomPercentage",
        initialValue: i$.minZoomPercentage,
        displayName: "Clustering Zoom Level Threshold",
        propertyDescription: "The zoom level threshold at which we will no longer apply clustering",
        minVal: 1,
        maxVal: 25600,
        bigNudgeAmount: 5,
        smallNudgeAmount: .1
      }), jsx(q, {
        configPropertyName: "zoomScaleOverlap",
        initialValue: i$.zoomScaleOverlap,
        displayName: "Pin Overlap",
        propertyDescription: "The base number of pixels we check for overlapping pins when clustering, this value is multiplied by the current zoomScale to compute bounding box",
        minVal: 1,
        maxVal: 2e4,
        bigNudgeAmount: 100,
        smallNudgeAmount: 10
      }), jsx(q, {
        configPropertyName: "clusterClickResultViewportPercentage",
        initialValue: i$.clusterClickResultViewportPercentage,
        displayName: "Cluster Click Result Viewport Percentage",
        propertyDescription: "After a cluster click, one of the pins in the cluster will be positioned this percentage between the center of the viewport and the edge of the viewport. However, we will always zoom in far enough to break the cluster, even if one of the pins ends up being positioned farther away than this percentage.",
        minVal: 1,
        maxVal: 100,
        bigNudgeAmount: 5,
        smallNudgeAmount: 1
      }), jsx(q, {
        configPropertyName: "rebuildClustersZoomDelay",
        initialValue: i$.rebuildClustersZoomDelay,
        displayName: "Rebuild Cluster User Zoom Delay",
        propertyDescription: "Delay in ms that occurs between a zoomScale change and the clusters rebuilding",
        minVal: 0,
        maxVal: 1e4,
        bigNudgeAmount: 100,
        smallNudgeAmount: 10
      })]
    })
  });
}, "CommentDebugSettingsModal");
class ea extends Error {}
async function es({
  dispatch: e,
  fileKey: t,
  log: r = () => {}
}) {
  try {
    r("Generating file version...");
    let n = (await maybeCreateSavepoint(t, "Exported to ML account", "", e, !0))?.id;
    if (void 0 === n) throw Error("undefined versionId");
    r(`Exporting file version ${n}...`);
    let {
      meta: {
        run_key
      }
    } = (await sendWithRetry.post(`/api/ml/export/file_version/${n}`)).data;
    r(`Waiting for run ${run_key}...`);
    for (let e = 30; e >= 0; e--) {
      await new Promise(e => setTimeout(e, 1e3));
      let {
        meta: {
          ready,
          s3_uri
        }
      } = (await sendWithRetry({
        url: `/api/ml/export/status/${encodeURIComponent(run_key)}`
      })).data;
      if (ready) {
        r(`Export manifest is ready at ${s3_uri}`);
        break;
      }
      if (0 === e) {
        r("Timed out!");
        return;
      }
    }
    r("Succeeded!");
  } catch (e) {
    if (e instanceof ea) return;
    r("Failed!");
    r(`${e}`);
  }
}
let eo = registerModal(function () {
  let e = useDispatch<AppDispatch>();
  let t = useCallback(() => {
    e(hideModalHandler());
  }, [e]);
  let [r, a] = useState([]);
  let o = useCurrentFileKey();
  useEffect(() => {
    let r = !1;
    let n = e => {
      if (r) throw new ea();
      a(t => t.concat([e]));
    };
    null === o ? n("No open file") : es({
      dispatch: e,
      fileKey: o,
      log: n
    });
    return () => {
      r = !0;
      t();
    };
  }, [t, e, o]);
  return jsx(HeaderModal, {
    title: "ML Export",
    headerSize: "large",
    minWidth: 300,
    onClose: t,
    children: jsx("div", {
      className: _$$k2,
      children: r.join("\n")
    })
  });
}, "MLExportModal");
let ec = () => {
  let e = useDispatch<AppDispatch>();
  let t = useOpenFileObjectWithSinatraType({
    useSinatraType: !0
  });
  let r = selectUserFlag("cursor_bot_v2_make_show_me_primary_cta");
  return useMemo(() => {
    let n = [{
      name: "toggle-comments-debug-settings",
      callback: () => {
        e(showModalConditional({
          type: J,
          data: {}
        }));
      }
    }, {
      name: "toggle-comments-debug-disable-sidebar",
      callback: () => {
        uw(e => ({
          disableSidebar: !e.disableSidebar
        }));
      }
    }, {
      name: "toggle-code-connect-debug-tools",
      callback: () => {
        e(showModalConditional({
          type: U,
          data: {}
        }));
      }
    }];
    window.INITIAL_OPTIONS?.cluster_name === "local" && n.push({
      name: "debug-ml-export",
      callback: () => {
        e(showModalConditional({
          type: eo,
          data: {}
        }));
      }
    });
    getFeatureFlags().cursor_bot && t?.editor_type === FFileType.DESIGN && n.push({
      name: "toggle-cursor-bot",
      callback: () => {
        handleAtomEvent({
          id: _$$W
        });
      }
    }, {
      name: "toggle-cursor-bot-primary-cta",
      callback: () => {
        e(postUserFlag({
          cursor_bot_v2_make_show_me_primary_cta: !r
        }));
      }
    });
    getFeatureFlags().bake_sb && t?.editor_type === FFileType.FIGMAKE && (_$$D && n.push({
      name: "supabase-menu",
      callback: () => {
        fullscreenValue.dispatch(showModalHandler({
          type: _$$D,
          data: {},
          showModalsBeneath: !0
        }));
      }
    }), _$$O && n.push({
      name: "foundry-menu",
      callback: () => {
        _$$O && fullscreenValue.dispatch(showModalHandler({
          type: _$$O,
          data: {},
          showModalsBeneath: !0
        }));
      }
    }));
    isDevEnvironment() && t?.editor_type === FFileType.DESIGN && (n.push({
      name: "toggle-tooltips-plus",
      callback: () => {
        handleAtomEvent({
          id: _$$v
        });
      }
    }), n.push({
      name: "toggle-visual-asset-tooltips",
      callback: () => {
        handleAtomEvent({
          id: io
        });
      }
    }));
    return n;
  }, [e, r, t?.editor_type]);
};
let ep = "preferences-menu";
class e_ extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.multilevelDropdownRef = e => {
      this.multilevelDropdown = e;
    };
    this.onKeyDown = e => {
      handleKeyboardEventByState(e, KeyboardEventResponse.NO);
    };
    this.selectPreferencesMenu = () => {
      this.multilevelDropdown && this.multilevelDropdown.setActiveItemPath(this.getPathToPreferences());
    };
    this.getPathToPreferences = () => [formatI18nMessage(ep)];
  }
  componentDidUpdate(e, t) {
    if (super.componentDidUpdate(e, t), this.props.selectionToUpdate && this.props.selectionToUpdate === SettingsAction.PREFERENCES) {
      let e = this.multilevelDropdown && this.multilevelDropdown.getActiveItemAtDepth(0);
      !e || hasSeparator(e) || hasHeader(e) || hasRenderFunction(e) || !e.name || e.name !== ep ? (this.selectPreferencesMenu(), this.props.dispatch(updateDropdownSelectionAction({
        type: pi,
        data: {
          selectionToUpdate: null
        }
      }))) : this.props.dispatch(hideDropdownAction());
    }
  }
  render() {
    let e = this.props.positionOnChevron && this.props.chevronRef?.current?.getBoundingClientRect() || null;
    let t = jsx("div", {
      className: `${Dm}`,
      children: jsx($$em1, {
        ref: this.multilevelDropdownRef,
        activatePathOnMount: this.props.dropdown.data.togglePreferences ? this.getPathToPreferences() : void 0,
        allowCodegenOptions: this.props.selectedView.editorType === FEditorType.Design,
        alwaysShowCheckMarkOffset: !0,
        appModel: this.props.appModel,
        "aria-labelledby": this.props["aria-labelledby"],
        controlledByID: this.props.controlledByID,
        dispatch: this.props.dispatch,
        id: this.props.id,
        isLimitedDevMode: this.props.isLimitedDevMode,
        lean: "right",
        menuItems: this.props.menuItems,
        onKeyDown: this.onKeyDown,
        recordingKey: "mainMenu",
        selectedView: this.props.selectedView,
        showPoint: !1,
        targetRect: e ?? (this.props.appModel.showUi ? this.props.dropdown.data.targetRect : {
          top: 0,
          left: 0
        })
      })
    });
    return createPortal(t, document.body);
  }
}
export function $$eh0(e) {
  _$$n2();
  let t = useDispatch<AppDispatch>();
  let r = useSelector(e => e.mirror.appModel);
  let i = useSelector(e => e.selectedView);
  let a = useSelector(e => e.dropdownShown?.data?.selectionToUpdate);
  let o = useSelector(e => isFullscreenDevHandoffView(e.selectedView) && !canAccessFullDevMode(e));
  let l = ec();
  let d = d$({
    debugMenuItems: l
  });
  return jsx(e_, {
    ...e,
    dispatch: t,
    menuItems: d,
    appModel: r,
    selectedView: i,
    selectionToUpdate: a,
    isLimitedDevMode: o
  });
}
e_.displayName = "FullscreenMainMenu";
export class $$em1 extends Component {
  constructor() {
    super(...arguments);
    this.multilevelDropdownRef = e => {
      this.multilevelDropdown = e;
    };
    this.getActiveItemAtDepth = e => this.multilevelDropdown ? this.multilevelDropdown.getActiveItemAtDepth(e) : null;
    this.setActiveItemPath = e => {
      this.multilevelDropdown && this.multilevelDropdown.setActiveItemPath(e);
    };
    this.onSelectItem = (e, t) => {
      permissionScopeHandler.user(`fullscreen-menu-${e.action ?? "non-action"}`, () => {
        if (e.callback && e.callback(getActionOrName(e), e.args, this.props.dispatch, t), e.action && !e.input) {
          let r = e.action;
          e.loadingIndicatorString ? this.props.dispatch(_$$n.set({
            message: e.loadingIndicatorString,
            callback: () => {
              VU.get(r, e.source ?? "menu", e.args)(t);
            }
          })) : VU.get(r, e.source ?? "menu", e.args)(t);
        }
      });
    };
    this.transformMenuItems = memoizeByArgs(e => jv(e, {
      appModel: this.props.appModel,
      selectedView: this.props.selectedView,
      sceneGraph: this.props.sceneGraph,
      sceneGraphSelection: this.props.sceneGraphSelection,
      removeDisabledItems: this.props.removeDisabledItems,
      alwaysShowCheckMarkOffset: this.props.alwaysShowCheckMarkOffset,
      isLimitedDevMode: this.props.isLimitedDevMode
    }));
  }
  componentDidMount() {
    this.closeIfNoItems();
  }
  componentDidUpdate() {
    this.closeIfNoItems();
  }
  componentWillUnmount() {
    this.props.controlledByID && document.getElementById(this.props.controlledByID)?.focus();
  }
  hasMenuValidItems() {
    let e = this.transformMenuItems(this.props.menuItems);
    return e.length > 0 && e.some(e => !e.separator && (this.props.allowDisabledOnly || !e.disabled));
  }
  closeIfNoItems() {
    this.hasMenuValidItems() || this.props.dispatch(hideDropdownAction());
  }
  render() {
    let e = this.transformMenuItems(this.props.menuItems);
    return this.hasMenuValidItems() ? jsx(TrackingProvider, {
      name: TrackingKeyEnum.EDITOR_MENU,
      children: jsx(_$$j, {
        ref: this.multilevelDropdownRef,
        activatePathOnMount: this.props.activatePathOnMount,
        allowCodegenOptions: this.props.allowCodegenOptions,
        alwaysShowCheckMarkOffset: this.props.alwaysShowCheckMarkOffset,
        "aria-labelledby": this.props["aria-labelledby"],
        dispatch: this.props.dispatch,
        id: this.props.id,
        items: e,
        lean: this.props.lean,
        minWidth: this.props.minWidth,
        onKeyDown: this.props.onKeyDown,
        onSelectItem: this.onSelectItem,
        parentRect: this.props.targetRect,
        recordingKey: this.props.recordingKey,
        showPoint: this.props.showPoint
      })
    }) : null;
  }
}
$$em1.displayName = "FullscreenMultilevelDropdown";
export const e = $$eh0;
export const Q = $$em1;