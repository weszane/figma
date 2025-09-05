import { useMemo, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { glU } from "../figma_app/763686";
import { sx } from "../905/449184";
import { A as _$$A } from "../905/920142";
import { F } from "../905/241044";
import { t as _$$t } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { zX, Ox } from "../905/576487";
import { Ce, to } from "../905/156213";
import { vF, HF } from "../figma_app/841351";
import { jsx } from "react/jsx-runtime";
import { lQ } from "../905/934246";
import { HISTORY_DOCUMENT_INDEX } from "../figma_app/518682";
import { Ju, ZU } from "../905/102752";
import { DS, _W } from "../figma_app/571341";
import { SI, PZ } from "../figma_app/241341";
let b = Ju(function (e) {
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
    e.id !== o && (E(void 0), i(vF({
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
    i(Ce());
  }, [i]);
  return jsx(PZ, {
    currentImage: S,
    historicImage: I,
    modalError: _,
    modalTitle: _$$t("collaboration.feedback.compare_changes_modal.header"),
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
}, "CompareChangesModal", ZU.YES);
export function $$v1() {
  let e = useDispatch();
  let t = useSelector(e => e.versionHistory.compareId);
  let i = useSelector(e => HF(t, e.versionHistory));
  let a = useSelector(e => e.modalShown);
  return useCallback(t => {
    $$I0(t, e, i, a);
  }, [e, i, a]);
}
export function $$I0(e, t, i, n) {
  if (n) return;
  let r = F(i?.user.handle);
  if (r && i?.touched_at && glU.getChunkChangeMap().has(e)) {
    if (!glU.getChangesToCompareFromHistoryChangesState().has(e)) {
      t(_$$F.dequeue({
        matchType: "view_changes"
      }));
      return;
    }
    t(_$$F.dequeue({}));
    t(_$$F.enqueue({
      message: _$$t("collaboration.feedback.compare_changes_modal.action_text", {
        lastEditedBy: r,
        lastEditedAt: _$$A(i.touched_at).fromNow()
      }),
      type: "view_changes",
      button: {
        text: _$$t("collaboration.feedback.compare_changes_modal.action_button"),
        action: () => {
          sx("version_diffing_performance_metrics", {
            name: "diffing_modal_cta_clicked",
            entrypoint: "figma_design_version_history"
          });
          t(to({
            type: b,
            data: {
              nodeId: e
            }
          }));
        }
      },
      icon: "" !== i.user.img_url ? zX.FROM_URL : zX.NONE,
      iconShape: Ox.CIRCLE,
      iconURL: i.user.img_url
    }));
  }
}
export const z = $$I0;
export const E = $$v1;