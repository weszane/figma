import { glU, kul, h3O, ccR, J5D } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { az, sx } from "../905/449184";
import { w as _$$w } from "../905/5147";
import { Ay } from "../905/612521";
import { isLocalDevOnCluster } from "../figma_app/169182";
import { parseQuery } from "../905/634134";
import { $D, kF } from "../905/11";
import { s as _$$s } from "../905/573154";
import { tx, t as _$$t } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { nF } from "../905/350402";
import { nA, lp, eH, J4 } from "../figma_app/91703";
import { x2 } from "../figma_app/714946";
import { Ce, to } from "../905/156213";
import { E as _$$E } from "../905/344656";
import { A9 } from "../905/784363";
import { b2 } from "../figma_app/622574";
import { Cd, AW } from "../figma_app/582924";
import { VP } from "../905/18797";
import { av } from "../figma_app/915202";
import { l as _$$l } from "../905/26554";
import { $5 } from "../figma_app/869006";
import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { $n } from "../905/521428";
import { fn, sH } from "../905/871411";
import { eD } from "../figma_app/876459";
import { ServiceCategories as _$$e } from "../905/165054";
import { getSingletonSceneGraph } from "../905/700578";
import { XHR } from "../905/910117";
import { z as _$$z } from "../905/239603";
import { qK, Ju } from "../905/102752";
import { d_ } from "../figma_app/918700";
import { yl, DD, jE, v0 } from "../figma_app/639088";
import { s_ } from "../905/17223";
import { nR } from "../figma_app/637027";
import { Be } from "../905/172516";
import { Hb } from "../figma_app/314264";
import { qp } from "../905/977779";
import { J as _$$J } from "../905/915227";
import { Yq } from "../figma_app/305244";
import { z4 } from "../905/37051";
import { g as _$$g } from "../905/412815";
import { DH } from "../905/327855";
import { xK } from "../905/125218";
import { Js, QY, pi } from "../figma_app/139113";
import { Dz } from "../figma_app/516028";
import { c3, Lt } from "../figma_app/440875";
import { QO, VO } from "../figma_app/646357";
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
    if (!glU.loadFigFileForFallback(r)) throw Error("Failed to load file buffer");
    await getSingletonSceneGraph().setCurrentPageFromNodeAsync(t);
  } catch (e) {
    i = JSON.stringify(e);
    r = !1;
    $D(_$$e.SCENEGRAPH_AND_SYNC, Error("Failed to load file buffer for too-many-connections fallback"), {
      extra: {
        error: i
      }
    });
  } finally {
    az.trackDefinedEvent("scenegraph_and_sync.too_many_connections_fallback", {
      success: r,
      error: i
    });
  }
}
let G = "multiplayer-connection-error-modal";
let z = "multiplayer-too-many-connections";
function H(e) {
  let t = useSelector(e => e.mirror.appModel.multiplayerSessionState === kul.JOINED);
  useEffect(() => {
    t && e(Ce());
  }, [e, t]);
}
function W(e) {
  let t = e.modalShown.data;
  H(e.dispatch);
  return jsxs(d_, {
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
      children: jsxs($n, {
        onClick: () => {
          e.dispatch(Ce());
        },
        children: [" ", tx("multiplayer_connection_error.dismiss_button"), " "]
      })
    })]
  });
}
function K(e) {
  let t = async () => {
    let t = e.selectedView;
    if ("fullscreen" === t.view) {
      let n = i.nodeId;
      if (fn(sH(t.nodeId)) && (n = t.nodeId), getFeatureFlags()?.max_connection_load_fallback) {
        e.dispatch(Ce());
        await j(i.signalPayload, n);
      } else {
        let e = `/file/${t.fileKey}/?viewer=1&node-id=${n}`;
        Ay.redirect(e);
      }
    }
  };
  let i = e.modalShown.data;
  H(e.dispatch);
  return jsxs(d_, {
    size: "small",
    className: yl,
    ...e,
    children: [jsx("div", {
      className: DD,
      children: tx("multiplayer_connection_error.too_many_connections.title")
    }), jsx("div", {
      className: jE,
      children: tx("multiplayer_connection_error.too_many_connections.content")
    }), !eD && jsx("div", {
      className: v0,
      children: jsx($n, {
        onClick: t,
        children: tx("multiplayer_connection_error.too_many_connections.view_only_button")
      })
    })]
  });
}
qK(G, e => jsx(W, {
  ...e
}));
qK(z, e => jsx(K, {
  ...e
}));
let Z = Ju(function () {
  let e = useDispatch();
  let t = jsx("a", {
    className: Be,
    href: "https://help.figma.com/hc/articles/1500006775761",
    target: "_blank",
    children: tx("multiplayer_limit.help_center")
  });
  return jsxs(d_, {
    size: "small",
    title: _$$t("multiplayer_limit.editor_limit_modal_title.seat_rename"),
    children: [jsx(s_, {
      dispatch: e
    }), jsxs("div", {
      className: jE,
      children: [jsx("p", {
        children: tx("multiplayer_limit.editor_limit_modal_content.seat_rename")
      }), jsx("br", {}), jsx("p", {
        children: tx("multiplayer_limit.more_info", {
          moreInfoLink: t
        })
      }), jsx("div", {
        className: v0,
        children: jsx(nR, {
          onClick: () => {
            e(Ce());
          },
          children: tx("multiplayer_limit.done_button")
        })
      })]
    })]
  });
}, "MultiplayerEditorLimitModal");
let X = Ju(function () {
  let e = useDispatch();
  let t = jsx("a", {
    className: Be,
    href: "https://help.figma.com/hc/articles/1500006775761",
    target: "_blank",
    children: tx("multiplayer_limit.help_center")
  });
  return jsxs(d_, {
    size: "small",
    title: _$$t("multiplayer_limit.cursor_limit_modal_title"),
    children: [jsx(s_, {
      dispatch: e
    }), jsxs("div", {
      className: jE,
      children: [jsx("p", {
        children: tx("multiplayer_limit.cursor_limit_modal_content")
      }), jsx("br", {}), jsx("p", {
        children: tx("multiplayer_limit.more_info", {
          moreInfoLink: t
        })
      })]
    }), jsx("div", {
      className: v0,
      children: jsx(nR, {
        onClick: () => {
          e(Ce());
        },
        children: tx("multiplayer_limit.done_button")
      })
    })]
  });
}, "MultiplayerCursorLimitModal");
export let $$ec1 = nF(e => {
  let t = parseQuery(Ay.location.search).flash;
  t && e.dispatch(_$$s.flash(t));
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
    this.dispatch(nA());
  }
  reconnectingSucceeded() {
    getFeatureFlags()?.fullscreen_send_client_rendered_message ? h3O.sendClientRendered(xK.getClientRenderedMetadata()) : h3O.sendSignal("client-rendered", "");
    this.dispatch(lp());
    VP(this.store.getState().loadingState, $5) && this.dispatch(x2({
      key: $5
    }));
  }
  updateSaveStatus(e, t, i, r) {
    let a = new av(r, {
      hasAutosaveChanges: e,
      hasMultiplayerChanges: t
    }, i);
    this.hasUnsavedChanges() && !this.store.getState().versionHistory.docHasChanged && this.dispatch(A9({
      status: !0
    }));
    let s = this.store.getState().saveStatus;
    s && a.equals(s) || (this.dispatch(_$$E(a)), _$$g(a));
    let o = Js();
    if (o && o.status === QY.WAITING && !e && !t && i === ccR.NONE) {
      pi(!1);
      setTimeout(() => this.dispatch(eH()));
      return;
    }
  }
  updateMultiplayerState(e) {
    this.dispatch(J4(e));
  }
  restartPresentation(e) {
    h3O.startPresenting();
    sx("Spotlight Restarted After Disconnect", {
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
    Cd(e);
  }
  startMonitorInterval() {
    AW();
  }
  handleMultiplayerSignal(e, t, i) {
    if ("force-refresh" === e) Ay.reload("Multiplayer got force-refresh signal");else if ("too-many-connections" === e) {
      if (this.hasUnsavedChanges()) {
        let e = _$$t("unsaved_changes.syncing.changes_cannot_be_saved");
        let t = _$$t("unsaved_changes.syncing.too_many_people_in_file");
        this.dispatch(to({
          type: G,
          data: {
            message: t,
            title: e
          }
        }));
      } else this.dispatch(to({
        type: z,
        data: {
          nodeId: i,
          signalPayload: t
        }
      }));
    } else if ("message-decode-failure" === e) this.hasShownMultiplayerDecodeError || (this.hasShownMultiplayerDecodeError = !0, this.dispatch(_$$F.enqueue({
      message: _$$t("unsaved_changes.syncing.experiencing_server_issues")
    })));else if ("invalid-permissions" === e) {
      let e;
      let t;
      this.hasUnsavedChanges() ? (t = _$$t("unsaved_changes.syncing.changes_cannot_be_saved"), e = _$$t("unsaved_changes.syncing.unsaved_revoked_access")) : (t = _$$t("unsaved_changes.syncing.access_revoked"), e = _$$t("unsaved_changes.syncing.someone_revoked_access_to_the_file_you_had_open_ask_the_owner_for_access_to_open_it_again"), this.dispatch(eH({
        closeDesktopTabWithMessage: e
      })));
      sx("Context Viewed", {
        name: "multiplayer-revoked-access-modal"
      }, {
        forwardToDatadog: !0
      });
      this.dispatch(to({
        type: G,
        data: {
          message: e,
          title: t
        }
      }));
    } else if ("not-logged-in" === e) {
      let e;
      let t;
      this.hasUnsavedChanges() ? (t = _$$t("unsaved_changes.syncing.changes_cannot_be_saved"), e = _$$t("unsaved_changes.syncing.unsaved_not_logged_in")) : (this.dispatch(eH()), t = _$$t("unsaved_changes.syncing.logged_out"), e = _$$t("unsaved_changes.syncing.you_have_been_logged_out_of_figma"));
      this.dispatch(to({
        type: G,
        data: {
          message: e,
          title: t
        }
      }));
    } else if ("client-too-old" === e) {
      if (this.hasUnsavedChanges()) {
        let e = _$$t("unsaved_changes.syncing.changes_cannot_be_saved");
        let t = _$$t("unsaved_changes.syncing.app_out_of_date");
        this.dispatch(to({
          type: G,
          data: {
            message: t,
            title: e
          }
        }));
      } else {
        this.dispatch(_$$s.flash(_$$t("unsaved_changes.syncing.updating_the_app")));
        setTimeout(() => {
          let e = location.href;
          e += /\?/.test(e) ? "&" : "?";
          e += "flash=" + encodeURIComponent(_$$t("unsaved_changes.syncing.figma_was_automatically_updated_to_the_latest_version"));
          location.assign(e);
        }, 50);
      }
    } else if ("ip-allowlist" === e) {
      let e = `/ip_account_restriction?reason=ip_allowlist&redirect_uri=${encodeURIComponent(window.location.href)}`;
      location.assign(e);
    } else if ("network-access-restriction" === e) {
      let e = `/ip_account_restriction?reason=network_access_restriction&redirect_uri=${encodeURIComponent(window.location.href)}`;
      location.assign(e);
    } else "schema-validation-failure" === e && this.dispatch(_$$s.flash(_$$t("unsaved_changes.syncing.we_re_experiencing_issues_opening_this_file_please_try_again_later")));
  }
  socketBufferedAmount() {
    return Yq();
  }
  async showRestoreComponentDialog(e) {
    let [t] = await Promise.all([Dz(this.store), QO]);
    let i = this.store.getState();
    let n = zl.get(qp);
    if (t) {
      let r = VO(e, i.library.movedLibraryItems.local, i.library.publishedByLibraryKey.components, n) || void 0;
      t.canEdit ? this.store.dispatch(to({
        type: _$$l,
        data: {
          nodeId: e,
          movedToFile: r
        }
      })) : this.store.dispatch(_$$F.enqueue({
        message: r ? _$$t("unsaved_changes.syncing.the_main_component_has_been_moved_to_moved_to_file", {
          movedToFile: r
        }) : _$$t("unsaved_changes.syncing.the_main_component_has_been_deleted")
      }));
    }
  }
  showComponentRemovedDialog() {
    this.store.dispatch(_$$F.enqueue({
      message: _$$t("design_systems.instance_panel.component_removed")
    }));
  }
  buildMultiplayerUrl(e, t, i, r, a, s, o, l, c, u, p) {
    if (!e) throw Error("buildMultiplayerUrl: fileKey must be defined");
    let m = this.store.getState().selectedView;
    let h = "fullscreen" === m.view ? DH(m.editorType) : void 0;
    l === J5D.RECONNECT && Hb();
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
    this.store.dispatch(_$$F.enqueue({
      message: _$$t("unsaved_changes.syncing.your_cursor_has_been_hidden_from_others_users"),
      button: {
        text: _$$t("unsaved_changes.syncing.learn_more"),
        action: () => {
          this.store.dispatch(to({
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
    this.store.dispatch(_$$F.enqueue({
      message: _$$t("unsaved_changes.syncing.your_cursor_is_now_visible_to_others_as_someone_is_observing_you")
    }));
  }
  notifyCursorUnhiddenFromConnectionCount() {
    this.store.dispatch(_$$F.enqueue({
      message: _$$t("unsaved_changes.syncing.your_cursor_is_now_visible_to_others_as_users_have_left_the_file")
    }));
  }
  notifyEditorConvertedToViewer() {
    this.store.dispatch(_$$F.enqueue({
      message: _$$t("unsaved_changes.syncing.you_have_been_converted_to_a_viewer_with_a_hidden_cursor"),
      button: {
        text: _$$t("unsaved_changes.syncing.learn_more"),
        action: () => {
          this.store.dispatch(to({
            type: Z
          }));
        }
      },
      onDismiss: () => {}
    }));
  }
  prettyPrintMessage(e) {
    console.log("[MultiplayerDebugging]", _$$w.decodeMessage(e));
  }
  reconnectSequenceNumberChanged(e) {
    kF("reconnect_sequence_number", e);
    null === e || (!1 === zl.get(b2) && zl.set(b2, !0), zl.set(_$$J, e), this.store.getState().versionHistory.docHasChanged || this.dispatch(A9({
      status: !0
    })));
  }
}
export const L = $$eu0;
export const S = $$ec1;