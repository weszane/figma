import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { l as _$$l } from "../905/479687";
import { R as _$$R } from "../905/256203";
import { A as _$$A } from "../905/251970";
import { S as _$$S } from "../5132/724052";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { eD } from "../figma_app/876459";
import { R as _$$R2 } from "../905/103090";
import { p as _$$p } from "../figma_app/288654";
import { Us, Ph } from "../figma_app/637027";
import { w4, Y8 } from "../905/445814";
import { kt } from "../figma_app/858013";
import { P as _$$P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { sx as _$$sx } from "../905/941192";
import { h as _$$h, O as _$$O } from "../905/142086";
import { Ce, to } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { Cu } from "../figma_app/314264";
import { F as _$$F } from "../905/224";
import { Gi } from "../figma_app/528509";
import { cY, yD, _9, AU } from "../905/81459";
import { jN } from "../905/612685";
import { FPlanNameType, FFileType } from "../figma_app/191312";
import { NSA } from "../figma_app/43951";
import { X$ } from "../figma_app/465071";
import { K as _$$K } from "../figma_app/193867";
import { b as _$$b } from "../905/165519";
import { Bi, vL } from "../905/652992";
import { Y5, mO, kI, NU } from "../905/163189";
import { ZN } from "../figma_app/630077";
import { DV } from "../905/739964";
import { ServiceCategories as _$$e } from "../905/165054";
import { $D } from "../905/11";
import { uf, yA } from "../905/769";
import { M4 } from "../905/713695";
import { PdfConfirmationModal } from "../0c62c2fd/653470";
let J = "file_import_modal--scrollContainer--rcZDu";
function q(e) {
  let {
    fileImport,
    onDone,
    onCancel
  } = e;
  let m = hS(e);
  let _ = useDispatch();
  let p = $$es3(fileImport);
  let f = 0 === p.remainingFiles;
  let g = $$ea7();
  let h = useSelector(e => "folder" === e.selectedView.view ? e.selectedView.folderId : null);
  let x = M4.Folder.useValue(h).data;
  let [v, T] = useState(uf.IMPORTING_FILES);
  $$el6(v === uf.IMPORTING_FILES || v === uf.ATTACHING_BRANCH);
  let I = x?.name || _$$t("file_browser.tool_bar.drafts");
  let N = v === uf.SUCCESS ? _$$t("file_browser.file_import_view.imported_to_folder", {
    folderName: I
  }) : _$$t("file_browser.file_import_view.import_to_folder", {
    folderName: I
  });
  let {
    statusIcon,
    statusMessage,
    statusMessageSecondary
  } = function (e, t, r) {
    let s = null;
    let i = null;
    let o = null;
    let l = $$er5(e === uf.SUCCESS, t, r);
    switch (e) {
      case uf.IMPORTING_FILES:
        s = l.statusIcon;
        i = l.statusMessage;
        o = l.statusMessageSecondary;
        break;
      case uf.ATTACHING_BRANCH:
        s = jsx(kt, {
          imageBacked: !0,
          testId: "loadingSpinner"
        });
        i = tx("file_browser.file_import_view.repo.attaching_branch");
        o = jsx("span", {
          className: _$$s.textBodyMedium.$,
          children: tx("file_browser.file_import_view.to_continue_working", {
            openANewTabLink: jsx(Us, {
              href: window.location.href,
              target: "_blank",
              trusted: !0,
              "data-testid": "openANewTabLink",
              children: tx("file_browser.file_import_view.open_a_new_tab_link")
            })
          })
        });
        break;
      case uf.SUCCESS:
        s = l.statusIcon;
        i = l.statusMessage;
        t.importedFiles === t.totalFiles && (i = tx("file_browser.file_import_view.repo.success"));
        o = l.statusMessageSecondary;
        break;
      case uf.ERROR:
        s = jsx(_$$R, {});
        i = tx("file_browser.file_import_view.repo.error");
        break;
      default:
        throwTypeError(e);
    }
    return s && i ? {
      statusIcon: s,
      statusMessage: i,
      statusMessageSecondary: o
    } : ($D(_$$e.SCENEGRAPH_AND_SYNC, Error("Missing status in repo import")), {
      statusIcon: jsx(_$$R, {}),
      statusMessage: tx("file_browser.file_import_view.repo.error"),
      statusMessageSecondary: null
    });
  }(v, p, I);
  let R = $$et4({
    isImportComplete: f,
    fileImport,
    onDone,
    team: g,
    dispatch: _,
    stats: p,
    shouldShowMoveToProjectButton: !1,
    onMoveToProject: () => {},
    filesToMove: [],
    onCancel
  });
  useEffect(() => {
    if (f) {
      T(uf.ATTACHING_BRANCH);
      let e = Object.values(fileImport.files);
      let r = e.find(e => e.name.includes("branch tip"))?.fileKey;
      let a = e.find(e => e.name.includes("branch point"))?.fileKey;
      let s = e.find(e => e.name.includes("main tip"))?.fileKey;
      r && a && s ? yA(r, a, s).then(() => {
        T(uf.SUCCESS);
      }).catch(() => {
        T(uf.ERROR);
      }) : (T(uf.ERROR), console.error("Missing branch key, branch point key, or main tip key files"));
    }
  }, [f, fileImport.files]);
  return jsx(bL, {
    manager: m,
    width: 480,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: N
        })
      }), jsx(nB, {
        children: fileImport && jsx(_$$P, {
          innerClassName: _$$s.flex.flexColumn.$,
          className: J,
          children: Object.values(fileImport.files).map(e => jsx($$ei1, {
            file: e
          }, `file-import-${e.id}`))
        })
      }), jsx(wi, {
        children: jsxs("div", {
          className: _$$s.flex.flexRow.wFull.justifyBetween.py8.gap16.bt1.bSolid.colorBorder.$,
          children: [jsxs("div", {
            className: _$$s.flex.flexRow.itemsCenter.gap8.$,
            children: [statusIcon && jsx("div", {
              className: _$$s.flex.itemsCenter.justifyCenter.h32.w32.$,
              children: statusIcon
            }), statusMessage && jsx("span", {
              className: _$$s.fontSemiBold.$,
              children: statusMessage
            }), statusMessageSecondary && jsx("span", {
              className: _$$s.ml8.$,
              children: statusMessageSecondary
            })]
          }), jsx("div", {
            children: R
          })]
        })
      })]
    })
  });
}
let Q = "import_progress_modal";
export function $$Z0() {
  let e = useDispatch();
  let {
    fileImport
  } = _$$R2(e => ({
    fileImport: e.fileImport
  }));
  let r = () => {
    e(Ce());
    e(cY());
  };
  let s = () => {
    e(yD());
  };
  let o = () => {
    e(cY());
  };
  let l = (() => {
    switch (fileImport.step) {
      case Y5.CONFIRM_PDF_IMPORT:
        return jsx(PdfConfirmationModal, {
          fileImportDescription: tx("file_browser.file_import_view.select_pdf_source_description", {
            pdfCount: $$es3(fileImport).pdfCount
          }),
          onConfirm: t => {
            e(_9(t));
          },
          onCancel: () => {
            e(AU());
            s();
          }
        });
      case Y5.IMPORT_REPO:
        return jsx(q, {
          fileImport,
          onDone: r,
          onCancel: s,
          onMoveToProject: o,
          onClose: () => e(Ce()),
          open: !0
        });
      case Y5.START:
      case Y5.FILE_IMPORT_WITH_CANCELED_PDF:
      case Y5.FILE_IMPORT_WITH_CONFIRMED_PDF:
        return jsx($$ee2, {
          fileImport,
          onDone: r,
          onCancel: s,
          onMoveToProject: o
        });
      default:
        throwTypeError(fileImport.step);
    }
  })();
  return jsx(fu, {
    name: Q,
    children: l
  });
}
export function $$ee2({
  fileImport: e,
  onDone: t,
  onCancel: r,
  onMoveToProject: n
}) {
  let c = useDispatch();
  let u = $$ea7();
  let m = $$es3(e);
  let _ = useSelector(e => e.selectedView);
  let p = X$("ImportModal").unwrapOr(null);
  let f = p?.tier !== FPlanNameType.STARTER;
  let g = 0 === m.remainingFiles;
  let h = useSelector(e => "folder" === e.selectedView.view ? e.folders[e.selectedView.folderId] : null);
  let b = Gi(h);
  let v = _$$K(_);
  $$el6(!g);
  let y = h?.name || _$$t("file_browser.tool_bar.drafts");
  let j = g ? _$$t("file_browser.file_import_view.imported_to_folder", {
    folderName: y
  }) : _$$t("file_browser.file_import_view.import_to_folder", {
    folderName: y
  });
  let {
    statusIcon,
    statusMessage,
    statusMessageSecondary
  } = $$er5(g, m, y);
  let C = f && (b || v) && m.importedFiles >= 1;
  let k = useMemo(() => function (e, t) {
    let r = [];
    if (!e) return r;
    for (let e of Object.values(t)) e.fileKey && r.push({
      fileKey: e.fileKey
    });
    return r;
  }(C, e.files), [C, e.files]);
  let A = _$$p(NSA, k);
  let F = $$et4({
    isImportComplete: g,
    fileImport: e,
    onDone: t,
    team: u,
    dispatch: c,
    stats: m,
    shouldShowMoveToProjectButton: C,
    onMoveToProject: n,
    filesToMove: useMemo(() => function (e) {
      let t = [];
      for (let r of e) {
        let e = r.result.data?.file;
        e && t.push({
          key: e.key,
          name: e.name,
          folder_id: e.folderId,
          team_id: e.teamId,
          editor_type: e.editorType,
          is_team_template: e.isTeamTemplate,
          parent_org_id: e.parentOrgId
        });
      }
      return t;
    }(A), [A]),
    onCancel: r
  });
  let P = hS({
    open: !0,
    onClose: () => {
      Cu({
        trackingContext: Q,
        trackingDescriptor: _$$c.FILE_IMPORT_X_BUTTON,
        text: "dismiss"
      });
      e.queue.length ? r() : t();
    },
    preventUserClose: !g
  });
  return jsx(bL, {
    manager: P,
    width: 480,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: j
        })
      }), jsx(nB, {
        padding: 0,
        children: jsx(_$$P, {
          className: "x78zum5 xdt5ytf x1mhq5o4",
          className: J,
          children: Object.values(e.files).map(e => jsx($$ei1, {
            file: e
          }, `file-import-${e.id}`))
        })
      }), jsxs(wi, {
        children: [jsxs("div", {
          className: "x78zum5 x6s0dn4 x167g77z",
          children: [statusIcon, statusMessage && jsx("span", {
            className: "xkezfkh",
            children: statusMessage
          }), statusMessageSecondary && jsx("span", {
            className: "xet2fuk",
            children: statusMessageSecondary
          })]
        }), jsx(jk, {
          children: F
        })]
      })]
    })
  });
}
export function $$et4({
  isImportComplete: e,
  fileImport: t,
  onDone: r,
  team: s,
  dispatch: i,
  stats: n,
  shouldShowMoveToProjectButton: o,
  onMoveToProject: l,
  filesToMove: d,
  onCancel: c
}) {
  var u;
  if (!e) return [jsx($z, {
    variant: "destructive",
    onClick: c,
    htmlAttributes: {
      "data-testid": "cancelButton"
    },
    children: tx("file_browser.file_import_view.cancel")
  }, "cancelButton")];
  if (t.failedOnFileLimit) return [jsx($z, {
    variant: "primary",
    onClick: () => {
      r();
      null != s && i(to({
        type: DV,
        data: {
          team: s,
          resource: n.hasMakeFile && !getFeatureFlags().bake_starter_limit ? Bi.FIGMAKE : vL.FILE,
          action: ZN.IMPORT_FILES,
          editorType: n.editorType,
          multipleResources: n.failedFiles > 1,
          currentPlan: _$$F.Plan.STARTER,
          upsellPlan: _$$F.Plan.PRO,
          upsellSource: _$$b.CREATE_NEW_FILE
        }
      }));
    },
    htmlAttributes: {
      "data-testid": "nextButton"
    },
    children: tx("file_browser.file_import_view.next")
  }, "nextButton")];
  let m = [(u = o ? "secondary" : "primary", jsx($z, {
    variant: u,
    onClick: r,
    htmlAttributes: {
      "data-testid": "doneButton"
    },
    children: tx("file_browser.file_import_view.done")
  }, "doneButton"))];
  o && m.push(function ({
    onMoveToProject: e,
    filesToMove: t,
    stats: r,
    dispatch: s
  }) {
    return jsx($z, {
      variant: "primary",
      onClick: () => {
        e();
        sx("file_import.move_to_project.button_clicked", {
          numFiles: r.importedFiles
        });
        1 === t.length && t[0] ? _$$h(t[0], null, s, void 0, void 0, void 0, !0) : _$$O(t, [], s, !0);
      },
      htmlAttributes: {
        "data-testid": "moveToProjectButton"
      },
      children: tx("file_browser.file_import_view.move_to_project")
    }, "moveToProjectButton");
  }({
    onMoveToProject: l,
    filesToMove: d,
    stats: n,
    dispatch: i
  }));
  return m;
}
export function $$er5(e, t, r) {
  let s = null;
  let i = null;
  let n = null;
  e ? t.importedFiles === t.totalFiles ? (i = jsx("div", {
    className: _$$s.fontSemiBold.inline.$,
    children: tx("file_browser.file_import_view.file_import_all_succeeded", {
      totalFiles: t.totalFiles,
      folder: r
    })
  }), s = jsx(_$$l, {
    "data-testid": "checkIcon"
  })) : (i = jsx("div", {
    className: _$$s.fontSemiBold.inline.$,
    children: tx("file_browser.file_import_view.file_import_progress_to_folder", {
      importedFiles: t.importedFiles,
      totalFiles: t.totalFiles,
      folder: r
    })
  }), s = jsx(_$$R, {
    "data-testid": "warningIcon"
  }), t.canceledFiles > 0 && (n = tx("file_browser.file_import_view.file_import_cancel"))) : (s = jsx(kt, {
    imageBacked: !0,
    testId: "loadingSpinner"
  }), i = tx("file_browser.file_import_view.file_import_progress", {
    processedFiles: t.processedFiles,
    totalFiles: t.totalFiles
  }), n = jsx("span", {
    className: _$$s.textBodyMedium.$,
    children: tx("file_browser.file_import_view.to_continue_working", {
      openANewTabLink: jsx(Us, {
        href: window.location.href,
        target: "_blank",
        trusted: !0,
        "data-testid": "openANewTabLink",
        children: tx("file_browser.file_import_view.open_a_new_tab_link")
      })
    })
  }));
  return {
    statusIcon: s,
    statusMessage: i,
    statusMessageSecondary: n
  };
}
export function $$ea7() {
  return useSelector(e => {
    if ("folder" === e.selectedView.view) {
      let t = e.selectedView.folderId && e.folders[e.selectedView.folderId]?.team_id;
      if (null != t) return e.teams[t];
    }
    return null;
  });
}
export function $$es3(e) {
  let t = Object.keys(e.files).length;
  let r = e.queue.length;
  let a = 0;
  let s = 0;
  let i = 0;
  let o = 0;
  let l = 0;
  let d = new Set();
  for (let t in e.files) {
    let r = e.files[t];
    if (r) {
      switch (r.status) {
        case mO.SUCCESS:
        case mO.WARNING:
          a++;
          break;
        case mO.CANCELED:
          s++;
          break;
        case mO.FAILURE:
          i++;
          break;
        case mO.WAITING:
        case mO.BUSY:
          o++;
          break;
        default:
          throwTypeError(r.status);
      }
      kI(r.name) && l++;
      d.add(NU(r));
    }
  }
  return {
    totalFiles: t,
    remainingFiles: r,
    processedFiles: t - r,
    importedFiles: a,
    canceledFiles: s,
    failedFiles: i,
    pendingFiles: o,
    editorType: 1 === d.size && Array.from(d)[0] || null,
    hasMakeFile: d.has(FFileType.FIGMAKE),
    pdfCount: l
  };
}
export function $$ei1(e) {
  let {
    file
  } = e;
  let r = null;
  file.status === mO.CANCELED ? r = tx("file_browser.file_import_view.file_row_import_cancel") : file.message && (r = Array.isArray(file.message) ? file.message.map((e, t) => jsx("div", {
    children: e
  }, t)) : file.message);
  return jsx(eo, {
    status: file.status,
    fileKey: file.fileKey,
    children: jsx("div", {
      className: _$$s.flex.itemsCenter.justifyBetween.flex1.pl8.pr16.textBodyMedium.$,
      children: jsxs("div", {
        className: _$$s.flex.gap8.$$if(r, _$$s.itemsStart, _$$s.itemsCenter).$,
        children: [jsx("div", {
          className: _$$s.flex.justifyCenter.h32.w32.itemsCenter.$,
          children: jsx(en, {
            file
          })
        }), jsxs("div", {
          className: _$$s.$$if(r, _$$s.pb6).$,
          children: [jsx("div", {
            className: _$$s.truncate.lh32.$,
            style: _$$sx.add({
              maxWidth: "384px"
            }).$,
            "data-tooltip": file.name,
            "data-tooltip-type": "text",
            children: file.name
          }), r && jsxs("div", {
            className: _$$s.flex.flexColumn.mt4.colorTextSecondary.$,
            children: [r, file.cta && jsx(Us, {
              className: _$$s.colorTextSecondary.underline.ml8.$,
              role: "button",
              onClick: file.cta.action,
              trusted: !0,
              "data-testid": "ctaLink",
              children: file.cta.text
            })]
          })]
        })]
      })
    })
  });
}
function en({
  file: e
}) {
  switch (e.status) {
    case mO.BUSY:
    case mO.WAITING:
      return jsx(kt, {
        imageBacked: !0,
        testId: "fileRowLoadingSpinner"
      });
    case mO.FAILURE:
    case mO.CANCELED:
      return jsx(_$$A, {
        "data-testid": "failIcon",
        className: _$$s.colorIconDanger.$
      });
    case mO.SUCCESS:
    case mO.WARNING:
      let t = NU(e);
      return jsx(w4, {
        size: 16,
        type: Y8(t)
      });
    default:
      throwTypeError(e.status);
  }
}
function eo(e) {
  let {
    fileKey,
    status,
    children
  } = e;
  if (status !== mO.SUCCESS && status !== mO.WARNING) return children;
  let i = fileKey ? jN({
    file: {
      key: fileKey
    }
  }) : void 0;
  return i ? jsxs(Ph, {
    href: i,
    target: "_blank",
    trusted: !0,
    className: "file_import_modal--fileRowWrapperLink--3JOhD",
    "data-testid": "fileLink",
    trackingProperties: {
      action: "Import Modal - File Link Clicked"
    },
    children: [children, jsx(_$$S, {})]
  }) : children;
}
export function $$el6(e) {
  let t = useCallback(e => {
    e.preventDefault();
  }, []);
  useEffect(() => (e && (window.addEventListener("beforeunload", t), eD?.setIsImporting(!0)), () => {
    window.removeEventListener("beforeunload", t);
    eD?.setIsImporting(!1);
  }), [e, t]);
}
export const FileImportModal = $$Z0;
export const FileRow = $$ei1;
export const ImportModal = $$ee2;
export const fileImportStats = $$es3;
export const getFooterButtons = $$et4;
export const getStatusComponents = $$er5;
export const useCloseTabWarningWhenImportInProgress = $$el6;
export const useCurrentFolderTeam = $$ea7;