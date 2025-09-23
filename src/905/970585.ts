import { Fullscreen, SchemaJoinStatus, Multiplayer, SyncError, FileLoadEvent } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { kiwiCodec } from "../905/5147";
import { customHistory } from "../905/612521";
import { isLocalDevOnCluster } from "../figma_app/169182";
import { parseQuery } from "../905/634134";
import { reportError, setTagGlobal } from "../905/11";
import { FlashActions } from "../905/573154";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { stopRecordingThunk, startRecordingThunk, handleAutosaveAndNavigationThunk, updateMultiplayerStateThunk } from "../figma_app/91703";
import { loadingStatePutSuccess } from "../figma_app/714946";
import { hideModal, showModalHandler } from "../905/156213";
import { E as _$$E } from "../905/344656";
import { VERSION_HISTORY_SET_DOC_HAS_CHANGED } from "../905/784363";
import { b2 } from "../figma_app/622574";
import { setupFlushTimer, setupConnectionStateHandler } from "../figma_app/582924";
import { isLoading } from "../905/18797";
import { TabState } from "../figma_app/915202";
import { l as _$$l } from "../905/26554";
import { $5 } from "../figma_app/869006";
import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
import { desktopAPIInstance } from "../figma_app/876459";
import { ServiceCategories } from "../905/165054";
import { getSingletonSceneGraph } from "../905/700578";
import { XHR } from "../905/910117";
import { z as _$$z } from "../905/239603";
import { registerLegacyModal, registerModal } from "../905/102752";
import { ModalContainer } from "../figma_app/918700";
import { yl, DD, jE, v0 } from "../figma_app/639088";
import { ModalCloseButton } from "../905/17223";
import { ButtonSecondary } from "../figma_app/637027";
import { Be } from "../905/172516";
import { incrementReconnectCounter } from "../figma_app/314264";
import { filesByLibraryKeyAtom } from "../905/977779";
import { J as _$$J } from "../905/915227";
import { Yq } from "../figma_app/305244";
import { z4 } from "../905/37051";
import { handleSyncEvent } from "../905/412815";
import { DH } from "../905/327855";
import { fullscreenPerfManager } from "../905/125218";
import { getAutosaveState, FileProcessingStatus, finishAutosaveWait } from "../figma_app/139113";
import { getFullscreenViewFile } from "../figma_app/516028";
import { c3, Lt } from "../figma_app/440875";
import { usedComponentsPromise, findLibraryNameForAsset } from "../figma_app/646357";
class M {
  static attemptToParseFrom(e) {
    let t = _$$z.object({
      url: _$$z.string(),
      type: _$$z.enum(["example-file", "real-file"])
    });
    try {
      let i = t.parse(JSON.parse(e));
      return new M(i.url, i.type);
    } catch {
      throw Error("Failed to parse TooManyConnectionsPayload");
    }
  }
  constructor(e, t) {
    this.url = e;
    this.type = t;
  }
}
async function j(e, t) {
  let i;
  let r = !0;
  try {
    let i = M.attemptToParseFrom(e);
    let r = await XHR.crossOriginGet(i.url, null, {
      responseType: "arraybuffer"
    }).then(({
      data: e
    }) => e);
    if (!r) throw Error("Empty file buffer");
    if (!Fullscreen.loadFigFileForFallback(r)) throw Error("Failed to load file buffer");
    await getSingletonSceneGraph().setCurrentPageFromNodeAsync(t);
  } catch (e) {
    i = JSON.stringify(e);
    r = !1;
    reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, Error("Failed to load file buffer for too-many-connections fallback"), {
      extra: {
        error: i
      }
    });
  } finally {
    analyticsEventManager.trackDefinedEvent("scenegraph_and_sync.too_many_connections_fallback", {
      success: r,
      error: i
    });
  }
}
let G = "multiplayer-connection-error-modal";
let z = "multiplayer-too-many-connections";
function H(e) {
  let t = useSelector(e => e.mirror.appModel.multiplayerSessionState === SchemaJoinStatus.JOINED);
  useEffect(() => {
    t && e(hideModal());
  }, [e, t]);
}
function W(e) {
  let t = e.modalShown.data;
  H(e.dispatch);
  return jsxs(ModalContainer, {
    size: "small",
    className: yl,
    ...e,
    children: [jsx("div", {
      className: DD,
      children: t.title
    }), jsx("div", {
      className: jE,
      children: t.message
    }), jsx("div", {
      className: v0,
      children: jsxs(Button, {
        onClick: () => {
          e.dispatch(hideModal());
        },
        children: [" ", renderI18nText("multiplayer_connection_error.dismiss_button"), " "]
      })
    })]
  });
}
function K(e) {
  let t = async () => {
    let t = e.selectedView;
    if ("fullscreen" === t.view) {
      let n = i.nodeId;
      if (isValidSessionLocalID(parseSessionLocalID(t.nodeId)) && (n = t.nodeId), getFeatureFlags()?.max_connection_load_fallback) {
        e.dispatch(hideModal());
        await j(i.signalPayload, n);
      } else {
        let e = `/file/${t.fileKey}/?viewer=1&node-id=${n}`;
        customHistory.redirect(e);
      }
    }
  };
  let i = e.modalShown.data;
  H(e.dispatch);
  return jsxs(ModalContainer, {
    size: "small",
    className: yl,
    ...e,
    children: [jsx("div", {
      className: DD,
      children: renderI18nText("multiplayer_connection_error.too_many_connections.title")
    }), jsx("div", {
      className: jE,
      children: renderI18nText("multiplayer_connection_error.too_many_connections.content")
    }), !desktopAPIInstance && jsx("div", {
      className: v0,
      children: jsx(Button, {
        onClick: t,
        children: renderI18nText("multiplayer_connection_error.too_many_connections.view_only_button")
      })
    })]
  });
}
registerLegacyModal(G, e => jsx(W, {
  ...e
}));
registerLegacyModal(z, e => jsx(K, {
  ...e
}));
let Z = registerModal(function () {
  let e = useDispatch();
  let t = jsx("a", {
    className: Be,
    href: "https://help.figma.com/hc/articles/1500006775761",
    target: "_blank",
    children: renderI18nText("multiplayer_limit.help_center")
  });
  return jsxs(ModalContainer, {
    size: "small",
    title: getI18nString("multiplayer_limit.editor_limit_modal_title.seat_rename"),
    children: [jsx(ModalCloseButton, {
      dispatch: e
    }), jsxs("div", {
      className: jE,
      children: [jsx("p", {
        children: renderI18nText("multiplayer_limit.editor_limit_modal_content.seat_rename")
      }), jsx("br", {}), jsx("p", {
        children: renderI18nText("multiplayer_limit.more_info", {
          moreInfoLink: t
        })
      }), jsx("div", {
        className: v0,
        children: jsx(ButtonSecondary, {
          onClick: () => {
            e(hideModal());
          },
          children: renderI18nText("multiplayer_limit.done_button")
        })
      })]
    })]
  });
}, "MultiplayerEditorLimitModal");
let X = registerModal(function () {
  let e = useDispatch();
  let t = jsx("a", {
    className: Be,
    href: "https://help.figma.com/hc/articles/1500006775761",
    target: "_blank",
    children: renderI18nText("multiplayer_limit.help_center")
  });
  return jsxs(ModalContainer, {
    size: "small",
    title: getI18nString("multiplayer_limit.cursor_limit_modal_title"),
    children: [jsx(ModalCloseButton, {
      dispatch: e
    }), jsxs("div", {
      className: jE,
      children: [jsx("p", {
        children: renderI18nText("multiplayer_limit.cursor_limit_modal_content")
      }), jsx("br", {}), jsx("p", {
        children: renderI18nText("multiplayer_limit.more_info", {
          moreInfoLink: t
        })
      })]
    }), jsx("div", {
      className: v0,
      children: jsx(ButtonSecondary, {
        onClick: () => {
          e(hideModal());
        },
        children: renderI18nText("multiplayer_limit.done_button")
      })
    })]
  });
}, "MultiplayerCursorLimitModal");
export let $$ec1 = createOptimistThunk(e => {
  let t = parseQuery(customHistory.location.search).flash;
  t && e.dispatch(FlashActions.flash(t));
});
export class $$eu0 {
  constructor(e) {
    this.store = e;
    this.hasShownMultiplayerDecodeError = !1;
    this.dispatch = () => {};
    this.hasUnsavedChanges = () => {
      let e = this.store.getState();
      return !!(e.saveStatus && e.saveStatus.hasUnsavedChanges);
    };
    this.dispatch = e.dispatch;
  }
  reconnectingStarted() {
    this.dispatch(stopRecordingThunk());
  }
  reconnectingSucceeded() {
    getFeatureFlags()?.fullscreen_send_client_rendered_message ? Multiplayer.sendClientRendered(fullscreenPerfManager.getClientRenderedMetadata()) : Multiplayer.sendSignal("client-rendered", "");
    this.dispatch(startRecordingThunk());
    isLoading(this.store.getState().loadingState, $5) && this.dispatch(loadingStatePutSuccess({
      key: $5
    }));
  }
  updateSaveStatus(e, t, i, r) {
    let a = new TabState(r, {
      hasAutosaveChanges: e,
      hasMultiplayerChanges: t
    }, i);
    this.hasUnsavedChanges() && !this.store.getState().versionHistory.docHasChanged && this.dispatch(VERSION_HISTORY_SET_DOC_HAS_CHANGED({
      status: !0
    }));
    let s = this.store.getState().saveStatus;
    s && a.equals(s) || (this.dispatch(_$$E(a)), handleSyncEvent(a));
    let o = getAutosaveState();
    if (o && o.status === FileProcessingStatus.WAITING && !e && !t && i === SyncError.NONE) {
      finishAutosaveWait(!1);
      setTimeout(() => this.dispatch(handleAutosaveAndNavigationThunk()));
      return;
    }
  }
  updateMultiplayerState(e) {
    this.dispatch(updateMultiplayerStateThunk(e));
  }
  restartPresentation(e) {
    Multiplayer.startPresenting();
    trackEventAnalytics("Spotlight Restarted After Disconnect", {
      timeElapsedSeconds: e
    });
  }
  showPresentationStoppedVisualBell(e) {
    this.dispatch(c3({
      presenterSessionID: e
    }));
  }
  cancelPresentationStoppedVisualBell() {
    this.dispatch(Lt());
  }
  setBackgroundFlushInterval(e) {
    setupFlushTimer(e);
  }
  startMonitorInterval() {
    setupConnectionStateHandler();
  }
  handleMultiplayerSignal(e, t, i) {
    if ("force-refresh" === e) customHistory.reload("Multiplayer got force-refresh signal");else if ("too-many-connections" === e) {
      if (this.hasUnsavedChanges()) {
        let e = getI18nString("unsaved_changes.syncing.changes_cannot_be_saved");
        let t = getI18nString("unsaved_changes.syncing.too_many_people_in_file");
        this.dispatch(showModalHandler({
          type: G,
          data: {
            message: t,
            title: e
          }
        }));
      } else this.dispatch(showModalHandler({
        type: z,
        data: {
          nodeId: i,
          signalPayload: t
        }
      }));
    } else if ("message-decode-failure" === e) this.hasShownMultiplayerDecodeError || (this.hasShownMultiplayerDecodeError = !0, this.dispatch(VisualBellActions.enqueue({
      message: getI18nString("unsaved_changes.syncing.experiencing_server_issues")
    })));else if ("invalid-permissions" === e) {
      let e;
      let t;
      this.hasUnsavedChanges() ? (t = getI18nString("unsaved_changes.syncing.changes_cannot_be_saved"), e = getI18nString("unsaved_changes.syncing.unsaved_revoked_access")) : (t = getI18nString("unsaved_changes.syncing.access_revoked"), e = getI18nString("unsaved_changes.syncing.someone_revoked_access_to_the_file_you_had_open_ask_the_owner_for_access_to_open_it_again"), this.dispatch(handleAutosaveAndNavigationThunk({
        closeDesktopTabWithMessage: e
      })));
      trackEventAnalytics("Context Viewed", {
        name: "multiplayer-revoked-access-modal"
      }, {
        forwardToDatadog: !0
      });
      this.dispatch(showModalHandler({
        type: G,
        data: {
          message: e,
          title: t
        }
      }));
    } else if ("not-logged-in" === e) {
      let e;
      let t;
      this.hasUnsavedChanges() ? (t = getI18nString("unsaved_changes.syncing.changes_cannot_be_saved"), e = getI18nString("unsaved_changes.syncing.unsaved_not_logged_in")) : (this.dispatch(handleAutosaveAndNavigationThunk()), t = getI18nString("unsaved_changes.syncing.logged_out"), e = getI18nString("unsaved_changes.syncing.you_have_been_logged_out_of_figma"));
      this.dispatch(showModalHandler({
        type: G,
        data: {
          message: e,
          title: t
        }
      }));
    } else if ("client-too-old" === e) {
      if (this.hasUnsavedChanges()) {
        let e = getI18nString("unsaved_changes.syncing.changes_cannot_be_saved");
        let t = getI18nString("unsaved_changes.syncing.app_out_of_date");
        this.dispatch(showModalHandler({
          type: G,
          data: {
            message: t,
            title: e
          }
        }));
      } else {
        this.dispatch(FlashActions.flash(getI18nString("unsaved_changes.syncing.updating_the_app")));
        setTimeout(() => {
          let e = location.href;
          e += /\?/.test(e) ? "&" : "?";
          e += "flash=" + encodeURIComponent(getI18nString("unsaved_changes.syncing.figma_was_automatically_updated_to_the_latest_version"));
          location.assign(e);
        }, 50);
      }
    } else if ("ip-allowlist" === e) {
      let e = `/ip_account_restriction?reason=ip_allowlist&redirect_uri=${encodeURIComponent(window.location.href)}`;
      location.assign(e);
    } else if ("network-access-restriction" === e) {
      let e = `/ip_account_restriction?reason=network_access_restriction&redirect_uri=${encodeURIComponent(window.location.href)}`;
      location.assign(e);
    } else "schema-validation-failure" === e && this.dispatch(FlashActions.flash(getI18nString("unsaved_changes.syncing.we_re_experiencing_issues_opening_this_file_please_try_again_later")));
  }
  socketBufferedAmount() {
    return Yq();
  }
  async showRestoreComponentDialog(e) {
    let [t] = await Promise.all([getFullscreenViewFile(this.store), usedComponentsPromise]);
    let i = this.store.getState();
    let n = atomStoreManager.get(filesByLibraryKeyAtom);
    if (t) {
      let r = findLibraryNameForAsset(e, i.library.movedLibraryItems.local, i.library.publishedByLibraryKey.components, n) || void 0;
      t.canEdit ? this.store.dispatch(showModalHandler({
        type: _$$l,
        data: {
          nodeId: e,
          movedToFile: r
        }
      })) : this.store.dispatch(VisualBellActions.enqueue({
        message: r ? getI18nString("unsaved_changes.syncing.the_main_component_has_been_moved_to_moved_to_file", {
          movedToFile: r
        }) : getI18nString("unsaved_changes.syncing.the_main_component_has_been_deleted")
      }));
    }
  }
  showComponentRemovedDialog() {
    this.store.dispatch(VisualBellActions.enqueue({
      message: getI18nString("design_systems.instance_panel.component_removed")
    }));
  }
  buildMultiplayerUrl(e, t, i, r, a, s, o, l, c, u, p) {
    if (!e) throw Error("buildMultiplayerUrl: fileKey must be defined");
    let m = this.store.getState().selectedView;
    let h = "fullscreen" === m.view ? DH(m.editorType) : void 0;
    l === FileLoadEvent.RECONNECT && incrementReconnectCounter();
    let g = new URL(mpGlobal.url({
      fileKey: e,
      role: "editor",
      nodeIds: a,
      initialBgColor: o,
      suppressDecodeErrors: isLocalDevOnCluster(),
      tagForLogging: h,
      forceViewOnly: z4.getIsExtension()
    }));
    t && g.searchParams.append("reconnect-key", t);
    null !== i && g.searchParams.append("reconnect-sequence-number", String(i));
    r && g.searchParams.append("testMode", r);
    s && g.searchParams.append("initialFileVersion", `${s}`);
    c && g.searchParams.append("force-upgrade", "1");
    u && g.searchParams.append("previousLoadMode", `${u}`);
    null !== p && g.searchParams.set("incremental-loading-validation", p ? "1" : "0");
    return g.toString();
  }
  notifyCursorHidden() {
    this.store.dispatch(VisualBellActions.enqueue({
      message: getI18nString("unsaved_changes.syncing.your_cursor_has_been_hidden_from_others_users"),
      button: {
        text: getI18nString("unsaved_changes.syncing.learn_more"),
        action: () => {
          this.store.dispatch(showModalHandler({
            type: X
          }));
        }
      },
      onDismiss: () => {}
    }));
  }
  isWindowActive() {
    return !document.hidden;
  }
  notifyCursorUnhiddenFromObserver() {
    this.store.dispatch(VisualBellActions.enqueue({
      message: getI18nString("unsaved_changes.syncing.your_cursor_is_now_visible_to_others_as_someone_is_observing_you")
    }));
  }
  notifyCursorUnhiddenFromConnectionCount() {
    this.store.dispatch(VisualBellActions.enqueue({
      message: getI18nString("unsaved_changes.syncing.your_cursor_is_now_visible_to_others_as_users_have_left_the_file")
    }));
  }
  notifyEditorConvertedToViewer() {
    this.store.dispatch(VisualBellActions.enqueue({
      message: getI18nString("unsaved_changes.syncing.you_have_been_converted_to_a_viewer_with_a_hidden_cursor"),
      button: {
        text: getI18nString("unsaved_changes.syncing.learn_more"),
        action: () => {
          this.store.dispatch(showModalHandler({
            type: Z
          }));
        }
      },
      onDismiss: () => {}
    }));
  }
  prettyPrintMessage(e) {
    console.log("[MultiplayerDebugging]", kiwiCodec.decodeMessage(e));
  }
  reconnectSequenceNumberChanged(e) {
    setTagGlobal("reconnect_sequence_number", e);
    null === e || (!1 === atomStoreManager.get(b2) && atomStoreManager.set(b2, !0), atomStoreManager.set(_$$J, e), this.store.getState().versionHistory.docHasChanged || this.dispatch(VERSION_HISTORY_SET_DOC_HAS_CHANGED({
      status: !0
    })));
  }
}
export const L = $$eu0;
export const S = $$ec1;
