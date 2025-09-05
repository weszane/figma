import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { sx } from "../905/449184";
import { am } from "../figma_app/430563";
import { q5 } from "../figma_app/516028";
import { t$ } from "../figma_app/646357";
import { QB } from "../905/921418";
import { T } from "../905/486858";
import { M } from "../905/540025";
export function $$p0(e, t) {
  let i = e?.library_key;
  let p = M();
  let m = useDispatch();
  let h = q5();
  let g = t$(e?.library_key);
  let f = T();
  let _ = useCallback(t => {
    h && e && (m(am({
      libraryFileSubscription: {
        file_key: h.key,
        library_key: e.library_key,
        is_subscribed: t,
        id: g
      },
      userInitiated: !0,
      publishedLibrary: e,
      fileSubscribedLibraryKeys: f
    })), m(QB({
      ignoreLoadingState: p
    })));
  }, [m, e, h, g, p, f]);
  return {
    subscribe: useCallback(() => {
      h && i && (_(!0), sx("Library File Enabled", {
        ...t?.(),
        fileKey: h.key,
        fileTeamId: h.teamId,
        fileOrgId: h.parentOrgId,
        libraryKey: i,
        entryPoint: "library_preferences_modal"
      }, {
        forwardToDatadog: !0
      }));
    }, [h, _, t, i]),
    unsubscribe: useCallback(() => {
      h && i && (_(!1), sx("Library File Disabled", {
        ...t?.(),
        fileKey: h.key,
        fileTeamId: h.teamId,
        fileOrgId: h.parentOrgId,
        libraryKey: i,
        entryPoint: "library_preferences_modal"
      }, {
        forwardToDatadog: !0
      }));
    }, [h, _, t, i])
  };
}
export const _ = $$p0;