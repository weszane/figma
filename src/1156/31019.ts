import { useMemo } from "react";
import { wA } from "../vendor/514228";
import { lV } from "../figma_app/617606";
import { J } from "../figma_app/710077";
import { V, Yg, F$ } from "../figma_app/304955";
import { vA } from "../figma_app/465776";
import { glU } from "../figma_app/763686";
import { Hq } from "../905/189185";
import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { fp, zl } from "../figma_app/27355";
import { az } from "../905/449184";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { Y5 } from "../figma_app/455680";
import { q5 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { GX } from "../figma_app/259678";
import { q } from "../905/457575";
import { wi } from "../figma_app/325537";
import { Nm } from "../figma_app/202307";
import { Zi } from "../1156/751255";
import { l as _$$l } from "../1156/531541";
import { ei, zK, Ur } from "../1156/71049";
import { O } from "../905/273186";
import { A as _$$A } from "../1156/829829";
var A = (e => (e.FAILED_TO_RETRIEVE_CODE_FILES = "FAILED_TO_RETRIEVE_CODE_FILES", e))(A || {});
class T extends Error {
  constructor(e, t) {
    super(t);
    this.type = e;
    this.name = "RestoreVersionError";
  }
}
let I = q();
export function $$L0({
  codeSnapshotKey: e,
  chatMessagesNodeGuid: t,
  featureType: n,
  persistentEntityId: s,
  clientLifecycleId: a,
  restoreToVersionTitle: l
}) {
  let o = iZ();
  let c = q5();
  let d = c?.key || null;
  let x = wA();
  let [f, b] = fp(I(t));
  let j = _$$A();
  return {
    restoreVersion: useMemo(() => {
      if (d && e && o && t && c?.canEdit) return async () => {
        if (f) {
          x(F.enqueue({
            message: _$$t("figmake.chat.version_restore_in_progress")
          }));
          return;
        }
        try {
          b(!0);
          x(F.enqueue({
            message: _$$t("figmake.chat.a11y_restoring_a_previous_version"),
            role: "status"
          }));
          let r = UN().get(t);
          if (!r) throw Error(`Chat messages node not found: ${t}`);
          await z({
            fileKey: d,
            codeSnapshotKey: e,
            user: o,
            featureType: n,
            chatMessagesNode: r,
            restoreToVersionTitle: l
          });
          j({
            showVisualBells: !1
          });
          az.trackDefinedEvent("ai_for_production.version_restore_clicked", {
            success: !0,
            codeSnapshotKey: e,
            fileKey: d,
            featureType: n,
            persistentEntityId: s,
            clientLifecycleId: a
          });
          x(F.enqueue({
            message: _$$t("figmake.chat.a11y_restoring_version_completed"),
            role: "status"
          }));
        } catch (r) {
          let t = r instanceof T ? r.type : "";
          az.trackDefinedEvent("ai_for_production.version_restore_clicked", {
            success: !1,
            errorType: t,
            errorMessage: r.message,
            codeSnapshotKey: e,
            fileKey: d,
            featureType: n,
            persistentEntityId: s,
            clientLifecycleId: a
          });
          x(F.enqueue({
            message: _$$t("figmake.chat.version_restore_failed"),
            error: !0
          }));
        } finally {
          b(!1);
        }
      };
    }, [d, e, o, t, c?.canEdit, n, s, a, x, f, b, l, j])
  };
}
async function z({
  fileKey: e,
  codeSnapshotKey: t,
  user: n,
  featureType: r,
  chatMessagesNode: i,
  restoreToVersionTitle: u
}) {
  let h;
  try {
    h = await _$$l({
      fileKey: e,
      codeSnapshotKey: t
    });
  } catch (e) {
    throw new T("FAILED_TO_RETRIEVE_CODE_FILES", e.message);
  }
  let g = ei(r, i);
  let p = r === lV.FIGMAKE;
  let y = (getFeatureFlags().multi_file_code_layers || getFeatureFlags().bake_canvas) && i.codeFilePath;
  let _ = Zi(n, {
    codeSnapshotKey: t
  }, u);
  let j = p ? V() : y ? V(g) : Yg(i);
  let w = Object.fromEntries(j.map(e => [e.codeFileFullPathWithoutScheme, e]));
  Hq.ai("restore-version", () => {
    if (vA(void 0 !== glU, "Fullscreen must be defined"), p || y) {
      let {
        entrypointFilePath
      } = function (e, t) {
        let n;
        let r = [];
        for (let i of e) !function (e, t) {
          switch (t) {
            case lV.FIGMAKE:
              return "/App.tsx" === e.codeFileFullPathWithoutScheme;
            case lV.CODE_IN_SITES:
              return e.isEntrypointCodeFile;
            default:
              return !1;
          }
        }(i, t) ? (i.codeFilePath = `${GX}${i.codeFileFullPathWithoutScheme}`, r.push(i)) : n = i;
        zK(r);
        return {
          entrypointFilePath: n?.codeFileFullPathWithoutScheme
        };
      }(j, r);
      let t = Object.entries(h);
      let n = t[0];
      let a = 1 === t.length && n && entrypointFilePath && n[0] !== entrypointFilePath;
      for (let [n, r] of t) {
        let t = p ? n : a ? entrypointFilePath : F$(g, n);
        let {
          codeFile
        } = Ur(w, g, t, r);
        codeFile && (codeFile.sourceCode = r, zl.set(Nm(i.guid), "assistant"));
      }
    } else {
      let e = Object.entries(h);
      vA(1 === j.length, "Code layer must have exactly one code file");
      vA(1 === e.length, "Code layer snapshot must have exactly one code file");
      let [t, n] = e[0];
      let {
        codeFile
      } = Ur(w, g, j[0].codeFileFullPathWithoutScheme, n);
      codeFile && (codeFile.sourceCode = n, zl.set(Nm(i.guid), "assistant"));
    }
    let e = O.get(i.guid);
    e && (e.hasSystemEdited = !0);
    let t = [...i.chatMessages, _];
    i.chatMessages = t;
    Y5.commit();
    let n = r === lV.FIGMAKE ? V().find(e => "/App.tsx" === e.codeFileFullPathWithoutScheme) : j[0];
    n && J(n);
    wi(i.guid, {
      switchToPreview: !1
    });
  });
}
export const OL = $$L0;