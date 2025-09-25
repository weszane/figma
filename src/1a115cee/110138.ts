import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterNotNullish } from "../figma_app/656233";
import { debounce } from "../905/915765";
import { ServiceCategories } from "../905/165054";
import { Button } from "../905/521428";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { useModalManager } from "../905/437088";
import x from "../vendor/656470";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { reportError } from "../905/11";
import { logInfo, logError } from "../905/714362";
import { h1 } from "../905/986103";
import { SvgComponent } from "../905/714743";
import { NU } from "../figma_app/204891";
import { A as _$$A } from "../905/222027";
import { SizeOption } from "../905/171275";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { NA } from "../905/738636";
import { hideModal, popModalStack } from "../905/156213";
import { useAutosaveFilesWithPermissions, deleteAutosaveDataForSessions, getUnsyncedAutosaveFilesForUsers, getAutosaveExpirationMs } from "../figma_app/840917";
import { createPrefixKeyRange, createSessionNodeKeyRange } from "../905/25189";
import { isAutosaveFile } from "../905/327522";
import { ipcStorageHandler, restoredAutosaveKey } from "../905/725909";
import { selectCurrentUser, getUserId } from "../905/372672";
import { getDesignFileUrlConditional } from "../905/612685";
import { fileEntityDataMapper } from "../905/943101";
import { NotificationType } from "../905/18613";
import { TabOpenBehavior } from "../figma_app/915202";
import { fileApiHandler } from "../figma_app/787550";
import { O2, ho, Ay as _$$Ay, DA, hL, ns, dd, eX, Vz, MV, DD, Jm, fH, QW, IC } from "../1a115cee/533320";
import { A as _$$A2 } from "../svg/619883";
var v = x;
function R(e) {
  return e.user ? jsx("div", {
    className: O2,
    children: jsx("p", {
      children: e.user.community_profile_handle || e.user.email
    })
  }) : null;
}
async function G(e, a) {
  let s = !1;
  let l = null;
  try {
    let {
      data
    } = await fileApiHandler.getFiles({
      includePerms: !0,
      fileKey: a.fileKey,
      args: {
        headers: {
          "X-Figma-User-ID": e
        }
      }
    });
    (l = data.meta) && (l.deleted_at || !l.can_edit_canvas) && (s = !0);
  } catch (e) {
    404 === e.status ? s = !0 : logInfo("Autosave", "Failed to retrieve information about autosave file");
  }
  return {
    userID: e,
    shouldDeleteFile: s,
    unsyncedFile: a,
    figFile: l
  };
}
let P = (e, a) => debounce(() => {
  let s = new URL(getDesignFileUrlConditional(fileEntityDataMapper.toLiveGraph(e), !0));
  s.searchParams.append("fuid", a);
  customHistory.redirect(s.toString(), "_blank");
});
let K = (e, a) => debounce(() => e(NA({
  file: a,
  openNewFileIn: TabOpenBehavior.NEW_TAB,
  source: NotificationType.AUTOSAVE_MODAL
})));
let Q = SizeOption.SMALL;
function W(e, a, s) {
  return isAutosaveFile(a) ? {
    fileName: a.file.name,
    onClick: P(a.file, s.id),
    thumbnail: jsx(NU, {
      file: a.file,
      size: Q,
      borderRadius: 4
    })
  } : {
    fileName: a.name,
    onClick: K(e, a),
    thumbnail: jsx(_$$A, {
      size: Q,
      borderRadius: 4
    })
  };
}
function Y(e) {
  let {
    fileName,
    onClick,
    thumbnail
  } = W(useDispatch(), e.fileState, e.user);
  return jsxs("div", {
    className: ho,
    children: [jsx("div", {
      className: cssBuilderInstance.hFull.$,
      children: thumbnail
    }), jsxs("div", {
      className: _$$Ay,
      children: [jsx("div", {
        className: DA,
        children: fileName
      }), jsx("div", {
        className: hL,
        children: renderI18nText("tile.file_tile.edited_time", {
          time: jsx(h1, {
            date: e.fileState.lastUpdatedAt
          })
        })
      })]
    }), jsx("div", {
      className: ns,
      children: jsx(Button, {
        variant: "secondary",
        onClick,
        children: renderI18nText("autosave.has_changes.open_to_sync")
      })
    })]
  }, e.fileState.fileKey);
}
function H(e) {
  return jsx("div", {
    className: dd,
    children: Object.keys(e.files).map(a => jsxs("div", {
      className: eX,
      children: [jsx(R, {
        user: e.users.filter(e => e?.id === a)[0]
      }), jsx("div", {
        children: Object.values(e.files[a]).map(s => jsx(Y, {
          fileState: s,
          user: e.users.filter(e => e?.id === a)[0]
        }, s.fileKey))
      })]
    }, a))
  });
}
function V({
  modalManager: e,
  files: a,
  nextGarbageCollectionTimestamp: s,
  users: t,
  includeDismissButton: i,
  onDone: o
}) {
  let r;
  let h = useDispatch();
  let x = o || (() => {
    h(hideModal());
  });
  let f = Z(s);
  let m = renderI18nText("autosave.has_changes.sync_offline_changes");
  let j = 1 === v()(Object.values(a)).length;
  let _ = null;
  let g = null;
  let p = null;
  let N = null;
  let b = null;
  if (j) {
    _ = v()(Object.values(a))[0];
    let e = Object.keys(a).filter(e => a[e].length > 0)[0];
    let s = W(h, _, g = t.filter(a => a?.id === e)[0]);
    p = s.fileName;
    N = s.onClick;
    b = s.thumbnail;
    r = jsxs(Fragment, {
      children: [jsx(R, {
        user: g
      }), jsxs("div", {
        className: Vz,
        children: [jsx("div", {
          className: cssBuilderInstance.hFull.$,
          children: b
        }), jsx("div", {
          className: MV,
          children: renderI18nText("autosave.has_changes.unsaved_changes_to_file", {
            fileName: jsx("span", {
              className: DD,
              children: p
            })
          })
        })]
      })]
    });
  } else r = jsxs(Fragment, {
    children: [jsx("div", {
      className: Jm,
      children: renderI18nText("autosave.has_changes.unsynced_changes_offline")
    }), jsx(H, {
      files: a,
      users: t
    })]
  });
  let k = f && jsxs("div", {
    className: fH,
    children: [jsx(SvgComponent, {
      svg: _$$A2,
      className: QW
    }), jsx("div", {
      className: IC,
      children: f
    })]
  });
  let L = i && jsx(Button, {
    variant: "secondary",
    onClick: x,
    children: renderI18nText("autosave.has_changes.dismiss.later")
  });
  let F = j && N && jsx(Button, {
    variant: "primary",
    onClick: N,
    children: renderI18nText("autosave.has_changes.open_to_sync")
  });
  return jsx(ModalRootComponent, {
    manager: e,
    width: "lg",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: m
        })
      }), jsx(DialogBody, {
        children: r
      }), (k || L || F) && jsxs(DialogFooter, {
        children: [k, (L || F) && jsxs(DialogActionStrip, {
          children: [L, F]
        })]
      })]
    })
  });
}
export function $$X1(e) {
  let a = useModalManager(e);
  let {
    unsyncedFiles,
    localUnsyncedFiles
  } = useAutosaveFilesWithPermissions();
  let i = useSelector(e => e.modalShown);
  let o = useSelector(e => e.autosave.nextGarbageCollectionTimestamp);
  let r = selectCurrentUser();
  let d = r?.id;
  return i && d && r ? jsx(V, {
    modalManager: a,
    files: {
      [d]: [...unsyncedFiles, ...localUnsyncedFiles]
    },
    nextGarbageCollectionTimestamp: o,
    users: [r],
    includeDismissButton: !0
  }) : null;
}
function z(e) {
  let a = useModalManager(e);
  let s = useDispatch();
  let [i, o] = useState(!1);
  let [r, x] = useState(!1);
  let v = async () => {
    try {
      for (let a of e.users) {
        let e = a?.id;
        e && (await deleteAutosaveDataForSessions(createPrefixKeyRange(e)));
      }
    } finally {
      x(!0);
    }
  };
  let m = () => {
    o(!0);
  };
  let j = 0 === Object.values(e.files).length;
  if (r || j && e.loaded) {
    let s = renderI18nText("autosave.logout.offline_changes");
    let t = r ? renderI18nText("autosave.logout.offline_changes_discarded") : renderI18nText("autosave.logout.offline_changes_synced");
    let n = jsx(Button, {
      variant: "secondary",
      onClick: e.onLogOut,
      children: renderI18nText("autosave.logout.log_out")
    });
    return jsx(ModalRootComponent, {
      width: "md",
      manager: a,
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: s
          })
        }), jsx(DialogBody, {
          children: t
        }), jsx(DialogFooter, {
          children: jsx(DialogActionStrip, {
            children: n
          })
        })]
      })
    });
  }
  if (i) return jsx(V, {
    ...e,
    modalManager: a,
    onDone: () => {
      o(!1);
    }
  });
  {
    let t;
    let n;
    let i;
    let o = renderI18nText("autosave.has_changes.sync_offline_changes");
    let r = desktopAPIInstance ? getI18nString("autosave.logout.log_out_text.desktop") : getI18nString("autosave.logout.log_out_text.web");
    desktopAPIInstance ? (t = jsx(Button, {
      variant: "destructiveSecondary",
      onClick: v,
      children: renderI18nText("autosave.logout.discard_and_logout")
    }), n = jsx(Button, {
      variant: "secondary",
      onClick: () => {
        s(popModalStack());
      },
      children: renderI18nText("autosave.logout.cancel")
    }), i = jsx(Button, {
      variant: "secondary",
      onClick: m,
      children: renderI18nText("autosave.logout.show_changes")
    })) : (t = jsx(Button, {
      variant: "destructiveSecondary",
      onClick: v,
      children: renderI18nText("autosave.logout.discard")
    }), n = jsx(Button, {
      variant: "secondary",
      onClick: e.onLogOut,
      children: renderI18nText("autosave.logout.log_out")
    }), i = jsx(Button, {
      variant: "primary",
      onClick: m,
      children: renderI18nText("autosave.logout.sync_changes")
    }));
    return jsx(ModalRootComponent, {
      manager: a,
      width: "lg",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: o
          })
        }), jsx(DialogBody, {
          children: r
        }), jsxs(DialogFooter, {
          children: [t, jsxs(DialogActionStrip, {
            children: [n, i]
          })]
        })]
      })
    });
  }
}
export function $$J0(e) {
  let {
    multiUserUnsyncedFiles,
    multiUserGarbageCollectionTimestamp,
    loaded,
    autosaveFilesToDelete
  } = function (e) {
    let a = useDispatch();
    let [s, l] = useState({
      multiUserGarbageCollectionTimestamp: 0,
      multiUserUnsyncedFiles: {},
      loaded: !1,
      autosaveFilesToDelete: []
    });
    useEffect(() => {
      let a = async () => {
        try {
          let a = await getUnsyncedAutosaveFilesForUsers(filterNotNullish(e.map(e => e?.id)));
          let s = {};
          let t = [];
          let n = [];
          for (let [e, l] of Object.entries(a)) {
            for (let a of l.unsyncedFiles) n.push(G(e, a));
            for (let a of l.newFiles) {
              e in s || (s[e] = []);
              s[e].push(a);
            }
          }
          for (let e of await Promise.all(n)) {
            let a = e.userID;
            e.shouldDeleteFile ? t.push({
              userID: a,
              fileKey: e.unsyncedFile.fileKey
            }) : e.figFile && (a in s || (s[a] = []), s[a].push({
              type: "autosave-file",
              fileKey: e.figFile.key,
              lastUpdatedAt: e.unsyncedFile.lastUpdatedAt,
              file: e.figFile
            }));
          }
          let o = Math.min(...Object.values(a).map(e => e.nextGarbageCollectionTimestamp));
          l({
            multiUserGarbageCollectionTimestamp: o,
            multiUserUnsyncedFiles: s,
            loaded: !0,
            autosaveFilesToDelete: t
          });
        } catch (e) {
          e instanceof Error ? (logError("Autosave", "Failed to call autosave callback", {
            name: e.name,
            message: e.message
          }), reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, e)) : reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, Error("Failed to call autosave callback"));
        }
      };
      ipcStorageHandler.register(restoredAutosaveKey, a);
      a();
      return function () {
        ipcStorageHandler.unregister(restoredAutosaveKey, a);
      };
    }, [a, e]);
    return s;
  }(e.users);
  return getUserId() ? jsx(z, {
    ...e,
    loaded,
    nextGarbageCollectionTimestamp: multiUserGarbageCollectionTimestamp,
    files: multiUserUnsyncedFiles,
    onLogOut: () => {
      for (let e of autosaveFilesToDelete) deleteAutosaveDataForSessions(createSessionNodeKeyRange(e.userID, e.fileKey)).catch(e => {
        reportError(ServiceCategories.UNOWNED, Error("Failed to delete autosave data for sessions"));
      });
      e.onLogOut();
    },
    users: e.users
  }) : null;
}
$$X1.displayName = "HasAutosaveChangesModal";
let Z = e => {
  let a = Math.floor((getAutosaveExpirationMs() - (Date.now() - e)) / 864e5);
  return a > 5 ? null : a < 1 ? renderI18nText("autosave.has_changes.expiry_text_shortly") : renderI18nText("autosave.has_changes.expiry_text_days", {
    days: a
  });
};
$$J0.displayName = "AutosaveLogOutModal";
export const AutosaveLogOutModal = $$J0;
export const HasAutosaveChangesModal = $$X1;