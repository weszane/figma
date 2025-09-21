import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { n as _$$n, G4 } from "../905/864644";
import { zj, Sk } from "../figma_app/448654";
import { subscribeMultipleAndAwaitAll } from "../905/553831";
import { tT } from "../905/723791";
import { reportError } from "../905/11";
import { hideModal, showModalHandler } from "../905/156213";
import { hT, YM } from "../905/561087";
import { nb } from "../figma_app/543100";
import { fileEntityDataMapper } from "../905/943101";
import { SiteMount, FileLastPublishedAt } from "../figma_app/43951";
import { liveStoreInstance } from "../905/713695";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { ConfirmationModal } from "../905/441305";
import { renderI18nText } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { registerModal } from "../905/102752";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BannerInsetModal } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { createOptimistThunk } from "../905/350402";
import { vv } from "../figma_app/435872";
import { an } from "../905/81009";
import { VK, YK } from "../905/880488";
let I = registerModal(function (e) {
  let {
    numFiles,
    firstFileName,
    showUnsyncedFileWarning,
    onConfirm,
    open,
    onClose
  } = e;
  let o = jsx(TextWithTruncation, {
    fontWeight: "semi-bold",
    children: firstFileName
  });
  let l = jsx(TextWithTruncation, {
    fontWeight: "semi-bold",
    children: renderI18nText("file_browser.confirm_file_delete_modal.num_files", {
      numFiles
    })
  });
  return jsx(ConfirmationModal, {
    width: "md",
    title: renderI18nText("file_browser.confirm_file_delete_forever_modal.title", {
      numFiles
    }),
    confirmText: renderI18nText("file_browser.confirm_file_delete_forever_modal.confirm_permanently_delete"),
    onConfirm: () => {
      onConfirm();
      onClose();
    },
    open,
    onClose,
    destructive: !0,
    children: jsx("div", {
      children: showUnsyncedFileWarning ? jsx(TextWithTruncation, {
        children: renderI18nText("file_browser.confirm_permanently_delete_file_modal.about_to_delete_offline", {
          numFiles,
          numFilesText: l,
          fileNameText: o
        })
      }) : jsx(TextWithTruncation, {
        children: renderI18nText("file_browser.confirm_permanently_delete_file_modal.about_to_delete_online", {
          numFiles,
          numFilesText: l,
          fileNameText: o
        })
      })
    })
  });
}, "CONFIRM_FILE_DELETE_FOREVER_MODAL");
var T = (e => (e.UNSYNCED_FILE = "unsynced_file", e.TEAM_TEMPLATE = "team_template", e.PUBLISHED_ASSETS = "published_assets", e.PUBLISHED_SITES = "published_sites", e))(T || {});
function k({
  warnings: e,
  numFiles: t,
  firstFileName: i
}) {
  let n = jsx(TextWithTruncation, {
    fontWeight: "semi-bold",
    children: i
  });
  let a = jsx(TextWithTruncation, {
    fontWeight: "semi-bold",
    children: renderI18nText("file_browser.confirm_file_delete_modal.num_files", {
      numFiles: t
    })
  });
  if (0 === e.length) return jsx(TextWithTruncation, {
    children: renderI18nText("file_browser.confirm_file_trash_modal.about_to_trash_no_warnings", {
      fileNameText: n,
      numFiles: t,
      numFilesText: a
    })
  });
  if (1 === t) {
    if ("published_assets" === e[0]) return getFeatureFlags().dse_library_deletion_warning ? jsxs(Fragment, {
      children: [jsx(BannerInsetModal, {
        variant: "danger",
        children: jsx(BannerMessage, {
          children: renderI18nText("file_browser.confirm_file_trash_modal.about_to_trash_library_banner_warning")
        })
      }), jsx(TextWithTruncation, {
        children: renderI18nText("file_browser.confirm_file_trash_modal.about_to_trash_library_warning_intro", {
          fileNameText: n
        })
      }), jsxs("ul", {
        className: "confirm_file_delete_modal--libraryDeletionBulletList--sMlkg confirm_file_delete_modal--bulletList--MzHlN",
        children: [jsx("li", {
          children: jsx(TextWithTruncation, {
            children: renderI18nText("file_browser.confirm_file_trash_modal.about_to_trash_library_warning_access_lost")
          })
        }), jsx("li", {
          children: jsx(TextWithTruncation, {
            children: renderI18nText("file_browser.confirm_file_trash_modal.about_to_trash_library_warning_updates_lost")
          })
        })]
      })]
    }) : jsx(TextWithTruncation, {
      children: renderI18nText("file_browser.confirm_file_trash_modal.about_to_trash_component_unpublish", {
        fileNameText: n
      })
    });
    if ("published_sites" === e[0]) return jsxs(Fragment, {
      children: [jsx(TextWithTruncation, {
        children: renderI18nText("file_browser.confirm_file_trash_modal.about_to_trash_file", {
          fileNameText: n
        })
      }), jsx(TextWithTruncation, {
        children: renderI18nText("file_browser.confirm_file_trash_modal.site_published_warning")
      })]
    });
    if ("team_template" === e[0]) return jsx(TextWithTruncation, {
      children: renderI18nText("file_browser.confirm_file_trash_modal.about_to_trash_team_template", {
        fileNameText: n
      })
    });
    if ("unsynced_file" === e[0]) return jsx(TextWithTruncation, {
      children: renderI18nText("file_browser.confirm_file_delete_forever_modal.about_to_delete_offline", {
        fileNameText: n,
        numFiles: t,
        numFilesText: a
      })
    });
  }
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.gap12.$,
    children: [jsx(TextWithTruncation, {
      children: renderI18nText("file_browser.confirm_file_trash_modal.about_to_trash_multiple_warnings", {
        numFilesText: a
      })
    }), jsx("ul", {
      className: "confirm_file_delete_modal--bulletList--MzHlN",
      children: e.map(e => jsx("li", {
        children: {
          team_template: jsx(TextWithTruncation, {
            children: renderI18nText("file_browser.confirm_file_delete_modal.warning_team_template", {
              templatesText: jsx(TextWithTruncation, {
                fontWeight: "semi-bold",
                children: renderI18nText("file_browser.confirm_file_delete_modal.templates")
              })
            })
          }),
          published_assets: jsx(TextWithTruncation, {
            children: renderI18nText("file_browser.confirm_file_delete_modal.warning_component_unpublish", {
              componentsText: jsx(TextWithTruncation, {
                fontWeight: "semi-bold",
                children: renderI18nText("file_browser.confirm_file_delete_modal.components")
              })
            })
          }),
          published_sites: jsx(TextWithTruncation, {
            children: renderI18nText("file_browser.confirm_file_delete_modal.warning_published_sites", {
              sitesText: jsx(TextWithTruncation, {
                fontWeight: "semi-bold",
                children: renderI18nText("file_browser.confirm_file_delete_modal.sites")
              })
            })
          }),
          unsynced_file: jsx(TextWithTruncation, {
            children: renderI18nText("file_browser.confirm_file_delete_modal.warning_unsynced_file", {
              offlineFilesText: jsx(TextWithTruncation, {
                fontWeight: "semi-bold",
                children: renderI18nText("file_browser.confirm_file_delete_modal.offline_files")
              })
            })
          })
        }[e]
      }, e))
    })]
  });
}
let R = registerModal(function ({
  numFiles: e,
  firstFileName: t,
  showUnsyncedFileWarning: i,
  showTeamTemplateWarning: a,
  showPublishedAssetsWarning: s,
  showPublishedSitesWarning: o,
  onConfirm: l,
  open: d,
  onClose: p,
  allDrafts: m = !1
}) {
  let h = useDispatch();
  let g = [];
  s && g.push("published_assets");
  o && g.push("published_sites");
  a && g.push("team_template");
  i && g.push("unsynced_file");
  useEffect(() => {
    g.length > 1 && 1 === e && reportError(_$$e.WAYFINDING, Error("ConfirmFileDeleteModal has multiple warnings with only one file"));
  }, [g.length, e]);
  let f = g[0];
  useEffect(() => {
    1 === e && "unsynced_file" === f && reportError(_$$e.WAYFINDING, Error("ConfirmFileDeleteModal shown for single file with single warning of FileDeleteWarningType.UNSYNCED_FILE"));
  }, [e, f]);
  let v = jsx(TextWithTruncation, {
    fontWeight: "semi-bold",
    children: renderI18nText("file_browser.confirm_file_trash_modal.trash_section")
  });
  let I = m ? jsx(TextWithTruncation, {
    children: renderI18nText("file_browser.confirm_file_trash_modal.description_restore_drafts", {
      numFiles: e,
      trashText: v
    })
  }) : jsx(TextWithTruncation, {
    children: renderI18nText("file_browser.confirm_file_trash_modal.description_restore", {
      numFiles: e,
      trashText: v
    })
  });
  let S = () => {
    h(hideModal());
  };
  return jsx(ConfirmationModal, {
    width: "md",
    title: renderI18nText("file_browser.confirm_file_trash_modal.title", {
      numFiles: e
    }),
    confirmText: renderI18nText("file_browser.confirm_file_trash_modal.confirm_delete_files", {
      numFiles: e
    }),
    onConfirm: () => {
      l();
      S();
    },
    open: d,
    onClose: p,
    destructive: "published_assets" === g[0] && getFeatureFlags().dse_library_deletion_warning,
    children: jsxs("div", {
      className: cssBuilderInstance.flex.flexColumn.gap8.$,
      children: [jsx(k, {
        warnings: g,
        numFiles: e,
        firstFileName: t
      }), jsx("div", {
        children: g && "unsynced_file" === g[0] ? "" : I
      })]
    })
  });
}, "CONFIRM_FILE_DELETE_MODAL");
async function L(e) {
  for (let {
    result
  } of await subscribeMultipleAndAwaitAll(SiteMount, e.map(e => ({
    fileKey: e
  })))) if (result.transform(e => e.siteMount.status === tT.Loaded && e.siteMount.data && "published" === e.siteMount.data.status).unwrapOr(!1)) return !0;
  return !1;
}
export function $$F0(e, t, i) {
  let n = e.filter(e => e.type === nb.FILE);
  let r = e.filter(e => e.type === nb.REPO);
  let a = e.filter(e => e.type === nb.OFFLINE_FILE);
  let l = n.map(e => e.file.key);
  let d = r.map(e => e.repo.id);
  let c = a.map(e => e.file.fileKey);
  let u = l.length + d.length + c.length;
  let p = _$$n(l, t).reduce((e, t) => {
    let i = n.find(e => e.file.key === t);
    i.file.trashedAt || (e[t] = fileEntityDataMapper.toSinatra(i.file));
    return e;
  }, {});
  let g = zj(d, i).reduce((e, t) => {
    let i = r.find(e => e.repo.id === t);
    let n = i.repo;
    let a = i.branches.find(e => e.key === n.default_file_key);
    a && !n.trashed_at && (e[n.id] = {
      repo: n,
      main_file: a
    });
    return e;
  }, {});
  let f = a.reduce((e, t) => (e[t.file.fileKey] = t.file, e), {});
  let _ = G4(l, t);
  let A = Sk(d, i);
  let y = Object.keys(p).length + Object.keys(g).length + Object.keys(f).length;
  return {
    filesByKey: p,
    reposById: g,
    offlineFilesByKey: f,
    selectedCount: u,
    deletableCount: y,
    allDrafts: _.length + A.length === y
  };
}
let $$M2 = createOptimistThunk(async (e, t, {
  liveStore: i
}) => {
  let s = Object.keys(t.filesByKey).length;
  let o = Object.keys(t.reposById ?? {}).length;
  let d = Object.keys(t.offlineFilesByKey ?? {}).length;
  let m = Object.keys(t.filesByKey).length + Object.keys(t.reposById ?? {}).length + Object.keys(t.offlineFilesByKey ?? {}).length;
  if (!m) {
    reportError(_$$e.WAYFINDING, Error("tryDeleteFiles dispatched with no selected files"));
    return;
  }
  async function h() {
    let e = Object.values(t.filesByKey);
    if (t.reposById) {
      let n = Object.values(t.reposById).map(e => e.repo.default_file_key && i.readCachedFile(e.repo.default_file_key) || null).filter(e => !!e);
      e.push(...n);
    }
    try {
      for (let {
        result
      } of await subscribeMultipleAndAwaitAll(FileLastPublishedAt, e.map(e => ({
        fileKey: e.key
      })))) if (result.transform(e => !!e.file?.lastPublishedAt).unwrapOr(!1)) {
        trackEventAnalytics("Show File Delete Unpublish Warning");
        return !0;
      }
      return !1;
    } catch (e) {
      reportError(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, e);
      return !1;
    }
  }
  let f = await h();
  let _ = !!getFeatureFlags().should_show_published_sites_warning && (await L(Object.keys(t.filesByKey)));
  let A = Object.values(t.filesByKey).filter(e => e.is_team_template).length > 0;
  let y = d > 0;
  let b = "";
  s > 0 ? b = Object.values(t.filesByKey)[0].name : o > 0 && t.reposById ? b = Object.values(t.reposById)[0].repo.name : d > 0 && t.offlineFilesByKey ? b = Object.values(t.offlineFilesByKey)[0].name : reportError(_$$e.WAYFINDING, Error("Could not get firstFileName in tryDeleteFiles"));
  let v = () => {
    s > 0 && e.dispatch(VK({
      fileKeys: t.filesByKey,
      userInitiated: !0,
      repoIds: Object.keys(t.reposById || {})
    }));
    t.reposById && o > 0 && e.dispatch(hT({
      reposById: t.reposById,
      userInitiated: !0,
      fileKeys: Object.keys(t.filesByKey)
    }));
    t.offlineFilesByKey && d > 0 && e.dispatch(vv(t.offlineFilesByKey));
    e.dispatch(an());
  };
  m === d ? e.dispatch(showModalHandler({
    type: I,
    data: {
      numFiles: m,
      firstFileName: b,
      showUnsyncedFileWarning: y,
      onConfirm: v
    }
  })) : e.dispatch(showModalHandler({
    type: R,
    data: {
      numFiles: m,
      firstFileName: b,
      showPublishedAssetsWarning: f,
      showPublishedSitesWarning: _,
      showTeamTemplateWarning: A,
      showUnsyncedFileWarning: y,
      onConfirm: v,
      allDrafts: t.allDrafts
    }
  }));
});
let $$j1 = createOptimistThunk((e, t) => {
  e.dispatch(YK(t));
});
let $$U3 = createOptimistThunk(async ({
  getState: e,
  dispatch: t
}, i) => {
  let {
    fileKeys,
    repoIds
  } = i;
  let s = fileKeys.length + repoIds.length;
  if (0 === s) {
    reportError(_$$e.WAYFINDING, Error("tryDeleteFilesForever dispatched with no files to delete"));
    return;
  }
  let o = "";
  if (fileKeys.length > 0) {
    let e = await liveStoreInstance.fetchFile(fileKeys[0]);
    e && (o = e.name);
  } else if (repoIds.length > 0) {
    let t = e().repos[repoIds[0]];
    t && (o = t.name);
  }
  o || reportError(_$$e.WAYFINDING, Error("Could not get firstFileName in tryDeleteSelectedFilesForever"));
  let l = fileKeys.reduce((e, t) => (e[t] = !0, e), {});
  t(showModalHandler({
    type: I,
    data: {
      numFiles: s,
      firstFileName: o,
      showUnsyncedFileWarning: !1,
      onConfirm: () => {
        fileKeys.length > 0 && t($$j1({
          fileKeys: l,
          userInitiated: !0
        }));
        repoIds.length > 0 && t(YM({
          repoIds,
          userInitiated: !0
        }));
      }
    }
  }));
});
export const Mw = $$F0;
export const kj = $$j1;
export const U1 = $$M2;
export const Fh = $$U3;