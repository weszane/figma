import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createRef } from "react";
import { connect } from "react-redux";
import { filterNotNullish } from "../figma_app/656233";
import { assert, debug } from "../figma_app/465776";
import { encodeStringToBase64, encodeBase64 } from "../905/561685";
import { ServiceCategories as _$$e } from "../905/165054";
import c from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { vN, xH, Uz } from "../905/63728";
import { BrowserInfo } from "../figma_app/778880";
import { RecordingPureComponent, generateRecordingKey, handleKeyboardEvent, handleChangeEvent, handleMouseEvent, SKIP_RECORDING } from "../figma_app/878298";
import { reportError } from "../905/11";
import { logInfo } from "../905/714362";
import { B as _$$B } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { oB } from "../905/929976";
import { Rw } from "../figma_app/91703";
import { BE } from "../figma_app/844435";
import { fullscreenValue } from "../figma_app/455680";
import { canPerformAction, canRunExtensions } from "../figma_app/12796";
import { getPluginVersion, canRunPlugin } from "../figma_app/300692";
import { C3 } from "../figma_app/790714";
import { createDeferredPromise } from "../905/263346";
import { R as _$$R } from "../figma_app/612938";
import { y as _$$y } from "../905/916933";
import { wY } from "../905/753206";
import { V } from "../905/480825";
import { U3 } from "../figma_app/737746";
import { s as _$$s } from "../905/73603";
import { yh, ov, O8, rj } from "../905/462694";
import { h as _$$h, H } from "../9410/649740";
import { wM, FV, h8, w8, nW, yL, ed, Kf, ON, t6, l4, qf, CZ, WL, $8, Io, iu } from "../figma_app/627977";
import { ZR, Tk, $P, qc, ix, Ke, EA, D6 } from "../figma_app/575164";
import { A as _$$A } from "../1617/610488";
import { A as _$$A2 } from "../1617/377036";
var u = c;
let U = "Loading suggestions...";
function G(e) {
  assert(null !== e, "We should never be in the middle state if there are no optional parameters");
}
class K extends RecordingPureComponent {
  onSuggestions = e => {
    switch (e.type) {
      case "SUGGESTIONS":
        {
          let t = this.getDropdownItems(e.suggestions, this.state.searchQuery, this.state.activeParameterIndex);
          let i = t.findIndex(e => function (e) {
            return "freeform" !== e && "skip" !== e;
          }(e));
          let r = i >= 0 ? i : this.state.activeItemIndex;
          let n = t.length || !this.state.searchQuery ? null : getI18nString("fullscreen_actions.no_matches");
          this.clearLoadingMessage();
          this.setState({
            activeItemIndex: r,
            items: t,
            errorMessage: n
          });
          break;
        }
      case "ERROR":
        this.clearLoadingMessage();
        this.setState({
          items: this.getDropdownItems([], this.state.searchQuery, this.state.activeParameterIndex),
          errorMessage: e.message || getI18nString("fullscreen_actions.no_matches")
        });
        break;
      case "LOADING":
        this.setLoadingMessage(e.message);
    }
  };
  onBackspace = () => {
    let e = this.state.activeParameterIndex;
    let t = null;
    if ("middle" === e) {
      if (G(this.firstOptionalIndex), 0 === this.firstOptionalIndex) {
        this.props.onExitParameterEntry();
        return;
      }
      t = this.firstOptionalIndex - 1;
    } else if ("final" === e) t = this.props.parameters.length - 1;else {
      if (0 === e) {
        this.props.onExitParameterEntry();
        return;
      }
      t = e - 1;
    }
    let i = {
      ...this.state.parameterValues
    };
    let r = this.getParameterForIndex(t)?.key;
    r && delete i[r];
    this.setParameterIndex(t, i);
  };
  onTextChange = e => {
    let t;
    let i = this.state.activeParameterIndex;
    if ("middle" === i) {
      G(this.firstOptionalIndex);
      t = this.firstOptionalIndex;
    } else {
      if ("final" === i) return;
      t = i;
    }
    let r = this.props.parameters[t];
    this.triggerInputEvent({
      parameterValues: this.state.parameterValues,
      currentParameter: r,
      currentSearchQuery: e
    });
    this.setLoadingMessage(U);
    this.setState({
      searchQuery: e,
      items: this.getDropdownItems([], e, t),
      activeItemIndex: 0,
      activeParameterIndex: t,
      mouseMoved: !1,
      errorMessage: ""
    });
  };
  onSelectItem = (e, t) => {
    let i;
    let r = this.state.activeParameterIndex;
    if ("final" === r) {
      "enter" === t && this.launchPluginWithParameters(this.state.parameterValues);
      return;
    }
    let n = {
      ...this.state.parameterValues
    };
    if ("middle" !== r) {
      if (0 === this.state.items.length) return;
      let i = this.props.parameters[r];
      if (e < 0 || e >= this.state.items.length) {
        let n = "Trying to select suggestion at invalid index";
        console.error(n);
        logInfo("PluginParameterEntry", "invalid index", {
          index: e,
          items: this.state.items.length,
          currentIndex: r,
          parameter: i.name,
          keyPress: t
        });
        reportError(_$$e.EXTENSIBILITY, Error(n));
        return;
      }
      let a = this.state.items[e];
      "skip" === a || ("freeform" === a ? n[i.key] = {
        name: this.state.searchQuery
      } : (debug(!this.state.loadingMessage, "Selected item while loading"), n[i.key] = a));
    }
    let a = this.firstOptionalIndex;
    if ("middle" === r) {
      if (G(this.firstOptionalIndex), "enter" === t) {
        this.launchPluginWithParameters(n);
        return;
      }
      i = this.firstOptionalIndex;
    } else if (r === this.props.parameters.length - 1) {
      if ("enter" === t) {
        this.launchPluginWithParameters(n);
        return;
      }
      i = "final";
    } else i = null !== a && r === a - 1 ? "tab" === t ? a : "middle" : r + 1;
    this.setParameterIndex(i, n);
    this.searchInputRef.current.focus();
  };
  renderResult = (e, t, i) => {
    let n;
    let a = "";
    let s = "";
    "skip" === t ? (a = `Skip "${e.name}"`, s = "skip") : "freeform" === t ? (a = this.state.searchQuery, s = "skip") : (a = t.name, s = t.name, n = Y(t, ZR));
    return jsx(W, {
      recordingKey: generateRecordingKey(this.props, "suggestion", s),
      active: i === this.state.activeItemIndex,
      suggestion: a,
      onClick: e => this.onSelectItem(i, "enter"),
      onMouseMove: () => {
        this.state.mouseMoved || this.setState({
          mouseMoved: !0,
          activeItemIndex: i
        });
      },
      icon: n,
      onMouseEnter: () => {
        this.state.mouseMoved && this.setState({
          activeItemIndex: i
        });
      }
    }, i);
  };
  constructor(e) {
    this.searchInputRef = createRef();
    this.scrollContainerRef = createRef();
    this.searchBarRef = createRef();
    this.primaryPlaceholderTextRef = createRef();
    this.ranWithParameters = !1;
    this.runArgs = null;
    this.loadingTimerID = null;
    this.pendingLoadingMessage = null;
    this.firstOptionalIndex = null;
    this.eventID = 0;
    this.onKeyDown = handleKeyboardEvent(this, "keydown", e => {
      let t = e => {
        let t = this.state.activeItemIndex + e;
        return t < 0 ? this.state.items.length - 1 : t % this.state.items.length;
      };
      let i = BrowserInfo.mac ? vN(e, xH.META) : vN(e, xH.CONTROL);
      switch (e.keyCode) {
        case Uz.ENTER:
          e.preventDefault();
          this.onSelectItem(this.state.activeItemIndex, "enter");
          break;
        case Uz.TAB:
          e.preventDefault();
          this.onSelectItem(this.state.activeItemIndex, "tab");
          break;
        case Uz.DOWN_ARROW:
          if (e.preventDefault(), this.state.items.length > 0) {
            let e = t(1);
            this.setState({
              activeItemIndex: e
            });
            this.scrollContainerRef.current?.scrollElementAtIndexIntoView(e);
          }
          break;
        case Uz.UP_ARROW:
          if (e.preventDefault(), this.state.items.length > 0) {
            let e = t(-1);
            this.setState({
              activeItemIndex: e
            });
            this.scrollContainerRef.current?.scrollElementAtIndexIntoView(e);
          }
          break;
        case Uz.BACKSPACE:
          0 === this.state.searchQuery.length ? (e.preventDefault(), this.onBackspace(), e.stopPropagation()) : ("final" === this.state.activeParameterIndex || "middle" === this.state.activeParameterIndex) && e.preventDefault();
          break;
        case Uz.ESCAPE:
          e.preventDefault();
          this.props.dispatch(oB());
          break;
        case Uz.P:
        case Uz.FORWARD_SLASH:
          i && (e.preventDefault(), this.props.dispatch(oB()));
          break;
        case Uz.EQUALS:
        case Uz.DASH:
          i && (e.preventDefault(), "-" === e.key ? fullscreenValue.triggerAction("zoom-out") : fullscreenValue.triggerAction("zoom-in"));
          break;
        case Uz.R:
        case Uz.S:
        case Uz.D:
        case Uz.E:
        case Uz.F:
        case Uz.O:
          if (i) {
            e.preventDefault();
            let t = this.state.searchQuery + e.key;
            this.onTextChange(t);
          }
      }
    });
    this.onSearchChange = handleChangeEvent(this, "change", e => {
      let t = e.currentTarget.value;
      this.onTextChange(t);
    });
    let t;
    if (super(e), logInfo("PluginParameterEntry", "Starting parameter entry for plugin", {
      parameters: e.parameters,
      displayName: e.displayName,
      parameterOnly: e.parameterOnly,
      pluginId: e.pluginId,
      pluginLocalFileId: e.pluginLocalFileId,
      command: e.command
    }), 0 === e.parameters.length) throw Error("Must specify at least one parameter");
    let i = e.parameters.findIndex(e => e.optional);
    this.firstOptionalIndex = i < 0 ? null : i;
    t = e.initialParameterValues ? "final" : e.parameters[0].optional ? "middle" : 0;
    this.handler = this.runPlugin();
    let a = this.getParameterForIndex(t);
    a && this.triggerInputEvent({
      parameterValues: {},
      currentParameter: a,
      currentSearchQuery: ""
    });
    this.setLoadingMessage("Loading plugin...");
    this.state = {
      searchQuery: "",
      items: [],
      errorMessage: null,
      loadingMessage: null,
      activeItemIndex: 0,
      parameterValues: e.initialParameterValues || {},
      activeParameterIndex: t,
      mouseMoved: !1,
      hidePluginName: !1
    };
  }
  getParameterForIndex(e) {
    return "middle" === e || "final" === e ? null : this.props.parameters[e];
  }
  getCurrentParameter() {
    return this.getParameterForIndex(this.state.activeParameterIndex);
  }
  runPlugin() {
    let e = null;
    if (this.props.pluginId ? this.props.allSavedPlugins[this.props.pluginId] ? e = this.props.allSavedPlugins[this.props.pluginId] : this.props.publishedPlugins[this.props.pluginId] && (e = getPluginVersion(this.props.publishedPlugins[this.props.pluginId])) : this.props.pluginLocalFileId && (e = this.props.localExtensions[this.props.pluginLocalFileId]), !e) throw Error("Plugin not runnable");
    let {
      canRun
    } = canRunPlugin({
      plugin: e,
      editorType: this.props.editorType
    });
    if (!canRun) throw Error("Plugin not runnable");
    this.runArgs = {
      plugin: e,
      command: this.props.command || "",
      queryMode: !0,
      runMode: "default",
      triggeredFrom: "parameter-entry",
      openFileKey: this.props.openFile?.key || "",
      deferRunEvent: !0,
      isWidget: !1
    };
    let i = createDeferredPromise();
    _$$R.instance.enqueue({
      mode: "run-forever",
      runPluginArgs: this.runArgs
    });
    return i;
  }
  async triggerInputEvent(e) {
    this.eventID++;
    let t = this.eventID;
    let i = await this.handler;
    this.eventID === t && i.triggerParameterInputEvent({
      ...e,
      onSuggestions: e => {
        this.eventID === t && this.onSuggestions(e);
      }
    });
  }
  updateLayout() {
    let e = 0 === this.state.activeParameterIndex && !this.props.parameters[0].optional;
    if (void 0 === this.state.placeholderWidth && !e) {
      if (this.primaryPlaceholderTextRef.current) {
        let e = Math.min(250, Math.max(this.primaryPlaceholderTextRef.current.offsetWidth, 120));
        this.setState({
          placeholderWidth: e
        });
      } else this.setState({
        placeholderWidth: 0
      });
    }
    let t = this.searchBarRef.current;
    let i = t.offsetWidth < t.scrollWidth;
    e || !i || this.state.hidePluginName || this.setState({
      hidePluginName: !0
    });
    t.scrollLeft = t.scrollWidth;
  }
  componentDidMount() {
    super.componentDidMount();
    trackEventAnalytics(yh, ov({
      ...this.props,
      qaVersion: U3
    }));
    this.searchInputRef.current.focus();
    this.updateLayout();
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    this.updateLayout();
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.ranWithParameters || wY();
    let e = O8(this.props.parameters, this.state.parameterValues);
    this.ranWithParameters && e.requiredEntered !== e.requiredCount && (logInfo("PluginParameterEntry", "Parameter entry mismatch", {
      requiredParameters: this.props.parameters,
      parameterValues: this.state.parameterValues
    }), reportError(_$$e.EXTENSIBILITY, Error("Plugin ran successfully with parameters, but not all parameters were recorded")));
    let t = ov({
      ...this.props,
      qaVersion: U3
    });
    trackEventAnalytics(rj, {
      ...t,
      success: this.ranWithParameters,
      parametersEntered: e.entered,
      requiredParametersEntered: e.requiredEntered,
      optionalParametersEntered: e.optionalEntered
    });
  }
  getDropdownItems(e, t, i) {
    if ("middle" === i || "final" === i) return [];
    let r = e.slice();
    let n = this.props.parameters[i];
    t.length > 0 && n.allowFreeform && r.unshift("freeform");
    let a = this.props.parameters[i];
    0 === t.length && a.optional && r.unshift("skip");
    return r;
  }
  setLoadingMessage(e) {
    if (this.loadingTimerID) {
      this.pendingLoadingMessage = e;
      return;
    }
    this.pendingLoadingMessage = e;
    this.loadingTimerID = setTimeout(() => {
      this.setState({
        loadingMessage: this.pendingLoadingMessage
      });
      this.loadingTimerID = null;
      this.pendingLoadingMessage = null;
    }, 300);
  }
  clearLoadingMessage() {
    this.loadingTimerID && (clearTimeout(this.loadingTimerID), this.loadingTimerID = null);
    this.setState({
      loadingMessage: null
    });
  }
  setParameterIndex(e, t) {
    let i = this.getParameterForIndex(e);
    i && (logInfo("PluginParameterEntry", "setParameterIndex", {
      nextParameter: i.name
    }), this.triggerInputEvent({
      parameterValues: t,
      currentParameter: i,
      currentSearchQuery: ""
    }));
    let r = !(0 === e && !this.props.parameters[0].optional) && this.state.hidePluginName;
    this.searchInputRef.current.focus();
    this.setLoadingMessage(U);
    this.setState({
      searchQuery: "",
      items: this.getDropdownItems([], "", e),
      activeItemIndex: 0,
      activeParameterIndex: e,
      parameterValues: t,
      mouseMoved: !1,
      errorMessage: null,
      placeholderWidth: void 0,
      hidePluginName: r
    });
  }
  launchPluginWithParameters(e) {
    if (this.setState({
      parameterValues: e
    }), this.handler.then(async t => {
      let {
        isCancelled
      } = await _$$y(this.runArgs);
      isCancelled || t.triggerRunEvent({
        command: "parameters",
        parameters: e
      });
    }), this.runArgs) {
      let t = this.runArgs;
      if (this.runArgs = null, t.queryMode = !1, t.deferRunEvent = !1, t.parameterValues = e, this.props.recentlyUsedCommandName) {
        let e = this.props.recentlyUsedCommandName;
        this.props.dispatch(Rw({
          currentDisplayName: e,
          newCommand: {
            displayName: e,
            runPluginArgs: t
          }
        }));
        _$$s({
          displayText: e,
          runPluginArgs: t,
          localFileIdOrPluginId: this.props.pluginLocalFileId ?? this.props.pluginId
        });
      }
      C3(t);
    }
    this.ranWithParameters = !0;
    this.props.dispatch(oB());
  }
  renderResults() {
    if ("middle" === this.state.activeParameterIndex) return jsxs("div", {
      className: wM,
      children: [jsxs("div", {
        className: FV,
        children: [jsx("div", {
          className: h8,
          children: renderI18nText("fullscreen_actions.plugin_parameters.tab")
        }), jsx("div", {
          className: w8,
          children: renderI18nText("fullscreen_actions.plugin_parameters.to_enter_optional_parameters")
        })]
      }), jsxs("div", {
        className: FV,
        children: [jsx("div", {
          className: h8,
          children: renderI18nText("fullscreen_actions.plugin_parameters.enter")
        }), jsx("div", {
          className: w8,
          children: renderI18nText("fullscreen_actions.plugin_parameters.to_run_plugin")
        })]
      })]
    });
    if ("final" === this.state.activeParameterIndex) return null;
    let e = this.props.parameters[this.state.activeParameterIndex];
    let t = null;
    if (this.state.errorMessage ? t = jsx("div", {
      className: Tk,
      children: this.state.errorMessage
    }) : this.state.loadingMessage && (t = jsx("div", {
      className: Tk,
      children: this.state.loadingMessage
    })), 0 === this.state.items.length) return t;
    let i = t ? this.state.items.length + 1 : this.state.items.length;
    return jsxs(_$$h, {
      ref: this.scrollContainerRef,
      resultCount: i,
      children: [this.state.items.map((t, i) => this.renderResult(e, t, i)), t]
    });
  }
  renderCurrentParameters() {
    let e = this.getCurrentParameter()?.key;
    let t = $$V0(this.props.parameters, this.state.parameterValues, e);
    return jsxs(Fragment, {
      children: [jsx($$z1, {
        value: this.state.hidePluginName ? void 0 : this.props.displayName,
        icon: function (e, t, i) {
          if (!i) return jsx(_$$B, {
            className: nW,
            svg: _$$A,
            ariaLabel: "plugin icon"
          });
          {
            let n = e[i];
            n || (n = t[i] && getPluginVersion(t[i]));
            return jsx(V, {
              className: nW,
              plugin: n,
              alt: "plugin icon"
            });
          }
        }(this.props.allSavedPlugins, this.props.publishedPlugins, this.props.pluginId)
      }, "plugin-name"), t]
    });
  }
  placeholderElement() {
    let e = this.state.activeParameterIndex;
    let t = this.state.searchQuery.length > 0;
    if ("final" === e) return jsx(Fragment, {});
    if ("middle" === e) {
      let e = filterNotNullish(this.props.parameters.map(e => e.optional ? e.name : null)).join(", ");
      return jsx("span", {
        ref: this.primaryPlaceholderTextRef,
        children: renderI18nText("fullscreen_actions.plugin_parameters.optional_optional_names", {
          optionalNames: e
        })
      });
    }
    {
      let i = this.props.parameters[e];
      let n = this.props.parameters.slice(e);
      if (i.optional) {
        let e = n.map(e => e.name);
        t && (e[0] = "");
        return jsx("span", {
          ref: this.primaryPlaceholderTextRef,
          children: e.join(", ")
        });
      }
      {
        let e = filterNotNullish(n.map(e => e.optional ? null : e.name));
        let i = filterNotNullish(n.map(e => e.optional ? e.name : null));
        t && (e[0] = "");
        return jsxs("span", {
          children: [jsx("span", {
            ref: this.primaryPlaceholderTextRef,
            children: e.join(", ")
          }), i.length > 0 && jsxs(Fragment, {
            children: [jsx("span", {
              className: yL,
              children: "|"
            }, "divider"), jsx("span", {
              children: renderI18nText("fullscreen_actions.plugin_parameters.optional_optional_names", {
                optionalNames: i.join(", ")
              })
            }, "optionalParams")]
          })]
        });
      }
    }
  }
  render() {
    let e = this.getCurrentParameter();
    let t = e?.description;
    let i = this.placeholderElement();
    let n = "final" === this.state.activeParameterIndex ? ed : Kf;
    let a = {
      minWidth: this.state.placeholderWidth ? `${this.state.placeholderWidth}px` : void 0
    };
    let s = this.renderResults();
    return jsxs(H, {
      recordingKey: this.props.recordingKey || "",
      onKeyDown: this.onKeyDown,
      children: [jsxs("div", {
        className: $P,
        children: [jsx(_$$B, {
          svg: _$$A2,
          className: qc
        }), jsxs("div", {
          className: ON,
          ref: this.searchBarRef,
          children: [this.renderCurrentParameters(), jsxs("div", {
            className: n,
            children: [jsx("input", {
              ref: this.searchInputRef,
              className: t6,
              onChange: this.onSearchChange,
              value: this.state.searchQuery,
              maxLength: 150,
              spellCheck: !1,
              style: a
            }), jsx("div", {
              className: l4,
              children: jsxs("div", {
                className: qf,
                children: [jsx("span", {
                  className: CZ,
                  children: this.state.searchQuery
                }), i]
              })
            })]
          })]
        })]
      }), !!t && jsx("div", {
        className: u()({
          [WL]: !0,
          [$8]: !s
        }),
        children: t
      }), s]
    });
  }
}
K.displayName = "PluginParameterEntry";
export let $$H2 = connect(function (e) {
  let t = e.selectedView.editorType;
  return {
    openFile: e.openFile,
    publishedPlugins: e.publishedPlugins,
    publishedWidgets: e.publishedWidgets,
    allSavedPlugins: e.installedPluginVersions.plugins,
    localExtensions: e.localPlugins,
    org: e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null,
    editorType: t,
    userCanViewPlugins: canPerformAction(e),
    activeTextReviewPlugin: e.mirror.appModel.activeTextReviewPlugin,
    userCanViewWidgets: BE(e),
    userCanRunExtensions: canRunExtensions(e)
  };
}, function (e) {
  return {
    dispatch: e
  };
})(K);
export function $$z1(e) {
  return jsxs("div", {
    className: Io,
    children: [e.icon && jsx("span", {
      children: e.icon
    }), e.value && jsx("span", {
      children: e.value
    })]
  });
}
export function $$V0(e, t, i) {
  return e.filter(e => t[e.key] && e.key !== i).map(e => t[e.key] && t[e.key].name && jsx($$z1, {
    icon: Y(t[e.key], nW),
    value: t[e.key].name
  }, e.key));
}
class W extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.onClick = handleMouseEvent(this, "click", e => {
      if (!this.props.onClick) return SKIP_RECORDING;
      this.props.onClick(e);
    });
  }
  render() {
    let e = `${this.props.active ? ix : Ke}`;
    return jsxs("div", {
      className: e,
      onClick: this.onClick,
      onMouseMove: this.props.onMouseMove,
      onMouseEnter: this.props.onMouseEnter,
      children: [jsx("div", {
        className: EA,
        children: this.props.icon
      }), jsx("div", {
        className: iu,
        children: jsx("div", {
          className: D6,
          children: this.props.suggestion
        })
      })]
    });
  }
}
function Y(e, t) {
  let i = "";
  if (e.iconUrl) i = e.iconUrl;else if (e.icon && "string" == typeof e.icon) i = "data:image/svg+xml;base64," + encodeStringToBase64(e.icon);else {
    if (!e.icon || "string" == typeof e.icon) return;
    i = "data:application/octet-stream;base64," + encodeBase64(e.icon);
  }
  return jsx(J, {
    className: t,
    src: i
  });
}
W.displayName = "ParameterSuggestion";
class J extends RecordingPureComponent {
  render() {
    let e = new URL(this.props.src);
    return e.hostname === window.location.hostname ? (reportError(_$$e.EXTENSIBILITY, Error("same-origin URL blocked in UntrustedImage")), jsx(Fragment, {})) : ["https:", "http:", "data:", "blob:"].includes(e.protocol) ? jsx("img", {
      src: this.props.src,
      className: this.props.className,
      crossOrigin: "anonymous",
      alt: ""
    }) : (reportError(_$$e.EXTENSIBILITY, Error("Unexpected protocol blocked in UntrustedImage")), jsx(Fragment, {}));
  }
}
J.displayName = "UntrustedImage";
export const Hj = $$V0;
export const W$ = $$z1;
export const ry = $$H2;