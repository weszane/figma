import { useMemo, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { A as _$$A } from "../905/920142";
import { sanitizeInput } from "../905/241044";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon, VisualBellShape } from "../905/576487";
import { hideModal, showModalHandler } from "../905/156213";
import { startCompareChanges, findVersionById } from "../figma_app/841351";
import { jsx } from "react/jsx-runtime";
import { lQ } from "../905/934246";
import { HISTORY_DOCUMENT_INDEX } from "../figma_app/518682";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { DS, _W } from "../figma_app/571341";
import { SI, PZ } from "../figma_app/241341";
let b = registerModal(function (e) {
  let {
    nodeId
  } = e;
  let i = useDispatch();
  let {
    versions,
    versionsQueryLoaded
  } = DS(nodeId);
  let o = useSelector(e => e.versionHistory.compareId);
  let l = useMemo(() => o ? versions.find(e => e.id === o) ?? null : null, [versions, o]);
  let [c, u] = useState(!0);
  let [_, b] = useState(!1);
  let v = {
    inspectionMode: "properties",
    setInspectionMode: lQ,
    inspectionModes: ["properties"]
  };
  let [I, E] = useState(void 0);
  let x = void 0 !== I;
  let [S, w] = useState(void 0);
  let C = !!S;
  useEffect(() => {
    c && x && C && versionsQueryLoaded && u(!1);
  }, [c, x, C, versionsQueryLoaded]);
  let T = useCallback(e => {
    e.id !== o && (E(void 0), i(startCompareChanges({
      fromVersionId: e.id
    })));
  }, [i, o, E]);
  useEffect(() => {
    let e = setTimeout(() => {
      E(SI({
        nodeId,
        documentIndex: HISTORY_DOCUMENT_INDEX,
        showError: () => {
          E(null);
        }
      }));
    }, _W);
    return () => clearTimeout(e);
  }, [nodeId, o, E]);
  useEffect(() => {
    let e = setTimeout(() => {
      let e = () => {
        w(void 0);
        b(!0);
      };
      let i = SI({
        nodeId,
        showError: e
      });
      if (!i) {
        e();
        return;
      }
      w(i);
    }, _W);
    return () => clearTimeout(e);
  }, [nodeId]);
  let k = useCallback(() => {
    i(hideModal());
  }, [i]);
  return jsx(PZ, {
    currentImage: S,
    historicImage: I,
    modalError: _,
    modalTitle: getI18nString("collaboration.feedback.compare_changes_modal.header"),
    nodeId,
    onCloseModal: k,
    origin: "cc_versions",
    preferencesApi: v,
    renderLoadingBar: c,
    selectedVersion: l,
    setSelectedVersion: T,
    skipCorrectHistoryCanvasCheck: !0,
    versions
  });
}, "CompareChangesModal", ModalSupportsBackground.YES);
export function $$v1() {
  let e = useDispatch();
  let t = useSelector(e => e.versionHistory.compareId);
  let i = useSelector(e => findVersionById(t, e.versionHistory));
  let a = useSelector(e => e.modalShown);
  return useCallback(t => {
    $$I0(t, e, i, a);
  }, [e, i, a]);
}
export function $$I0(e, t, i, n) {
  if (n) return;
  let r = sanitizeInput(i?.user.handle);
  if (r && i?.touched_at && Fullscreen.getChunkChangeMap().has(e)) {
    if (!Fullscreen.getChangesToCompareFromHistoryChangesState().has(e)) {
      t(VisualBellActions.dequeue({
        matchType: "view_changes"
      }));
      return;
    }
    t(VisualBellActions.dequeue({}));
    t(VisualBellActions.enqueue({
      message: getI18nString("collaboration.feedback.compare_changes_modal.action_text", {
        lastEditedBy: r,
        lastEditedAt: _$$A(i.touched_at).fromNow()
      }),
      type: "view_changes",
      button: {
        text: getI18nString("collaboration.feedback.compare_changes_modal.action_button"),
        action: () => {
          trackEventAnalytics("version_diffing_performance_metrics", {
            name: "diffing_modal_cta_clicked",
            entrypoint: "figma_design_version_history"
          });
          t(showModalHandler({
            type: b,
            data: {
              nodeId: e
            }
          }));
        }
      },
      icon: "" !== i.user.img_url ? VisualBellIcon.FROM_URL : VisualBellIcon.NONE,
      iconShape: VisualBellShape.CIRCLE,
      iconURL: i.user.img_url
    }));
  }
}
export const z = $$I0;
export const E = $$v1;