import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { handleFileLibrarySubscription } from "../figma_app/430563";
import { selectCurrentFile } from "../figma_app/516028";
import { useSubscribedLibraryId } from "../figma_app/646357";
import { QB } from "../905/921418";
import { T } from "../905/486858";
import { M } from "../905/540025";
export function $$p0(e, t) {
  let i = e?.library_key;
  let p = M();
  let m = useDispatch<AppDispatch>();
  let h = selectCurrentFile();
  let g = useSubscribedLibraryId(e?.library_key);
  let f = T();
  let _ = useCallback(t => {
    h && e && (m(handleFileLibrarySubscription({
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
      h && i && (_(!0), trackEventAnalytics("Library File Enabled", {
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
      h && i && (_(!1), trackEventAnalytics("Library File Disabled", {
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
