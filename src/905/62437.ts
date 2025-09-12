import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { q7 } from "../figma_app/860955";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { oA } from "../905/723791";
import { FlashActions } from "../905/573154";
import { fk } from "../figma_app/618433";
import { SQ, PF, YW } from "../figma_app/78808";
import { hideModal, showModalHandler } from "../905/156213";
import { D as _$$D } from "../905/852057";
import { formatI18nMessage } from "../905/482208";
import { F as _$$F } from "../905/224";
import { xp } from "../905/87821";
import { selectCurrentFile } from "../figma_app/516028";
import { FC } from "../figma_app/212807";
import { _6 } from "../figma_app/386952";
import { UpsellModalType } from "../905/165519";
import { vL } from "../905/652992";
import { FEditorType } from "../figma_app/53721";
import { fileActionEnum } from "../figma_app/630077";
import { isBranchView } from "../905/218608";
import { $A } from "../905/782918";
import { useModalManager } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { renderI18nText, getI18nString } from "../905/303541";
import { restoreFiles } from "../905/760074";
import { registerModal } from "../905/102752";
import { DV } from "../905/739964";
import { y as _$$y } from "../figma_app/504415";
import { S as _$$S } from "../905/262176";
function $$D(e) {
  let t = useDispatch();
  let i = useModalManager(e);
  let [s, d] = useState(!1);
  let u = selectCurrentFile();
  let h = u?.canEdit;
  let {
    version
  } = e;
  if (!getFeatureFlags().branching_undo_merge) return jsx(Fragment, {});
  let f = async () => {
    if (s) return;
    if (!u || !h || "branch_child_merge" !== version.view) {
      t(FlashActions.error("Unable to undo merge"));
      return;
    }
    let e = u.key;
    let i = version.branch_file_key;
    if (!i) {
      t(FlashActions.error("Could not find branch key"));
      return;
    }
    d(!0);
    let n = await restoreFiles([i]);
    if ("error" === n.status) {
      t(FlashActions.error(n.message));
      d(!1);
      return;
    }
    t(SQ({
      fileKey: e,
      version
    }));
    trackEventAnalytics("Undo Merge", {
      fileKey: e,
      versionId: version.id,
      savedAt: version.touched_at
    });
  };
  return jsx(bL, {
    manager: i,
    width: "sm",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("collaboration.branching.undo_merge_title")
        })
      }), jsx(nB, {
        children: renderI18nText("collaboration.branching.undo_merge_description")
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: () => t(hideModal()),
            children: renderI18nText("collaboration.branching.undo_merge_cancel")
          }), jsx($n, {
            variant: "primary",
            onClick: f,
            disabled: s,
            children: renderI18nText("collaboration.branching.undo_merge_confirm")
          })]
        })
      })]
    })
  });
}
$$D.displayName = "UndoMergeModal";
let L = registerModal($$D, "UndoMergeModal");
let F = registerModal(function (e) {
  let t = useModalManager(e);
  let {
    onClose,
    onConfirm
  } = e;
  return jsx(bL, {
    manager: t,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("cms_file_operations.cms_data_wont_roll_back")
        })
      }), jsx(nB, {
        children: jsx("p", {
          children: getI18nString("cms_file_operations.when_you_roll_back_to")
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: onClose,
            variant: "secondary",
            children: getI18nString("cms_file_operations.cancel")
          }), jsx($n, {
            onClick: onConfirm,
            variant: "primary",
            children: getI18nString("cms_file_operations.continue_anyway")
          })]
        })
      })]
    })
  });
}, "ConfirmRestoreModal");
export function $$B0(e) {
  let t = selectCurrentFile();
  let i = t?.canEdit || !1;
  let C = useSelector(t => t.versionHistory.versions.find(t => t.id === e));
  let T = _6();
  let k = useDispatch();
  let R = fk(t?.key);
  let N = FC();
  return useMemo(() => {
    if (!C || !t || "fullscreen" !== T.view) return null;
    let e = [];
    let r = (e, t, i) => $A(T) && ("savepoint-restore" === e || "savepoint-clear" === e) ? null : jsx(q7, {
      onClick: t,
      disabled: i,
      "data-test-id": `savepoint-menu-item-${e}`,
      children: formatI18nMessage(e)
    }, e);
    let a = T.editorType === FEditorType.Slides && oA(t.org?.isSlidesDisabled) || T.editorType === FEditorType.Whiteboard && !!t.org?.figjamDisabledAt || T.editorType === FEditorType.Sites && !!t.org?.isSitesDisabled || T.editorType === FEditorType.Cooper && !!t.org?.isCooperDisabled;
    let u = r("savepoint-compare", () => {
      k(_$$D({
        fileKey: t.key,
        savepointID: C.id,
        label: "",
        description: ""
      }));
    });
    let A = r(C.label ? "savepoint-edit" : "savepoint-label", () => {
      i && k(showModalHandler({
        type: _$$y,
        data: {
          description: C.description || "",
          label: C.label || "",
          savepointID: C.id
        }
      }));
    });
    let y = r("savepoint-restore", () => {
      if (!i) return;
      let e = () => {
        k(PF({
          fileKey: t.key,
          versionId: C.id
        }));
        trackEventAnalytics("History Version Checkpoint Restored", {
          versionId: C.id,
          savedAt: C.touched_at
        });
      };
      R ? k(showModalHandler({
        type: F,
        data: {
          onConfirm: e
        }
      })) : e();
    });
    let b = r("savepoint-duplicate", () => {
      let e = xp(t, t.project, N);
      e ? k(showModalHandler({
        type: DV,
        data: {
          team: e,
          resource: vL.FILE,
          action: fileActionEnum.DUPLICATE_FILES,
          editorType: t.editorType,
          currentPlan: _$$F.Plan.STARTER,
          upsellPlan: _$$F.Plan.PRO,
          upsellSource: UpsellModalType.CREATE_NEW_FILE
        }
      })) : (k(YW({
        file: t,
        versionId: C.id
      })), trackEventAnalytics("History Version Checkpoint Duplicated", {
        versionId: C.id,
        savedAt: C.touched_at
      }));
    }, a);
    let P = r("savepoint-clear", () => {
      k(_$$D({
        fileKey: t.key,
        savepointID: C.id,
        label: "",
        description: ""
      }));
    }, !C.label || 0 === C.label.length);
    let O = r("savepoint-link", () => {
      try {
        _$$S(k, T, C.id);
      } catch (e) {
        k(FlashActions.error("Failed to copy link"));
      }
    });
    let D = r("savepoint-undo-merge", () => {
      k(showModalHandler({
        type: L,
        data: {
          version: C
        }
      }));
    });
    i ? isBranchView(C) ? "branch_child_merge" === C.view ? (e.push(A, y, b, O), getFeatureFlags().branching_undo_merge && e.push(D)) : e.push(y, b, O) : e.push(A, y, b, P, O) : e.push(b, O);
    getFeatureFlags().version_diffing && T.editorType !== FEditorType.Whiteboard && !$A(T) && e.push(u);
    return e;
  }, [T, C, i, t, R, N, k]);
}
export const D = $$B0;