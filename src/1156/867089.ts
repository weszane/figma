import { useMemo, useCallback, useEffect } from "react";
import { Hg } from "../figma_app/304955";
import { FontHelpers } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { l as _$$l } from "../905/716947";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { useCurrentFileKey } from "../figma_app/516028";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { N6 } from "../figma_app/275370";
import { nc } from "../figma_app/570630";
let g = setupRemovableAtomFamily(() => atom(null));
let p = setupRemovableAtomFamily(() => atom(null));
let f = setupRemovableAtomFamily(() => atom(null));
let y = {
  library_type: "team",
  library_name: "Unknown",
  library_file_key: "",
  library_key: _$$l(""),
  thumbnail_url: "",
  global_css: ""
};
let _ = {
  library_type: "team",
  library_name: "Loading...",
  library_file_key: "",
  library_key: _$$l(""),
  thumbnail_url: "",
  global_css: ""
};
export function $$b2(e) {
  let {
    allDsImportReadyLibraries,
    allDsImportReadyLibrariesRequestStatus
  } = $$v0();
  return useMemo(() => {
    if (!e) return null;
    let r = e.map(e => "user" !== e.type ? null : e.libraryKey).filter(e => !!e);
    if (0 === r.length) return null;
    let i = r[r.length - 1];
    if ("loaded" === allDsImportReadyLibrariesRequestStatus) {
      let e = allDsImportReadyLibraries?.find(e => e.library_key === i);
      return e ? {
        type: "LIBRARY",
        library: e
      } : {
        type: "LIBRARY",
        library: y
      };
    }
    return "loading" === allDsImportReadyLibrariesRequestStatus ? {
      type: "LIBRARY",
      library: _
    } : {
      type: "LIBRARY",
      library: y
    };
  }, [allDsImportReadyLibraries, e, allDsImportReadyLibrariesRequestStatus]);
}
export function $$j1() {
  let [e, t] = useAtomValueAndSetter(g);
  let n = useCurrentFileKey();
  let l = useCallback(e => {
    if (e.raw_text_styles) {
      let t = JSON.parse(e.raw_text_styles || "[]");
      permissionScopeHandler.ai("figmake custom fonts", () => {
        t.forEach(e => {
          e.fontFamily && e.fontWeight && function (e) {
            let t = FontHelpers?.getLocalTextStyleFontInfo();
            if (t && t.find(t => t.family === e.fontFamily && t.style === e.styleName)) return;
            let n = getSingletonSceneGraph().createStyle("TEXT");
            n.fontName = {
              family: e.fontFamily,
              style: e.styleName,
              postscript: e.postscript
            };
            n.name = `${e.fontFamily}: ${e.styleName}`;
          }({
            fontFamily: e.fontFamily,
            styleName: e.fontWeight,
            postscript: e.postscript || ""
          });
        });
      });
    }
    let r = Hg(nc)["/styles/globals.css"];
    r && (r.sourceCode = e.global_css);
    t({
      type: "LIBRARY",
      library: e
    });
    analyticsEventManager.trackDefinedEvent("ds_import.library_selected", {
      fileKey: n || "",
      libraryKey: e.library_key
    });
  }, [t, n]);
  let x = useCallback(() => {
    e?.library && analyticsEventManager.trackDefinedEvent("ds_import.library_used_in_generation", {
      fileKey: n || "",
      libraryKey: e.library.library_key
    });
    t(null);
  }, [t, n, e]);
  let m = useCallback(n => {
    e && t({
      ...e,
      frozen: n
    });
  }, [e, t]);
  return {
    libraryImport: e,
    createLibraryImport: l,
    stashLibraryImport: x,
    setFrozenOnLibaryImport: m
  };
}
export function $$v0() {
  let [e, t] = useAtomValueAndSetter(p);
  let [n, i] = useAtomValueAndSetter(f);
  useEffect(() => {
    null === n && (i("loading"), N6().then(e => {
      t(e.data.meta);
      i("loaded");
    }).catch(e => {
      i("error");
    }));
  }, [n, i, t]);
  return {
    allDsImportReadyLibraries: e,
    allDsImportReadyLibrariesRequestStatus: n
  };
}
export const Bo = $$v0;
export const S1 = $$j1;
export const pF = $$b2;