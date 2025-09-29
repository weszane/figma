import { useMemo } from 'react';
import { AIScopeHandler } from '../905/189185';
import { O } from '../905/273186';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { selectCurrentUser } from '../905/372672';
import { analyticsEventManager } from '../905/449184';
import { createScopedState } from '../905/457575';
import { getFeatureFlags } from '../905/601108';
import { getSingletonSceneGraph } from '../905/700578';
import { ei, Ur, zK } from '../1156/71049';
import { l as _$$l } from '../1156/531541';
import { Zi } from '../1156/751255';
import { A as _$$A } from '../1156/829829';
import { atomStoreManager, useAtomValueAndSetter } from '../figma_app/27355';
import { Nm } from '../figma_app/202307';
import { GX } from '../figma_app/259678';
import { F$, V, Yg } from '../figma_app/304955';
import { wi } from '../figma_app/325537';
import { fullscreenValue } from '../figma_app/455680';
import { assert } from '../figma_app/465776';
import { selectCurrentFile } from '../figma_app/516028';
import { lV } from '../figma_app/617606';
import { J } from '../figma_app/710077';
import { Fullscreen } from '../figma_app/763686';
import { useDispatch } from 'react-redux';
var A = (e => (e.FAILED_TO_RETRIEVE_CODE_FILES = 'FAILED_TO_RETRIEVE_CODE_FILES', e))(A || {});
class T extends Error {
  constructor(e, t) {
    super(t);
    this.type = e;
    this.name = 'RestoreVersionError';
  }
}
let I = createScopedState();
export function $$L0({
  codeSnapshotKey: e,
  chatMessagesNodeGuid: t,
  featureType: n,
  persistentEntityId: s,
  clientLifecycleId: a,
  restoreToVersionTitle: l
}) {
  let o = selectCurrentUser();
  let c = selectCurrentFile();
  let d = c?.key || null;
  let x = useDispatch();
  let [f, b] = useAtomValueAndSetter(I(t));
  let j = _$$A();
  return {
    restoreVersion: useMemo(() => {
      if (d && e && o && t && c?.canEdit) {
        return async () => {
          if (f) {
            x(VisualBellActions.enqueue({
              message: getI18nString('figmake.chat.version_restore_in_progress')
            }));
            return;
          }
          try {
            b(!0);
            x(VisualBellActions.enqueue({
              message: getI18nString('figmake.chat.a11y_restoring_a_previous_version'),
              role: 'status'
            }));
            let r = getSingletonSceneGraph().get(t);
            if (!r) throw new Error(`Chat messages node not found: ${t}`);
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
            analyticsEventManager.trackDefinedEvent('ai_for_production.version_restore_clicked', {
              success: !0,
              codeSnapshotKey: e,
              fileKey: d,
              featureType: n,
              persistentEntityId: s,
              clientLifecycleId: a
            });
            x(VisualBellActions.enqueue({
              message: getI18nString('figmake.chat.a11y_restoring_version_completed'),
              role: 'status'
            }));
          } catch (r) {
            let t = r instanceof T ? r.type : '';
            analyticsEventManager.trackDefinedEvent('ai_for_production.version_restore_clicked', {
              success: !1,
              errorType: t,
              errorMessage: r.message,
              codeSnapshotKey: e,
              fileKey: d,
              featureType: n,
              persistentEntityId: s,
              clientLifecycleId: a
            });
            x(VisualBellActions.enqueue({
              message: getI18nString('figmake.chat.version_restore_failed'),
              error: !0
            }));
          } finally {
            b(!1);
          }
        };
      }
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
    throw new T('FAILED_TO_RETRIEVE_CODE_FILES', e.message);
  }
  let g = ei(r, i);
  let p = r === lV.FIGMAKE;
  let y = (getFeatureFlags().multi_file_code_layers || getFeatureFlags().bake_canvas) && i.codeFilePath;
  let _ = Zi(n, {
    codeSnapshotKey: t
  }, u);
  let j = p ? V() : y ? V(g) : Yg(i);
  let w = Object.fromEntries(j.map(e => [e.codeFileFullPathWithoutScheme, e]));
  AIScopeHandler.ai('restore-version', () => {
    if (assert(void 0 !== Fullscreen, 'Fullscreen must be defined'), p || y) {
      let {
        entrypointFilePath
      } = function (e, t) {
        let n;
        let r = [];
        for (let i of e) {
          !function (e, t) {
            switch (t) {
              case lV.FIGMAKE:
                return e.codeFileFullPathWithoutScheme === '/App.tsx';
              case lV.CODE_IN_SITES:
                return e.isEntrypointCodeFile;
              default:
                return !1;
            }
          }(i, t) ? (i.codeFilePath = `${GX}${i.codeFileFullPathWithoutScheme}`, r.push(i)) : n = i;
        }
        zK(r);
        return {
          entrypointFilePath: n?.codeFileFullPathWithoutScheme
        };
      }(j, r);
      let t = Object.entries(h);
      let n = t[0];
      let a = t.length === 1 && n && entrypointFilePath && n[0] !== entrypointFilePath;
      for (let [n, r] of t) {
        let t = p ? n : a ? entrypointFilePath : F$(g, n);
        let {
          codeFile
        } = Ur(w, g, t, r);
        codeFile && (codeFile.sourceCode = r, atomStoreManager.set(Nm(i.guid), 'assistant'));
      }
    } else {
      let e = Object.entries(h);
      assert(j.length === 1, 'Code layer must have exactly one code file');
      assert(e.length === 1, 'Code layer snapshot must have exactly one code file');
      let [t, n] = e[0];
      let {
        codeFile
      } = Ur(w, g, j[0].codeFileFullPathWithoutScheme, n);
      codeFile && (codeFile.sourceCode = n, atomStoreManager.set(Nm(i.guid), 'assistant'));
    }
    let e = O.get(i.guid);
    e && (e.hasSystemEdited = !0);
    let t = [...i.chatMessages, _];
    i.chatMessages = t;
    fullscreenValue.commit();
    let n = r === lV.FIGMAKE ? V().find(e => e.codeFileFullPathWithoutScheme === '/App.tsx') : j[0];
    n && J(n);
    wi(i.guid, {
      switchToPreview: !1
    });
  });
}
export const OL = $$L0;