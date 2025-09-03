import { useEffect, useMemo, useCallback } from "react";
import { lV, lr, U1 } from "../figma_app/617606";
import { V, Yg, Hg, o9, F$ } from "../figma_app/304955";
import { K$p } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { fp, zl } from "../figma_app/27355";
import { Pp } from "../vendor/330821";
import { Y5 } from "../figma_app/455680";
import { q5, tS } from "../figma_app/516028";
import { H } from "../905/457575";
import { Nm } from "../figma_app/202307";
import { nc } from "../figma_app/570630";
import { l as _$$l } from "../1156/531541";
import { ei, Ur } from "../1156/71049";
import { IO } from "../figma_app/302802";
import { oA } from "../figma_app/812915";
import j from "../vendor/128080";
var v = j;
let k = H([]);
let C = H({
  codeSnapshotKey: null,
  files: {},
  isLoading: !1,
  error: !1,
  lastAttemptedKey: null
});
let $$E = H({
  files: {}
});
export function $$S0(e, t, n) {
  let l = e?.guid || "";
  let o = q5();
  let x = o?.key || null;
  let [h, g] = fp(C(l));
  let [p, j] = fp($$E(l));
  let {
    entryPointCodeInstance
  } = oA();
  let N = t === lV.FIGMAKE;
  let w = N ? entryPointCodeInstance : e;
  let A = IO(w);
  let T = getFeatureFlags().bake_manual_edits;
  let I = function (e) {
    let t = e?.guid || "";
    let [n, i] = fp(k(t));
    useEffect(() => {
      let t = e?.chatMessages || [];
      v()(t, n) || i(t);
    }, [e?.chatMessages, n, i]);
    return n;
  }(e);
  useEffect(() => {
    if (!T || !x) {
      g({
        codeSnapshotKey: null,
        files: {},
        isLoading: !1,
        error: !0,
        lastAttemptedKey: null
      });
      return;
    }
    let e = function (e) {
      let t;
      for (let n = e.length - 1; n >= 0; n--) {
        let r = e[n];
        if (r.type === K$p.ASSISTANT_MESSAGE) {
          let e = lr(r.textContent || "");
          t = e.codeSnapshot?.codeSnapshotKey;
          break;
        }
        if (r.type === K$p.SYSTEM_MESSAGE) {
          let e = U1(r.textContent || "");
          t = e?.type === "manual_edit" || e?.type === "restore" ? e?.codeSnapshot?.codeSnapshotKey : void 0;
          break;
        }
      }
      return t;
    }(I);
    if (!e) {
      h.codeSnapshotKey && g({
        codeSnapshotKey: null,
        files: {},
        isLoading: !1,
        error: !0,
        lastAttemptedKey: null
      });
      return;
    }
    (h.codeSnapshotKey !== e || h.isLoading) && (!h.error || h.lastAttemptedKey !== e) && (async () => {
      g({
        codeSnapshotKey: e,
        files: {},
        isLoading: !0,
        error: !1,
        lastAttemptedKey: e
      });
      try {
        let t = await _$$l({
          fileKey: x,
          codeSnapshotKey: e
        });
        g({
          codeSnapshotKey: e,
          files: t,
          isLoading: !1,
          error: !1,
          lastAttemptedKey: e
        });
      } catch (t) {
        console.warn("Failed to fetch snapshot files:", t);
        g({
          codeSnapshotKey: null,
          files: {},
          isLoading: !1,
          error: !0,
          lastAttemptedKey: e
        });
      }
    })();
  }, [I, h.codeSnapshotKey, h.isLoading, x, T, g, h.error, h.lastAttemptedKey]);
  useEffect(() => {
    if (!e || !T) {
      j({
        files: {}
      });
      return;
    }
    let n = ei(t, e);
    let r = N ? V() : (getFeatureFlags().multi_file_code_layers || getFeatureFlags().bake_canvas) && e.codeFilePath ? V(n) : Yg(e);
    let i = {};
    r.forEach(e => {
      i[e.codeFileFullPathWithoutScheme] = e.sourceCode || "";
    });
    j({
      files: i
    });
  }, [e, N, T, A, j, t]);
  return useMemo(() => {
    let e = [];
    let t = !1;
    let r = !1;
    let i = !1;
    if (h.isLoading) {
      t = !0;
      i = null !== h.codeSnapshotKey;
    } else if (h.error || !h.codeSnapshotKey) r = h.error;else try {
      e = function (e, t, n) {
        let r = [];
        Object.entries(e).forEach(([e, i]) => {
          if (n && !n(e)) return;
          let s = t[e];
          if (void 0 !== s) {
            let t = Pp(i, s);
            let n = 0;
            let a = 0;
            t.forEach(e => {
              e.added ? n += e.count || 0 : e.removed && (a += e.count || 0);
            });
            (n > 0 || a > 0) && r.push({
              path: e,
              addedLines: n,
              removedLines: a
            });
          } else {
            let t = i.split("\n").length;
            r.push({
              path: e,
              addedLines: 0,
              removedLines: t
            });
          }
        });
        Object.entries(t).forEach(([t, i]) => {
          if ((!n || n(t)) && !(t in e)) {
            let e = i.split("\n").length;
            r.push({
              path: t,
              addedLines: e,
              removedLines: 0
            });
          }
        });
        return r;
      }(h.files, p.files, n?.shouldIncludeFile);
      i = !0;
    } catch (e) {
      r = !0;
    }
    return {
      changedFiles: e,
      isLoading: t,
      error: r,
      hasBaseline: i
    };
  }, [p.files, h.codeSnapshotKey, h.error, h.files, h.isLoading, n?.shouldIncludeFile]);
}
export function $$N1({
  chatMessagesNodeGuid: e,
  featureType: t
}) {
  let [n] = fp(C(e));
  let a = tS();
  return {
    restoreFile: useCallback(r => {
      if (e && n.codeSnapshotKey && n.files[r] && a) return () => {
        let a = getSingletonSceneGraph().get(e);
        if (!a) return;
        let u = n.files[r];
        if (!u) {
          console.error("No baseline content found for file:", r);
          return;
        }
        l7.user("restore-individual-file", () => {
          let e = ei(t, a);
          let n = t === lV.FIGMAKE ? Hg(nc) : (getFeatureFlags().multi_file_code_layers || getFeatureFlags().bake_canvas) && a.codeFilePath ? Hg(nc, e) : o9(a, nc);
          let l = F$(e, r);
          let {
            codeFile
          } = Ur(n, e, l, u);
          codeFile && (codeFile.sourceCode = u, zl.set(Nm(a.guid), "user"));
          Y5.commit();
        });
      };
    }, [n.files, n.codeSnapshotKey, e, t, a])
  };
}
export const E = $$S0;
export const q = $$N1;